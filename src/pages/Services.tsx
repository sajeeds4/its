import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './services/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      desc: 'Custom websites and web apps (WordPress, Shopify, Wix, React/Vue) built for performance and conversions.',
      link: '/services/web-development',
      icon: 'fas fa-globe'
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      desc: 'Odoo, NextERP, RepairShppr and LoadDepot implementations to streamline inventory, finance and operations.',
      link: '/services/erp',
      icon: 'fas fa-cogs'
    },
    {
      id: 'office365-gsuite',
      title: 'Office 365 & Google Workspace',
      desc: 'Migrations, configuration and management for Microsoft 365 and Google Workspace to boost team productivity.',
      link: '/services/office365-gsuite',
      icon: 'fas fa-envelope'
    },
    {
      id: 'ai-automation',
      title: 'AI for Automation',
      desc: 'AI-driven automation and insights to cut costs and accelerate workflows.',
      link: '/services/ai-automation',
      icon: 'fas fa-robot'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      desc: 'Secure, scalable cloud architecture and migrations (AWS / Azure / GCP).',
      link: '/services/cloud',
      icon: 'fas fa-cloud'
    },
    {
      id: 'networking',
      title: 'Networking',
      desc: 'Office and remote networking — secure Wi‑Fi, switches, VPNs and uptime-focused designs.',
      link: '/services/networking',
      icon: 'fas fa-network-wired'
    },
    {
      id: 'data-migration-recovery',
      title: 'Data Migration & Disaster Recovery',
      desc: 'Backups, migrations and DR planning to keep business-critical data safe and available.',
      link: '/services/data-migration-recovery',
      icon: 'fas fa-database'
    },
    {
      id: 'app-development',
      title: 'App Development',
      desc: 'Native and cross-platform mobile apps that extend your digital product offering.',
      link: '/services/app-development',
      icon: 'fas fa-mobile-alt'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Web Development, ERP, Cloud & AI | Aethrix Systems</title>
        <meta 
          name="description" 
          content="Professional IT services including custom web development, ERP solutions (Odoo, NextERP), cloud migration, AI automation, and managed IT support. Serving Long Island businesses with enterprise-grade technology."
        />
        <meta 
          name="keywords" 
          content="IT services Long Island, web development, ERP solutions, Odoo implementation, cloud services, AI automation, custom software development, managed IT support, business technology solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aethrixsystems.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional IT Services & Solutions | Aethrix Systems" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services: custom development, ERP solutions, cloud migration, AI automation, and expert support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aethrixsystems.com/services" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services & Solutions | Aethrix Systems" />
        <meta name="twitter:description" content="Enterprise-grade IT solutions for small and medium businesses: web development, ERP, cloud, AI, and managed support." />
      </Helmet>
      
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

          {/* Our Core Services (dynamic grid overview) */}
          <div className="grid services-grid">
            {services.map((s) => (
              <div className="card" key={s.id}>
                <div className="card-icon" aria-hidden>
                  <i className={s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.link} className="btn btn-outline">Learn more →</Link>
              </div>
            ))}
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
    </>
  );
};

export default Services;
