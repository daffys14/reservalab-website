import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "reservalab covers the full loop — appointments, client management, Tap to Pay, real-time sync — built for every role in your salon.",
  openGraph: {
    title: "Features | reservalab",
    description:
      "reservalab covers the full loop — appointments, client management, Tap to Pay, real-time sync — built for every role in your salon.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Everything your salon needs.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, var(--accent) 0%, #ffcf6e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built for everyone in it.
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--ink-muted)" }}>
            One app. Three roles. No compromises. Choose your perspective to see how
            reservalab works for you.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Studio Owners */}
          <Link
            href="/features/owners"
            className="group relative rounded-2xl border p-8 flex flex-col gap-6 transition-all hover:scale-[1.02] hover:-translate-y-1"
            style={{
              borderColor: "var(--line)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 70%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                style={{ color: "var(--accent)" }}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
                For Studio Owners
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Full visibility across every stylist, every client, every dollar. See your
                day before you walk in the door. Manage multiple locations from one dashboard.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent)" }}>
              Explore owner features
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9,4 13,8 9,12" />
              </svg>
            </div>
          </Link>

          {/* Stylists */}
          <Link
            href="/features/stylists"
            className="group relative rounded-2xl border p-8 flex flex-col gap-6 transition-all hover:scale-[1.02] hover:-translate-y-1"
            style={{
              borderColor: "var(--line)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 70%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                style={{ color: "var(--accent)" }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
                For Stylists &amp; Staff
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Your schedule always in your pocket. Accept payment with your iPhone. Client
                notes and formulas accessible the moment you need them — no front desk trips.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent)" }}>
              Explore stylist features
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9,4 13,8 9,12" />
              </svg>
            </div>
          </Link>

          {/* Clients — coming soon */}
          <div
            className="relative rounded-2xl border p-8 flex flex-col gap-6 overflow-hidden"
            style={{
              borderColor: "var(--line)",
              backgroundColor: "var(--bg-card)",
              opacity: 0.6,
            }}
          >
            {/* Coming soon badge */}
            <div
              className="absolute top-5 right-5 text-xs font-semibold rounded-full px-2.5 py-0.5"
              style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "var(--accent)" }}
            >
              Coming soon
            </div>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                style={{ color: "var(--ink-subtle)" }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-xl font-bold mb-2" style={{ color: "var(--ink-muted)" }}>
                For Clients
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-subtle)" }}>
                Book online anytime. Get automatic reminders. Pay deposits up front so there&apos;s
                nothing to hand over at the door.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--ink-subtle)" }}>
              Coming soon
            </div>
          </div>
        </div>

        {/* Bottom nudge */}
        <div className="mt-20 text-center">
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
            Want to see it in action?{" "}
            <Link
              href="/contact"
              className="font-semibold underline underline-offset-4"
              style={{ color: "var(--accent)" }}
            >
              Request early access
            </Link>{" "}
            and we&apos;ll walk you through the app with your own salon&apos;s setup.
          </p>
        </div>
      </div>
    </div>
  );
}
