import React, { useEffect, useRef } from 'react';
import './CursorEffect.css';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      // Even smoother trail following
      trailX += (mouseX - trailX) * 0.05;
      trailY += (mouseY - trailY) * 0.05;

      cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
      trail.style.transform = `translate3d(${trailX - 15}px, ${trailY - 15}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      trail.style.opacity = '0';
    };

    // Only add cursor effects on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      animateCursor();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on mobile devices
  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div ref={trailRef} className="cursor-trail" />
      <div ref={cursorRef} className="cursor-effect" />
    </>
  );
};

export default CursorEffect;
