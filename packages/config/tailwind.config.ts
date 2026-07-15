import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#FBEDE1",
        card: "#FFF9F3",
        ink: "#1A1A1A",
        accent: "#B5674A",
      },
      maxWidth: {
        prose: "65ch",
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.7" }],
      },
    },
  },
  plugins: [],
};

export default config;
