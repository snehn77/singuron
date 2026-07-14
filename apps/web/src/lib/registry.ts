import registry from "../../../../registry/products.json";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  type: "hosted" | "desktop";
  status: "live" | "beta" | "coming-soon";
  version: string;
  route: string;
  enabled: boolean;
  demo_video_url?: string;
};

export function getProducts(): Product[] {
  return registry.products as Product[];
}

export function getEnabledProducts(): Product[] {
  return getProducts().filter((p) => p.enabled);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function getProductsForDemo(): Product[] {
  return getEnabledProducts();
}
