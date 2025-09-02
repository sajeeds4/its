import React from 'react';
import SEO from '../../../components/SEO';

const Odoo: React.FC = () => (
  <div className="page-container">
    <SEO
      title="Odoo ERP Implementation & Customization | Aethrix Systems"
      description="Implement, customize, and integrate Odoo across sales, inventory, manufacturing, and finance."
      path="/services/erp/odoo"
      type="service"
      breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'ERP', path: '/services/erp-solutions' }, { name: 'Odoo', path: '/services/erp/odoo' }]}
      jsonLd={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Odoo ERP Services', provider: { '@type': 'Organization', name: 'Aethrix Systems' }, url: 'https://aethrixsystems.com/services/erp/odoo' }}
    />
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>Odoo ERP Services</h1>
        <p>Implement, customize, and integrate Odoo to unify your operations across sales, inventory, manufacturing, and finance.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3>Manufacturing & Inventory</h3>
            <ul>
              <li>BOM & work orders</li>
              <li>MRP scheduling</li>
              <li>Barcode & lots/serials</li>
              <li>Multi-warehouse</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Sales & CRM</h3>
            <ul>
              <li>Lead management</li>
              <li>Quotations & eSign</li>
              <li>Customer portal</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Accounting</h3>
            <ul>
              <li>Invoicing & payments</li>
              <li>Bank sync</li>
              <li>Taxes & compliance</li>
              <li>Reporting</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Start your Odoo journey.</h3>
          <a href="/contact" className="cta-button primary">Talk to Odoo Experts</a>
        </div>
      </div>
    </div>
  </div>
);

export default Odoo;
