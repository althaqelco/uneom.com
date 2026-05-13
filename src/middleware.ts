/**
 * Edge Middleware — API rate limiting + Markdown content negotiation for AI agents.
 * 
 * When an AI agent requests Accept: text/markdown, we return a clean
 * markdown representation of the page instead of HTML.
 * @see https://developers.cloudflare.com/speed/optimization/protocol/markdown-negotiation
 */

import { NextResponse, NextRequest } from 'next/server';

const ipLimits = new Map<string, { count: number; reset: number }>();

/** Convert a public URL path to a markdown response */
function generateMarkdownForPath(path: string, host: string): string | null {
  const base = `https://${host}`;
  
  if (path === '/' || path === '') {
    return `# UNEOM — Saudi Arabia Uniform Company

> Saudi Arabia's leading B2B uniform company. Medical scrubs, school uniforms, corporate workwear, hospitality attire, and industrial safety gear.

## About UNEOM

UNEOM is a Saudi-based uniform manufacturer and supplier operating across 24 cities in the Kingdom. We deliver ISO 9001:2015 and OEKO-TEX Standard 100 certified uniform programmes for enterprises in 8 industries.

## Industries We Serve

- [Healthcare Uniforms](${base}/industries/healthcare/) — Medical scrubs, lab coats, surgical gowns
- [Hospitality Uniforms](${base}/industries/hospitality/) — Hotel, restaurant, and resort attire
- [Aviation Uniforms](${base}/industries/aviation/) — Airline crew and ground staff
- [Industrial Workwear](${base}/industries/industrial/) — FR coveralls, hi-vis, safety gear
- [Education Uniforms](${base}/industries/education/) — School and university uniforms
- [Corporate Workwear](${base}/industries/corporate/) — Business suits, office attire
- [Food Service Uniforms](${base}/industries/food-service/) — Chef coats, kitchen wear
- [Security Uniforms](${base}/industries/security/) — Guard and enforcement attire

## Key Services

- [Custom Design Programme](${base}/services/custom-design/)
- [Fabric Sourcing & Testing](${base}/services/fabric-sourcing/)
- [Measurement & Fitting](${base}/services/measurement-fitting/)
- [Bulk Manufacturing](${base}/services/bulk-manufacturing/)
- [Quality Assurance](${base}/services/quality-assurance/)
- [Logistics & Distribution](${base}/services/logistics/)
- [Post-Delivery Support](${base}/services/post-delivery/)

## Quick Links

- [Product Catalog](${base}/shop/)
- [Request a Quote](${base}/quote/)
- [Contact Us](${base}/contact/) — +966 56 461 2017 | info@uneom.com
- [Case Studies](${base}/case-studies/)
- [Blog](${base}/blog/)

## Saudi City Coverage

Riyadh · Jeddah · Dammam · Makkah · Madinah · Khobar · Tabuk · Abha · Khamis Mushait · Hail · Najran · Jazan · Yanbu · Jubail · Buraidah · Taif · Sakaka · Arar · Al Baha · Dhahran · Hofuf · Qatif · Ras Tanura · Unaizah

## Certifications

- ISO 9001:2015
- OEKO-TEX Standard 100
- GOTS Certified
- SASO Quality Mark
- Maroof Verified
- ZATCA E-Invoicing Compliant

---

© 2026 UNEOM Saudi Arabia. All rights reserved.
[Privacy Policy](${base}/privacy-policy/) | [Terms of Service](${base}/terms-of-service/)
`;
  }

  return null;
}

export function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const path = req.nextUrl.pathname;
  const host = req.headers.get('host') || 'uneom.com';

  // ── Markdown content negotiation ──
  const accept = req.headers.get('accept') || '';
  if (accept.includes('text/markdown')) {
    const markdown = generateMarkdownForPath(path, host);
    if (markdown) {
      const tokens = markdown.split(/\s+/).length;
      return new NextResponse(markdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'x-markdown-tokens': String(tokens),
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
          'Vary': 'Accept'
        }
      });
    }
  }

  // ── Rate limit /api routes — 30 requests per minute per IP ──
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
  matcher: ['/', '/api/:path*']
};
