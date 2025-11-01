import { useEffect } from 'react';
import '../styles/components/contact.scss';

const Contact = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-js', '/particles.json', function(response) {
            });
        }
    }, []);

  const contacts = [
    { label: 'Email: (preferred)', value: 'eyan0749@gmail.com', href: 'mailto:eyan0749@gmail.com' },
    { label: 'LinkedIn:', value: 'sk-evayan', href: 'https://www.linkedin.com/in/sk-evayan/' },
    { label: 'itch.io:', value: 'masotzhen', href: 'https://masotzhen.itch.io/' },
    { label: 'Github:', value: 'skeyan', href: 'https://github.com/skeyan' }
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
        </div>
      </div>
    </main>
  );
};

export default Contact;