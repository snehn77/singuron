const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "singuron",
  project: process.env.SENTRY_PROJECT || "web",
  silent: true,
  disableServerWebpackPlugin: true,
  disableClientWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
});
