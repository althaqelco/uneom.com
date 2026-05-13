'use client';

import { usePathname } from 'next/navigation';

const WHATSAPP_NUMBER = '966564612017';

const TOOLTIP = {
  en: 'Chat with us on WhatsApp',
  ar: 'تواصل معنا عبر واتساب',
} as const;

const PREFILL = {
  en: 'Hello UNEOM, I would like to inquire about your uniform services.',
  ar: 'مرحباً يونيوم، أود الاستفسار عن خدمات الأزياء المهنية لديكم.',
} as const;

/**
 * Floating WhatsApp CTA — appears on every page after a short delay.
 * Locale-aware: detects `/ar/` prefix for RTL positioning + Arabic copy.
 *
 * Optimisation history:
 *  - Phase 4.3: Replaced useState+useEffect entrance timer → CSS animation-delay.
 *  - Phase 8: Replaced useState(hovered)+onMouseEnter/Leave → CSS :hover pseudo.
 *            Now only 1 client hook remains (usePathname). Zero React state.
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  const isAr = pathname?.startsWith('/ar');
  const lang = isAr ? 'ar' : 'en';

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL[lang])}`;

  return (
    <div
      id="whatsapp-float"
      className={`whatsapp-float whatsapp-float--css-entrance ${isAr ? 'whatsapp-float--rtl' : ''}`}
    >
      {/* Tooltip — now CSS-only via :hover */}
      <span
        className="whatsapp-float__tooltip"
        aria-hidden="true"
      >
        {TOOLTIP[lang]}
      </span>

      {/* Main button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={TOOLTIP[lang]}
        className="whatsapp-float__btn"
      >
        {/* Pulse ring */}
        <span className="whatsapp-float__pulse" aria-hidden="true" />

        {/* WhatsApp SVG icon */}
        <svg
          className="whatsapp-float__icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16.004 2.002C8.28 2.002 2.004 8.278 2.004 15.998c0 2.464.644 4.87 1.87 6.994L2 30l7.186-1.884A13.94 13.94 0 0 0 16.004 30c7.72 0 13.996-6.276 13.996-13.998S23.724 2.002 16.004 2.002Zm0 25.606a11.55 11.55 0 0 1-5.902-1.622l-.422-.252-4.38 1.148 1.17-4.272-.276-.44a11.58 11.58 0 0 1-1.778-6.168c0-6.39 5.2-11.59 11.588-11.59 6.39 0 11.59 5.2 11.59 11.59 0 6.39-5.2 11.606-11.59 11.606Zm6.352-8.678c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.554-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.728-1.036-.922-1.734-2.062-1.938-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.786-1.894-1.078-2.594-.284-.68-.572-.588-.786-.598-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.93.436-.32.348-1.22 1.192-1.22 2.908 0 1.716 1.248 3.374 1.422 3.606.174.232 2.458 3.752 5.956 5.264.832.36 1.482.574 1.99.736.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.144-.32-.232-.668-.404Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
