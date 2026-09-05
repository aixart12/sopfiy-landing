import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "./components/LogoMark";
import { paths } from "./config";

const HomeBelowFold = lazy(() =>
  import("./home/HomeBelowFold").then((m) => ({ default: m.HomeBelowFold })),
);

/* ─── Nav links ─── */
const NAV_LINKS = [
  { href: "#features",  label: "Features" },
  { href: "#why",       label: "Why Us" },
  { href: paths.demo,   label: "Demo" },
  { href: "#benefits",  label: "Outcomes" },
  { href: "#offer",     label: "Offer" },
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
            <p className="text-[0.5625rem] font-bold tracking-[0.1em] uppercase text-[hsl(238_18%_38%)] mb-1.5 px-1.5">AI Workflows</p>
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
          <span className="text-[0.6875rem] font-bold text-[hsl(142_72%_26%)] mb-0.5">↑ 12%</span>
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
  const [navShadow, setNavShadow] = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

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
                <Link to="/about" className="nav-link">About</Link>
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
          <Link to="/about" className="block px-4 py-[0.875rem] text-base font-semibold text-foreground no-underline rounded-[0.625rem] hover:bg-muted/70 transition-colors duration-150" onClick={() => setMenuOpen(false)}>
            About
          </Link>
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

      <Suspense fallback={<div className="min-h-[48rem]" aria-hidden />}>
        <HomeBelowFold />
      </Suspense>

    </div>
  );
}
