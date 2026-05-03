import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservalab vs. GlossGenius",
  description:
    "GlossGenius is beautiful. We're beautiful and built for iPhone. See how reservalab compares to GlossGenius for native iOS, Tap to Pay, and offline sync.",
  openGraph: {
    title: "reservalab vs. GlossGenius | reservalab",
    description:
      "GlossGenius is beautiful. We're beautiful and built for iPhone. See how reservalab compares to GlossGenius for native iOS, Tap to Pay, and offline sync.",
  },
};

const rows: { feature: string; reservalab: string | boolean; glossgenius: string | boolean }[] = [
  { feature: "Monthly fee", reservalab: "$29 founding / $79 standard", glossgenius: "$24–$48/month" },
  { feature: "iOS-native app", reservalab: "Native SwiftUI", glossgenius: "Web-wrapped mobile" },
  { feature: "Tap to Pay", reservalab: "Built in", glossgenius: false },
  { feature: "Offline mode", reservalab: "Full offline sync", glossgenius: "Requires internet" },
  { feature: "Multi-location", reservalab: "Built in", glossgenius: "Higher tier" },
  { feature: "Client data ownership", reservalab: "Full export", glossgenius: "Full export" },
  { feature: "Free booking page subdomain", reservalab: "yourname.reservalab.com", glossgenius: "Varies" },
  { feature: "Custom domain for booking page", reservalab: "Included in Standard", glossgenius: "Extra cost" },
];

const callouts = [
  {
    heading: "GlossGenius has a great design. So do we — plus it's native.",
    body: "GlossGenius has a great design. But it's a web app on your phone, not a native iOS app. The difference is in every tap, every scroll, every second of your busy day. Native isn't a marketing word — it's the gap between fluid and slightly laggy.",
  },
  {
    heading: "Tap to Pay is the future of in-person payments.",
    body: "GlossGenius doesn't offer Tap to Pay. We built around it. No card reader to charge, carry, or troubleshoot. Just hold your iPhone up and the payment is done. Every appointment ends the same clean way.",
  },
  {
    heading: "Same price range — with more included.",
    body: "Same founding price as GlossGenius Basic — but native iOS, offline sync, multi-location support, and Tap to Pay are all included. No tier upgrades needed to get the features that matter.",
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
      <span className="text-sm" style={{ color: "var(--ink-muted)" }}>No</span>
    </span>
  );
  return (
    <span className="text-sm" style={{ color: accent ? "var(--ink)" : "var(--ink-muted)" }}>
      {val}
    </span>
  );
}

export default function CompareGlossGeniusPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10" style={{ color: "var(--ink-muted)" }}>
          <Link href="/" style={{ color: "var(--ink-subtle)" }}>
            Home
          </Link>
          <span style={{ color: "var(--ink-subtle)" }}>/</span>
          <span>vs. GlossGenius</span>
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
            GlossGenius is beautiful.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We&apos;re beautiful and built for iPhone.
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            GlossGenius looks great. But it&apos;s a web app running in a mobile shell. reservalab is a
            native iOS app — and that difference shows up every single day.
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
              GlossGenius
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
                  <CellValue val={row.glossgenius} />
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
              We&apos;ll show you what native feels like. No web wrappers, no compromise.
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
