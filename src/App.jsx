
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
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
const focusPhrases = [
  "responsive interfaces",
  "useful web applications",
  "maintainable code",
];
const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "A full-stack e-commerce project built with React, Node.js and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "purple",
    link: githubUrl,
  },
  {
    number: "02",
    title: "Finance Dashboard",
    category: "Frontend Development",
    description:
      "A finance dashboard project built with React, Tailwind CSS and Chart.js.",
    tech: ["React", "Tailwind", "Chart.js"],
    color: "blue",
    link: githubUrl,
  },
  {
    number: "03",
    title: "Creative Agency",
    category: "UI / UX Design",
    description:
      "A creative agency website built with React, Framer Motion and CSS.",
    tech: ["React", "Framer Motion", "CSS"],
    color: "pink",
    link: githubUrl,
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
  const [projectCategory, setProjectCategory] = useState("All");
  const [messageStatus, setMessageStatus] = useState("");
  const [focusIndex, setFocusIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  const closeMenu = () => setMenuOpen(false);
  const visibleProjects = projects.filter(
    (project) =>
      projectCategory === "All" || project.category === projectCategory
  );

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setFocusIndex((index) => (index + 1) % focusPhrases.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    const channel = event.nativeEvent.submitter.value;

    if (channel === "whatsapp") {
      setMessageStatus(
        "WhatsApp is opening with your message. Review and send it there."
      );
      window.open(`${whatsappUrl}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      return;
    }

    setMessageStatus(
      `Your email app should open with a draft addressed to ${emailAddress}. Review and send it there; this website cannot confirm delivery.`
    );
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="portfolio">
      {!shouldReduceMotion && (
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollProgress }}
          aria-hidden="true"
        />
      )}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          ETIENNE<span>.</span>
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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.75 }}
          >
            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">SOFTWARE DEVELOPER · RWANDA</p>

            <h1>
              Thoughtful software.
              <br />
              <span className="gradient-text">Real-world impact.</span>
            </h1>

            <div
              className="hero-terminal"
              role="group"
              aria-label="Areas of focus: responsive interfaces, useful web applications, and maintainable code"
            >
              <div className="terminal-header" aria-hidden="true">
                <span className="terminal-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>focus.ts</span>
                <span className="terminal-running">
                  <i></i> LIVE
                </span>
              </div>
              <p className="terminal-line" aria-hidden="true">
                <span className="terminal-keyword">const</span>
                <span className="terminal-variable">focus</span>
                <span className="terminal-operator">=</span>
                <span className="terminal-quote">&quot;</span>
                <span className="terminal-word-window">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      className="terminal-word"
                      key={focusPhrases[focusIndex]}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 7 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {focusPhrases[focusIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="terminal-quote">&quot;</span>
                <span className="terminal-operator">;</span>
                {!shouldReduceMotion && (
                  <span className="terminal-cursor" aria-hidden="true"></span>
                )}
              </p>
            </div>

            <p className="hero-description">
              I build clear, responsive web experiences with modern
              frontend and backend technologies — turning practical
              ideas into useful digital products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View selected work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Get in touch
              </a>

              <a
                href="/duse-ngimana-etienne-profile.pdf"
                download
                className="secondary-button"
              >
                Download profile <Download size={17} />
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
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.9, delay: 0.12 }}
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-top">
                <span>SOFTWARE DEVELOPER</span>
                <span className="profile-dot">✦</span>
              </div>

              <div className="profile-avatar">
                <img src={portrait} alt="DUSENGIMANA Etienne" />
              </div>

              <h2>Duse Ngimana Etienne</h2>
              <p>Software Development · Kigali, Rwanda</p>

              <div className="profile-bottom">
                <span>BASED IN RWANDA</span>
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            <div className="floating-tag tag-one">
              <Code2 size={17} /> React &amp; JavaScript
            </div>

            <div className="floating-tag tag-two">
              <Rocket size={17} /> Full-stack projects
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section className="section about" id="about" {...revealProps}>
          <p className="eyebrow">01 / ABOUT ME</p>

          <div className="about-grid">
            <h2 className="section-heading">
              Practical thinking.
              <span className="gradient-text"> Thoughtful execution.</span>
            </h2>

            <div className="about-content">
              <p>
                I’m a software developer focused on building web
                applications that are clear, useful and comfortable to
                use across devices.
              </p>

              <p>
                I work across frontend development, interface design and
                backend fundamentals, with a focus on maintainable code
                and considered details.
              </p>

              <div className="education-note">
                <GraduationCap size={22} aria-hidden="true" />
                <div>
                  <span className="education-label">EDUCATION</span>
                  <h3>Level 5 Software Development</h3>
                  <p>Collegio Sant'Antonio Maria Zaccaria</p>
                </div>
              </div>

              <a href="#contact" className="text-link">
                Start a conversation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

        </motion.section>

        {/* SKILLS */}
        <motion.section className="section skills" id="skills" {...revealProps}>
          <p className="eyebrow">02 / MY EXPERTISE</p>

          <h2 className="section-heading">
            A practical, modern <span className="gradient-text">toolkit.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.035 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{skill}</h3>
                <ArrowUpRight size={18} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SERVICES */}
        <motion.section className="section services" id="services" {...revealProps}>
          <p className="eyebrow">03 / WHAT I DO</p>

          <h2 className="section-heading">
            How I can <span className="gradient-text">contribute.</span>
          </h2>

          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                className="service-card"
                key={service.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : Number(service.number) * 0.06,
                }}
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
        </motion.section>

        {/* PROJECTS */}
        <motion.section className="section projects" id="projects" {...revealProps}>
          <p className="eyebrow">04 / SELECTED WORK</p>

          <div className="projects-heading">
            <h2 className="section-heading">
              Selected <span className="gradient-text">projects.</span>
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
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
              <motion.article
                className={`project-card ${project.color}`}
                key={project.number}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                }}
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
                    View GitHub profile <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section className="section contact" id="contact" {...revealProps}>
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
                For project enquiries, collaboration or opportunities,
                send a short note and I’ll get back to you.
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
                {messageStatus && (
                  <p className="form-feedback" role="status" aria-live="polite">
                    {messageStatus}
                  </p>
                )}
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
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          ETIENNE<span>.</span>
        </a>

        <p>Software developer · Rwanda</p>

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
