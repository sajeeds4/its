import React from 'react';

const Healthcare: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section industry-hero">
        <div className="hero-content">
          <h1>Healthcare Technology Solutions</h1>
          <p>Transforming healthcare delivery with secure, compliant, and innovative technology solutions that improve patient outcomes and streamline operations.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="industry-overview">
            <h2>Advanced Technology for Healthcare Providers</h2>
            <p>Healthcare organizations face unique challenges requiring specialized technology solutions. We provide HIPAA-compliant systems that enhance patient care, improve operational efficiency, and ensure regulatory compliance.</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🏥</div>
              <h3>Electronic Health Records (EHR)</h3>
              <p>Comprehensive EHR systems that streamline patient data management, improve care coordination, and ensure HIPAA compliance.</p>
              <ul>
                <li>Patient data integration</li>
                <li>Clinical decision support</li>
                <li>Interoperability standards</li>
                <li>Mobile accessibility</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📱</div>
              <h3>Telemedicine Platforms</h3>
              <p>Secure telehealth solutions that expand access to care, reduce costs, and improve patient satisfaction through virtual consultations.</p>
              <ul>
                <li>Video consultations</li>
                <li>Remote monitoring</li>
                <li>Prescription management</li>
                <li>Insurance integration</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📊</div>
              <h3>Practice Management</h3>
              <p>Integrated practice management systems that handle scheduling, billing, insurance claims, and patient communications.</p>
              <ul>
                <li>Appointment scheduling</li>
                <li>Insurance verification</li>
                <li>Claims management</li>
                <li>Patient portals</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🔐</div>
              <h3>HIPAA Compliance & Security</h3>
              <p>Enterprise-grade security solutions ensuring patient data protection and full HIPAA compliance with audit trails and encryption.</p>
              <ul>
                <li>Data encryption</li>
                <li>Access controls</li>
                <li>Audit logging</li>
                <li>Breach prevention</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🤖</div>
              <h3>AI-Powered Diagnostics</h3>
              <p>Machine learning solutions that assist in diagnosis, predict patient outcomes, and identify potential health risks early.</p>
              <ul>
                <li>Diagnostic assistance</li>
                <li>Risk prediction</li>
                <li>Pattern recognition</li>
                <li>Clinical insights</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">☁️</div>
              <h3>Cloud Infrastructure</h3>
              <p>HIPAA-compliant cloud solutions that provide scalability, reliability, and disaster recovery for healthcare applications.</p>
              <ul>
                <li>Scalable infrastructure</li>
                <li>Disaster recovery</li>
                <li>Compliance monitoring</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="case-study-highlight">
            <h3>Success Story: Regional Hospital Improves Patient Care by 35%</h3>
            <p>We implemented a comprehensive digital health platform for a regional hospital, including EHR integration, telemedicine capabilities, and AI-powered analytics. Patient satisfaction scores improved by 35% and operational efficiency increased by 28%.</p>
            <a href="/case-studies" className="cta-button">Read Full Case Study</a>
          </div>

          <div className="industry-benefits">
            <h3>Key Benefits for Healthcare</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <strong>Improved Patient Outcomes</strong>
                <p>Better data access and AI insights lead to more accurate diagnoses and treatments</p>
              </div>
              <div className="benefit-item">
                <strong>Operational Efficiency</strong>
                <p>Automated workflows and integrated systems reduce administrative burden</p>
              </div>
              <div className="benefit-item">
                <strong>Cost Reduction</strong>
                <p>Streamlined processes and telemedicine reduce operational costs</p>
              </div>
              <div className="benefit-item">
                <strong>Compliance Assurance</strong>
                <p>Built-in HIPAA compliance and security features protect against violations</p>
              </div>
            </div>
          </div>

          <div className="healthcare-specialties">
            <h3>We Serve All Healthcare Specialties</h3>
            <div className="specialties-grid">
              <div className="specialty">
                <h4>Hospitals & Health Systems</h4>
                <p>Enterprise EHR, patient flow optimization, and integrated clinical systems</p>
              </div>
              <div className="specialty">
                <h4>Private Practices</h4>
                <p>Practice management, patient scheduling, and billing automation</p>
              </div>
              <div className="specialty">
                <h4>Specialty Clinics</h4>
                <p>Specialized workflows, equipment integration, and compliance management</p>
              </div>
              <div className="specialty">
                <h4>Mental Health Providers</h4>
                <p>Secure teletherapy, patient management, and outcome tracking</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Transform Your Healthcare Practice?</h3>
            <p>Let's discuss how our HIPAA-compliant technology solutions can improve patient care and streamline your healthcare operations.</p>
            <a href="/contact" className="cta-button primary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
