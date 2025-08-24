import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import ERPSolutions from './pages/services/ERPSolutions';
import Industries from './pages/Industries';
import Retail from './pages/industries/Retail';
import ProfessionalServices from './pages/industries/ProfessionalServices';
import Healthcare from './pages/industries/Healthcare';
import Manufacturing from './pages/industries/Manufacturing';
import SmallBusiness from './pages/industries/SmallBusiness';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
// New service sub-pages
import WordPress from './pages/services/WordPress';
import Shopify from './pages/services/Shopify';
import Wix from './pages/services/Wix';
import CustomWebDevelopment from './pages/services/CustomWebDevelopment';
import Office365GSuite from './pages/services/Office365GSuite';
import AIAutomation from './pages/services/AIAutomation';
import Cloud from './pages/services/Cloud';
import Networking from './pages/services/Networking';
import DataMigrationRecovery from './pages/services/DataMigrationRecovery';
import Odoo from './pages/services/erp/Odoo';
import NextERP from './pages/services/erp/NextERP';
import RepairShppr from './pages/services/erp/RepairShppr';
import LoadDepot from './pages/services/erp/LoadDepot';
// Case study detail pages
import OdooImplementation from './pages/case-studies/OdooImplementation';
import ShopifyStore from './pages/case-studies/ShopifyStore';
import WordPressRedesign from './pages/case-studies/WordPressRedesign';
import CustomWebApp from './pages/case-studies/CustomWebApp';
import AIAnalytics from './pages/case-studies/AIAnalytics';
// Business/marketing pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import FreeConsultation from './pages/FreeConsultation';
import ERPassessment from './pages/ERPassessment';
import WebsiteAudit from './pages/WebsiteAudit';
import QuickQuote from './pages/QuickQuote';
import Resources from './pages/Resources';
import './App.css';
import './pages/Home.css';
import './pages/Pages.css';
import './pages/industries/Industries.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web-development/wordpress" element={<WordPress />} />
            <Route path="/services/web-development/shopify" element={<Shopify />} />
            <Route path="/services/web-development/wix" element={<Wix />} />
            <Route path="/services/web-development/custom" element={<CustomWebDevelopment />} />
            <Route path="/services/erp" element={<ERPSolutions />} />
            <Route path="/services/erp/odoo" element={<Odoo />} />
            <Route path="/services/erp/nexterp" element={<NextERP />} />
            <Route path="/services/erp/repairshppr" element={<RepairShppr />} />
            <Route path="/services/erp/loaddepot" element={<LoadDepot />} />
            <Route path="/services/office365-gsuite" element={<Office365GSuite />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/networking" element={<Networking />} />
            <Route path="/services/data-migration-recovery" element={<DataMigrationRecovery />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/professional-services" element={<ProfessionalServices />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/small-business" element={<SmallBusiness />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/odoo-implementation" element={<OdooImplementation />} />
            <Route path="/case-studies/shopify-store" element={<ShopifyStore />} />
            <Route path="/case-studies/wordpress-redesign" element={<WordPressRedesign />} />
            <Route path="/case-studies/custom-web-app" element={<CustomWebApp />} />
            <Route path="/case-studies/ai-analytics" element={<AIAnalytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/erp-assessment" element={<ERPassessment />} />
            <Route path="/website-audit" element={<WebsiteAudit />} />
            <Route path="/quick-quote" element={<QuickQuote />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
