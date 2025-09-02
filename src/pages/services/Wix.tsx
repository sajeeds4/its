import React from 'react';
import './Wix.css';
import { Brush, ShoppingCart, Settings, Search, BarChart2, Wrench } from 'lucide-react';
import SEO from '../../components/SEO';

const Wix: React.FC = () => {
  return (
    <div className="page-container wix-page">
      <SEO
        title="Wix Website Development | Aethrix Systems"
        description="Professional Wix websites with custom designs, e‑commerce, advanced functionality, and SEO."
        path="/services/wix"
        type="service"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Wix', path: '/services/wix' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Wix Development',
          serviceType: 'Web Development',
          provider: { '@type': 'Organization', name: 'Aethrix Systems' },
          url: 'https://aethrixsystems.com/services/wix',
        }}
      />
      <header className="wix-hero glass-card">
        <div className="container">
          <h1>Wix Development Services</h1>
          <p className="lead">Professional Wix websites with custom designs, advanced functionality, and seamless integrations for businesses of every size.</p>
          <a className="cta-button primary" href="/contact">Start Your Project</a>
        </div>
      </header>

      <main className="container wix-main">
        <section className="intro">
          <h2>Expert Wix Solutions</h2>
          <p className="muted">Wix powers over 200 million websites worldwide with its intuitive drag-and-drop platform. At Aethrix Systems, our certified Wix experts go beyond templates—we create stunning, professional websites that balance ease of use with enterprise-level functionality to help your business succeed online.</p>
        </section>

        <section className="offerings">
          <h2>Our Wix Service Offerings</h2>
          <div className="offer-grid">
            <article className="offer-card">
              <div className="offer-head"><Brush className="ico" size={36} color="var(--accent)" /><h4>Custom Design & Branding</h4></div>
              <p className="muted">Unique Wix designs that reflect your brand, mobile-first responsive layouts and polished aesthetics.</p>
            </article>

            <article className="offer-card">
              <div className="offer-head"><ShoppingCart className="ico" size={36} color="var(--accent)" /><h4>E‑Commerce Integration</h4></div>
              <p className="muted">Full-featured stores, secure payments, inventory & order management, shipping and tax configuration.</p>
            </article>

            <article className="offer-card">
              <div className="offer-head"><Settings className="ico" size={36} color="var(--accent)" /><h4>Advanced Functionality</h4></div>
              <p className="muted">Custom code, API integrations, database setup and third-party tool connections beyond default Wix limits.</p>
            </article>

            <article className="offer-card">
              <div className="offer-head"><Search className="ico" size={36} color="var(--accent)" /><h4>SEO Optimization</h4></div>
              <p className="muted">Technical SEO setup, metadata, schema markup and performance improvements to boost visibility.</p>
            </article>

            <article className="offer-card">
              <div className="offer-head"><BarChart2 className="ico" size={36} color="var(--accent)" /><h4>Analytics & Tracking</h4></div>
              <p className="muted">Google Analytics, conversion tracking, heatmaps and real-time performance monitoring.</p>
            </article>

            <article className="offer-card">
              <div className="offer-head"><Wrench className="ico" size={36} color="var(--accent)" /><h4>Maintenance & Support</h4></div>
              <p className="muted">Regular updates, security patching, content and performance optimization and priority support.</p>
            </article>
          </div>
        </section>

        <section className="plans">
          <h2>Wix Plan Recommendations</h2>
          <div className="plans-wrap">
            <table className="plans-table">
              <thead>
                <tr><th>Plan</th><th>Price</th><th>Best For</th><th>Key Features</th></tr>
              </thead>
              <tbody>
                <tr><td>Business Basic</td><td>$23/month</td><td>Small businesses, portfolios</td><td>Custom domain, remove ads, 3GB storage, basic support</td></tr>
                <tr className="highlight"><td>Business Unlimited ⭐</td><td>$29/month</td><td>Growing businesses (Most Popular)</td><td>Everything in Basic + 35GB storage, analytics, marketing tools</td></tr>
                <tr><td>Business VIP</td><td>$49/month</td><td>Established businesses</td><td>Everything in Unlimited + 50GB storage, priority support, professional review</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="packages">
          <h2>Wix Development Packages</h2>
          <div className="package-grid">
            <article className="package-card">
              <h4>🚀 Wix Starter – $1,500</h4>
              <ul className="muted">
                <li>Custom design setup</li>
                <li>Up to 10 pages</li>
                <li>Mobile optimization</li>
                <li>Basic SEO & contact forms</li>
                <li>2 months support</li>
              </ul>
              <a className="cta-button" href="/contact">Get Started</a>
            </article>

            <article className="package-card featured">
              <h4>🌟 Wix Professional – $3,500 (Most Popular)</h4>
              <ul className="muted">
                <li>Everything in Starter</li>
                <li>E-commerce integration</li>
                <li>Advanced SEO & analytics</li>
                <li>Custom functionality</li>
                <li>4 months support</li>
              </ul>
              <a className="cta-button primary" href="/contact">Get Started</a>
            </article>

            <article className="package-card">
              <h4>🏢 Wix Enterprise – $7,500</h4>
              <ul className="muted">
                <li>Everything in Professional</li>
                <li>Custom integrations & automation</li>
                <li>Priority support</li>
                <li>6 months support</li>
              </ul>
              <a className="cta-button" href="/contact">Contact Us</a>
            </article>
          </div>
        </section>

        <section className="why-choose wix-why">
          <h2>Why Choose Wix?</h2>
          <div className="why-grid">
            <div className="why-item"><h4>User-Friendly</h4><p className="muted">Drag-and-drop editor for easy updates</p></div>
            <div className="why-item"><h4>All-in-One Platform</h4><p className="muted">Hosting, security & maintenance included</p></div>
            <div className="why-item"><h4>App Market</h4><p className="muted">Hundreds of integrations to extend functionality</p></div>
            <div className="why-item"><h4>Mobile Optimized</h4><p className="muted">Automatic optimization for every device</p></div>
          </div>
        </section>

        <section className="compare">
          <h2>Wix vs Other Platforms</h2>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr><th>Feature</th><th>Wix ⭐</th><th>WordPress</th><th>Squarespace</th></tr>
              </thead>
              <tbody>
                <tr><td>Ease of Use</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>Design Flexibility</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>E-Commerce</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>Cost</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="final-cta glass-card">
          <h2>💡 Ready to Build Your Wix Website?</h2>
          <p className="muted">Let’s create a professional Wix website that represents your brand and drives measurable business growth.</p>
          <a className="cta-button primary" href="/contact">Start Your Project</a>
        </section>
      </main>
    </div>
  );
};

export default Wix;
