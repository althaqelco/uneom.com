import { NextResponse } from 'next/server';

/**
 * OAuth 2.0 Authorization Server Metadata — RFC 8414
 * Provides discovery metadata so AI agents can authenticate with UNEOM APIs.
 * @see https://www.rfc-editor.org/rfc/rfc8414
 */
export async function GET() {
  const metadata = {
    issuer: 'https://uneom.com',
    authorization_endpoint: 'https://uneom.com/api/auth/authorize',
    token_endpoint: 'https://uneom.com/api/auth/token',
    jwks_uri: 'https://uneom.com/.well-known/jwks.json',
    registration_endpoint: 'https://uneom.com/api/auth/register',
    scopes_supported: ['read', 'quote:create', 'catalog:read'],
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code', 'client_credentials'],
    token_endpoint_auth_methods_supported: ['client_secret_basic', 'client_secret_post'],
    service_documentation: 'https://uneom.com/llms.txt',
    ui_locales_supported: ['en', 'ar'],
    code_challenge_methods_supported: ['S256']
  };

  return NextResponse.json(metadata, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
