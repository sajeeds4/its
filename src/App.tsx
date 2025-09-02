import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Main layout components
import Navigation from './components/Navigation';
import NeuralBackground from './components/NeuralBackground';
import Footer from './components/Footer';

// Main pages
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import IndustrySolutions from './pages/IndustrySolutions';

// Legal pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FreeConsultation from './pages/FreeConsultation';
import ERPassessment from './pages/ERPassessment';
import WebsiteAudit from './pages/WebsiteAudit';
import QuickQuote from './pages/QuickQuote';

// Service pages
import WebDevelopment from './pages/services/WebDevelopment';
import WordPress from './pages/services/WordPress';
import Shopify from './pages/services/Shopify';
import Wix from './pages/services/Wix';
import CustomWebDevelopment from './pages/services/CustomWebDevelopment';
import ERPSolutions from './pages/services/ERPSolutions';
import Office365GSuite from './pages/services/Office365GSuite';
import AIAutomation from './pages/services/AIAutomation';
import Cloud from './pages/services/Cloud';
import Networking from './pages/services/Networking';
import DataMigrationRecovery from './pages/services/DataMigrationRecovery';

// ERP pages
import Odoo from './pages/services/erp/Odoo';
import NextERP from './pages/services/erp/NextERP';
import RepairShppr from './pages/services/erp/RepairShppr';
import LoadDepot from './pages/services/erp/LoadDepot';

// Industry pages
import Retail from './pages/industries/Retail';
import ProfessionalServices from './pages/industries/ProfessionalServices';
import Healthcare from './pages/industries/Healthcare';
import Manufacturing from './pages/industries/Manufacturing';
import SmallBusiness from './pages/industries/SmallBusiness';

// Case studies
import OdooImplementation from './pages/case-studies/OdooImplementation';
import ShopifyStore from './pages/case-studies/ShopifyStore';
import WordPressRedesign from './pages/case-studies/WordPressRedesign';
import CustomWebApp from './pages/case-studies/CustomWebApp';
import AIAnalytics from './pages/case-studies/AIAnalytics';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app min-vh-100 d-flex flex-column">
          <NeuralBackground />
          <Navigation />
          {/* spacer to offset fixed navbar height (uses CSS var set by Navigation) */}
          <div aria-hidden="true" style={{ height: 'var(--nav-height, 80px)' }} />
        <main className="main-content flex-grow-1">
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
        </main>
        <Footer />
      </div>
    </Router>
  </HelmetProvider>
  );
}

export default App;
