import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Long Island, NY / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our team to build cutting-edge web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Strong experience with React and TypeScript',
        'Backend development with Node.js',
        'Experience with cloud platforms (AWS, Azure)',
        'Knowledge of database systems'
      ]
    },
    {
      id: 2,
      title: 'ERP Implementation Specialist',
      department: 'Consulting',
      location: 'Long Island, NY',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Help businesses transform their operations with ERP solutions like Odoo and custom implementations.',
      requirements: [
        'Experience with ERP systems (Odoo preferred)',
        'Business process analysis skills',
        'Client-facing experience',
        'Project management capabilities'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Design and maintain scalable infrastructure for our clients\' cloud environments.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'CI/CD pipeline development',
        'Cloud infrastructure (AWS, GCP, Azure)',
        'Infrastructure as Code (Terraform, CloudFormation)'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Flexible work arrangements and remote-first culture'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and certification support'
    },
    {
      icon: '🌴',
      title: 'Paid Time Off',
      description: 'Generous PTO policy and flexible scheduling'
    },
    {
      icon: '💻',
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      title: 'Excellence',
      description: 'We strive for quality in everything we do, from code to client service.'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and provide opportunities for professional development.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Team - IT Solutions</title>
        <meta name="description" content="Join our growing team of technology professionals. Explore career opportunities in web development, ERP consulting, cloud infrastructure, and more." />
        <meta property="og:title" content="Careers at IT Solutions" />
        <meta property="og:description" content="Build your career with us - Web Development, ERP, Cloud, and DevOps opportunities" />
        <meta name="keywords" content="careers, jobs, web developer, ERP consultant, DevOps engineer, IT jobs, Long Island jobs" />
      </Helmet>

      <div className="careers-page">
        {/* Hero Section */}
        <section className="section-modern section-gradient-modern">
          <div className="container-xl">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-hero text-white mb-6">
                Build Your Career with Us
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join a dynamic team of technology professionals who are passionate about delivering 
                innovative solutions and driving digital transformation for businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#openings" 
                  className="btn-modern btn-primary-modern"
                >
                  View Open Positions
                </a>
                <Link 
                  to="/contact" 
                  className="btn-modern btn-outline-modern text-white border-white hover:bg-white hover:text-primary-600"
                >
                  Contact HR
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section-modern bg-white">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-section text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're more than just a workplace – we're a community of innovators, 
                problem-solvers, and technology enthusiasts.
              </p>
            </div>

            <div className="grid-modern-3 mb-16">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="card-modern text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Values */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Our Values
              </h3>
              <div className="grid-modern-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-lg font-semibold text-primary-600 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="section-modern bg-gray-50">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-section text-gray-900 mb-6">
                Current Openings
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our available positions and find the perfect role to advance your career.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div 
                  key={job.id} 
                  className="card-modern animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {job.experience}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-500 mb-4">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {job.location}
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6">
                      <Link 
                        to="/contact"
                        className="btn-modern btn-primary-modern w-full lg:w-auto"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Perfect Match */}
            <div className="text-center mt-16">
              <div className="glass-card p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don't See the Perfect Role?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We're always looking for talented individuals to join our team. 
                  Send us your resume and let us know how you'd like to contribute.
                </p>
                <Link 
                  to="/contact"
                  className="btn-modern btn-outline-modern"
                >
                  Send Your Resume
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="section-modern bg-white">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-section text-gray-900 mb-6">
                Our Hiring Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've designed our hiring process to be thorough yet efficient, 
                ensuring the best fit for both you and our team.
              </p>
            </div>

            <div className="grid-modern-4">
              {[
                {
                  step: '01',
                  title: 'Application',
                  description: 'Submit your application through our contact form or email.'
                },
                {
                  step: '02',
                  title: 'Initial Review',
                  description: 'Our team reviews your application and experience.'
                },
                {
                  step: '03',
                  title: 'Interview',
                  description: 'Video or in-person interview with our technical team.'
                },
                {
                  step: '04',
                  title: 'Welcome Aboard',
                  description: 'Complete onboarding and start your journey with us.'
                }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-modern mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
