# Observability Runbook (5.2)

## Error Monitoring
Use Sentry or equivalent error platform.

### Minimum events to capture
- Unhandled server exceptions
- API route failures with `5xx`
- Client runtime errors (contact form, product pages)

### Environment
- `SENTRY_DSN` (or equivalent provider DSN)
- `SENTRY_ENVIRONMENT` (`preview`, `production`)
- `SENTRY_RELEASE` (commit SHA)

## Uptime Probes (3+ Regions)
Configure probes for:
- `/api/health?scope=liveness`
- `/api/health?scope=readiness`
- `/` and `/product`

Required regions:
- APAC (e.g., Singapore)
- Europe (e.g., Frankfurt)
- North America (e.g., Virginia)

## Alerts
Send alerts to Slack, WhatsApp bridge, and email for:
- 5xx spikes
  - Condition: 5xx rate > 1% for 5 minutes
- Latency spikes
  - Condition: p95 latency > 1000ms for 10 minutes
- Memory saturation
  - Condition: memory usage > 85% for 10 minutes
- CPU saturation
  - Condition: CPU > 85% for 10 minutes

## Daily Review (First 14 Days)
- 09:00 local: check uptime, 5xx, p95 latency, top errors
- 15:00 local: check active alerts and mitigation status
- 21:00 local: verify no unresolved sev-1/sev-2 incidents

## Daily Dashboard Checklist
- Availability trend >= 99.9%
- 5xx rate < 0.5%
- p95 latency < 500ms
- No sustained memory/cpu saturation
- New error signatures triaged and owner assigned
