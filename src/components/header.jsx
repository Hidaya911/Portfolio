 import "../styles/header.css";

function Header() {
  return (
    <>
      <nav className="body navbar navbar-expand-lg shadow-sm py-3 ">
        {/* Changed container to container-fluid and added px-4 for edge-to-edge spacing */}
        <div className="container-fluid px-4">

          {/* Combined Logo & Name */}
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-white navv m-0" href="#">
            <span className="logo-dots">
              <span className="dot dot-blue"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-magenta"></span>
            </span>
            <span>Hidaya</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu Wrapper */}
          <div className="collapse navbar-collapse" id="navbarContent">

            {/* Navigation Links perfectly centered */}
            <ul className="navbar-nav mx-auto gap-5">
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-secondary" href="#technologies">
                  Technologies
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-secondary" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-secondary" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-secondary" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Desktop Button pushed to the far right */}
            <button className=" btnn btn btn-info text-white fw-semibold px-4 py-2">
              Get in Touch
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end custom-offcanvas "
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-secondary"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <ul className="navbar-nav gap-3 align-items-start">
            <li><a className="nav-link text-secondary" href="#about">About</a></li>
            <li><a className="nav-link text-secondary" href="#technologies">Technologies</a></li>
            <li><a className="nav-link text-secondary" href="#skills">Skills</a></li>
            <li><a className="nav-link text-secondary" href="#projects">Projects</a></li>
            <li><a className="nav-link text-secondary" href="#contact">Contact</a></li>
          </ul>

          <div className="mt-4">
            <button className="btnn btn btn-info text-white fw-semibold w-100 py-2">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;