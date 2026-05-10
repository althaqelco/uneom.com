import type { SaudiCity } from './index';

export const alJubail: SaudiCity = {
  slug: 'al-jubail',
  nameEn: 'Al-Jubail',
  nameAr: 'الجبيل',
  region: 'Eastern Province',
  regionAr: 'المنطقة الشرقية',
  lat: 27.0046, lng: 49.6610,
  populationTier: 'major',
  anchorIndustries: ['manufacturing', 'security'],
  climateVocab: [
    { term: 'الجبيل الصناعية', meaning: 'Industrial city heat-soak — 50°C plant floors demand breathable FR cotton', meaningAr: 'حرارة المدينة الصناعية — أرضيات المصانع بدرجة 50 مئوية تتطلب قطن FR يسمح بالتهوية' }
  ],
  landmarks: ['Royal Commission Industrial City', 'Al-Fanateer'],
  landmarksAr: ['المدينة الصناعية للهيئة الملكية', 'الفناتير'],
  heroImage: 'cities/hero-al-jubail'
};
