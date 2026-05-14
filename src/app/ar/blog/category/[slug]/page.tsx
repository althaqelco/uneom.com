import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, BLOG_CATEGORIES_BY_SLUG, postsByCategory, type BlogCategorySlug } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

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
  const schema = collectionPageSchema({ path: `/ar/blog/category/${cat.slug}/`, name: `${cat.nameAr} — مقالات UNEOM`, description: cat.descriptionAr, items: posts.map(p => ({ name: p.titleAr, url: `/ar/blog/${p.slug}/`, description: p.excerptAr, image: `/images/${p.hero}.avif` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'المقالات', path: '/ar/blog/' },
        { name: cat.nameAr, path: `/ar/blog/category/${cat.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`التصنيف · ${posts.length} ${posts.length === 1 ? 'مقالة' : 'مقالات'}`}
          title={cat.nameAr}
          lead={cat.descriptionAr}
          hero
        />
      </section>

      <section className="container-page pb-24">
        {posts.length === 0 ? (
          <p className="text-base text-ink-500">لا توجد مقالات في هذا التصنيف بعد.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => {
              const date = new Date(post.publishedAt).toLocaleDateString('ar-SA', { day: 'numeric', month: 'short', year: 'numeric' });
              return (
                <Link key={post.slug} href={`/ar/blog/${post.slug}/`} className="group flex flex-col card-hover overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                    <picture>
                      <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
                      <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
                      <img src={`/images/${post.hero}.avif`} alt={post.titleAr} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1920} height={1080} />
                    </picture>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{post.titleAr}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-3">{post.excerptAr}</p>
                    <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-ink-400">
                      <span>{date}</span><span aria-hidden>·</span><span>{post.readingMinutes} دقيقة</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
