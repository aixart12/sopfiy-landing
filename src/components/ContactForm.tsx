import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_v7rka5v";
const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_z7m2aea";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "ReFYzDZNKixnNFHfD";
const TO_EMAIL =
  import.meta.env.VITE_CONTACT_TO_EMAIL ?? "yehdhruvkr@gmail.com";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const templateParams = {
      from_name: String(fd.get("name") ?? ""),
      from_email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      role: String(fd.get("role") ?? ""),
      message: String(fd.get("message") ?? ""),
      to_email: TO_EMAIL,
    };

    setSubmitting(true);
    try {
      if (
        SERVICE_ID === "YOUR_SERVICE_ID" ||
        TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        throw new Error("EmailJS not configured");
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSuccess(true);
      form.reset();
      window.setTimeout(() => setSuccess(false), 8000);
    } catch (err) {
      console.error("EmailJS:", err);
      window.alert(
        `Something went wrong. Email us directly at ${TO_EMAIL}`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Your Role</label>
          <select id="role" name="role" required defaultValue="">
            <option value="" disabled>
              Select your role
            </option>
            <option value="manager">Manager</option>
            <option value="director">Director</option>
            <option value="executive">Executive</option>
            <option value="consultant">Consultant</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell us about your needs</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How many SOPs do you manage? What would you like to automate?"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-primary-lg btn-block"
        disabled={submitting}
      >
        <span>{submitting ? "Sending…" : "Request demo"}</span>
        {!submitting ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>
      {success ? (
        <div className="form-success" id="formSuccess">
          <div className="success-icon">✓</div>
          <p>Thank you — we&apos;ll be in touch soon.</p>
        </div>
      ) : null}
    </form>
  );
}
