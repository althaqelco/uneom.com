/**
 * Language switcher — navigates to the mirror page in the other language.
 * Uses `usePathname()` to determine the current route and swap locale prefix.
 *
 * EN `/industries/healthcare/` → AR `/ar/industries/healthcare/`
 * AR `/ar/locations/riyadh/` → EN `/locations/riyadh/`
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n/ui';

export function LangSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  const mirrorHref = lang === 'ar'
    // Currently on AR page → strip /ar prefix to go to EN
    ? pathname.replace(/^\/ar(\/|$)/, '/')
    // Currently on EN page → add /ar prefix to go to AR
    : `/ar${pathname === '/' ? '/' : pathname}`;

  const label = lang === 'ar' ? 'EN' : 'عربي';
  const ariaLabel = lang === 'ar' ? 'التحويل إلى الإنجليزية' : 'Switch to Arabic';

  return (
    <Link
      href={mirrorHref}
      className="inline-flex items-center justify-center text-xs font-semibold text-ink-500 hover:text-navy-900 sm:text-sm rounded-full px-2.5 py-1 bg-ink-50 hover:bg-ink-100 transition-colors"
      aria-label={ariaLabel}
    >
      <span lang={lang === 'ar' ? 'en' : 'ar'} dir={lang === 'ar' ? 'ltr' : 'rtl'}>
        {label}
      </span>
    </Link>
  );
}
