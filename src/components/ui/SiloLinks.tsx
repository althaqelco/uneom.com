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
  lang?: 'en' | 'ar';
}

/* ============= i18n labels ============= */
const LABELS: Record<string, { en: string; ar: string }> = {
  'inside-silo':      { en: 'Inside the silo',    ar: 'داخل المحور' },
  'everything':       { en: 'Everything connected to', ar: 'كل ما يتعلق بـ' },
  'silo-desc':        { en: 'Products, resources, case studies, and editorial — all anchored to this silo, not scattered across the site.',
                        ar: 'المنتجات، الأدلة، دراسات الحالة، والمحتوى التحريري — مرتبطة كلها بهذا المحور، غير مبعثرة عبر الموقع.' },
  'products':         { en: 'Products',            ar: 'المنتجات' },
  'resources':        { en: 'Resources',           ar: 'الأدلة' },
  'editorial':        { en: 'Editorial',           ar: 'المقالات' },
  'case-study':       { en: 'Case study',          ar: 'دراسة حالة' },
  'category':         { en: 'Category',            ar: 'الفئة' },
  'industry':         { en: 'Industry',            ar: 'القطاع' },
  'related-products': { en: 'Related products',    ar: 'منتجات ذات صلة' },
  'industry-pillar':  { en: 'Industry pillar',     ar: 'محور القطاع' },
  'featured-product': { en: 'Featured product',    ar: 'المنتج المميز' },
  'deep-guide':       { en: 'Deep guide',          ar: 'الدليل المتعمق' },
  'product':          { en: 'Product',             ar: 'المنتج' },
  'more-resources':   { en: 'More resources',      ar: 'المزيد من الأدلة' },
  'more-cases':       { en: 'More case studies',   ar: 'المزيد من دراسات الحالة' },
  'all-posts':        { en: 'All {cat} posts →',   ar: 'جميع مقالات {cat} ←' },
  'silo-suffix':      { en: 'silo',                ar: 'محور' },
  'min':              { en: 'min',                 ar: 'دقيقة' },
};

function t(key: string, lang: string): string {
  return LABELS[key]?.[lang as 'en' | 'ar'] || LABELS[key]?.en || key;
}

/** Prefix helper — returns '/ar' for Arabic, '' for English */
function prefix(lang: string): string {
  return lang === 'ar' ? '/ar' : '';
}

export function SiloLinks({ context, lang = 'en' }: Props) {
  switch (context.type) {
    case 'industry-pillar':   return <IndustryPillarLinks silo={context.silo} lang={lang} />;
    case 'product':           return <ProductLinks productSlug={context.productSlug} lang={lang} />;
    case 'blog-post':         return <BlogPostLinks silo={context.silo} postSlug={context.postSlug} lang={lang} />;
    case 'resource':          return <ResourceLinks silo={context.silo} resourceSlug={context.resourceSlug} lang={lang} />;
    case 'case-study':        return <CaseStudyLinks silo={context.silo} caseSlug={context.caseSlug} lang={lang} />;
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

function IndustryPillarLinks({ silo, lang }: { silo: string; lang: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;

  const p = prefix(lang);
  const name = lang === 'ar' ? industry.nameAr : industry.nameEn;
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
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{t('inside-silo', lang)}</div>
            <h2 className="mt-5 text-display-lg text-navy-900 balance">
              {t('everything', lang)} <span className="text-accent-700">{name}</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 pretty">
              {t('silo-desc', lang)}
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            {products.length > 0 && (
              <ListSection title={t('products', lang)}>
                {products.map(prod => (
                  <ListLink key={prod.slug} href={`${p}/shop/${prod.category}/${prod.slug}/`} label={lang === 'ar' ? prod.nameAr : prod.nameEn} sublabel={`${prod.priceFrom} SAR`} />
                ))}
              </ListSection>
            )}
            {resources.length > 0 && (
              <ListSection title={t('resources', lang)}>
                {resources.map(r => (
                  <ListLink key={r.slug} href={`${p}/resources/${r.slug}/`} label={lang === 'ar' ? r.titleAr : r.title} sublabel={`${r.readingMinutes} ${t('min', lang)}`} />
                ))}
              </ListSection>
            )}
            {posts.length > 0 && (
              <ListSection title={t('editorial', lang)}>
                {posts.map(post => (
                  <ListLink key={post.slug} href={`${p}/blog/${post.slug}/`} label={lang === 'ar' ? post.titleAr : post.title} sublabel={`${post.readingMinutes} ${t('min', lang)}`} />
                ))}
                {blogCat && (
                  <li className="pt-3">
                    <Link href={`${p}/blog/category/${blogCat.slug}/`} className="text-sm font-semibold text-accent-700 hover:text-accent-600">
                      {t('all-posts', lang).replace('{cat}', lang === 'ar' ? blogCat.nameAr : blogCat.nameEn)}
                    </Link>
                  </li>
                )}
              </ListSection>
            )}
            {caseStudy && (
              <ListSection title={t('case-study', lang)}>
                <ListLink href={`${p}/case-studies/${caseStudy.slug}/`} label={lang === 'ar' ? caseStudy.titleAr : caseStudy.title} />
              </ListSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= product =============

function ProductLinks({ productSlug, lang }: { productSlug: string; lang: string }) {
  const product = PRODUCTS.find(prod => prod.slug === productSlug);
  if (!product) return null;

  const p = prefix(lang);
  const category = PRODUCT_CATEGORIES_BY_SLUG[product.category];
  const industry = INDUSTRIES_BY_SLUG[product.industry];
  const related = productsByCategory(product.category).filter(prod => prod.slug !== productSlug).slice(0, 3);

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-3">
          {category && (
            <ListSection title={t('category', lang)}>
              <ListLink href={`${p}/shop/${category.slug}/`} label={lang === 'ar' ? category.nameAr : category.nameEn} />
            </ListSection>
          )}
          {industry && (
            <ListSection title={t('industry', lang)}>
              <ListLink href={`${p}/industries/${industry.slug}/`} label={`${lang === 'ar' ? industry.nameAr : industry.nameEn} ${t('silo-suffix', lang)}`} />
            </ListSection>
          )}
          {related.length > 0 && (
            <ListSection title={t('related-products', lang)}>
              {related.map(prod => (
                <ListLink key={prod.slug} href={`${p}/shop/${prod.category}/${prod.slug}/`} label={lang === 'ar' ? prod.nameAr : prod.nameEn} />
              ))}
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= blog post =============

function BlogPostLinks({ silo, postSlug, lang }: { silo: string; postSlug: string; lang: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const p = prefix(lang);
  const product = productsByIndustry(silo)[0];
  const resource = resourcesBySilo(silo)[0];
  const caseStudy = caseStudiesBySilo(silo)[0];
  const post = BLOG_POSTS.find(bp => bp.slug === postSlug);
  const blogCat = post && BLOG_CATEGORIES_BY_SLUG[post.category];

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {blogCat && (
            <ListSection title={t('category', lang)}>
              <ListLink href={`${p}/blog/category/${blogCat.slug}/`} label={lang === 'ar' ? blogCat.nameAr : blogCat.nameEn} />
            </ListSection>
          )}
          <ListSection title={t('industry-pillar', lang)}>
            <ListLink href={`${p}/industries/${industry.slug}/`} label={lang === 'ar' ? industry.nameAr : industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title={t('featured-product', lang)}>
              <ListLink href={`${p}/shop/${product.category}/${product.slug}/`} label={lang === 'ar' ? product.nameAr : product.nameEn} />
            </ListSection>
          )}
          {resource && (
            <ListSection title={t('deep-guide', lang)}>
              <ListLink href={`${p}/resources/${resource.slug}/`} label={lang === 'ar' ? resource.titleAr : resource.title} />
            </ListSection>
          )}
          {caseStudy && (
            <ListSection title={t('case-study', lang)}>
              <ListLink href={`${p}/case-studies/${caseStudy.slug}/`} label={lang === 'ar' ? caseStudy.titleAr : caseStudy.title} />
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= resource =============

function ResourceLinks({ silo, resourceSlug, lang }: { silo: string; resourceSlug: string; lang: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const p = prefix(lang);
  const otherResources = RESOURCES.filter(r => r.silo === silo && r.slug !== resourceSlug).slice(0, 2);
  const product = productsByIndustry(silo)[0];
  const post = postsBySilo(silo)[0];
  const caseStudy = caseStudiesBySilo(silo)[0];

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ListSection title={t('industry-pillar', lang)}>
            <ListLink href={`${p}/industries/${industry.slug}/`} label={lang === 'ar' ? industry.nameAr : industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title={t('product', lang)}>
              <ListLink href={`${p}/shop/${product.category}/${product.slug}/`} label={lang === 'ar' ? product.nameAr : product.nameEn} />
            </ListSection>
          )}
          {post && (
            <ListSection title={t('editorial', lang)}>
              <ListLink href={`${p}/blog/${post.slug}/`} label={lang === 'ar' ? post.titleAr : post.title} />
            </ListSection>
          )}
          {otherResources.length > 0 && (
            <ListSection title={t('more-resources', lang)}>
              {otherResources.map(r => (
                <ListLink key={r.slug} href={`${p}/resources/${r.slug}/`} label={lang === 'ar' ? r.titleAr : r.title} />
              ))}
            </ListSection>
          )}
          {caseStudy && (
            <ListSection title={t('case-study', lang)}>
              <ListLink href={`${p}/case-studies/${caseStudy.slug}/`} label={lang === 'ar' ? caseStudy.titleAr : caseStudy.title} />
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= case study =============

function CaseStudyLinks({ silo, caseSlug, lang }: { silo: string; caseSlug: string; lang: string }) {
  const industry = INDUSTRIES_BY_SLUG[silo];
  if (!industry) return null;
  const p = prefix(lang);
  const product = productsByIndustry(silo)[0];
  const otherCases = CASE_STUDIES.filter(c => c.silo === silo && c.slug !== caseSlug).slice(0, 2);

  return (
    <section className="section-tight bg-ink-50 border-y border-ink-100">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-3">
          <ListSection title={t('industry-pillar', lang)}>
            <ListLink href={`${p}/industries/${industry.slug}/`} label={lang === 'ar' ? industry.nameAr : industry.nameEn} />
          </ListSection>
          {product && (
            <ListSection title={t('featured-product', lang)}>
              <ListLink href={`${p}/shop/${product.category}/${product.slug}/`} label={lang === 'ar' ? product.nameAr : product.nameEn} />
            </ListSection>
          )}
          {otherCases.length > 0 && (
            <ListSection title={t('more-cases', lang)}>
              {otherCases.map(c => (
                <ListLink key={c.slug} href={`${p}/case-studies/${c.slug}/`} label={lang === 'ar' ? c.titleAr : c.title} />
              ))}
            </ListSection>
          )}
        </div>
      </div>
    </section>
  );
}
