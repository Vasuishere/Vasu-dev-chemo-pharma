#!/usr/bin/env node

/**
 * Pre-promotion health checker for canary/blue-green flow.
 * Usage:
 *   node scripts/pre-promote-health-check.mjs https://preview.example.com
 */

const baseUrl = process.argv[2];

if (!baseUrl) {
  console.error('Missing preview URL. Example: node scripts/pre-promote-health-check.mjs https://preview.example.com');
  process.exit(1);
}

const normalizedBase = baseUrl.replace(/\/$/, '');
const checks = [
  { name: 'Liveness', path: '/api/health?scope=liveness' },
  { name: 'Readiness', path: '/api/health?scope=readiness' },
  { name: 'Homepage', path: '/' },
  { name: 'Product listing', path: '/product' },
];

async function run() {
  let hasFailure = false;

  for (const check of checks) {
    const url = `${normalizedBase}${check.path}`;
    try {
      const start = Date.now();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'pre-promote-health-check/1.0',
        },
      });
      const durationMs = Date.now() - start;

      const ok = response.ok;
      const status = response.status;
      console.log(`${ok ? 'PASS' : 'FAIL'} | ${check.name} | status=${status} | durationMs=${durationMs}`);

      if (!ok) {
        hasFailure = true;
      }
    } catch (error) {
      hasFailure = true;
      console.log(`FAIL | ${check.name} | error=${error instanceof Error ? error.message : String(error)}`);
    }
  }

  if (hasFailure) {
    console.error('Pre-promotion health check failed. Do not promote this deployment.');
    process.exit(1);
  }

  console.log('All health checks passed. Safe to continue canary promotion.');
}

run();
