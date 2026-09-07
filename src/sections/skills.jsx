// skills.jsx
import "../styles/skills.css";
import { useRef } from "react";

function Skills() {
  const scrollRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Skills",
      iconClass: "bi bi-code-slash",
      accentClass: "cyan-accent",
      items: ["Component-Based Development", "Responsive Design", "React Development", "API Integration", "Clean Code Practices"]
    },
    {
      title: "UI/UX Basics",
      iconClass: "bi bi-vector-pen",
      accentClass: "magenta-accent",
      items: ["Wireframing", "Prototyping", "Color Theory", "Typography", "User-Centered Design"]
    },
    {
      title: "Problem Solving",
      iconClass: "bi bi-cpu",
      accentClass: "yellow-accent",
      items: ["Analytical Thinking", "Debugging Skills", "Algorithmic Thinking", "Critical Thinking", "Creative Solutions"]
    },
    {
      title: "Backend Development",
      iconClass: "bi bi-server",
      accentClass: "magenta-accent",
      items: ["RESTful APIs", "Database Modeling", "Server Architecture", "Authentication & Security", "Performance Optimization"]
    },
    {
      title: "Team Collaboration",
      iconClass: "bi bi-people",
      accentClass: "cyan-accent",
      items: ["Teamwork", "Effective Communication", "Git & Version Control", "Agile Mindset", "Leadership"]
    }
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
    <section id="skills" className="skills-section d-flex align-items-center">
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        
        {/* Header Row */}
        <div className="row align-items-end mb-4 mx-0 mx-lg-4 skills-header">
          <div className="col-12 text-start">
            <div className="skills-tag d-flex align-items-center gap-2 mb-3">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">CAPABILITIES</span>
            </div>
            <h2 className="skills-main-title fw-bold text-white m-0">
              Skills & strengths
            </h2>
          </div>
        </div>

        {/* Outer Wrapper for Carousel + Arrows aligned inline */}
        <div className="skills-wrapper position-relative px-0 px-md-5 mx-0 mx-lg-2">
          
          {/* Left Arrow */}
          <button 
            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center skills-arrow skills-arrow-left"
            onClick={() => scroll("left")}
            aria-label="Show previous skills"
          >
            <i className="bi bi-chevron-left text-white"></i>
          </button>

          {/* Scrollable Track Container with top headroom for hover translation & shadow */}
          <div className="skills-carousel">
            <div ref={scrollRef} className="skills-track d-flex flex-row flex-nowrap gap-4 align-items-stretch pb-4">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="skills-card-slot flex-shrink-0"
              >
                <div className={`skills-card h-100 p-4 ${category.accentClass}`}>
                  
                  {/* Glowing Top Icon Wrapper */}
                  <div className="card-icon-box mx-auto mb-4 d-flex align-items-center justify-content-center">
                    <i className={`${category.iconClass} fs-4`}></i>
                  </div>

                  {/* Card Title */}
                  <h3 className="card-category-title text-center fw-bold mb-3">
                    {category.title}
                  </h3>
                  
                  {/* Separator line under title */}
                  <div className="card-title-separator mx-auto mb-4"></div>

                  {/* List Items */}
                  <ul className="list-unstyled d-flex flex-column gap-3 m-0 text-start">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="d-flex align-items-start gap-2 skill-item-text">
                        <i className="bi bi-check-circle-fill check-icon mt-0.5"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center skills-arrow skills-arrow-right"
            onClick={() => scroll("right")}
            aria-label="Show more skills"
          >
            <i className="bi bi-chevron-right text-white"></i>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Skills;