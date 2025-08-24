
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const WebDevelopment: React.FC = () => {
  return (
    <main className="page-container" role="main">
      {/* Hero */}
      <header className="hero-section service-hero" aria-labelledby="webdev-title">
        <div className="hero-content">
          <h1 id="webdev-title">Professional Web Development Services</h1>
          <p>
            Custom web development services to increase conversions, improve SEO, and build scalable, secure digital platforms using
            React, Next.js, and modern backend technologies.
          </p>
        </div>
      </header>

      {/* Overview */}
      <section className="content-section" aria-label="Service overview">
        <div className="container">
          <article className="service-overview glass-card">
            <h2>Comprehensive Web Solutions for Growth</h2>
            <p>
              We design and build production-grade websites and web applications focused on measurable business outcomes. Whether you
              need an SEO-friendly marketing site, a conversion-optimized Shopify store, or a scalable custom web application, our team
              delivers solutions that drive traffic, convert visitors, and grow customer lifetime value. We prioritize fast page loads,
              accessibility, and secure integrations so your site performs well in search, provides a great user experience, and supports
              your long-term growth plans.
            </p>

            <p>
              Our work is rooted in a results-driven approach: discovery and analytics to identify opportunities, experience-led design
              to improve conversions, and engineering best practices to deliver maintainable, testable code. We also help teams adopt
              observability and performance budgets so improvements are measurable after launch.
            </p>

            <ul>
              <li>
                Performance & Core Web Vitals: optimized build pipelines, image/video best practices, and server-side rendering options to
                improve speed and SEO.
              </li>
              <li>
                Conversion Optimization: data-informed UX, A/B testing readiness, and analytics instrumentation to increase leads and
                revenue.
              </li>
              <li>Accessibility & WCAG compliance to reach more users and reduce legal risk.</li>
              <li>Scalable architectures and cloud-friendly deployments to support growth and high availability.</li>
              <li>Secure integrations with payments, CRM, and ERP systems while following security best practices.</li>
              <li>Flexible CMS options: WordPress (headless or traditional), Shopify, and custom admin panels for editorial control.</li>
            </ul>

            <p>
              Ready to discuss requirements? See the Deliverables section below for how we structure projects and the typical milestones
              we deliver for web development engagements.
            </p>
          </article>

          {/* Services Grid */}
          <section aria-label="Our web services" style={{ marginTop: '2rem' }}>
            <div className="section-header text-center">
              <h2>Our Web Services</h2>
              <p>WordPress, Shopify, Wix, and custom web applications built to deliver results.</p>
            </div>

            <div className="features-grid">
              <article className="feature-card" aria-labelledby="svc-wordpress">
                <div className="feature-icon" aria-hidden>📝</div>
                <h3 id="svc-wordpress">WordPress Development</h3>
                <p>
                  Enterprise WordPress and headless WordPress implementations that make content management simple while improving
                  performance and SEO for organic growth.
                </p>
                <Link to="/services/web-development/wordpress" className="cta-button">Learn More</Link>
              </article>

              <article className="feature-card" aria-labelledby="svc-shopify">
                <div className="feature-icon" aria-hidden>🛒</div>
                <h3 id="svc-shopify">Shopify & E‑commerce</h3>
                <p>
                  High-converting Shopify stores and custom storefronts that reduce cart abandonment and increase average order value.
                </p>
                <Link to="/services/web-development/shopify" className="cta-button">Learn More</Link>
              </article>

              <article className="feature-card" aria-labelledby="svc-wix">
                <div className="feature-icon" aria-hidden>🎨</div>
                <h3 id="svc-wix">Wix & Page Builders</h3>
                <p>
                  Fast, polished websites using Wix and other page builders for small businesses that need a great presence fast.
                </p>
                <Link to="/services/web-development/wix" className="cta-button">Learn More</Link>
              </article>

              <article className="feature-card" aria-labelledby="svc-custom">
                <div className="feature-icon" aria-hidden>⚙️</div>
                <h3 id="svc-custom">Custom Web Applications</h3>
                <p>
                  Scalable single-page applications and multi-service backends built with React, TypeScript, Node.js, and cloud-native
                  architecture for long-term maintainability.
                </p>
                <Link to="/services/web-development/custom" className="cta-button">Learn More</Link>
              </article>
            </div>
          </section>

          {/* Deliverables */}
          <section aria-label="Deliverables" style={{ marginTop: '2rem' }}>
            <div className="section-header text-center">
              <h2>Deliverables</h2>
              <p>Clear milestones and tangible outcomes for every engagement.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📄</div>
                <h3>Discovery & Strategy</h3>
                <p>Market analysis, stakeholder interviews, requirements, and a prioritized roadmap that aligns with business KPIs.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🧩</div>
                <h3>Design & Prototyping</h3>
                <p>Wireframes, high-fidelity designs, and clickable prototypes validated with user testing to reduce development risk.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Implementation & QA</h3>
                <p>Production-ready code, automated tests, accessibility audits, and deployment pipelines for reliable releases.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔁</div>
                <h3>Support & Optimization</h3>
                <p>Monitoring, performance tuning, security updates, and iterative improvements based on analytics and user feedback.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section aria-label="Tech stack" style={{ marginTop: '2rem' }}>
            <div className="section-header text-center">
              <h2>Tech Stack</h2>
              <p>We use battle-tested technologies to deliver fast, secure, and maintainable products.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Frontend</h3>
                <p>
                  React, Next.js, Vite, TypeScript — component-driven architectures, server-side rendering where needed, and
                  accessibility-first UIs.
                </p>
              </div>

              <div className="feature-card">
                <h3>Backend</h3>
                <p>
                  Node.js, Express, Python (Django/FastAPI), PostgreSQL, Redis — REST and GraphQL APIs, secure authentication, and data
                  integrity practices.
                </p>
              </div>

              <div className="feature-card">
                <h3>E‑commerce</h3>
                <p>
                  Shopify, WooCommerce, headless commerce patterns, payment gateway integrations, and conversion-focused UX.
                </p>
              </div>

              <div className="feature-card">
                <h3>DevOps</h3>
                <p>
                  Docker, CI/CD (GitHub Actions), monitoring, and cloud deployments on AWS / Google Cloud / Azure for scalable
                  infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline & Pricing */}
          <section aria-label="Timeline and pricing" style={{ marginTop: '2rem' }}>
            <div className="section-header text-center">
              <h2>Timeline & Pricing</h2>
              <p>Estimate ranges to plan budget and expectations. Contact us for a tailored proposal.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h3>Small (Landing / Brochure)</h3>
                <p>2–4 weeks. Ideal for small businesses needing a modern marketing site. SEO basics, analytics, and lead forms included.</p>
              </div>

              <div className="feature-card">
                <h3>Medium (E‑commerce / Multi‑page)</h3>
                <p>6–12 weeks. Includes integrations (payments, inventory), custom flows, and performance optimizations.</p>
              </div>

              <div className="feature-card">
                <h3>Large (SaaS / Custom Apps)</h3>
                <p>12+ weeks. Dedicated team, sprint-based delivery, API integrations, and enterprise-grade security and compliance.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section glass-card" style={{ marginTop: '2.5rem' }}>
            <h3>Ready to build something great?</h3>
            <p>Book a free consultation and get a tailored plan and cost estimate.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/contact" className="cta-button primary">Book a Free Consultation</Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;
