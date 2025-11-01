import '../styles/components/projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Engineering at The New York Times',
      description:
        'Coming soon: Details about my engineering work at The New York Times. See my resume for more details!',
      image: null,
      technologies: [],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: "LinkedIn's modernized reporting flow",
      description:
        'A complete overhaul of the web reporting flow to improve developer efficiency and member experience.',
      image: '/linkedin-reportin.png',
      technologies: ['JAVASCRIPT', 'EMBER.JS', 'TYPESCRIPT', 'GRAPHQL'],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: "Rapid A/B experimentation for LinkedIn's reporting flow",
      description:
        'Performed multiple A/B experiments to optimize message report action rate.',
      image: '/reportin-messages.png',
      technologies: ['JAVASCRIPT', 'EMBER.JS', 'JAVA', 'GRAPHQL'],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: 'Educational dialog system to improve feed quality and member UX',
      description:
        'Led frontend development to decrease number of restricted accounts and content on LinkedIn by augmenting the content creation experience.',
      image: '/sbe.png',
      technologies: ['JAVASCRIPT', 'EMBER.JS', 'TYPESCRIPT', 'GRAPHQL'],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: 'Smart profile report cooloff UX and API',
      description:
        'Designed and implemented the logic for a new cooloff period between consecutive profile reports to reduce duplicate reports.',
      image: '/duplicate-profile.png',
      technologies: ['JAVASCRIPT', 'EMBER.JS', 'JAVA'],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: 'One-to-one mapping between a profile report and its status',
      description:
        "Implemented complex logic for a profile report's status page to be linked to a unique status pertaining to the report, for compliance of the Digital Services Act.",
      image: '/profile-sh.png',
      technologies: ['JAVA'],
      demoUrl: '',
      githubUrl: '',
    },
    {
      title: "Remy: A NYC Apartment Renter's Companion",
      description:
        "A web app that battles New York's housing crisis. Done in a group of 4.",
      image: '/remy-splash.png',
      technologies: ['REACT', 'NEXT.JS', 'EXPRESS', 'MONGODB'],
      demoUrl: 'https://www.youtube.com/watch?v=kgD-H-XxxW8',
      githubUrl: 'https://github.com/RemyCapstone/capstone',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">🚀 Featured Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="project-coming-soon">
                    <span className="coming-soon-text">Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
