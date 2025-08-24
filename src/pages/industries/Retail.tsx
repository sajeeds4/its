import React from 'react';
import FeatureGrid from '../../components/FeatureGrid';
import industryData from '../../data/industries';

const Retail: React.FC = () => {
  const retail = industryData.retail;

  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1 id="retail-title">Retail Industry Solutions</h1>
          <p>Transforming retail operations with cutting-edge technology solutions that drive sales, improve customer experience, and streamline operations.</p>
        </div>
        <img src={retail.heroImage} alt="Retail" className="hero-illustration"/>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>How We Help Retail Businesses</h2>
            <p>The retail landscape is rapidly evolving. We provide comprehensive technology solutions that help retailers stay competitive, manage inventory efficiently, and deliver exceptional customer experiences both online and in-store.</p>
          </div>

          <FeatureGrid features={retail.features} />

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
