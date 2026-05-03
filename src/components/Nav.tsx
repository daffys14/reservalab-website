"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isComparePage = pathname.startsWith("/compare");

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
          className="font-bold text-lg tracking-tight flex-shrink-0"
          style={{ color: "var(--ink)" }}
        >
          reserva<span style={{ color: "var(--accent)" }}>lab</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* How it works — smooth scroll link */}
          <Link
            href="/#steps"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--ink-muted)" }}
          >
            How it works
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors"
            style={{
              color: pathname === "/pricing" ? "var(--ink)" : "var(--ink-muted)",
            }}
          >
            Pricing
          </Link>

          {/* Compare */}
          <Link
            href="/compare"
            className="text-sm font-medium transition-colors"
            style={{
              color: isComparePage ? "var(--ink)" : "var(--ink-muted)",
            }}
          >
            Compare
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="text-sm font-medium transition-colors"
            style={{
              color: pathname === "/about" ? "var(--ink)" : "var(--ink-muted)",
            }}
          >
            About
          </Link>
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
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-deep)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)")
            }
          >
            Get started
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
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : undefined,
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
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : undefined,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 pb-4 pt-3 flex flex-col gap-1"
          style={{ borderColor: "var(--line)" }}
        >
          <Link
            href="/#steps"
            className="text-sm font-medium py-2"
            style={{ color: "var(--ink-muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            How it works
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium py-2"
            style={{ color: "var(--ink-muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>

          {/* Compare */}
          <Link
            href="/compare"
            className="text-sm font-medium py-2"
            style={{ color: isComparePage ? "var(--ink)" : "var(--ink-muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            Compare
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium py-2"
            style={{ color: "var(--ink-muted)" }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold w-full"
            style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
