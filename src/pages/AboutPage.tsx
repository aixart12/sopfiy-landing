import { Link } from "react-router-dom";
import { LogoMark } from "../components/LogoMark";
import { paths } from "../config";

export function AboutPage() {
  return (
    <div className="page-bg relative min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[1002] bg-white/72 backdrop-blur-2xl border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between py-[0.875rem] gap-4">
            <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-[1.125rem] text-foreground no-underline rounded-lg" aria-label="Sopsage home">
              <LogoMark />
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/privacy" className="nav-link">Privacy</Link>
              <Link to="/terms" className="nav-link">Terms</Link>
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════
          INTRO
      ═══════════════════════════════ */}
      <main className="pt-[7.5rem] lg:pt-[8.5rem]">
        <section className="pb-16 lg:pb-20">
          <div className="container">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-accent-teal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
              About Sopsage
            </p>
            <h1 className="font-extrabold tracking-[-0.035em] leading-[1.12] text-foreground mb-5 max-w-[38rem]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.875rem)" }}>
              We're building the operating system for how companies actually work.
            </h1>
            <p className="text-[1.0625rem] leading-[1.65] text-body max-w-[38rem]">
              Sopsage started from a simple observation: companies write down how work should be
              done, and then work happens some other way entirely. We're closing that gap with
              AI agents that draft, route, and enforce procedures — so process lives in reality,
              not just in a document nobody opens.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════
            FOUNDER
        ═══════════════════════════════ */}
        <section className="py-16 lg:py-20 border-y border-border/60 bg-muted/40">
          <div className="container">
            <div className="grid gap-10 items-start lg:grid-cols-[auto_1fr] lg:gap-12 max-w-[46rem]">
              {/* Avatar */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[hsl(238_55%_62%)] text-primary-foreground flex items-center justify-center text-[1.75rem] font-extrabold tracking-tight shadow-lg">
                D
              </div>

              <div>
                <h2 className="text-[1.0625rem] font-bold text-foreground">Dhruv</h2>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[0.8125rem] font-semibold text-accent-teal">Founder, Sopsage</p>
                  <a
                    href="https://www.linkedin.com/in/yehkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-body no-underline hover:text-accent-teal transition-colors duration-150"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <p className="text-[0.9375rem] leading-[1.65] text-body mb-4">
                  I come from a technical, AI-first background, and the more I looked at how
                  companies handle process and compliance, the more it looked like a solved
                  problem hiding an unsolved one: the documentation exists, but nothing checks
                  whether it's actually followed. Every tool I found stopped at storage —
                  a wiki, a PDF, a checklist. None of them closed the loop.
                </p>
                <p className="text-[0.9375rem] leading-[1.65] text-body mb-4">
                  Sopsage is my attempt to close it — using AI agents that don't just help write
                  procedures, but watch execution, catch drift before it becomes risk, and turn
                  compliance into a byproduct of daily work instead of a quarterly scramble.
                </p>
                <p className="text-[0.9375rem] leading-[1.65] text-body">
                  I'm hands-on with our first customers — if you're evaluating Sopsage, you'll
                  likely talk to me directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            CTA
        ═══════════════════════════════ */}
        <section className="py-16 lg:py-20 text-center">
          <div className="container">
            <h2 className="section-title mb-3">Want to talk?</h2>
            <p className="section-desc mb-8 max-w-[32rem] mx-auto">
              Whether you're a team evaluating Sopsage or an investor who sees the market —
              reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn btn-primary btn-primary-lg">Get in touch</Link>
              <a href={paths.demo} className="btn btn-secondary btn-secondary-lg" target="_blank" rel="noopener noreferrer">
                Take a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-dark border-t border-white/[0.06]">
        <div className="container">
          <div className="text-center text-[0.8125rem] text-[hsl(215_20%_55%)]">
            <p>
              &copy; {new Date().getFullYear()} Sopsage.{" "}
              <Link to="/privacy" className="text-[hsl(215_20%_70%)] no-underline hover:text-white transition-colors duration-150">Privacy</Link>
              {" · "}
              <Link to="/terms" className="text-[hsl(215_20%_70%)] no-underline hover:text-white transition-colors duration-150">Terms</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
