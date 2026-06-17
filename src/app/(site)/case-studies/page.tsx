import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/data/case-studies';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Case Studies — Saudi Uniform Programme Outcomes',
  description: 'Eight Saudi enterprises. Eight uniform programme transformations. Real numbers, real timelines, real before-and-after.',
  alternates: {
    canonical: 'https://uneom.com/case-studies/',
    languages: {
      en: 'https://uneom.com/case-studies/',
      'ar-SA': 'https://uneom.com/ar/case-studies/',
      'x-default': 'https://uneom.com/case-studies/'
    }
  }
};

export default function CaseStudiesHubPage() {
  const schema = collectionPageSchema({ path: '/case-studies/', name: 'UNEOM Case Studies', description: 'Eight Saudi uniform programme transformations with real outcomes.', items: CASE_STUDIES.map(c => ({ name: c.title, url: `/case-studies/${c.slug}/`, description: c.summary, image: `/images/case-studies/${c.imageFolder}/after.avif` })) });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Case Studies', path: '/case-studies/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`${CASE_STUDIES.length} programmes · real numbers`}
          title={<>Saudi enterprises that <span className="text-accent-700">switched.</span></>}
          lead="Each case study is a Saudi B2B programme rebuilt with UNEOM. Before-and-after photography, real metrics, and the operational story behind the numbers."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {CASE_STUDIES.map(c => (
            <Link key={c.slug} href={`/case-studies/${c.slug}/`} className="group flex flex-col overflow-hidden card-hover">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/after.avif`} />
                  <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/after.webp`} />
                  <img src={`/images/case-studies/${c.imageFolder}/after.avif`} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1200} height={900} />
                </picture>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-navy-950/90 to-transparent p-6 text-white">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">{c.silo}</div>
                    <div className="mt-1 text-2xl font-bold stat-number">{c.headline.value}</div>
                    <div className="text-sm text-white/80">{c.headline.label}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">{c.title}</h3>
                <p className="mt-3 text-sm font-semibold text-ink-500">{c.clientType}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500 pretty">{c.summary}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-accent-700 inline-flex items-center gap-1">
                  Read the full programme <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="See yourself in one of these stories?" body="The programmes above started with a brief. Yours can too — and we'll respond within one business day." primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to us', href: '/contact/' }} />
      </section>
    </>
  );
}
