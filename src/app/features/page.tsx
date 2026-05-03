import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Appointment scheduling, client management, Tap to Pay, real-time sync — every feature in reservalab explained.",
  openGraph: {
    title: "Features | reservalab",
    description:
      "Appointment scheduling, client management, Tap to Pay, real-time sync — every feature in reservalab explained.",
  },
};

const features = [
  {
    id: "appointments",
    tag: "Scheduling",
    title: "Appointments that actually work",
    description:
      "A drag-and-drop calendar built around how salons operate. Assign services to specific staff, set buffer times between appointments, block off prep time — it handles the edge cases you already deal with every day. Conflict detection prevents double-bookings automatically.",
    highlights: [
      "Multi-staff calendar in one view",
      "Buffer and prep time per service",
      "Conflict detection — no double-bookings",
      "One-tap reschedule and cancellation",
      "Walk-in and same-day booking support",
    ],
    visual: {
      rows: [
        { time: "09:00", service: "Cut & Blow Dry", client: "Sarah K.", duration: "60 min" },
        { time: "10:15", service: "Full Head Colour", client: "Maria L.", duration: "120 min" },
        { time: "13:00", service: "Balayage", client: "Priya N.", duration: "150 min" },
        { time: "16:00", service: "Trim", client: "Amelia T.", duration: "30 min" },
      ],
    },
  },
  {
    id: "clients",
    tag: "Client management",
    title: "Know every client before they arrive",
    description:
      "Build a complete picture of every client — notes, service history, colour formulas, contact details, and preferences. Mark clients as do-not-book when needed. Archive inactive clients without losing their records. It&apos;s a CRM that salon staff will actually use.",
    highlights: [
      "Full visit history with service and cost",
      "Colour formula and notes per visit",
      "Do-not-book flag with internal reason",
      "Client archiving — records preserved",
      "Quick search across all clients",
    ],
    visual: {
      profile: {
        name: "Sarah K.",
        visits: 14,
        lastVisit: "3 weeks ago",
        services: ["Cut & Blow Dry", "Full Colour", "Glossing Treatment"],
      },
    },
  },
  {
    id: "payments",
    tag: "Payments",
    title: "Tap to Pay — no terminal needed",
    description:
      "Stripe-powered payments built directly into the app. Use Tap to Pay on iPhone for in-person payments — your phone is the terminal. Collect card-on-file deposits at the time of booking to protect against no-shows. All transactions synced in real time.",
    highlights: [
      "Tap to Pay on iPhone (Stripe)",
      "Card-on-file deposits at booking",
      "No-show protection built in",
      "Instant payment records per appointment",
      "No external hardware ever",
    ],
    visual: {
      payment: { amount: "£85.00", method: "Tap to Pay", status: "Approved" },
    },
  },
  {
    id: "sync",
    tag: "Real-time sync",
    title: "Every device, always in sync",
    description:
      "Changes made on one device — booking an appointment, updating a client note, processing a payment — appear instantly on every other device in your salon. No refresh needed, no lag. Built on Supabase Realtime for sub-second propagation.",
    highlights: [
      "Sub-second sync across all devices",
      "Multi-location support",
      "Offline-tolerant — queues changes when offline",
      "Conflict resolution built in",
      "No manual refresh ever",
    ],
    visual: {
      devices: ["iPhone (main)", "iPad (reception)", "iPhone (stylist)"],
    },
  },
];

export default function FeaturesPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Built for every part of your day
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--ink-muted)" }}
          >
            reservalab covers the full loop — from booking to payment — without
            requiring you to stitch multiple tools together.
          </p>
        </div>

        {/* Feature sections */}
        <div className="flex flex-col gap-28">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={
                i % 2 === 1
                  ? { direction: "rtl" }
                  : {}
              }
            >
              {/* Text */}
              <div style={i % 2 === 1 ? { direction: "ltr" } : {}}>
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {feature.tag}
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                  style={{ color: "var(--ink)" }}
                >
                  {feature.title}
                </h2>
                <p
                  className="text-base leading-relaxed mb-7"
                  style={{ color: "var(--ink-muted)" }}
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
                <ul className="flex flex-col gap-2.5">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
                        style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div style={i % 2 === 1 ? { direction: "ltr" } : {}}>
                <FeatureVisual feature={feature} />
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
              See it in action
            </h2>
            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{ color: "var(--ink-muted)" }}
            >
              Request early access and we&apos;ll walk you through the app with
              your own salon&apos;s setup.
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

function FeatureVisual({ feature }: { feature: (typeof features)[number] }) {
  if (feature.id === "appointments") {
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
            Today&apos;s schedule
          </span>
          <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
            {feature.visual.rows?.length} appointments
          </span>
        </div>
        <div className="divide-y" style={{ borderColor: "var(--line)" }}>
          {feature.visual.rows?.map((row) => (
            <div key={row.time} className="px-5 py-4 flex items-center gap-4">
              <span
                className="text-xs font-mono w-10 flex-shrink-0"
                style={{ color: "var(--ink-muted)" }}
              >
                {row.time}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: "var(--ink)" }}>
                  {row.service}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                  {row.client}
                </p>
              </div>
              <span
                className="text-xs rounded-full px-2.5 py-0.5 flex-shrink-0"
                style={{
                  backgroundColor: "rgba(245,166,35,0.1)",
                  color: "var(--accent)",
                }}
              >
                {row.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (feature.id === "clients") {
    const p = feature.visual.profile!;
    return (
      <div
        className="rounded-2xl border p-6"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
          >
            {p.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              {p.name}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
              {p.visits} visits · Last seen {p.lastVisit}
            </p>
          </div>
        </div>
        <div
          className="rounded-xl border p-4"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--ink-subtle)" }}
          >
            Usual services
          </p>
          <div className="flex flex-wrap gap-2">
            {p.services.map((s) => (
              <span
                key={s}
                className="text-xs rounded-full px-3 py-1 border"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--ink-muted)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div
          className="mt-3 rounded-xl border p-4"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--ink-subtle)" }}
          >
            Last visit note
          </p>
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
            Used Redken 7N + 20vol. Left 35 mins. Thrilled with result.
          </p>
        </div>
      </div>
    );
  }

  if (feature.id === "payments") {
    const pmt = feature.visual.payment!;
    return (
      <div
        className="rounded-2xl border p-8 flex flex-col items-center text-center gap-5"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(245,166,35,0.1)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-9 h-9"
            style={{ color: "var(--accent)" }}
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        </div>
        <div>
          <p className="text-3xl font-bold" style={{ color: "var(--ink)" }}>
            {pmt.amount}
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
            {pmt.method}
          </p>
        </div>
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
          style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "var(--success)" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
          {pmt.status}
        </div>
        <p className="text-xs" style={{ color: "var(--ink-subtle)" }}>
          No terminal hardware required
        </p>
      </div>
    );
  }

  if (feature.id === "sync") {
    const devices = feature.visual.devices!;
    return (
      <div
        className="rounded-2xl border p-6"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
      >
        <p className="text-sm font-semibold mb-5" style={{ color: "var(--ink)" }}>
          Synced devices
        </p>
        <div className="flex flex-col gap-3">
          {devices.map((d) => (
            <div
              key={d}
              className="flex items-center justify-between rounded-xl border px-4 py-3"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--success)" }}
                />
                <span className="text-sm" style={{ color: "var(--ink)" }}>
                  {d}
                </span>
              </div>
              <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
                Live
              </span>
            </div>
          ))}
        </div>
        <div
          className="mt-5 rounded-xl border px-4 py-3 flex items-center gap-3"
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
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>
          <span className="text-xs" style={{ color: "var(--success)" }}>
            All devices in sync — last updated just now
          </span>
        </div>
      </div>
    );
  }

  return null;
}
