# Singuron — Production Setup

This document walks through deploying the Singuron marketing site (`apps/web`) to Vercel.

---

## Prerequisites

- A Vercel account (free Hobby tier is fine for now; upgrade to Pro before commercial use)
- The `singuron` monorepo pushed to a GitHub repository

---

## Step 1: Create Vercel project for `apps/web`

1. Go to https://vercel.com/new
2. Import the `singuron` GitHub repository
3. Set the following:
   - **Framework Preset:** Next.js
   - **Root Directory:** `apps/web`
   - **Build Command:** `pnpm build`
   - **Output Directory:** `out`
   - **Install Command:** `pnpm install`
4. No environment variables are required for the static marketing site.
5. Click **Deploy**.

## Step 2: Configure custom domain

1. In Vercel project settings → Domains, add `singuron.com`.
2. Vercel will display the required DNS records. Add them in GoDaddy:

| Type | Host | Value |
|---|---|---|
| A | `@` | `76.76.21.21` (Vercel) |
| CNAME | `www` | `cname.vercel-dns.com` |

3. Wait for DNS propagation (minutes to a few hours).
4. Vercel automatically provisions TLS once records verify.

## Step 3: Reserve future subdomains (do now, configure later)

In GoDaddy DNS, add placeholder records for future phases:

| Type | Host | Value | Phase |
|---|---|---|---|
| CNAME | `app` | (will point to Vercel project #2) | Phase 3 |
| CNAME | `api` | (will point to Railway/Fly) | Phase 4 |
| CNAME | `downloads` | (will point to Cloudflare R2) | Phase 6 |

Do not configure these yet — just document that they are reserved.

## Step 4: Verify

- [ ] `singuron.com` loads the marketing site
- [ ] `www.singuron.com` redirects to `singuron.com`
- [ ] All pages render correctly
- [ ] TLS certificate is active (green lock)

---

## Notes

- The marketing site is fully static (`output: "export"`) — no server functions, no backend dependency.
- Vercel Hobby tier is non-commercial. Upgrade to Pro ($20/mo) before any commercial use.
- Cancel the GoDaddy Website Builder subscription — it is not needed. GoDaddy is registrar + DNS only.
