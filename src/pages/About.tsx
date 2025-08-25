import React from 'react';
import './About.css';
import { MapPin, Zap, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="about-page page-container">
      <header className="about-hero glass-card">
        <div className="container">
          <h1>About ITS – Innovative Technology Solutions</h1>
          <p className="lead">Transforming Businesses with Innovation, Security, and Agility</p>
          <p>At ITS, we believe technology should empower businesses, not complicate them. We combine deep industry expertise with modern IT solutions to help organizations grow, adapt, and stay secure in an ever-changing digital world.</p>
        </div>
      </header>

      <main className="container about-main">
        <section className="story">
          <h2>Our Story</h2>
          <p>Founded on Long Island, ITS started with a simple mission: to bring <strong>enterprise-level IT services</strong> within reach of small and medium-sized businesses.</p>
          <p>Over the years, we’ve grown into a <strong>full-stack IT services company</strong>, offering:</p>
          <ul className="offerings">
            <li>Web & App Development</li>
            <li>Cloud Infrastructure</li>
            <li>Cybersecurity</li>
            <li>AI & Data Analytics</li>
            <li>Managed IT Support</li>
          </ul>
          <p>Despite our growth, one thing hasn’t changed: our <strong>customer-first approach</strong>. Every solution we build is designed around the unique needs of our clients.</p>
        </section>

        <section className="mission-vision">
          <div className="mv-col">
            <h3>Our Mission</h3>
            <p>To deliver innovative, reliable, and cost-effective IT solutions that enable businesses to scale and thrive.</p>
          </div>
          <div className="mv-col">
            <h3>Our Vision</h3>
            <p>To be the trusted technology partner for businesses worldwide, known for agility, security, and proven results.</p>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose ITS?</h2>
          <div className="why-grid">
            <article className="why-card">
              <h4>Local Expertise</h4>
              <p className="muted">We’re based on Long Island and deeply understand the unique needs of local businesses. Our team provides personalized IT solutions that align with the regional market.</p>
            </article>
            <article className="why-card">
              <h4>Startup Agility</h4>
              <p className="muted">We move fast and adapt quickly, delivering solutions with the speed and flexibility of a startup.</p>
            </article>
            <article className="why-card">
              <h4>Enterprise Security</h4>
              <p className="muted">Every solution is built with enterprise-grade security and compliance in mind.</p>
            </article>
            <article className="why-card">
              <h4>Proven Results</h4>
              <p className="muted">Our track record shows dozens of businesses streamlined operations and achieved measurable growth.</p>
            </article>
          </div>
        </section>

        <section className="advantages">
          <h2>Advantages</h2>
          <div className="adv-table-wrap">
            <table className="adv-table">
              <thead>
                <tr><th>Feature</th><th>Our Advantage</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="adv-feature">
                    <span className="adv-icon" aria-hidden>
                      <MapPin size={18} color="var(--accent)" />
                    </span>
                    <span className="adv-label">Local Expertise</span>
                  </td>
                  <td>Deep knowledge of Long Island businesses with personalized IT support.</td>
                </tr>

                <tr>
                  <td className="adv-feature">
                    <span className="adv-icon" aria-hidden>
                      <Zap size={18} color="var(--accent)" />
                    </span>
                    <span className="adv-label">Startup Agility</span>
                  </td>
                  <td>Fast, adaptive solutions with the speed of a startup.</td>
                </tr>

                <tr>
                  <td className="adv-feature">
                    <span className="adv-icon" aria-hidden>
                      <Shield size={18} color="var(--accent)" />
                    </span>
                    <span className="adv-label">Enterprise Security</span>
                  </td>
                  <td>Enterprise-grade security and compliance across all solutions.</td>
                </tr>

                <tr>
                  <td className="adv-feature">
                    <span className="adv-icon" aria-hidden>
                      <TrendingUp size={18} color="var(--accent)" />
                    </span>
                    <span className="adv-label">Proven Results</span>
                  </td>
                  <td>Successful track record in helping businesses grow and transform digitally.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="values">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card"> <h4>Innovation</h4><p className="muted">Always exploring new technologies to deliver smarter solutions.</p></div>
            <div className="value-card"> <h4>Integrity</h4><p className="muted">Doing what’s right, always.</p></div>
            <div className="value-card"> <h4>Customer-Centric</h4><p className="muted">Putting client needs above everything else.</p></div>
            <div className="value-card"> <h4>Excellence</h4><p className="muted">Striving for the highest standards in every project.</p></div>
          </div>
        </section>

        <section className="final-cta glass-card">
          <h2>Let’s Build the Future Together</h2>
          <p className="muted">Whether you’re a startup, SMB, or enterprise, ITS has the expertise to take you further.</p>
          <a className="cta-button primary" href="/contact">Get a Quote</a>
        </section>
      </main>
    </div>
  );
};

export default About;
