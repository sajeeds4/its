import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Banknote, HeartPulse, Factory, ShoppingBag, Signal, Zap, GraduationCap } from 'lucide-react';
import './industries/Industries.css';

type Bullet = string;
type Pillar = {
  title: string;
  bullets: Bullet[];
};

type Industry = {
  id: string;
  name: string;
  overview: string;
  pillars: Pillar[];
  impact: string;
  future: string;
  icon: 'bank' | 'health' | 'factory' | 'retail' | 'telecom' | 'energy' | 'education';
};

const industries: Industry[] = [
  {
    id: 'banking-financial-services',
    name: 'Banking & Financial Services',
    overview:
      'Financial organizations are modernizing core systems, elevating digital experiences, meeting strict compliance, and defending against sophisticated threats. This sector remains among the highest IT spenders globally.',
  icon: 'bank',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Fraud Detection & Prevention: Real-time monitoring using ML to identify suspicious patterns',
          'Credit Risk Assessment: Predictive models for lending decisions',
          'Algorithmic Trading: AI-driven strategies leveraging market data',
          'Customer Service Automation: Virtual assistants and chatbots for personalized support',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Customer 360 Analytics for personalization and retention',
          'Regulatory Reporting automation (Basel III, GDPR, PCI DSS)',
          'Market Risk Analytics and stress testing',
          'Performance Optimization for branches and ATMs',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'Core Banking Modernization on cloud-native architectures',
          'Hybrid Cloud Infrastructure with compliance controls',
          'Disaster Recovery orchestration',
          'API Banking Platforms and open banking enablement',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Mobile Banking Applications with biometrics and real-time alerts',
          'Digital Wallet Solutions including crypto support',
          'Robo-Advisory Platforms for algorithmic planning',
          'RegTech Solutions automating compliance lifecycles',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'Zero Trust Architecture and continuous verification',
          'Financial Crime Prevention and advanced threat detection',
          'Data Encryption & Tokenization',
          'Identity & Access Management with MFA and PAM',
        ],
      },
    ],
    impact:
      'Enhanced customer satisfaction via superior digital experiences, lower costs through automation, improved risk management, and stronger compliance posture.',
    future:
      'Open banking ecosystems, CBDCs, quantum‑resistant cryptography, and AI‑powered personalized finance.',
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    overview:
      'Healthcare is transforming to improve patient outcomes, reduce costs, ensure HIPAA/GDPR compliance, and accelerate R&D.',
  icon: 'health',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Medical Imaging Analysis for earlier, accurate diagnostics',
          'Drug Discovery Acceleration with ML-driven screening',
          'Predictive Patient Analytics for proactive care',
          'Clinical Decision Support with evidence-based recommendations',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'EHR Analytics to improve care coordination',
          'Population Health Management at scale',
          'Clinical Trial Optimization and recruitment insights',
          'Healthcare Cost Analytics for efficiency gains',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'HIPAA‑Compliant Cloud Infrastructure',
          'Telemedicine Platforms and remote monitoring',
          'Research Data Management for secure collaboration',
          'Healthcare Interoperability and integrations',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Patient Portals for self‑service access',
          'Medical Device Integration and IoT',
          'Clinical Workflow Management systems',
          'Pharma Supply Chain with blockchain traceability',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'Medical Device Security hardening',
          'Patient Data Protection and access controls',
          'Ransomware Defense programs',
          'Compliance automation for HIPAA/GDPR',
        ],
      },
    ],
    impact:
      'Better outcomes via improved diagnostics, reduced costs, higher efficiency, and accelerated research cycles.',
    future:
      'Precision medicine, AI drug discovery, remote patient monitoring, and genomic analytics.',
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    overview:
      'Industry 4.0 adoption is optimizing production, improving quality, reducing downtime, and enhancing supply chain visibility.',
  icon: 'factory',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Predictive Maintenance using sensor data',
          'Quality Control Automation via computer vision',
          'Supply Chain Optimization and demand forecasting',
          'Production Process Optimization to minimize waste',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Manufacturing Intelligence dashboards',
          'Energy Management Analytics at facility scale',
          'Supplier Performance Analytics',
          'Asset Performance Management and lifecycle insights',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'Industrial IoT data platforms',
          'Cloud MES for workflow orchestration',
          'Supply Chain Visibility systems',
          'Remote Monitoring & Control platforms',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Digital Twins for simulation and optimization',
          'Industrial Automation (PLC/SCADA) integration',
          'Connected Product Platforms and telemetry',
          'Manufacturing Field Apps for technicians',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'OT/ICS Security and segmentation',
          'IT/OT Network Segmentation',
          'Supply Chain Security validation',
          'Incident Response for manufacturing contexts',
        ],
      },
    ],
    impact:
      'Lower operating costs, improved quality, resilient supply chains, and flexible production.',
    future:
      'Autonomous factories, advanced robotics, sustainable operations, and mass customization.',
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E‑commerce',
    overview:
      'Retailers are pursuing omnichannel experiences, personalization, inventory optimization, and deep customer analytics.',
  icon: 'retail',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Personalized Recommendation Engines',
          'Dynamic Pricing Optimization',
          'Customer Churn Prediction',
          'Inventory Demand Forecasting',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Customer Journey Analytics across channels',
          'Omnichannel Analytics for unified insights',
          'Competitive Intelligence monitoring',
          'Store Performance Analytics',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'E‑commerce Platform Development',
          'CDN acceleration for global performance',
          'Omnichannel Integration and sync',
          'Auto‑scaling Infrastructure for peak seasons',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Mobile Commerce apps with AR try‑on',
          'Modern POS systems',
          'In‑Store Digital Experiences (kiosks, signage)',
          'Social Commerce enablement',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'PCI‑compliant payments',
          'E‑commerce Security and ATO prevention',
          'Customer Data Protection',
          'Bot Management and anti‑fraud controls',
        ],
      },
    ],
    impact:
      'Higher conversions via personalization, better loyalty, optimized inventory, and efficient operations.',
    future:
      'Voice commerce, AR shopping, sustainable retail, and social commerce growth.',
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    overview:
      'Telecoms are deploying 5G, scaling IoT, improving CX, and unlocking new digital services revenue.',
  icon: 'telecom',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Network Optimization and congestion reduction',
          'Predictive Network Maintenance',
          'Customer Service Automation',
          'Fraud Detection on usage patterns',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Network Performance Analytics',
          'Customer Experience Analytics',
          'Revenue Assurance analytics',
          'Subscriber Behavior insights',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'NFV and cloud network services',
          '5G Core Network (cloud‑native)',
          'Telecom Cloud Platforms at scale',
          'Edge Computing for low latency',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          '5G Infrastructure deployments',
          'IoT Connectivity Platforms',
          'Digital Service Platforms (storage, streaming, UC)',
          'Network Management Systems',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'Network Security hardening',
          'Subscriber Privacy Protection',
          'IoT Device Security frameworks',
          'Regulatory Compliance automation',
        ],
      },
    ],
    impact:
      'Improved network reliability, better CX, new digital revenues, and lower costs.',
    future:
      'Private 5G, massive IoT, network‑as‑a‑service, and AR/VR integration.',
  },
  {
    id: 'energy-utilities',
    name: 'Energy & Utilities',
    overview:
      'Utilities are modernizing with smart grids, renewables integration, compliance automation, and operational efficiency.',
  icon: 'energy',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Predictive Grid Maintenance',
          'Energy Demand Forecasting',
          'Renewable Energy Optimization',
          'Smart Meter Analytics',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Grid Performance Analytics and fault detection',
          'Asset Management Analytics',
          'Environmental Impact Analysis',
          'Regulatory Reporting automation',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'Smart Grid Infrastructure management',
          'Energy Trading Platforms',
          'Utility Customer Portals',
          'Workforce Management optimization',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Smart Grid Technologies and AMI',
          'Renewable Energy Management',
          'Energy Storage Solutions and BMS',
          'Industrial IoT Sensors and telemetry',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'Critical Infrastructure Protection',
          'SCADA Security',
          'Smart Grid Cybersecurity frameworks',
          'NERC CIP compliance automation',
        ],
      },
    ],
    impact:
      'Greater grid reliability, reduced costs, improved CX, and better renewables integration.',
    future:
      'Advanced storage, microgrids, EV integration, and carbon management.',
  },
  {
    id: 'education-edtech',
    name: 'Education & EdTech',
    overview:
      'Education is adopting digital tools to boost outcomes, accessibility, administration, and lifelong learning.',
  icon: 'education',
    pillars: [
      {
        title: 'AI/ML Solutions',
        bullets: [
          'Personalized Learning Platforms',
          'Automated Grading & Assessment',
          'Student Success Prediction',
          'Intelligent Tutoring Systems',
        ],
      },
      {
        title: 'Data & Analytics',
        bullets: [
          'Learning Analytics and engagement insights',
          'Institutional Performance Metrics',
          'Curriculum Optimization',
          'Resource Allocation Analytics',
        ],
      },
      {
        title: 'Cloud Solutions',
        bullets: [
          'LMS platforms and collaboration',
          'Content Delivery for scale',
          'Student Information Systems',
          'Remote Learning Infrastructure',
        ],
      },
      {
        title: 'Product Engineering',
        bullets: [
          'Mobile Learning Apps',
          'VR Learning Experiences',
          'Educational Gaming Platforms',
          'Accessibility Tools for inclusive learning',
        ],
      },
      {
        title: 'Cybersecurity',
        bullets: [
          'Student Data Protection',
          'Educational Network Security',
          'FERPA compliance support',
          'Secure Remote Learning',
        ],
      },
    ],
    impact:
      'Personalized learning at scale, greater accessibility, efficient operations, and optimized resources.',
    future:
      'AI tutors, blockchain credentials, immersive learning, and global platforms.',
  },
];

const keyOpportunities = {
  highPriority: [
    {
      title: 'Cybersecurity Services',
      desc:
        'Highest demand across industries due to rising threats and compliance. Zero trust and AI threat detection are top priorities.',
    },
    {
      title: 'Cloud Migration & Modernization',
      desc:
        'Universal adoption of hybrid/multi‑cloud. Significant cost, scale, and agility benefits are driving modernization.',
    },
    {
      title: 'AI/ML Implementation',
      desc:
        'Shift from pilots to production. Intelligent automation and predictive analytics unlock competitive advantage.',
    },
    {
      title: 'Data Analytics & BI',
      desc:
        'Real‑time insights for decision making, integrated with AI/ML for advanced outcomes.',
    },
  ],
  trends: [
    'Industry 4.0 and smart factories',
    'Regulatory compliance automation',
    'Sustainability and green tech',
    'Edge computing and 5G integration',
  ],
  future: [
    'Quantum computing readiness',
    'Blockchain and digital identity',
    'Extended Reality (AR/VR/MR)',
    'Autonomous systems and robotics',
  ],
};

const IndustrySolutions: React.FC = () => {
  const sectionIds = useMemo(() => industries.map(i => i.id), []);
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');
  const tocRef = useRef<HTMLElement | null>(null);
  const mobileTocRef = useRef<HTMLDetailsElement | null>(null);
  const [showTop, setShowTop] = useState(false);

  // Scrollspy: highlight active industry in TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top));
        if (visible[0]) {
          const id = visible[0].target.getAttribute('id');
          if (id) setActiveId(id);
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: [0, 0.1, 0.5, 1] }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  // TOC keyboard navigation (ArrowUp/ArrowDown)
  useEffect(() => {
    const el = tocRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const isUp = e.key === 'ArrowUp';
      const isDown = e.key === 'ArrowDown';
      if (!isUp && !isDown) return;
      const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
      const idx = links.findIndex(a => a === document.activeElement);
      if (idx === -1) return;
      e.preventDefault();
      const nextIdx = (idx + (isDown ? 1 : links.length - 1)) % links.length;
      links[nextIdx]?.focus();
    };
    el.addEventListener('keydown', onKeyDown);
    return () => el.removeEventListener('keydown', onKeyDown);
  }, []);

  // Back-to-top visibility and reduced-motion aware smooth scroll helper
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileToc = () => {
    const el = mobileTocRef.current;
    if (el && el.open) el.open = false;
  };

  return (
    <>
      <Helmet>
        <title>Industry Solutions | Aethrix Systems</title>
        <meta name="description" content="IT services and solutions across Banking, Healthcare, Manufacturing, Retail, Telecom, Energy, and Education. AI/ML, Cloud, Data, Product Engineering, and Cybersecurity." />
        <link rel="canonical" href="https://aethrixsystems.com/industry-solutions" />
      </Helmet>

  <div className="industries-page" id="top">
        {/* Hero */}
        <section className="industry-hero">
          <div className="hero-content">
            <h1>IT Services Industry Solutions</h1>
            <p>
              We help organizations in high‑impact industries modernize, innovate, and scale with AI/ML, Cloud, Data, Product
              Engineering, and Cybersecurity.
            </p>
          </div>
        </section>

        {/* Executive summary */}
        <section className="section">
          <div className="container">
            <div className="industry-overview glass-card">
              <h2>Executive Summary</h2>
              <p>
                The global IT services market is expanding rapidly, driven by digital transformation. Organizations need specialized
                partners to navigate complex technology, implement modern solutions, and maintain a competitive edge. Our suite of
                services addresses critical needs across the industries below.
              </p>
            </div>

            {/* Mobile TOC (collapsible) */}
            <details className="industry-toc-mobile" ref={mobileTocRef}>
              <summary>Industries</summary>
              <nav aria-label="Industry table of contents (mobile)">
                <ul>
                  {industries.map((ind) => (
                    <li key={ind.id}>
                      <a
                        href={`#${ind.id}`}
                        onClick={closeMobileToc}
                        className={activeId === ind.id ? 'active' : undefined}
                        aria-current={activeId === ind.id ? 'true' : undefined}
                      >
                        {ind.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>

            <div className="industry-layout">
              {/* Sticky Table of Contents */}
              <aside className="industry-toc" aria-label="Industry table of contents" ref={tocRef as React.RefObject<HTMLDivElement>}>
                <h3 className="toc-title">Industries</h3>
                <nav>
                  <ul>
                    {industries.map((ind) => (
                      <li key={ind.id}>
                        <a
                          href={`#${ind.id}`}
                          className={activeId === ind.id ? 'active' : undefined}
                          aria-current={activeId === ind.id ? 'true' : undefined}
                        >
                          {ind.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Main content */}
              <div className="industry-content">
                {industries.map((ind) => (
                  <section key={ind.id} id={ind.id} className="solution-card premium-border" aria-labelledby={`${ind.id}-title`}>
                    <div className="solution-icon" aria-hidden>
                      {ind.icon === 'bank' && <Banknote size={40} strokeWidth={1.75} />}
                      {ind.icon === 'health' && <HeartPulse size={40} strokeWidth={1.75} />}
                      {ind.icon === 'factory' && <Factory size={40} strokeWidth={1.75} />}
                      {ind.icon === 'retail' && <ShoppingBag size={40} strokeWidth={1.75} />}
                      {ind.icon === 'telecom' && <Signal size={40} strokeWidth={1.75} />}
                      {ind.icon === 'energy' && <Zap size={40} strokeWidth={1.75} />}
                      {ind.icon === 'education' && <GraduationCap size={40} strokeWidth={1.75} />}
                    </div>
                    <h3 id={`${ind.id}-title`}>{ind.name}</h3>
                    <p>{ind.overview}</p>

                    {/* Collapsible pillars */}
                    <div className="service-types-grid">
                      {ind.pillars.map((p) => (
                        <details key={p.title} className="collapsible" open>
                          <summary className="collapsible-summary" aria-controls={`${ind.id}-${p.title.replace(/\s+/g,'-')}-content`}>
                            <h4>{p.title}</h4>
                          </summary>
                          <ul id={`${ind.id}-${p.title.replace(/\s+/g,'-')}-content`}>
                            {p.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>

                    <div className="case-study-highlight">
                      <h3>Business Impact</h3>
                      <p>{ind.impact}</p>
                      <div className="benefits-grid">
                        <div className="benefit-item">
                          <strong>Future Potential</strong>
                          <p>{ind.future}</p>
                        </div>
                      </div>
                    </div>

                    <div className="industry-cta">
                      <a href="/free-consultation" className="btn btn-primary">Talk to an expert</a>
                    </div>
                  </section>
                ))}

                {/* Opportunities */}
        <div className="packages-grid">
                  {keyOpportunities.highPriority.map((item) => (
          <div key={item.title} className="package premium-border">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-card case-study-highlight premium-border">
                  <h3>Emerging Trends & Future Growth</h3>
                  <div className="specialties-grid">
                    {keyOpportunities.trends.map((t) => (
                      <div key={t} className="specialty">
                        <h4>{t}</h4>
                        <p>Strategic initiatives to capture new market opportunities and efficiencies.</p>
                      </div>
                    ))}
                  </div>

                  <div className="specialties-grid mt-4">
                    {keyOpportunities.future.map((t) => (
                      <div key={t} className="specialty">
                        <h4>{t}</h4>
                        <p>Preparing organizations for the next wave of innovation and disruption.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {showTop && (
              <button
                type="button"
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
              >
                ↑
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default IndustrySolutions;
