import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, CASE_STUDIES_BY_SLUG } from '@/lib/data/case-studies';
import { INDUSTRIES_BY_SLUG } from '@/lib/data/industries';
import { CITIES_BY_SLUG } from '@/lib/data/saudi-cities';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { caseStudySchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return CASE_STUDIES.map(c => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES_BY_SLUG[slug];
  if (!c) return {};
  return {
    title: `${c.titleAr} — UNEOM`,
    description: c.summaryAr,
    alternates: { canonical: `https://uneom.com/ar/case-studies/${slug}/` },
    openGraph: { title: c.titleAr, description: c.summaryAr, images: [{ url: `/images/case-studies/${c.imageFolder}/after.avif`, width: 1200, height: 900 }] }
  };
}

export default async function ArCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES_BY_SLUG[slug];
  if (!c) notFound();
  const industry = INDUSTRIES_BY_SLUG[c.silo];

  const schema = caseStudySchema({ slug: c.slug, title: c.titleAr, summary: c.summaryAr, image: `/images/case-studies/${c.imageFolder}/after.avif`, industry: industry?.nameAr || c.silo, city: c.city, outcomes: c.outcomesAr, locale: 'ar' });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'دراسات الحالة', path: '/ar/case-studies/' },
        { name: c.titleAr, path: `/ar/case-studies/${c.slug}/` }
      ]} />

      <article>
        <header className="container-page section-tight">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
            {industry?.nameAr} · {CITIES_BY_SLUG[c.city]?.nameAr ?? c.city}
          </div>
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{c.titleAr}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{c.summaryAr}</p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-4 border-t border-ink-100 pt-10">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">العميل</dt>
              <dd className="mt-2 text-base font-semibold text-navy-900">{c.clientTypeAr}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">المدة</dt>
              <dd className="mt-2 text-base font-semibold text-navy-900">{c.durationAr}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">النتيجة الرئيسية</dt>
              <dd className="mt-2 stat-number text-2xl font-bold text-accent-700">{c.headlineAr.value}</dd>
              <dd className="text-sm text-ink-500">{c.headlineAr.label}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">النطاق</dt>
              <dd className="mt-2 text-base font-semibold text-navy-900">{c.scopeAr}</dd>
            </div>
          </dl>
        </header>

        {/* Before/After */}
        <div className="container-page py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/before.avif`} />
                <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/before.webp`} />
                <img src={`/images/case-studies/${c.imageFolder}/before.avif`} alt={`قبل — ${c.titleAr}`} className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
              </picture>
              <div className="absolute inset-x-0 bottom-0 bg-navy-950/80 p-4 text-center text-xs font-bold uppercase tracking-wider text-white">قبل</div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/after.avif`} />
                <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/after.webp`} />
                <img src={`/images/case-studies/${c.imageFolder}/after.avif`} alt={`بعد — ${c.titleAr}`} className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
              </picture>
              <div className="absolute inset-x-0 bottom-0 bg-accent-700/90 p-4 text-center text-xs font-bold uppercase tracking-wider text-white">بعد</div>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <section className="section-tight bg-navy-900">
          <div className="container-page">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.outcomesAr.map((o, i) => (
                <div key={i} className="text-white">
                  <div className="stat-number text-3xl font-extrabold text-accent-300">{o.metric}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{o.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <div className="container-prose section">
          {c.storyAr.map((s, i) => (
            <section key={i} className="mt-12">
              <h2 className="text-display text-navy-900">{s.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="container-page section-tight">
          <SiloLinks context={{ type: 'case-study', silo: c.silo, caseSlug: c.slug }} lang="ar" />
        </div>
      </article>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="ترى نفسك في هذه القصة؟"
          body="البرنامج أعلاه بدأ بملخّص مثل ملخّصك. نردّ خلال يوم عمل واحد."
          primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
          secondary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
        />
      </section>
    </>
  );
}
