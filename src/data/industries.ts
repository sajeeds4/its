// Shared industry feature data used by industry pages
import retailImg from '../assets/industries/retail.svg';
import healthcareImg from '../assets/industries/healthcare.svg';
import smbImg from '../assets/industries/smb.svg';
import professionalImg from '../assets/industries/professional.svg';
import manufacturingImg from '../assets/industries/manufacturing.svg';

export const industryData = {
  retail: {
    heroImage: retailImg,
    features: [
      { iconEmoji: '🛒', title: 'E-commerce Platforms', description: 'Custom Shopify, WooCommerce, and multi-channel platforms to increase revenue and conversions.', bullets: ['Shopify Plus', 'Custom checkout', 'Inventory sync', 'Mobile-first'] },
      { iconEmoji: '💳', title: 'POS & Omnichannel', description: 'Connect online and offline sales with unified inventory, loyalty and analytics.' },
      { iconEmoji: '📊', title: 'Inventory Management', description: 'Real-time tracking, automated reorder points, and demand forecasting.' },
      { iconEmoji: '🧠', title: 'AI Analytics', description: 'Behavior analysis, personalization engines, and dynamic pricing.' },
      { iconEmoji: '📱', title: 'Omnichannel Experience', description: 'Unified customer profiles and seamless buy-online-pickup-in-store flows.' },
      { iconEmoji: '☁️', title: 'Cloud Infrastructure', description: 'Auto-scaling infrastructure, global CDN and disaster recovery.' }
    ]
  },
  healthcare: {
    heroImage: healthcareImg,
    features: [
      { iconEmoji: '🏥', title: 'Electronic Health Records (EHR)', description: 'Comprehensive EHR systems to streamline patient data and enable clinical workflows.' },
      { iconEmoji: '📱', title: 'Telemedicine', description: 'Secure telehealth platforms for virtual care and remote monitoring.' },
      { iconEmoji: '🔐', title: 'Security & HIPAA', description: 'Encryption, access controls and audit trails to meet compliance.' },
      { iconEmoji: '🤖', title: 'AI Diagnostics', description: 'ML models to assist diagnosis, risk prediction and clinical insights.' },
      { iconEmoji: '☁️', title: 'Cloud & DR', description: 'HIPAA-ready cloud infrastructure with failover and backups.' },
      { iconEmoji: '📈', title: 'Clinical Analytics', description: 'Analytics dashboards to track outcomes, utilization and KPIs.' }
    ]
  },
  smallBusiness: {
    heroImage: smbImg,
    features: [
      { iconEmoji: '📋', title: 'Business Management', description: 'Integrated CRM, invoicing and operations tools tailored to SMBs.' },
      { iconEmoji: '🌐', title: 'Professional Websites', description: 'Cost-effective responsive websites and e-commerce setups.' },
      { iconEmoji: '☁️', title: 'Cloud Migration', description: 'Office 365 / Google Workspace, backups and disaster recovery.' },
      { iconEmoji: '📊', title: 'Business Intelligence', description: 'Simple dashboards for sales, finance and customer insights.' },
      { iconEmoji: '🔐', title: 'Security Essentials', description: 'Endpoint protection, backups and email security for SMB budgets.' },
      { iconEmoji: '📣', title: 'Marketing Tools', description: 'Automation for social, email and lead generation.' }
    ]
  },
  professionalServices: {
    heroImage: professionalImg,
    features: [
      { iconEmoji: '⚖️', title: 'Client Management', description: 'CRM and client portals for law, accounting and consulting firms.' },
      { iconEmoji: '⏰', title: 'Time & Billing', description: 'Accurate timekeeping and automated invoicing.' },
      { iconEmoji: '📄', title: 'Document Management', description: 'Secure, versioned document workflows and collaboration.' },
      { iconEmoji: '🔐', title: 'Security & Compliance', description: 'Confidentiality controls and audit reporting.' },
      { iconEmoji: '📊', title: 'Business Intelligence', description: 'Profitability and utilization dashboards.' },
      { iconEmoji: '🤝', title: 'Client Collaboration', description: 'Secure portals and project transparency.' }
    ]
  },
  manufacturing: {
    heroImage: manufacturingImg,
    features: [
      { iconEmoji: '🏭', title: 'Manufacturing ERP', description: 'Production planning, MRP and quality control integrations.' },
      { iconEmoji: '🔗', title: 'IoT & Connectivity', description: 'Machine telemetry, predictive maintenance and asset tracking.' },
      { iconEmoji: '📊', title: 'Production Analytics', description: 'OEE dashboards, trend analysis and performance monitoring.' },
      { iconEmoji: '📦', title: 'Supply Chain', description: 'Supplier management, inventory optimization and logistics.' },
      { iconEmoji: '🎯', title: 'Quality Control', description: 'Inspection workflows and non-conformance tracking.' },
      { iconEmoji: '🤖', title: 'Automation', description: 'Robotics integration and process automation.' }
    ]
  }
} as const;

export type IndustryKey = keyof typeof industryData;

export default industryData;
