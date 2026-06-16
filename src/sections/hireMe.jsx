
import "../styles/hireMe.css";

function HireMe() {
  const hiringPoints = [
    {
      title: "Strong learning mindset",
      description: "I treat every challenge as a growth opportunity. I actively seek feedback and turn criticism into better, cleaner code.",
      boxClass: "box-blue"
    },
    {
      title: "Real project experience",
      description: "My projects aren't just tutorials they reflect real architectural decisions, debugging challenges, and shipping to production.",
      boxClass: "box-purple"
    },
    {
      title: "Clean, maintainable code",
      description: "I write code for humans first clear naming, consistent component patterns, and separation of concerns are non-negotiable for me.",
      boxClass: "box-yellow"
    },
    {
      title: "Clear communicator",
      description: "I ask the right questions, document my work, and ensure nobody is left guessing about what I'm building or why.",
      boxClass: "box-blue"
    },
    {
      title: "Reliable and consistent",
      description: "I follow through on commitments, flag blockers early, and show up prepared. Reliability is the foundation of good teamwork.",
      boxClass: "box-purple"
    }
  ];

  return (
    <section id="hire-me" className="hire-me-section d-flex align-items-center">
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
              <span className="tag-text fw-bold">Value Proposition</span>
            </div>
            <h2 className="projects-title fw-bold text-white m-0 mx-4">
              Why companies should hire me
            </h2>
          </div>
        </div>

    
        <div className="row g-4 pt-3 mx-4">
          {hiringPoints.map((point, index) => (
            <div key={index} className="col-12">
              <div className="value-row d-flex align-items-start gap-4">
                
                {/* square of icons*/}
              <div className={`flex-shrink-0 custom-icon-box rounded d-flex align-items-center justify-content-center ${point.boxClass}`}>
                  <i className="bi bi-check-lg fs-5 check-icon text-white"></i>
                </div>
                
                {/* Content Block */}
                <div className="value-content">
                  <h3 className="value-item-title fw-bold text-white mb-1">
                    {point.title}
                  </h3>
                  <p className="value-item-desc text-secondary m-0">
                    {point.description}
                  </p>
                </div>
                 </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HireMe;