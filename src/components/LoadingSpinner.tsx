import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'network' | 'data' | 'code' | 'server';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  type = 'network' 
}) => {
  const renderSpinner = () => {
    switch (type) {
      case 'network':
        return (
          <div className={`loading-network ${size}`}>
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-connections"></div>
          </div>
        );
      
      case 'data':
        return (
          <div className={`loading-data ${size}`}>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
          </div>
        );
      
      case 'code':
        return (
          <div className={`loading-code ${size}`}>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-cursor"></div>
          </div>
        );
      
      case 'server':
        return (
          <div className={`loading-server ${size}`}>
            <div className="server-rack">
              <div className="server-light"></div>
              <div className="server-light"></div>
              <div className="server-light"></div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`loading-spinner ${size}`}>
            <div className="spinner-ring"></div>
          </div>
        );
    }
  };

  return (
    <div className="loading-container">
      {renderSpinner()}
    </div>
  );
};

export default LoadingSpinner;
