

import React from 'react';
import './PolicyShared.css';


const PrivacyPolicy: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy describes how Aethrix Systems collects, uses, and protects your information.</p>
      </div>
    </div>
    <div className="content-section">
      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email, phone, and other contact details you provide via forms or communication.</li>
        <li><strong>Usage Data:</strong> Analytics about how you use our website and services.</li>
        <li><strong>Project Data:</strong> Information you share for project discussions, quotes, or consultations.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services</li>
        <li>To communicate with you about your inquiries or projects</li>
        <li>To analyze site usage and enhance user experience</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2>How We Protect Your Data</h2>
      <ul>
        <li>We use industry-standard security measures</li>
        <li>We do not sell or rent your personal data</li>
        <li>Access to your data is limited to authorized personnel</li>
      </ul>
      <h2>Your Rights</h2>
      <ul>
        <li>Request access, correction, or deletion of your data</li>
        <li>Opt out of non-essential communications</li>
        <li>Contact us at <a href="mailto:info@aethrixsystems.com">info@aethrixsystems.com</a> for privacy questions</li>
      </ul>
      <h2>Policy Updates</h2>
      <p>This policy may be updated periodically. Please review it regularly for changes.</p>
    </div>
  </div>
);

export default PrivacyPolicy;
