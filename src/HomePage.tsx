import type { ComponentType, SVGProps } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { DemoVideo } from "./components/DemoVideo";
import { Pricing } from "./components/home/Pricing";
import { LogoMark } from "./components/LogoMark";
import { paths } from "./config";
import {
  IconActivity,
  IconBarChart,
  IconFileText,
  IconGhost,
  IconGlobe,
  IconHelp,
  IconHistory,
  IconMail,
  IconMic,
  IconShield,
  IconUpload,
  IconUserCheck,
  IconUsers,
  IconZap,
} from "./icons";

/* ─── Rotating comparison words ─── */
const BAR_WORDS = ["Aligned", "Audit-ready", "Insightful"] as const;

function BarWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % BAR_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="bar-rotator" aria-live="polite">
      <span key={BAR_WORDS[i]} className="bar-word">{BAR_WORDS[i]}</span>
    </span>
  );
}

/* ─── Feature cards ─── */
type Feature = { title: string; description: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; featured?: boolean };

const features: Feature[] = [
  { Icon: IconHelp,      title: "Ask AI",            featured: true,
    description: "Chat with your org's procedures — natural-language answers grounded in your SOP library, powered by vector search." },
  { Icon: IconZap,       title: "AI-assisted editor",
    description: "Draft, restructure, and polish in the production editor: AI suggestions, slash commands, and revision-aware edits." },
  { Icon: IconMic,       title: "Meetings & transcripts",
    description: "Capture conversation context alongside documentation — including Google Calendar hooks so meetings stay tied to how work happens." },
  { Icon: IconUserCheck, title: "Approvals",
    description: "Formal review queues with pending counts in the nav — so nothing ships until the right people sign off." },
  { Icon: IconHistory,   title: "Version history",
    description: "Timestamped revisions with traceability your auditors can follow — roll back or compare without digging through attachments." },
  { Icon: IconUpload,    title: "Export & storage",
    description: "PDF, Word, and HTML exports with secure cloud storage — the same export pipeline your users get after login." },
  { Icon: IconShield,    title: "Roles & access",
    description: "Admin, editor, reviewer, and viewer roles — granular enough for regulated environments, simple enough for daily use." },
  { Icon: IconBarChart,  title: "Analytics",
    description: "Overview, usage, and performance views — see what gets read, what stalls, and where to invest next." },
];

/* ─── Benefits ─── */
const benefits = [
  { title: "Turn ideas into approved SOPs",
    body: "From blank page to reviewed document — AI drafts, human judgment, approvals in one place." },
  { title: "One living library",
    body: "Semantic search and Ask AI mean people find the right step, not the latest PDF in someone's inbox." },
  { title: "Meetings meet documentation",
    body: "Transcripts and calendar context sit next to procedures — so context never lives only in someone's head." },
  { title: "Prove it with analytics",
    body: "Usage and performance signals show what teams rely on — and what needs a rewrite before it becomes risk." },
];

/* ─── Problem cards ─── */
const problems = [
  { Icon: IconFileText,
    headline: "Written ≠ Followed",
    body: "SOPs live in documents. Teams work in Slack and memory. There's no signal when a critical procedure is ignored — until something breaks." },
  { Icon: IconUsers,
    headline: "Context is tribal",
    body: "Meeting decisions, workarounds, and \"why we do it this way\" exist only in people's heads. When they leave, the knowledge leaves too." },
  { Icon: IconShield,
    headline: "Compliance is invisible",
    body: "Audit readiness means manually collecting evidence that scattered tools never produced. Every review is a scramble." },
];

/* ─── Why Us differentiators ─── */
const differentiators = [
  { Icon: IconHistory,
    tag: "Unique capability",
    label: "Execution closes the loop",
    body: "The only platform that tracks whether your SOPs are actually followed. Detect when steps are being skipped. Get AI-generated proposals to fix drift — automatically." },
  { Icon: IconHelp,
    tag: "Beyond ChatGPT",
    label: "AI that knows your organization",
    body: "Ask AI answers from your procedures, not the open internet. Meetings and transcripts live next to the docs they inform. Context stays in one place — forever." },
  { Icon: IconShield,
    tag: "Compliance infrastructure",
    label: "One audit trail, not ten tools",
    body: "Draft → review → approve → execute → analyze. Every step timestamped, every approver named. Audit readiness is a byproduct of daily use, not a quarterly scramble." },
];

/* ─── Vision / roadmap teasers ─── */
const roadmap = [
  { Icon: IconGhost,
    tag: "Coming soon",
    title: "Ghost Employee",
    desc: "AI exit interviews that convert departing employees' institutional knowledge into published SOPs — before they walk out the door." },
  { Icon: IconActivity,
    tag: "Coming soon",
    title: "Org Heartbeat",
    desc: "A live compliance dashboard: every SOP your organization should run right now — green, yellow, or red. Executives see it in under 10 seconds." },
  { Icon: IconGlobe,
    tag: "Coming soon",
    title: "Intelligence Network",
    desc: "Anonymous cross-org SOP benchmarking. Know if your procedures meet the standard your industry expects — and where you have gaps." },
];

/* ─── Nav links ─── */
const NAV_LINKS = [
  { href: "#features",  label: "Features" },
  { href: "#why",       label: "Why Us" },
  { href: paths.demo,   label: "Demo" },
  { href: "#benefits",  label: "Outcomes" },
  { href: "#pricing",   label: "Pricing" },
  { href: "#contact",   label: "Connect" },
] as const;

/* ─── Hero app illustration ─── */
function HeroPreview() {
  return (
    <div className="hero-preview-entrance relative mt-4 lg:mt-0 px-2 sm:px-0">
      {/* Ambient glow */}
      <div
        className="absolute inset-[-12%] bg-[radial-gradient(ellipse_70%_60%_at_55%_45%,hsl(238_62%_58%/0.20),transparent_65%)] blur-[48px] pointer-events-none"
        aria-hidden
      />

      {/* Floating drift alert — top right */}
      <div className="hidden sm:flex absolute -top-5 right-2 z-20 items-start gap-2.5 bg-card border border-[hsl(38_94%_50%/0.40)] shadow-lg rounded-2xl px-3 py-2.5 max-w-[195px]">
        <span className="w-5 h-5 rounded-full bg-[hsl(38_94%_50%/0.14)] flex items-center justify-center shrink-0 mt-0.5">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="hsl(38 80% 38%)" strokeWidth="2.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </span>
        <div>
          <p className="text-[0.6875rem] font-bold text-foreground leading-tight">Drift detected</p>
          <p className="text-[0.625rem] text-body mt-0.5 leading-snug">2 steps skipped in<br/>Security SOP this week</p>
        </div>
      </div>

      {/* Main window */}
      <div className="hero-preview relative z-10 rounded-[var(--radius-xl)] border border-border bg-card shadow-2xl overflow-hidden">
        {/* Chrome + workflow pipeline */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[hsl(238_18%_97.5%)] border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[0.6875rem] font-semibold tracking-[0.05em] uppercase text-muted-foreground">SOPSAGE — AI WORKSPACE</span>
          {/* Pipeline steps */}
          <div className="ml-auto hidden sm:flex items-center gap-0.5 text-[0.5rem] font-bold">
            {(["Draft", "Review", "Approved", "Active"] as const).map((s, i) => (
              <span key={s} className="flex items-center gap-0.5">
                {i > 0 && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-border/80"><path d="M9 18l6-6-6-6"/></svg>}
                <span className={`px-1.5 py-0.5 rounded-md tracking-wide ${
                  s === "Active"   ? "bg-[hsl(142_60%_36%/0.14)] text-[hsl(142_55%_30%)]" :
                  s === "Approved" ? "bg-primary/10 text-primary" :
                  "text-muted-foreground"
                }`}>{s}</span>
              </span>
            ))}
          </div>
        </div>

        {/* App body */}
        <div className="flex" style={{ height: "clamp(260px, 32vw, 360px)" }}>
          {/* Sidebar */}
          <div className="hidden sm:flex w-[128px] shrink-0 border-r border-border bg-[hsl(238_16%_97.5%)] flex-col p-2.5 gap-0.5">
            <p className="text-[0.5625rem] font-bold tracking-[0.1em] uppercase text-muted-foreground/70 mb-1.5 px-1.5">AI Workflows</p>
            {[
              { label: "Onboarding v4", active: true },
              { label: "Security SOP",  dot: "amber" },
              { label: "QA Checklist",  dot: "blue" },
              { label: "Incident Resp." },
              { label: "Deploy Guide" },
            ].map(({ label, active, dot }) => (
              <div key={label} className={`relative px-2 py-1.5 rounded-lg text-[0.6875rem] font-medium truncate flex items-center gap-1.5 ${active ? "bg-primary text-primary-foreground" : "text-body"}`}>
                {dot === "amber" && <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-amber shrink-0" />}
                {dot === "blue"  && <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />}
                {label}
              </div>
            ))}
          </div>

          {/* Editor pane */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60 bg-[hsl(238_12%_99%)]">
              <span className="text-[0.625rem] font-bold px-1.5 py-0.5 rounded-md bg-primary text-primary-foreground">v4</span>
              <span className="text-[0.8125rem] font-semibold text-foreground truncate">Employee Onboarding SOP</span>
              <span className="ml-auto shrink-0 text-[0.5625rem] px-2 py-0.5 rounded-full bg-[hsl(142_76%_36%/0.10)] text-[hsl(142_55%_28%)] border border-[hsl(142_60%_60%/0.28)] font-bold">● Active</span>
            </div>

            <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
              <div className="h-3 rounded-md bg-foreground/12 w-[55%]" />
              <div className="flex flex-col gap-2">
                <div className="h-2 rounded bg-foreground/7 w-full" />
                <div className="h-2 rounded bg-gradient-to-r from-primary/18 to-foreground/5 w-[80%]" />
                <div className="h-2 rounded bg-foreground/7 w-[92%]" />
                <div className="h-2 rounded bg-foreground/7 w-[62%]" />
              </div>

              {/* AI Agent panel — the hero element */}
              <div className="mt-1 rounded-xl border border-primary/28 bg-primary/[0.05] p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 20 20" fill="white">
                      <path d="M10 2l1.76 5.41H17l-4.38 3.18 1.67 5.14L10 12.55l-4.29 3.18 1.67-5.14L3 7.41h5.24z"/>
                    </svg>
                  </span>
                  <span className="text-[0.5625rem] font-bold text-primary tracking-[0.06em] uppercase">AI Agent · drafting from last standup</span>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 rounded bg-primary/20 w-full" />
                  <div className="h-2 rounded bg-primary/14 w-[82%]" />
                  <div className="h-2 rounded bg-primary/10 w-[58%]" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-1.5 mt-auto pt-1 border-t border-dashed border-border/70 flex-wrap">
                {["AI Draft", "Approvals", "Execution", "Compliance"].map((t) => (
                  <span key={t} className="text-[0.5625rem] px-1.5 py-0.5 rounded-lg border border-border text-body font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating compliance score — bottom left */}
      <div className="hidden sm:block absolute -bottom-5 -left-3 z-20 bg-card border border-border shadow-lg rounded-2xl p-3 w-[148px]">
        <p className="text-[0.5625rem] font-bold tracking-[0.08em] uppercase text-muted-foreground mb-2">Compliance Score</p>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-[1.375rem] font-extrabold tracking-tight text-foreground leading-none">94%</span>
          <span className="text-[0.6875rem] font-bold text-[hsl(142_55%_36%)] mb-0.5">↑ 12%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden mb-1.5">
          <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-primary to-[hsl(238_55%_65%)]" />
        </div>
        <p className="text-[0.5625rem] text-muted-foreground">18 of 19 SOPs current</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export function HomePage() {
  const location = useLocation();
  const [navShadow, setNavShadow] = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* Scroll to #contact on /contact route */
  useLayoutEffect(() => {
    if (location.pathname !== "/contact") return;
    const target = document.getElementById("contact");
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setNavShadow(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [menuOpen]);

  /* Hero entrance */
  useEffect(() => {
    const id = requestAnimationFrame(() => { document.querySelector(".hero")?.classList.add("hero--ready"); });
    return () => cancelAnimationFrame(id);
  }, []);

  /* Scroll-reveal observer */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-animate-section]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* Comparison bar animate-in */
  useEffect(() => {
    const el = document.querySelector(".time-comparison");
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll<HTMLElement>(".comparison-bar").forEach((bar) => {
          const w = bar.style.width; bar.style.width = "0";
          setTimeout(() => { bar.style.width = w; }, 80);
        });
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.45 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Smooth-scroll anchor links */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a?.getAttribute("href")?.startsWith("#")) return;
      e.preventDefault();
      setMenuOpen(false);
      const id   = a.getAttribute("href")!.slice(1);
      const dest = document.getElementById(id);
      if (dest) window.scrollTo({ top: dest.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    };
    document.addEventListener("click", fn);
    return () => document.removeEventListener("click", fn);
  }, []);

  return (
    <div className="page-bg relative min-h-screen">

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1002] bg-white/72 backdrop-blur-2xl border-b border-border transition-shadow duration-300${menuOpen ? " nav--menu-open" : ""}`}
        style={{ boxShadow: navShadow ? "var(--shadow-md)" : "none" }}
      >
        <div className="container">
          <div className="relative flex items-center justify-between py-[0.875rem] gap-4">
            <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-[1.125rem] tracking-[-0.02em] text-foreground no-underline rounded-lg" onClick={() => setMenuOpen(false)} aria-label="Sopsage home">
              <LogoMark />
            </Link>

            {/* Burger */}
            <button
              type="button"
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 ml-auto shrink-0 p-0 border-none bg-transparent rounded-lg cursor-pointer hover:bg-muted/65 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ring/45"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="nav-burger-bar" />
              <span className="nav-burger-bar" />
              <span className="nav-burger-bar" />
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="nav-link"
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {l.label}
                  </a>
                ))}
              </div>
              <a href={paths.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Take a demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <button
        type="button"
        className={`fixed inset-0 z-[1000] bg-dark/45 backdrop-blur-[4px] border-none cursor-default transition-[opacity,visibility] duration-300${menuOpen ? " opacity-100 visible" : " opacity-0 invisible"} lg:hidden`}
        aria-hidden tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile nav sheet */}
      <div className={`nav-sheet${menuOpen ? " is-open" : ""}`} id="mobile-nav" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div className="flex flex-col px-5 pb-8 pt-4 gap-1">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="block px-4 py-[0.875rem] text-base font-semibold text-foreground no-underline rounded-[0.625rem] hover:bg-muted/70 transition-colors duration-150"
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
            <a href={paths.demo} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              Take a demo
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className="hero relative pt-[6.5rem] pb-12 sm:pt-[7.5rem] sm:pb-16 lg:pt-[8.5rem] lg:pb-20 overflow-hidden">
        <div className="container">
          <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="relative z-10">
              <p className="hero-entrance-child inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-body mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent-teal to-accent-amber shadow-[0_0_12px_hsl(238_62%_58%/0.5)]" />
                AI Agents · Workflow Automation · Compliance Intelligence
              </p>

              <h1 className="hero-entrance-child font-bold tracking-[-0.035em] leading-[1.1] text-foreground mb-5"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)" }}>
                AI agents that write, route,
                <br />
                <span className="accent-shimmer">and enforce your procedures.</span>
              </h1>

              <p className="hero-entrance-child text-[1.0625rem] leading-[1.65] text-body max-w-[34rem] mb-8">
                Sopsage deploys <strong className="text-foreground font-semibold">purpose-built AI agents</strong> across your full SOP lifecycle — generating procedures from meeting transcripts, routing approvals, detecting when steps get skipped in real time, and packaging compliance evidence automatically. The operating system for how modern organizations actually work.
              </p>

              <div className="hero-entrance-child flex flex-wrap gap-3 mb-10">
                <a href={paths.register} className="btn btn-primary btn-primary-lg">Start free</a>
                <a href={paths.demo} className="btn btn-secondary btn-secondary-lg" target="_blank" rel="noopener noreferrer">
                  Take a demo
                </a>
              </div>

              <div className="hero-entrance-child flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-border">
                {[
                  { val: "AI Drafting",       sub: "Generated from meetings & docs" },
                  { val: "Drift Detection",   sub: "Know when steps are skipped live" },
                  { val: "Auto-Compliance",   sub: "Audit packages, zero scramble" },
                ].map(({ val, sub }) => (
                  <div key={val} className="flex flex-col gap-0.5">
                    <span className="text-[1rem] font-bold tracking-[-0.02em] text-foreground">{val}</span>
                    <span className="text-[0.8125rem] text-body">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview */}
            <HeroPreview />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PROBLEM STRIP
      ═══════════════════════════════ */}
      <section className="problem-strip py-14 border-y border-border/60 bg-muted/40" data-animate-section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {problems.map(({ Icon, headline, body }) => (
              <div key={headline} className="prob-stagger flex gap-4 p-6 rounded-[var(--radius-lg)] border border-border bg-card shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center">
                  <Icon width={20} height={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-[0.9375rem] text-foreground mb-1">{headline}</h3>
                  <p className="text-[0.875rem] text-body leading-[1.55]">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="motion-child text-center text-[1.0625rem] text-body max-w-[44rem] mx-auto leading-relaxed">
            <strong className="text-foreground">Sopsage</strong> is the first platform that closes the loop
            between written procedures and actual execution — from first draft to audit trail.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          DEMO VIDEO
      ═══════════════════════════════ */}
      <DemoVideo />

      {/* ═══════════════════════════════
          FEATURES BENTO
      ═══════════════════════════════ */}
      <section id="features" className="features py-20 lg:py-24" data-animate-section>
        <div className="container">
          <header className="section-head motion-child">
            <p className="section-eyebrow">Inside the product</p>
            <h2 className="section-title">The same modules you see after sign-in</h2>
            <p className="section-desc">
              Every headline maps to a real area of Sopsage — from Ask AI and the editor
              to meetings, approvals, and analytics.
            </p>
          </header>

          <div className="bento grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-rows:minmax(160px,auto)]">
            {features.map(({ Icon, title, description, featured }) => (
              <article
                key={title}
                className={`motion-stagger relative p-6 rounded-[var(--radius-lg)] border bg-card shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg${
                  featured
                    ? " lg:col-span-2 border-accent-teal/25 bg-gradient-to-br from-card to-[hsl(168_65%_97%)] hover:border-accent-teal/40"
                    : " border-border hover:border-muted-foreground/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-[0.625rem] flex items-center justify-center mb-4${
                  featured ? " bg-primary text-primary-foreground" : " bg-muted text-foreground"
                }`}>
                  <Icon width={22} height={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground mb-2">{title}</h3>
                <p className="text-[0.875rem] font-medium leading-[1.55] text-body">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          WHY SOPSAGE
      ═══════════════════════════════ */}
      <section id="why" className="why-us relative overflow-hidden py-20 lg:py-24 bg-dark" data-animate-section>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* hero.png brain — faded right accent */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}hero.png)`,
              backgroundSize: "55% auto",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              opacity: 0.07,
              maskImage: "linear-gradient(to left, black 10%, transparent 60%)",
              WebkitMaskImage: "linear-gradient(to left, black 10%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_100%_50%,hsl(238_62%_48%/0.22),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_0%_100%,hsl(38_94%_50%/0.10),transparent)]" />
        </div>

        <div className="container relative z-10">
          <header className="section-head motion-child">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent-teal mb-3 block">Why Sopsage</p>
            <h2 className="font-bold tracking-[-0.03em] mb-3 text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              Not just another wiki
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-white/70">
              Confluence stores docs. Notion organizes pages. Sopsage closes the loop —
              from the moment a procedure is drafted to the moment it&apos;s proven to work.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map(({ Icon, tag, label, body }) => (
              <div
                key={label}
                className="why-stagger p-8 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:border-white/18 hover:bg-white/10 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-accent-teal bg-accent-teal/20">
                  <Icon width={24} height={24} strokeWidth={1.75} />
                </div>
                <span className="inline-block text-[0.6875rem] font-bold tracking-[0.06em] uppercase text-accent-teal bg-accent-teal/15 rounded-full px-2.5 py-0.5 mb-3">
                  {tag}
                </span>
                <h3 className="text-[1.0625rem] font-bold tracking-[-0.025em] text-white mb-2.5">{label}</h3>
                <p className="text-[0.9375rem] leading-[1.65] text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          COMPETITOR COMPARISON
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-dark" data-animate-section>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* hero.png brain — mirrored left accent for visual variety */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}hero.png)`,
              backgroundSize: "50% auto",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              opacity: 0.055,
              maskImage: "linear-gradient(to right, black 5%, transparent 55%)",
              WebkitMaskImage: "linear-gradient(to right, black 5%, transparent 55%)",
              transform: "scaleX(-1)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,hsl(238_62%_48%/0.20),transparent)]" />
        </div>

        <div className="container relative z-10">
          <header className="section-head motion-child mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent-amber mb-3 block">Competitive landscape</p>
            <h2 className="font-bold tracking-[-0.03em] mb-3 text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              Document tools vs. Process Infrastructure.
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-white/70 max-w-[38rem] mx-auto">
              Every competitor stops at storage or checklists. Sopsage is the only platform that
              spans the full loop — from AI drafting to live execution intelligence.
            </p>
          </header>

          <div className="motion-child overflow-x-auto mx-[-0.25rem] px-[0.25rem]">
            <div className="min-w-[640px]">
              {/* Header row */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] gap-0 mb-1">
                <div className="px-4 py-3 text-[0.6875rem] font-bold tracking-[0.07em] uppercase text-white/40">Competitor</div>
                {["AI Drafting", "Execution Tracking", "Approval Workflow", "Drift Detection", "Compliance Export"].map((h) => (
                  <div key={h} className="px-3 py-3 text-[0.6875rem] font-bold tracking-[0.06em] uppercase text-accent-teal text-center">{h}</div>
                ))}
              </div>

              {/* Rows */}
              {([
                { name: "Confluence / Notion", vals: ["no","no","no","no","no"] },
                { name: "Process Street",      vals: ["no","partial","partial","no","no"] },
                { name: "Trainual",            vals: ["no","no","no","no","no"] },
                { name: "MasterControl / Veeva", vals: ["no","no","partial","no","yes"] },
                { name: "Sopsage", highlight: true, vals: ["yes","yes","yes","roadmap","yes"] },
              ] as const).map(({ name, highlight, vals }) => (
                <div
                  key={name}
                  className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] gap-0 rounded-xl mb-1 ${
                    highlight
                      ? "bg-primary/20 border border-primary/35"
                      : "border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-150"
                  }`}
                >
                  <div className={`px-4 py-4 text-[0.9375rem] font-semibold flex items-center ${highlight ? "text-white" : "text-white/75"}`}>
                    {highlight && <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mr-2 shrink-0" />}
                    {name}
                  </div>
                  {vals.map((v, i) => (
                    <div key={i} className="px-3 py-4 flex items-center justify-center">
                      {v === "yes"     && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(142 65% 45%)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>}
                      {v === "no"      && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(0 70% 55%)" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>}
                      {v === "partial" && <span className="text-[0.75rem] font-semibold text-white/50">Partial</span>}
                      {v === "roadmap" && <span className="text-[0.75rem] font-bold text-accent-amber">Roadmap</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="motion-child mt-8 text-center text-[0.875rem] text-white/45">
            Based on publicly available product documentation as of 2025. Partial = limited or add-on only.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          BENEFITS
      ═══════════════════════════════ */}
      <section id="benefits" className="benefits py-20 border-y border-border/60 bg-muted/45" data-animate-section>
        <div className="container">
          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="motion-child">
              <p className="section-eyebrow">Outcomes</p>
              <h2 className="section-title text-left">Less scavenger hunt. More execution.</h2>
              <p className="section-desc text-left mt-3">
                When answers live next to approvals and transcripts, teams stop
                rerouting work through Slack archaeology — and leaders get signal, not noise.
              </p>
              <div className="benefit-list mt-8 flex flex-col gap-5">
                {benefits.map((b) => (
                  <div key={b.title} className="motion-stagger flex gap-4 items-start">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[0.9375rem] font-semibold text-foreground mb-1">{b.title}</h3>
                      <p className="text-[0.875rem] font-medium text-body leading-[1.55]">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison card */}
            <div className="motion-child motion-child-delay p-7 rounded-[var(--radius-lg)] border border-border bg-card shadow-lg">
              <p className="text-xs font-semibold tracking-[0.06em] uppercase text-body mb-5">Documentation load</p>
              <div className="time-comparison flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[0.8125rem] font-semibold text-foreground">Fragmented tools</p>
                  <div className="comparison-bar h-11 rounded-lg flex items-center px-4 text-[0.8125rem] font-medium w-full bg-red-50 text-red-700 border border-red-200/60">
                    High manual effort, low confidence
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[0.8125rem] font-semibold text-foreground">Sopsage</p>
                  <div className="comparison-bar h-11 rounded-lg flex items-center px-4 text-[0.8125rem] font-medium w-[38%] bg-primary text-primary-foreground overflow-hidden">
                    <BarWord />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          VISION & ROADMAP
      ═══════════════════════════════ */}
      <section className="vision relative overflow-hidden py-20 lg:py-24 bg-dark" data-animate-section>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* hero.png brain — full right, strongest opacity here (this is the investor section) */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}hero.png)`,
              backgroundSize: "60% auto",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              opacity: 0.10,
              maskImage: "linear-gradient(to left, black 15%, transparent 65%)",
              WebkitMaskImage: "linear-gradient(to left, black 15%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,hsl(238_62%_48%/0.28),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,hsl(38_94%_50%/0.14),transparent)]" />
        </div>

        <div className="container relative z-10">
          <header className="section-head motion-child mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-accent-amber mb-3 block">
              Vision &amp; Roadmap
            </p>
            <h2 className="font-bold tracking-[-0.03em] mb-3 text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              The Company Brain for AI Automation
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-white/70 mb-4">
              The operating system for how companies work — capturing, enforcing, and improving every
              procedure, then feeding it to AI agents that execute them autonomously.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-white/55">
              Document management is a $50B+ market — but the real opportunity is
              <strong className="text-white/85 font-semibold"> operational compliance infrastructure</strong>.
              Every company with 10+ employees has a process debt they cannot repay manually.
              We&apos;re building the platform that closes it automatically.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {roadmap.map(({ Icon, tag, title, desc }) => (
              <div
                key={title}
                className="vision-stagger p-7 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:border-white/18 hover:bg-white/10 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-[0.625rem] bg-accent-amber/20 text-accent-amber flex items-center justify-center mb-4">
                  <Icon width={22} height={22} strokeWidth={1.75} />
                </div>
                <span className="text-[0.6875rem] font-bold tracking-[0.08em] uppercase text-accent-amber block mb-2">{tag}</span>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-[0.875rem] leading-relaxed text-white/65">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { n: "$50B+", l: "Document management market being disrupted by AI" },
              { n: "10+",   l: "Employees is all it takes to have a process debt problem" },
              { n: "Zero",  l: "Competitors close the loop from writing to execution" },
            ].map(({ n, l }) => (
              <div key={n}>
                <p className="font-extrabold tracking-[-0.04em] text-white mb-1" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>{n}</p>
                <p className="text-[0.9375rem] text-white/60 leading-snug max-w-[16rem] mx-auto">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PRICING
      ═══════════════════════════════ */}
      <Pricing />

      {/* ═══════════════════════════════
          CONNECT (redesigned contact)
      ═══════════════════════════════ */}
      <section id="contact" className="py-20 lg:py-24" data-animate-section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT — pitch */}
            <div className="motion-child lg:sticky lg:top-24">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-accent-teal mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                Let's build together
              </p>
              <h2 className="font-extrabold tracking-[-0.04em] leading-[1.1] text-foreground mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                Whether you're a team ready to ship better SOPs — or an investor who sees the market
              </h2>
              <p className="text-[1.0625rem] leading-[1.65] text-body mb-8">
                We want to talk. Sopsage is early, ambitious, and building the kind of infrastructure
                that every compliance-driven organization will rely on. The right conversations
                happen now — before it's obvious.
              </p>

              {/* Path cards */}
              <div className="flex flex-col gap-3 mb-8">
                <a href="#contact" className="flex gap-4 items-start p-5 rounded-[var(--radius-lg)] border border-border bg-card hover:border-accent-teal/40 hover:shadow-md transition-all duration-200 no-underline group">
                  <div className="w-9 h-9 rounded-lg bg-accent-teal/10 text-accent-teal flex items-center justify-center shrink-0">
                    <IconUsers width={18} height={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[0.875rem] font-bold text-foreground mb-0.5">For teams evaluating Sopsage</p>
                    <p className="text-[0.8125rem] text-body leading-snug">Book a 30-min walkthrough of the real product — editor, Ask AI, approvals, and analytics.</p>
                  </div>
                </a>

                <a href="mailto:yehdhruvkr@gmail.com" className="flex gap-4 items-start p-5 rounded-[var(--radius-lg)] border border-border bg-card hover:border-accent-amber/40 hover:shadow-md transition-all duration-200 no-underline group">
                  <div className="w-9 h-9 rounded-lg bg-accent-amber/10 text-accent-amber flex items-center justify-center shrink-0">
                    <IconMail width={18} height={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[0.875rem] font-bold text-foreground mb-0.5">For investors &amp; partners</p>
                    <p className="text-[0.8125rem] text-body leading-snug">
                      Email us directly at{" "}
                      <span className="text-accent-teal font-medium">yehdhruvkr@gmail.com</span>
                      {" "}— or fill the form and select "Investment discussion."
                    </p>
                  </div>
                </a>
              </div>

              <blockquote className="border-l-[3px] border-accent-teal/40 pl-5 text-[0.9375rem] italic text-muted-foreground leading-relaxed">
                "We are building the infrastructure for how organizations execute — not just document. Every SOP followed, every gap detected, every piece of institutional knowledge preserved. That is the platform."
              </blockquote>
            </div>

            {/* RIGHT — form */}
            <div className="motion-child motion-child-delay">
              <div className="contact-form-card p-8 rounded-[var(--radius-xl)] border border-border bg-card shadow-xl">
                <h3 className="text-[1.25rem] font-bold tracking-[-0.025em] text-foreground mb-1">Start a conversation</h3>
                <p className="text-[0.875rem] text-body mb-6 leading-snug">Fill in a few details and we'll reply within one business day.</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FOOTER
      ═══════════════════════════════ */}
      <footer className="pt-14 pb-8 bg-dark border-t border-white/[0.06] text-[hsl(210_40%_96%)]">
        <div className="container">
          <div className="grid gap-10 mb-10 md:grid-cols-[1.4fr_2fr]">
            <div>
              <div className="mb-3">
                <LogoMark variant="footer" />
              </div>
              <p className="text-[0.875rem] text-[hsl(215_20%_74%)] leading-[1.55] max-w-[20rem]">
                AI-powered SOPs, Ask AI, meetings, approvals, and analytics —
                the full product story from landing page to logged-in session.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {[
                { heading: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "Demo", href: paths.demo, external: true }] },
                { heading: "Application", links: [{ label: "Sign in", href: paths.login, external: true }, { label: "Connect", href: "#contact" }] },
                { heading: "Legal", links: [{ label: "Privacy", to: "/privacy" }, { label: "Terms", to: "/terms" }] },
              ].map(({ heading, links }) => (
                <div key={heading}>
                  <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-[hsl(215_20%_62%)] mb-3">{heading}</h4>
                  {links.map((l) =>
                    "to" in l ? (
                      <Link key={l.label} to={l.to!} className="block text-[0.875rem] text-[hsl(215_20%_82%)] no-underline mb-2 hover:text-white transition-colors duration-150">{l.label}</Link>
                    ) : (
                      <a key={l.label} href={l.href} className="block text-[0.875rem] text-[hsl(215_20%_82%)] no-underline mb-2 hover:text-white transition-colors duration-150"
                        {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {l.label}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-7 border-t border-white/[0.08] text-center text-[0.8125rem] text-[hsl(215_20%_55%)]">
            &copy; {new Date().getFullYear()} Sopsage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
