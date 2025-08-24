import React from 'react';

const QuickQuote: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Quick Quote</h1>
        <p>Get a fast, ballpark estimate for your project.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>How It Works</h2>
        <ol>
          <li>Tell us about your project</li>
          <li>We review and respond</li>
          <li>Get a quick estimate</li>
        </ol>
        <a href="/contact" className="cta-button primary">Request Quote</a>
      </div>
    </div>
  </div>
);

export default QuickQuote;
