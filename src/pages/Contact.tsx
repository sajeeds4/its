import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const errors = useMemo(() => {
    const errs: Partial<Record<keyof typeof values, string>> = {};
    if (!values.name.trim()) errs.name = 'Please enter your full name';
    if (!values.email.trim()) errs.email = 'Please enter a valid email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errs.email = 'Email format looks invalid';
    if (values.phone && !/^[\d\-+()\s]{7,}$/.test(values.phone)) errs.phone = 'Use digits and be at least 7 characters';
    if (!values.message.trim()) errs.message = 'Please tell us a bit about your project';
    return errs;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true, company: true, service: true });
    if (!isValid) return;
    // TODO: integrate backend or form service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="container section" id="main">
        <Helmet>
          <title>Thank you | Aethrix Systems</title>
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card glass-card p-4 p-md-5 text-center">
              <h1 className="mb-3">Thanks for reaching out</h1>
              <p className="lead mb-4">We received your message and will reply within one business day. Want to move faster?</p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="/free-consultation" className="btn btn-primary btn-lg">Book a free consultation</a>
                <a href="tel:+1-917-564-9475" className="btn btn-outline-primary btn-lg">Call our team</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Aethrix Systems - IT Services & Solutions on Long Island</title>
        <meta 
          name="description" 
          content="Contact Aethrix Systems for professional IT services on Long Island. Get a free consultation for web development, ERP solutions, cloud migration, AI automation, and managed IT support."
        />
        <meta 
          name="keywords" 
          content="contact aethrix systems, Long Island IT services, IT consulting, free consultation, web development quote, ERP implementation, technology support, business automation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aethrixsystems.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Aethrix Systems - Professional IT Services" />
        <meta property="og:description" content="Ready to transform your business? Contact us for a free consultation on web development, ERP solutions, cloud services, and technology automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aethrixsystems.com/contact" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Aethrix Systems - IT Solutions" />
        <meta name="twitter:description" content="Get in touch for professional IT services and technology solutions. Free consultation available for businesses on Long Island." />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aethrix Systems",
              "description": "Professional IT services and technology solutions for businesses",
              "url": "https://aethrixsystems.com",
              "email": "info@aethrixsystems.com",
              "phone": "+1-234-567-8900",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Long Island",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7891",
                "longitude": "-73.1350"
              },
              "areaServed": "Long Island, NY",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00"
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <section className="section">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8" aria-label="Contact information">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <div className="space-y-4 text-lg">
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>{' '}
                      <a 
                        href="mailto:info@aethrixsystems.com" 
                        aria-label="Email Aethrix Systems at info@aethrixsystems.com"
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        info@aethrixsystems.com
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Mobile:</span>{' '}
                      <a 
                        href="tel:+19175649475" 
                        aria-label="Call Aethrix Systems at +1 917 564 9475"
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        +1 917 564 9475
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6 leading-relaxed">
                    We'd love to hear about your project and discuss how our technology solutions 
                    can help drive your business forward. Contact us today for a free consultation.
                  </p>
                </div>
                
                {/* Contact Methods Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <i className="fas fa-envelope text-primary-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a 
                          href="mailto:info@aethrixsystems.com"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                          aria-label="Send email to info@aethrixsystems.com"
                        >
                          info@aethrixsystems.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <i className="fas fa-phone text-primary-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a 
                          href="tel:+19175649475"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                          aria-label="Call +1 917 564 9475"
                        >
                          +1 917 564 9475
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <i className="fas fa-map-marker-alt text-primary-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">Long Island, New York</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <i className="fas fa-clock text-primary-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <form 
                  onSubmit={onSubmit}
                  role="form"
                  aria-label="Contact form"
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-label="Your full name"
                        className="form-input"
                      />
                      {touched.name && errors.name && (<div id="name-error" className="form-error" role="alert">{errors.name}</div>)}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-label="Your email address"
                        className="form-input"
                      />
                      {touched.email && errors.email && (<div id="email-error" className="form-error" role="alert">{errors.email}</div>)}
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="form-label">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-label="Your company name"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={!!(touched.phone && errors.phone)}
                        aria-describedby="phone-error"
                        aria-label="Your phone number"
                        className="form-input"
                      />
                      {touched.phone && errors.phone && (<div id="phone-error" className="form-error" role="alert">{errors.phone}</div>)}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="form-label">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={onChange}
                      onBlur={onBlur}
                      aria-label="Select service you're interested in"
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="erp-solutions">ERP Solutions</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="networking">Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder="Tell us about your project and how we can help..."
                      required
                      aria-required="true"
                      aria-describedby="message-error"
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-label="Your message describing your project needs"
                      className="form-input resize-none"
                    ></textarea>
                    {touched.message && errors.message && (<div id="message-error" className="form-error" role="alert">{errors.message}</div>)}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={!isValid}
                    aria-label="Send your message to Aethrix Systems"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
