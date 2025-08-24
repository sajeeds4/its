import React from 'react';

const DataMigrationRecovery: React.FC = () => (
  <div className="page-container">
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>Data Migration & Recovery</h1>
        <p>Secure migrations, reliable backups, and fast disaster recovery to protect your business data.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔁</div>
            <h3>Migration Services</h3>
            <ul>
              <li>Database migration</li>
              <li>File & email migration</li>
              <li>Cloud-to-cloud</li>
              <li>Zero/minimal downtime</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Backup Strategy</h3>
            <ul>
              <li>3-2-1 backups</li>
              <li>Immutable storage</li>
              <li>Policy & automation</li>
              <li>Restore testing</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Disaster Recovery</h3>
            <ul>
              <li>RTO/RPO planning</li>
              <li>Warm/cold standby</li>
              <li>Runbooks & drills</li>
              <li>Compliance reports</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Protect your data today.</h3>
          <a href="/contact" className="cta-button primary">Get a DR Plan</a>
        </div>
      </div>
    </div>
  </div>
);

export default DataMigrationRecovery;
