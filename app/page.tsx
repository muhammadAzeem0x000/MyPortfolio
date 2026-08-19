import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    index: "01",
    slug: "tracepilot",
    category: "Applied AI / LLM Engineering",
    title: "TracePilot",
    lead: "Evidence-grounded AI incident investigator",
    description:
      "An incident investigation system that turns repository evidence into structured, citation-validated findings—not another ungrounded AI answer.",
    detail:
      "Hybrid retrieval, durable background execution, validated citations, and production-grade evaluation make every conclusion traceable.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "pgvector", "DeepSeek", "Gemini"],
    live: "https://tracepilot-six.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/TracePilot",
    caseStudyUrl: "/case-study/tracepilot",
    featured: true,
    mockupImage: "/thumbnails/tracepilot-mockup.png",
    mockupAlt: "TracePilot AI incident investigation interface mockup with citation verification",
  },
  {
    index: "02",
    slug: "supportflow",
    category: "Full-Stack / SaaS Architecture",
    title: "SupportFlow",
    lead: "Multi-tenant customer support SaaS",
    description:
      "A tenant-safe support platform with distinct administrator, agent, and customer workflows built on PostgreSQL row-level security.",
    detail:
      "RBAC, private attachments, real-time collaboration, ticket operations, SLA tracking, and analytics share one secure data model.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    live: "https://supportflowapp.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/SupportFlow",
    caseStudyUrl: "/case-study/supportflow",
    mockupImage: "/thumbnails/supportflow-mockup.png",
    mockupAlt: "SupportFlow multi-tenant customer support and SLA tracking interface mockup",
  },
  {
    index: "03",
    slug: "signalroom",
    category: "AI-Enabled Full Stack",
    title: "SignalRoom",
    lead: "Anonymous feedback & AI analytics",
    description:
      "A privacy-first feedback platform that transforms survey responses and private course material into evidence-grounded recommendations.",
    detail:
      "Single-use response codes, configurable surveys, secure document analysis, dashboards, and AI recommendations work as one product.",
    tags: ["Next.js", "TypeScript", "Supabase", "DeepSeek", "Recharts"],
    live: "https://instructorfeedbackai.vercel.app",
    github: "https://github.com/muhammadAzeem0x000/student_feedback_analyzer",
    caseStudyUrl: "/case-study/signalroom",
    mockupImage: "/thumbnails/signalroom-mockup.png",
    mockupAlt: "SignalRoom anonymous feedback analyzer and AI recommendations interface mockup",
  },
  {
    index: "04",
    slug: "musclebot",
    category: "AI Product / Web + Mobile",
    title: "MuscleBot",
    lead: "AI fitness & nutrition product",
    description:
      "A web and Android product combining workout tracking, nutrition logging, progress analytics, and AI-generated planning workflows.",
    detail:
      "1,300+ exercises, subscriptions, push notifications, Health Connect, and Capacitor packaging take it beyond a browser-only demo.",
    tags: ["React", "TypeScript", "Supabase", "Capacitor", "RevenueCat", "AI APIs"],
    live: "https://musclebot.app",
    github: "https://github.com/muhammadAzeem0x000/fitness",
    caseStudyUrl: "/case-study/musclebot",
    mockupImage: "/thumbnails/musclebot-mockup.png",
    mockupAlt: "MuscleBot cross-platform AI fitness, nutrition, and workout logging interface mockup",
  },
];

const capabilities = [
  {
    number: "01",
    title: "AI & LLM Systems",
    body: "LLM integration, structured generation, hybrid retrieval (pgvector + FTS), grounding, prompt design, evaluation, and AI workflows.",
  },
  {
    number: "02",
    title: "Backend Architecture & Data",
    body: "FastAPI services, PostgreSQL data models, durable queues (FOR UPDATE SKIP LOCKED), multi-tenancy, RLS, retries, and RPCs.",
  },
  {
    number: "03",
    title: "Security & Correctness",
    body: "Row-Level Security, authorization, tenant isolation, zero-identity models, single-use HMAC codes, and atomic concurrency locks.",
  },
  {
    number: "04",
    title: "Full-Stack Product Engineering",
    body: "Polished web interfaces with Next.js 16 & React 19, TypeScript, real-time workflows, Recharts analytics, and responsive design systems.",
  },
  {
    number: "05",
    title: "Mobile & Platform Engineering",
    body: "Capacitor 8 Android packaging, Health Connect integration, RevenueCat subscriptions, FCM push notifications, and production deployments.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

interface ProjectVisualProps {
  slug: string;
  title: string;
  mockupImage: string;
  mockupAlt: string;
  featured?: boolean;
}

function ProjectVisual({ slug, title, mockupImage, mockupAlt, featured }: ProjectVisualProps) {
  return (
    <div className={`project-mockup-wrapper mockup-${slug}`} aria-label={`${title} interface mockup`}>
      <div className="mockup-chrome">
        <div className="mockup-dots" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-min" />
          <span className="dot dot-max" />
        </div>
        <span className="mockup-url-bar">{slug}.system // preview</span>
        <span className="mockup-badge"><i /> ACTIVE</span>
      </div>
      <div className="mockup-viewport">
        <Image
          src={mockupImage}
          alt={mockupAlt}
          width={1200}
          height={750}
          priority={featured}
          className="mockup-image"
          sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 650px"
        />
        <div className="mockup-scan-sheen" aria-hidden="true" />
        <div className="mockup-corner corner-top-left" aria-hidden="true" />
        <div className="mockup-corner corner-bottom-right" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Muhammad Azeem, back to top">
          <span className="brand-mark">MA</span>
          <span className="brand-copy">MUHAMMAD AZEEM<small>SOFTWARE ENGINEER</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="status-pill" href="#contact"><i /> Open to conversations</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>01 / SYSTEM PROFILE</span><span>FULL-STACK × APPLIED AI</span></p>
          <h1>
            I build software
            <span>that can <em>reason</em>,</span>
            retrieve &amp; ship.
          </h1>
          <p className="hero-intro">
            Software Engineer building full-stack and applied AI systems with Python,
            FastAPI, Next.js, TypeScript, PostgreSQL, and production LLM workflows.
            I build complete products where AI is connected to real data, workflows,
            databases, security, and measurable application behavior.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the systems <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://github.com/muhammadAzeem0x000" target="_blank" rel="noreferrer">
              GitHub profile <Arrow />
            </a>
          </div>
          <div className="hero-proof" aria-label="Portfolio overview">
            <div><strong>04</strong><span>Production-minded<br />case studies</span></div>
            <div><strong>02</strong><span>Surfaces<br />Web + Android</span></div>
            <div><strong>01</strong><span>Focus<br />Systems that hold up</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Muhammad Azeem">
          <div className="portrait-frame">
            <div className="frame-label top-label">BUILDER / 0001</div>
            <div className="frame-label side-label">EVIDENCE &gt; HYPE</div>
            <div className="portrait-image" />
            <div className="scan-line" aria-hidden="true" />
            <div className="corner corner-one" /><div className="corner corner-two" />
            <div className="portrait-caption">
              <div><span>DISCIPLINE</span><strong>Engineering</strong></div>
              <div><span>CURRENT SIGNAL</span><strong className="signal-live"><i /> Building</strong></div>
            </div>
          </div>
          <div className="orbit-note note-one"><span>LLM</span>GROUNDING</div>
          <div className="orbit-note note-two"><span>DB</span>POSTGRES</div>
          <div className="orbit-note note-three"><span>API</span>FASTAPI</div>
        </div>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <div>STRUCTURED OUTPUTS</div><i />
        <div>HYBRID RETRIEVAL</div><i />
        <div>TENANT-SAFE DATA</div><i />
        <div>DURABLE EXECUTION</div><i />
        <div>OBSERVABLE SYSTEMS</div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / SELECTED SYSTEMS</p>
            <h2>Built beyond<br /><em>the happy path.</em></h2>
          </div>
          <p>
            Four products that move from applied AI investigation to secure SaaS,
            privacy-first analytics, and cross-platform product engineering.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.slug} ${project.featured ? "project-featured" : ""}`}
              key={project.slug}
            >
              <div className="project-topline">
                <span>{project.index} / 04</span>
                <span>{project.category}</span>
              </div>
              <div className="project-content">
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p className="project-lead">{project.lead}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-detail">{project.detail}</p>
                </div>
                <ProjectVisual
                  slug={project.slug}
                  title={project.title}
                  mockupImage={project.mockupImage}
                  mockupAlt={project.mockupAlt}
                  featured={project.featured}
                />
              </div>
              {project.slug === "tracepilot" && (
                <div className="demo-note">
                  <span>READ-ONLY PUBLIC DEMO</span>
                  The full investigation pipeline, retrieval, worker, tool calling, and evaluations are implemented and tested.
                </div>
              )}
              <div className="project-footer">
                <ul aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <Link href={project.caseStudyUrl}>Case study <Arrow /></Link>
                  <a href={project.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>
                  <a href={project.github} target="_blank" rel="noreferrer">Source <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="expertise-heading">
          <p className="section-index">03 / ENGINEERING RANGE</p>
          <h2>From model call<br />to <em>maintainable system.</em></h2>
          <p className="expertise-intro">
            I work across the boundaries where AI behavior, backend reliability,
            secure data, and product experience have to agree.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section" id="philosophy">
        <div className="principles-rail">
          <span>INPUT</span><i /><span>CONSTRAINTS</span><i /><span>EVIDENCE</span><i /><span>OUTPUT</span>
        </div>
        <div className="principles-copy">
          <p className="section-index">04 / BUILD PHILOSOPHY</p>
          <blockquote>“Useful AI begins where the demo ends.”</blockquote>
          <p>
            The interesting work is not wiring up one model call. It is building the
            retrieval, validation, security, queues, tests, and interfaces that make
            the result dependable enough to use.
          </p>
          <div className="principle-tags">
            <span>Evidence-grounded</span><span>Security-aware</span><span>Deterministic boundaries</span><span>Observable</span><span>Evaluated</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-signal"><i /><span>SIGNAL OPEN</span></div>
        <p className="section-index">05 / START A CONVERSATION</p>
        <h2>Have a hard system<br />worth <em>building well?</em></h2>
        <p className="contact-copy">
          I’m interested in applied AI, backend-heavy products, and engineering
          problems where correctness matters as much as the interface.
        </p>
        <a className="contact-button" href="https://github.com/muhammadAzeem0x000" target="_blank" rel="noreferrer">
          <span>LET’S COMPARE NOTES</span><Arrow />
        </a>
      </section>

      <footer>
        <div className="footer-brand">MUHAMMAD<br />AZEEM</div>
        <p>Software Engineer building Full-Stack &amp; Applied AI Systems.</p>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <Link href="/case-study/tracepilot">TracePilot <Arrow /></Link>
          <Link href="/case-study/supportflow">SupportFlow <Arrow /></Link>
          <Link href="/case-study/signalroom">SignalRoom <Arrow /></Link>
          <Link href="/case-study/musclebot">MuscleBot <Arrow /></Link>
          <a href="https://github.com/muhammadAzeem0x000" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
        <div className="footer-meta">DESIGNED WITH INTENT / ENGINEERED FOR CLARITY</div>
      </footer>
    </main>
  );
}
