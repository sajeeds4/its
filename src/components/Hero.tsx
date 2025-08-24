import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css';

const slides = [
  {
    title: 'Transform Your Business Digitally',
    desc: 'Modern web solutions for every industry. Build, grow, and scale with confidence.',
    cta: 'Get Started',
    bg: 'hero-bg-1',
  },
  {
    title: 'E-Commerce & ERP Experts',
    desc: 'Seamless integrations, custom platforms, and automation for your business.',
    cta: 'See Our Work',
    bg: 'hero-bg-2',
  },
  {
    title: 'Cloud, AI & Automation',
    desc: 'Leverage the latest tech to stay ahead. Secure, scalable, and smart solutions.',
    cta: 'Explore Services',
    bg: 'hero-bg-3',
  },
  {
    title: 'Your Success, Our Mission',
    desc: 'Partner with a team that cares about your growth. Let’s build something great together.',
    cta: 'Book a Free Consultation',
    bg: 'hero-bg-4',
  },
];

const Hero: React.FC = () => (
  <section className="hero-slider hero-section">
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="hero-swiper"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className={`hero-slide ${slide.bg}`}>
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className="hero-cta">{slide.cta}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Hero;
