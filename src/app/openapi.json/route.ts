import { NextResponse } from 'next/server';

/**
 * OpenAPI Specification with MPP (Machine Payment Protocol) extensions
 * @see https://mpp.dev
 */
export async function GET() {
  const openapi = {
    openapi: '3.1.0',
    info: {
      title: 'UNEOM B2B API',
      version: '1.0.0',
      description: 'API for UNEOM corporate uniform quoting and catalog access.'
    },
    servers: [
      {
        url: 'https://uneom.com/api'
      }
    ],
    paths: {
      '/quote/priority': {
        post: {
          summary: 'Request a priority quote',
          description: 'Submits a priority RFQ for fast-tracked processing. Requires agent payment.',
          operationId: 'requestPriorityQuote',
          'x-payment-info': {
            intent: 'charge',
            method: 'stripe',
            amount: 500,
            currency: 'USD'
          },
          responses: {
            '200': {
              description: 'Quote request accepted'
            },
            '402': {
              description: 'Payment Required via MPP'
            }
          }
        }
      }
    }
  };

  return NextResponse.json(openapi, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
