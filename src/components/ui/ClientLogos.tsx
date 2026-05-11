'use client';

import Image from 'next/image';
import type { Lang } from '@/lib/i18n/ui';

interface Client {
  name: string;
  nameAr: string;
  logo: string;
}

const CLIENTS: Client[] = [
  { name: 'Saudi Aramco', nameAr: 'أرامكو السعودية', logo: '/images/clients/aramco.png' },
  { name: 'SABIC', nameAr: 'سابك', logo: '/images/clients/sabic.png' },
  { name: 'STC', nameAr: 'STC', logo: '/images/clients/stc.png' },
  { name: 'Almarai', nameAr: 'المراعي', logo: '/images/clients/almarai.png' },
  { name: 'SNB', nameAr: 'البنك الأهلي السعودي', logo: '/images/clients/snb.png' },
  { name: 'NAPCO', nameAr: 'نابكو', logo: '/images/clients/napco.png' },
  { name: 'Nada', nameAr: 'ندى', logo: '/images/clients/nada.png' },
  { name: 'Al Baik', nameAr: 'البيك', logo: '/images/clients/albaic.png' },
  { name: 'QNB', nameAr: 'QNB', logo: '/images/clients/QNB.png' },
];

interface Props {
  lang?: Lang;
}

export function ClientLogos({ lang = 'en' }: Props) {
  const isAr = lang === 'ar';
  // Double the list for seamless loop
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y border-ink-100 bg-white overflow-hidden">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
            {isAr ? 'شركاء نفتخر بخدمتهم' : 'Trusted by Saudi enterprises'}
          </span>
          <div
            className="client-marquee-wrapper relative w-full"
            aria-label={isAr ? 'شعارات العملاء' : 'Client logos'}
          >
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" aria-hidden />

            <div className={`client-marquee-track ${isAr ? 'client-marquee-track--rtl' : ''}`}>
              {doubled.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="client-logo-item flex-shrink-0 px-6 sm:px-8 lg:px-10"
                >
                  <Image
                    src={client.logo}
                    alt={isAr ? client.nameAr : client.name}
                    width={140}
                    height={56}
                    className="h-11 sm:h-14 w-auto object-contain grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
