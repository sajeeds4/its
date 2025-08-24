import React from 'react';

const Manufacturing: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1 id="manufacturing-title">Manufacturing Technology Solutions</h1>
          <p>Driving Industry 4.0 transformation with smart manufacturing solutions that optimize production, reduce costs, and improve quality control.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>Smart Manufacturing Solutions</h2>
            <p>Manufacturing companies need technology that connects machines, optimizes processes, and provides real-time visibility into operations. Our solutions help manufacturers embrace Industry 4.0 and achieve operational excellence.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon">🏭</div>
              <h3>Manufacturing ERP Systems</h3>
              <p>ERP systems integrating production planning, inventory, and quality control.</p>
              <ul>
                <li>Production planning & scheduling</li>
                <li>Material requirements planning</li>
                <li>Quality management</li>
                <li>Cost accounting</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">🔗</div>
              <h3>IoT & Machine Connectivity</h3>
              <p>Connect machines, collect real-time data, and enable predictive maintenance.</p>
              <ul>
                <li>Real-time monitoring</li>
                <li>Predictive maintenance</li>
                <li>Asset tracking</li>
                <li>Performance analytics</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">📊</div>
              <h3>Production Analytics</h3>
              <p>Analytics platforms that provide insights into efficiency, quality, and performance.</p>
              <ul>
                <li>OEE monitoring</li>
                <li>Quality analytics</li>
                <li>Production dashboards</li>
                <li>Trend analysis</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">📦</div>
              <h3>Supply Chain Management</h3>
              <p>Optimize procurement, inventory, and supplier relationships for lean manufacturing.</p>
              <ul>
                <li>Supplier management</li>
                <li>Inventory optimization</li>
                <li>Demand forecasting</li>
                <li>Logistics coordination</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">🎯</div>
              <h3>Quality Control Systems</h3>
              <p>Digital quality systems ensuring consistent product quality and regulatory compliance.</p>
              <ul>
                <li>Statistical process control</li>
                <li>Inspection workflows</li>
                <li>Non-conformance tracking</li>
                <li>Compliance reporting</li>
              </ul>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon">🤖</div>
              <h3>Automation & Robotics</h3>
              <p>Automation solutions, robotics integration, and smart manufacturing system integration.</p>
              <ul>
                <li>Process automation</li>
                <li>Robotic integration</li>
                <li>Workflow optimization</li>
                <li>Human-machine interfaces</li>
              </ul>
            </div>
          </div>

          <div className="case-study-highlight">
            <h3>Success Story: Manufacturer Reduces Downtime by 45%</h3>
            <p>We implemented an IoT-enabled predictive maintenance system for a mid-size manufacturer, integrating machine sensors with their ERP system. This reduced unplanned downtime by 45% and increased overall equipment effectiveness (OEE) by 32%.</p>
            <a href="/case-studies" className="cta-button">Read Full Case Study</a>
          </div>

          <div className="industry-benefits">
            <h3>Key Benefits for Manufacturing</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Increased Efficiency</strong>
                <p>Automated processes and optimized workflows improve production efficiency</p>
              </div>
              <div className="benefit-item">
                <strong>Reduced Costs</strong>
                <p>Predictive maintenance and lean processes significantly reduce operational costs</p>
              </div>
              <div className="benefit-item">
                <strong>Better Quality</strong>
                <p>Real-time quality monitoring ensures consistent product quality</p>
              </div>
              <div className="benefit-item">
                <strong>Competitive Advantage</strong>
                <p>Industry 4.0 capabilities provide significant competitive advantages</p>
              </div>
            </div>
          </div>

          <div className="manufacturing-types">
            <h3>We Serve All Manufacturing Sectors</h3>
            <div className="manufacturing-types-grid">
              <div className="manufacturing-type">
                <h4>Discrete Manufacturing</h4>
                <p>Automotive, electronics, machinery, and assembled products</p>
              </div>
              <div className="manufacturing-type">
                <h4>Process Manufacturing</h4>
                <p>Chemical, pharmaceutical, food & beverage, and continuous processes</p>
              </div>
              <div className="manufacturing-type">
                <h4>Job Shop Manufacturing</h4>
                <p>Custom manufacturing, prototyping, and small batch production</p>
              </div>
              <div className="manufacturing-type">
                <h4>Lean Manufacturing</h4>
                <p>Just-in-time production, waste reduction, and continuous improvement</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready for Industry 4.0 Transformation?</h3>
            <p>Let's discuss how our smart manufacturing solutions can optimize your production, reduce costs, and improve quality.</p>
            <a href="/contact" className="cta-button primary">Get Manufacturing Assessment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
