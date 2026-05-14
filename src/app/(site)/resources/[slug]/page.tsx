import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RESOURCES, RESOURCES_BY_SLUG } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { guideSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;
export function generateStaticParams() { return RESOURCES.map(r => ({ slug: r.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) return {};
  return {
    title: r.title,
    description: r.summary,
    alternates: {
      canonical: `https://uneom.com/resources/${slug}/`,
      languages: {
        en: `https://uneom.com/resources/${slug}/`,
        'ar-SA': `https://uneom.com/ar/resources/${slug}/`,
        'x-default': `https://uneom.com/resources/${slug}/`
      }
    },
    openGraph: { title: r.title, description: r.summary, images: [{ url: `/images/${r.hero}.avif`, width: 1920, height: 1080 }] }
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) notFound();

  const schema = guideSchema({ slug: r.slug, title: r.title, summary: r.summary, image: `/images/${r.hero}.avif` });

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { name: 'Resources', path: '/resources/' },
        { name: r.title, path: `/resources/${r.slug}/` }
      ]} />

      <article>
        <header className="container-page section-tight">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
            {r.silo} guide · {r.readingMinutes} min read
          </div>
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{r.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{r.summary}</p>
        </header>

        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" srcSet={`/images/${r.hero}.avif`} />
              <source type="image/webp" srcSet={`/images/${r.hero}.webp`} />
              <img src={`/images/${r.hero}.avif`} alt={r.title} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1920} height={1080} />
            </picture>
          </div>
        </div>

        <div className="container-prose section">
          {/* Lead */}
          <p className="text-xl leading-relaxed text-navy-900 font-medium pretty">{r.lead}</p>

          {/* Table of contents */}
          <nav aria-label="Contents" className="mt-12 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">Contents</div>
            <ol className="mt-4 space-y-2 text-base">
              {r.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="link">
                    {String(i + 1).padStart(2, '0')} · {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="mt-16 space-y-12">
            {r.sections.map((s, i) => (
              <section key={i} id={`section-${i}`}>
                <h2 className="text-display text-navy-900 balance">{s.heading}</h2>
                {s.body && (
                <p className="mt-5 text-lg leading-relaxed text-ink-500 pretty">
                  {s.body}
                </p>
                )}
              </section>
            ))}
          </div>

          {/* References */}
          {r.references && r.references.length > 0 && (
            <aside className="mt-16 rounded-2xl border border-ink-100 bg-white p-8">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">External references</div>
              <ul className="mt-5 space-y-3 text-sm">
                {r.references.map(ref => (
                  <li key={ref.url}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                      {ref.name} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <SiloLinks context={{ type: 'resource', silo: r.silo, resourceSlug: r.slug }} />

      <section className="container-page section">
        <CtaBlock dark heading={`Use the ${r.title.toLowerCase()} on a real programme.`} body="If this guide helped, request a quote. Sample garments dispatched, programme proposal in your inbox before our next sunrise." primary={{ label: 'Request a quote', href: '/quote/' }} secondary={{ label: 'Talk to us', href: '/contact/' }} />
      </section>
    </>
  );
}
