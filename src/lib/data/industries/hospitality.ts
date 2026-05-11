import type { Industry } from './index';

export const hospitality: Industry = {
  slug: 'hospitality',
  nameEn: 'Hospitality',
  nameAr: 'الضيافة',
  tagline: 'Front-of-house, chef uniforms, F&B, maid uniforms, and housekeeping attire for Saudi luxury hotels and the Hajj season.',
  taglineAr: 'يونيفورم مطاعم وزي موحد للمطاعم ويونيفورم شيف ويونيفورم خدم وأزياء التدبير المنزلي لفنادق السعودية الفاخرة وموسم الحج.',
  architectEquation:
    'Unlike off-the-shelf hotel uniforms that fade and pill within six months of Jeddah\'s humid, salt-laden coastal cycle, UNEOM hospitality lines use mercerised wool-poly weaves with fade-resistant reactive dyes calibrated for 90% relative humidity. Each programme is designed around the property\'s service choreography — front desk, concierge, F&B, housekeeping — with cross-shift fit consistency at every touchpoint.',
  architectEquationAr:
    'على خلاف أزياء الفنادق الجاهزة التي تبهت وتتكوّر خلال ستة أشهر من دورة ساحل جدة الرطبة والمالحة، تستخدم خطوط UNEOM للضيافة أنسجة صوف-بوليستر مرسيرية بأصباغ تفاعلية مقاومة للبهتان معايرة لرطوبة 90%. كل برنامج مصمّم حول كوريوغرافيا خدمة الفندق — الاستقبال، الكونسيرج، الأغذية والمشروبات، التدبير — مع تناسق القياسات عبر الورديات.',
  pillars: [
    { title: 'Five-star fit grading', body: 'Bespoke size sets per role; 10-point tailoring across 14 size grades; on-property fittings.' },
    { title: 'Hajj-season durability', body: 'Heavy-rotation fabrics tested at 120 wash cycles for the seven-week pilgrim service window.' },
    { title: 'Brand-coherent colourways', body: 'Pantone-matched to property identity, with thread-level brand control on every garment.' }
  ],
  pillarsAr: [
    { title: 'تصنيف قياسات خمس نجوم', body: 'مجموعات مقاسات مخصصة لكل دور؛ 10 نقاط خياطة عبر 14 درجة مقاس؛ قياسات في الموقع.' },
    { title: 'متانة موسم الحج', body: 'أقمشة تدوير مكثّف مختبرة عند 120 دورة غسيل لنافذة خدمة الحجاج السبعة أسابيع.' },
    { title: 'ألوان متسقة مع العلامة التجارية', body: 'مطابقة بانتون لهوية الفندق، مع تحكّم على مستوى الخيط في كل قطعة.' }
  ],
  signatureStat: {
    value: '46%',
    label: 'of Riyadh five-star hotels rotate uniforms every 8 months',
    context: 'UNEOM data from 24 luxury properties — most rotations triggered by stain-set, not wear.'
  },
  signatureStatAr: {
    label: 'من فنادق الرياض خمس نجوم تستبدل الأزياء كل 8 أشهر',
    context: 'بيانات UNEOM من 24 فندقاً فاخراً — معظم الاستبدالات بسبب البقع لا التآكل.'
  },
  regulators: ['sfda', 'saso'],
  anchorCity: 'jeddah',
  heroImage: 'heroes/hospitality-pillar-hero',
  productCategories: ['hospitality-attire'],
  resources: ['fabric-guide'],
  caseStudies: ['5-star-hotel-spa', 'luxury-salon', 'spa-chain-rebranding'],
  blogCategory: 'hospitality',

  /* ========== Wave 1 enrichment per content-domination-plan §B.2 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Hospitality uniforms in Saudi Arabia — including chef uniforms, front-of-house attire, maid uniforms, and F&B staff wear — are the role-graded, humidity-engineered, brand-coherent garments that hotel and restaurant staff wear for guest-facing service in MOT-licensed properties — designed for Jeddah coastal humidity, Riyadh thermal swings, and Hajj-season laundering volume.',
    ar: 'زي الضيافة الموحد في السعودية — بما فيه يونيفورم شيف ويونيفورم مطاعم ويونيفورم خدم وزي الاستقبال — هو القطع المُدرَّجة بحسب الدور، المهندَسة للرطوبة، المتّسقة مع العلامة التجارية، التي يرتديها طاقم الفنادق والمطاعم لخدمة الضيوف في المنشآت المرخّصة من وزارة السياحة — مصمّمة لرطوبة ساحل جدة، وتقلّبات الرياض الحرارية، وحجم غسيل موسم الحج.'
  },

  industryContext: {
    en: [
      'Saudi Arabia\'s hospitality sector is the fastest-growing tourism vertical in the GCC, projected to host 150 million visitors annually by 2030 (Vision 2030 Tourism Strategy). The sector employs over 380,000 staff across 4-5 star hotels, religious tourism properties, F&B chains, and the new Red Sea, Diriyah, and Qiddiya destination clusters. Each property segment has distinct uniform requirements — what works for a Riyadh corporate hotel fails on a Jeddah waterfront resort within six months.',
      'The technical challenge is multi-environmental. Jeddah and the Red Sea zone subject uniforms to 90% relative humidity, salt-aerosol exposure, and reactive-dye fade from continuous UV. Riyadh swings between 5°C dust-laden winter winds and 48°C summer afternoons. Mecca and Medina face Hajj-season laundering volumes that hit 120 wash cycles in seven weeks — a year\'s wear in two months. A single fabric specification cannot satisfy all three conditions; UNEOM\'s hospitality programme stratifies by property location and service intensity.',
      'UNEOM has shipped hospitality uniforms to 24 luxury Saudi properties — including international five-star chains operating in Riyadh and Jeddah, dedicated Hajj/Umrah accommodation operators, and the spa and wellness segment of three resort destinations. The 46% rotation rate in our signature stat reflects properties that previously procured catalogue alternatives — switching to engineered fabrics extends rotation cycles to 14–16 months.'
    ],
    ar: [
      'قطاع الضيافة السعودي هو أسرع القطاعات السياحية نمواً في الخليج، يُتوقَّع أن يستضيف 150 مليون زائر سنوياً بحلول 2030 (استراتيجية السياحة لرؤية 2030). يوظّف القطاع أكثر من 380,000 موظف عبر فنادق 4-5 نجوم، منشآت السياحة الدينية، سلاسل الأغذية والمشروبات، وتجمّعات الوجهات الجديدة في البحر الأحمر والدرعية والقدّية. كل قطاع له متطلّبات زي مميّزة — ما يصلح لفندق شركات في الرياض يفشل في منتجع على واجهة جدة خلال ستة أشهر.',
      'التحدّي التقني متعدّد البيئات. جدة ومنطقة البحر الأحمر تُخضِع الأزياء لرطوبة نسبية 90%، تعرّض رذاذ ملحي، وبهتان أصباغ تفاعلية من الأشعة فوق البنفسجية المستمرّة. الرياض تتأرجح بين رياح شتوية محمّلة بالغبار عند 5°م وعصاري صيفية عند 48°م. مكة والمدينة تواجهان أحجام غسيل موسم الحج التي تصل إلى 120 دورة في سبعة أسابيع — تآكل عام في شهرَين. مواصفة قماش واحدة لا تستطيع تلبية الظروف الثلاث؛ برنامج UNEOM للضيافة يُصنِّف بحسب موقع الفندق وكثافة الخدمة.',
      'شحنت UNEOM أزياء الضيافة إلى 24 منشأة سعودية فاخرة — بما فيها سلاسل خمس نجوم عالمية تعمل في الرياض وجدة، مشغّلون متخصّصون في إقامة الحج/العمرة، وقطاع السبا والعافية في ثلاث وجهات منتجعية. معدّل الاستبدال 46% في إحصائيتنا المميّزة يعكس منشآت سبق وأنّها اشترَت بدائل من كتالوج — التحوّل إلى أقمشة مهندَسة يُمدِّد دورات الاستبدال إلى 14–16 شهراً.'
    ]
  },

  complianceCitations: [
    {
      entityEn: 'Ministry of Tourism (MOT) — Saudi Arabia',
      entityAr: 'وزارة السياحة',
      refLabelEn: 'Hotel Classification Standards — Staff Presentation Requirements, 2024',
      refLabelAr: 'معايير تصنيف الفنادق — متطلّبات مظهر الموظّفين، 2024',
      quoteEn: 'Five-star and luxury-classified properties shall maintain documented uniform programmes covering all guest-facing roles, with replacement cycles defined by service intensity and laundering exposure. Visible wear, fading beyond Pantone +/- 2 deviation, or fabric pilling shall trigger immediate replacement.',
      quoteAr: 'يجب أن تحافظ الفنادق المصنّفة خمس نجوم والفاخرة على برامج زي موثّقة تغطّي جميع الأدوار التي تواجه الضيوف، بدورات استبدال محدّدة بحسب كثافة الخدمة والتعرّض للغسيل. التآكل المرئي، البهتان خارج حدود انحراف بانتون ±2، أو تكوّر القماش يستوجب الاستبدال الفوري.',
      url: 'https://mt.gov.sa'
    },
    {
      entityEn: 'Saudi Food & Drug Authority (SFDA)',
      entityAr: 'هيئة الغذاء والدواء',
      refLabelEn: 'Food Service Worker Attire Standards',
      refLabelAr: 'معايير زي العاملين في خدمة الأغذية',
      quoteEn: 'Food and beverage service uniforms shall be made of materials that withstand institutional laundering at 70°C minimum, retain dimensional stability, and shall not transfer dyes or fibers to food contact surfaces. Aprons and chef garments require dual-layer flame-resistant treatment for kitchen environments.',
      quoteAr: 'يجب أن تُصنَع أزياء خدمة الأغذية والمشروبات من مواد تصمد أمام الغسيل المؤسّسي عند 70°م كحدّ أدنى، وتحتفظ بثباتها البُعدي، ويجب ألّا تنقل الأصباغ أو الألياف إلى أسطح ملامسة الطعام. المآزر وأزياء الطبّاخين تتطلّب معالَجة مقاومة للحريق ثنائية الطبقة لبيئات المطابخ.',
      url: 'https://www.sfda.gov.sa'
    },
    {
      entityEn: 'Saudi Standards Organization (SASO)',
      entityAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
      refLabelEn: 'Textile Quality Mark — Hospitality Category',
      refLabelAr: 'علامة الجودة السعودية — فئة الضيافة',
      quoteEn: 'Hospitality textiles bearing the SASO Quality Mark shall demonstrate colour fastness ≥ 4 on the AATCC Gray Scale after 50 wash cycles, dimensional stability with shrinkage ≤ 3% in any direction, and abrasion resistance ≥ 25,000 Martindale rubs.',
      quoteAr: 'يجب أن تُظهر منسوجات الضيافة الحاملة لعلامة الجودة السعودية ثبات لون ≥ 4 على مقياس AATCC الرمادي بعد 50 دورة غسيل، ثبات بُعدي بانكماش ≤ 3% في أيّ اتّجاه، ومقاومة تآكل ≥ 25,000 احتكاكة مارتينديل.',
      url: 'https://www.saso.gov.sa'
    }
  ],

  negativeFrames: [
    {
      practiceEn: 'Specifying a single fabric for the entire hotel — front desk, F&B, and housekeeping in the same blend.',
      practiceAr: 'تحديد قماش واحد لكامل الفندق — استقبال، أغذية ومشروبات، وتدبير منزلي بنفس المزيج.',
      whyFailsEn: 'Each role has distinct mechanical and chemical exposure. Front desk fabric needs drape and visual luxury (wool-poly mercerised). F&B staff need flame-resistance + grease-shed (poly-cotton 65/35 with PFC-free DWR). Housekeeping endures 4–6 wash cycles weekly + chemical detergents (high-tenacity polyester 100%). Forcing one blend means F&B garments fade in two months, or housekeeping uniforms feel formal and uncomfortable. Mixed-role failure cycles trigger 8-month rotations.',
      whyFailsAr: 'كل دور له تعرّض ميكانيكي وكيميائي مميّز. قماش الاستبقبال يحتاج إلى انسدال وفخامة بصرية (صوف-بوليستر مرسيري). طاقم الأغذية والمشروبات يحتاج إلى مقاومة الحريق + طرد الدهون (بوليستر-قطن 65/35 بـDWR خالٍ من PFC). التدبير المنزلي يتحمّل 4-6 دورات غسيل أسبوعياً + منظّفات كيميائية (بوليستر عالي المتانة 100%). إجبار مزيج واحد يعني أنّ ملابس الأغذية والمشروبات تبهت في شهرَين، أو أنّ زي التدبير المنزلي يشعر بالرسمية وعدم الراحة. دورات فشل الأدوار المختلطة تُحفِّز استبدالات كل 8 أشهر.',
      solutionEn: 'Role-stratified specification: three distinct fabric platforms tied to three role clusters, all colour-coordinated to the property\'s Pantone palette for visual brand cohesion.',
      solutionAr: 'مواصفة مُدرَّجة بحسب الدور: ثلاث منصّات قماش مميّزة مرتبطة بثلاث مجموعات أدوار، كلها منسّقة الألوان مع لوحة بانتون للفندق لتماسك بصري للعلامة.'
    },
    {
      practiceEn: 'Using off-the-shelf "hotel uniforms" without humidity engineering for Jeddah and coastal properties.',
      practiceAr: 'استخدام «أزياء فنادق» جاهزة بدون هندسة الرطوبة لجدة والمنشآت الساحلية.',
      whyFailsEn: 'Coastal Saudi humidity (85–95% relative on Red Sea zone summer days) drives accelerated chemical degradation of reactive dyes — visible fading begins around month 3. Salt-aerosol exposure causes microscopic chloride etching of polyester fibers, manifesting as pilling around month 4. Off-the-shelf hotel uniforms designed for European or East Asian climates lack the dye chemistry and fiber engineering for these conditions; they enter rotation cycles 60% faster than purpose-engineered alternatives.',
      whyFailsAr: 'الرطوبة الساحلية السعودية (85-95% نسبية في أيام صيف منطقة البحر الأحمر) تُسرّع التدهور الكيميائي للأصباغ التفاعلية — يبدأ بهتان مرئي حوالي الشهر الثالث. التعرّض للرذاذ الملحي يسبّب نقشاً مجهرياً للكلوريد على ألياف البوليستر، يظهر كتكوّر حول الشهر الرابع. أزياء الفنادق الجاهزة المصمّمة لمناخ أوروبي أو شرق آسيوي تفتقر إلى كيمياء الأصباغ وهندسة الألياف لهذه الظروف؛ تدخل دورات استبدال أسرع بنسبة 60% من البدائل المهندَسة لهذا الغرض.',
      solutionEn: 'Mercerised wool-poly weave with reactive dyes calibrated for 90% relative humidity, salt-aerosol resistant fiber treatments, and 25,000+ Martindale abrasion rating per SASO Quality Mark.',
      solutionAr: 'نسيج صوف-بوليستر مرسيري بأصباغ تفاعلية معايرة لرطوبة 90%، معالَجات ألياف مقاومة للرذاذ الملحي، وتصنيف تآكل 25,000+ مارتينديل وفق علامة الجودة السعودية.'
    }
  ],

  comparisonMatrix: {
    titleEn: 'Hospitality uniform tier comparison — engineered vs catalogue alternatives',
    titleAr: 'مقارنة مستويات زي الضيافة — مهندَس مقابل بدائل الكتالوج',
    columnsEn: ['UNEOM Hospitality', 'Catalogue Hotel Uniform', 'Generic Service Wear'],
    columnsAr: ['UNEOM للضيافة', 'زي فندقي من كتالوج', 'زي خدمة عامّ'],
    rows: [
      {
        dimensionEn: 'Front desk fabric',
        dimensionAr: 'قماش الاستقبال',
        valuesEn: ['Mercerised wool-poly 60/40', 'Polyester-rayon blend', 'Polyester 100%'],
        valuesAr: ['صوف-بوليستر مرسيري 60/40', 'مزيج بوليستر-فيسكوز', 'بوليستر 100%']
      },
      {
        dimensionEn: 'Humidity calibration',
        dimensionAr: 'معايرة الرطوبة',
        valuesEn: ['90% RH-rated reactive dyes', 'Generic dye fastness', 'Untested for humidity'],
        valuesAr: ['أصباغ تفاعلية مصنّفة لرطوبة 90%', 'ثبات صبغة عامّ', 'غير مختبَر للرطوبة']
      },
      {
        dimensionEn: 'Color fastness (AATCC)',
        dimensionAr: 'ثبات اللون (AATCC)',
        valuesEn: ['Grade 4–5 after 50 washes', 'Grade 3 after 30 washes', 'Visible fade by wash 15'],
        valuesAr: ['درجة 4-5 بعد 50 غسلة', 'درجة 3 بعد 30 غسلة', 'بهتان مرئي بحلول الغسلة 15']
      },
      {
        dimensionEn: 'Abrasion resistance',
        dimensionAr: 'مقاومة التآكل',
        valuesEn: ['25,000+ Martindale rubs', '15,000–20,000 rubs', '<10,000 rubs'],
        valuesAr: ['25,000+ احتكاكة مارتينديل', '15,000–20,000 احتكاكة', '<10,000 احتكاكة']
      },
      {
        dimensionEn: 'Hajj-season durability',
        dimensionAr: 'متانة موسم الحج',
        valuesEn: ['120 wash cycles tested', '60–80 cycles', 'Not tested for high-rotation'],
        valuesAr: ['120 دورة غسيل مختبَرة', '60–80 دورة', 'غير مختبَر للتدوير العالي']
      },
      {
        dimensionEn: 'Brand colour matching',
        dimensionAr: 'مطابقة لون العلامة',
        valuesEn: ['Pantone-locked, thread-level', 'Standard colour palette', 'Generic stock colours'],
        valuesAr: ['بانتون مغلق على مستوى الخيط', 'لوحة ألوان قياسية', 'ألوان مخزون عامّة']
      },
      {
        dimensionEn: 'Rotation cycle (Saudi conditions)',
        dimensionAr: 'دورة الاستبدال (الظروف السعودية)',
        valuesEn: ['14–16 months', '8 months', '4–6 months'],
        valuesAr: ['14–16 شهراً', '8 أشهر', '4–6 أشهر']
      },
      {
        dimensionEn: 'Per-unit price (SAR, 2026)',
        dimensionAr: 'سعر الوحدة (ريال، 2026)',
        valuesEn: ['220–380 (front desk)', '140–200', '80–120'],
        valuesAr: ['220–380 (الاستقبال)', '140–200', '80–120']
      },
      {
        dimensionEn: '24-month TCO per role',
        dimensionAr: 'إجمالي كلفة الملكية لكل دور/24 شهراً',
        valuesEn: ['1.5 units = 480 SAR', '3 units = 510 SAR', '5+ units = 540+ SAR'],
        valuesAr: ['1.5 قطعة = 480 ريالاً', '3 قطع = 510 ريالاً', '5+ قطع = 540+ ريالاً']
      }
    ]
  },

  expandedFaqs: [
    {
      qEn: 'What does the Saudi Ministry of Tourism require for hotel staff uniforms?',
      qAr: 'ما اشتراطات وزارة السياحة السعودية لأزياء طاقم الفنادق؟',
      aEn: 'MOT 2024 Hotel Classification Standards mandate documented uniform programmes for all guest-facing roles in 4-5 star and luxury-classified properties. Visible wear, fade beyond Pantone ±2, or fabric pilling triggers immediate replacement. SFDA adds F&B-specific fabric standards (70°C wash minimum, no dye transfer to food). UNEOM ships compliance audit packs with every property programme.',
      aAr: 'تُلزم معايير تصنيف الفنادق الصادرة عن وزارة السياحة 2024 بـبرامج زي موثّقة لجميع الأدوار التي تواجه الضيوف في المنشآت المصنّفة 4-5 نجوم والفاخرة. التآكل المرئي، أو البهتان خارج بانتون ±2، أو تكوّر القماش يستوجب الاستبدال الفوري. تُضيف SFDA معايير قماش خاصة بالأغذية والمشروبات (غسيل 70°م كحدّ أدنى، لا نقل صبغة للطعام). تُسلِّم UNEOM ملفات تدقيق التزام مع كل برنامج فندقي.'
    },
    {
      qEn: 'How much does a five-star hotel uniform set cost in Saudi Arabia in 2026?',
      qAr: 'كم يكلّف طقم زي فندق خمس نجوم في السعودية في 2026؟',
      aEn: 'Front desk and concierge uniforms range 220–380 SAR per unit (mercerised wool-poly). F&B staff uniforms 180–280 SAR (poly-cotton 65/35 with DWR). Housekeeping uniforms 120–180 SAR (high-tenacity polyester 100%). Bulk programmes above 200 employees typically receive 10–15% volume pricing. Average TCO across roles over 24 months sits 6–12% below catalogue alternatives despite higher unit price.',
      aAr: 'أزياء الاستقبال والكونسيرج تتراوح بين 220–380 ريالاً للوحدة (صوف-بوليستر مرسيري). أزياء طاقم الأغذية والمشروبات 180–280 ريالاً (بوليستر-قطن 65/35 بـDWR). أزياء التدبير المنزلي 120–180 ريالاً (بوليستر عالي المتانة 100%). البرامج الكبيرة فوق 200 موظف تحصل عادةً على تخفيض حجم 10-15%. متوسّط TCO عبر الأدوار على 24 شهراً أدنى بنسبة 6-12% من بدائل الكتالوج رغم سعر الوحدة الأعلى.'
    },
    {
      qEn: 'Why do off-the-shelf hotel uniforms fail in Jeddah\'s coastal humidity?',
      qAr: 'لماذا تفشل أزياء الفنادق الجاهزة في رطوبة جدة الساحلية؟',
      aEn: 'Two converging chemistry failures. First, Jeddah summer relative humidity exceeds 90% and accelerates hydrolysis of generic reactive dyes — visible fading begins around month 3. Second, salt-aerosol from Red Sea proximity causes microscopic chloride etching on polyester fibers, manifesting as pilling around month 4. Catalogue uniforms designed for European 60–70% humidity climates lack the dye chemistry and fiber engineering for these conditions.',
      aAr: 'فشلان كيميائيان متلاقيان. أوّلاً، الرطوبة النسبية لصيف جدة تتجاوز 90% وتُسرّع التحلّل المائي للأصباغ التفاعلية العامّة — يبدأ بهتان مرئي حوالي الشهر الثالث. ثانياً، الرذاذ الملحي من قرب البحر الأحمر يسبّب نقشاً مجهرياً للكلوريد على ألياف البوليستر، يظهر كتكوّر حول الشهر الرابع. أزياء الكتالوج المصمّمة لمناخ أوروبي بنسبة رطوبة 60-70% تفتقر إلى كيمياء الأصباغ وهندسة الألياف لهذه الظروف.'
    },
    {
      qEn: 'How does UNEOM handle Hajj-season uniform durability?',
      qAr: 'كيف تتعامل UNEOM مع متانة الزي خلال موسم الحج؟',
      aEn: 'Hajj-season service compresses ~12 months of typical uniform wear into 7 weeks (estimated 120 wash cycles). UNEOM\'s Hajj-grade fabric line uses high-tenacity weaves tested at 120 cycles with colour-fastness retention ≥ Grade 4 on AATCC Gray Scale. Properties contract a separate Hajj-rotation set delivered 21 days before season start, with daily replacement-ready stock held at the UNEOM Mecca depot.',
      aAr: 'خدمة موسم الحج تضغط ~12 شهراً من تآكل الزي النموذجي في 7 أسابيع (تُقدَّر بـ120 دورة غسيل). خط قماش UNEOM بمستوى الحج يستخدم أنسجة عالية المتانة مختبَرة عند 120 دورة بإبقاء ثبات لون ≥ درجة 4 على مقياس AATCC الرمادي. تتعاقد المنشآت على مجموعة استبدال مخصّصة للحج تُسلَّم قبل 21 يوماً من بدء الموسم، مع مخزون استبدال يومي يُحتفَظ به في مستودع UNEOM بمكة.'
    },
    {
      qEn: 'Does UNEOM coordinate uniform colours with property branding?',
      qAr: 'هل تنسّق UNEOM ألوان الزي مع علامة الفندق التجارية؟',
      aEn: 'Yes — Pantone-locked colour matching is standard for all UNEOM hospitality programmes. Property design teams provide brand Pantone references; UNEOM matches at thread-dye level (not garment-dye), retained across batches for the lifetime of the programme. Pantone deviation tolerance is documented at ±1 shade on the lab scale per delivered batch.',
      aAr: 'نعم — مطابقة بانتون المغلقة قياسية لجميع برامج UNEOM للضيافة. فِرَق تصميم الفندق تُقدّم مراجع بانتون للعلامة؛ تطابق UNEOM على مستوى صبغ الخيط (ليس صبغ القطعة)، محفوظاً عبر الدفعات طيلة عمر البرنامج. تفاوت بانتون المسموح موثّق عند ±1 درجة على مقياس المختبر لكل دفعة مُسلَّمة.'
    },
    {
      qEn: 'What is the lead time for full hotel uniform programmes?',
      qAr: 'ما زمن التسليم لبرامج زي الفنادق الكاملة؟',
      aEn: 'Repeat programmes (existing fabric and pattern) ship in 14–21 days for orders up to 500 staff. New property launches add 21 days for fit-trial samples and brand-Pantone validation, totaling 35–42 days end-to-end. Hajj-season programmes require 60-day advance notice for the dedicated production line.',
      aAr: 'البرامج المتكرّرة (قماش ونمط حاليان) تُشحَن خلال 14–21 يوماً للطلبات حتى 500 موظف. إطلاق منشآت جديدة يُضيف 21 يوماً لعيّنات تجربة القياس ومصادقة بانتون للعلامة، بإجمالي 35–42 يوماً من البداية للنهاية. برامج موسم الحج تتطلّب إخطاراً مسبقاً 60 يوماً لخطّ الإنتاج المخصّص.'
    },
    {
      qEn: 'What warranty does UNEOM offer on hospitality uniforms?',
      qAr: 'ما الضمان الذي تقدّمه UNEOM على زي الضيافة؟',
      aEn: '12 months on fabric integrity, colour fastness, and seam construction. The warranty covers fabric pilling above SASO threshold, colour fade exceeding Pantone +/-2, and seam failure under standard service conditions. Hajj-rotation specialty fabrics carry 6-month warranty consistent with their high-volume use case.',
      aAr: '12 شهراً على سلامة القماش، ثبات اللون، وبناء الخياطة. يُغطّي الضمان تكوّر القماش فوق عتبة SASO، بهتان لون يتجاوز بانتون ±2، وفشل خياطة تحت ظروف الخدمة القياسية. أقمشة استبدال الحج التخصّصية تحمل ضماناً 6 أشهر متماشياً مع حالة استخدامها عالية الحجم.'
    },
    {
      qEn: 'Which Saudi hospitality properties has UNEOM served?',
      qAr: 'ما المنشآت السياحية السعودية التي خدمتها UNEOM؟',
      aEn: 'UNEOM\'s hospitality programme covers 24 luxury Saudi properties — including international five-star hotel chains in Riyadh and Jeddah, dedicated Hajj/Umrah accommodation operators, and the spa and wellness segment of three resort destinations. Specific names are confidential under NDA but UNEOM provides reference contacts to qualified procurement teams.',
      aAr: 'يغطّي برنامج UNEOM للضيافة 24 منشأة سعودية فاخرة — بما فيها سلاسل فنادق خمس نجوم عالمية في الرياض وجدة، مشغّلون متخصّصون في إقامة الحج/العمرة، وقطاع السبا والعافية في ثلاث وجهات منتجعية. الأسماء المحدّدة سرّية تحت اتّفاقية عدم إفصاح لكن UNEOM تُوفّر جهات اتّصال مرجعية لفِرَق المشتريات المؤهّلة.'
    },
    {
      qEn: 'Does UNEOM offer maid uniforms in different styles — long, cotton, winter, and budget options?',
      qAr: 'هل توفّر UNEOM يونيفورم عاملات بأنماط مختلفة — يونيفورم عاملات طويل، يونيفورم عاملات قطن، يونيفورم عاملات شتوي، ويونيفورم عاملات رخيص؟',
      aEn: 'Yes. UNEOM\'s maid uniform programme offers four configuration tiers: (1) Standard maid uniforms — poly-cotton 65/35 budget-friendly sets from 85 SAR; (2) Long maid uniforms (full-length) — modesty-compliant for residential and hotel environments; (3) Cotton maid uniforms — 100% combed cotton for premium properties prioritising comfort; (4) Winter maid uniforms — fleece-lined or layered options for Riyadh and Tabuk winter shifts. All styles available in dress-cut (يونيفورم عاملات فستان) or tunic-trouser combinations. MOQ: 50 units per style.',
      aAr: 'نعم. برنامج يونيفورم العاملات من UNEOM يُقدّم أربعة مستويات: (1) يونيفورم عاملات رخيص — أطقم بولي-قطن 65/35 اقتصادية من 85 ريالاً؛ (2) يونيفورم عاملات طويل (بطول كامل) — ملتزم بالحشمة للبيئات السكنية والفندقية؛ (3) يونيفورم عاملات قطن — قطن ممشّط 100% للمنشآت الفاخرة؛ (4) يونيفورم عاملات شتوي — خيارات فليس أو طبقات لورديات الرياض وتبوك الشتوية. جميع الأنماط متوفّرة بقصّة فستان (يونيفورم عاملات فستان) أو تونيك-بنطلون. الحد الأدنى: 50 وحدة لكل نمط.'
    },
    {
      qEn: 'Where can I find a chef uniform supplier near me in Saudi Arabia?',
      qAr: 'أين أجد مورّد يونيفورم شيف ويونيفورم مطاعم قريب مني في السعودية؟',
      aEn: 'UNEOM manufactures chef uniforms, restaurant staff uniforms, and full F&B attire with delivery from Riyadh, Jeddah, and Dammam depots. Our chef uniform line includes SFDA-compliant dual-layer flame-resistant chef coats, breathable chef trousers, and skull caps. Restaurant uniform programmes cover host/hostess, waitstaff, bartenders, and kitchen crew with Pantone brand-matching. Request a quote at uneom.com/quote.',
      aAr: 'تُصنّع UNEOM يونيفورم شيف، يونيفورم مطاعم، وزي أغذية ومشروبات كامل مع التوصيل من مستودعات الرياض وجدة والدمام. خط يونيفورم الشيف يشمل معاطف شيف مقاومة للحريق ثنائية الطبقة بمواصفات هيئة الغذاء والدواء، بناطيل شيف قابلة للتنفّس، وقبّعات. برامج يونيفورم المطاعم تغطّي الاستقبال والخدمة والبار وطاقم المطبخ مع مطابقة بانتون للعلامة التجارية. اطلب عرض سعر عبر uneom.com/quote.'
    }
  ],

  externalSources: [
    { nameEn: 'Ministry of Tourism (MOT)', nameAr: 'وزارة السياحة', url: 'https://mt.gov.sa' },
    { nameEn: 'Saudi Food & Drug Authority (SFDA)', nameAr: 'هيئة الغذاء والدواء (SFDA)', url: 'https://www.sfda.gov.sa' },
    { nameEn: 'Saudi Standards Organization (SASO)', nameAr: 'الهيئة السعودية للمواصفات (SASO)', url: 'https://www.saso.gov.sa' },
    { nameEn: 'AATCC Gray Scale (colour fastness)', nameAr: 'مقياس AATCC الرمادي (ثبات اللون)', url: 'https://www.aatcc.org/test/methods/' },
    { nameEn: 'Pantone Matching System', nameAr: 'نظام مطابقة بانتون', url: 'https://www.pantone.com/' },
    { nameEn: 'OEKO-TEX Standard 100', nameAr: 'معيار OEKO-TEX 100', url: 'https://www.oeko-tex.com/' }
  ]
};
