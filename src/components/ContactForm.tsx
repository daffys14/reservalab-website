"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";

const initialState = {
  ok: false as boolean | undefined,
  fieldErrors: {} as Record<string, string>,
  formError: undefined as string | undefined,
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.ok === true) {
    return (
      <div
        className="rounded-2xl border p-10 text-center"
        style={{ borderColor: "rgba(34,197,94,0.3)", backgroundColor: "rgba(34,197,94,0.05)" }}
      >
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
          style={{ backgroundColor: "rgba(34,197,94,0.15)" }}
        >
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--success)" }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
          Message received
        </h2>
        <p style={{ color: "var(--ink-muted)" }}>
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-5">
      {state.formError && (
        <div
          className="rounded-xl border px-4 py-3 text-sm"
          style={{
            borderColor: "rgba(239,68,68,0.3)",
            backgroundColor: "rgba(239,68,68,0.06)",
            color: "var(--danger)",
          }}
          role="alert"
        >
          {state.formError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--ink)" }}
          >
            Your name <span style={{ color: "var(--danger)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
            style={{
              borderColor: state.fieldErrors?.name ? "var(--danger)" : "var(--line)",
              backgroundColor: "var(--bg-card)",
              color: "var(--ink)",
            }}
            placeholder="Jane Smith"
          />
          {state.fieldErrors?.name && (
            <p id="name-error" className="mt-1.5 text-xs" style={{ color: "var(--danger)" }}>
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        {/* Salon name */}
        <div>
          <label
            htmlFor="salonName"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--ink)" }}
          >
            Salon name <span style={{ color: "var(--danger)" }}>*</span>
          </label>
          <input
            id="salonName"
            name="salonName"
            type="text"
            required
            aria-describedby={state.fieldErrors?.salonName ? "salonName-error" : undefined}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
            style={{
              borderColor: state.fieldErrors?.salonName ? "var(--danger)" : "var(--line)",
              backgroundColor: "var(--bg-card)",
              color: "var(--ink)",
            }}
            placeholder="Studio Jane, London"
          />
          {state.fieldErrors?.salonName && (
            <p id="salonName-error" className="mt-1.5 text-xs" style={{ color: "var(--danger)" }}>
              {state.fieldErrors.salonName}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--ink)" }}
        >
          Email address <span style={{ color: "var(--danger)" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
          style={{
            borderColor: state.fieldErrors?.email ? "var(--danger)" : "var(--line)",
            backgroundColor: "var(--bg-card)",
            color: "var(--ink)",
          }}
          placeholder="jane@studiosomething.com"
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1.5 text-xs" style={{ color: "var(--danger)" }}>
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--ink)" }}
        >
          Phone{" "}
          <span className="text-xs font-normal" style={{ color: "var(--ink-muted)" }}>
            (optional)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
          style={{
            borderColor: "var(--line)",
            backgroundColor: "var(--bg-card)",
            color: "var(--ink)",
          }}
          placeholder="+44 7700 900000"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--ink)" }}
        >
          Tell us about your salon{" "}
          <span style={{ color: "var(--danger)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors resize-none"
          style={{
            borderColor: state.fieldErrors?.message ? "var(--danger)" : "var(--line)",
            backgroundColor: "var(--bg-card)",
            color: "var(--ink)",
          }}
          placeholder="How many staff do you have? What system are you using now? What's your biggest pain point?"
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1.5 text-xs" style={{ color: "var(--danger)" }}>
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
        style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
