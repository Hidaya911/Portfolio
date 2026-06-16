import "../styles/contact.css";
function Contact() {
  const contactLinks = [
    {
      label: "GITHUB",
   
      url: "https://github.com/Hidaya911", 
      iconClass: "bi bi-github",
      boxClass: "box-blue"
    },
    {
      label: "EMAIL",
    
      url: "mailto:hidaya.abo.oyoune.assud@gmail.com", 
      iconClass: "bi bi-envelope-fill",
      boxClass: "box-purple"
    },
    {
      label: "LINKEDIN",
      
      url: "https://www.linkedin.com/in/hidaya-abou-al-oyoun-assud/", 
      iconClass: "bi bi-linkedin",
      boxClass: "box-yellow"
    }
  ];

  return (
    <section id="contact" className="contact-section d-flex align-items-center">
      <div className="container-fluid px-4 px-md-5">
        
      
        <div className="row mb-5">
          <div className="col-12 text-start">
            <div className="contact-tag d-flex align-items-center gap-2 mb-3">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold text-uppercase">Let's Connect</span>
            </div>
            <h2 className="contact-title fw-bold text-white m-0 display-5">
              Get in touch
            </h2>
          </div>
        </div>

        {/*  Container of grid */}
        <div className="row contact-grid-container rounded g-0 overflow-hidden mb-4">
          {contactLinks.map((link, index) => (
            <div key={index} className="col-12 col-lg-4 border-grid-segment">
              <a 
                href={link.url} 
                className="contact-card-link d-flex align-items-center gap-3 p-4 h-100 text-decoration-none"
                target="_blank" 
                rel="noreferrer"
              >
                {/* Icon Box */}
                <div className={`flex-shrink-0 contact-icon-box rounded d-flex align-items-center justify-content-center ${link.boxClass}`}>
                  <i className={`${link.iconClass} fs-5`}></i>
                </div>
                
                {/* data */}
                <div className="contact-meta">
                  <div className="label fw-bold small tracking-wide mb-0.5">
                    {link.label}
                  </div>
                 
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Availability Label */}
        <div className="row">
          <div className="col-12 text-start d-flex align-items-center gap-2 availability-wrapper">
            <span className="pulse-dot"></span>
            <p className="availability-text m-0 text-secondary">
              Available for new opportunities
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;