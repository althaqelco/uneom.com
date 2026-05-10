import type { Resource } from './index';

export const electricalSafetyPpeGuide: Resource = {
  slug: 'electrical-safety-ppe-guide',
  title: 'Electrical Safety PPE Guide for Saudi Industrial Sites',
  titleAr: 'دليل معدات الحماية الشخصية للسلامة الكهربائية للمواقع الصناعية السعودية',
  summary: 'HRC1 vs HRC2, NFPA 70E in Saudi heat-soak, and the per-garment audit traceability HCIS auditors actually request.',
  summaryAr: 'HRC1 مقابل HRC2، معيار NFPA 70E في حرارة السعودية، وتتبع التدقيق لكل قطعة الذي يطلبه مدققو الأمن الصناعي (HCIS) فعلياً.',
  hero: 'resources/electrical-safety-ppe-hero',
  silo: 'manufacturing',
  readingMinutes: 13,
  lead: 'A Saudi industrial site with 500 FR coveralls is also a site with 500 audit traceability requirements. This guide covers both — the engineering behind HRC2 inherent FR cotton, and the per-garment serial system that makes HCIS audits a 30-minute exercise.',
  leadAr: 'أي موقع صناعي سعودي بـ 500 أفرول مقاوم للحريق (FR) هو أيضاً موقع بـ 500 متطلب تتبع تدقيق. يغطي هذا الدليل كلاهما — الهندسة وراء قطن FR الذاتي بتصنيف HRC2، ونظام التسلسل لكل قطعة الذي يجعل عمليات تدقيق HCIS مجرد تمرين مدته 30 دقيقة.',
  sections: [
    { heading: 'NFPA 70E and Saudi adaptation', body: '' },
    { heading: 'HRC2 inherent FR cotton', body: '' },
    { heading: 'Per-garment audit traceability', body: '' },
    { heading: 'Replacement protocol after incidents', body: '' }
  ],
  sectionsAr: [
    { heading: 'معيار NFPA 70E والتبني السعودي', body: '' },
    { heading: 'قطن FR الذاتي بتصنيف HRC2', body: '' },
    { heading: 'تتبع التدقيق لكل قطعة', body: '' },
    { heading: 'بروتوكول الاستبدال بعد الحوادث', body: '' }
  ],
  relatedPosts: ['industrial-safety-workwear-saudi']
};
