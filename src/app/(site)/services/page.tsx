import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'Services — Uniform Programme Operations',
  description: 'Custom design, bulk ordering, programme management, quality assurance, fabric selection, on-site measurement, and sustainable uniforms. Seven services, one operations team.',
  alternates: { canonical: 'https://uneom.com/services/' }
};

export default function ServicesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Services', path: '/services/' }]} />
      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="Seven services. One operations team."
          title={<>From <span className="text-accent-700">sketch</span> to seam, and every step between.</>}
          lead="UNEOM is a programme partner — not a catalogue. These are the operational services that hold every uniform contract together."
          hero
        />
      </section>
      <section className="container-page pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}/`} className="group flex flex-col overflow-hidden bg-white transition-colors hover:bg-ink-50/60">
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
                <picture>
                  <source type="image/avif" srcSet={`/images/${service.heroImage}.avif`} />
                  <source type="image/webp" srcSet={`/images/${service.heroImage}.webp`} />
                  <img src={`/images/${service.heroImage}.avif`} alt={service.nameEn} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={640} height={360} />
                </picture>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-extrabold text-accent-200 stat-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" aria-hidden>→</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
                  {service.nameEn}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500 pretty">
                  {service.summary}
                </p>
                <div className="mt-auto pt-2">
                  <div className="text-xl font-bold text-navy-900 stat-number">{service.outcome.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-accent-700">{service.outcome.label}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-page section">
        <CtaBlock dark heading="Need more than one of these? It's all one programme." body="Most UNEOM clients combine custom design, bulk ordering, and programme management into a single multi-year contract. One operations manager. One delivery cadence." primary={{ label: 'Request a quote', href: '/quote/' }} />
      </section>
    </>
  );
}
