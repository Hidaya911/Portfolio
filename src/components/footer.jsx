import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-section py-4">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-3 text-center text-md-start">
          
          {/* Left Column: Brand Signature Logo */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center gap-2">
            <div className="footer-dots">
              <span className="dot dot-blue"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-magenta"></span>
            </div>
            <span className="footer-brand fw-bold text-white fs-5">Hidaya</span>
          </div>

          {/* copy rights at middle */}
          <div className="col-12 col-md-4 text-center">
            <span className="copyright-text text-secondary">
              &copy; 2026 Hidaya. All rights reserved.
            </span>
          </div>

          {/* links */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-4 footer-links">
            <a 
              href="https://github.com/Hidaya911" 
              className="text-decoration-none text-secondary footer-link-item"
              target="_blank" 
              rel="noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/hidaya-abou-al-oyoun-assud/" 
              className="text-decoration-none text-secondary footer-link-item"
              target="_blank" 
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hidaya.abo.oyoune.assud@gmail.com" 
              className="text-decoration-none text-secondary footer-link-item"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;