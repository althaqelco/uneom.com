import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/data/products';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Shop — Hero Products Across All 8 Industry Silos',
  description: '8 product categories, 16 hero products. Programme-grade uniforms speced for Saudi B2B clients across healthcare, hospitality, aviation, manufacturing, and beyond.',
  alternates: {
    canonical: 'https://uneom.com/shop/',
    languages: {
      en: 'https://uneom.com/shop/',
      'ar-SA': 'https://uneom.com/ar/shop/',
      'x-default': 'https://uneom.com/shop/'
    }
  }
};

export default function ShopHubPage() {
  const schema = collectionPageSchema({ path: '/shop/', name: 'UNEOM Product Catalogue', description: 'Programme-grade uniforms across 8 industry silos', items: PRODUCT_CATEGORIES.map(c => ({ name: c.nameEn, url: `/shop/${c.slug}/`, description: c.summary, image: `/images/${c.hero}.avif` })) });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Shop', path: '/shop/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`${PRODUCT_CATEGORIES.length} categories · ${PRODUCTS.length} hero products`}
          title={<>Hero products. <span className="text-accent-700">Programme economics.</span></>}
          lead="UNEOM is a programme operator, not a catalogue retailer — but every programme starts with a hero product. These are the most-ordered garments across the eight industry silos."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map(cat => (
            <Link key={cat.slug} href={`/shop/${cat.slug}/`} className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-navy-800">
              <div className="absolute inset-0">
                <picture>
                  <source type="image/avif" srcSet={`/images/${cat.hero}.avif`} />
                  <source type="image/webp" srcSet={`/images/${cat.hero}.webp`} />
                  <img src={`/images/${cat.hero}.avif`} alt={`UNEOM ${cat.nameEn} category`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1920} height={1080} />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" aria-hidden />
              </div>
              <div className="relative z-10 p-6 text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">Category</div>
                <h3 className="mt-2 text-xl font-bold balance">{cat.nameEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2 pretty">{cat.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="Programmes start at 50 units. Catalogues end here." body="UNEOM's model is multi-year programme contracts, not single orders. Every category page leads to a programme conversation." primary={{ label: 'Request a quote', href: '/quote/' }} />
      </section>
    </>
  );
}
