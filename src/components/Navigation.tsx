import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuHover = (menu: string | null) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <i className="fas fa-laptop-code"></i>
          <span>ITS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Services Mega Menu */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMenuHover('services')}
            onMouseLeave={handleMenuLeave}
          >
            <Link to="/services" className="nav-link">
              Services <i className="fas fa-chevron-down"></i>
            </Link>
            
            {activeMenu === 'services' && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-section">
                    <h4>Web Development</h4>
                    <Link to="/services/web-development/wordpress">WordPress</Link>
                    <Link to="/services/web-development/shopify">Shopify</Link>
                    <Link to="/services/web-development/wix">Wix</Link>
                    <Link to="/services/web-development/custom">Custom Development</Link>
                  </div>
                  
                  <div className="mega-menu-section">
                    <h4>ERP Solutions</h4>
                    <Link to="/services/erp/odoo">Odoo</Link>
                    <Link to="/services/erp/nexterp">NextERP</Link>
                    <Link to="/services/erp/repairshppr">RepairShppr</Link>
                    <Link to="/services/erp/loaddepot">LoadDepot</Link>
                  </div>
                  
                  <div className="mega-menu-section">
                    <h4>Cloud & Enterprise</h4>
                    <Link to="/services/office365-gsuite">Office 365 & Google Suite</Link>
                    <Link to="/services/ai-automation">AI for Automation</Link>
                    <Link to="/services/cloud">Cloud Solutions</Link>
                    <Link to="/services/networking">Networking</Link>
                    <Link to="/services/data-migration-recovery">Data Migration & Recovery</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Mega Menu */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMenuHover('industries')}
            onMouseLeave={handleMenuLeave}
          >
            <Link to="/industries" className="nav-link">
              Industries <i className="fas fa-chevron-down"></i>
            </Link>
            
            {activeMenu === 'industries' && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-section">
                    <h4>Key Industries</h4>
                    <Link to="/industries/retail">Retail</Link>
                    <Link to="/industries/professional-services">Professional Services</Link>
                    <Link to="/industries/healthcare">Healthcare</Link>
                    <Link to="/industries/manufacturing">Manufacturing</Link>
                    <Link to="/industries/small-business">SMBs & Local Businesses</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link nav-cta">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
          <Link to="/industries" onClick={toggleMobileMenu}>Industries</Link>
          <Link to="/case-studies" onClick={toggleMobileMenu}>Case Studies</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
