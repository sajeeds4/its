import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h1>About ITS</h1>
            <p>Innovative Technology Solutions - Your trusted partner in digital transformation</p>
          </div>
          
          <div className="about-content">
            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to democratize technology for businesses of all sizes, ITS (Innovative Technology Solutions) 
                has been at the forefront of digital transformation on Long Island. We combine startup agility with enterprise-level 
                expertise to deliver cost-effective solutions that drive real business results.
              </p>
              <p>
                Our team of experienced professionals understands that every business is unique. That's why we take a consultative 
                approach, working closely with our clients to understand their specific challenges and goals before recommending 
                and implementing tailored technology solutions.
              </p>
            </div>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Partnership</h3>
                <p>We build long-term relationships with our clients, serving as their trusted technology advisors and partners.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Excellence</h3>
                <p>We maintain the highest standards of quality in everything we do, from initial consultation to ongoing support.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3>Value</h3>
                <p>We provide cost-effective solutions that maximize ROI and help businesses achieve their goals within budget.</p>
              </div>
            </div>
            
            <div className="team-section">
              <h2>Why Choose ITS?</h2>
              <div className="why-choose-grid">
                <div className="choose-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Local Expertise</h4>
                  <p>Based on Long Island, we understand the unique needs of local businesses and provide personalized service.</p>
                </div>
                
                <div className="choose-item">
                  <i className="fas fa-rocket"></i>
                  <h4>Startup Agility</h4>
                  <p>We move fast and adapt quickly, delivering solutions with the speed and flexibility of a startup.</p>
                </div>
                
                <div className="choose-item">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Enterprise Security</h4>
                  <p>All our solutions are built with enterprise-grade security and compliance standards in mind.</p>
                </div>
                
                <div className="choose-item">
                  <i className="fas fa-chart-line"></i>
                  <h4>Proven Results</h4>
                  <p>Our track record speaks for itself - we've helped dozens of businesses transform and grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
