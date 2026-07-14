import { Pill } from "@/components/Pill";
import { getLatestPost } from "@/lib/blog";

export default function Home() {
  const latestPost = getLatestPost();

  return (
    <div className="mx-auto max-w-prose px-4 sm:px-6">
      {latestPost && (
        <div className="mt-8 flex justify-center">
          <Pill label={latestPost.title} href={`/blog/${latestPost.slug}`} />
        </div>
      )}

      <section className="mt-20 mb-24">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          AI agents that work for you — not the other way around.
        </h1>
        <p className="text-body text-ink/70 leading-relaxed">
          Singuron is a platform for AI agents. Some run in your browser, some run on
          your desktop. All of them use your own Anthropic API key, respect your data,
          and do exactly what you ask — nothing more. We are not a wrapper. We are not a
          marketplace. We are infrastructure for people who want AI to be a tool, not a
          product.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl mb-4">Ownership, not access</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          You bring your own Anthropic API key. We never store conversation content,
          never train on your data, and never sit between you and the intelligence you
          are paying for. The key stays encrypted at rest and is decrypted only in
          memory, at call time, for the duration of a single request.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl mb-4">One platform, two delivery models</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          Hosted agents run in your browser — no install, just open a tab and start
          working. Desktop agents, built with Tauri 2 for Windows, install on your
          machine and connect back only for authentication and telemetry. Both share the
          same security model, the same update pipeline, and the same respect for your
          time.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl mb-4">Built to be boring</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          No gamification. No engagement metrics. No dark patterns. An agent should start
          when you tell it to, do its work, and stop. The interface stays out of the way.
          The architecture is simple enough to explain in one diagram. Boring is a
          feature.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl mb-4">Grounded in research</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          Every agent run is logged with metadata — duration, token counts, model version
          — but never the content itself. This telemetry is built on our peer-reviewed
          framework for agent identity stability (ICC + TSM), published at ICML, COLT,
          and IEEE AICSIP 2026. It lets us detect behavioral drift and measure reliability
          without ever seeing what you are working on.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl mb-4">Small team, deliberate pace</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          Singuron is built by a small team. Products ship when they are ready, one
          vertical at a time. If an agent is not good enough, it says &quot;coming
          soon&quot; and waits. There is no pressure to ship fast and fix later.
        </p>
      </section>

      <section className="mb-32 border-t border-ink/10 pt-16">
        <h2 className="font-serif text-2xl mb-4">Get in touch</h2>
        <p className="text-body text-ink/70 leading-relaxed max-w-prose">
          Our first agent — the Finance Agent — delivers structured financial analysis
          powered by your own AI. Watch the demos on the products page, follow along on
          the blog, or write to us at{" "}
          <a href="mailto:asi.research.development@gmail.com" className="text-accent underline underline-offset-2">
            asi.research.development@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
