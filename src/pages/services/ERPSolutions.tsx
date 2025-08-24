import React from 'react';
import { Link } from 'react-router-dom';

const ERPSolutions: React.FC = () => {
  return (
    <div className="erp-solutions-page">
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h1>ERP Solutions</h1>
            <p>Comprehensive enterprise resource planning systems to streamline your business operations</p>
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
              </div>
              <h3>LoadDepot</h3>
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
