import { NextResponse } from 'next/server';

/**
 * API Catalog — RFC 9727
 * Provides automated API discovery for AI agents.
 * @see https://www.rfc-editor.org/rfc/rfc9727
 */
export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: 'https://uneom.com/',
        'service-desc': [
          {
            href: 'https://uneom.com/.well-known/mcp/server-card.json',
            type: 'application/json'
          }
        ],
        'service-doc': [
          {
            href: 'https://uneom.com/llms.txt',
            type: 'text/plain'
          }
        ],
        describes: [
          {
            href: 'https://uneom.com/',
            type: 'text/html'
          }
        ]
      }
    ]
  };

  return NextResponse.json(catalog, {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
