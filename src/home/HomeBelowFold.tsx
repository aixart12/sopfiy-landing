import type { ComponentType, SVGProps } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ContactForm } from "../components/ContactForm";
import { DemoVideo } from "../components/DemoVideo";
import { Pricing } from "../components/home/Pricing";
import { LogoMark } from "../components/LogoMark";
import { paths } from "../config";
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
} from "../icons";

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

export function HomeBelowFold() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname !== "/contact") return;
    const target = document.getElementById("contact");
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-animate-section]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = document.querySelector(".time-comparison");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll<HTMLElement>(".comparison-bar").forEach((bar) => {
            const w = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
              bar.style.width = w;
            }, 80);
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
{/* ═══════════════════════════════
    PROBLEM STRIP
═══════════════════════════════ */}
<section className="problem-strip py-14 border-y border-border/60 bg-muted/40" data-animate-section>
  <div className="container">
    <h2 className="sr-only">Where written procedures stop working</h2>
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
        backgroundImage: `url(${import.meta.env.BASE_URL}hero.webp)`,
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
        backgroundImage: `url(${import.meta.env.BASE_URL}hero.webp)`,
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
          { name: "Confluence / Notion", highlight: false, vals: ["no","no","no","no","no"] },
          { name: "Process Street",      highlight: false, vals: ["no","partial","partial","no","no"] },
          { name: "Trainual",            highlight: false, vals: ["no","no","no","no","no"] },
          { name: "MasterControl / Veeva", highlight: false, vals: ["no","no","partial","no","yes"] },
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
        backgroundImage: `url(${import.meta.env.BASE_URL}hero.webp)`,
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
    </>
  );
}
