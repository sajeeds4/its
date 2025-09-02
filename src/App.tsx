import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Main layout components
import Navigation from './components/Navigation';
import NeuralBackground from './components/NeuralBackground';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

// Main pages (lazy)
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Resources = lazy(() => import('./pages/Resources'));
const IndustrySolutions = lazy(() => import('./pages/IndustrySolutions'));

// Legal pages (lazy)
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const FreeConsultation = lazy(() => import('./pages/FreeConsultation'));
const ERPassessment = lazy(() => import('./pages/ERPassessment'));
const WebsiteAudit = lazy(() => import('./pages/WebsiteAudit'));
const QuickQuote = lazy(() => import('./pages/QuickQuote'));

// Service pages (lazy)
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'));
const WordPress = lazy(() => import('./pages/services/WordPress'));
const Shopify = lazy(() => import('./pages/services/Shopify'));
const Wix = lazy(() => import('./pages/services/Wix'));
const CustomWebDevelopment = lazy(() => import('./pages/services/CustomWebDevelopment'));
const ERPSolutions = lazy(() => import('./pages/services/ERPSolutions'));
const Office365GSuite = lazy(() => import('./pages/services/Office365GSuite'));
const AIAutomation = lazy(() => import('./pages/services/AIAutomation'));
const Cloud = lazy(() => import('./pages/services/Cloud'));
const Networking = lazy(() => import('./pages/services/Networking'));
const DataMigrationRecovery = lazy(() => import('./pages/services/DataMigrationRecovery'));

// ERP pages (lazy)
const Odoo = lazy(() => import('./pages/services/erp/Odoo'));
const NextERP = lazy(() => import('./pages/services/erp/NextERP'));
const RepairShppr = lazy(() => import('./pages/services/erp/RepairShppr'));
const LoadDepot = lazy(() => import('./pages/services/erp/LoadDepot'));

// Industry pages (lazy)
const Retail = lazy(() => import('./pages/industries/Retail'));
const ProfessionalServices = lazy(() => import('./pages/industries/ProfessionalServices'));
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const Manufacturing = lazy(() => import('./pages/industries/Manufacturing'));
const SmallBusiness = lazy(() => import('./pages/industries/SmallBusiness'));

// Case studies (lazy)
const OdooImplementation = lazy(() => import('./pages/case-studies/OdooImplementation'));
const ShopifyStore = lazy(() => import('./pages/case-studies/ShopifyStore'));
const WordPressRedesign = lazy(() => import('./pages/case-studies/WordPressRedesign'));
const CustomWebApp = lazy(() => import('./pages/case-studies/CustomWebApp'));
const AIAnalytics = lazy(() => import('./pages/case-studies/AIAnalytics'));
import TopProgressBar from './components/TopProgressBar';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app min-vh-100 d-flex flex-column">
          <a href="#main" className="visually-hidden-focusable position-absolute top-0 start-0 m-2 btn btn-outline-primary btn-sm" style={{ zIndex: 2001 }}>
            Skip to content
          </a>
          <TopProgressBar />
          <NeuralBackground />
          <Navigation />
          {/* spacer to offset fixed navbar height (uses CSS var set by Navigation) */}
          <div aria-hidden="true" style={{ height: 'var(--nav-height, 80px)' }} />
          {/* Breadcrumbs under the navbar on non-home routes */}
          <Breadcrumbs />
        <main id="main" className="main-content flex-grow-1">
          <Suspense fallback={<div className="container py-4 text-muted">Loading…</div>}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industry-solutions" element={<IndustrySolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/erp-assessment" element={<ERPassessment />} />
            <Route path="/website-audit" element={<WebsiteAudit />} />
            <Route path="/quick-quote" element={<QuickQuote />} />

            {/* Services Pages */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web-development/wordpress" element={<WordPress />} />
            <Route path="/services/web-development/shopify" element={<Shopify />} />
            <Route path="/services/web-development/wix" element={<Wix />} />
            <Route path="/services/web-development/custom" element={<CustomWebDevelopment />} />
            <Route path="/services/erp" element={<ERPSolutions />} />
            <Route path="/services/office365-gsuite" element={<Office365GSuite />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/networking" element={<Networking />} />
            <Route path="/services/data-migration-recovery" element={<DataMigrationRecovery />} />

            {/* ERP Pages */}
            <Route path="/services/erp/odoo" element={<Odoo />} />
            <Route path="/services/erp/nexterp" element={<NextERP />} />
            <Route path="/services/erp/repairshppr" element={<RepairShppr />} />
            <Route path="/services/erp/loaddepot" element={<LoadDepot />} />

            {/* Industry Pages */}
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/professional-services" element={<ProfessionalServices />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/small-business" element={<SmallBusiness />} />

            {/* Case Studies */}
            <Route path="/case-studies/odoo-implementation" element={<OdooImplementation />} />
            <Route path="/case-studies/shopify-site" element={<ShopifyStore />} />
            <Route path="/case-studies/wordpress-redesign" element={<WordPressRedesign />} />
            <Route path="/case-studies/custom-web-app" element={<CustomWebApp />} />
            <Route path="/case-studies/ai-analytics" element={<AIAnalytics />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  </HelmetProvider>
  );
}

export default App;
