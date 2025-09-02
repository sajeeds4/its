import React from 'react';
import SEO from '../../components/SEO';

const AIAutomation: React.FC = () => {
  return (
    <div className="page-container">
      <SEO
        title="AI & Automation Services | Aethrix Systems"
        description="RPA, predictive analytics, chatbots, NLP, computer vision, and recommendation systems to streamline operations."
        path="/services/ai-automation"
        type="service"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'AI & Automation', path: '/services/ai-automation' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI & Automation',
          provider: { '@type': 'Organization', name: 'Aethrix Systems' },
          url: 'https://aethrixsystems.com/services/ai-automation',
        }}
      />
      <div className="hero-section service-hero">
        <div className="hero-content">
          <h1>AI & Automation Solutions</h1>
          <p>Intelligent automation and AI-powered solutions that streamline operations, reduce costs, and drive innovation for modern businesses.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-overview">
            <h2>Transform Your Business with AI</h2>
            <p>Harness the power of artificial intelligence and automation to optimize workflows, enhance decision-making, and create competitive advantages. Our AI solutions are designed to integrate seamlessly with your existing systems.</p>
          </div>

          <div className="ai-services-grid">
            <div className="ai-service-card">
              <div className="ai-icon">🤖</div>
              <h3>Process Automation</h3>
              <p>Robotic Process Automation (RPA) that handles repetitive tasks and complex workflows automatically.</p>
              <ul>
                <li>Document processing automation</li>
                <li>Data entry and validation</li>
                <li>Invoice processing</li>
                <li>Customer onboarding workflows</li>
                <li>Report generation</li>
              </ul>
            </div>

            <div className="ai-service-card">
              <div className="ai-icon">📊</div>
              <h3>Predictive Analytics</h3>
              <p>Machine learning models that predict trends, behaviors, and outcomes to support strategic decisions.</p>
              <ul>
                <li>Sales forecasting</li>
                <li>Demand prediction</li>
                <li>Customer churn analysis</li>
                <li>Inventory optimization</li>
                <li>Risk assessment</li>
              </ul>
            </div>

            <div className="ai-service-card">
              <div className="ai-icon">💬</div>
              <h3>Chatbots & Virtual Assistants</h3>
              <p>Intelligent conversational AI that provides 24/7 customer support and automates interactions.</p>
              <ul>
                <li>Customer service chatbots</li>
                <li>Lead qualification bots</li>
                <li>Internal help desk automation</li>
                <li>Appointment scheduling</li>
                <li>FAQ automation</li>
              </ul>
            </div>

            <div className="ai-service-card">
              <div className="ai-icon">🔍</div>
              <h3>Computer Vision</h3>
              <p>AI-powered image and video analysis for quality control, security, and automation applications.</p>
              <ul>
                <li>Quality inspection automation</li>
                <li>Document scanning & OCR</li>
                <li>Security monitoring</li>
                <li>Inventory counting</li>
                <li>Medical image analysis</li>
              </ul>
            </div>

            <div className="ai-service-card">
              <div className="ai-icon">📝</div>
              <h3>Natural Language Processing</h3>
              <p>AI that understands and processes human language for content analysis and automation.</p>
              <ul>
                <li>Sentiment analysis</li>
                <li>Content summarization</li>
                <li>Document classification</li>
                <li>Language translation</li>
                <li>Text mining & insights</li>
              </ul>
            </div>

            <div className="ai-service-card">
              <div className="ai-icon">🎯</div>
              <h3>Recommendation Engines</h3>
              <p>Personalized recommendation systems that improve customer experience and increase sales.</p>
              <ul>
                <li>Product recommendations</li>
                <li>Content personalization</li>
                <li>Cross-selling automation</li>
                <li>Customer segmentation</li>
                <li>Dynamic pricing</li>
              </ul>
            </div>
          </div>

          <div className="automation-types">
            <h3>Types of Business Automation</h3>
            <div className="automation-categories">
              <div className="automation-category">
                <h4>Marketing Automation</h4>
                <p>Automate marketing campaigns, lead nurturing, and customer journeys</p>
                <ul>
                  <li>Email marketing automation</li>
                  <li>Social media scheduling</li>
                  <li>Lead scoring and routing</li>
                  <li>Campaign optimization</li>
                </ul>
              </div>

              <div className="automation-category">
                <h4>Sales Automation</h4>
                <p>Streamline sales processes and improve conversion rates</p>
                <ul>
                  <li>CRM automation</li>
                  <li>Quote generation</li>
                  <li>Follow-up scheduling</li>
                  <li>Pipeline management</li>
                </ul>
              </div>

              <div className="automation-category">
                <h4>Operations Automation</h4>
                <p>Optimize operational workflows and reduce manual tasks</p>
                <ul>
                  <li>Inventory management</li>
                  <li>Order processing</li>
                  <li>Quality control</li>
                  <li>Scheduling optimization</li>
                </ul>
              </div>

              <div className="automation-category">
                <h4>Financial Automation</h4>
                <p>Automate accounting, invoicing, and financial processes</p>
                <ul>
                  <li>Invoice processing</li>
                  <li>Expense management</li>
                  <li>Financial reporting</li>
                  <li>Compliance monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ai-implementation-process">
            <h3>Our AI Implementation Process</h3>
            <div className="process-timeline">
              <div className="process-phase">
                <div className="phase-number">1</div>
                <h4>Discovery & Assessment</h4>
                <p>Analyze current processes, identify automation opportunities, and define AI use cases.</p>
              </div>

              <div className="process-phase">
                <div className="phase-number">2</div>
                <h4>Strategy & Planning</h4>
                <p>Develop AI strategy, select appropriate technologies, and create implementation roadmap.</p>
              </div>

              <div className="process-phase">
                <div className="phase-number">3</div>
                <h4>Proof of Concept</h4>
                <p>Build and test small-scale AI solutions to validate concepts and ROI potential.</p>
              </div>

              <div className="process-phase">
                <div className="phase-number">4</div>
                <h4>Development & Training</h4>
                <p>Develop full AI solutions, train machine learning models, and integrate with systems.</p>
              </div>

              <div className="process-phase">
                <div className="phase-number">5</div>
                <h4>Deployment & Monitoring</h4>
                <p>Deploy AI solutions, monitor performance, and continuously optimize for better results.</p>
              </div>
            </div>
          </div>

          <div className="ai-technologies">
            <h3>AI Technologies We Use</h3>
            <div className="tech-stack-grid">
              <div className="tech-category">
                <h4>Machine Learning Frameworks</h4>
                <div className="tech-items">
                  <div className="tech-item">TensorFlow</div>
                  <div className="tech-item">PyTorch</div>
                  <div className="tech-item">Scikit-learn</div>
                  <div className="tech-item">Keras</div>
                </div>
              </div>

              <div className="tech-category">
                <h4>Cloud AI Services</h4>
                <div className="tech-items">
                  <div className="tech-item">AWS AI/ML</div>
                  <div className="tech-item">Azure Cognitive Services</div>
                  <div className="tech-item">Google Cloud AI</div>
                  <div className="tech-item">IBM Watson</div>
                </div>
              </div>

              <div className="tech-category">
                <h4>RPA Platforms</h4>
                <div className="tech-items">
                  <div className="tech-item">UiPath</div>
                  <div className="tech-item">Automation Anywhere</div>
                  <div className="tech-item">Blue Prism</div>
                  <div className="tech-item">Microsoft Power Automate</div>
                </div>
              </div>

              <div className="tech-category">
                <h4>Programming Languages</h4>
                <div className="tech-items">
                  <div className="tech-item">Python</div>
                  <div className="tech-item">R</div>
                  <div className="tech-item">JavaScript</div>
                  <div className="tech-item">SQL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="roi-metrics">
            <h3>Typical ROI from AI & Automation</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-number">40-60%</div>
                <div className="metric-label">Reduction in processing time</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">25-35%</div>
                <div className="metric-label">Cost savings in operations</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">90%+</div>
                <div className="metric-label">Accuracy improvement</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">24/7</div>
                <div className="metric-label">Continuous operation</div>
              </div>
            </div>
          </div>

          <div className="ai-packages">
            <h3>AI & Automation Packages</h3>
            <div className="packages-grid">
              <div className="package-card">
                <h4>AI Starter</h4>
                <div className="package-price">$15,000</div>
                <ul>
                  <li>Process assessment</li>
                  <li>Simple automation (1-2 processes)</li>
                  <li>Basic chatbot</li>
                  <li>ROI analysis</li>
                  <li>3 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Get Started</a>
              </div>

              <div className="package-card featured">
                <h4>AI Professional</h4>
                <div className="package-price">$45,000</div>
                <ul>
                  <li>Everything in Starter</li>
                  <li>Advanced automation (3-5 processes)</li>
                  <li>Predictive analytics</li>
                  <li>Custom AI models</li>
                  <li>Integration with existing systems</li>
                  <li>6 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Most Popular</a>
              </div>

              <div className="package-card">
                <h4>AI Enterprise</h4>
                <div className="package-price">$100,000+</div>
                <ul>
                  <li>Everything in Professional</li>
                  <li>Enterprise-wide automation</li>
                  <li>Custom AI platform</li>
                  <li>Advanced machine learning</li>
                  <li>Ongoing optimization</li>
                  <li>12 months support</li>
                </ul>
                <a href="/contact" className="cta-button">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Automate Your Business?</h3>
            <p>Let's explore how AI and automation can transform your operations and drive growth.</p>
            <a href="/contact" className="cta-button primary">Start Your AI Journey</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;
