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
    title: `${cat.nameAr} — المقالات`,
    description: cat.descriptionAr,
    alternates: {
      canonical: `https://uneom.com/ar/blog/category/${slug}/`,
      languages: {
        en: `https://uneom.com/blog/category/${slug}/`,
        'ar-SA': `https://uneom.com/ar/blog/category/${slug}/`,
        'x-default': `https://uneom.com/blog/category/${slug}/`
      }
    }
  };
}

export default async function ArBlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = BLOG_CATEGORIES_BY_SLUG[slug as BlogCategorySlug];
  if (!cat) notFound();

  const posts = postsByCategory(cat.slug);
  const schema = collectionPageSchema({ path: `/ar/blog/category/${cat.slug}/`, name: `${cat.nameAr} — مقالات UNEOM`, description: cat.descriptionAr, items: posts.map(p => ({ name: p.titleAr, url: `/ar/blog/${p.slug}/` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'المقالات', path: '/ar/blog/' },
        { name: cat.nameAr, path: `/ar/blog/category/${cat.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`التصنيف · ${posts.length} ${posts.length === 1 ? 'مقالة' : 'مقالات'}`}
          title={cat.nameAr}
          lead={cat.descriptionAr}
          hero
        />
        <div className="mt-8 max-w-3xl text-base leading-relaxed text-ink-600 pretty">
          {cat.introAr}
        </div>
      </section>

      <section className="container-page pb-24">
        {posts.length === 0 ? (
          <p className="text-base text-ink-500">لا توجد مقالات في هذا التصنيف بعد.</p>
        ) : (
          <PostGrid locale="ar" cardAs="h2" posts={posts.map(p => ({
            slug: p.slug, title: p.titleAr || p.title, excerpt: p.excerptAr || p.excerpt,
            hero: p.hero, publishedAt: p.publishedAt, readingMinutes: p.readingMinutes,
            category: p.category.replace(/-/g, ' & '),
          }))} />
        )}
      </section>

    </>
  );
}
