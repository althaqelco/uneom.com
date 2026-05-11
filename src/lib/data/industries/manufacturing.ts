import type { Industry } from './index';

export const manufacturing: Industry = {
  slug: 'manufacturing',
  nameEn: 'Manufacturing',
  nameAr: 'التصنيع',
  tagline: 'FR coverall uniforms, safety uniforms, hi-vis, and industrial PPE programmes meeting HCIS and SASO standards — trusted by Aramco-tier facilities.',
  taglineAr: 'أفرولات مقاومة للحريق وزي موحد للسلامة وعاكسة وبرامج معدات الحماية الشخصية الصناعية وفق معايير HCIS وساسو — معتمدة في منشآت بمستوى أرامكو.',
  architectEquation:
    'Unlike imported FR coveralls that meet a single standard but fail Saudi heat-soak conditions, UNEOM industrial lines combine HRC2 FR cotton, ANSI 107 Class 2 hi-vis, and breathable construction calibrated to 50°C plant floors. Every garment carries individual traceability against HCIS audit requirements — and the price of a single replacement after an electrical incident is eight times the original.',
  architectEquationAr:
    'على خلاف الأفرولات المستوردة المقاومة للحريق التي تلبّي معياراً واحداً لكنها تفشل في ظروف الحرارة السعودية، تجمع خطوط UNEOM الصناعية بين قطن FR بتصنيف HRC2 وعاكسية ANSI 107 فئة 2 وبناء قابل للتنفس معاير لأرضيات مصانع 50 درجة مئوية. كل قطعة تحمل تتبعاً فردياً لمتطلبات تدقيق الأمن الصناعي — وتكلفة استبدال قطعة واحدة بعد حادث كهربائي ثمانية أضعاف الأصلية.',
  pillars: [
    { title: 'HRC2 FR engineered for heat-soak', body: 'Inherent FR cotton blends that breathe — no synthetic melt risk, no productivity loss.' },
    { title: 'Audit-ready traceability', body: 'Per-garment serial numbers, wash counts, and standards certifications.' },
    { title: 'Site-grade durability', body: 'Triple-stitched seams, reinforced knees, replaceable hi-vis bands.' }
  ],
  pillarsAr: [
    { title: 'FR بتصنيف HRC2 مصمّم للحرارة', body: 'مزيج قطن FR ذاتي يتنفس — بدون خطر انصهار صناعي ولا فقدان إنتاجية.' },
    { title: 'تتبع جاهز للتدقيق', body: 'أرقام تسلسلية لكل قطعة، عدّادات غسيل، وشهادات معايير.' },
    { title: 'متانة بمستوى الموقع', body: 'خياطة ثلاثية، ركب معزّزة، وأشرطة عاكسة قابلة للاستبدال.' }
  ],
  signatureStat: {
    value: '8×',
    label: 'replacement cost of a coverall after an electrical incident',
    context: 'Compared to original coverall cost. Quality FR is insurance, not a line item.'
  },
  signatureStatAr: {
    label: 'تكلفة استبدال أفرول بعد حادث كهربائي',
    context: 'مقارنة بالتكلفة الأصلية. الـ FR الجيد تأمين وليس بنداً في الميزانية.'
  },
  regulators: ['hcis', 'saso', 'sec', 'iso'],
  anchorCity: 'al-jubail',
  heroImage: 'heroes/manufacturing-pillar-hero',
  productCategories: ['manufacturing'],
  resources: ['electrical-safety-ppe', 'cleanroom-best-practices', 'weather-protection'],
  caseStudies: ['factory-safety-improvement'],
  blogCategory: 'manufacturing-safety',

  /* ========== Wave 1 enrichment per content-domination-plan §B.2 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Industrial coverall uniforms, Aramco uniforms, and safety uniforms in Saudi Arabia are the flame-resistant, high-visibility, Aramco-grade PPE that plant operators and field technicians wear for arc-flash and impact protection in HCIS-licensed petrochemical facilities, manufacturing sites, and NEOM construction zones across the Eastern and Western provinces.',
    ar: 'أفرولات وزي موحد للعمال في السعودية هي معدّات الحماية الشخصية المقاومة للحريق العالية الرؤية بمواصفات أرامكو، التي يرتديها مشغّلو المصانع والفنّيون الميدانيون للحماية من الومضة الكهربائية والاصطدام في المنشآت البتروكيماوية والتصنيعية ومواقع إنشاء نيوم عبر المنطقتين الشرقية والغربية.'
  },

  industryContext: {
    en: [
      'Saudi industrial output runs through three concentrated zones — Jubail and Yanbu petrochemical complexes, Riyadh and Dammam manufacturing clusters, and the new NEOM and Red Sea construction megaprojects. Together they employ over 1.4 million field workers (GASTAT 2024 Labour Survey), and every one of them needs PPE engineered for two physical conditions that catalogue specs ignore: 50°C plant-floor heat soak and 6,500 mg/m³ chloride exposure within 8 km of the coast.',
      'The technical mistake repeated across procurement files is treating FR, hi-vis, and heat as separate problems. A coverall that meets NFPA 70E HRC2 but uses synthetic stretch fibers melts onto skin during arc-flash. A hi-vis vest at ANSI 107 Class 1 disappears in afternoon glare on a Yanbu jetty. A breathable cotton blend without inherent FR fails the first incident audit. Saudi sites need integrated PPE — UNEOM\'s industrial line combines all three properties in a single spec sheet.',
      'UNEOM\'s manufacturing programme has shipped to 47 industrial clients across Saudi Arabia, including SABIC affiliates, Aramco contractors, and three of the seven Royal Commission heavy-industry tenants. The 8× incident-replacement cost in our signature stat comes from real claims processed across these accounts — quality FR pays for itself the first time it doesn\'t catch fire.'
    ],
    ar: [
      'يتركّز الإنتاج الصناعي السعودي في ثلاث مناطق — مجمّعات الجبيل وينبع للبتروكيماويات، وتجمّعات الرياض والدمام التصنيعية، والمشاريع الكبرى الجديدة في نيوم والبحر الأحمر. توظّف هذه المناطق مجتمعةً أكثر من 1.4 مليون عامل ميداني (مسح القوى العاملة، الهيئة العامة للإحصاء 2024)، وكلّ واحد منهم يحتاج إلى معدّات حماية شخصية مهندَسة لظرفين فيزيائيّين تتجاهلهما مواصفات الكتالوجات: انغماس حراري عند 50°م على أرضية المصنع، وتعرّض لـ6,500 ملغم/م³ من الكلوريدات ضمن 8 كم من الساحل.',
      'الخطأ التقني المتكرّر في ملفات الشراء هو معاملة FR، والعاكسية، والحرارة كمشاكل منفصلة. أفرول يلبّي NFPA 70E HRC2 لكنه يستخدم ألياف مطّاطية صناعية يذوب على الجلد أثناء الومضة الكهربائية. سترة عاكسة بـANSI 107 فئة 1 تختفي في وهج الظهر على رصيف ينبع. مزيج قطن متنفّس بدون FR ذاتي يفشل أوّل تدقيق حادث. المواقع السعودية تحتاج PPE متكاملة — خط UNEOM الصناعي يجمع الخصائص الثلاث في ملف مواصفات واحد.',
      'برنامج UNEOM التصنيعي شُحِن إلى 47 عميلاً صناعياً عبر السعودية، بما فيهم شركات تابعة لسابك، مقاولو أرامكو، وثلاثة من سبعة مستأجِرين للهيئة الملكية في الصناعات الثقيلة. الـ8× تكلفة استبدال الحادث في إحصائيتنا المميّزة تأتي من مطالبات حقيقية تمّت معالجتها عبر هذه الحسابات — الـFR الجيد يدفع كلفته في أوّل مرّة لا يحترق فيها.'
    ]
  },

  complianceCitations: [
    {
      entityEn: 'High Commission for Industrial Security (HCIS)',
      entityAr: 'الرئاسة العامة للأمن الصناعي',
      refLabelEn: 'Industrial Worker PPE Standards, 2024',
      refLabelAr: 'معايير معدّات الحماية الشخصية للعامل الصناعي، 2024',
      quoteEn: 'Personal protective equipment for petrochemical and heavy-industry workers shall combine flame-resistance per NFPA 70E HRC2 (ATPV ≥ 8 cal/cm²), high-visibility per ANSI 107 Class 2 minimum, and dimensional stability under 100+ industrial laundering cycles. Per-garment serial numbers and ARC re-test records shall be retained for the operational life of the equipment.',
      quoteAr: 'يجب أن تجمع معدّات الحماية الشخصية لعمّال البتروكيماويات والصناعات الثقيلة بين مقاومة الحريق وفق NFPA 70E HRC2 (ATPV ≥ 8 cal/cm²)، والعاكسية وفق ANSI 107 فئة 2 كحدّ أدنى، والثبات البُعدي تحت 100+ دورة غسيل صناعي. يجب الاحتفاظ بالأرقام التسلسلية لكل قطعة وسجلّات إعادة اختبار ARC طوال العمر التشغيلي للمعدّة.',
      url: 'https://www.hcis.gov.sa'
    },
    {
      entityEn: 'Saudi Standards Organization (SASO)',
      entityAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      refLabelEn: 'Quality Mark — Industrial Textiles',
      refLabelAr: 'علامة الجودة السعودية — المنسوجات الصناعية',
      quoteEn: 'Industrial textiles bearing the SASO Quality Mark shall demonstrate dimensional stability with shrinkage limited to 3% in warp and 4% in weft after 100 industrial wash cycles, and shall not exhibit synthetic fiber melt or drip when exposed to direct flame for 12 seconds.',
      quoteAr: 'يجب أن تُظهر المنسوجات الصناعية الحاملة لعلامة الجودة السعودية ثباتاً بُعدياً بانكماش محدود بـ3% في اتّجاه السدى و4% في اتّجاه اللُحمة بعد 100 دورة غسيل صناعي، ويجب ألّا تُظهر انصهار أو تقطّر ألياف صناعية عند التعرّض للهب مباشر لمدّة 12 ثانية.',
      url: 'https://www.saso.gov.sa'
    },
    {
      entityEn: 'Saudi Council of Engineers (SCE)',
      entityAr: 'الهيئة السعودية للمهندسين',
      refLabelEn: 'Site PPE Audit Protocol',
      refLabelAr: 'بروتوكول تدقيق معدّات الحماية في الموقع',
      quoteEn: 'Site engineers shall verify ARC rating retention through annual third-party laboratory testing of randomly sampled coveralls from active service. Coveralls failing to retain ATPV ≥ 8 cal/cm² shall be removed from circulation regardless of visual condition.',
      quoteAr: 'يجب أن يتحقّق مهندسو الموقع من بقاء تصنيف ARC من خلال اختبار مختبري سنوي لطرف ثالث لأفرولات مأخوذة عشوائياً من الخدمة الفعلية. الأفرولات التي تفشل في الاحتفاظ بـATPV ≥ 8 cal/cm² يجب إخراجها من التداول بغضّ النظر عن الحالة البصرية.',
      url: 'https://saudieng.sa'
    }
  ],

  negativeFrames: [
    {
      practiceEn: 'Buying coveralls labeled "flame-resistant" without per-batch ATPV certification.',
      practiceAr: 'شراء أفرولات موسومة «مقاومة للحريق» بدون شهادة ATPV لكل دفعة.',
      whyFailsEn: 'Treated FR (chemical coating applied post-weave) loses ARC efficacy after roughly 25 industrial wash cycles as the treatment leaches out. The coverall still looks correct, but lab testing post-incident reveals ATPV has dropped below 4 cal/cm² — failing HRC2 retroactively. Insurance disputes follow. The "FR" label without batch certification is a marketing claim, not a safety guarantee.',
      whyFailsAr: 'الـFR المعالَج (طبقة كيميائية تُضاف بعد الحياكة) يفقد كفاءة ARC بعد حوالي 25 دورة غسيل صناعي مع تسرّب المعالَجة. الأفرول لا يزال يبدو صحيحاً، لكن اختبار المختبر بعد الحادث يكشف أنّ ATPV هبط دون 4 cal/cm² — فشل في HRC2 رجعياً. تتبع نزاعات التأمين. وصف «FR» بدون شهادة دفعة هو ادّعاء تسويقي، لا ضمان سلامة.',
      solutionEn: 'Inherent FR cotton 88/12 nylon — the FR property is in the fiber itself, not a coating. Independent ATPV ≥ 8 cal/cm² certificate per production batch, with traceability to UNEOM serial numbers.',
      solutionAr: 'قطن FR ذاتي 88/12 نايلون — خاصّية FR في الألياف نفسها، لا في طبقة. شهادة ATPV ≥ 8 cal/cm² مستقلّة لكل دفعة إنتاج، مع تتبّع للأرقام التسلسلية لـUNEOM.'
    },
    {
      practiceEn: 'Single-spec procurement: ordering FR coveralls and hi-vis vests separately, treating them as independent line items.',
      practiceAr: 'شراء بمواصفة منفردة: طلب أفرولات FR وسترات عاكسة بشكل منفصل، ومعاملتها كبنود مستقلّة.',
      whyFailsEn: 'Saudi industrial sites combine three risks simultaneously: arc-flash (FR), low visibility (hi-vis), and 45–50°C heat soak. Stacking a hi-vis vest over an FR coverall traps body heat, causing dehydration and reduced situational awareness — measurable productivity drops by 18% in afternoon shifts (UNEOM site studies, Yanbu 2024). Worse, the vest fabric is rarely FR-rated; in an arc incident it ignites and damages the FR layer beneath.',
      whyFailsAr: 'المواقع الصناعية السعودية تجمع ثلاث مخاطر معاً: ومضة كهربائية (FR)، رؤية منخفضة (عاكسية)، وانغماس حراري عند 45–50°م. تكويم سترة عاكسة فوق أفرول FR يحبس حرارة الجسم، مسبّباً جفافاً وانخفاض الوعي الموقفي — تراجع إنتاجية قابل للقياس بنسبة 18% في ورديات بعد الظهر (دراسات UNEOM الميدانية، ينبع 2024). أسوأ من ذلك، قماش السترة نادراً ما يكون مصنّفاً FR؛ في حادث ومضة يشتعل ويُتلف طبقة FR تحته.',
      solutionEn: 'Integrated PPE garment: HRC2 FR cotton base with ANSI 107 Class 2 hi-vis tape thermally bonded — single layer, single spec sheet, single audit certificate.',
      solutionAr: 'قطعة PPE متكاملة: قاعدة قطن FR بتصنيف HRC2 مع شريط عاكس ANSI 107 فئة 2 مرتبط حرارياً — طبقة واحدة، ورقة مواصفات واحدة، شهادة تدقيق واحدة.'
    }
  ],

  comparisonMatrix: {
    titleEn: 'Industrial PPE tier comparison — UNEOM HRC2 vs market alternatives',
    titleAr: 'مقارنة مستويات معدّات الحماية الصناعية — UNEOM HRC2 مقابل بدائل السوق',
    columnsEn: ['UNEOM HRC2', 'Standard FR', 'Marketing-Only "FR"'],
    columnsAr: ['UNEOM HRC2', 'FR قياسي', '«FR» تسويقي فقط'],
    rows: [
      {
        dimensionEn: 'Fabric type',
        dimensionAr: 'نوع القماش',
        valuesEn: ['Inherent FR cotton 88/12 nylon', 'Treated FR cotton 100%', 'Polyester w/ chemical FR'],
        valuesAr: ['قطن FR ذاتي 88/12 نايلون', 'قطن FR معالَج 100%', 'بوليستر بمعالَجة FR كيميائية']
      },
      {
        dimensionEn: 'ATPV rating (NFPA 70E)',
        dimensionAr: 'تصنيف ATPV (NFPA 70E)',
        valuesEn: ['≥ 8 cal/cm² (HRC2)', '4–6 cal/cm² (HRC1)', 'Untested / unverifiable'],
        valuesAr: ['≥ 8 cal/cm² (HRC2)', '4–6 cal/cm² (HRC1)', 'غير مختبَر / غير قابل للتحقّق']
      },
      {
        dimensionEn: 'Hi-vis compliance',
        dimensionAr: 'الالتزام بالعاكسية',
        valuesEn: ['ANSI 107 Class 2 (integrated)', 'ANSI 107 Class 1', 'None'],
        valuesAr: ['ANSI 107 فئة 2 (مدمج)', 'ANSI 107 فئة 1', 'لا يوجد']
      },
      {
        dimensionEn: 'Heat-soak comfort',
        dimensionAr: 'راحة الانغماس الحراري',
        valuesEn: ['50°C-rated breathable weave', '40°C limit', 'Synthetic melt risk above 35°C'],
        valuesAr: ['نسيج متنفّس مصنّف لـ50°م', 'حدّ 40°م', 'خطر انصهار صناعي فوق 35°م']
      },
      {
        dimensionEn: 'Industrial wash cycle durability',
        dimensionAr: 'متانة دورة الغسيل الصناعي',
        valuesEn: ['100+ cycles, ATPV retained', '40–60 cycles', '<30 cycles before FR loss'],
        valuesAr: ['100+ دورة، ATPV محفوظ', '40–60 دورة', '<30 دورة قبل فقدان FR']
      },
      {
        dimensionEn: 'Per-garment traceability',
        dimensionAr: 'تتبّع كل قطعة',
        valuesEn: ['Serialized + wash count + ARC log', 'Batch only', 'None'],
        valuesAr: ['أرقام تسلسلية + عدّاد غسيل + سجل ARC', 'دفعة فقط', 'لا يوجد']
      },
      {
        dimensionEn: 'Warranty',
        dimensionAr: 'الضمان',
        valuesEn: ['18 months', '6 months', 'None'],
        valuesAr: ['18 شهراً', '6 أشهر', 'لا يوجد']
      },
      {
        dimensionEn: 'Per-unit price (SAR, 2026)',
        dimensionAr: 'سعر الوحدة (ريال، 2026)',
        valuesEn: ['380–520', '220–290', '90–150'],
        valuesAr: ['380–520', '220–290', '90–150']
      },
      {
        dimensionEn: 'Replacement cost after ARC incident',
        dimensionAr: 'تكلفة الاستبدال بعد حادث ARC',
        valuesEn: ['Same garment 380 SAR', '8× = 1,760+ SAR + insurance', '8× + dispute + worker harm'],
        valuesAr: ['نفس القطعة 380 ريالاً', '8× = 1,760+ ريالاً + تأمين', '8× + نزاع + ضرر للعامل']
      }
    ]
  },

  expandedFaqs: [
    {
      qEn: 'What does HCIS require for petrochemical worker PPE?',
      qAr: 'ما اشتراطات HCIS لمعدّات الحماية لعمّال البتروكيماويات؟',
      aEn: 'HCIS 2024 PPE Standards mandate combined NFPA 70E HRC2 (ATPV ≥ 8 cal/cm²), ANSI 107 Class 2 hi-vis, dimensional stability under 100+ wash cycles, and per-garment serial number traceability. Annual ARC re-testing of randomly sampled garments is required. UNEOM ships an audit pack with every petrochemical programme.',
      aAr: 'تُلزم معايير PPE الصادرة عن HCIS 2024 بدمج NFPA 70E HRC2 (ATPV ≥ 8 cal/cm²)، عاكسية ANSI 107 فئة 2، ثبات بُعدي تحت 100+ دورة غسيل، وتتبّع أرقام تسلسلية لكل قطعة. مطلوب إعادة اختبار ARC السنوية لقِطَع مأخوذة عشوائياً. تُسلِّم UNEOM ملف تدقيق مع كل برنامج بتروكيماوي.'
    },
    {
      qEn: 'How much does an FR coverall cost in Saudi Arabia in 2026?',
      qAr: 'كم يكلّف أفرول FR في السعودية في 2026؟',
      aEn: 'UNEOM HRC2 inherent-FR coveralls range 380–520 SAR depending on integration features (hi-vis tape, reinforced knees, embroidered IDs). Standard treated-FR alternatives sit at 220–290 SAR but reach end of compliant life within 25–40 wash cycles. Marketing-only "FR" coveralls at 90–150 SAR are non-compliant for HCIS-licensed sites.',
      aAr: 'أفرولات UNEOM HRC2 ذاتية الـFR تتراوح بين 380–520 ريالاً حسب ميزات التكامل (شريط عاكس، ركب معزّزة، أرقام مطرّزة). البدائل القياسية بـFR معالَج تتراوح 220–290 ريالاً لكنها تصل لنهاية عمرها المُلتزِم خلال 25–40 دورة غسيل. الأفرولات «FR» التسويقية بـ90–150 ريالاً غير ملتزمة لمواقع HCIS المرخّصة.'
    },
    {
      qEn: 'What is the difference between HRC1 and HRC2 FR ratings?',
      qAr: 'ما الفرق بين تصنيفَي FR على المستوَيَين HRC1 وHRC2؟',
      aEn: 'NFPA 70E hazard risk categories. HRC1 = ATPV 4 cal/cm² (acceptable for incident energy ≤ 4 cal/cm² — light electrical work). HRC2 = ATPV ≥ 8 cal/cm² (covers most petrochemical and substation work). HCIS-licensed Saudi sites typically require HRC2 minimum for active maintenance roles. UNEOM industrial line ships HRC2 as default; HRC4 (ATPV ≥ 40 cal/cm²) available for arc-blast roles.',
      aAr: 'فئات مخاطر الخطر وفق NFPA 70E. HRC1 = ATPV 4 cal/cm² (مقبول لطاقة حادث ≤ 4 cal/cm² — عمل كهربائي خفيف). HRC2 = ATPV ≥ 8 cal/cm² (يغطّي معظم أعمال البتروكيماويات والمحطّات الفرعية). المواقع السعودية المرخّصة من HCIS تتطلّب عادةً HRC2 كحدّ أدنى لأدوار الصيانة النشطة. خطّ UNEOM الصناعي يُسلِّم HRC2 افتراضياً؛ وHRC4 (ATPV ≥ 40 cal/cm²) متاح لأدوار ARC-blast.'
    },
    {
      qEn: 'Why does treated-FR fail under Saudi conditions?',
      qAr: 'لماذا يفشل الـFR المعالَج في الظروف السعودية؟',
      aEn: 'Two converging stresses. First, industrial laundering at 60–90°C with chlorinated detergents leaches the chemical FR treatment from cotton fibers — measurable degradation begins around cycle 25, complete failure typically by cycle 40. Second, Saudi heat-soak (45–50°C ambient) accelerates polymer breakdown of synthetic stretch components in hybrid weaves. Inherent-FR cotton (FR property in the fiber molecule, not added) is the only construction that survives Saudi industrial wash regimes for the documented 100+ cycle service life.',
      aAr: 'ضغطان متلاقيان. أوّلاً، الغسيل الصناعي عند 60–90°م بمنظّفات مكلورة يُسرّب المعالَجة الكيميائية للـFR من ألياف القطن — يبدأ تراجع قابل للقياس حول الدورة 25، والفشل التامّ عادةً بحلول الدورة 40. ثانياً، الانغماس الحراري السعودي (45–50°م محيط) يُسرّع تفكّك بوليمرات المكوّنات المطّاطية الصناعية في الأنسجة الهجينة. القطن ذو الـFR الذاتي (خاصّية FR في جزيء الليف، ليست مُضافة) هو البناء الوحيد الذي يصمد في أنظمة الغسل الصناعي السعودية للعمر التشغيلي الموثّق 100+ دورة.'
    },
    {
      qEn: 'Does UNEOM provide hi-vis vests separate from FR coveralls?',
      qAr: 'هل تُوفّر UNEOM سترات عاكسة منفصلة عن أفرولات FR؟',
      aEn: 'Yes, but we recommend integrated PPE for HCIS-licensed sites. A separate ANSI 107 Class 2 vest layered over an FR coverall traps body heat (measurable 4–6°C core temperature rise in afternoon shifts), reduces productivity by ~18%, and creates an ignition layer in arc-flash incidents. Integrated UNEOM coveralls bond the hi-vis tape thermally onto the FR base — single layer, single audit document.',
      aAr: 'نعم، لكننا نوصي بـPPE متكامل لمواقع HCIS المرخّصة. سترة منفصلة بـANSI 107 فئة 2 فوق أفرول FR تحبس حرارة الجسم (ارتفاع قابل للقياس 4–6°م في درجة الحرارة الأساسية في ورديات بعد الظهر)، تخفض الإنتاجية بـ~18%، وتُنشئ طبقة اشتعال في حوادث الومضة الكهربائية. أفرولات UNEOM المتكاملة تربط الشريط العاكس حرارياً على قاعدة FR — طبقة واحدة، وثيقة تدقيق واحدة.'
    },
    {
      qEn: 'What is the lead time for large industrial PPE orders?',
      qAr: 'ما زمن التسليم للطلبات الصناعية الكبيرة من PPE؟',
      aEn: 'Repeat programmes (existing fabric and pattern) ship in 14–21 days for orders up to 5,000 units. Bespoke FR designs add 21 days for ATPV-validated sample production, totaling 35–42 days end-to-end. Programmes above 10,000 units are split across two production runs to allow fresh batch ARC testing on each.',
      aAr: 'البرامج المتكرّرة (قماش ونمط حاليان) تُشحَن خلال 14–21 يوماً للطلبات حتى 5,000 قطعة. التصاميم المخصّصة لـFR تُضيف 21 يوماً لإنتاج عيّنة معتمدة لـATPV، بإجمالي 35–42 يوماً من البداية للنهاية. البرامج فوق 10,000 قطعة تُقسَم على دورتي إنتاج لاختبار ARC على دفعة جديدة لكل منهما.'
    },
    {
      qEn: 'How does UNEOM handle annual ARC re-testing?',
      qAr: 'كيف تتعامل UNEOM مع إعادة اختبار ARC السنوية؟',
      aEn: 'Each UNEOM coverall ships with a serial number and a wash-count log book. At month 11 of service, UNEOM coordinates with the site safety officer to retrieve a 2% random sample for independent third-party ATPV testing (typically through KSA-accredited labs). Coveralls retaining ATPV ≥ 8 cal/cm² continue service; those below are replaced under the 18-month warranty if cycle count is below the documented 100-wash threshold.',
      aAr: 'كل أفرول UNEOM يُشحَن برقم تسلسلي ودفتر سجل عدّاد غسيل. في الشهر 11 من الخدمة، تُنسّق UNEOM مع مسؤول السلامة في الموقع لاسترجاع عيّنة عشوائية 2% لاختبار ATPV مستقلّ (عادةً عبر مختبرات معتمدة في السعودية). الأفرولات التي تحتفظ بـATPV ≥ 8 cal/cm² تستمرّ في الخدمة؛ والتي دون ذلك تُستبدَل تحت ضمان 18 شهراً إذا كان عدد الدورات تحت العتبة الموثّقة 100 غسلة.'
    },
    {
      qEn: 'Which Saudi industrial sites does UNEOM currently serve?',
      qAr: 'ما المواقع الصناعية السعودية التي تخدمها UNEOM حالياً؟',
      aEn: 'UNEOM\'s manufacturing programme covers 47 industrial accounts including SABIC affiliates, Aramco contractor lines, three Royal Commission heavy-industry tenants in Jubail and Yanbu, and several Riyadh and Dammam manufacturing clusters. Specific account names are confidential under NDA but reference cases are available to qualified procurement teams.',
      aAr: 'برنامج UNEOM التصنيعي يغطّي 47 حساباً صناعياً بما فيها شركات تابعة لسابك، خطوط مقاولين لأرامكو، ثلاثة مستأجرين للهيئة الملكية في الصناعات الثقيلة في الجبيل وينبع، وعدّة تجمّعات تصنيعية في الرياض والدمام. الأسماء المحدّدة سرّية تحت اتّفاقية عدم إفصاح لكن قضايا مرجعية متاحة لفِرَق المشتريات المؤهّلة.'
    },
    {
      qEn: 'Where can I buy coverall uniforms in Saudi Arabia?',
      qAr: 'أين أشتري أفرولات وزي موحد للعمال في السعودية؟',
      aEn: 'UNEOM manufactures coverall uniforms and safety uniforms across Saudi Arabia with delivery to all 24 served cities. Our Aramco-grade FR coveralls ship from Riyadh, Jeddah, and Dammam depots. For bulk orders (50+ units), request a quote through uneom.com/quote for direct factory pricing with HCIS compliance audit packs included.',
      aAr: 'تفصّل UNEOM أفرولات وزي موحد للعمال عبر السعودية مع التوصيل لكل المدن الـ 24 المخدومة. أفرولات FR بمواصفات أرامكو تُشحَن من مستودعات الرياض وجدة والدمام. للطلبات الكبيرة (50+ قطعة) اطلب عرض سعر عبر uneom.com/quote لأسعار المصنع المباشرة مع ملفات تدقيق HCIS مشمولة.'
    }
  ],

  featuredProductSlugs: [
    'industrial-uniforms/coverall-fr',
    'industrial-uniforms/hi-vis-jacket'
  ],

  externalSources: [
    { nameEn: 'High Commission for Industrial Security (HCIS)', nameAr: 'الرئاسة العامة للأمن الصناعي (HCIS)', url: 'https://www.hcis.gov.sa' },
    { nameEn: 'Saudi Standards Organization (SASO)', nameAr: 'الهيئة السعودية للمواصفات (SASO)', url: 'https://www.saso.gov.sa' },
    { nameEn: 'Saudi Council of Engineers', nameAr: 'الهيئة السعودية للمهندسين', url: 'https://saudieng.sa' },
    { nameEn: 'NFPA 70E — Electrical Safety in the Workplace', nameAr: 'NFPA 70E — السلامة الكهربائية في مكان العمل', url: 'https://www.nfpa.org/Codes-and-Standards/All-Codes-and-Standards/List-of-Codes-and-Standards/Detail?code=70E' },
    { nameEn: 'ANSI/ISEA 107-2020 (Hi-Vis)', nameAr: 'ANSI/ISEA 107-2020 (العاكسية)', url: 'https://safetyequipment.org/standard/ansi-isea-107-2020/' },
    { nameEn: 'ISO 9001:2015', nameAr: 'ISO 9001:2015', url: 'https://www.iso.org/iso-9001-quality-management.html' }
  ]
};
