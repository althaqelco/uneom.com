import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICES_BY_SLUG } from '@/lib/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { serviceSchema } from '@/lib/seo/schemas';
import Link from 'next/link';

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
    alternates: {
      canonical: `https://uneom.com/services/${slug}/`,
      languages: {
        en: `https://uneom.com/services/${slug}/`,
        'ar-SA': `https://uneom.com/ar/services/${slug}/`,
        'x-default': `https://uneom.com/services/${slug}/`
      }
    },
    openGraph: {
      title: `${service.nameEn} — UNEOM`,
      description: service.summary,
      images: [{ url: `/images/${service.heroImage}.avif`, width: 1920, height: 1080 }]
    }
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

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/avif"
              srcSet={`/images/${service.heroImage}-640.avif 640w, /images/${service.heroImage}-960.avif 960w, /images/${service.heroImage}-1440.avif 1440w, /images/${service.heroImage}.avif 1920w`}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={`/images/${service.heroImage}-640.webp 640w, /images/${service.heroImage}-960.webp 960w, /images/${service.heroImage}-1440.webp 1440w, /images/${service.heroImage}.webp 1920w`}
              sizes="100vw"
            />
            <img
              src={`/images/${service.heroImage}.avif`}
              alt=""
              role="presentation"
              className="h-full w-full object-cover opacity-40"
              loading="eager"
              decoding="async"
              width={1920}
              height={800}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-navy-900/30" aria-hidden />
        </div>
        <div className="relative container-page pt-16 pb-24 sm:pt-20 sm:pb-32">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">Service</span>
            <h1 className="mt-5 text-display-2xl text-white balance">{service.nameEn}</h1>
            <p className="mt-6 text-xl leading-relaxed text-white/85 pretty">{service.summary}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/quote/" className="btn-primary">Request a quote</Link>
              <Link href="/contact/" className="btn-outline-white">Talk to operations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS GRID ===== */}
      <section className="bg-ink-50 border-b border-ink-100">
        <div className="container-page py-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-100 sm:grid-cols-4">
            {service.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white p-8 text-center">
                <div className="stat-number font-display text-4xl font-extrabold text-navy-900 leading-none">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO + OUTCOME CARD ===== */}
      <section className="container-page section-tight">
        <div className="grid items-start gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed text-navy-900 font-medium pretty">
              {service.description}
            </p>
          </div>
          <div className="card p-10 sticky top-28">
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

      {/* ===== DEEP-CONTENT SECTIONS ===== */}
      {service.sections.map((section, i) => (
        <section key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-ink-50'}`}>
          <div className="container-prose section">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700 mb-4">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h2 className="text-display-lg text-navy-900 balance">{section.heading}</h2>
            <div className="mt-8 text-base leading-[1.85] text-ink-600 pretty whitespace-pre-line">
              {section.body}
            </div>
          </div>
        </section>
      ))}

      {/* ===== IDEAL FOR ===== */}
      <section className="bg-navy-900 text-white">
        <div className="container-page section">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">Ideal for</div>
          <h2 className="mt-4 text-display-lg text-white balance">Is this service right for your organisation?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.idealFor.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-700 text-white text-sm font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/85 pretty">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container-page section">
        <CtaBlock dark heading={`Add ${service.nameEn} to your programme.`} body="Programmes start with a conversation. Tell us about your team size, industry, and the cities you operate in — and we'll build a tailored proposal within one business day." primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to operations', href: '/contact/' }} />
      </section>
    </>
  );
}
