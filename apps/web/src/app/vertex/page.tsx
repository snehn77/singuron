import Link from "next/link";
import { agents } from "@/lib/agents";

export const metadata = {
  title: "Vertex — Singuron",
  description:
    "Vertex is Singuron's family of AI agents. Meet the Finance Agent and the Career Assistant, both built on our identity-stability research and run on your own API key.",
};

export default function VertexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-16 sm:mt-24 mb-32">
      {/* Header */}
      <header className="max-w-3xl animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-4">Vertex</p>
        <h1 className="font-serif text-5xl sm:text-6xl tracking-tight">Our agents</h1>
        <p className="mt-6 text-body text-ink/65 leading-relaxed">
          Vertex is the family of AI agents we build on top of Singuron&apos;s
          identity-stability research. Each one runs on your own API key, keeps your data
          private, and is instrumented to stay reliable over long horizons.
        </p>
      </header>

      {/* Horizontal clickable agent cards */}
      <div className="mt-14 space-y-6">
        {agents.map((agent, i) => (
          <Link
            key={agent.slug}
            href={`/vertex/${agent.slug}`}
            className="group block animate-fade-up rounded-3xl border border-ink/[0.08] bg-card p-2 shadow-[0_8px_30px_rgba(120,70,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(120,70,40,0.14)]"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl bg-[#0d0d10] sm:aspect-auto sm:h-40 sm:w-64 md:h-44 md:w-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={agent.hero}
                  alt={agent.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Copy */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-xl text-accent/60">{agent.index}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl">{agent.name}</h2>
                </div>
                <p className="mt-3 max-w-md text-body text-ink/65">{agent.tagline}</p>
                <div className="mt-5 flex items-center">
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Explore
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Closing note */}
      <div className="mt-20 border-t border-ink/10 pt-10 text-center">
        <p className="mx-auto max-w-xl text-body text-ink/60">
          Both agents share the same foundation: your key, your data, and a reliability
          layer that keeps the agent&apos;s judgment honest.
        </p>
      </div>
    </div>
  );
}
