import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCT_CATEGORIES, PRODUCT_CATEGORIES_BY_SLUG, productsByCategory } from '@/lib/data/products';
import { INDUSTRIES_BY_SLUG } from '@/lib/data/industries';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return PRODUCT_CATEGORIES.map(c => ({ category: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = PRODUCT_CATEGORIES_BY_SLUG[category];
  if (!cat) return {};
  return {
    title: `${cat.nameAr} — UNEOM`,
    description: cat.summaryAr,
    alternates: { canonical: `https://uneom.com/ar/shop/${category}/` },
    openGraph: { title: `${cat.nameAr} — UNEOM`, description: cat.summaryAr, images: [{ url: `/images/${cat.hero}.avif`, width: 1920, height: 1080 }] }
  };
}

export default async function ArShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = PRODUCT_CATEGORIES_BY_SLUG[category];
  if (!cat) notFound();

  const products = productsByCategory(cat.slug);
  const industry = INDUSTRIES_BY_SLUG[cat.industry];

  const schema = collectionPageSchema({ path: `/ar/shop/${cat.slug}/`, name: cat.nameAr, description: cat.summaryAr, items: products.map(p => ({ name: p.nameAr, url: `/ar/shop/${p.category}/${p.slug}/`, description: p.summaryAr, image: `/images/${p.image}.avif` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'المتجر', path: '/ar/shop/' },
        { name: cat.nameAr, path: `/ar/shop/${cat.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${products.length} منتج رئيسي`}
          title={cat.nameAr}
          lead={cat.summaryAr}
          hero
        />
        {industry && (
          <p className="mt-8 text-sm text-ink-500">
            جزء من <Link href={`/ar/industries/${industry.slug}/`} className="link">{industry.nameAr}</Link>.
          </p>
        )}
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <Link key={product.slug} href={`/ar/shop/${cat.slug}/${product.slug}/`} className="group flex flex-col card-hover overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/${product.image}.avif`} />
                  <source type="image/webp" srcSet={`/images/${product.image}.webp`} />
                  <img src={`/images/${product.image}.avif`} alt={product.nameAr} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1200} height={1200} />
                </picture>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{product.nameAr}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2">{product.summaryAr}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="stat-number text-xl font-bold text-navy-900">{product.priceFrom} <span className="text-sm font-medium text-ink-500">ريال</span></span>
                  <span className="text-sm font-semibold text-accent-700 group-hover:text-accent-600 inline-flex items-center gap-1">
                    التفاصيل <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading={`مستعدّ لبرنامج ${cat.nameAr}؟`} body="أخبرنا عن عدد موظفيك والجدول الزمني. سنعود خلال يوم عمل واحد بمقترح." primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} />
      </section>
    </>
  );
}
