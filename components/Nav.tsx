"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

/**
 * Sticky navigation. Sits transparent over the Ink hero, then fades to a solid
 * Paper bar with a hairline once the page is scrolled. Collapses to a simple
 * disclosure menu on small screens.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The hero is Ink, so the nav reads "dark" (light logo/links) until scrolled.
  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-b-[var(--hairline)] bg-paper/85 backdrop-blur-md"
          : "border-b border-b-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 md:h-20">
        <a
          href="#top"
          aria-label="Velocifi — home"
          className="flex items-center"
        >
          <Logo theme={onDark ? "dark" : "light"} size={28} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-tight transition-colors hover:text-signal ${
                  onDark ? "text-paper" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`md:hidden ${onDark ? "text-paper" : "text-ink"}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-t-[var(--hairline)] bg-paper md:hidden"
        >
          <ul className="mx-auto flex max-w-shell flex-col px-6 py-2">
            {nav.links.map((link) => (
              <li key={link.href} className="border-b border-b-[var(--hairline)] last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-medium tracking-tight text-ink hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
