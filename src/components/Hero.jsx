import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/hero.css';

const Hero = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', function(response) {
        console.log('Particles.js loaded successfully');
      });
    } else {
      console.error('Particles.js not loaded');
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-gradient"></div>
      <div id="particles-js" className="hero-particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi there! I'm <strong>Eva Yan</strong>, a software engineer with a passion for interactive media of all kinds!
          </h1>
          <p className="hero-subtitle">
            Currently at LinkedIn. Formerly at Holler, Cornell Tech.
          </p>
          <Link to="/contact" className="hero-button">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;