import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './services/Services.css';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="home">
  {/* Hero Section (Slider) */}
  <Hero />

      {/* Services Overview */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Services</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {[
              {
                id: 'website-development',
                title: 'Website Development',
                desc: 'All-in-one website solutions: custom sites, WordPress, Shopify, Wix, e-commerce, and more — tailored for your business.',
                link: '/services/web-development',
                icon: 'fas fa-globe'
              },
              { id: 'erp', title: 'ERP Solutions', desc: 'Streamline your business operations with integrated ERP systems that connect all aspects of your business.', link: '/services/erp', icon: 'fas fa-cogs' },
              { id: 'cloud', title: 'Cloud & IT Services', desc: 'Secure, reliable cloud infrastructure and IT services that keep your business running smoothly.', link: '/services/cloud', icon: 'fas fa-cloud' },
              { id: 'networking', title: 'Networking', desc: 'Robust, secure networking for offices, remote teams, and hybrid work.', link: '/services/networking', icon: 'fas fa-network-wired' },
              { id: 'data-migration', title: 'Data Migration & Recovery', desc: 'Safe, efficient data migration and disaster recovery solutions.', link: '/services/data-migration-recovery', icon: 'fas fa-database' },
              { id: 'ai-automation', title: 'AI & Automation', desc: 'AI-powered automation, chatbots, and workflow optimization.', link: '/services/ai-automation', icon: 'fas fa-robot' },
              { id: 'office365', title: 'Office365 & GSuite', desc: 'Cloud productivity, email, and collaboration setup and support.', link: '/services/office365-gsuite', icon: 'fas fa-envelope-open-text' }
            ].map((s) => (
              <div className="card" key={s.id}>
                <div className="card-icon"><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.link} className="btn btn-outline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Industries We Serve</h2>
            <p>Specialized solutions for diverse business sectors</p>
          </div>
          
          <div className="grid grid-4">
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h4>Retail</h4>
              <p>E-commerce platforms and POS systems</p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Professional Services</h4>
              <p>CRM and project management solutions</p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4>Healthcare</h4>
              <p>HIPAA-compliant systems and workflows</p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h4>Manufacturing</h4>
              <p>Inventory and supply chain management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2>How We Transform Businesses</h2>
            <p>Our proven methodology for delivering exceptional results</p>
          </div>
          
          <div className="process-grid responsive-steps">
            {[
              { num: '01', title: 'Understand', desc: 'We analyze your business needs and current technology landscape' },
              { num: '02', title: 'Design', desc: 'Create tailored solutions that align with your goals and budget' },
              { num: '03', title: 'Deploy', desc: 'Implement solutions with minimal disruption to your operations' },
              { num: '04', title: 'Support', desc: 'Provide ongoing maintenance and optimization services' }
            ].map((s) => (
              <div className="process-step centered" key={s.num}>
                <div className="process-number badge">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our technology solutions can drive your success</p>
              <div className="cta-buttons">
                <a href="/case-studies" className="btn btn-primary">View Success Stories</a>
                <a href="/contact" className="btn btn-secondary">Start Your Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
