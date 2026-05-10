import Link from 'next/link';
import Image from 'next/image';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { SERVICES } from '@/lib/data/services';
import { t, localizedHref, type Lang } from '@/lib/i18n/ui';

import logoImg from '../../../public/images/logo.png';
import isoImg from '../../../public/images/certificate/ISO_90012015.png';
import oekoImg from '../../../public/images/certificate/OEKO-TEX.png';
import sasoImg from '../../../public/images/certificate/Saudi_Quality_Mark.png';
import gotsImg from '../../../public/images/certificate/GOTS_Certified.png';

export function Footer({ lang = 'en' }: { lang?: Lang }) {
  const ui = t(lang);
  const isAr = lang === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <Link href={localizedHref('/', lang)} className="inline-block group" aria-label="UNEOM Home">
              <Image 
                src={logoImg}
                alt="UNEOM Logo" 
                className="w-auto h-8 sm:h-10 brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100" 
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200/80 pretty">
              {ui.footer.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-navy-200">
                <span className="text-accent-400">{isAr ? '←' : '→'}</span>
                <a href="tel:+966564612017" className="hover:text-white transition-colors stat-number">+966 56 461 2017</a>
              </div>
              <div className="flex items-center gap-2 text-navy-200">
                <span className="text-accent-400">{isAr ? '←' : '→'}</span>
                <a href="mailto:info@uneom.com" className="hover:text-white transition-colors">info@uneom.com</a>
              </div>
            </div>
          </div>

          <nav aria-labelledby="footer-industries">
            <h3 id="footer-industries" className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">{ui.footer.industries}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {INDUSTRIES.map(i => (
                <li key={i.slug}>
                  <Link href={localizedHref(`/industries/${i.slug}/`, lang)} className="text-navy-200/80 transition-colors hover:text-white">
                    {isAr ? i.nameAr : i.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">{ui.footer.services}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link href={localizedHref(`/services/${s.slug}/`, lang)} className="text-navy-200/80 transition-colors hover:text-white">
                    {isAr ? s.nameAr : s.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-cities">
            <h3 id="footer-cities" className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">{ui.footer.majorCities}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SAUDI_CITIES.filter(c => c.populationTier === 'metro' || c.populationTier === 'major').slice(0, 8).map(c => (
                <li key={c.slug}>
                  <Link href={localizedHref(`/locations/${c.slug}/`, lang)} className="text-navy-200/80 transition-colors hover:text-white">
                    {isAr ? c.nameAr : c.nameEn}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href={localizedHref('/locations/', lang)} className="font-semibold text-accent-400 hover:text-accent-300">
                  {ui.footer.allCities}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">{ui.footer.company}</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link href={localizedHref('/about/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{isAr ? 'عن UNEOM' : 'About'}</Link></li>
              <li><Link href={localizedHref('/case-studies/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{ui.nav.caseStudies}</Link></li>
              <li><Link href={localizedHref('/blog/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{ui.nav.blog}</Link></li>
              <li><Link href={localizedHref('/careers/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{isAr ? 'الوظائف' : 'Careers'}</Link></li>
              <li><Link href={localizedHref('/contact/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{ui.nav.contact}</Link></li>
              <li><Link href={localizedHref('/quote/', lang)} className="text-navy-200/80 transition-colors hover:text-white">{ui.nav.requestQuote}</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col xl:flex-row xl:items-center justify-between gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60 shrink-0">{ui.footer.compliance}</span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Image src={isoImg} alt="ISO 9001:2015" title="ISO 9001:2015" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
              <Image src={oekoImg} alt="OEKO-TEX Standard 100" title="OEKO-TEX Standard 100" className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
              <Image src={sasoImg} alt="SASO Quality Mark" title="SASO Quality Mark" className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
              <Image src={gotsImg} alt="GOTS Certified" title="GOTS Certified" className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium text-navy-200/60 uppercase tracking-wider">
            <span>Maroof {isAr ? 'موثّق' : 'Verified'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-navy-200/30"></span>
            <span>ZATCA E-Invoicing</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-200/60">
          <p>© {currentYear} UNEOM Saudi Arabia. {ui.footer.allRights}</p>
          <nav aria-label={ui.footer.legal} className="flex gap-6">
            <Link href={localizedHref('/privacy-policy/', lang)} className="hover:text-white">{ui.footer.privacy}</Link>
            <Link href={localizedHref('/terms-of-service/', lang)} className="hover:text-white">{ui.footer.terms}</Link>
            <Link href={localizedHref('/license/', lang)} className="hover:text-white">{ui.footer.license}</Link>
            <Link href="/sitemap.xml" className="hover:text-white">{ui.footer.sitemap}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
