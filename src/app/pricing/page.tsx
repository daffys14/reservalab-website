import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Founding member pricing for reservalab — $29/month locked for life. First 50 salons only. Standard plan $79/month.",
  openGraph: {
    title: "Pricing | reservalab",
    description:
      "Founding member pricing for reservalab — $29/month locked for life. First 50 salons only. Standard plan $79/month.",
  },
};

const foundingFeatures: (string | { text: string; badge: string })[] = [
  "Unlimited appointments",
  "Unlimited clients",
  "Tap to Pay on iPhone",
  "Multi-stylist scheduling",
  "Client management + history",
  "Real-time sync across devices",
  "Automated email notifications",
  { text: "Push notifications for staff", badge: "Coming soon" },
  "Email support",
  "All future features included",
  "Your booking page at [yourname].reservalab.com",
];

const standardFeatures: (string | { text: string; highlight?: boolean })[] = [
  "Unlimited appointments",
  "Unlimited clients",
  "Tap to Pay on iPhone",
  "Multi-stylist scheduling",
  "Client management + history",
  "Real-time sync across devices",
  "Automated email notifications",
  "Push notifications for staff",
  "Email support",
  "All future features included",
  "Your booking page at [yourname].reservalab.com",
  { text: "Custom domain — book.yoursalon.com included", highlight: true },
];

const faqs = [
  {
    q: "Is there a contract?",
    a: "No. Month-to-month. Cancel anytime. Your data exports with you.",
  },
  {
    q: "What does Tap to Pay cost?",
    a: "Stripe's standard processing rate applies (2.9% + 30¢ per transaction). reservalab doesn’t add a markup.",
  },
  {
    q: "What happens when the founding member spots run out?",
    a: "New signups move to Standard ($79/month). Founding member pricing is locked forever for early adopters.",
  },
  {
    q: "Do I need hardware?",
    a: "No. Your iPhone is the terminal. No card reader, no monthly equipment fee.",
  },
  {
    q: "Can I add more locations later?",
    a: "Yes. Each additional location is $29/month, added instantly from your dashboard.",
  },
  {
    q: "What notifications does reservalab send?",
    a: "Clients receive automatic email confirmations when they book, a reminder 24 hours before their appointment, and a thank-you after. Staff and owners receive push notifications for new bookings, payments, and cancellations. SMS notifications are available as an add-on.",
  },
];

function CheckIcon() {
  return (
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
  );
}

export default function PricingPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-5xl">

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
            One plan. Everything included. No hidden fees, no per-feature
            paywalls.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start">

          {/* ── Founding Member card ── */}
          <div
            className="relative rounded-2xl border overflow-hidden"
            style={{
              borderColor: "rgba(245,166,35,0.45)",
              backgroundColor: "var(--bg-card)",
              boxShadow:
                "0 0 0 1px rgba(245,166,35,0.12), 0 0 40px rgba(245,166,35,0.08)",
            }}
          >
            {/* Top amber bar */}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent) 0%, #ffcf6e 100%)",
              }}
            />

            <div className="p-8 pt-9">
              {/* Badges row */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{
                    borderColor: "rgba(245,166,35,0.4)",
                    color: "var(--accent)",
                    backgroundColor: "rgba(245,166,35,0.1)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  Limited spots
                </span>
                <span
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{
                    borderColor: "rgba(245,166,35,0.4)",
                    color: "var(--accent)",
                    backgroundColor: "rgba(245,166,35,0.1)",
                  }}
                >
                  Best value
                </span>
              </div>

              {/* Plan name + tagline */}
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: "var(--ink)" }}
              >
                Founding Member
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--ink-muted)" }}>
                Locked in for life. First 50 salons only.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className="text-5xl font-bold tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  $29
                </span>
                <span
                  className="text-base font-medium ml-1"
                  style={{ color: "var(--ink-muted)" }}
                >
                  /month
                </span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3 mb-8">
                {foundingFeatures.map((item) => {
                  const hasBadge = typeof item === "object" && "badge" in item;
                  const text = typeof item === "object" ? item.text : item;
                  const badge = hasBadge && typeof item === "object" && "badge" in item ? item.badge : null;
                  return (
                    <li
                      key={text}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--ink)" }}
                    >
                      <CheckIcon />
                      <span className="flex items-center gap-2 flex-wrap">
                        {text}
                        {badge && (
                          <span
                            className="text-xs rounded-full px-2 py-0.5 font-medium"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.06)",
                              color: "var(--ink-subtle)",
                              border: "1px solid var(--line)",
                            }}
                          >
                            {badge}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold transition-all hover:scale-[1.01]"
                style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
              >
                Claim your spot &rarr;
              </Link>
              <p
                className="text-xs text-center mt-3"
                style={{ color: "var(--ink-subtle)" }}
              >
                No credit card required to apply.
              </p>
              <p
                className="text-xs text-center mt-4"
                style={{ color: "var(--ink-subtle)" }}
              >
                Want your own domain? Add custom domain for $15/month.
              </p>
            </div>
          </div>

          {/* ── Standard card ── */}
          <div
            className="relative rounded-2xl border overflow-hidden"
            style={{
              borderColor: "var(--line)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div className="p-8">
              {/* Plan name + tagline */}
              <div className="mb-5">
                {/* spacer so price aligns with founding card */}
                <div className="h-[28px]" />
              </div>
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: "var(--ink)" }}
              >
                Standard
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--ink-muted)" }}>
                Everything you need to run a modern salon.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className="text-5xl font-bold tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  $79
                </span>
                <span
                  className="text-base font-medium ml-1"
                  style={{ color: "var(--ink-muted)" }}
                >
                  /month
                </span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3 mb-8">
                {standardFeatures.map((item) => {
                  const isHighlight = typeof item === "object" && item.highlight;
                  const text = typeof item === "object" ? item.text : item;
                  return (
                    <li
                      key={text}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: isHighlight ? "var(--accent)" : "var(--ink)" }}
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
                        style={{
                          backgroundColor: isHighlight
                            ? "rgba(245,166,35,0.25)"
                            : "rgba(245,166,35,0.15)",
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
                      {isHighlight ? <strong>{text}</strong> : text}
                    </li>
                  );
                })}
              </ul>

              {/* CTA — ghost/outline */}
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border px-8 py-3.5 text-base font-semibold transition-all hover:scale-[1.01]"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                  backgroundColor: "transparent",
                }}
              >
                Get started &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Additional locations note */}
        <div className="text-sm text-center mb-20 px-4 flex flex-col gap-2">
          <p style={{ color: "var(--ink-muted)" }}>
            Need multiple locations? Add any location for{" "}
            <span style={{ color: "var(--ink)" }} className="font-semibold">
              $29/month
            </span>
            . Same app, same dashboard, different view.
          </p>
          <p style={{ color: "var(--ink-subtle)" }}>
            All plans include a free{" "}
            <span className="font-medium" style={{ color: "var(--ink-muted)" }}>
              [yourname].reservalab.com
            </span>{" "}
            booking page. Custom domain (
            <span className="font-medium" style={{ color: "var(--ink-muted)" }}>
              book.yoursalon.com
            </span>
            ) included in Standard, or add it to any plan for $15/month.
          </p>
        </div>

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
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ink-muted)" }}
                >
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
