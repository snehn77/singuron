export type Feature = { title: string; body: string };
export type Shot = { src: string; label: string };

export type Agent = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  kind: string;
  hero: string;
  heroLabel: string;
  summary: string;
  features: Feature[];
  gallery: Shot[];
};

export const agents: Agent[] = [
  {
    slug: "finance",
    index: "01",
    name: "Finance Agent",
    tagline: "A research terminal for public markets, powered by your own AI key.",
    kind: "Browser · Hosted",
    hero: "/vertex/finance/dashboard.png",
    heroLabel: "singuron finance — market dashboard",
    summary:
      "Real-time market data, AI-scored stock analysis, and Congress-trade tracking in one place. It runs on your own Anthropic key, so your data and your costs stay yours.",
    features: [
      {
        title: "Real-time market dashboard",
        body: "Live S&P 500, NASDAQ, and Dow Jones with a personal watchlist showing price, change, market cap, and trend at a glance.",
      },
      {
        title: "AI analysis with metacognition",
        body: "Base, bull, and bear targets alongside a self-monitoring confidence breakdown: data completeness, signal agreement, and valuation reliability.",
      },
      {
        title: "Congress trade tracker",
        body: "STOCK Act disclosures in a single feed. Filter by politician or ticker and see buy and sell activity as it is filed.",
      },
      {
        title: "AI financial advisor",
        body: "Ask anything: DCF valuations, technical analysis, or the latest Congress trades, answered in one conversational chat.",
      },
    ],
    gallery: [
      { src: "/vertex/finance/analyze.png", label: "AI stock analysis" },
      { src: "/vertex/finance/congress.png", label: "Congress tracker" },
      { src: "/vertex/finance/advisor.png", label: "AI advisor" },
    ],
  },
  {
    slug: "career",
    index: "02",
    name: "Career Assistant",
    tagline: "Local-first AI job-search intelligence that knows what it knows.",
    kind: "Local-first · Bring your own key",
    hero: "/vertex/job/dashboard.png",
    heroLabel: "openjob — application intelligence",
    summary:
      "An end-to-end job-search co-pilot. It discovers roles, scores them honestly with a confidence layer, tailors your CV without fabricating anything, and tracks the whole pipeline, entirely on your machine.",
    features: [
      {
        title: "Smart job discovery",
        body: "Zero-LLM-cost scanning across 90+ companies via Greenhouse, Ashby, and Lever, deduplicated into a single pipeline.",
      },
      {
        title: "AI evaluation & scoring",
        body: "Six-block deep analysis of role fit, compensation, growth, and culture, with a confidence badge on every score.",
      },
      {
        title: "Grounding gate",
        body: "An anti-fabrication safety valve: every claim in a generated CV is traced back to your profile, and ungrounded claims are blocked.",
      },
      {
        title: "Tracker & activity heatmap",
        body: "A full pipeline view with scores, statuses, and a GitHub-style heatmap of your daily application activity.",
      },
      {
        title: "CV tailoring & auto-fill",
        body: "A custom resume per application plus a Chrome extension that fills Greenhouse, Lever, and Workday forms, but never clicks submit.",
      },
      {
        title: "Local-first & private",
        body: "No cloud and no telemetry. Bring your own Claude, GPT-4, or Gemini key and keep every byte on your machine.",
      },
    ],
    gallery: [
      { src: "/vertex/job/apply.png", label: "Portal scanner" },
      { src: "/vertex/job/tracker.png", label: "Application tracker" },
      { src: "/vertex/job/pipeline.png", label: "The complete pipeline" },
      { src: "/vertex/job/overview.png", label: "Metacognition layer" },
      { src: "/vertex/job/features.png", label: "All features" },
    ],
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}
