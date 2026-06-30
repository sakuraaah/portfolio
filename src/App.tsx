import { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

type Project = {
  title: string
  year: string
  role: string
  type: string
  description: string
  stack: string[]
  overview: string[]
  highlights: string[]
}

const profile = {
  name: 'Alex Rivera',
  role: 'Full-stack engineer',
  email: 'hello@alexrivera.dev',
  github: '#',
  linkedin: '#',
  x: '#',
}

const featuredProject: Project = {
  title: 'Project Name',
  year: '2026',
  role: 'Design & engineering',
  type: 'Full-stack build',
  description:
    'A short, confident description of what this product does, the problem it solves, and what makes the build worth showing. Swap this for the real story.',
  stack: ['React', 'TypeScript', 'Node', 'Postgres'],
  overview: [
    "Open with the context: what this product is, who it's for, and the problem that made it worth building. Keep it human: a paragraph or two is plenty.",
    'Then say what you actually did: the parts you designed, the systems you built, and the tradeoffs you made along the way. This is the story the project card on the home page only hints at.',
  ],
  highlights: [
    'A standout feature or technical decision worth calling out.',
    "A measurable outcome, or something you're proud of in the build.",
    'A detail that shows the care that went into it.',
  ],
}

function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="project" element={<ProjectPage project={featuredProject} />} />
      </Route>
    </Routes>
  )
}

function SiteShell() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'

    return localStorage.getItem('pf-theme') === 'dark' ? 'dark' : 'light'
  })
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pf-theme', theme)
  }, [theme])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in'))
      return
    }

    revealEls.forEach((el) => el.classList.remove('in'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    requestAnimationFrame(() => {
      revealEls.forEach((el) => observer.observe(el))
    })

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView()
      })
      return
    }

    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'

    setTheme(next)
  }

  return (
    <div className="site">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  )
}

function Header({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" to="/">
          {profile.name}
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className="navlink" href="/#work">
            Work
          </a>
          <a className="navlink" href="/#about">
            About
          </a>
          <a className="navlink" href="/#contact">
            Contact
          </a>
          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
        </nav>
        <ThemeButton theme={theme} onToggleTheme={onToggleTheme} compact />
      </div>
    </header>
  )
}

function ThemeButton({
  theme,
  compact = false,
  onToggleTheme,
}: {
  theme: 'light' | 'dark'
  compact?: boolean
  onToggleTheme: () => void
}) {
  return (
    <button
      aria-label="Toggle theme"
      className={compact ? 'theme-button theme-button-mobile ghost' : 'theme-button ghost'}
      type="button"
      onClick={onToggleTheme}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function HomePage() {
  return (
    <main id="top">
      <Hero />
      <WorkSection project={featuredProject} />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

function Hero() {
  return (
    <section className="wrap hero-section">
      <div className="hero-grid">
        <div>
          <Eyebrow label={profile.role} animated />
          <h1 className="hero-title">
            <span className="anim anim-rise-1">Crafting software</span>
            <span className="anim anim-rise-2">
              that feels <em>effortless</em>.
            </span>
          </h1>
          <p className="hero-copy anim anim-rise-3">
            A selection of products I&apos;ve designed, built, and shipped, from the
            interface down to the data layer.
          </p>
          <div className="hero-actions anim anim-rise-4">
            <a href="#work" className="cta-link">
              View selected work
              <span className="cta-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
            <SocialLinks size="sm" />
          </div>
        </div>
        <ImagePanel
          className="hero-media anim anim-image"
          label="Portrait / feature image"
          variant="portrait"
        />
      </div>
    </section>
  )
}

function WorkSection({ project }: { project: Project }) {
  return (
    <section id="work" className="wrap work-section">
      <div className="section-heading reveal">
        <div>
          <Eyebrow label="Selected work" />
          <h2>Things I&apos;ve built.</h2>
        </div>
        <p>An evolving showcase, each project added as it ships.</p>
      </div>

      <article className="feature reveal">
        <ImagePanel className="feature-media" label="Project screenshot" variant="screen" />
        <div className="feature-body">
          <MetaLine project={project} />
          <h3>
            <Link className="navlink" to="/project">
              {project.title}
            </Link>
          </h3>
          <p>{project.description}</p>
          <ChipList items={project.stack} />
          <div className="feature-actions">
            <Link className="cta-link" to="/project">
              View project
              <span className="cta-arrow" aria-hidden="true">
                -&gt;
              </span>
            </Link>
            <a className="source-link social" href={profile.github}>
              <GithubIcon />
              Source
            </a>
          </div>
        </div>
      </article>

      <div className="next-row reveal">
        <span className="dot-group" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <p>More projects are being migrated over from GitHub. This space grows as they land.</p>
      </div>
    </section>
  )
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <main>
      <section className="wrap project-hero">
        <Link className="cta-link plain anim anim-fade" to="/#work">
          <span className="back-arrow" aria-hidden="true">
            &lt;-
          </span>
          Selected work
        </Link>
        <div className="project-meta anim anim-fade-delay">
          <MetaLine project={project} />
        </div>
        <h1 className="project-title anim anim-rise-1">{project.title}</h1>
        <p className="project-description anim anim-rise-2">{project.description}</p>
        <div className="project-actions anim anim-rise-3">
          <a href="#" className="cta-link">
            Visit project
            <span className="cta-arrow" aria-hidden="true">
              -&gt;
            </span>
          </a>
          <a className="source-link social" href={profile.github}>
            <GithubIcon />
            Source
          </a>
        </div>
      </section>

      <section className="wrap project-shot-wrap">
        <ImagePanel
          className="project-shot anim anim-image"
          label="Lead project screenshot"
          variant="wide"
        />
      </section>

      <section className="wrap project-body-section">
        <div className="project-body-grid">
          <aside className="facts reveal">
            <Fact label="Year" value={project.year} />
            <Fact label="Role" value={project.role} />
            <div>
              <div className="fact-label">Stack</div>
              <ChipList items={project.stack} />
            </div>
            <div className="fact-links">
              <a href="#" className="cta-link plain">
                Visit project
                <span className="cta-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </a>
              <a href="#" className="cta-link plain muted">
                View source
                <span className="cta-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </a>
            </div>
          </aside>

          <div className="writeup">
            <article className="reveal">
              <h2>Overview</h2>
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="reveal highlight-block">
              <h2>Highlights</h2>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>

            <div className="gallery reveal">
              <ImagePanel label="Screenshot" variant="gallery" />
              <ImagePanel label="Screenshot" variant="gallery" />
            </div>
          </div>
        </div>
      </section>

      <section className="more-section">
        <div className="wrap more-inner reveal">
          <h2>Want to see more?</h2>
          <div className="more-actions">
            <Link className="cta-link" to="/#work">
              <span className="back-arrow" aria-hidden="true">
                &lt;-
              </span>
              Back to all work
            </Link>
            <a className="cta-link muted" href={`mailto:${profile.email}`}>
              Get in touch
              <span className="cta-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="wrap about-grid">
        <div className="reveal">
          <Eyebrow label="About" />
          <h2>A few words.</h2>
        </div>
        <div className="reveal about-copy">
          <p className="about-lede">
            I build software end to end, designing the interface, wiring the logic, and
            shipping it to people who use it every day.
          </p>
          <p>
            My focus is on products that feel calm and considered: clear interfaces, solid
            foundations, and the small details that make something a pleasure to use. This
            site is a running record of that work, nothing more, nothing less.
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="wrap contact-section">
      <div className="contact-card reveal">
        <Eyebrow label="Contact" centered />
        <h2>
          Always happy to <em>talk shop</em>.
        </h2>
        <p>Questions about a project, or just want to compare notes? You&apos;ll find me here.</p>
        <a href={`mailto:${profile.email}`} className="cta-link soft email-link">
          {profile.email}
          <span className="cta-arrow" aria-hidden="true">
            -&gt;
          </span>
        </a>
        <SocialLinks size="lg" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="footer-name">{profile.name}</span>
        <span>&copy; 2026, Built and maintained by hand.</span>
        <a className="navlink" href="#top">
          Back to top ^
        </a>
      </div>
    </footer>
  )
}

function Eyebrow({
  label,
  animated = false,
  centered = false,
}: {
  label: string
  animated?: boolean
  centered?: boolean
}) {
  return (
    <div className={['eyebrow', centered ? 'eyebrow-centered' : '', animated ? 'anim anim-fade' : ''].join(' ')}>
      <span />
      <small>{label}</small>
      {centered && <span />}
    </div>
  )
}

function MetaLine({ project }: { project: Project }) {
  return (
    <div className="meta-line">
      <span className="status-pill">
        <span aria-hidden="true" />
        Latest project
      </span>
      <span className="meta-date">
        {project.year} · {project.type}
      </span>
    </div>
  )
}

function ChipList({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="fact-label">{label}</div>
      <div className="fact-value">{value}</div>
    </div>
  )
}

function ImagePanel({
  label,
  variant,
  className = '',
}: {
  label: string
  variant: 'portrait' | 'screen' | 'wide' | 'gallery'
  className?: string
}) {
  return (
    <div className={`image-panel image-panel-${variant} ${className}`}>
      <div className="image-panel-content">
        <span>{label}</span>
      </div>
    </div>
  )
}

function SocialLinks({ size }: { size: 'sm' | 'lg' }) {
  return (
    <div className={`social-links social-links-${size}`}>
      <a className="social" href={profile.github} aria-label="GitHub">
        <GithubIcon />
      </a>
      <a className="social" href={profile.linkedin} aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a className="social" href={profile.x} aria-label="X">
        <XIcon />
      </a>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56v-2.01c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3.01-.4c1.02 0 2.05.13 3.01.4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.24 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.68.83.56C20.56 21.88 24 17.48 24 12.29 24 5.78 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.55 1.55M17.75 17.75l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.55-1.55M17.75 6.25l1.55-1.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M20.1 14.4A7.7 7.7 0 0 1 9.6 3.9 8.45 8.45 0 1 0 20.1 14.4Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export default App
