# WAF and Bot Rules Checklist (Phase 0)

Use this checklist in Vercel Project Settings to enforce provider-level controls.

## Required Managed Protections

1. Enable WAF managed rules for common exploits (OWASP/core managed set).
2. Enable bot management or bot challenge mode for suspicious automation traffic.
3. Enable DDoS mitigation defaults at the edge.

## Route-Focused Policies

1. Apply stricter bot/challenge policy to:
   - /api/*
   - /payload*
   - /admin*
   - /product/*
2. Keep static assets and health endpoints reachable:
   - /_next/static/*
   - /images/*
   - /api/health

## IP and Geo Controls

1. Configure country blocks in EDGE_BLOCK_COUNTRIES.
2. Configure blocked IPs in EDGE_BLOCK_IPS.
3. Configure allowlist IPs in EDGE_ALLOWLIST_IPS.

## Verification

1. Verify suspicious requests receive challenge flow (/api/security/challenge).
2. Verify authorized clients can still reach write APIs with API keys.
3. Verify bots do not trigger challenge loops on search crawler allowlist.
4. Save screenshots/exports of active WAF policy in deployment evidence.
