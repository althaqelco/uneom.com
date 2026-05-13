import { NextResponse } from 'next/server';

/**
 * Plural MCP server-cards.json — redirects to canonical singular path.
 * Cloudflare scanner checks both paths.
 */
export async function GET() {
  return NextResponse.redirect('https://uneom.com/.well-known/mcp/server-card.json', 301);
}
