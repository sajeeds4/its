import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AethrixLogo from './AethrixLogo';
import './Navigation.css';
import '../styles/glassmorphism.css';
import ThemeToggle from './ThemeToggle';
import { Home, Settings2, Building2, BookOpen, Users2, Puzzle, Mail } from 'lucide-react';
import { prefetchRoute } from '../utils/prefetchRoutes';

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setActiveMenu(null);
    // Update active indicator on route change
    const id = requestAnimationFrame(() => {
      updateIndicator();
    });
    return () => cancelAnimationFrame(id);
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

  // Sliding active underline indicator
  const updateIndicator = () => {
    const rail = railRef.current;
    const indicator = indicatorRef.current;
    if (!rail || !indicator) return;
    const active = rail.querySelector('.nav-link.active') as HTMLElement | null;
    if (!active) {
      indicator.style.opacity = '0';
      return;
    }
    const railRect = rail.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const left = Math.max(0, activeRect.left - railRect.left + 8);
    const width = Math.min(railRect.width - left - 8, activeRect.width - 16);
    indicator.style.opacity = '1';
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${Math.max(24, width)}px`;
  };

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);
    const id = setInterval(updateIndicator, 500);
    updateIndicator();
    return () => { window.removeEventListener('resize', onResize); clearInterval(id); };
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

  // Keyboard navigation within mega menus
  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const items = Array.from(container.querySelectorAll<HTMLAnchorElement>('a.dropdown-item'));
    if (!items.length) return;
    const currentIndex = items.findIndex((el) => el === document.activeElement);
    const key = e.key;
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      e.preventDefault();
      const next = items[(Math.max(0, currentIndex) + 1) % items.length];
      next?.focus();
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      e.preventDefault();
      const prev = items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    } else if (key === 'Escape') {
      setActiveMenu(null);
    }
  };

  const servicesMenu = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Custom Web Development', href: '/services/web-development/custom' },
  { name: 'WordPress', href: '/services/web-development/wordpress' },
  { name: 'Shopify', href: '/services/web-development/shopify' },
  { name: 'Wix', href: '/services/web-development/wix' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'AI & Automation', href: '/services/ai-automation' },
  { name: 'ERP Solutions', href: '/services/erp' },
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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    target.style.setProperty('--mx', `${x}%`);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg fixed-top transition-all navbar-3d ${
        scrolled 
          ? 'backdrop-glass shadow-lg border-bottom border-light' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="container-fluid">
        <div className="nav-rail rounded-4 w-100" ref={railRef}>
        <div className="d-flex justify-content-between align-items-center w-100 py-2 px-2 nav-inner position-relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="navbar-brand d-flex align-items-center gap-3 text-decoration-none"
          >
            <AethrixLogo size="medium" variant="text" />
          </Link>

          {/* Navigation - Always Visible */}
          <div className="d-flex align-items-center gap-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => prefetchRoute('/')}
              onFocus={() => prefetchRoute('/')}
            >
              {({ isActive }) => (
                <span aria-current={isActive ? 'page' : undefined} className="d-inline-flex align-items-center">
                  <Home size={16} className="me-1 d-none d-xl-inline" />
                  Home
                </span>
              )}
            </NavLink>

            {/* Services Dropdown */}
            <div className="dropdown position-relative">
              <button
                onClick={() => handleMenuToggle('services')}
                className="nav-link btn btn-link text-decoration-none d-flex align-items-center gap-1 p-0"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => prefetchRoute('/services')}
                onFocus={() => prefetchRoute('/services')}
                aria-expanded={activeMenu === 'services'}
                aria-haspopup="true"
                aria-controls="menu-services"
              >
                <span className="d-inline-flex align-items-center">
                  <Settings2 size={16} className="me-1 d-none d-xl-inline" />
                  Services
                </span>
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
              <div id="menu-services" className={`dropdown-menu premium-dropdown position-absolute mega-menu ${activeMenu === 'services' ? 'show' : ''}`} role="menu" onKeyDown={handleMenuKeyDown}>
                <div className="mega-menu-content">
                  {servicesMenu.map((item) => (
                    <div className="mega-menu-section" key={item.href}>
                      <Link to={item.href} className="dropdown-item small rounded d-flex align-items-center gap-2" onClick={() => setActiveMenu(null)} role="menuitem">
                        {/* Prefetch each item on hover/focus */}
                        <span onMouseEnter={() => prefetchRoute(item.href)} onFocus={() => prefetchRoute(item.href)}>
                        <span className="menu-dot" aria-hidden>•</span>
                        {item.name}
                        </span>
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
                onMouseMove={handleMouseMove}
                onMouseEnter={() => prefetchRoute('/industries')}
                onFocus={() => prefetchRoute('/industries')}
                aria-expanded={activeMenu === 'industries'}
                aria-haspopup="true"
                aria-controls="menu-industries"
              >
                <span className="d-inline-flex align-items-center">
                  <Building2 size={16} className="me-1 d-none d-xl-inline" />
                  Industries
                </span>
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
              <div id="menu-industries" className={`dropdown-menu premium-dropdown position-absolute mega-menu ${activeMenu === 'industries' ? 'show' : ''}`} role="menu" onKeyDown={handleMenuKeyDown}>
                <div className="mega-menu-content">
                  {industriesMenu.map((item) => (
                    <div className="mega-menu-section" key={item.href}>
                      <Link to={item.href} className="dropdown-item small rounded d-flex align-items-center gap-2" onClick={() => setActiveMenu(null)} role="menuitem">
                        <span onMouseEnter={() => prefetchRoute(item.href)} onFocus={() => prefetchRoute(item.href)}>
                          <span className="menu-dot" aria-hidden>•</span>
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="dropdown position-relative">
              <button
                onClick={() => handleMenuToggle('resources')}
                className="nav-link btn btn-link text-decoration-none d-flex align-items-center gap-1 p-0"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => prefetchRoute('/resources')}
                onFocus={() => prefetchRoute('/resources')}
                aria-expanded={activeMenu === 'resources'}
                aria-haspopup="true"
                aria-controls="menu-resources"
              >
                <span className="d-inline-flex align-items-center">
                  <BookOpen size={16} className="me-1 d-none d-xl-inline" />
                  Resources
                </span>
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
        <div id="menu-resources" className={`dropdown-menu premium-dropdown position-absolute ${activeMenu === 'resources' ? 'show' : ''}`} role="menu">
                <div className="p-2">
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
          className="dropdown-item small rounded"
                      onClick={() => setActiveMenu(null)}
          role="menuitem"
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
              onMouseMove={handleMouseMove}
            >
              <span className="d-inline-flex align-items-center">
                <Users2 size={16} className="me-1 d-none d-xl-inline" />
                About
              </span>
            </NavLink>

            <NavLink 
              to="/industry-solutions" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
              onMouseMove={handleMouseMove}
            >
              <span className="d-inline-flex align-items-center">
                <Puzzle size={16} className="me-1 d-none d-xl-inline" />
                Industry Solutions
              </span>
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link text-decoration-none ${isActive ? 'active' : ''}`}
              onMouseMove={handleMouseMove}
            >
              <span className="d-inline-flex align-items-center">
                <Mail size={16} className="me-1 d-none d-xl-inline" />
                Contact
              </span>
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
          {/* Sliding active indicator */}
          <span className="nav-active-indicator" ref={indicatorRef} />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
