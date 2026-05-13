import { NextResponse } from 'next/server';

/**
 * OAuth Protected Resource Metadata — RFC 9728
 * Tells AI agents how to obtain access tokens for UNEOM's APIs.
 * @see https://www.rfc-editor.org/rfc/rfc9728
 */
export async function GET() {
  const metadata = {
    resource: 'https://uneom.com',
    authorization_servers: ['https://uneom.com'],
    scopes_supported: ['read', 'quote:create', 'catalog:read'],
    bearer_methods_supported: ['header'],
    resource_documentation: 'https://uneom.com/llms.txt',
    resource_signing_alg_values_supported: ['RS256']
  };

  return NextResponse.json(metadata, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
