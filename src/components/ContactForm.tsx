import { FormEvent, useState } from "react";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? "service_v7rka5v";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_z7m2aea";
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? "ReFYzDZNKixnNFHfD";
const TO_EMAIL    = import.meta.env.VITE_CONTACT_TO_EMAIL    ?? "yehdhruvkr@gmail.com";

const INQUIRY_OPTIONS = [
  { value: "demo",        label: "Book a product demo" },
  { value: "investment",  label: "Investment / funding discussion" },
  { value: "partnership", label: "Strategic partnership or integration" },
  { value: "enterprise",  label: "Enterprise / custom plan" },
  { value: "other",       label: "Other" },
] as const;

const ROLE_OPTIONS = [
  "Manager", "Director", "VP / C-Suite", "Founder / CEO",
  "Investor", "Consultant", "Other",
];

const PLACEHOLDERS: Record<string, string> = {
  demo:        "Tell us about your team size, current SOP process, and what you'd like to improve.",
  investment:  "Share your background and what excites you about the Sopsage opportunity.",
  partnership: "Describe the integration or partnership you have in mind.",
  enterprise:  "How many SOPs does your org manage? Any compliance or SSO requirements?",
  other:       "What's on your mind?",
};

const SUBMIT_LABELS: Record<string, string> = {
  demo:        "Request a demo →",
  investment:  "Start the conversation →",
  partnership: "Propose a partnership →",
  enterprise:  "Talk to us →",
  other:       "Send message →",
};

export function ContactForm() {
  const [success,     setSuccess]     = useState(false);
  const [submitting,  setSubmitting]  = useState(false);
  const [inquiryType, setInquiryType] = useState("demo");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd   = new FormData(form);

    setSubmitting(true);
    try {
      if (SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID" || PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        throw new Error("EmailJS not configured");
      }
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        inquiry_type: fd.get("inquiry_type") ?? "",
        from_name:    fd.get("name")         ?? "",
        from_email:   fd.get("email")        ?? "",
        company:      fd.get("company")      ?? "",
        role:         fd.get("role")         ?? "",
        message:      fd.get("message")      ?? "",
        to_email:     TO_EMAIL,
      }, { publicKey: PUBLIC_KEY });

      setSuccess(true);
      form.reset();
      setInquiryType("demo");
      setTimeout(() => setSuccess(false), 9000);
    } catch {
      alert(`Something went wrong. Email us directly at ${TO_EMAIL}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>

      {/* Inquiry type — top of form, drives context */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="inquiry_type" className="field-label">What brings you here?</label>
        <select
          id="inquiry_type"
          name="inquiry_type"
          required
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="field-input"
        >
          {INQUIRY_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="field-label">Full Name</label>
          <input id="name" name="name" type="text" required className="field-input" placeholder="Alex Johnson" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="field-label">Work Email</label>
          <input id="email" name="email" type="email" required className="field-input" placeholder="alex@company.com" />
        </div>
      </div>

      {/* Company + Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="field-label">Company</label>
          <input id="company" name="company" type="text" required className="field-input" placeholder="Acme Inc." />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="role" className="field-label">Your Role</label>
          <select id="role" name="role" required defaultValue="" className="field-input">
            <option value="" disabled>Select role…</option>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r.toLowerCase()}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="field-label">Tell us more</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input resize-y min-h-[110px]"
          placeholder={PLACEHOLDERS[inquiryType] ?? PLACEHOLDERS.other}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary btn-primary-lg btn-block mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : (SUBMIT_LABELS[inquiryType] ?? "Send →")}
      </button>

      {/* Success */}
      {success && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-[calc(var(--radius)-2px)] bg-success/8 border border-success/20 text-[hsl(142_76%_28%)] text-[0.9375rem]">
          <div className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center font-bold text-sm shrink-0">✓</div>
          <p>Thank you — we'll be in touch within one business day.</p>
        </div>
      )}
    </form>
  );
}
