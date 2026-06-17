import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_CATEGORIES_BY_SLUG } from '@/lib/data/blog';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'المقالات — رؤى من داخل صناعة الزي الموحّد السعودي',
  description: 'تحرير طويل الأمد حول برامج الزي الموحّد السعودية — علم الأقمشة، الأطر التنظيمية، واقع المشتريات، والحقائق التشغيلية التي تتجاهلها الكتالوجات.',
  alternates: {
    canonical: 'https://uneom.com/ar/blog/',
    languages: {
      en: 'https://uneom.com/blog/',
      'ar-SA': 'https://uneom.com/ar/blog/',
      'x-default': 'https://uneom.com/blog/'
    }
  }
};

function PostCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  const date = new Date(post.publishedAt).toLocaleDateString('ar-SA', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <Link href={`/ar/blog/${post.slug}/`} className="group flex flex-col card-hover overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
        <picture>
          <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
          <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
          <img
            src={`/images/${post.hero}.avif`}
            alt={post.titleAr}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy" decoding="async" width={1920} height={1080}
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
          {BLOG_CATEGORIES_BY_SLUG[post.category]?.nameAr ?? post.category}
        </div>
        <h3 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
          {post.titleAr}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-3">
          {post.excerptAr}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-ink-400">
          <time dateTime={post.publishedAt}>{date}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} دقيقة قراءة</span>
        </div>
      </div>
    </Link>
  );
}

export default function ArBlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = posts[0];
  const rest = posts.slice(1);

  const arBlogSchema = collectionPageSchema({ path: '/ar/blog/', name: 'مقالات UNEOM', description: 'مقالات تحليلية عن صناعة الزي الموحّد السعودي', items: BLOG_POSTS.map(p => ({ name: p.titleAr || p.title, url: `/ar/blog/${p.slug}/`, description: p.excerptAr || p.excerpt, image: `/images/${p.hero}.avif` })) });

  return (
    <>
      <JsonLd data={arBlogSchema} />
      <Breadcrumbs items={[{ name: 'المقالات', path: '/ar/blog/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`${BLOG_POSTS.length} مقالة دائمة الصلاحية · ${BLOG_CATEGORIES.length} تصنيفات`}
          title={<>تحرير من <span className="text-accent-700">داخل</span> صناعة الزي الموحّد السعودي.</>}
          lead="علم الأقمشة، الأطر التنظيمية، واقع المشتريات، والحقائق التشغيلية التي تتجاهلها الكتالوجات. بقلم مشغّلي عمليات UNEOM، مُراجَعة من أعضاء هيئة المهندسين السعوديين."
          hero
        />
      </section>

      {/* Categories strip */}
      <section className="container-page pb-12">
        <div className="flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map(c => (
            <Link key={c.slug} href={`/ar/blog/category/${c.slug}/`} className="rounded-full border border-ink-200 bg-white px-5 py-2 text-sm font-medium text-ink-700 transition-all hover:border-accent-500 hover:text-navy-900">
              {c.nameAr}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container-page pb-12">
          <Link href={`/ar/blog/${featured.slug}/`} className="group grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/${featured.hero}.avif`} />
                <source type="image/webp" srcSet={`/images/${featured.hero}.webp`} />
                <img src={`/images/${featured.hero}.avif`} alt={featured.titleAr} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" width={1920} height={1080} />
              </picture>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">الأحدث</div>
              <h2 className="mt-4 text-display-lg text-navy-900 group-hover:text-accent-700 transition-colors balance">{featured.titleAr}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">{featured.excerptAr}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
                <span className="font-semibold text-navy-900">{featured.author.nameAr}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingMinutes} دقيقة قراءة</span>
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
        <CtaBlock dark heading="القراءة شيء. التحدّث مع العمليات شيء آخر." body="إذا أثارت مقالة ما سؤالاً حول مشتريات برنامجك، راسلنا. مؤلّف كل مقالة من UNEOM هو عضو في فريق العمليات." primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }} secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} />
      </section>
    </>
  );
}
