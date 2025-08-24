import React from 'react';
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
                <button className={styles.primary}>Get a Quote</button>
                <button className={styles.secondary}>Talk to an Expert</button>
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
                <button className={styles.primary}>Explore Cloud Services</button>
                <button className={styles.secondary}>Learn More</button>
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
                <button className={styles.primary}>Start Your Journey</button>
                <button className={styles.secondary}>View Case Studies</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
