import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-6 mt-20 mb-32 text-center">
      <h1 className="font-serif text-5xl mb-4">404</h1>
      <p className="text-body text-ink/60 mb-8">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-ink text-cream text-sm font-medium rounded hover:bg-ink/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
