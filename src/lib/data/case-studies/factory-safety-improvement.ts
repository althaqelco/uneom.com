import type { CaseStudy } from './index';

export const factorySafetyImprovement: CaseStudy = {
  slug: 'factory-safety-improvement',
  title: 'Industrial Safety Programme: HRC1 to HRC2 Migration',
  titleAr: 'برنامج السلامة الصناعية: الانتقال من HRC1 إلى HRC2',
  summary: 'Petrochemical site in Al-Jubail — full PPE migration from HRC1 synthetic FR to HRC2 inherent FR cotton.',
  summaryAr: 'موقع بتروكيماويات في الجبيل — انتقال كامل لمعدات الحماية من FR صناعي HRC1 إلى قطن FR ذاتي HRC2.',
  silo: 'manufacturing',
  city: 'al-jubail',
  clientType: 'Petrochemical site, Al-Jubail',
  clientTypeAr: 'موقع بتروكيماويات، الجبيل',
  headline: { value: '450 workers', label: 'migrated to HRC2 inherent FR' },
  headlineAr: { value: '450 عاملاً', label: 'انتقلوا إلى FR ذاتي HRC2' },
  duration: '14 weeks',
  durationAr: '14 أسبوعاً',
  scope: 'Full PPE programme migration, HCIS audit support, per-garment serialisation',
  scopeAr: 'هجرة كاملة لبرنامج الحماية الشخصية، دعم تدقيق HCIS، وتسلسل لكل قطعة',
  outcomes: [
    { metric: 'HRC2', description: 'inherent FR cotton across all 450 frontline workers — passing HCIS audit on first review.' },
    { metric: '24 months', description: 'mean coverall lifespan in heat-soak conditions, vs. 14 months on previous synthetic FR.' },
    { metric: '0 incidents', description: 'with garment performance issues in 18-month operating period.' }
  ],
  outcomesAr: [
    { metric: 'HRC2', description: 'قطن FR ذاتي لجميع عمال الخطوط الأمامية البالغ عددهم 450 — اجتياز تدقيق HCIS من المراجعة الأولى.' },
    { metric: '24 شهراً', description: 'متوسط عمر الأفرول في ظروف الحرارة الشديدة، مقابل 14 شهراً لـ FR الصناعي السابق.' },
    { metric: '0 حوادث', description: 'بسبب مشاكل أداء الملابس خلال فترة تشغيل 18 شهراً.' }
  ],
  story: [
    { heading: 'Why migrate', body: 'After a near-miss incident, the site\'s safety lead reviewed FR coverall performance data. Synthetic FR treatment was degrading faster than expected in 50°C plant-floor conditions.' },
    { heading: 'The migration', body: 'Full programme replaced over 14 weeks with HRC2 inherent FR cotton. Per-garment serialisation built in from day one for HCIS audit traceability.' },
    { heading: 'The audit', body: 'Quarterly HCIS audits passed with zero non-conformities. The serialisation system reduced audit prep time from 2 days to 30 minutes.' }
  ],
  storyAr: [
    { heading: 'لماذا الانتقال', body: 'بعد حادث وشيك، راجع قائد السلامة في الموقع بيانات أداء الأفرولات المقاومة للحريق. كانت معالجة FR الصناعية تتدهور أسرع من المتوقع في ظروف أرضية المصنع التي تصل لـ 50 درجة مئوية.' },
    { heading: 'الانتقال', body: 'تم استبدال البرنامج بالكامل على مدار 14 أسبوعاً بقطن FR ذاتي HRC2. تم بناء تسلسل لكل قطعة منذ اليوم الأول لتتبع تدقيق HCIS.' },
    { heading: 'التدقيق', body: 'تم اجتياز تدقيقات HCIS ربع السنوية بدون أي حالات عدم مطابقة. قلل نظام التسلسل وقت التحضير للتدقيق من يومين إلى 30 دقيقة.' }
  ],
  imageFolder: 'factory-safety-improvement'
};
