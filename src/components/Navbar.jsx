import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reset activeSection when navigating away from the homepage
    if (location.pathname !== '/') {
      setActiveSection('');
    } else {
      // Set up intersection observer only on the homepage
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
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === '') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (location.pathname === '/') {
      // On homepage, scroll to the section
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to the homepage and then scroll to the section
      navigate('/');

      // Wait for the page to load, then scroll to the section
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }

    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (section) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  };

  const handleContactClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          EVA YAN.
        </Link>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop and Mobile Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={getNavLinkClass('home')}
            onClick={(e) => handleNavLinkClick(e, '')}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className={getNavLinkClass('about')}
            onClick={(e) => handleNavLinkClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={getNavLinkClass('projects')}
            onClick={(e) => handleNavLinkClick(e, 'projects')}
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
          <Link 
            to="/contact" 
            className="contact-button"
            onClick={handleContactClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;