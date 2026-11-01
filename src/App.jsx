
import { useState } from "react";
import "./App.css";

const skills = ["C", "Python", "HTML", "CSS", "JavaScript", "React"];

const projects = [
  {
    number: "01",
    name: "LoopWise AI",
    category: "AI · Sustainability",
    description:
      "An AI-powered sustainability project designed to encourage smarter, more sustainable choices.",
    tags: ["React", "JavaScript", "AI"],
    link: "https://loop-wise-ai.vercel.app/",
    status: "Completed",
  },
  {
    number: "02",
    name: "TaskFlow",
    category: "Web Development",
    description:
      "A productivity app to organize tasks, track progress, and build better daily habits.",
    tags: ["React", "CSS", "Local Storage"],
    link: "PASTE_TASKFLOW_VERCEL_URL_HERE",
    status: "Completed",
  },
  {
    number: "03",
    name: "SkyCast",
    category: "API Integration",
    description:
      "A weather application that presents current conditions and forecasts in a clean interface.",
    tags: ["React", "CSS", "Weather API"],
    link: "",
    status: "Coming Soon",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          um<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
          <a href="#education">Education</a>
          <a
            href="https://github.com/umaimatahereem"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            GitHub ↗
          </a>
          
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              CSE STUDENT · ASPIRING DEVELOPER
            </div>
            <div className="hero-buttons">
  <a
    href="/resume.pdf"
    download="Umaima_Tahereem_Resume.pdf"
    className="resume-button"
  >
    Download Resume ↓
  </a>
</div>


            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Umaima
              <br />
              <span className="gradient-text">Tahereem.</span>
            </h1>

            <p className="hero-description">
              I turn ideas into <strong>thoughtful digital experiences</strong>
              {" "}through code, creativity, and a constant curiosity to learn.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="hero-meta">
              <span>📍 Karnataka, India</span>
              <span className="meta-divider" />
              <span>Building one idea at a time</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="code-card glass-card">
              <div className="code-topbar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="code-filename">developer.js</span>
                <span className="code-menu">•••</span>
              </div>

              <div className="code-content">
                <p><span className="line-number">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
                <p><span className="line-number">02</span> &nbsp; name: <span className="code-green">"Umaima"</span>,</p>
                <p><span className="line-number">03</span> &nbsp; role: <span className="code-green">"CSE Student"</span>,</p>
                <p><span className="line-number">04</span> &nbsp; loves: [</p>
                <p><span className="line-number">05</span> &nbsp;&nbsp; <span className="code-yellow">"Building"</span>,</p>
                <p><span className="line-number">06</span> &nbsp;&nbsp; <span className="code-yellow">"Learning"</span>,</p>
                <p><span className="line-number">07</span> &nbsp;&nbsp; <span className="code-yellow">"Creating"</span></p>
                <p><span className="line-number">08</span> &nbsp; ],</p>
                <p><span className="line-number">09</span> &nbsp; openToLearn: <span className="code-purple">true</span></p>
                <p><span className="line-number">10</span> {"}"};</p>
                <p className="code-comment">// always improving ✨</p>
              </div>

              <div className="code-footer">
                <span><span className="status-dot" /> Ready to create</span>
                <span>UTF-8 · JavaScript</span>
              </div>
            </div>

            <div className="float-card float-card-top glass-card">
              <span className="float-icon">✳</span>
              <div>
                <strong>Curious mind</strong>
                <small>Always learning</small>
              </div>
            </div>

            <div className="float-card float-card-bottom glass-card">
              <span className="float-icon purple-icon">⌘</span>
              <div>
                <strong>Code with purpose</strong>
                <small>Ideas into reality</small>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              A little about <span className="gradient-text">my journey.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy glass-card">
              <span className="card-symbol">✦</span>
              <h3>Student by choice. Creator by curiosity.</h3>
              <p>
                I'm a Computer Science Engineering student interested in
                software development, AI, and creating useful digital
                experiences. I enjoy learning by building real projects and
                turning new concepts into working applications.
              </p>
              <p>
                My goal is to keep growing as a developer, contribute to
                meaningful projects, and write better code with every build.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card glass-card">
                <span className="stat-number">01</span>
                <span className="stat-label">Curiosity first</span>
                <p>Explore ideas and ask better questions.</p>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">02</span>
                <span className="stat-label">Learn by building</span>
                <p>Turn concepts into practical projects.</p>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">03</span>
                <span className="stat-label">Always improving</span>
                <p>Learn from feedback and keep iterating.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>
              Technologies I'm <span className="gradient-text">exploring.</span>
            </h2>
            <p className="section-description">
              My current toolkit for learning, experimenting, and building.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card glass-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>
        <section id="education" className="section">
  <div className="section-heading">
    <p className="section-label">MY BACKGROUND</p>
    <h2>Education</h2>
    <p>My academic journey so far.</p>
  </div>

  <div className="education-grid">
    <article className="education-card">
      <span className="education-year">2025–2029</span>
      <h3>B.Tech — Computer Science and Engineering</h3>
      <p>Dayananda Sagar University, Bengaluru</p>
      <span className="education-badge">Expected graduation: 2029</span>
    </article>

    <article className="education-card">
      <span className="education-year">Class 12</span>
      <h3>Shri Vidyaniketan PU College</h3>
      <p>Gangavathi, Koppal, Karnataka</p>
      <span className="education-badge">95%</span>
    </article>

    <article className="education-card">
      <span className="education-year">Class 10</span>
      <h3>Saint Paul's English School</h3>
      <p>Gangavathi, Koppal, Karnataka</p>
      <span className="education-badge">86.4%</span>
    </article>
  </div>
</section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>
              Ideas becoming <span className="gradient-text">reality.</span>
            </h2>
            <p className="section-description">
              A growing collection of things I'm creating and learning from.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card glass-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-art" aria-hidden="true">
                  <span>{project.number}</span>
                  <div className="art-orbit orbit-one" />
                  <div className="art-orbit orbit-two" />
                  <div className="art-core">✳</div>
                </div>
                <div className="project-visual">
  <div className={`project-visual-icon project-${project.number}`}>
    {project.number === "01" && "🌱"}
    {project.number === "02" && "✓"}
    {project.number === "03" && "☁"}
  </div>

  <span className="project-visual-label">
    {project.category}
  </span>

  <span className="project-visual-number">
    {project.number}
  </span>
</div>

               <h3>{project.name}</h3>

<span
  className={`project-status ${
    project.status === "Completed" ? "completed" : "upcoming"
  }`}
>
  {project.status}
</span>

<p>{project.category}</p>
<p className="project-description">
  {project.description}
</p>



                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Demo ↗<span>↗</span>
                  </a>
                ) : (
                  <span className="project-link upcoming">
                    Coming Soon <span>✳</span>
                  </span>
                )}
              </article>
            ))}
          </div>

          <a
            href="https://github.com/umaimatahereem"
            className="button button-secondary all-projects"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub <span>↗</span>
          </a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card glass-card">
            <p className="eyebrow">04 / WHAT'S NEXT?</p>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build something.</span>
            </h2>
            <p>
              Interested in collaborating, discussing projects, or sharing
              ideas? I'd love to connect.
            </p>

            <a
              className="button button-primary"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=tahereemumaima@gmail.com"
target="_blank"
rel="noopener noreferrer"
            >
              Say hello <span>↗</span>
            </a>

            <div className="social-links">
              <a
                href="https://github.com/umaimatahereem"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
                </a>
             <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=tahereemumaima@gmail.com"
  target="_blank"
  rel="noopener noreferrer">

  Email ↗</a>

              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">um<span>.</span></a>
        <p>Designed with curiosity. Built with React.</p>
        <span>© {new Date().getFullYear()} Umaima Tahereem</span>
      </footer>
    </div>
  );
}

export default App;
