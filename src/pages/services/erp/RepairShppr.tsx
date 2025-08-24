import React from 'react';

const RepairShppr: React.FC = () => (
  <div className="page-container">
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>RepairShppr Solutions</h1>
        <p>Setup and customization for repair shop management: tickets, inventory, and invoicing in one place.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧰</div>
            <h3>Ticketing & Workflow</h3>
            <ul>
              <li>Intake & diagnostics</li>
              <li>Technician assignment</li>
              <li>Parts usage</li>
              <li>Status updates</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Inventory & POS</h3>
            <ul>
              <li>Stock tracking</li>
              <li>Barcode scanning</li>
              <li>Quotes & invoices</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Optimize your repair shop.</h3>
          <a href="/contact" className="cta-button primary">Get Setup</a>
        </div>
      </div>
    </div>
  </div>
);

export default RepairShppr;
