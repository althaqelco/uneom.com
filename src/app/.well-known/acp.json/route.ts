import { NextResponse } from 'next/server';

/**
 * Agentic Commerce Protocol (ACP) Discovery
 * @see https://agenticcommerce.dev
 */
export async function GET() {
  const acpConfig = {
    protocol: {
      name: 'acp',
      version: '1.0.0'
    },
    api_base_url: 'https://uneom.com/api',
    supported_transports: ['http'],
    capabilities: {
      services: ['quote', 'catalog', 'availability']
    }
  };

  return NextResponse.json(acpConfig, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
