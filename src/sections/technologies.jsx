 import "../styles/technologies.css";

function Technologies() {
    //array of techstacks 
    //name, classes with colors
  const techStack = [
    { name: "HTML5", iconClass: "bi bi-filetype-html text-info" },
    { name: "CSS3", iconClass: "bi bi-filetype-css text-danger" },
    { name: "JavaScript", iconClass: "bi bi-filetype-js text-warning" },
    { name: "React", iconClass: "bi bi-browser-chrome text-primary" }, // Alternative: "bi bi-atom"
    { name: "Bootstrap", iconClass: "bi bi-bootstrap-fill text-purple" },
    { name: "Node.js", iconClass: "bi bi-terminal-fill text-success" },
    { name: "Express.js", iconClass: "bi bi-cpu-fill text-white" },
    { name: "Git", iconClass: "bi bi-git text-warning" },
    { name: "GitHub", iconClass: "bi bi-github text-white" },
    { name: "Figma", iconClass: "bi bi-palette-fill text-info" }
  ];

  return (
    <section id="technologies" className="tech-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Top Header Row */}
        <div className="row align-items-end mb-5 g-4 mx-4">
          <div className="col-12 col-md-7 text-start">
            <div className="tech-tag d-flex align-items-center gap-2 mb-3">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">TECH STACK</span>
            </div>
            <h2 className="tech-title fw-bold text-white m-0 ">
              Technologies & Tools
            </h2>
          </div>
          
        </div>

        {/* Tech Grid Items Row */}
        <div className="d-flex flex-wrap gap-3 justify-content-start align-items-center mt-2 mx-4">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card d-flex flex-column align-items-center justify-content-center">
              {/* for the icons yalli b alb l square */}
              <div className="tech-icon-box mb-2">
                <i className={`${tech.iconClass} fs-3`}></i>
              </div>
              <span className="tech-name text-secondary fw-medium">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Technologies;