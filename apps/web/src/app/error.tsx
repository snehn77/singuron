"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-prose px-6 mt-20 mb-32 text-center">
      <h1 className="font-serif text-3xl mb-4">Something went wrong</h1>
      <p className="text-body text-ink/60 mb-8">
        An unexpected error occurred. We&apos;ve been notified.
      </p>
      <button
        onClick={reset}
        className="inline-block px-6 py-3 bg-ink text-cream text-sm font-medium rounded hover:bg-ink/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
