import React from 'react';
import { Link } from 'react-router-dom';
                const WebDevelopment: React.FC = () => (
                  <div className="page-container">
                    {/* Hero */}
                    <header className="hero-section service-hero">
                      <div className="hero-content">
                        <h1>Build a Website That Works for Your Business</h1>
                        <p>
                          We build fast, secure, and easy-to-manage websites for small and medium businesses. From CMS sites to
                          e-commerce and custom web apps, we focus on outcomes: more leads, more sales, and a better customer experience.
                        </p>
                      </div>
                    </header>

                    {/* Introduction */}
                    <section className="section">
                      <div className="container">
                        <h2>Web development designed for SMBs</h2>
                        <p>
                          Your website should be a growth engine. We help you choose the right platform, implement best practices,
                          and launch quickly with a future-proof foundation. Whether you prefer a popular CMS or need a tailor-made
                          application, we deliver clean code, clear content structures, and measurable performance.
                        </p>
                      </div>
                    </section>

                    {/* Platform Sections */}
                    <section className="section">
                      <div className="container">
                        <div className="grid grid-2">
                          <article className="card">
                            <h3>WordPress</h3>
                            <p>
                              Flexible CMS for business websites, blogs, and small e-commerce. We build custom themes, set up
                              essential plugins, and optimize for speed and SEO.
                            </p>
                            <ul className="service-features">
                              <li>Custom theme and blocks</li>
                              <li>WooCommerce setup</li>
                              <li>Performance and SEO</li>
                              <li>Security hardening</li>
                            </ul>
                            <p><Link to="/services/web-development/wordpress" className="btn btn-primary">Learn more →</Link></p>
                          </article>

                          <article className="card">
                            <h3>Shopify</h3>
                            <p>
                              Modern e-commerce for selling online and in-store. We design high-converting storefronts, integrate apps,
                              and streamline operations.
                            </p>
                            <ul className="service-features">
                              <li>Custom theme design</li>
                              <li>App integrations</li>
                              <li>Payments and shipping</li>
                              <li>Analytics and CRO</li>
                            </ul>
                            <p><Link to="/services/web-development/shopify" className="btn btn-primary">Learn more →</Link></p>
                          </article>

                          <article className="card">
                            <h3>Wix</h3>
                            <p>
                              Easy-to-manage websites with professional design. Perfect for portfolios, local businesses, and quick
                              launches with built-in tools.
                            </p>
                            <ul className="service-features">
                              <li>Custom layouts and branding</li>
                              <li>Wix Stores configuration</li>
                              <li>On-page SEO setup</li>
                              <li>Content and forms</li>
                            </ul>
                            <p><Link to="/services/web-development/wix" className="btn btn-primary">Learn more →</Link></p>
                          </article>

                          <article className="card">
                            <h3>Custom Development</h3>
                            <p>
                              When you need something beyond a CMS. We build React-based web apps and APIs tailored to your workflows
                              
                            </p>
                            <ul className="service-features">
                              <li>React + TypeScript frontends</li>
                              <li>Node/Python APIs</li>
                              <li>3rd-party integrations</li>
                              <li>Performance and testing</li>
                            </ul>
                            <p><Link to="/services/web-development/custom" className="btn btn-primary">Learn more →</Link></p>
                          </article>
                        </div>
                      </div>
                    </section>


                    {/* How We Help Your Business */}
                    <section className="section">
                      <div className="container">
                        <h2>How we help your business succeed</h2>
                        <p>
                          We don’t just build websites—we help you achieve real business results. Our team works closely with you to understand your goals, audience, and challenges, then delivers a solution that drives growth. Whether you need more leads, online sales, or a professional brand presence, we have the expertise to make it happen.
                        </p>
                        <ul className="service-features">
                          <li>Consultative approach: strategy, design, and launch</li>
                          <li>Conversion-focused layouts and calls to action</li>
                          <li>Ongoing support and performance monitoring</li>
                        </ul>
                      </div>
                    </section>

                    {/* Web Development Tools & Site Types */}
                    <section className="section">
                      <div className="container">
                        <h2>Web development tools & site types we deliver</h2>
                        <ul className="service-features">
                          <li>WordPress, Shopify, Wix, and custom React/Node solutions</li>
                          <li>Business websites, e-commerce stores, landing pages, and web apps</li>
                          <li>Integrations: CRM, analytics, payments, booking, and more</li>
                          <li>Modern dev stack: Git, Figma, Vercel, Netlify, AWS, and more</li>
                        </ul>
                      </div>
                    </section>

                    {/* Why Work With Us */}
                    <section className="section">
                      <div className="container">
                        <h2>Why work with us</h2>
                        <ul className="service-features">
                          <li><strong>SEO-ready</strong>: Clean information architecture, schema, and performance budgets.</li>
                          <li><strong>Mobile-first</strong>: Responsive design and Core Web Vitals-focused builds.</li>
                          <li><strong>Integrations</strong>: CRM, analytics, payments, and marketing tools wired in.</li>
                          <li><strong>Security</strong>: Hardening, updates, backups, and safe deployment practices.</li>
                        </ul>
                      </div>
                    </section>

                    {/* Closing CTA */}
                    <section className="section">
                      <div className="container text-center">
                        <h2>Explore our Web Development Services</h2>
                        <p>Tell us about your goals—we’ll recommend the right platform and plan.</p>
                        <p>
                          <Link to="/contact" className="btn btn-primary">Get started →</Link>
                        </p>
                      </div>
                    </section>
                  </div>
                );

export default WebDevelopment;
