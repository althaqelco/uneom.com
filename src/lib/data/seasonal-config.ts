/**
 * Seasonal configuration for UNEOM homepage and campaign pages.
 * Controls hero messaging, CTAs, and featured industries by quarter.
 * Includes Saudi cultural events (Ramadan, Hajj, National Day).
 *
 * Updated quarterly by the marketing team.
 */

export interface SeasonalConfig {
  id: string;
  nameEn: string;
  nameAr: string;
  dateRange: { start: string; end: string };
  hero: {
    eyebrowEn: string;
    eyebrowAr: string;
    headlineEn: string;
    headlineAr: string;
  };
  featuredIndustries: string[];
  ctaLabel: { en: string; ar: string };
  active: boolean;
}

export const SEASONAL_CONFIGS: SeasonalConfig[] = [
  {
    id: 'q2-2026',
    nameEn: 'Q2 2026 — Summer Readiness',
    nameAr: 'الربع الثاني 2026 — الاستعداد للصيف',
    dateRange: { start: '2026-04-01', end: '2026-06-30' },
    hero: {
      eyebrowEn: 'Summer 2026 Programmes',
      eyebrowAr: 'برامج صيف 2026',
      headlineEn: 'Beat the heat. Build the programme.',
      headlineAr: 'تغلّب على الحرارة. ابنِ البرنامج.',
    },
    featuredIndustries: ['healthcare', 'hospitality', 'manufacturing'],
    ctaLabel: { en: 'Summer quote', ar: 'عرض الصيف' },
    active: true
  },
  {
    id: 'ramadan-2026',
    nameEn: 'Ramadan 2026',
    nameAr: 'رمضان 2026',
    dateRange: { start: '2026-02-18', end: '2026-03-19' },
    hero: {
      eyebrowEn: 'Ramadan Programmes',
      eyebrowAr: 'برامج رمضان',
      headlineEn: 'Serve with dignity this Ramadan.',
      headlineAr: 'اخدم بكرامة في رمضان.',
    },
    featuredIndustries: ['hospitality', 'healthcare', 'retail'],
    ctaLabel: { en: 'Ramadan readiness', ar: 'جاهزية رمضان' },
    active: false
  },
  {
    id: 'hajj-2026',
    nameEn: 'Hajj Season 2026',
    nameAr: 'موسم الحج 2026',
    dateRange: { start: '2026-06-01', end: '2026-06-20' },
    hero: {
      eyebrowEn: 'Hajj Season',
      eyebrowAr: 'موسم الحج',
      headlineEn: 'Equip your teams for the season of service.',
      headlineAr: 'جهّز فريقك لموسم الخدمة.',
    },
    featuredIndustries: ['hospitality', 'security', 'healthcare'],
    ctaLabel: { en: 'Hajj programme', ar: 'برنامج الحج' },
    active: false
  },
  {
    id: 'national-day-96',
    nameEn: 'Saudi National Day 96',
    nameAr: 'اليوم الوطني السعودي 96',
    dateRange: { start: '2026-09-15', end: '2026-09-25' },
    hero: {
      eyebrowEn: 'National Day',
      eyebrowAr: 'اليوم الوطني',
      headlineEn: 'Dress the kingdom. Celebrate identity.',
      headlineAr: 'ألبس المملكة. احتفل بالهوية.',
    },
    featuredIndustries: ['corporate', 'education', 'retail'],
    ctaLabel: { en: 'National Day collection', ar: 'تشكيلة اليوم الوطني' },
    active: false
  }
];

export function getActiveConfig(): SeasonalConfig | undefined {
  const now = new Date().toISOString().slice(0, 10);
  return SEASONAL_CONFIGS.find(
    c => c.active && now >= c.dateRange.start && now <= c.dateRange.end
  );
}

export function getDefaultConfig(): SeasonalConfig {
  return SEASONAL_CONFIGS[0]; // current quarter fallback
}
