import React from 'react';

const WordPressRedesign: React.FC = () => (
  <div className="page-container">
    <div className="hero-section case-study-hero">
      <div className="hero-content">
        <div className="case-study-label">Case Study</div>
        <h1>Professional Services Firm Grows Leads 2.3x</h1>
        <p>Corporate WordPress redesign with SEO overhaul and performance improvements.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <h2>Outcomes</h2>
        <ul>
          <li>+130% organic traffic</li>
          <li>+2.3x qualified leads</li>
          <li>Core Web Vitals passed</li>
        </ul>
        <div className="cta-section">
          <a href="/contact" className="cta-button primary">Redesign Your Site</a>
        </div>
      </div>
    </div>
  </div>
);

export default WordPressRedesign;
