type NewsItem = {
  date: string;
  tag: string;
  title: string;
  body: string;
};

const items: NewsItem[] = [
  {
    date: "June 2026",
    tag: "Publication",
    title: "Selective Rigidity accepted at the ICML 2026 FinAgent Workshop",
    body: "Our framework for measuring and enforcing how well an agent holds onto its identity was accepted at the ICML FinAgent Workshop.",
  },
  {
    date: "May 2026",
    tag: "Publication",
    title: "COLT 2026: Learning, Agents, and the World track",
    body: "The impossibility result at the heart of Selective Rigidity appears in the COLT LAW track.",
  },
  {
    date: "April 2026",
    tag: "Publication",
    title: "IEEE AICSIP 2026 paper published",
    body: "A full paper on the Identity Continuity Constraint and the Temporal Self-Model is now published at IEEE AICSIP.",
  },
];

export function ResearchNews({ heading }: { heading: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 mt-16 sm:mt-24 mb-32">
      <header className="mb-14">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">{heading}</h1>
        <p className="mt-4 text-body text-ink/60 max-w-xl">
          Peer-reviewed research and publications from the team building Singuron.
        </p>
      </header>

      <div className="divide-y divide-ink/10 border-t border-ink/10">
        {items.map((item) => (
          <article
            key={item.title}
            className="group grid grid-cols-1 gap-2 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <div className="flex flex-col gap-1">
              <time className="text-sm text-ink/50">{item.date}</time>
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {item.tag}
              </span>
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl leading-snug text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-body text-ink/65 leading-relaxed">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
