import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <i className="fas fa-laptop-code"></i>
                <span>ITS</span>
              </div>
              <p className="footer-description">
                Innovative Technology Solutions delivering cutting-edge IT services 
                to transform your business with expert execution and cost-effective solutions.
              </p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/web-development">Web Development</Link></li>
                <li><Link to="/services/erp">ERP Solutions</Link></li>
                <li><Link to="/services/cloud">Cloud Solutions</Link></li>
                <li><Link to="/services/ai-automation">AI Automation</Link></li>
                <li><Link to="/services/networking">Networking</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> hello@its-solutions.com</p>
                <p><i className="fas fa-phone"></i> (555) 123-4567</p>
                <p><i className="fas fa-map-marker-alt"></i> Long Island, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} ITS - Innovative Technology Solutions. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
