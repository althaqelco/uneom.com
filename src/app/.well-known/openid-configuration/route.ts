import { NextResponse } from 'next/server';

/**
 * OpenID Connect Discovery — OpenID Connect Core 1.0
 * Provides OIDC discovery metadata for AI agents.
 * @see https://openid.net/specs/openid-connect-discovery-1_0.html
 */
export async function GET() {
  const config = {
    issuer: 'https://uneom.com',
    authorization_endpoint: 'https://uneom.com/api/auth/authorize',
    token_endpoint: 'https://uneom.com/api/auth/token',
    userinfo_endpoint: 'https://uneom.com/api/auth/userinfo',
    jwks_uri: 'https://uneom.com/.well-known/jwks.json',
    registration_endpoint: 'https://uneom.com/api/auth/register',
    scopes_supported: ['openid', 'profile', 'email', 'read', 'quote:create'],
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code', 'client_credentials'],
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256'],
    token_endpoint_auth_methods_supported: ['client_secret_basic', 'client_secret_post'],
    claims_supported: ['sub', 'iss', 'aud', 'exp', 'iat', 'name', 'email'],
    code_challenge_methods_supported: ['S256'],
    service_documentation: 'https://uneom.com/llms.txt'
  };

  return NextResponse.json(config, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
