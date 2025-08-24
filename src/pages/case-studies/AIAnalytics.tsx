import React from 'react';

const AIAnalytics: React.FC = () => (
  <div className="page-container">
    <div className="hero-section case-study-hero">
      <div className="hero-content">
        <div className="case-study-label">Case Study</div>
        <h1>Manufacturing Forecasting Improves Accuracy by 28%</h1>
        <p>Predictive analytics and demand forecasting reduced stockouts and improved planning.</p>
      </div>
    </div>

    <div className="content-section">
      <div className="container">
        <h2>Results</h2>
        <ul>
          <li>+28% forecast accuracy</li>
          <li>-22% excess inventory</li>
          <li>Faster planning cycles</li>
        </ul>
        <div className="cta-section">
          <a href="/contact" className="cta-button primary">Explore AI</a>
        </div>
      </div>
    </div>
  </div>
);

export default AIAnalytics;
