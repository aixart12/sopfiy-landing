import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

type Props = { title: string; children: ReactNode };

export function LegalPageShell({ title, children }: Props) {
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
              <Link to="/about"   className="nav-link">About</Link>
              <Link to="/privacy" className="nav-link">Privacy</Link>
              <Link to="/terms"   className="nav-link">Terms</Link>
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-[7.5rem] pb-16 lg:pt-[8.5rem] lg:pb-20">
        <div className="container">
          <header className="mb-8">
            <h1 className="font-extrabold tracking-[-0.03em] leading-[1.15] text-foreground"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
              {title}
            </h1>
          </header>
          <article className="max-w-[42rem] text-body text-base leading-[1.65] [&>*+*]:mt-4 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-[1.125rem] [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:text-foreground [&_ul]:mt-3 [&_ul]:pl-5 [&_li+li]:mt-1.5 [&_hr]:my-8 [&_hr]:border-border [&_a]:text-accent-teal [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-[hsl(38_94%_44%)]">
            {children}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-dark border-t border-white/[0.06]">
        <div className="container">
          <div className="text-center text-[0.8125rem] text-[hsl(215_20%_55%)]">
            <p>
              &copy; {new Date().getFullYear()} Sopsage.{" "}
              <Link to="/privacy" className="text-[hsl(215_20%_70%)] no-underline hover:text-white transition-colors duration-150">Privacy</Link>
              {" · "}
              <Link to="/terms"   className="text-[hsl(215_20%_70%)] no-underline hover:text-white transition-colors duration-150">Terms</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
