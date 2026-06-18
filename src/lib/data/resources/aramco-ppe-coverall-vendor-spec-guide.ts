import type { Resource } from './index';

/**
 * SCAFFOLD (Content Brief #1) — Saudi Aramco PPE & Coverall vendor spec guide.
 *
 * Status: draft built from CONTENT-BRIEF-01-aramco-ppe.md. Content is accurate
 * at the standards-LANDSCAPE level; every Aramco-controlled specific (SAES/GI
 * document numbers, minimum arc ratings, the supplier-approval route, prescribed
 * colours, and any UNEOM approval claim) is marked inline "[SME-VERIFY]" and
 * MUST be confirmed against current Aramco-controlled sources before publishing.
 * Do NOT invent SAES numbers, arc minimums, or an "Aramco-approved" status.
 *
 * Follow-ups before launch (brief §7/§8):
 *  - Replace placeholder hero (currently the electrical-safety PPE hero) with a
 *    bespoke FR-coverall image at resources/aramco-ppe-coverall-vendor-spec-guide.
 *  - Add the inbound links (manufacturing pillar, electrical-safety-ppe-guide,
 *    industrial-safety-workwear-saudi, factory-safety-improvement case study).
 *  - Confirm datePublished on the real publish date.
 *  - Add official source URLs (Aramco iktva, the named FR standards) to references.
 */
export const aramcoPpeCoverallVendorSpecGuide: Resource = {
  slug: 'aramco-ppe-coverall-vendor-spec-guide',
  title: 'Saudi Aramco PPE & Coverall Vendor Specification Guide',
  titleAr: 'دليل مواصفات معدات الوقاية والأفرولات لمورّدي أرامكو السعودية',
  summary: 'What Aramco-site PPE requires: FR coverall standards, arc ratings, hi-vis classes, the vendor-approval route, and how iktva local content wins bids.',
  summaryAr: 'ما الذي تتطلبه معدات الوقاية في مواقع أرامكو: معايير الأفرولات المقاومة للهب، وتصنيفات القوس الكهربائي، وفئات وضوح الرؤية، ومسار اعتماد المورّد، وكيف يكسب المحتوى المحلي «إكتفاء» المناقصات.',
  // PLACEHOLDER hero (real, existing PPE asset) — replace with a bespoke image.
  hero: 'resources/electrical-safety-ppe-hero',
  silo: 'manufacturing',
  readingMinutes: 15,
  schemaType: 'TechArticle',
  datePublished: '2026-06-19', // [SME-VERIFY] set to the real publish date
  lead: 'If your company holds or is bidding for Saudi Aramco work, your workforce PPE is governed by the safety requirements that flow down from the prime contract. "Aramco-compliant" is not one certificate you buy — it is meeting the clauses your contract cites. This guide maps the FR-coverall standards landscape, the evidence a compliant garment must carry, the supplier-approval pathway, and how an in-Kingdom supply chain strengthens your iktva position.',
  leadAr: 'إذا كانت شركتك تنفّذ أعمالاً لأرامكو السعودية أو تتقدّم لها، فإن معدات الوقاية لقواك العاملة تحكمها متطلبات السلامة التي تتدرّج من العقد الرئيسي. و«المطابقة لأرامكو» ليست شهادة واحدة تشتريها، بل هي الوفاء بالبنود التي يستند إليها عقدك. يرسم هذا الدليل مشهد معايير الأفرولات المقاومة للهب، والأدلة التي يجب أن تحملها القطعة المطابقة، ومسار اعتماد المورّد، وكيف تعزّز سلسلة الإمداد داخل المملكة موقفك في «إكتفاء».',
  sections: [
    {
      heading: 'Who must meet Aramco PPE requirements — and what "compliant" means',
      body: `If your company holds, or is bidding for, work on a Saudi Aramco facility, your workforce PPE is governed by the safety requirements that flow down from the prime contract to every sub-contractor on site. "Aramco-compliant PPE" is therefore not a single universal certificate you buy once; it is meeting the specific clauses your contract and the site's safety requirements reference, which can differ by task, area and exposure. The practical consequence for a procurement or HSE lead is that you cannot spec coveralls in the abstract — you spec them against the documents your contract cites. This guide maps the standards landscape those documents draw on, the evidence a compliant coverall must carry, and how an in-Kingdom supply chain strengthens both your safety case and your iktva position. [SME-VERIFY: confirm the exact obligation flow-down wording in your contract.]`
    },
    {
      heading: 'How Aramco PPE governance is structured: the standards stack',
      body: `A contractor on Aramco work encounters a layered set of controlled documents rather than one rulebook. At a category level these include Saudi Aramco Engineering Standards (SAES), Engineering Procedures (SAEP) and General Instructions (GI), alongside contract-specific safety requirements; your contract tells you which apply to your scope. [SME-VERIFY: confirm which document families carry the PPE/garment clauses for your scope, and do not cite specific document numbers without checking the controlled source.] The important habit is to read the requirement, not the rumour: garment specifications, arc-rating minimums and colour conventions live in these documents and are version-specific, so a spec that was correct on a previous project may have changed. Treat any number in a guide like this as a prompt to verify against your own contract's flow-down — not as the requirement itself.`
    },
    {
      heading: 'FR coverall requirements for Aramco sites',
      body: `Flame-resistant coveralls are the core of most Aramco-site PPE programmes. Compliant garments are typically tested and certified to recognised FR standard families: NFPA 2112 for flash-fire protection, an arc rating under NFPA 70E / ASTM F1506 where arc-flash exposure applies, and EN ISO 11612 for heat and flame; welding tasks add EN ISO 11611, and anti-static requirements invoke EN 1149. FR comes in two forms — inherent (aramid/modacrylic blends whose flame resistance is built into the fibre and does not wash out) and treated (a topical FR finish on cotton, whose performance must be maintained across its wash life). Arc protection is expressed as an ATPV in cal/cm² and an arc rating / PPE category; the minimum your workforce needs is set by the site arc-flash assessment, not chosen freely. [SME-VERIFY: confirm the minimum arc rating, any prescribed coverall colours, and anti-static requirements against your contract; do not assume a fixed figure.]`
    },
    {
      heading: 'Hi-vis, head-to-toe and heat: the rest of the ensemble',
      body: `A coverall is one element of a compliant ensemble. Where workers are exposed to traffic, plant movement or ramp operations, high-visibility apparel is selected by class under ANSI/ISEA 107 or ISO 20471 — and on many sites the hi-vis layer must itself be flame-resistant and anti-static, a combination rather than a separate jacket thrown over the top. The ensemble also has to survive the Eastern Province climate: FR coverage and summer heat pull in opposite directions, so fabric weight, breathability and layering are engineered together rather than maximised independently. This guide covers garments and coveralls; respiratory protection, footwear and fall protection are governed separately and are out of scope here. [SME-VERIFY: confirm the hi-vis class and any FR/anti-static hi-vis requirement for each work area.]`
    },
    {
      heading: 'Becoming an Aramco-recognised supplier: the approval pathway',
      body: `Getting a garment onto Aramco work is a matter of qualification and evidence rather than a single stamp. At a process level it involves supplier registration, product qualification, and an evidence package the buyer must be able to produce on demand — third-party test certificates (for example NFPA 2112 certification and EN ISO test reports), batch and lot traceability, and conformity documentation. [SME-VERIFY: confirm the current supplier-registration route and any approved-vendor / qualification mechanics; do not name a specific portal or process unless verified.] Whatever the route, the checklist a buyer should demand from any coverall supplier is stable: garment certification to the named FR standard, arc-rating evidence where relevant, wash-durability data, OEKO-TEX Standard 100 for skin safety, SASO conformity where applicable, and per-order traceability. A supplier who hands that pack over without friction is the one who keeps your HSE audit short.`
    },
    {
      heading: 'iktva and local content: why in-Kingdom manufacturing wins',
      body: `On Aramco and Aramco-contractor work, localisation is measured through iktva (In-Kingdom Total Value Add), Aramco's supplier-localisation programme. A contractor's iktva position is shaped by the local value embedded across its supply chain — and PPE is part of that chain, so sourcing coveralls from an in-Kingdom manufacturer can contribute to your localisation story in a way imported garments cannot. UNEOM manufactures in the Kingdom and holds ISO 9001:2015 and OEKO-TEX Standard 100, and has operated as a Saudi manufacturer since 2013; what that contributes to a specific contractor's iktva score depends on the programme and should be evidenced, not asserted. [SME-VERIFY: confirm any iktva contribution figure with the supplier before citing it.] For the deeper mechanics of local-content scoring across Saudi tenders, see UNEOM's made-in-Saudi local-content guide.`
    },
    {
      heading: 'Heat-stress management within FR constraints',
      body: `Eastern Province summers make heat stress a safety variable in its own right, and it must be managed inside — not against — the FR requirement. Within the arc and flash-fire performance your contract demands, there is still room to engineer for the heat: fabric weight and GSM, weave and breathability, and moisture management all affect how a compliant coverall performs through a long shift, and well-chosen inherent-FR constructions can dissipate heat better than a heavier, cheaper alternative at the same protection level. None of this replaces site controls: work-rest cycling, hydration and the site's heat-stress procedures govern, and this is garment-selection guidance, not a substitute for your HSE programme. [SME-VERIFY: confirm any site-specific heat-stress rules that affect garment choice.]`
    },
    {
      heading: 'Sizing, fit and rolling out PPE across a contractor workforce',
      body: `A spec is only as good as the garment that reaches the worker. Across a large contractor workforce, getting fit right at scale means size-set sampling and wear trials before a full order, not size guesses after it. FR coveralls also have to be laundered in a way that preserves their FR performance — industrial laundering parameters matter, and treated-FR garments in particular degrade if washed incorrectly — so the programme should specify care, not just procurement. Replacement cycles and per-garment traceability turn a one-off purchase into a managed programme that stays compliant between audits. This is where a single accountable supply partner — manufacturing, fit, rollout and replacement under one roof — removes the gaps that open up when PPE is bought ad hoc.`
    },
    {
      heading: 'Procurement checklist: what to require from your coverall supplier',
      body: `Reduce the decision to a checklist. Can the supplier certify each coverall to the FR standard your contract names, with arc-rating evidence where arc-flash applies? Can they provide batch and lot traceability, wash-durability data, OEKO-TEX Standard 100 and SASO conformity where relevant? Can they evidence in-Kingdom manufacturing and an iktva/local-content contribution rather than just claim it? Can they support fit at scale with wear trials and size sets, and manage replacement against per-garment records? And can they dispatch quickly across the Kingdom when an incident retires a garment? UNEOM was built as an in-Kingdom manufacturer to answer that checklist; to pressure-test your Aramco-site PPE position, request a consultation and a sample programme.`
    }
  ],
  sectionsAr: [
    {
      heading: 'من الذي يجب أن يستوفي متطلبات معدات الوقاية لأرامكو — وما معنى «المطابقة»',
      body: `إذا كانت شركتك تنفّذ أو تتقدّم لأعمال في منشأة لأرامكو السعودية، فإن معدات الوقاية لقواك العاملة تحكمها متطلبات السلامة التي تتدرّج من العقد الرئيسي إلى كل مقاول فرعي في الموقع. لذلك فإن «معدات الوقاية المطابقة لأرامكو» ليست شهادة عالمية واحدة تُشترى مرة واحدة، بل هي الوفاء بالبنود المحدّدة التي يشير إليها عقدك ومتطلبات سلامة الموقع، والتي قد تختلف بحسب المهمة والمنطقة ودرجة التعرّض. والنتيجة العملية لمسؤول المشتريات أو السلامة أنك لا تستطيع تحديد مواصفات الأفرولات بشكل مجرّد — بل تحدّدها وفق الوثائق التي يستشهد بها عقدك. يرسم هذا الدليل مشهد المعايير التي تستند إليها تلك الوثائق، والأدلة التي يجب أن تحملها القطعة المطابقة، وكيف تعزّز سلسلة الإمداد داخل المملكة موقف السلامة وموقف «إكتفاء» لديك. [للتحقق من الخبير: تأكّد من الصياغة الدقيقة لتدرّج الالتزام في عقدك.]`
    },
    {
      heading: 'كيف تُبنى حوكمة معدات الوقاية في أرامكو: حزمة المعايير',
      body: `يواجه المقاول في أعمال أرامكو مجموعة متعدّدة الطبقات من الوثائق المضبوطة لا كتاب قواعد واحداً. وتشمل هذه على مستوى الفئة معايير أرامكو الهندسية (SAES) والإجراءات الهندسية (SAEP) والتعليمات العامة (GI)، إلى جانب متطلبات السلامة الخاصة بالعقد؛ وعقدك يحدّد أيّها ينطبق على نطاق عملك. [للتحقق من الخبير: تأكّد من عائلات الوثائق التي تحمل بنود معدات الوقاية/الملابس لنطاقك، ولا تذكر أرقام وثائق محدّدة دون الرجوع إلى المصدر المضبوط.] والعادة المهمّة هي قراءة المتطلب لا الشائعة: فمواصفات الملابس، والحدود الدنيا لتصنيف القوس، وأعراف الألوان موجودة في هذه الوثائق وهي خاصة بالإصدار، فقد تكون مواصفة صحيحة في مشروع سابق قد تغيّرت. تعامل مع أي رقم في دليل كهذا كدافع للتحقّق مقابل تدرّج عقدك، لا كالمتطلب ذاته.`
    },
    {
      heading: 'متطلبات الأفرولات المقاومة للهب لمواقع أرامكو',
      body: `الأفرولات المقاومة للهب هي جوهر معظم برامج معدات الوقاية في مواقع أرامكو. وتُختبر القطع المطابقة وتُعتمد عادةً وفق عائلات معايير معترف بها: NFPA 2112 للحماية من الوميض الناري، وتصنيف قوس وفق NFPA 70E / ASTM F1506 حيثما وُجد تعرّض للقوس الكهربائي، وEN ISO 11612 للحرارة واللهب؛ وتضيف أعمال اللحام EN ISO 11611، وتستدعي متطلبات مقاومة الكهرباء الساكنة EN 1149. وتأتي مقاومة اللهب في صورتين — أصيلة (خلطات أراميد/موداكريليك تكون مقاومتها مدمجة في الليف ولا تزول بالغسيل) ومعالَجة (معالجة سطحية على القطن يجب الحفاظ على أدائها طوال عمرها الغسيلي). وتُعبَّر حماية القوس عنها بقيمة ATPV بوحدة كالوري/سم² وبتصنيف قوس/فئة معدات؛ ويُحدِّد الحدّ الأدنى الذي تحتاجه قواك العاملة تقييمُ مخاطر القوس بالموقع، لا اختياراً حرّاً. [للتحقق من الخبير: تأكّد من الحدّ الأدنى لتصنيف القوس، وأي ألوان أفرولات محدّدة، ومتطلبات مقاومة الكهرباء الساكنة مقابل عقدك؛ ولا تفترض رقماً ثابتاً.]`
    },
    {
      heading: 'وضوح الرؤية والمنظومة الكاملة والحرارة: بقية الطقم',
      body: `الأفرول عنصر واحد من منظومة مطابقة. وحيث يتعرّض العاملون للمرور أو حركة المعدّات أو عمليات المدارج، تُختار ملابس وضوح الرؤية بحسب الفئة وفق ANSI/ISEA 107 أو ISO 20471 — وفي كثير من المواقع يجب أن تكون طبقة وضوح الرؤية نفسها مقاومة للهب ومضادّة للكهرباء الساكنة، أي توليفة لا سترة منفصلة تُلقى فوق الزي. كما يجب أن تصمد المنظومة أمام مناخ المنطقة الشرقية: فالتغطية المقاومة للهب وحرارة الصيف يتجاذبان، ولذلك تُهندَس أوزان الأقمشة والتنفّسية والتطبيق طبقياً معاً لا أن يُعظَّم كلٌّ على حدة. يغطّي هذا الدليل الملابس والأفرولات؛ أما حماية الجهاز التنفّسي والأحذية والحماية من السقوط فتُحكَم منفصلةً وخارج النطاق هنا. [للتحقق من الخبير: تأكّد من فئة وضوح الرؤية وأي متطلب لكونها مقاومة للهب/مضادّة للكهرباء الساكنة لكل منطقة عمل.]`
    },
    {
      heading: 'أن تصبح مورّداً معتمداً لدى أرامكو: مسار الاعتماد',
      body: `إيصال قطعة إلى أعمال أرامكو مسألة تأهيل وأدلة لا ختم واحد. وينطوي على مستوى العملية على تسجيل المورّد، وتأهيل المنتج، وحزمة أدلة يجب أن يكون المشتري قادراً على تقديمها عند الطلب — شهادات اختبار طرف ثالث (مثل اعتماد NFPA 2112 وتقارير اختبار EN ISO)، وتتبّع الدُّفعات والتشغيلات، ووثائق المطابقة. [للتحقق من الخبير: تأكّد من مسار تسجيل المورّد الحالي وأي آليات للمورّد المعتمد/التأهيل؛ ولا تذكر منصّة أو عملية محدّدة دون تحقّق.] وأياً كان المسار، فإن قائمة التحقّق التي ينبغي للمشتري طلبها من أي مورّد أفرولات ثابتة: اعتماد القطعة وفق معيار اللهب المُسمّى، ودليل تصنيف القوس حيثما لزم، وبيانات متانة الغسيل، وOEKO-TEX Standard 100 لسلامة البشرة، ومطابقة هيئة المواصفات (SASO) حيثما انطبق، وتتبّع لكل طلب. والمورّد الذي يسلّم هذه الحزمة دون عناء هو من يُبقي تدقيق السلامة لديك قصيراً.`
    },
    {
      heading: '«إكتفاء» والمحتوى المحلي: لماذا يكسب التصنيع داخل المملكة',
      body: `في أعمال أرامكو ومقاوليها، يُقاس التوطين عبر «إكتفاء» (إجمالي القيمة المضافة داخل المملكة)، برنامج أرامكو لتوطين الموردين. ويتشكّل موقف المقاول في «إكتفاء» بالقيمة المحلية المضمَّنة عبر سلسلة إمداده — ومعدات الوقاية جزء من تلك السلسلة، فالتوريد من مصنّع داخل المملكة قد يسهم في قصّة التوطين لديك بما لا تستطيعه القطع المستورَدة. تصنّع UNEOM داخل المملكة وتحمل ISO 9001:2015 وOEKO-TEX Standard 100، وتعمل كمصنّع سعودي منذ 2013؛ وما يسهم به ذلك في درجة «إكتفاء» لمقاول بعينه يعتمد على البرنامج وينبغي إثباته لا تأكيده. [للتحقق من الخبير: تأكّد من أي رقم مساهمة في «إكتفاء» مع المورّد قبل ذكره.] وللاطلاع على آليات تقييم المحتوى المحلي الأعمق عبر المناقصات السعودية، راجع دليل UNEOM للمحتوى المحلي «صنع في السعودية».`
    },
    {
      heading: 'إدارة الإجهاد الحراري ضمن قيود مقاومة اللهب',
      body: `تجعل صيفيات المنطقة الشرقية الإجهاد الحراري متغيّر سلامة قائماً بذاته، ويجب إدارته داخل متطلب مقاومة اللهب لا ضدّه. فضمن أداء القوس والوميض الناري الذي يفرضه عقدك، يبقى مجال لهندسة مواجهة الحرارة: فوزن القماش ووحدة الغرام والنسيج والتنفّسية وإدارة الرطوبة كلها تؤثّر في أداء الأفرول المطابق عبر وردية طويلة، ويمكن لتركيبات الألياف الأصيلة المقاومة للهب المختارة جيداً أن تبدّد الحرارة أفضل من بديل أثقل وأرخص عند مستوى الحماية نفسه. ولا يُغني هذا عن ضوابط الموقع: فدورات العمل والراحة والإماهة وإجراءات الإجهاد الحراري بالموقع هي الحاكمة، وهذا توجيه لاختيار الملبس لا بديل عن برنامج السلامة لديك. [للتحقق من الخبير: تأكّد من أي قواعد إجهاد حراري خاصة بالموقع تؤثّر في اختيار الملبس.]`
    },
    {
      heading: 'المقاسات والملاءمة وإطلاق معدات الوقاية عبر قوة عاملة للمقاول',
      body: `المواصفة بقدر جودة القطعة التي تصل إلى العامل. وعبر قوة عاملة كبيرة للمقاول، يعني ضبط الملاءمة على نطاق واسع أخذ عيّنات مجموعات المقاسات وتجارب الارتداء قبل الطلب الكامل، لا تخمين المقاسات بعده. كما يجب غسل الأفرولات المقاومة للهب بطريقة تحفظ أداءها — فمعاملات الغسيل الصناعي مهمّة، والقطع المعالَجة خصوصاً تتدهور إذا غُسلت بشكل غير صحيح — لذا ينبغي أن يحدّد البرنامج العناية لا الشراء فقط. وتحوّل دورات الاستبدال والتتبّع لكل قطعة عملية الشراء لمرة واحدة إلى برنامج مُدار يبقى مطابقاً بين عمليات التدقيق. وهنا يزيل شريك إمداد واحد مسؤول — التصنيع والملاءمة والإطلاق والاستبدال تحت سقف واحد — الفجوات التي تنشأ عند شراء معدات الوقاية بشكل متفرّق.`
    },
    {
      heading: 'قائمة تحقّق المشتريات: ما الذي تطلبه من مورّد الأفرولات',
      body: `اختصر القرار إلى قائمة تحقّق. هل يستطيع المورّد اعتماد كل أفرول وفق معيار اللهب الذي يسمّيه عقدك، مع دليل تصنيف القوس حيثما ينطبق؟ هل يستطيع توفير تتبّع الدُّفعات والتشغيلات، وبيانات متانة الغسيل، وOEKO-TEX Standard 100، ومطابقة SASO حيثما لزم؟ هل يستطيع إثبات التصنيع داخل المملكة ومساهمة في «إكتفاء»/المحتوى المحلي لا مجرّد ادعائها؟ هل يستطيع دعم الملاءمة على نطاق واسع بتجارب الارتداء ومجموعات المقاسات، وإدارة الاستبدال وفق سجلّات كل قطعة؟ وهل يستطيع الإرسال سريعاً عبر المملكة حين يُحيل حادثٌ قطعةً للتقاعد؟ بُنيت UNEOM كمصنّع داخل المملكة للإجابة عن هذه القائمة؛ ولاختبار موقف معدات الوقاية في موقع أرامكو لديك، اطلب استشارة وبرنامج عيّنة.`
    }
  ],
  faqs: [
    {
      q: 'What PPE standards must coveralls meet for Saudi Aramco sites?',
      a: 'Compliant coveralls are typically certified to recognised flame-resistant standard families — NFPA 2112 for flash fire, an arc rating under NFPA 70E / ASTM F1506 where arc-flash applies, and EN ISO 11612 for heat and flame — but the binding requirement is set by your contract\'s flow-down documents and the site arc-flash assessment, not by a single universal rule. [SME-VERIFY the exact requirement for your scope.]'
    },
    {
      q: 'Does Saudi Aramco require inherent or treated FR coveralls?',
      a: 'Both inherent FR (aramid/modacrylic) and treated FR (a finish on cotton) are used in the field. The determinant is the contract specification and the durability/comfort/cost trade-off for the task, not a blanket rule — inherent FR does not wash out, while treated-FR performance must be maintained over its wash life. [SME-VERIFY the requirement in your contract.]'
    },
    {
      q: 'How does a PPE supplier become approved to supply Saudi Aramco contractors?',
      a: 'At a process level it involves supplier registration, product qualification, and an evidence package — third-party FR test certificates, traceability and conformity documentation — that the buyer can produce on demand. The exact registration route and approved-vendor mechanics should be confirmed against current Aramco sources. [SME-VERIFY the current process.]'
    },
    {
      q: 'What is iktva and why does local content matter for PPE procurement?',
      a: 'iktva (In-Kingdom Total Value Add) is Saudi Aramco\'s supplier-localisation programme. A contractor\'s iktva position reflects local value across its supply chain, and PPE is part of that — so sourcing coveralls from an in-Kingdom manufacturer can support your localisation story where imported garments cannot. [SME-VERIFY any iktva contribution figure.]'
    },
    {
      q: 'What test certificates should I require from a coverall supplier?',
      a: 'Garment certification to the named FR standard (for example NFPA 2112), arc-rating evidence where relevant, batch and lot traceability, wash-durability data, OEKO-TEX Standard 100 for skin safety, and SASO conformity where applicable.'
    },
    {
      q: 'Are UNEOM coveralls Saudi Aramco approved?',
      a: 'UNEOM is a Saudi in-Kingdom manufacturer (ISO 9001:2015, OEKO-TEX Standard 100, producing since 2013) and supplies FR coveralls to the standard your contract specifies. Any specific Aramco approval or approved-vendor status should be confirmed directly rather than assumed from this page. [SME-VERIFY the exact approval claim.]'
    }
  ],
  faqsAr: [
    {
      q: 'ما المعايير التي يجب أن تستوفيها الأفرولات لمواقع أرامكو السعودية؟',
      a: 'تُعتمد الأفرولات المطابقة عادةً وفق عائلات معايير معترف بها لمقاومة اللهب — NFPA 2112 للوميض الناري، وتصنيف قوس وفق NFPA 70E / ASTM F1506 حيثما ينطبق القوس الكهربائي، وEN ISO 11612 للحرارة واللهب — لكن المتطلب المُلزِم تحدّده وثائق تدرّج عقدك وتقييم مخاطر القوس بالموقع، لا قاعدة عالمية واحدة. [للتحقق من الخبير: المتطلب الدقيق لنطاقك.]'
    },
    {
      q: 'هل تتطلب أرامكو السعودية أفرولات أصيلة أم معالَجة المقاومة للهب؟',
      a: 'تُستخدم في الميدان كلتا الصورتين: الأصيلة (أراميد/موداكريليك) والمعالَجة (معالجة على القطن). والمحدِّد هو مواصفة العقد والموازنة بين المتانة والراحة والتكلفة للمهمة، لا قاعدة قاطعة — فالأصيلة لا تزول بالغسيل، بينما يجب الحفاظ على أداء المعالَجة طوال عمرها الغسيلي. [للتحقق من الخبير: المتطلب في عقدك.]'
    },
    {
      q: 'كيف يصبح مورّد معدات الوقاية معتمداً للتوريد لمقاولي أرامكو؟',
      a: 'ينطوي على مستوى العملية على تسجيل المورّد وتأهيل المنتج وحزمة أدلة — شهادات اختبار طرف ثالث لمقاومة اللهب، وتتبّع، ووثائق مطابقة — يستطيع المشتري تقديمها عند الطلب. وينبغي تأكيد مسار التسجيل الدقيق وآليات المورّد المعتمد مقابل مصادر أرامكو الحالية. [للتحقق من الخبير: العملية الحالية.]'
    },
    {
      q: 'ما هو «إكتفاء» ولماذا يهمّ المحتوى المحلي في شراء معدات الوقاية؟',
      a: '«إكتفاء» (إجمالي القيمة المضافة داخل المملكة) هو برنامج أرامكو السعودية لتوطين الموردين. ويعكس موقف المقاول في «إكتفاء» القيمة المحلية عبر سلسلة إمداده، ومعدات الوقاية جزء منها — فالتوريد من مصنّع داخل المملكة قد يدعم قصّة التوطين لديك بما لا تستطيعه القطع المستورَدة. [للتحقق من الخبير: أي رقم مساهمة في «إكتفاء».]'
    },
    {
      q: 'ما شهادات الاختبار التي ينبغي طلبها من مورّد الأفرولات؟',
      a: 'اعتماد القطعة وفق معيار اللهب المُسمّى (مثل NFPA 2112)، ودليل تصنيف القوس حيثما لزم، وتتبّع الدُّفعات والتشغيلات، وبيانات متانة الغسيل، وOEKO-TEX Standard 100 لسلامة البشرة، ومطابقة SASO حيثما انطبق.'
    },
    {
      q: 'هل أفرولات UNEOM معتمدة من أرامكو السعودية؟',
      a: 'UNEOM مصنّع سعودي داخل المملكة (ISO 9001:2015، وOEKO-TEX Standard 100، وينتج منذ 2013) ويورّد أفرولات مقاومة للهب وفق المعيار الذي يحدّده عقدك. وأي اعتماد محدّد من أرامكو أو وضع مورّد معتمد ينبغي تأكيده مباشرة لا افتراضه من هذه الصفحة. [للتحقق من الخبير: ادعاء الاعتماد الدقيق.]'
    }
  ],
  references: [
    { name: 'Saudi Aramco — iktva programme', url: 'https://www.aramco.com' }
    // [SME-VERIFY] add official source links: the specific FR standards bodies (NFPA, ASTM, ISO) and the current Aramco supplier/registration source.
  ]
};
