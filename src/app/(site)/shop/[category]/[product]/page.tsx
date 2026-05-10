import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, PRODUCTS_BY_SLUG, PRODUCT_CATEGORIES_BY_SLUG } from '@/lib/data/products';
import { INDUSTRIES_BY_SLUG } from '@/lib/data/industries';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() {
  return PRODUCTS.map(p => ({ category: p.category, product: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const p = PRODUCTS_BY_SLUG[product];
  if (!p) return {};
  return {
    title: p.nameEn,
    description: p.summary,
    alternates: {
      canonical: `https://uneom.com/shop/${p.category}/${p.slug}/`,
      languages: {
        en: `https://uneom.com/shop/${p.category}/${p.slug}/`,
        'ar-SA': `https://uneom.com/ar/shop/${p.category}/${p.slug}/`,
        'x-default': `https://uneom.com/shop/${p.category}/${p.slug}/`
      }
    },
    openGraph: { title: p.nameEn, description: p.summary, images: [{ url: `/images/${p.image}.avif`, width: 1200, height: 1200 }] }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { product } = await params;
  const p = PRODUCTS_BY_SLUG[product];
  if (!p) notFound();
  const cat = PRODUCT_CATEGORIES_BY_SLUG[p.category];
  const industry = INDUSTRIES_BY_SLUG[p.industry];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://uneom.com/shop/${p.category}/${p.slug}/#product`,
    name: p.nameEn,
    alternateName: p.nameAr,
    description: p.description,
    image: `https://uneom.com/images/${p.image}.avif`,
    brand: { '@type': 'Brand', name: 'UNEOM' },
    manufacturer: { '@id': 'https://uneom.com/#organization' },
    category: cat?.nameEn,
    material: p.fabric,
    audience: { '@type': 'BusinessAudience', name: 'Saudi enterprises' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'SAR',
      lowPrice: p.priceFrom,
      offerCount: p.sizes.length * p.colors.length,
      availability: 'https://schema.org/InStock',
      potentialAction: { '@type': 'ReserveAction', target: { '@type': 'EntryPoint', urlTemplate: `https://uneom.com/quote/?product=${p.slug}` } }
    }
  };

  // FAQ schema if available
  const faqs = p.expandedFaqs?.map(f => ({ q: f.qEn, a: f.aEn })) ?? [];

  // HowTo schema for care instructions
  const howToSchema = p.careInstructions ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Care instructions for ${p.nameEn}`,
    step: p.careInstructions.en.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.step,
      text: s.description
    }))
  } : null;

  return (
    <>
      <JsonLd data={productSchema} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      {howToSchema && <JsonLd data={howToSchema} />}
      <Breadcrumbs items={[
        { name: 'Shop', path: '/shop/' },
        ...(cat ? [{ name: cat.nameEn, path: `/shop/${cat.slug}/` }] : []),
        { name: p.nameEn, path: `/shop/${p.category}/${p.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink-50">
              <picture>
                <source type="image/avif" srcSet={`/images/${p.image}.avif`} />
                <source type="image/webp" srcSet={`/images/${p.image}.webp`} />
                <img src={`/images/${p.image}.avif`} alt={p.nameEn} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1200} height={1200} />
              </picture>
            </div>
          </div>

          {/* Detail */}
          <div className="flex flex-col">
            {industry && (
              <Link href={`/industries/${industry.slug}/`} className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700 hover:text-accent-600">
                {industry.nameEn} silo
              </Link>
            )}
            <h1 className="mt-4 text-display-lg text-navy-900 balance">{p.nameEn}</h1>
            <p className="mt-2 text-lg text-ink-400" lang="ar" dir="rtl">{p.nameAr}</p>
            <p className="mt-6 text-lg leading-relaxed text-ink-500 pretty">{p.summary}</p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-wider text-ink-400">From</span>
              <span className="stat-number text-4xl font-extrabold text-navy-900">{p.priceFrom} <span className="text-base font-medium text-ink-500">SAR</span></span>
              <span className="text-xs text-ink-400">programme price · per unit</span>
            </div>

            {p.lastUpdated && (
              <p className="mt-2 text-xs text-ink-400">
                Last updated: <time dateTime={p.lastUpdated}>{p.lastUpdated}</time>
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/quote/?product=${p.slug}`} className="btn-primary">Request a quote</Link>
              <Link href="/contact/" className="btn-outline">Talk to operations</Link>
            </div>

            {/* Spec table */}
            <dl className="mt-10 divide-y divide-ink-100 border-y border-ink-100">
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Fabric</dt>
                <dd className="col-span-2 text-sm font-semibold text-navy-900">{p.fabric}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Weight</dt>
                <dd className="col-span-2 text-sm font-semibold text-navy-900 stat-number">{p.fabricWeight}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Sizes</dt>
                <dd className="col-span-2 text-sm font-medium text-ink-700">{p.sizes.join(' · ')}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Colours</dt>
                <dd className="col-span-2 text-sm font-medium text-ink-700">{p.colors.join(' · ')}</dd>
              </div>
              {p.numericAnchors && (
                <>
                  {p.numericAnchors.moqUnits && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">MOQ</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">{p.numericAnchors.moqUnits} units</dd>
                    </div>
                  )}
                  {p.numericAnchors.leadTimeDaysFrom && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Lead time</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">
                        {p.numericAnchors.leadTimeDaysFrom}–{p.numericAnchors.leadTimeDaysTo} days
                      </dd>
                    </div>
                  )}
                  {p.numericAnchors.warrantyMonths && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Warranty</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">{p.numericAnchors.warrantyMonths} months</dd>
                    </div>
                  )}
                </>
              )}
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Compliance</dt>
                <dd className="col-span-2 flex flex-wrap gap-2">
                  {p.compliance.map(c => (
                    <span key={c} className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-800">{c}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ARCHITECT EQUATION + DEFINITION LOCK-IN */}
      {(p.architectEquation || p.definitionLockIn) && (
        <section className="bg-ink-50 border-y border-ink-100">
          <div className="container-page section-tight">
            <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                {p.architectEquation && (
                  <>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                      The Architect Equation
                    </span>
                    <p className="mt-5 text-display text-navy-900 balance">
                      {p.architectEquation.en}
                    </p>
                  </>
                )}
              </div>
              {p.definitionLockIn && (
                <blockquote className="card p-8 lg:p-10 border-l-4 border-accent-500">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Definition</span>
                  <p className="mt-4 text-base leading-relaxed text-navy-800 pretty">
                    {p.definitionLockIn.en}
                  </p>
                </blockquote>
              )}
            </div>
          </div>
        </section>
      )}

      {/* USE CASE + DESCRIPTION */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
            <SectionHeader
              eyebrow="Programme spec"
              title={`Built for the operational reality.`}
            />
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-ink-700 pretty">{p.description}</p>
              {p.useCase && (
                <p className="text-base leading-relaxed text-ink-700 pretty">{p.useCase.en}</p>
              )}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Key features</h3>
                <ul className="mt-5 space-y-3">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-base text-navy-900">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                      <span className="pretty">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL SCIENCE */}
      {p.materialScience && (
        <section className="section bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="Material science"
                title="Why this fabric, calibrated this way."
                lead="The technical engineering behind the spec sheet — what survives the wash regime, what fails under Saudi conditions, and why the chemistry matters."
              />
              <p className="text-base leading-relaxed text-ink-700 pretty">
                {p.materialScience.en}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* COMPARISON MATRIX */}
      {p.comparisonMatrix && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeader
              eyebrow="Comparison"
              title={p.comparisonMatrix.titleEn}
              lead="A side-by-side at the spec level. Same wash regime, same Saudi conditions, three different outcomes."
            />
            <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-ink-100">
              <table className="w-full text-sm">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="text-left p-4 font-bold">Dimension</th>
                    {p.comparisonMatrix.columnsEn.map(col => (
                      <th key={col} className={`text-left p-4 font-bold ${col.startsWith('UNEOM') ? 'bg-accent-700' : ''}`}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100 bg-white">
                  {p.comparisonMatrix.rows.map(row => (
                    <tr key={row.dimensionEn}>
                      <td className="p-4 font-bold text-navy-900">{row.dimensionEn}</td>
                      {row.valuesEn.map((v, i) => (
                        <td key={i} className={`p-4 text-ink-700 ${i === 0 ? 'bg-accent-50/50 font-semibold text-navy-900' : ''}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* PRICING TIERS */}
      {p.pricingTiers && p.pricingTiers.length > 0 && (
        <section className="section bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <SectionHeader
              eyebrow="Programme tiers"
              title="Pricing scales with the programme."
              lead="Reserved-batch fabric, on-site fittings, and SLA features unlock at higher tiers — final pricing depends on volume and customisation."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {p.pricingTiers.map(t => (
                <article key={t.nameEn} className="card p-8 lg:p-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{t.nameEn}</h3>
                  <p className="stat-number mt-6 text-3xl font-extrabold text-navy-900">
                    {t.priceFrom} <span className="text-base font-medium text-ink-500">SAR</span>
                  </p>
                  <p className="mt-1 text-xs text-ink-400">from · per unit</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {t.fabricEn}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {t.summaryEn}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-accent-700 stat-number">
                    {t.warrantyMonths} months warranty
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CARE INSTRUCTIONS */}
      {p.careInstructions && (
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="Care instructions"
                title="How to maintain the spec through the wash regime."
                lead="The sequence that keeps the fabric chemistry, structural integrity, and warranty intact."
              />
              <ol className="space-y-5">
                {p.careInstructions.en.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100 text-lg font-extrabold text-accent-700 stat-number">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-navy-900">{step.step}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500 pretty">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {p.expandedFaqs && p.expandedFaqs.length > 0 && (
        <section className="section bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="FAQ"
                title="Programme questions."
                lead="The questions Saudi procurement teams ask before they sign. Direct answers."
              />
              <div>
                <dl className="divide-y divide-ink-100 border-t border-ink-100">
                  {p.expandedFaqs.map(f => (
                    <div key={f.qEn} className="py-6">
                      <dt className="text-base font-bold text-navy-900">{f.qEn}</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{f.aEn}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}

      <SiloLinks context={{ type: 'product', productSlug: p.slug }} />

      <section className="container-page section">
        <CtaBlock dark heading={`Order ${p.nameEn} as part of a programme.`} body={`Programmes start at ${p.numericAnchors?.moqUnits ?? 50} units. ${p.priceFrom} SAR per unit indicative — final pricing depends on volume, customisation, and rotation cycle.`} primary={{ label: 'Request a quote', href: `/quote/?product=${p.slug}` }} secondary={{ label: 'Talk to operations', href: '/contact/' }} />
      </section>
    </>
  );
}
