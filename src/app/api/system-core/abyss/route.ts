/**
 * PhantomTrap API Route — "The Execution Chamber" (§37.6.2)
 * 
 * When a scraper bot follows the invisible honeypot link, it lands here.
 * Legitimate search engines (Googlebot, Bingbot) are protected and get a 404.
 * All other bots get branded with a poisoned cookie that lives 10 years,
 * and the middleware will permanently block them with 403.
 */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const ua = request.headers.get('user-agent') || '';

  // Shield legitimate search engine crawlers
  if (/googlebot|bingbot|slurp|yandex|applebot|duckduckbot/i.test(ua)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Log the caught scraper
  console.warn(`[SCYTHE PROTOCOL] Bot Caught! IP: ${ip}, UA: ${ua.substring(0, 100)}`);

  const response = new NextResponse(
    JSON.stringify({ error: 'Access Denied. Entity Terminated.' }),
    { status: 403, headers: { 'Content-Type': 'application/json' } }
  );

  // Plant the poisoned cookie — survives 10 years
  response.cookies.set('phantom_curse', 'infected_entity', {
    maxAge: 315360000, // 10 years in seconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  return response;
}
