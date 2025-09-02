import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Simple top progress bar that animates on route changes
const TopProgressBar: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start progress on location change
    setVisible(true);
    setWidth(10);
    // Animate toward 90%
    const start = performance.now();
    const step = (t: number) => {
      const elapsed = t - start;
      const target = 90 - Math.exp(-elapsed / 500) * 80; // ease toward 90
      setWidth(Math.min(90, target));
      timerRef.current = requestAnimationFrame(step) as unknown as number;
    };
    timerRef.current = requestAnimationFrame(step) as unknown as number;

    // Complete shortly after paint
    const complete = window.setTimeout(() => {
      setWidth(100);
      const hide = window.setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 200);
      return () => window.clearTimeout(hide);
    }, 350);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      window.clearTimeout(complete);
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: visible ? 3 : 0,
        width: `${width}%`,
        background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
        boxShadow: '0 0 10px rgba(99,102,241,0.4)',
        transition: 'width 200ms ease, height 200ms ease',
        zIndex: 2000,
      }}
    />
  );
};

export default TopProgressBar;
