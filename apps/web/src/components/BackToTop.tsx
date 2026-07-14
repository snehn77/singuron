"use client";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-sm text-ink/50 hover:text-ink transition-colors"
    >
      back to top &uarr;
    </button>
  );
}
