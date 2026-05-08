import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Plan = {
  id: string;
  name: string;
  recommended?: boolean;
  monthly: string;
  annual: string;
  seats: string;
  audience: ReactNode;
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: "$49/mo",
    annual: "$39/mo",
    seats: "Up to 5",
    audience: "Solo founders, 1–5 person teams testing the waters",
  },
  {
    id: "pro",
    name: "Pro",
    recommended: true,
    monthly: "$149/mo",
    annual: "$119/mo",
    seats: "Up to 15",
    audience: (
      <>
        10–25 person ops teams — <strong className="text-foreground font-semibold">our sweet spot</strong>
      </>
    ),
  },
  {
    id: "business",
    name: "Business",
    monthly: "$399/mo",
    annual: "$319/mo",
    seats: "Up to 50",
    audience: "25–80 person companies, SOC2 track",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: "Custom (starts $1,500/mo)",
    annual: "Annual only",
    seats: "Unlimited",
    audience: "80+ employees, SSO, DPA, audit pack",
  },
];

const COL_HEADS = ["Plan", "Price (monthly)", "Annual (20% off)", "Seats", "Who it's for"];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-24" data-animate-section>
      <div className="container">
        <header className="section-head motion-child">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Plans for teams of every size</h2>
          <p className="section-desc">
            That&apos;s our anchor — not Notion&apos;s $10/seat. Tap a row to talk through
            seats, annual terms, and add-ons.
          </p>
        </header>

        {/* Scrollable table */}
        <div className="motion-child overflow-x-auto mx-[-0.25rem] px-[0.25rem] -webkit-overflow-scrolling-touch">
          <div className="rounded-[var(--radius-lg)] border border-border bg-card shadow-sm px-4 py-2 sm:px-6 sm:py-3 min-w-[52rem] max-w-full">

            {/* Header row */}
            <div className="grid grid-cols-[minmax(5.5rem,0.9fr)_minmax(5.5rem,0.95fr)_minmax(5.5rem,0.95fr)_minmax(4.5rem,0.75fr)_minmax(11rem,2fr)]">
              {COL_HEADS.map((h) => (
                <div key={h} className="text-[0.6875rem] font-semibold tracking-[0.06em] uppercase text-muted-foreground py-3.5 pr-1.5 border-b border-border">
                  {h}
                </div>
              ))}
            </div>

            {/* Plan rows */}
            {plans.map((plan) => (
              <Link
                key={plan.id}
                to="/contact"
                aria-label={`Choose ${plan.name} plan`}
                className={`grid grid-cols-[minmax(5.5rem,0.9fr)_minmax(5.5rem,0.95fr)_minmax(5.5rem,0.95fr)_minmax(4.5rem,0.75fr)_minmax(11rem,2fr)] no-underline outline-none cursor-pointer transition-colors duration-200 last:[&>div]:border-b-0 group${
                  plan.recommended
                    ? " hover:[&>div]:bg-[hsl(168_65%_40%/0.10)]"
                    : " hover:[&>div]:bg-muted/35"
                }`}
              >
                {/* Plan name cell */}
                <div className={`flex items-center py-4 pr-1.5 border-b border-border/85 text-[0.9375rem] leading-snug font-semibold text-foreground${
                  plan.recommended ? " bg-[hsl(168_65%_40%/0.06)]" : ""
                }`}>
                  <span className="inline-flex items-center gap-1.5">
                    {plan.name}
                    {plan.recommended && (
                      <span className="text-[0.7em] text-accent-teal leading-none -translate-y-[0.05em]" aria-hidden>★</span>
                    )}
                  </span>
                </div>

                {/* Monthly */}
                <div className={`py-4 pr-1.5 border-b border-border/85 text-[0.9375rem] leading-snug text-foreground${
                  plan.recommended ? " bg-[hsl(168_65%_40%/0.06)]" : ""
                }`}>
                  {plan.monthly}
                </div>

                {/* Annual */}
                <div className={`py-4 pr-1.5 border-b border-border/85 text-[0.9375rem] leading-snug text-foreground${
                  plan.recommended ? " bg-[hsl(168_65%_40%/0.06)]" : ""
                }`}>
                  {plan.annual}
                </div>

                {/* Seats */}
                <div className={`py-4 pr-1.5 border-b border-border/85 text-[0.9375rem] leading-snug text-foreground${
                  plan.recommended ? " bg-[hsl(168_65%_40%/0.06)]" : ""
                }`}>
                  {plan.seats}
                </div>

                {/* Audience */}
                <div className={`py-4 border-b border-border/85 text-[0.9375rem] leading-snug text-body font-medium${
                  plan.recommended ? " bg-[hsl(168_65%_40%/0.06)]" : ""
                }`}>
                  {plan.audience}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="motion-child mt-9 max-w-[40rem] mx-auto text-center text-base leading-relaxed text-body">
          <p className="mb-3">
            Plus two revenue multipliers most SOP tools don&apos;t charge for — and should:
          </p>
          <ul className="list-none p-0 flex flex-col gap-2.5 text-left">
            <li>
              <strong className="text-foreground font-semibold">Compliance Add-On — $199/mo</strong>
              {" "}(SOC2/ISO evidence export, control mapping, auditor-ready packages.)
            </li>
            <li>
              <strong className="text-foreground font-semibold">Rollout &amp; enablement pack</strong>
              {" "}— training hours and change-management templates scoped to your plan (priced on contact).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
