import React from 'react';

const LoadDepot: React.FC = () => (
  <div className="page-container">
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>LoadDepot Solutions</h1>
        <p>Digital workflows for logistics, dispatching, and fleet operations with LoadDepot integrations.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Dispatch & Tracking</h3>
            <ul>
              <li>Load assignment</li>
              <li>Route optimization</li>
              <li>Driver app sync</li>
              <li>Real-time tracking</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📃</div>
            <h3>Billing & Compliance</h3>
            <ul>
              <li>eBOL & docs</li>
              <li>Invoicing</li>
              <li>Compliance reports</li>
              <li>Integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadDepot;
