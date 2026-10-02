import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          
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
            <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 hero-actions">
              <a href="#projects" className="btn btn-view-projects fw-semibold px-4 py-3">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-contact-me fw-semibold px-4 py-3 text-decoration-none">
                Contact Me
              </a>
            </div>

          </div>

          {/* Right Column: Glowing Code Terminal Component */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <div 
              className="hero-terminal w-100 rounded-3 overflow-hidden bg-dark position-relative" 
              style={{ 
                maxWidth: '480px',
                border: '1px solid rgba(13, 202, 240, 0.4)',
                boxShadow: '0 0 25px rgba(13, 202, 240, 0.15), inset 0 0 15px rgba(13, 202, 240, 0.05)'
              }}
            >
              
              {/* Terminal Header */}
              <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-black bg-opacity-50 border-bottom border-secondary border-opacity-25">
                <div className="d-flex gap-2">
                  <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#0dcaf0', boxShadow: '0 0 8px #0dcaf0' }}></div>
                  <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }}></div>
                  <div className="rounded-circle" style={{ width: '10px', height: '10px', backgroundColor: '#ec4899', boxShadow: '0 0 8px #ec4899' }}></div>
                </div>
                <span className="text-secondary font-monospace" style={{ fontSize: '0.8rem' }}>developer.tsx</span>
                <div style={{ width: '32px' }}></div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-monospace text-start hero-terminal-body" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                <p className="text-info mb-1">
                  <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#61afef' }}>HidayaProfile</span> <span className="text-white">=</span> <span style={{ color: '#e5c07b' }}>()</span> <span className="text-white">=&gt;</span> <span className="text-white">&#123;</span>
                </p>
                <p className="mb-1 ps-3 text-secondary">// Full-Stack & Architecture</p>
                <p className="mb-1 ps-3 text-white">
                  <span style={{ color: '#e06c75' }}>role</span>: <span style={{ color: '#98c379' }}>'Full Stack Developer'</span>,
                </p>
                <p className="mb-1 ps-3 text-white">
                  <span style={{ color: '#e06c75' }}>stack</span>: <span className="text-white">[</span><span style={{ color: '#98c379' }}>'React'</span>, <span style={{ color: '#98c379' }}>'Node.js'</span>, <span style={{ color: '#98c379' }}>'TypeScript'</span><span className="text-white">]</span>,
                </p>
                <p className="mb-1 ps-3 text-white">
                  <span style={{ color: '#e06c75' }}>focus</span>: <span style={{ color: '#98c379' }}>'Scalable Systems & UI'</span>
                </p>
                <p className="text-white mb-0">&#125;;</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
