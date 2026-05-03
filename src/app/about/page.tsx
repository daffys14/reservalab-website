import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "reservalab was built by a developer who ran a salon. Every feature exists because we needed it ourselves.",
  openGraph: {
    title: "About | reservalab",
    description:
      "reservalab was built by a developer who ran a salon. Every feature exists because we needed it ourselves.",
  },
};

const values = [
  {
    title: "Privacy-first",
    description:
      "Your client data belongs to you. We don't sell it, analyse it for advertising, or share it with third parties. Full stop.",
  },
  {
    title: "No hardware lock-in",
    description:
      "Every other salon system wants to sell you a tablet, a card reader, or a receipt printer. We use the iPhone you already own.",
  },
  {
    title: "Built for iPhone",
    description:
      "Not a web app in a wrapper. Not a cross-platform app that feels awkward. Native SwiftUI, built to Apple's HIG, because your time is worth it.",
  },
  {
    title: "Honest pricing",
    description:
      "We don't lure you in with a free tier and remove features later. One fair price, everything included, locked in when you join.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Our story
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "var(--ink)" }}
          >
            Built by someone who ran a salon
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            Every feature in reservalab exists because we needed it ourselves.
          </p>
        </div>

        {/* Story */}
        <div
          className="rounded-2xl border p-8 sm:p-10 mb-16 relative overflow-hidden"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
        >
          <div
            className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2"
            style={{
              background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative prose-like flex flex-col gap-5">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              I am a software developer. For a few years I also ran a small
              hair salon with my partner. We tried every booking system on the
              market — the legacy ones with their 1990s interfaces, the new ones
              that looked nice but required a monthly fee for each feature, the
              ones that insisted on selling us hardware we never used.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              None of them felt like they were built for how we actually worked.
              We used our iPhones for everything. We knew our clients by name.
              We hated that no-show protection meant a clunky deposit workflow.
              We hated that checking the day&apos;s appointments before leaving
              the house required logging into a web portal on mobile.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              So I built reservalab. Starting from the frustrations we lived
              with daily — a real calendar that made sense on an iPhone screen,
              Tap to Pay without a terminal, client notes you&apos;d actually
              want to read, sync that just worked. Nothing I wouldn&apos;t use
              myself.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              This is a product I&apos;d have paid for. I hope it feels that
              way to you too.
            </p>
            <div className="pt-3 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                style={{
                  backgroundColor: "rgba(245,166,35,0.15)",
                  color: "var(--accent)",
                }}
              >
                O
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  Odefe Enabulele — founder
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-muted)" }}>
                  Developer. Former salon owner. reservalab customer #1.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2
            className="text-2xl font-bold tracking-tight mb-8"
            style={{ color: "var(--ink)" }}
          >
            What we believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--line)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl border p-8 text-center"
          style={{ borderColor: "rgba(245,166,35,0.25)", backgroundColor: "rgba(245,166,35,0.04)" }}
        >
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: "var(--ink)" }}
          >
            We&apos;d love to hear from you
          </h2>
          <p
            className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
            style={{ color: "var(--ink-muted)" }}
          >
            Whether you&apos;re curious about the platform or want to talk
            through whether it&apos;s a fit for your salon — reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
