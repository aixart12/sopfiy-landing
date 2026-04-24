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
        10–25 person ops teams — <strong>our sweet spot</strong>
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

export function Pricing() {
  return (
    <section id="pricing" className="pricing" data-animate-section>
      <div className="container">
        <header className="section-head motion-section-child">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Plans for teams of every size</h2>
          <p className="section-desc">
            That&apos;s our anchor — not Notion&apos;s $10/seat. Tap a row to
            talk through seats, annual terms, and add-ons.
          </p>
        </header>

        <div className="pricing-table-scroll motion-section-child">
          <div className="pricing-table-card">
            <div className="pricing-grid" aria-label="Pricing plans">
            <div className="pricing-grid-row pricing-grid-row--head" role="row">
              <div className="pricing-cell pricing-cell--head" role="columnheader">
                Plan
              </div>
              <div className="pricing-cell pricing-cell--head" role="columnheader">
                Price (monthly)
              </div>
              <div className="pricing-cell pricing-cell--head" role="columnheader">
                Annual (20% off)
              </div>
              <div className="pricing-cell pricing-cell--head" role="columnheader">
                Seats
              </div>
              <div
                className="pricing-cell pricing-cell--head pricing-cell--wide"
                role="columnheader"
              >
                Who it&apos;s for
              </div>
            </div>

            {plans.map((plan) => (
              <Link
                key={plan.id}
                to="/contact"
                className={`pricing-grid-row pricing-grid-row--plan${plan.recommended ? " pricing-grid-row--featured" : ""}`}
                aria-label={`Choose ${plan.name} plan — go to contact`}
              >
                <div className="pricing-cell pricing-cell--plan">
                  <span className="pricing-plan-name">
                    {plan.name}
                    {plan.recommended ? (
                      <span className="pricing-star" aria-hidden>
                        ★
                      </span>
                    ) : null}
                  </span>
                </div>
                <div className="pricing-cell">
                  {plan.monthly}
                </div>
                <div className="pricing-cell">
                  {plan.annual}
                </div>
                <div className="pricing-cell">
                  {plan.seats}
                </div>
                <div className="pricing-cell pricing-cell--wide pricing-cell--audience">
                  {plan.audience}
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>

        <div className="pricing-footnote motion-section-child">
          <p className="pricing-footnote-lead">
            Plus two revenue multipliers most SOP tools don&apos;t charge for and
            should:
          </p>
          <ul className="pricing-addons">
            <li>
              <strong>Compliance Add-On — $199/mo</strong> (SOC2/ISO evidence
              export, control mapping, auditor-ready packages.)
            </li>
            <li>
              <strong>Rollout &amp; enablement pack</strong> — training hours and
              change-management templates scoped to your plan (priced on
              contact).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
