import "../styles/skills.css";

function Skills() {
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
      title: "Team Collaboration",
      iconClass: "bi bi-people",
      accentClass: "cyan-accent",
      items: ["Teamwork", "Effective Communication", "Git & Version Control", "Agile Mindset", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="skills-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5">
        
        
        <div className="row mb-5">
          <div className="col-12 text-start mx-4">
            <div className="skills-tag d-flex align-items-center gap-2 mb-3 mx-2">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">CAPABILITIES</span>
            </div>
            <h2 className="skills-main-title fw-bold text-white m-0 mx-2 ">
              Skills & strengths
            </h2>
          </div>
        </div>

        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 mx-1">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="col">
              <div className={`skills-card h-100 p-4 ${category.accentClass}`}>
                
                {/* Glowing Top Icon Wrapper */}
                <div className="card-icon-box mx-auto mb-4 d-flex align-items-center justify-content-center ">
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
    </section>
  );
}

export default Skills;