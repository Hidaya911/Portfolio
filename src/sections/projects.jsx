import "../styles/projects.css";

function Projects() {
  //define array of objects
  //kl object bi3arref 1 project
  //github links hyi nested array containing features used 
  const projectsData = [
    {
      title: "LebanonTour",
      description:<>A responsive travel guide showcasing Lebanon’s premier landmarks with <span className="gradient-highlight">dynamic location filtering, fully interactive responsive media grids, and optimized mobile-first navigation menus.</span></>,
      tags: ["HTML5", "CSS3", "Bootstrap"],
      githubLink: "https://github.com/Hidaya911/Project3"
    },
    
    {
      title: "BlackEyes Checkout",
      description:<>A highly secure, multi-step checkout flow for a premier printing press, featuring <span className="gradient-highlight">real-time front-end form validation, interactive multi-stage progress tracking, and client-side payment data hashing.</span></>,
      tags: ["HTML5", "CSS3", "Bootstrap","Javascript"],
      githubLink: "https://github.com/Hidaya911/ProjectNB2"
    },
    {
      title: "HomePro",
      description: <>A premium smart home service and repair platform featuring <span className="gradient-highlight">dynamic service filtering, an interactive appointment scheduling wizard, and fully responsive technician tracking views.</span></>,
      tags: ["HTML5", "CSS3", "Bootstrap"],
      githubLink: "https://github.com/Hidaya911/DH-Proj1"
    }
  ];

  return (
    <section id="projects" className="projects-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5">
        
 
        <div className="row mb-5">
          <div className="col-12 text-start">
            <div className="projects-tag d-flex align-items-center gap-2 mb-3 mx-4">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">WORK</span>
            </div>
            <h2 className="projects-title fw-bold text-white m-0 mx-4">
              Featured projects
            </h2>
          </div>
        </div>

        {/*  Grid Layout ll cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">

          {projectsData.map((project, index) => (
            <div key={index} className="col">
              <div className="project-card d-flex flex-column h-100 p-4">
                
                {/* first line of the card yalli feha icon w GH link */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  {/* cutomizing the icon itself  */}
                  <div className="project-icon-box d-flex align-items-center justify-content-center">
                    <i className="bi bi-folder-symlink fs-4"></i>
                  </div>
                  
                  {/* links of the github link nd styling it */}
                  <a 
                    href={project.githubLink} 
                    className="gh-link-btn px-2.5 py-1 fw-bold text-decoration-none"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </div>

                {/* data for each project*/}
                <h3 className="project-card-title fw-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="project-card-description text-secondary flex-grow-1 mb-4">
                  {project.description}
                </p>

                {/* Badges for features used in each project */}
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-badge px-3 py-1fw-medium">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;