import "../styles/hero.css";
import Img from "../images/techn.png";
function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5 mx-4">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Text Content */}
          <div className="col-12 col-lg-7 text-start">
            
            {/* Status Badge */}
            <div className="status-badge d-flex align-items-center gap-2 mb-4">
              <span className="status-dot"></span>
              <span className="status-text text-secondary">Open to opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title fw-bold text-white mb-3">
              Hi, I'm <br />
              <span className="hero-name">Hidaya</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="hero-subtitle text-white mb-4">
              Full Stack Developer <span className="text-secondary">— turning concepts into complete experiences</span>
            </h2>

            {/* Description Paragraph */}
            <p className="hero-description text-secondary mb-5">
              I craft seamless web applications from pixel-perfect interfaces to robust back-end systems. 
              I ensure every feature works beautifully from the first click to the last query. 
            </p>

            {/* Call to Action Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-view-projects fw-semibold px-4 py-3">
                View Projects →
              </button>
              <button className="btn btn-contact-me fw-semibold px-4 py-3">
                Contact Me
              </button>
            </div>

          </div>

          {/* Right Column: Image Placeholder */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-image-wrapper">
              {/* Replace 'path-to-your-image.png' with your actual image file path */}
              <img 
                src={Img}
                alt="Full Stack Developer" 
                className="img-fluid hero-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;