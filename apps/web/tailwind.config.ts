import type { Config } from "tailwindcss";
import baseConfig from "@singuron/config/tailwind.config";

const config: Config = {
  ...baseConfig,
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
};

export default config;
