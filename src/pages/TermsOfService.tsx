

import React from 'react';
import './PolicyShared.css';


const TermsOfService: React.FC = () => (
  <div className="page-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Terms of Service</h1>
        <p>These terms govern your use of the Aethrix Systems website and services.</p>
      </div>
    </div>
    <div className="content-section">
      <h2>Acceptance of Terms</h2>
      <p>By accessing or using our website, you agree to these terms. Additional terms may apply to specific services or projects.</p>
      <h2>Use of Services</h2>
      <ul>
        <li>Do not misuse, disrupt, or attempt unauthorized access to our services</li>
        <li>Respect all intellectual property and proprietary rights</li>
        <li>Provide accurate and lawful information</li>
      </ul>
      <h2>Intellectual Property</h2>
      <p>All content, trademarks, and materials on this site are owned by Aethrix Systems or its licensors. Do not reproduce or distribute without permission.</p>
      <h2>Limitation of Liability</h2>
      <p>Our website and services are provided "as is". To the extent permitted by law, Aethrix Systems is not liable for indirect, incidental, or consequential damages.</p>
      <h2>Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use of the site means you accept the revised terms.</p>
      <h2>Contact</h2>
      <p>For questions, contact us at <a href="mailto:info@aethrixsystems.com">info@aethrixsystems.com</a>.</p>
    </div>
  </div>
);

export default TermsOfService;
