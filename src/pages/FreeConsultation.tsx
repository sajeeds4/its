import React from 'react';

const FreeConsultation: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Free Consultation</h1>
        <p>Get a 30‑minute expert consultation about your project, at no cost.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>What You Get</h2>
        <ul>
          <li>Project review</li>
          <li>Solution options</li>
          <li>Budget ranges</li>
        </ul>
        <a href="/contact" className="cta-button primary">Book Now</a>
      </div>
    </div>
  </div>
);

export default FreeConsultation;
