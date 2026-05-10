/**
 * TrustAnchorList — renders the 4-Entity Closure block on industry/city
 * pages (master-plan-v11 §5.2). Pure server component, no client JS.
 */

import { buildClosure } from '@/lib/data/trust-anchors';

interface Props {
  regulators: string[];
  city?: string;
  variant?: 'card' | 'inline';
  lang?: 'en' | 'ar';
}

export function TrustAnchorList({ regulators, city, variant = 'card', lang = 'en' }: Props) {
  const entities = buildClosure(regulators, city);
  const isAr = lang === 'ar';

  if (variant === 'inline') {
    return (
      <ul className="flex flex-wrap items-center gap-3 text-sm">
        {entities.map(e => (
          <li key={e.slug}>
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-1.5 text-ink-600 transition-all hover:border-accent-500 hover:text-navy-900"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
              {isAr ? e.nameAr : e.nameEn}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <aside className="card p-8 lg:p-10" aria-labelledby="trust-anchors-heading">
      <h3 id="trust-anchors-heading" className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
        {isAr ? 'المعايير والجهات التنظيمية' : 'Standards & Authorities'}
      </h3>
      <p className="mt-2 text-sm text-ink-500">
        {isAr
          ? 'كل ادّعاء في هذه الصفحة مرتبط بجهة سعودية أو دولية يمكن التحقّق منها.'
          : 'Every claim on this page is anchored to a verifiable Saudi or international body.'}
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {entities.map(e => (
          <li key={e.slug}>
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl p-3 -mx-3 transition-colors hover:bg-ink-50"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" aria-hidden />
              <div>
                <div className="font-semibold text-navy-900 group-hover:text-accent-700 transition-colors">
                  {isAr ? e.nameAr : e.nameEn}
                </div>
                <div className="mt-0.5 text-xs text-ink-500">{isAr ? e.scopeAr : e.scope}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
