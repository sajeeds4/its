import React from 'react';

const ShopifyStore: React.FC = () => (
  <div className="page-container">
    <div className="hero-section case-study-hero">
      <div className="hero-content">
        <div className="case-study-label">Case Study</div>
        <h1>Fashion Brand Increases Online Sales by 40% with Shopify</h1>
        <p>High-converting storefront, optimized checkout, and analytics improved revenue and AOV.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <h2>Highlights</h2>
        <ul>
          <li>+40% online sales</li>
          <li>-35% cart abandonment</li>
          <li>+60% page speed improvement</li>
        </ul>
        <div className="cta-section">
          <a href="/contact" className="cta-button primary">Launch Your Store</a>
        </div>
      </div>
    </div>
  </div>
);

export default ShopifyStore;
