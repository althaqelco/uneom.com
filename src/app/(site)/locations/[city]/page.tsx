import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SAUDI_CITIES, getCity } from '@/lib/data/saudi-cities';
import { INDUSTRIES } from '@/lib/data/industries';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;

export function generateStaticParams() {
  return SAUDI_CITIES.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  const cityTitleMap: Record<string, string> = {
    riyadh: `${city.nameEn} Uniforms — Uniform Shop in Riyadh`,
    jeddah: `${city.nameEn} Uniforms — Uniform Shop in Jeddah`,
    dammam: `${city.nameEn} Uniforms — Uniform Shop in Dammam`,
    mecca: `${city.nameEn} Uniforms — Hajj-Season Uniform Provider`,
    medina: `${city.nameEn} Uniforms — Uniform Supplier in Medina`,
    khobar: `${city.nameEn} Uniforms — Eastern Province Uniform Shop`,
    tabuk: `${city.nameEn} Uniforms — NEOM Region Supplier`,
    abha: `${city.nameEn} Uniforms — Asir Region Uniform Provider`,
  };
  const cityDescMap: Record<string, string> = {
    riyadh: `Professional uniform Riyadh programmes — medical scrubs, corporate workwear, school uniforms & coveralls. 240+ active accounts. UNEOM uniform shop near you in Riyadh.`,
    jeddah: `Uniform shop in Jeddah — chef uniforms, maid uniforms, medical scrubs & Hajj-season hotel attire. Coastal-grade fabric engineering for Red Sea humidity.`,
    dammam: `Uniform supplier in Dammam — Aramco-grade coverall uniforms, safety uniforms & industrial PPE. Serving the Eastern Province petrochemical corridor.`,
    mecca: `Hajj-season uniform programmes in Mecca — hospitality attire, medical scrubs & security uniforms. UNEOM Mecca depot with daily replacement stock.`,
    medina: `Professional uniforms in Medina — hotel staff uniforms, healthcare scrubs & school uniforms for the Prophet's City. Climate-calibrated fabric.`,
    khobar: `Gulf uniform supplier in Khobar — corporate workwear, industrial coveralls & medical scrubs. Serving Eastern Province enterprises from local operations.`,
    'al-qatif': `Uniform provider in Al Qatif — medical uniforms, nurse uniforms, maid uniforms & industrial workwear. Serving Eastern Province with 14–21 day delivery.`,
    'arar': `Uniform supplier in Arar — school uniforms, winter uniforms & corporate workwear for the Northern Borders. Direct delivery from UNEOM operations.`,
    'hafar-al-batin': `Uniform provider in Hafar Al-Batin — safety uniforms, coverall uniforms & industrial workwear. Serving the military & industrial sectors.`,
  };
  return {
    title: cityTitleMap[citySlug] || `${city.nameEn} Uniforms — Saudi Arabia (${city.region})`,
    description: cityDescMap[citySlug] || `Professional uniform programmes serving ${city.nameEn}, ${city.region}. UNEOM operations across healthcare, hospitality, aviation, manufacturing, and beyond.`,
    alternates: {
      canonical: `https://uneom.com/locations/${citySlug}/`,
      languages: {
        en: `https://uneom.com/locations/${citySlug}/`,
        'ar-SA': `https://uneom.com/ar/locations/${citySlug}/`,
        'x-default': `https://uneom.com/locations/${citySlug}/`
      }
    },
    openGraph: {
      title: `UNEOM — ${city.nameEn} Uniform Programmes`,
      images: [{ url: `/images/cities/hero-${citySlug}.avif`, width: 1920, height: 800 }]
    }
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const businessSchema = localBusinessSchema(citySlug);
  const anchorIndustries = INDUSTRIES.filter(i => city.anchorIndustries.includes(i.slug));
  const otherIndustries = INDUSTRIES.filter(i => !city.anchorIndustries.includes(i.slug));

  // Build FAQ schema if city has expandedFaqs
  const faqs = city.expandedFaqs?.map(f => ({ q: f.qEn, a: f.aEn })) ?? [];

  return (
    <>
      {businessSchema && <JsonLd data={businessSchema} />}
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <Breadcrumbs items={[
        { name: 'Locations', path: '/locations/' },
        { name: city.nameEn, path: `/locations/${city.slug}/` }
      ]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" sizes="100vw" srcSet={`/images/cities/hero-${city.slug}-640.avif 640w, /images/cities/hero-${city.slug}-960.avif 960w, /images/cities/hero-${city.slug}-1440.avif 1440w, /images/cities/hero-${city.slug}.avif 1920w`} />
            <source type="image/webp" sizes="100vw" srcSet={`/images/cities/hero-${city.slug}-640.webp 640w, /images/cities/hero-${city.slug}-960.webp 960w, /images/cities/hero-${city.slug}-1440.webp 1440w, /images/cities/hero-${city.slug}.webp 1920w`} />
            <img
              src={`/images/cities/hero-${city.slug}.avif`}
              alt=""
              role="presentation"
              className="h-full w-full object-cover opacity-50"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={800}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-navy-900/30" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              {city.region}
            </span>
            <h1 className="mt-5 text-display-2xl text-white balance">
              UNEOM in <span className="text-accent-400">{city.nameEn}</span>
            </h1>
            <p className="mt-2 text-2xl text-white/80 font-medium" lang="ar" dir="rtl">
              {city.nameAr} · {city.regionAr}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              Uniform programmes anchored in {city.nameEn}: {anchorIndustries.map(i => i.nameEn.toLowerCase()).join(', ')}. On-site fittings, joiner-kit dispatch, and replacement-cycle delivery — coordinated from a single operations team.
            </p>
            {city.lastUpdated && (
              <p className="mt-4 text-xs text-white/50">
                Last updated: <time dateTime={city.lastUpdated}>{city.lastUpdated}</time>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/quote/?city=${city.slug}`} className="btn-accent">Request a quote in {city.nameEn}</Link>
              <Link href="/contact/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white">
                Talk to operations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZED ARCHITECT EQUATION */}
      {city.localizedArchitectEquation && (
        <section className="bg-ink-50 border-b border-ink-100">
          <div className="container-page section-tight">
            <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                  Localized Architect Equation
                </span>
                <p className="mt-5 text-display text-navy-900 balance">
                  {city.localizedArchitectEquation.en}
                </p>
                {city.definitionLockIn && (
                  <blockquote className="mt-8 border-l-4 border-accent-500 bg-white p-6 text-base leading-relaxed text-navy-800 pretty">
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-700 mb-2">Definition</span>
                    {city.definitionLockIn.en}
                  </blockquote>
                )}
              </div>
              {city.localStat && (
                <div className="card p-8 lg:p-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Local benchmark</h3>
                  <p className="stat-number mt-6 text-5xl font-extrabold text-navy-900">
                    {city.localStat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">{city.localStat.labelEn}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {city.localStat.contextEn}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CITY PROFILE */}
      {city.cityProfile && (
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="City profile"
                title={`${city.nameEn} — the operational reality.`}
                lead={`What UNEOM\'s ${city.nameEn} operations team has learned from delivering uniform programmes across this city.`}
              />
              <div className="prose prose-lg max-w-none text-ink-700">
                {city.cityProfile.en.map((para, i) => (
                  <p key={i} className="leading-relaxed pretty">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CLIMATE / LOCAL CONTEXT */}
      {city.climateVocab.length > 0 && (
        <section className="section-tight bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="Local context"
                title={`Why ${city.nameEn}'s climate matters to your uniforms.`}
                lead="Every UNEOM fabric spec is calibrated to the real operating conditions of the city it ships to. These are the local terms our textile lab tests against."
              />
              <ul className="space-y-6">
                {city.climateVocab.map(v => (
                  <li key={v.term} className="card p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl font-bold text-navy-900" lang="ar" dir="rtl">{v.term}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-700">Local term</span>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-ink-500 pretty">
                      {v.meaning}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ANCHOR INDUSTRIES (with city-specific context if available) */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow={`Anchor industries · ${city.nameEn}`}
            title={<>Where UNEOM&apos;s <span className="text-accent-700">{city.nameEn} programme</span> is strongest.</>}
            lead={`These ${anchorIndustries.length} industries have an economic anchor in ${city.nameEn} — and an established UNEOM client base in the city.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {anchorIndustries.map(industry => {
              const ctx = city.industryContext?.[industry.slug];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}/`}
                  className="group card-hover p-8"
                >
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
                    {industry.nameEn} in {city.nameEn}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">
                    {ctx?.en ?? industry.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                    Industry pillar
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES (we cover all 8) */}
      <section className="section-tight bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Full silo coverage"
            title={`UNEOM also serves these silos in ${city.nameEn}.`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherIndustries.map(industry => {
              const ctx = city.industryContext?.[industry.slug];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}/`}
                  className="group flex flex-col rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy-900 ring-1 ring-ink-100 transition-all hover:ring-accent-500/40 hover:shadow-elevation"
                >
                  <span className="flex items-center justify-between font-bold">
                    <span>{industry.nameEn}</span>
                    <span className="text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" aria-hidden>→</span>
                  </span>
                  {ctx?.en && (
                    <span className="mt-2 text-xs leading-relaxed text-ink-500 line-clamp-2">{ctx.en}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL COMPLIANCE BLOCK */}
      {city.localCompliance && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeader
              eyebrow="Local compliance"
              title={`${city.nameEn} municipal requirements.`}
              lead="UNEOM programmes are calibrated to both national framework and the specific Amanah requirements of this city."
            />
            <article className="mt-12 max-w-3xl bg-ink-50 border border-ink-100 rounded-2xl p-8">
              <header>
                <a
                  href={city.localCompliance.amanahUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-accent-700 hover:underline"
                >
                  {city.localCompliance.amanahEn} ↗
                </a>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">{city.localCompliance.refLabelEn}</p>
              </header>
              <blockquote className="mt-4 border-l-2 border-accent-300 pl-4 text-base leading-relaxed text-ink-700 italic">
                &ldquo;{city.localCompliance.quoteEn}&rdquo;
              </blockquote>
            </article>
          </div>
        </section>
      )}

      {/* FAQ */}
      {city.expandedFaqs && city.expandedFaqs.length > 0 && (
        <section className="section bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="FAQ"
                title={`${city.nameEn} programme questions.`}
                lead="The questions Saudi procurement teams ask before they sign. Direct answers, no marketing detour."
              />
              <div>
                <dl className="divide-y divide-ink-100 border-t border-ink-100">
                  {city.expandedFaqs.map(f => (
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

      {/* CTA */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="Start a programme"
          heading={`A uniform partner already operating in ${city.nameEn}.`}
          body="Tell us your industry, headcount, and timeline. We'll come back within one business day with a proposal and sample garments dispatched to your office."
          primary={{ label: `Quote — ${city.nameEn}`, href: `/quote/?city=${city.slug}` }}
          secondary={{ label: 'Talk to us', href: '/contact/' }}
        />
      </section>
    </>
  );
}
