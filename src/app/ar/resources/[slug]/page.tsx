import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RESOURCES, RESOURCES_BY_SLUG } from '@/lib/data/resources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { siloAr } from '@/lib/i18n/silo-labels';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const dynamicParams = false;
export function generateStaticParams() { return RESOURCES.map(r => ({ slug: r.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) return {};
  return {
    title: `${r.titleAr} — UNEOM`,
    description: r.summaryAr,
    alternates: { canonical: `https://uneom.com/ar/resources/${slug}/` },
    openGraph: { title: r.titleAr, description: r.summaryAr, images: [{ url: `/images/${r.hero}.avif`, width: 1920, height: 1080 }] }
  };
}

export default async function ArResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = RESOURCES_BY_SLUG[slug];
  if (!r) notFound();

  return (
    <>
      <Breadcrumbs items={[
        { name: 'الأدلة', path: '/ar/resources/' },
        { name: r.titleAr, path: `/ar/resources/${r.slug}/` }
      ]} />

      <article>
        <header className="container-page section-tight">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
            {siloAr(r.silo)} · {r.readingMinutes} دقيقة قراءة
          </div>
          <h1 className="mt-4 text-display-xl text-navy-900 max-w-4xl balance">{r.titleAr}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-500 max-w-3xl pretty">{r.summaryAr}</p>
        </header>

        <div className="container-page">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100">
            <picture>
              <source type="image/avif" srcSet={`/images/${r.hero}.avif`} />
              <source type="image/webp" srcSet={`/images/${r.hero}.webp`} />
              <img src={`/images/${r.hero}.avif`} alt={r.titleAr} className="h-full w-full object-cover" fetchPriority="high" decoding="sync" width={1920} height={1080} />
            </picture>
          </div>
        </div>

        <div className="container-prose section">
          <p className="text-xl leading-relaxed text-navy-900 font-medium pretty">{r.leadAr}</p>

          <nav aria-label="المحتويات" className="mt-12 rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">المحتويات</p>
            <ol className="mt-4 space-y-2">
              {r.sectionsAr.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="text-sm font-medium text-navy-900 hover:text-accent-700 transition-colors">
                    {i + 1}. {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {r.sectionsAr.map((s, i) => (
            <section key={i} id={`section-${i}`} className="mt-12">
              <h2 className="text-display text-navy-900">{s.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="container-page section-tight">
          <SiloLinks context={{ type: 'resource', silo: r.silo, resourceSlug: r.slug }} lang="ar" />
        </div>
      </article>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="هل أثار هذا الدليل سؤالاً حول برنامجك؟"
          body="راسلنا مباشرة. مؤلّف كل دليل من UNEOM هو عضو في فريق العمليات."
          primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
          secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
        />
      </section>
    </>
  );
}
