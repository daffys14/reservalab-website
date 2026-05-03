import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservalab — The booking app your salon actually deserves",
  description:
    "Appointments, client management, and Tap to Pay — all from your iPhone. Built for salons that are done settling.",
  openGraph: {
    title: "reservalab — The booking app your salon actually deserves",
    description:
      "Appointments, client management, and Tap to Pay — all from your iPhone. Built for salons that are done settling.",
  },
};

// ─── Section 1: Hero ────────────────────────────────────────────────────────

function PhoneMock() {
  const appointments = [
    { name: "Sarah K.", service: "Cut & Blow Dry", time: "9:00 AM", status: "Confirmed" },
    { name: "Maria L.", service: "Full Head Colour", time: "11:30 AM", status: "Confirmed" },
    { name: "Priya N.", service: "Balayage", time: "2:00 PM", status: "In chair" },
    { name: "Amelia T.", service: "Trim", time: "4:30 PM", status: "Upcoming" },
  ];

  const statusColors: Record<string, { bg: string; text: string }> = {
    Confirmed: { bg: "rgba(245,166,35,0.12)", text: "var(--accent)" },
    "In chair": { bg: "rgba(34,197,94,0.12)", text: "var(--success)" },
    Upcoming: { bg: "rgba(240,237,232,0.08)", text: "var(--ink-muted)" },
  };

  return (
    <div className="mx-auto" style={{ maxWidth: 300 }}>
      {/* Phone shell */}
      <div
        className="relative rounded-[2.5rem] border-4 overflow-hidden"
        style={{
          borderColor: "#2a2825",
          backgroundColor: "var(--bg-card)",
          boxShadow: "0 0 0 1px rgba(245,166,35,0.08), 0 32px 64px rgba(0,0,0,0.6)",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2">
          <div
            className="w-24 h-6 rounded-full"
            style={{ backgroundColor: "#1a1816" }}
          />
        </div>

        {/* Screen content */}
        <div className="px-4 pb-8">
          {/* App header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--ink)" }}>
                Today
              </p>
              <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
                4 appointments
              </p>
            </div>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--accent)" }}
            >
              M
            </div>
          </div>

          {/* Appointment cards */}
          <div className="flex flex-col gap-2">
            {appointments.map((appt) => {
              const colors = statusColors[appt.status] ?? statusColors["Upcoming"];
              return (
                <div
                  key={appt.name}
                  className="rounded-xl p-3 border"
                  style={{
                    backgroundColor: "#161412",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: "var(--ink)" }}>
                        {appt.name}
                      </p>
                      <p className="text-xs mt-0.5 truncate" style={{ color: "var(--ink-muted)" }}>
                        {appt.service}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 text-xs rounded-full px-2 py-0.5 font-medium"
                      style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                      {appt.status}
                    </span>
                  </div>
                  <p className="text-xs mt-1.5 font-mono" style={{ color: "var(--ink-subtle)" }}>
                    {appt.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-3">
          <div
            className="w-28 h-1 rounded-full"
            style={{ backgroundColor: "#2a2825" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section 5: Feature mocks ────────────────────────────────────────────────

function CalendarMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocks = [
    { day: 0, top: 10, height: 14, label: "Sarah K.", color: "var(--accent)" },
    { day: 1, top: 28, height: 20, label: "Maria L.", color: "#a78bfa" },
    { day: 2, top: 10, height: 25, label: "Priya N.", color: "#60a5fa" },
    { day: 3, top: 18, height: 12, label: "Amelia T.", color: "var(--accent)" },
    { day: 4, top: 8, height: 18, label: "Nadia O.", color: "#f472b6" },
    { day: 1, top: 55, height: 14, label: "Kezia M.", color: "#60a5fa" },
    { day: 3, top: 36, height: 20, label: "Brianna K.", color: "#f472b6" },
    { day: 0, top: 30, height: 16, label: "Destiny R.", color: "#a78bfa" },
  ];

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{ borderColor: "var(--line)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          This week
        </span>
        <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
          May 2026
        </span>
      </div>
      {/* Day headers */}
      <div className="grid grid-cols-5 px-3 pt-2 pb-1 gap-1">
        {days.map((d) => (
          <div key={d} className="text-center text-xs font-medium" style={{ color: "var(--ink-muted)" }}>
            {d}
          </div>
        ))}
      </div>
      {/* Calendar grid */}
      <div className="relative px-3 pb-4" style={{ height: 180 }}>
        <div className="grid grid-cols-5 gap-1 h-full">
          {days.map((_, colIdx) => (
            <div key={colIdx} className="relative rounded-lg" style={{ backgroundColor: "#0e0d0c" }} />
          ))}
        </div>
        {/* Appointment blocks overlaid */}
        {blocks.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-md px-1.5 flex items-center"
            style={{
              left: `calc(${b.day * 20}% + 0.75rem + ${b.day * 4}px)`,
              width: "calc(20% - 8px)",
              top: `${b.top}%`,
              height: `${b.height}%`,
              backgroundColor: `${b.color}22`,
              borderLeft: `2px solid ${b.color}`,
              overflow: "hidden",
            }}
          >
            <span className="text-xs truncate font-medium" style={{ color: b.color, fontSize: 9 }}>
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentMock() {
  return (
    <div
      className="rounded-2xl border p-8 flex flex-col items-center text-center gap-5"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      {/* Phone + NFC ripple */}
      <div className="relative flex items-center justify-center" style={{ width: 96, height: 96 }}>
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            backgroundColor: "rgba(245,166,35,0.06)",
            animation: "none",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 12,
            backgroundColor: "rgba(245,166,35,0.1)",
          }}
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
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--success)" }} />
        Approved
      </div>
      <p className="text-xs" style={{ color: "var(--ink-subtle)" }}>
        No terminal hardware required
      </p>
    </div>
  );
}

function ClientMock() {
  const history = [
    { service: "Cut & Blow Dry", date: "Apr 12", cost: "$75" },
    { service: "Full Head Colour", date: "Mar 1", cost: "$160" },
    { service: "Glossing Treatment", date: "Jan 18", cost: "$55" },
  ];
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
    >
      {/* Profile header */}
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
            14 visits &middot; Last seen 3 weeks ago
          </p>
        </div>
      </div>
      {/* Visit history */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: "var(--line)" }}
      >
        <div
          className="px-4 py-2 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-subtle)" }}>
            Visit history
          </p>
        </div>
        <div className="divide-y" style={{ borderColor: "var(--line)" }}>
          {history.map((h) => (
            <div key={h.date} className="flex items-center justify-between px-4 py-2.5 gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium truncate" style={{ color: "var(--ink)" }}>
                  {h.service}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                  {h.date}
                </p>
              </div>
              <span className="text-xs font-semibold flex-shrink-0" style={{ color: "var(--accent)" }}>
                {h.cost}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Notes */}
      <div
        className="mt-3 rounded-xl border p-3"
        style={{ borderColor: "var(--line)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--ink-subtle)" }}>
          Last note
        </p>
        <p className="text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Used Redken 7N + 20vol. Left 35 mins. Client very happy with result.
        </p>
      </div>
    </div>
  );
}

// ─── Stars helper ─────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ color: "var(--accent)" }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-24 pb-20">
        {/* Amber glow behind headline */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(245,166,35,0.18) 0%, transparent 65%)",
          }}
        />

        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-8"
            style={{
              borderColor: "rgba(245,166,35,0.3)",
              color: "var(--accent)",
              backgroundColor: "rgba(245,166,35,0.08)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            Now in early access
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ color: "var(--ink)" }}
          >
            The booking app your salon{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              actually deserves.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--ink-muted)" }}
          >
            Appointments, client management, and Tap to Pay &mdash; all from your
            iPhone. Built for salons that are done settling.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Request early access
            </Link>

            {/* App Store badge placeholder */}
            <div className="relative group">
              <div
                className="inline-flex items-center gap-3 rounded-full border px-5 py-3 cursor-default select-none"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  opacity: 0.45,
                }}
                aria-label="App Store — Coming soon"
              >
                {/* Apple icon placeholder */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs" style={{ color: "var(--ink-muted)" }}>
                    Download on the
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>
                    App Store
                  </div>
                </div>
              </div>
              {/* Tooltip */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "#1e1c1a", color: "var(--ink)" }}
              >
                Coming soon
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                  style={{ borderTopColor: "#1e1c1a" }}
                />
              </div>
            </div>
          </div>

          {/* Phone mock */}
          <PhoneMock />
        </div>
      </section>

      {/* ── Section 2: 3-persona strip ───────────────────────────────────── */}
      <section
        className="px-4 sm:px-6 py-20 border-y"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--ink)" }}
            >
              Built for everyone in the salon
            </h2>
            <p className="text-base" style={{ color: "var(--ink-muted)" }}>
              One app, three roles. No compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Studio Owner */}
            <div
              className="rounded-2xl border p-7 flex flex-col gap-4"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: "var(--accent)" }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                  Studio Owner
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                  Full visibility. Full control.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 mt-1">
                {[
                  "See your whole day at a glance",
                  "Know exactly what you&apos;re making before the day starts",
                  "Manage every stylist, every client, one app",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink-muted)" }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "var(--accent)" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Stylist / Staff */}
            <div
              className="rounded-2xl border p-7 flex flex-col gap-4"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: "var(--accent)" }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                  Stylist / Staff
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                  Everything you need, nothing extra.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 mt-1">
                {[
                  "Your schedule always in your pocket",
                  "Client notes and history at your fingertips",
                  "Accept payments without a terminal",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink-muted)" }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "var(--accent)" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client — Coming soon */}
            <div
              className="rounded-2xl border p-7 flex flex-col gap-4 relative overflow-hidden"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
            >
              {/* Coming soon overlay */}
              <div
                className="absolute top-4 right-4 text-xs font-semibold rounded-full px-2.5 py-0.5"
                style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "var(--accent)" }}
              >
                Coming soon
              </div>

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(245,166,35,0.06)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: "var(--ink-subtle)" }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "var(--ink-muted)" }}>
                  Client
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-subtle)" }}>
                  For your customers.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 mt-1">
                {[
                  "Book online anytime",
                  "Get reminders automatically",
                  "Pay deposits up front, nothing at the door",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ink-subtle)" }}>
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--ink-subtle)" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Up and running in minutes ─────────────────────────── */}
      <section className="px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--ink)" }}
            >
              Up and running in minutes
            </h2>
            <p className="text-base" style={{ color: "var(--ink-muted)" }}>
              No onboarding calls. No configuration spreadsheets. Just go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Download the app",
                body: "Create your salon profile in under 5 minutes. Add your services, your staff, and you&apos;re set.",
              },
              {
                step: "2",
                title: "Connect Stripe",
                body: "Link your bank account, start accepting payments the same day. No separate merchant account needed.",
              },
              {
                step: "3",
                title: "Go live",
                body: "Share your booking link. Done.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 border"
                    style={{
                      borderColor: "rgba(245,166,35,0.35)",
                      backgroundColor: "rgba(245,166,35,0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    {step}
                  </div>
                  {/* Connector line — only on md+, between steps */}
                  {step !== "3" && (
                    <div
                      className="hidden md:block flex-1 h-px"
                      style={{ backgroundColor: "var(--line)" }}
                    />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-base mb-1.5" style={{ color: "var(--ink)" }}>
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--ink-muted)" }}
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats bar ─────────────────────────────────────────── */}
      <div
        className="border-y"
        style={{ borderColor: "var(--line)", backgroundColor: "#0d0c0b" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { number: "100%", label: "iPhone-native — no web app workarounds" },
              { number: "$0", label: "terminal hardware required" },
              { number: "< 5 min", label: "to first booking" },
              { number: "1", label: "app for scheduling, clients, and payments" },
            ].map(({ number, label }) => (
              <div key={number} className="flex flex-col gap-1">
                <span
                  className="text-4xl sm:text-5xl font-bold tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  {number}
                </span>
                <span className="text-sm leading-snug" style={{ color: "var(--ink-muted)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 5: Feature highlights ───────────────────────────────── */}
      <section className="px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-6xl flex flex-col gap-28">

          {/* Feature 1 — Appointments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <CalendarMock />
            </div>
            <div className="order-1 lg:order-2">
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                style={{ color: "var(--accent)" }}
              >
                Appointments
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                style={{ color: "var(--ink)" }}
              >
                Your whole week, one screen
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: "var(--ink-muted)" }}>
                See every appointment, every stylist, every day. Reschedule with a
                drag. Cancel with a tap. No double-booking, ever &mdash; the app
                enforces it.
              </p>
              <Link
                href="/features#appointments"
                className="text-sm font-semibold inline-flex items-center gap-1"
                style={{ color: "var(--accent)" }}
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9,4 13,8 9,12" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Feature 2 — Tap to Pay */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                style={{ color: "var(--accent)" }}
              >
                Payments
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                style={{ color: "var(--ink)" }}
              >
                Accept cards on your iPhone. No reader needed.
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: "var(--ink-muted)" }}>
                Tap to Pay on iPhone turns your phone into a terminal. No hardware.
                No monthly equipment fee. Just tap and go.
              </p>
              <Link
                href="/features#payments"
                className="text-sm font-semibold inline-flex items-center gap-1"
                style={{ color: "var(--accent)" }}
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9,4 13,8 9,12" />
                </svg>
              </Link>
            </div>
            <div>
              <PaymentMock />
            </div>
          </div>

          {/* Feature 3 — Client management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ClientMock />
            </div>
            <div className="order-1 lg:order-2">
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                style={{ color: "var(--accent)" }}
              >
                Client management
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-5"
                style={{ color: "var(--ink)" }}
              >
                Every client remembered
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: "var(--ink-muted)" }}>
                Full visit history, notes, contact info, and preferences &mdash;
                all tied to their profile. Your new hire knows the regular clients
                on day one.
              </p>
              <Link
                href="/features#clients"
                className="text-sm font-semibold inline-flex items-center gap-1"
                style={{ color: "var(--accent)" }}
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9,4 13,8 9,12" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 6: Testimonials ──────────────────────────────────────── */}
      <section
        className="px-4 sm:px-6 py-24 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "var(--ink)" }}
            >
              Salon owners love it
            </h2>
            <p className="text-base" style={{ color: "var(--ink-muted)" }}>
              From independent stylists to multi-chair studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I was using three different apps for scheduling, payments, and client notes. reservalab replaced all of them. My staff figured it out in an afternoon.",
                author: "Marcus T.",
                role: "Owner",
                salon: "Luxe Studio, Atlanta",
              },
              {
                quote:
                  "Tap to Pay changed everything for me. I used to chase clients for payment. Now it’s handled before they leave the chair.",
                author: "Brianna K.",
                role: "Stylist",
                salon: "Halo Salon, Houston",
              },
              {
                quote:
                  "The calendar sync is what got me. I see my whole team’s day from my phone before I even get to the salon.",
                author: "Destiny R.",
                role: "Owner",
                salon: "Glow Bar, Miami",
              },
            ].map(({ quote, author, role, salon }) => (
              <div
                key={author}
                className="rounded-2xl border p-7 flex flex-col gap-4"
                style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
              >
                <Stars />
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink)" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                    {author}
                    <span className="font-normal ml-1" style={{ color: "var(--ink-muted)" }}>
                      &middot; {role}
                    </span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                    {salon}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: "var(--ink-subtle)" }}>
            Testimonials are representative of expected user experiences.
          </p>
        </div>
      </section>

      {/* ── Section 7: Pricing teaser ────────────────────────────────────── */}
      <section
        className="px-4 sm:px-6 py-20 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--ink)" }}
          >
            Simple pricing. No surprises.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--ink-muted)" }}>
            We&apos;re offering founding member pricing for salons that get in early.
            One straightforward plan, everything included &mdash; no add-ons, no
            overages, no gotchas.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            See pricing →
          </Link>
        </div>
      </section>

      {/* ── Section 8: Final CTA banner ──────────────────────────────────── */}
      <section
        className="px-4 sm:px-6 py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {/* Subtle texture overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.22) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "#0a0a0a" }}
          >
            Your salon runs better on reservalab.
          </h2>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(10,10,10,0.65)" }}
          >
            Join the waitlist. Founding member pricing locked in for early adopters.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#0a0a0a", color: "var(--accent)" }}
          >
            Request early access
          </Link>
        </div>
      </section>
    </>
  );
}
