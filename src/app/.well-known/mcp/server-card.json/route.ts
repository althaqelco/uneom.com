import { NextResponse } from 'next/server';

/**
 * MCP Server Card — SEP-2127
 * Publishes discovery metadata for AI agents using Model Context Protocol.
 * @see https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 */
export async function GET() {
  const card = {
    $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1',
    serverInfo: {
      name: 'UNEOM Saudi Arabia',
      version: '1.0.0',
      description: 'Saudi Arabia\'s leading B2B uniform company — medical scrubs, school uniforms, corporate workwear, hospitality attire, and industrial safety gear. Serving 24 Saudi cities with ISO 9001 + OEKO-TEX certified programmes.',
      homepage: 'https://uneom.com',
      contactEmail: 'info@uneom.com'
    },
    capabilities: {
      resources: true,
      tools: false,
      prompts: false
    },
    resources: [
      {
        name: 'Product Catalog',
        description: 'Browse UNEOM uniform products across 8 categories — medical, corporate, hospitality, aviation, industrial, school, chef, and security uniforms.',
        uri: 'https://uneom.com/shop/',
        mimeType: 'text/html'
      },
      {
        name: 'Industry Solutions',
        description: 'Industry-specific uniform programmes for healthcare, hospitality, aviation, industrial, education, corporate, food service, and security.',
        uri: 'https://uneom.com/industries/',
        mimeType: 'text/html'
      },
      {
        name: 'Saudi City Coverage',
        description: 'UNEOM service locations across 24 Saudi cities — Riyadh, Jeddah, Dammam, Makkah, Madinah, and 19 more.',
        uri: 'https://uneom.com/locations/',
        mimeType: 'text/html'
      },
      {
        name: 'Request a Quote',
        description: 'Request a tailored quotation for bulk uniform orders with UNEOM Saudi Arabia.',
        uri: 'https://uneom.com/quote/',
        mimeType: 'text/html'
      },
      {
        name: 'LLM Documentation',
        description: 'Machine-readable overview of UNEOM for large language models.',
        uri: 'https://uneom.com/llms.txt',
        mimeType: 'text/plain'
      }
    ],
    links: {
      website: 'https://uneom.com',
      documentation: 'https://uneom.com/llms.txt',
      sitemap: 'https://uneom.com/sitemap.xml'
    }
  };

  return NextResponse.json(card, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
