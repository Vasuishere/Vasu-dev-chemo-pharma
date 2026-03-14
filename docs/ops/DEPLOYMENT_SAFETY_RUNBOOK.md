# Deployment Safety Runbook (5.1)

## Strategy
- Use canary rollout for major updates on Vercel.
- Keep previous production deployment pinned for one-click rollback.
- Promote only after readiness checks pass.

## Canary Process (Vercel)
1. Deploy major update to Preview.
2. Run pre-promotion checks:
   - `npm run health:check -- https://<preview-url>`
   - Verify `/api/health?scope=readiness` returns `200`.
   - Verify critical routes `/`, `/product`, `/contact`.
3. Promote preview to production with canary exposure (small traffic window).
4. Monitor first 10-15 minutes:
   - `5xx` error rate
   - p95 latency
   - CPU/memory pressure
5. If stable, complete full promotion.

## Health Gates Before Promotion
- `GET /api/health?scope=liveness` must return `200`.
- `GET /api/health?scope=readiness` must return `200`.
- Required env vars present:
  - `EDGE_CHALLENGE_SECRET`
  - `ASSET_API_KEY`
  - `CORS_ALLOWED_ORIGINS`
  - `TURNSTILE_SECRET_KEY`

## One-Click Rollback
1. Open Vercel project -> Deployments.
2. Select last known good production deployment.
3. Click `Promote to Production`.
4. Re-run health checks and verify alerts clear.

## Rollback Drill (Weekly in launch month)
- Trigger a controlled bad deploy in staging.
- Execute rollback with timer.
- Record RTO target: <= 10 minutes.
- Attach evidence in release tracker.

## Exit Criteria
- Canary passed with no sustained critical alerts.
- Rollback path verified and documented for this release.
