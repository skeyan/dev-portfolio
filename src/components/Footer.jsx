import '../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Eva Yan.</h3>
            <p className="footer-text">
              Hi there! Thank you for visiting my portfolio. Feel free to connect with me via email or through the links to the right.
              <br /><br />
              I am open to opportunities and would love to talk more about creative interactive development.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Information</h3>
            <div className="contact-details">
              <p>New York, NY</p>
              <p>eyan0749@protonmail.com</p>
            </div>
          </div>

          <div className="footer-section">
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/sk-evayan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor"/>
                  <rect x="2" y="9" width="4" height="12" fill="currentColor"/>
                  <circle cx="4" cy="4" r="2" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://github.com/skeyan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://masotzhen.itch.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="itch.io"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4v1.5h16V4H4zm0 3v1.5h16V7H4zm0 3v1.5h16V10H4zm0 3v1.5h16V13H4zm0 3v1.5h16V16H4z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;