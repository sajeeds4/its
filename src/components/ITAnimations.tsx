import React, { useEffect, useRef } from 'react';
import './ITAnimations.css';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = '' 
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

interface CodeBlockProps {
  lines: string[];
  className?: string;
}

export const AnimatedCodeBlock: React.FC<CodeBlockProps> = ({ lines, className = '' }) => {
  return (
    <div className={`animated-code-block ${className}`}>
      {lines.map((line, index) => (
        <div 
          key={index} 
          className="code-line-animated"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <span className="line-number">{(index + 1).toString().padStart(2, '0')}</span>
          <span className="code-content">{line}</span>
        </div>
      ))}
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  direction = 'up',
  duration = 3,
  delay = 0 
}) => {
  return (
    <div 
      className={`floating-element floating-${direction}`}
      style={{ 
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

interface DataStreamProps {
  count?: number;
  className?: string;
}

export const DataStream: React.FC<DataStreamProps> = ({ count = 5, className = '' }) => {
  return (
    <div className={`data-stream ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <div 
          key={index}
          className="data-bit"
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );
};

interface NetworkVisualizationProps {
  nodeCount?: number;
  className?: string;
}

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ 
  nodeCount = 6, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`network-visualization ${className}`}>
      <div className="network-center">
        <div className="center-node"></div>
      </div>
      
      {Array.from({ length: nodeCount }, (_, index) => {
        const angle = (360 / nodeCount) * index;
        return (
          <div 
            key={index}
            className="network-node-container"
            style={{ 
              transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            <div className="network-node"></div>
            <div className="network-connection"></div>
          </div>
        );
      })}
    </div>
  );
};

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`holographic-card ${className}`}>
      <div className="holographic-content">
        {children}
      </div>
      <div className="holographic-overlay"></div>
    </div>
  );
};
