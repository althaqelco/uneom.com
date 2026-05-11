import type { CaseStudy } from './index';

export const factorySafetyImprovement: CaseStudy = {
  slug: 'factory-safety-improvement',
  title: 'Petrochemical PPE Migration: HRC1 to HRC2 Inherent FR Programme',
  titleAr: 'انتقال معدات الحماية البتروكيماوية: من HRC1 إلى برنامج FR ذاتي HRC2',
  summary: 'A 450-worker petrochemical site in Al-Jubail executed a full PPE migration from degrading HRC1 synthetic FR to inherent FR cotton rated to HRC2 — passing HCIS audit on first review, extending coverall lifespan by 71%, and achieving zero garment-performance incidents over 18 months.',
  summaryAr: 'نفّذ موقع بتروكيماويات يضم 450 عاملاً في الجبيل انتقالاً كاملاً لمعدات الحماية من FR صناعي HRC1 المتدهور إلى قطن FR ذاتي مصنّف HRC2 — مجتازاً تدقيق HCIS من المراجعة الأولى، ومُمدداً عمر الأفرولات بنسبة 71%، ومحققاً صفر حوادث أداء للملابس على مدى 18 شهراً.',
  silo: 'manufacturing',
  city: 'al-jubail',
  clientType: 'Petrochemical processing site, Al-Jubail Industrial City — 450 frontline workers',
  clientTypeAr: 'موقع معالجة بتروكيماوية، مدينة الجبيل الصناعية — 450 عاملاً في الخطوط الأمامية',
  headline: { value: '450 workers', label: 'migrated to HRC2 inherent FR' },
  headlineAr: { value: '450 عاملاً', label: 'انتقلوا إلى FR ذاتي HRC2' },
  duration: '14 weeks (phased rollout across 3 plant zones)',
  durationAr: '14 أسبوعاً (نشر مرحلي عبر 3 مناطق بالمصنع)',
  scope: 'Full PPE programme migration, HCIS audit support, per-garment serialisation, quarterly compliance verification',
  scopeAr: 'هجرة كاملة لبرنامج الحماية الشخصية، دعم تدقيق HCIS، تسلسل لكل قطعة، تحقق ربع سنوي من الامتثال',
  outcomes: [
    { metric: 'HRC2 certified', description: 'inherent FR cotton deployed across all 450 frontline workers — passing HCIS safety audit on first review with zero non-conformities.' },
    { metric: '24 months', description: 'mean coverall lifespan under heat-soak conditions (50°C+ ambient), up from 14 months on previous synthetic FR — a 71% improvement in garment durability.' },
    { metric: '0 incidents', description: 'involving garment performance failures across the 18-month monitoring period — zero thermal breakthrough, zero FR degradation incidents.' }
  ],
  outcomesAr: [
    { metric: 'شهادة HRC2', description: 'قطن FR ذاتي نُشر لجميع عمال الخطوط الأمامية البالغ عددهم 450 — اجتياز تدقيق السلامة HCIS من المراجعة الأولى بصفر حالات عدم مطابقة.' },
    { metric: '24 شهراً', description: 'متوسط عمر الأفرول في ظروف الحرارة الشديدة (بيئة +50 درجة مئوية)، ارتفاعاً من 14 شهراً للـ FR الصناعي السابق — تحسن 71% في متانة القطع.' },
    { metric: '0 حوادث', description: 'تتضمن فشل أداء الملابس عبر فترة المراقبة البالغة 18 شهراً — صفر اختراق حراري، صفر حوادث تدهور FR.' }
  ],
  story: [
    {
      heading: 'The safety trigger',
      body: 'In Q3 of the year preceding the migration, a near-miss arc flash incident at the Al-Jubail petrochemical site exposed a critical vulnerability in the existing PPE programme. Post-incident investigation revealed that the synthetic FR treatment on 23% of frontline coveralls had degraded below effective protection thresholds — a consequence of repeated exposure to temperatures exceeding 50°C on the plant floor, combined with aggressive industrial laundry chemicals. The site\'s HSE director commissioned an immediate FR performance audit, which found that coveralls averaging 10 months of service showed FR efficacy reduction of 35–40% compared to their original certification values. The audit conclusion was unambiguous: the synthetic FR programme was failing under real-world conditions, and a migration to inherent FR was the only path to sustainable compliance. UNEOM was selected after a three-supplier evaluation based on our demonstrated capability in large-scale industrial PPE programmes and our per-garment serialisation system.'
    },
    {
      heading: 'FR fabric engineering and certification',
      body: 'We specified a 100% inherent FR cotton fabric — a fibre where flame resistance is an intrinsic property of the molecular structure, not a chemical treatment applied post-production. This distinction is critical: inherent FR cannot wash out, degrade under UV exposure, or diminish with repeated laundering. The fabric was rated to NFPA 2112 (Flash Fire) and NFPA 70E (Arc Flash) standards, certified to HRC2/ARC2 with a minimum ATPV (Arc Thermal Performance Value) of 8.0 cal/cm². Weight specification was 260 gsm — heavy enough to provide structural protection against radiant heat and brief contact burns, while maintaining breathability in ambient temperatures routinely exceeding 45°C. The fabric underwent accelerated aging testing equivalent to 500 industrial wash cycles, with FR performance verified at every 50-cycle interval. At the 500-cycle mark, ATPV degradation was below 3% — within the tolerance band specified by NFPA 2112.'
    },
    {
      heading: 'Per-garment serialisation system',
      body: 'Every coverall, jacket, and trouser in the programme was assigned a unique serial number embedded in a heat-sealed, chemical-resistant QR-coded label stitched into the inner collar. The serialisation system tracks: garment issue date, assigned worker ID, wash cycle count (updated automatically via the industrial laundry\'s RFID readers), incident exposure history, and scheduled retirement date. This system transformed HCIS audit compliance from a manual, paper-based process requiring 2 days of preparation into a digital one completed in 30 minutes. Auditors scan any garment\'s QR code to access its full lifecycle history — issue date, wash count, current FR certification status, and assigned worker. The system also triggers automatic alerts when a garment approaches its maximum wash cycle threshold (350 cycles), ensuring proactive retirement before FR performance degrades. Over 18 months, the system tracked 1,950 individual garments across 450 workers, processing over 120,000 wash-cycle data points.'
    },
    {
      heading: 'Phased migration and zero-downtime rollout',
      body: 'Replacing PPE for 450 frontline workers while maintaining continuous plant operations required a phased approach. The migration was executed across three plant zones over 14 weeks. Zone 1 (processing units, 180 workers): Weeks 1–5. Zone 2 (storage and loading, 150 workers): Weeks 5–10. Zone 3 (maintenance and utilities, 120 workers): Weeks 8–14. Each zone followed a 5-step protocol: (1) individual sizing using our mobile fitting unit; (2) production and serial number assignment; (3) on-site distribution with worker-by-worker garment registration; (4) collection and certified destruction of retired synthetic FR garments; (5) HSE sign-off confirming zone completion. The overlap between zones allowed continuous production while ensuring that no worker was ever without compliant PPE. Old garments were collected the same day new ones were issued — a critical safety requirement, as degraded FR garments in circulation represent an active hazard.'
    },
    {
      heading: 'HCIS audit performance',
      body: 'The programme was subjected to its first quarterly HCIS audit eight weeks after full deployment. The audit covered three domains: (1) PPE compliance — verification that all 450 frontline workers were equipped with HRC2-rated inherent FR garments; (2) documentation — verification of individual garment serialisation records, wash-cycle tracking, and retirement schedules; (3) garment condition — random sampling of 10% of garments (45 units) for physical inspection of seams, FR labelling, and visible wear indicators. The result: zero non-conformities across all three domains. The auditor specifically noted the serialisation system as "best-in-class" for industrial PPE programmes, recommending it as a benchmark for other sites in the company\'s portfolio. Subsequent quarterly audits at 6, 12, and 18 months maintained the zero-non-conformity record.'
    },
    {
      heading: 'Operational and safety outcomes at 18 months',
      body: 'At the 18-month programme review, the operational data validated the migration decision across every measured dimension. Garment lifespan: mean coverall service life reached 24 months under heat-soak conditions, compared to 14 months on the previous synthetic FR programme — a 71% improvement that directly reduced per-worker annual PPE cost by SAR 840. Safety performance: zero garment-related incidents across the entire monitoring period — no thermal breakthrough events, no FR degradation failures, no worker injuries attributable to PPE performance. Audit compliance: four consecutive quarterly HCIS audits passed with zero non-conformities. The audit preparation time reduction — from 2 days to 30 minutes — freed the HSE team for proactive safety work rather than administrative paperwork. The site\'s HSE director subsequently presented the programme at an industry safety conference as a case study in PPE programme modernisation, and three additional sites within the company\'s portfolio have initiated procurement discussions with UNEOM for similar migrations.'
    }
  ],
  storyAr: [
    {
      heading: 'محفّز السلامة',
      body: 'في الربع الثالث من العام السابق للانتقال، كشف حادث وميض قوسي وشيك في موقع الجبيل البتروكيماوي عن ثغرة حرجة في برنامج الحماية الشخصية القائم. كشف تحقيق ما بعد الحادث أن معالجة FR الصناعية على 23% من أفرولات الخطوط الأمامية تدهورت دون حدود الحماية الفعالة — نتيجة للتعرض المتكرر لدرجات حرارة تتجاوز 50 درجة مئوية في أرضية المصنع، مع المواد الكيميائية القاسية للغسيل الصناعي. كلّف مدير السلامة والصحة والبيئة بتدقيق فوري لأداء FR، وجد أن الأفرولات بعمر خدمة 10 أشهر أظهرت انخفاض فعالية FR بنسبة 35-40% مقارنة بقيم الشهادة الأصلية. كان الاستنتاج واضحاً: برنامج FR الصناعي يفشل في الظروف الحقيقية، والانتقال إلى FR الذاتي هو المسار الوحيد للامتثال المستدام.'
    },
    {
      heading: 'هندسة قماش FR والشهادات',
      body: 'حددنا قماش قطن FR ذاتي 100% — ألياف تكون فيها مقاومة اللهب خاصية جوهرية في البنية الجزيئية، وليست معالجة كيميائية مطبقة بعد الإنتاج. هذا التمييز حاسم: لا يمكن أن يُغسل FR الذاتي، أو يتدهور بالتعرض للأشعة فوق البنفسجية، أو يتضاءل بالغسيل المتكرر. تم تصنيف القماش وفق معايير NFPA 2112 (حريق وميضي) وNFPA 70E (وميض قوسي)، بشهادة HRC2/ARC2 بقيمة ATPV دنيا تبلغ 8.0 cal/cm². كان وزن المواصفات 260 جرام/م² — ثقيل بما يكفي لتوفير حماية هيكلية مع الحفاظ على التهوية في درجات حرارة تتجاوز 45 درجة مئوية بشكل روتيني.'
    },
    {
      heading: 'نظام التسلسل لكل قطعة',
      body: 'كل أفرول وسترة وبنطلون في البرنامج حصل على رقم تسلسلي فريد مُضمّن في ملصق مقاوم للحرارة والكيميائيات بكود QR مخيط في الياقة الداخلية. يتتبع نظام التسلسل: تاريخ الإصدار، معرف العامل، عدد دورات الغسيل (يُحدّث تلقائياً عبر قارئات RFID للغسيل الصناعي)، تاريخ التعرض للحوادث، وتاريخ التقاعد المجدول. حوّل هذا النظام امتثال تدقيق HCIS من عملية يدوية ورقية تتطلب يومين تحضير إلى عملية رقمية تُكمل في 30 دقيقة. يمسح المدققون كود QR لأي قطعة للوصول لتاريخ دورة حياتها الكامل. كما يُطلق النظام تنبيهات تلقائية عند اقتراب القطعة من حد دورات الغسيل القصوى (350 دورة).'
    },
    {
      heading: 'الانتقال المرحلي والنشر بدون توقف',
      body: 'تطلب استبدال الحماية الشخصية لـ 450 عاملاً مع الحفاظ على العمليات المستمرة نهجاً مرحلياً. تم تنفيذ الانتقال عبر ثلاث مناطق في المصنع خلال 14 أسبوعاً. المنطقة 1 (وحدات المعالجة، 180 عاملاً): الأسابيع 1-5. المنطقة 2 (التخزين والتحميل، 150 عاملاً): الأسابيع 5-10. المنطقة 3 (الصيانة والمرافق، 120 عاملاً): الأسابيع 8-14. اتبعت كل منطقة بروتوكولاً من 5 خطوات: (1) قياس فردي؛ (2) إنتاج وتعيين أرقام تسلسلية؛ (3) توزيع ميداني مع تسجيل عامل بعامل؛ (4) جمع وإتلاف معتمد لقطع FR الصناعية المتقاعدة؛ (5) توقيع السلامة على اكتمال المنطقة. تم جمع القطع القديمة في نفس يوم إصدار الجديدة — متطلب سلامة حاسم.'
    },
    {
      heading: 'أداء تدقيق HCIS',
      body: 'خضع البرنامج لأول تدقيق HCIS ربع سنوي بعد ثمانية أسابيع من النشر الكامل. غطى التدقيق ثلاثة مجالات: (1) امتثال الحماية الشخصية — التحقق من أن جميع العمال الـ 450 مجهزون بقطع FR ذاتي مصنفة HRC2؛ (2) التوثيق — التحقق من سجلات التسلسل وتتبع دورات الغسيل وجداول التقاعد؛ (3) حالة القطع — أخذ عينات عشوائية بنسبة 10% للفحص الفيزيائي. النتيجة: صفر حالات عدم مطابقة عبر المجالات الثلاثة. أشار المدقق تحديداً لنظام التسلسل على أنه "الأفضل في فئته" لبرامج الحماية الشخصية الصناعية. حافظت التدقيقات ربع السنوية اللاحقة عند 6 و12 و18 شهراً على سجل صفر عدم مطابقة.'
    },
    {
      heading: 'النتائج التشغيلية والسلامة عند 18 شهراً',
      body: 'عند مراجعة البرنامج بعد 18 شهراً، صادقت البيانات التشغيلية على قرار الانتقال عبر كل بُعد مُقاس. عمر القطع: بلغ متوسط عمر خدمة الأفرول 24 شهراً في ظروف الحرارة الشديدة، مقابل 14 شهراً في برنامج FR الصناعي السابق — تحسن 71% خفّض تكلفة الحماية السنوية لكل عامل بمقدار 840 ريالاً سعودياً. أداء السلامة: صفر حوادث مرتبطة بالملابس — لا اختراق حراري، لا تدهور FR، لا إصابات عمال تُعزى لأداء الحماية. امتثال التدقيق: أربع تدقيقات HCIS ربع سنوية متتالية بصفر عدم مطابقة. قدّم مدير السلامة البرنامج لاحقاً في مؤتمر صناعي كدراسة حالة في تحديث برامج الحماية، وبدأت ثلاثة مواقع إضافية مناقشات المشتريات مع يونيوم لانتقالات مماثلة.'
    }
  ],
  imageFolder: 'factory-safety-improvement'
};
