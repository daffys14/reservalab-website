import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Link
              href="/"
              className="font-bold text-base tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              reserva<span style={{ color: "var(--accent)" }}>lab</span>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              Native iOS salon management. Appointments, clients, and Tap to Pay — all from your iPhone.
            </p>
            <p className="text-xs" style={{ color: "var(--ink-subtle)" }}>
              &copy; {new Date().getFullYear()} reservalab. All rights reserved.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-subtle)" }}>
              Features
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/features/owners", label: "For Owners" },
                { href: "/features/stylists", label: "For Stylists" },
                { href: "/pricing", label: "Pricing" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Compare */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-subtle)" }}>
              Compare
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/compare"
                className="text-sm transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                Compare competitors
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-subtle)" }}>
              Company
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
