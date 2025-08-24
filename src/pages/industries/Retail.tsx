import React from 'react';

const Retail: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section industry-hero">
        <div className="hero-content">
          <h1>Retail Industry Solutions</h1>
          <p>Transforming retail operations with cutting-edge technology solutions that drive sales, improve customer experience, and streamline operations.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>How We Help Retail Businesses</h2>
            <p>The retail landscape is rapidly evolving. We provide comprehensive technology solutions that help retailers stay competitive, manage inventory efficiently, and deliver exceptional customer experiences both online and in-store.</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🛒</div>
              <h3>E-commerce Platforms</h3>
              <p>Custom Shopify stores, WooCommerce solutions, and multi-channel selling platforms that increase online revenue and improve customer conversion rates.</p>
              <ul>
                <li>Shopify Plus for enterprise retail</li>
                <li>Custom checkout experiences</li>
                <li>Inventory synchronization</li>
                <li>Mobile-responsive design</li>
              </ul>
            </div>

            <div className="solution-card">
              <h3>Point of Sale (POS) Systems</h3>
              <div className="solution-icon">💳</div>
              <p>Integrated POS solutions that connect online and offline sales, manage inventory in real-time, and provide detailed analytics.</p>
              <ul>
                <li>Cloud-based POS systems</li>
                <li>Inventory management</li>
                <li>Customer loyalty programs</li>
                <li>Multi-location support</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📊</div>
              <h3>Inventory Management</h3>
              <p>Advanced inventory tracking systems that prevent stockouts, optimize purchasing, and provide real-time visibility across all channels.</p>
              <ul>
                <li>Real-time stock tracking</li>
                <li>Automated reorder points</li>
                <li>Demand forecasting</li>
                <li>Supplier management</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🤖</div>
              <h3>AI-Powered Analytics</h3>
              <p>Machine learning solutions that analyze customer behavior, predict trends, and optimize pricing strategies for maximum profitability.</p>
              <ul>
                <li>Customer behavior analysis</li>
                <li>Dynamic pricing optimization</li>
                <li>Demand forecasting</li>
                <li>Personalization engines</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📱</div>
              <h3>Omnichannel Experience</h3>
              <p>Unified customer experiences across all touchpoints - web, mobile, social media, and physical stores.</p>
              <ul>
                <li>Unified customer profiles</li>
                <li>Cross-channel inventory</li>
                <li>Buy online, pickup in-store</li>
                <li>Social commerce integration</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">☁️</div>
              <h3>Cloud Infrastructure</h3>
              <p>Scalable cloud solutions that handle traffic spikes during peak seasons and ensure 99.9% uptime for your retail operations.</p>
              <ul>
                <li>Auto-scaling infrastructure</li>
                <li>Global CDN deployment</li>
                <li>Security & compliance</li>
                <li>Backup & disaster recovery</li>
              </ul>
            </div>
          </div>

          <div className="case-study-highlight">
            <h3>Success Story: Fashion Retailer Increases Sales by 40%</h3>
            <p>We helped a mid-size fashion retailer implement a complete omnichannel solution including Shopify Plus, POS integration, and AI-powered inventory management. The result was a 40% increase in online sales and 25% reduction in inventory carrying costs.</p>
            <a href="/case-studies/shopify-site" className="cta-button">Read Full Case Study</a>
          </div>

          <div className="industry-benefits">
            <h3>Key Benefits for Retail</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Increased Revenue</strong>
                <p>Multi-channel selling and optimized customer experiences drive higher sales</p>
              </div>
              <div className="benefit-item">
                <strong>Reduced Costs</strong>
                <p>Automated inventory management and optimized operations cut operational expenses</p>
              </div>
              <div className="benefit-item">
                <strong>Better Customer Experience</strong>
                <p>Seamless omnichannel experiences increase customer satisfaction and loyalty</p>
              </div>
              <div className="benefit-item">
                <strong>Data-Driven Decisions</strong>
                <p>Real-time analytics and AI insights enable smarter business decisions</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Transform Your Retail Business?</h3>
            <p>Let's discuss how our technology solutions can help you increase sales, reduce costs, and deliver exceptional customer experiences.</p>
            <a href="/contact" className="cta-button primary">Get Free Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;
