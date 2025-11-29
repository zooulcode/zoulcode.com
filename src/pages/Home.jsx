import React, { useState, useEffect } from 'react';
import { LOGO } from '../assets/assets';

import AboutUs from './AboutUs';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div className="font-sans leading-relaxed text-gray-800 overflow-x-hidden">


      {/* Navigation */}


      {/* Hero Section */}
      <section
        className="min-h-screen pt-20 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white text-center relative overflow-hidden"
        id="home"
      >
        <div
          className="absolute inset-0 opacity-10 float-code"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' font-size='30' fill='rgba(255,255,255,0.1)'>&lt;/&gt;</text></svg>")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>

        <div className="max-w-4xl z-10 relative px-5">
          <div className="hero-logo flex justify-center items-center gap-5 mb-8">
            <img width="850" src={LOGO} alt="Zoul Code" className="max-w-full h-auto" />
          </div>
          <h2 className="hero-tagline text-4xl md:text-5xl font-bold mb-5">من فكرة لي كود إحترافي</h2>
          <p className="hero-subtitle text-xl text-blue-200 mb-10">Smart Digital Solutions</p>
          <div className="hero-buttons flex gap-5 justify-center flex-wrap">
            <button
              className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-600 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
            >
              <Link to="/contact">
                ابدأ مشروعك
              </Link>
            </button>
            <button
              className="px-8 py-4 bg-transparent text-white border-2 border-yellow-400 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link to="/services">
                اكتشف خدماتنا
              </Link>
            </button>
          </div>
        </div>
      </section>

      <AboutUs />

      <Contact />

    </div>
  );
};

export default Home;