import Link from "next/link";
import { notFound } from "next/navigation";
import { agents, getAgentBySlug } from "@/lib/agents";
import { AppFrame } from "@/components/AppFrame";

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) return { title: "Vertex — Singuron" };
  return {
    title: `${agent.name} — Vertex — Singuron`,
    description: agent.summary,
  };
}

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-12 sm:mt-16 mb-32">
      {/* Back link */}
      <Link
        href="/vertex"
        className="inline-flex items-center gap-1.5 text-sm text-ink/50 transition-colors hover:text-ink"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          &larr;
        </span>
        All agents
      </Link>

      {/* Header */}
      <div className="mt-8 animate-fade-up">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl text-accent/60">{agent.index}</span>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">{agent.name}</h1>
        </div>
        <p className="mt-4 max-w-xl text-body text-ink/65">{agent.tagline}</p>
      </div>

      {/* Hero screenshot */}
      <div className="mt-10">
        <AppFrame src={agent.hero} label={agent.heroLabel} />
      </div>

      <p className="mt-8 max-w-2xl text-body text-ink/70 leading-relaxed">{agent.summary}</p>

      {/* Feature grid */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {agent.features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-ink/[0.08] bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(120,70,40,0.10)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <div>
                <h3 className="font-medium text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{f.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-14">
        <p className="mb-5 text-xs uppercase tracking-widest text-ink/40">A closer look</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agent.gallery.map((shot) => (
            <AppFrame key={shot.src} src={shot.src} label={shot.label} />
          ))}
        </div>
      </div>

      {/* Other agent */}
      <div className="mt-20 border-t border-ink/10 pt-10">
        <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">More from Vertex</p>
        <div className="flex flex-wrap gap-4">
          {agents
            .filter((a) => a.slug !== agent.slug)
            .map((a) => (
              <Link
                key={a.slug}
                href={`/vertex/${a.slug}`}
                className="inline-flex items-center gap-2 text-body text-ink/70 transition-colors hover:text-accent"
              >
                {a.name}
                <span aria-hidden>&rarr;</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
