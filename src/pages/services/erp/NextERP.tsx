import React from 'react';

const NextERP: React.FC = () => (
  <div className="page-container">
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>NextERP Solutions</h1>
        <p>Deploy and tailor NextERP to streamline operations for retail, distribution, and service businesses.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧩</div>
            <h3>Modular Capabilities</h3>
            <ul>
              <li>Sales & POS</li>
              <li>Inventory & purchasing</li>
              <li>Finance & accounting</li>
              <li>Projects & services</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>Integrations</h3>
            <ul>
              <li>E‑commerce sync</li>
              <li>Payment gateways</li>
              <li>Shipping carriers</li>
              <li>BI & reporting</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Implementation</h3>
            <ul>
              <li>Migrations</li>
              <li>Customization</li>
              <li>Training</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NextERP;
