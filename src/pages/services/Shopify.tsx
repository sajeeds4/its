import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import './Services.css';

const Shopify: React.FC = () => {
  return (
    <main className="page-container" role="main">
      <SEO
        title="Shopify Development & E‑commerce | Aethrix Systems"
        description="Custom Shopify stores, integrations, subscriptions, and performance optimization to grow revenue."
        path="/services/shopify"
        type="service"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Shopify', path: '/services/shopify' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Shopify Development',
          serviceType: 'E-commerce Development',
          provider: { '@type': 'Organization', name: 'Aethrix Systems' },
          url: 'https://aethrixsystems.com/services/shopify',
        }}
      />
      <header className="hero-section service-hero" aria-labelledby="shopify-title">
        <div className="hero-content">
          <h1 id="shopify-title">Shopify Development & E‑commerce</h1>
          <p>
            Build high-converting Shopify stores with custom design, robust integrations, and performance optimizations that increase
            revenue and reduce cart abandonment.
          </p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <article className="service-overview glass-card">
            <h2>Expert Shopify Solutions</h2>
            <p>
              Our Shopify services combine design, conversion science, and engineering to create storefronts that drive measurable
              growth. We work with startups and enterprises to build stores that are fast, secure, and easy to manage — with custom
              features when off-the-shelf solutions fall short.
            </p>
            <p>
              From catalog architecture and checkout optimization to internationalization and subscription models, we implement
              solutions that support your business model and customer journey. We also provide analytics instrumentation and post-launch
              optimization to continuously improve performance and revenue.
            </p>
          </article>

          <section aria-label="Shopify capabilities" style={{ marginTop: '1.5rem' }}>
            <div className="section-header text-center">
              <h2>Capabilities</h2>
              <p>Design, development, integrations, migrations, and growth-focused services for Shopify stores.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Custom Store Design</h3>
                <p>Pixel-perfect themes optimized for conversions, accessibility, and mobile shopping experiences.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Custom Apps & Integrations</h3>
                <p>Private apps, APIs, and integrations with ERP, CRM, and marketing platforms to automate workflows.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">�</div>
                <h3>Payments & Subscriptions</h3>
                <p>Secure payment gateways, subscription billing, and multi-currency support for global commerce.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">�</div>
                <h3>Inventory & Fulfillment</h3>
                <p>Multi-location inventory, carrier integrations, and fulfillment automation to scale operations efficiently.</p>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '1.5rem' }}>
            <h2>Recommended Shopify Plans</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Shopify Basic</h3>
                <div className="tier-price">$29/month</div>
                <p>Perfect for new businesses starting their e-commerce journey. Includes online store, unlimited products, and 24/7 support.</p>
                <p><strong>Best for:</strong> Startups and small shops</p>
              </div>

              <div className="feature-card">
                <h3>Shopify</h3>
                <div className="tier-price">$79/month</div>
                <p>Most popular plan for growing stores. Adds professional reports, lower fees, and advanced store features.</p>
                <p><strong>Best for:</strong> Growing businesses and established stores</p>
              </div>

              <div className="feature-card">
                <h3>Shopify Plus</h3>
                <div className="tier-price">$2,000+/month</div>
                <p>Enterprise-grade platform for high-volume merchants, with custom automation and dedicated support.</p>
                <p><strong>Best for:</strong> High-volume & enterprise stores</p>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '1.5rem' }}>
            <h2>Development Packages</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Starter</h3>
                <div className="price">$3,500</div>
                <p>Theme setup, up to 50 products, payment setup, basic SEO, and 3 months support.</p>
                <Link to="/contact" className="cta-button">Get Started</Link>
              </div>

              <div className="feature-card">
                <h3>Professional</h3>
                <div className="price">$7,500</div>
                <p>Custom app development, advanced integrations, conversion optimization, and analytics setup.</p>
                <Link to="/contact" className="cta-button">Most Popular</Link>
              </div>

              <div className="feature-card">
                <h3>Enterprise</h3>
                <div className="price">$15,000+</div>
                <p>Shopify Plus setup, custom checkout, multi-store management, and dedicated SLA.</p>
                <Link to="/contact" className="cta-button">Contact Us</Link>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '1.5rem' }}>
            <h2>Results We Track</h2>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-number">150%</div>
                <div className="metric-label">Avg. conversion increase</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">65%</div>
                <div className="metric-label">Faster page loads</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">200+</div>
                <div className="metric-label">Stores launched</div>
              </div>
            </div>
          </section>

          <section className="cta-section glass-card" style={{ marginTop: '2rem' }}>
            <h3>Ready to launch your Shopify store?</h3>
            <p>Contact us for a tailored plan, timeline, and transparent pricing to match your business goals.</p>
            <Link to="/contact" className="cta-button primary">Start Your Store</Link>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Shopify;
