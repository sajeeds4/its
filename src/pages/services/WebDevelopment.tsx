
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const WebDevelopment: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1>Web Development Services</h1>
          <p>Custom websites and digital experiences that drive results for your business</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-overview glass-card">
            <h2>Comprehensive Web Solutions</h2>
            <p>From simple informational websites to complex e-commerce platforms and custom web applications, we deliver high-performance web solutions tailored to your business goals.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card card-3d">
              <div className="feature-icon">🏆</div>
              <h3>WordPress Development</h3>
              <p>Custom WordPress websites with powerful features and easy content management.</p>
              <Link to="/services/web-development/wordpress" className="cta-button">Learn More</Link>
            </div>

            <div className="feature-card card-3d">
              <div className="feature-icon">🛒</div>
              <h3>Shopify Development</h3>
              <p>High-converting Shopify stores that boost your online sales and customer experience.</p>
              <Link to="/services/web-development/shopify" className="cta-button">Learn More</Link>
            </div>

            <div className="feature-card card-3d">
              <div className="feature-icon">🎨</div>
              <h3>Wix Development</h3>
              <p>Professional Wix websites with custom design and advanced functionality.</p>
              <Link to="/services/web-development/wix" className="cta-button">Learn More</Link>
            </div>

            <div className="feature-card card-3d">
              <div className="feature-icon">⚙️</div>
              <h3>Custom Web Applications</h3>
              <p>Bespoke web applications built with modern frameworks like React, Vue, and Angular.</p>
              <Link to="/services/web-development/custom" className="cta-button">Learn More</Link>
            </div>
          </div>

          <div className="cta-section glass-card">
            <h3>Ready to start your web project?</h3>
            <Link to="/contact" className="cta-button primary">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
