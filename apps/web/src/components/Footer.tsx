import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 mt-32">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-[13px] text-ink/50">
        <Link
          href="/"
          className="font-sans font-semibold text-ink tracking-widest uppercase text-xs hover:opacity-70 transition-opacity"
        >
          Singuron
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/vertex" className="hover:text-ink transition-colors">
            Vertex
          </Link>
          <Link href="/research" className="hover:text-ink transition-colors">
            Research &amp; Development
          </Link>
          <Link href="/news" className="hover:text-ink transition-colors">
            News
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>

        <span className="text-xs text-ink/30">
          © {new Date().getFullYear()} Singuron
        </span>
      </div>
    </footer>
  );
}
