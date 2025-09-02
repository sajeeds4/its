import React from 'react';
import './ModernIcons.css';

interface IconProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white' | 'gradient';
  className?: string;
}

// Web Development Icon
export const WebDevIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <rect x="2" y="4" width="20" height="16" rx="3" className="icon-shape" />
      <path d="M8 8L5 12L8 16" strokeLinecap="round" strokeLinejoin="round" className="icon-accent" />
      <path d="M16 8L19 12L16 16" strokeLinecap="round" strokeLinejoin="round" className="icon-accent" />
      <path d="M12 6V10M12 14V18" strokeLinecap="round" className="icon-detail" />
    </svg>
  </div>
);

// Cloud Services Icon
export const CloudIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <path d="M18 10C18.7956 10 19.5587 10.3161 20.1213 10.8787C20.6839 11.4413 21 12.2044 21 13C21 13.7956 20.6839 14.5587 20.1213 15.1213C19.5587 15.6839 18.7956 16 18 16H7C6.20435 16 5.44129 15.6839 4.87868 15.1213C4.31607 14.5587 4 13.7956 4 13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10" className="icon-shape" />
      <path d="M12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10H18C18.7956 10 19.5587 10.3161 20.1213 10.8787C20.6839 11.4413 21 12.2044 21 13C21 13.7956 20.6839 14.5587 20.1213 15.1213C19.5587 15.6839 18.7956 16 18 16H7C6.20435 16 5.44129 15.6839 4.87868 15.1213C4.31607 14.5587 4 13.7956 4 13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7H12Z" className="icon-accent" />
      <path d="M8 12H16M10 14H14" strokeLinecap="round" className="icon-detail" />
    </svg>
  </div>
);

// ERP Solutions Icon
export const ERPIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <rect x="3" y="4" width="18" height="16" rx="2" className="icon-shape" />
      <path d="M7 8H17M7 12H17M7 16H13" strokeLinecap="round" className="icon-accent" />
      <circle cx="12" cy="12" r="2" className="icon-detail" />
      <path d="M9 9L15 15M15 9L9 15" strokeLinecap="round" strokeLinejoin="round" className="icon-highlight" />
    </svg>
  </div>
);

// AI & Automation Icon
export const AIIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <circle cx="12" cy="12" r="8" className="icon-shape" />
      <path d="M12 2V6M12 18V22M22 12H18M6 12H2" strokeLinecap="round" className="icon-accent" />
      <path d="M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" strokeLinecap="round" className="icon-detail" />
      <circle cx="12" cy="12" r="3" className="icon-highlight" />
    </svg>
  </div>
);

// Data Migration Icon
export const DataIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <rect x="2" y="3" width="20" height="6" rx="2" className="icon-shape" />
      <rect x="2" y="9" width="20" height="6" rx="2" className="icon-accent" />
      <rect x="2" y="15" width="20" height="6" rx="2" className="icon-detail" />
      <path d="M6 6H6.01M6 12H6.01M6 18H6.01" strokeLinecap="round" strokeLinejoin="round" className="icon-highlight" />
      <path d="M18 6L16 8L18 10M18 12L16 14L18 16" strokeLinecap="round" strokeLinejoin="round" className="icon-flow" />
    </svg>
  </div>
);

// Networking Icon
export const NetworkIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <circle cx="5" cy="5" r="3" className="icon-shape" />
      <circle cx="19" cy="5" r="3" className="icon-accent" />
      <circle cx="5" cy="19" r="3" className="icon-detail" />
      <circle cx="19" cy="19" r="3" className="icon-highlight" />
      <circle cx="12" cy="12" r="2" className="icon-center" />
      <path d="M8 5H16M8 19H16M5 8V16M19 8V16M9.5 10.5L14.5 13.5M9.5 13.5L14.5 10.5" strokeLinecap="round" className="icon-flow" />
    </svg>
  </div>
);

// Security Icon
export const SecurityIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <path d="M12 2L3 7V13C3 17.55 6.84 21.74 12 22C17.16 21.74 21 17.55 21 13V7L12 2Z" className="icon-shape" />
      <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" className="icon-accent" />
      <circle cx="12" cy="12" r="1" className="icon-highlight" />
    </svg>
  </div>
);

// Analytics Icon
export const AnalyticsIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <path d="M3 12L9 6L13 10L21 2" strokeLinecap="round" strokeLinejoin="round" className="icon-accent" />
      <path d="M21 6V2H17" strokeLinecap="round" strokeLinejoin="round" className="icon-detail" />
      <rect x="3" y="16" width="4" height="6" rx="1" className="icon-shape" />
      <rect x="10" y="12" width="4" height="10" rx="1" className="icon-highlight" />
      <rect x="17" y="8" width="4" height="14" rx="1" className="icon-flow" />
    </svg>
  </div>
);

// Support Icon
export const SupportIcon: React.FC<IconProps> = ({ size = 'medium', color = 'primary', className = '' }) => (
  <div className={`modern-icon ${size} ${color} ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
      <circle cx="12" cy="12" r="9" className="icon-shape" />
      <path d="M14.31 8L20.05 4.24C19.16 3.1 18.06 2.16 16.81 1.47L12.5 7.5C13.15 7.5 13.77 7.71 14.31 8Z" className="icon-accent" />
      <path d="M8 14.31L4.24 20.05C3.1 19.16 2.16 18.06 1.47 16.81L7.5 12.5C7.5 13.15 7.71 13.77 8 14.31Z" className="icon-detail" />
      <circle cx="12" cy="12" r="4" className="icon-highlight" />
      <path d="M15 9L9 15M9 9L15 15" strokeLinecap="round" strokeLinejoin="round" className="icon-center" />
    </svg>
  </div>
);

export default {
  WebDevIcon,
  CloudIcon,
  ERPIcon,
  AIIcon,
  DataIcon,
  NetworkIcon,
  SecurityIcon,
  AnalyticsIcon,
  SupportIcon,
};
