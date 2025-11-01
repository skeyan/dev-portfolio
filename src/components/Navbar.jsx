import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to get element's distance from top of page
  const getTopOffset = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  };

  // Helper function to determine which section is currently in view
  const determineSectionInView = () => {
    const sections = ['hero', 'about', 'projects'].map(id => 
      document.getElementById(id)
    ).filter(Boolean);

    const viewportMiddle = window.scrollY + (window.innerHeight / 3);
    
    // Get all section positions
    const sectionPositions = sections.map(section => ({
      id: section.id,
      top: getTopOffset(section),
      bottom: getTopOffset(section) + section.offsetHeight
    }));

    // Find the current section
    const currentSection = sectionPositions.find(section => 
      viewportMiddle >= section.top && viewportMiddle < section.bottom
    );

    // If at the very top, set to hero/home
    if (window.scrollY < 100) {
      return 'home';
    }

    // If we found a section, use it, otherwise use the last section if we're at the bottom
    if (currentSection) {
      return currentSection.id;
    } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
      return sections[sections.length - 1].id;
    }

    return activeSection; // Keep current section if none found
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        // Update active section only on homepage
        const newSection = determineSectionInView();
        if (newSection !== activeSection) {
          setActiveSection(newSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, location.pathname]);

  useEffect(() => {
    // Reset activeSection when navigating away from the homepage
    if (location.pathname !== '/') {
      setActiveSection('');
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
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }

    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (section) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  };

  const handleContactClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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