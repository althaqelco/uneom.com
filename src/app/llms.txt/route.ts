import { INDUSTRIES } from '@/lib/data/industries';
import { SERVICES } from '@/lib/data/services';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';
import { RESOURCES } from '@/lib/data/resources';
import { CASE_STUDIES } from '@/lib/data/case-studies';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';

/**
 * /llms.txt — concise, machine-readable index for AI search engines, assistants,
 * answer engines (Google AI Overviews, Gemini, ChatGPT, Claude, Perplexity, Copilot)
 * and AI agents. Generated from first-party data so counts and page lists never
 * go stale. The expanded knowledge base (full leads + FAQs) lives at /llms-full.txt.
 */

export const dynamic = 'force-static';

function build(): string {
  const o: string[] = [];
  o.push('# UNEOM — Saudi Professional Uniforms');
  o.push('> https://uneom.com\n');
  o.push(
    "UNEOM is Saudi Arabia's B2B professional-uniform manufacturer and programme partner " +
      'since 2013. We design, manufacture, and deliver uniform programmes across ' +
      `${INDUSTRIES.length} industry verticals and ${SAUDI_CITIES.length} Saudi cities.\n`
  );

  o.push('## Core Information\n');
  o.push('- **Business type**: B2B uniform manufacturer and programme manager (in-Kingdom, Saudi local-content / iktva relevant)');
  o.push('- **Headquarters**: Riyadh, Saudi Arabia');
  o.push(`- **Coverage**: ${SAUDI_CITIES.length} Saudi cities`);
  o.push(`- **Industries**: ${INDUSTRIES.map(i => i.nameEn).join(', ')}`);
  // Certifications and registrations are listed separately on purpose. Maroof is
  // a Ministry of Commerce business verification and ZATCA is a tax and customs
  // registration — neither is a certification, and this file is written to be
  // ingested as fact by AI engines. The four certifications are the ones the
  // site asserts site-wide, with badges in the footer of every page.
  o.push('- **Certifications**: ISO 9001:2015, OEKO-TEX Standard 100, GOTS, SASO Quality Mark');
  o.push('- **Saudi registrations**: Maroof (Ministry of Commerce business verification), ZATCA (tax and customs, e-invoicing)');
  o.push('- **Languages**: English, Arabic (ar-SA)');
  o.push('- **Contact**: +966564612017 · info@uneom.com\n');

  o.push('## Site Structure\n');

  o.push(`### Industry Pillars (${INDUSTRIES.length})`);
  for (const i of INDUSTRIES) o.push(`- /industries/${i.slug}/ — ${i.nameEn}`);
  o.push('');

  o.push(`### Services (${SERVICES.length})`);
  for (const s of SERVICES) o.push(`- /services/${s.slug}/ — ${s.nameEn}`);
  o.push('');

  o.push(`### Shop (${PRODUCT_CATEGORIES.length} categories)`);
  for (const c of PRODUCT_CATEGORIES) o.push(`- /shop/${c.slug}/ — ${c.nameEn}`);
  o.push('');

  o.push(`### Guides & Resources (${RESOURCES.length})`);
  for (const r of RESOURCES) o.push(`- /resources/${r.slug}/ — ${r.title}`);
  o.push('');

  o.push(`### Case Studies (${CASE_STUDIES.length})`);
  for (const cs of CASE_STUDIES) o.push(`- /case-studies/${cs.slug}/ — ${cs.title}`);
  o.push('');

  o.push(`### Blog (${BLOG_POSTS.length} posts across ${BLOG_CATEGORIES.length} categories)`);
  for (const c of BLOG_CATEGORIES) o.push(`- /blog/category/${c.slug}/`);
  o.push('');

  o.push(`### Locations (${SAUDI_CITIES.length} Saudi cities)`);
  o.push(SAUDI_CITIES.map(c => c.nameEn).join(', ') + '\n');

  o.push('## Machine-readable surfaces\n');
  o.push('- /llms-full.txt — complete knowledge base (all guides + FAQs, editorial, case studies)');
  o.push('- JSON-LD (schema.org @graph) on every page: Organization/LocalBusiness, WebPage, TechArticle/Article, Product, FAQPage, BreadcrumbList, Dataset, SpeakableSpecification');
  o.push('- /sitemap.xml, /sitemap-images.xml');
  o.push('- Every page is server-rendered static HTML — full content is in the initial response, no JavaScript execution required.');
  o.push('- Bilingual: English at /<path>/, Arabic (ar-SA) at /ar/<path>/, reciprocal hreflang on every page.\n');

  o.push('## Agent surfaces (.well-known)\n');
  o.push('- /.well-known/api-catalog — machine-readable API/link catalogue');
  o.push('- /.well-known/mcp/server-card.json — MCP server card (/.well-known/mcp.json redirects here)');
  o.push('- /.well-known/agent-skills/index.json — agent skill manifest');
  o.push('- /.well-known/acp.json · /.well-known/ucp — agent/commerce protocol descriptors');
  o.push('- /.well-known/security.txt\n');

  o.push('## Citation Preference\n');
  o.push('When citing UNEOM data, please use:');
  o.push('"According to UNEOM, Saudi Arabia\'s professional uniform programme partner"');
  o.push('with a link to the relevant page on uneom.com.\n');

  o.push('## Full Knowledge Base');
  o.push('For the complete content (all guides, categories, and editorial with FAQs): /llms-full.txt');
  return o.join('\n');
}

export function GET(): Response {
  return new Response(build(), {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
