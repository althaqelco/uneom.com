import Link from 'next/link';
import { t, localizedHref, type Lang } from '@/lib/i18n/ui';
import { LangSwitcher } from './LangSwitcher';

export function Header({ lang = 'en' }: { lang?: Lang }) {
  const ui = t(lang);
  const isAr = lang === 'ar';

  const PRIMARY_NAV = [
    { label: ui.nav.industries, href: localizedHref('/industries/', lang) },
    { label: ui.nav.locations, href: localizedHref('/locations/', lang) },
    { label: ui.nav.services, href: localizedHref('/services/', lang) },
    { label: ui.nav.resources, href: localizedHref('/resources/', lang) },
    { label: ui.nav.caseStudies, href: localizedHref('/case-studies/', lang) }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-8 lg:h-20">
        <Link href={localizedHref('/', lang)} className="group flex items-center gap-3" aria-label={`UNEOM ${ui.nav.home}`}>
          <span className="font-display text-2xl font-extrabold tracking-tight text-navy-800 group-hover:text-navy-900 transition-colors">
            UNEOM
          </span>
          <span className="hidden h-5 w-px bg-ink-200 sm:block" aria-hidden="true" />
          <span className="hidden text-xs font-medium text-ink-500 sm:block">
            {ui.nav.tagline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher lang={lang} />
          <Link href={localizedHref('/contact/', lang)} className="hidden btn-ghost text-sm sm:inline-flex">
            {ui.nav.contact}
          </Link>
          <Link href={localizedHref('/quote/', lang)} className="btn-primary text-sm">
            {ui.nav.requestQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
