import type { SaudiCity } from './index';

export const taif: SaudiCity = {
  slug: 'taif',
  nameEn: 'Taif',
  nameAr: 'الطائف',
  region: 'Makkah Province',
  regionAr: 'منطقة مكة المكرمة',
  lat: 21.2703, lng: 40.4178,
  populationTier: 'major',
  anchorIndustries: ['hospitality', 'education'],
  climateVocab: [
    { term: 'موسم الورد', meaning: 'Damask rose harvest — peak hospitality season; cool highland air', meaningAr: 'موسم حصاد الورد الجوري — ذروة موسم الضيافة؛ هواء المرتفعات البارد' },
    { term: 'الهدا', meaning: 'Mountain switchback district — temperature drops mean layered uniforms', meaningAr: 'منطقة الجبال المتعرجة — انخفاض درجات الحرارة يعني الحاجة لأزياء متعددة الطبقات' }
  ],
  landmarks: ['Al-Hada Road', 'Rose Gardens'],
  landmarksAr: ['طريق الهدا', 'حدائق الورد'],
  heroImage: 'cities/hero-taif'
};
