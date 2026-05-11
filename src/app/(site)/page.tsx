import Link from 'next/link';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES, METRO_CITIES } from '@/lib/data/saudi-cities';
import { SERVICES } from '@/lib/data/services';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatBlock } from '@/components/ui/StatBlock';
import { IndustryCard } from '@/components/ui/IndustryCard';
import { CityCard } from '@/components/ui/CityCard';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ClientLogos } from '@/components/ui/ClientLogos';
import { TestimonialSection } from '@/components/ui/TestimonialSection';
import { ProcessTimeline } from '@/components/ui/ProcessTimeline';

export const metadata = {
  description: COMPANY_STATS.activeClients + '+ Saudi enterprises trust UNEOM for healthcare, hospitality, aviation, corporate, education, manufacturing, security, and retail uniforms across all 24 Saudi cities.'
};

export default function HomePage() {
  const heroIndustries = INDUSTRIES.slice(0, 4);

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" srcSet="/images/heroes/healthcare-pillar-hero.avif" />
            <source type="image/webp" srcSet="/images/heroes/healthcare-pillar-hero.webp" />
            <img
              src="/images/heroes/healthcare-pillar-hero.avif"
              alt=""
              role="presentation"
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" aria-hidden />
        </div>

        <div className="relative container-page pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-44">
          <div className="max-w-4xl text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              <span className="h-px w-10 bg-accent-400" aria-hidden />
              Saudi Arabia · Since {COMPANY_STATS.yearsInMarket} years ago
            </span>
            <h1 className="mt-6 text-display-2xl text-white balance">
              Professional uniforms for the
              <br />
              <span className="text-accent-400">Saudi enterprises</span> that build the kingdom.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              UNEOM is the bulk-programme partner for {COMPANY_STATS.activeClients}+ Saudi B2B clients across
              healthcare, hospitality, aviation, corporate, education, manufacturing, security, and retail —
              built to ISO 9001 + OEKO-TEX standards and delivered to all {COMPANY_STATS.cities} cities.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/quote/" className="btn-accent">
                Request a quote
              </Link>
              <Link href="/industries/" className="btn-ghost text-white hover:bg-white/10 hover:text-white">
                Explore industries →
              </Link>
            </div>
          </div>
        </div>

        {/* Hero footer strip — quick metrics */}
        <div className="relative bg-navy-950/90 backdrop-blur-sm">
          <div className="container-page grid grid-cols-2 gap-8 py-8 sm:grid-cols-4 lg:py-10">
            {[
              { v: `${COMPANY_STATS.activeClients}+`, l: 'Saudi enterprises' },
              { v: `${COMPANY_STATS.cities}`, l: 'Cities served' },
              { v: `${COMPANY_STATS.industries}`, l: 'Industry silos' },
              { v: `${COMPANY_STATS.yearsInMarket}`, l: 'Years in market' }
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="stat-number font-display text-3xl font-extrabold text-white sm:text-4xl">{s.v}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CLIENT LOGOS MARQUEE ============== */}
      <ClientLogos lang="en" />

      {/* ============== TRUST STRIP ============== */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page py-12">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
              Compliance & verification
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-semibold text-ink-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                ISO 9001:2015
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                OEKO-TEX Standard 100
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                SASO Certified
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                Maroof Verified
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                ZATCA E-Invoicing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INDUSTRY SILOS — featured 4 ============== */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Industry silos"
              title={<>Eight silos. Each one a <span className="text-accent-700">moat</span>.</>}
              lead="Every UNEOM programme is anchored to its industry's regulator and its city's municipal authority. We build pillars of authority, not category lists."
            />
            <Link href="/industries/" className="btn-outline shrink-0">
              View all eight silos
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroIndustries.map(industry => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>

          {/* Remaining 4 — compact */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.slice(4).map(industry => (
              <IndustryCard key={industry.slug} industry={industry} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS — PROCESS TIMELINE ============== */}
      <ProcessTimeline lang="en" />

      {/* ============== WHY UNEOM — INFORMATION GAIN ============== */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeader
                eyebrow="Why UNEOM"
                title={<>Numbers we earn. Standards we own.</>}
                lead="The Saudi uniform market is full of catalogues. We compete on the operational truths nobody else publishes."
              />
              <div className="mt-10 space-y-2">
                <Link href="/about/" className="link inline-flex items-center gap-1">
                  Read the operations brief
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <StatBlock
                value={`${COMPANY_STATS.activeClients}+`}
                label="Saudi enterprises served"
                context="From 50-employee clinics to nationwide retail chains. Programme contracts, not catalogue sales."
              />
              <StatBlock
                value="78%"
                label="Repeat client rate"
                context="Across 12 years. Our model is built for the second contract, not the first sale."
              />
              <StatBlock
                value="14–21"
                label="Days to ship at scale"
                context="Repeat-programme lead time. New designs ship in 21–35 days, including fittings."
              />
              <StatBlock
                value="18 mo"
                label="Healthcare warranty"
                context="6 months above industry standard — we stand behind the wash-cycle endurance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <TestimonialSection lang="en" />

      {/* ============== CITY COVERAGE ============== */}
      <section className="section bg-navy-900 text-white">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">
                Geographic coverage
              </span>
              <h2 className="mt-5 text-display-lg text-white balance">
                {COMPANY_STATS.cities} cities. <span className="text-accent-400">One operations team.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 pretty">
                On-site fittings, joiner-kit dispatch, and replacement-cycle delivery —
                from the Eastern Province industrial belt to the Asir highlands.
              </p>
            </div>
            <Link href="/locations/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white shrink-0">
              All 24 city pages →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRO_CITIES.map(city => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">
            + {SAUDI_CITIES.length - METRO_CITIES.length} more cities including {SAUDI_CITIES.slice(5, 11).map(c => c.nameEn).join(', ')}, and beyond.
          </p>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title={<>One partner. Every step from sketch to seam.</>}
            lead="Custom design, bulk production, on-site fittings, programme management — all under one operations team."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-ink-50/60"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
                    {service.nameEn}
                  </h3>
                  <span className="text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" aria-hidden>→</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-500 line-clamp-3">
                  {service.summary}
                </p>
                <div className="mt-auto pt-3">
                  <div className="text-xl font-bold text-navy-900 stat-number">{service.outcome.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-accent-700">{service.outcome.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== EDITORIAL QUOTE / PROOF POINT ============== */}
      <section className="section-tight bg-ink-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Information Gain</Eyebrow>
            <p className="mt-6 text-display text-navy-900 balance">
              In Riyadh, healthcare scrubs run <span className="text-accent-700">4.2 wash cycles</span> per shift —
              <br />
              38% above the global average. Most uniforms aren't built for it. Ours are.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              UNEOM operations data, 38 partner Saudi hospitals, 2024–2026.
            </p>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="section bg-white">
        <div className="container-page">
          <CtaBlock
            dark
            eyebrow="Start a programme"
            heading="Tell us about your uniform programme."
            body="A 4-step quote takes under two minutes. We respond within one business day with sample garments, fabric options, and a programme proposal."
            primary={{ label: 'Request a quote', href: '/quote/' }}
            secondary={{ label: 'Talk to operations', href: '/contact/' }}
          />
        </div>
      </section>
    </>
  );
}
