import type { SaudiCity } from './index';

export const buraidah: SaudiCity = {
  slug: 'buraidah',
  nameEn: 'Buraidah',
  nameAr: 'بريدة',
  region: 'Qassim Province',
  regionAr: 'منطقة القصيم',
  lat: 26.3260, lng: 43.9750,
  populationTier: 'major',
  anchorIndustries: ['retail', 'corporate', 'education'],
  climateVocab: [
    { term: 'برد القصيم', meaning: 'Continental winter — dry cold, fabric brittleness if untreated', meaningAr: 'برد القصيم — شتاء قاري، برودة جافة، هشاشة في الأقمشة إذا لم تتم معالجتها' }
  ],
  landmarks: ['Buraidah Souq', 'Date Festival Grounds'],
  landmarksAr: ['سوق بريدة', 'ساحات مهرجان التمور'],
  heroImage: 'cities/hero-buraidah'
};
