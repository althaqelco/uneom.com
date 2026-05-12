import type { Product } from './index';

export const medicalScrubs: Product[] = [
  {
    slug: 'scrub-set-classic',
    category: 'medical-scrubs', industry: 'healthcare',
    nameEn: 'Classic Medical Scrub Set',
    nameAr: 'طقم سكراب طبي كلاسيك',
    summary: 'V-neck top + drawstring trousers in deep navy with emerald accent piping — the UNEOM healthcare workhorse.',
    summaryAr: 'بلوزة بياقة V + بنطلون برباط بلون كحلي داكن مع حواف خضراء زمردية — الخيار الأساسي من يونيوم للرعاية الصحية.',
    description: 'The most-ordered scrub set in the UNEOM healthcare line. Polyester-cotton 65/35 with bonded silver-ion antimicrobial finish, validated for >80 industrial wash cycles. Drop-shoulder construction for movement, drawstring waist with internal elastic, and reinforced double-stitched seams at every stress point.',
    descriptionAr: 'طقم السكراب الأكثر طلباً في تشكيلة يونيوم للرعاية الصحية. مزيج بوليستر-قطن 65/35 مع لمسة نهائية مضادة للميكروبات بأيونات الفضة، معتمد لأكثر من 80 دورة غسيل صناعي. تصميم بأكتاف منسدلة لحرية الحركة، خصر برباط مع مطاط داخلي، ودرزات مزدوجة معززة في كل نقطة ضغط.',
    fabric: 'Polyester-Cotton 65/35, Bonded Silver-Ion',
    fabricAr: 'بوليستر-قطن 65/35، بأيونات الفضة المدمجة',
    fabricWeight: '180gsm',
    fabricWeightAr: '180 جرام للمتر المربع',
    priceFrom: 180,
    image: 'products/medical-scrubs/scrub-set-classic',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    colors: ['Navy', 'Hospital White', 'Sage', 'Royal Blue', 'Slate'],
    colorsAr: ['كحلي', 'أبيض مستشفيات', 'مريمي', 'أزرق ملكي', 'رمادي مزرق'],
    features: ['Antimicrobial finish', 'Hijab-integrated option', '4-direction stretch', 'Reinforced stress seams', '18-month warranty'],
    featuresAr: ['طبقة مضادة للميكروبات', 'خيار مدمج مع الحجاب', 'تمدد في 4 اتجاهات', 'درزات معززة للضغط', 'ضمان 18 شهراً'],
    compliance: ['MoH', 'SFDA', 'AATCC 100', 'OEKO-TEX'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Classic Medical Scrub Set is the antimicrobial polyester-cotton scrub uniform that healthcare workers wear in MoH-licensed Saudi hospitals — engineered for 80+ industrial wash cycles, 4.2 daily wash rotations, and an 18-month performance warranty.',
      ar: 'طقم سكراب UNEOM الكلاسيك الطبي هو زي السكراب من بوليستر-قطن المضاد للميكروبات الذي يرتديه العاملون في الرعاية الصحية في المستشفيات السعودية المرخّصة من وزارة الصحة — مهندَس لـ80+ دورة غسيل صناعي، 4.2 دورات غسيل يومياً، وضمان أداء 18 شهراً.'
    },

    architectEquation: {
      en: 'Unlike 100% cotton scrubs that lose antimicrobial integrity after 30 wash cycles, the UNEOM Classic combines bonded silver-ion poly-cotton 65/35 with reinforced double-stitched stress seams — 80+ wash cycles validated against AATCC 100, 18-month warranty.',
      ar: 'على خلاف سكرابات القطن 100% التي تفقد سلامتها المضادة للميكروبات بعد 30 دورة غسيل، يجمع UNEOM الكلاسيك بين بوليستر-قطن 65/35 بأيونات الفضة المرتبطة ودرزات مزدوجة معزّزة عند نقاط الضغط — 80+ دورة غسيل معتمدة وفق AATCC 100، ضمان 18 شهراً.'
    },

    materialScience: {
      en: 'The fabric chemistry centres on a bonded silver-ion antimicrobial finish — silver ions integrated into the fiber bundle through Polyamide 6 anchoring, not surface-applied chemical treatment that washes out. Polyester-cotton 65/35 at 180 GSM balances three constraints simultaneously: cotton\'s skin comfort and breathability for 12-hour rotations, polyester\'s dimensional stability through 80°C industrial laundering, and the silver-ion bond\'s durability through 80+ wash cycles tested against AATCC Method 100. The result: antimicrobial efficacy sustained through 30 months of typical hospital service before scrub retirement, vs the 4-month efficacy window of cotton-100% with surface-treated antimicrobials.',
      ar: 'كيمياء القماش تتمحور حول لمسة نهائية مضادّة للميكروبات بأيونات الفضة المرتبطة — أيونات الفضة مُدمَجة في حُزَم الألياف عبر تثبيت بولي أميد 6، ليست معالَجة كيميائية سطحية تنغسل. بوليستر-قطن 65/35 عند 180 جم/م² يوازن ثلاث قيود معاً: راحة الجلد وتنفّس القطن لورديات 12 ساعة، الثبات البُعدي للبوليستر خلال الغسيل الصناعي عند 80°م، ومتانة رابطة أيونات الفضة عبر 80+ دورة غسيل مختبَرة وفق طريقة AATCC 100. النتيجة: كفاءة مضادّة للميكروبات مُحتفظَ بها خلال 30 شهراً من الخدمة المستشفوية النموذجية قبل تقاعد السكراب، مقابل نافذة كفاءة 4 أشهر لقطن 100% مع مضادّات ميكروبية معالَجة سطحياً.'
    },

    useCase: {
      en: 'Designed for nurses, ward technicians, and primary-care physicians in MoH-licensed hospitals where the daily wash regime exceeds 4 cycles per scrub. The hijab-integrated option (covered shoulders, modesty-grade neckline) addresses the Saudi clinical workforce reality. Sized XS through 4XL to accommodate diverse staff body types. Most-ordered scrub set across UNEOM\'s 38-hospital partner network.',
      ar: 'مصمَّم للممرّضين، فنّيي الأقسام، وأطبّاء الرعاية الأوّلية في المستشفيات المرخّصة من وزارة الصحة حيث يتجاوز نظام الغسيل اليومي 4 دورات لكل سكراب. الخيار المدمج للحجاب (أكتاف مغطّاة، رقبة بمستوى حشمة) يعالج واقع القوى العاملة السريرية السعودية. القياسات من XS إلى 4XL لاستيعاب أنواع جسم الطاقم المتنوّعة. طقم السكراب الأكثر طلباً عبر شبكة الـ38 مستشفى الشريكة لـUNEOM.'
    },

    comparisonMatrix: {
      titleEn: 'Classic Scrub vs market alternatives',
      titleAr: 'مقارنة السكراب الكلاسيك مع بدائل السوق',
      columnsEn: ['UNEOM Classic', 'Standard Hospital Scrub', 'Cheap Imported'],
      columnsAr: ['UNEOM الكلاسيك', 'سكراب مستشفى قياسي', 'مستورد رخيص'],
      rows: [
        { dimensionEn: 'Fabric', dimensionAr: 'القماش', valuesEn: ['Poly-cotton 65/35 + bonded silver-ion', 'Cotton 100% surface-treated', 'Polyester 100% no treatment'], valuesAr: ['بوليستر-قطن 65/35 + أيونات فضة مرتبطة', 'قطن 100% معالَج سطحياً', 'بوليستر 100% بدون معالَجة'] },
        { dimensionEn: 'GSM', dimensionAr: 'الوزن', valuesEn: ['180', '160', '120'], valuesAr: ['180', '160', '120'] },
        { dimensionEn: 'Antimicrobial efficacy', dimensionAr: 'الكفاءة المضادّة للميكروبات', valuesEn: ['30 months / 80+ cycles (AATCC 100)', '~4 months / 30 cycles', 'None claimed or verifiable'], valuesAr: ['30 شهراً / 80+ دورة (AATCC 100)', '~4 أشهر / 30 دورة', 'لا يوجد ادّعاء أو تحقّق'] },
        { dimensionEn: 'Wash cycle limit', dimensionAr: 'حدّ دورة الغسيل', valuesEn: ['80+ industrial cycles validated', '40 cycles before integrity loss', '20 cycles'], valuesAr: ['80+ دورة صناعية معتمدة', '40 دورة قبل فقدان السلامة', '20 دورة'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['18 months', '6 months', 'None'], valuesAr: ['18 شهراً', '6 أشهر', 'لا يوجد'] },
        { dimensionEn: 'Price (SAR)', dimensionAr: 'السعر (ريال)', valuesEn: ['180', '120', '70'], valuesAr: ['180', '120', '70'] },
        { dimensionEn: '12-month TCO per nurse', dimensionAr: 'إجمالي كلفة الملكية لكل ممرّض/12 شهراً', valuesEn: ['180 (1.0 unit)', '240 (2 units)', '210 (3 units)'], valuesAr: ['180 (1.0 قطعة)', '240 (2 قطعة)', '210 (3 قطعة)'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Pre-wash inspection', description: 'Inspect for visible biological contamination before laundering. Heavy contamination triggers separate hot-pre-wash cycle per ICMS protocol.' },
        { step: 'Industrial wash 60–80°C', description: 'Hot-water wash with hospital-grade detergent. Avoid bleach above 200 ppm chlorine to preserve silver-ion bond.' },
        { step: 'Tumble dry medium', description: 'Tumble dry on medium heat (max 70°C). High heat cycles accelerate fabric integrity loss.' },
        { step: 'Press if required', description: 'Steam press at medium temperature. Avoid direct iron contact above 150°C.' },
        { step: 'Rotation tracking', description: 'Mark wash count on garment care label. Replace at 80 documented cycles regardless of visual condition.' },
        { step: 'Storage', description: 'Hang on shaped hanger in clean linen storage. Avoid plastic-bag storage which traps residual moisture.' },
        { step: 'Audit retain', description: 'Retain wash-count log for hospital quality audit and UNEOM warranty validation.' }
      ],
      ar: [
        { step: 'الفحص قبل الغسيل', description: 'افحص للتلوّث البيولوجي المرئي قبل الغسيل. التلوّث الشديد يستوجب دورة غسيل ساخنة مسبقاً منفصلة وفق بروتوكول ICMS.' },
        { step: 'غسيل صناعي 60-80°م', description: 'غسيل بالماء الساخن بمنظّف بمستوى مستشفى. تجنّب المُبيِّض فوق 200 جزء في المليون كلور للحفاظ على رابطة أيونات الفضة.' },
        { step: 'تجفيف بالأسطوانة متوسط', description: 'جفّف بالأسطوانة على حرارة متوسّطة (أقصى 70°م). دورات الحرارة العالية تُسرّع فقدان سلامة القماش.' },
        { step: 'الكيّ إذا لزم', description: 'اكوِ ببخار حرارة متوسّطة. تجنّب الاتّصال المباشر للمكواة فوق 150°م.' },
        { step: 'تتبّع التدوير', description: 'سجّل عدد الغسلات على بطاقة عناية القطعة. استبدل عند 80 دورة موثّقة بغضّ النظر عن الحالة البصرية.' },
        { step: 'التخزين', description: 'علّق على شمّاعة مُشكَّلة في تخزين بياضات نظيف. تجنّب التخزين بأكياس بلاستيكية التي تحبس الرطوبة المتبقّية.' },
        { step: 'الاحتفاظ للتدقيق', description: 'احتفظ بسجلّ عدد الغسلات لتدقيق جودة المستشفى وتحقّق ضمان UNEOM.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Programme — 50–199 units', nameAr: 'برنامج — 50-199 قطعة', priceFrom: 195, fabricEn: 'Standard poly-cotton 65/35', fabricAr: 'بوليستر-قطن قياسي 65/35', warrantyMonths: 18, summaryEn: 'Single-batch ordering, 14-21 day lead time.', summaryAr: 'طلب دفعة واحدة، زمن تسليم 14-21 يوماً.' },
      { nameEn: 'Volume — 200–999 units', nameAr: 'حجم — 200-999 قطعة', priceFrom: 180, fabricEn: 'Standard poly-cotton 65/35 with reserved batch', fabricAr: 'بوليستر-قطن قياسي 65/35 مع دفعة محجوزة', warrantyMonths: 18, summaryEn: 'Reserved fabric batch + on-site fittings + joiner-kit SLA.', summaryAr: 'دفعة قماش محجوزة + قياسات ميدانية + اتّفاقية مستوى خدمة لأطقم الموظّفين الجدد.' },
      { nameEn: 'Enterprise — 1,000+ units', nameAr: 'مؤسّسي — 1,000+ قطعة', priceFrom: 165, fabricEn: 'Custom Pantone match + reserved batch', fabricAr: 'مطابقة بانتون مخصّصة + دفعة محجوزة', warrantyMonths: 18, summaryEn: 'Hospital-specific Pantone + replacement-cycle planning + audit pack.', summaryAr: 'بانتون خاصّ بالمستشفى + تخطيط دورات الاستبدال + ملف تدقيق.' }
    ],

    expandedFaqs: [
      { qEn: 'Does UNEOM\'s antimicrobial finish actually last 80+ wash cycles?', qAr: 'هل تدوم لمسة UNEOM المضادّة للميكروبات فعلاً 80+ دورة غسيل؟', aEn: 'Yes, validated through independent AATCC Method 100 testing. The bonded silver-ion finish anchors silver ions into the fiber bundle via Polyamide 6 binding — not a surface chemical treatment that washes out. Independent lab certificates accompany every UNEOM hospital programme batch.', aAr: 'نعم، معتمد عبر اختبار طريقة AATCC 100 المستقلّ. لمسة أيونات الفضة المرتبطة تُثبِّت أيونات الفضة في حُزَم الألياف عبر ربط بولي أميد 6 — ليست معالَجة كيميائية سطحية تنغسل. شهادات مختبر مستقلّ ترافق كل دفعة برنامج مستشفى لـUNEOM.' },
      { qEn: 'What is the MOQ for the Classic Scrub Set?', qAr: 'ما الحدّ الأدنى للطلب لطقم السكراب الكلاسيك؟', aEn: 'Programme MOQ is 50 units. Below 50, retail individual purchases through the UNEOM website are available but without programme features (reserved batch, joiner-kit SLA, custom Pantone). Volume pricing tiers begin at 200 units.', aAr: 'الحدّ الأدنى للبرنامج 50 قطعة. تحت 50، عمليات الشراء الفردية بالتجزئة عبر موقع UNEOM متاحة لكن بدون ميزات البرنامج (دفعة محجوزة، اتّفاقية مستوى خدمة لأطقم الموظّفين الجدد، بانتون مخصّص). فئات تسعير الحجم تبدأ من 200 قطعة.' },
      { qEn: 'Is the hijab-integrated version compliant with MoH clinical standards?', qAr: 'هل النسخة المدمجة مع الحجاب ملتزمة بمعايير وزارة الصحة السريرية؟', aEn: 'Yes. The hijab-integrated variant uses the same antimicrobial poly-cotton fabric in a covered-shoulder, modesty-grade neckline cut that meets all MoH clinical movement and infection-control requirements. SFDA-registered for hospital use across all 24 Saudi cities.', aAr: 'نعم. متغيّر مدمج للحجاب يستخدم نفس قماش بوليستر-قطن المضاد للميكروبات في قصّة بأكتاف مغطّاة ورقبة بمستوى حشمة تستوفي جميع متطلّبات الحركة السريرية والسيطرة على العدوى لوزارة الصحة. مسجَّل لدى SFDA للاستخدام المستشفوي عبر جميع المدن الـ24 السعودية.' },
      { qEn: 'How does UNEOM handle scrub replacement when the wash count reaches 80?', qAr: 'كيف تتعامل UNEOM مع استبدال السكراب عند وصول عدد الغسلات إلى 80؟', aEn: 'Hospital programme contracts include scheduled replacement cycles at 80 documented washes. UNEOM\'s rotation logistics team coordinates with the hospital procurement office to deliver replacement units 14 days before the projected end-of-life date — based on the wash-count log retained on the garment care label.', aAr: 'عقود برنامج المستشفى تشمل دورات استبدال مجدوَلة عند 80 غسلة موثّقة. فريق لوجستيات تدوير UNEOM يُنسّق مع مكتب مشتريات المستشفى لتسليم وحدات الاستبدال قبل 14 يوماً من تاريخ نهاية العمر المُتوقَّع — بناءً على سجلّ عدد الغسلات المحفوظ على بطاقة عناية القطعة.' },
      { qEn: 'What is the lead time for a 500-unit Classic Scrub order?', qAr: 'ما زمن التسليم لطلب 500 قطعة من السكراب الكلاسيك؟', aEn: 'Repeat orders against an established programme ship in 14–21 days. New programme launches require 28 days end-to-end (7 days for Pantone validation, 14 days for sized production with on-site fittings, 7 days for delivery and audit-pack assembly). Reserved-batch fabric ensures Pantone consistency across every shipment for the contract duration.', aAr: 'الطلبات المتكرّرة على برنامج موجود تُشحَن في 14-21 يوماً. إطلاق البرامج الجديدة يتطلّب 28 يوماً من البداية للنهاية (7 أيام لمصادقة بانتون، 14 يوماً للإنتاج المُقاس مع قياسات ميدانية، 7 أيام للتسليم وتجميع ملف التدقيق). دفعة قماش محجوزة تضمن اتّساق بانتون عبر كل شحنة لمدّة العقد.' }
    ],

    numericAnchors: { moqUnits: 50, leadTimeDaysFrom: 14, leadTimeDaysTo: 21, warrantyMonths: 18, washCyclesValidated: 80 }
  },
  {
    slug: 'lab-coat-doctor',
    category: 'medical-scrubs', industry: 'healthcare',
    nameEn: 'Doctor Lab Coat',
    nameAr: 'معطف طبي للأطباء',
    summary: 'Knee-length lab coat in Egyptian cotton poplin with hidden button placket — clinical authority, tailored fit.',
    summaryAr: 'معطف مختبر بطول الركبة من قطن البوبلين المصري مع أزرار مخفية — مظهر طبي موثوق بتفصيل متقن.',
    description: 'Premium Egyptian cotton poplin lab coat for senior clinical staff. Knee-length cut with structured shoulders, hidden button placket, two patch hip pockets, chest pocket with pen-loop, and subtle UNEOM brand label inside collar.',
    descriptionAr: 'معطف مختبر من قطن البوبلين المصري الفاخر لكبار الطاقم الطبي. قصة بطول الركبة مع أكتاف مهيكلة، صَف أزرار مخفي، جيبان جانبيان، جيب صدر مع حلقة للقلم، وعلامة يونيوم التجارية بلمسة رقيقة داخل الياقة.',
    fabric: 'Egyptian Cotton Poplin',
    fabricAr: 'قطن بوبلين مصري',
    fabricWeight: '110gsm',
    fabricWeightAr: '110 جرام للمتر المربع',
    priceFrom: 280,
    image: 'products/medical-scrubs/lab-coat-doctor',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['White'],
    colorsAr: ['أبيض'],
    features: ['Structured shoulders', 'Hidden button placket', 'Pen-loop chest pocket', 'Embroidered name option', '18-month warranty'],
    featuresAr: ['أكتاف مهيكلة', 'أزرار مخفية', 'جيب صدر بحلقة للقلم', 'خيار تطريز الاسم', 'ضمان 18 شهراً'],
    compliance: ['MoH', 'OEKO-TEX'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Doctor Lab Coat is the Egyptian-cotton-poplin clinical garment that senior physicians and consultants wear in MoH-licensed Saudi tertiary hospitals — knee-length cut with structured shoulders, hidden button placket, and embroidered-name customisation as the visible signal of senior clinical authority.',
      ar: 'معطف UNEOM الطبي للأطباء هو القطعة السريرية من قطن البوبلين المصري التي يرتديها الأطبّاء الكبار والاستشاريون في المستشفيات السعودية الثلاثية المرخّصة من وزارة الصحة — قصّة بطول الركبة بأكتاف مهيكلة، صفّ أزرار مخفي، وتخصيص الاسم المطرَّز كإشارة بصرية للسلطة السريرية العليا.'
    },

    architectEquation: {
      en: 'Unlike off-the-shelf lab coats cut from polyester-blend rejected by senior consultants, the UNEOM Doctor Lab Coat uses 110 GSM Egyptian cotton poplin tailored with structured shoulders, hidden plackets, and embroidered name placement — the garment that signals consultant-level authority on round.',
      ar: 'على خلاف معاطف المختبر الجاهزة المقطوعة من مزيج بوليستر يرفضها كبار الاستشاريين، يستخدم معطف UNEOM الطبي للأطباء قطن بوبلين مصري 110 جم/م² مفصَّلاً بأكتاف مهيكلة وصفّ أزرار مخفي ومكان اسم مطرَّز — القطعة التي تُشير إلى سلطة بمستوى استشاري في الجولة.'
    },

    materialScience: {
      en: 'Egyptian cotton poplin at 110 GSM is the choice that distinguishes consultant-level lab coats from generic alternatives. The cotton fiber\'s long staple length (33+ mm Giza-86 grade) produces a poplin weave that drapes precisely around tailored shoulders without the synthetic stiffness of polyester blends. The fabric retains pressed creases through institutional laundering, withstands 70+ wash cycles without fiber-bundle weakening, and accepts direct dye-sublimation embroidery for name and credentials. The visual signal is unmistakable to clinical staff and patients: the consultant on round, distinct from registrars and ward staff.',
      ar: 'قطن البوبلين المصري عند 110 جم/م² هو الخيار الذي يميّز معاطف الاستشاريين عن البدائل العامّة. طول التيلة الطويل لألياف القطن (33+ ملم بدرجة جيزة-86) يُنتج نسيج بوبلين ينسدل بدقّة حول أكتاف مفصَّلة دون الصلابة الصناعية لمزيج البوليستر. القماش يحتفظ بالكسرات المكوية خلال الغسيل المؤسّسي، يصمد لـ70+ دورة غسيل دون إضعاف حُزَم الألياف، ويقبل التطريز المباشر بتسامي الأصباغ للاسم والاعتمادات. الإشارة البصرية لا لبس فيها لطاقم العيادة والمرضى: الاستشاري في الجولة، متميّز عن الأطبّاء المقيمين وطاقم الأقسام.'
    },

    useCase: {
      en: 'Designed for senior physicians, consultants, department heads, and visiting attending staff in tertiary referral hospitals (King Faisal Specialist, King Abdulaziz Medical City, Madinah Cardiac Centre). Embroidered-name option includes consultant credentials (e.g., "Dr. [Name] · Cardiology · KFSH"). Worn over scrubs or business attire on round.',
      ar: 'مصمَّم لكبار الأطبّاء، الاستشاريين، رؤساء الأقسام، وأطبّاء الزيارة في المستشفيات الثلاثية الإحالية (مستشفى الملك فيصل التخصّصي، مدينة الملك عبدالعزيز الطبّية، مركز القلب بالمدينة). خيار الاسم المطرَّز يشمل اعتمادات الاستشاري (مثلاً «د. [الاسم] · القلبية · KFSH»). يُرتدى فوق السكراب أو الزي الإداري في الجولة.'
    },

    comparisonMatrix: {
      titleEn: 'Doctor Lab Coat vs market alternatives',
      titleAr: 'مقارنة معطف الأطبّاء مع بدائل السوق',
      columnsEn: ['UNEOM Doctor', 'Standard Lab Coat', 'Cheap Polyester'],
      columnsAr: ['UNEOM للأطبّاء', 'معطف مختبر قياسي', 'بوليستر رخيص'],
      rows: [
        { dimensionEn: 'Fabric', dimensionAr: 'القماش', valuesEn: ['Egyptian cotton poplin (Giza-86)', 'Poly-cotton 60/40 generic', 'Polyester 100%'], valuesAr: ['قطن بوبلين مصري (جيزة-86)', 'بوليستر-قطن 60/40 عامّ', 'بوليستر 100%'] },
        { dimensionEn: 'GSM', dimensionAr: 'الوزن', valuesEn: ['110', '95', '85'], valuesAr: ['110', '95', '85'] },
        { dimensionEn: 'Construction', dimensionAr: 'البناء', valuesEn: ['Structured shoulders + hidden placket', 'Standard fused', 'Glued seams'], valuesAr: ['أكتاف مهيكلة + أزرار مخفية', 'مدمج بحرارة قياسي', 'خياطة بالغراء'] },
        { dimensionEn: 'Embroidered name', dimensionAr: 'الاسم المطرَّز', valuesEn: ['Direct sublimation, consultant credentials', 'Add-on patch', 'Not supported'], valuesAr: ['تسامي مباشر، اعتمادات استشاري', 'رقعة مُضافة', 'غير مدعوم'] },
        { dimensionEn: 'Wash cycle limit', dimensionAr: 'حدّ دورة الغسيل', valuesEn: ['70+ industrial cycles', '40 cycles', '20 cycles'], valuesAr: ['70+ دورة صناعية', '40 دورة', '20 دورة'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['18 months', '6 months', 'None'], valuesAr: ['18 شهراً', '6 أشهر', 'لا يوجد'] },
        { dimensionEn: 'Price (SAR)', dimensionAr: 'السعر (ريال)', valuesEn: ['280', '180', '90'], valuesAr: ['280', '180', '90'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Pre-wash cold rinse', description: 'Cold-water pre-rinse to remove biological residue before institutional laundering.' },
        { step: 'Wash 60°C with mild detergent', description: 'Hot-water wash at 60°C with phosphate-free detergent. Avoid optical brighteners.' },
        { step: 'Tumble dry low', description: 'Tumble dry on low (max 60°C). Egyptian cotton retains shape best at moderate heat.' },
        { step: 'Steam press structured', description: 'Steam press with shoulder-form to maintain structured-shoulder construction. Avoid direct iron above 160°C.' },
        { step: 'Hang storage', description: 'Hang on shaped wooden hanger. Avoid plastic bags which trap residual moisture.' },
        { step: 'Embroidery care', description: 'Turn inside-out before wash to protect embroidered name patch.' }
      ],
      ar: [
        { step: 'شطف بارد قبل الغسيل', description: 'شطف بماء بارد قبل الغسيل لإزالة البقايا البيولوجية قبل الغسيل المؤسّسي.' },
        { step: 'غسيل 60°م بمنظّف خفيف', description: 'غسيل بالماء الساخن عند 60°م بمنظّف خالٍ من الفوسفات. تجنّب المُبيِّضات البصرية.' },
        { step: 'تجفيف بالأسطوانة منخفض', description: 'جفّف بالأسطوانة على منخفض (أقصى 60°م). القطن المصري يحتفظ بشكله بشكل أفضل عند حرارة معتدلة.' },
        { step: 'كيّ بخار مهيكل', description: 'اكوِ ببخار بقالب كتف للحفاظ على بناء الأكتاف المهيكلة. تجنّب المكواة المباشرة فوق 160°م.' },
        { step: 'تخزين بالتعليق', description: 'علّق على شمّاعة خشب مُشكَّلة. تجنّب الأكياس البلاستيكية التي تحبس الرطوبة المتبقّية.' },
        { step: 'عناية التطريز', description: 'اقلب من الداخل قبل الغسيل لحماية رقعة الاسم المطرَّز.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Programme — 25–99 units', nameAr: 'برنامج — 25-99 قطعة', priceFrom: 290, fabricEn: 'Egyptian cotton poplin', fabricAr: 'قطن بوبلين مصري', warrantyMonths: 18, summaryEn: 'Standard programme; 21–28 day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 21-28 يوماً.' },
      { nameEn: 'Volume — 100–299 units', nameAr: 'حجم — 100-299 قطعة', priceFrom: 280, fabricEn: 'Egyptian cotton poplin + reserved batch', fabricAr: 'قطن بوبلين مصري + دفعة محجوزة', warrantyMonths: 18, summaryEn: 'Reserved batch + on-site embroidered-name fitting.', summaryAr: 'دفعة محجوزة + تركيب اسم مطرَّز ميدانياً.' },
      { nameEn: 'Enterprise — 300+ units', nameAr: 'مؤسّسي — 300+ قطعة', priceFrom: 260, fabricEn: 'Premium Giza-86 + custom Pantone trim', fabricAr: 'جيزة-86 فاخر + حواف بانتون مخصّصة', warrantyMonths: 18, summaryEn: 'Hospital crest embroidery + replacement-cycle planning.', summaryAr: 'تطريز شعار المستشفى + تخطيط دورات الاستبدال.' }
    ],

    expandedFaqs: [
      { qEn: 'Why does UNEOM use Egyptian cotton instead of poly-cotton blends for the lab coat?', qAr: 'لماذا تستخدم UNEOM القطن المصري بدلاً من مزيج بوليستر-قطن للمعطف الطبي؟', aEn: 'Egyptian cotton (Giza-86 long-staple) produces a poplin weave that drapes around tailored structured shoulders precisely — the visual signal of consultant-level authority. Poly-cotton blends introduce synthetic stiffness that consultant clinical staff explicitly reject. The fabric premium (110 GSM cotton poplin vs 95 GSM poly-cotton) translates to 35-40% higher unit cost but 70% longer wash-cycle life and significantly higher staff acceptance.', aAr: 'القطن المصري (جيزة-86 طويل التيلة) يُنتج نسيج بوبلين ينسدل حول أكتاف مهيكلة مفصَّلة بدقّة — الإشارة البصرية للسلطة بمستوى استشاري. مزائج بوليستر-قطن تُدخِل صلابة صناعية يرفضها طاقم الاستشاريين السريري صراحةً. علاوة القماش (بوبلين قطن 110 جم/م² مقابل بوليستر-قطن 95 جم/م²) تُترجَم إلى تكلفة وحدة أعلى بـ35-40% لكن عمر دورة غسيل أطول بـ70% وقبول طاقم أعلى بشكل ملحوظ.' },
      { qEn: 'Can the embroidered name include consultant credentials (DR., department, hospital)?', qAr: 'هل يمكن أن يشمل الاسم المطرَّز اعتمادات الاستشاري (د.، القسم، المستشفى)؟', aEn: 'Yes. Direct dye-sublimation embroidery accommodates name + credentials line + department line + hospital affiliation. Standard layout: Line 1: "Dr. [Full Name]"; Line 2: "Specialty (e.g., Cardiology)"; Line 3: "Hospital Affiliation". Custom layouts available for visiting consultants and locum staff.', aAr: 'نعم. التطريز المباشر بتسامي الأصباغ يستوعب الاسم + سطر الاعتمادات + سطر القسم + الانتماء للمستشفى. التخطيط القياسي: السطر 1: «د. [الاسم الكامل]»؛ السطر 2: «التخصّص (مثلاً، القلبية)»؛ السطر 3: «الانتماء للمستشفى». تخطيطات مخصّصة متاحة للاستشاريين الزائرين وطاقم الإحلال.' },
      { qEn: 'What is the MOQ for the Doctor Lab Coat?', qAr: 'ما الحدّ الأدنى للطلب لمعطف الأطبّاء؟', aEn: 'Programme MOQ is 25 units (smaller than scrub MOQ because consultant headcounts are smaller). Embroidered-name customisation is included in programme orders without additional setup fee for orders above 50 units.', aAr: 'الحدّ الأدنى للبرنامج 25 قطعة (أصغر من الحدّ الأدنى للسكراب لأنّ أعداد الاستشاريين أصغر). تخصيص الاسم المطرَّز مشمول في طلبات البرنامج بدون رسم إعداد إضافي للطلبات فوق 50 قطعة.' },
      { qEn: 'How long does a UNEOM Doctor Lab Coat last in tertiary hospital service?', qAr: 'كم يدوم معطف UNEOM للأطبّاء في خدمة مستشفى ثلاثي؟', aEn: '70+ industrial wash cycles validated against AATCC durability standards. In typical consultant service (1–2 wash cycles per week), this translates to 18–24 months of service before fabric integrity degradation. Replacement is typically driven by embroidered-name updates (promotion, role change) rather than fabric failure.', aAr: '70+ دورة غسيل صناعي معتمدة وفق معايير متانة AATCC. في خدمة استشاري نموذجية (1-2 دورة غسيل أسبوعياً)، يُترجم هذا إلى 18-24 شهراً من الخدمة قبل تدهور سلامة القماش. الاستبدال عادةً مدفوع بتحديثات الاسم المطرَّز (ترقية، تغيير دور) بدلاً من فشل القماش.' },
      { qEn: 'Does the Doctor Lab Coat work over modesty-grade scrubs for female consultants?', qAr: 'هل يعمل معطف الأطبّاء فوق سكراب بمستوى حشمة للاستشاريات النساء؟', aEn: 'Yes. The lab coat\'s knee-length cut layers correctly over UNEOM\'s hijab-integrated scrub set, providing a modesty-graded outer layer for female consultants while maintaining the structured-shoulder consultant silhouette. Both garments are colour-coordinated through the same UNEOM hospital programme Pantone reference.', aAr: 'نعم. قصّة المعطف بطول الركبة تنطبق بشكل صحيح فوق طقم سكراب UNEOM المدمج للحجاب، مُوفّرةً طبقة خارجية بمستوى حشمة للاستشاريات النساء مع الحفاظ على قصّة الاستشاري بأكتاف مهيكلة. القطعتان منسّقتان لونياً من خلال مرجع بانتون لبرنامج المستشفى نفسه لـUNEOM.' }
    ],

    numericAnchors: { moqUnits: 25, leadTimeDaysFrom: 21, leadTimeDaysTo: 28, warrantyMonths: 18, washCyclesValidated: 70 }
  },
  {
    slug: 'scrub-set-premium',
    category: 'medical-scrubs', industry: 'healthcare',
    nameEn: 'Premium Medical Scrub Set',
    nameAr: 'طقم سكراب طبي بريميوم',
    summary: 'Premium scrub set in cotton-spandex twill — antimicrobial, fluid-resistant, and engineered for senior clinical roles.',
    summaryAr: 'طقم سكراب فاخر من نسيج تويل قطن-سباندكس — مضاد للميكروبات، مقاوم للسوائل، ومصمم للأدوار السريرية العليا.',
    description: 'A premium-tier scrub set for senior clinical staff: cotton-spandex twill with bonded silver-ion antimicrobial finish and Teflon-grade fluid-shield treatment, structured tailoring, and four-way stretch. Designed around 12-hour OR rotations and the wash regimes of teaching hospitals.',
    descriptionAr: 'طقم سكراب من الفئة الممتازة لكبار الطاقم الطبي: تويل قطن-سباندكس مع لمسة مضادة للميكروبات بأيونات الفضة ومعالجة تيفلون لدرع السوائل، تفصيل مهيكل، وتمدد رباعي الاتجاهات. صُمم ليتحمل نوبات عمليات الـ 12 ساعة وأنظمة الغسيل في المستشفيات التعليمية.',
    fabric: 'Cotton-Spandex Twill, Antimicrobial + Fluid-Shield',
    fabricAr: 'تويل قطن-سباندكس، مضاد للميكروبات + درع السوائل',
    fabricWeight: '210gsm',
    fabricWeightAr: '210 جرام للمتر المربع',
    priceFrom: 280,
    image: 'products/medical-scrubs/scrub-set-premium',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    colors: ['Surgical Navy', 'Slate', 'Teal', 'Royal Blue'],
    colorsAr: ['كحلي جراحي', 'رمادي مزرق', 'تيل', 'أزرق ملكي'],
    features: ['Antimicrobial + fluid-shield', 'Structured tailoring', '4-way stretch', 'Reinforced pockets', '18-month warranty'],
    featuresAr: ['مضاد للميكروبات + درع سوائل', 'تفصيل مهيكل', 'تمدد رباعي', 'جيوب معززة', 'ضمان 18 شهراً'],
    compliance: ['MoH', 'SFDA', 'AATCC 100', 'OEKO-TEX'],

    lastUpdated: '2026-05-10',

    definitionLockIn: {
      en: 'The UNEOM Premium Medical Scrub Set is the cotton-spandex twill scrub uniform engineered for senior clinical staff in MoH-licensed Saudi tertiary hospitals — combining bonded silver-ion antimicrobial finish with Teflon-grade fluid-shield treatment, structured tailoring, and four-way stretch for 12-hour OR rotations.',
      ar: 'طقم سكراب UNEOM الفاخر الطبي هو زي السكراب من تويل قطن-سباندكس المهندَس لكبار الطاقم السريري في المستشفيات السعودية الثلاثية المرخّصة من وزارة الصحة — يجمع لمسة مضادّة للميكروبات بأيونات الفضة المرتبطة مع معالَجة درع السوائل بمستوى تيفلون، تفصيل مهيكل، ومرونة رباعية الاتّجاه لورديات العمليات 12 ساعة.'
    },

    architectEquation: {
      en: 'Unlike the UNEOM Classic optimised for ward and primary-care use, the Premium combines cotton-spandex twill at 210 GSM with bonded silver-ion + fluid-shield treatments — engineered for 12-hour OR rotations and the wash regimes of teaching hospitals.',
      ar: 'على خلاف UNEOM الكلاسيك المُحسَّن للقسم ورعاية الأوّلية، الفاخر يجمع تويل قطن-سباندكس عند 210 جم/م² مع معالَجات مضادّة للميكروبات بأيونات الفضة + درع السوائل — مهندَس لورديات العمليات 12 ساعة وأنظمة الغسيل في المستشفيات التعليمية.'
    },

    materialScience: {
      en: 'The Premium tier addresses two simultaneous stresses absent from primary-care scrubs: 12-hour standing rotations (requiring four-way stretch and structural tailoring to prevent fabric drag) and surgical fluid exposure (requiring fluid-shield treatment that beads liquid contaminants without compromising breathability). Cotton-spandex twill at 210 GSM provides 18% more thermal mass than the Classic\'s 180 GSM poly-cotton, offsetting the cooler surgical-suite ambient temperature. The Teflon-grade fluid-shield bonds at the fiber level — fluids bead and roll off rather than absorb, while the silver-ion antimicrobial finish remains active beneath. Independent AATCC 100 + AATCC 22 (water repellency) testing validates 90+ wash cycles before treatment effectiveness drops below clinical-acceptance threshold.',
      ar: 'الفئة الفاخرة تعالج ضغطَين متزامنَين غائبَين عن سكرابات الرعاية الأوّلية: ورديات وقوف 12 ساعة (تتطلّب مرونة رباعية الاتّجاه وتفصيلاً هيكلياً لمنع سحب القماش) وتعرّض السوائل الجراحية (يتطلّب معالَجة درع السوائل التي تكوّن قطرات على الملوّثات السائلة دون التضحية بالتنفّس). تويل قطن-سباندكس عند 210 جم/م² يُوفّر كتلة حرارية أكثر بـ18% من بوليستر-قطن الكلاسيك بـ180 جم/م²، مُعوّضاً درجة الحرارة المحيطة الأبرد لجناح الجراحة. درع السوائل بمستوى تيفلون يرتبط على مستوى الألياف — السوائل تكوّن قطرات وتنزلق بدلاً من الامتصاص، بينما تبقى لمسة أيونات الفضة المضادّة للميكروبات نشطة تحته. اختبار AATCC 100 + AATCC 22 (طرد الماء) المستقلّ يعتمد 90+ دورة غسيل قبل أن تنخفض فعّالية المعالَجة دون عتبة القبول السريري.'
    },

    useCase: {
      en: 'Designed for surgeons, OR nurses, ICU staff, and senior clinical staff in MoH-licensed tertiary teaching hospitals (KFSH, KAMC, KKUH). The four-way stretch supports 12-hour standing rotations; the fluid-shield treatment manages OR fluid exposure; the structured tailoring maintains a senior-clinical silhouette through demanding shifts. Premium tier comparison vs Classic: 4× higher fluid-resistance, 18% more thermal mass, identical antimicrobial efficacy.',
      ar: 'مصمَّم للجرّاحين، طاقم العمليات، طاقم العناية المركّزة، وكبار الطاقم السريري في المستشفيات السعودية الثلاثية التعليمية المرخّصة من وزارة الصحة (KFSH، KAMC، KKUH). المرونة رباعية الاتّجاه تدعم ورديات وقوف 12 ساعة؛ معالَجة درع السوائل تُدير تعرّض سوائل العمليات؛ التفصيل الهيكلي يحافظ على قصّة سريرية كبيرة خلال ورديات مُتطلِّبة. مقارنة الفئة الفاخرة مقابل الكلاسيك: مقاومة سوائل أعلى بـ4×، كتلة حرارية أكثر بـ18%، كفاءة مضادّة للميكروبات متطابقة.'
    },

    comparisonMatrix: {
      titleEn: 'Premium Scrub vs Classic vs market premium',
      titleAr: 'مقارنة السكراب الفاخر مقابل الكلاسيك مقابل الفاخر السوقي',
      columnsEn: ['UNEOM Premium', 'UNEOM Classic', 'Imported Premium'],
      columnsAr: ['UNEOM الفاخر', 'UNEOM الكلاسيك', 'فاخر مستورد'],
      rows: [
        { dimensionEn: 'Fabric', dimensionAr: 'القماش', valuesEn: ['Cotton-spandex twill 210 GSM', 'Poly-cotton 65/35 180 GSM', 'Cotton-spandex 200 GSM'], valuesAr: ['تويل قطن-سباندكس 210 جم/م²', 'بوليستر-قطن 65/35 180 جم/م²', 'قطن-سباندكس 200 جم/م²'] },
        { dimensionEn: 'Antimicrobial', dimensionAr: 'مضاد للميكروبات', valuesEn: ['Bonded silver-ion (AATCC 100)', 'Bonded silver-ion (AATCC 100)', 'Surface silver-ion (washes out)'], valuesAr: ['أيونات فضة مرتبطة (AATCC 100)', 'أيونات فضة مرتبطة (AATCC 100)', 'أيونات فضة سطحية (تنغسل)'] },
        { dimensionEn: 'Fluid-shield', dimensionAr: 'درع السوائل', valuesEn: ['Teflon-grade bonded (AATCC 22)', 'Not included', 'Surface DWR (washes out)'], valuesAr: ['تيفلون مرتبط (AATCC 22)', 'غير مشمول', 'DWR سطحي (ينغسل)'] },
        { dimensionEn: 'Stretch', dimensionAr: 'المرونة', valuesEn: ['4-way (8% spandex)', '2-way limited stretch', '4-way (5% spandex)'], valuesAr: ['4 اتّجاهات (8% سباندكس)', '2 اتّجاه مرونة محدودة', '4 اتّجاهات (5% سباندكس)'] },
        { dimensionEn: 'Wash cycle limit', dimensionAr: 'حدّ دورة الغسيل', valuesEn: ['90+ industrial cycles', '80+ industrial cycles', '60 cycles'], valuesAr: ['90+ دورة صناعية', '80+ دورة صناعية', '60 دورة'] },
        { dimensionEn: 'Warranty', dimensionAr: 'الضمان', valuesEn: ['18 months', '18 months', '6–12 months'], valuesAr: ['18 شهراً', '18 شهراً', '6-12 شهراً'] },
        { dimensionEn: 'Price (SAR)', dimensionAr: 'السعر (ريال)', valuesEn: ['280', '180', '350'], valuesAr: ['280', '180', '350'] }
      ]
    },

    careInstructions: {
      en: [
        { step: 'Pre-wash cold rinse', description: 'Cold-water pre-rinse to remove biological residue. The fluid-shield treatment beads contaminants — visible droplets indicate the treatment is functioning.' },
        { step: 'Industrial wash 60–80°C', description: 'Hot-water wash with hospital-grade phosphate-free detergent. Avoid bleach above 200 ppm chlorine to preserve both silver-ion and fluid-shield bonds.' },
        { step: 'Tumble dry medium', description: 'Tumble dry on medium (max 70°C). Avoid high heat which degrades the spandex stretch component.' },
        { step: 'Avoid fabric softener', description: 'Fabric softener coats the fiber surface and disrupts both fluid-shield and antimicrobial functionality. Use only the prescribed institutional detergent.' },
        { step: 'Press structured', description: 'Steam press at low temperature (max 130°C) to maintain structured tailoring without damaging spandex.' },
        { step: 'Rotation tracking', description: 'Mark wash count on garment care label. Replace at 90 documented cycles regardless of visual condition.' },
        { step: 'Storage', description: 'Hang on shaped hanger. Store in dry environment — humidity above 70% accelerates fluid-shield bond degradation.' }
      ],
      ar: [
        { step: 'شطف بارد قبل الغسيل', description: 'شطف بماء بارد قبل الغسيل لإزالة البقايا البيولوجية. معالَجة درع السوائل تكوّن قطرات على الملوّثات — قطرات مرئية تُشير إلى أنّ المعالَجة تعمل.' },
        { step: 'غسيل صناعي 60-80°م', description: 'غسيل بالماء الساخن بمنظّف بمستوى مستشفى خالٍ من الفوسفات. تجنّب المُبيِّض فوق 200 جزء في المليون كلور للحفاظ على روابط أيونات الفضة ودرع السوائل.' },
        { step: 'تجفيف بالأسطوانة متوسط', description: 'جفّف بالأسطوانة على متوسّط (أقصى 70°م). تجنّب الحرارة العالية التي تُفكّك مكوّن مرونة السباندكس.' },
        { step: 'تجنّب منعّم القماش', description: 'منعّم القماش يُغطّي سطح الألياف ويُعطِّل وظائف درع السوائل والمضاد للميكروبات. استخدم فقط المنظّف المؤسّسي الموصوف.' },
        { step: 'الكيّ المهيكل', description: 'اكوِ ببخار حرارة منخفضة (أقصى 130°م) للحفاظ على التفصيل المهيكل دون إتلاف السباندكس.' },
        { step: 'تتبّع التدوير', description: 'سجّل عدد الغسلات على بطاقة عناية القطعة. استبدل عند 90 دورة موثّقة بغضّ النظر عن الحالة البصرية.' },
        { step: 'التخزين', description: 'علّق على شمّاعة مُشكَّلة. خزّن في بيئة جافّة — الرطوبة فوق 70% تُسرّع تدهور رابطة درع السوائل.' }
      ]
    },

    pricingTiers: [
      { nameEn: 'Programme — 50–199 units', nameAr: 'برنامج — 50-199 قطعة', priceFrom: 295, fabricEn: 'Cotton-spandex twill 210 GSM', fabricAr: 'تويل قطن-سباندكس 210 جم/م²', warrantyMonths: 18, summaryEn: 'Standard programme; 21–28 day lead.', summaryAr: 'برنامج قياسي؛ زمن تسليم 21-28 يوماً.' },
      { nameEn: 'Volume — 200–999 units', nameAr: 'حجم — 200-999 قطعة', priceFrom: 280, fabricEn: 'Reserved batch + on-site OR fittings', fabricAr: 'دفعة محجوزة + قياسات ميدانية لجناح العمليات', warrantyMonths: 18, summaryEn: 'OR-staff sized fittings; reserved fabric batch.', summaryAr: 'قياسات لطاقم العمليات؛ دفعة قماش محجوزة.' },
      { nameEn: 'Enterprise — 1,000+ units', nameAr: 'مؤسّسي — 1,000+ قطعة', priceFrom: 260, fabricEn: 'Custom Pantone + dedicated production line', fabricAr: 'بانتون مخصّص + خطّ إنتاج مخصّص', warrantyMonths: 18, summaryEn: 'Hospital-specific Pantone + replacement-cycle SLA.', summaryAr: 'بانتون خاصّ بالمستشفى + اتّفاقية مستوى خدمة لدورات الاستبدال.' }
    ],

    expandedFaqs: [
      { qEn: 'When should a hospital choose Premium over Classic?', qAr: 'متى يجب على المستشفى اختيار الفاخر بدلاً من الكلاسيك؟', aEn: 'Premium fits three specific use cases: (1) operating room rotations where fluid exposure is sustained; (2) ICU and surgical-step-down units where 12-hour standing shifts demand four-way stretch; (3) senior clinical staff (consultants, OR nurses, ICU charge) where structured tailoring signals authority. Primary-care and ward staff are well-served by the Classic at 35% lower cost. UNEOM\'s programme model often blends both: Premium for ICU/OR, Classic for ward — single hospital programme, two product tiers.', aAr: 'الفاخر يناسب ثلاث حالات استخدام محدّدة: (1) ورديات جناح العمليات حيث تعرّض السوائل مستمرّ؛ (2) العناية المركّزة ووحدات ما بعد الجراحة حيث ورديات وقوف 12 ساعة تتطلّب مرونة رباعية الاتّجاه؛ (3) كبار الطاقم السريري (استشاريون، طاقم العمليات، رئيس العناية المركّزة) حيث التفصيل الهيكلي يُشير إلى السلطة. طاقم الرعاية الأوّلية والقسم مخدوم جيّداً بالكلاسيك بكلفة أدنى بـ35%. نموذج برنامج UNEOM غالباً يخلط بين الاثنين: الفاخر للعناية المركّزة/جناح العمليات، الكلاسيك للقسم — برنامج مستشفى واحد، فئتا منتج.' },
      { qEn: 'Does the fluid-shield treatment compromise breathability?', qAr: 'هل تُضعِف معالَجة درع السوائل التنفّس؟', aEn: 'No. The Teflon-grade bond functions at the fiber level — between fibers — leaving the inter-fiber air channels open for breathability. Independent ASTM F1868 (thermal and evaporative resistance) testing validates that the fluid-shield treatment reduces fabric breathability by less than 8% versus untreated cotton-spandex twill. The 12-hour OR-rotation thermal performance metric (skin temperature differential after 8 hours) is statistically equivalent to untreated alternatives.', aAr: 'لا. الرابطة بمستوى تيفلون تعمل على مستوى الألياف — بين الألياف — تاركةً قنوات الهواء بين الألياف مفتوحة للتنفّس. اختبار ASTM F1868 المستقلّ (المقاومة الحرارية والتبخّرية) يعتمد أنّ معالَجة درع السوائل تُقلّل تنفّس القماش بأقلّ من 8% مقابل تويل قطن-سباندكس غير المعالَج. مقياس الأداء الحراري لورديات جناح العمليات 12 ساعة (فارق حرارة الجلد بعد 8 ساعات) متكافئ إحصائياً مع البدائل غير المعالَجة.' },
      { qEn: 'How does the antimicrobial finish handle MRSA-positive contamination?', qAr: 'كيف تتعامل اللمسة المضادّة للميكروبات مع تلوّث إيجابي MRSA؟', aEn: 'AATCC Method 100 testing validates UNEOM\'s bonded silver-ion finish achieves 99.9% reduction of S. aureus (including MRSA strains) at 24-hour contact, sustained through 90+ industrial wash cycles. However, antimicrobial scrub alone is not a substitute for institutional infection-control protocols — UNEOM scrubs supplement (do not replace) hand hygiene, PPE, and isolation procedures.', aAr: 'اختبار طريقة AATCC 100 يعتمد أنّ لمسة UNEOM المرتبطة بأيونات الفضة تُحقّق تقليلاً 99.9% لـS. aureus (بما فيها سلالات MRSA) عند تماس 24 ساعة، مُحتفظَ به عبر 90+ دورة غسيل صناعي. لكن، السكراب المضاد للميكروبات وحده ليس بديلاً عن بروتوكولات السيطرة على العدوى المؤسّسية — سكرابات UNEOM تكميلية (لا تستبدل) لنظافة اليدين، PPE، وإجراءات العزل.' },
      { qEn: 'What is the MOQ for Premium scrubs?', qAr: 'ما الحدّ الأدنى للطلب للسكرابات الفاخرة؟', aEn: 'Programme MOQ is 50 units. Premium tier is most commonly ordered as part of a hospital-wide UNEOM programme blending Classic (ward) and Premium (OR/ICU) — total programme size typically 200+ units across both tiers, attracting volume pricing.', aAr: 'الحدّ الأدنى للبرنامج 50 قطعة. الفئة الفاخرة الأكثر طلباً عادةً كجزء من برنامج UNEOM على مستوى المستشفى يخلط الكلاسيك (القسم) والفاخر (جناح العمليات/العناية المركّزة) — حجم البرنامج الإجمالي عادةً 200+ قطعة عبر الفئتَين، يجذب تسعير الحجم.' },
      { qEn: 'Can the Premium scrub include hospital-specific Pantone?', qAr: 'هل يمكن أن يشمل السكراب الفاخر بانتون خاصّ بالمستشفى؟', aEn: 'Yes. Enterprise tier (1,000+ units) includes custom Pantone matching — the entire programme\'s fabric is dyed in a single dye-lot to the hospital\'s locked Pantone reference. The reservation is held for the contract duration (typically 24–36 months), ensuring every joiner-kit and replacement uses identical colour. Pantone deviation tolerance is documented at ±1 shade.', aAr: 'نعم. الفئة المؤسّسية (1,000+ قطعة) تشمل مطابقة بانتون مخصّصة — كامل قماش البرنامج مصبوغ في دفعة صبغ واحدة لمرجع بانتون المغلق للمستشفى. الحجز محتفَظ به لمدّة العقد (عادةً 24-36 شهراً)، ضامناً أنّ كل طقم موظّف جديد واستبدال يستخدم لوناً متطابقاً. تفاوت بانتون المسموح موثّق عند ±1 درجة.' }
    ],

    numericAnchors: { moqUnits: 50, leadTimeDaysFrom: 21, leadTimeDaysTo: 28, warrantyMonths: 18, washCyclesValidated: 90 }
  }
];
