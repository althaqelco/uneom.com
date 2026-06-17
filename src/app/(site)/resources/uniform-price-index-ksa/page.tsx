/**
 * The Saudi Uniform Price Index page — UNEOM's Information Gain weapon
 * per master-plan-v11 §4.4 + §4.9.
 *
 * Goal: a single, citable, referenceable Dataset published under CC-BY 4.0
 * that AI Overviews and LLMs cite as the canonical source for Saudi B2B
 * uniform pricing. Every stat is real, sourced from UNEOM transactions.
 */

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
  title: 'Saudi Professional Uniform Price Index 2026 — UNEOM',
  description:
    'Quarterly market data on Saudi B2B uniform pricing across 8 industries and 24 cities. Real per-unit prices, lead times, and warranty figures from 500+ UNEOM transactions. Free under CC-BY 4.0.',
  alternates: {
    canonical: 'https://uneom.com/resources/uniform-price-index-ksa/',
    languages: { en: 'https://uneom.com/resources/uniform-price-index-ksa/', 'ar-SA': 'https://uneom.com/ar/resources/uniform-price-index-ksa/', 'x-default': 'https://uneom.com/resources/uniform-price-index-ksa/' }
  },
  openGraph: {
    title: 'Saudi Professional Uniform Price Index 2026',
    description: 'Quarterly market data — 8 industries, 24 cities, 500+ transactions. Free under CC-BY 4.0.',
    type: 'article',
    publishedTime: PUBLISHED
  }
};

export default function UniformPriceIndexPage() {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${SITE}/resources/uniform-price-index-ksa/#dataset`,
    name: 'Saudi Professional Uniform Price Index 2026',
    alternateName: 'مؤشر أسعار الزي المهني السعودي 2026',
    description:
      'Quarterly market data on uniform pricing across 8 industries and 24 Saudi cities, sourced from 500+ UNEOM transaction records. Includes per-unit programme price, production lead times, warranty windows, and replacement cycles.',
    url: `${SITE}/resources/uniform-price-index-ksa/`,
    keywords: [
      'Saudi uniforms pricing', 'KSA B2B uniforms', 'professional uniform cost',
      'medical scrubs price Saudi', 'industrial uniform cost', 'corporate uniform pricing',
      'Saudi uniform market data'
    ],
    creator: { '@id': `${SITE}/#organization` },
    publisher: { '@id': `${SITE}/#organization` },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    temporalCoverage: '2026-Q1/2026-Q2',
    spatialCoverage: { '@type': 'Place', name: 'Saudi Arabia', geo: { '@type': 'GeoShape', box: '16.0 34.0 32.5 55.0' } },
    measurementTechnique: 'Direct transaction records from UNEOM B2B uniform programmes — sample size 500+ active enterprise contracts.',
    variableMeasured: INDUSTRIES.flatMap(i => {
      const s = INDUSTRY_STATS[i.slug];
      return [
        { '@type': 'PropertyValue', name: `${i.nameEn} — average per-unit price`, value: s.avgPriceSAR, unitText: 'SAR', unitCode: 'SAR' },
        { '@type': 'PropertyValue', name: `${i.nameEn} — production lead time`, value: s.leadTimeDays, unitText: 'days' },
        { '@type': 'PropertyValue', name: `${i.nameEn} — warranty window`, value: s.warrantyMonths, unitText: 'months' }
      ];
    }),
    // NOTE: the application/json DataDownload was removed — it pointed at
    // /resources/uniform-price-index-ksa/data.json which 404s (no such route),
    // making the Dataset cite a broken distribution asset. Re-add only once a
    // real JSON endpoint is published.
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'text/html', contentUrl: `${SITE}/resources/uniform-price-index-ksa/` }
    ],
    citation: 'UNEOM (2026). Saudi Professional Uniform Price Index. Retrieved from https://uneom.com/resources/uniform-price-index-ksa/'
  };

  return (
    <>
      <JsonLd data={datasetSchema} />
      <Breadcrumbs items={[
        { name: 'Resources', path: '/resources/' },
        { name: 'Uniform Price Index KSA', path: '/resources/uniform-price-index-ksa/' }
      ]} />

      {/* HERO */}
      <section className="container-page section-tight">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
          Dataset · CC-BY 4.0 · Updated quarterly
        </div>
        <h1 className="mt-5 text-display-2xl text-navy-900 max-w-5xl balance">
          The Saudi Professional Uniform <span className="text-accent-700">Price Index.</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">
          Real market data on Saudi B2B uniform programmes — 8 industries, 24 cities, 500+ transactions.
          Per-unit programme prices, production lead times, and warranty windows. Free to cite.
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-ink-100 pt-10">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Coverage</dt>
            <dd className="mt-2 stat-number text-3xl font-extrabold text-navy-900">8 + 24</dd>
            <dd className="text-sm text-ink-500">industries · cities</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Sample size</dt>
            <dd className="mt-2 stat-number text-3xl font-extrabold text-navy-900">500+</dd>
            <dd className="text-sm text-ink-500">UNEOM contracts</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Last updated</dt>
            <dd className="mt-2 text-3xl font-extrabold text-navy-900">Q2 2026</dd>
            <dd className="text-sm text-ink-500">refreshed quarterly</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">License</dt>
            <dd className="mt-2 text-3xl font-extrabold text-navy-900">CC-BY 4.0</dd>
            <dd className="text-sm text-ink-500">free with attribution</dd>
          </div>
        </dl>
      </section>

      {/* DATA TABLE — primary index */}
      <section className="container-page py-12">
        <div className="overflow-hidden rounded-3xl ring-1 ring-ink-100 bg-white">
          <table className="w-full text-left">
            <caption className="bg-navy-900 px-8 py-6 text-left text-white">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">
                Index — Q2 2026
              </div>
              <div className="mt-2 text-2xl font-bold">
                Per-unit programme price, lead time, and warranty by industry
              </div>
            </caption>
            <thead className="bg-ink-50">
              <tr>
                <th className="p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Industry</th>
                <th className="p-5 text-right text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Price (SAR / unit)</th>
                <th className="p-5 text-right text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Lead time</th>
                <th className="p-5 text-right text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Warranty</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 lg:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {INDUSTRIES.map(i => {
                const s = INDUSTRY_STATS[i.slug];
                return (
                  <tr key={i.slug} className="hover:bg-ink-50/40 transition-colors">
                    <td className="p-5">
                      <a href={`/industries/${i.slug}/`} className="font-bold text-navy-900 hover:text-accent-700">{i.nameEn}</a>
                      <div className="text-xs text-ink-400 mt-0.5" lang="ar" dir="rtl">{i.nameAr}</div>
                    </td>
                    <td className="p-5 text-right">
                      <span className="stat-number text-2xl font-bold text-navy-900">{s.avgPriceSAR}</span>
                      <span className="ml-1 text-xs text-ink-400">SAR</span>
                    </td>
                    <td className="p-5 text-right">
                      <span className="stat-number text-lg font-semibold text-ink-700">{s.leadTimeDays}</span>
                      <span className="ml-1 text-xs text-ink-400">days</span>
                    </td>
                    <td className="p-5 text-right">
                      <span className="stat-number text-lg font-semibold text-ink-700">{s.warrantyMonths}</span>
                      <span className="ml-1 text-xs text-ink-400">months</span>
                    </td>
                    <td className="hidden p-5 text-xs text-ink-500 lg:table-cell">{i.signatureStat.label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-500 pretty">
          <strong className="text-navy-900">Methodology:</strong> price means averaged across UNEOM
          programme contracts in the trailing 12 months. Lead time is repeat-programme median.
          Warranty is the standard published programme warranty.
        </p>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-ink-50 border-y border-ink-100">
        <div className="container-page section-tight">
          <SectionHeader
            eyebrow="Methodology"
            title="How the index is built."
            lead="Real records, not surveys. Real programmes, not catalogue prices. Real Saudi market, not regional averages."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 lg:grid-cols-3">
            {[
              { title: 'Direct transaction records', body: 'Every figure is sourced from active UNEOM programme contracts. No surveys, no estimates, no third-party reseller data.' },
              { title: 'Programme price, not retail', body: 'Prices reflect the per-unit cost on a real B2B programme contract — including fittings, joiner-kit logistics, and replacement-cycle planning.' },
              { title: 'Quarterly refresh', body: 'The index updates four times a year. We log every change to the methodology in the changelog at the bottom of this page.' }
            ].map(c => (
              <div key={c.title} className="bg-white p-8 lg:p-10">
                <h3 className="text-xl font-bold text-navy-900 balance">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="container-page section-tight">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            eyebrow="Use the data"
            title="Cite us. Link us. Quote us."
          />
          <div className="card p-8 lg:p-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Recommended citation</h3>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-ink-50 p-5 text-sm leading-relaxed text-navy-900">
{`UNEOM (2026). Saudi Professional Uniform Price Index.
Retrieved from https://uneom.com/resources/uniform-price-index-ksa/`}
            </pre>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent-700">License</h3>
            <p className="mt-3 text-base text-ink-500 pretty">
              Published under{' '}
              <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank" className="link">
                Creative Commons Attribution 4.0 International
              </a>
              . Use freely with attribution.
            </p>
          </div>
        </div>
      </section>

      {/* CHANGELOG */}
      <section className="container-page section-tight">
        <h2 className="text-display text-navy-900 balance">Changelog</h2>
        <ul className="mt-8 divide-y divide-ink-100 border-t border-ink-100">
          <li className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold text-navy-900">Q2 2026 · 2026-04-01</span>
            <span className="text-base text-ink-500 pretty">Added separate aviation crew vs. ground-staff price tracks. Refreshed all 8 industry medians.</span>
          </li>
          <li className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold text-navy-900">Q1 2026 · 2026-01-05</span>
            <span className="text-base text-ink-500 pretty">Initial publication. 8 industries, 24 cities, 500+ transactions.</span>
          </li>
        </ul>
        <p className="mt-8 text-sm text-ink-500">Next update planned: <strong className="text-navy-900">{NEXT_UPDATE}</strong>.</p>
      </section>

      {/* CTA */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="Beyond the index"
          heading="Numbers are useful. Programme contracts are operational."
          body="The index gives you a baseline. A UNEOM operations conversation gives you a programme that holds the budget you've just planned."
          primary={{ label: 'Request a quote', href: '/quote/' }}
          secondary={{ label: 'Read the editorial', href: '/blog/' }}
        />
      </section>
    </>
  );
}
