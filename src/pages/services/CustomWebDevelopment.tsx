import React from 'react';
import './CustomWebDevelopment.css';
import { Building, ShoppingCart, Cloud, Lock, Book, Calendar } from 'lucide-react';

const CustomWebDevelopment: React.FC = () => {
  return (
    <div className="page-container">
      {/* Hero */}
      <header className="hero-section service-hero hero-animated" aria-labelledby="custom-title">
        <div className="hero-background" aria-hidden />
        <div className="hero-content container">
          <h1 id="custom-title">Custom Website Development</h1>
          <p className="hero-sub">From idea to deployment — full-stack, scalable solutions built with the right technology</p>
          <div className="hero-cta">
            <a className="cta-button primary" href="/contact">Get Started</a>
          </div>
        </div>
      </header>

      <main className="content-section">
        <div className="container">
          {/* 2. Why Custom Development */}
          <section id="why" className="why-section two-col">
            <div className="col text-col">
              <h2>Why Custom Development</h2>
                <p className="max-text">Custom websites give you performance, flexibility and deep integration with your systems. They support unique business logic, stronger branding and better long-term ROI than templates. For example, for e‑commerce a custom checkout flow can reduce abandonment and increase average order value by letting us remove friction and tailor validation to your business rules.</p>
              <ul>
                <li><strong>Performance:</strong> Tailored to your needs, optimized assets and infrastructure.</li>
                <li><strong>Flexibility:</strong> Custom flows, integrations, and data models.</li>
                <li><strong>Security & Scale:</strong> Enterprise patterns and tested deployments.</li>
                <li><strong>SEO & Ownership:</strong> Full control of markup and hosting for SEO wins.</li>
              </ul>
            </div>
            <div className="col art-col">
              <div className="illustration glass-card">
                <svg viewBox="0 0 400 260" className="illus-svg" aria-hidden>
                  <circle cx="60" cy="60" r="36" fill="#6c63ff" opacity="0.12" />
                  <rect x="140" y="40" width="200" height="140" rx="12" fill="#0f1724" opacity="0.04" />
                  <g fill="#6c63ff">
                    <rect x="160" y="60" width="40" height="8" rx="3" />
                    <rect x="210" y="84" width="80" height="8" rx="3" />
                    <rect x="160" y="108" width="120" height="8" rx="3" />
                  </g>
                </svg>
              </div>
            </div>
          </section>

          {/* 3. Types of Websites */}
          <section id="types" className="types-section">
            <h2>Types of Websites We Build</h2>

            {/* flow diagram */}
            <div className="flow-diagram">
              <svg viewBox="0 0 800 80" preserveAspectRatio="xMidYMid meet" className="flow-svg" aria-hidden>
                <g fill="none" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round">
                  <rect x="10" y="16" width="160" height="48" rx="8" fill="#fff" stroke="#cfc6ff" />
                  <text x="90" y="46" textAnchor="middle" fill="#1f2937" fontSize="13">Business Needs</text>
                  <path d="M190 40 H260" />
                  <rect x="260" y="16" width="260" height="48" rx="8" fill="#fff" stroke="#cfc6ff" />
                  <text x="390" y="46" textAnchor="middle" fill="#1f2937" fontSize="13">Custom Applications</text>
                  <path d="M520 40 H590" />
                  <rect x="590" y="16" width="200" height="48" rx="8" fill="#fff" stroke="#cfc6ff" />
                  <text x="690" y="46" textAnchor="middle" fill="#1f2937" fontSize="13">Growth</text>
                </g>
              </svg>
            </div>

            <div className="types-grid cards-grid">
              {/* card: Business */}
              <article className="type-card">
                <div className="card-head">
                  <Building className="card-icon" size={36} color="var(--accent)" />
                  <h4>Business Websites</h4>
                </div>
                <p className="muted">Marketing sites, lead gen and conversion-focused experiences. Example: local firm site with 3x lead conversions after redesign.</p>
              </article>

              {/* card: E-commerce */}
              <article className="type-card">
                <div className="card-head">
                  <ShoppingCart className="card-icon" size={36} color="var(--accent)" />
                  <h4>E‑commerce Platforms</h4>
                </div>
                <p className="muted">Scalable stores with custom checkout and subscriptions. Example: subscription flow for a mid-market retailer.</p>
              </article>

              {/* card: SaaS */}
              <article className="type-card">
                <div className="card-head">
                  <Cloud className="card-icon" size={36} color="var(--accent)" />
                  <h4>SaaS Platforms</h4>
                </div>
                <p className="muted">Multi-tenant, secure SaaS with role-based features. Example: reporting SaaS with role-based billing.</p>
              </article>

              {/* card: Portals */}
              <article className="type-card">
                <div className="card-head">
                  <Lock className="card-icon" size={36} color="var(--accent)" />
                  <h4>Portals</h4>
                </div>
                <p className="muted">Education, healthcare and finance portals with SSO and secure access. Example: patient portal with secure document delivery.</p>
              </article>

              {/* card: CMS */}
              <article className="type-card">
                <div className="card-head">
                  <Book className="card-icon" size={36} color="var(--accent)" />
                  <h4>CMS & Knowledge</h4>
                </div>
                <p className="muted">Headless or traditional CMS tailored to editorial workflows. Example: editorial CMS with structured content.</p>
              </article>

              {/* card: Booking */}
              <article className="type-card">
                <div className="card-head">
                  <Calendar className="card-icon" size={36} color="var(--accent)" />
                  <h4>Booking & Scheduling</h4>
                </div>
                <p className="muted">Appointment and resource systems. Example: scheduling system reducing no-shows with reminders.</p>
              </article>
            </div>
          </section>

          {/* 4. Technology Stack */}
          <section id="tech" className="tech-section">
            <h2>Technology Stack</h2>
            <div className="tech-table-wrap">
              <table className="tech-table">
                <thead>
                  <tr><th>Category</th><th>Tools</th></tr>
                </thead>
                <tbody>
                  <tr><td>Frontend</td><td>React, Next.js, Angular, Vue</td></tr>
                  <tr><td>Backend</td><td>Node.js, Express, NestJS, Python (Django, FastAPI), PHP (Laravel)</td></tr>
                  <tr><td>Databases</td><td>PostgreSQL, MySQL, MongoDB, Redis</td></tr>
                  <tr><td>Cloud</td><td>AWS, Azure, GCP, Docker, Kubernetes</td></tr>
                  <tr><td>AI / ML</td><td>TensorFlow, PyTorch, LangChain</td></tr>
                </tbody>
              </table>
            </div>

            <div className="tech-logos-grid">
              {['React','Next.js','Angular','Vue','Node','NestJS','Python','Django','Postgres','MongoDB','Redis','AWS','Docker','Kubernetes'].map((t)=> (
                <div key={t} className="tech-logo">{t}</div>
              ))}
            </div>
          </section>

          {/* 5. Comparison Table */}
          <section id="compare" className="compare-section">
            <h2>Custom vs Template</h2>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr><th>Feature</th><th>Custom Website</th><th>Template Website</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Scalability','✓','✕'],
                    ['Security','✓','✕'],
                    ['SEO','✓','✕'],
                    ['Integrations','✓','✕'],
                    ['Performance','✓','✕'],
                    ['Branding','✓','✕']
                  ].map((r)=> (
                    <tr key={r[0]}>
                      <td>{r[0]}</td>
                      <td className="center"><span className={r[1] === '✓' ? 'tick' : 'cross'} aria-hidden>{r[1]}</span></td>
                      <td className="center"><span className={r[2] === '✓' ? 'tick' : 'cross'} aria-hidden>{r[2]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Development Process (workflow) */}
          <section id="process" className="workflow-section">
            <h2>Development Process</h2>
            <div className="workflow">
              {[
                ['Discovery','Workshops & requirements'],
                ['UI/UX','Design & prototypes'],
                ['Development','Iterative sprints'],
                ['Testing','QA & performance'],
                ['Deployment','CI/CD & infra'],
                ['Support','Monitoring & updates']
              ].map((s, i)=> (
                <div key={s[0]} className="flow-block">
                  <div className="flow-icon">{i+1}</div>
                  <h4>{s[0]}</h4>
                  <p>{s[1]}</p>
                  {i < 5 && <div className="flow-arrow">→</div>}
                </div>
              ))}
            </div>
          </section>

          {/* 7. Case Studies */}
          <section id="case-studies" className="case-section">
            <h2>Case Studies</h2>
            <div className="case-grid">
              <article className="case-card">
                <h4>E‑commerce platform</h4>
                <p className="muted">Problem: scaling spikes and checkout drops</p>
                <p>Solution: moved to microservices, optimized checkout, added A/B testing.</p>
                <div className="progress-compare">
                  <div className="before">Before <div className="bar"><div className="fill" style={{width:'45%'}}/></div></div>
                  <div className="after">After <div className="bar"><div className="fill" style={{width:'85%'}}/></div></div>
                </div>
                <p className="outcome">Outcome: +40% online sales</p>
              </article>
              <article className="case-card">
                <h4>Analytics Dashboard</h4>
                <p className="muted">Problem: slow batch reporting</p>
                <p>Solution: real-time pipelines and optimized queries.</p>
                <div className="progress-compare">
                  <div className="before">Before <div className="bar"><div className="fill" style={{width:'50%'}}/></div></div>
                  <div className="after">After <div className="bar"><div className="fill" style={{width:'80%'}}/></div></div>
                </div>
                <p className="outcome">Outcome: 30% faster decisions</p>
              </article>
              <article className="case-card">
                <h4>Client Portal</h4>
                <p className="muted">Problem: fragmented user experience</p>
                <p>Solution: unified portal with SSO and role-based access.</p>
                <div className="progress-compare">
                  <div className="before">Before <div className="bar"><div className="fill" style={{width:'40%'}}/></div></div>
                  <div className="after">After <div className="bar"><div className="fill" style={{width:'75%'}}/></div></div>
                </div>
                <p className="outcome">Outcome: improved retention</p>
              </article>
            </div>
          </section>

          {/* 8. Final CTA */}
          <section id="final-cta" className="cta-final glass-card">
            <h2>Ready to build your custom website?</h2>
            <p>Tell us about your project and we'll prepare a tailored plan and budget.</p>
            <a href="/contact" className="cta-button primary">Request a Free Consultation</a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CustomWebDevelopment;
