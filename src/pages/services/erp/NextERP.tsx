import React from 'react';
import SEO from '../../../components/SEO';

const NextERP: React.FC = () => (
  <div className="page-container">
    <SEO
      title="NextERP Implementation | Aethrix Systems"
      description="Deploy and tailor NextERP for retail, distribution, and service operations."
      path="/services/erp/nexterp"
      type="service"
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'ERP', path: '/services/erp-solutions' }, { name: 'NextERP', path: '/services/erp/nexterp' }]}
      jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: 'NextERP Services', provider: { '@type': 'Organization', name: 'Aethrix Systems' }, url: 'https://aethrixsystems.com/services/erp/nexterp' }}
    />
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
