/**
 * Edge Middleware — API rate limiting + honeypot detection.
 * Per master-plan-v11 §25.5 + §25.7 (T1).
 */

import { NextResponse, NextRequest } from 'next/server';

const ipLimits = new Map<string, { count: number; reset: number }>();

export function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const path = req.nextUrl.pathname;

  // Rate limit /api routes — 30 requests per minute per IP
  if (path.startsWith('/api/')) {
    const now = Date.now();
    const limit = ipLimits.get(ip);

    if (!limit || now > limit.reset) {
      ipLimits.set(ip, { count: 1, reset: now + 60_000 });
    } else if (limit.count > 30) {
      return NextResponse.json(
        { error: 'Rate limited. Try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    } else {
      limit.count++;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*']
};
