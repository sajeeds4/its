import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ERPSolutions: React.FC = () => {
  return (
    <div className="erp-solutions-page">
      <SEO
        title="ERP Solutions (Odoo, NextERP, LoadDepot, RepairShppr) | Aethrix Systems"
        description="Implement and customize ERP systems to unify operations: CRM, inventory, finance, HR, and logistics."
        path="/services/erp-solutions"
        type="service"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'ERP Solutions', path: '/services/erp-solutions' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'ERP Solutions',
          provider: { '@type': 'Organization', name: 'Aethrix Systems' },
          serviceType: 'ERP Implementation',
          areaServed: { '@type': 'Place', name: 'Global' },
          url: 'https://aethrixsystems.com/services/erp-solutions',
        }}
      />
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h1>ERP Solutions</h1>
            <p>Implement and customize ERP platforms to centralize finance, inventory, CRM, and operations in one system.</p>
          </div>
          <div className="readers" style={{ marginBottom: '1rem' }}>
            <p>
              We deploy modern ERP systems with a practical approach: map real processes, configure before customizing, and integrate
              only where it creates measurable value. Our team helps you go live faster with change management and training that stick.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Odoo ERP</h3>
              <p>Complete business management suite with integrated modules for all your business needs.</p>
              <ul className="service-features">
                <li>CRM & Sales Management</li>
                <li>Inventory & Warehouse</li>
                <li>Accounting & Finance</li>
                <li>HR & Payroll</li>
              </ul>
              <Link to="/services/erp/odoo" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>NextERP</h3>
              <p>Modern ERP solution designed for growing businesses with scalable modules and intuitive interface.</p>
              <ul className="service-features">
                <li>Project Management</li>
                <li>Financial Planning</li>
                <li>Supply Chain</li>
                <li>Business Intelligence</li>
              </ul>
              <Link to="/services/erp/nexterp" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>RepairShppr</h3>
              <p>Specialized ERP solution for repair shops and service businesses to manage operations efficiently.</p>
              <ul className="service-features">
                <li>Work Order Management</li>
                <li>Parts Inventory</li>
                <li>Customer Tracking</li>
                <li>Billing & Invoicing</li>
              </ul>
              <Link to="/services/erp/repairshppr" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-truck"></i>

                  <div className="section" style={{ marginTop: '1.5rem' }}>
                    <h2>Implementation approach</h2>
                    <ol>
                      <li><strong>Blueprint:</strong> workshops to align processes and reporting with out‑of‑the‑box modules.</li>
                      <li><strong>Configure:</strong> roles, approvals, chart of accounts, warehouses, and taxes before custom code.</li>
                      <li><strong>Integrate:</strong> connect to web, CRM, and <Link to="/services/data-migration-recovery">data migration</Link> pipelines.</li>
                      <li><strong>Adopt:</strong> training, hypercare, and KPIs so go‑live sticks.</li>
                    </ol>
                  </div>
              </div>
              <h3>LoadDepot</h3>

          <div className="section" style={{ marginTop: '1.5rem' }}>
            <h2>Implementation approach</h2>
            <ol>
              <li><strong>Blueprint:</strong> workshops to align processes and reporting with out‑of‑the‑box modules.</li>
              <li><strong>Configure:</strong> roles, approvals, chart of accounts, warehouses, and taxes before custom code.</li>
              <li><strong>Integrate:</strong> connect to web, CRM, and <Link to="/services/data-migration-recovery">data migration</Link> pipelines.</li>
              <li><strong>Adopt:</strong> training, hypercare, and KPIs so go‑live sticks.</li>
            </ol>
          </div>
              <p>Transportation and logistics management system for freight and shipping companies.</p>
              <ul className="service-features">
                <li>Load Management</li>
                <li>Driver Tracking</li>
                <li>Route Optimization</li>
                <li>Fleet Management</li>
              </ul>
              <Link to="/services/erp/loaddepot" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPSolutions;
