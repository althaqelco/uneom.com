import { NextResponse } from 'next/server';

/**
 * Legacy MCP discovery endpoint — redirects to canonical server card.
 * Some agents check /.well-known/mcp.json as a fallback.
 */
export async function GET() {
  return NextResponse.redirect('https://uneom.com/.well-known/mcp/server-card.json', 301);
}
