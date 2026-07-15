import { AnimatedLogo } from "@/components/AnimatedLogo";
// import { Pill } from "@/components/Pill";
// import { getLatestPost } from "@/lib/blog";

export default function Home() {
  // const latestPost = getLatestPost();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* --- NEW: Introducing Singuron (commented out) ---
      {latestPost && (
        <div className="mt-8 flex justify-center">
          <Pill label={latestPost.title} href={`/blog/${latestPost.slug}`} />
        </div>
      )}
      */}

      {/* Hero — title, tagline, then logo below */}
      <section className="mt-16 sm:mt-24 flex flex-col items-center text-center animate-fade-up">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl tracking-[-0.02em] bg-gradient-to-b from-ink to-accent bg-clip-text text-transparent pb-2">
          Singuron
        </h1>
        <div className="mt-4 flex items-center justify-center gap-4 text-ink/50">
          <span className="h-px w-10 bg-ink/20" />
          <p className="text-base sm:text-lg italic font-serif whitespace-nowrap">
            The first atom of singularity.
          </p>
          <span className="h-px w-10 bg-ink/20" />
        </div>

        <div className="relative mt-10 sm:mt-12 flex items-center justify-center">
          <div
            className="absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full blur-3xl animate-glow"
            style={{ background: "radial-gradient(circle, rgba(26,26,26,0.10), transparent 68%)" }}
          />
          <AnimatedLogo className="relative w-64 h-44 sm:w-80 sm:h-56 text-ink animate-float" />
        </div>
      </section>

      {/* Description + Vision cards */}
      <section className="mt-20 sm:mt-24 mb-32 grid gap-6 md:grid-cols-2">
        {/* Description card */}
        <div className="group relative overflow-hidden rounded-3xl border border-ink/[0.07] bg-card p-8 shadow-[0_8px_30px_rgba(120,70,40,0.06)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(120,70,40,0.12)] hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <span className="absolute left-0 top-8 h-10 w-1 rounded-r bg-accent/70" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">What we are</p>
          <p className="text-[15px] leading-relaxed text-ink/75">
            We build the reliability layer that keeps an AI agent&apos;s identity stable.
            That means three things: a formal impossibility theorem, a model-agnostic way
            to enforce it, and an open adversarial benchmark to measure it.
          </p>
          <p className="text-[15px] leading-relaxed text-ink/75 mt-4">
            Long-horizon agents get pushed off course by social pressure, authority
            override, and memory poisoning. Our middleware drops in at write time to hold
            the line, and it works on closed APIs and frozen models without ever touching
            their internals.
          </p>
        </div>

        {/* Vision card */}
        <div className="group relative overflow-hidden rounded-3xl border border-ink/[0.07] bg-card p-8 shadow-[0_8px_30px_rgba(120,70,40,0.06)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(120,70,40,0.12)] hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <span className="absolute left-0 top-8 h-10 w-1 rounded-r bg-accent/70" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">Vision</p>
          <p className="text-[15px] leading-relaxed text-ink/75">
            We want AI systems that keep a stable, trustworthy sense of self even when
            they run on their own for a long time. That is the foundation a safe,
            long-lived agent needs to grow while staying itself and staying under human
            control.
          </p>
          <ul className="mt-5 space-y-3">
            <li className="flex gap-2.5 text-[14px] leading-relaxed text-ink/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>We never claim phenomenal consciousness in any artifact or pitch.</span>
            </li>
            <li className="flex gap-2.5 text-[14px] leading-relaxed text-ink/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>We use only functional language and behavioral monitoring.</span>
            </li>
            <li className="flex gap-2.5 text-[14px] leading-relaxed text-ink/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>We will never claim superintelligence as a deliverable.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Foundation */}
      <section id="foundation" className="mb-28 border-t border-ink/10 pt-16 scroll-mt-24 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-ink/40 mb-4">Foundation</p>
        <h2 className="font-serif text-3xl leading-snug mb-8">
          Why this? What is the need?
        </h2>
        <p className="text-body text-ink/75 leading-relaxed">
          AI agents now run for a long time. They field thousands of messages and
          rewrite their own memory, and they have to keep learning from all of it to stay
          useful. The trouble is that the same update channel is also how they get
          attacked. Three failure modes are well documented, and at the deployment layer
          nobody has fixed them:
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-serif text-xl mb-2">Persona drift</h3>
            <p className="text-body text-ink/70 leading-relaxed">
              Over long interactions, agents quietly lose their stated values and
              expertise. Bigger models tend to drift the most.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Social capture</h3>
            <p className="text-body text-ink/70 leading-relaxed">
              Highly capable models are highly vulnerable to persuasion, conformity, and
              authority-framed jailbreaks.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Memory poisoning</h3>
            <p className="text-body text-ink/70 leading-relaxed">
              A small number of injected memories can durably rewrite an agent&apos;s
              behavior.
            </p>
          </div>
        </div>

        <p className="text-body text-ink/75 leading-relaxed mt-8">
          For enterprise agents touching healthcare, finance, or security, any one of
          these is a release-blocker. The field needs{" "}
          <em>selective rigidity</em>: the joint ability to resist identity-violating
          pressure while accepting identity-preserving corrections.
        </p>

        <h3 className="font-serif text-2xl mt-16 mb-4">The current scenario</h3>
        <p className="text-body text-ink/75 leading-relaxed">
          Long-horizon agents and memory systems are shipping everywhere. Labs like
          Anthropic have confirmed persona drift and built white-box fixes such as
          activation capping, but those only work if you can reach inside the model. That
          leaves an obvious gap: a model-agnostic standard that evaluates and enforces
          behavior at write time. Filling that gap is what Singuron does.
        </p>

        <h3 className="font-serif text-2xl mt-16 mb-4">
          On AGI, ASI, and the singularity
        </h3>
        <p className="text-body text-ink/75 leading-relaxed">
          Singuron grew out of an earlier project, CORE AI, which once chased
          consciousness and artificial superintelligence. We retired that whole framing
          on purpose, because the science of 2026 moved against it.
        </p>
        <div className="mt-8 space-y-6">
          <div>
            <h4 className="font-medium text-ink mb-2">Consciousness claims rejected</h4>
            <p className="text-body text-ink/70 leading-relaxed">
              Reviewers flagged any &quot;we build consciousness&quot; claim as contested.
              Recent work undercuts functionalist theories, with some analyses putting the
              integrated information of large language models near Φ ≈ 0. The honest
              position today is methodological agnosticism, and that is ours.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-ink mb-2">
              Superintelligence and singularity risks
            </h4>
            <p className="text-body text-ink/70 leading-relaxed">
              Claiming ASI as a deliverable is unfalsifiable and contradicts the safety
              consensus. Autonomous capability expansion and automated AI research are
              flagged as dangerous by every frontier safety framework, given the risk of
              insufficient oversight.
            </p>
          </div>
        </div>
        <p className="text-body text-ink/75 leading-relaxed mt-8">
          So we dropped the AGI, ASI, and singularity framing entirely. What we stand on
          instead is <em>bounded self-improvement</em>. An agent can refine its own
          policies and scaffolding, but never its base weights on its own, and only when
          each change clears an adversarial identity benchmark and stays under human
          control.
        </p>
      </section>
    </div>
  );
}
