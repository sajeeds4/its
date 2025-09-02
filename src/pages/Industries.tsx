import React from 'react';
import './industries/Industries.css';

const Industries: React.FC = () => {
  return (
    <div className="industries-page">
      <section className="industry-hero">
        <div className="hero-content">
          <h1>Industries We Serve</h1>
          <p>Specialized technology solutions tailored to meet the unique challenges of different business sectors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Industry Focus</h2>
          </div>
          
          <div className="grid grid-2">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Retail</h3>
              <p>Comprehensive e-commerce and retail management solutions to enhance customer experience and streamline operations.</p>
              <ul className="industry-solutions">
                <li>E-commerce Platforms</li>
                <li>POS Systems</li>
                <li>Inventory Management</li>
                <li>Customer Analytics</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Professional Services</h3>
              <p>Tailored solutions for consulting firms, agencies, and service-based businesses to improve client management.</p>
              <ul className="industry-solutions">
                <li>CRM Systems</li>
                <li>Project Management</li>
                <li>Time Tracking</li>
                <li>Client Portals</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare</h3>
              <p>HIPAA-compliant systems and digital solutions to improve patient care and operational efficiency.</p>
              <ul className="industry-solutions">
                <li>Patient Management</li>
                <li>Appointment Scheduling</li>
                <li>Telemedicine Platforms</li>
                <li>Compliance Solutions</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Manufacturing</h3>
              <p>Industrial automation and supply chain management solutions to optimize production processes.</p>
              <ul className="industry-solutions">
                <li>Supply Chain Management</li>
                <li>Quality Control Systems</li>
                <li>Production Planning</li>
                <li>Equipment Monitoring</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>SMBs & Local Businesses</h3>
              <p>Cost-effective technology solutions designed specifically for small and medium-sized businesses.</p>
              <ul className="industry-solutions">
                <li>Business Websites</li>
                <li>Local SEO</li>
                <li>Social Media Management</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
