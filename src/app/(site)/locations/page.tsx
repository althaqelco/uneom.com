import type { Metadata } from 'next';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CityCard } from '@/components/ui/CityCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'All 24 Saudi Cities — Uniform Programme Coverage',
  description: 'UNEOM delivers uniform programmes across all 24 Saudi cities — from Riyadh and Jeddah to Asir, Tabuk, and Northern Borders. On-site fittings, joiner kits, replacement cycles.',
  alternates: {
    canonical: 'https://uneom.com/locations/',
    languages: {
      en: 'https://uneom.com/locations/',
      'ar-SA': 'https://uneom.com/ar/locations/',
      'x-default': 'https://uneom.com/locations/'
    }
  }
};

export default function LocationsHubPage() {
  const grouped = SAUDI_CITIES.reduce<Record<string, typeof SAUDI_CITIES>>((acc, c) => {
    if (!acc[c.region]) acc[c.region] = [];
    acc[c.region].push(c);
    return acc;
  }, {});

  const schema = collectionPageSchema({ path: '/locations/', name: 'UNEOM Saudi City Coverage', description: 'Uniform programme coverage across all 24 Saudi cities', items: SAUDI_CITIES.map(c => ({ name: c.nameEn, url: `/locations/${c.slug}/`, description: `Uniform programmes in ${c.nameEn}, ${c.region}` })) });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Locations', path: '/locations/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${COMPANY_STATS.cities} cities · single operations team`}
          title={<>From the Eastern Province industrial belt to the <span className="text-accent-700">Asir highlands.</span></>}
          lead="UNEOM ships uniform programmes to every Saudi province. On-site fittings for headcounts above 50, replacement-cycle delivery anywhere within 48 hours, and city-tuned fabric specs."
          hero
        />
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAUDI_CITIES.filter(c => c.populationTier === 'metro').map(city => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>

      {/* Province-grouped list */}
      <section className="section-tight bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="By province"
            title="Every Saudi province is in the operations map."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {Object.entries(grouped).map(([region, cities]) => (
              <div key={region} className="card p-8">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{region}</div>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  {cities.map(c => (
                    <li key={c.slug}>
                      <a href={`/locations/${c.slug}/`} className="link inline-flex items-center gap-1.5">
                        {c.nameEn}
                        <span className="text-ink-300" aria-hidden>·</span>
                        <span className="text-xs text-ink-400 not-italic" lang="ar" dir="rtl">{c.nameAr}</span>
                      </a>
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
          heading="Multi-city programme? One contract."
          body="If your operations span more than one Saudi region, ask about our nationwide programme contract. One operations manager. One delivery cadence. Every city."
          primary={{ label: 'Talk to operations', href: '/contact/' }}
          secondary={{ label: 'Request a quote', href: '/quote/' }}
        />
      </section>
    </>
  );
}
