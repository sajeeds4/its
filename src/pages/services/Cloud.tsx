import React from 'react';
import SEO from '../../components/SEO';

const Cloud: React.FC = () => (
  <div className="page-container">
    <SEO
      title="Cloud Solutions (AWS, Azure, GCP) | Aethrix Systems"
      description="Strategy, migration, security, and operations for AWS, Azure, and Google Cloud. Well‑Architected, IaC, CI/CD, and 24/7 support."
      path="/services/cloud"
      type="service"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Cloud', path: '/services/cloud' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cloud Solutions',
        serviceType: 'Cloud Consulting',
        provider: { '@type': 'Organization', name: 'Aethrix Systems' },
        url: 'https://aethrixsystems.com/services/cloud',
      }}
    />
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>Cloud Solutions</h1>
        <p>Design, migrate, and operate secure and scalable cloud infrastructure on AWS, Azure, and Google Cloud.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="service-overview readers glass-card">
          <h2>Cloud Strategy, Migration, and Operations</h2>
          <p>
            We modernize applications and infrastructure on AWS, Azure, and Google Cloud with a focus on cost, reliability, and
            developer productivity. Our team combines Well‑Architected principles with pragmatic engineering	to reduce surprises during
            migration and keep operating costs predictable after launch.
          </p>
          <p>
            Typical outcomes include: 20–40% lower infrastructure spend through right‑sizing and savings plans, faster releases with
            CI/CD, and improved uptime via multi‑AZ designs and automated recovery. We also partner closely with your security team to
            meet audit and compliance requirements without slowing developers down.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Architecture & Design</h3>
            <ul>
              <li>Well-Architected reviews</li>
              <li>Landing zone setup</li>
              <li>Multi-account/org design</li>
              <li>Cost optimization</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Migration</h3>
            <ul>
              <li>Lift-and-shift</li>
              <li>Re-platform / refactor</li>
              <li>Database migration</li>
              <li>Cutover planning</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Security & Compliance</h3>
            <ul>
              <li>Identity & access</li>
              <li>Network segmentation</li>
              <li>Backup & DR</li>
              <li>Monitoring & SIEM</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Operations</h3>
            <ul>
              <li>IaC (Terraform)</li>
              <li>CI/CD pipelines</li>
              <li>Observability</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>

        <article className="readers" style={{ marginTop: '1.5rem' }}>
          <h2>How we run cloud projects</h2>
          <ol>
            <li><strong>Discovery:</strong> inventory, dependencies, and a migration plan with timelines and risks.</li>
            <li><strong>Foundations:</strong> secure landing zone, SSO, networking, and observability baselines.</li>
            <li><strong>Migration:</strong> app by app with data cutover plans, rehearsals, and rollback paths.</li>
            <li><strong>Operate:</strong> IaC ownership, cost guardrails, and SLOs with actionable alerts.</li>
          </ol>
          <p>
            Related services: <a href="/services/data-migration-recovery">Data Migration & Recovery</a>,{' '}
            <a href="/services/networking">Networking</a>, and{' '}
            <a href="/services/ai-automation">AI Automation</a> for smarter operations.
          </p>
        </article>

        <div className="cta-section glass-card" style={{ marginTop: '1.5rem' }}>
          <h3>Plan your migration with experts.</h3>
          <a href="/contact" className="cta-button primary">Get Cloud Assessment</a>
        </div>
      </div>
    </div>
  </div>
);

export default Cloud;
