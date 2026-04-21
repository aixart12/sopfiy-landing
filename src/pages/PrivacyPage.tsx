import { LegalPageShell } from "../components/LegalPageShell";

const EFFECTIVE_DATE = "April 21, 2026";
const CONTACT_EMAIL = "dhruv@sopsage.com";
const WEBSITE = "https://sopsage.com";
const APP_URL = "https://app.sopsage.com";

export function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> {EFFECTIVE_DATE}
        <br />
        <strong>Website:</strong>{" "}
        <a href={WEBSITE} target="_blank" rel="noopener noreferrer">
          {WEBSITE}
        </a>
        <br />
        <strong>App:</strong>{" "}
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          {APP_URL}
        </a>
      </p>

      <h2>1. Introduction</h2>
      <p>
        SOPSage (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your
        privacy. This Privacy Policy explains how we collect, use, and protect
        your information when you use our application.
      </p>

      <hr />

      <h2>2. Information We Collect</h2>
      <p>When you sign in using Google OAuth, we may collect:</p>
      <ul>
        <li>Basic profile information (name, email address)</li>
        <li>
          Google Calendar data (events, schedules) — only with your explicit
          permission
        </li>
      </ul>

      <hr />

      <h2>3. How We Use Your Information</h2>
      <p>We use your data strictly to:</p>
      <ul>
        <li>Authenticate your account</li>
        <li>Display and manage your calendar within the app</li>
        <li>Provide features related to scheduling and productivity</li>
      </ul>
      <p>
        We <strong>do NOT</strong>:
      </p>
      <ul>
        <li>Sell your data</li>
        <li>Share your data with third parties for marketing</li>
        <li>Use your data for advertising</li>
      </ul>

      <hr />

      <h2>4. Google Calendar Data Usage (Important)</h2>
      <p>
        Our app accesses Google Calendar data only to provide core
        functionality.
      </p>
      <ul>
        <li>We only access data you explicitly grant permission to</li>
        <li>We do not store calendar data permanently</li>
        <li>We do not share your calendar data with third parties</li>
        <li>
          We do not use this data for any purpose other than app functionality
        </li>
      </ul>
      <p>
        Our use of information received from Google APIs adheres to the{" "}
        <strong>Google API Services User Data Policy</strong>, including the
        Limited Use requirements.
      </p>

      <hr />

      <h2>5. Data Storage &amp; Security</h2>
      <p>We take reasonable measures to protect your data:</p>
      <ul>
        <li>Secure authentication via Google OAuth</li>
        <li>Encrypted connections (HTTPS)</li>
        <li>Limited access to user data</li>
      </ul>

      <hr />

      <h2>6. Data Retention</h2>
      <p>
        We retain your data only as long as necessary to provide our services.
        You can request deletion at any time.
      </p>

      <hr />

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your data</li>
        <li>Request deletion of your data</li>
        <li>Revoke Google access anytime via your Google Account settings</li>
      </ul>

      <hr />

      <h2>8. Third-Party Services</h2>
      <p>
        We use Google APIs. Your use of Google services is subject to
        Google&apos;s Privacy Policy.
      </p>

      <hr />

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions, contact us at:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <hr />

      <h2>10. Updates</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page.
      </p>

      <hr />

      <p>
        <strong>By using our app, you agree to this Privacy Policy.</strong>
      </p>
    </LegalPageShell>
  );
}
