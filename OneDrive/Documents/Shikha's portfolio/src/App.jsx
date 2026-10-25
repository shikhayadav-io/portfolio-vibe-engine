import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  BrainCircuit,
  Check,
  Code2,
  CodeXml,
  Cpu,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    name: 'Sketch2UI',
    repo: 'sketch2ui',
    description:
      'Turn a hand-drawn wireframe into real interface code with OpenCV contour extraction and Vision AI.',
    language: 'Python',
    category: 'Computer vision · Generative AI',
    icon: MousePointer2,
    featured: true,
    href: 'https://github.com/shikhayadav-io/sketch2ui',
  },
  {
    number: '02',
    name: 'ViCodathon Talent Platform',
    repo: 'vicodathon_the_aarambhies',
    description:
      'An AI-powered mock interview and automated candidate assessment platform built to make hiring smarter.',
    language: 'TypeScript',
    category: 'AI · Talent technology',
    icon: BrainCircuit,
    href: 'https://github.com/shikhayadav-io/vicodathon_the_aarambhies',
  },
  {
    number: '03',
    name: 'Student Attendance & Performance',
    repo: 'student_attendance_performance_system',
    description:
      'An academic analytics system for attendance tracking, student insights, and performance evaluation.',
    language: 'Python',
    category: 'Analytics · Education',
    icon: Layers3,
    href: 'https://github.com/shikhayadav-io/student_attendance_performance_system',
  },
  {
    number: '04',
    name: 'PraanVayu Analytics',
    repo: 'Geospatial intelligence for greener cities',
    description:
      'An AI-driven micro-climate and afforestation engine powered by geospatial analysis and NDVI datasets.',
    language: 'AI + geospatial',
    category: 'Climate tech · Computer vision',
    icon: Globe2,
    href: 'https://github.com/nainamaurya460-star/Praaanvayu-Analytics',
  },
  {
    number: '05',
    name: 'Interactive Apps',
    repo: 'Small builds, big personality',
    description:
      'A playful collection featuring snake, water, gun and a birthday experience made for Naina.',
    language: 'JavaScript',
    category: 'Web · Creative coding',
    icon: Sparkles,
    links: [
      {
        label: 'snake_water_gun_game',
        href: 'https://github.com/shikhayadav-io/snake_water_gun_game',
      },
      {
        label: 'naina_19th_birthday',
        href: 'https://github.com/shikhayadav-io/naina_19th_birthday',
      },
    ],
  },
]

const skillGroups = [
  {
    title: 'Applied AI',
    icon: BrainCircuit,
    skills: ['OpenCV', 'Computer Vision', 'GenAI'],
  },
  {
    title: 'Languages',
    icon: Braces,
    skills: ['Python', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Full-stack & UI',
    icon: Layers3,
    skills: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Tooling',
    icon: Terminal,
    skills: ['Git', 'Linux', 'VS Code'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileImageFailed, setProfileImageFailed] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark navbar-wordmark" href="#home" onClick={closeMenu} aria-label="Shikha Yadav, home">
          <span className="wordmark-mark">SY</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="opportunity-status">
              <span className="opportunity-dot" aria-hidden="true" />
              <span>Available for Opportunities &amp; AI Projects</span>
            </div>
            <h1 className="hero-name">SHIKHA YADAV</h1>
            <div className="hero-subtitle">
              <p className="hero-role">
                Applied AI &amp; Software Engineer <span>/</span> Computer Vision &amp; GenAI
              </p>
              <div className="availability">
                <span className="availability-dot" />
                <span>Building at the intersection of AI &amp; software</span>
              </div>
            </div>
            <p className="hero-slogan">
              Ideas into
              <br />
              <span className="hero-highlight">intelligence.</span>
            </p>
            <p className="hero-description">
              Bridging intelligent computer vision models and generative workflows with
              production-ready full-stack architectures.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore Projects <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/shikhayadav-io"
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={17} /> GitHub <span className="button-handle">(shikhayadav-io)</span>
                <ArrowUpRight className="button-external" size={15} />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration of connected AI systems">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-glow" />
            <div className="art-center">
              <span className="art-profile-fallback" aria-hidden="true">SY</span>
              {!profileImageFailed && (
                <img
                  className="art-profile-image"
                  src="/profile.jpg"
                  alt="Shikha Yadav"
                  onError={() => setProfileImageFailed(true)}
                />
              )}
              <span className="art-brain-badge" aria-hidden="true">
                <BrainCircuit size={22} strokeWidth={1.5} />
              </span>
            </div>
            <div className="satellite-track track-code" aria-hidden="true">
              <span className="art-node node-code"><Code2 size={19} /></span>
            </div>
            <div className="satellite-track track-cpu" aria-hidden="true">
              <span className="art-node node-cpu"><Cpu size={19} /></span>
            </div>
            <div className="satellite-track track-spark" aria-hidden="true">
              <span className="art-node node-spark"><Sparkles size={18} /></span>
            </div>
            <span className="art-label label-top">perception</span>
            <span className="art-label label-bottom">possibility</span>
            <div className="art-coordinate">AI / 01</div>
          </div>

          <a className="scroll-hint" href="#work">
            <span className="scroll-line" /> Scroll to explore <ArrowDown size={14} />
          </a>
          <span className="hero-index">01 — 04</span>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>01</span> / SELECTED WORK</p>
              <h2>Things I&apos;ve <span>made.</span></h2>
            </div>
            <p className="section-intro">
              A selection of experiments and products turning thoughtful engineering into
              useful experiences.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon
              return (
                <article
                  className={`project-card${project.featured ? ' project-featured' : ''}`}
                  key={project.number}
                >
                  <div className="project-card-top">
                    <span className="project-number">{project.number} / 05</span>
                    <ProjectIcon className="project-icon" size={22} strokeWidth={1.5} />
                  </div>
                  <div className="project-content">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-footer">
                    <span className="language-tag"><span />{project.language}</span>
                    {project.links ? (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            key={link.label}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${link.label} on GitHub`}
                            title={link.label}
                          >
                            <CodeXml size={15} />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        className="project-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        title={project.repo}
                      >
                        <CodeXml size={16} />
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <a
            className="all-projects-link"
            href="https://github.com/shikhayadav-io?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories <ArrowRight size={16} />
          </a>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-aside">
            <p className="eyebrow"><span>02</span> / A LITTLE ABOUT ME</p>
            <div className="about-mark"><Sparkles size={30} strokeWidth={1.25} /></div>
          </div>
          <div className="about-copy">
            <h2>Curious by nature.<br /><span>Engineer by craft.</span></h2>
            <p>
              I build at the meeting point of intelligent systems and human-centered software.
              From visual AI and generative workflows to polished web interfaces, I care about
              making ambitious ideas work in the real world.
            </p>
            <p className="about-location"><MapPin size={15} /> India <span>·</span> Open to good ideas</p>
            <a className="text-link" href="#contact">More about working together <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading skills-heading">
            <div>
              <p className="eyebrow"><span>03</span> / THE TOOLKIT</p>
              <h2>Built with <span>curiosity.</span></h2>
            </div>
            <p className="section-intro">
              A growing toolkit for turning complex challenges into clear, capable products.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon
              return (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-title">
                    <GroupIcon size={17} strokeWidth={1.6} />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-badges">
                    {group.skills.map((skill) => (
                      <span className="skill-badge" key={skill}>
                        <Check size={12} /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="github-section section-wrap">
          <div className="github-card">
            <div className="github-card-icon"><CodeXml size={26} strokeWidth={1.5} /></div>
            <div className="github-card-copy">
              <p className="eyebrow">THE CODE, IN THE OPEN</p>
              <h2>See what I&apos;m building.</h2>
              <p>Experiments, projects, and the occasional late-night commit.</p>
            </div>
            <a
              className="button button-github"
              href="https://github.com/shikhayadav-io"
              target="_blank"
              rel="noreferrer"
            >
              github.com/shikhayadav-io <ArrowUpRight size={16} />
            </a>
            <span className="github-watermark"><CodeXml size={175} strokeWidth={0.5} /></span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow"><span>04</span> / YOUR TURN</p>
          <div className="contact-main">
            <h2>Have a good one<br />in <span>mind?</span></h2>
            <a className="button button-primary contact-cta" href="https://github.com/shikhayadav-io">
              Get in Touch <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-bottom">
            <div className="contact-note">
              <p>Let&apos;s make something meaningful.</p>
              <span>Email &amp; LinkedIn details coming soon.</span>
            </div>
            <div className="social-links">
              <span className="social-placeholder" aria-label="Email address coming soon">
                <Mail size={17} /> Email <span className="coming-soon">Soon</span>
              </span>
              <span className="social-placeholder" aria-label="LinkedIn profile coming soon">
                <BriefcaseBusiness size={17} /> LinkedIn <span className="coming-soon">Soon</span>
              </span>
              <a
                href="https://github.com/shikhayadav-io"
                target="_blank"
                rel="noreferrer"
              >
                <CodeXml size={17} /> GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">s<span>.</span></span>
          <span className="wordmark-name">shikha yadav</span>
        </a>
        <span>Designed with intent. Built with curiosity.</span>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}

export default App
