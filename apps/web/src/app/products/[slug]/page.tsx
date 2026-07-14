import { getProducts, getProductBySlug } from "@/lib/registry";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoVideo } from "@/components/DemoVideo";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

const productCopy: Record<string, string[]> = {
  finance: [
    "The Finance Agent turns raw financial inputs into structured, defensible analysis. Point it at a company, a filing, or a set of numbers, and it produces the kind of breakdown an analyst would — organized, sourced, and reproducible.",
    "It runs on your own Anthropic API key. Your prompts and data never leave the direct path between you and the model. We add structure and a clean interface, then get out of the way. Every run is instrumented with our identity-stability telemetry (ICC + TSM) so behavior stays consistent over long sessions — never observing content, only measuring drift and reliability.",
  ],
  "video-editor": [
    "The Video Editor is a desktop agent for Windows, built with Tauri 2. It brings intelligent, instruction-driven editing to your machine — everything runs locally, connecting back only for authentication and usage telemetry.",
    "Like every Singuron agent, it uses your own API key and is validated under our Selective Rigidity research framework. It is in active development; watch the demo above and get in touch to follow its progress.",
  ],
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const isComingSoon = product.status === "coming-soon";
  const copy = productCopy[product.slug];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 mt-12 sm:mt-20 mb-32">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl">{product.name}</h1>
        {isComingSoon && (
          <span className="text-xs px-2 py-0.5 border border-ink/20 rounded text-ink/50">
            Coming soon
          </span>
        )}
        {product.status === "beta" && (
          <span className="text-xs px-2 py-0.5 border border-accent/40 rounded text-accent">
            Beta
          </span>
        )}
      </div>

      <p className="text-body text-ink/70 mb-8">{product.tagline}</p>

      <div className="mb-12">
        <DemoVideo src={product.demo_video_url} title={product.name} />
      </div>

      <div className="prose-section text-body text-ink/70 leading-relaxed space-y-4 mb-12 max-w-prose">
        {(copy ?? [product.tagline]).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-ink text-cream text-sm font-medium rounded hover:bg-ink/90 transition-colors"
      >
        Contact us
      </Link>

      {product.version !== "0.0.0" && (
        <p className="mt-4 text-xs text-ink/40">v{product.version}</p>
      )}
    </div>
  );
}
