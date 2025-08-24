import React from 'react';

const Office365GSuite: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1>Office 365 & Google Workspace Solutions</h1>
          <p>Cloud productivity solutions that enable seamless collaboration, communication, and productivity for modern businesses.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-overview">
            <h2>Cloud Productivity Transformation</h2>
            <p>Modernize your workplace with Microsoft Office 365 or Google Workspace. Our experts help you migrate, configure, and optimize cloud productivity suites for maximum efficiency and collaboration.</p>
          </div>

          <div className="platform-comparison">
            <div className="comparison-grid">
              <div className="platform-card">
                <div className="platform-icon">🔷</div>
                <h3>Microsoft Office 365</h3>
                <p>Enterprise-grade productivity suite with advanced security and compliance features.</p>
                <div className="platform-features">
                  <h4>Key Applications:</h4>
                  <ul>
                    <li>Word, Excel, PowerPoint</li>
                    <li>Outlook & Exchange Online</li>
                    <li>Teams for collaboration</li>
                    <li>OneDrive cloud storage</li>
                    <li>SharePoint & Power Platform</li>
                  </ul>
                  <h4>Best For:</h4>
                  <p>Large enterprises, regulated industries, complex integrations</p>
                </div>
              </div>

              <div className="platform-card">
                <div className="platform-icon">🔴</div>
                <h3>Google Workspace</h3>
                <p>Simple, intuitive cloud productivity suite focused on real-time collaboration.</p>
                <div className="platform-features">
                  <h4>Key Applications:</h4>
                  <ul>
                    <li>Gmail & Google Calendar</li>
                    <li>Docs, Sheets, Slides</li>
                    <li>Google Meet & Chat</li>
                    <li>Google Drive storage</li>
                    <li>Google Sites & Forms</li>
                  </ul>
                  <h4>Best For:</h4>
                  <p>SMBs, startups, teams prioritizing simplicity and collaboration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Migration & Setup</h3>
              <p>Seamless migration from legacy systems with minimal downtime and data loss prevention.</p>
              <ul>
                <li>Data migration planning</li>
                <li>Email migration</li>
                <li>File system migration</li>
                <li>User account provisioning</li>
                <li>Domain configuration</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Configuration & Customization</h3>
              <p>Optimized configuration tailored to your business processes and security requirements.</p>
              <ul>
                <li>Security policies setup</li>
                <li>Compliance configuration</li>
                <li>Workflow automation</li>
                <li>Custom app integration</li>
                <li>Mobile device management</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Training & Adoption</h3>
              <p>Comprehensive training programs to ensure successful user adoption and productivity gains.</p>
              <ul>
                <li>User training sessions</li>
                <li>Admin training</li>
                <li>Best practices guidance</li>
                <li>Change management</li>
                <li>Ongoing support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔐</div>
              <h3>Security & Compliance</h3>
              <p>Advanced security configuration and compliance setup for regulated industries.</p>
              <ul>
                <li>Multi-factor authentication</li>
                <li>Data loss prevention</li>
                <li>Advanced threat protection</li>
                <li>Compliance policies</li>
                <li>Audit and reporting</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analytics & Optimization</h3>
              <p>Usage analytics and optimization recommendations to maximize ROI and productivity.</p>
              <ul>
                <li>Usage analytics</li>
                <li>Performance monitoring</li>
                <li>License optimization</li>
                <li>Adoption metrics</li>
                <li>Continuous improvement</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Ongoing Management</h3>
              <p>Continuous management and support to ensure optimal performance and security.</p>
              <ul>
                <li>24/7 monitoring</li>
                <li>Regular updates</li>
                <li>User support</li>
                <li>Backup management</li>
                <li>Performance tuning</li>
              </ul>
            </div>
          </div>

          <div className="pricing-comparison">
            <h3>Platform Pricing Comparison</h3>
            <div className="pricing-table">
              <div className="pricing-header">
                <div className="plan-name">Plan</div>
                <div className="office365">Office 365</div>
                <div className="google-workspace">Google Workspace</div>
              </div>
              
              <div className="pricing-row">
                <div className="plan-name">Basic</div>
                <div className="office365">$6/user/month</div>
                <div className="google-workspace">$6/user/month</div>
              </div>
              
              <div className="pricing-row">
                <div className="plan-name">Business</div>
                <div className="office365">$12.50/user/month</div>
                <div className="google-workspace">$12/user/month</div>
              </div>
              
              <div className="pricing-row">
                <div className="plan-name">Enterprise</div>
                <div className="office365">$22/user/month</div>
                <div className="google-workspace">$18/user/month</div>
              </div>
            </div>
          </div>

          <div className="implementation-packages">
            <h3>Implementation Service Packages</h3>
            <div className="packages-grid">
              <div className="package-card">
                <h4>Basic Setup</h4>
                <div className="package-price">$2,500</div>
                <ul>
                  <li>Up to 25 users</li>
                  <li>Basic migration</li>
                  <li>Standard configuration</li>
                  <li>User training (2 sessions)</li>
                  <li>30 days support</li>
                </ul>
                <a href="/contact" className="cta-button">Get Started</a>
              </div>

              <div className="package-card featured">
                <h4>Business Implementation</h4>
                <div className="package-price">$7,500</div>
                <ul>
                  <li>Up to 100 users</li>
                  <li>Full data migration</li>
                  <li>Custom configuration</li>
                  <li>Security setup</li>
                  <li>Comprehensive training</li>
                  <li>90 days support</li>
                </ul>
                <a href="/contact" className="cta-button">Most Popular</a>
              </div>

              <div className="package-card">
                <h4>Enterprise Solution</h4>
                <div className="package-price">$15,000+</div>
                <ul>
                  <li>Unlimited users</li>
                  <li>Complex migration</li>
                  <li>Advanced security</li>
                  <li>Compliance setup</li>
                  <li>Custom integrations</li>
                  <li>12 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="benefits-section">
            <h3>Benefits of Cloud Productivity Suites</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Enhanced Collaboration</strong>
                <p>Real-time document collaboration and seamless communication across teams</p>
              </div>
              <div className="benefit-item">
                <strong>Improved Security</strong>
                <p>Enterprise-grade security with advanced threat protection and compliance</p>
              </div>
              <div className="benefit-item">
                <strong>Cost Savings</strong>
                <p>Reduce IT infrastructure costs and eliminate on-premise server maintenance</p>
              </div>
              <div className="benefit-item">
                <strong>Scalability</strong>
                <p>Easily scale up or down based on business needs without hardware constraints</p>
              </div>
              <div className="benefit-item">
                <strong>Remote Work Ready</strong>
                <p>Enable productive remote and hybrid work with cloud-based access</p>
              </div>
              <div className="benefit-item">
                <strong>Automatic Updates</strong>
                <p>Always have the latest features and security updates without manual intervention</p>
              </div>
            </div>
          </div>

          <div className="migration-checklist">
            <h3>Pre-Migration Checklist</h3>
            <div className="checklist-items">
              <div className="checklist-item">
                <div className="checkbox">✓</div>
                <div className="item-content">
                  <strong>Assess Current Environment</strong>
                  <p>Inventory existing systems, data, and user requirements</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="checkbox">✓</div>
                <div className="item-content">
                  <strong>Plan Migration Strategy</strong>
                  <p>Develop phased migration plan with minimal business disruption</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="checkbox">✓</div>
                <div className="item-content">
                  <strong>Prepare Users</strong>
                  <p>Communicate changes and provide preliminary training</p>
                </div>
              </div>
              <div className="checklist-item">
                <div className="checkbox">✓</div>
                <div className="item-content">
                  <strong>Backup Data</strong>
                  <p>Ensure complete data backup before migration begins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Modernize Your Workplace?</h3>
            <p>Let's discuss how Office 365 or Google Workspace can transform your business productivity and collaboration.</p>
            <a href="/contact" className="cta-button primary">Start Your Migration</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office365GSuite;
