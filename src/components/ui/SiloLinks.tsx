/**
 * SiloLinks — central internal-linking component per master-plan-v11 §7.
 *
 * One source of truth for the silo-aware link rules:
 *
 *   - Industry pillar pages link to product cat + 3 products + 2 resources
 *     + 1 case + blog category + 4 posts + 24 cities + Quote.
 *   - Product pages link UP to category + industry pillar; sideways to
 *     2-3 related products in same category only.
 *   - Blog posts link UP to category + blog hub; into the silo to pillar
 *     + 1 product + 1 resource + 1 case (all same silo).
 *   - City pages link to all 8 industry pillars + Quote/Contact.
 *   - Resources link UP to hub + into silo (pillar + product + post + case).
 *   - Case studies link UP to hub + pillar + 1 product + Quote.
 *
 * Goal: every internal link in the site flows through here so that
 * cross-silo bleed is impossible by design.
 */

import Link from 'next/link';
import { INDUSTRIES_BY_SLUG } from '@/lib/data/industries';
import { PRODUCTS, productsByCategory, productsByIndustry, PRODUCT_CATEGORIES_BY_SLUG } from '@/lib/data/products';
import { RESOURCES, resourcesBySilo } from '@/lib/data/resources';
import { CASE_STUDIES, caseStudiesBySilo } from '@/lib/data/case-studies';
import { BLOG_POSTS, BLOG_CATEGORIES_BY_SLUG, postsBySilo, type BlogCategorySlug } from '@/lib/data/blog';

type PageContext =
  | { type: 'industry-pillar'; silo: string }
  | { type: 'product'; productSlug: string }
  | { type: 'blog-post'; silo: string; postSlug: string }
  | { type: 'city'; citySlug: string }
  | { type: 'resource'; silo: string; resourceSlug: string }
  | { type: 'case-study'; silo: string; caseSlug: string };

interface Props {
  context: PageContext;
}

export function SiloLinks({ context }: Props) {
  switch (context.type) {
    case 'industry-pillar':   return <IndustryPillarLinks silo={context.silo} />;
    case 'product':           return <ProductLinks productSlug={context.productSlug} />;
    case 'blog-post':         return <BlogPostLinks silo={context.silo} postSlug={context.postSlug} />;
    case 'resource':          return <ResourceLinks silo={context.silo} resourceSlug={context.resourceSlug} />;
    case 'case-study':        return <CaseStudyLinks silo={context.silo} caseSlug={context.caseSlug} />;
    default: return null;
  }
}

// ============= helpers =============

function ListSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{title}</div>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
}

function ListLink({ href, label, sublabel }: { href: string; label: string; sublabel?: string }) {
  return (
    <li>
      <Link href={href} className="group flex items-baseline justify-between gap-3 py-1 text-base text-navy-900 transition-colors hover:text-accent-700">
        <span className="font-semibold leading-snug pretty">{label}</span>
        {sublabel && <span className="hidden text-xs text-ink-400 sm:inline">{sublabel}</span>}
      </Link>
    </li>
  );
}

// ============= industry pillar =============

function IndustryPillarLinks({ silo }: { silo: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;

  const products = productsByIndustry(silo).slice(0, 3);
  const resources = resourcesBySilo(silo).slice(0, 2);
  const caseStudy = caseStudiesBySilo(silo)[0];
  const posts = postsBySilo(silo).slice(0, 4);
  const blogCat = BLOG_CATEGORIES_BY_SLUG[industry.blogCategory as BlogCategorySlug];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Inside the silo</div>
            <h2 className="mt-5 text-display-lg text-navy-900 balance">
              Everything connected to <span className="text-accent-700">{industry.nameEn}</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 pretty">
              Products, resources, case studies, and editorial — all anchored to this silo, not scattered across the site.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            {products.length > 0 && (
              <ListSection title="Products">
                {products.map(p => (
                  <ListLink key={p.slug} href={`/shop/${p.category}/${p.slug}/`} label={p.nameEn} sublabel={`${p.priceFrom} SAR`} />
                ))}
              </ListSection>
            )}
            {resources.length > 0 && (
              <ListSection title="Resources">
                {resources.map(r => (
                  <ListLink key={r.slug} href={`/resources/${r.slug}/`} label={r.title} sublabel={`${r.readingMinutes} min`} />
                ))}
              </ListSection>
            )}
            {posts.length > 0 && (
              <ListSection title="Editorial">
                {posts.map(p => (
                  <ListLink key={p.slug} href={`/blog/${p.slug}/`} label={p.title} sublabel={`${p.readingMinutes} min`} />
                ))}
                {blogCat && (
                  <li className="pt-3">
                    <Link href={`/blog/category/${blogCat.slug}/`} className="text-sm font-semibold text-accent-700 hover:text-accent-600">
                      All {blogCat.nameEn} posts →
                    </Link>
                  </li>
                )}
              </ListSection>
            )}
            {caseStudy && (
              <ListSection title="Case study">
                <ListLink href={`/case-studies/${caseStudy.slug}/`} label={caseStudy.title} />
              </ListSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= product =============

function ProductLinks({ productSlug }: { productSlug: string }) {
  const product = PRODUCTS.find(p => p.slug === productSlug);
  if (!product) return null;

  const category = PRODUCT_CATEGORIES_BY_SLUG[product.category];
  const industry = INDUSTRIES_BY_SLUG[product.industry];
  const related = productsByCategory(product.category).filter(p => p.slug !== productSlug).slice(0, 3);

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-3">
          {category && (
            <ListSection title="Category">
              <ListLink href={`/shop/${category.slug}/`} label={category.nameEn} />
            </ListSection>
          )}
          {industry && (
            <ListSection title="Industry">
              <ListLink href={`/industries/${industry.slug}/`} label={`${industry.nameEn} silo`} />
            </ListSection>
          )}
          {related.length > 0 && (
            <ListSection title="Related products">
              {related.map(p => (
                <ListLink key={p.slug} href={`/shop/${p.category}/${p.slug}/`} label={p.nameEn} />
              ))}
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= blog post =============

function BlogPostLinks({ silo, postSlug }: { silo: string; postSlug: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const product = productsByIndustry(silo)[0];
  const resource = resourcesBySilo(silo)[0];
  const caseStudy = caseStudiesBySilo(silo)[0];
  const post = BLOG_POSTS.find(p => p.slug === postSlug);
  const blogCat = post && BLOG_CATEGORIES_BY_SLUG[post.category];

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {blogCat && (
            <ListSection title="Category">
              <ListLink href={`/blog/category/${blogCat.slug}/`} label={blogCat.nameEn} />
            </ListSection>
          )}
          <ListSection title="Industry pillar">
            <ListLink href={`/industries/${industry.slug}/`} label={industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title="Featured product">
              <ListLink href={`/shop/${product.category}/${product.slug}/`} label={product.nameEn} />
            </ListSection>
          )}
          {resource && (
            <ListSection title="Deep guide">
              <ListLink href={`/resources/${resource.slug}/`} label={resource.title} />
            </ListSection>
          )}
          {caseStudy && (
            <ListSection title="Case study">
              <ListLink href={`/case-studies/${caseStudy.slug}/`} label={caseStudy.title} />
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= resource =============

function ResourceLinks({ silo, resourceSlug }: { silo: string; resourceSlug: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const otherResources = RESOURCES.filter(r => r.silo === silo && r.slug !== resourceSlug).slice(0, 2);
  const product = productsByIndustry(silo)[0];
  const post = postsBySilo(silo)[0];
  const caseStudy = caseStudiesBySilo(silo)[0];

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ListSection title="Industry pillar">
            <ListLink href={`/industries/${industry.slug}/`} label={industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title="Product">
              <ListLink href={`/shop/${product.category}/${product.slug}/`} label={product.nameEn} />
            </ListSection>
          )}
          {post && (
            <ListSection title="Editorial">
              <ListLink href={`/blog/${post.slug}/`} label={post.title} />
            </ListSection>
          )}
          {otherResources.length > 0 && (
            <ListSection title="More resources">
              {otherResources.map(r => (
                <ListLink key={r.slug} href={`/resources/${r.slug}/`} label={r.title} />
              ))}
            </ListSection>
          )}
          {caseStudy && (
            <ListSection title="Case study">
              <ListLink href={`/case-studies/${caseStudy.slug}/`} label={caseStudy.title} />
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= case study =============

function CaseStudyLinks({ silo, caseSlug }: { silo: string; caseSlug: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const product = productsByIndustry(silo)[0];
  const otherCases = CASE_STUDIES.filter(c => c.silo === silo && c.slug !== caseSlug).slice(0, 2);

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-3">
          <ListSection title="Industry pillar">
            <ListLink href={`/industries/${industry.slug}/`} label={industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title="Featured product">
              <ListLink href={`/shop/${product.category}/${product.slug}/`} label={product.nameEn} />
            </ListSection>
          )}
          {otherCases.length > 0 && (
            <ListSection title="More case studies">
              {otherCases.map(c => (
                <ListLink key={c.slug} href={`/case-studies/${c.slug}/`} label={c.title} />
              ))}
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}
