import { INDUSTRIES } from '@/lib/data/industries';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';
import { BLOG_POSTS } from '@/lib/data/blog';

/**
 * /llms-full.txt — the expanded companion to the concise /llms.txt.
 * Serves UNEOM's complete first-party knowledge base (industries, product
 * categories, and the full editorial library with leads + FAQs) as one
 * markdown document so AI search engines can ingest and cite the site in a
 * single fetch. Generated from real data, so it never drifts from content.
 */

export const dynamic = 'force-static';

function build(): string {
  const out: string[] = [];
  out.push('# UNEOM — Saudi Professional Uniforms (Full Knowledge Base)');
  out.push('> https://uneom.com · Generated from first-party data\n');
  out.push(
    "UNEOM is Saudi Arabia's B2B professional-uniform programme partner since 2013, " +
      'designing, manufacturing, and delivering uniform programmes across 8 industry ' +
      'verticals and 24 Saudi cities. ISO 9001:2015 and OEKO-TEX Standard 100 certified. ' +
      'Contact: +966564612017 · info@uneom.com.\n'
  );

  out.push('## Industries\n');
  for (const i of INDUSTRIES) {
    out.push(`### ${i.nameEn} — /industries/${i.slug}/`);
    if (i.tagline) out.push(i.tagline);
    if (i.architectEquation) out.push(`\nWhy UNEOM: ${i.architectEquation}`);
    out.push('');
  }

  out.push('## Product Categories\n');
  for (const c of PRODUCT_CATEGORIES) {
    out.push(`### ${c.nameEn} — /shop/${c.slug}/`);
    if (c.summary) out.push(c.summary);
    if (c.intro) out.push(`\n${c.intro}`);
    out.push('');
  }

  out.push('## Editorial Knowledge Base\n');
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  for (const p of posts) {
    out.push(`### ${p.title} — /blog/${p.slug}/`);
    out.push(`Published ${p.publishedAt}${p.updatedAt ? `, updated ${p.updatedAt}` : ''} · ${p.readingMinutes} min · by ${p.author?.name ?? 'UNEOM'}`);
    if (p.excerpt) out.push(p.excerpt);
    if (p.lead) out.push(`\n${p.lead}`);
    if (p.faqs && p.faqs.length) {
      out.push('\nKey Q&A:');
      for (const f of p.faqs.slice(0, 3)) {
        out.push(`- Q: ${f.q}`);
        out.push(`  A: ${f.a}`);
      }
    }
    out.push('');
  }

  out.push('---');
  out.push('For the concise index see /llms.txt. © UNEOM Saudi Arabia.');
  return out.join('\n');
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
