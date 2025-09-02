import React from 'react';
import SEO from '../../../components/SEO';

const LoadDepot: React.FC = () => (
  <div className="page-container">
    <SEO
      title="LoadDepot ERP Solutions | Aethrix Systems"
      description="Digital workflows for logistics, dispatching, and fleet operations with LoadDepot integrations."
      path="/services/erp/loaddepot"
      type="service"
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'ERP', path: '/services/erp-solutions' }, { name: 'LoadDepot', path: '/services/erp/loaddepot' }]}
      jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: 'LoadDepot Solutions', provider: { '@type': 'Organization', name: 'Aethrix Systems' }, url: 'https://aethrixsystems.com/services/erp/loaddepot' }}
    />
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
