import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';
import { NetworkVisualization, FloatingElement } from './ITAnimations';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  return (
    <section
      className="position-relative overflow-hidden hero-section"
      style={{ minHeight: 'calc(78vh - var(--nav-height))' }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={window.innerWidth > 768}
  className="w-100 h-100"
  style={{ height: 'calc(78vh - var(--nav-height))' }}
      >
        <SwiperSlide>
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center bg-3d-grid">
            <AnimatedBackground />
            {/* Removed dark overlay; background is now subtle grid */}
            
            {/* Background Pattern */}
            <div className="position-absolute top-0 start-0 w-100 h-100 hero-pattern">
              <FloatingElement direction="up" duration={4} delay={0}>
                <div className="hero-circle-1"></div>
              </FloatingElement>
              <FloatingElement direction="down" duration={3} delay={1}>
                <div className="hero-circle-2"></div>
              </FloatingElement>
              <FloatingElement direction="left" duration={5} delay={2}>
                <div className="hero-circle-3"></div>
              </FloatingElement>
              <FloatingElement direction="right" duration={3.5} delay={0.5}>
                <div className="hero-circle-4"></div>
              </FloatingElement>
            </div>

            <div className="hero-content position-relative z-2 text-center px-3">
              <h1 className="hero-title display-1 fw-bold mb-3">
                Transform Your Business with Smarter IT Solutions
              </h1>
              <p className="hero-subtitle lead fs-5 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Unlock scalable IT services — from web development to enterprise automation — and accelerate your digital growth.
              </p>
              <div className="hero-actions d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link 
                  to="/quick-quote" 
                  className="btn btn-primary btn-lg px-4 py-3 shadow hero-btn-primary"
                >
                  <span className="d-none d-sm-inline">Get a Quote</span>
                  <span className="d-sm-none">Quote</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-outline-secondary btn-lg px-4 py-3 hero-btn-secondary"
                >
                  <span className="d-none d-sm-inline">Talk to an Expert</span>
                  <span className="d-sm-none">Contact</span>
                </Link>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="position-absolute end-0 top-50 translate-middle-y me-5 d-none d-lg-block">
              <NetworkVisualization nodeCount={6} />
            </div>

            {/* Scroll Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 hero-scroll-indicator d-block d-md-none">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center bg-3d-grid">
            {/* Removed dark overlay; background is now subtle grid */}
            
            {/* Background Pattern */}
            <div className="position-absolute top-0 start-0 w-100 h-100 hero-pattern">
              <div className="hero-square-1"></div>
              <div className="hero-square-2"></div>
              <div className="hero-square-3"></div>
            </div>

            <div className="hero-content position-relative z-2 text-center px-3">
              <h1 className="hero-title display-1 fw-bold mb-3">
                Scale Faster with{' '}
                <span className="text-gradient hero-highlight-blue">
                  Cloud & Automation
                </span>
              </h1>
              <p className="hero-subtitle lead fs-5 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Harness the power of cloud, AI, and DevOps to improve efficiency, reduce costs, and future-proof your business.
              </p>
              <div className="hero-actions d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link 
                  to="/services/cloud" 
                  className="btn btn-primary btn-lg px-4 py-3 shadow hero-btn-primary"
                >
                  <span className="d-none d-sm-inline">Explore Cloud Services</span>
                  <span className="d-sm-none">Cloud</span>
                </Link>
                <Link 
                  to="/services" 
                  className="btn btn-outline-secondary btn-lg px-4 py-3 hero-btn-secondary"
                >
                  <span className="d-none d-sm-inline">Learn More</span>
                  <span className="d-sm-none">Services</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center bg-3d-grid">
            {/* Removed dark overlay; background is now subtle grid */}
            
            {/* Background Pattern */}
            <div className="position-absolute top-0 start-0 w-100 h-100 hero-pattern">
              <div className="hero-circle-5"></div>
              <div className="hero-circle-6"></div>
              <div className="hero-circle-7"></div>
            </div>

            <div className="hero-content position-relative z-2 text-center px-3">
              <h1 className="hero-title display-1 fw-bold mb-3">
                Streamline Operations with{' '}
                <span className="text-gradient hero-highlight-green">
                  ERP Solutions
                </span>
              </h1>
              <p className="hero-subtitle lead fs-5 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Integrate your workflows with our industry-specific ERP solutions and watch your efficiency soar.
              </p>
              <div className="hero-actions d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link 
                  to="/services/erp-solutions" 
                  className="btn btn-primary btn-lg px-4 py-3 shadow hero-btn-primary"
                >
                  <span className="d-none d-sm-inline">Explore ERP</span>
                  <span className="d-sm-none">ERP</span>
                </Link>
                <Link 
                  to="/industries" 
                  className="btn btn-outline-secondary btn-lg px-4 py-3 hero-btn-secondary"
                >
                  <span className="d-none d-sm-inline">View Industries</span>
                  <span className="d-sm-none">Industries</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
