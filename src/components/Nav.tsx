"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(10,10,10,0.85)",
        borderColor: "var(--line)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          reserva<span style={{ color: "var(--accent)" }}>lab</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{
                color:
                  pathname === href ? "var(--ink)" : "var(--ink-muted)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            style={{
              backgroundColor: "var(--accent)",
              color: "#0a0a0a",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-deep)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
          >
            Request access
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-0.5 w-5 rounded transition-all"
              style={{
                backgroundColor: "var(--ink)",
                transform: menuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : undefined,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-all"
              style={{
                backgroundColor: "var(--ink)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-all"
              style={{
                backgroundColor: "var(--ink)",
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : undefined,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 pb-4 pt-3 flex flex-col gap-3"
          style={{ borderColor: "var(--line)" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium py-1"
              style={{ color: "var(--ink-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold w-full"
            style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            onClick={() => setMenuOpen(false)}
          >
            Request access
          </Link>
        </div>
      )}
    </header>
  );
}
