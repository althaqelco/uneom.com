'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Lang } from '@/lib/i18n/ui';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  lang: Lang;
  navItems: NavItem[];
  contactHref: string;
  quoteHref: string;
  contactLabel: string;
  quoteLabel: string;
  menuLabel: string;
  closeLabel: string;
}

export function MobileMenu({
  lang,
  navItems,
  contactHref,
  quoteHref,
  contactLabel,
  quoteLabel,
  menuLabel,
  closeLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';

  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.addEventListener('keydown', handler);
    }
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        id="mobile-menu-toggle"
        type="button"
        className="mobile-menu-hamburger lg:hidden"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? closeLabel : menuLabel}
      >
        <span className="sr-only">{isOpen ? closeLabel : menuLabel}</span>
        <span className={`hamburger-line hamburger-line--top ${isOpen ? 'hamburger-line--active' : ''}`} />
        <span className={`hamburger-line hamburger-line--mid ${isOpen ? 'hamburger-line--active' : ''}`} />
        <span className={`hamburger-line hamburger-line--bot ${isOpen ? 'hamburger-line--active' : ''}`} />
      </button>

      {/* Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'mobile-menu-backdrop--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <nav
        id="mobile-menu-panel"
        aria-label="Mobile navigation"
        className={`mobile-menu-drawer ${isOpen ? 'mobile-menu-drawer--open' : ''} ${isAr ? 'mobile-menu-drawer--rtl' : ''}`}
      >
        <div className="mobile-menu-inner">
          {/* Nav Links */}
          <ul className="mobile-menu-links">
            {navItems.map((item, i) => (
              <li key={item.href} style={{ animationDelay: isOpen ? `${80 + i * 50}ms` : '0ms' }}>
                <Link
                  href={item.href}
                  className={`mobile-menu-link ${isOpen ? 'mobile-menu-link--animate' : ''}`}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="mobile-menu-ctas">
            <Link href={contactHref} className="btn-ghost w-full text-center" onClick={close}>
              {contactLabel}
            </Link>
            <Link href={quoteHref} className="btn-primary w-full text-center" onClick={close}>
              {quoteLabel}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
