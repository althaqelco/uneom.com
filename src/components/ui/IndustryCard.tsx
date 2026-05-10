import Link from 'next/link';
import type { Industry } from '@/lib/data/industries';
import { localizedHref, type Lang } from '@/lib/i18n/ui';

interface Props {
  industry: Industry;
  variant?: 'compact' | 'full';
  lang?: Lang;
}

export function IndustryCard({ industry, variant = 'full', lang = 'en' }: Props) {
  const name = lang === 'ar' ? industry.nameAr : industry.nameEn;
  const href = localizedHref(`/industries/${industry.slug}/`, lang);

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-elevation-lg hover:-translate-y-0.5"
      >
        <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-ink-500">
          {industry.tagline}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-accent-700 group-hover:text-accent-600">
          {lang === 'ar' ? 'استعراض ←' : 'Explore →'}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-navy-800"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source type="image/avif" srcSet={`/images/${industry.heroImage}.avif`} />
          <source type="image/webp" srcSet={`/images/${industry.heroImage}.webp`} />
          <img
            src={`/images/${industry.heroImage}.avif`}
            alt={`UNEOM ${name} uniforms in Saudi Arabia`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-7 text-white">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-300">
          {lang === 'ar' ? 'القطاع' : 'Industry silo'}
        </span>
        <h3 className="text-2xl font-bold leading-tight balance">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-white/85 line-clamp-2 pretty">
          {industry.tagline}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 group-hover:text-accent-200">
          {lang === 'ar' ? 'استعراض القطاع' : 'Explore the silo'}
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            {lang === 'ar' ? '←' : '→'}
          </span>
        </span>
      </div>
    </Link>
  );
}
