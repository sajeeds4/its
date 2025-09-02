import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      desc: 'All-in-one website solutions: custom sites, WordPress, Shopify, Wix, e-commerce, and more — tailored for your business.',
      link: '/services/web-development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9c0-5 4-9 9-9s9 4 9 9" />
        </svg>
      )
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      desc: 'Streamline your business operations with integrated ERP systems that connect all aspects of your business.',
      link: '/services/erp-solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Cloud & IT Services',
      desc: 'Secure, reliable cloud infrastructure and IT services that keep your business running smoothly.',
      link: '/services/cloud',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      id: 'networking',
      title: 'Networking',
      desc: 'Robust, secure networking for offices, remote teams, and hybrid work.',
      link: '/services/networking',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 'data-migration',
      title: 'Data Migration & Recovery',
      desc: 'Safe, efficient data migration and disaster recovery solutions.',
      link: '/services/data-migration-recovery',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      desc: 'AI-powered automation, chatbots, and workflow optimization.',
      link: '/services/ai-automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      desc: 'HIPAA-compliant solutions for medical practices and healthcare organizations.',
      link: '/industries/healthcare',
      image: '/assets/industries/healthcare.svg'
    },
    {
      title: 'Manufacturing',
      desc: 'Streamline production with ERP, automation, and supply chain management.',
      link: '/industries/manufacturing',
      image: '/assets/industries/manufacturing.svg'
    },
    {
      title: 'Professional Services',
      desc: 'Boost productivity with project management and client collaboration tools.',
      link: '/industries/professional-services',
      image: '/assets/industries/professional.svg'
    },
    {
      title: 'Retail',
      desc: 'E-commerce, inventory management, and customer experience solutions.',
      link: '/industries/retail',
      image: '/assets/industries/retail.svg'
    }
  ];

  const features = [
    {
      title: '24/7 Support',
      desc: 'Round-the-clock technical support to keep your business running.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    },
    {
      title: 'Scalable Solutions',
      desc: 'Technology that grows with your business from startup to enterprise.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      )
    },
    {
      title: 'Security First',
      desc: 'Enterprise-grade security to protect your data and operations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Expert Team',
      desc: 'Certified professionals with years of industry experience.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions | Professional IT Services & Web Development</title>
        <meta name="description" content="Professional IT services including web development, ERP solutions, cloud services, and AI automation. Transform your business with our expert technology solutions." />
        <meta property="og:title" content="IT Solutions | Professional IT Services" />
        <meta property="og:description" content="Professional IT services - Web Development, ERP, Cloud, AI Automation, and more" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="IT services, web development, ERP solutions, cloud services, AI automation, networking, professional IT support" />
      </Helmet>
      
      <div className="home">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section className="section-sm bg-white border-b border-gray-200">
          <div className="container-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-gray-50">
          <div className="container-xl">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Core Services
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid-responsive-3 mb-12">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="card card-interactive animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    {service.desc}
                  </p>
                  <div className="text-center">
                    <Link 
                      to={service.link} 
                      className="btn btn-outline btn-md hover:btn-primary transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/services" 
                className="btn btn-primary btn-lg shadow-primary hover:shadow-primary-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-white">
          <div className="container-xl">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We deliver reliable, scalable IT solutions that drive business growth
              </p>
            </div>

            <div className="grid-responsive-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section bg-gradient-to-br from-primary-900 to-primary-700 text-white">
          <div className="container-xl">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Specialized solutions for your industry's unique challenges
              </p>
            </div>

            <div className="grid-responsive-2 lg:grid-cols-4 mb-12">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-8 h-8 filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-primary-100 leading-relaxed mb-6">
                      {industry.desc}
                    </p>
                    <Link 
                      to={industry.link} 
                      className="btn btn-secondary btn-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/industries" 
                className="btn btn-secondary btn-lg"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gray-900 text-white">
          <div className="container-xl">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 leading-relaxed">
                Get started with a free consultation and discover how our IT solutions can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/free-consultation" 
                  className="btn btn-primary btn-lg lg:btn-xl shadow-primary hover:shadow-primary-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/quick-quote" 
                  className="btn btn-outline btn-lg lg:btn-xl border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Get Quick Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
