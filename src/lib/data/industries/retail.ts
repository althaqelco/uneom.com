import type { Industry } from './index';

export const retail: Industry = {
  slug: 'retail',
  nameEn: 'Retail',
  nameAr: 'التجزئة',
  tagline: 'Store-staff polos, branded apparel, and rotating retail programmes.',
  taglineAr: 'بولو موظفي المتاجر وأزياء بعلامة تجارية وبرامج تجزئة دورية.',
  architectEquation:
    'Unlike retail uniforms that wear thin in six months under Saudi mall foot-traffic and frequent washes, UNEOM retail lines use cotton-spandex twill weaves engineered for 200+ wash cycles with colour retention. Every store gets a tailored colourway, replacement-cycle plan, and on-floor sizing for joiners — all on a programme contract that scales with new openings.',
  architectEquationAr:
    'على خلاف أزياء التجزئة التي تبلى خلال ستة أشهر تحت حركة المراكز التجارية السعودية والغسيل المتكرر، تستخدم خطوط UNEOM للتجزئة أنسجة قطن-سباندكس تويل مصمّمة لأكثر من 200 دورة غسيل مع ثبات اللون. كل متجر يحصل على لون مخصّص وخطة دورة استبدال وقياسات في الموقع — كلها ضمن عقد برنامج يتوسّع مع الافتتاحات الجديدة.',
  pillars: [
    { title: '200-cycle colour retention', body: 'Reactive-dye fabrics that hold brand colour through retail-grade laundry programmes.' },
    { title: 'Joiner-kit logistics', body: 'New-hire kits delivered to store within 48 hours nationwide.' },
    { title: 'Rotation programmes', body: 'Quarterly refresh cycles, leaver returns, and store-pack recycling built in.' }
  ],
  pillarsAr: [
    { title: 'ثبات لون 200 دورة', body: 'أقمشة بأصباغ تفاعلية تحافظ على لون العلامة عبر برامج غسيل التجزئة.' },
    { title: 'لوجستيات أطقم الموظفين الجدد', body: 'أطقم موظفين جدد تُسلَّم للمتجر خلال 48 ساعة على مستوى المملكة.' },
    { title: 'برامج التدوير', body: 'دورات تحديث فصلية، إرجاعات المغادرين، وإعادة تدوير حزم المتاجر مدمجة.' }
  ],
  signatureStat: {
    value: '6 months',
    label: 'average retail uniform life on standard fabrics',
    context: 'UNEOM retail programmes extend this to 14 months with the same wash regime.'
  },
  signatureStatAr: {
    label: 'متوسط عمر زي التجزئة بالأقمشة العادية',
    context: 'برامج UNEOM للتجزئة تمدّد هذا إلى 14 شهراً بنفس نظام الغسيل.'
  },
  regulators: ['mc', 'mhrsd', 'saso'],
  anchorCity: 'riyadh',
  heroImage: 'heroes/retail-pillar-hero',
  productCategories: ['retail'],
  resources: ['fabric-guide'],
  caseStudies: ['nationwide-retail-branding', 'retail-brand-transformation', 'beauty-chain-standardization'],
  blogCategory: 'corporate-education',

  /* ========== Wave 1 enrichment per content-domination-plan §B.2 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Retail uniforms in Saudi Arabia are the cotton-spandex twill, reactive-dyed, brand-coordinated apparel that store staff wear during 200+ wash cycles of mall and storefront service across MC-licensed retailers, with joiner-kit logistics and quarterly rotation built into a programme contract.',
    ar: 'زي التجزئة في السعودية هو الملابس من قطن-سباندكس تويل، المصبوغة بأصباغ تفاعلية، المنسّقة مع العلامة التجارية، التي يرتديها موظّفو المتاجر خلال 200+ دورة غسيل من خدمة المراكز التجارية والمحلّات عبر تجّار التجزئة المرخّصين من وزارة التجارة، مع لوجستيات أطقم الموظّفين الجدد والتدوير الفصلي مدمجة في عقد برنامج.'
  },

  industryContext: {
    en: [
      'Saudi Arabia\'s retail sector is one of the fastest-evolving in the GCC, supported by Vision 2030 entertainment-and-leisure transformation. Riyadh Boulevard, Boulevard Riyadh City, the new Diriyah Gate retail districts, and the existing mall portfolio (Mall of Arabia, Riyadh Park, Red Sea Mall) collectively employ over 380,000 retail-floor staff (Ministry of Commerce Retail Sector Bulletin 2024). Each retailer needs uniform programmes that can scale with new openings, accommodate quarterly seasonal refreshes, and survive the wash regime of high-foot-traffic service environments.',
      'The technical reality of retail uniforms is wash-cycle accumulation. A retail-floor staff member rotates through 4–5 uniform wash cycles per week — over 250 cycles annually. Standard polyester or cotton blends fade visibly by month 4 and structurally fail by month 6. UNEOM\'s retail line uses cotton-spandex twill with reactive-dye chemistry, validated to retain colour fastness ≥ Grade 4 on the AATCC scale through 200+ wash cycles, extending uniform service life from 6 months to 14 months on the same wash regime.',
      'UNEOM has supplied retail uniform programmes to 31 Saudi retailers, including three nationwide multi-brand retail networks, two beauty-chain programmes, and a flagship spa-retail rebrand documented in our case studies. Joiner-kit fulfillment to any of the 24 served Saudi cities runs 48 hours from CRM notification, with quarterly rotation cycles managed under programme SLA.'
    ],
    ar: [
      'قطاع التجزئة السعودي هو من أسرع القطاعات تطوّراً في الخليج، مدعوماً بتحوّل الترفيه والعافية لرؤية 2030. شارع الرياض، بوليفارد الرياض سيتي، مناطق التجزئة الجديدة في بوّابة الدرعية، والمحفظة الحالية للمراكز التجارية (مول العرب، الرياض بارك، مول البحر الأحمر) معاً يُوظِّفون أكثر من 380,000 موظّف على أرض التجزئة (نشرة قطاع التجزئة، وزارة التجارة 2024). كل تاجر تجزئة يحتاج إلى برامج زي يمكن أن تتوسّع مع الافتتاحات الجديدة، وتستوعب التحديثات الموسمية الفصلية، وتصمد أمام نظام غسيل بيئات الخدمة عالية الحركة.',
      'الواقع التقني لأزياء التجزئة هو تراكم دورات الغسيل. موظّف على أرض التجزئة يتناوب عبر 4-5 دورات غسيل أسبوعياً — أكثر من 250 دورة سنوياً. مزيج البوليستر أو القطن القياسي يبهت بصرياً بحلول الشهر 4 ويفشل هيكلياً بحلول الشهر 6. خطّ UNEOM للتجزئة يستخدم قطن-سباندكس تويل بكيمياء أصباغ تفاعلية، معتمد للاحتفاظ بثبات لون ≥ درجة 4 على مقياس AATCC خلال 200+ دورة غسيل، مُمدّداً عمر الزي التشغيلي من 6 أشهر إلى 14 شهراً بنفس نظام الغسيل.',
      'وفّرت UNEOM برامج زي تجزئة لـ31 تاجر تجزئة سعودي، بما فيهم ثلاث شبكات تجزئة وطنية متعدّدة العلامات، برنامجَين لسلاسل التجميل، وإعادة علامة بارزة لمتاجر السبا موثّقة في دراسات حالتنا. تنفيذ أطقم الموظّفين الجدد لأيّ من المدن الـ24 المخدومة يستغرق 48 ساعة من إشعار CRM، مع دورات تدوير فصلية مُدارة تحت اتّفاقية مستوى الخدمة للبرنامج.'
    ]
  },

  complianceCitations: [
    {
      entityEn: 'Ministry of Commerce (MC)',
      entityAr: 'وزارة التجارة',
      refLabelEn: 'Retail Customer-Facing Standards',
      refLabelAr: 'معايير مواجهة العملاء في التجزئة',
      quoteEn: 'Retail employees of licensed Saudi commercial entities shall present in attire reflecting the registered brand identity, with name and role identification clearly visible. Visible wear, fading, or damage triggers immediate replacement under the retailer\'s documented uniform programme.',
      quoteAr: 'يجب أن يظهر موظّفو التجزئة في المنشآت التجارية السعودية المرخّصة بزي يعكس هوية العلامة التجارية المسجَّلة، مع وضوح اسم ودور الموظّف. التآكل المرئي، البهتان، أو التلف يستوجب الاستبدال الفوري تحت برنامج الزي الموثّق لتاجر التجزئة.',
      url: 'https://mc.gov.sa'
    },
    {
      entityEn: 'Ministry of Human Resources (MHRSD)',
      entityAr: 'وزارة الموارد البشرية',
      refLabelEn: 'Retail Sector Saudization Compliance',
      refLabelAr: 'الالتزام بالسعوَدة في قطاع التجزئة',
      quoteEn: 'Where retail employer policy requires uniforms, costs shall not be deducted from employee wages. Saudization compliance reporting shall include uniform programme costs as part of total cost-of-employment for Nitaqat scoring.',
      quoteAr: 'حيث تتطلّب سياسة صاحب العمل في التجزئة الزي الموحّد، لا يجوز خصم تكاليفه من أجور الموظّفين. تقارير الالتزام بالسعوَدة يجب أن تشمل تكاليف برنامج الزي كجزء من التكلفة الإجمالية للتوظيف لتقييم نطاقات.',
      url: 'https://hrsd.gov.sa'
    },
    {
      entityEn: 'Saudi Standards Organization (SASO)',
      entityAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      refLabelEn: 'Retail Textile Quality Mark',
      refLabelAr: 'علامة الجودة السعودية لمنسوجات التجزئة',
      quoteEn: 'Retail uniform textiles bearing the SASO Quality Mark shall demonstrate colour fastness ≥ Grade 4 on AATCC after 50 wash cycles, abrasion resistance ≥ 25,000 Martindale rubs, and dimensional stability with shrinkage ≤ 3%.',
      quoteAr: 'يجب أن تُظهر منسوجات زي التجزئة الحاملة لعلامة الجودة السعودية ثبات لون ≥ درجة 4 على AATCC بعد 50 دورة غسيل، مقاومة تآكل ≥ 25,000 احتكاكة مارتينديل، وثبات بُعدي بانكماش ≤ 3%.',
      url: 'https://www.saso.gov.sa'
    }
  ],

  negativeFrames: [
    {
      practiceEn: 'Procuring retail polos and shirts based on unit price, ignoring 250-cycle wash regime.',
      practiceAr: 'شراء بولوهات وقمصان التجزئة بناءً على سعر الوحدة، متجاهلاً نظام غسيل 250 دورة.',
      whyFailsEn: 'A 45 SAR cheap polo fades visibly after 30 wash cycles, structurally fails by cycle 80 — about 4 months on a retail wash regime. Annual replacement cost: 4 × 45 = 180 SAR per staff member, plus brand inconsistency from accumulating shade variants. A 95 SAR UNEOM cotton-spandex twill polo retains colour through 200 cycles, lasts 14 months — annual cost 95 SAR per staff member. Unit-price savings of 50 SAR per polo create 85 SAR loss per staff annually.',
      whyFailsAr: 'بولو رخيص بـ45 ريالاً يبهت بصرياً بعد 30 دورة غسيل، ويفشل هيكلياً بحلول الدورة 80 — حوالي 4 أشهر على نظام غسيل التجزئة. كلفة الاستبدال السنوية: 4 × 45 = 180 ريالاً لكل موظّف، بالإضافة إلى عدم اتّساق العلامة من تراكم متغيّرات اللون. بولو UNEOM من قطن-سباندكس تويل بـ95 ريالاً يحتفظ باللون خلال 200 دورة، يدوم 14 شهراً — كلفة سنوية 95 ريالاً لكل موظّف. توفير سعر الوحدة 50 ريالاً للبولو يُنشئ خسارة 85 ريالاً لكل موظّف سنوياً.',
      solutionEn: 'Cotton-spandex twill with reactive-dye chemistry validated to AATCC Grade 4 through 200 wash cycles, locked Pantone matching across batches, and per-employee cost modeling that accounts for the full annual wash regime.',
      solutionAr: 'قطن-سباندكس تويل بكيمياء أصباغ تفاعلية معتمدة للدرجة 4 على AATCC خلال 200 دورة غسيل، مطابقة بانتون مغلقة عبر الدفعات، ونمذجة تكلفة لكل موظّف تأخذ في الحسبان نظام الغسيل السنوي الكامل.'
    },
    {
      practiceEn: 'Buying retail uniforms on ad-hoc replacement instead of programme contracts.',
      practiceAr: 'شراء أزياء التجزئة على أساس استبدال فردي بدلاً من عقود برنامج.',
      whyFailsEn: 'Ad-hoc replacement cycles introduce supplier variation, batch differences, and Pantone drift. A 50-store retail network typically accumulates 3–4 visible shade variants within 12 months when replacing on a per-store reorder basis. Customer perception of brand consistency erodes — measurable in mystery-shopper surveys (UNEOM data: 22% lower brand-recall scores in inconsistent-uniform stores). Worse, ad-hoc replacement carries no joiner-kit SLA, leaving new hires in mismatched temporary attire for 1–2 weeks.',
      whyFailsAr: 'دورات الاستبدال الفردية تُدخِل تفاوت موردين، اختلاف دفعات، وانحراف بانتون. شبكة تجزئة 50 متجراً عادةً تتراكم لها 3-4 متغيّرات لون مرئية خلال 12 شهراً عند الاستبدال على أساس إعادة طلب لكل متجر. يتآكل إدراك العملاء لاتّساق العلامة — قابل للقياس في استطلاعات المتسوّق السرّي (بيانات UNEOM: درجات تذكّر العلامة أقلّ بنسبة 22% في المتاجر بأزياء غير متّسقة). أسوأ من ذلك، الاستبدال الفردي لا يحمل اتّفاقية مستوى خدمة لأطقم الموظّفين الجدد، مُتركاً المعيّنين الجدد بزي مؤقّت غير متطابق لـ1-2 أسبوع.',
      solutionEn: 'Programme contracts with locked Pantone, fabric batch reserved for the retailer, joiner-kit 48-hour SLA to any of 24 cities, and quarterly rotation cycles documented in the operations agreement.',
      solutionAr: 'عقود برنامج بـبانتون مغلق، دفعة قماش محجوزة لتاجر التجزئة، اتّفاقية مستوى خدمة 48 ساعة لأطقم الموظّفين الجدد لأيّ من 24 مدينة، ودورات تدوير فصلية موثّقة في اتّفاقية العمليات.'
    }
  ],

  comparisonMatrix: {
    titleEn: 'Retail uniform tier comparison — programme vs ad-hoc',
    titleAr: 'مقارنة مستويات زي التجزئة — برنامج مقابل فردي',
    columnsEn: ['UNEOM Retail Programme', 'Standard Retail', 'Cheap Off-the-Shelf'],
    columnsAr: ['برنامج UNEOM للتجزئة', 'تجزئة قياسي', 'جاهز رخيص'],
    rows: [
      {
        dimensionEn: 'Fabric',
        dimensionAr: 'القماش',
        valuesEn: ['Cotton-spandex twill, reactive-dyed', 'Polyester-cotton blend', 'Polyester 100%'],
        valuesAr: ['قطن-سباندكس تويل، صبغ تفاعلي', 'مزيج بوليستر-قطن', 'بوليستر 100%']
      },
      {
        dimensionEn: 'Wash cycles before fade',
        dimensionAr: 'دورات الغسيل قبل البهتان',
        valuesEn: ['200+ cycles, AATCC ≥ 4', '60–80 cycles', '30 cycles'],
        valuesAr: ['200+ دورة، AATCC ≥ 4', '60–80 دورة', '30 دورة']
      },
      {
        dimensionEn: 'Pantone consistency',
        dimensionAr: 'اتّساق بانتون',
        valuesEn: ['±1 shade locked across batches', '±2 shade typical', '3+ shade drift'],
        valuesAr: ['±1 درجة مغلقة عبر الدفعات', '±2 درجة عادةً', '3+ درجات انحراف']
      },
      {
        dimensionEn: 'Joiner-kit SLA',
        dimensionAr: 'اتّفاقية أطقم الموظّفين الجدد',
        valuesEn: ['48-hour delivery to 24 cities', 'Manual reorder per store', 'No SLA'],
        valuesAr: ['تسليم 48 ساعة إلى 24 مدينة', 'إعادة طلب يدوية لكل متجر', 'لا اتّفاقية']
      },
      {
        dimensionEn: 'Quarterly rotation programme',
        dimensionAr: 'برنامج التدوير الفصلي',
        valuesEn: ['Built-in cycle + leaver returns', 'Self-managed', 'No programme'],
        valuesAr: ['دورة مدمجة + إرجاعات المغادرين', 'مُدار ذاتياً', 'لا برنامج']
      },
      {
        dimensionEn: 'Service life',
        dimensionAr: 'العمر التشغيلي',
        valuesEn: ['14 months', '6 months', '4 months'],
        valuesAr: ['14 شهراً', '6 أشهر', '4 أشهر']
      },
      {
        dimensionEn: 'Per-uniform price (SAR, 2026)',
        dimensionAr: 'سعر الزي (ريال، 2026)',
        valuesEn: ['85–120', '60–80', '40–55'],
        valuesAr: ['85–120', '60–80', '40–55']
      },
      {
        dimensionEn: 'Annual cost per staff',
        dimensionAr: 'الكلفة السنوية لكل موظّف',
        valuesEn: ['85–120 SAR (1.0 unit)', '120–160 SAR (2 units)', '160–220 SAR (3 units)'],
        valuesAr: ['85-120 ريالاً (1.0 قطعة)', '120-160 ريالاً (2 قطعة)', '160-220 ريالاً (3 قطعة)']
      },
      {
        dimensionEn: 'Brand consistency over 12 months',
        dimensionAr: 'اتّساق العلامة عبر 12 شهراً',
        valuesEn: ['Locked', 'Drift detectable', 'Visible inconsistency'],
        valuesAr: ['مغلق', 'انحراف قابل للكشف', 'عدم اتّساق مرئي']
      }
    ]
  },

  expandedFaqs: [
    {
      qEn: 'What does the Saudi Ministry of Commerce require for retail staff uniforms?',
      qAr: 'ما اشتراطات وزارة التجارة السعودية لزي موظّفي التجزئة؟',
      aEn: 'MC standards require retail employees of licensed Saudi commercial entities to present in attire reflecting the registered brand identity, with name and role visibility. Visible wear, fading, or damage triggers immediate replacement under the retailer\'s documented uniform programme. MHRSD adds that uniform costs cannot be deducted from wages and are factored into Saudization (Nitaqat) cost-of-employment scoring.',
      aAr: 'تتطلّب معايير وزارة التجارة من موظّفي التجزئة في المنشآت التجارية السعودية المرخّصة الظهور بزي يعكس هوية العلامة التجارية المسجَّلة، مع وضوح الاسم والدور. التآكل المرئي، البهتان، أو التلف يستوجب الاستبدال الفوري تحت برنامج الزي الموثّق لتاجر التجزئة. تُضيف وزارة الموارد البشرية أنّ تكاليف الزي لا يمكن خصمها من الأجور وتُحتسَب في تقييم تكلفة التوظيف للسعوَدة (نطاقات).'
    },
    {
      qEn: 'How much does a retail uniform set cost in Saudi Arabia in 2026?',
      qAr: 'كم تكلّف مجموعة زي تجزئة في السعودية في 2026؟',
      aEn: 'UNEOM cotton-spandex twill retail polos and shirts range 85–120 SAR per unit. Standard retail polyester-cotton at 60–80 SAR fades by cycle 80 (4 months). Cheap off-the-shelf at 40–55 SAR fails by cycle 30 (4 months) and creates Pantone inconsistency. Network programmes above 200 staff receive 10–12% volume pricing with locked-batch fabric reservation.',
      aAr: 'بولوهات وقمصان UNEOM التجزئة من قطن-سباندكس تويل تتراوح بين 85-120 ريالاً للوحدة. تجزئة قياسي بوليستر-قطن بـ60-80 ريالاً يبهت بحلول الدورة 80 (4 أشهر). جاهز رخيص بـ40-55 ريالاً يفشل بحلول الدورة 30 (4 أشهر) ويُنشئ عدم اتّساق بانتون. برامج الشبكة فوق 200 موظّف تحصل على تخفيض حجم 10-12% مع حجز دفعة قماش مغلقة.'
    },
    {
      qEn: 'Why do standard retail uniforms fail at 6 months in Saudi conditions?',
      qAr: 'لماذا تفشل أزياء التجزئة القياسية عند 6 أشهر في الظروف السعودية؟',
      aEn: 'Three factors. First, wash regime: retail staff cycle through 4–5 washes per week (250+ annually) versus the 60–80 cycle limit of standard polyester-cotton. Second, foot-traffic abrasion: high-customer-density stores create 25,000+ Martindale rubs over 6 months — the failure threshold for standard fabrics. Third, perspiration salts: retail-floor humidity in malls combined with body perspiration crystallises in fiber bundles, accelerating visible degradation. UNEOM\'s cotton-spandex twill is engineered for all three stresses.',
      aAr: 'ثلاثة عوامل. أوّلاً، نظام الغسيل: موظّفو التجزئة يدورون عبر 4-5 غسلات أسبوعياً (250+ سنوياً) مقابل حدّ دورات 60-80 لبوليستر-قطن قياسي. ثانياً، تآكل حركة الأقدام: المتاجر عالية الكثافة تُنشئ 25,000+ احتكاكة مارتينديل على مدى 6 أشهر — عتبة فشل الأقمشة القياسية. ثالثاً، أملاح التعرّق: الرطوبة على أرض التجزئة في المراكز التجارية مع تعرّق الجسم تتبلور في حُزَم الألياف، مُسرّعة التدهور المرئي. قطن-سباندكس تويل من UNEOM مهندَس للضغوط الثلاث.'
    },
    {
      qEn: 'How does UNEOM\'s 48-hour joiner-kit SLA work nationwide?',
      qAr: 'كيف تعمل اتّفاقية UNEOM لتسليم أطقم الموظّفين الجدد 48 ساعة على مستوى المملكة؟',
      aEn: 'UNEOM holds reserved-batch programme stock at three regional depots (Riyadh, Jeddah, Dammam). Upon HR/CRM notification of a new hire, an automated workflow triggers depot dispatch via overnight courier to the assigned store — anywhere in the 24 served cities. The kit includes pre-sized uniform per store-staff sizing chart, name tag, and replacement allowance per programme contract. SLA performance is reported monthly.',
      aAr: 'تحتفظ UNEOM بمخزون البرنامج بدفعة محجوزة في ثلاث مستودعات إقليمية (الرياض، جدة، الدمام). عند إشعار HR/CRM بتعيين جديد، سير عمل آلي يُحفّز شحن المستودع عبر شركة شحن ليلية إلى المتجر المُكلَّف — في أيّ من المدن الـ24 المخدومة. يضمّ الطقم زياً مُقاساً مسبقاً وفق مخطّط قياس موظّفي المتجر، بطاقة اسم، وعلاوة استبدال وفق عقد البرنامج. أداء اتّفاقية مستوى الخدمة يُبلَّغ شهرياً.'
    },
    {
      qEn: 'Can UNEOM accommodate quarterly seasonal refreshes for retail brands?',
      qAr: 'هل يمكن لـUNEOM استيعاب تحديثات موسمية فصلية لعلامات التجزئة؟',
      aEn: 'Yes. UNEOM\'s retail programme includes built-in quarterly rotation cycles — typically tied to seasonal merchandise launches (back-to-school, Ramadan, summer, year-end). Quarterly refresh can include accent colour rotation, accessory swaps (scarves, lapel pins), or full uniform replacement for major brand events. Rotation logistics are handled centrally with leaver-return and recycling integrated.',
      aAr: 'نعم. يضمّ برنامج UNEOM للتجزئة دورات تدوير فصلية مدمجة — عادةً مرتبطة بإطلاق بضائع موسمية (العودة للمدارس، رمضان، الصيف، نهاية العام). التحديث الفصلي يمكن أن يضمّ تدوير ألوان حوافّ، تبديل إكسسوارات (أوشحة، دبابيس طية صدر)، أو استبدال زي كامل لأحداث علامة كبرى. لوجستيات التدوير مُدارة مركزياً مع إرجاعات المغادرين وإعادة التدوير مُدمجة.'
    },
    {
      qEn: 'How does UNEOM handle Pantone consistency across multiple production batches?',
      qAr: 'كيف تتعامل UNEOM مع اتّساق بانتون عبر دفعات إنتاج متعدّدة؟',
      aEn: 'Programme contracts include reserved-batch fabric production — the entire programme\'s fabric is dyed in a single dye-lot with the brand\'s locked Pantone reference. The reservation is held for the contract duration (typically 12–24 months), ensuring every joiner-kit and replacement uses identical colour. Pantone deviation tolerance is documented at ±1 shade and verified against fabric-master samples each shipment.',
      aAr: 'عقود البرنامج تشمل إنتاج قماش بدفعة محجوزة — كامل قماش البرنامج مصبوغ في دفعة صبغ واحدة بمرجع بانتون المغلق للعلامة. الحجز محتفَظ به لمدّة العقد (عادةً 12-24 شهراً)، ضامناً أنّ كل طقم موظّف جديد واستبدال يستخدم لوناً متطابقاً. تفاوت بانتون المسموح موثّق عند ±1 درجة ويُتحقَّق منه مقابل عيّنات قماش رئيسية كل شحنة.'
    },
    {
      qEn: 'What is the lead time for new retail uniform programme launches?',
      qAr: 'ما زمن التسليم لإطلاق برامج زي تجزئة جديد؟',
      aEn: 'New programmes require 28–35 days end-to-end: 14 days for design, Pantone validation, and fabric batch reservation; 14–21 days for sized production with on-floor fittings at flagship stores. Repeat orders ship in 14–21 days. Joiner kits within an established programme ship in 48 hours nationwide.',
      aAr: 'البرامج الجديدة تتطلّب 28-35 يوماً من البداية للنهاية: 14 يوماً للتصميم، مصادقة بانتون، وحجز دفعة القماش؛ 14-21 يوماً للإنتاج المُقاس مع قياسات على الأرض في المتاجر الرئيسية. الطلبات المتكرّرة تُشحَن في 14-21 يوماً. أطقم الموظّفين الجدد ضمن برنامج موجود تُشحَن في 48 ساعة على مستوى المملكة.'
    },
    {
      qEn: 'Which Saudi retailers does UNEOM serve?',
      qAr: 'ما تجّار التجزئة السعوديون الذين تخدمهم UNEOM؟',
      aEn: 'UNEOM has supplied 31 Saudi retailers, including three nationwide multi-brand retail networks, two beauty-chain programmes, and a flagship spa-retail rebrand. Documented case studies cover Nationwide Retail Branding, Retail Brand Transformation, and Beauty Chain Standardization. Specific names beyond published case studies are confidential under NDA.',
      aAr: 'وفّرت UNEOM لـ31 تاجر تجزئة سعودي، بما فيهم ثلاث شبكات تجزئة وطنية متعدّدة العلامات، برنامجَين لسلاسل التجميل، وإعادة علامة بارزة لمتاجر السبا. دراسات الحالة الموثّقة تُغطّي وضع علامة تجزئة وطنية، تحوّل علامة تجزئة، وتوحيد سلسلة تجميل. الأسماء المحدّدة خارج دراسات الحالة المنشورة سرّية تحت اتّفاقية عدم إفصاح.'
    }
  ],

  externalSources: [
    { nameEn: 'Ministry of Commerce (MC)', nameAr: 'وزارة التجارة', url: 'https://mc.gov.sa' },
    { nameEn: 'Ministry of Human Resources (MHRSD)', nameAr: 'وزارة الموارد البشرية (MHRSD)', url: 'https://hrsd.gov.sa' },
    { nameEn: 'Saudi Standards Organization (SASO)', nameAr: 'الهيئة السعودية للمواصفات (SASO)', url: 'https://www.saso.gov.sa' },
    { nameEn: 'AATCC Gray Scale (colour fastness)', nameAr: 'مقياس AATCC الرمادي (ثبات اللون)', url: 'https://www.aatcc.org/test/methods/' },
    { nameEn: 'Pantone Matching System', nameAr: 'نظام مطابقة بانتون', url: 'https://www.pantone.com/' },
    { nameEn: 'OEKO-TEX Standard 100', nameAr: 'معيار OEKO-TEX 100', url: 'https://www.oeko-tex.com/' }
  ]
};
