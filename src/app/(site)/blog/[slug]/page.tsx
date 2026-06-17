import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG, BLOG_CATEGORIES_BY_SLUG, postsBySilo, postsByCategory } from '@/lib/data/blog';
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
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://uneom.com/blog/${slug}/`,
      languages: {
        en: `https://uneom.com/blog/${slug}/`,
        'ar-SA': `https://uneom.com/ar/blog/${slug}/`,
        'x-default': `https://uneom.com/blog/${slug}/`
      }
    },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, publishedTime: post.publishedAt, images: [{ url: `/images/${post.hero}.avif`, width: 1920, height: 1080 }] }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) notFound();

  const cat = BLOG_CATEGORIES_BY_SLUG[post.category];
  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  // Related posts — sibling articles in the same silo (then same category as
  // fallback), excluding this one. Adds post→post inlinks: SiloLinks never
  // links posts to peers, so each post received few inlinks (avg ~3.9).
  const related = [
    ...postsBySilo(post.silo).filter(p => p.slug !== post.slug),
    ...postsByCategory(post.category).filter(p => p.slug !== post.slug)
  ].filter((p, i, arr) => arr.findIndex(x => x.slug === p.slug) === i).slice(0, 3);

  const schema = articleSchema({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.hero,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    authorName: post.author.name,
    authorTitle: post.author.title,
    reviewerName: post.reviewer?.name,
    reviewerTitle: post.reviewer?.title,
    reviewerAffiliation: post.reviewer?.affiliation,
    section: cat?.nameEn,
    wordCount: post.sections.reduce((acc, s) => acc + s.body.split(/\s+/).length, post.lead.split(/\s+/).length),
    locale: 'en'
  });

  return (
    <>
      <JsonLd data={[schema, faqSchema(post.faqs)]} />
      <Breadcrumbs items={[
        { name: 'Editorial', path: '/blog/' },
        ...(cat ? [{ name: cat.nameEn, path: `/blog/category/${cat.slug}/` }] : []),
        { name: post.title, path: `/blog/${post.slug}/` }
      ]} />

      {/* Hero */}
      <article>
        <header className="container-page section-tight">
          {cat && <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{cat.nameEn}</div>}
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <span className="font-semibold text-navy-900">{post.author.name}</span>
            <span className="text-ink-300">·</span>
            <span>{post.author.title}</span>
            <span className="text-ink-300">·</span>
            <time dateTime={post.publishedAt}>{date}</time>
            <span className="text-ink-300">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        {/* Hero image */}
        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" sizes="(min-width: 1024px) 768px, 100vw" srcSet={`/images/${post.hero}-640.avif 640w, /images/${post.hero}-960.avif 960w, /images/${post.hero}-1440.avif 1440w, /images/${post.hero}.avif 1920w`} />
              <source type="image/webp" sizes="(min-width: 1024px) 768px, 100vw" srcSet={`/images/${post.hero}-640.webp 640w, /images/${post.hero}-960.webp 960w, /images/${post.hero}-1440.webp 1440w, /images/${post.hero}.webp 1920w`} />
              <img src={`/images/${post.hero}.avif`} alt={post.title} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1920} height={1080} />
            </picture>
          </div>
        </div>

        {/* Body */}
        <div className="container-prose section">
          <p className="text-xl leading-relaxed text-navy-900 font-medium pretty">
            {post.lead}
          </p>
          <div className="mt-12 space-y-12">
            {post.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-display text-navy-900 balance">{s.heading}</h2>
                {s.body && (
                <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">
                  {s.body}
                </p>
                )}
              </section>
            ))}
          </div>

          {/* Reviewer */}
          {post.reviewer && (
            <aside className="mt-16 rounded-2xl bg-ink-50 p-8 ring-1 ring-ink-100">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Reviewed by</div>
              <p className="mt-4 text-base text-navy-900">
                <span className="font-bold">{post.reviewer.name}</span> — {post.reviewer.title}, {post.reviewer.affiliation}.
              </p>
            </aside>
          )}

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-display text-navy-900">Frequently asked</h2>
            <dl className="mt-8 divide-y divide-ink-100 border-t border-ink-100">
              {post.faqs.map(f => (
                <div key={f.q} className="py-6">
                  <dt className="text-base font-bold text-navy-900">{f.q}</dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-500 pretty">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-page section-tight">
          <h2 className="text-display text-navy-900">Related articles</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(rp => (
              <Link key={rp.slug} href={`/blog/${rp.slug}/`} className="group flex flex-col card-hover overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                  <picture>
                    <source type="image/avif" sizes="(min-width: 1024px) 360px, 100vw" srcSet={`/images/${rp.hero}-640.avif 640w, /images/${rp.hero}-960.avif 960w`} />
                    <source type="image/webp" sizes="(min-width: 1024px) 360px, 100vw" srcSet={`/images/${rp.hero}-640.webp 640w, /images/${rp.hero}-960.webp 960w`} />
                    <img src={`/images/${rp.hero}-960.avif`} alt={rp.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={960} height={540} />
                  </picture>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{rp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">{rp.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiloLinks context={{ type: 'blog-post', silo: post.silo, postSlug: post.slug }} />

      <section className="container-page section">
        <CtaBlock dark heading="Reading is one thing. Talking to operations is another." body={`Have a ${cat?.nameEn.toLowerCase()} programme question? Write to ${post.author.name}'s desk directly.`} primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to us', href: '/contact/' }} />
      </section>
    </>
  );
}
