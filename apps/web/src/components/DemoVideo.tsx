"use client";

import { useState } from "react";

interface DemoVideoProps {
  src?: string;
  title: string;
}

export function DemoVideo({ src, title }: DemoVideoProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="aspect-video w-full rounded-lg border border-ink/10 bg-ink/[0.03] flex flex-col items-center justify-center text-center px-6">
        <div className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center mb-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-ink/40 ml-0.5"
          >
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </div>
        <p className="text-sm text-ink/50">Demo video coming soon</p>
        <p className="text-xs text-ink/30 mt-1">{title}</p>
      </div>
    );
  }

  return (
    <video
      controls
      preload="metadata"
      className="aspect-video w-full rounded-lg border border-ink/10 bg-black"
      onError={() => setHasError(true)}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
