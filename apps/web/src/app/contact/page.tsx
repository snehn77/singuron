export const metadata = {
  title: "Contact — Singuron",
  description: "Get in touch with Singuron about our BYOK AI agents, the Finance Agent, or research collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose px-4 sm:px-6 mt-12 sm:mt-20 mb-32">
      <h1 className="font-serif text-3xl sm:text-4xl mb-8">Contact</h1>

      <div className="text-body text-ink/70 leading-relaxed space-y-6">
        <p>
          Want to try the Finance Agent, ask about the platform, or talk research
          collaboration? Reach us directly:
        </p>
        <p>
          <a
            href="mailto:asi.research.development@gmail.com"
            className="text-accent underline underline-offset-2 text-lg"
          >
            asi.research.development@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
