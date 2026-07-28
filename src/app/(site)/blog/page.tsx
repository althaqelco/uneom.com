import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';
import { PostGrid } from '@/components/blog/PostGrid';
import { ArchiveList } from '@/components/blog/ArchiveList';

export const metadata: Metadata = {
  title: 'Editorial — Insights from the Saudi Uniform Industry',
  description: 'Long-form editorial on Saudi uniform programmes — fabric science, regulatory frameworks, procurement realities, and the operational truths that catalogues skip.',
  alternates: {
    canonical: 'https://uneom.com/blog/',
    languages: {
      en: 'https://uneom.com/blog/',
      'ar-SA': 'https://uneom.com/ar/blog/',
      'x-default': 'https://uneom.com/blog/'
    }
  }
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = posts[0];

  // Only the seven fields a card renders cross into the client payload — not
  // the sections, FAQs, Arabic bodies or author blocks that make up the bulk
  // of a BlogPost. That is the difference between ~300 bytes a post and 2.4 KB.
  const cards = posts.slice(1).map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    hero: p.hero,
    publishedAt: p.publishedAt,
    readingMinutes: p.readingMinutes,
    category: p.category.replace(/-/g, ' & '),
  }));

  const archive = posts.map(p => ({ slug: p.slug, title: p.title, publishedAt: p.publishedAt }));

  const blogCollectionSchema = collectionPageSchema({ path: '/blog/', name: 'UNEOM Editorial', description: 'Long-form editorial on Saudi uniform programmes', items: BLOG_POSTS.map(p => ({ name: p.title, url: `/blog/${p.slug}/` })) });

  return (
    <>
      <JsonLd data={blogCollectionSchema} />
      <Breadcrumbs items={[{ name: 'Editorial', path: '/blog/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`${BLOG_POSTS.length} evergreen posts · ${BLOG_CATEGORIES.length} categories`}
          title={<>Editorial from <span className="text-accent-700">inside</span> the Saudi uniform industry.</>}
          lead="Fabric science, regulatory frameworks, procurement realities, and the operational truths that catalogues skip. Authored by UNEOM operations leads, reviewed by Saudi Council of Engineers members."
          hero
        />
      </section>

      {/* Categories strip */}
      <section className="container-page pb-12">
        <div className="flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map(c => (
            <Link key={c.slug} href={`/blog/category/${c.slug}/`} className="rounded-full border border-ink-200 bg-white px-5 py-2 text-sm font-medium text-ink-700 transition-all hover:border-accent-500 hover:text-navy-900">
              {c.nameEn}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container-page pb-12">
          <Link href={`/blog/${featured.slug}/`} className="group grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/${featured.hero}.avif`} />
                <source type="image/webp" srcSet={`/images/${featured.hero}.webp`} />
                <img src={`/images/${featured.hero}.avif`} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" width={1920} height={1080} />
              </picture>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Latest</div>
              <h2 className="mt-4 text-display-lg text-navy-900 group-hover:text-accent-700 transition-colors balance">{featured.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
                <span className="font-semibold text-navy-900">{featured.author.name}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingMinutes} min read</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid */}
      <section className="container-page pb-24">
        <PostGrid posts={cards} locale="en" />
      </section>

      <ArchiveList entries={archive} locale="en" />

      <section className="container-page section">
        <CtaBlock dark heading="Reading is one thing. Talking to operations is another." body="If a post raises a real procurement question for your team, write to us. The author of every UNEOM editorial is on our operations team." primary={{ label: 'Talk to us', href: '/contact/' }} secondary={{ label: 'Request a quote', href: '/quote/' }} />
      </section>
    </>
  );
}
