import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICES_BY_SLUG } from '@/lib/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { serviceSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];
  if (!service) return {};
  return {
    title: `${service.nameEn} — UNEOM`,
    description: service.summary,
    alternates: { canonical: `https://uneom.com/services/${slug}/` }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service.slug, service.nameEn, service.description)} />
      <Breadcrumbs items={[
        { name: 'Services', path: '/services/' },
        { name: service.nameEn, path: `/services/${service.slug}/` }
      ]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="Service"
          title={service.nameEn}
          lead={service.summary}
          hero
        />
        <div className="mt-16 grid items-start gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-ink-500 pretty">
              {service.description}
            </p>
          </div>
          <div className="card p-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
              Outcome metric
            </div>
            <div className="stat-number mt-5 font-display text-6xl font-extrabold text-navy-900 leading-none">
              {service.outcome.value}
            </div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-ink-500">
              {service.outcome.label}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading={`Add ${service.nameEn} to your programme.`} primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to operations', href: '/contact/' }} />
      </section>
    </>
  );
}
