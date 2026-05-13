import { NextResponse } from 'next/server';

/**
 * Legacy Agent Skills path — redirects to canonical v0.2.0 path.
 * Some agents check /.well-known/skills/index.json as a fallback.
 */
export async function GET() {
  return NextResponse.redirect('https://uneom.com/.well-known/agent-skills/index.json', 301);
}
