import '../styles/components/projects.css';

const Projects = () => {
  const projects = [
    {
        title: "LinkedIn's modernized reporting flow",
        description: "A complete overhaul of the web reporting flow.",
        image: "/linkedin-reportin.png",
        technologies: ["JAVASCRIPT", "EMBER.JS", "TYPESCRIPT", "GRAPHQL"],
        demoUrl: "",
        githubUrl: ""
    },
    {
      title: "Rapid A/B experimentation for LinkedIn's reporting flow",
      description: "Performed multiple A/B experiment to optimize message report action rate.",
      image: "/reportin-messages.png",
      technologies: ["JAVASCRIPT", "EMBER.JS", "JAVA", "GRAPHQL"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "Remy: A NYC Apartment Renter's Companion",
      description: "A web app that battles New York's housing crisis. Done in a group of 4.",
      image: "/remy-splash.png",
      technologies: ["REACT", "NEXT.JS", "EXPRESS", "MONGODB"],
      demoUrl: "https://www.youtube.com/watch?v=kgD-H-XxxW8",
      githubUrl: "https://github.com/RemyCapstone/capstone"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">
          🎨 Featured Work
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

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