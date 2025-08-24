import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      {/* Hero / Intro */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h1>Transform Your Business with Expert IT Services</h1>
            <p>
              We provide comprehensive technology solutions designed for small and medium businesses. From web development to ERP systems,
              cloud, AI, and networking, our team delivers enterprise-grade solutions at SMB-friendly prices.
            </p>
          </div>

          {/* Our Core Services (grid overview) */}
          <div className="grid grid-2">
            {/* Web Development */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-globe"></i></div>
              <h3>Web Development</h3>
              <p>
                Custom websites and online solutions tailored to your business needs. Whether it’s WordPress, Shopify, Wix, or a
                custom-built web app, we create user-friendly, scalable platforms that help your business grow online.
              </p>
              <Link to="/services/web-development" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* ERP Solutions */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-cogs"></i></div>
              <h3>ERP Solutions</h3>
              <p>
                We implement and optimize ERP systems like Odoo, NextERP, RepairShppr, and LoadDepot to simplify business management.
                From inventory to finance, our ERP solutions ensure your operations run smoothly and efficiently.
              </p>
              <Link to="/services/erp" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* Office 365 & Google Workspace */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-envelope"></i></div>
              <h3>Office 365 & Google Workspace</h3>
              <p>
                Boost productivity with secure email, calendars, and collaboration tools. We help you set up and manage Microsoft 365 and
                Google Workspace so your team can work smarter, not harder.
              </p>
              <Link to="/services/office365-gsuite" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* AI for Automation */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-robot"></i></div>
              <h3>AI for Automation</h3>
              <p>
                Leverage the power of AI to automate repetitive tasks, generate insights, and optimize workflows. We design AI-driven
                solutions to improve efficiency and cut costs.
              </p>
              <Link to="/services/ai-automation" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* Cloud Solutions */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-cloud"></i></div>
              <h3>Cloud Solutions</h3>
              <p>
                Scale your business with cloud infrastructure that is secure, reliable, and cost-effective. We help you migrate, deploy, and
                maintain cloud environments on AWS, Azure, and Google Cloud.
              </p>
              <Link to="/services/cloud" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* Networking */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-network-wired"></i></div>
              <h3>Networking</h3>
              <p>
                Robust networking solutions for offices and remote teams. From secure Wi‑Fi setups to enterprise-level networks, we ensure
                your team stays connected with maximum uptime.
              </p>
              <Link to="/services/networking" className="btn btn-primary">Learn more →</Link>
            </div>

            {/* Data Migration & Disaster Recovery */}
            <div className="card">
              <div className="card-icon"><i className="fas fa-database"></i></div>
              <h3>Data Migration & Disaster Recovery</h3>
              <p>
                Protect your business with reliable backup, migration, and disaster recovery solutions. We safeguard your data and ensure
                business continuity when it matters most.
              </p>
              <Link to="/services/data-migration-recovery" className="btn btn-primary">Learn more →</Link>
            </div>
          </div>

          {/* Closing Section */}
          <div className="section-header text-center" style={{ marginTop: '3rem' }}>
            <h2>Why Choose Us?</h2>
            <p>
              We combine enterprise-level expertise with the agility of a startup. Our team delivers high-quality solutions at competitive
              prices, ensuring your business stays ahead in the digital age.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started →</Link>
          </div>

          {/* Explore All Services - quick links to all sub-services */}
          <div className="section" style={{ marginTop: '3rem' }}>
            <div className="section-header text-center">
              <h2>Explore all services</h2>
              <p>Jump directly to the specific solution you need.</p>
            </div>
            <div className="grid grid-2">
              <div className="card">
                <h4>Web Development</h4>
                <ul className="service-features">
                  <li><Link to="/services/web-development/wordpress">WordPress Development</Link></li>
                  <li><Link to="/services/web-development/shopify">Shopify Development</Link></li>
                  <li><Link to="/services/web-development/wix">Wix Development</Link></li>
                  <li><Link to="/services/web-development/custom">Custom Web Applications</Link></li>
                </ul>
              </div>
              <div className="card">
                <h4>ERP Solutions</h4>
                <ul className="service-features">
                  <li><Link to="/services/erp/odoo">Odoo</Link></li>
                  <li><Link to="/services/erp/nexterp">NextERP</Link></li>
                  <li><Link to="/services/erp/repairshppr">RepairShppr</Link></li>
                  <li><Link to="/services/erp/loaddepot">LoadDepot</Link></li>
                </ul>
              </div>
              <div className="card">
                <h4>Cloud & Productivity</h4>
                <ul className="service-features">
                  <li><Link to="/services/office365-gsuite">Office 365 & Google Workspace</Link></li>
                  <li><Link to="/services/cloud">Cloud Solutions</Link></li>
                  <li><Link to="/services/networking">Networking</Link></li>
                  <li><Link to="/services/data-migration-recovery">Data Migration & Disaster Recovery</Link></li>
                </ul>
              </div>
              <div className="card">
                <h4>AI & Automation</h4>
                <ul className="service-features">
                  <li><Link to="/services/ai-automation">AI for Automation</Link></li>
                  <li><Link to="/case-studies/ai-analytics">AI Analytics Case Study</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
