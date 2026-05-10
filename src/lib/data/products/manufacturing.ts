import type { Product } from './index';

export const manufacturingProducts: Product[] = [
  {
    slug: 'coverall-fr',
    category: 'manufacturing', industry: 'manufacturing',
    nameEn: 'HRC2 FR Coverall',
    nameAr: 'أوفرول مقاوم للحريق',
    summary: 'Inherent FR cotton + ANSI 107 hi-vis bands — HRC2-rated for Saudi heat-soak industrial sites.',
    summaryAr: 'قطن ذاتي المقاومة للحريق + شرائط عاكسة ANSI 107 — مصنف HRC2 للمواقع الصناعية شديدة الحرارة في السعودية.',
    description: 'Heavy-duty HRC2 FR coverall in inherent FR cotton — the alternative to synthetic-treated FR that fails in Saudi heat-soak. ANSI 107 Class 2 hi-vis bands, triple-stitched seams, reinforced knees and elbows, per-garment serial number for HCIS audit.',
    descriptionAr: 'أوفرول قوي التحمل مصنف HRC2 من قطن مقاوم للحريق — البديل المثالي للأقمشة الصناعية المعالجة التي تفشل في البيئة السعودية شديدة الحرارة. مزود بأشرطة عاكسة من الفئة 2 وفق ANSI 107، درزات خياطة ثلاثية، ركب ومرافق معززة، ورقم تسلسلي لكل قطعة لتدقيق الهيئة العليا للأمن الصناعي (HCIS).',
    fabric: 'HRC2 Inherent FR Cotton',
    fabricAr: 'قطن ذاتي المقاومة للحريق مصنف HRC2',
    fabricWeight: '320gsm',
    fabricWeightAr: '320 جرام للمتر المربع',
    priceFrom: 580,
    image: 'products/manufacturing/coverall-fr',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    colors: ['Navy/Hi-Vis', 'Royal Blue/Hi-Vis', 'Khaki/Hi-Vis'],
    colorsAr: ['كحلي/عاكس', 'أزرق ملكي/عاكس', 'كاكي/عاكس'],
    features: ['HRC2 inherent FR', 'ANSI 107 Class 2', 'Per-garment serial', 'Reinforced stress points', '18-month warranty'],
    featuresAr: ['قطن ذاتي المقاومة HRC2', 'شرائط عاكسة ANSI 107 الفئة 2', 'رقم تسلسلي لكل قطعة', 'تعزيز نقاط الضغط', 'ضمان 18 شهراً'],
    compliance: ['HCIS', 'NFPA 70E', 'ANSI 107', 'SASO'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM HRC2 FR Coverall is the inherent flame-resistant cotton industrial garment that petrochemical and heavy-industry workers wear in HCIS-licensed Saudi facilities — combining ATPV ≥ 8 cal/cm² arc-flash protection with ANSI 107 Class 2 hi-vis and per-garment serial-number traceability.',
      ar: 'أفرول UNEOM HRC2 المقاوم للحريق هو القطعة الصناعية من قطن FR الذاتي التي يرتديها عمّال البتروكيماويات والصناعات الثقيلة في المنشآت السعودية المرخّصة من HCIS — يجمع حماية ARC ≥ 8 cal/cm² مع عاكسية ANSI 107 فئة 2 وتتبّع أرقام تسلسلية لكل قطعة.'
    },

    architectEquation: {
      en: 'Unlike treated-FR coveralls that fail HCIS 2024 audit after 25 industrial wash cycles when chemical FR leaches out, UNEOM\'s HRC2 uses inherent FR cotton 88/12 nylon — FR property in the fiber molecule itself, validated through 100+ wash cycles with retained ATPV ≥ 8 cal/cm².',
      ar: 'على خلاف أفرولات FR المعالَجة التي تفشل في تدقيق HCIS 2024 بعد 25 دورة غسيل صناعي عند تسرّب FR الكيميائي، UNEOM HRC2 يستخدم قطن FR ذاتي 88/12 نايلون — خاصّية FR في جزيء الليف نفسه، معتمدة عبر 100+ دورة غسيل مع الاحتفاظ بـATPV ≥ 8 cal/cm².'
    },

    materialScience: {
      en: 'The fabric core is inherent FR cotton 88/12 nylon — flame resistance integrated into the fiber molecule during manufacture, not a chemical coating applied post-weave. This distinction is operationally critical: chemical FR treatments leach out during industrial laundering (60–90°C with chlorinated detergents), with measurable ATPV degradation beginning around wash cycle 25 and complete failure typically by cycle 40. Inherent FR cotton retains its full flame-resistance property through 100+ cycles because the molecular structure itself is FR — there is no coating to wash away. ATPV ≥ 8 cal/cm² (NFPA 70E HRC2) is verified per production batch through independent laboratory testing. The 320 GSM weight provides arc-flash protection while remaining breathable for Saudi 50°C plant-floor heat-soak conditions.',
      ar: 'قلب القماش هو قطن FR ذاتي 88/12 نايلون — مقاومة الحريق مُدمَجة في جزيء الليف خلال التصنيع، ليست طلاءً كيميائياً مطبَّقاً بعد النسج. هذا التمييز حرج تشغيلياً: معالَجات FR الكيميائية تتسرّب خلال الغسيل الصناعي (60-90°م بمنظّفات مكلورة)، مع تدهور ATPV قابل للقياس يبدأ حول دورة الغسيل 25 وفشل تامّ عادةً بحلول الدورة 40. قطن FR الذاتي يحتفظ بخاصّية مقاومة الحريق الكاملة خلال 100+ دورة لأنّ البنية الجزيئية نفسها FR — لا يوجد طلاء ينغسل. ATPV ≥ 8 cal/cm² (NFPA 70E HRC2) متحقّق منه لكل دفعة إنتاج عبر اختبار مختبري مستقلّ. وزن 320 جم/م² يُوفّر حماية ARC مع البقاء قابلاً للتنفّس لظروف انغماس الحرارة 50°م على أرضية المصنع السعودي.'
    },

    useCase: {
      en: 'Designed for Saudi Aramco contractor crews, SABIC affiliate plant operators, Royal Commission heavy-industry tenants in Jubail and Yanbu, and any HCIS-licensed petrochemical or industrial facility requiring NFPA 70E HRC2 PPE. The integrated ANSI 107 Class 2 hi-vis bands eliminate the layered-vest failure mode (heat-trap + ignition layer). Per-garment serial number tracks wash cycles for the annual ARC re-test compliance audit.',
      ar: 'مصمَّم لطواقم مقاولي أرامكو السعودية، مشغّلي مصانع شركات تابعة لسابك، مستأجري الصناعات الثقيلة للهيئة الملكية في الجبيل وينبع، وأيّ منشأة بتروكيماوية أو صناعية مرخّصة من HCIS تتطلّب PPE بـNFPA 70E HRC2. أشرطة العاكسية المدمجة ANSI 107 فئة 2 تُلغي وضع فشل الدرع المكوَّم (حابس الحرارة + طبقة الاشتعال). الرقم التسلسلي لكل قطعة يتتبّع دورات الغسيل لتدقيق الالتزام السنوي لإعادة اختبار ARC.'
    },

    comparisonMatrix: {
      titleEn: 'HRC2 FR Coverall vs market alternatives',
      titleAr: 'مقارنة أفرول HRC2 FR مع بدائل السوق',
      columnsEn: ['UNEOM HRC2', 'Treated-FR Standard', 'Marketing-Only "FR"'],
      columnsAr: ['UNEOM HRC2', 'FR معالَج قياسي', '«FR» تسويقي فقط'],
      rows: [
        { dimensionEn: 'Fabric type', dimensionAr: 'نوع القماش', valuesEn: ['Inherent FR cotton 88/12 nylon', 'Treated FR cotton 100%', 'Polyester w/ chemical FR'], valuesAr: ['قطن FR ذاتي 88/12 نايلون', 'قطن FR معالَج 100%', 'بوليستر بـFR كيميائي'] },
        { dimensionEn: 'GSM', dimensionAr: 'الوزن', valuesEn: ['320', '290', '220'], valuesAr: ['320', '290', '220'] },
        { dimensionEn: 'ATPV rating (NFPA 70E)', dimensionAr: 'تصنيف ATPV (NFPA 70E)', valuesEn: ['≥ 8 cal/cm² (HRC2)', '4–6 cal/cm² (HRC1)', 'Untested / unverifiable'], valuesAr: ['≥ 8 cal/cm² (HRC2)', '4–6 cal/cm² (HRC1)', 'غير مختبَر / غير قابل للتحقّق'] },
        { dimensionEn: 'Hi-vis integration', dimensionAr: 'تكامل العاكسية', valuesEn: ['ANSI 107 Class 2 thermally bonded', 'ANSI 107 Class 1 sewn-on', 'None'], valuesAr: ['ANSI 107 فئة 2 مرتبط حرارياً', 'ANSI 107 فئة 1 مخيط', 'لا يوجد'] },
        { dimensionEn: 'Wash cycle limit (ATPV retained)', dimensionAr: 'حدّ دورة الغسيل (ATPV محفوظ)', valuesEn: ['100+ industrial cycles', '25–40 cycles', '<20 cycles'], valuesAr: ['100+ دورة صناعية', '25-40 دورة', '<20 دورة'] },
        { dimensionEn: 'Per-garment traceability', dimensionAr: 'تتبّع كل قطعة', valuesEn: ['Serial + wash log + ARC re-test', 'Batch only', 'None'], valuesAr: ['تسلسلي + سجل غسيل + إعادة اختبار ARC', 'دفعة فقط', 'لا يوجد'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['18 months', '6 months', 'None'], valuesAr: ['18 شهراً', '6 أشهر', 'لا يوجد'] },
        { dimensionEn: 'Price (SAR)', dimensionAr: 'السعر (ريال)', valuesEn: ['580', '290', '150'], valuesAr: ['580', '290', '150'] },
        { dimensionEn: 'Replacement after ARC incident', dimensionAr: 'الاستبدال بعد حادث ARC', valuesEn: ['Same garment 580', '8× = 2,320+ + insurance', '8× + dispute + worker harm'], valuesAr: ['نفس القطعة 580', '8× = 2,320+ + تأمين', '8× + نزاع + ضرر للعامل'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Cold pre-wash', description: 'Cold-water pre-wash to remove surface contamination before hot industrial laundering.' },
        { step: 'Industrial wash 60°C max', description: 'Hot-water wash at 60°C maximum with phosphate-free detergent. Avoid bleach above 200 ppm chlorine.' },
        { step: 'No fabric softener', description: 'Fabric softener coats the fiber surface and can interfere with FR performance. Use only prescribed institutional detergent.' },
        { step: 'Tumble dry medium', description: 'Tumble dry on medium (max 70°C). Avoid prolonged high-heat drying.' },
        { step: 'Wash count log', description: 'Each garment ships with a serial-numbered wash-count log book. Update after each industrial wash cycle.' },
        { step: 'Annual ARC re-test', description: 'At month 11 of service, coordinate with site safety officer for 2% random-sample ARC re-testing per HCIS 2024 audit protocol.' },
        { step: 'Removal at ATPV failure', description: 'Coveralls failing to retain ATPV ≥ 8 cal/cm² are removed from circulation regardless of visual condition. Replacement under 18-month warranty if cycle count is below 100.' }
      ],
      ar: [
        { step: 'غسيل بارد مسبق', description: 'غسيل بماء بارد مسبق لإزالة التلوّث السطحي قبل الغسيل الصناعي الساخن.' },
        { step: 'غسيل صناعي حدّ أقصى 60°م', description: 'غسيل بالماء الساخن عند 60°م كحدّ أقصى بمنظّف خالٍ من الفوسفات. تجنّب المُبيِّض فوق 200 جزء في المليون كلور.' },
        { step: 'لا منعّم قماش', description: 'منعّم القماش يُغطّي سطح الألياف ويمكن أن يتداخل مع أداء FR. استخدم فقط المنظّف المؤسّسي الموصوف.' },
        { step: 'تجفيف بالأسطوانة متوسط', description: 'جفّف بالأسطوانة على متوسّط (أقصى 70°م). تجنّب التجفيف المطوَّل بحرارة عالية.' },
        { step: 'سجل عدد الغسلات', description: 'كل قطعة تُشحَن بدفتر سجل عدد غسلات بترقيم تسلسلي. حدّث بعد كل دورة غسيل صناعي.' },
        { step: 'إعادة اختبار ARC السنوية', description: 'في الشهر 11 من الخدمة، نسّق مع مسؤول السلامة في الموقع لإعادة اختبار ARC لعيّنة عشوائية 2% وفق بروتوكول تدقيق HCIS 2024.' },
        { step: 'الإزالة عند فشل ATPV', description: 'الأفرولات التي تفشل في الاحتفاظ بـATPV ≥ 8 cal/cm² تُخرَج من التداول بغضّ النظر عن الحالة البصرية. الاستبدال تحت ضمان 18 شهراً إذا كان عدد الدورات تحت 100.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Site — 50–199 units', nameAr: 'موقع — 50-199 قطعة', priceFrom: 595, fabricEn: 'Inherent FR cotton 88/12 nylon', fabricAr: 'قطن FR ذاتي 88/12 نايلون', warrantyMonths: 18, summaryEn: 'Standard programme; 21-day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 21 يوماً.' },
      { nameEn: 'Plant — 200–999 units', nameAr: 'مصنع — 200-999 قطعة', priceFrom: 580, fabricEn: 'Reserved batch + ARC test + audit pack', fabricAr: 'دفعة محجوزة + اختبار ARC + ملف تدقيق', warrantyMonths: 18, summaryEn: 'Reserved batch + per-garment serial + HCIS audit pack.', summaryAr: 'دفعة محجوزة + تسلسلي لكل قطعة + ملف تدقيق HCIS.' },
      { nameEn: 'Enterprise — 1,000+ units', nameAr: 'مؤسّسي — 1,000+ قطعة', priceFrom: 540, fabricEn: 'Custom Pantone + dedicated production', fabricAr: 'بانتون مخصّص + إنتاج مخصّص', warrantyMonths: 18, summaryEn: 'Site-specific Pantone + annual ARC re-test programme + replacement SLA.', summaryAr: 'بانتون خاصّ بالموقع + برنامج إعادة اختبار ARC السنوي + اتّفاقية مستوى خدمة للاستبدال.' }
    ],

    expandedFaqs: [
      { qEn: 'Why does inherent FR cotton outlast treated FR?', qAr: 'لماذا يدوم قطن FR الذاتي أطول من FR المعالَج؟', aEn: 'Treated FR is a chemical coating applied to standard cotton after weaving. Industrial laundering at 60–90°C with chlorinated detergents leaches the coating away — measurable ATPV degradation begins around wash cycle 25, complete failure typically by cycle 40. Inherent FR cotton has the FR property built into the fiber molecule itself (the cellulose-modified fiber is permanently flame-resistant). 100+ wash cycles with retained ATPV ≥ 8 cal/cm². The fabric premium is approximately 2× higher than treated FR, but the wash-cycle life is 4× longer — and the consequence of wash-cycle failure (ARC incident with degraded protection) is unrecoverable.', aAr: 'الـFR المعالَج هو طلاء كيميائي مطبَّق على قطن قياسي بعد النسج. الغسيل الصناعي عند 60-90°م بمنظّفات مكلورة يُسرّب الطلاء — تدهور ATPV قابل للقياس يبدأ حول دورة الغسيل 25، فشل تامّ عادةً بحلول الدورة 40. قطن FR الذاتي لديه خاصّية FR مبنيّة في جزيء الليف نفسه (الليف المُعدَّل بالسلولوز مقاوم للحريق دائماً). 100+ دورة غسيل مع الاحتفاظ بـATPV ≥ 8 cal/cm². علاوة القماش حوالي 2× أعلى من FR المعالَج، لكن عمر دورة الغسيل أطول بـ4× — وعاقبة فشل دورة الغسيل (حادث ARC بحماية مُتدهوِرة) غير قابلة للاسترداد.' },
      { qEn: 'What is the MOQ for the HRC2 FR coverall?', qAr: 'ما الحدّ الأدنى للطلب لأفرول HRC2 FR؟', aEn: 'Programme MOQ is 50 units. HCIS-licensed sites typically order 200+ units to attract reserved-batch fabric and the annual ARC re-test programme. Site programmes above 1,000 units include site-specific Pantone customisation.', aAr: 'الحدّ الأدنى للبرنامج 50 قطعة. مواقع HCIS المرخّصة عادةً تطلب 200+ قطعة لجذب دفعة قماش محجوزة وبرنامج إعادة اختبار ARC السنوي. برامج المواقع فوق 1,000 قطعة تشمل تخصيص بانتون خاصّ بالموقع.' },
      { qEn: 'How is the per-garment serial number used in HCIS audits?', qAr: 'كيف يُستخدَم الرقم التسلسلي لكل قطعة في تدقيقات HCIS؟', aEn: 'Each UNEOM HRC2 coverall ships with a heat-bonded serial number (visible on inside left chest, durable through 100+ wash cycles) and a wash-count log book. HCIS 2024 audits sample 2% of active coveralls annually for independent ATPV re-testing — the serial number ties the test result back to the specific garment\'s wash history. UNEOM coordinates the annual sampling with the site safety officer and ships test results to both the site and HCIS audit records.', aAr: 'كل أفرول UNEOM HRC2 يُشحَن برقم تسلسلي مُلصَق حرارياً (مرئي على الصدر اليسرى الداخلي، متين خلال 100+ دورة غسيل) ودفتر سجل عدد الغسلات. تدقيقات HCIS 2024 تأخذ عيّنة 2% من الأفرولات النشطة سنوياً لإعادة اختبار ATPV مستقلّ — الرقم التسلسلي يربط نتيجة الاختبار بتاريخ غسيل القطعة المحدّد. UNEOM تُنسّق العيّنة السنوية مع مسؤول السلامة في الموقع وتشحن نتائج الاختبار إلى كلٍّ من الموقع وسجلّات تدقيق HCIS.' },
      { qEn: 'Can the FR coverall include the site\'s logo and worker name?', qAr: 'هل يمكن أن يشمل أفرول FR شعار الموقع واسم العامل؟', aEn: 'Yes. UNEOM uses thermal-bonded patches that maintain ATPV rating — sewn-on patches risk introducing non-FR thread that could ignite. Customisation includes site logo (chest), worker name (back), and HCIS-required role identification (front). All bonded patches are validated through ATPV re-testing per production batch.', aAr: 'نعم. تستخدم UNEOM رقعاً مُلصَقة حرارياً تحافظ على تصنيف ATPV — الرقع المخيطة تخاطر بإدخال خيط غير FR يمكن أن يشتعل. التخصيص يشمل شعار الموقع (الصدر)، اسم العامل (الظهر)، وتعريف الدور المطلوب من HCIS (الأمام). كل الرقع المرتبطة معتمدة عبر إعادة اختبار ATPV لكل دفعة إنتاج.' },
      { qEn: 'What is the lead time for a 500-unit coverall order?', qAr: 'ما زمن التسليم لطلب 500 قطعة من الأفرول؟', aEn: 'Repeat orders against an established programme ship in 14–21 days. New programme launches require 35–42 days end-to-end (21 days for ATPV-validated sample production, 14 days for sized full-batch production with serial numbering, 7 days for delivery and HCIS audit-pack assembly). Programmes above 10,000 units split across two production runs to allow fresh batch ARC testing on each.', aAr: 'الطلبات المتكرّرة على برنامج موجود تُشحَن في 14-21 يوماً. إطلاق البرامج الجديدة يتطلّب 35-42 يوماً من البداية للنهاية (21 يوماً لإنتاج عيّنة معتمدة لـATPV، 14 يوماً للإنتاج الكامل المُقاس بترقيم تسلسلي، 7 أيام للتسليم وتجميع ملف تدقيق HCIS). البرامج فوق 10,000 قطعة تُقسَم على دورتي إنتاج لاختبار ARC على دفعة جديدة لكل منهما.' }
    ],

    numericAnchors: { moqUnits: 50, leadTimeDaysFrom: 14, leadTimeDaysTo: 21, warrantyMonths: 18, washCyclesValidated: 100 }
  },
  {
    slug: 'hi-vis-jacket',
    category: 'manufacturing', industry: 'manufacturing',
    nameEn: 'Hi-Vis Jacket',
    nameAr: 'جاكيت عاكس',
    summary: 'ANSI 107 Class 3 weatherproof hi-vis jacket — for ramp ops, construction, and outdoor industrial work.',
    summaryAr: 'جاكيت عاكس الفئة 3 وفق ANSI 107 ومقاوم للطقس — لعمليات المدرج، البناء، والأعمال الصناعية الخارجية.',
    description: 'Weatherproof hi-vis outer layer for ramp operations, construction sites, and outdoor industrial work. ANSI 107 Class 3 reflective coverage, weatherproof seam-sealed shell, fleece-lined for Saudi cold mornings.',
    descriptionAr: 'طبقة خارجية عاكسة ومقاومة للطقس للعمليات الأرضية في المطارات، مواقع البناء، والأعمال الصناعية الخارجية. تغطية عاكسة من الفئة 3 وفق ANSI 107، غلاف مقاوم للطقس بدرزات محكمة، ومُبطن بالصوف لصباحات السعودية الباردة.',
    fabric: 'Reflective Hi-Vis Polyester',
    fabricAr: 'بوليستر عاكس',
    fabricWeight: '200gsm',
    fabricWeightAr: '200 جرام للمتر المربع',
    priceFrom: 420,
    image: 'products/manufacturing/hi-vis-jacket',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    colors: ['Hi-Vis Yellow', 'Hi-Vis Orange'],
    colorsAr: ['أصفر عاكس', 'برتقالي عاكس'],
    features: ['ANSI 107 Class 3', 'Seam-sealed shell', 'Fleece-lined option', 'Replaceable bands', '18-month warranty'],
    featuresAr: ['تغطية عاكسة ANSI 107 الفئة 3', 'غلاف محكم الدرزات', 'خيار تبطين بالصوف', 'أشرطة قابلة للاستبدال', 'ضمان 18 شهراً'],
    compliance: ['ANSI 107', 'SASO'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Hi-Vis Jacket is the ANSI 107 Class 3 weatherproof outer-layer garment that ramp operators, construction crews, and outdoor industrial workers wear in HCIS-licensed Saudi sites — with seam-sealed weatherproof shell, replaceable hi-vis bands, and optional fleece liner for the Saudi cold-morning shift.',
      ar: 'جاكيت UNEOM العاكس هو القطعة الخارجية المقاومة للطقس بـANSI 107 فئة 3 التي يرتديها مشغّلو المدرج، طواقم البناء، والعمّال الصناعيون في الخارج في المواقع السعودية المرخّصة من HCIS — بغلاف مقاوم للطقس بدرزات محكمة، أشرطة عاكسة قابلة للاستبدال، وبطانة فليس اختيارية لورديات الصباح الباردة في السعودية.'
    },

    architectEquation: {
      en: 'Unlike Class 1 vests inadequate for ramp and construction visibility under afternoon glare, the UNEOM Hi-Vis Jacket delivers ANSI 107 Class 3 reflective coverage with seam-sealed weatherproof construction — replaceable bands extend service life past 24 months in active site rotation.',
      ar: 'على خلاف سترات الفئة 1 غير الملائمة لرؤية المدرج والبناء تحت وهج الظهيرة، يُقدّم جاكيت UNEOM العاكس تغطية عاكسة ANSI 107 فئة 3 ببناء مقاوم للطقس بدرزات محكمة — أشرطة قابلة للاستبدال تُمدّد العمر التشغيلي ما بعد 24 شهراً في تدوير الموقع النشط.'
    },

    materialScience: {
      en: 'ANSI 107 Class 3 (the highest visibility class) requires 1,240 sq inches of background fluorescent material plus 310 sq inches of retroreflective tape — substantially more than Class 2 (775 sq in / 201 sq in) or Class 1 (217 sq in / 155 sq in). At 2,200m equivalent UV intensity in Saudi summer afternoons (roughly Class 3 visibility threshold), Class 1 vests effectively disappear in glare. The seam-sealed weatherproof construction handles the rare-but-disruptive Saudi rain events (winter Riyadh, Tabuk, Asir winter rains) and the consistent KAIA / KKIA ramp dew exposure. Replaceable hi-vis bands address the dominant failure mode — band fade from UV before shell failure — extending jacket service life from 12 to 24+ months by replacing only the band when fade is detected.',
      ar: 'ANSI 107 فئة 3 (أعلى فئة رؤية) تتطلّب 1,240 بوصة مربّعة من المواد الفلورية الخلفية بالإضافة إلى 310 بوصة مربّعة من شريط عاكس متراجع — أكثر بكثير من الفئة 2 (775 بوصة² / 201 بوصة²) أو الفئة 1 (217 بوصة² / 155 بوصة²). عند كثافة UV معادلة لـ2,200م في عصاري الصيف السعودي (تقريباً عتبة رؤية الفئة 3)، سترات الفئة 1 تختفي فعلياً في الوهج. البناء المقاوم للطقس بدرزات محكمة يتعامل مع أحداث المطر السعودية النادرة-لكن-المُعطِّلة (شتاء الرياض، تبوك، أمطار شتاء عسير) والتعرّض المستمرّ لندى مدارج KAIA / KKIA. الأشرطة العاكسة القابلة للاستبدال تعالج وضع الفشل المهيمن — بهتان الشريط من UV قبل فشل الغلاف — مُمدّدةً العمر التشغيلي للجاكيت من 12 إلى 24+ شهراً باستبدال الشريط فقط عند اكتشاف البهتان.'
    },

    useCase: {
      en: 'Designed for KAIA/KKIA/RUH ramp ground-handling crews, NEOM and Red Sea Project construction perimeters, Saudi Aramco contractor outdoor work, and any HCIS-licensed industrial site requiring Class 3 visibility. Often layered over the HRC2 FR coverall for the integrated FR+Hi-Vis specification HCIS 2024 audits expect — though for petrochemical sites, the integrated FR coverall (rather than separate jacket) is the recommended architecture.',
      ar: 'مصمَّم لطواقم المناولة الأرضية في مدارج KAIA/KKIA/RUH، محيطات إنشاء نيوم ومشروع البحر الأحمر، عمل أرامكو السعودية الخارجي للمقاولين، وأيّ موقع صناعي مرخّص من HCIS يتطلّب رؤية الفئة 3. غالباً يُطبَّق فوق أفرول HRC2 FR لمواصفة FR+عاكسية المدمجة التي تتوقّعها تدقيقات HCIS 2024 — لكن للمواقع البتروكيماوية، الأفرول FR المتكامل (بدلاً من جاكيت منفصل) هو المعمار المُوصَى به.'
    },

    comparisonMatrix: {
      titleEn: 'Hi-Vis Jacket vs market alternatives',
      titleAr: 'مقارنة الجاكيت العاكس مع بدائل السوق',
      columnsEn: ['UNEOM Class 3', 'Standard Class 2', 'Cheap Class 1'],
      columnsAr: ['UNEOM فئة 3', 'فئة 2 قياسي', 'فئة 1 رخيص'],
      rows: [
        { dimensionEn: 'ANSI 107 class', dimensionAr: 'فئة ANSI 107', valuesEn: ['Class 3 (full visibility)', 'Class 2', 'Class 1'], valuesAr: ['الفئة 3 (رؤية كاملة)', 'الفئة 2', 'الفئة 1'] },
        { dimensionEn: 'Background fluorescent', dimensionAr: 'الخلفية الفلورية', valuesEn: ['1,240 sq in', '775 sq in', '217 sq in'], valuesAr: ['1,240 بوصة²', '775 بوصة²', '217 بوصة²'] },
        { dimensionEn: 'Retroreflective tape', dimensionAr: 'شريط عاكس متراجع', valuesEn: ['310 sq in (replaceable)', '201 sq in (sewn-on)', '155 sq in (printed)'], valuesAr: ['310 بوصة² (قابل للاستبدال)', '201 بوصة² (مخيط)', '155 بوصة² (مطبوع)'] },
        { dimensionEn: 'Weatherproof', dimensionAr: 'مقاوم للطقس', valuesEn: ['Seam-sealed shell', 'Water-resistant', 'Not weatherproof'], valuesAr: ['غلاف بدرزات محكمة', 'مقاوم للماء', 'غير مقاوم للطقس'] },
        { dimensionEn: 'Liner option', dimensionAr: 'خيار البطانة', valuesEn: ['Fleece-lined available', 'Single-layer only', 'Single-layer only'], valuesAr: ['فليس متاح', 'طبقة واحدة فقط', 'طبقة واحدة فقط'] },
        { dimensionEn: 'Service life', dimensionAr: 'العمر التشغيلي', valuesEn: ['24+ months (band-replace)', '12 months', '6 months'], valuesAr: ['24+ شهراً (استبدال الأشرطة)', '12 شهراً', '6 أشهر'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['18 months', '6 months', 'None'], valuesAr: ['18 شهراً', '6 أشهر', 'لا يوجد'] },
        { dimensionEn: 'Price (SAR)', dimensionAr: 'السعر (ريال)', valuesEn: ['420', '210', '95'], valuesAr: ['420', '210', '95'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Spot-clean preferred', description: 'Spot-clean for surface contamination. Full machine wash only when necessary — frequent washing accelerates band fade.' },
        { step: 'Cold gentle wash', description: 'Cold-water gentle cycle with mild detergent. Hot water and harsh detergents accelerate retroreflective band degradation.' },
        { step: 'No bleach', description: 'Bleach destroys both fluorescent fabric and retroreflective microspheres. Never use bleach.' },
        { step: 'Hang dry', description: 'Hang dry only — no tumble drying. Heat damages reflective tape adhesion.' },
        { step: 'Band fade inspection', description: 'Quarterly visual inspection. Fluorescent fabric below 50% saturation or reflective tape with visible cracking triggers band replacement.' },
        { step: 'Band replacement', description: 'Replaceable band kit (UNEOM-supplied) restores Class 3 compliance for an additional 12 months. ~85 SAR per band kit vs 420 SAR for full jacket replacement.' }
      ],
      ar: [
        { step: 'التنظيف الموضعي مفضّل', description: 'نظّف موضعياً للتلوّث السطحي. الغسيل الكامل بالغسّالة فقط عند الضرورة — الغسيل المتكرّر يُسرّع بهتان الشريط.' },
        { step: 'غسيل بارد لطيف', description: 'دورة لطيفة بالماء البارد بمنظّف خفيف. الماء الساخن والمنظّفات القاسية تُسرّع تدهور الشريط العاكس المتراجع.' },
        { step: 'لا مُبيِّض', description: 'المُبيِّض يُتلف القماش الفلوري والكرات الدقيقة العاكسة المتراجعة. لا تستخدم مُبيِّض أبداً.' },
        { step: 'تجفيف بالتعليق', description: 'تجفيف بالتعليق فقط — لا تجفيف بالأسطوانة. الحرارة تُتلف التصاق الشريط العاكس.' },
        { step: 'فحص بهتان الشريط', description: 'فحص بصري فصلي. القماش الفلوري دون 50% تشبّع أو الشريط العاكس بتشقّق مرئي يستوجب استبدال الشريط.' },
        { step: 'استبدال الشريط', description: 'طقم شريط قابل للاستبدال (يُوفّره UNEOM) يستعيد التزام الفئة 3 لـ12 شهراً إضافياً. ~85 ريالاً لطقم الشريط مقابل 420 ريالاً لاستبدال الجاكيت الكامل.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Site — 25–99 units', nameAr: 'موقع — 25-99 قطعة', priceFrom: 435, fabricEn: 'Class 3 hi-vis polyester', fabricAr: 'بوليستر عاكس فئة 3', warrantyMonths: 18, summaryEn: 'Standard programme; 14-day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 14 يوماً.' },
      { nameEn: 'Plant — 100–499 units', nameAr: 'مصنع — 100-499 قطعة', priceFrom: 420, fabricEn: 'Reserved batch + replaceable band kits', fabricAr: 'دفعة محجوزة + أطقم أشرطة قابلة للاستبدال', warrantyMonths: 18, summaryEn: 'Reserved batch + replacement-band kits included for first 24 months.', summaryAr: 'دفعة محجوزة + أطقم أشرطة استبدال مشمولة لأوّل 24 شهراً.' },
      { nameEn: 'Enterprise — 500+ units', nameAr: 'مؤسّسي — 500+ قطعة', priceFrom: 395, fabricEn: 'Site-customised + fleece-liner option', fabricAr: 'مخصّص للموقع + خيار بطانة فليس', warrantyMonths: 18, summaryEn: 'Site logo + worker name embroidery + fleece-liner option per role.', summaryAr: 'شعار الموقع + تطريز اسم العامل + خيار بطانة فليس لكل دور.' }
    ],

    expandedFaqs: [
      { qEn: 'When is Class 3 visibility required vs Class 2?', qAr: 'متى تكون رؤية الفئة 3 مطلوبة مقابل الفئة 2؟', aEn: 'ANSI 107 specifies Class 3 for: (1) high-speed traffic environments (above 50 mph / 80 km/h); (2) high-clutter visual backgrounds; (3) operations where workers are 360° exposed to traffic or equipment movement. Class 2 is acceptable for parking-lot, factory-floor, and low-speed environments. For Saudi airport ramp operations and active-traffic construction perimeters, Class 3 is the audit-defensible choice.', aAr: 'ANSI 107 يُحدّد الفئة 3 لـ: (1) بيئات حركة عالية السرعة (فوق 50 ميلاً/ساعة / 80 كم/ساعة)؛ (2) خلفيات بصرية عالية الفوضى؛ (3) العمليات حيث العمّال مُعرَّضون 360° لحركة المرور أو المعدّات. الفئة 2 مقبولة لمواقف السيّارات، أرضية المصنع، والبيئات منخفضة السرعة. لعمليات مدارج المطارات السعودية ومحيطات الإنشاء النشطة، الفئة 3 هي الخيار القابل للدفاع تدقيقياً.' },
      { qEn: 'Can I replace just the hi-vis bands instead of buying a new jacket?', qAr: 'هل يمكنني استبدال الأشرطة العاكسة فقط بدلاً من شراء جاكيت جديد؟', aEn: 'Yes — this is one of the operational advantages of the UNEOM design. Most jacket end-of-life is driven by band fade (UV degradation of retroreflective microspheres), not shell failure. UNEOM ships replaceable band kits at ~85 SAR per kit, restoring full Class 3 compliance and extending jacket life by 12+ months. Compared to the 420 SAR full-jacket replacement cost, band replacement saves 80% on per-cycle costs.', aAr: 'نعم — هذه إحدى الميزات التشغيلية لتصميم UNEOM. معظم نهاية عمر الجاكيت مدفوعة ببهتان الشريط (تدهور UV للكرات الدقيقة العاكسة المتراجعة)، ليس فشل الغلاف. تشحن UNEOM أطقم أشرطة قابلة للاستبدال بـ~85 ريالاً لطقم، مُستعيدةً الالتزام الكامل بالفئة 3 ومُمدّدةً عمر الجاكيت بـ12+ شهراً. مقارنة بكلفة استبدال الجاكيت الكامل 420 ريالاً، استبدال الشريط يُوفّر 80% من تكاليف كل دورة.' },
      { qEn: 'Is the fleece liner removable or fixed?', qAr: 'هل بطانة الفليس قابلة للإزالة أم ثابتة؟', aEn: 'Removable. The fleece liner attaches via internal zipper and full-length button placket — adds for cold-weather Riyadh winter, Tabuk year-round, and Asir winter shifts; removes for hot-weather summer operations. The liner is a separately-orderable component, not a permanent feature, allowing seasonal flexibility.', aAr: 'قابلة للإزالة. بطانة الفليس تُلصق عبر سحّاب داخلي وصفّ أزرار بطول كامل — تُضاف لشتاء الرياض البارد، تبوك على مدار السنة، وورديات شتاء عسير؛ تُزال لعمليات الصيف الحارّة. البطانة مكوّن قابل للطلب بشكل منفصل، ليست ميزة دائمة، مُتيحةً مرونة موسمية.' },
      { qEn: 'What is the MOQ for the Hi-Vis Jacket?', qAr: 'ما الحدّ الأدنى للطلب للجاكيت العاكس؟', aEn: 'Programme MOQ is 25 units. Construction-site contractors and ramp operators typically order 100+ units to attract reserved-batch fabric and the replacement-band-kit programme. NEOM and Red Sea Project contractor programmes start at 500+ units with site-specific Pantone customisation.', aAr: 'الحدّ الأدنى للبرنامج 25 قطعة. مقاولو مواقع البناء ومشغّلو المدرج عادةً يطلبون 100+ قطعة لجذب دفعة قماش محجوزة وبرنامج طقم أشرطة الاستبدال. برامج مقاولي نيوم ومشروع البحر الأحمر تبدأ من 500+ قطعة بتخصيص بانتون خاصّ بالموقع.' },
      { qEn: 'Should petrochemical sites use the standalone hi-vis jacket or the integrated FR coverall?', qAr: 'هل يجب على المواقع البتروكيماوية استخدام الجاكيت العاكس المنفصل أم الأفرول FR المتكامل؟', aEn: 'For HCIS-licensed petrochemical sites, the integrated FR coverall is the recommended architecture — single-garment FR + hi-vis avoids the layered failure modes (heat-trap, ignition layer, vest-shift in arc-flash). The standalone hi-vis jacket is appropriate for sites where FR is not required (general construction, ramp ground-handling, logistics). UNEOM provides both architectures because the answer depends on site classification, not preference.', aAr: 'للمواقع البتروكيماوية المرخّصة من HCIS، الأفرول FR المتكامل هو المعمار المُوصَى به — قطعة واحدة FR + عاكسية تتجنّب أوضاع الفشل المكوَّمة (حابس الحرارة، طبقة الاشتعال، تحوّل السترة في الومضة الكهربائية). الجاكيت العاكس المنفصل ملائم للمواقع التي لا تتطلّب FR (البناء العامّ، المناولة الأرضية للمدرج، اللوجستيات). تُوفّر UNEOM كلا المعمارَين لأنّ الإجابة تعتمد على تصنيف الموقع، ليس التفضيل.' }
    ],

    numericAnchors: { moqUnits: 25, leadTimeDaysFrom: 14, leadTimeDaysTo: 21, warrantyMonths: 18 }
  }
];
