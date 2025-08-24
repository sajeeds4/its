import React from 'react';

const Wix: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1>Wix Development Services</h1>
          <p>Professional Wix websites with custom designs, advanced functionality, and seamless integrations for businesses of all sizes.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-overview">
            <h2>Expert Wix Solutions</h2>
            <p>Wix powers over 200 million websites worldwide with its intuitive platform. Our certified Wix experts create stunning, professional websites that combine ease of use with powerful functionality to help your business succeed online.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Design & Branding</h3>
              <p>Unique Wix designs that perfectly reflect your brand identity and stand out from template-based competitors.</p>
              <ul>
                <li>Custom visual design</li>
                <li>Brand consistency</li>
                <li>Mobile-first approach</li>
                <li>Professional aesthetics</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>E-commerce Integration</h3>
              <p>Full-featured online stores with secure payment processing, inventory management, and order fulfillment.</p>
              <ul>
                <li>Product catalog setup</li>
                <li>Payment gateway integration</li>
                <li>Shipping configuration</li>
                <li>Order management</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Advanced Functionality</h3>
              <p>Custom features and integrations that extend Wix capabilities beyond standard offerings.</p>
              <ul>
                <li>Custom code integration</li>
                <li>Third-party app connections</li>
                <li>API integrations</li>
                <li>Database connectivity</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>SEO Optimization</h3>
              <p>Comprehensive SEO setup to improve search engine rankings and drive organic traffic to your site.</p>
              <ul>
                <li>Technical SEO setup</li>
                <li>Content optimization</li>
                <li>Meta tags and schema</li>
                <li>Site speed optimization</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics & Tracking</h3>
              <p>Comprehensive analytics setup to track visitor behavior, conversions, and business performance.</p>
              <ul>
                <li>Google Analytics setup</li>
                <li>Conversion tracking</li>
                <li>Heatmap integration</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Maintenance & Support</h3>
              <p>Ongoing website maintenance and support to ensure optimal performance and security.</p>
              <ul>
                <li>Regular updates</li>
                <li>Security monitoring</li>
                <li>Performance optimization</li>
                <li>Content updates</li>
              </ul>
            </div>
          </div>

          <div className="wix-plans">
            <h3>Wix Plan Recommendations</h3>
            <div className="plans-grid">
              <div className="plan-card">
                <h4>Wix Business Basic</h4>
                <div className="plan-price">$23/month</div>
                <p>Perfect for small businesses and portfolios</p>
                <ul>
                  <li>Custom domain</li>
                  <li>Remove Wix ads</li>
                  <li>3GB storage</li>
                  <li>Basic support</li>
                </ul>
                <p><strong>Best for:</strong> Small businesses, portfolios</p>
              </div>

              <div className="plan-card featured">
                <h4>Wix Business Unlimited</h4>
                <div className="plan-price">$29/month</div>
                <p>Most popular plan for growing businesses</p>
                <ul>
                  <li>Everything in Basic</li>
                  <li>35GB storage</li>
                  <li>Site analytics</li>
                  <li>Marketing tools</li>
                </ul>
                <p><strong>Best for:</strong> Growing businesses</p>
              </div>

              <div className="plan-card">
                <h4>Wix Business VIP</h4>
                <div className="plan-price">$49/month</div>
                <p>Premium features for established businesses</p>
                <ul>
                  <li>Everything in Unlimited</li>
                  <li>50GB storage</li>
                  <li>Priority support</li>
                  <li>Professional review</li>
                </ul>
                <p><strong>Best for:</strong> Established businesses</p>
              </div>
            </div>
          </div>

          <div className="development-packages">
            <h3>Wix Development Packages</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h4>Wix Starter</h4>
                <div className="price">$1,500</div>
                <ul>
                  <li>Custom design setup</li>
                  <li>Up to 10 pages</li>
                  <li>Mobile optimization</li>
                  <li>Basic SEO setup</li>
                  <li>Contact forms</li>
                  <li>2 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Get Started</a>
              </div>

              <div className="pricing-card featured">
                <h4>Wix Professional</h4>
                <div className="price">$3,500</div>
                <ul>
                  <li>Everything in Starter</li>
                  <li>E-commerce integration</li>
                  <li>Advanced SEO</li>
                  <li>Analytics setup</li>
                  <li>Custom functionality</li>
                  <li>4 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Most Popular</a>
              </div>

              <div className="pricing-card">
                <h4>Wix Enterprise</h4>
                <div className="price">$7,500</div>
                <ul>
                  <li>Everything in Professional</li>
                  <li>Custom integrations</li>
                  <li>Advanced functionality</li>
                  <li>Marketing automation</li>
                  <li>Priority support</li>
                  <li>6 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="wix-benefits">
            <h3>Why Choose Wix?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>User-Friendly</strong>
                <p>Intuitive drag-and-drop editor makes content updates simple for non-technical users</p>
              </div>
              <div className="benefit-item">
                <strong>All-in-One Platform</strong>
                <p>Hosting, security, and maintenance included - no need for separate services</p>
              </div>
              <div className="benefit-item">
                <strong>App Market</strong>
                <p>Hundreds of apps available to extend functionality and integrate with business tools</p>
              </div>
              <div className="benefit-item">
                <strong>Mobile Optimized</strong>
                <p>Automatic mobile optimization ensures your site looks great on all devices</p>
              </div>
            </div>
          </div>

          <div className="wix-vs-competitors">
            <h3>Wix vs Other Platforms</h3>
            <div className="comparison-table">
              <div className="comparison-row header">
                <div className="feature">Feature</div>
                <div className="wix">Wix</div>
                <div className="wordpress">WordPress</div>
                <div className="squarespace">Squarespace</div>
              </div>
              <div className="comparison-row">
                <div className="feature">Ease of Use</div>
                <div className="wix">⭐⭐⭐⭐⭐</div>
                <div className="wordpress">⭐⭐⭐</div>
                <div className="squarespace">⭐⭐⭐⭐</div>
              </div>
              <div className="comparison-row">
                <div className="feature">Design Flexibility</div>
                <div className="wix">⭐⭐⭐⭐⭐</div>
                <div className="wordpress">⭐⭐⭐⭐⭐</div>
                <div className="squarespace">⭐⭐⭐⭐</div>
              </div>
              <div className="comparison-row">
                <div className="feature">E-commerce</div>
                <div className="wix">⭐⭐⭐⭐</div>
                <div className="wordpress">⭐⭐⭐⭐⭐</div>
                <div className="squarespace">⭐⭐⭐⭐</div>
              </div>
              <div className="comparison-row">
                <div className="feature">Cost</div>
                <div className="wix">⭐⭐⭐⭐</div>
                <div className="wordpress">⭐⭐⭐</div>
                <div className="squarespace">⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Build Your Wix Website?</h3>
            <p>Let's create a professional Wix website that represents your brand and drives business growth.</p>
            <a href="/contact" className="cta-button primary">Start Your Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wix;
