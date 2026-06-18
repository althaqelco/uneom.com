import type { Resource } from './index';

/**
 * SCAFFOLD (Content Brief #24) — Made-in-Saudi local-content magnet hub.
 *
 * Status: draft built from CONTENT-BRIEF-24-made-in-saudi-local-content.md.
 * Content is accurate at the PRINCIPLE level; every place a specific figure,
 * percentage, or current programme/authority name belongs is marked inline
 * "[SME-VERIFY]" — an SME must confirm before this is published. Do NOT state
 * preference percentages, certificate thresholds, or a measured UNEOM
 * local-content % without verification.
 *
 * Follow-ups before launch (see brief §7/§8):
 *  - Replace the placeholder hero (currently the manufacturing pillar hero)
 *    with a bespoke made-in-Saudi image at resources/made-in-saudi-local-content-hero.
 *  - Add the 9 INBOUND links listed in the brief once the sibling pages exist.
 *  - Confirm `datePublished` on the real publish date.
 *  - Add official source URLs (LCGPA / iktva / Saudi Made / GACA) to `references`.
 */
export const madeInSaudiLocalContentGuide: Resource = {
  slug: 'made-in-saudi-uniform-local-content-guide',
  title: 'Made-in-Saudi Uniforms: Local Content, Saudization & the In-Kingdom Advantage',
  titleAr: 'الزي الموحّد المصنوع في السعودية: المحتوى المحلي والسعودة وميزة التصنيع داخل المملكة',
  summary: 'How local content and Saudization affect Saudi uniform tenders — iktva, the local-content certificate, Saudi Made, and what to require from your supplier.',
  summaryAr: 'كيف يؤثّر المحتوى المحلي والسعودة على مناقصات الزي الموحّد في السعودية — إكتفاء، وشهادة المحتوى المحلي، وبرنامج صنع في السعودية، وما الذي ينبغي طلبه من المورّد.',
  // PLACEHOLDER hero (real, existing asset) — replace with a bespoke image.
  hero: 'heroes/manufacturing-pillar-hero',
  silo: 'corporate',
  readingMinutes: 14,
  schemaType: 'Article', // strategic pillar guide; TechArticle also acceptable
  datePublished: '2026-06-19', // [SME-VERIFY] set to the real publish date
  lead: 'Local content is no longer a tie-breaker in Saudi procurement — it is a scored, often decisive, criterion. For a recurring, high-volume uniform programme, sourcing from an in-Kingdom manufacturer can raise your tender score and qualify your bid for a local price preference. This guide explains how that scoring works, what "made in Saudi" genuinely means for a garment, and exactly what to require from your supplier.',
  leadAr: 'لم يَعُد المحتوى المحلي مجرّد عامل ترجيح في المشتريات السعودية، بل أصبح معياراً مُقيَّماً وغالباً حاسماً. وفي برنامج زيّ موحّد متكرّر وكبير الحجم، فإن التوريد من مصنّع داخل المملكة قد يرفع تقييم مناقصتك ويؤهّل عرضك لأفضلية السعر للمنتج المحلي. يشرح هذا الدليل كيف يعمل هذا التقييم، وما الذي يعنيه فعلاً وصف «مصنوع في السعودية» للقطعة، وما الذي ينبغي طلبه من المورّد بالتحديد.',
  sections: [
    {
      heading: 'Why local content now decides Saudi tenders',
      body: 'For most of the last decade, Saudi procurement rewarded the lowest compliant price. Vision 2030 changed the rule: public and semi-public buyers are now directed to maximise in-Kingdom value, and local content has become a scored — often decisive — evaluation criterion rather than a tie-breaker. For a uniform programme, a recurring high-volume multi-year spend, that shift is material. A buyer who sources from an in-Kingdom manufacturer can claim local-content value an importer cannot, and on a closely contested tender that margin can decide the award. This guide explains how that scoring actually works across the main Saudi programmes, what "made in Saudi" genuinely means for a garment, and exactly what documentation to require from a uniform supplier so the local value is recognised in your bid. [SME-VERIFY: confirm the current weighting bands applicable to your specific tender.]'
    },
    {
      heading: 'The local-content landscape: who governs what',
      body: 'A uniform buyer rarely faces a single rulebook. Government procurement local content is governed by the Local Content and Government Procurement Authority (LCGPA), which administers the mandatory list, price-preference mechanisms and the local-content certificate. [SME-VERIFY: confirm the authority\'s current name and mandate.] On Saudi Aramco and Aramco-linked work, the relevant scorecard is iktva (In-Kingdom Total Value Add), Aramco\'s supplier-localisation programme. Product origin is recognised nationally through the "Saudi Made" (صنع في السعودية) programme, which lets qualifying manufacturers mark and register Saudi-made products. Workforce localisation is measured separately through Nitaqat, the Saudization framework run by the Ministry of Human Resources and Social Development. Aviation adds GACA\'s sector local-content expectations. A single large programme — a giga-project workforce, say — can engage several of these at once, which is why a supplier fluent in all of them is an asset, not a convenience.'
    },
    {
      heading: 'How local content is scored in a tender',
      body: 'Three mechanisms do most of the work. First, a local-content weighting: an evaluated score for the in-Kingdom value a bid delivers, sitting alongside price and technical criteria. Second, a price preference: a margin advantage granted to local products and to qualifying small and medium enterprises, so a slightly higher local bid can still win on adjusted price. [SME-VERIFY: confirm the current preference percentage for your tender; do not assume a fixed figure.] Third, a mandatory list: categories of goods that government entities must source locally where a compliant local option exists. These are administered through Etimad, the government e-procurement platform. For apparel and PPE, the practical question is whether your uniform supplier can substantiate Saudi value-add with documentation the evaluator will accept — the subject of the next two sections.'
    },
    {
      heading: 'What "made in Saudi" actually means for a uniform',
      body: 'Local content is measured as value, not awarded as a badge, so precision matters. A garment can be fully manufactured in the Kingdom; cut, made and trimmed locally from imported fabric; or simply imported and re-labelled. These carry very different local-content values, and an evaluator looks past a "Saudi" label to the substance. Honest positioning protects the bid: UNEOM manufactures in-Kingdom and holds ISO 9001:2015 and OEKO-TEX Standard 100 certification, and has operated as a Saudi manufacturer since 2013. What a buyer should never do is state a local-content percentage or a blanket "100% Saudi-made" claim that cannot be evidenced — an unsupported figure is a compliance risk in an audit. State what is documented; leave the measured percentage to the certificate. [SME-VERIFY: confirm UNEOM\'s current measured local-content figure before citing any number.]'
    },
    {
      heading: 'The local-content certificate: how your supplier raises your score',
      body: 'The local-content certificate is the document that turns a supplier\'s Saudi value into a number an evaluator can use — a measured baseline of in-Kingdom value-add, issued under the government local-content framework. [SME-VERIFY: confirm the current issuer and certificate name.] When you assemble a bid, the local value of your uniform line is only as strong as the evidence behind it. Ask every uniform supplier for: proof of in-Kingdom manufacturing; a current local-content certificate or measured baseline where available; "Saudi Made" registration where applicable; Saudization data for the workforce producing the garments; and per-order traceability linking what you receive to where it was made. A supplier who can hand you that pack quickly is a supplier who will not slow your tender down.'
    },
    {
      heading: 'Saudization in uniform manufacturing',
      body: 'Local content is not only about where cloth is cut; it is also about who cuts it. Nitaqat measures the share of Saudi nationals a company employs and bands employers accordingly, and a buyer\'s own localisation and social-responsibility story is strengthened by sourcing from a Saudi-staffed manufacturer rather than an importer. For programme managers reporting against Vision 2030 commitments, a domestic supply chain that creates Saudi jobs is a line they can defend. [SME-VERIFY: confirm current Nitaqat band specifics and any supplier headcount before citing figures; do not state an unverified employee count.] The broader point for procurement: in-Kingdom manufacturing and Saudization reinforce each other, and both feed the same tender-scoring story.'
    },
    {
      heading: 'Local content by sector',
      body: 'The same principle lands differently across industries. In government and ministry procurement, local content and the mandatory list are administered directly through Etimad, so the certificate and preference mechanics are front and centre. On Saudi Aramco and contractor work, iktva is the scorecard that matters, and an in-Kingdom PPE and coverall supply chain feeds it. In aviation, GACA\'s local-content expectations shape carrier uniform tenders as the sector scales under Riyadh Air, Saudia, flynas and flyadeal. In education, Ministry of Education school-uniform tenders run through Etimad with local sourcing in view. And on the giga-projects — NEOM, Red Sea, Qiddiya, Diriyah — localisation targets run through the entire workforce supply chain, uniforms included. A supplier who understands which programme governs your bid can shape the response to score, not just to comply.'
    },
    {
      heading: 'Choosing a local-content-credible uniform partner',
      body: 'Reduce it to a checklist. Can the supplier evidence in-Kingdom manufacturing, not just a local sales office? Can they provide a current local-content certificate or measured baseline, and "Saudi Made" registration where it applies? Can they show Saudization data and per-order traceability? Can they scale to a multi-site, multi-year programme without diluting that local content through last-minute imports? And can they manage the programme — sizing, rollout, replacement — as a single accountable partner? UNEOM was built as an in-Kingdom manufacturer for exactly this brief: certified production since 2013, programme management across Saudi industries, and the documentation a tender evaluator needs. To pressure-test your next bid\'s local-content position, request a consultation and we will map your requirement to the programmes that will score it.'
    }
  ],
  sectionsAr: [
    {
      heading: 'لماذا أصبح المحتوى المحلي يحسم المناقصات السعودية',
      body: 'طوال معظم العقد الماضي كانت المشتريات السعودية تكافئ أقل سعر مطابق للمواصفات. ثم غيّرت رؤية 2030 القاعدة: صار المشترون الحكوميون وشبه الحكوميين موجَّهين إلى تعظيم القيمة داخل المملكة، وأصبح المحتوى المحلي معياراً مُقيَّماً — وغالباً حاسماً — لا مجرّد عامل ترجيح. وفي برنامج زيّ موحّد، وهو إنفاق متكرّر وكبير ومتعدّد السنوات، يكون هذا التحوّل مؤثّراً. فالمشتري الذي يورّد من مصنّع داخل المملكة يستطيع المطالبة بقيمة محتوى محلي لا يستطيعها المستورِد، وفي مناقصة متقاربة قد يحسم هذا الفارق الترسية. يشرح هذا الدليل كيف يعمل هذا التقييم عبر البرامج السعودية الرئيسية، وما يعنيه فعلاً «مصنوع في السعودية» للقطعة، وما المستندات التي يجب طلبها من مورّد الزي ليُعترف بالقيمة المحلية في عرضك. [للتحقق من الخبير: تأكّد من نطاقات الترجيح الحالية المنطبقة على مناقصتك تحديداً.]'
    },
    {
      heading: 'مشهد المحتوى المحلي: من يحكم ماذا',
      body: 'نادراً ما يواجه مشتري الزي الموحّد كتاب قواعد واحداً. فالمحتوى المحلي في المشتريات الحكومية تنظّمه هيئة المحتوى المحلي والمشتريات الحكومية (LCGPA)، التي تدير القائمة الإلزامية وآليات أفضلية السعر وشهادة المحتوى المحلي. [للتحقق من الخبير: تأكّد من الاسم والاختصاص الحاليَّين للجهة.] وفي أعمال أرامكو السعودية والأعمال المرتبطة بها، تكون البطاقة المرجعية ذات الصلة هي «إكتفاء» (إجمالي القيمة المضافة داخل المملكة)، برنامج أرامكو لتوطين الموردين. ويُعترف بمنشأ المنتج وطنياً عبر برنامج «صنع في السعودية»، الذي يتيح للمصنّعين المؤهَّلين وسم وتسجيل المنتجات السعودية الصنع. أما توطين القوى العاملة فيُقاس بشكل منفصل عبر «نطاقات»، إطار السعودة التابع لوزارة الموارد البشرية والتنمية الاجتماعية. ويضيف الطيران متطلبات المحتوى المحلي القطاعية للهيئة العامة للطيران المدني. وقد يستدعي برنامج واحد كبير — كقوى عاملة لمشروع عملاق — عدة أطر في آنٍ واحد، ولهذا فإن المورّد المتمكّن منها جميعاً ميزة لا رفاهية.'
    },
    {
      heading: 'كيف يُقيَّم المحتوى المحلي في المناقصة',
      body: 'ثلاث آليات تقوم بمعظم العمل. أولاً، ترجيح المحتوى المحلي: درجة مُقيَّمة للقيمة داخل المملكة التي يحقّقها العرض، إلى جانب معياري السعر والجوانب الفنية. ثانياً، أفضلية السعر: ميزة هامش تُمنح للمنتجات المحلية وللمنشآت الصغيرة والمتوسطة المؤهَّلة، بحيث يمكن لعرض محلي أعلى قليلاً أن يفوز عند تسوية السعر. [للتحقق من الخبير: تأكّد من نسبة الأفضلية الحالية لمناقصتك ولا تفترض رقماً ثابتاً.] ثالثاً، القائمة الإلزامية: فئات من السلع يجب على الجهات الحكومية توريدها محلياً عند توفّر خيار محلي مطابق. وتُدار هذه عبر منصّة «اعتماد» للمشتريات الحكومية الإلكترونية. وبالنسبة للملابس ومعدات الوقاية، يبقى السؤال العملي: هل يستطيع مورّد الزي إثبات القيمة المضافة السعودية بمستندات يقبلها المُقيِّم — وهو موضوع القسمين التاليين.'
    },
    {
      heading: 'ماذا يعني فعلاً «مصنوع في السعودية» للزي الموحّد',
      body: 'يُقاس المحتوى المحلي كقيمة لا كشارة تُمنح، ولذلك تهمّ الدقّة. فالقطعة قد تُصنَّع بالكامل داخل المملكة؛ أو تُقَصّ وتُخاط وتُجهَّز محلياً من قماش مستورَد؛ أو تُستورَد وتُعاد وسمها فحسب. وهذه تحمل قيم محتوى محلي مختلفة جداً، والمُقيِّم ينظر إلى ما وراء وسم «سعودي» إلى الجوهر. والتموضع الصادق يحمي العرض: تصنّع UNEOM داخل المملكة وتحمل شهادتي ISO 9001:2015 وOEKO-TEX Standard 100، وتعمل كمصنّع سعودي منذ 2013. وما ينبغي ألّا يفعله المشتري أبداً هو ذكر نسبة محتوى محلي أو ادعاء عام «سعودي 100%» لا يمكن إثباته — فالرقم غير المدعوم مخاطرة امتثال عند التدقيق. اذكر ما هو موثَّق، واترك النسبة المقيسة للشهادة. [للتحقق من الخبير: تأكّد من رقم المحتوى المحلي المقيس الحالي لـ UNEOM قبل ذكر أي رقم.]'
    },
    {
      heading: 'شهادة المحتوى المحلي: كيف يرفع مورّدك درجتك',
      body: 'شهادة المحتوى المحلي هي المستند الذي يحوّل القيمة السعودية للمورّد إلى رقم يستطيع المُقيِّم استخدامه — خط أساس مقيس للقيمة المضافة داخل المملكة، يُصدَر ضمن إطار المحتوى المحلي الحكومي. [للتحقق من الخبير: تأكّد من الجهة المُصدِرة واسم الشهادة الحاليَّين.] وعند تجميع العرض، تكون القيمة المحلية لبند الزي لديك بقوّة الأدلة التي تسندها فقط. اطلب من كل مورّد زيّ: إثبات التصنيع داخل المملكة؛ وشهادة محتوى محلي حالية أو خط أساس مقيس حيثما توفّر؛ وتسجيل «صنع في السعودية» حيثما انطبق؛ وبيانات السعودة للقوى العاملة المنتِجة للقطع؛ وتتبّعاً لكل طلب يربط ما تستلمه بمكان تصنيعه. والمورّد القادر على تسليمك هذه الحزمة سريعاً هو مورّد لن يبطئ مناقصتك.'
    },
    {
      heading: 'السعودة في تصنيع الزي الموحّد',
      body: 'المحتوى المحلي لا يتعلّق فقط بمكان قصّ القماش، بل أيضاً بمن يقصّه. يقيس «نطاقات» نسبة الموظفين السعوديين في المنشأة ويصنّف أصحاب العمل تبعاً لذلك، وتتعزّز قصّة التوطين والمسؤولية الاجتماعية لدى المشتري نفسه بالتوريد من مصنّع يوظّف سعوديين بدلاً من مستورِد. وبالنسبة لمديري البرامج الذين يرفعون تقاريرهم مقابل التزامات رؤية 2030، فإن سلسلة إمداد محلية تُوجِد وظائف سعودية بندٌ يستطيعون الدفاع عنه. [للتحقق من الخبير: تأكّد من تفاصيل نطاق «نطاقات» الحالي وأي أعداد للموظفين قبل ذكر أرقام؛ ولا تذكر عدد موظفين غير مُتحقَّق منه.] والخلاصة الأوسع للمشتريات: التصنيع داخل المملكة والسعودة يعزّز كلٌّ منهما الآخر، وكلاهما يغذّي القصّة نفسها في تقييم المناقصة.'
    },
    {
      heading: 'المحتوى المحلي بحسب القطاع',
      body: 'يَحطّ المبدأ نفسه بشكل مختلف عبر القطاعات. ففي المشتريات الحكومية والوزارية، يُدار المحتوى المحلي والقائمة الإلزامية مباشرة عبر «اعتماد»، فتكون آليات الشهادة والأفضلية في الواجهة. وفي أعمال أرامكو السعودية والمقاولين، يكون «إكتفاء» هو البطاقة المرجعية المهمّة، وتغذّيه سلسلة إمداد محلية لمعدات الوقاية والأفرولات. وفي الطيران، تشكّل متطلبات المحتوى المحلي للهيئة العامة للطيران المدني مناقصات أزياء الناقلين مع توسّع القطاع عبر طيران الرياض والسعودية وطيران ناس وطيران أديل. وفي التعليم، تجري مناقصات الزي المدرسي لوزارة التعليم عبر «اعتماد» مع مراعاة التوريد المحلي. وفي المشاريع العملاقة — نيوم والبحر الأحمر والقدية والدرعية — تمتدّ مستهدفات التوطين عبر كامل سلسلة إمداد القوى العاملة، والأزياء منها. والمورّد الذي يفهم أيّ برنامج يحكم عرضك يستطيع تشكيل الاستجابة لتُحرز درجة، لا لتمتثل فقط.'
    },
    {
      heading: 'اختيار شريك زيّ موحّد موثوق في المحتوى المحلي',
      body: 'اختصرها إلى قائمة تحقّق. هل يستطيع المورّد إثبات التصنيع داخل المملكة، لا مجرّد مكتب مبيعات محلي؟ هل يستطيع تقديم شهادة محتوى محلي حالية أو خط أساس مقيس، وتسجيل «صنع في السعودية» حيثما انطبق؟ هل يستطيع إظهار بيانات السعودة وتتبّع كل طلب؟ هل يستطيع التوسّع لبرنامج متعدّد المواقع ومتعدّد السنوات دون إضعاف هذا المحتوى المحلي باستيراد اللحظة الأخيرة؟ وهل يستطيع إدارة البرنامج — المقاسات والإطلاق والاستبدال — كشريك واحد مسؤول؟ بُنيت UNEOM كمصنّع داخل المملكة لهذا المطلب تحديداً: إنتاج معتمَد منذ 2013، وإدارة برامج عبر القطاعات السعودية، والمستندات التي يحتاجها مُقيِّم المناقصة. ولاختبار موقف المحتوى المحلي في عرضك القادم، اطلب استشارة وسنربط متطلبك بالبرامج التي ستمنحه الدرجة.'
    }
  ],
  faqs: [
    {
      q: 'Does buying made-in-Saudi uniforms improve my tender score?',
      a: 'In many Saudi government and semi-government tenders, local content is a scored or weighted evaluation factor, and sourcing uniforms from an in-Kingdom manufacturer can raise that score and may qualify your bid for a local price preference. The exact weighting is set by the individual tender, so confirm it for yours. [SME-VERIFY the current weighting.]'
    },
    {
      q: 'What is the difference between iktva and the government local-content certificate?',
      a: 'iktva (In-Kingdom Total Value Add) is Saudi Aramco\'s own supplier-localisation programme and scorecard, used on Aramco and Aramco-contractor work. The government local-content certificate is the measured local-content baseline used in public procurement under the national local-content framework. Different buyers may require different evidence, and some suppliers hold both. [SME-VERIFY current names and mechanics.]'
    },
    {
      q: 'What documents should I request from a uniform supplier to claim local content?',
      a: 'Ask for proof of in-Kingdom manufacturing, a current local-content certificate or measured baseline where available, "Saudi Made" registration where applicable, Saudization (Nitaqat) data for the producing workforce, and per-order traceability linking delivered goods to local production.'
    },
    {
      q: 'What does "Saudi Made" mean for uniforms?',
      a: '"Saudi Made" (صنع في السعودية) is the national programme that lets qualifying manufacturers mark and register products made in the Kingdom. For uniforms it signals genuine in-Kingdom production, but local content is still measured as value-add, so the mark supports rather than replaces certificate-based evidence. [SME-VERIFY current programme mechanics.]'
    },
    {
      q: 'Are UNEOM uniforms made in Saudi Arabia?',
      a: 'UNEOM is a Saudi uniform manufacturer that has produced in-Kingdom since 2013 and holds ISO 9001:2015 and OEKO-TEX Standard 100 certification. We supply to the local-content requirement stated in your tender and provide the supporting documentation an evaluator needs. For a measured local-content percentage on a specific programme, request current figures from our team. [SME-VERIFY the exact claim.]'
    },
    {
      q: 'How does Saudization affect uniform procurement?',
      a: 'Saudization, measured through Nitaqat, reflects the share of Saudi nationals in a supplier\'s workforce. Sourcing from a Saudi-staffed manufacturer strengthens a buyer\'s own localisation and social-responsibility reporting and supports the local-content story in a tender. [SME-VERIFY current band specifics.]'
    }
  ],
  faqsAr: [
    {
      q: 'هل يحسّن شراء الزي المصنوع في السعودية درجة مناقصتي؟',
      a: 'في كثير من المناقصات الحكومية وشبه الحكومية السعودية، يكون المحتوى المحلي عامل تقييم مُقيَّماً أو مُرجَّحاً، وقد يرفع التوريد من مصنّع داخل المملكة هذه الدرجة ويؤهّل عرضك لأفضلية السعر للمنتج المحلي. ويحدَّد الترجيح الدقيق في كل مناقصة على حدة، فتأكّد منه لمناقصتك. [للتحقق من الخبير: الترجيح الحالي.]'
    },
    {
      q: 'ما الفرق بين «إكتفاء» وشهادة المحتوى المحلي الحكومية؟',
      a: '«إكتفاء» (إجمالي القيمة المضافة داخل المملكة) هو برنامج أرامكو السعودية وبطاقتها المرجعية لتوطين الموردين، ويُستخدم في أعمال أرامكو ومقاوليها. أما شهادة المحتوى المحلي الحكومية فهي خط الأساس المقيس للمحتوى المحلي المستخدَم في المشتريات العامة ضمن الإطار الوطني للمحتوى المحلي. وقد يطلب المشترون المختلفون أدلة مختلفة، ويحمل بعض الموردين كليهما. [للتحقق من الخبير: الأسماء والآليات الحالية.]'
    },
    {
      q: 'ما المستندات التي ينبغي طلبها من مورّد الزي لإثبات المحتوى المحلي؟',
      a: 'اطلب إثبات التصنيع داخل المملكة، وشهادة محتوى محلي حالية أو خط أساس مقيس حيثما توفّر، وتسجيل «صنع في السعودية» حيثما انطبق، وبيانات السعودة (نطاقات) للقوى العاملة المنتِجة، وتتبّعاً لكل طلب يربط البضائع المسلَّمة بالإنتاج المحلي.'
    },
    {
      q: 'ماذا يعني «صنع في السعودية» للزي الموحّد؟',
      a: '«صنع في السعودية» هو البرنامج الوطني الذي يتيح للمصنّعين المؤهَّلين وسم وتسجيل المنتجات المصنوعة داخل المملكة. وللزي الموحّد يشير إلى إنتاج حقيقي داخل المملكة، لكن المحتوى المحلي يبقى مقيساً كقيمة مضافة، فالوسم يدعم الأدلة المبنية على الشهادة ولا يحلّ محلّها. [للتحقق من الخبير: آليات البرنامج الحالية.]'
    },
    {
      q: 'هل أزياء UNEOM مصنوعة في السعودية؟',
      a: 'UNEOM مصنّع سعودي للزي الموحّد ينتج داخل المملكة منذ 2013 ويحمل شهادتي ISO 9001:2015 وOEKO-TEX Standard 100. نورّد وفق متطلب المحتوى المحلي المذكور في مناقصتك ونوفّر المستندات الداعمة التي يحتاجها المُقيِّم. وللحصول على نسبة محتوى محلي مقيسة لبرنامج محدّد، اطلب الأرقام الحالية من فريقنا. [للتحقق من الخبير: الادعاء الدقيق.]'
    },
    {
      q: 'كيف تؤثّر السعودة على مشتريات الزي الموحّد؟',
      a: 'تعكس السعودة، المقيسة عبر «نطاقات»، نسبة السعوديين في القوى العاملة لدى المورّد. ويعزّز التوريد من مصنّع يوظّف سعوديين تقارير التوطين والمسؤولية الاجتماعية لدى المشتري نفسه، ويدعم قصّة المحتوى المحلي في المناقصة. [للتحقق من الخبير: تفاصيل النطاق الحالية.]'
    }
  ],
  references: [
    { name: 'Saudi Vision 2030 — official portal', url: 'https://www.vision2030.gov.sa' }
    // [SME-VERIFY] add official source links: LCGPA, Aramco iktva, "Saudi Made", GACA local content.
  ]
};
