import type { ComponentType, SVGProps } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { DemoVideo } from "./components/DemoVideo";
import { LogoMark } from "./components/LogoMark";
import { paths } from "./config";
import {
  IconBarChart,
  IconFileText,
  IconHelp,
  IconHistory,
  IconMic,
  IconShield,
  IconUpload,
  IconUserCheck,
  IconZap,
} from "./icons";

const SOPSAGE_BAR_WORDS = ["Aligned", "Insightful", "Audit-ready"] as const;

function SopsageBarWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SOPSAGE_BAR_WORDS.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="comparison-bar-rotator" aria-live="polite">
      <span
        key={SOPSAGE_BAR_WORDS[index]}
        className="comparison-bar-rotator__word"
      >
        {SOPSAGE_BAR_WORDS[index]}
      </span>
    </span>
  );
}

type Feature = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  featured?: boolean;
};

const features: Feature[] = [
  {
    Icon: IconHelp,
    title: "Ask AI",
    description:
      "Chat with your org’s procedures — natural-language answers grounded in your SOP library, powered by the same retrieval stack as the app (including vector search).",
    featured: true,
  },
  {
    Icon: IconZap,
    title: "AI-assisted editor",
    description:
      "Draft, restructure, and polish in the production editor: GPT-backed suggestions, slash commands, and revision-aware edits — not a generic text box.",
  },
  {
    Icon: IconMic,
    title: "Meetings & transcripts",
    description:
      "Capture and revisit conversation context alongside documentation — including Google Calendar hooks so meetings stay tied to how work actually happens.",
  },
  {
    Icon: IconUserCheck,
    title: "Approvals",
    description:
      "Formal review queues with pending counts in the nav — so nothing ships until the right people sign off.",
  },
  {
    Icon: IconHistory,
    title: "Version history",
    description:
      "Timestamped revisions with traceability your auditors can follow — roll back or compare without digging through attachments.",
  },
  {
    Icon: IconUpload,
    title: "Export & storage",
    description:
      "PDF, Word, and HTML exports with secure cloud storage — the same export and file pipeline your users get after login.",
  },
  {
    Icon: IconShield,
    title: "Roles & access",
    description:
      "Admin, editor, reviewer, and viewer roles — granular enough for regulated environments, simple enough for daily use.",
  },
  {
    Icon: IconBarChart,
    title: "Analytics",
    description:
      "Overview, usage, and performance views — see what gets read, what stalls, and where to invest next.",
  },
];

const benefits = [
  {
    title: "Turn ideas into approved SOPs",
    body: "From blank page to reviewed document — AI drafts, human judgment, approvals in one place.",
  },
  {
    title: "One living library",
    body: "Semantic search and Ask AI mean people find the right step, not the latest PDF in someone’s inbox.",
  },
  {
    title: "Meetings meet documentation",
    body: "Transcripts and calendar context sit next to procedures — so context never lives only in someone’s head.",
  },
  {
    title: "Prove it with analytics",
    body: "Usage and performance signals show what teams rely on — and what needs a rewrite before it becomes risk.",
  },
];

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: paths.demo, label: "Demo" },
  { href: "#benefits", label: "Outcomes" },
  { href: "#contact", label: "Contact" },
] as const;

function HeroPreview() {
  return (
    <div className="hero-preview-wrap hero-preview-entrance">
      <div className="hero-preview-glow" aria-hidden />
      <div className="hero-preview">
        <div className="preview-chrome">
          <span className="preview-dot" />
          <span className="preview-dot" />
          <span className="preview-dot" />
          <span className="preview-title">Sopsage — Editor</span>
        </div>
        <div className="preview-body">
          <div className="preview-toolbar">
            <span className="preview-badge">Procedure · v3</span>
            <IconFileText
              width={18}
              height={18}
              strokeWidth={2}
              style={{ color: "hsl(var(--muted-foreground))", opacity: 0.85 }}
            />
          </div>
          <div className="preview-lines">
            <div className="preview-line" style={{ width: "100%" }} />
            <div className="preview-line accent" />
            <div className="preview-line short" />
            <div className="preview-line" style={{ width: "88%" }} />
          </div>
          <div className="preview-footer">
            <span className="preview-tag">Ask AI</span>
            <span className="preview-tag">Approvals</span>
            <span className="preview-tag">Export</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [navShadow, setNavShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavShadow(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelector(".hero")?.classList.add("hero--ready");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-animate-section]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = document.querySelector(".time-comparison");
    if (!el) return;
    const comparisonObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bars =
            entry.target.querySelectorAll<HTMLElement>(".comparison-bar");
          bars.forEach((bar) => {
            const w = bar.style.width;
            bar.style.width = "0";
            window.setTimeout(() => {
              bar.style.width = w;
            }, 80);
          });
          comparisonObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );
    comparisonObserver.observe(el);
    return () => comparisonObserver.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a?.getAttribute("href")?.startsWith("#")) return;
      e.preventDefault();
      setMenuOpen(false);
      const id = a.getAttribute("href")!.slice(1);
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="page-bg">
      <nav
        className={`nav${menuOpen ? " nav--menu-open" : ""}`}
        style={{
          boxShadow: navShadow ? "var(--shadow-md)" : "none",
        }}
      >
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <LogoMark />
            <span>Sopsage</span>
          </Link>

          <button
            type="button"
            className="nav-burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
          </button>

          <div className="nav-desktop">
            <div className="nav-links">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  className="nav-link"
                  href={l.href}
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <a
                href={paths.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take a demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Outside <nav> so fixed backdrop/sheet use the viewport (nav’s backdrop-filter can trap fixed children) */}
      <button
        type="button"
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`nav-sheet${menuOpen ? " is-open" : ""}`}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="nav-sheet-inner">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-sheet-link"
              href={l.href}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="nav-sheet-actions">
            <a
              href={paths.demo}
              className="btn btn-primary btn-block"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Take a demo
            </a>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-entrance-child">
              <span className="eyebrow-dot" />
              Sopsage — write, review, ship
            </p>
            <h1 className="hero-title hero-entrance-child">
              Procedures that keep pace
              <br />
              <span className="accent accent-shimmer">
                with how your team really works
              </span>
            </h1>
            <p className="hero-lead hero-entrance-child">
              The full product experience: AI writing, Ask AI over your library,
              meeting transcripts, approval queues, analytics, and secure exports
              — one place for documentation that passes review and survives
              audits.
            </p>
            <div className="hero-cta-row hero-entrance-child">
              <a
                href={paths.register}
                className="btn btn-primary btn-primary-lg"
              >
                Start free
              </a>
              <a
                href={paths.demo}
                className="btn btn-secondary btn-secondary-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take a demo
              </a>
            </div>
            <div className="hero-meta hero-entrance-child">
              <div className="hero-meta-item">
                <span className="hero-meta-value">Ask AI</span>
                <span className="hero-meta-label">Answers from your SOPs</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-value">Meetings</span>
                <span className="hero-meta-label">Transcripts &amp; calendar</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-value">Analytics</span>
                <span className="hero-meta-label">Usage &amp; performance</span>
              </div>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <DemoVideo />

      <section id="features" className="features" data-animate-section>
        <div className="container">
          <header className="section-head motion-section-child">
            <p className="section-eyebrow">Inside the product</p>
            <h2 className="section-title">The same modules you see after sign-in</h2>
            <p className="section-desc">
              Every headline here maps to a real area of the Sopsage app — from
              Ask AI and the editor to meetings, approvals, and analytics.
            </p>
          </header>
          <div className="bento">
            {features.map(({ Icon, title, description, featured }) => (
              <article
                key={title}
                className={`bento-item motion-stagger${featured ? " bento-item--featured bento-item--lg" : ""}`}
              >
                <div className="bento-icon-wrap">
                  <Icon width={22} height={22} strokeWidth={1.75} />
                </div>
                <h3 className="bento-item-title">{title}</h3>
                <p className="bento-item-desc">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="benefits" data-animate-section>
        <div className="container benefits-grid">
          <div className="benefits-copy motion-section-child">
            <p className="section-eyebrow">Outcomes</p>
            <h2 className="section-title">Less scavenger hunt. More execution.</h2>
            <p className="section-desc">
              When answers live next to approvals and transcripts, teams stop
              rerouting work through Slack archaeology — and leaders get signal,
              not noise.
            </p>
            <div className="benefit-list">
              {benefits.map((b) => (
                <div key={b.title} className="benefit-row motion-stagger">
                  <div className="benefit-check" aria-hidden>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-card motion-section-child motion-section-child--delay">
            <p className="compare-title">Documentation load</p>
            <div className="time-comparison">
              <div className="comparison-item before">
                <div className="comparison-label">Fragmented tools</div>
                <div className="comparison-bar" style={{ width: "100%" }}>
                  High manual effort, low confidence
                </div>
              </div>
              <div className="comparison-item after">
                <div className="comparison-label">Sopsage</div>
                <div className="comparison-bar" style={{ width: "38%" }}>
                  <SopsageBarWords />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact" data-animate-section>
        <div className="container">
          <header className="contact-header motion-section-child">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Walk through the real app</h2>
            <p className="section-desc">
              Share your rollout goals — we’ll connect you with the same
              Sopsage experience your team gets from day one: Ask AI, editor,
              meetings, and governance in one workspace.
            </p>
          </header>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <LogoMark />
                <span>Sopsage</span>
              </div>
              <p>
                AI-powered SOPs, Ask AI, meetings, approvals, and analytics —
                the same product story from landing page to logged-in session.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a
                  href={paths.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              <div className="footer-column">
                <h4>Application</h4>
                <a href={paths.login}>Sign in</a>
                <a href="#contact">Talk to us</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Sopsage. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
