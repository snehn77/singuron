import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 mt-32">
      <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-8 text-sm text-ink/50">
        <div>
          <Link href="/" className="font-sans font-semibold text-ink tracking-widest uppercase text-xs hover:opacity-70 transition-opacity">
            Singuron
          </Link>
        </div>
        <div className="flex gap-12 text-[13px]">
          <div className="flex flex-col gap-3">
            <Link href="/products/finance" className="hover:text-ink transition-colors duration-200">
              Finance Agent
            </Link>
            <Link href="/products/video-editor" className="hover:text-ink transition-colors duration-200">
              Video Editor
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="hover:text-ink transition-colors duration-200">
              Blog
            </Link>
            <Link href="/about" className="hover:text-ink transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-ink transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-10 text-xs text-ink/30">
        © {new Date().getFullYear()} Singuron. All rights reserved.
      </div>
    </footer>
  );
}
