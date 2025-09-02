// Prefetch chunks for routes on hover/focus to speed up navigation
export type Prefetcher = () => Promise<unknown>;

const map: Record<string, Prefetcher> = {
  '/services': () => import('../pages/Services'),
  '/industries': () => import('../pages/Industries'),
  '/industry-solutions': () => import('../pages/IndustrySolutions'),
  '/about': () => import('../pages/About'),
  '/contact': () => import('../pages/Contact'),
  '/case-studies': () => import('../pages/CaseStudies'),
  '/resources': () => import('../pages/Resources'),

  // Services deep links
  '/services/web-development': () => import('../pages/services/WebDevelopment'),
  '/services/web-development/wordpress': () => import('../pages/services/WordPress'),
  '/services/web-development/shopify': () => import('../pages/services/Shopify'),
  '/services/web-development/wix': () => import('../pages/services/Wix'),
  '/services/web-development/custom': () => import('../pages/services/CustomWebDevelopment'),
  '/services/erp': () => import('../pages/services/ERPSolutions'),
  '/services/office365-gsuite': () => import('../pages/services/Office365GSuite'),
  '/services/ai-automation': () => import('../pages/services/AIAutomation'),
  '/services/cloud': () => import('../pages/services/Cloud'),
  '/services/networking': () => import('../pages/services/Networking'),
  '/services/data-migration-recovery': () => import('../pages/services/DataMigrationRecovery'),

  // ERP deep links
  '/services/erp/odoo': () => import('../pages/services/erp/Odoo'),
  '/services/erp/nexterp': () => import('../pages/services/erp/NextERP'),
  '/services/erp/repairshppr': () => import('../pages/services/erp/RepairShppr'),
  '/services/erp/loaddepot': () => import('../pages/services/erp/LoadDepot'),

  // Industry deep links
  '/industries/retail': () => import('../pages/industries/Retail'),
  '/industries/professional-services': () => import('../pages/industries/ProfessionalServices'),
  '/industries/healthcare': () => import('../pages/industries/Healthcare'),
  '/industries/manufacturing': () => import('../pages/industries/Manufacturing'),
  '/industries/small-business': () => import('../pages/industries/SmallBusiness'),

  // Case study details
  '/case-studies/odoo-implementation': () => import('../pages/case-studies/OdooImplementation'),
  '/case-studies/shopify-site': () => import('../pages/case-studies/ShopifyStore'),
  '/case-studies/wordpress-redesign': () => import('../pages/case-studies/WordPressRedesign'),
  '/case-studies/custom-web-app': () => import('../pages/case-studies/CustomWebApp'),
  '/case-studies/ai-analytics': () => import('../pages/case-studies/AIAnalytics'),
};

const cache = new Set<string>();

export function prefetchRoute(href: string) {
  // find the longest prefix in map that matches href
  const key = Object.keys(map)
    .sort((a, b) => b.length - a.length)
    .find(k => href.startsWith(k));
  if (!key || cache.has(key)) return;
  cache.add(key);
  map[key]().catch(() => {
    // ignore failures, will load on demand
    cache.delete(key);
  });
}
