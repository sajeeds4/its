import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters. This policy explains what we collect and how we use it.</p>
      </div>
    </div>
    <div className="content-section">
      <div className="container">
        <h2>Overview</h2>
        <p>We collect only the data necessary to deliver our services. We never sell your data.</p>
        <h3>Data We Collect</h3>
        <ul>
          <li>Contact details you provide</li>
          <li>Analytics about site usage</li>
          <li>Project-related information</li>
        </ul>
        <h3>Your Rights</h3>
        <ul>
          <li>Access, correct, or delete your data</li>
          <li>Opt out of non-essential tracking</li>
          <li>Contact us at any time for questions</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
