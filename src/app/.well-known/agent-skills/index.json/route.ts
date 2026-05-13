import { NextResponse } from 'next/server';

/**
 * Agent Skills Discovery Index — v0.2.0
 * Publishes the capabilities of this site for AI agent discovery.
 * @see https://github.com/cloudflare/agent-skills-discovery-rfc
 * @see https://agentskills.io
 */
export async function GET() {
  const index = {
    $schema: 'https://agentskills.io/schemas/v0.2.0/index.json',
    name: 'UNEOM Saudi Arabia',
    description: 'Saudi Arabia\'s leading B2B uniform company. Browse products, request quotes, and discover industry solutions across 8 sectors and 24 cities.',
    url: 'https://uneom.com',
    skills: [
      {
        name: 'browse-products',
        type: 'skill-md',
        description: 'Browse UNEOM\'s uniform product catalog. 8 categories: medical scrubs, corporate workwear, hospitality attire, aviation uniforms, industrial safety gear, school uniforms, chef uniforms, and security uniforms.',
        url: 'https://uneom.com/shop/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      },
      {
        name: 'request-quote',
        type: 'skill-md',
        description: 'Request a bulk uniform quotation from UNEOM. Supports custom quantities, fabric specifications, logo embroidery, and delivery scheduling across all Saudi cities.',
        url: 'https://uneom.com/quote/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      },
      {
        name: 'find-industry-solution',
        type: 'skill-md',
        description: 'Find industry-specific uniform programmes for healthcare, hospitality, aviation, industrial, education, corporate, food service, and security sectors.',
        url: 'https://uneom.com/industries/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      },
      {
        name: 'check-city-availability',
        type: 'skill-md',
        description: 'Check UNEOM service availability in any of 24 Saudi cities — Riyadh, Jeddah, Dammam, Makkah, Madinah, Khobar, Tabuk, Abha, and more.',
        url: 'https://uneom.com/locations/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      },
      {
        name: 'contact-uneom',
        type: 'skill-md',
        description: 'Contact UNEOM Saudi Arabia via form, phone (+966 56 461 2017), or email (info@uneom.com) for uniform inquiries.',
        url: 'https://uneom.com/contact/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      },
      {
        name: 'read-case-studies',
        type: 'skill-md',
        description: 'Read case studies of UNEOM uniform programmes with Saudi enterprises including hospitals, hotels, factories, and schools.',
        url: 'https://uneom.com/case-studies/',
        digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'
      }
    ]
  };

  return NextResponse.json(index, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
