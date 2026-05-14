import type { Metadata } from 'next';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CityCard } from '@/components/ui/CityCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import Link from 'next/link';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'جميع الـ 24 مدينة سعودية — تغطية برامج الزي الموحّد',
  description: 'UNEOM يُسلِّم برامج الزي الموحّد إلى جميع الـ 24 مدينة سعودية — من الرياض وجدة إلى عسير وتبوك والحدود الشمالية. قياسات ميدانية، مجموعات موظفين جدد، دورات استبدال.',
  alternates: {
    canonical: 'https://uneom.com/ar/locations/',
    languages: {
      en: 'https://uneom.com/locations/',
      'ar-SA': 'https://uneom.com/ar/locations/',
      'x-default': 'https://uneom.com/locations/'
    }
  }
};

export default function ArLocationsHubPage() {
  const grouped = SAUDI_CITIES.reduce<Record<string, typeof SAUDI_CITIES>>((acc, c) => {
    if (!acc[c.region]) acc[c.region] = [];
    acc[c.region].push(c);
    return acc;
  }, {});

  const schema = collectionPageSchema({ path: '/ar/locations/', name: 'تغطية المدن السعودية', description: 'تغطية برامج الزي الموحّد عبر 24 مدينة سعودية', items: SAUDI_CITIES.map(c => ({ name: c.nameAr, url: `/ar/locations/${c.slug}/`, description: `برامج الزي الموحّد في ${c.nameAr}` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'المدن', path: '/ar/locations/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${COMPANY_STATS.cities} مدينة · فريق عمليات واحد`}
          title={<>من الحزام الصناعي بالمنطقة الشرقية إلى <span className="text-accent-700">مرتفعات عسير.</span></>}
          lead="UNEOM يشحن برامج الزي الموحّد إلى كل مقاطعة سعودية. قياسات ميدانية للتجمعات التي تتجاوز 50 موظفاً، توصيل دورات الاستبدال في أي مكان خلال 48 ساعة، ومواصفات قماش مُعيَّرة حسب المدينة."
          hero
        />
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAUDI_CITIES.filter(c => c.populationTier === 'metro').map(city => (
            <CityCard key={city.slug} city={city} lang="ar" />
          ))}
        </div>
      </section>

      {/* Province-grouped list */}
      <section className="section-tight bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="حسب المنطقة"
            title="كل منطقة سعودية في خريطة العمليات."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {Object.entries(grouped).map(([region, cities]) => (
              <div key={region} className="card p-8">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{region}</div>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  {cities.map(c => (
                    <li key={c.slug}>
                      <Link href={`/ar/locations/${c.slug}/`} className="link inline-flex items-center gap-1.5">
                        {c.nameAr}
                        <span className="text-ink-300" aria-hidden>·</span>
                        <span className="text-xs text-ink-400 not-italic" lang="en">{c.nameEn}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="برنامج متعدد المدن؟ عقد واحد."
          body="إذا كانت عملياتك تمتدّ لأكثر من منطقة سعودية، اسأل عن عقد البرنامج الوطني. مدير عمليات واحد. إيقاع توصيل واحد. كل مدينة."
          primary={{ label: 'تحدّث مع العمليات', href: '/ar/contact/' }}
          secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
        />
      </section>
    </>
  );
}
