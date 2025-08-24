import React from 'react';

const ERPassessment: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>ERP Readiness Assessment</h1>
        <p>Evaluate your processes and readiness for ERP implementation.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>Assessment Areas</h2>
        <ul>
          <li>Current systems</li>
          <li>Process maturity</li>
          <li>Data readiness</li>
        </ul>
        <a href="/contact" className="cta-button primary">Start Assessment</a>
      </div>
    </div>
  </div>
);

export default ERPassessment;
