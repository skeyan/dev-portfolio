import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { PiLinkedinLogo } from 'react-icons/pi';

import { LINKS, Company, companies } from '../config/links';
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

  const variants = ['desktop', 'mobile'];

  // Helper function to render company link
  const renderCompanyLink = (companyKey) => {
    const company = companies[companyKey];
    return (
      <a
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-company-link"
      >
        <b>{company.name}</b>
      </a>
    );
  };

  const getHeroTitle = (variant) => {
    const titleContent = {
      desktop: (
        <>
          Hi there! I'm <strong>Eva Yan</strong>, a software engineer with a
          passion for interactive media of all kinds!
        </>
      ),
      mobile: <strong>Eva Yan</strong>,
    };

    return (
      <h1 key={variant} className={`hero-title hero-title--${variant}`}>
        {titleContent[variant]}
      </h1>
    );
  };

  const getHeroSubtitles = (variant) => {
    const subtitlesContent = {
      desktop: (
        <>
          <p className="hero-subtitle">
            Currently a mid-level SWE at {renderCompanyLink(Company.NYTIMES)}.
          </p>
          <p className="hero-subtitle">
            Formerly a Senior SWE at {renderCompanyLink(Company.LINKEDIN)}, and
            a SWE at {renderCompanyLink(Company.HOLLER)} and{' '}
            {renderCompanyLink(Company.CORNELL_TECH)}.
          </p>
          <p className="hero-subtitle">
            Open to <b>mid-level roles</b> (3-5 years of experience) in the
            Northeast, Pacific Northwest, or remote roles.
          </p>
        </>
      ),
      mobile: (
        <>
          <p className="hero-subtitle">
            Mid-level SWE at {renderCompanyLink(Company.NYTIMES)}
          </p>
          <p className="hero-subtitle">
            Formerly at {renderCompanyLink(Company.LINKEDIN)},{' '}
            {renderCompanyLink(Company.HOLLER)}, and{' '}
            {renderCompanyLink(Company.CORNELL_TECH)}
          </p>
          <p className="hero-subtitle">
            Open to <b>mid-level roles</b> in Northeast, PNW, or remote
          </p>
        </>
      ),
    };

    return (
      <div
        key={variant}
        className={`hero-subtitles hero-subtitles--${variant}`}
      >
        {subtitlesContent[variant]}
      </div>
    );
  };

  const renderHeroTitle = () => variants.map(getHeroTitle);
  const renderHeroSubtitles = () => variants.map(getHeroSubtitles);

  return (
    <section id="hero" className="hero">
      <div className="hero-gradient"></div>
      <div id="particles-js" className="hero-particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          {renderHeroTitle()}
          {renderHeroSubtitles()}
          <div className="hero-cta-container">
            <Link
              to="/contact"
              className="hero-button"
              aria-label="Get in touch"
              title="Get in touch"
            >
              <AiOutlineMail />
            </Link>
            <button
              onClick={() => window.open(LINKS.RESUME)}
              className="hero-button"
              aria-label="Download resume"
              title="Download resume"
            >
              <IoCloudDownloadOutline />
            </button>
            <a
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
              aria-label="View LinkedIn Profile"
              title="View LinkedIn Profile"
            >
              <PiLinkedinLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
