import type { Resource } from './index';

export const healthcareUniformStandards: Resource = {
  slug: 'healthcare-uniform-standards',
  title: 'Saudi Healthcare Uniform Compliance Standards',
  titleAr: 'معايير امتثال أزياء الرعاية الصحية السعودية',
  summary: 'Direct citations from MoH, SFDA, and SASO — what every hospital procurement team needs in their compliance file.',
  summaryAr: 'اقتباسات مباشرة من وزارة الصحة، هيئة الغذاء والدواء، وساسو — ما يحتاجه كل فريق مشتريات مستشفى في ملف الامتثال الخاص بهم.',
  hero: 'resources/healthcare-uniform-standards-hero',
  silo: 'healthcare',
  readingMinutes: 11,
  lead: 'A healthcare uniform compliance file should be one folder, not a search across three regulators. This guide consolidates the relevant MoH, SFDA, and SASO references that matter for scrub procurement, with the spec sheet language that maps every UNEOM garment to each.',
  leadAr: 'يجب أن يكون ملف امتثال الزي الطبي مجلداً واحداً، وليس بحثاً عبر ثلاث جهات تنظيمية. يوحّد هذا الدليل مراجع وزارة الصحة، وهيئة الغذاء والدواء، وساسو ذات الصلة بمشتريات السكراب، مع لغة ورقة المواصفات التي تربط كل قطعة من يونيوم بكل معيار.',
  sections: [
    { heading: 'Ministry of Health requirements', body: '' },
    { heading: 'SFDA antimicrobial standards', body: '' },
    { heading: 'SASO textile quality marks', body: '' },
    { heading: 'AATCC 100 validation', body: '' }
  ],
  sectionsAr: [
    { heading: 'متطلبات وزارة الصحة', body: '' },
    { heading: 'معايير هيئة الغذاء والدواء لمضادات الميكروبات', body: '' },
    { heading: 'علامات الجودة للنسيج من ساسو', body: '' },
    { heading: 'التحقق من AATCC 100', body: '' }
  ],
  relatedPosts: ['medical-scrubs-evolution-saudi', 'healthcare-uniforms-infection-control'],
  references: [
    { name: 'Ministry of Health (Saudi)', url: 'https://www.moh.gov.sa' },
    { name: 'SFDA', url: 'https://www.sfda.gov.sa' },
    { name: 'SASO', url: 'https://www.saso.gov.sa' }
  ]
};
