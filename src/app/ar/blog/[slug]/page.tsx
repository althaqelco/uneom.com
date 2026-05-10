import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG, BLOG_CATEGORIES_BY_SLUG } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return BLOG_POSTS.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) return {};
  return {
    title: `${post.titleAr} — UNEOM`,
    description: post.excerptAr,
    alternates: { canonical: `https://uneom.com/ar/blog/${slug}/` },
    openGraph: {
      title: post.titleAr,
      description: post.excerptAr,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.nameAr],
      images: [{ url: `/images/${post.hero}.avif`, width: 1920, height: 1080 }]
    },
    twitter: { card: 'summary_large_image', title: post.titleAr, description: post.excerptAr }
  };
}

export default async function ArBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) notFound();

  const cat = BLOG_CATEGORIES_BY_SLUG[post.category];
  const date = new Date(post.publishedAt).toLocaleDateString('ar-SA', { day: 'numeric', month: 'long', year: 'numeric' });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titleAr,
    description: post.excerptAr,
    image: `https://uneom.com/images/${post.hero}.avif`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Person', name: post.author.nameAr, jobTitle: post.author.titleAr, worksFor: { '@id': 'https://uneom.com/#organization' } },
    reviewedBy: post.reviewer ? { '@type': 'Person', name: post.reviewer.nameAr, jobTitle: post.reviewer.titleAr, memberOf: { '@type': 'Organization', name: post.reviewer.affiliationAr } } : undefined,
    publisher: { '@id': 'https://uneom.com/#organization' },
    mainEntityOfPage: `https://uneom.com/ar/blog/${post.slug}/`,
    articleSection: cat?.nameAr,
    inLanguage: 'ar',
    wordCount: post.sections.reduce((acc, s) => acc + s.bodyAr.split(/\s+/).length, post.leadAr.split(/\s+/).length)
  };

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(post.faqs)]} />
      <Breadcrumbs items={[
        { name: 'المقالات', path: '/ar/blog/' },
        { name: cat?.nameAr ?? post.category, path: `/ar/blog/category/${post.category}/` },
        { name: post.titleAr, path: `/ar/blog/${post.slug}/` }
      ]} />

      <article>
        <header className="container-page section-tight">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
            {cat?.nameAr ?? post.category} · {post.readingMinutes} دقيقة قراءة
          </div>
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{post.titleAr}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{post.excerptAr}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-ink-100 pt-8">
            <div>
              <span className="text-xs font-medium text-ink-400">بقلم</span>
              <p className="mt-0.5 font-semibold text-navy-900">{post.author.nameAr}</p>
              <p className="text-xs text-ink-500">{post.author.titleAr}</p>
            </div>
            {post.reviewer && (
              <div>
                <span className="text-xs font-medium text-ink-400">مُراجَع من</span>
                <p className="mt-0.5 font-semibold text-navy-900">{post.reviewer.nameAr}</p>
                <p className="text-xs text-ink-500">{post.reviewer.affiliationAr}</p>
              </div>
            )}
            <div className="mr-auto">
              <span className="text-xs font-medium text-ink-400">نُشر</span>
              <p className="mt-0.5 text-sm text-navy-900">{date}</p>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
              <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
              <img src={`/images/${post.hero}.avif`} alt={post.titleAr} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1920} height={1080} />
            </picture>
          </div>
        </div>

        {/* Body */}
        <div className="container-prose section">
          <p className="text-xl leading-relaxed text-navy-900 font-medium pretty">{post.leadAr}</p>

          {/* TOC */}
          <nav aria-label="المحتويات" className="mt-12 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">المحتويات</p>
            <ol className="mt-4 space-y-2">
              {post.sections.map((s, i) => {
                const sid = `section-${i}`;
                return (
                  <li key={sid}>
                    <a href={`#${sid}`} className="text-sm font-medium text-navy-900 hover:text-accent-700 transition-colors">
                      {i + 1}. {s.headingAr}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="#faq" className="text-sm font-medium text-navy-900 hover:text-accent-700 transition-colors">
                  {post.sections.length + 1}. الأسئلة الشائعة
                </a>
              </li>
            </ol>
          </nav>

          {post.sections.map((s, i) => (
            <section key={i} id={`section-${i}`} className="mt-12">
              <h2 className="text-display text-navy-900">{s.headingAr}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">{s.bodyAr}</p>
            </section>
          ))}

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <section id="faq" className="mt-16">
              <h2 className="text-display text-navy-900">الأسئلة الشائعة</h2>
              <dl className="mt-6 divide-y divide-ink-100 border-t border-ink-100">
                {post.faqs.map(f => (
                  <div key={f.q} className="py-6">
                    <dt className="text-base font-bold text-navy-900">{f.qAr}</dt>
                    <dd className="mt-3 text-base leading-relaxed text-ink-500 pretty">{f.aAr}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>

        <div className="container-page section-tight">
          <SiloLinks context={{ type: 'blog-post', silo: post.silo, postSlug: post.slug }} />
        </div>
      </article>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="هل أثارت هذه المقالة سؤالاً تشغيلياً؟"
          body="راسلنا مباشرة. مؤلّف هذه المقالة هو عضو في فريق عمليات UNEOM."
          primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
          secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
        />
      </section>
    </>
  );
}
