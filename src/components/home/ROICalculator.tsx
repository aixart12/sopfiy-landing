import type { ComponentType, SVGProps } from "react";
import { useMemo, useState } from "react";
import { IconClock, IconDollar, IconFileText, IconUserCheck, IconUsers } from "../../icons";

/* ─── Assumptions (blended labor-hour costs, manual vs. Sopsage) ───
   Adjust these constants if the underlying cost model changes. */
const SOP_MIN = 1, SOP_MAX = 400, SOP_DEFAULT = 142;
const HIRE_MIN = 1, HIRE_MAX = 100, HIRE_DEFAULT = 25;

type Row = {
  key: string;
  label: string;
  unitLabel: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: "teal" | "primary" | "amber";
  units: number;
  hoursTraditional: number;
  hoursSopsage: number;
  ratePerHour: number;
};

const ACCENTS = {
  teal:    { bg: "bg-accent-teal/12",   text: "text-accent-teal",           bar: "bg-accent-teal" },
  primary: { bg: "bg-primary/10",       text: "text-primary",               bar: "bg-primary" },
  amber:   { bg: "bg-accent-amber/14",  text: "text-[hsl(30_90%_38%)]",     bar: "bg-accent-amber" },
} as const;

const fmtHours = (n: number) => Math.round(n).toLocaleString("en-US");
const fmtMoney = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function ROICalculator() {
  const [sopsPerYear, setSopsPerYear] = useState(SOP_DEFAULT);
  const [hiresPerYear, setHiresPerYear] = useState(HIRE_DEFAULT);

  const rows: Row[] = useMemo(
    () => [
      {
        key: "sop", label: "SOP creation & updates", unitLabel: "SOPs/year",
        Icon: IconFileText, accent: "teal",
        units: sopsPerYear, hoursTraditional: 20, hoursSopsage: 1, ratePerHour: 30,
      },
      {
        key: "onboard", label: "New-hire onboarding", unitLabel: "new hires/year",
        Icon: IconUserCheck, accent: "primary",
        units: hiresPerYear, hoursTraditional: 40, hoursSopsage: 2, ratePerHour: 24,
      },
      {
        key: "training", label: "Manager training time", unitLabel: "new hires/year",
        Icon: IconUsers, accent: "amber",
        units: hiresPerYear, hoursTraditional: 20, hoursSopsage: 1, ratePerHour: 35,
      },
    ],
    [sopsPerYear, hiresPerYear],
  );

  const computed = rows.map((r) => {
    const traditionalHours = r.units * r.hoursTraditional;
    const sopsageHours = r.units * r.hoursSopsage;
    const savedHours = traditionalHours - sopsageHours;
    const savedCost = savedHours * r.ratePerHour;
    return { ...r, traditionalHours, sopsageHours, savedHours, savedCost };
  });

  const maxTraditionalHours = Math.max(...computed.map((c) => c.traditionalHours), 1);
  const totalHours = computed.reduce((s, c) => s + c.savedHours, 0);
  const totalCost = computed.reduce((s, c) => s + c.savedCost, 0);

  return (
    <section id="roi" className="py-20 lg:py-24 border-y border-border/60 bg-muted/40" data-animate-section>
      <div className="container">
        <header className="section-head motion-child">
          <p className="section-eyebrow">Return on investment</p>
          <h2 className="section-title">Unlock your time. See the savings, live.</h2>
          <p className="section-desc">
            Drag the sliders to match your team — Sopsage automates the drafting, routing,
            and re-training that manual SOPs cost you every year.
          </p>
        </header>

        <div className="motion-child motion-child-delay grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-0 rounded-[var(--radius-xl)] border border-border bg-card shadow-xl overflow-hidden max-w-[64rem] mx-auto">

          {/* LEFT — inputs */}
          <div className="p-7 sm:p-9 border-b lg:border-b-0 lg:border-r border-border">
            <h3 className="text-[1.0625rem] font-bold text-foreground mb-6">Tell us about your team</h3>

            <SliderField
              label="SOPs created or updated per year"
              value={sopsPerYear}
              min={SOP_MIN}
              max={SOP_MAX}
              onChange={setSopsPerYear}
              accent="teal"
            />
            <SliderField
              label="New hires onboarded per year"
              value={hiresPerYear}
              min={HIRE_MIN}
              max={HIRE_MAX}
              onChange={setHiresPerYear}
              accent="primary"
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                  <IconClock width={16} height={16} strokeWidth={1.75} />
                </div>
                <p className="text-[1.375rem] font-extrabold tracking-[-0.02em] text-foreground leading-none mb-1">
                  {fmtHours(totalHours)}
                </p>
                <p className="text-[0.75rem] font-medium text-body leading-snug">Hours saved / year</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="w-8 h-8 rounded-lg bg-[hsl(142_76%_36%/0.12)] text-[hsl(142_65%_30%)] flex items-center justify-center mb-2.5">
                  <IconDollar width={16} height={16} strokeWidth={1.75} />
                </div>
                <p className="text-[1.375rem] font-extrabold tracking-[-0.02em] text-foreground leading-none mb-1">
                  {fmtMoney(totalCost)}
                </p>
                <p className="text-[0.75rem] font-medium text-body leading-snug">Saved / year</p>
              </div>
            </div>

            <p className="mt-5 text-[0.75rem] text-muted-foreground leading-relaxed">
              Estimates use blended labor-hour costs for authoring, onboarding, and manager
              training time. Your mileage will vary — book a demo for a tailored model.
            </p>
          </div>

          {/* RIGHT — breakdown */}
          <div className="p-7 sm:p-9 flex flex-col gap-6 bg-background/60">
            {computed.map((c) => {
              const palette = ACCENTS[c.accent];
              const traditionalPct = Math.max((c.traditionalHours / maxTraditionalHours) * 100, 2);
              const sopsagePct = Math.max((c.sopsageHours / maxTraditionalHours) * 100, 1.5);
              return (
                <div key={c.key}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${palette.bg} ${palette.text}`}>
                      <c.Icon width={16} height={16} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.875rem] font-bold text-foreground truncate">{c.label}</p>
                      <p className="text-[0.6875rem] text-muted-foreground">{c.units.toLocaleString("en-US")} {c.unitLabel}</p>
                    </div>
                    <div className="ml-auto text-right shrink-0">
                      <p className={`text-[0.9375rem] font-extrabold ${palette.text}`}>{fmtHours(c.savedHours)} hrs</p>
                      <p className="text-[0.6875rem] font-semibold text-muted-foreground">{fmtMoney(c.savedCost)} saved</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <BarRow label="Manual" pct={traditionalPct} value={`${fmtHours(c.traditionalHours)} hrs`} track="bg-foreground/10" fill="bg-foreground/35" />
                    <BarRow label="Sopsage" pct={sopsagePct} value={`${fmtHours(c.sopsageHours)} hrs`} track="bg-foreground/10" fill={palette.bar} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Slider field ─── */
function SliderField({
  label, value, min, max, onChange, accent,
}: {
  label: string; value: number; min: number; max: number;
  onChange: (v: number) => void; accent: "teal" | "primary";
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const accentColor = accent === "teal" ? "var(--color-accent-teal)" : "var(--color-primary)";
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between gap-3 mb-2">
        <label className="text-[0.8125rem] font-semibold text-foreground">{label}</label>
        <span className="text-[0.8125rem] font-bold tabular-nums px-2 py-0.5 rounded-md bg-muted text-foreground min-w-[2.75rem] text-center">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
        style={{ ["--roi-fill" as string]: `${pct}%`, ["--roi-accent" as string]: accentColor }}
        aria-label={label}
      />
      <div className="flex justify-between text-[0.6875rem] text-muted-foreground mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

/* ─── Comparison bar row ─── */
function BarRow({
  label, pct, value, track, fill,
}: {
  label: string; pct: number; value: string; track: string; fill: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[0.6875rem] font-medium text-muted-foreground w-[3.75rem] shrink-0">{label}</span>
      <div className={`relative flex-1 h-2 rounded-full overflow-hidden ${track}`}>
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-[width] duration-500 ease-out ${fill}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[0.6875rem] font-semibold text-foreground w-[4.25rem] shrink-0 text-right tabular-nums">{value}</span>
    </div>
  );
}
