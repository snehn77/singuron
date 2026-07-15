"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-ink/5">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-sans font-semibold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
          Singuron
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/vertex" className="hover:text-accent transition-colors">
            Vertex
          </Link>
          <Link href="/research" className="hover:text-accent transition-colors">
            Research &amp; Development
          </Link>
          <Link href="/news" className="hover:text-accent transition-colors">
            News
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-cream z-40 transition-all duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-lg">
          <Link href="/vertex" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            Vertex
          </Link>
          <Link href="/research" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            Research &amp; Development
          </Link>
          <Link href="/news" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            News
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
