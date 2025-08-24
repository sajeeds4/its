import React, { useEffect, useRef } from 'react';
import './NeuralBackground.css';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const NUM_NODES_DESKTOP = 80;
const NUM_NODES_MOBILE = 40;
const MAX_CONNECTION_DISTANCE = 160; // px

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initNodes();
    };

    const initNodes = () => {
      const count = width < 700 ? NUM_NODES_MOBILE : NUM_NODES_DESKTOP;
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.1 + 0.4,
        });
      }
      nodesRef.current = nodes;
    };

    let isVisible = true;
    const draw = () => {
      if (!ctx) return;
      if (!isVisible) {
        // schedule next frame but keep it light; don't run heavy math while hidden
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      // subtle background tint (near-transparent)
      // ctx.fillStyle = 'rgba(240,245,255,0.02)';
      // ctx.fillRect(0, 0, width, height);

      const nodes = nodesRef.current;

      // move nodes
      for (let n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_CONNECTION_DISTANCE) {
            const alpha = 0.12 * (1 - dist / MAX_CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79,70,229,${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // pointer interactions: attract nearby nodes and draw lines
      const pointer = pointerRef.current;
      if (pointer.active) {
        for (let n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_CONNECTION_DISTANCE) {
            const pull = (1 - dist / MAX_CONNECTION_DISTANCE) * 0.6;
            n.vx -= (dx / dist) * 0.02 * pull;
            n.vy -= (dy / dist) * 0.02 * pull;
            // draw highlight line
            const alpha = 0.18 * (1 - dist / MAX_CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79,70,229,${alpha})`;
            ctx.lineWidth = 1.25;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (let n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(79,70,229,0.9)';
        ctx.globalAlpha = 0.9;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(draw);
    };

    // mouse handlers
    const handleMove = (e: MouseEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;
    };
    const handleLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.x = -9999;
      pointerRef.current.y = -9999;
    };

    // touch support handler ref so it can be removed later
    const handleTouchMove = (ev: TouchEvent) => {
      const t = ev.touches[0];
      if (t) {
        pointerRef.current.x = t.clientX;
        pointerRef.current.y = t.clientY;
        pointerRef.current.active = true;
      }
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible && !animationRef.current) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleLeave);
    document.addEventListener('visibilitychange', handleVisibility);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('touchmove', handleTouchMove as EventListener);
      window.removeEventListener('touchend', handleLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="neural-bg" aria-hidden>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default NeuralBackground;
