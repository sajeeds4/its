import React from 'react';

const Cloud: React.FC = () => (
  <div className="page-container">
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>Cloud Solutions</h1>
        <p>Design, migrate, and operate secure and scalable cloud infrastructure on AWS, Azure, and Google Cloud.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="service-overview">
          <h2>Cloud Strategy, Migration, and Operations</h2>
          <p>We help you modernize workloads, reduce costs, and improve reliability with best-practice cloud architectures.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Architecture & Design</h3>
            <ul>
              <li>Well-Architected reviews</li>
              <li>Landing zone setup</li>
              <li>Multi-account/org design</li>
              <li>Cost optimization</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Migration</h3>
            <ul>
              <li>Lift-and-shift</li>
              <li>Re-platform / refactor</li>
              <li>Database migration</li>
              <li>Cutover planning</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Security & Compliance</h3>
            <ul>
              <li>Identity & access</li>
              <li>Network segmentation</li>
              <li>Backup & DR</li>
              <li>Monitoring & SIEM</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Operations</h3>
            <ul>
              <li>IaC (Terraform)</li>
              <li>CI/CD pipelines</li>
              <li>Observability</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Plan your migration with experts.</h3>
          <a href="/contact" className="cta-button primary">Get Cloud Assessment</a>
        </div>
      </div>
    </div>
  </div>
);

export default Cloud;
