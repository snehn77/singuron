// Static export (output: "export") has no server/edge runtime, so server-side
// Sentry instrumentation is a no-op here. Client-side Sentry is injected via
// withSentryConfig in next.config.js (sentry.client.config.ts).
export async function register() {}
