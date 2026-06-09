import Link from 'next/link';
import Image from 'next/image';
import { t, localizedHref, type Lang } from '@/lib/i18n/ui';
import { LangSwitcher } from './LangSwitcher';
import { MobileMenu } from './MobileMenu';

import logoImg from '../../../public/images/logo.webp';

export function Header({ lang = 'en' }: { lang?: Lang }) {
  const ui = t(lang);

  const PRIMARY_NAV = [
    { label: ui.nav.industries, href: localizedHref('/industries/', lang) },
    { label: ui.nav.locations, href: localizedHref('/locations/', lang) },
    { label: ui.nav.services, href: localizedHref('/services/', lang) },
    { label: ui.nav.shop, href: localizedHref('/shop/', lang) },
    { label: ui.nav.resources, href: localizedHref('/resources/', lang) },
    { label: ui.nav.caseStudies, href: localizedHref('/case-studies/', lang) }
  ];

  return (
    <header className="header-blur sticky top-0 z-40 border-b border-ink-100/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20 lg:gap-8">
        <Link href={localizedHref('/', lang)} className="group flex items-center gap-4" aria-label={`UNEOM ${ui.nav.home}`}>
          <Image 
            src={logoImg}
            alt="UNEOM Logo" 
            className="w-auto h-7 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="140px"
            priority
          />
          <span className="hidden h-6 w-px bg-ink-200 lg:block" aria-hidden="true" />
          <span className="hidden text-xs font-medium text-ink-500 lg:block">
            {ui.nav.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
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
          <Link href={localizedHref('/quote/', lang)} className="btn-primary text-sm hidden sm:inline-flex">
            {ui.nav.requestQuote}
          </Link>

          {/* Mobile hamburger + drawer */}
          <MobileMenu
            lang={lang}
            navItems={PRIMARY_NAV}
            contactHref={localizedHref('/contact/', lang)}
            quoteHref={localizedHref('/quote/', lang)}
            contactLabel={ui.nav.contact}
            quoteLabel={ui.nav.requestQuote}
            menuLabel={ui.nav.menu}
            closeLabel={ui.nav.close}
          />
        </div>
      </div>
    </header>
  );
}
