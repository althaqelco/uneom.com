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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://uneom.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: `/images/${post.hero}.avif`, width: 1920, height: 1080 }]
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) notFound();

  const cat = BLOG_CATEGORIES_BY_SLUG[post.category];
  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://uneom.com/images/${post.hero}.avif`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.title, worksFor: { '@id': 'https://uneom.com/#organization' } },
    reviewedBy: post.reviewer ? { '@type': 'Person', name: post.reviewer.name, jobTitle: post.reviewer.title, memberOf: { '@type': 'Organization', name: post.reviewer.affiliation } } : undefined,
    publisher: { '@id': 'https://uneom.com/#organization' },
    mainEntityOfPage: `https://uneom.com/blog/${post.slug}/`,
    articleSection: cat?.nameEn,
    wordCount: post.sections.reduce((acc, s) => acc + s.body.split(/\s+/).length, post.lead.split(/\s+/).length)
  };

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(post.faqs)]} />
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
            <span>{date}</span>
            <span className="text-ink-300">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        {/* Hero image */}
        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
              <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
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
                <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">
                  {s.body || <span className="italic text-ink-400">[Section authored — see master-plan-v11 §6.3 voice rules.]</span>}
                </p>
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

      <SiloLinks context={{ type: 'blog-post', silo: post.silo, postSlug: post.slug }} />

      <section className="container-page section">
        <CtaBlock dark heading="Reading is one thing. Talking to operations is another." body={`Have a ${cat?.nameEn.toLowerCase()} programme question? Write to ${post.author.name}'s desk directly.`} primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to us', href: '/contact/' }} />
      </section>
    </>
  );
}
