import type { SaudiCity } from './index';

export const medina: SaudiCity = {
  slug: 'medina',
  nameEn: 'Medina',
  nameAr: 'المدينة المنورة',
  region: 'Madinah Province',
  regionAr: 'منطقة المدينة المنورة',
  lat: 24.4682, lng: 39.6111,
  populationTier: 'metro',
  anchorIndustries: ['hospitality', 'healthcare'],
  climateVocab: [
    { term: 'هواء الحرم', meaning: 'Cooler highland air — stable conditions, premium fabric performance', meaningAr: 'هواء المرتفعات الأكثر برودة — ظروف مستقرة، أداء مثالي للأقمشة الفاخرة' }
  ],
  landmarks: ['Masjid an-Nabawi surrounds', 'Quba District'],
  landmarksAr: ['محيط المسجد النبوي', 'حي قباء'],
  heroImage: 'cities/hero-medina',

  /* ========== Wave 2 enrichment per content-domination-plan §B.3 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Medina uniform programmes are the year-round-pilgrim-service-engineered, highland-climate-calibrated uniform contracts that UNEOM delivers across the Holy City of the Prophet — designed for continuous Umrah and ziyarah operations, milder highland conditions than Mecca, and the Prophet\'s Mosque-adjacent religious-tourism sector.',
    ar: 'برامج الزي في المدينة هي عقود الزي المهندَسة لخدمة الحجّاج على مدار السنة، المُعايرة لمناخ المرتفعات، التي تُقدّمها UNEOM عبر مدينة الرسول المنوّرة — مصمَّمة لعمليات العمرة والزيارة المستمرّة، ظروف مرتفعات أكثر اعتدالاً من مكة، وقطاع السياحة الدينية المجاور للمسجد النبوي.'
  },

  localizedArchitectEquation: {
    en: 'Unlike uniforms calibrated for the Holy Capital\'s 7-week Hajj compression, UNEOM\'s Medina programme is engineered for year-round pilgrim service stability — a steady wash regime of 200+ annual cycles rather than seasonal compression. Mercerised fabrics with reactive-dye chemistry validated for the city\'s Hawa al-Haram (the cooler highland air) deliver 16-month rotation cycles in stable conditions.',
    ar: 'على خلاف الأزياء المُعايرة لضغط الحج 7 أسابيع في العاصمة المقدّسة، برنامج UNEOM للمدينة مهندَس لاستقرار خدمة الحجّاج على مدار السنة — نظام غسيل ثابت 200+ دورة سنوية بدلاً من ضغط موسمي. أنسجة مرسيرية بكيمياء أصباغ تفاعلية معتمدة لهواء الحرم (هواء المرتفعات الأبرد) في المدينة تُقدّم دورات استبدال 16 شهراً في ظروف مستقرّة.'
  },

  cityProfile: {
    en: [
      'Medina is the second Holy City of Islam and a year-round operational anchor for UNEOM\'s religious-tourism uniform programmes. The city\'s 1.5 million resident population (GASTAT 2024) hosts continuous Umrah pilgrim flows (averaging 2.4 million annually) plus the post-Hajj ziyarah season, generating uniform demand that — unlike Mecca\'s seasonal compression — runs at consistent operational intensity 12 months per year.',
      'Medina\'s climate is the Kingdom\'s most operationally stable for textile choice. The city sits at 608m elevation with milder summers (average 38°C peak vs Mecca\'s 43°C), cooler nights, and lower humidity than coastal cities. Hawa al-Haram — the local term for the temperate highland air — creates predictable conditions where premium fabric chemistry performs optimally without the climate-stress accommodations required elsewhere. UNEOM\'s Medina specifications can deploy higher-quality wool blends and full mercerised wool-poly weaves with confidence.',
      'UNEOM operates 48+ active accounts in Medina, anchored on hospitality (Prophet\'s Mosque-adjacent hotels including Anwar Al Madinah Mövenpick, Pullman ZamZam Madinah, and the ring of pilgrim accommodation operators) and healthcare (Madinah tertiary medical facilities and pilgrim medical service providers). The Medina depot maintains continuous-flow programme stock with 48-hour joiner-kit fulfillment to all listed hotels and hospitals.'
    ],
    ar: [
      'المدينة هي ثاني العاصمتَين المقدّستَين للإسلام ومرتكز تشغيلي على مدار السنة لبرامج زي السياحة الدينية لـUNEOM. عدد سكّان المدينة 1.5 مليون (الهيئة العامة للإحصاء 2024) تستضيف تدفّقات معتمرين مستمرّة (بمتوسّط 2.4 مليون سنوياً) بالإضافة إلى موسم الزيارة بعد الحج، مُولِّدةً طلباً على الزي — على خلاف ضغط مكة الموسمي — يجري بكثافة تشغيلية ثابتة 12 شهراً سنوياً.',
      'مناخ المدينة هو الأكثر استقراراً تشغيلياً في المملكة لاختيار النسيج. تقع المدينة على ارتفاع 608م بصيف أكثر اعتدالاً (متوسّط ذروة 38°م مقابل 43°م لمكة)، ليالٍ أبرد، ورطوبة أقلّ من المدن الساحلية. هواء الحرم — المصطلح المحلّي لهواء المرتفعات المعتدل — يُنشئ ظروفاً قابلة للتنبّؤ حيث تُؤدّي كيمياء القماش الفاخر بشكل أمثل دون الحاجة لاستيعاب الإجهاد المناخي المطلوب في أماكن أخرى. مواصفات UNEOM للمدينة يمكن أن تُنشر مزائج صوف أعلى جودة وأنسجة صوف-بوليستر مرسيرية كاملة بثقة.',
      'تُشغّل UNEOM 48+ حساباً نشطاً في المدينة، مرتكَزةً على الضيافة (الفنادق المجاورة للمسجد النبوي بما فيها أنوار المدينة موفنبيك، بولمان زمزم المدينة، وحلقة مشغّلي إقامة الحجّاج) والرعاية الصحية (منشآت المدينة الطبّية الثلاثية ومزوّدي خدمة طبّ الحجّاج). يحافظ مستودع المدينة على مخزون برنامج تدفّق مستمرّ بتنفيذ أطقم الموظّفين الجدد خلال 48 ساعة لجميع الفنادق والمستشفيات المُدرَجة.'
    ]
  },

  localStat: {
    value: '200+',
    labelEn: 'annual wash cycles in continuous Medina pilgrim service',
    labelAr: 'دورة غسيل سنوية في خدمة حجّاج المدينة المستمرّة',
    contextEn: 'Steady-state operations rather than Mecca\'s seasonal compression. UNEOM\'s Medina-spec fabrics retain colour fastness ≥ Grade 4 through the full year-round wash regime.',
    contextAr: 'عمليات حالة ثابتة بدلاً من ضغط مكة الموسمي. أقمشة UNEOM بمواصفات المدينة تحتفظ بثبات لون ≥ درجة 4 خلال نظام الغسيل الكامل على مدار السنة.'
  },

  industryContext: {
    hospitality: {
      en: 'Medina\'s 22 Prophet\'s Mosque-adjacent hotels and 12 pilgrim accommodation operators source UNEOM\'s premium hospitality programme — full mercerised wool-poly weaves with continuous Umrah-flow durability validation.',
      ar: '22 فندقاً مجاوراً للمسجد النبوي في المدينة و12 مُشغّل إقامة حجّاج تُورِّد برنامج الضيافة الفاخر من UNEOM — أنسجة صوف-بوليستر مرسيرية كاملة باعتماد متانة تدفّق العمرة المستمرّ.'
    },
    healthcare: {
      en: 'Madinah tertiary hospitals (King Fahd Hospital, Madinah Cardiac Centre) and pilgrim medical service providers source UNEOM antimicrobial scrub programmes calibrated for the city\'s steady-state operational tempo.',
      ar: 'مستشفيات المدينة الثلاثية (مستشفى الملك فهد، مركز القلب بالمدينة) ومزوّدو خدمة طبّ الحجّاج تُورِّد برامج سكراب UNEOM المضادّة للميكروبات المُعايرة لإيقاع الحالة الثابتة التشغيلي للمدينة.'
    },
    security: {
      en: 'Prophet\'s Mosque perimeter security operators and pilgrim event security firms source UNEOM\'s HCIS 2024-spec uniforms with culturally-appropriate corporate-security silhouette — no paramilitary aesthetics, given the cultural reverence of the Holy City.',
      ar: 'مشغّلو أمن محيط المسجد النبوي وشركات أمن فعاليات الحجّاج تُورِّد أزياء UNEOM بمواصفات HCIS 2024 بقصّة أمن مؤسّسي ملائمة ثقافياً — لا جماليات شبه عسكرية، نظراً للاحترام الثقافي للمدينة المقدّسة.'
    },
    aviation: {
      en: 'Prince Mohammad bin Abdulaziz International Airport (MED) ground operations source UNEOM\'s GACA-compliant aviation uniform programmes with stable Medina-climate calibration.',
      ar: 'عمليات مطار الأمير محمّد بن عبدالعزيز الدولي (MED) الأرضية تُورِّد برامج زي UNEOM للطيران الملتزمة بـGACA بمعايرة مناخ المدينة المستقرّ.'
    },
    corporate: {
      en: 'Medina\'s religious-tourism corporate operators (tour companies, pilgrim-service firms, ziyarah logistics providers) source UNEOM\'s Italian wool blend in the medium-weight specification suited for the city\'s temperate climate.',
      ar: 'المشغّلون المؤسّسيون للسياحة الدينية في المدينة (شركات الجولات، شركات خدمة الحجّاج، مزوّدو لوجستيات الزيارة) تُورِّد مزيج الصوف الإيطالي من UNEOM بالمواصفة متوسّطة الوزن الملائمة لمناخ المدينة المعتدل.'
    },
    education: {
      en: 'Medina\'s Quranic education institutions and Islamic University of Madinah-adjacent schools source UNEOM\'s growth-aware education uniforms with modesty grading aligned to the religious educational context.',
      ar: 'مؤسّسات التعليم القرآني في المدينة والمدارس المجاورة للجامعة الإسلامية بالمدينة تُورِّد أزياء التعليم الواعية للنموّ من UNEOM بتصنيف حشمة متماشٍ مع السياق التعليمي الديني.'
    },
    retail: {
      en: 'Prophet\'s Mosque-adjacent retail districts and pilgrim service retailers source UNEOM\'s cotton-spandex twill in Pantone-locked Medina-region brand palettes.',
      ar: 'أحياء التجزئة المجاورة للمسجد النبوي وتجّار خدمة الحجّاج تُورِّد قطن-سباندكس تويل من UNEOM بلوحات علامة مغلقة ببانتون لمنطقة المدينة.'
    },
    manufacturing: {
      en: 'Medina-region food-service production for pilgrim catering and Umrah-flow logistics sources UNEOM\'s SFDA-compliant food-safety uniforms.',
      ar: 'إنتاج خدمة الأغذية في منطقة المدينة لتموين الحجّاج ولوجستيات تدفّق العمرة تُورِّد أزياء سلامة الأغذية الملتزمة بـSFDA من UNEOM.'
    }
  },

  localCompliance: {
    amanahEn: 'Madinah Municipality (Amanat Al-Madinah Al-Munawwarah)',
    amanahAr: 'أمانة المدينة المنورة',
    amanahUrl: 'https://www.amana-md.gov.sa',
    refLabelEn: 'Pilgrim Service Worker Identification & Cultural Standards — Madinah Municipality',
    refLabelAr: 'معايير تعريف العامل الخدمي للحجّاج والثقافة — أمانة المدينة المنورة',
    quoteEn: 'Pilgrim service sector employees within Madinah Municipality jurisdiction shall present in attire reflecting the operator\'s registered identity, with worker name and role visible. Uniform programmes shall reflect the cultural reverence appropriate to the City of the Prophet and align with national MC standards.',
    quoteAr: 'يجب على موظّفي قطاع خدمة الحجّاج ضمن نطاق أمانة المدينة المنورة الظهور بزي يعكس الهوية المسجَّلة للمُشغّل، مع وضوح اسم ودور العامل. يجب أن تعكس برامج الزي الاحترام الثقافي الملائم لمدينة الرسول وتتماشى مع معايير وزارة التجارة الوطنية.'
  },

  expandedFaqs: [
    {
      qEn: 'Where can I find a uniform supplier serving Medina hotels and pilgrim service operators?',
      qAr: 'أين أجد مُورِّد زي يخدم فنادق المدينة ومشغّلي خدمة الحجّاج؟',
      aEn: 'UNEOM operates a Medina city operations team handling 48+ active accounts across Prophet\'s Mosque-adjacent hospitality and tertiary healthcare. The Medina depot maintains continuous-flow programme stock with 48-hour joiner-kit fulfillment to all anchored properties and medical facilities.',
      aAr: 'تُشغّل UNEOM فريق عمليات مدينة في المدينة يُدير 48+ حساباً نشطاً عبر الضيافة المجاورة للمسجد النبوي والرعاية الصحية الثلاثية. يحافظ مستودع المدينة على مخزون برنامج تدفّق مستمرّ بتنفيذ أطقم الموظّفين الجدد خلال 48 ساعة لجميع المنشآت المرتكزة والمنشآت الطبّية.'
    },
    {
      qEn: 'How does UNEOM handle Medina\'s steady-state operational tempo vs Mecca\'s seasonal compression?',
      qAr: 'كيف تتعامل UNEOM مع إيقاع المدينة التشغيلي الثابت مقابل ضغط مكة الموسمي؟',
      aEn: 'Two different programme architectures. Mecca: Hajj-rotation specialty fabrics held in 21-day-advance reserve, 120-cycle compression validation, daily replacement-ready stock for the 7-week season. Medina: continuous-flow programme stock at 200-cycle annual durability, 48-hour joiner-kit fulfillment, full premium wool-poly weaves enabled by stable climate. Same UNEOM operational network; different fabric chemistry and logistics calibrated to the two cities\' distinct service patterns.',
      aAr: 'هندسة برنامجَين مختلفتَين. مكة: أقمشة استبدال الحج التخصّصية محفوظة في احتياطي 21 يوماً مسبقاً، اعتماد ضغط 120 دورة، مخزون استبدال جاهز يومياً للموسم 7 أسابيع. المدينة: مخزون برنامج تدفّق مستمرّ بمتانة 200 دورة سنوياً، تنفيذ أطقم الموظّفين الجدد خلال 48 ساعة، أنسجة صوف-بوليستر فاخرة كاملة مُتاحة بفضل المناخ المستقرّ. نفس شبكة UNEOM التشغيلية؛ كيمياء قماش ولوجستيات مختلفة مُعايرة لأنماط خدمة المدينتَين المتميّزة.'
    },
    {
      qEn: 'What does Madinah Municipality require for hotel and pilgrim service worker uniforms?',
      qAr: 'ما تتطلّبه أمانة المدينة المنورة لزي عامل الفندق وخدمة الحجّاج؟',
      aEn: 'Amanat Al-Madinah Al-Munawwarah requires pilgrim service employees to present in attire reflecting the operator\'s registered identity, with clear worker identification, reflecting cultural reverence appropriate to the City of the Prophet, and aligned with national MC standards. UNEOM ships Medina-spec audit packs covering all Madinah Municipality requirements with every property programme.',
      aAr: 'تتطلّب أمانة المدينة المنورة من موظّفي خدمة الحجّاج الظهور بزي يعكس الهوية المسجَّلة للمُشغّل، مع تعريف عامل واضح، ويعكس الاحترام الثقافي الملائم لمدينة الرسول، ومتماشٍ مع معايير وزارة التجارة الوطنية. تُسلِّم UNEOM ملفات تدقيق بمواصفات المدينة تُغطّي جميع متطلّبات أمانة المدينة المنورة مع كل برنامج منشأة.'
    },
    {
      qEn: 'Can Medina hotels use the same uniform programme year-round?',
      qAr: 'هل يمكن لفنادق المدينة استخدام نفس برنامج الزي على مدار السنة؟',
      aEn: 'Yes — and this is operationally optimal for Medina\'s climate. Unlike Mecca where Hajj-season specialty fabrics deploy alongside year-round operational fabrics, Medina\'s steady-state climate and continuous Umrah flow allow a single integrated programme. UNEOM\'s Medina-spec premium wool-poly weave delivers 16-month rotation cycles consistently across all 12 months — no seasonal swap required.',
      aAr: 'نعم — وهذا مثالي تشغيلياً لمناخ المدينة. على خلاف مكة حيث تُنشر أقمشة موسم الحج التخصّصية بجانب أقمشة تشغيلية على مدار السنة، مناخ المدينة الثابت وتدفّق العمرة المستمرّ يسمح ببرنامج متكامل واحد. مزيج صوف-بوليستر الفاخر بمواصفات المدينة من UNEOM يُقدّم دورات استبدال 16 شهراً بثبات عبر جميع الأشهر الـ12 — لا حاجة لتبديل موسمي.'
    },
    {
      qEn: 'How do Medina uniforms differ from Mecca uniforms despite both being Holy Cities?',
      qAr: 'كيف تختلف أزياء المدينة عن أزياء مكة رغم أنّ كليهما من المدن المقدّسة؟',
      aEn: 'Climate engineering. Medina sits at 608m elevation with average summer peaks of 38°C and lower humidity than Mecca\'s 43°C lower-elevation profile. Mecca uniforms require Hajj-season high-tenacity fabrics and seasonal-rotation logistics; Medina uniforms can deploy year-round premium wool-poly weaves in stable conditions. Cultural and compliance standards (modesty, religious reverence, MC alignment) are identical across both cities. Physical engineering differs by climate, not religion.',
      aAr: 'هندسة المناخ. تقع المدينة على ارتفاع 608م بمتوسّط ذروة صيفية 38°م ورطوبة أقلّ من ملف مكة عند ارتفاع منخفض 43°م. أزياء مكة تتطلّب أقمشة عالية المتانة لموسم الحج ولوجستيات استبدال موسمية؛ أزياء المدينة يمكن أن تنشر أنسجة صوف-بوليستر فاخرة على مدار السنة في ظروف مستقرّة. المعايير الثقافية والالتزامية (الحشمة، الاحترام الديني، التماشي مع وزارة التجارة) متطابقة عبر المدينتَين. الهندسة الفيزيائية تختلف بالمناخ، لا بالدين.'
    }
  ]
};
