import React from 'react';

const Odoo: React.FC = () => (
  <div className="page-container">
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
