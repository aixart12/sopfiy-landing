import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <div className="page-bg">
      <nav className="nav legal-nav">
        <div className="container nav-inner">
          <Link to="/" className="logo" aria-label="SOPSAGE home">
            <LogoMark />
          </Link>
          <div className="legal-nav-links">
            <Link className="nav-link" to="/privacy">
              Privacy
            </Link>
            <Link className="nav-link" to="/terms">
              Terms
            </Link>
            <Link className="btn btn-secondary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </nav>

      <main className="legal-main">
        <div className="container">
          <header className="legal-main-header">
            <h1 className="legal-main-title">{title}</h1>
          </header>
          <article className="legal-doc">{children}</article>
        </div>
      </main>

      <footer className="footer legal-footer">
        <div className="container">
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Sopsage.{" "}
              <Link to="/privacy">Privacy</Link>
              {" · "}
              <Link to="/terms">Terms</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
