import { LegalPageShell } from "../components/LegalPageShell";

const EFFECTIVE_DATE = "April 21, 2026";
const CONTACT_EMAIL = "dhruv@sopsage.com";
const WEBSITE = "https://sopsage.com";

export function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE}
        <br />
        <strong>Website:</strong>{" "}
        <a href={WEBSITE} target="_blank" rel="noopener noreferrer">
          {WEBSITE}
        </a>
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using SOPSage, you agree to these Terms of Service.</p>

      <hr />

      <h2>2. Use of Service</h2>
      <p>You agree to:</p>
      <ul>
        <li>Use the service only for lawful purposes</li>
        <li>Not misuse, disrupt, or attempt to hack the system</li>
        <li>Not use the service to violate any laws</li>
      </ul>

      <hr />

      <h2>3. User Accounts</h2>
      <ul>
        <li>You are responsible for your account</li>
        <li>Keep your login secure</li>
        <li>
          We are not responsible for unauthorized access due to your negligence
        </li>
      </ul>

      <hr />

      <h2>4. Google Integration</h2>
      <p>
        Our app integrates with Google services (e.g., Google Calendar). By
        using these features, you agree that:
      </p>
      <ul>
        <li>You grant us permission to access selected Google data</li>
        <li>We use this data only to provide app functionality</li>
      </ul>

      <hr />

      <h2>5. Service Availability</h2>
      <p>
        We may modify, suspend, or discontinue the service at any time without
        notice.
      </p>

      <hr />

      <h2>6. Limitation of Liability</h2>
      <p>We are not liable for:</p>
      <ul>
        <li>Data loss</li>
        <li>Service interruptions</li>
        <li>Any indirect or consequential damages</li>
      </ul>
      <p>Use the service at your own risk.</p>

      <hr />

      <h2>7. Termination</h2>
      <p>We may suspend or terminate your access if you violate these terms.</p>

      <hr />

      <h2>8. Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use means you accept
        the changes.
      </p>

      <hr />

      <h2>9. Contact</h2>
      <p>
        For any questions:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <hr />

      <p>
        <strong>By using SOPSage, you agree to these Terms.</strong>
      </p>
    </LegalPageShell>
  );
}
