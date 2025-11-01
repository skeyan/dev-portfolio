import '../styles/components/footer.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Eva Yan.</h3>
            <p className="footer-text">
              Hi there! Thank you for visiting my portfolio. Feel free to
              connect with me via email or through the links to the right.
              <br />
              <br />
              I am open to opportunities and would love to talk more about
              software development.
              <br />
              <br />
              <i>
                This site was designed & built from scratch using React, Vite,
                and Vercel.
              </i>
              <br />
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Information</h3>
            <div className="contact-details">
              <p>New York, NY</p>
              <p>
                <a
                  href="mailto:eyan0749@gmail.com"
                  className="footer-contact-link"
                >
                  eyan0749@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <div className="social-links">
              <SocialIcon
                url="https://www.linkedin.com/in/sk-evayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              />
              <SocialIcon
                url="https://github.com/skeyan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              />
              <SocialIcon
                url="https://masotzhen.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="itch.io"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
