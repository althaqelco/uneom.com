import Link from 'next/link';
import type { SaudiCity } from '@/lib/data/saudi-cities';
import { localizedHref, type Lang } from '@/lib/i18n/ui';

interface Props {
  city: SaudiCity;
  lang?: Lang;
}

export function CityCard({ city, lang = 'en' }: Props) {
  const name = lang === 'ar' ? city.nameAr : city.nameEn;
  return (
    <Link
      href={localizedHref(`/locations/${city.slug}/`, lang)}
      className="group relative flex aspect-[16/10] overflow-hidden rounded-2xl bg-navy-800"
    >
      <picture>
        <source type="image/avif" srcSet={`/images/cities/hero-${city.slug}.avif`} />
        <source type="image/webp" srcSet={`/images/cities/hero-${city.slug}.webp`} />
        <img
          src={`/images/cities/hero-${city.slug}.avif`}
          alt={`UNEOM uniforms serving ${city.nameEn}, ${city.region}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={1920}
          height={800}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" aria-hidden />
      <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-4 p-5 text-white">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">
            {city.region}
          </div>
          <h3 className="mt-1 text-xl font-bold">
            {name}
          </h3>
        </div>
        <span className="opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100" aria-hidden>
          {lang === 'ar' ? '←' : '→'}
        </span>
      </div>
    </Link>
  );
}
