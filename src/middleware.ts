/**
 * UNEOM Middleware — Edge Security & Bot Detection
 * 
 * From Prokr Blueprint §37.6: "Early Interceptor" layer
 * Runs on Firebase App Hosting edge (Cloud Run)
 * 
 * Features:
 * 1. PhantomTrap enforcement (poisoned cookie → 403)
 * 2. Aggressive scraper blocking
 * 3. Security headers injection (CSP, HSTS, Permissions-Policy)
 * 4. Geo-based personalization headers
 * 5. Bot detection logging
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // ========================================
  // 1. PHANTOM TRAP ENFORCEMENT (§37.6.3)
  // Check for poisoned cookie from the honeypot trap
  // ========================================
  if (request.cookies.has('phantom_curse')) {
    return new NextResponse(null, {
      status: 403,
      statusText: 'Forbidden - Algorithmic Perimeter Active',
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Content-Type': 'text/plain',
      },
    });
  }

  // ========================================
  // 2. BLOCK KNOWN AGGRESSIVE SCRAPERS
  // Must stay consistent with src/app/robots.ts: AI retrieval bots
  // (GPTBot, ClaudeBot, anthropic-ai, Bytespider, PerplexityBot) are
  // ALLOWED there for AI-search visibility — never 403 them here.
  // ========================================
  const ua = request.headers.get('user-agent') || '';
  const blockedBots = /SemrushBot|MJ12bot|DotBot|BLEXBot|DataForSeoBot|CCBot|PetalBot|Sogou/i;
  if (blockedBots.test(ua)) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // ========================================
  // 3. SECURITY HEADERS (Firebase Edge)
  // ========================================
  // Core security
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // HSTS — Force HTTPS (1 year, include subdomains)
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Permissions Policy — disable camera/mic/geolocation
  response.headers.set('Permissions-Policy', 
    'camera=(), microphone=(), geolocation=(self), interest-cohort=(), browsing-topics=()'
  );

  // Content Security Policy — Allow GA4 + GTM
  response.headers.set('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://*.googleapis.com",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://firebaseinstallations.googleapis.com https://*.firebaseio.com",
    "frame-src 'self' https://www.youtube.com https://youtube.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://wa.me",
  ].join('; '));

  // ========================================
  // 4. GEO-PERSONALIZATION HEADERS
  // Cloud Run provides geo headers automatically
  // ========================================
  const country = request.headers.get('x-country') || request.geo?.country || '';
  const city = request.headers.get('x-city') || request.geo?.city || '';
  
  if (country) {
    response.headers.set('X-User-Country', country);
  }
  if (city) {
    response.headers.set('X-User-City', city);
  }

  // ========================================
  // 5. ARABIC AUTO-DETECT
  // If user language is Arabic and they're on EN page, 
  // add hint header for client-side language switcher
  // ========================================
  const acceptLang = request.headers.get('accept-language') || '';
  const isArabicUser = acceptLang.startsWith('ar');
  const isEnglishPath = !pathname.startsWith('/ar');
  
  if (isArabicUser && isEnglishPath) {
    response.headers.set('X-Suggest-Language', 'ar');
  }

  // ========================================
  // 6. CACHE HINTS FOR STATIC PAGES
  // ========================================
  if (pathname.startsWith('/locations/') || pathname.startsWith('/ar/locations/')) {
    // Location pages: cache for 1 hour, revalidate in background
    response.headers.set('CDN-Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  }

  return response;
}

// Only run middleware on actual pages, not static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|icons|fonts|css|js|manifest.json|robots.txt|sitemap.xml|llms.txt|.well-known).*)',
  ],
};
