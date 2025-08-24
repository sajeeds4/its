
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo-minimal">ITS</span>
        </div>
        <nav className="footer-nav-minimal">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-social-minimal">
          <a href="#" aria-label="LinkedIn" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter" title="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="GitHub" title="GitHub"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="footer-bottom-minimal">
        <span>© {currentYear} ITS. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
