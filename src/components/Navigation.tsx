import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navRef = useRef<HTMLDivElement>(null);
  // Scroll shadow effect
  useEffect(() => {
    // Set CSS var for nav height so pages can offset content dynamically
    const setNavHeightVar = () => {
      const el = navRef.current;
      if (el) {
        const h = Math.ceil(el.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--nav-height', `${h}px`);
      }
    };
    setNavHeightVar();
    window.addEventListener('resize', setNavHeightVar);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // If hero section is present and in view, set isHero
      const hero = document.querySelector('.hero-section');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsHero(rect.top <= 0 && rect.bottom > 80); // 80px for navbar height
      } else {
        setIsHero(false);
      }
      // Hide nav on scroll down, show on scroll up
      if (window.scrollY > 60) {
        if (window.scrollY > lastScrollY.current) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      } else {
        setHideNav(false);
      }
      lastScrollY.current = window.scrollY;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ensure nav height stays in sync on mount/resize
  useEffect(() => {
    const setNavHeightVar = () => {
      const el = navRef.current;
      if (el) {
        const h = Math.ceil(el.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--nav-height', `${h}px`);
        if (window.innerWidth < 720) {
          document.documentElement.style.setProperty('--nav-height-mobile', `${h}px`);
        }
      }
    };
    // run on mount
    setNavHeightVar();
    // run again after layout stabilizes (fonts, icons)
    const t = window.setTimeout(setNavHeightVar, 300);
    window.addEventListener('resize', setNavHeightVar);
    return () => {
      window.removeEventListener('resize', setNavHeightVar);
      clearTimeout(t);
    };
  }, []);


  // Timer for delayed close (useRef for browser compatibility)
  const closeMenuTimer = React.useRef<number | null>(null);

  const handleMenuHover = (menu: string | null) => {
    if (closeMenuTimer.current) {
      clearTimeout(closeMenuTimer.current);
      closeMenuTimer.current = null;
    }
    setActiveMenu(menu);
  };

  
  const handleMenuLeave = () => {
    closeMenuTimer.current = window.setTimeout(() => setActiveMenu(null), 120);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Keyboard navigation for dropdowns
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, menu: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  return (
  <nav className={`navbar${scrolled ? ' scrolled' : ''}${isHero && !scrolled ? ' transparent' : ''}${hideNav ? ' nav-hide' : ''}`}
      aria-label="Main Navigation"
      ref={navRef}
    >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" tabIndex={0} aria-label="Home">
          <i className="fas fa-laptop-code logo-anim"></i>
          <span>Aethrix Systems</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          <Link to="/" className={`nav-link${window.location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          
          {/* Services Mega Menu */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMenuHover('services')}
            onMouseLeave={handleMenuLeave}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'services'}
            onKeyDown={e => handleKeyDown(e, 'services')}
          >
            <Link to="/services" className={`nav-link${window.location.pathname.startsWith('/services') ? ' active' : ''}`}>Services <i className="fas fa-chevron-down"></i></Link>
            {activeMenu === 'services' && (
              <div 
                className="mega-menu"
                onMouseEnter={() => handleMenuHover('services')}
                onMouseLeave={handleMenuLeave}
              >
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
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={activeMenu === 'industries'}
            onKeyDown={e => handleKeyDown(e, 'industries')}
          >
            <Link to="/industries" className={`nav-link${window.location.pathname.startsWith('/industries') ? ' active' : ''}`}>Industries <i className="fas fa-chevron-down"></i></Link>
            {activeMenu === 'industries' && (
              <div 
                className="mega-menu"
                onMouseEnter={() => handleMenuHover('industries')}
                onMouseLeave={handleMenuLeave}
              >
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

          <Link to="/case-studies" className={`nav-link${window.location.pathname.startsWith('/case-studies') ? ' active' : ''}`}>Case Studies</Link>
          <Link to="/about" className={`nav-link${window.location.pathname.startsWith('/about') ? ' active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link${window.location.pathname.startsWith('/contact') ? ' active' : ''}`}>Contact</Link>
          <Link to="/quick-quote" className="main-cta">Get a Quote</Link>

          {/* ...user avatar and dropdown removed as requested... */}
        </div>

        {/* Mobile Menu Button */}
        <div className={`nav-toggle${isMobileMenuOpen ? ' open' : ''}`} onClick={toggleMobileMenu} aria-label="Open menu" tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleMobileMenu()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu mobile-menu-anim">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
          <Link to="/industries" onClick={toggleMobileMenu}>Industries</Link>
          <Link to="/case-studies" onClick={toggleMobileMenu}>Case Studies</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
          <Link to="/quick-quote" onClick={toggleMobileMenu} className="main-cta">Get a Quote</Link>
          <Link to="/services/web-development/wix" onClick={toggleMobileMenu}>Wix</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
