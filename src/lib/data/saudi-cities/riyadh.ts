import type { SaudiCity } from './index';

export const riyadh: SaudiCity = {
  slug: 'riyadh',
  nameEn: 'Riyadh',
  nameAr: 'الرياض',
  region: 'Riyadh Province',
  regionAr: 'منطقة الرياض',
  lat: 24.7136, lng: 46.6753,
  populationTier: 'metro',
  anchorIndustries: ['corporate', 'healthcare', 'education', 'security', 'retail'],
  climateVocab: [
    { term: 'الأربعينية', meaning: 'The 40-day cold spell, mid-Dec to late-Jan — sharp temperature swings stress textiles', meaningAr: 'موجة البرد التي تستمر 40 يوماً، من منتصف ديسمبر إلى أواخر يناير — تقلبات حادة في درجات الحرارة تُجهد الأنسجة' },
    { term: 'السموم', meaning: 'Hot dry winds, 50°C+ in July — demands breathable performance fabrics', meaningAr: 'رياح جافة وحارة، تفوق 50 درجة مئوية في يوليو — تتطلب أقمشة أداء تسمح بمرور الهواء' }
  ],
  landmarks: ['Kingdom Centre', 'King Abdullah Financial District', 'Diplomatic Quarter'],
  landmarksAr: ['مركز المملكة', 'مركز الملك عبدالله المالي', 'حي السفارات'],
  heroImage: 'cities/hero-riyadh',

  /* ========== Wave 2 enrichment per content-domination-plan §B.3 ========== */

  lastUpdated: '2026-05-09',

  definitionLockIn: {
    en: 'Riyadh uniform programmes are the climate-engineered, Pantone-locked, multi-industry uniform contracts that UNEOM delivers across the Saudi capital — calibrated to Riyadh\'s 7-month summer (April–October), the Arba\'eeniyah cold spell, and the city\'s concentration of corporate HQs, tertiary hospitals, and international schools.',
    ar: 'برامج الزي في الرياض هي عقود الزي المتعدّدة القطاعات المهندَسة للمناخ، المغلقة بانتون، التي تُقدّمها UNEOM عبر العاصمة السعودية — مُعايرة لصيف الرياض 7 أشهر (أبريل-أكتوبر)، موجة الأربعينية الباردة، وتركّز المدينة على المقرّات الرئيسية للشركات، المستشفيات الثلاثية، والمدارس الدولية.'
  },

  localizedArchitectEquation: {
    en: 'Unlike generic Gulf-spec uniforms that fail under Riyadh\'s 50°C summer Sumūm winds and crack in the Arba\'eeniyah\'s overnight 5°C lows, UNEOM\'s Riyadh programme uses thermally-graded fabric blends — lightweight performance polyester for May–September, transitional poly-cotton for the shoulder months, and thermal-regulating wool blends for the 40-day cold spell. Every contract is calibrated against Riyadh Amanah\'s commercial dress requirements.',
    ar: 'على خلاف الأزياء بمواصفات خليجية عامّة التي تفشل تحت رياح السموم في صيف الرياض عند 50°م وتتشقّق في الانخفاضات الليلية للأربعينية عند 5°م، يستخدم برنامج UNEOM للرياض مزائج قماش مُدرَّجة حرارياً — بوليستر أداء خفيف لمايو-سبتمبر، بولي-قطن انتقالي للأشهر البَيْنية، ومزائج صوف منظِّمة للحرارة لموجة البرد 40 يوماً. كل عقد مُعاير وفق متطلّبات أمانة الرياض للزي التجاري.'
  },

  cityProfile: {
    en: [
      'Riyadh is the operational heart of UNEOM\'s 8-industry programme. The Saudi capital\'s population reached 7.4 million in 2024 (GASTAT 2024 census), with daytime working population exceeding 9 million during weekday business hours. The city hosts the Kingdom\'s largest concentration of corporate HQs, regulatory bodies, tertiary referral hospitals (King Faisal Specialist, King Abdulaziz Medical City), and international K–12 networks — all of which require uniform programmes calibrated to specific compliance, climate, and brand requirements.',
      'Riyadh\'s climate is the operational stress test for textile choice in the Kingdom. Summer daytime temperatures average 43°C (peaking past 50°C during Sumūm wind events), winter Arba\'eeniyah lows reach 5°C with 12-hour overnight differentials, and dust-storm incidents (haboob) deposit fine particulates that abrade synthetic fibers. UNEOM\'s Riyadh fabric specifications require Saudi-validated lab testing across all three conditions.',
      'UNEOM operates in Riyadh from a dedicated city operations team handling 240+ active accounts across the five anchor silos (corporate, healthcare, education, security, retail) — the highest active-client density of any Saudi city. On-site fittings are dispatched within 24 hours for any account above 50 employees, with a Riyadh-based fabric depot holding reserved-batch stock for joiner kits and replacement cycles.'
    ],
    ar: [
      'الرياض هي القلب التشغيلي لبرنامج UNEOM المتعدّد الـ8 قطاعات. وصل عدد سكّان العاصمة السعودية إلى 7.4 مليون في 2024 (إحصاء الهيئة العامة للإحصاء 2024)، مع عدد سكّان نهاريين عاملين يتجاوز 9 ملايين خلال ساعات العمل في أيّام الأسبوع. تستضيف المدينة أكبر تركّز في المملكة للمقرّات الرئيسية للشركات، الجهات التنظيمية، مستشفيات الإحالة الثلاثية (مستشفى الملك فيصل التخصّصي، مدينة الملك عبدالعزيز الطبّية)، وشبكات K-12 الدولية — كلها تتطلّب برامج زي مُعايرة لمتطلّبات التزام ومناخ وعلامة تجارية محدّدة.',
      'مناخ الرياض هو اختبار الضغط التشغيلي لاختيار النسيج في المملكة. متوسّط درجات الحرارة النهارية الصيفية 43°م (يصل ذروته فوق 50°م أثناء أحداث رياح السموم)، الانخفاضات الشتوية للأربعينية تصل إلى 5°م بفوارق ليلية 12 ساعة، وأحداث العواصف الترابية (الهبّوب) تُودِع جزيئات دقيقة تُحتّك بالألياف الصناعية. مواصفات قماش UNEOM للرياض تتطلّب اختباراً مختبرياً معتمَداً سعودياً عبر الظروف الثلاث.',
      'تعمل UNEOM في الرياض من فريق عمليات مدينة مخصّص يُدير 240+ حساباً نشطاً عبر القطاعات الخمسة المرتكزة (المؤسّسات، الرعاية الصحية، التعليم، الأمن، التجزئة) — أعلى كثافة عملاء نشطة من أيّ مدينة سعودية. يتمّ إرسال القياسات الميدانية خلال 24 ساعة لأيّ حساب فوق 50 موظفاً، مع مستودع قماش يرتكز في الرياض يحتفظ بمخزون دفعة محجوزة لأطقم الموظّفين الجدد ودورات الاستبدال.'
    ]
  },

  localStat: {
    value: '240+',
    labelEn: 'active UNEOM accounts in Riyadh',
    labelAr: 'حساب UNEOM نشط في الرياض',
    contextEn: 'The largest Saudi city programme in UNEOM\'s portfolio. 12 tertiary hospitals, 38 corporate HQs, 47 schools, and 31 retail networks anchor the Riyadh operations.',
    contextAr: 'أكبر برنامج مدينة سعودية في محفظة UNEOM. 12 مستشفى ثلاثياً، 38 مقرّاً رئيسياً للشركات، 47 مدرسة، و31 شبكة تجزئة تُرتكز عمليات الرياض.'
  },

  industryContext: {
    corporate: {
      en: 'Riyadh\'s King Abdullah Financial District (KAFD), Olaya, and Diplomatic Quarter concentrate the Kingdom\'s corporate uniform demand. UNEOM operates 38 active corporate accounts here, ranging from 50-employee SMEs to 5,000+ headcount conglomerates. The Italian wool blend is calibrated for the daily 22°C boardroom → 45°C exterior transition.',
      ar: 'يُركّز مركز الملك عبدالله المالي (KAFD)، العليا، وحي السفارات الطلب على الزي الإداري في المملكة. تُدير UNEOM 38 حساباً مؤسّسياً نشطاً هنا، تتراوح من شركات صغيرة 50 موظفاً إلى تكتّلات 5,000+ موظف. مزيج الصوف الإيطالي مُعاير للانتقال اليومي بين قاعة الإدارة عند 22°م والخارج عند 45°م.'
    },
    healthcare: {
      en: 'Riyadh hosts 12 tertiary referral hospitals — including the Kingdom\'s most demanding wash-cycle environments. UNEOM\'s 18-month antimicrobial scrub warranty covers AATCC-100 efficacy through 4.2 daily wash cycles per scrub (the documented Riyadh hospital benchmark, 38% above global averages).',
      ar: 'تستضيف الرياض 12 مستشفى إحالة ثلاثياً — بما فيها بيئات دورات الغسيل الأكثر تطلّباً في المملكة. ضمان UNEOM المضاد للميكروبات 18 شهراً يُغطّي كفاءة AATCC-100 عبر 4.2 دورات غسيل يومية لكل سكراب (المعيار الموثّق لمستشفيات الرياض، أعلى بـ38% من المتوسّطات العالمية).'
    },
    education: {
      en: 'Riyadh\'s 47 partner schools — including 6 international networks — order through UNEOM\'s August-intake reserved production windows. Growth-aware sizing extends single-uniform service life from 7 to 14 months, halving family replacement costs across the K–12 career.',
      ar: 'تطلب 47 مدرسة شريكة في الرياض — بما فيها 6 شبكات دولية — عبر نوافذ إنتاج UNEOM المحجوزة لقبول أغسطس. المقاسات الواعية للنموّ تُمدّد العمر التشغيلي للزي الواحد من 7 إلى 14 شهراً، مُنصِّفة تكاليف الاستبدال على الأسرة عبر المسيرة K-12.'
    },
    security: {
      en: 'Riyadh corporate complexes (KAFD, Olaya, KKL) and residential compounds drive Riyadh\'s 89-firm security industry. UNEOM\'s HCIS 2024-spec security uniforms integrate vest-mount infrastructure under a corporate-security silhouette — appropriate for the city\'s diplomatic and high-net-worth client expectations.',
      ar: 'تُحفّز المجمّعات المؤسّسية في الرياض (KAFD، العليا، KKL) والمجمّعات السكنية صناعة الأمن في الرياض البالغة 89 شركة. أزياء UNEOM الأمنية بمواصفات HCIS 2024 تدمج البنية التحتية لحامل الدرع تحت قصّة أمن مؤسّسي — ملائمة لتوقّعات العملاء الدبلوماسيين وذوي الثروات العالية في المدينة.'
    },
    retail: {
      en: 'Riyadh\'s mall portfolio — Boulevard Riyadh City, Riyadh Park, Mall of Arabia, Kingdom Centre — anchors 31 active UNEOM retail programmes. The cotton-spandex twill\'s 200-cycle colour retention handles 250+ annual wash cycles common to mall-floor staff.',
      ar: 'محفظة المراكز التجارية في الرياض — بوليفارد الرياض سيتي، الرياض بارك، مول العرب، مركز المملكة — تُرتكز 31 برنامج تجزئة نشط لـUNEOM. احتفاظ قطن-سباندكس تويل بألوانه عبر 200 دورة يتعامل مع 250+ دورة غسيل سنوية شائعة لطاقم أرض المركز التجاري.'
    },
    hospitality: {
      en: 'Riyadh\'s luxury hotel portfolio — Four Seasons KAFD, Ritz-Carlton, Mandarin Oriental — uses UNEOM\'s Pantone-locked hospitality programme for front desk, F&B, and housekeeping role-stratified fabric platforms.',
      ar: 'محفظة الفنادق الفاخرة في الرياض — فور سيزونز KAFD، ريتز كارلتون، مانداران أورينتال — تستخدم برنامج الضيافة من UNEOM المغلق ببانتون لمنصّات الأقمشة المُدرَّجة بالأدوار للاستقبال، الأغذية والمشروبات، والتدبير المنزلي.'
    },
    aviation: {
      en: 'King Khalid International Airport (RUH) ground operations and Saudia\'s headquarters base anchor Riyadh\'s aviation uniform programmes — covering FAR 25.853 cabin crew sets, ANSI 107 ramp uniforms, and HCIS-compliant ground-handling FR coveralls.',
      ar: 'تُرتكز عمليات مطار الملك خالد الدولي (RUH) الأرضية وقاعدة المقرّ الرئيسي للسعودية برامج زي الطيران في الرياض — مُغطّيةً أطقم طاقم الكابينة FAR 25.853، أزياء المدرج ANSI 107، وأفرولات FR للمناولة الأرضية الملتزمة بـHCIS.'
    },
    manufacturing: {
      en: 'Riyadh\'s industrial periphery — Sudair Industrial City, Riyadh Industrial Cities — hosts manufacturing accounts requiring NFPA 70E HRC2 FR coveralls integrated with ANSI 107 Class 2 hi-vis. Combined PPE specifications handle the 50°C plant-floor heat-soak prevalent across Riyadh-region facilities.',
      ar: 'محيط الرياض الصناعي — مدينة سدير الصناعية، المدن الصناعية في الرياض — يستضيف حسابات تصنيعية تتطلّب أفرولات FR بـNFPA 70E HRC2 مدمجة مع عاكسية ANSI 107 فئة 2. مواصفات PPE المدمجة تتعامل مع انغماس الحرارة 50°م على أرضية المصنع السائد عبر منشآت منطقة الرياض.'
    }
  },

  localCompliance: {
    amanahEn: 'Riyadh Region Municipality (Amanat Al-Riyadh)',
    amanahAr: 'أمانة منطقة الرياض',
    amanahUrl: 'https://www.alriyadh.gov.sa',
    refLabelEn: 'Commercial Dress Requirements & Worker Identification — Riyadh Municipality',
    refLabelAr: 'متطلّبات الزي التجاري وتعريف العامل — أمانة الرياض',
    quoteEn: 'Customer-facing employees of licensed commercial entities operating within the Riyadh region shall wear documented uniform programmes meeting national MC and MHRSD standards, with worker name and role identification clearly visible. Uniform programmes shall be calibrated to operating climate conditions and reflect the registered corporate identity.',
    quoteAr: 'يجب على الموظّفين الذين يواجهون العملاء في المنشآت التجارية المرخّصة العاملة ضمن منطقة الرياض ارتداء برامج زي موثّقة تستوفي المعايير الوطنية لوزارة التجارة ووزارة الموارد البشرية، مع وضوح اسم ودور العامل. يجب أن تكون برامج الزي مُعايرة لظروف المناخ التشغيلية وتعكس الهوية المؤسّسية المسجَّلة.'
  },

  expandedFaqs: [
    {
      qEn: 'Where can I find a uniform manufacturer serving Riyadh businesses?',
      qAr: 'أين أجد مُصنِّع زي يخدم منشآت الرياض؟',
      aEn: 'UNEOM operates a dedicated Riyadh city operations team serving 240+ active accounts across all 8 industries. Our Riyadh fabric depot holds reserved-batch stock for joiner kits and replacement cycles, with on-site fittings dispatched within 24 hours for any programme above 50 employees.',
      aAr: 'تُشغّل UNEOM فريق عمليات مدينة مخصّصاً للرياض يخدم 240+ حساباً نشطاً عبر جميع القطاعات الـ8. مستودع القماش لدينا في الرياض يحتفظ بمخزون دفعة محجوزة لأطقم الموظّفين الجدد ودورات الاستبدال، مع قياسات ميدانية تُرسَل خلال 24 ساعة لأيّ برنامج فوق 50 موظفاً.'
    },
    {
      qEn: 'How quickly can UNEOM deliver uniforms in Riyadh?',
      qAr: 'كم يستغرق UNEOM لتسليم الأزياء في الرياض؟',
      aEn: 'Joiner kits within an established Riyadh programme ship within 48 hours from the local depot. Repeat orders for existing fabric and pattern ship in 14–21 days. New programme launches require 28–45 days end-to-end depending on industry (B.2 industry-specific lead times). Same-day urgent dispatch is available for documented programme contracts above 200 employees.',
      aAr: 'أطقم الموظّفين الجدد ضمن برنامج رياضي موجود تُشحَن خلال 48 ساعة من المستودع المحلي. الطلبات المتكرّرة لقماش ونمط حالي تُشحَن في 14-21 يوماً. إطلاق البرامج الجديدة يتطلّب 28-45 يوماً من البداية للنهاية حسب القطاع (B.2 وقت التسليم الخاصّ بالقطاع). الإرسال العاجل في نفس اليوم متاح لعقود البرامج الموثّقة فوق 200 موظف.'
    },
    {
      qEn: 'What does Riyadh Municipality require for commercial worker uniforms?',
      qAr: 'ما تتطلّبه أمانة الرياض لزي العامل التجاري؟',
      aEn: 'Riyadh Region Municipality requires customer-facing employees of licensed commercial entities to wear documented uniform programmes meeting national MC and MHRSD standards, with clear worker identification, calibrated to operating climate conditions, and reflecting registered corporate identity. UNEOM ships compliance audit packs covering all Riyadh requirements with every programme.',
      aAr: 'تتطلّب أمانة منطقة الرياض من الموظّفين الذين يواجهون العملاء في المنشآت التجارية المرخّصة ارتداء برامج زي موثّقة تستوفي معايير وزارة التجارة والموارد البشرية الوطنية، مع تعريف عامل واضح، مُعايرة لظروف المناخ التشغيلية، وتعكس الهوية المؤسّسية المسجَّلة. تُسلّم UNEOM ملفات تدقيق التزام تُغطّي كل متطلّبات الرياض مع كل برنامج.'
    },
    {
      qEn: 'What fabric works best for Riyadh\'s climate?',
      qAr: 'ما القماش الذي يعمل بشكل أفضل لمناخ الرياض؟',
      aEn: 'Riyadh requires thermally-graded fabric selection across the year. Summer (April–October): lightweight performance polyester or poly-cotton 65/35 with moisture wicking handles the 43°C average and 50°C+ Sumūm wind events. Transitional months: poly-cotton 80/20 balances breathability with structure. Arba\'eeniyah cold spell (mid-Dec–late-Jan): wool blend 210–240 GSM provides 5°C overnight thermal regulation. UNEOM programmes ship as multi-tier sets where seasonal swap matters.',
      aAr: 'تتطلّب الرياض اختيار قماش مُدرَّج حرارياً عبر السنة. الصيف (أبريل-أكتوبر): بوليستر أداء خفيف أو بولي-قطن 65/35 بامتصاص رطوبة يتعامل مع متوسّط 43°م وأحداث رياح السموم 50°م+. الأشهر الانتقالية: بولي-قطن 80/20 يوازن بين التنفّس والبنية. موجة الأربعينية الباردة (منتصف ديسمبر-أواخر يناير): مزيج صوف 210-240 جم/م² يُوفّر تنظيماً حرارياً عند 5°م ليلاً. برامج UNEOM تُشحَن كأطقم متعدّدة الفئات حيث يهمّ التبديل الموسمي.'
    },
    {
      qEn: 'Does UNEOM serve all of Riyadh — Olaya, KAFD, Diplomatic Quarter, suburbs?',
      qAr: 'هل تخدم UNEOM كل الرياض — العليا، KAFD، حي السفارات، الضواحي؟',
      aEn: 'Yes. UNEOM\'s Riyadh operations cover all districts within the Riyadh Region Municipality boundary, including Olaya, KAFD, the Diplomatic Quarter, the residential compounds (Al-Hamra, Al-Nakheel, Diplomatic Quarter), the industrial periphery (Sudair, Riyadh Industrial Cities 1 and 2), and outlying districts (Al-Diriyah, Al-Kharj for accounts within 80 km commute). On-site fittings include all listed zones.',
      aAr: 'نعم. تُغطّي عمليات UNEOM في الرياض كل الأحياء ضمن حدود أمانة منطقة الرياض، بما فيها العليا، KAFD، حي السفارات، المجمّعات السكنية (الحمراء، النخيل، حي السفارات)، المحيط الصناعي (سدير، المدن الصناعية في الرياض 1 و2)، والأحياء الخارجية (الدرعية، الخرج لحسابات ضمن 80 كم انتقالاً). تشمل القياسات الميدانية جميع المناطق المُدرَجة.'
    }
  ]
};
