import Link from "next/link";

interface PillProps {
  label: string;
  href: string;
}

export function Pill({ label, href }: PillProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-ink/20 rounded-full hover:border-ink/40 transition-colors"
    >
      <span className="font-medium text-accent">NEW</span>
      <span className="text-ink/70">{label}</span>
    </Link>
  );
}
