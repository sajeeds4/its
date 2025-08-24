import React from 'react';

const SmallBusiness: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section industry-hero">
        <div className="hero-content">
          <h1>Small & Medium Business Solutions</h1>
          <p>Affordable, scalable technology solutions designed specifically for small and medium businesses to compete with larger enterprises.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>Enterprise-Grade Technology for SMBs</h2>
            <p>Small and medium businesses deserve access to the same powerful technology as large enterprises. Our solutions are designed to be affordable, easy to implement, and scalable as your business grows.</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">💼</div>
              <h3>Business Management Systems</h3>
              <p>All-in-one business management solutions that integrate CRM, project management, accounting, and operations in one platform.</p>
              <ul>
                <li>Customer relationship management</li>
                <li>Project & task management</li>
                <li>Invoice & payment processing</li>
                <li>Inventory tracking</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🌐</div>
              <h3>Professional Websites</h3>
              <p>Custom websites and e-commerce solutions that help small businesses establish a strong online presence and compete digitally.</p>
              <ul>
                <li>Responsive web design</li>
                <li>E-commerce functionality</li>
                <li>SEO optimization</li>
                <li>Content management</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">☁️</div>
              <h3>Cloud Migration</h3>
              <p>Affordable cloud solutions that reduce IT costs, improve collaboration, and provide enterprise-level security for small businesses.</p>
              <ul>
                <li>Office 365 / Google Workspace</li>
                <li>Cloud storage & backup</li>
                <li>Remote work enablement</li>
                <li>Disaster recovery</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📱</div>
              <h3>Digital Marketing Tools</h3>
              <p>Integrated digital marketing platforms that help small businesses reach customers, manage social media, and track marketing ROI.</p>
              <ul>
                <li>Social media management</li>
                <li>Email marketing automation</li>
                <li>Analytics & reporting</li>
                <li>Lead generation</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🔐</div>
              <h3>Cybersecurity</h3>
              <p>Enterprise-grade cybersecurity solutions tailored for small businesses, protecting against threats without breaking the budget.</p>
              <ul>
                <li>Endpoint protection</li>
                <li>Email security</li>
                <li>Backup & recovery</li>
                <li>Security training</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📊</div>
              <h3>Business Intelligence</h3>
              <p>Simple yet powerful analytics tools that help small business owners make data-driven decisions and identify growth opportunities.</p>
              <ul>
                <li>Financial dashboards</li>
                <li>Sales analytics</li>
                <li>Customer insights</li>
                <li>Performance tracking</li>
              </ul>
            </div>
          </div>

          <div className="case-study-highlight">
            <h3>Success Story: Local Business Increases Revenue by 60%</h3>
            <p>We helped a local service business implement a complete digital transformation including a new website, CRM system, and digital marketing automation. Their online revenue increased by 60% within 6 months.</p>
            <a href="/case-studies" className="cta-button">Read Full Case Study</a>
          </div>

          <div className="industry-benefits">
            <h3>Why SMBs Choose Our Solutions</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Affordable Pricing</strong>
                <p>Solutions designed for small business budgets with flexible payment options</p>
              </div>
              <div className="benefit-item">
                <strong>Quick Implementation</strong>
                <p>Fast deployment to minimize disruption and get you up and running quickly</p>
              </div>
              <div className="benefit-item">
                <strong>Scalable Growth</strong>
                <p>Solutions that grow with your business from startup to enterprise</p>
              </div>
              <div className="benefit-item">
                <strong>Ongoing Support</strong>
                <p>Dedicated support to ensure your technology works when you need it</p>
              </div>
            </div>
          </div>

          <div className="smb-challenges">
            <h3>Common SMB Technology Challenges We Solve</h3>
            <div className="challenges-grid">
              <div className="challenge">
                <h4>Limited IT Budget</h4>
                <p>We provide enterprise-grade solutions at SMB-friendly prices with flexible payment plans</p>
              </div>
              <div className="challenge">
                <h4>No IT Staff</h4>
                <p>Our managed services act as your virtual IT department, handling everything</p>
              </div>
              <div className="challenge">
                <h4>Legacy Systems</h4>
                <p>We modernize outdated systems with minimal disruption to your operations</p>
              </div>
              <div className="challenge">
                <h4>Security Concerns</h4>
                <p>Enterprise-level security without the enterprise-level complexity or cost</p>
              </div>
              <div className="challenge">
                <h4>Growth Scaling</h4>
                <p>Technology that scales seamlessly as your business grows and evolves</p>
              </div>
              <div className="challenge">
                <h4>Remote Work</h4>
                <p>Cloud solutions that enable productive remote and hybrid work models</p>
              </div>
            </div>
          </div>

          <div className="smb-packages">
            <h3>Popular SMB Solution Packages</h3>
            <div className="packages-grid">
              <div className="package">
                <h4>Startup Package</h4>
                <p>Website, basic CRM, cloud email, and cybersecurity essentials</p>
                <span className="package-price">Starting at $299/month</span>
              </div>
              <div className="package featured">
                <h4>Growth Package</h4>
                <p>Everything in Startup plus e-commerce, marketing automation, and advanced analytics</p>
                <span className="package-price">Starting at $599/month</span>
              </div>
              <div className="package">
                <h4>Scale Package</h4>
                <p>Enterprise features including ERP, advanced integrations, and dedicated support</p>
                <span className="package-price">Starting at $999/month</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Level Up Your Small Business?</h3>
            <p>Let's discuss how our affordable technology solutions can help your small business compete with larger companies and accelerate growth.</p>
            <a href="/contact" className="cta-button primary">Get Free Business Assessment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBusiness;
