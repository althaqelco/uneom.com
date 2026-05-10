import type { Metadata } from 'next';
import Link from 'next/link';
import { RESOURCES } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { siloAr } from '@/lib/i18n/silo-labels';

export const metadata: Metadata = {
  title: 'الأدلة — دليلك لبرامج الزي الموحّد السعودي',
  description: '12 دليلاً عميقاً يغطّي علم الأقمشة، المقاسات، المشتريات، الامتثال، الاستدامة، والأطر التشغيلية وراء كل برنامج من UNEOM.',
  alternates: { canonical: 'https://uneom.com/ar/resources/' }
};

export default function ArResourcesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'الأدلة', path: '/ar/resources/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${RESOURCES.length} دليل عميق`}
          title={<>الملخّصات <span className="text-accent-700">التشغيلية</span> وراء كل برنامج من UNEOM.</>}
          lead="علم الأقمشة، هندسة المقاسات، أطر الشراء، الاستشهادات الامتثالية — الوثائق التي نسلّمها لفرق المشتريات لدى العملاء. الآن متاحة للجميع."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map(r => (
            <Link key={r.slug} href={`/ar/resources/${r.slug}/`} className="group flex flex-col overflow-hidden bg-white transition-colors hover:bg-ink-50/60">
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/${r.hero}.avif`} />
                  <source type="image/webp" srcSet={`/images/${r.hero}.webp`} />
                  <img src={`/images/${r.hero}.avif`} alt={r.titleAr} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={640} height={360} />
                </picture>
              </div>
              <div className="flex flex-col gap-3 p-7">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                  {siloAr(r.silo)} · {r.readingMinutes} دقيقة قراءة
                </div>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
                  {r.titleAr}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500 line-clamp-2 pretty">{r.summaryAr}</p>
                <span className="mt-auto pt-1 text-sm font-semibold text-accent-700 inline-flex items-center gap-1">
                  اقرأ الدليل <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="تحتاج ملخّصاً أعمق؟" body="اقتصاديات البرنامج التفصيلية وبيانات أداء القماش — اطلب الملخّص التشغيلي الكامل وسنُرسله عبر البريد الإلكتروني في غضون ساعة." primary={{ label: 'اطلب الملخّص', href: '/ar/contact/' }} secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} />
      </section>
    </>
  );
}
