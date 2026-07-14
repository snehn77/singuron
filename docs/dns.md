# Singuron — DNS Configuration

All DNS is managed via GoDaddy (registrar). This document specifies the exact records.

---

## Domain: singuron.com

### Active Records (Phase 1)

| Type | Host | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | `@` | `76.76.21.21` | 600 | Vercel (marketing site) |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 | Vercel redirect to apex |

### Reserved Records (configure when each phase deploys)

| Type | Host | Value | Phase | Service |
|------|------|-------|-------|---------|
| CNAME | `app` | `cname.vercel-dns.com` | 3 | Product console (Vercel project #2) |
| CNAME | `api` | *(Railway/Fly CNAME)* | 4 | FastAPI gateway |
| CNAME | `downloads` | *(Cloudflare R2 custom domain)* | 6 | Desktop downloads + update manifests |

---

## Vercel DNS Verification

After adding records:

1. Go to Vercel → Project Settings → Domains
2. Add `singuron.com` (apex) and `www.singuron.com`
3. Vercel auto-verifies within minutes
4. TLS is provisioned automatically (Let's Encrypt)

---

## Email (Optional / Future)

If you need email on `@singuron.com` (e.g., for `hello@singuron.com`):

| Type | Host | Value | Purpose |
|------|------|-------|---------|
| MX | `@` | *(e.g., mx1.improvmx.com, priority 10)* | Email forwarding |
| MX | `@` | *(e.g., mx2.improvmx.com, priority 20)* | Failover |
| TXT | `@` | `v=spf1 include:spf.improvmx.com ~all` | SPF |

ImprovMX free tier forwards to a personal inbox. Configure later if needed.

---

## Checklist

- [ ] A record `@` → `76.76.21.21`
- [ ] CNAME `www` → `cname.vercel-dns.com`
- [ ] Vercel domain verified
- [ ] TLS active
- [ ] `singuron.com` loads marketing site
- [ ] `www.singuron.com` redirects to `singuron.com`

---

## Notes

- GoDaddy's default DNS records (parking page, etc.) should be deleted.
- Do NOT enable GoDaddy's "Website Builder" or "Forwarding" — it conflicts with Vercel.
- TTL of 600s (10 min) is fine for the A record during initial setup. Increase to 3600 after verified.
