import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { INDUSTRIES } from '@/lib/data/industries';
import { INDUSTRY_STATS } from '@/lib/data/stats';

const SITE = 'https://uneom.com';
const PUBLISHED = '2026-04-01';
const NEXT_UPDATE = '2026-07-01';

export const metadata: Metadata = {
  title: 'مؤشر أسعار الزي الموحّد المهني السعودي 2026 — UNEOM',
  description: 'بيانات ربع سنوية عن تسعير الزي الموحّد B2B في المملكة العربية السعودية عبر 8 قطاعات و24 مدينة. أسعار حقيقية للوحدة، وأوقات تسليم وأرقام ضمان من 500+ معاملة UNEOM. مجاني بموجب CC-BY 4.0.',
  alternates: {
    canonical: 'https://uneom.com/ar/resources/uniform-price-index-ksa/',
    languages: { en: 'https://uneom.com/resources/uniform-price-index-ksa/', 'ar-SA': 'https://uneom.com/ar/resources/uniform-price-index-ksa/', 'x-default': 'https://uneom.com/resources/uniform-price-index-ksa/' }
  },
  openGraph: {
    title: 'مؤشر أسعار الزي الموحّد المهني السعودي 2026',
    description: 'بيانات ربع سنوية — 8 قطاعات، 24 مدينة، 500+ معاملة. مجاني بموجب CC-BY 4.0.',
    type: 'article',
    publishedTime: PUBLISHED
  }
};

export default function ArUniformPriceIndexPage() {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${SITE}/ar/resources/uniform-price-index-ksa/#dataset`,
    name: 'Saudi Professional Uniform Price Index',
    description: 'Quarterly B2B uniform pricing across 8 Saudi industries and 24 cities.',
    url: `${SITE}/ar/resources/uniform-price-index-ksa/`,
    sameAs: `${SITE}/resources/uniform-price-index-ksa/`,
    creator: { '@id': `${SITE}/#organization` },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    temporalCoverage: `${PUBLISHED}/..`,
    measurementTechnique: 'Aggregate of UNEOM programme contracts',
    variableMeasured: 'SAR per-unit programme price, lead time, warranty duration',
    distribution: [{
      '@type': 'DataDownload',
      encodingFormat: 'text/html',
      contentUrl: `${SITE}/ar/resources/uniform-price-index-ksa/`,
    }]
  };

  const rows = INDUSTRIES.map(ind => {
    const st = INDUSTRY_STATS[ind.slug];
    return { industry: ind, stats: st };
  }).filter(r => r.stats);

  return (
    <>
      <JsonLd data={datasetSchema} />
      <Breadcrumbs items={[
        { name: 'الأدلة', path: '/ar/resources/' },
        { name: 'مؤشر الأسعار', path: '/ar/resources/uniform-price-index-ksa/' }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="مجموعة البيانات · CC-BY 4.0 · ربع سنوي"
          title={<>مؤشر أسعار الزي الموحّد المهني السعودي <span className="text-accent-700">2026</span>.</>}
          lead="بيانات سوق ربع سنوية عن تسعير الزي الموحّد B2B عبر 8 قطاعات و24 مدينة سعودية. أسعار حقيقية للوحدة من 500+ معاملة UNEOM. مُرخَّصة بموجب Creative Commons Attribution 4.0."
          hero
        />

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-500">
          <div><span className="font-semibold text-navy-900">تاريخ النشر:</span> {PUBLISHED}</div>
          <div><span className="font-semibold text-navy-900">التحديث التالي:</span> {NEXT_UPDATE}</div>
          <div><span className="font-semibold text-navy-900">الترخيص:</span> <a href="https://creativecommons.org/licenses/by/4.0/" className="link" rel="nofollow">CC-BY 4.0</a></div>
          <div><span className="font-semibold text-navy-900">صيغة الاستشهاد:</span> UNEOM (2026). Saudi Uniform Price Index. uneom.com</div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="overflow-x-auto rounded-3xl ring-1 ring-ink-100">
          <table className="w-full text-right text-sm">
            <caption className="sr-only">أسعار الزي الموحّد B2B السعودي حسب القطاع — 2026</caption>
            <thead className="bg-navy-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-right">القطاع</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-right">متوسط الوحدة (ريال)</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-right">وقت التسليم (يوم)</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-right">الضمان (شهر)</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-right">الجهات التنظيمية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {rows.map(({ industry, stats }) => (
                <tr key={industry.slug} className="hover:bg-ink-50/60 transition-colors">
                  <td className="px-6 py-5">
                    <a href={`/ar/industries/${industry.slug}/`} className="font-semibold text-navy-900 hover:text-accent-700 transition-colors">
                      {industry.nameAr}
                    </a>
                  </td>
                  <td className="px-6 py-5 stat-number font-bold text-navy-900">{stats!.avgPriceSAR}</td>
                  <td className="px-6 py-5 stat-number text-navy-900">{stats!.leadTimeDays}</td>
                  <td className="px-6 py-5 stat-number text-navy-900">{stats!.warrantyMonths}</td>
                  <td className="px-6 py-5 text-ink-500">{industry.regulators.map(r => r.toUpperCase()).join('، ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-400">
          المصدر: معاملات برنامج UNEOM السعودي، Q1 2026. الأسعار تمثّل منتصف النطاق للحجم القياسي (200–999 وحدة). الأسعار بالريال السعودي، لا تشمل ضريبة القيمة المضافة.
        </p>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="تريد تسعيراً دقيقاً لبرنامجك؟"
          body="هذه أسعار متوسطة عبر جميع أحجام البرامج. أخبرنا بعدد موظفيك وقطاعك — سنعود خلال يوم عمل واحد بمقترح محدّد."
          primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
          secondary={{ label: 'اطّلع على قطاعك', href: '/ar/industries/' }}
        />
      </section>
    </>
  );
}
