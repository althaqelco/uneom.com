import type { Resource } from './index';

export const healthcareUniformStandards: Resource = {
  slug: 'healthcare-uniform-standards',
  title: 'Saudi Healthcare Uniform Compliance Standards',
  titleAr: 'معايير امتثال أزياء الرعاية الصحية السعودية',
  summary: 'Direct citations from MoH, SFDA, and SASO — what every hospital procurement team needs in their compliance file.',
  summaryAr: 'اقتباسات مباشرة من وزارة الصحة، هيئة الغذاء والدواء، وساسو — ما يحتاجه كل فريق مشتريات مستشفى في ملف الامتثال.',
  hero: 'resources/healthcare-uniform-standards-hero',
  silo: 'healthcare',
  readingMinutes: 11,
  lead: 'A healthcare uniform compliance file should be one folder, not a search across three regulators.',
  leadAr: 'يجب أن يكون ملف امتثال الزي الطبي مجلداً واحداً، وليس بحثاً عبر ثلاث جهات تنظيمية.',
  sections: [
    { heading: 'Ministry of Health requirements', body: 'MoH regulations mandate colour-coding by clinical department for infection-control traceability. Surgical staff wear distinct colours from outpatient nurses. The rationale is operational: laundry routing depends on departmental separation to prevent cross-contamination at the autoclave stage. MoH also specifies AATCC 100 antimicrobial efficacy testing. UNEOM maps every scrub SKU to the applicable MoH code, shipping a pre-built compliance card with each bulk order. For 38 partner hospitals currently using UNEOM, this eliminates the per-site compliance scramble at audit time.' },
    { heading: 'SFDA antimicrobial standards', body: 'SFDA regulates healthcare textiles making antimicrobial claims. A scrub marketed as antimicrobial without SFDA validation is a compliance liability. Surface-spray silver treatments wash out at 30 cycles. Bonded silver-ion treatments validated to AATCC 100 maintain efficacy past 80 cycles. The per-garment cost difference is approximately 40 SAR — a premium that disappears when measured against the 3x replacement rate (180 SAR cheap-tier every 8 months vs 220-280 SAR premium-tier lasting 14 months).' },
    { heading: 'SASO textile quality marks', body: 'SASO Quality Mark specifies ISO 105 Class 4 minimum colour-fastness and 85% tensile retention after 50 cycles. UNEOM poly-cotton 65/35 exceeds both: Class 4+ colour-fastness and 92% tensile retention at 80 cycles. SASO also covers dimensional stability (shrinkage 3% max after 5 washes), pilling resistance (Grade 4 minimum Martindale), and seam slippage (6mm max at 110N). Every batch undergoes third-party SASO-aligned testing before shipment.' },
    { heading: 'AATCC 100 validation', body: 'AATCC 100 inoculates a fabric swatch with bacteria, incubates 24 hours, and measures reduction percentage. Healthcare-grade requires 99%+ reduction. UNEOM validates every antimicrobial scrub at 30-cycle and 80-cycle marks. At 30 cycles, surface-spray treatments fail below 90%. At 80 cycles, bonded silver-ion still achieves 99%+. This is why UNEOM offers 18-month warranty on healthcare scrubs. Demand the AATCC 100 certificate at the 50+ cycle mark — any vendor providing only initial-application results is selling marketing, not engineering.' }
  ],
  sectionsAr: [
    { heading: 'متطلبات وزارة الصحة', body: 'تفرض لوائح وزارة الصحة ترميز الألوان حسب القسم السريري لتتبع مكافحة العدوى. يرتدي طاقم الجراحة ألواناً مميزة عن ممرضي العيادات. المنطق تشغيلي: توجيه الغسيل يعتمد على الفصل بين الأقسام لمنع التلوث المتبادل في مرحلة التعقيم. كما تحدد الوزارة اختبار فعالية مضادات الميكروبات AATCC 100. تربط يونيوم كل رمز SKU بكود القسم المعمول به، وتشحن بطاقة امتثال مُعدّة مسبقاً مع كل طلب. للمستشفيات الـ38 الشريكة التي تستخدم يونيوم حالياً، هذا يلغي تخبط الامتثال وقت التدقيق.' },
    { heading: 'معايير هيئة الغذاء والدواء لمضادات الميكروبات', body: 'تنظّم SFDA المنسوجات الطبية التي تدّعي خصائص مضادة للميكروبات. سكراب يُسوّق كمضاد للميكروبات بدون اعتماد SFDA هو مسؤولية امتثال. معالجات الفضة بالرش السطحي تزول عند 30 دورة. أيونات الفضة المرتبطة المعتمدة وفق AATCC 100 تصمد 80+ دورة. فرق التكلفة حوالي 40 ريالاً — علاوة تختفي مقابل معدل الاستبدال 3 أضعاف (180 ريال رخيص كل 8 أشهر مقابل 220-280 ريال فاخر يصمد 14 شهراً).' },
    { heading: 'علامات الجودة للنسيج من ساسو', body: 'تحدد علامة ساسو حد أدنى لثبات اللون ISO 105 الفئة 4 واحتفاظ بالشد 85% بعد 50 دورة. بوليستر-قطن 65/35 من يونيوم يتجاوز كليهما: ثبات لون الفئة +4 واحتفاظ بالشد 92% عند 80 دورة. تغطي ساسو أيضاً الثبات الأبعادي (انكماش 3% كحد أقصى)، مقاومة التكوّر (الدرجة 4 مارتنديل)، وانزلاق الدرزة (6 ملم عند 110 نيوتن). كل دفعة تخضع لاختبار طرف ثالث قبل الشحن.' },
    { heading: 'التحقق من AATCC 100', body: 'AATCC 100 يُلقّح عيّنة قماش بمستعمرة بكتيرية ويُقاس نسبة الانخفاض بعد 24 ساعة. المنسوجات الطبية تتطلب انخفاضاً 99%+. يونيوم تعتمد كل خط سكراب عند 30 و80 دورة. عند 30 دورة، الرش السطحي يفشل تحت 90%. عند 80 دورة، أيونات الفضة المرتبطة تحقق 99%+. لهذا تقدم يونيوم ضمان 18 شهراً. اطلب شهادة AATCC 100 عند 50+ دورة — مورد يقدم فقط نتائج التطبيق الأولي يبيع تسويقاً وليس هندسة.' }
  ],
  relatedPosts: ['medical-scrubs-evolution-saudi', 'healthcare-uniforms-infection-control'],
  references: [
    { name: 'Ministry of Health (Saudi)', url: 'https://www.moh.gov.sa' },
    { name: 'SFDA', url: 'https://www.sfda.gov.sa' },
    { name: 'SASO', url: 'https://www.saso.gov.sa' }
  ]
};
