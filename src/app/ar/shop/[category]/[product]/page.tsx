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
    title: `${p.nameAr} — UNEOM`,
    description: p.summaryAr,
    alternates: {
      canonical: `https://uneom.com/ar/shop/${p.category}/${p.slug}/`,
      languages: {
        en: `https://uneom.com/shop/${p.category}/${p.slug}/`,
        'ar-SA': `https://uneom.com/ar/shop/${p.category}/${p.slug}/`,
        'x-default': `https://uneom.com/shop/${p.category}/${p.slug}/`
      }
    },
    openGraph: { title: p.nameAr, description: p.summaryAr, images: [{ url: `/images/${p.image}.avif`, width: 1200, height: 1200 }] }
  };
}

export default async function ArProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { product } = await params;
  const p = PRODUCTS_BY_SLUG[product];
  if (!p) notFound();
  const cat = PRODUCT_CATEGORIES_BY_SLUG[p.category];
  const industry = INDUSTRIES_BY_SLUG[p.industry];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://uneom.com/ar/shop/${p.category}/${p.slug}/#product`,
    name: p.nameAr,
    alternateName: p.nameEn,
    description: p.descriptionAr,
    image: `https://uneom.com/images/${p.image}.avif`,
    brand: { '@type': 'Brand', name: 'UNEOM' },
    manufacturer: { '@id': 'https://uneom.com/#organization' },
    category: cat?.nameAr,
    material: p.fabricAr,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'SAR',
      lowPrice: p.priceFrom,
      offerCount: p.sizes.length * p.colors.length,
      availability: 'https://schema.org/InStock',
    }
  };

  // FAQ schema (AR for AR page)
  const faqs = p.expandedFaqs?.map(f => ({ q: f.qAr, a: f.aAr })) ?? [];

  // HowTo schema (AR)
  const howToSchema = p.careInstructions ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `تعليمات العناية لـ ${p.nameAr}`,
    inLanguage: 'ar-SA',
    step: p.careInstructions.ar.map((s, i) => ({
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
        { name: 'المتجر', path: '/ar/shop/' },
        { name: cat?.nameAr ?? '', path: `/ar/shop/${p.category}/` },
        { name: p.nameAr, path: `/ar/shop/${p.category}/${p.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" srcSet={`/images/${p.image}.avif`} />
              <source type="image/webp" srcSet={`/images/${p.image}.webp`} />
              <img src={`/images/${p.image}.avif`} alt={p.nameAr} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1200} height={1200} />
            </picture>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {industry && (
              <Link href={`/ar/industries/${industry.slug}/`} className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700 hover:text-accent-600">
                قطاع {industry.nameAr}
              </Link>
            )}
            <h1 className="text-display-xl text-navy-900 balance">{p.nameAr}</h1>
            <p className="text-lg text-ink-400" lang="en" dir="ltr">{p.nameEn}</p>
            <p className="text-lg leading-relaxed text-ink-500 pretty">{p.summaryAr}</p>

            <div className="flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-wider text-ink-400">يبدأ من</span>
              <span className="stat-number text-4xl font-extrabold text-navy-900">{p.priceFrom} <span className="text-base font-medium text-ink-500">ريال</span></span>
              <span className="text-xs text-ink-400">سعر البرنامج · لكل وحدة</span>
            </div>

            {p.lastUpdated && (
              <p className="text-xs text-ink-400">
                آخر تحديث: <time dateTime={p.lastUpdated}>{p.lastUpdated}</time>
              </p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={`/ar/quote/?product=${p.slug}`} className="btn-primary">طلب عرض سعر</Link>
              <Link href="/ar/contact/" className="btn-outline">تحدّث مع العمليات</Link>
            </div>

            {/* Spec table */}
            <dl className="divide-y divide-ink-100 border-y border-ink-100">
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">القماش</dt>
                <dd className="col-span-2 text-sm font-semibold text-navy-900">{p.fabricAr}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الوزن</dt>
                <dd className="col-span-2 text-sm font-semibold text-navy-900 stat-number">{p.fabricWeightAr}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">المقاسات</dt>
                <dd className="col-span-2 text-sm font-medium text-ink-700">{p.sizes.join('، ')}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الألوان</dt>
                <dd className="col-span-2 text-sm font-medium text-ink-700">{p.colorsAr.join('، ')}</dd>
              </div>
              {p.numericAnchors && (
                <>
                  {p.numericAnchors.moqUnits && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الحدّ الأدنى للطلب</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">{p.numericAnchors.moqUnits} قطعة</dd>
                    </div>
                  )}
                  {p.numericAnchors.leadTimeDaysFrom && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">زمن التسليم</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">
                        {p.numericAnchors.leadTimeDaysFrom}–{p.numericAnchors.leadTimeDaysTo} يوم
                      </dd>
                    </div>
                  )}
                  {p.numericAnchors.warrantyMonths && (
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الضمان</dt>
                      <dd className="col-span-2 text-sm font-medium text-ink-700 stat-number">{p.numericAnchors.warrantyMonths} شهراً</dd>
                    </div>
                  )}
                </>
              )}
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الالتزام</dt>
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
                      معادلة المعمار
                    </span>
                    <p className="mt-5 text-display text-navy-900 balance">
                      {p.architectEquation.ar}
                    </p>
                  </>
                )}
              </div>
              {p.definitionLockIn && (
                <blockquote className="card p-8 lg:p-10 border-r-4 border-accent-500">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">التعريف</span>
                  <p className="mt-4 text-base leading-relaxed text-navy-800 pretty">
                    {p.definitionLockIn.ar}
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
              eyebrow="مواصفات البرنامج"
              title="مبنيّ للواقع التشغيلي."
            />
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-ink-700 pretty">{p.descriptionAr}</p>
              {p.useCase && (
                <p className="text-base leading-relaxed text-ink-700 pretty">{p.useCase.ar}</p>
              )}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">الميزات الرئيسية</h3>
                <ul className="mt-5 space-y-3">
                  {p.featuresAr.map(f => (
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
                eyebrow="علم المواد"
                title="لماذا هذا القماش، مُعاير بهذه الطريقة."
                lead="الهندسة التقنية وراء ورقة المواصفات — ما يصمد لنظام الغسيل، ما يفشل تحت الظروف السعودية، ولماذا تهمّ الكيمياء."
              />
              <p className="text-base leading-relaxed text-ink-700 pretty">
                {p.materialScience.ar}
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
              eyebrow="المقارنة"
              title={p.comparisonMatrix.titleAr}
              lead="مقارنة جنباً إلى جنب على مستوى المواصفات. نفس نظام الغسيل، نفس الظروف السعودية، ثلاث نتائج مختلفة."
            />
            <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-ink-100">
              <table className="w-full text-sm">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="text-right p-4 font-bold">البُعد</th>
                    {p.comparisonMatrix.columnsAr.map((col, i) => (
                      <th key={i} className={`text-right p-4 font-bold ${i === 0 ? 'bg-accent-700' : ''}`}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100 bg-white">
                  {p.comparisonMatrix.rows.map(row => (
                    <tr key={row.dimensionAr}>
                      <td className="p-4 font-bold text-navy-900">{row.dimensionAr}</td>
                      {row.valuesAr.map((v, i) => (
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
              eyebrow="فئات البرنامج"
              title="التسعير يتدرّج مع البرنامج."
              lead="دفعة قماش محجوزة، قياسات ميدانية، وميزات اتّفاقية مستوى الخدمة تُفتَح في الفئات الأعلى — السعر النهائي يعتمد على الحجم والتخصيص."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {p.pricingTiers.map(t => (
                <article key={t.nameAr} className="card p-8 lg:p-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{t.nameAr}</h3>
                  <p className="stat-number mt-6 text-3xl font-extrabold text-navy-900">
                    {t.priceFrom} <span className="text-base font-medium text-ink-500">ريال</span>
                  </p>
                  <p className="mt-1 text-xs text-ink-400">من · لكل وحدة</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {t.fabricAr}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {t.summaryAr}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-accent-700 stat-number">
                    ضمان {t.warrantyMonths} شهراً
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
                eyebrow="تعليمات العناية"
                title="كيف تحافظ على المواصفات خلال نظام الغسيل."
                lead="التسلسل الذي يُبقي كيمياء القماش، السلامة الهيكلية، والضمان سليماً."
              />
              <ol className="space-y-5">
                {p.careInstructions.ar.map((step, i) => (
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
                eyebrow="الأسئلة الشائعة"
                title="أسئلة البرنامج."
                lead="الأسئلة التي تطرحها فِرَق المشتريات السعودية قبل التوقيع. إجابات مباشرة."
              />
              <div>
                <dl className="divide-y divide-ink-100 border-t border-ink-100">
                  {p.expandedFaqs.map(f => (
                    <div key={f.qAr} className="py-6">
                      <dt className="text-base font-bold text-navy-900">{f.qAr}</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{f.aAr}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}

      <SiloLinks context={{ type: 'product', productSlug: p.slug }} lang="ar" />

      <section className="container-page section">
        <CtaBlock
          dark
          heading={`${p.nameAr} — اطلب كجزء من برنامج.`}
          body={`البرامج تبدأ من ${p.numericAnchors?.moqUnits ?? 50} قطعة. ${p.priceFrom} ريالاً لكل وحدة كمؤشّر — السعر النهائي يعتمد على الحجم، التخصيص، ودورة التدوير.`}
          primary={{ label: 'طلب عرض سعر', href: `/ar/quote/?product=${p.slug}` }}
          secondary={{ label: 'تحدّث مع العمليات', href: '/ar/contact/' }}
        />
      </section>
    </>
  );
}
