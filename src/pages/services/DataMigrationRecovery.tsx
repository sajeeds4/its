import React from 'react';
import SEO from '../../components/SEO';

const DataMigrationRecovery: React.FC = () => (
  <div className="page-container">
    <SEO
      title="Data Migration & Disaster Recovery | Aethrix Systems"
      description="Secure data migrations, 3‑2‑1 backups, immutable storage, and disaster recovery with RTO/RPO planning."
      path="/services/data-migration-recovery"
      type="service"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Data Migration & Recovery', path: '/services/data-migration-recovery' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Data Migration & Recovery',
        serviceType: 'IT Services',
        provider: { '@type': 'Organization', name: 'Aethrix Systems' },
        url: 'https://aethrixsystems.com/services/data-migration-recovery',
      }}
    />
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
