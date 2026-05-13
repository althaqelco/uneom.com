import { NextResponse } from 'next/server';

/**
 * Custom robots.txt route handler — replaces Next.js MetadataRoute.Robots
 * to support Content-Signal directives for AI agent readiness.
 *
 * @see https://contentsignals.org
 * @see https://www.ietf.org/archive/id/draft-content-signal-00.html
 */
export async function GET() {
  const body = `# UNEOM — Saudi Arabia Uniform Company
# https://uneom.com

User-Agent: *
Allow: /
Disallow: /api/admin/
Disallow: /admin/
Disallow: /api/revalidate

User-Agent: GPTBot
Allow: /

User-Agent: Google-Extended
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: CCBot
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: Applebot-Extended
Allow: /

User-Agent: anthropic-ai
Allow: /

User-Agent: Bytespider
Allow: /

User-Agent: cohere-ai
Allow: /

User-Agent: AhrefsBot
Crawl-delay: 10

User-Agent: SemrushBot
Crawl-delay: 10

User-Agent: MJ12bot
Crawl-delay: 10

# Content Signals — AI content usage preferences
# @see https://contentsignals.org
Content-Signal: ai-train=yes, search=yes, ai-input=yes

Host: https://uneom.com
Sitemap: https://uneom.com/sitemap.xml
Sitemap: https://uneom.com/sitemap-images.xml
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
    }
  });
}
