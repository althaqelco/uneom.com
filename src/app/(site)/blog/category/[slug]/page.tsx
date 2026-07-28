import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, BLOG_CATEGORIES_BY_SLUG, postsByCategory, type BlogCategorySlug } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';
import { PostGrid } from '@/components/blog/PostGrid';

export const dynamicParams = false;
export function generateStaticParams() { return BLOG_CATEGORIES.map(c => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = BLOG_CATEGORIES_BY_SLUG[slug as BlogCategorySlug];
  if (!cat) return {};
  return {
    title: `${cat.nameEn} — Editorial`,
    description: cat.description,
    alternates: {
      canonical: `https://uneom.com/blog/category/${slug}/`,
      languages: {
        en: `https://uneom.com/blog/category/${slug}/`,
        'ar-SA': `https://uneom.com/ar/blog/category/${slug}/`,
        'x-default': `https://uneom.com/blog/category/${slug}/`
      }
    }
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = BLOG_CATEGORIES_BY_SLUG[slug as BlogCategorySlug];
  if (!cat) notFound();

  const posts = postsByCategory(cat.slug);
  const schema = collectionPageSchema({ path: `/blog/category/${cat.slug}/`, name: `${cat.nameEn} — UNEOM Editorial`, description: cat.description, items: posts.map(p => ({ name: p.title, url: `/blog/${p.slug}/` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'Editorial', path: '/blog/' },
        { name: cat.nameEn, path: `/blog/category/${cat.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`Category · ${posts.length} ${posts.length === 1 ? 'post' : 'posts'}`}
          title={cat.nameEn}
          lead={cat.description}
          hero
        />
        <div className="mt-8 max-w-3xl text-base leading-relaxed text-ink-600 pretty">
          {cat.intro}
        </div>
      </section>

      <section className="container-page pb-24">
        {posts.length === 0 ? (
          <p className="text-base text-ink-500">No posts in this category yet.</p>
        ) : (
          <PostGrid locale="en" posts={posts.map(p => ({
            slug: p.slug, title: p.title, excerpt: p.excerpt, hero: p.hero,
            publishedAt: p.publishedAt, readingMinutes: p.readingMinutes,
            category: p.category.replace(/-/g, ' & '),
          }))} />
        )}
      </section>

    </>
  );
}
