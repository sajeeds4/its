import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
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
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon"><i className="fas fa-globe"></i></div>
              <h3>Web Development</h3>
              <p>Custom websites and e-commerce solutions that help you establish a strong online presence and drive business growth.</p>
              <Link to="/services/web-development" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="card">
              <div className="card-icon"><i className="fas fa-cogs"></i></div>
              <h3>ERP Solutions</h3>
              <p>Streamline your business operations with integrated ERP systems that connect all aspects of your business.</p>
              <Link to="/services/erp" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="card">
              <div className="card-icon"><i className="fas fa-cloud"></i></div>
              <h3>Cloud & IT Services</h3>
              <p>Secure, reliable cloud infrastructure and IT services that keep your business running smoothly.</p>
              <Link to="/services/cloud" className="btn btn-outline">Learn More</Link>
            </div>
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
          
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Understand</h3>
              <p>We analyze your business needs and current technology landscape</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Design</h3>
              <p>Create tailored solutions that align with your goals and budget</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Deploy</h3>
              <p>Implement solutions with minimal disruption to your operations</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Support</h3>
              <p>Provide ongoing maintenance and optimization services</p>
            </div>
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
