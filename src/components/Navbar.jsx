import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LINKS } from '../config/links';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useClickOutside } from '../hooks/useClickOutside';
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const navbarRef = useRef(null);

  /**
   * Calculates the absolute distance of an element from the top of the page.
   * @param {HTMLElement} element - The element to measure
   * @returns {number} The distance from the top of the page in pixels
   */
  const getTopOffset = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  };

  /**
   * Determines which section is currently in the viewport based on scroll position.
   * @returns {string} The ID of the active section ('home', 'about', 'projects', or current activeSection)
   */
  const determineSectionInView = () => {
    const sections = ['hero', 'about', 'projects']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const viewportMiddle = window.scrollY + window.innerHeight / 3;

    // Get all section positions
    const sectionPositions = sections.map((section) => ({
      id: section.id,
      top: getTopOffset(section),
      bottom: getTopOffset(section) + section.offsetHeight,
    }));

    // Find the current section
    const currentSection = sectionPositions.find(
      (section) =>
        viewportMiddle >= section.top && viewportMiddle < section.bottom
    );

    // If at the very top, set to hero/home
    if (window.scrollY < 100) {
      return 'home';
    }

    // If we found a section, use it, otherwise use the last section if we're at the bottom
    if (currentSection) {
      return currentSection.id;
    } else if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      return sections[sections.length - 1].id;
    }

    return activeSection; // Keep current section if none found
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isScrollingDown = scrollY > lastScrollY.current;

          // Use hysteresis (different thresholds for up/down) to prevent flickering
          // See: https://stackoverflow.com/questions/5357918/what-does-hysteresis-mean-and-how-does-it-apply-to-computer-science-or-programmi
          if (isScrollingDown) {
            // Scrolling down: activate at 100px
            if (scrollY > 100 && !isScrolled) {
              setIsScrolled(true);
            }
          } else {
            // Scrolling up: deactivate at 50px
            if (scrollY < 50 && isScrolled) {
              setIsScrolled(false);
            }
          }

          lastScrollY.current = scrollY;

          if (location.pathname === '/') {
            // Update active section only on homepage
            const newSection = determineSectionInView();
            if (newSection !== activeSection) {
              setActiveSection(newSection);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, location.pathname, isScrolled]);

  useEffect(() => {
    // Reset activeSection when navigating away from the homepage
    if (location.pathname !== '/') {
      setActiveSection('');
    }
  }, [location.pathname]);

  /**
   * Smoothly scrolls to a specific section, accounting for navbar height offset.
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  /**
   * Handles navigation link clicks, navigating to section or homepage and closing mobile menu.
   * @param {Event} e - The click event
   * @param {string} sectionId - The ID of the section to navigate to
   */
  const handleNavLinkClick = useCallback((e, sectionId) => {
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
    hamburgerButtonRef.current?.focus();
  }, [navigate, location.pathname, scrollToSection]);

  /**
   * Returns the CSS class string for a nav link based on whether it's the active section.
   * @param {string} section - The section identifier
   * @returns {string} The CSS class string
   */
  const getNavLinkClass = useCallback((section) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  }, [activeSection]);

  /**
   * Closes the mobile menu and returns focus to the hamburger button.
   */
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    hamburgerButtonRef.current?.focus();
  }, []);

  /**
   * Handles contact button click, scrolls to top and closes mobile menu.
   * @param {Event} e - The click event
   */
  const handleContactClick = useCallback((e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  }, [closeMobileMenu]);

  /**
   * Toggles the mobile menu open/closed state.
   */
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Handle ESC key to close menu
  useEscapeKey(closeMobileMenu, isMobileMenuOpen);

  // Focus trap for mobile menu
  useFocusTrap(mobileMenuRef, isMobileMenuOpen, true);

  // Handle click outside to close mobile menu
  useClickOutside([mobileMenuRef, hamburgerButtonRef], closeMobileMenu, isMobileMenuOpen);

  // Memoize computed class names
  const navbarClassName = useMemo(
    () => `navbar ${isScrolled ? 'scrolled' : ''}`,
    [isScrolled]
  );

  const hamburgerIconClassName = useMemo(
    () => `hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`,
    [isMobileMenuOpen]
  );

  const navbarLinksClassName = useMemo(
    () => `navbar-links ${isMobileMenuOpen ? 'open' : ''}`,
    [isMobileMenuOpen]
  );

  const hamburgerAriaLabel = useMemo(
    () => (isMobileMenuOpen ? 'Close menu' : 'Open menu'),
    [isMobileMenuOpen]
  );

  // Memoize click handlers for nav links
  const handleHomeClick = useCallback((e) => handleNavLinkClick(e, ''), [handleNavLinkClick]);
  const handleAboutClick = useCallback((e) => handleNavLinkClick(e, 'about'), [handleNavLinkClick]);
  const handleProjectsClick = useCallback((e) => handleNavLinkClick(e, 'projects'), [handleNavLinkClick]);

  return (
    <nav ref={navbarRef} className={navbarClassName}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          {'<EY />'}
        </Link>

        <button
          ref={hamburgerButtonRef}
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label={hamburgerAriaLabel}
          aria-expanded={isMobileMenuOpen}
        >
          <div className={hamburgerIconClassName}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div 
          ref={mobileMenuRef}
          className={navbarLinksClassName}
          aria-hidden={!isMobileMenuOpen}
        >
          <Link
            to="/"
            className={getNavLinkClass('home')}
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <a
            href="#about"
            className={getNavLinkClass('about')}
            onClick={handleAboutClick}
          >
            About
          </a>
          <a
            href="#projects"
            className={getNavLinkClass('projects')}
            onClick={handleProjectsClick}
          >
            Projects
          </a>
          <a
            href={LINKS.RESUME}
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
