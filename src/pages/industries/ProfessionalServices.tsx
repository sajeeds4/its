import React from 'react';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1 id="professional-title">Professional Services Technology</h1>
          <p>Empowering law firms, accounting practices, consulting agencies, and professional service providers with technology solutions that enhance productivity and client satisfaction.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>Technology Solutions for Professional Services</h2>
            <p>Professional service firms need specialized technology that helps them manage clients efficiently, deliver exceptional service, and scale their operations. Our solutions are designed specifically for the unique needs of professional service providers.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon">⚖️</div>
              <h3>Client Management Systems</h3>
              <p>CRM solutions tailored for professional services to manage clients, projects, and communication.</p>
              <ul>
                <li>Client portal access</li>
                <li>Document management</li>
                <li>Communication tracking</li>
                <li>Project milestone tracking</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">⏰</div>
              <h3>Time & Billing Automation</h3>
              <p>Automated time tracking and billing to improve invoicing accuracy and cash flow.</p>
              <ul>
                <li>Automated time tracking</li>
                <li>Expense management</li>
                <li>Invoice automation</li>
                <li>Trust accounting (for law firms)</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">📄</div>
              <h3>Document Management</h3>
              <p>Secure, cloud-based document management with version control and collaboration features.</p>
              <ul>
                <li>Version control</li>
                <li>Security & encryption</li>
                <li>Collaboration tools</li>
                <li>Compliance tracking</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">🔐</div>
              <h3>Security & Compliance</h3>
              <p>Enterprise-grade security ensuring client confidentiality and compliance.</p>
              <ul>
                <li>Data encryption</li>
                <li>Access controls</li>
                <li>Audit trails</li>
                <li>Compliance reporting</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">📊</div>
              <h3>Business Intelligence</h3>
              <p>Analytics to monitor firm performance, profitability, and resource utilization.</p>
              <ul>
                <li>Financial dashboards</li>
                <li>Performance metrics</li>
                <li>Resource utilization</li>
                <li>Growth analytics</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">🤝</div>
              <h3>Client Collaboration</h3>
              <p>Secure collaboration tools and client portals for better communication and transparency.</p>
              <ul>
                <li>Secure file sharing</li>
                <li>Real-time messaging</li>
                <li>Project updates</li>
                <li>Approval workflows</li>
              </ul>
            </div>
          </div>

          <div className="case-study-highlight">
            <h3>Success Story: Law Firm Reduces Admin Time by 50%</h3>
            <p>A mid-size law firm implemented our integrated practice management solution, combining client management, time tracking, and document management. They reduced administrative overhead by 50% and increased billable hour efficiency by 30%.</p>
            <a href="/case-studies" className="cta-button">Read Full Case Study</a>
          </div>

          <div className="industry-benefits">
            <h3>Key Benefits for Professional Services</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Increased Efficiency</strong>
                <p>Automation reduces administrative tasks and increases billable hour productivity</p>
              </div>
              <div className="benefit-item">
                <strong>Better Client Service</strong>
                <p>Client portals and communication tools enhance the client experience</p>
              </div>
              <div className="benefit-item">
                <strong>Improved Cash Flow</strong>
                <p>Automated billing and time tracking accelerate payment cycles</p>
              </div>
              <div className="benefit-item">
                <strong>Risk Management</strong>
                <p>Compliance tools and security features protect against regulatory risks</p>
              </div>
            </div>
          </div>

          <div className="service-types">
            <h3>We Serve All Types of Professional Services</h3>
            <div className="service-types-grid">
              <div className="service-type">
                <h4>Law Firms</h4>
                <p>Practice management, case management, trust accounting, and legal document automation</p>
              </div>
              <div className="service-type">
                <h4>Accounting Firms</h4>
                <p>Tax software integration, client management, document workflow, and financial reporting</p>
              </div>
              <div className="service-type">
                <h4>Consulting Agencies</h4>
                <p>Project management, resource planning, client collaboration, and knowledge management</p>
              </div>
              <div className="service-type">
                <h4>Architecture & Engineering</h4>
                <p>Project collaboration, CAD integration, client approval workflows, and document management</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Modernize Your Practice?</h3>
            <p>Let's discuss how our technology solutions can help you increase efficiency, improve client satisfaction, and grow your professional service firm.</p>
            <a href="/contact" className="cta-button primary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
