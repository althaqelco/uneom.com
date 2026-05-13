import { NextResponse } from 'next/server';

/**
 * Universal Commerce Protocol (UCP) Discovery
 * @see https://ucp.dev
 */
export async function GET() {
  const ucpProfile = {
    protocol_version: '1.0',
    services: [
      {
        id: 'uneom-b2b-quotes',
        type: 'rfq',
        name: 'UNEOM B2B Quotes',
        description: 'Automated agentic quotation service for corporate uniforms',
        endpoints: {
          catalog: 'https://uneom.com/api/catalog',
          quote_request: 'https://uneom.com/api/quote'
        }
      }
    ],
    capabilities: ['bulk_orders', 'custom_sizing', 'b2b_invoicing'],
    spec_url: 'https://uneom.com/llms.txt'
  };

  return NextResponse.json(ucpProfile, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
