This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Security Configuration (Vercel Edge Protection)

The project includes middleware-level edge protections for targeted anti-fake-traffic handling:
- Route-level edge rate limiting for `/api/*`, `/admin*`, `/payload*`, and `/product/*`
- Geo/IP filtering using Vercel request headers
- Targeted challenge flow for suspicious traffic paths only

Configure these environment variables in Vercel Project Settings -> Environment Variables:

```bash
EDGE_CHALLENGE_SECRET=replace-with-long-random-secret
EDGE_BLOCK_COUNTRIES=KP,IR
EDGE_BLOCK_IPS=203.0.113.10,198.51.100.25
EDGE_ALLOWLIST_IPS=198.51.100.50
ASSET_API_KEY=replace-with-api-key
SEED_API_KEY=replace-with-seed-api-key
SEED_API_ENABLED=false
TURNSTILE_SECRET_KEY=replace-with-turnstile-secret
NEXT_PUBLIC_TURNSTILE_SITE_KEY=replace-with-turnstile-site-key
# Optional fallback if using Google instead of Turnstile
RECAPTCHA_SECRET_KEY=replace-with-recaptcha-secret
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=replace-with-recaptcha-site-key
CONTACT_BLOCKED_EMAIL_DOMAINS=spamdomain.com,disposablemail.com
CONTACT_ALLOW_FREE_EMAIL_DOMAINS=false
CONTACT_DEDUP_WINDOW_MS=600000
CONTACT_MIN_FILL_MS=4000
CORS_ALLOWED_ORIGINS=https://admin.yourdomain.com,https://partner.yourdomain.com
MAX_UPLOAD_IMAGE_WIDTH=4096
MAX_UPLOAD_IMAGE_HEIGHT=4096
PRODUCT_CACHE_TTL_MS=60000
SENTRY_DSN=replace-with-sentry-dsn
SENTRY_ENVIRONMENT=production
SENTRY_RELEASE=replace-with-commit-sha
```

Notes:
- `EDGE_CHALLENGE_SECRET` should be unique per environment and at least 32 random characters.
- `SEED_API_ENABLED` should remain `false` in production and only be enabled for controlled development seeding.
- `EDGE_BLOCK_COUNTRIES`, `EDGE_BLOCK_IPS`, and `EDGE_ALLOWLIST_IPS` are comma-separated lists.
- Keep platform-level managed WAF/bot/DDoS controls enabled in Vercel; middleware is an app-level defense layer.
- Apply provider-level rule setup from `docs/ops/WAF_BOT_RULES_CHECKLIST.md`.
- Configure either Turnstile or reCAPTCHA secret/site keys before enabling production contact form traffic.
- CSP uses per-request script nonces from middleware; do not re-enable `unsafe-inline` for script-src.
- Any third-party script integration must use nonce-bearing `<Script nonce={...} />` (or an equivalent hash-based policy) instead of broad inline allowances.
- `CORS_ALLOWED_ORIGINS` must list exact allowed origins (scheme + host + optional port), comma-separated.
- Do not hardcode any secret in code. All auth keys and challenge secrets must be provided through environment variables.

## Performance Guardrails

- Static routes and media receive edge cache headers in `next.config.mjs`.
- Non-real-time pages use ISR (`revalidate`) to avoid expensive per-request rendering.
- Upload API enforces image dimension caps via `MAX_UPLOAD_IMAGE_WIDTH` and `MAX_UPLOAD_IMAGE_HEIGHT`.
- Product queries use short-lived in-memory caching (`PRODUCT_CACHE_TTL_MS`) to reduce repeated DB reads.

## Uptime and Stability Ops

- Deployment safety runbook: `docs/ops/DEPLOYMENT_SAFETY_RUNBOOK.md`
- Observability runbook: `docs/ops/OBSERVABILITY_RUNBOOK.md`
- Data recovery runbook: `docs/ops/DATA_RECOVERY_RUNBOOK.md`
- Multi-region uptime probe template: `docs/ops/UPTIME_PROBES.example.json`
- Health endpoints:
	- `/api/health?scope=liveness`
	- `/api/health?scope=readiness`
- Pre-promotion gate command:
	- `npm run health:check -- https://<preview-url>`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
