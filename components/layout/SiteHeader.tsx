"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/plans", label: "Plans" },
  { href: "/apply", label: "Apply" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-beige/80 bg-ivory/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-serif)] text-lg">
          Lepley Nutrition
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-beige md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-ink"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-beige/60 bg-ivory/95 backdrop-blur md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-beige/60 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
