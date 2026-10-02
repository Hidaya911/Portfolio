// technologies.jsx
import "../styles/technologies.css";
import { useRef } from "react";

function Technologies() {
  const scrollRef = useRef(null);

  const techStack = [
    { name: "HTML5", iconClass: "bi bi-filetype-html text-info" },
    { name: "CSS3", iconClass: "bi bi-filetype-css text-danger" },
    { name: "JavaScript", iconClass: "bi bi-filetype-js text-warning" },
    { name: "TypeScript", iconClass: "bi bi-filetype-tsx text-info" },
    { name: "React", iconClass: "bi bi-browser-chrome text-primary" },
    { name: "Next.js", iconClass: "bi bi-layers-fill text-light" },
    { name: "Bootstrap", iconClass: "bi bi-bootstrap-fill text-purple" },
    { name: "Node.js", iconClass: "bi bi-terminal-fill text-success" },
    { name: "Express.js", iconClass: "bi bi-cpu-fill text-white" },
    { name: "Django", iconClass: "bi bi-shield-shaded text-success" },
    { name: "FastAPI", iconClass: "bi bi-lightning-charge-fill text-warning" },
    { name: "PostgreSQL", iconClass: "bi bi-database text-info" },
    { name: "Supabase", iconClass: "bi bi-lightning-fill text-success" },
    { name: "Tesseract OCR", iconClass: "bi bi-file-earmark-text text-purple" },
    { name: "Git", iconClass: "bi bi-git text-warning" },
    { name: "GitHub", iconClass: "bi bi-github text-white" },
    { name: "Figma", iconClass: "bi bi-palette-fill text-info" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="technologies" className="tech-section d-flex align-items-center">
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        
        {/* Top Header Row */}
        <div className="row align-items-end mb-4 mx-0 mx-lg-4">
          <div className="col-12 text-start">
            <div className="tech-tag d-flex align-items-center gap-2 mb-3">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">TECH STACK</span>
            </div>
            <h2 className="tech-title fw-bold text-white m-0">
              Technologies & Tools
            </h2>
          </div>
        </div>

        {/* Wrapper containing arrows and the carousel track */}
        <div className="tech-wrapper position-relative px-0 px-md-5 mx-0 mx-lg-2">
          
          {/* Left Arrow */}
          <button 
            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center tech-arrow tech-arrow-left"
            onClick={() => scroll("left")}
            aria-label="Show previous technologies"
          >
            <i className="bi bi-chevron-left text-white"></i>
          </button>

          {/* Tech Scrollable Track Container */}
          <div className="tech-carousel">
            <div 
              ref={scrollRef}
              className="tech-track d-flex flex-row flex-nowrap gap-3 align-items-center pb-3"
            >
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-card d-flex flex-column align-items-center justify-content-center flex-shrink-0"
                >
                  <div className="tech-icon-box mb-2">
                    <i className={`${tech.iconClass} fs-3`}></i>
                  </div>
                  <span className="tech-name text-secondary fw-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center tech-arrow tech-arrow-right"
            onClick={() => scroll("right")}
            aria-label="Show more technologies"
          >
            <i className="bi bi-chevron-right text-white"></i>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Technologies;
