import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Studio Owners",
  description:
    "See everything. Control everything. reservalab gives studio owners a unified dashboard, multi-stylist management, client intelligence, and payments — from one iPhone.",
  openGraph: {
    title: "For Studio Owners | reservalab",
    description:
      "See everything. Control everything. reservalab gives studio owners a unified dashboard, multi-stylist management, client intelligence, and payments — from one iPhone.",
  },
};

// ─── Shared visual helpers ────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
      style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
    >
      <svg
        className="w-3 h-3"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </span>
  );
}

// ─── Mock: Daily Overview ─────────────────────────────────────────────────────

function DailyOverviewMock() {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <div
        className="px-5 py-4 border-b flex items-center justify-between"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          Today — Thursday
        </span>
        <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
          May 1, 2026
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x" style={{ borderColor: "var(--line)" }}>
        {[
          { label: "Revenue today", value: "$1,240" },
          { label: "Completed", value: "7" },
          { label: "Remaining", value: "5" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4 text-center">
            <p className="text-xl font-bold" style={{ color: "var(--accent)" }}>
              {stat.value}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Stylist activity */}
      <div className="px-5 py-3 border-t" style={{ borderColor: "var(--line)" }}>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--ink-subtle)" }}
        >
          Stylists right now
        </p>
        <div className="flex flex-col gap-2.5">
          {[
            { name: "Kezia M.", status: "In session — Balayage", dot: "var(--success)" },
            { name: "Brianna K.", status: "Available — 12:30 PM open", dot: "var(--accent)" },
            { name: "Nadia O.", status: "Next: Cut & Blow Dry at 1:00 PM", dot: "var(--ink-subtle)" },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: s.dot }}
              />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium" style={{ color: "var(--ink)" }}>
                  {s.name}
                </span>
                <span className="text-xs ml-2" style={{ color: "var(--ink-muted)" }}>
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mock: Staff List ─────────────────────────────────────────────────────────

function StaffListMock() {
  const stylists = [
    { name: "Kezia M.", appts: 8, util: 90, revenue: "$780" },
    { name: "Brianna K.", appts: 6, util: 68, revenue: "$540" },
    { name: "Nadia O.", appts: 5, util: 55, revenue: "$420" },
  ];
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <div
        className="px-5 py-4 border-b"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          Staff — today
        </span>
      </div>
      <div className="divide-y" style={{ borderColor: "var(--line)" }}>
        {stylists.map((s) => (
          <div key={s.name} className="px-5 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                {s.name}
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                {s.revenue}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ height: 5, backgroundColor: "var(--line)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.util}%`,
                    backgroundColor: s.util >= 80 ? "var(--success)" : "var(--accent)",
                  }}
                />
              </div>
              <span className="text-xs w-12 text-right" style={{ color: "var(--ink-muted)" }}>
                {s.appts} appts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mock: Client Card ────────────────────────────────────────────────────────

function ClientCardMock() {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
          style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
        >
          M
        </div>
        <div>
          <p className="font-semibold" style={{ color: "var(--ink)" }}>
            Maria L.
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
            22 visits &middot; Last visit 2 weeks ago
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Total spend", value: "$3,240" },
          { label: "Avg per visit", value: "$147" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border px-3 py-2.5"
            style={{ borderColor: "var(--line)" }}
          >
            <p className="text-base font-bold" style={{ color: "var(--ink)" }}>
              {stat.value}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl border px-4 py-3 mb-3"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1.5"
          style={{ color: "var(--ink-subtle)" }}
        >
          Most booked
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Full Head Colour", "Glossing Treatment"].map((s) => (
            <span
              key={s}
              className="text-xs rounded-full px-2.5 py-0.5 border"
              style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl border px-4 py-3"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1.5"
          style={{ color: "var(--ink-subtle)" }}
        >
          Formula notes
        </p>
        <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
          Redken 7N + 20vol. Leave 35 mins. Prefers scalp guard.
        </p>
      </div>
    </div>
  );
}

// ─── Mock: Location Switcher ──────────────────────────────────────────────────

function LocationSwitcherMock() {
  const locations = [
    { name: "Luxe Studio — Main St", revenue: "$1,240" },
    { name: "Luxe Studio — Westside", revenue: "$870" },
    { name: "Luxe Studio — Airport", revenue: "$510" },
  ];
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <div
        className="px-5 py-4 border-b flex items-center justify-between"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          All locations
        </span>
        <span className="text-xs" style={{ color: "var(--accent)" }}>
          Today
        </span>
      </div>
      <div className="divide-y" style={{ borderColor: "var(--line)" }}>
        {locations.map((loc, i) => (
          <div
            key={loc.name}
            className="px-5 py-4 flex items-center justify-between"
            style={
              i === 0
                ? { backgroundColor: "rgba(245,166,35,0.05)" }
                : undefined
            }
          >
            <div className="flex items-center gap-3">
              {i === 0 && (
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              )}
              <span
                className="text-sm"
                style={{ color: i === 0 ? "var(--ink)" : "var(--ink-muted)", marginLeft: i === 0 ? 0 : "1.125rem" }}
              >
                {loc.name}
              </span>
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: i === 0 ? "var(--accent)" : "var(--ink-muted)" }}
            >
              {loc.revenue}
            </span>
          </div>
        ))}
      </div>
      <div
        className="px-5 py-3 border-t flex items-center justify-between"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="text-xs" style={{ color: "var(--ink-subtle)" }}>
          Combined today
        </span>
        <span className="text-sm font-bold" style={{ color: "var(--ink)" }}>
          $2,620
        </span>
      </div>
    </div>
  );
}

// ─── Mock: Payments Summary ───────────────────────────────────────────────────

function PaymentsSummaryMock() {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <p className="text-sm font-semibold mb-4" style={{ color: "var(--ink)" }}>
        Revenue summary
      </p>

      <div className="flex flex-col gap-3 mb-5">
        {[
          { label: "Tap to Pay collected", value: "$920", color: "var(--success)" },
          { label: "Deposits received", value: "$320", color: "var(--accent)" },
          { label: "Payout scheduled", value: "$1,240", color: "var(--ink)" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl border px-4 py-3"
            style={{ borderColor: "var(--line)" }}
          >
            <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
              {row.label}
            </span>
            <span className="text-sm font-bold" style={{ color: row.color }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl border px-4 py-3 flex items-center gap-3"
        style={{ borderColor: "rgba(34,197,94,0.2)", backgroundColor: "rgba(34,197,94,0.05)" }}
      >
        <svg
          className="w-4 h-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--success)" }}
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
        <span className="text-xs" style={{ color: "var(--success)" }}>
          Payout arrives in your bank tomorrow
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const sections = [
  {
    tag: "Unified dashboard",
    title: "Know your day before you walk in the door.",
    copy: "Before you walk in the door, you know exactly how the day looks. Revenue, staffing, gaps in the schedule — one screen, no guessing.",
    highlights: [
      "Total revenue at a glance — no calculator needed",
      "Appointments completed and remaining in real time",
      "See which stylist is in session right now",
      "Spot gaps before they become lost revenue",
    ],
    visual: "overview",
    flip: false,
  },
  {
    tag: "Multi-stylist management",
    title: "See every stylist's day side by side.",
    copy: "See every stylist's day side by side. Spot the gap before it becomes a lost hour. Reassign walk-ins in seconds.",
    highlights: [
      "Per-stylist appointment count and utilisation",
      "Revenue contribution per staff member",
      "Reassign walk-ins to the first available stylist",
      "No spreadsheets, no whiteboard, no guessing",
    ],
    visual: "staff",
    flip: true,
  },
  {
    tag: "Client intelligence",
    title: "Every client remembered, every preference logged.",
    copy: "Every client remembered, every preference logged. Your new hire knows the regulars on day one. No one falls through the cracks.",
    highlights: [
      "Full visit history with service and cost",
      "Formula notes tied to each client",
      "Total spend and average per visit",
      "Most booked services surfaced automatically",
    ],
    visual: "client",
    flip: false,
  },
  {
    tag: "Multi-location ready",
    title: "Opening a second location? Same app.",
    copy: "Opening a second location? Same app, same dashboard, different view. No new software, no migration headaches, no enterprise upgrade fee.",
    highlights: [
      "Switch between locations with one tap",
      "Revenue per location shown side by side",
      "Staff and clients travel with your account",
      "Multi-location is in the foundation, not an add-on",
    ],
    visual: "locations",
    flip: true,
  },
  {
    tag: "Payments and deposits",
    title: "Know what you made today before you close.",
    copy: "Know what you made today before you close. Tap to Pay, deposits, no-show fees — everything flows into one payout. No reconciliation spreadsheets.",
    highlights: [
      "Tap to Pay on iPhone — no terminal hardware",
      "Card-on-file deposits at booking time",
      "No-show protection built in",
      "One payout — everything combined",
    ],
    visual: "payments",
    flip: false,
  },
];

function Visual({ id }: { id: string }) {
  if (id === "overview") return <DailyOverviewMock />;
  if (id === "staff") return <StaffListMock />;
  if (id === "client") return <ClientCardMock />;
  if (id === "locations") return <LocationSwitcherMock />;
  if (id === "payments") return <PaymentsSummaryMock />;
  return null;
}

export default function FeaturesOwnersPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10" style={{ color: "var(--ink-muted)" }}>
          <Link href="/features" style={{ color: "var(--ink-subtle)" }}>
            Features
          </Link>
          <span style={{ color: "var(--ink-subtle)" }}>/</span>
          <span>For Studio Owners</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            For Studio Owners
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            See everything. Control everything.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              From your iPhone.
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            One dashboard. Every stylist. Every client. Every dollar. Built for owners who
            need full visibility without being chained to a desk.
          </p>
        </div>

        {/* Feature sections */}
        <div className="flex flex-col gap-28">
          {sections.map((section) => (
            <div
              key={section.tag}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              style={section.flip ? { direction: "rtl" } : {}}
            >
              {/* Text */}
              <div style={section.flip ? { direction: "ltr" } : {}}>
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {section.tag}
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                  style={{ color: "var(--ink)" }}
                >
                  {section.title}
                </h2>
                <p className="text-base leading-relaxed mb-7" style={{ color: "var(--ink-muted)" }}>
                  {section.copy}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {section.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                      <CheckIcon />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div style={section.flip ? { direction: "ltr" } : {}}>
                <Visual id={section.visual} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-32 rounded-2xl border p-12 text-center relative overflow-hidden"
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
            <h2
              className="text-3xl font-bold tracking-tight mb-4"
              style={{ color: "var(--ink)" }}
            >
              Ready to run your salon from your iPhone?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--ink-muted)" }}>
              Request early access and we&apos;ll set up your salon with you — staff, services, and
              all.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
