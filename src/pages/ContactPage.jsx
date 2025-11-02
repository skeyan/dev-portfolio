import { useEffect } from 'react';
import { LINKS } from '../config/links';
import '../styles/components/contact.scss';

const Contact = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load(
        'particles-js',
        '/particles.json',
        function (response) {}
      );
    }
  }, []);

  const contacts = [
    {
      label: 'Email: (preferred)',
      value: 'eyan0749@gmail.com',
      href: 'mailto:eyan0749@gmail.com',
    },
    { label: 'LinkedIn:', value: LINKS.LINKEDIN, href: LINKS.LINKEDIN },
    { label: 'itch.io:', value: LINKS.ITCH_IO, href: LINKS.ITCH_IO },
    { label: 'Github:', value: LINKS.GITHUB, href: LINKS.GITHUB },
  ];

  return (
    <main className="contact-page">
      <div className="contact-background">
        <div className="gradient-overlay"></div>
        <div id="particles-js" className="hero-particles"></div>
      </div>

      <div className="contact-content">
        <h1 className="contact-title">Contact</h1>

        <div className="contact-card">
          <h2 className="contact-subtitle">Contact Information</h2>
          <p className="contact-description">Here's where you can reach me!</p>

          <div className="contact-list">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <span className="contact-label">{contact.label}</span>
                <a
                  href={contact.href}
                  target={contact.label.includes('Email') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="contact-more-info">
            <b>Location: </b>I am based in New York City, but I am open to
            remote roles, or relocating to the Northeast or Pacific Northwest.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
