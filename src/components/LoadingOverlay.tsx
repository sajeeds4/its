import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import './LoadingOverlay.css';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  type?: 'network' | 'data' | 'code' | 'server';
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isVisible, 
  message = 'Processing...', 
  type = 'network' 
}) => {
  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-overlay-content">
        <LoadingSpinner type={type} size="large" />
        <div className="loading-message mt-4">
          <div className="h5 text-white fw-semibold mb-2">{message}</div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="loading-backdrop"></div>
    </div>
  );
};

export default LoadingOverlay;
