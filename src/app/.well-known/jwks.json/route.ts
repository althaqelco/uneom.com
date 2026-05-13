import { NextResponse } from 'next/server';

/**
 * JSON Web Key Set — RFC 7517
 * Publishes the public key(s) used to verify tokens.
 * @see https://www.rfc-editor.org/rfc/rfc7517
 */
export async function GET() {
  const jwks = {
    keys: [
      {
        kty: 'RSA',
        use: 'sig',
        alg: 'RS256',
        kid: 'uneom-2026-01',
        n: 'sXch5wQDR4a6RLwJhGT3BkOWCFseIaxGHOEN8nHj0F0eU8ZnPHIWY3F0fP5c6jWJTkHuJe0_FJf29GUH9D5xVwRC0E_czghW0gVBV4dZjKTkRl8b6sW9WdY3XHQkDJLCHZ-12JOB_oE_-KKMVy2Y6c6BSsENxOKLZ7J3G6EB-dN9qL6QZd_RY3bJGOT0lkBIkJFDKaGlMlMwZxPy7cME4iZaHHD9Co3TQRX-FKLyf4exT3k_wKJN3ZHMzHKmR8q3-FvJJl-bYGP0cGRGEh6Mx5vE3cU4N0h4v0aLGVlXNg3WhhN_Hd6L_bJXj0iBhmFKl7kkG5D-kPLtP34whOM',
        e: 'AQAB'
      }
    ]
  };

  return NextResponse.json(jwks, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
