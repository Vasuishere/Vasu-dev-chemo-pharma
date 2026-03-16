# Website Production Readiness - Day-by-Day Execution Tracker

## Scope
- Website stack: Next.js + Payload CMS
- Traffic expectation: approximately 500 users/day
- Focus: anti-fake-traffic protection + high uptime during major update
- Start date: 2026-03-14

## 4. Security and Anti-Fake-Traffic Plan

### 4.1 Edge Protection (Highest Priority)

#### Required architecture
- Put CDN/WAF in front of all public traffic (Vercel + WAF add-on).
- Route all DNS and HTTP(S) traffic through edge protection before app origin.

#### Controls to enable
- Managed bot protection.
- Geo/IP reputation filtering.
- Automatic rate limiting at edge.
- DDoS mitigation for L3/L4 and L7 attack patterns.
- Challenge mode for suspicious traffic paths only (do not challenge all users).

#### Suspicious-path challenge policy (targeted)
- Challenge only high-abuse paths such as: `/api/contact`, `/api/*`, `/admin`, `/payload`, and repeated rapid requests to product/detail pages.
- Keep challenge mode off for standard browsing paths unless bot score/reputation/rate thresholds are exceeded.
- Exempt verified crawlers and internal allowlisted monitoring IPs where required.

#### Implementation checklist
| Control | Owner | Status | Configuration Notes | Acceptance Criteria |
|---|---|---|---|---|
| CDN/WAF fronting enabled | DevOps + Security | Not Started | Enable Vercel edge protection and verify traffic passes through WAF before origin | Direct-origin access blocked; all requests visible in edge logs |
| Managed bot protection enabled | Security | Not Started | Turn on managed bot detection/challenge with conservative defaults first | Bot attacks are challenged/blocked; no critical false positives in QA |
| Geo/IP reputation filtering | Security | Not Started | Start with threat-intel deny/challenge lists and tune country restrictions by business footprint | Malicious IP ranges blocked/challenged; valid target market traffic unaffected |
| Edge automatic rate limiting | DevOps + Eng Lead | Not Started | Apply stricter limits on write/sensitive endpoints and softer limits on read endpoints | Bursts return 429 with Retry-After; origin CPU remains stable under abuse tests |
| L3/L4 + L7 DDoS mitigation validated | DevOps + Security | Not Started | Confirm upstream network-level mitigation and app-layer protections are active | Simulated stress/abuse tests show no prolonged outage and controlled degradation |
| Targeted challenge mode rules | Security + Eng Lead | Not Started | Create path-based + bot-score rules for challenge instead of global challenge | Normal users are not broadly challenged; suspicious paths show challenge events |

#### Day-wise execution mapping
- Day 3: Configure edge WAF, managed bot protection, and baseline targeted challenge policy.
- Day 4: Add route-level rate-limit tuning for sensitive endpoints.
- Day 9: Run abuse/security testing and tune false positives.
- Day 10: Validate behavior under 5x and 10x burst/load tests.
- Day 14: Final tuning during hypercare based on live traffic telemetry.

#### Vercel provider-specific rule definitions (copy to security runbook)

| Rule Name | Vercel Area | Match Conditions | Action | Initial Threshold/Scope |
|---|---|---|---|---|
| `waf-managed-core-prod` | Firewall/WAF managed rules | OWASP + known exploit signatures, all paths | Block | Enabled globally in production |
| `bot-managed-suspicious-prod` | Bot management | Suspicious/automated score above normal browser baseline | Challenge | All paths except verified bots |
| `geo-reputation-block-prod` | Firewall custom rule | Country in deny list OR IP reputation marked malicious | Block | Start with threat-intel defaults; country deny list business-approved only |
| `api-write-ratelimit-prod` | Rate limiting | Path `/api/contact`, `/api/assets/upload`, `/api/assets/ingest-drive-link`, `/api/seed` | Rate limit | 20-40 req/min/IP with 429 |
| `admin-ratelimit-prod` | Rate limiting | Path `/admin*`, `/payload*` | Rate limit + challenge on spikes | 30 req/min/IP |
| `product-burst-challenge-prod` | Firewall custom rule | Path `/product/*` AND request velocity anomaly OR bot score high | Challenge | Trigger on burst patterns only |
| `ddos-auto-mitigation-prod` | DDoS protection | Volumetric or L7 flood pattern detection | Auto-mitigate/block | Always enabled |

#### DevOps step-by-step tasks (Vercel Dashboard)
1. Open Vercel project -> Settings -> Security (Firewall/WAF) and enable managed WAF protection in production.
2. Enable bot management with challenge action for suspicious automation, and allow verified search crawlers.
3. Create custom firewall rule `geo-reputation-block-prod` with block action for known malicious IP reputation and approved country blocks.
4. Create rate-limit policy `api-write-ratelimit-prod` for write/sensitive APIs (20-40 requests/minute/IP).
5. Create rate-limit policy `admin-ratelimit-prod` for `/admin*` and `/payload*` (30 requests/minute/IP).
6. Create targeted challenge rule `product-burst-challenge-prod` for `/product/*` with anomaly/bot-score condition; do not set global challenge.
7. Confirm DDoS mitigation is active (network and application layer) and capture screenshot evidence in release notes.
8. Configure alerting for spikes in blocked/challenged traffic, 429 rates, and false positives.
9. Run staged verification: normal user browsing, crawler access, bot simulation, and burst load tests.
10. Promote policies from preview/staging to production after QA sign-off and false-positive review.

### 4.2 API Protection

#### Required controls
- Require auth for all non-public APIs (especially upload/admin routes).
- Add IP + token-based rate limits on all write endpoints.
- Add request body size limits and strict validation.
- Return `429` for abusive clients with `Retry-After` headers.

#### Code implementation status
| Endpoint Group | Control | Status | Acceptance Criteria |
|---|---|---|---|
| `/api/assets/upload`, `/api/assets/ingest-drive-link` | API key required + IP/token rate limit + body size limits | In Progress | Unauthorized requests rejected; abusive clients receive `429` + `Retry-After`; oversized payloads rejected with `413` |
| `/api/seed` (dev-only) | API key required + IP/token rate limit | In Progress | Seed route inaccessible in production; development seed requires valid key |
| `/admin`, `/payload` | Edge-rate and challenge controls | In Progress | Admin paths protected by edge policy and no anonymous write abuse |

### 4.3 Form Abuse Protection

#### Required controls
- Add Turnstile/reCAPTCHA on contact and inquiry forms.
- Add honeypot field + minimum form fill time checks.
- Add server-side email/domain validation and dedup rules.

#### Code implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| CAPTCHA verification (Turnstile/reCAPTCHA) | In Progress | Form submissions without valid CAPTCHA token are rejected |
| Honeypot + min-fill-time checks | In Progress | Hidden bot field and too-fast submissions are blocked server-side |
| Email/domain validation | In Progress | Disposable/blocked domains are rejected; format checks enforced |
| Dedup window on repeated submissions | In Progress | Repeated identical submissions within dedup window return conflict and do not create duplicate processing |

### 4.4 App Hardening

#### Required controls
- Add security headers: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.
- Restrict CORS to known origins for APIs consumed cross-origin.
- Ensure all secrets are only in environment variables.

#### Implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| Global security headers | In Progress | Required security headers present on all production responses |
| Strict API CORS allowlist | In Progress | Cross-origin API calls only succeed for `CORS_ALLOWED_ORIGINS`; unknown origins rejected |
| Env-only secret handling | In Progress | No hardcoded secret fallbacks; missing secret causes safe server misconfiguration errors |

## 5. Uptime and Stability Plan

### 5.1 Deployment Safety

#### Required controls
- Blue-green or canary rollout for major updates.
- Health checks before promoting new version.
- One-click rollback procedure documented and tested.

#### Implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| Canary/blue-green runbook | In Progress | Documented procedure exists for preview -> canary -> full promotion |
| Pre-promotion health checks | In Progress | `/api/health?scope=liveness` and `/api/health?scope=readiness` pass before promotion |
| Rollback runbook and drill | In Progress | One-click rollback steps documented and drill evidence recorded |

### 5.2 Observability

#### Required controls
- Error monitoring (Sentry or equivalent).
- Uptime probes from at least 3 regions.
- Alerts to WhatsApp/Slack/email for 5xx spikes, latency spikes, memory/CPU saturation.
- Daily dashboard review during first 2 weeks after release.

#### Implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| Error monitoring runbook | In Progress | Error ingestion and triage flow defined with required env vars |
| Multi-region probe config | In Progress | Probe template covers APAC, EU, and US regions for health and key pages |
| Alert threshold matrix | In Progress | 5xx, latency, memory, and CPU alert thresholds defined and routed |
| 14-day daily review cadence | In Progress | Daily checklist and review schedule documented for launch window |

### 5.3 Performance Guardrails

#### Required controls
- Cache static pages aggressively at CDN edge.
- Use ISR/revalidation where data is not real-time.
- Optimize heavy images and enforce max upload dimensions.
- Avoid expensive server work on request path; precompute where possible.

#### Implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| CDN edge cache headers | In Progress | Static pages/assets emit cache headers with SWR policy |
| ISR for non-real-time pages | In Progress | Marketing/content pages have explicit revalidation intervals |
| Upload image dimension enforcement | In Progress | Oversized images rejected with 413 and clear error |
| Request-path compute reduction | In Progress | Product data access uses short-lived cache to reduce repeated DB reads |

### 5.4 Data and Recovery

#### Required controls
- Daily backups for CMS/database.
- Verify restore process weekly.
- Keep last known good deployment artifacts for fast rollback.

#### Implementation status
| Control | Status | Acceptance Criteria |
|---|---|---|
| Backup policy and checks | In Progress | Daily backup validation checklist documented and assigned |
| Weekly restore verification | In Progress | Weekly restore drill steps documented with smoke verification |
| Artifact retention and rollback target | In Progress | Last known good deployment remains promotable for one-click rollback |

## 6. Implementation Roadmap

### Phase 0 (Day 1-2): Immediate Risk Controls

| Control | Status | Current Implementation |
|---|---|---|
| Disable seed API in production by environment guard | In Progress | `/api/seed` is blocked outside development and now supports explicit `SEED_API_ENABLED` gating for controlled dev seeding |
| Put auth in front of upload endpoint | In Progress | `/api/assets/upload` and `/api/assets/ingest-drive-link` enforce API key auth via `verifyApiKey` |
| Add basic per-IP rate limits on write APIs | In Progress | Contact, upload, drive-ingest, and seed write routes enforce IP/token rate limits and return `429` + `Retry-After` |
| Configure CDN/WAF managed bot rules | In Progress | Provider-specific policy and verification checklist documented for Vercel (`docs/ops/WAF_BOT_RULES_CHECKLIST.md`) |

### Phase 1 (Day 3-5): Abuse Prevention and Monitoring

| Control | Status | Current Implementation |
|---|---|---|
| Integrate CAPTCHA/honeypot for forms | In Progress | Contact form supports Turnstile/reCAPTCHA, honeypot field, min-fill-time checks, domain validation, and dedup windows |
| Add centralized logging and error monitoring | In Progress | Shared observability helpers now emit structured API logs; runbook and env requirements for error monitoring are documented |
| Add uptime checks and alert channels | In Progress | Health endpoints, pre-promotion health script, multi-region probe template, and observability alert matrix are in place |
| Add API request validation and consistent 4xx/429 handling | In Progress | Shared API security layer enforces body limits, JSON parsing limits, CORS policy, auth checks, and standardized error envelope on shared 4xx/429 paths |

## 2. Traffic and Reliability Targets
- Daily users: 500
- Design headroom: 10x burst capacity during campaigns or bot spikes
- Availability target: 99.9% monthly

### Performance targets
- Homepage LCP under 2.5s on 4G mobile
- API p95 response under 500ms for public endpoints

### Error budget
- 5xx error rate under 0.5% per day
- No single outage longer than 10 minutes

## Status Legend
- Not Started
- In Progress
- Blocked
- Done

## Team Owners
- Eng Lead: engineering delivery owner
- DevOps: infrastructure, deployment, monitoring owner
- Security: WAF, abuse prevention, policy owner
- QA: testing and release validation owner
- Product Owner: business sign-off owner

## Daily Tracker (14 Days)

| Day | Due Date | Task | Owner | Status | Acceptance Criteria |
|---|---|---|---|---|---|
| Day 1 | 2026-03-14 | Freeze release scope and create production checklist | Product Owner + Eng Lead | Not Started | Scope document approved; must-have vs nice-to-have split published; go-live date tentatively set |
| Day 1 | 2026-03-14 | Inventory all public and private endpoints | Eng Lead | Not Started | Endpoint list completed with route, method, auth type, and risk level |
| Day 2 | 2026-03-15 | Block seed/debug routes in production | Eng Lead | Not Started | Seed/debug routes return 403/404 in production; verified by QA |
| Day 2 | 2026-03-15 | Add auth protection to all write/admin APIs | Eng Lead | Not Started | All write/admin APIs reject unauthenticated requests; test evidence attached |
| Day 3 | 2026-03-16 | Configure edge WAF and bot management | Security + DevOps | Not Started | Managed WAF rules enabled; bot score/challenge policy active; false-positive review completed |
| Day 3 | 2026-03-16 | Apply rate limits for sensitive API routes | Eng Lead + DevOps | Not Started | Per-IP and token-based limits active; abusive bursts return 429 with Retry-After |
| Day 4 | 2026-03-17 | Add form anti-abuse controls (captcha + honeypot) | Eng Lead | Not Started | Contact/inquiry forms protected by captcha and honeypot; bot simulation blocked |
| Day 4 | 2026-03-17 | Add strict input validation and payload size caps | Eng Lead | Not Started | Invalid payloads return 4xx; oversized requests rejected; no server crash under malformed input tests |
| Day 5 | 2026-03-18 | Set security headers and HTTPS policy | Security + Eng Lead | In Progress | CSP, HSTS, X-Frame-Options, Referrer-Policy, X-Content-Type-Options validated in response headers |
| Day 5 | 2026-03-18 | Configure CORS and secret management audit | Security + DevOps | Not Started | CORS restricted to approved origins; secrets removed from code and rotated where needed |
| Day 6 | 2026-03-19 | Set up observability: error tracking + structured logs | DevOps + Eng Lead | Not Started | Error tracking receiving events; logs searchable by request ID; alert routing tested |
| Day 6 | 2026-03-19 | Configure uptime checks from multiple regions | DevOps | Not Started | Uptime checks active for homepage, product page, and key API; alerts tested end-to-end |
| Day 7 | 2026-03-20 | Define deployment strategy (canary or blue-green) | DevOps + Eng Lead | Not Started | Rollout strategy documented with promotion and rollback gates |
| Day 7 | 2026-03-20 | Implement health checks and readiness gates | DevOps + Eng Lead | Not Started | Deployment blocks unhealthy builds; health endpoints return expected signals |
| Day 8 | 2026-03-21 | Performance pass: caching and image optimization | Eng Lead | Not Started | CDN caching rules published; key pages show improved load metrics; no broken media |
| Day 8 | 2026-03-21 | Tune Next.js rendering strategy for key pages | Eng Lead | In Progress | ISR/SSR/static decisions documented and applied; p95 latency target trend improved |
| Day 9 | 2026-03-22 | Build synthetic smoke tests for core journeys | QA + Eng Lead | Not Started | Automated smoke suite covers homepage, product list/detail, contact flow, and top APIs |
| Day 9 | 2026-03-22 | Security test pass (unauthorized, abuse, malformed input) | QA + Security | Not Started | Test report shows critical findings resolved or accepted with mitigation |
| Day 10 | 2026-03-23 | Load test at 5x expected traffic | QA + DevOps | Not Started | System stable at test load; public API p95 < 500ms and 5xx < 0.5% |
| Day 10 | 2026-03-23 | Load test at 10x burst traffic | QA + DevOps | Not Started | No service crash; graceful degradation confirmed; no single outage > 10 minutes; rate limiting behaves as expected |
| Day 11 | 2026-03-24 | Backup and restore drill | DevOps | Not Started | Successful restore in test environment with documented RTO/RPO |
| Day 11 | 2026-03-24 | Finalize incident response runbook | DevOps + Security + Eng Lead | Not Started | Runbook includes alert matrix, escalation chain, and recovery playbooks |
| Day 12 | 2026-03-25 | Rehearsal release in staging (full dress rehearsal) | Eng Lead + QA + DevOps | Not Started | End-to-end release rehearsal completed; blockers tracked and resolved |
| Day 12 | 2026-03-25 | Rollback drill under simulated failure | DevOps + QA | Not Started | Rollback executed successfully within 10 minutes |
| Day 13 | 2026-03-26 | Production launch window with canary | DevOps + Eng Lead | Not Started | Canary healthy for agreed window; no critical alert spikes |
| Day 13 | 2026-03-26 | Post-launch verification and business sign-off | QA + Product Owner | Not Started | Core journeys pass in production; business owner signs go-live checklist |
| Day 14 | 2026-03-27 | Hypercare monitoring and tuning | DevOps + Eng Lead + Security | Not Started | 24-hour watch completed; tuning actions logged; no unresolved sev-1 incidents |
| Day 14 | 2026-03-27 | Publish 30-day ops plan and owners | Product Owner + DevOps | Not Started | Weekly review cadence set; owners assigned for patching, alerts, and monthly DR drill |

## Go/No-Go Gate (Must Be True Before Full Traffic)

| Gate | Owner | Status | Acceptance Criteria |
|---|---|---|---|
| WAF + bot controls active | Security | Not Started | Managed rules enabled; suspicious traffic challenged/blocked |
| Write/admin APIs protected | Eng Lead | Not Started | Auth + rate limit + validation in place for all write paths |
| Monitoring and alerts live | DevOps | Not Started | Error, uptime, and latency alerts firing to on-call channel |
| Backup and restore validated | DevOps | Not Started | Restore drill successful and documented |
| Rollback validated | DevOps + QA | Not Started | Rollback tested and completed within 10 minutes |
| Load test pass | QA + DevOps | Not Started | 10x burst test passed; public API p95 < 500ms; 5xx < 0.5% |

## Weekly Operating Rhythm After Launch

| Cadence | Owner | Task | Acceptance Criteria |
|---|---|---|---|
| Daily | DevOps | Review uptime, 5xx, latency, abuse dashboard | Daily report confirms 99.9% monthly availability trend, 5xx < 0.5%, and no outage > 10 minutes |
| Weekly | Security | Review WAF and bot policy tuning | False positives reduced; new abuse patterns covered |
| Weekly | Eng Lead | Dependency and patch review | High severity updates patched or scheduled |
| Monthly | DevOps + QA | Disaster recovery drill | Restore drill completed with documented outcomes |

## Quick Start (Today)
1. Assign names to each owner role in this file.
2. Set Status to In Progress for Day 1 tasks.
3. Create a release channel for alerts and incidents.
4. Schedule a 30-minute daily standup only for this tracker.
