import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact / Request access",
  description:
    "Request early access to reservalab. Tell us about your salon and we'll be in touch within 24 hours.",
  openGraph: {
    title: "Contact | reservalab",
    description:
      "Request early access to reservalab. Tell us about your salon and we'll be in touch within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Early access
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-5"
            style={{ color: "var(--ink)" }}
          >
            Request access
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            We&apos;re onboarding founding members now. Tell us about your salon
            and we&apos;ll be in touch within 24 hours to walk you through a
            demo and discuss whether it&apos;s a fit.
          </p>
        </div>

        {/* Info strip */}
        <div
          className="rounded-2xl border p-5 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-card)" }}
        >
          {[
            { label: "Response time", value: "Within 24 hours" },
            { label: "What happens next", value: "Personal demo call" },
            { label: "No commitment", value: "Just a conversation" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "var(--ink-subtle)" }}
              >
                {item.label}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
