import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set up intersection observer
    const options = {
      threshold: 0.2 // 20% of the section needs to be visible
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe hero, about, and projects sections
    const sections = ['hero', 'about', 'projects'].map(id => 
      document.getElementById(id)
    ).filter(Boolean);

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    }
  };

  const getNavLinkClass = (section) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          EVA YAN.
        </Link>
        
        <div className="navbar-links">
          <Link 
            to="/" 
            className={getNavLinkClass('hero')}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className={getNavLinkClass('about')}
            onClick={(e) => scrollToSection('about', e)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={getNavLinkClass('projects')}
            onClick={(e) => scrollToSection('projects', e)}
          >
            Projects
          </a>
          <a 
            href="/files/YanEva2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <Link to="/contact" className="contact-button">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;