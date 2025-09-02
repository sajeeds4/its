import React from 'react';
import './AethrixLogo.css';

interface AethrixLogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

const AethrixLogo: React.FC<AethrixLogoProps> = ({ 
  size = 'medium', 
  variant = 'full',
  className = '' 
}) => {
  const logoIcon = (
    <div className={`aethrix-logo-icon ${size}`}>
      <div className="logo-cube">
        <div className="cube-face cube-front">
          <div className="cube-grid">
            <div className="grid-dot"></div>
            <div className="grid-dot"></div>
            <div className="grid-dot"></div>
            <div className="grid-dot"></div>
          </div>
        </div>
        <div className="cube-face cube-back">
          <div className="cube-circuit">
            <div className="circuit-line circuit-h"></div>
            <div className="circuit-line circuit-v"></div>
          </div>
        </div>
        <div className="cube-face cube-right">
          <div className="cube-pattern">
            <div className="pattern-line"></div>
            <div className="pattern-line"></div>
            <div className="pattern-line"></div>
          </div>
        </div>
        <div className="cube-face cube-left">
          <div className="cube-network">
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-connection"></div>
          </div>
        </div>
        <div className="cube-face cube-top">
          <div className="cube-data">
            <div className="data-stream"></div>
            <div className="data-stream"></div>
          </div>
        </div>
        <div className="cube-face cube-bottom">
          <div className="cube-core">
            <div className="core-pulse"></div>
          </div>
        </div>
      </div>
      <div className="logo-glow"></div>
    </div>
  );

  const logoText = (
    <div className={`aethrix-logo-text ${size}`}>
      <span className="logo-aethrix">
        <span className="logo-ae">Ae</span>
        <span className="logo-thrix">thrix</span>
      </span>
      <span className="logo-systems">Systems</span>
    </div>
  );

  const renderLogo = () => {
    switch (variant) {
      case 'icon':
        return logoIcon;
      case 'text':
        return logoText;
      default:
        return (
          <div className={`aethrix-logo-full ${size} ${className}`}>
            {logoIcon}
            {logoText}
          </div>
        );
    }
  };

  return (
    <div className={`aethrix-logo ${variant} ${className}`}>
      {renderLogo()}
    </div>
  );
};

export default AethrixLogo;
