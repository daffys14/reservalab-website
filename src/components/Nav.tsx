"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const compareLinks = [
  { href: "/compare/square", label: "vs Square" },
  { href: "/compare/booksy", label: "vs Booksy" },
  { href: "/compare/glossgenius", label: "vs GlossGenius" },
];


export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [mobileCompareOpen, setMobileCompareOpen] = useState(false);

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

          {/* Compare dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompareOpen(true)}
            onMouseLeave={() => setCompareOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: isComparePage ? "var(--ink)" : "var(--ink-muted)" }}
              aria-expanded={compareOpen}
              aria-haspopup="true"
            >
              Compare
              <svg
                className="w-3.5 h-3.5 transition-transform"
                style={{ transform: compareOpen ? "rotate(180deg)" : undefined }}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4,6 8,10 12,6" />
              </svg>
            </button>

            {compareOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl border overflow-hidden w-44"
                style={{
                  backgroundColor: "#111111",
                  borderColor: "var(--line)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                {compareLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2.5 text-sm transition-colors"
                    style={{
                      color: pathname === href ? "var(--accent)" : "var(--ink-muted)",
                      backgroundColor: pathname === href ? "rgba(245,166,35,0.06)" : undefined,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        pathname === href ? "rgba(245,166,35,0.06)" : "";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        pathname === href ? "var(--accent)" : "var(--ink-muted)";
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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

          {/* Compare — expandable on mobile */}
          <div>
            <button
              className="flex items-center gap-1.5 text-sm font-medium py-2 w-full text-left"
              style={{ color: isComparePage ? "var(--ink)" : "var(--ink-muted)" }}
              onClick={() => setMobileCompareOpen((o) => !o)}
              aria-expanded={mobileCompareOpen}
            >
              Compare
              <svg
                className="w-3.5 h-3.5 transition-transform"
                style={{ transform: mobileCompareOpen ? "rotate(180deg)" : undefined }}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4,6 8,10 12,6" />
              </svg>
            </button>
            {mobileCompareOpen && (
              <div className="pl-4 flex flex-col gap-0.5 mb-1">
                {compareLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm py-1.5"
                    style={{ color: pathname === href ? "var(--accent)" : "var(--ink-muted)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
