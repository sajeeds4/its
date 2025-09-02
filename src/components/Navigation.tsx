import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AethrixLogo from './AethrixLogo';
import './Navigation.css';
import '../styles/glassmorphism.css';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  // Scroll effect and nav height calculation
  useEffect(() => {
    const setNavHeightVar = () => {
      const el = navRef.current;
      if (el) {
        const h = Math.ceil(el.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--nav-height', `${h}px`);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
    };

    setNavHeightVar();
    handleScroll();

    window.addEventListener('resize', setNavHeightVar);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', setNavHeightVar);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuToggle = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const servicesMenu = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Custom Web Development', href: '/services/web-development/custom' },
    { name: 'WordPress', href: '/services/wordpress' },
    { name: 'Shopify', href: '/services/shopify' },
    { name: 'Wix', href: '/services/wix' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'AI & Automation', href: '/services/ai-automation' },
    { name: 'ERP Solutions', href: '/services/erp-solutions' },
    { name: 'Networking', href: '/services/networking' },
    { name: 'Office 365 & G Suite', href: '/services/office365-gsuite' },
    { name: 'Data Migration & Recovery', href: '/services/data-migration-recovery' },
  ];

  const industriesMenu = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Professional Services', href: '/industries/professional-services' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Small Business', href: '/industries/small-business' },
  ];

  const resourcesMenu = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled 
          ? 'backdrop-glass shadow-lg border-bottom border-light' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100 py-2">
          {/* Logo */}
          <Link 
            to="/" 
            className="navbar-brand d-flex align-items-center gap-3 text-decoration-none"
          >
            <AethrixLogo size="medium" variant="full" />
          </Link>

          {/* Navigation - Always Visible */}
          <div className="d-flex align-items-center gap-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => <span aria-current={isActive ? 'page' : undefined}>Home</span>}
            </NavLink>

            {/* Services Dropdown */}
            <div className="dropdown position-relative">
              <button
                onClick={() => handleMenuToggle('services')}
                className="nav-link btn btn-link text-decoration-none d-flex align-items-center gap-1 p-0"
              >
                <span>Services</span>
                <svg 
                  className={`dropdown-arrow ${activeMenu === 'services' ? 'rotate-180' : ''}`}
                  width="16" height="16"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`dropdown-menu position-absolute ${activeMenu === 'services' ? 'show' : ''}`}>
                <div className="row g-1 p-2 services-grid">
                  {servicesMenu.map((item) => (
                    <div key={item.href} className="col-6">
                      <Link
                        to={item.href}
                        className="dropdown-item small rounded"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="dropdown position-relative">
              <button
                onClick={() => handleMenuToggle('industries')}
                className="nav-link btn btn-link text-decoration-none d-flex align-items-center gap-1 p-0"
              >
                <span>Industries</span>
                <svg 
                  className={`dropdown-arrow ${activeMenu === 'industries' ? 'rotate-180' : ''}`}
                  width="16" height="16"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`dropdown-menu position-absolute ${activeMenu === 'industries' ? 'show' : ''}`}>
                <div className="p-2">
                  {industriesMenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="dropdown-item small rounded"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="dropdown position-relative">
              <button
                onClick={() => handleMenuToggle('resources')}
                className="nav-link btn btn-link text-decoration-none d-flex align-items-center gap-1 p-0"
              >
                <span>Resources</span>
                <svg 
                  className={`dropdown-arrow ${activeMenu === 'resources' ? 'rotate-180' : ''}`}
                  width="16" height="16"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`dropdown-menu position-absolute ${activeMenu === 'resources' ? 'show' : ''}`}>
                <div className="p-2">
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="dropdown-item small rounded"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>

            <NavLink 
              to="/industry-solutions" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
            >
              Industry Solutions
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </div>

          {/* CTA Buttons + Theme */}
          <div className="d-flex align-items-center gap-2">
            <ThemeToggle compact />
            <Link 
              to="/quick-quote" 
              className="btn btn-outline-primary btn-sm"
            >
              Quick Quote
            </Link>
            <Link 
              to="/free-consultation" 
              className="btn btn-primary btn-sm"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
