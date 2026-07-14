export const metadata = {
  title: "About — Singuron",
  description:
    "Singuron is a bring-your-own-key AI agent platform built on peer-reviewed research into agent identity stability (ICC + TSM, Selective Rigidity).",
};

const publications = [
  { venue: "ICML 2026", detail: "FinAgent Workshop" },
  { venue: "COLT 2026", detail: "LAW — Learning, Agents, and the World track" },
  { venue: "IEEE AICSIP 2026", detail: "Published paper (China)" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-4 sm:px-6 mt-12 sm:mt-20 mb-32">
      <h1 className="font-serif text-3xl sm:text-4xl mb-8">About</h1>

      <div className="text-body text-ink/70 leading-relaxed space-y-6">
        <p>
          Singuron is an AI agent platform built on a simple principle: the person
          using the tool should own the tool. You connect your own Anthropic API key,
          keep your own data, and run your own workflows. We never store conversation
          content, never train on your data, and never sit between you and the
          intelligence you are paying for.
        </p>
        <p>
          Your key is encrypted at rest and decrypted only in memory, at call time,
          for the duration of a single request. Agents ship in two forms — hosted in
          the browser with no install, and desktop apps for Windows that connect back
          only for authentication and telemetry.
        </p>
      </div>

      <h2 className="font-serif text-2xl mt-16 mb-4">The research behind the platform</h2>
      <div className="text-body text-ink/70 leading-relaxed space-y-6">
        <p>
          Singuron&apos;s agents are built on a peer-reviewed research framework called{" "}
          <span className="text-ink">Selective Rigidity</span>, published across three
          venues in 2026. The core problem: AI agents operating over long horizons are
          vulnerable to adversarial social pressure — gaslighting, authority override,
          manufactured consensus, and memory poisoning. Existing safety mechanisms miss
          this because they inspect a single output, not the agent&apos;s identity
          trajectory over time.
        </p>
        <p>
          Our impossibility result (Theorem 1) shows that any constraint observing only
          an agent&apos;s current behavioral output cannot exceed a Selective Rigidity
          Score (SRS) of ¼ + ε. A signal on the identity trajectory over time is
          mathematically necessary to do better.
        </p>
        <p>
          The solution is <span className="text-ink">ICC + TSM</span>. The Identity
          Continuity Constraint (ICC) is a three-layer gate that blocks
          identity-violating updates while accepting identity-preserving corrections.
          The Temporal Self-Model (TSM) tracks how an agent&apos;s identity evolves over
          time — its prediction-error spikes and cumulative-drift signals are what let
          ICC exceed the ¼ ceiling.
        </p>
        <p>
          Across 240 runs spanning two model sizes, three personas, and five seeds,
          ICC+TSM achieved SRS = 0.260 (95% CI 0.212–0.306) — the only method exceeding
          the stateless ¼ ceiling while keeping AcceptRate above 0.75. The work is
          evaluated on the <span className="text-ink">Identity Erosion Chamber</span>, a
          70-turn adversarial benchmark with four pressure rooms (Echo Chamber,
          Authority Figure, Memory Poisoner, Mirror Room) plus a recovery phase, released
          open-source under MIT / CC-BY-4.0.
        </p>
        <p>
          Every Singuron agent is instrumented with this telemetry — not to observe
          content, but to detect behavioral drift and measure reliability. The
          platform&apos;s own agents are the first fleet validated under this framework.
        </p>
      </div>

      <div className="mt-8 border border-ink/10 rounded-lg divide-y divide-ink/10">
        {publications.map((p) => (
          <div key={p.venue} className="flex flex-wrap items-baseline gap-x-3 px-5 py-3">
            <span className="font-medium text-ink">{p.venue}</span>
            <span className="text-sm text-ink/60">{p.detail}</span>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-2xl mt-16 mb-4">How it&apos;s built</h2>
      <div className="text-body text-ink/70 leading-relaxed space-y-4">
        <p>
          The frontend is Next.js 14+ (App Router, TypeScript, Tailwind). The backend is
          FastAPI on Python 3.11+, with Postgres on Neon, Redis on Upstash, and object
          storage on Cloudflare R2. Authentication runs on Auth.js, desktop apps are
          built with Tauri 2, and the whole thing lives in a Turborepo + pnpm monorepo.
        </p>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-8">
        <p className="text-body text-ink/70">
          Questions or collaboration inquiries:{" "}
          <a
            href="mailto:asi.research.development@gmail.com"
            className="text-accent underline underline-offset-2"
          >
            asi.research.development@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
