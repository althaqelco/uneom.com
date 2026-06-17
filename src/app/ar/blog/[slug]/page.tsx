import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG, BLOG_CATEGORIES_BY_SLUG } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema, articleSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return BLOG_POSTS.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) return {};
  return {
    title: `${post.titleAr} — UNEOM`,
    description: post.excerptAr,
    authors: [{ name: post.author.nameAr }],
    alternates: { 
      canonical: `https://uneom.com/ar/blog/${slug}/`,
      languages: {
        en: `https://uneom.com/blog/${slug}/`,
        'ar-SA': `https://uneom.com/ar/blog/${slug}/`,
        'x-default': `https://uneom.com/blog/${slug}/`
      }
    },
    openGraph: {
      title: post.titleAr,
      description: post.excerptAr,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
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

  const schema = articleSchema({
    slug: post.slug,
    title: post.titleAr,
    excerpt: post.excerptAr,
    image: post.hero,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    authorName: post.author.nameAr,
    authorTitle: post.author.titleAr,
    reviewerName: post.reviewer?.nameAr,
    reviewerTitle: post.reviewer?.titleAr,
    reviewerAffiliation: post.reviewer?.affiliationAr,
    section: cat?.nameAr,
    wordCount: post.sections.reduce((acc, s) => acc + s.bodyAr.split(/\s+/).length, post.leadAr.split(/\s+/).length),
    locale: 'ar'
  });

  const faqs = post.faqs.map(f => ({ q: f.qAr, a: f.aAr }));

  return (
    <>
      <JsonLd data={[schema, faqSchema(faqs)]} />
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
              <p className="mt-0.5 text-sm text-navy-900"><time dateTime={post.publishedAt}>{date}</time></p>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" sizes="(min-width: 1024px) 768px, 100vw" srcSet={`/images/${post.hero}-640.avif 640w, /images/${post.hero}-960.avif 960w, /images/${post.hero}-1440.avif 1440w, /images/${post.hero}.avif 1920w`} />
              <source type="image/webp" sizes="(min-width: 1024px) 768px, 100vw" srcSet={`/images/${post.hero}-640.webp 640w, /images/${post.hero}-960.webp 960w, /images/${post.hero}-1440.webp 1440w, /images/${post.hero}.webp 1920w`} />
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
              {s.bodyAr && <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">{s.bodyAr}</p>}
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
          <SiloLinks context={{ type: 'blog-post', silo: post.silo, postSlug: post.slug }} lang="ar" />
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
