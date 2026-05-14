import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, CASE_STUDIES_BY_SLUG } from '@/lib/data/case-studies';
import { INDUSTRIES_BY_SLUG } from '@/lib/data/industries';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { StatBlock } from '@/components/ui/StatBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { caseStudySchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return CASE_STUDIES.map(c => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES_BY_SLUG[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: {
      canonical: `https://uneom.com/case-studies/${slug}/`,
      languages: {
        en: `https://uneom.com/case-studies/${slug}/`,
        'ar-SA': `https://uneom.com/ar/case-studies/${slug}/`,
        'x-default': `https://uneom.com/case-studies/${slug}/`
      }
    },
    openGraph: { title: c.title, description: c.summary, images: [{ url: `/images/case-studies/${c.imageFolder}/after.avif`, width: 1200, height: 900 }] }
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES_BY_SLUG[slug];
  if (!c) notFound();
  const industry = INDUSTRIES_BY_SLUG[c.silo];

  const schema = caseStudySchema({ slug: c.slug, title: c.title, summary: c.summary, image: `/images/case-studies/${c.imageFolder}/after.avif`, industry: industry?.nameEn || c.silo, city: c.city, outcomes: c.outcomes });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'Case Studies', path: '/case-studies/' },
        { name: c.title, path: `/case-studies/${c.slug}/` }
      ]} />

      <article>
        <header className="container-page section-tight">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
            {industry?.nameEn} · {c.city}
          </div>
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{c.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{c.summary}</p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-4 border-t border-ink-100 pt-10">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Client</dt>
              <dd className="mt-2 text-base font-semibold text-navy-900">{c.clientType}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Duration</dt>
              <dd className="mt-2 text-base font-semibold text-navy-900">{c.duration}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Headline</dt>
              <dd className="mt-2 stat-number text-2xl font-bold text-accent-700">{c.headline.value}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">Scope</dt>
              <dd className="mt-2 text-sm text-ink-500 pretty">{c.scope}</dd>
            </div>
          </dl>
        </header>

        {/* Before / After */}
        <div className="container-page py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/before.avif`} />
                <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/before.webp`} />
                <img src={`/images/case-studies/${c.imageFolder}/before.avif`} alt={`Before — ${c.title}`} className="h-full w-full object-cover" width={1200} height={900} />
              </picture>
              <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy-950/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Before</figcaption>
            </figure>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-100">
              <picture>
                <source type="image/avif" srcSet={`/images/case-studies/${c.imageFolder}/after.avif`} />
                <source type="image/webp" srcSet={`/images/case-studies/${c.imageFolder}/after.webp`} />
                <img src={`/images/case-studies/${c.imageFolder}/after.avif`} alt={`After — ${c.title}`} className="h-full w-full object-cover" width={1200} height={900} />
              </picture>
              <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">After UNEOM</figcaption>
            </figure>
          </div>
        </div>

        {/* Outcomes */}
        <section className="container-page section-tight">
          <h2 className="text-display-lg text-navy-900 max-w-3xl balance">The numbers.</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-3">
            {c.outcomes.map((o, i) => (
              <StatBlock key={i} value={o.metric} label={`Outcome ${i + 1}`} context={o.description} size="lg" />
            ))}
          </div>
        </section>

        {/* Story */}
        <div className="container-prose section">
          {c.story.map((s, i) => (
            <section key={i} className={i > 0 ? 'mt-12' : ''}>
              <h2 className="text-display text-navy-900 balance">{s.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">{s.body}</p>
            </section>
          ))}
        </div>
      </article>

      <SiloLinks context={{ type: 'case-study', silo: c.silo, caseSlug: c.slug }} />

      <section className="container-page section">
        <CtaBlock dark heading={`Build a ${industry?.nameEn.toLowerCase()} programme like this one.`} body="The case studies above started with a 2-minute brief. Yours can too." primary={{ label: 'Request a quote', href: `/quote/?industry=${c.silo}` }} secondary={{ label: 'Talk to operations', href: '/contact/' }} />
      </section>
    </>
  );
}
