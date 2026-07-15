export function AppFrame({
  src,
  label,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  src: string;
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-ink/10 bg-[#0d0d10] shadow-[0_20px_60px_rgba(120,70,40,0.16)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#17171b] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] tracking-wide text-white/40">
          {label}
        </span>
      </div>
      <div className={`${aspect} w-full overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </figure>
  );
}
