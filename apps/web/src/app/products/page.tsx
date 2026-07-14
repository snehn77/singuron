import Link from "next/link";
import { getProductsForDemo } from "@/lib/registry";
import { DemoVideo } from "@/components/DemoVideo";

export const metadata = {
  title: "Products — Singuron",
  description: "See our AI agents in action. Watch demos of each agent and get in touch.",
};

export default function ProductsPage() {
  const products = getProductsForDemo();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 mt-12 sm:mt-20 mb-32">
      <h1 className="font-serif text-3xl sm:text-5xl mb-4">Products</h1>
      <p className="text-body text-ink/70 max-w-prose mb-16">
        Watch each agent in action. When you are ready to try one, get in touch.
      </p>

      <div className="space-y-20">
        {products.map((product) => {
          const isComingSoon = product.status === "coming-soon";
          return (
            <section key={product.slug}>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-serif text-2xl hover:text-accent transition-colors"
                >
                  {product.name}
                </Link>
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
                <span className="text-xs text-ink/30 uppercase tracking-wide ml-auto">
                  {product.type === "hosted" ? "Browser" : "Desktop"}
                </span>
              </div>

              <p className="text-body text-ink/60 mb-6 max-w-prose">
                {product.tagline}
              </p>

              <DemoVideo src={product.demo_video_url} title={product.name} />

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-ink text-cream text-sm font-medium rounded hover:bg-ink/90 transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-sm text-ink/50 hover:text-ink transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
