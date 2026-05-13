import type { Metadata } from 'next';
import Link from 'next/link';
import { RESOURCES } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Resources — Saudi Uniform Programme Guides',
  description: '12 deep guides covering fabric science, sizing, procurement, compliance, sustainability, and the operational frameworks behind every UNEOM programme.',
  alternates: { canonical: 'https://uneom.com/resources/' }
};

export default function ResourcesHubPage() {
  const schema = collectionPageSchema({ path: '/resources/', name: 'UNEOM Resources & Guides', description: 'Deep guides on fabric science, sizing, procurement, and compliance for Saudi uniform programmes.', items: RESOURCES.map(r => ({ name: r.title, url: `/resources/${r.slug}/`, description: r.summary })) });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'Resources', path: '/resources/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${RESOURCES.length} deep guides`}
          title={<>The <span className="text-accent-700">operations briefs</span> behind every UNEOM programme.</>}
          lead="Fabric science, sizing engineering, procurement frameworks, compliance citations — the documents we hand to client procurement teams. Now public."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map(r => (
            <Link key={r.slug} href={`/resources/${r.slug}/`} className="group flex flex-col overflow-hidden bg-white transition-colors hover:bg-ink-50/60">
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/${r.hero}.avif`} />
                  <source type="image/webp" srcSet={`/images/${r.hero}.webp`} />
                  <img src={`/images/${r.hero}.avif`} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={640} height={360} />
                </picture>
              </div>
              <div className="flex flex-col gap-3 p-7">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                  {r.silo} · {r.readingMinutes} min
                </div>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500 line-clamp-2 pretty">{r.summary}</p>
                <span className="mt-auto pt-1 text-sm font-semibold text-accent-700 inline-flex items-center gap-1">
                  Read the guide <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="Need an even deeper brief?" body="Detailed programme economics and per-fabric performance data — request the full operations brief and we'll email it within the hour." primary={{ label: 'Request the brief', href: '/contact/' }} secondary={{ label: 'Request a quote', href: '/quote/' }} />
      </section>
    </>
  );
}
