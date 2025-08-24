import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const WordPress: React.FC = () => {
  return (
    <main className="page-container" role="main">
      {/* Hero */}
      <header className="hero-section service-hero" aria-labelledby="wp-title">
        <div className="hero-content">
          <h1 id="wp-title">WordPress Development Services</h1>
          <p>
            Custom WordPress development — from fast marketing sites to enterprise multi-site platforms. We build secure, SEO-optimized
            WordPress solutions that convert visitors into customers.
          </p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          {/* Overview - longer, SEO-friendly content (not boxed) */}
          <article className="service-overview">
            <h2>Professional WordPress Solutions</h2>
            <p>
              WordPress powers a significant portion of the web because it's flexible, extendable, and easy to manage. Our WordPress
              development services focus on measurable business outcomes: improving search visibility, increasing qualified traffic, and
              turning visitors into leads or customers. We combine performance engineering, accessibility, and user-focused design to
              deliver websites that perform well under real-world conditions.
            </p>

            <p>
              Whether you're migrating from another platform, launching a new storefront with WooCommerce, adopting a headless CMS
              architecture for large scale platforms, or need a bespoke plugin to support unique business logic, we provide end-to-end
              WordPress services tailored to your technical and commercial goals.
            </p>

            <h3>What sets our WordPress services apart</h3>
            <ul>
              <li>
                SEO-focused builds: semantic HTML, clean URL structures, schema where appropriate, and performance tuning to improve
                rankings and organic traffic.
              </li>
              <li>
                Scalable architectures: headless WordPress and decoupled frontends when you need high performance and a modern DX for
                editors.
              </li>
              <li>
                Conversion-focused design: landing pages, content funnels, and A/B testing readiness to increase lead generation and
                sales.
              </li>
              <li>Enterprise readiness: multi-site setups, granular role management, single sign-on (SSO) and audit logging.</li>
            </ul>
          </article>

          {/* Services & Capabilities - use grid but allow longer copy below */}
          <section aria-label="WordPress capabilities" style={{ marginTop: '2rem' }}>
            <div className="section-header text-center">
              <h2>Our WordPress Capabilities</h2>
              <p>Full-service WordPress development, integration, and ongoing care.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Custom Themes & Design Systems</h3>
                <p>
                  Beautiful, brand-driven themes and component libraries built for reuse. We create accessible components, design
                  systems, and editor-friendly blocks so your team can publish with confidence.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">�</div>
                <h3>Plugins & Integrations</h3>
                <p>
                  Custom plugin development and integrations with CRM, payment gateways, marketing automation, and headless APIs. We
                  prioritize maintainable code and clear upgrade paths.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">�</div>
                <h3>WooCommerce & E‑commerce</h3>
                <p>
                  End-to-end WooCommerce implementations, custom checkout flows, subscription platforms, and performance tuning for
                  high-traffic stores.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔁</div>
                <h3>Migrations & Upgrades</h3>
                <p>
                  Safe migrations from legacy CMS platforms or older WordPress versions, including data mapping, redirects, and SEO
                  preservation plans.
                </p>
              </div>
            </div>

            {/* Longer descriptions outside cards */}
            <div style={{ marginTop: '1.5rem' }}>
              <h4>Headless WordPress & Jamstack</h4>
              <p>
                For clients that need extreme performance and modern developer experience, we decouple WordPress as a content API and
                build lightweight frontends with React/Next.js or static site generators. This approach keeps editorial workflows in
                WordPress while delivering faster page loads and better scalability.
              </p>

              <h4>Enterprise & Multi-site</h4>
              <p>
                We build and operate multi-site WordPress networks with centralized governance, single-sign-on, and automated deployments
                to support distributed teams and large content operations.
              </p>
            </div>
          </section>

          {/* Performance, Security, and SEO */}
          <section style={{ marginTop: '2rem' }}>
            <h2>Performance, Security & SEO</h2>
            <p>
              Fast, secure, and discoverable websites are non-negotiable. Our WordPress projects include performance budgets, image
              workflows, lazy-loading, caching strategies, and optional CDN configuration. Security hardening and automated backups are
              standard, and we follow best practices for plugin selection and update schedules to reduce attack surfaces.
            </p>

            <ul>
              <li>Automated testing and staging environments for every release</li>
              <li>Security audits, access controls, and proactive monitoring</li>
              <li>Structured data and on-page SEO improvements to increase visibility</li>
            </ul>
          </section>

          {/* Pricing & Packages - keep concise */}
          <section style={{ marginTop: '2rem' }}>
            <h2>Packages & Typical Investment</h2>
            <p>
              Below are typical starting ranges — final estimates depend on scope, integrations, and custom requirements. We offer
              fixed-price and retainer-based engagements.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Starter</h3>
                <p>
                  From $2,000 — ideal for brochure sites and small business websites. Includes custom theme, SEO basics, and 1–2 month
                  support.
                </p>
              </div>

              <div className="feature-card">
                <h3>Business</h3>
                <p>
                  From $5,000 — advanced features, WooCommerce or custom plugins, analytics integration, and performance tuning.
                </p>
              </div>

              <div className="feature-card">
                <h3>Enterprise</h3>
                <p>
                  From $12,000 — multi-site architectures, SSO, compliance, and dedicated SLA for large organizations.
                </p>
              </div>
            </div>
          </section>

          {/* Process (short) */}
          <section style={{ marginTop: '2rem' }}>
            <h2>How we work</h2>
            <ol>
              <li><strong>Discovery:</strong> define goals, metrics, and required integrations.</li>
              <li><strong>Design:</strong> prototypes and brand-aligned visual design.</li>
              <li><strong>Build:</strong> iterative development with automated testing and staging.</li>
              <li><strong>Launch & Improve:</strong> monitoring, analytics, and ongoing optimization.</li>
            </ol>
          </section>

          {/* FAQ removed as requested */}

          {/* CTA */}
          <section className="cta-section" style={{ marginTop: '2.5rem' }}>
            <h3>Start your WordPress project</h3>
            <p>Schedule a free consultation to get a tailored plan, timeline, and transparent pricing for your project.</p>
            <Link to="/contact" className="cta-button primary">Book a Free Consultation</Link>
          </section>
        </div>
      </section>
    </main>
  );
};

export default WordPress;
