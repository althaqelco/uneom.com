import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/data/case-studies';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { siloAr } from '@/lib/i18n/silo-labels';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'دراسات الحالة — نتائج برامج الزي الموحّد السعودية',
  description: 'ثماني مؤسسات سعودية. ثماني تحوّلات في برامج الزي الموحّد. أرقام حقيقية، جداول زمنية حقيقية، قبل وبعد حقيقيان.',
  alternates: { canonical: 'https://uneom.com/ar/case-studies/' }
};

export default function ArCaseStudiesHubPage() {
  const schema = collectionPageSchema({ path: '/ar/case-studies/', name: 'دراسات حالة UNEOM', description: 'ثماني تحوّلات في برامج الزي الموحّد بنتائج حقيقية.', items: CASE_STUDIES.map(c => ({ name: c.titleAr, url: `/ar/case-studies/${c.slug}/`, description: c.summaryAr, image: `/images/case-studies/${c.imageFolder}/after.avif` })) });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'دراسات الحالة', path: '/ar/case-studies/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${CASE_STUDIES.length} برامج · أرقام حقيقية`}
          title={<>مؤسسات سعودية <span className="text-accent-700">اختارت التغيير.</span></>}
          lead="كل دراسة حالة هي برنامج B2B سعودي أُعيد بناؤه مع UNEOM. تصوير قبل وبعد، مقاييس حقيقية، والقصة التشغيلية وراء الأرقام."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {CASE_STUDIES.map(c => (
            <Link key={c.slug} href={`/ar/case-studies/${c.slug}/`} className="group flex flex-col overflow-hidden card-hover">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/after.avif`} />
                  <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/after.webp`} />
                  <img src={`/images/case-studies/${c.imageFolder}/after.avif`} alt={c.titleAr} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1200} height={900} />
                </picture>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-navy-950/90 to-transparent p-6 text-white">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">{siloAr(c.silo)}</div>
                    <div className="mt-1 text-2xl font-bold stat-number">{c.headlineAr.value}</div>
                    <div className="text-sm text-white/80">{c.headlineAr.label}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{c.titleAr}</h3>
                <p className="mt-3 text-sm font-semibold text-ink-500">{c.clientTypeAr}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500 pretty">{c.summaryAr}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-accent-700 inline-flex items-center gap-1">
                  اقرأ البرنامج كاملاً <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="ترى نفسك في إحدى هذه القصص؟" body="البرامج أعلاه بدأت بملخّص. يمكن أن يبدأ ملخّصك الآن — وسنردّ خلال يوم عمل واحد." primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} secondary={{ label: 'تحدّث معنا', href: '/ar/contact/' }} />
      </section>
    </>
  );
}
