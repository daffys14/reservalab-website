import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservalab vs. Square Appointments",
  description:
    "Square needs hardware. You already have an iPhone. See how reservalab compares to Square Appointments for salon owners.",
  openGraph: {
    title: "reservalab vs. Square Appointments | reservalab",
    description:
      "Square needs hardware. You already have an iPhone. See how reservalab compares to Square Appointments for salon owners.",
  },
};

const rows: { feature: string; reservalab: string | boolean; square: string | boolean }[] = [
  { feature: "Monthly fee", reservalab: "$29 founding / $79 standard", square: "$29–$69/month" },
  { feature: "Tap to Pay", reservalab: true, square: "Requires Square Reader" },
  { feature: "Hardware required", reservalab: false, square: true },
  { feature: "iOS-native app", reservalab: "Native SwiftUI", square: "Web-wrapped" },
  { feature: "Offline mode", reservalab: "Full offline sync", square: "Requires internet" },
  { feature: "Client data ownership", reservalab: "Full export anytime", square: "Limited" },
  { feature: "Multi-location", reservalab: "Built in", square: "Additional cost" },
  { feature: "Free booking page subdomain", reservalab: "yourname.reservalab.com", square: "Varies" },
  { feature: "Custom domain for booking page", reservalab: "Included in Standard", square: "Not offered" },
];

const callouts = [
  {
    heading: "No hardware means no waiting.",
    body: "No waiting for shipping, no charging readers, no 'the reader isn't connecting' at 9am on a Saturday. Your iPhone is already there. It's already charged. It already works.",
  },
  {
    heading: "Native iOS means milliseconds, not seconds.",
    body: "Native iOS means the app responds in milliseconds, not seconds. Every scroll, every tap, every transition is instant. Your clients notice when software is slow. They also notice when it isn't.",
  },
  {
    heading: "Your client list is yours.",
    body: "Export it anytime. No hostage data. Your client relationships, visit histories, formulas, and contact details belong to your salon — not to your software vendor.",
  },
];

function YesIcon() {
  return (
    <span
      className="inline-flex w-6 h-6 rounded-full items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "var(--success)" }}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </span>
  );
}

function NoIcon() {
  return (
    <span
      className="inline-flex w-6 h-6 rounded-full items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "rgba(239,68,68,0.10)", color: "var(--danger)" }}
    >
      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="3" x2="9" y2="9" />
        <line x1="9" y1="3" x2="3" y2="9" />
      </svg>
    </span>
  );
}

function CellValue({ val, accent }: { val: string | boolean; accent?: boolean }) {
  if (val === true) return (
    <span className="flex items-center gap-1.5">
      <YesIcon />
      <span className="text-sm" style={{ color: "var(--ink)" }}>Yes</span>
    </span>
  );
  if (val === false) return (
    <span className="flex items-center gap-1.5">
      <NoIcon />
      <span className="text-sm" style={{ color: "var(--ink-muted)" }}>None</span>
    </span>
  );
  return (
    <span className="text-sm" style={{ color: accent ? "var(--ink)" : "var(--ink-muted)" }}>
      {val}
    </span>
  );
}

export default function CompareSquarePage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10" style={{ color: "var(--ink-muted)" }}>
          <Link href="/" style={{ color: "var(--ink-subtle)" }}>
            Home
          </Link>
          <span style={{ color: "var(--ink-subtle)" }}>/</span>
          <span>vs. Square</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Comparison
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Square needs hardware.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              You already have an iPhone.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            Square Appointments is built around card readers and web apps. reservalab is built
            around the iPhone you already carry.
          </p>
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl border overflow-hidden mb-16"
          style={{ borderColor: "var(--line)" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 border-b"
            style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
          >
            <div className="px-5 py-4 text-sm font-semibold" style={{ color: "var(--ink-subtle)" }}>
              Feature
            </div>
            <div
              className="px-5 py-4 text-sm font-semibold border-l"
              style={{ borderColor: "var(--line)", color: "var(--accent)" }}
            >
              reservalab
            </div>
            <div
              className="px-5 py-4 text-sm font-semibold border-l"
              style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
            >
              Square Appointments
            </div>
          </div>

          {/* Table rows */}
          <div className="divide-y" style={{ borderColor: "var(--line)" }}>
            {rows.map((row) => (
              <div key={row.feature} className="grid grid-cols-3">
                <div className="px-5 py-4 text-sm" style={{ color: "var(--ink-muted)" }}>
                  {row.feature}
                </div>
                <div
                  className="px-5 py-4 border-l"
                  style={{ borderColor: "var(--line)", backgroundColor: "rgba(245,166,35,0.03)" }}
                >
                  <CellValue val={row.reservalab} accent />
                </div>
                <div className="px-5 py-4 border-l" style={{ borderColor: "var(--line)" }}>
                  <CellValue val={row.square} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters callouts */}
        <h2
          className="text-2xl font-bold tracking-tight mb-6 text-center"
          style={{ color: "var(--ink)" }}
        >
          Why it matters
        </h2>
        <div className="flex flex-col gap-4 mb-16">
          {callouts.map((c) => (
            <div
              key={c.heading}
              className="rounded-2xl border p-6"
              style={{
                borderColor: "var(--line)",
                backgroundColor: "var(--bg-card)",
                borderLeftWidth: 3,
                borderLeftColor: "var(--accent)",
              }}
            >
              <p className="font-semibold mb-2" style={{ color: "var(--ink)" }}>
                {c.heading}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border p-10 text-center relative overflow-hidden"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--ink)" }}>
              See reservalab in action
            </h2>
            <p className="text-base mb-7 max-w-md mx-auto" style={{ color: "var(--ink-muted)" }}>
              We&apos;ll walk you through the app with your own salon&apos;s setup. No hardware required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Request early access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
