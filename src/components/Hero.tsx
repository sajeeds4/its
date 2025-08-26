import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero} hero-section`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={`${styles.slide} ${styles.slide1}`}>
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h2 className={styles.headline}>Transform Your Business with Smarter IT Solutions</h2>
              <p className={styles.subtext}>
                Unlock scalable IT services — from web development to enterprise automation — and accelerate your digital growth.
              </p>
              <div className={styles.actions}>
                <Link to="/quick-quote" className={styles.primary}>Get a Quote</Link>
                <Link to="/contact" className={styles.secondary}>Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.slide} ${styles.slide2}`}>
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h2 className={styles.headline}>Scale Faster with Cloud & Automation</h2>
              <p className={styles.subtext}>
                Harness the power of cloud, AI, and DevOps to improve efficiency, reduce costs, and future-proof your business.
              </p>
              <div className={styles.actions}>
                <Link to="/services/cloud" className={styles.primary}>Explore Cloud Services</Link>
                <Link to="/services" className={styles.secondary}>Learn More</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.slide} ${styles.slide3}`}>
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h2 className={styles.headline}>Future-Proof Your Technology</h2>
              <p className={styles.subtext}>
                Build resilient systems with cybersecurity, modern infrastructure, and continuous innovation tailored for your needs.
              </p>
              <div className={styles.actions}>
                <Link to="/services/web-development" className={styles.primary}>Start Your Journey</Link>
                <Link to="/case-studies" className={styles.secondary}>View Case Studies</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
