
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import portrait from "../eti.jpg";
import {
  CodeXml,
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Palette,
  Rocket,
  Menu,
  X,
  Smartphone,
  Database,
  Phone,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import "./App.css";

const githubUrl = "https://github.com/Etienne120/Etienne";
const emailAddress = "dusengimanaetienne9@gmail.com";
const phoneNumber = "+250798220175";
const whatsappUrl = "https://wa.me/250738304780";
const headlineWords = ["inspire.", "connect.", "matter."];
const purposeWords = ["To", "develop", "quality", "software", "is", "my", "purpose"];

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "A modern shopping experience with beautiful UI, secure checkout and responsive design.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "purple",
    link: "https://github.com/",
  },
  {
    number: "02",
    title: "Finance Dashboard",
    category: "Frontend Development",
    description:
      "A powerful analytics dashboard with interactive charts and real-time insights.",
    tech: ["React", "Tailwind", "Chart.js"],
    color: "blue",
    link: "https://github.com/",
  },
  {
    number: "03",
    title: "Creative Agency",
    category: "UI / UX Design",
    description:
      "A visually engaging agency website with fluid animations and elegant typography.",
    tech: ["React", "Framer Motion", "CSS"],
    color: "pink",
    link: "https://github.com/",
  },
];

const projectCategories = [
  { label: "All", value: "All" },
  { label: "Full Stack", value: "Full Stack Development" },
  { label: "Frontend", value: "Frontend Development" },
  { label: "UI / UX", value: "UI / UX Design" },
];

const skills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Figma",
  "REST APIs",
];

const services = [
  {
    icon: <Code2 size={28} />,
    number: "01",
    title: "Web Development",
    description:
      "Building modern, fast, responsive and user-friendly websites using modern technologies.",
  },
  {
    icon: <Palette size={28} />,
    number: "02",
    title: "UI / UX Design",
    description:
      "Creating beautiful interfaces and meaningful user experiences for digital products.",
  },
  {
    icon: <Smartphone size={28} />,
    number: "03",
    title: "Responsive Design",
    description:
      "Developing websites that work smoothly on computers, tablets and mobile devices.",
  },
  {
    icon: <Database size={28} />,
    number: "04",
    title: "Backend Development",
    description:
      "Creating databases, APIs and server-side applications to power modern websites.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [projectCategory, setProjectCategory] = useState("All");

  const closeMenu = () => setMenuOpen(false);
  const visibleProjects = projects.filter(
    (project) =>
      projectCategory === "All" || project.category === projectCategory
  );

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    const channel = event.nativeEvent.submitter.value;

    if (channel === "whatsapp") {
      window.open(`${whatsappUrl}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % headlineWords.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="portfolio">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          dev<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
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
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">HELLO, I'M DUSE NGIMANA ETIENNE</p>

            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span className="animated-word">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={headlineWords[wordIndex]}
                    className="gradient-text"
                    initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {headlineWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="hero-description">
              I'm a creative developer passionate about building
              beautiful, functional and meaningful digital experiences
              that solve real-world problems.
            </p>

            <motion.div
              className="purpose-code"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              aria-label="To develop quality software is my purpose"
            >
              <div className="purpose-code-header" aria-hidden="true">
                <span className="code-window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>purpose.js</span>
              </div>

              <p className="purpose-code-line" aria-hidden="true">
                <span className="code-keyword">const</span>
                <span className="code-variable">purpose</span>
                <span className="code-operator">=</span>
                <span className="code-string">&quot;</span>
                {purposeWords.map((word, index) => (
                  <motion.span
                    className={`purpose-word ${
                      index < purposeWords.length - 1 ? "purpose-word-spaced" : ""
                    }`}
                    key={word}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.12, duration: 0.3 }}
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="code-string">&quot;</span>
                <span className="code-punctuation">;</span>
                <motion.span
                  className="code-cursor"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                />
              </p>
            </motion.div>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Get In Touch
              </a>

              <a
                href="/duse-ngimana-etienne-profile.pdf"
                download
                className="secondary-button"
              >
                Download PDF Profile <Download size={17} />
              </a>
            </div>

            <div className="social-links">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <CodeXml />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle />
              </a>

              <a href={`mailto:${emailAddress}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-top">
                <span>CREATIVE DEVELOPER</span>
                <span className="profile-dot">✦</span>
              </div>

              <div className="profile-avatar">
                <img src={portrait} alt="DUSENGIMANA Etienne" />
              </div>

              <h2>DUSENGIMANA Etienne</h2>
              <p>Turning ideas into digital reality.</p>

              <div className="profile-bottom">
                <span>BASED IN RWANDA</span>
                <span>2026 ©</span>
              </div>
            </div>

            <div className="floating-tag tag-one">
              <Code2 size={17} /> Clean Code
            </div>

            <div className="floating-tag tag-two">
              <Rocket size={17} /> Creative Ideas
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>

          <div className="about-grid">
            <h2 className="section-heading">
              Passion meets
              <span className="gradient-text"> technology.</span>
            </h2>

            <div className="about-content">
              <p>
                I'm a passionate software developer who loves
                transforming complex problems into simple, beautiful
                and intuitive experiences.
              </p>

              <p>
                My approach combines creativity, clean code and modern
                technology to build products that people genuinely
                enjoy using.
              </p>

              <div className="education-note">
                <GraduationCap size={22} aria-hidden="true" />
                <div>
                  <span className="education-label">CURRENT STUDIES</span>
                  <h3>Level 5 Software Development</h3>
                  <p>Collegio Sant'Antonio Maria Zaccaria</p>
                </div>
              </div>

              <a href="#contact" className="text-link">
                More about me <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <h3>03+</h3>
              <p>Years Learning</p>
            </div>

            <div className="stat">
              <h3>15+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <p>Passion</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <p className="eyebrow">02 / MY EXPERTISE</p>

          <h2 className="section-heading">
            Technologies I <span className="gradient-text">love.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                whileHover={{ y: -7, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{skill}</h3>
                <ArrowUpRight size={18} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <p className="eyebrow">03 / WHAT I DO</p>

          <h2 className="section-heading">
            Turning ideas into{" "}
            <span className="gradient-text">reality.</span>
          </h2>

          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                className="service-card"
                key={service.number}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-top">
                  <div className="service-icon">{service.icon}</div>
                  <span>{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ArrowUpRight className="service-arrow" size={22} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <p className="eyebrow">04 / SELECTED WORK</p>

          <div className="projects-heading">
            <h2 className="section-heading">
              Things I've <span className="gradient-text">built.</span>
            </h2>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View GitHub <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="project-filters" role="group" aria-label="Filter projects">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                aria-pressed={projectCategory === category.value}
                className={projectCategory === category.value ? "active" : ""}
                onClick={() => setProjectCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <motion.article
                className={`project-card ${project.color}`}
                key={project.number}
                layout
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-preview">
                  <div className="preview-window">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-content">
                      <Code2 size={55} />
                      <span>{project.title}</span>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <div className="contact-container">
            <div className="contact-content">
              <h2 className="section-heading">
                Have an idea?
                <br />
                Let's build something{" "}
                <span className="gradient-text">great.</span>
              </h2>

              <p>
                I'm always open to discussing new projects,
                creative ideas and opportunities to be part of
                your vision.
              </p>

              <form className="message-form" onSubmit={handleMessageSubmit}>
                <label>
                  Your name
                  <input name="name" type="text" autoComplete="name" required />
                </label>

                <label>
                  Your email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea name="message" rows="4" required />
                </label>

                <div className="message-form-actions">
                  <button className="primary-button" type="submit" name="channel" value="email">
                    Send Email <Mail size={17} />
                  </button>
                  <button className="secondary-button" type="submit" name="channel" value="whatsapp">
                    Send WhatsApp <MessageCircle size={17} />
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-details">
              <a href={`mailto:${emailAddress}`}>
                <Mail size={21} />
                <span>{emailAddress}</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href={`tel:${phoneNumber}`}
              >
                <Phone size={21} />
                <span>079 822 0175</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={21} />
                <span>WhatsApp: 073 830 4780</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={21} />
                <span>GitHub: Etienne120/Etienne</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          dev<span>.</span>
        </a>

        <p>Designed & Built with passion in Rwanda.</p>

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
