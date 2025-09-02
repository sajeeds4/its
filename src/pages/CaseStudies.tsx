import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, ShoppingCart, Globe, Bot, ArrowRight, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import './Pages.css';
import { Link, useSearchParams } from 'react-router-dom';

type Study = {
  id: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  challenge: string;
  solution: string[];
  results: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  href: string;
};

const STUDIES: Study[] = [
  {
    id: 'odoo',
    title: 'Odoo ERP Implementation',
    industry: 'Manufacturing',
    icon: <Building2 size={22} />,
  href: '/case-studies/odoo-implementation',
    challenge: 'A mid-sized manufacturer needed unified inventory and production visibility across 3 sites.',
    solution: [
      'Deployed Odoo core with MRP, Inventory, Accounting',
      'Built custom barcode flows and replenishment rules',
      'Integrated vendor portals and EDI for purchasing',
    ],
    results: [
      { label: 'Inventory Costs', value: '-40%' },
      { label: 'Order Processing Time', value: '-60%' },
      { label: 'Forecast Accuracy', value: '+22%' },
    ],
    metrics: [
      { label: 'Warehouses', value: '3' },
      { label: 'SKUs', value: '12k' },
      { label: 'Users', value: '58' },
    ],
  },
  {
    id: 'shopify',
    title: 'Shopify E‑commerce Platform',
    industry: 'Retail',
    icon: <ShoppingCart size={22} />,
  href: '/case-studies/shopify-site',
    challenge: 'Local retailer needed a scalable DTC storefront and unified inventory.',
    solution: [
      'Custom Shopify theme with SEO-first architecture',
      'Realtime inventory sync with POS and ERP',
      'Optimized checkout with one-tap wallets',
    ],
    results: [
      { label: 'Online Sales', value: '+300%' },
      { label: 'Customer Base', value: '+50%' },
      { label: 'Checkout Time', value: '-35%' },
    ],
    metrics: [
      { label: 'Avg. LCP', value: '1.9s' },
      { label: 'AOV', value: '+18%' },
      { label: 'CR', value: '+28%' },
    ],
  },
  {
    id: 'wordpress',
    title: 'WordPress Business Website',
    industry: 'Professional Services',
    icon: <Globe size={22} />,
  href: '/case-studies/wordpress-redesign',
    challenge: 'Firm required a premium site with client portal and booking.',
    solution: [
      'Headless WordPress with secure client area',
      'Calendar integration and automation',
      'Accessible design meeting WCAG AA',
    ],
    results: [
      { label: 'Online Inquiries', value: '+200%' },
      { label: 'Bounce Rate', value: '-24%' },
      { label: 'Client CSAT', value: '4.7/5' },
    ],
    metrics: [
      { label: 'Pages', value: '32' },
      { label: 'Portal Users', value: '1.2k' },
      { label: 'Avg. TTI', value: '1.4s' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Analytics Automation',
    industry: 'Healthcare',
    icon: <Bot size={22} />,
  href: '/case-studies/ai-analytics',
    challenge: 'Automate data analysis and compliance reporting with PHI safeguards.',
    solution: [
      'Ingest pipelines with de-identification',
      'LLM-powered insights and scheduled reporting',
      'Role-based access and audit logs',
    ],
    results: [
      { label: 'Reporting Time', value: '-80%' },
      { label: 'Data Errors', value: '-37%' },
      { label: 'Ops Efficiency', value: '+19%' },
    ],
    metrics: [
      { label: 'Datasets', value: '28' },
      { label: 'Pipelines', value: '12' },
      { label: 'Models', value: '6' },
    ],
  },
];

const CaseStudies: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get('q') ?? '');
  const [filter, setFilter] = useState<string>(params.get('industry') ?? 'All');
  const categories = ['All', 'Manufacturing', 'Retail', 'Professional Services', 'Healthcare'];

  const items = STUDIES.filter(s => (filter === 'All' || s.industry === filter) && (s.title.toLowerCase().includes(q.toLowerCase()) || s.challenge.toLowerCase().includes(q.toLowerCase())));

  // Sync URL as user filters/searches
  React.useEffect(() => {
    const next = new URLSearchParams(params);
    if (q) next.set('q', q); else next.delete('q');
    if (filter && filter !== 'All') next.set('industry', filter); else next.delete('industry');
    setParams(next, { replace: true });
  }, [q, filter]);

  return (
    <div className="case-studies-page">
      <Helmet>
        <title>Case Studies | Aethrix Systems</title>
        <meta name="description" content="Real results across ERP, E‑commerce, Web, and AI. Explore interactive case studies with metrics, challenges, and outcomes." />
      </Helmet>

      {/* Hero */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="text-center mb-3">
            <h1 className="display-5 fw-bold text-dark mb-2">Case Studies</h1>
            <p className="text-muted mb-0">Real results across ERP, E‑commerce, Web, and AI</p>
          </div>
          <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-stretch">
            <input className="form-control" placeholder="Search case studies" value={q} onChange={e => setQ(e.target.value)} aria-label="Search case studies" />
            <div className="btn-group" role="group" aria-label="Filter by industry">
              {categories.map(c => (
                <button key={c} className={`btn btn-sm ${filter===c?'btn-primary':'btn-outline-primary'}`} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            {items.length === 0 && (
              <div className="col-12">
                <div className="card p-4 text-center">
                  <div className="placeholder-glow mb-2">
                    <span className="placeholder col-6"></span>
                  </div>
                  <p className="text-muted mb-0">No case studies match your filters.</p>
                </div>
              </div>
            )}
            {items.map(study => (
              <div key={study.id} className="col-md-6">
                <article className="card h-100 shadow-sm premium-border">
                  <div className="card-body p-3 p-lg-4">
                    <header className="d-flex align-items-center gap-2 mb-2">
                      <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{width:36,height:36, background:'rgba(99,102,241,0.12)', border:'1px solid rgba(0,0,0,0.06)'}}>
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="h5 fw-semibold mb-0">{study.title}</h3>
                        <small className="text-muted">{study.industry}</small>
                      </div>
                    </header>

                    <p className="text-muted mb-3"><strong className="text-dark">Challenge:</strong> {study.challenge}</p>

                    <div className="row g-2 mb-3">
                      {study.metrics.map(m => (
                        <div key={m.label} className="col-4">
                          <div className="rounded-3 border p-2 text-center bg-white">
                            <div className="fw-bold">{m.value}</div>
                            <small className="text-muted">{m.label}</small>
                          </div>
                        </div>
                      ))}
                    </div>

                    <details>
                      <summary className="d-inline-flex align-items-center gap-2 text-primary">
                        <Sparkles size={16}/> Solution details
                      </summary>
                      <ul className="mt-2 mb-0">
                        {study.solution.map((s,i)=>(
                          <li key={i} className="mb-1 d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-success flex-shrink-0"/><span>{s}</span></li>
                        ))}
                      </ul>
                    </details>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {study.results.map(r => (
                        <span key={r.label} className="badge text-bg-light border"><BarChart3 size={14} className="me-1"/>{r.label}: <strong className="ms-1">{r.value}</strong></span>
                      ))}
                    </div>

                    <div className="mt-3 d-flex justify-content-end">
                      <Link className="btn btn-outline-primary btn-sm" to={study.href}>
                        Read more <ArrowRight size={16} className="ms-1"/>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
