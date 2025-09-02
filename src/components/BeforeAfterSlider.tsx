import React, { useRef, useState } from 'react';

type Props = {
  beforeSrc?: string;
  afterSrc?: string;
  altBefore?: string;
  altAfter?: string;
  height?: number;
};

const BeforeAfterSlider: React.FC<Props> = ({ beforeSrc, afterSrc, altBefore, altAfter, height = 360 }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const onPointer = (e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  };

  const BeforeLayer = beforeSrc ? (
    <img src={beforeSrc} alt={altBefore || 'Before'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
  ) : (
    <div aria-label={altBefore || 'Before'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg,#e5e7eb,#cbd5e1)', display:'flex', alignItems:'center', justifyContent:'center', color:'#374151', fontWeight:700 }}>Before</div>
  );

  const AfterLayer = afterSrc ? (
    <img src={afterSrc} alt={altAfter || 'After'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  ) : (
    <div aria-label={altAfter || 'After'} style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#dbeafe,#c7d2fe)', display:'flex', alignItems:'center', justifyContent:'center', color:'#1f2937', fontWeight:700 }}>After</div>
  );

  return (
    <div
      ref={containerRef}
      className="position-relative rounded overflow-hidden border"
      style={{ height, touchAction: 'none', userSelect: 'none' }}
      onPointerDown={onPointer}
      onPointerMove={(e) => e.buttons === 1 && onPointer(e)}
    >
      {BeforeLayer}
      <div style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden' }} aria-hidden>
        {AfterLayer}
      </div>
      <div
        role="separator"
        aria-label="Comparison position"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pos}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 2));
          if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 2));
        }}
        className="position-absolute top-0" 
        style={{ left: `calc(${pos}% - 1px)`, height: '100%', width: 2, background: 'rgba(99,102,241,0.9)', boxShadow: '0 0 12px rgba(99,102,241,0.3)' }}
      >
        <div className="position-absolute top-50 start-50 translate-middle bg-primary text-white rounded px-2 py-1" style={{ fontSize: 12 }}>
          ⇆
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
