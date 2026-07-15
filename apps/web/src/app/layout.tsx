import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://singuron.com"),
  title: "Singuron",
  description:
    "The reliability layer that keeps an AI agent's identity stable over long-horizon autonomy. Model-agnostic, write-time enforcement with an open adversarial benchmark.",
  keywords: [
    "AI agents",
    "BYOK",
    "bring your own key",
    "Anthropic",
    "finance agent",
    "agent telemetry",
    "Selective Rigidity",
    "ICC",
    "TSM",
  ],
  openGraph: {
    title: "Singuron",
    description:
      "A bring-your-own-key AI agent platform. Your key, your data. Grounded in peer-reviewed research on agent identity stability.",
    url: "https://singuron.com",
    siteName: "Singuron",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink antialiased">
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
