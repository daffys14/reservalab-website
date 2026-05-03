import Link from "next/link";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <Link
            href="/"
            className="font-bold text-base tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            reserva<span style={{ color: "var(--accent)" }}>lab</span>
          </Link>
          <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
            Built with ❤️ for salons.
          </p>
          <p className="text-xs" style={{ color: "var(--ink-subtle)" }}>
            &copy; {new Date().getFullYear()} reservalab. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {footerLinks.map(({ href, label }) => (
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
    </footer>
  );
}
