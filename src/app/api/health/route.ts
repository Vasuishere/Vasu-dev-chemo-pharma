import { NextResponse } from 'next/server';

type HealthScope = 'liveness' | 'readiness';

const REQUIRED_ENV_FOR_READINESS = [
  'EDGE_CHALLENGE_SECRET',
  'ASSET_API_KEY',
  'CORS_ALLOWED_ORIGINS',
  'TURNSTILE_SECRET_KEY',
];

function getMissingReadinessEnv(): string[] {
  return REQUIRED_ENV_FOR_READINESS.filter((key) => !process.env[key]);
}

function getScope(url: URL): HealthScope {
  const scope = url.searchParams.get('scope');
  return scope === 'readiness' ? 'readiness' : 'liveness';
}

function getSystemSnapshot() {
  const now = new Date().toISOString();
  const uptimeSeconds = typeof process !== 'undefined' ? Math.floor(process.uptime()) : 0;
  const memory = typeof process !== 'undefined' ? process.memoryUsage() : null;

  return {
    now,
    uptimeSeconds,
    memory,
    version: process.env.VERCEL_GIT_COMMIT_SHA || process.env.npm_package_version || 'unknown',
    deployment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
    region: process.env.VERCEL_REGION || 'unknown',
  };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const scope = getScope(url);
  const snapshot = getSystemSnapshot();

  if (scope === 'liveness') {
    return NextResponse.json(
      {
        status: 'ok',
        scope,
        ...snapshot,
      },
      { status: 200 }
    );
  }

  const missingEnv = getMissingReadinessEnv();
  const ready = missingEnv.length === 0;

  return NextResponse.json(
    {
      status: ready ? 'ok' : 'degraded',
      scope,
      checks: {
        requiredEnvPresent: ready,
      },
      missingRequiredEnv: missingEnv,
      ...snapshot,
    },
    { status: ready ? 200 : 503 }
  );
}
