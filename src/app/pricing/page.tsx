import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Founding member pricing for reservalab. Limited spots, locked-in rate, and white-glove onboarding for early adopters.",
  openGraph: {
    title: "Pricing | reservalab",
    description:
      "Founding member pricing for reservalab. Limited spots, locked-in rate, and white-glove onboarding for early adopters.",
  },
};

const included = [
  "Full appointment scheduling and calendar",
  "Unlimited client records with history and notes",
  "Tap to Pay on iPhone (no terminal hardware)",
  "Card-on-file deposits for no-show protection",
  "Real-time sync across all your devices",
  "Multi-location and multi-staff support",
  "Online customer booking page (coming soon)",
  "Priority support from the founding team",
  "Rate locked for the lifetime of your account",
];

const faqs = [
  {
    q: "What does 'early access pricing' mean?",
    a: "We're onboarding a small number of founding members before the public launch. Early access members get a discounted rate that is locked in for as long as they stay on the platform — it never increases even after we raise prices publicly.",
  },
  {
    q: "How many spots are available?",
    a: "We're keeping the founding cohort intentionally small so we can give each member real attention during onboarding. Once those spots are filled, we'll move to a standard waitlist.",
  },
  {
    q: "Do I need any hardware?",
    a: "No. Tap to Pay on iPhone uses your existing iPhone's NFC chip. There is no card reader, no terminal, no POS hardware to buy. Your phone is the payment device.",
  },
  {
    q: "What about Stripe fees?",
    a: "Stripe charges standard transaction fees (1.4% + 25p for EU cards, 2.9% + 30p for non-EU) on top of reservalab's subscription. These are Stripe's fees — we don't take a cut of your transactions.",
  },
  {
    q: "Is there a contract or minimum term?",
    a: "No contracts, no lock-in. Cancel any time. We just ask that you give it a genuine try — the white-glove onboarding is designed to get you running properly within a week.",
  },
];

export default function PricingPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Founding member pricing
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Simple, honest pricing
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--ink-muted)" }}
          >
            One plan. Everything included. We&apos;re not ready to publish a
            number on a web page until we&apos;ve talked to you — every salon
            is different, and we want to price fairly.
          </p>
        </div>

        {/* Pricing card */}
        <div
          className="relative rounded-2xl border overflow-hidden mb-12"
          style={{ borderColor: "rgba(245,166,35,0.3)", backgroundColor: "var(--bg-card)" }}
        >
          {/* Top gradient */}
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: "linear-gradient(90deg, var(--accent) 0%, #ffcf6e 100%)" }}
          />

          <div className="p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold mb-4"
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
                  Limited founding spots
                </div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  Founding member
                </h2>
                <p style={{ color: "var(--ink-muted)" }}>
                  Full access. Locked-in rate. White-glove onboarding.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p
                  className="text-4xl font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Contact us
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
                  for founding member rate
                </p>
              </div>
            </div>

            <div
              className="border-t pt-8 mb-8"
              style={{ borderColor: "var(--line)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--ink-subtle)" }}
              >
                Everything included
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--ink)" }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(245,166,35,0.15)",
                        color: "var(--accent)",
                      }}
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold transition-all hover:scale-[1.01]"
              style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            >
              Request founding member access →
            </Link>
          </div>
        </div>

        {/* Trust line */}
        <p
          className="text-center text-sm mb-20"
          style={{ color: "var(--ink-muted)" }}
        >
          No credit card required to apply. No contract. Cancel any time.
        </p>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold tracking-tight mb-8 text-center"
            style={{ color: "var(--ink)" }}
          >
            Common questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
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
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
