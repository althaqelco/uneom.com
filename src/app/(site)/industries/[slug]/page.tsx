import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INDUSTRIES, getIndustry } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { INDUSTRY_STATS } from '@/lib/data/stats';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrustAnchorList } from '@/components/ui/TrustAnchorList';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const titleMap: Record<string, string> = {
    healthcare: 'Healthcare Uniforms in Saudi Arabia — Medical Scrubs & Lab Coats',
    hospitality: 'Hospitality Uniforms — Chef Uniforms, Maid Uniforms & Hotel Attire',
    education: 'School Uniforms in Saudi Arabia — MoE-Compliant',
    corporate: 'Corporate Uniforms & Staff Workwear — Saudi Enterprises',
    manufacturing: 'Coverall Uniforms & Safety Uniforms — Aramco-Grade PPE',
    security: 'Security Uniforms — Military & Tactical Guard Attire',
    aviation: 'Aviation Uniforms — Riyadh Air & Crew Attire',
    retail: 'Retail Staff Uniforms — Branded Store Attire'
  };
  const descMap: Record<string, string> = {
    healthcare: 'MoH and SFDA-compliant medical scrubs, scrub suit uniforms, lab coats, and nurse uniforms across all 24 Saudi cities. AATCC-100 antimicrobial fabric, 18-month warranty. Get a quote.',
    hospitality: 'Chef uniforms, maid uniforms, and front-of-house hotel attire for Saudi luxury properties. Hajj-season durability, Pantone-matched colourways. Request a programme quote.',
    education: 'MoE-compliant school uniforms engineered for Saudi student growth cycles. Hidden adjusters, replaceable panels. Bulk programmes for 35,000+ schools.',
    corporate: 'Corporate uniforms and staff workwear for Saudi enterprises. Half-canvas executive suits, brand-coordinated programmes from 50 to 5,000 employees.',
    manufacturing: 'FR coverall uniforms, safety uniforms, and industrial PPE meeting HCIS and SASO standards. Aramco-tier traceability. Quote in 24 hours.',
    security: 'Tactical and corporate security uniforms aligned with HCIS. Military-grade construction for Saudi police and private security operations.',
    aviation: 'GACA-compliant crew and ground-staff aviation uniforms. Riyadh Air-grade tropical wool blends for 14-hour rotation cycles.',
    retail: 'Branded retail staff uniforms with 200+ wash-cycle durability. Rotating programmes for Saudi mall and store chains.'
  };
  return {
    title: titleMap[slug] ?? `${industry.nameEn} Uniforms — Saudi Arabia`,
    description: descMap[slug] ?? industry.tagline,
    alternates: {
      canonical: `https://uneom.com/industries/${slug}/`,
      languages: {
        en: `https://uneom.com/industries/${slug}/`,
        'ar-SA': `https://uneom.com/ar/industries/${slug}/`,
        'x-default': `https://uneom.com/industries/${slug}/`
      }
    },
    openGraph: {
      title: `${industry.nameEn} Uniforms — UNEOM Saudi Arabia`,
      description: industry.tagline,
      images: [{ url: `/images/${industry.heroImage}.avif`, width: 1920, height: 1080 }]
    }
  };
}

export default async function IndustryPillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const stats = INDUSTRY_STATS[slug];

  // Use expanded 8-FAQ if present, otherwise default 5
  const faqs = industry.expandedFaqs
    ? industry.expandedFaqs.map(f => ({ q: f.qEn, a: f.aEn }))
    : [
        { q: `Why does UNEOM specialise in ${industry.nameEn.toLowerCase()} uniforms?`, a: industry.architectEquation },
        { q: `What is the lead time for ${industry.nameEn.toLowerCase()} uniform programmes?`, a: `Repeat programmes ship in 14–21 days. New designs ship in 21–35 days, including on-site fittings.` },
        { q: `Which Saudi standards does UNEOM comply with for ${industry.nameEn.toLowerCase()}?`, a: `${industry.regulators.map(r => r.toUpperCase()).join(', ')}, plus ISO 9001 and OEKO-TEX Standard 100 across the full programme.` },
        { q: `What is the average price per unit for ${industry.nameEn.toLowerCase()} uniforms?`, a: `Programme pricing depends on volume, fabric tier, and customisation. Average per-unit pricing for ${industry.nameEn.toLowerCase()} sits around ${stats?.avgPriceSAR} SAR — request a quote for exact figures.` },
        { q: `Does UNEOM service all Saudi cities for ${industry.nameEn.toLowerCase()}?`, a: `Yes. UNEOM ships to all 24 Saudi cities, with on-site fittings available for headcounts above 50 in any region.` }
      ];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[
        { name: 'Industries', path: '/industries/' },
        { name: industry.nameEn, path: `/industries/${industry.slug}/` }
      ]} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/avif"
              srcSet={`/images/${industry.heroImage}-640.avif 640w, /images/${industry.heroImage}-960.avif 960w, /images/${industry.heroImage}-1440.avif 1440w, /images/${industry.heroImage}.avif 1920w`}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={`/images/${industry.heroImage}-640.webp 640w, /images/${industry.heroImage}-960.webp 960w, /images/${industry.heroImage}-1440.webp 1440w, /images/${industry.heroImage}.webp 1920w`}
              sizes="100vw"
            />
            <img
              src={`/images/${industry.heroImage}.avif`}
              alt=""
              role="presentation"
              className="h-full w-full object-cover opacity-40"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl text-white">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              Industry silo · {industry.regulators.map(r => r.toUpperCase()).join(' · ')}
            </span>
            <h1 className="mt-5 text-display-2xl text-white balance">
              {industry.nameEn} uniforms — built to <span className="text-accent-400">Saudi standards</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              {industry.tagline}
            </p>
            {industry.lastUpdated && (
              <p className="mt-4 text-xs text-white/50">
                Last updated: <time dateTime={industry.lastUpdated}>{industry.lastUpdated}</time>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/quote/?industry=${industry.slug}`} className="btn-accent">Request a quote</Link>
              <Link href="/case-studies/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white">
                See case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECT EQUATION (60-word lead) ===== */}
      <section className="bg-ink-50 border-b border-ink-100">
        <div className="container-page section-tight">
          <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                The Architect Equation
              </span>
              <p className="mt-5 text-display text-navy-900 balance">
                {industry.architectEquation}
              </p>
              {industry.definitionLockIn && (
                <blockquote className="mt-8 border-l-4 border-accent-500 bg-white p-6 text-base leading-relaxed text-navy-800 pretty">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-700 mb-2">Definition</span>
                  {industry.definitionLockIn.en}
                </blockquote>
              )}
            </div>
            {stats && (
              <div className="card p-8 lg:p-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Programme economics</h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Average per-unit</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.avgPriceSAR} <span className="text-base font-medium text-ink-500">SAR</span></dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Lead time</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.leadTimeDays} <span className="text-base font-medium text-ink-500">days</span></dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Warranty</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.warrantyMonths} <span className="text-base font-medium text-ink-500">months</span></dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY CONTEXT BLOCK (Saudi market reality) ===== */}
      {industry.industryContext && (
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="Industry context"
                title={`The Saudi ${industry.nameEn.toLowerCase()} reality.`}
                lead="Why generic global guidance fails in this market — and what changes when you design for it."
              />
              <div className="prose prose-lg max-w-none text-ink-700">
                {industry.industryContext.en.map((para, i) => (
                  <p key={i} className="leading-relaxed pretty">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== COMPLIANCE CITATIONS ===== */}
      {industry.complianceCitations && industry.complianceCitations.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <SectionHeader
              eyebrow="Compliance & citations"
              title="Verbatim from the Saudi authorities that audit our work."
              lead="Every clause below is a direct quotation from the publicly available regulatory text. UNEOM programmes are designed to satisfy these requirements at batch level."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {industry.complianceCitations.map((c, i) => (
                <article key={i} className="bg-white border border-ink-100 rounded-2xl p-6">
                  <header>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-accent-700 hover:underline"
                    >
                      {c.entityEn} ↗
                    </a>
                    <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">{c.refLabelEn}</p>
                  </header>
                  <blockquote className="mt-4 border-l-2 border-accent-300 pl-4 text-sm leading-relaxed text-ink-700 italic">
                    "{c.quoteEn}"
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SIGNATURE STAT (Information Gain) ===== */}
      <section className="section-tight bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Information Gain</span>
            <p className="mt-6 text-display-lg text-navy-900 balance">
              <span className="text-accent-700 stat-number">{industry.signatureStat.value}</span>
              {' '}
              <span className="text-ink-500 font-medium">{industry.signatureStat.label}</span>
            </p>
            <p className="mt-6 text-base text-ink-500 max-w-2xl mx-auto pretty">
              {industry.signatureStat.context}
            </p>
          </div>
        </div>
      </section>

      {/* ===== PILLARS — what UNEOM does differently ===== */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="What separates UNEOM"
            title={`Three things our ${industry.nameEn.toLowerCase()} programmes do that catalogues can't.`}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 lg:grid-cols-3">
            {industry.pillars.map((p, i) => (
              <div key={i} className="bg-white p-8 lg:p-10">
                <div className="font-display text-5xl font-extrabold text-accent-200 stat-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy-900 balance">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON MATRIX ===== */}
      {industry.comparisonMatrix && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeader
              eyebrow="Tier comparison"
              title={industry.comparisonMatrix.titleEn}
              lead="A side-by-side breakdown of what each tier actually delivers — fabric, performance, warranty, and total cost."
            />
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="px-6 py-4 text-left font-bold">Dimension</th>
                    {industry.comparisonMatrix.columnsEn.map((col, i) => (
                      <th
                        key={i}
                        className={`px-6 py-4 text-left font-bold ${i === 0 ? 'bg-accent-700' : ''}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {industry.comparisonMatrix.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-ink-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-navy-900 border-r border-ink-100">{row.dimensionEn}</td>
                      {row.valuesEn.map((val, j) => (
                        <td
                          key={j}
                          className={`px-6 py-4 text-ink-700 ${j === 0 ? 'font-bold text-accent-700 bg-accent-50/50' : ''}`}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-ink-400">
              Pricing reflects UNEOM Q1 2026 quotations. Programme rates apply for orders above 500 units.
            </p>
          </div>
        </section>
      )}

      {/* ===== NEGATIVE ENTITY FRAME (wrong practices + scientific failure) ===== */}
      {industry.negativeFrames && industry.negativeFrames.length > 0 && (
        <section className="section bg-navy-900 text-white">
          <div className="container-page">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">What goes wrong</span>
              <h2 className="mt-5 text-display-lg text-white balance">
                Two {industry.nameEn.toLowerCase()} procurement mistakes — and the physics behind why they fail.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 pretty">
                Not every cheap option is wrong. But some standard procurement reflexes have measurable failure modes. Here are the two we see most often.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {industry.negativeFrames.map((nf, i) => (
                <article key={i} className="rounded-2xl bg-white/5 backdrop-blur p-8 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300 mb-3">
                    Wrong practice {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white balance">{nf.practiceEn}</h3>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Why it fails</div>
                      <p className="text-sm leading-relaxed text-white/85 pretty">{nf.whyFailsEn}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent-300 mb-2">Solution</div>
                      <p className="text-sm leading-relaxed text-white pretty">{nf.solutionEn}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TRUST ANCHORS (4-Entity Closure) ===== */}
      <section className="section-tight bg-white">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="Standards & authorities"
                title="Anchored to the Saudi regulators that audit our work."
                lead="Every programme is referenced against the relevant ministry, authority, and certification body. The audit trail is the deliverable."
              />
            </div>
            <TrustAnchorList regulators={industry.regulators} city={industry.anchorCity} />
          </div>
        </div>
      </section>

      {/* ===== CITY COVERAGE ===== */}
      <section className="section bg-navy-900 text-white">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">Geographic coverage</span>
              <h2 className="mt-5 text-display-lg text-white balance">
                {industry.nameEn} programmes delivered across all 24 Saudi cities.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 pretty">
                On-site fittings, replacement-cycle dispatch, and joiner-kit logistics — anchored from {industry.anchorCity ? SAUDI_CITIES.find(c => c.slug === industry.anchorCity)?.nameEn : 'Riyadh'}.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SAUDI_CITIES.map(city => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/`}
                className="group flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
              >
                <span>{city.nameEn}</span>
                <span className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-accent-400" aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SILO LINKS — products + resources + posts + cases ===== */}
      <SiloLinks context={{ type: 'industry-pillar', silo: industry.slug }} />

      {/* ===== FAQ (8 questions if expanded) ===== */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeader
              eyebrow="FAQ"
              title={`${industry.nameEn} programme questions.`}
              lead="The questions Saudi healthcare procurement teams ask before they sign. Direct answers, no marketing detour."
            />
            <div>
              <dl className="divide-y divide-ink-100 border-t border-ink-100">
                {faqs.map(f => (
                  <div key={f.q} className="py-6">
                    <dt className="text-base font-bold text-navy-900">{f.q}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXTERNAL SOURCES (4-Entity Closure visible footer) ===== */}
      {industry.externalSources && industry.externalSources.length > 0 && (
        <section className="section-tight bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">External authorities & standards</span>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {industry.externalSources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-900 hover:text-accent-700 underline-offset-4 hover:underline"
                  >
                    {src.nameEn} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="Start your programme"
          heading={`Tell us about your ${industry.nameEn.toLowerCase()} uniform requirements.`}
          body="A 4-step quote takes under two minutes. We respond within one business day with sample garments, fabric options, and a programme proposal."
          primary={{ label: 'Request a quote', href: `/quote/?industry=${industry.slug}` }}
          secondary={{ label: 'Talk to operations', href: '/contact/' }}
        />
      </section>
    </>
  );
}
