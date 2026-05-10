import type { SaudiCity } from './index';

export const alAhsa: SaudiCity = {
  slug: 'al-ahsa',
  nameEn: 'Al-Ahsa',
  nameAr: 'الأحساء',
  region: 'Eastern Province',
  regionAr: 'المنطقة الشرقية',
  lat: 25.4295, lng: 49.5917,
  populationTier: 'major',
  anchorIndustries: ['hospitality', 'manufacturing', 'retail'],
  climateVocab: [
    { term: 'واحة الأحساء', meaning: 'UNESCO oasis microclimate — humidity pockets, fabric-stress hotspot', meaningAr: 'مناخ واحة اليونسكو — جيوب رطوبة، نقطة ساخنة لإجهاد الأقمشة' }
  ],
  landmarks: ['Al-Ahsa Oasis', 'Hofuf', 'Mubarraz'],
  landmarksAr: ['واحة الأحساء', 'الهفوف', 'المبرز'],
  heroImage: 'cities/hero-al-ahsa'
};
