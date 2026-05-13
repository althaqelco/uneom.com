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
    title: `${cat.nameEn} — UNEOM`,
    description: cat.summary,
    alternates: { canonical: `https://uneom.com/shop/${category}/` },
    openGraph: { title: `${cat.nameEn} — UNEOM`, description: cat.summary, images: [{ url: `/images/${cat.hero}.avif`, width: 1920, height: 1080 }] }
  };
}

export default async function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = PRODUCT_CATEGORIES_BY_SLUG[category];
  if (!cat) notFound();

  const products = productsByCategory(cat.slug);
  const industry = INDUSTRIES_BY_SLUG[cat.industry];

  const schema = collectionPageSchema({ path: `/shop/${cat.slug}/`, name: cat.nameEn, description: cat.summary, items: products.map(p => ({ name: p.nameEn, url: `/shop/${p.category}/${p.slug}/`, description: p.summary, image: `/images/${p.image}.avif` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'Shop', path: '/shop/' },
        { name: cat.nameEn, path: `/shop/${cat.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${products.length} hero ${products.length === 1 ? 'product' : 'products'}`}
          title={cat.nameEn}
          lead={cat.summary}
          hero
        />
        {industry && (
          <p className="mt-8 text-sm text-ink-500">
            Part of the <Link href={`/industries/${industry.slug}/`} className="link">{industry.nameEn} silo</Link>.
          </p>
        )}
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <Link key={p.slug} href={`/shop/${p.category}/${p.slug}/`} className="group flex flex-col overflow-hidden card-hover">
              <div className="relative aspect-square overflow-hidden bg-ink-50">
                <picture>
                  <source type="image/avif" srcSet={`/images/${p.image}.avif`} />
                  <source type="image/webp" srcSet={`/images/${p.image}.webp`} />
                  <img src={`/images/${p.image}.avif`} alt={p.nameEn} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1200} height={1200} />
                </picture>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{p.nameEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 line-clamp-2 pretty">{p.summary}</p>
                <div className="mt-auto pt-5 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-ink-400">From</span>
                    <span className="ml-2 stat-number text-lg font-bold text-navy-900">{p.priceFrom} SAR</span>
                  </div>
                  <span className="text-xs text-ink-400">{p.fabric}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading={`Configure a ${cat.nameEn} programme.`} body="Programme contracts start at 50 units. Tell us your headcount and city — we'll come back with sample garments and a programme proposal." primary={{ label: 'Request a quote', href: `/quote/?industry=${cat.industry}` }} secondary={{ label: 'Talk to operations', href: '/contact/' }} />
      </section>
    </>
  );
}
