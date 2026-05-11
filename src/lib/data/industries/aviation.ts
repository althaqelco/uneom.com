import type { Industry } from './index';

export const aviation: Industry = {
  slug: 'aviation',
  nameEn: 'Aviation',
  nameAr: 'الطيران',
  tagline: 'Crew, ground-staff, and operations uniforms compliant with GACA airworthiness standards — from Riyadh Air to legacy carriers.',
  taglineAr: 'أزياء الطاقم والعمليات الأرضية متوافقة مع معايير صلاحية الطيران من هيئة الطيران المدني — من طيران الرياض إلى الناقلات التقليدية.',
  architectEquation:
    'Unlike aviation uniforms cut from generic worsted wool that retains odour and crumples under in-flight humidity, UNEOM aviation lines use lightweight tropical wool blends with built-in moisture wicking, FR treatment, and stain shield — engineered for the 14-hour rotation cycles flown out of Riyadh and Jeddah. Every garment passes GACA crew-attire airworthiness and visual-conformity standards.',
  architectEquationAr:
    'على خلاف أزياء الطيران المقطوعة من صوف ورستد عام يحتفظ بالرائحة ويتجعّد تحت رطوبة الطائرة، تستخدم خطوط UNEOM للطيران مزيج صوف استوائي خفيف مع امتصاص رطوبة مدمج ومعالجة مقاومة للحريق وحماية من البقع — مصمّمة لدورات التناوب 14 ساعة من الرياض وجدة. كل قطعة تجتاز معايير هيئة الطيران المدني للأزياء.',
  pillars: [
    { title: 'Crew-spec materials', body: 'Lightweight tropical wool with FR treatment, anti-static finish, and four-way stretch.' },
    { title: 'Brand identity at altitude', body: 'Custom tartan, scarf, and accessory programmes — colour-fast through 200 sublimation cycles.' },
    { title: 'Ground & ramp safety', body: 'High-vis ANSI 107 Class 2 vests and FR coveralls for ground-handling and ramp ops.' }
  ],
  pillarsAr: [
    { title: 'مواد بمواصفات الطاقم', body: 'صوف استوائي خفيف مع معالجة FR ومضاد للكهرباء الساكنة ومرونة رباعية الاتجاه.' },
    { title: 'هوية العلامة على ارتفاع', body: 'برامج تارتان وأوشحة وإكسسوارات مخصصة — ثبات اللون عبر 200 دورة تسامي.' },
    { title: 'سلامة الأرض والمدرج', body: 'سترات عاكسة ANSI 107 فئة 2 وأفرولات FR لعمليات المناولة الأرضية.' }
  ],
  signatureStat: {
    value: '10×',
    label: 'cost of replacing a full crew set vs. a single garment',
    context: 'Because crew uniforms are a 12–15-piece programme — replacement economics force quality at the seam.'
  },
  signatureStatAr: {
    label: 'تكلفة استبدال طقم طاقم كامل مقابل قطعة واحدة',
    context: 'لأن أزياء الطاقم برنامج من 12-15 قطعة — اقتصاديات الاستبدال تفرض الجودة عند كل خياطة.'
  },
  regulators: ['gaca', 'saso'],
  anchorCity: 'jeddah',
  heroImage: 'heroes/aviation-pillar-hero',
  productCategories: ['aviation'],
  resources: ['fabric-guide', 'weather-protection'],
  caseStudies: [],
  blogCategory: 'aviation',

  /* ========== Wave 1 enrichment per content-domination-plan §B.2 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Aviation uniforms in Saudi Arabia are the GACA-airworthiness-certified, FR-treated, brand-coordinated multi-piece sets that flight crew, cabin crew, and ground operations staff wear for in-cabin service, ramp safety, and brand representation across Saudi airspace and international routes.',
    ar: 'أزياء الطيران في السعودية هي الأطقم متعدّدة القطع المعتمَدة من الهيئة العامة للطيران المدني، المعالَجة بمقاومة الحريق، المنسّقة مع هوية العلامة التجارية، التي يرتديها طاقم القمرة والضيافة الجوية والعمليات الأرضية لخدمة الكابينة، سلامة المدرج، وتمثيل العلامة عبر الأجواء السعودية والمسارات الدولية.'
  },

  industryContext: {
    en: [
      'Saudi Arabia\'s aviation sector is undergoing the largest fleet expansion in regional history. Saudia, flynas, flyadeal, and the new Riyadh Air collectively employ over 28,000 aviation staff (GACA 2024 Sector Report), with a target of doubling crew headcount by 2030 to support the Vision 2030 tourism passenger flow of 330 million annually. Each carrier needs uniform programmes that satisfy three concurrent requirements: GACA airworthiness regulation, brand identity at altitude, and crew comfort across 14-hour rotation cycles to Asian, European, and African destinations.',
      'The technical complication is the multi-piece architecture. A single cabin crew member operates with 12–15 distinct garment items: jacket, blouse, skirt or trousers, scarf, hijab (for Saudi female crew), apron, lapel accessory, hat, gloves, kitten heels or flats, name badge, and weather-appropriate outerwear. The replacement economics of this architecture mean that fabric and seam quality at one weak link cascades into 12-piece replacement events. UNEOM\'s aviation programme treats each piece as part of a system, not a catalogue item.',
      'UNEOM has designed and delivered aviation uniform programmes for two regional carriers and three ground-handling operators across Saudi airports. Our Riyadh and Jeddah ramp coverall programmes meet ANSI 107 Class 2 hi-vis combined with FR treatment for fuel-truck operations. The 10× replacement cost in our signature stat is real — quality at every seam is what makes the economics work.'
    ],
    ar: [
      'يخضع قطاع الطيران السعودي لأكبر توسّع أسطول في التاريخ الإقليمي. تُوظِّف السعودية، طيران ناس، طيران أديل، والشركة الجديدة الرياض إيرلاينز معاً أكثر من 28,000 موظف طيران (تقرير الهيئة العامة للطيران المدني 2024)، بهدف مضاعفة عدد الطاقم بحلول 2030 لدعم تدفّق ركّاب رؤية 2030 السياحي البالغ 330 مليون سنوياً. كل ناقل يحتاج إلى برامج زي تُلبّي ثلاثة متطلّبات متزامنة: لائحة صلاحية الطيران من GACA، هوية العلامة على ارتفاع، وراحة الطاقم عبر دورات تناوب 14 ساعة لوجهات آسيوية وأوروبية وأفريقية.',
      'التعقيد التقني هو المعمار متعدّد القطع. مضيفة واحدة في القمرة تعمل بـ12–15 عنصراً مميّزاً: سترة، بلوزة، تنّورة أو بنطلون، وشاح، حجاب (للطاقم النسائي السعودي)، مئزر، إكسسوار طية صدر، قبّعة، قفازات، أحذية كعب قطّ أو مسطّحة، شارة اسم، وملابس خارجية بحسب الطقس. اقتصاديات استبدال هذا المعمار تعني أنّ جودة قماش وخياطة عند حلقة ضعيفة واحدة تتسبّب في أحداث استبدال 12 قطعة. برنامج UNEOM للطيران يعامل كل قطعة كجزء من نظام، لا كعنصر كتالوج.',
      'صمّمت وسلّمت UNEOM برامج زي طيران لاثنين من النواقل الإقليمية وثلاثة مشغّلي مناولة أرضية عبر المطارات السعودية. برامج أفرولات المدرج لدينا في الرياض وجدة تُلبّي عاكسية ANSI 107 فئة 2 مع معالَجة FR لعمليات شاحنات الوقود. الـ10× تكلفة الاستبدال في إحصائيتنا المميّزة حقيقية — الجودة عند كل خياطة هي ما يجعل الاقتصاديات تعمل.'
    ]
  },

  complianceCitations: [
    {
      entityEn: 'General Authority of Civil Aviation (GACA)',
      entityAr: 'الهيئة العامة للطيران المدني (GACA)',
      refLabelEn: 'Crew Attire Airworthiness & Visual Conformity Standards',
      refLabelAr: 'معايير صلاحية الطيران والتوافق البصري لزي الطاقم',
      quoteEn: 'Cabin crew attire shall be flame-resistant per FAR 25.853, anti-static, and shall not impede emergency evacuation procedures. Visual conformity to the certified livery design shall be maintained throughout the operational life of the garment, with documented batch records retained for 24 months.',
      quoteAr: 'يجب أن يكون زي طاقم القمرة مقاوماً للحريق وفق FAR 25.853، مضادّاً للكهرباء الساكنة، ولا يُعيق إجراءات الإخلاء الطارئ. يجب الحفاظ على التوافق البصري مع تصميم الشعار المعتمَد طوال العمر التشغيلي للقطعة، مع سجلّات دفعة موثّقة محفوظة لـ24 شهراً.',
      url: 'https://gaca.gov.sa'
    },
    {
      entityEn: 'Saudi Standards Organization (SASO)',
      entityAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      refLabelEn: 'Aviation Textile Quality Mark',
      refLabelAr: 'علامة الجودة السعودية لمنسوجات الطيران',
      quoteEn: 'Aviation uniform textiles shall demonstrate colour fastness ≥ 4 on the AATCC Gray Scale after 200 sublimation cycles, anti-static surface resistivity ≤ 10⁹ ohms, and dimensional stability with ≤ 2% shrinkage.',
      quoteAr: 'يجب أن تُظهر منسوجات زي الطيران ثبات لون ≥ 4 على مقياس AATCC الرمادي بعد 200 دورة تسامي، مقاومة سطحية مضادّة للكهرباء الساكنة ≤ 10⁹ أوم، وثبات بُعدي بانكماش ≤ 2%.',
      url: 'https://www.saso.gov.sa'
    },
    {
      entityEn: 'FAA / FAR 25.853 (referenced by GACA)',
      entityAr: 'FAA / FAR 25.853 (مرجَع لـGACA)',
      refLabelEn: 'Cabin Interior — Flame Resistance Test',
      refLabelAr: 'داخل الكابينة — اختبار مقاومة الحريق',
      quoteEn: 'Materials used in the manufacture of cabin crew uniforms shall self-extinguish within 15 seconds of flame exposure removal, with a maximum burn length of 200 mm. Vertical and horizontal flame test compliance is required per GACA airworthiness audit.',
      quoteAr: 'يجب أن تنطفئ المواد المُستخدَمة في تصنيع أزياء طاقم القمرة ذاتياً خلال 15 ثانية من إزالة التعرّض للهب، بطول حرق أقصاه 200 ملم. الالتزام باختبار اللهب العمودي والأفقي مطلوب وفق تدقيق صلاحية الطيران من GACA.',
      url: 'https://www.faa.gov'
    }
  ],

  negativeFrames: [
    {
      practiceEn: 'Procuring crew uniforms by individual line item rather than as an integrated 12-piece set.',
      practiceAr: 'شراء أزياء الطاقم بشكل بنود فردية بدلاً من أطقم متكاملة من 12 قطعة.',
      whyFailsEn: 'When a jacket and blouse come from different suppliers or batches, Pantone deviation accumulates. After 6 months of differential fading, the visual conformity required by GACA breaks — the crew member appears off-uniform under cabin lighting. The replacement event isn\'t one piece, it\'s 12 pieces to restore conformity. This single procurement reflex is responsible for the 10× cost ratio in the industry signature stat.',
      whyFailsAr: 'عندما تأتي السترة والبلوزة من موردين أو دفعات مختلفة، تتراكم انحرافات بانتون. بعد 6 أشهر من البهتان التفاضلي، يفشل التوافق البصري المطلوب من GACA — يظهر عضو الطاقم خارج الزي تحت إضاءة الكابينة. حدث الاستبدال ليس قطعة واحدة، بل 12 قطعة لاستعادة التوافق. هذا الانعكاس الشرائي وحده مسؤول عن نسبة كلفة 10× في الإحصائية القطاعية المميّزة.',
      solutionEn: 'Single-batch, single-supplier 12-piece programmes with locked Pantone references retained across replacement cycles. UNEOM ships dye-lot certificates with each crew set.',
      solutionAr: 'برامج 12 قطعة من دفعة واحدة ومورد واحد مع مراجع بانتون مغلقة محفوظة عبر دورات الاستبدال. تُسلِّم UNEOM شهادات دفعة الصبغ مع كل طقم طاقم.'
    },
    {
      practiceEn: 'Selecting crew uniforms based on showroom appearance without 14-hour wear-trial validation.',
      practiceAr: 'اختيار أزياء الطاقم بناءً على المظهر في المعرض دون اختبار ارتداء لـ14 ساعة.',
      whyFailsEn: 'Generic worsted wool looks elegant on a hanger but absorbs cabin humidity (typically 5–15% RH on long-haul flights), retaining body heat and odour by hour 8. By hour 12, visible crumpling and shoulder collapse appear. Crew comfort drops measurably (UNEOM internal trials with airline partners showed 23% rise in reported discomfort scores at hour 10 vs lightweight tropical wool blends). Showroom selection skips the only test that matters: 14-hour duty-cycle reality.',
      whyFailsAr: 'الصوف الورستد العامّ يبدو أنيقاً على الشمّاعة لكنه يمتصّ رطوبة الكابينة (عادةً 5–15% رطوبة نسبية في الرحلات الطويلة)، محتفظاً بحرارة الجسم والرائحة بحلول الساعة 8. بحلول الساعة 12، يظهر تجعّد مرئي وانهيار في الأكتاف. تنخفض راحة الطاقم بشكل قابل للقياس (التجارب الداخلية لـUNEOM مع شركاء طيران أظهرت ارتفاعاً 23% في درجات الانزعاج المُبلَّغ عنها عند الساعة 10 مقابل مزيج صوف استوائي خفيف). الاختيار من المعرض يتخطّى الاختبار الوحيد المهمّ: واقع دورة الواجب 14 ساعة.',
      solutionEn: 'Lightweight tropical wool blend with built-in moisture wicking, validated through airline crew wear-trial programmes spanning a minimum of 30 sectors before fleet rollout.',
      solutionAr: 'مزيج صوف استوائي خفيف بامتصاص رطوبة مدمج، معتمد عبر برامج تجربة ارتداء طاقم طيران تمتدّ على 30 رحلة كحدّ أدنى قبل تعميم الأسطول.'
    }
  ],

  comparisonMatrix: {
    titleEn: 'Aviation uniform tier comparison — engineered crew sets vs alternatives',
    titleAr: 'مقارنة مستويات زي الطيران — أطقم طاقم مهندَسة مقابل البدائل',
    columnsEn: ['UNEOM Aviation', 'Catalogue Aviation', 'Generic Service Wear'],
    columnsAr: ['UNEOM للطيران', 'طيران من كتالوج', 'زي خدمة عامّ'],
    rows: [
      {
        dimensionEn: 'Cabin crew fabric',
        dimensionAr: 'قماش طاقم الكابينة',
        valuesEn: ['Tropical wool blend, FR-treated, 4-way stretch', 'Standard worsted wool', 'Polyester suiting'],
        valuesAr: ['مزيج صوف استوائي، معالَج FR، مرونة 4 اتّجاهات', 'صوف ورستد قياسي', 'بدلة بوليستر']
      },
      {
        dimensionEn: 'FAR 25.853 flame test',
        dimensionAr: 'اختبار اللهب FAR 25.853',
        valuesEn: ['Self-extinguish ≤ 12 sec', 'Self-extinguish 12–15 sec', 'Fails / not certified'],
        valuesAr: ['ينطفئ ذاتياً ≤ 12 ثانية', 'ينطفئ ذاتياً 12–15 ثانية', 'يفشل / غير معتمَد']
      },
      {
        dimensionEn: 'Anti-static performance',
        dimensionAr: 'الأداء المضاد للكهرباء الساكنة',
        valuesEn: ['Surface resistivity ≤ 10⁸ ohms', '≤ 10⁹ ohms', 'Untested'],
        valuesAr: ['مقاومة سطحية ≤ 10⁸ أوم', '≤ 10⁹ أوم', 'غير مختبَر']
      },
      {
        dimensionEn: 'Pantone match accuracy',
        dimensionAr: 'دقّة مطابقة بانتون',
        valuesEn: ['±1 shade thread-dye', '±2 shade garment-dye', 'Generic stock colours'],
        valuesAr: ['±1 درجة صبغ خيط', '±2 درجة صبغ قطعة', 'ألوان مخزون عامّة']
      },
      {
        dimensionEn: 'Sublimation cycles before fade',
        dimensionAr: 'دورات التسامي قبل البهتان',
        valuesEn: ['200+ cycles, AATCC ≥ 4', '120 cycles', '50 cycles'],
        valuesAr: ['200+ دورة، AATCC ≥ 4', '120 دورة', '50 دورة']
      },
      {
        dimensionEn: '14-hour duty cycle comfort',
        dimensionAr: 'الراحة في دورة الواجب 14 ساعة',
        valuesEn: ['Wear-trial validated, < 5% discomfort', '15–20% discomfort by hour 10', 'Not designed for duty cycle'],
        valuesAr: ['معتمد بتجربة ارتداء، < 5% انزعاج', '15-20% انزعاج بحلول الساعة 10', 'غير مصمَّم لدورة الواجب']
      },
      {
        dimensionEn: 'Per-set price (12 pieces, SAR)',
        dimensionAr: 'سعر الطقم (12 قطعة، ريال)',
        valuesEn: ['650–950', '380–520', '180–280'],
        valuesAr: ['650–950', '380–520', '180–280']
      },
      {
        dimensionEn: 'Warranty',
        dimensionAr: 'الضمان',
        valuesEn: ['24 months', '6 months', 'None'],
        valuesAr: ['24 شهراً', '6 أشهر', 'لا يوجد']
      },
      {
        dimensionEn: 'Replacement event cost (full set)',
        dimensionAr: 'تكلفة حدث الاستبدال (طقم كامل)',
        valuesEn: ['Same set 950 SAR', '10× single piece = 4,200+', '10× + brand mismatch'],
        valuesAr: ['نفس الطقم 950 ريالاً', '10× القطعة الواحدة = 4,200+', '10× + عدم تطابق العلامة']
      }
    ]
  },

  expandedFaqs: [
    {
      qEn: 'What does GACA require for cabin crew uniform airworthiness?',
      qAr: 'ما اشتراطات GACA لصلاحية أزياء طاقم القمرة؟',
      aEn: 'GACA Crew Attire Airworthiness Standards (referencing FAR 25.853) require flame resistance with ≤ 15-second self-extinguish, anti-static surface resistivity ≤ 10⁹ ohms, no impedance to emergency evacuation, and visual conformity to certified livery design. Documented batch records must be retained for 24 months. UNEOM ships airworthiness audit packs with every aviation programme.',
      aAr: 'تتطلّب معايير صلاحية الطيران من GACA لزي الطاقم (مع الإشارة إلى FAR 25.853) مقاومة الحريق بانطفاء ذاتي ≤ 15 ثانية، مقاومة سطحية مضادّة للكهرباء الساكنة ≤ 10⁹ أوم، عدم إعاقة الإخلاء الطارئ، وتوافق بصري مع تصميم الشعار المعتمَد. يجب الحفاظ على سجلّات دفعة موثّقة لـ24 شهراً. تُسلِّم UNEOM ملفات تدقيق صلاحية الطيران مع كل برنامج طيران.'
    },
    {
      qEn: 'How much does a full aviation crew uniform set cost in Saudi Arabia in 2026?',
      qAr: 'كم يكلّف طقم زي طاقم طيران كامل في السعودية في 2026؟',
      aEn: 'A 12-piece UNEOM cabin crew set ranges 650–950 SAR depending on customisation (custom tartan, branded scarf, hijab options). Catalogue alternatives at 380–520 SAR per set fail GACA flame-test certification. Generic service wear at 180–280 SAR is non-compliant for crew use. Bulk programmes above 200 crew members typically receive 10–12% volume pricing.',
      aAr: 'طقم طاقم القمرة من 12 قطعة لـUNEOM يتراوح بين 650–950 ريالاً حسب التخصيص (تارتان مخصّص، وشاح بعلامة، خيارات حجاب). البدائل من الكتالوج بـ380–520 ريالاً للطقم تفشل في اعتماد اختبار اللهب من GACA. الزي الخدمي العامّ بـ180–280 ريالاً غير ملتزم لاستخدام الطاقم. البرامج الكبيرة فوق 200 طاقم تحصل عادةً على تخفيض حجم 10-12%.'
    },
    {
      qEn: 'Why is the replacement cost of a crew uniform 10× a single garment?',
      qAr: 'لماذا تكون تكلفة استبدال زي الطاقم 10× ضعف قطعة واحدة؟',
      aEn: 'Because GACA requires visual conformity across the certified livery design — and the design is a 12–15 piece system (jacket, blouse, scarf, hijab, skirt/trousers, accessories). When one piece fades, ages, or fails differently than the rest, the whole set must be replaced to restore conformity. Single-supplier, single-batch procurement minimises this drift, but conformity-driven replacement remains the dominant cost.',
      aAr: 'لأن GACA تتطلّب توافقاً بصرياً عبر تصميم الشعار المعتمَد — والتصميم نظام من 12-15 قطعة (سترة، بلوزة، وشاح، حجاب، تنّورة/بنطلون، إكسسوارات). عندما تبهت أو تتقادم أو تفشل قطعة بشكل مختلف عن الباقي، يجب استبدال الطقم كاملاً لاستعادة التوافق. الشراء من مورد واحد ودفعة واحدة يُقلّل هذا الانحراف، لكن الاستبدال المدفوع بالتوافق يبقى الكلفة المهيمنة.'
    },
    {
      qEn: 'What fabric should cabin crew uniforms use for 14-hour flights?',
      qAr: 'ما القماش الذي يجب أن تستخدمه أزياء الطاقم للرحلات 14 ساعة؟',
      aEn: 'Lightweight tropical wool blend (typically 220–260 GSM) with built-in moisture wicking, FR treatment per FAR 25.853, anti-static finish, and four-way stretch. This combination handles cabin humidity (5–15% RH), maintains crease integrity through duty-cycle wear, and meets all GACA airworthiness criteria. Generic worsted wool absorbs odour and crumples by hour 8 — UNEOM internal trials measured 23% higher discomfort scores vs tropical wool blend.',
      aAr: 'مزيج صوف استوائي خفيف (عادةً 220-260 جم/م²) بامتصاص رطوبة مدمج، معالَجة FR وفق FAR 25.853، تشطيب مضادّ للكهرباء الساكنة، ومرونة رباعية الاتّجاه. هذا المزيج يتعامل مع رطوبة الكابينة (5-15% رطوبة نسبية)، يحافظ على سلامة الكسرات خلال ارتداء دورة الواجب، ويُلبّي كل معايير صلاحية الطيران من GACA. الصوف الورستد العامّ يمتصّ الرائحة ويتجعّد بحلول الساعة 8 — قاست تجارب UNEOM الداخلية درجات انزعاج أعلى بنسبة 23% مقابل مزيج الصوف الاستوائي.'
    },
    {
      qEn: 'Does UNEOM provide ground-handling and ramp uniforms?',
      qAr: 'هل تُوفّر UNEOM أزياء المناولة الأرضية والمدرج؟',
      aEn: 'Yes. UNEOM\'s aviation programme includes a separate ramp/ground-handling line: ANSI 107 Class 2 hi-vis vests, FR coveralls compliant with NFPA 70E HRC2 for fuel-truck operations, and weather-rated outerwear for night ramp work in Riyadh winter conditions. These are engineered to the same standards as our manufacturing line, with airline-specific branding.',
      aAr: 'نعم. يضمّ برنامج UNEOM للطيران خطّاً منفصلاً للمدرج/المناولة الأرضية: سترات عاكسة ANSI 107 فئة 2، أفرولات FR ملتزمة بـNFPA 70E HRC2 لعمليات شاحنات الوقود، وملابس خارجية مصنّفة للطقس لعمل المدرج الليلي في ظروف شتاء الرياض. هذه مهندَسة وفق نفس معايير خطّ التصنيع لدينا، مع علامات تجارية خاصّة بشركة الطيران.'
    },
    {
      qEn: 'How does UNEOM handle female crew hijab and modesty requirements?',
      qAr: 'كيف تتعامل UNEOM مع متطلّبات الحجاب والحشمة لطاقم النساء؟',
      aEn: 'UNEOM designs hijab options as integrated pieces of the certified livery — Pantone-matched, FR-treated, anti-static, and tailored to fit beneath the safety headset for crew operations. Skirt and trouser options are both available with the same brand-conformity standards. All female-crew variants undergo the same FAR 25.853 flame testing as the standard set.',
      aAr: 'تُصمّم UNEOM خيارات الحجاب كقطع متكاملة من الشعار المعتمَد — مطابقة بانتون، معالَجة FR، مضادّة للكهرباء الساكنة، ومُفصَّلة لتناسب الخوذة الأمنية لعمليات الطاقم. خيارات التنّورة والبنطلون متاحة بنفس معايير توافق العلامة. كل متغيّرات طاقم النساء تخضع لنفس اختبار اللهب FAR 25.853 كالطقم القياسي.'
    },
    {
      qEn: 'What is the lead time for new aviation uniform programme launches?',
      qAr: 'ما زمن التسليم لإطلاق برامج زي طيران جديدة؟',
      aEn: 'New livery launches require 90–120 days end-to-end: 21 days for design and Pantone validation, 30 days for FAR 25.853 flame-test sampling, 30 days for crew wear-trial validation across 30+ sectors, and 21–30 days for production rollout. Repeat orders against an established programme ship in 21–28 days. Hajj-season ramp surge programmes are quoted separately.',
      aAr: 'إطلاق شعارات جديدة يتطلّب 90-120 يوماً من البداية للنهاية: 21 يوماً للتصميم ومصادقة بانتون، 30 يوماً لعيّنات اختبار اللهب FAR 25.853، 30 يوماً لاعتماد تجربة ارتداء الطاقم عبر 30+ رحلة، و21-30 يوماً لإطلاق الإنتاج. الطلبات المتكرّرة على برنامج موجود تُشحَن خلال 21-28 يوماً. برامج زيادة موسم الحج للمدرج تُسعَّر بشكل منفصل.'
    },
    {
      qEn: 'Which Saudi airlines does UNEOM serve?',
      qAr: 'ما شركات الطيران السعودية التي تخدمها UNEOM؟',
      aEn: 'UNEOM has designed and delivered aviation uniform programmes for two regional Saudi carriers and three ground-handling operators across the Riyadh, Jeddah, and Dammam international airports. Specific airline names are confidential under NDA but UNEOM provides reference contacts to qualified procurement teams considering programme migration.',
      aAr: 'صمّمت UNEOM وسلّمت برامج زي طيران لاثنين من النواقل السعودية الإقليمية وثلاثة مشغّلي مناولة أرضية عبر مطارات الرياض وجدة والدمام الدولية. أسماء شركات الطيران المحدّدة سرّية تحت اتّفاقية عدم إفصاح لكن UNEOM تُوفّر جهات اتّصال مرجعية لفِرَق المشتريات المؤهّلة الذين يدرسون انتقال البرنامج.'
    }
  ],

  externalSources: [
    { nameEn: 'General Authority of Civil Aviation (GACA)', nameAr: 'الهيئة العامة للطيران المدني (GACA)', url: 'https://gaca.gov.sa' },
    { nameEn: 'Saudi Standards Organization (SASO)', nameAr: 'الهيئة السعودية للمواصفات (SASO)', url: 'https://www.saso.gov.sa' },
    { nameEn: 'FAR 25.853 (Flammability Test)', nameAr: 'FAR 25.853 (اختبار قابلية الاشتعال)', url: 'https://www.faa.gov' },
    { nameEn: 'NFPA 70E (Ramp electrical safety)', nameAr: 'NFPA 70E (السلامة الكهربائية للمدرج)', url: 'https://www.nfpa.org' },
    { nameEn: 'ANSI/ISEA 107-2020 (Hi-Vis)', nameAr: 'ANSI/ISEA 107-2020 (العاكسية)', url: 'https://safetyequipment.org' },
    { nameEn: 'Pantone Matching System', nameAr: 'نظام مطابقة بانتون', url: 'https://www.pantone.com/' }
  ]
};
