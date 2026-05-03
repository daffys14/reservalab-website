import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservalab vs. Square, Booksy & GlossGenius",
  description:
    "See how reservalab stacks up against Square Appointments, Booksy, and GlossGenius. Native iOS, Tap to Pay, and full data ownership — all compared side by side.",
  openGraph: {
    title: "reservalab vs. Square, Booksy & GlossGenius | reservalab",
    description:
      "See how reservalab stacks up against Square Appointments, Booksy, and GlossGenius. Native iOS, Tap to Pay, and full data ownership — all compared side by side.",
  },
};

type CellVal = string | boolean;

interface Row {
  feature: string;
  reservalab: CellVal;
  square: CellVal;
  booksy: CellVal;
  glossgenius: CellVal;
}

const rows: Row[] = [
  {
    feature: "Monthly fee",
    reservalab: "$29 founding / $79 standard",
    square: "$29–$69/mo",
    booksy: "$29.99/mo",
    glossgenius: "$24–$48/mo",
  },
  {
    feature: "Tap to Pay on iPhone",
    reservalab: "Built in",
    square: "Requires hardware",
    booksy: false,
    glossgenius: false,
  },
  {
    feature: "Hardware required",
    reservalab: false,
    square: "Card reader",
    booksy: false,
    glossgenius: false,
  },
  {
    feature: "iOS-native app",
    reservalab: "SwiftUI",
    square: "Web-wrapped",
    booksy: "Web-wrapped",
    glossgenius: "Web-wrapped",
  },
  {
    feature: "Offline mode",
    reservalab: "Full sync",
    square: false,
    booksy: false,
    glossgenius: false,
  },
  {
    feature: "Client data ownership",
    reservalab: "Full export",
    square: "Limited",
    booksy: "Booksy owns it",
    glossgenius: "Full export",
  },
  {
    feature: "Custom domain",
    reservalab: "Included in Standard",
    square: "Not offered",
    booksy: "Not offered",
    glossgenius: "Extra cost",
  },
  {
    feature: "Multi-location",
    reservalab: "Built in ($29/location)",
    square: "Extra cost",
    booksy: "Extra cost",
    glossgenius: "Higher tier",
  },
  {
    feature: "Free booking page subdomain",
    reservalab: "yourname.reservalab.com",
    square: false,
    booksy: false,
    glossgenius: false,
  },
];

function YesIcon() {
  return (
    <span
      className="inline-flex w-6 h-6 rounded-full items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "var(--success)" }}
    >
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        className="w-3 h-3"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="3" x2="9" y2="9" />
        <line x1="9" y1="3" x2="3" y2="9" />
      </svg>
    </span>
  );
}

function CellValue({ val, accent }: { val: CellVal; accent?: boolean }) {
  if (val === true)
    return (
      <span className="flex items-center gap-1.5">
        <YesIcon />
        <span className="text-sm" style={{ color: "var(--ink)" }}>
          Yes
        </span>
      </span>
    );
  if (val === false)
    return (
      <span className="flex items-center gap-1.5">
        <NoIcon />
        <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
          No
        </span>
      </span>
    );
  return (
    <span
      className="text-sm leading-snug"
      style={{ color: accent ? "var(--ink)" : "var(--ink-muted)" }}
    >
      {val}
    </span>
  );
}

export default function ComparePage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-5xl">
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
            How reservalab stacks up
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            We&apos;ve done the comparison so you don&apos;t have to.
          </p>
        </div>

        {/* Comparison table — scrollable on small screens */}
        <div className="overflow-x-auto mb-16">
          <div
            className="rounded-2xl border overflow-hidden min-w-[640px]"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-[2fr_1.4fr_1fr_1fr_1fr] border-b"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="px-5 py-4 text-sm font-semibold"
                style={{ color: "var(--ink-subtle)" }}
              >
                Feature
              </div>
              {/* reservalab — amber header */}
              <div
                className="px-5 py-4 text-sm font-semibold border-l"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--accent)",
                  borderTopWidth: 3,
                  borderTopColor: "var(--accent)",
                  backgroundColor: "rgba(245,166,35,0.06)",
                }}
              >
                reservalab
              </div>
              <div
                className="px-5 py-4 text-sm font-semibold border-l"
                style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
              >
                Square
              </div>
              <div
                className="px-5 py-4 text-sm font-semibold border-l"
                style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
              >
                Booksy
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
                <div
                  key={row.feature}
                  className="grid grid-cols-[2fr_1.4fr_1fr_1fr_1fr]"
                >
                  <div
                    className="px-5 py-4 text-sm font-medium"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {row.feature}
                  </div>
                  {/* reservalab — amber tint */}
                  <div
                    className="px-5 py-4 border-l"
                    style={{
                      borderColor: "var(--line)",
                      backgroundColor: "rgba(245,166,35,0.04)",
                      borderLeftWidth: 2,
                      borderLeftColor: "var(--accent)",
                    }}
                  >
                    <CellValue val={row.reservalab} accent />
                  </div>
                  <div className="px-5 py-4 border-l" style={{ borderColor: "var(--line)" }}>
                    <CellValue val={row.square} />
                  </div>
                  <div className="px-5 py-4 border-l" style={{ borderColor: "var(--line)" }}>
                    <CellValue val={row.booksy} />
                  </div>
                  <div className="px-5 py-4 border-l" style={{ borderColor: "var(--line)" }}>
                    <CellValue val={row.glossgenius} />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Ready to switch?
            </h2>
            <p className="text-base mb-7 max-w-md mx-auto" style={{ color: "var(--ink-muted)" }}>
              We&apos;ll walk you through the app with your own salon&apos;s setup. No hardware
              required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
