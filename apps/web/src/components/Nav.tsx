"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getEnabledProducts } from "@/lib/registry";

export function Nav() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const products = getEnabledProducts();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="hover:text-accent transition-colors"
            >
              Products
            </button>
            <div
              className={`absolute top-full right-0 mt-2 w-64 bg-cream border border-ink/10 rounded-md shadow-sm py-2 transition-all duration-150 origin-top-right ${
                productsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="block px-4 py-2 hover:bg-ink/5 transition-colors"
                  onClick={() => setProductsOpen(false)}
                >
                  <span className="font-medium">{p.name}</span>
                  <span className="block text-xs text-ink/60 mt-0.5">
                    {p.tagline}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
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
          <div>
            <p className="text-xs text-ink/40 uppercase tracking-wide mb-3">Products</p>
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="block py-2 text-ink/70 hover:text-ink transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {p.name}
              </Link>
            ))}
          </div>
          <Link href="/blog" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
