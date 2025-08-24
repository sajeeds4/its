import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="case-studies-page">
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h1>Case Studies</h1>
            <p>Real-world success stories showcasing how we've transformed businesses with our technology solutions</p>
          </div>
          
          <div className="grid grid-2">
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="case-study-meta">
                  <h3>Odoo ERP Implementation</h3>
                  <span className="industry-tag">Manufacturing</span>
                </div>
              </div>
              <div className="case-study-content">
                <p><strong>Challenge:</strong> A mid-sized manufacturing company needed to streamline operations and improve inventory management across multiple locations.</p>
                <p><strong>Solution:</strong> Implemented comprehensive Odoo ERP system with custom modules for inventory tracking, production planning, and financial reporting.</p>
                <p><strong>Results:</strong> 40% reduction in inventory costs, 60% faster order processing, and improved visibility across all business operations.</p>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="case-study-meta">
                  <h3>Shopify E-commerce Platform</h3>
                  <span className="industry-tag">Retail</span>
                </div>
              </div>
              <div className="case-study-content">
                <p><strong>Challenge:</strong> Local retailer wanted to expand online presence and compete with larger e-commerce businesses.</p>
                <p><strong>Solution:</strong> Developed custom Shopify store with advanced inventory integration, mobile optimization, and payment processing.</p>
                <p><strong>Results:</strong> 300% increase in online sales, 50% growth in customer base, and successful omnichannel experience.</p>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="case-study-meta">
                  <h3>WordPress Business Website</h3>
                  <span className="industry-tag">Professional Services</span>
                </div>
              </div>
              <div className="case-study-content">
                <p><strong>Challenge:</strong> Law firm needed a professional website with client portal and appointment scheduling capabilities.</p>
                <p><strong>Solution:</strong> Built responsive WordPress site with custom client portal, online booking system, and secure document sharing.</p>
                <p><strong>Results:</strong> 200% increase in online inquiries, improved client satisfaction, and streamlined appointment management.</p>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="case-study-meta">
                  <h3>AI Analytics Automation</h3>
                  <span className="industry-tag">Healthcare</span>
                </div>
              </div>
              <div className="case-study-content">
                <p><strong>Challenge:</strong> Healthcare provider needed to automate patient data analysis and reporting processes.</p>
                <p><strong>Solution:</strong> Implemented AI-powered analytics system with automated reporting and predictive insights.</p>
                <p><strong>Results:</strong> 80% reduction in manual reporting time, improved patient outcomes, and enhanced data-driven decision making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
