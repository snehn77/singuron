import React from "react";

interface ProductCardProps {
  name: string;
  tagline: string;
  slug: string;
  type: "hosted" | "desktop";
  status: "live" | "beta" | "coming-soon";
}

export function ProductCard({ name, tagline, slug, type, status }: ProductCardProps) {
  const isComingSoon = status === "coming-soon";

  return (
    <a
      href={`/products/${slug}`}
      className="block p-6 border border-ink/10 rounded-lg hover:border-ink/20 transition-all duration-200 group"
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-serif text-lg group-hover:text-accent transition-colors duration-200">
          {name}
        </h3>
        {isComingSoon && (
          <span className="text-[10px] px-1.5 py-0.5 border border-ink/15 rounded text-ink/40">
            Coming soon
          </span>
        )}
        {status === "beta" && (
          <span className="text-[10px] px-1.5 py-0.5 border border-accent/30 rounded text-accent">
            Beta
          </span>
        )}
      </div>
      <p className="text-sm text-ink/60">{tagline}</p>
      <p className="text-xs text-ink/30 mt-3 uppercase tracking-wide">
        {type === "hosted" ? "Browser" : "Desktop"}
      </p>
    </a>
  );
}
