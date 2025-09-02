import React from 'react';
import SEO from '../../components/SEO';

const Networking: React.FC = () => (
  <div className="page-container">
    <SEO
      title="Networking Services | Secure LAN, SD‑WAN, Wi‑Fi | Aethrix Systems"
      description="Design, secure, and operate reliable networks: LAN/WAN, SD‑WAN, Wi‑Fi, firewalls, IDS/IPS, and SRE monitoring."
      path="/services/networking"
      type="service"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Networking', path: '/services/networking' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Networking Services',
        serviceType: 'IT Networking',
        provider: { '@type': 'Organization', name: 'Aethrix Systems' },
        url: 'https://aethrixsystems.com/services/networking',
      }}
    />
    <div className="hero-section service-hero">
      <div className="hero-content">
        <h1>Networking Services</h1>
        <p>Reliable, secure network design and management for offices, branches, and cloud connectivity.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛰️</div>
            <h3>Design & Implementation</h3>
            <ul>
              <li>LAN/WAN architecture</li>
              <li>SD-WAN & VPN</li>
              <li>Wi‑Fi surveys & rollout</li>
              <li>Zero-trust networking</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Security</h3>
            <ul>
              <li>Next-gen firewalls</li>
              <li>IDS/IPS</li>
              <li>Network segmentation</li>
              <li>SASE solutions</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Monitoring & SRE</h3>
            <ul>
              <li>Observability & alerts</li>
              <li>Capacity planning</li>
              <li>Incident response</li>
              <li>Change management</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Build a resilient network.</h3>
          <a href="/contact" className="cta-button primary">Talk to an Engineer</a>
        </div>
      </div>
    </div>
  </div>
);

export default Networking;
