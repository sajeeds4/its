import React from 'react';

const CustomWebApp: React.FC = () => (
  <div className="page-container">
    <div className="hero-section case-study-hero">
      <div className="hero-content">
        <div className="case-study-label">Case Study</div>
        <h1>Healthcare Portal Streamlines Patient Management</h1>
        <p>Custom React + Django app reduced admin workload and improved patient satisfaction.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <h2>Impact</h2>
        <ul>
          <li>-50% admin time</li>
          <li>+35% patient satisfaction</li>
          <li>HIPAA-aligned architecture</li>
        </ul>
        <div className="cta-section">
          <a href="/contact" className="cta-button primary">Build Your App</a>
        </div>
      </div>
    </div>
  </div>
);

export default CustomWebApp;
