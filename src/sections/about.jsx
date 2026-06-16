 import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Text Journey Content */}
          <div className="col-12 col-lg-7 text-start">
            
            {/* Section Tag */}
            <div className="about-tag d-flex align-items-center gap-2 mb-3 mx-4">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">ABOUT ME</span>
            </div>

            {/* Section Title */}
            <h2 className="about-title fw-bold text-white mb-4 mx-4 ">
              Background
            </h2>

            {/* Paragraphs updated for Full Stack */}
            <p className="about-description text-secondary mb-3 mx-4">
              I'm a full stack developer who fell in love with the web through curiosity, starting with 
              "how does this interface handle user data?" and ending up deep in React component life cycles, 
              RESTful APIs, and relational database systems.
            </p>

            <p className="about-description text-secondary mb-3 mx-4">
              My journey has been hands-on from the start. Every application I engineer, I push myself 
              to architectural milestones I haven't tackled before whether that's optimizing backend 
              query performance, implementing secure user multi-step verification flows, or designing cleaner, scalable system structures.
            </p>

            <p className="about-description text-secondary mx-4">
              I build web solutions that bridge high-fidelity frontend design with stable backend architecture
              caring equally about how an interface responds to a click and how beautifully a server queries 
              its database logic.
            </p>

          </div>

          {/* Right Column: Two Custom Metrics Cards */}
          <div className=" new col-12 col-lg-5 ">
            <div className="row g-4 justify-content-center">
              
              {/* Projects Card */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="stats-card text-center p-5">
                  <h3 className="stat-number fw-bold mb-2">
                    10<span className="stat-highlight">+</span>
                  </h3>
                  <p className="stat-label text-secondary m-0">Projects built</p>
                </div>
              </div>

              {/* Technologies Card */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="stats-card text-center p-5">
                  <h3 className="stat-number fw-bold mb-2">
                    8<span className="stat-highlight">+</span>
                  </h3>
                  <p className="stat-label text-secondary m-0">Technologies</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;