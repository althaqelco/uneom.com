import type { SaudiCity } from './index';

export const jazan: SaudiCity = {
  slug: 'jazan',
  nameEn: 'Jazan',
  nameAr: 'جازان',
  region: 'Jazan Province',
  regionAr: 'منطقة جازان',
  lat: 16.8892, lng: 42.5511,
  populationTier: 'mid',
  anchorIndustries: ['manufacturing', 'aviation'],
  climateVocab: [
    { term: 'أجواء العسير', meaning: 'Tropical south coast — humidity + heat strains every fabric', meaningAr: 'الساحل الجنوبي الاستوائي — الرطوبة والحرارة معاً تُجهد كل أنواع الأقمشة' }
  ],
  landmarks: ['Farasan Islands', 'Corniche'],
  landmarksAr: ['جزر فرسان', 'الكورنيش'],
  heroImage: 'cities/hero-jazan'
};
