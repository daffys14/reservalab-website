import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Stylists",
  description:
    "Your clients. Your schedule. Your phone. reservalab gives stylists a native iOS schedule, Tap to Pay, client notes, and offline sync — no front desk trips needed.",
  openGraph: {
    title: "For Stylists | reservalab",
    description:
      "Your clients. Your schedule. Your phone. reservalab gives stylists a native iOS schedule, Tap to Pay, client notes, and offline sync — no front desk trips needed.",
  },
};

// ─── Shared visual helper ─────────────────────────────────────────────────────

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

// ─── Mock: Day View ───────────────────────────────────────────────────────────

function DayViewMock() {
  const appts = [
    { time: "9:00 AM", name: "Sarah K.", service: "Cut & Blow Dry", duration: "60 min", status: "Done", statusColor: "var(--success)" },
    { time: "10:15 AM", name: "Maria L.", service: "Full Head Colour", duration: "120 min", status: "In chair", statusColor: "var(--accent)" },
    { time: "12:30 PM", name: "Priya N.", service: "Balayage", duration: "150 min", status: "Next", statusColor: "var(--ink-muted)" },
    { time: "3:15 PM", name: "Amelia T.", service: "Trim", duration: "30 min", status: "Upcoming", statusColor: "var(--ink-subtle)" },
    { time: "4:00 PM", name: "Nadia O.", service: "Gloss Treatment", duration: "45 min", status: "Upcoming", statusColor: "var(--ink-subtle)" },
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
          Kezia&apos;s day
        </span>
        <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
          {appts.length} appointments
        </span>
      </div>
      <div className="divide-y" style={{ borderColor: "var(--line)" }}>
        {appts.map((a) => (
          <div key={a.time} className="px-5 py-3.5 flex items-center gap-3">
            <span
              className="text-xs font-mono w-16 flex-shrink-0"
              style={{ color: "var(--ink-muted)" }}
            >
              {a.time}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: "var(--ink)" }}>
                {a.name}
              </p>
              <p className="text-xs mt-0.5 truncate" style={{ color: "var(--ink-muted)" }}>
                {a.service} &middot; {a.duration}
              </p>
            </div>
            <span
              className="text-xs rounded-full px-2.5 py-0.5 flex-shrink-0 font-medium"
              style={{
                backgroundColor: `${a.statusColor}22`,
                color: a.statusColor,
              }}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mock: Tap to Pay ─────────────────────────────────────────────────────────

function TapToPayMock() {
  return (
    <div
      className="rounded-2xl border p-8 flex flex-col items-center text-center gap-5"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      {/* NFC ripple */}
      <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
        <div
          className="absolute rounded-full"
          style={{ inset: 0, backgroundColor: "rgba(245,166,35,0.06)" }}
        />
        <div
          className="absolute rounded-full"
          style={{ inset: 12, backgroundColor: "rgba(245,166,35,0.10)" }}
        />
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(245,166,35,0.15)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
            style={{ color: "var(--accent)" }}
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
          $85.00
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
          Tap to Pay
        </p>
      </div>
      <div
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold"
        style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "var(--success)" }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: "var(--success)" }}
        />
        Approved
      </div>
      <p className="text-xs" style={{ color: "var(--ink-subtle)" }}>
        No terminal hardware required
      </p>
    </div>
  );
}

// ─── Mock: Client Notes ───────────────────────────────────────────────────────

function ClientNotesMock() {
  const timeline = [
    { date: "Apr 12", service: "Cut & Blow Dry", note: "Redken 7N + 20vol" },
    { date: "Mar 1", service: "Full Head Colour", note: "Requested volume at crown" },
    { date: "Jan 18", service: "Glossing Treatment", note: "Happy with result, book again" },
  ];
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
          style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
        >
          S
        </div>
        <div>
          <p className="font-semibold" style={{ color: "var(--ink)" }}>
            Sarah K.
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
            Last visit: 3 weeks ago
          </p>
        </div>
      </div>

      {/* Pinned notes */}
      <div
        className="rounded-xl border px-4 py-3 mb-4"
        style={{ borderColor: "rgba(245,166,35,0.2)", backgroundColor: "rgba(245,166,35,0.04)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1.5"
          style={{ color: "var(--accent)" }}
        >
          Formula
        </p>
        <p className="text-sm" style={{ color: "var(--ink)" }}>
          Redken 7N + 20vol &middot; Prefers dry cut
        </p>
      </div>

      {/* Timeline */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: "var(--line)" }}
      >
        <div
          className="px-4 py-2 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--ink-subtle)" }}
          >
            Visit history
          </p>
        </div>
        <div className="divide-y" style={{ borderColor: "var(--line)" }}>
          {timeline.map((t) => (
            <div key={t.date} className="px-4 py-3">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs font-medium" style={{ color: "var(--ink)" }}>
                  {t.service}
                </span>
                <span className="text-xs" style={{ color: "var(--ink-subtle)" }}>
                  {t.date}
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mock: Offline Sync ───────────────────────────────────────────────────────

function OfflineSyncMock() {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      {/* Signal indicator */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "rgba(245,166,35,0.1)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            style={{ color: "var(--accent)" }}
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <circle cx="12" cy="20" r="1" fill="currentColor" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
            No internet connection
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
            Salon wifi is down
          </p>
        </div>
        <span
          className="ml-auto text-xs font-semibold rounded-full px-2.5 py-1 flex-shrink-0"
          style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "var(--success)" }}
        >
          Synced
        </span>
      </div>

      {/* Queued changes */}
      <div
        className="rounded-xl border px-4 py-4 mb-4"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--ink-subtle)" }}
        >
          Saved locally
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Client note added — Sarah K.",
            "Appointment marked complete — 10:15 AM",
            "Payment recorded — $85.00",
          ].map((change) => (
            <div key={change} className="flex items-center gap-2.5">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: "var(--success)" }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
                {change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl border px-4 py-3 flex items-center gap-3"
        style={{
          borderColor: "rgba(34,197,94,0.2)",
          backgroundColor: "rgba(34,197,94,0.05)",
        }}
      >
        <svg
          className="w-4 h-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          style={{ color: "var(--success)" }}
        >
          <polyline points="1 4 1 10 7 10" />
          <polyline points="23 20 23 14 17 14" />
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
        <span className="text-xs" style={{ color: "var(--success)" }}>
          3 changes saved locally — will sync when connected
        </span>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const sections = [
  {
    tag: "Your schedule",
    title: "Your full schedule. Always in your pocket.",
    copy: "No more running to the front desk to check your next appointment. Your full schedule lives on your iPhone, synced in real time.",
    highlights: [
      "Day view with every appointment in order",
      "Client name, service, and duration at a glance",
      "Status updates in real time — no refresh needed",
      "Upcoming, In chair, Done — colour-coded clearly",
    ],
    visual: "schedule",
    flip: false,
  },
  {
    tag: "Payments",
    title: "Accept payment without a terminal.",
    copy: "Hold up your iPhone. The client taps. Done. No card reader to carry, no PIN pad to hand over. You look professional and you get paid instantly.",
    highlights: [
      "Tap to Pay on iPhone — built in, not bolted on",
      "No extra hardware — ever",
      "Payment recorded automatically to the appointment",
      "Client can tap with any contactless card or phone",
    ],
    visual: "payment",
    flip: true,
  },
  {
    tag: "Client notes",
    title: "Client notes that actually help.",
    copy: "Formula, preferences, that thing she mentioned about her daughter's wedding — all here. You walk in knowing your client. They notice.",
    highlights: [
      "Formula and colour notes per client",
      "Preferences and service history visible before the appointment",
      "Visit timeline so you can see what you did last time",
      "Notes you add today are there for every stylist tomorrow",
    ],
    visual: "notes",
    flip: false,
  },
  {
    tag: "Offline sync",
    title: "Works on bad wifi.",
    copy: "Salon wifi goes down all the time. Your app doesn't. Everything keeps working, syncs the moment signal comes back.",
    highlights: [
      "Full schedule accessible with zero signal",
      "Notes and payment records saved locally",
      "Sync happens automatically in the background",
      "No lost work, no error messages, no stress",
    ],
    visual: "offline",
    flip: true,
  },
];

function Visual({ id }: { id: string }) {
  if (id === "schedule") return <DayViewMock />;
  if (id === "payment") return <TapToPayMock />;
  if (id === "notes") return <ClientNotesMock />;
  if (id === "offline") return <OfflineSyncMock />;
  return null;
}

export default function FeaturesStylestsPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-10" style={{ color: "var(--ink-muted)" }}>
          <Link href="/features" style={{ color: "var(--ink-subtle)" }}>
            Features
          </Link>
          <span style={{ color: "var(--ink-subtle)" }}>/</span>
          <span>For Stylists</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            For Stylists
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Your clients. Your schedule.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your phone.
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            Everything you need to do your job brilliantly — without touching a terminal, a
            spreadsheet, or the front desk computer.
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
              Work the way you want.
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--ink-muted)" }}>
              Ask your owner to get reservalab, or request early access yourself and show them
              what they&apos;re missing.
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
