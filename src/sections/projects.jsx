import "../styles/projects.css";

function Projects() {
  //define array of objects
  //kl object bi3arref 1 project
  //github links hyi nested array containing features used
  const projectsData = [
    {
      title: "BlackEyes",
      featured: true,
      description: "A full-stack management system built to digitalize the daily operations of a printing press, from customer orders to production and payments.",

      tags: ["React", "FastAPI", "PostgreSQL", "Supabase", "Tesseract OCR", "AI", "Bootstrap"],
      githubLink: "https://github.com/Hidaya911/BlackEyes/tree/main",
      demoLink: "https://blackeyes-print.vercel.app/"
    },
    {
      title: "Talabaty",
      description:<> A web-based marketplace designed to digitally connect customers  <span className="gradient-highlight">with local businesses across the Bekaa Valley, Lebanon using MERN stack technologies.</span></>,
      tags: ["React", "Mongo","Express.js","Node.js","Bootstrap"],
      githubLink: "https://github.com/Hidaya911/Talabaty/",
      demoLink: "https://talabatyv1.netlify.app/"
    },

    {
      title: "Velora Hotel",
      description: <>A full-stack hotel reservation and management platform with Next.js<span className="gradient-highlight">to replace manual, error-prone booking at Velora Hotel.</span></>,
      tags: ["Next.js", "Mongo", "Bootstrap","Typescript"],
      githubLink: "https://github.com/Hidaya911/Velora-Hotel",
      demoLink: "https://velora-hotel-flax.vercel.app/"
    },
    {
      title: "Edu Finance",
      description: <>A full-stack School Financial Management System designed to centralize and <span className="gradient-highlight">simplify the financial operations of a Lebanese school.</span></>,
      tags: ["Django", "Mongo", "Bootstrap"],
      githubLink: "https://github.com/Hidaya911/EduFinance",
      demoLink: "https://edu-finance-ocrzz5xml-teamss1.vercel.app/"
    },
    {
      title: "Blood Donation AI-Message-Sentiment-Analysis",
      description: <>A full-stack platform connecting blood donors, patients, and donation centers. <span className="gradient-highlight">Groq-powered AI automatically classifies and color-codes contact messages as urgent, inquiry, feedback, or spam.</span> Admin dashboard statistics and category/date filters help prioritize critical blood requests.</>,
      tags: ["Vue", "Fastify", "MongoDB", "TypeScript", "Groq", "AI"],
      githubLink: "https://github.com/Hidaya911/Blood-Donation-AI-Message-Sentiment-Analysis-"
    },
    {
      title: "User Management Service",
      description: <>A production-ready asynchronous REST API for user authentication, authorization<span className="gradient-highlight"> and profile management built with FastAPI, MongoDB (Motor), and Pydantic V2.</span></>,
      tags: ["FastApi","Mongo"],
      githubLink: "https://github.com/Hidaya911/User-Management-FASTAPI"
    }

  ];

  return (
    <section id="projects" className="projects-section d-flex align-items-center">
      <div className="container-fluid px-3 px-sm-4 px-md-5">


        <div className="row mb-5">
          <div className="col-12 text-start">
            <div className="projects-tag d-flex align-items-center gap-2 mb-3 mx-0 mx-lg-4">
              <div className="tag-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-magenta"></span>
              </div>
              <span className="line-separator"></span>
              <span className="tag-text fw-bold">WORK</span>
            </div>
            <h2 className="projects-title fw-bold text-white m-0 mx-0 mx-lg-4">
              Featured projects
            </h2>
          </div>
        </div>

        {/*  Grid Layout ll cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 g-md-4">

          {projectsData.map((project) => (
            <div key={project.title} className={`col ${project.featured ? "featured-project-column" : ""}`}>
              <article className={`project-card d-flex flex-column h-100 p-4 ${project.featured ? "featured-project" : ""}`}>

                {/* first line of the card yalli feha icon w GH link */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  {/* cutomizing the icon itself  */}
                  <div className="project-icon-box d-flex align-items-center justify-content-center">
                    <i className="bi bi-folder-symlink fs-4"></i>
                  </div>

                  {/* links of the github link nd styling it */}
                  <div className="d-flex flex-wrap align-items-center gap-2">
                  {project.featured && <span className="featured-label">Featured project</span>}
                  <a
                    href={project.githubLink}
                    className="gh-link-btn px-2 py-1 fw-bold text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <i className="bi bi-github" aria-hidden="true"></i> GitHub
                  </a>
                  </div>
                </div>

                {/* data for each project*/}
                <h3 className="project-card-title fw-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="project-card-description text-secondary flex-grow-1 mb-4">
                  {project.description}
                </p>
                {project.features && <ul className="project-features">
                  {project.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>}

                {/* Badges for features used in each project */}
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-badge px-3 py-1 fw-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-demo-link">
                  Explore live demo <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                </a>}

              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
