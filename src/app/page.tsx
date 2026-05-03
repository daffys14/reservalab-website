import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservalab — Your salon, beautifully managed",
  description:
    "Native iOS salon management for independent owners and small chains. Appointments, clients, and payments — no hardware terminals, no complexity.",
  openGraph: {
    title: "reservalab — Your salon, beautifully managed",
    description:
      "Native iOS salon management for independent owners and small chains. Appointments, clients, and payments — no hardware terminals, no complexity.",
  },
};

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Smart scheduling",
    description:
      "Book, reschedule, and manage appointments in seconds. Conflict detection, buffer times, and multi-staff support built in.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client management",
    description:
      "Full visit history, notes, do-not-book flags, and smart archiving. Know every client before they walk in.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Built-in payments",
    description:
      "Tap to Pay on iPhone for in-person. Card-on-file deposits for bookings. No terminal hardware ever.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Native iOS",
    description:
      "Not a web app wrapped in a shell. Built entirely in SwiftUI for the speed, reliability, and privacy iPhone users expect.",
  },
];

const testimonials = [
  {
    quote:
      "I finally have a system that matches how I actually work. The Tap to Pay feature alone saved me from buying a card reader.",
    author: "Amara J.",
    salon: "Studio Amara, Atlanta",
  },
  {
    quote:
      "Switching from a paper book to reservalab took one afternoon. My clients noticed the difference immediately.",
    author: "Sophia R.",
    salon: "Sophia Hair & Beauty, Houston",
  },
  {
    quote:
      "The client history feature is everything. I know exactly what color formula we used six months ago without digging through notes.",
    author: "Nadia O.",
    salon: "The Mane Studio, Miami",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-24 pb-32">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,166,35,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-8"
            style={{
              borderColor: "rgba(245,166,35,0.3)",
              color: "var(--accent)",
              backgroundColor: "rgba(245,166,35,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Now in early access
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ color: "var(--ink)" }}
          >
            Your salon,{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              beautifully
            </span>{" "}
            managed.
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--ink-muted)" }}
          >
            iOS-native salon management for independent owners. Appointments,
            clients, and Stripe payments — no hardware terminals, no subscription
            traps, no complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Request early access
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium border transition-colors"
              style={{
                borderColor: "var(--line)",
                color: "var(--ink-muted)",
              }}
            >
              See all features
            </Link>
          </div>
        </div>

        {/* Hero visual — abstract phone mockup */}
        <div className="mt-20 mx-auto max-w-2xl">
          <div
            className="relative rounded-2xl border overflow-hidden"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Decorative gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,166,35,0.06) 0%, rgba(17,17,17,1) 60%)",
              }}
            />
            <div className="relative px-8 py-12 grid grid-cols-2 gap-4">
              {/* Mock calendar widget */}
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--line)",
                }}
              >
                <div
                  className="text-xs font-semibold mb-3"
                  style={{ color: "var(--ink-muted)" }}
                >
                  Today — 4 appointments
                </div>
                {["9:00 AM Sarah K.", "11:30 AM Maria L.", "2:00 PM Priya N.", "4:30 PM Amelia T."].map(
                  (appt) => (
                    <div
                      key={appt}
                      className="flex items-center gap-2 py-1.5 border-b last:border-0"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "var(--ink)" }}
                      >
                        {appt}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Mock stats widget */}
              <div className="flex flex-col gap-3">
                <div
                  className="rounded-xl p-4 border flex-1"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    This week
                  </div>
                  <div
                    className="text-2xl font-bold mt-1"
                    style={{ color: "var(--ink)" }}
                  >
                    $1,240
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--success)" }}
                  >
                    +12% vs last week
                  </div>
                </div>
                <div
                  className="rounded-xl p-4 border flex-1"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    Tap to Pay
                  </div>
                  <div
                    className="text-2xl font-bold mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    Ready
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    No terminal needed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "var(--ink)" }}
            >
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--ink-muted)" }}
            >
              Designed for how salons actually work — not how enterprise
              software thinks they do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border p-6 transition-colors group"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--line)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                  style={{
                    backgroundColor: "rgba(245,166,35,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section
        className="px-4 sm:px-6 py-24 border-y"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
              style={{ color: "var(--ink)" }}
            >
              Salon owners love it
            </h2>
            <p style={{ color: "var(--ink-muted)" }}>
              From independent stylists to multi-chair studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border p-7 flex flex-col gap-4"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--line)",
                }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={{ color: "var(--accent)" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                    {t.salon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-32 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "var(--ink)" }}
          >
            Ready to run your salon better?
          </h2>
          <p
            className="text-lg mb-10"
            style={{ color: "var(--ink-muted)" }}
          >
            We&apos;re onboarding founding members now. Limited spots — get
            early access pricing locked in.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
          >
            Request early access →
          </Link>
        </div>
      </section>
    </>
  );
}
