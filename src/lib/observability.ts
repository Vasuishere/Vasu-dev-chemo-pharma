type LogLevel = 'info' | 'error';

type LogContext = Record<string, unknown>;

function asErrorPayload(error: unknown): { name: string; message: string; stack?: string } {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    name: 'UnknownError',
    message: String(error),
  };
}

function serialize(level: LogLevel, event: string, context?: LogContext): string {
  return JSON.stringify({
    level,
    event,
    timestamp: new Date().toISOString(),
    ...(context || {}),
  });
}

export function logApiEvent(event: string, context?: LogContext): void {
  console.info(serialize('info', event, context));
}

export function logApiError(event: string, error: unknown, context?: LogContext): void {
  const errorPayload = asErrorPayload(error);
  console.error(
    serialize('error', event, {
      ...(context || {}),
      error: errorPayload,
    })
  );
}
