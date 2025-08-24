import React from 'react';

const WebsiteAudit: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Website Audit</h1>
        <p>Technical, SEO, and UX audit to find quick wins and long-term improvements.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>Audit Checklist</h2>
        <ul>
          <li>Performance & Core Web Vitals</li>
          <li>SEO & accessibility</li>
          <li>UX & conversion</li>
        </ul>
        <a href="/contact" className="cta-button primary">Get Audit</a>
      </div>
    </div>
  </div>
);

export default WebsiteAudit;
