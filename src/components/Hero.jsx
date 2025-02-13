import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/hero.css';

const Hero = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', function(response) {
      });
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-gradient"></div>
      <div id="particles-js" className="hero-particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi there! I'm <strong>Eva Yan</strong>, a software engineer with a passion for interactive media of all kinds!
          </h1>
          <p className="hero-subtitle">
            Currently a Senior SWE (IC3) at <b>LinkedIn</b>. Formerly at <b>Holler</b>, <b>Cornell Tech</b>.
          </p>
          <div className="hero-cta-container">
            <Link to="/contact" className="hero-button">
              Get in touch
            </Link>
            <button 
              onClick={() => window.open('/files/YanEva2025.pdf')}
              className="hero-button"
            >
              Download resume
            </button>
            <a href="http://www.linkedin.com/in/sk-evayan" target="_blank" className="hero-button">
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;