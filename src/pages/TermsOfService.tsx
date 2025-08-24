import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Terms of Service</h1>
        <p>The terms that govern using our website and services.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>Agreement</h2>
        <p>By using our site, you agree to these terms. Service-specific terms apply to projects.</p>
        <h3>Use of Site</h3>
        <ul>
          <li>Don't misuse or attempt to disrupt services</li>
          <li>Respect intellectual property</li>
          <li>Provide accurate information</li>
        </ul>
        <h3>Liability</h3>
        <p>We provide our site as-is. To the extent permitted by law, we limit liabilities for indirect damages.</p>
      </div>
    </div>
  </div>
);

export default TermsOfService;
