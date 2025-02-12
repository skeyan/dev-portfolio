import { Link } from 'react-router-dom';
import '../styles/components/about.css';

const About = () => {
  const technicalSkills = [
    'JAVASCRIPT', 'TYPESCRIPT', 'CSS & SCSS', 'HTML',
    'GRAPHQL & REST', 'EMBER', 'REACT', 'REDUX',
    'GIT', 'PYTHON', 'JAVA'
  ];

  const otherSkills = [
    'FIGMA', 'GITHUB', 'ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR',
    'JIRA', 'CONFLUENCE', 'GOOGLE SUITE'
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">
          ✏️ About Me
        </h2>
        
        <h3 className="about-subtitle">
          Full-stack, visual, <span className="emphasis">Interactive Media developer</span>,
          specialized in web and game development.
        </h3>

        <div className="about-grid">
          <div className="about-text">
            <h4 className="section-title">Creative technologist at heart</h4>
            <p>
              I'm a creative developer who builds solutions to fulfill businesses' goals with UX in mind.
            </p>
            <p>
              I'm constantly inspired by technology that incorporates elements that people can interact with: from
              video games, to web applications, to data visualizations.
              My passions lie at the interaction of art, technology, and storytelling.
            </p>
            <p>
              As an engineer, I value clarity in communication and code, and strive to understand the "why" of the problem.
              Outside of my job, I enjoy watching Netflix, playing video games, and reading!
            </p>
            <p>
              While you're here, check out my resume, or{' '}
              <a href="https://www.linkedin.com/in/sk-evayan/" target="_blank" rel="noopener noreferrer" className="text-link">
                my LinkedIn
              </a>
              , to see what I've been up to!
            </p>
            <button 
              className="resume-button"
              onClick={() => window.open('/files/YanEva2025.pdf')}
            >
              Download Resume
            </button>
          </div>

          <div className="skills-section">
            <h4 className="section-title">Technical Skills</h4>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="section-title">Other Skills</h4>
            <div className="skills-grid">
              {otherSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;