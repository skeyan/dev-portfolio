import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/hero.scss';

const Hero = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load(
        'particles-js',
        '/particles.json',
        function (response) {}
      );
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-gradient"></div>
      <div id="particles-js" className="hero-particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi there! I'm <strong>Eva Yan</strong>, a software engineer with a
            passion for interactive media of all kinds!
          </h1>
          <p className="hero-subtitle">
            Currently a mid-level SWE at <b>The New York Times</b>.
          </p>
          <p className="hero-subtitle">
            Formerly a Senior SWE at <b>LinkedIn</b>, and a SWE at <b>Holler</b>{' '}
            and <b>Cornell Tech</b>.
          </p>
          <p className="hero-subtitle">
            Open to <b>mid-level roles</b> (3-5 years of experience) in the
            Northeast, Pacific Northwest, or remote roles.
          </p>
          <div className="hero-cta-container">
            <Link to="/contact" className="hero-button">
              Get in touch
            </Link>
            <button
              onClick={() => window.open('/files/YanEvaNov2025.pdf')}
              className="hero-button"
            >
              Download resume
            </button>
            <a
              href="http://www.linkedin.com/in/sk-evayan"
              target="_blank"
              className="hero-button"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
