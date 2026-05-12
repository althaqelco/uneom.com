import type { Product } from './index';

export const securityProducts: Product[] = [
  {
    slug: 'security-tactical-set',
    category: 'security', industry: 'security',
    nameEn: 'Security Tactical Set',
    nameAr: 'طقم تكتيكي أمني',
    summary: 'Performance polyester tactical shirt + ripstop cargo pants + integrated vest mount — HCIS-aligned.',
    summaryAr: 'قميص تكتيكي من البوليستر عالي الأداء + بنطلون كارجو مانع للتمزق + قاعدة لتركيب السترة — متوافق مع HCIS.',
    description: 'A tactical security uniform set engineered to the HCIS 2024 spec. Performance polyester ripstop with integrated ballistic vest mount, modular load-carriage, radio-routing channels, and 12-hour shift comfort at 45°C.',
    descriptionAr: 'طقم زي أمني تكتيكي مصمم وفق مواصفات الهيئة العليا للأمن الصناعي لعام 2024. بوليستر مقاوم للتمزق عالي الأداء مع قاعدة مدمجة لتركيب السترة الواقية، نظام حمل معدات قياسي، قنوات لتمرير أسلاك الراديو، ويوفر راحة قصوى لـ 12 ساعة في درجة حرارة تصل لـ 45 مئوية.',
    fabric: 'Performance Polyester Ripstop',
    fabricAr: 'بوليستر أداء مانع للتمزق (Ripstop)',
    fabricWeight: '220gsm',
    fabricWeightAr: '220 جرام للمتر المربع',
    priceFrom: 680,
    image: 'products/security/tactical-set',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Navy', 'Black', 'Khaki'],
    colorsAr: ['كحلي', 'أسود', 'كاكي'],
    features: ['HCIS 2024 spec', 'Vest mount integration', 'Radio routing', 'Modular load-carriage', '18-month warranty'],
    featuresAr: ['مواصفات HCIS لعام 2024', 'دمج لسترة الحماية', 'مسارات لراديو الاتصال', 'نظام حمل معدات معياري', 'ضمان 18 شهراً'],
    compliance: ['HCIS', 'SASO'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Security Tactical Set is the HCIS 2024-spec compliant tactical uniform that licensed Saudi security personnel wear for active-duty perimeter, escort, and event-security operations — with internal NIJ IIIA-compatible vest mount, internal radio harness routing, and HCIS modular load-carriage attachment points.',
      ar: 'الطقم التكتيكي الأمني من UNEOM هو الزي التكتيكي الملتزم بمواصفات HCIS 2024 الذي يرتديه أفراد الأمن السعودي المرخّصون لعمليات المحيط النشطة، المرافقة، وأمن الفعاليات — بحامل درع داخلي متوافق مع NIJ IIIA، توجيه أحزمة اتّصال داخلي، ونقاط ربط حمل وحدات معيارية لـHCIS.'
    },

    architectEquation: {
      en: 'Unlike pre-2024 security uniforms with externally-attached vests that fail HCIS audit on three points, the UNEOM Security Tactical Set integrates vest-mount infrastructure into the garment itself — performance polyester ripstop 220 GSM with internal radio routing and modular attachment, 12-hour comfort at 45°C ambient.',
      ar: 'على خلاف الأزياء الأمنية ما قبل 2024 بدروع مُلصَقة خارجياً التي تفشل في تدقيق HCIS في ثلاث نقاط، الطقم التكتيكي الأمني من UNEOM يدمج البنية التحتية لحامل الدرع في القطعة نفسها — بوليستر أداء ريبستوب 220 جم/م² بتوجيه اتّصال داخلي وربط معياري، راحة 12 ساعة عند 45°م محيط.'
    },

    materialScience: {
      en: 'Performance polyester ripstop at 220 GSM is the active-duty security standard for three reasons. First, ripstop weave structure: cross-hatched reinforcement threads contain rip propagation when the fabric catches on equipment or perimeter materials — preventing single-snag escalation into full-tear failure. Second, performance polyester moisture-wicking: 12-hour shifts in 45°C Saudi ambient temperatures generate substantial perspiration; the active-wicking surface keeps the wearer\'s core temperature manageable through the duty cycle. Third, weight: 220 GSM is the calibration point between ballistic-vest layering capacity (the garment must support a NIJ IIIA panel without sagging) and breathability (the integrated layer must not become a heat trap). The internal vest-mount cradle uses load-bearing webbing routed through the shoulder seam with anchor points at the lower back — distributing panel weight across the garment structure rather than concentrating at attachment points.',
      ar: 'البوليستر عالي الأداء ريبستوب عند 220 جم/م² هو معيار الأمن النشط لثلاثة أسباب. أوّلاً، بنية نسج ريبستوب: خيوط تعزيز متشابكة تحتوي انتشار التمزّق عندما يعلق القماش بالمعدّات أو مواد المحيط — مانعة تصاعد التعلّق المنفرد إلى فشل تمزّق كامل. ثانياً، بوليستر أداء طارد للرطوبة: ورديات 12 ساعة في درجات حرارة محيطة سعودية 45°م تُولِّد تعرّقاً كبيراً؛ السطح النشط الطارد يبقي درجة حرارة المُرتدي الأساسية قابلة للإدارة خلال دورة الواجب. ثالثاً، الوزن: 220 جم/م² هي نقطة المعايرة بين سعة طبقة الدرع الباليستي (القطعة يجب أن تدعم لوحة NIJ IIIA دون انحدار) والتنفّس (الطبقة المُدمَجة يجب ألّا تصبح حابسة للحرارة). حاضن حامل الدرع الداخلي يستخدم حمّالات حاملة للحمولة موجَّهة عبر خياطة الكتف بنقاط ربط في أسفل الظهر — تُوزِّع وزن اللوحة عبر بنية القطعة بدلاً من التركيز على نقاط الربط.'
    },

    useCase: {
      en: 'Designed for active-duty security personnel at Saudi corporate complexes (KAFD, Olaya, KKL), Vision 2030 megaproject perimeters (NEOM, Red Sea, Diriyah), Hajj/Umrah event security operations, and HCIS-licensed petrochemical-perimeter operators. The integrated NIJ IIIA-compatible vest mount supports active-threat protection without external vest attachment. The HCIS 2024-spec architecture is mandatory for licensed security firm renewals — UNEOM\'s Tactical Set is the audit-defensible choice.',
      ar: 'مصمَّم لأفراد الأمن في الواجب النشط في المجمّعات المؤسّسية السعودية (KAFD، العليا، KKL)، محيطات مشاريع رؤية 2030 الكبرى (نيوم، البحر الأحمر، الدرعية)، عمليات أمن فعاليات الحج/العمرة، ومشغّلي محيط البتروكيماويات المرخّصين من HCIS. حامل الدرع المُدمَج المتوافق مع NIJ IIIA يدعم الحماية من التهديد النشط دون إلصاق درع خارجي. معمار مواصفات HCIS 2024 إلزامي لتجديدات شركات الأمن المرخّصة — الطقم التكتيكي من UNEOM هو الخيار القابل للدفاع تدقيقياً.'
    },

    comparisonMatrix: {
      titleEn: 'Security Tactical Set vs market alternatives',
      titleAr: 'مقارنة الطقم التكتيكي الأمني مع بدائل السوق',
      columnsEn: ['UNEOM HCIS 2024', 'Pre-2024 Legacy', 'Generic Tactical'],
      columnsAr: ['UNEOM HCIS 2024', 'قديم ما قبل 2024', 'تكتيكي عامّ'],
      rows: [
        { dimensionEn: 'Vest mount', dimensionAr: 'حامل الدرع', valuesEn: ['Internal NIJ IIIA-compatible cradle', 'Externally attached vest', 'No vest provision'], valuesAr: ['حاضن داخلي متوافق مع NIJ IIIA', 'درع مُلصَق خارجياً', 'لا توجد ترتيبات للدرع'] },
        { dimensionEn: 'Radio routing', dimensionAr: 'توجيه الاتّصال', valuesEn: ['Internal channels (no exposed cable)', 'External cable runs', 'Improvised'], valuesAr: ['قنوات داخلية (لا كابل مكشوف)', 'كابلات تمرّ خارجياً', 'مُرتجَل'] },
        { dimensionEn: 'Load-carriage', dimensionAr: 'حمل الوحدات', valuesEn: ['HCIS 2024 modular attachment', 'Velcro retrofit', 'None'], valuesAr: ['ربط معياري HCIS 2024', 'فيلكرو معدَّل', 'لا يوجد'] },
        { dimensionEn: 'Fabric', dimensionAr: 'القماش', valuesEn: ['Performance polyester ripstop 220 GSM', 'Polyester-cotton 200 GSM', 'Cotton-blend (heat trap)'], valuesAr: ['بوليستر أداء ريبستوب 220 جم/م²', 'بوليستر-قطن 200 جم/م²', 'مزيج قطن (حابس حرارة)'] },
        { dimensionEn: '12-hour shift comfort', dimensionAr: 'راحة وردية 12 ساعة', valuesEn: ['Active wicking + breathability', 'Limited wicking', 'Heat-trap'], valuesAr: ['طرد نشط + تنفّس', 'طرد محدود', 'حابس حرارة'] },
        { dimensionEn: 'HCIS 2024 audit', dimensionAr: 'تدقيق HCIS 2024', valuesEn: ['Documented + audited', 'Fails on 3 spec points', 'Non-compliant'], valuesAr: ['موثّق + مدقّق', 'يفشل في 3 نقاط مواصفات', 'غير ملتزم'] },
        { dimensionEn: 'Per-set price (SAR)', dimensionAr: 'سعر الطقم (ريال)', valuesEn: ['680', '380', '180'], valuesAr: ['680', '380', '180'] },
        { dimensionEn: 'Licensing review risk', dimensionAr: 'خطر مراجعة الترخيص', valuesEn: ['Compliant', 'Active risk in 2025+', 'Immediate non-compliance'], valuesAr: ['ملتزم', 'خطر فعلي في 2025+', 'عدم التزام فوري'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Remove vest panel before wash', description: 'Extract the NIJ IIIA panel from the internal cradle before any wash cycle. Panels are stored separately and reinserted after pressing.' },
        { step: 'Industrial wash 60°C', description: 'Hot-water wash with phosphate-free detergent. Performance polyester ripstop tolerates institutional laundering temperatures.' },
        { step: 'No fabric softener', description: 'Fabric softener coats the fiber surface and disrupts moisture-wicking. Use only prescribed institutional detergent.' },
        { step: 'Tumble dry medium', description: 'Tumble dry on medium (max 70°C). Avoid prolonged high-heat which can affect ripstop weave integrity.' },
        { step: 'Annual vest-mount inspection', description: 'At month 11 of service, coordinate with site safety officer for 2% random-sample vest-mount integrity inspection per HCIS 2024 audit protocol.' },
        { step: 'Reinsert vest panel', description: 'Reinsert NIJ IIIA panel through the front access. Verify webbing alignment and anchor-point integrity before deployment.' }
      ],
      ar: [
        { step: 'إزالة لوحة الدرع قبل الغسيل', description: 'استخرج لوحة NIJ IIIA من الحاضن الداخلي قبل أيّ دورة غسيل. اللوحات تُخزَّن بشكل منفصل ويُعاد إدخالها بعد الكيّ.' },
        { step: 'غسيل صناعي 60°م', description: 'غسيل بالماء الساخن بمنظّف خالٍ من الفوسفات. البوليستر عالي الأداء ريبستوب يتحمّل درجات حرارة الغسيل المؤسّسي.' },
        { step: 'لا منعّم قماش', description: 'منعّم القماش يُغطّي سطح الألياف ويُعطِّل طرد الرطوبة. استخدم فقط المنظّف المؤسّسي الموصوف.' },
        { step: 'تجفيف بالأسطوانة متوسط', description: 'جفّف بالأسطوانة على متوسّط (أقصى 70°م). تجنّب الحرارة العالية المُطوَّلة التي يمكن أن تؤثّر على سلامة نسج ريبستوب.' },
        { step: 'فحص حامل الدرع السنوي', description: 'في الشهر 11 من الخدمة، نسّق مع مسؤول السلامة في الموقع لفحص سلامة حامل الدرع لعيّنة عشوائية 2% وفق بروتوكول تدقيق HCIS 2024.' },
        { step: 'إعادة إدخال لوحة الدرع', description: 'أعد إدخال لوحة NIJ IIIA عبر الوصول الأمامي. تحقّق من محاذاة الحمّالات وسلامة نقاط الربط قبل النشر.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Site — 50–199 sets', nameAr: 'موقع — 50-199 طقم', priceFrom: 695, fabricEn: 'Performance polyester ripstop 220 GSM', fabricAr: 'بوليستر أداء ريبستوب 220 جم/م²', warrantyMonths: 18, summaryEn: 'Standard programme; 21-day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 21 يوماً.' },
      { nameEn: 'Operator — 200–999 sets', nameAr: 'مُشغِّل — 200-999 طقم', priceFrom: 680, fabricEn: 'Reserved batch + HCIS 2024 audit pack', fabricAr: 'دفعة محجوزة + ملف تدقيق HCIS 2024', warrantyMonths: 18, summaryEn: 'Reserved batch + on-site fittings + HCIS audit pack + annual vest-mount inspection.', summaryAr: 'دفعة محجوزة + قياسات ميدانية + ملف تدقيق HCIS + فحص حامل الدرع السنوي.' },
      { nameEn: 'Enterprise — 1,000+ sets', nameAr: 'مؤسّسي — 1,000+ طقم', priceFrom: 645, fabricEn: 'Custom Pantone + 90-day phased migration', fabricAr: 'بانتون مخصّص + ترحيل مرحلي 90 يوماً', warrantyMonths: 18, summaryEn: 'Operator-locked Pantone + 90-day phased legacy fleet replacement with shift-coverage guarantee.', summaryAr: 'بانتون مغلق للمُشغِّل + استبدال الأسطول القديم المرحلي 90 يوماً بضمان تغطية الورديات.' }
    ],

    expandedFaqs: [
      { qEn: 'What did the HCIS 2024 update change for security uniforms?', qAr: 'ما الذي غيّره تحديث HCIS 2024 للزي الأمني؟', aEn: 'The Q3 2024 HCIS update raised three core requirements: (1) integrated vest-mount infrastructure compatible with NIJ Level IIIA panels (replacing external vest attachment); (2) internal radio harness routing (replacing exposed cables); (3) HCIS-spec modular load-carriage attachment points (replacing improvised retrofits). Annual re-certification of vest-mount integrity is now required. Pre-2024 legacy programmes fail the new audit on these three points and create active licensing-review risk for security firms.', aAr: 'تحديث HCIS الربع الثالث 2024 رفع ثلاثة متطلّبات أساسية: (1) بنية حامل درع مدمجة متوافقة مع لوحات NIJ مستوى IIIA (مُستبدِلاً ربط الدرع الخارجي)؛ (2) توجيه أحزمة اتّصال داخلي (مُستبدِلاً الكابلات المكشوفة)؛ (3) نقاط ربط حمل وحدات بمواصفات HCIS (مُستبدِلاً التعديلات المُرتجَلة). إعادة الاعتماد السنوية لسلامة حامل الدرع مطلوبة الآن. البرامج القديمة قبل 2024 تفشل في التدقيق الجديد في هذه النقاط الثلاث وتُنشئ خطر مراجعة ترخيص فعلي لشركات الأمن.' },
      { qEn: 'How does the integrated vest mount compare to external vest attachment?', qAr: 'كيف يقارَن حامل الدرع المُدمَج مع إلصاق الدرع الخارجي؟', aEn: 'External-mount vests fail HCIS 2024 audit on three operational points: (1) misalignment under stress — the vest shifts during physical engagement, leaving protection gaps; (2) heat-trap failure — the vest layered over a separate uniform creates a 4–6°C core-temperature rise that reduces 12-hour shift endurance; (3) ignition-layer risk — in arc-flash incidents, the external vest fabric can ignite and damage protection beneath. Integrated mount addresses all three: the NIJ IIIA panel is supported by load-bearing webbing inside the garment, distributing weight evenly, with single-layer thermal management.', aAr: 'الدروع المثبّتة خارجياً تفشل في تدقيق HCIS 2024 في ثلاث نقاط تشغيلية: (1) عدم محاذاة تحت الضغط — الدرع يتحرّك أثناء الاشتباك البدني، تاركاً فجوات حماية؛ (2) فشل حابس الحرارة — الدرع المُكدَّس فوق زي منفصل يخلق ارتفاع درجة حرارة أساسية 4-6°م يُقلّل قدرة تحمّل وردية 12 ساعة؛ (3) خطر طبقة الاشتعال — في حوادث الومضة الكهربائية، قماش الدرع الخارجي يمكن أن يشتعل ويُتلف الحماية تحته. الحامل المُدمَج يعالج الثلاثة: لوحة NIJ IIIA مدعومة بحمّالات حاملة للحمولة داخل القطعة، مُوزِّعة الوزن بالتساوي، بإدارة حرارية لطبقة واحدة.' },
      { qEn: 'What is the MOQ for the Security Tactical Set?', qAr: 'ما الحدّ الأدنى للطلب للطقم التكتيكي الأمني؟', aEn: 'Programme MOQ is 50 sets. Most security firm programmes order 200+ sets to attract reserved-batch fabric, the HCIS 2024 audit pack, and annual vest-mount inspection. Enterprise programmes (1,000+ sets) include 90-day phased migration support to replace pre-2024 legacy fleet without disrupting shift coverage.', aAr: 'الحدّ الأدنى للبرنامج 50 طقم. معظم برامج شركات الأمن تطلب 200+ طقم لجذب دفعة قماش محجوزة، ملف تدقيق HCIS 2024، وفحص حامل الدرع السنوي. البرامج المؤسّسية (1,000+ طقم) تشمل دعم ترحيل مرحلي 90 يوماً لاستبدال الأسطول القديم ما قبل 2024 دون تعطيل تغطية الورديات.' },
      { qEn: 'How does UNEOM handle the 90-day phased migration from legacy uniforms?', qAr: 'كيف تتعامل UNEOM مع الترحيل المرحلي 90 يوماً من الأزياء القديمة؟', aEn: 'The phased migration runs in three 30-day waves. Wave 1: 33% of personnel migrate (lowest-risk shifts first); UNEOM coordinates fitting capacity at the operator\'s sites. Wave 2: next 33% migrate; first wave\'s legacy uniforms return to UNEOM for sustainable processing. Wave 3: final 33% migrate; full operator now on HCIS 2024 spec. Throughout the migration, shift coverage is maintained at 100% — no operator personnel are uncovered. The full 90-day programme includes audit-pack delivery and HCIS coordinator briefing.', aAr: 'الترحيل المرحلي يجري في ثلاث موجات 30 يوماً. الموجة 1: 33% من الأفراد يترحّلون (الورديات الأقلّ خطراً أوّلاً)؛ UNEOM تُنسّق سعة القياس في مواقع المُشغِّل. الموجة 2: الـ33% التالية تترحّل؛ الأزياء القديمة للموجة الأولى تعود إلى UNEOM للمعالَجة المستدامة. الموجة 3: الـ33% الأخيرة تترحّل؛ المُشغِّل الكامل الآن على مواصفات HCIS 2024. خلال الترحيل، تغطية الورديات محتفظة عند 100% — لا أفراد مُشغِّل غير مُغطّاة. البرنامج الكامل 90 يوماً يشمل تسليم ملف التدقيق وإحاطة منسّق HCIS.' },
      { qEn: 'Can the Tactical Set serve event-security operations as well as perimeter?', qAr: 'هل يمكن للطقم التكتيكي خدمة عمليات أمن الفعاليات بالإضافة إلى المحيط؟', aEn: 'Yes. The same HCIS 2024-spec architecture serves three operational contexts: (1) corporate/residential perimeter — the dominant deployment; (2) Hajj/Umrah event security — large-crowd active-duty operations; (3) Vision 2030 megaproject construction perimeters. The single architecture maintains compliance across all three contexts. Configuration variants (radio routing layout, modular pouch positioning) accommodate operational specifics; fabric and vest-mount infrastructure remain identical.', aAr: 'نعم. نفس معمار مواصفات HCIS 2024 يخدم ثلاثة سياقات تشغيلية: (1) محيط مؤسّسي/سكني — النشر المهيمن؛ (2) أمن فعاليات الحج/العمرة — عمليات واجب نشط لحشود كبيرة؛ (3) محيطات إنشاء مشاريع رؤية 2030 الكبرى. المعمار الواحد يحافظ على الالتزام عبر الثلاثة. متغيّرات التكوين (تخطيط توجيه الاتّصال، وضع الجيوب المعيارية) تستوعب التفاصيل التشغيلية؛ القماش والبنية التحتية لحامل الدرع تبقى متطابقة.' }
    ],

    numericAnchors: { moqUnits: 50, leadTimeDaysFrom: 21, leadTimeDaysTo: 28, warrantyMonths: 18 }
  },
  {
    slug: 'guard-uniform-classic',
    category: 'security', industry: 'security',
    nameEn: 'Classic Guard Uniform',
    nameAr: 'زي حارس كلاسيك',
    summary: 'Polyester-cotton uniform shirt + trousers + name-badge holder — corporate security presence at standard programme price.',
    summaryAr: 'قميص زي بوليستر-قطن + بنطلون + حامل شارة الاسم — مظهر أمني مؤسسي بأسعار البرامج القياسية.',
    description: 'Standard-issue corporate security uniform — professional silhouette, climate-appropriate fabric, structured for Saudi corporate compounds and residential complexes.',
    descriptionAr: 'الزي المعتمد للأمن المؤسسي — تصميم مهني، نسيج ملائم للمناخ، ومهيكل خصيصاً للمجمعات السكنية والتجارية السعودية.',
    fabric: 'Polyester-Cotton 65/35',
    fabricAr: 'بوليستر-قطن 65/35',
    fabricWeight: '200gsm',
    fabricWeightAr: '200 جرام للمتر المربع',
    priceFrom: 320,
    image: 'products/security/guard-uniform-classic',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Navy', 'Black', 'Charcoal'],
    colorsAr: ['كحلي', 'أسود', 'فحمي'],
    features: ['Professional silhouette', 'Reinforced epaulettes', 'Name-badge holder', '12-month warranty'],
    featuresAr: ['تصميم احترافي', 'كتافات معززة', 'حامل شارة الاسم', 'ضمان 12 شهراً'],
    compliance: ['HCIS', 'SASO'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Classic Guard Uniform is the polyester-cotton 65/35 corporate-security uniform that licensed Saudi guard staff wear at corporate complexes, residential compounds, and commercial properties — engineered with corporate-security silhouette (no paramilitary aesthetics), reinforced epaulettes, and name-badge holder for the standard duty cycle.',
      ar: 'زي الحارس الكلاسيك من UNEOM هو زي الأمن المؤسّسي من بوليستر-قطن 65/35 الذي يرتديه طاقم الحرس السعودي المرخّص في المجمّعات المؤسّسية، المجمّعات السكنية، والمنشآت التجارية — مهندَس بقصّة أمن مؤسّسي (لا جماليات شبه عسكرية)، كتافات معزّزة، وحامل شارة اسم لدورة الواجب القياسية.'
    },

    architectEquation: {
      en: 'Unlike paramilitary tactical uniforms inappropriate for corporate-complex and residential clients, the UNEOM Classic Guard Uniform delivers professional security presence with a corporate silhouette — poly-cotton 65/35 200 GSM, reinforced epaulettes, name-badge holder, and 12-month warranty at 320 SAR per set.',
      ar: 'على خلاف الأزياء التكتيكية شبه العسكرية غير الملائمة للمجمّعات المؤسّسية والعملاء السكنيين، زي الحارس الكلاسيك من UNEOM يُقدّم حضور أمن احترافي بقصّة مؤسّسية — بوليستر-قطن 65/35 200 جم/م²، كتافات معزّزة، حامل شارة اسم، وضمان 12 شهراً بـ320 ريالاً للطقم.'
    },

    materialScience: {
      en: 'Polyester-cotton 65/35 at 200 GSM is the corporate-security standard for two operational reasons. First, the cotton component (35%) provides skin breathability for 8-12 hour duty cycles in 35-45°C ambient temperatures common across Saudi corporate complexes; pure polyester at the same weight traps body heat, generating measurable productivity decline (UNEOM site studies: 12% lower alertness scores in pure-polyester guard uniforms vs 65/35 blend after hour 6). Second, the polyester component (65%) provides dimensional stability through the 4–6 wash cycles weekly typical of guard uniforms — pure cotton at the same weight loses dimensional integrity within 6 months. Reinforced epaulettes use double-layered cotton drill (vs the standard single-layer) to maintain the structured shoulder shape that distinguishes corporate-security uniforms from generic service wear.',
      ar: 'بوليستر-قطن 65/35 عند 200 جم/م² هو معيار الأمن المؤسّسي لسببَين تشغيليَّين. أوّلاً، مكوّن القطن (35%) يُوفّر تنفّس الجلد لدورات واجب 8-12 ساعة في درجات حرارة محيطة 35-45°م شائعة عبر المجمّعات المؤسّسية السعودية؛ البوليستر الخالص بنفس الوزن يحبس حرارة الجسم، مُولِّداً تراجع إنتاجية قابل للقياس (دراسات UNEOM الميدانية: درجات يقظة أدنى بنسبة 12% في أزياء الحرس البوليستر الخالص مقابل مزيج 65/35 بعد الساعة 6). ثانياً، مكوّن البوليستر (65%) يُوفّر الثبات البُعدي خلال 4-6 دورات غسيل أسبوعية نموذجية لأزياء الحرس — القطن الخالص بنفس الوزن يفقد سلامته البُعدية خلال 6 أشهر. الكتافات المعزّزة تستخدم درّيل قطني مزدوج الطبقة (مقابل القياسي طبقة واحدة) للحفاظ على شكل الكتف المهيكل الذي يميّز أزياء الأمن المؤسّسي عن زي الخدمة العامّ.'
    },

    useCase: {
      en: 'Designed for corporate-security guard staff at Saudi corporate complexes (KAFD, Olaya, KKL, Tahlia commercial districts), residential compounds (DQ, Al-Hamra, Diplomatic Quarter), and commercial properties. The corporate-security silhouette (tailored fit, structured shoulders, single-tone fabrication) reads as professional service rather than paramilitary intimidation — measurably improves client-satisfaction scores (UNEOM data: 31% higher satisfaction vs paramilitary cuts in residential settings). The Classic is the most-deployed UNEOM security programme outside of HCIS 2024-active-duty Tactical Set.',
      ar: 'مصمَّم لطاقم حرس الأمن المؤسّسي في المجمّعات المؤسّسية السعودية (KAFD، العليا، KKL، أحياء التحلية التجارية)، المجمّعات السكنية (حي السفارات، الحمراء، حي السفارات)، والمنشآت التجارية. قصّة الأمن المؤسّسي (تفصيل مُلائِم، أكتاف مهيكلة، تصنيع بلون واحد) تُقرَأ كخدمة احترافية بدلاً من ترهيب شبه عسكري — تُحسّن قابلية القياس درجات رضا العملاء (بيانات UNEOM: رضا أعلى بنسبة 31% مقابل القصّات شبه العسكرية في الإعدادات السكنية). الكلاسيك هو أكثر برنامج أمن UNEOM نشراً خارج الطقم التكتيكي للواجب النشط HCIS 2024.'
    },

    comparisonMatrix: {
      titleEn: 'Classic Guard Uniform vs market alternatives',
      titleAr: 'مقارنة زي الحارس الكلاسيك مع بدائل السوق',
      columnsEn: ['UNEOM Classic Guard', 'Generic Guard', 'Adapted Tactical'],
      columnsAr: ['UNEOM الكلاسيك للحرس', 'حرس عامّ', 'تكتيكي مُكيَّف'],
      rows: [
        { dimensionEn: 'Fabric', dimensionAr: 'القماش', valuesEn: ['Poly-cotton 65/35 200 GSM', 'Polyester 100% 180 GSM', 'Performance polyester 220 GSM'], valuesAr: ['بوليستر-قطن 65/35 200 جم/م²', 'بوليستر 100% 180 جم/م²', 'بوليستر أداء 220 جم/م²'] },
        { dimensionEn: 'Visual identity', dimensionAr: 'الهوية البصرية', valuesEn: ['Corporate-security silhouette', 'Generic guard appearance', 'Paramilitary aesthetics'], valuesAr: ['قصّة أمن مؤسّسي', 'مظهر حرس عامّ', 'جماليات شبه عسكرية'] },
        { dimensionEn: 'Client-satisfaction (residential)', dimensionAr: 'رضا العميل (سكني)', valuesEn: ['+31% vs paramilitary', '−18% vs corporate', '−31% vs corporate'], valuesAr: ['+31% مقابل شبه عسكري', '−18% مقابل مؤسّسي', '−31% مقابل مؤسّسي'] },
        { dimensionEn: 'Epaulettes', dimensionAr: 'الكتافات', valuesEn: ['Reinforced double-layer drill', 'Single-layer (collapse risk)', 'Tactical patch system'], valuesAr: ['درّيل مزدوج الطبقة معزّز', 'طبقة واحدة (خطر الانهيار)', 'نظام رقع تكتيكي'] },
        { dimensionEn: '12-hour shift comfort', dimensionAr: 'راحة وردية 12 ساعة', valuesEn: ['Cotton breathability', 'Heat-trap polyester', 'Active wicking'], valuesAr: ['تنفّس القطن', 'بوليستر حابس حرارة', 'طرد نشط'] },
        { dimensionEn: 'Service life', dimensionAr: 'العمر التشغيلي', valuesEn: ['18 months', '8 months', '24 months'], valuesAr: ['18 شهراً', '8 أشهر', '24 شهراً'] },
        { dimensionEn: 'Per-set price (SAR)', dimensionAr: 'سعر الطقم (ريال)', valuesEn: ['320', '180', '680'], valuesAr: ['320', '180', '680'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['12 months', '6 months', '18 months'], valuesAr: ['12 شهراً', '6 أشهر', '18 شهراً'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Industrial wash 60°C', description: 'Hot-water wash with phosphate-free detergent. Poly-cotton 65/35 tolerates institutional laundering at standard guard-service intervals.' },
        { step: 'Press epaulettes structured', description: 'Steam press epaulettes to maintain double-layer drill structure. The reinforced epaulettes are the visual signature of corporate-security silhouette.' },
        { step: 'Tumble dry medium', description: 'Tumble dry on medium (max 70°C). Avoid prolonged high-heat which weakens the cotton component.' },
        { step: 'Hang on shaped hanger', description: 'Hang on guard-uniform shaped hanger to maintain structured shoulders. Avoid wire hangers which deform epaulette structure.' },
        { step: 'Name-badge swap', description: 'Name-badge holder accommodates standardised badges (60mm × 25mm). Swap badges instantly without removing the uniform.' },
        { step: 'Replacement at pilling', description: 'Replace when surface pilling becomes visible from 1 metre — typically month 18 for corporate-complex deployments. Faster replacement may be required for outdoor-perimeter assignments.' }
      ],
      ar: [
        { step: 'غسيل صناعي 60°م', description: 'غسيل بالماء الساخن بمنظّف خالٍ من الفوسفات. بوليستر-قطن 65/35 يتحمّل الغسيل المؤسّسي في فترات خدمة الحرس القياسية.' },
        { step: 'كيّ الكتافات بهيكل', description: 'اكوِ الكتافات ببخار للحفاظ على بنية الدرّيل المزدوج. الكتافات المعزّزة هي التوقيع البصري لقصّة الأمن المؤسّسي.' },
        { step: 'تجفيف بالأسطوانة متوسط', description: 'جفّف بالأسطوانة على متوسّط (أقصى 70°م). تجنّب الحرارة العالية المُطوَّلة التي تُضعف مكوّن القطن.' },
        { step: 'علّق على شمّاعة مُشكَّلة', description: 'علّق على شمّاعة زي حرس مُشكَّلة للحفاظ على الأكتاف المهيكلة. تجنّب الشمّاعات السلكية التي تُشوّه بنية الكتافات.' },
        { step: 'تبديل شارة الاسم', description: 'حامل شارة الاسم يستوعب الشارات الموحَّدة (60 ملم × 25 ملم). بدّل الشارات فوراً دون إزالة الزي.' },
        { step: 'الاستبدال عند التكوّر', description: 'استبدل عندما يصبح التكوّر السطحي مرئياً من 1 متر — عادةً الشهر 18 لنشرات المجمّعات المؤسّسية. استبدال أسرع قد يكون مطلوباً لتعيينات المحيط الخارجي.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Compound — 25–99 sets', nameAr: 'مُجمَّع — 25-99 طقم', priceFrom: 335, fabricEn: 'Poly-cotton 65/35 200 GSM', fabricAr: 'بوليستر-قطن 65/35 200 جم/م²', warrantyMonths: 12, summaryEn: 'Standard programme; 14-day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 14 يوماً.' },
      { nameEn: 'Operator — 100–499 sets', nameAr: 'مُشغِّل — 100-499 طقم', priceFrom: 320, fabricEn: 'Reserved batch + custom embroidery', fabricAr: 'دفعة محجوزة + تطريز مخصّص', warrantyMonths: 12, summaryEn: 'Operator-locked Pantone + reinforced-epaulette upgrade + replacement-cycle SLA.', summaryAr: 'بانتون مغلق للمُشغِّل + ترقية كتافات معزّزة + اتّفاقية مستوى خدمة لدورات الاستبدال.' },
      { nameEn: 'Enterprise — 500+ sets', nameAr: 'مؤسّسي — 500+ طقم', priceFrom: 305, fabricEn: 'Custom Pantone + property-specific branding', fabricAr: 'بانتون مخصّص + علامة خاصّة بالمنشأة', warrantyMonths: 12, summaryEn: 'Property logo + worker name + reinforced epaulettes + replacement-cycle planning.', summaryAr: 'شعار المنشأة + اسم العامل + كتافات معزّزة + تخطيط دورات الاستبدال.' }
    ],

    expandedFaqs: [
      { qEn: 'Why choose Classic Guard over the Tactical Set for corporate complexes?', qAr: 'لماذا اختيار الحرس الكلاسيك على الطقم التكتيكي للمجمّعات المؤسّسية؟', aEn: 'Two reasons. First, client-satisfaction: corporate-complex tenants and residential compound residents read paramilitary tactical aesthetics as escalation rather than protection — measurable in mystery-shopper surveys (UNEOM data: 31% lower satisfaction for paramilitary cuts in residential settings). The Classic\'s corporate-security silhouette delivers professional service signal. Second, operational fit: HCIS 2024 active-duty vest-mount integration is unnecessary for corporate-complex perimeter where the guards do not carry NIJ IIIA panels. The Tactical Set\'s additional capabilities (vest mount, modular load-carriage) add cost without operational benefit in this context.', aAr: 'سببان. أوّلاً، رضا العميل: مستأجرو المجمّعات المؤسّسية وسكّان المجمّعات السكنية يقرأون الجماليات التكتيكية شبه العسكرية كتصعيد بدلاً من حماية — قابل للقياس في استطلاعات المتسوّق السرّي (بيانات UNEOM: رضا أقلّ بنسبة 31% للقصّات شبه العسكرية في الإعدادات السكنية). قصّة الأمن المؤسّسي الكلاسيك تُقدّم إشارة خدمة احترافية. ثانياً، الملاءمة التشغيلية: تكامل حامل الدرع للواجب النشط HCIS 2024 غير ضروري لمحيط المجمّعات المؤسّسية حيث الحرّاس لا يحملون لوحات NIJ IIIA. القدرات الإضافية للطقم التكتيكي (حامل درع، حمل وحدات معياري) تُضيف كلفة دون منفعة تشغيلية في هذا السياق.' },
      { qEn: 'What does "corporate-security silhouette" actually mean?', qAr: 'ما الذي تعنيه «قصّة الأمن المؤسّسي» فعلياً؟', aEn: 'Three design choices that signal professional service vs paramilitary intimidation. First, tailored fit (not loose-cut tactical) — the uniform follows the wearer\'s body silhouette like business attire, not battle-ready loose fabric. Second, structured shoulders (not soft-shoulder tactical) — the reinforced epaulettes maintain a square-shoulder business-formal shape. Third, single-tone fabric without exposed tactical features (no MOLLE webbing, no thigh holsters, no exposed pouches). The combined effect: a guard who looks like a competent professional service member, not a paramilitary fighter — appropriate for residential and corporate clients.', aAr: 'ثلاث خيارات تصميم تُشير إلى خدمة احترافية مقابل ترهيب شبه عسكري. أوّلاً، تفصيل مُلائِم (ليس قصّ تكتيكي فضفاض) — الزي يتبع قصّة جسم المُرتدي مثل الزي الإداري، ليس قماش فضفاض جاهز للمعركة. ثانياً، أكتاف مهيكلة (ليس كتف ناعم تكتيكي) — الكتافات المعزّزة تحافظ على شكل كتف مربّع رسمي للأعمال. ثالثاً، قماش بلون واحد دون ميزات تكتيكية مكشوفة (لا حمّالات MOLLE، لا حافظات فخذ، لا جيوب مكشوفة). التأثير المجمَّع: حارس يبدو عضو خدمة احترافي كفء، ليس مقاتل شبه عسكري — ملائم للعملاء السكنيين والمؤسّسيين.' },
      { qEn: 'What is the MOQ for the Classic Guard Uniform?', qAr: 'ما الحدّ الأدنى للطلب لزي الحارس الكلاسيك؟', aEn: 'Programme MOQ is 25 sets (smaller than tactical MOQ because corporate-complex deployments are smaller). Most operators order 100+ sets to attract reserved-batch fabric, custom embroidery (property logo + worker name), and replacement-cycle SLA. Enterprise programmes (500+ sets) include property-specific branding and the Pantone-locked colour matching that distinguishes premium from generic alternatives.', aAr: 'الحدّ الأدنى للبرنامج 25 طقم (أصغر من الحدّ الأدنى التكتيكي لأنّ نشرات المجمّعات المؤسّسية أصغر). معظم المشغّلين يطلبون 100+ طقم لجذب دفعة قماش محجوزة، تطريز مخصّص (شعار المنشأة + اسم العامل)، واتّفاقية مستوى خدمة لدورات الاستبدال. البرامج المؤسّسية (500+ طقم) تشمل علامة خاصّة بالمنشأة ومطابقة بانتون المغلقة التي تميّز الفاخر عن البدائل العامّة.' },
      { qEn: 'Can the Classic Guard be customised with property logo and worker name?', qAr: 'هل يمكن تخصيص الحرس الكلاسيك بشعار المنشأة واسم العامل؟', aEn: 'Yes. Standard customisation includes embroidered property logo (left chest), worker name (right chest), and rank insignia on the reinforced epaulettes. Custom Pantone-locked colour matching is included in operator-tier programmes (100+ sets). The name-badge holder accommodates removable badges for personnel rotation; embroidered name is permanent for the uniform\'s service life.', aAr: 'نعم. التخصيص القياسي يشمل شعار المنشأة المطرَّز (الصدر الأيسر)، اسم العامل (الصدر الأيمن)، وشارات الرتبة على الكتافات المعزّزة. مطابقة بانتون المغلقة المخصّصة مشمولة في برامج فئة المُشغِّل (100+ طقم). حامل شارة الاسم يستوعب الشارات القابلة للإزالة لتدوير الأفراد؛ الاسم المطرَّز دائم للعمر التشغيلي للزي.' },
      { qEn: 'Does UNEOM provide the name badges or only the holder?', qAr: 'هل تُوفّر UNEOM شارات الاسم أم الحامل فقط؟', aEn: 'Both. The Classic Guard ships with the integrated name-badge holder (60mm × 25mm standard). UNEOM also provides matching name badges as a separately-orderable component — typically 4 badges per guard (current name + 3 spare for rotation). Replacement badges are 12 SAR per badge. Most operator programmes include the badge supply in the joiner-kit SLA at no additional fee.', aAr: 'كلاهما. الحرس الكلاسيك يُشحَن بحامل شارة الاسم المُدمَج (60 ملم × 25 ملم قياسي). UNEOM تُوفّر أيضاً شارات اسم مُطابِقة كمكوّن قابل للطلب بشكل منفصل — عادةً 4 شارات لكل حارس (الاسم الحالي + 3 احتياط للتدوير). شارات الاستبدال 12 ريالاً للشارة. معظم برامج المشغّلين تشمل توفير الشارات في اتّفاقية مستوى خدمة أطقم الموظّفين الجدد بدون رسم إضافي.' }
    ],

    numericAnchors: { moqUnits: 25, leadTimeDaysFrom: 14, leadTimeDaysTo: 21, warrantyMonths: 12, washCyclesValidated: 80 }
  }
];
