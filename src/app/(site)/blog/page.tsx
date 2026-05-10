import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'Editorial — Insights from the Saudi Uniform Industry',
  description: 'Long-form editorial on Saudi uniform programmes — fabric science, regulatory frameworks, procurement realities, and the operational truths that catalogues skip.',
  alternates: { canonical: 'https://uneom.com/blog/' }
};

function PostCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <Link href={`/blog/${post.slug}/`} className="group flex flex-col card-hover overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
        <picture>
          <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
          <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
          <img
            src={`/images/${post.hero}.avif`}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy" decoding="async" width={1920} height={1080}
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
          {post.category.replace(/-/g, ' & ')}
        </div>
        <h3 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-ink-400">
          <span>{date}</span>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Editorial', path: '/blog/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="Reading is one thing. Talking to operations is another." body="If a post raises a real procurement question for your team, write to us. The author of every UNEOM editorial is on our operations team." primary={{ label: 'Talk to us', href: '/contact/' }} secondary={{ label: 'Request a quote', href: '/quote/' }} />
      </section>
    </>
  );
}
