import type { BlogPost } from '../index';

/**
 * Scheduled article — publishes 2026-09-09 (Sun).
 * Written + adversarially verified (uneom-schedule batch 3/4).
 * Guardrail: لا تخترع نسب مخزون احتياطي أو مدد تسليم كأرقام قياسية؛ صُغ المبدأ.
 */
export const ppeReplacementBufferStockPolicy: BlogPost = {
  "slug": "ppe-replacement-buffer-stock-policy",
  "title": "PPE Replacement Stock Policy: Building a Buffer That Keeps Work Moving",
  "titleAr": "سياسة مخزون استبدال معدات الوقاية الشخصية: مخزون احتياطي يحفظ استمرارية العمل",
  "excerpt": "How to size a PPE buffer stock by your real size curve, define retirement criteria, run a same-shift swap, and document every replacement for audit.",
  "excerptAr": "كيف تحسب المخزون الاحتياطي لمعدات الوقاية وفق منحنى المقاسات الفعلي، وتضع معايير الإحالة للتقاعد، وتُنشئ مسار استبدال داخل الوردية، وتوثّق كل عملية استبدال لأغراض التدقيق.",
  "category": "manufacturing-safety",
  "publishedAt": "2026-09-09",
  "hero": "blog/ppe-replacement-buffer-stock-policy",
  "silo": "manufacturing",
  "readingMinutes": 6,
  "lead": "A damaged protective garment is not a uniform problem; it is a stopped task, an unprotected worker, or a supervisor quietly deciding to carry on. A PPE replacement stock policy answers that moment in advance: what counts as retired, where the spare lives, who releases it, and how the swap is recorded well enough to stand up in an audit.",
  "leadAr": "تلف قطعة وقاية ليس مشكلة زي؛ إنه مهمة متوقفة، أو عامل بلا حماية، أو مشرف يقرر في صمت أن يواصل العمل. سياسة مخزون استبدال معدات الوقاية تحسم هذه اللحظة مسبقاً: ما الذي يُحال للتقاعد، وأين يوجد البديل، ومن يملك صلاحية صرفه، وكيف يُوثَّق الاستبدال توثيقاً يصمد أمام المدقق دون حاجة إلى تفسير شفهي.",
  "sections": [
    {
      "heading": "When One Garment Stops a Crew",
      "headingAr": "حين توقف قطعة واحدة فريقاً كاملاً",
      "body": "Protective clothing is the only category of workwear where a single damaged item can practically halt a task. A torn sleeve on a flame-resistant coverall, a hi-vis vest whose retroreflective tape has cracked, or a chemical apron with a compromised seam is no longer protective equipment; it is ordinary fabric in a reassuring shape. The supervisor then faces a choice nobody wants to formalise: send the worker home, redeploy them to lower-risk work, or let the shift continue on the quiet assumption that nothing will happen. The third option is the tempting one, not because anyone is careless, but because the alternative, waiting for a replacement that sits in a central warehouse behind a purchase requisition and several approvals, costs the line more than the risk feels like it costs. A replacement stock policy removes that choice entirely. When a correct-size replacement is physically within reach of the supervisor, the compliant decision becomes the fast decision, and the argument ends before it starts.",
      "bodyAr": "ملابس الوقاية هي الفئة الوحيدة من ملابس العمل التي يمكن لقطعة واحدة تالفة فيها أن توقف مهمة بأكملها. كُمّ ممزّق في أفرول مقاوم للهب، أو سترة عالية الوضوح تشقّق شريطها العاكس، أو مريلة كيميائية اختلّت خياطتها، لم تعد معدات وقاية؛ صارت قماشاً عادياً بمظهر مطمئن فقط. عندها يواجه المشرف خياراً لا أحد يرغب في تدوينه: إعادة العامل إلى بيته، أو نقله إلى مهمة أقل خطورة، أو مواصلة الوردية على افتراض صامت بأن شيئاً لن يحدث. الخيار الثالث هو الأكثر إغراءً عملياً، لا لتهاون أحد، بل لأن البديل، أي انتظار قطعة تقبع في مستودع مركزي خلف طلب شراء وسلسلة اعتمادات، يكلّف خط العمل أكثر مما يبدو أن الخطر يكلّفه. وجود سياسة مخزون استبدال يلغي هذا الخيار من أساسه؛ فحين يكون البديل بالمقاس الصحيح في متناول يد المشرف، يصبح القرار المطابق هو القرار الأسرع، وينتهي الجدل قبل أن يبدأ. والفارق بين منشأة تملك هذه السياسة وأخرى لا تملكها لا يظهر في يوم هادئ، بل في اللحظة التي يتلف فيها شيء والوردية في منتصفها."
    },
    {
      "heading": "Build the Buffer Around Your Size Curve",
      "headingAr": "ابنِ المخزون على منحنى مقاساتك",
      "body": "A buffer that mirrors your workforce is small; a buffer that ignores it is expensive and still fails. The starting point is the [size distribution](/resources/size-guide/) from your last full issue, not a flat percentage applied evenly across every size, because a flat rule piles stock at the extremes and starves the middle of the curve where most of your people sit. Weight the buffer toward the roles that consume garments fastest, such as welding, rigging, warehouse handling and any task working against abrasive surfaces or near heat sources, rather than spreading it evenly across headcount. Then check the curve against how the workforce itself is changing: Saudization is bringing new nationals into industrial and service roles, and more women are entering site-based functions, so the sizes and cuts your buffer needs today are not necessarily those the previous purchase order assumed. Women's patterns and modest full-length options belong in the buffer as standard lines, not as special orders that take weeks. Finally, hold the buffer where the work is. A correct garment sitting in a distant central store is not a buffer; it is inventory.",
      "bodyAr": "المخزون الاحتياطي الذي يعكس تركيبة القوى العاملة يكون صغيراً ومجدياً، والذي يتجاهلها يكون مكلفاً ويفشل رغم ذلك. نقطة البداية هي [توزيع المقاسات](/ar/resources/size-guide/) في آخر عملية صرف كاملة، لا نسبة ثابتة تُطبَّق بالتساوي على كل المقاسات، لأن القاعدة الثابتة تُراكم فائضاً عند الأطراف وتُجوّع وسط المنحنى حيث يقع معظم الموظفين. رجّح المخزون نحو الأدوار التي تستهلك الملابس أسرع، كاللحام والرفع والتربيط والمناولة في المستودعات وكل عمل يحتك بأسطح كاشطة أو يجري قرب مصادر حرارة، بدل توزيعه بالتساوي على عدد الموظفين. ثم راجع المنحنى في ضوء تغيّر تركيبة القوى العاملة نفسها: السعودة تُدخل كوادر وطنية جديدة إلى الأدوار الصناعية والخدمية، ودخول المرأة إلى الوظائف الميدانية يتوسّع، ما يعني أن المقاسات والقصّات التي يحتاجها مخزونك اليوم ليست بالضرورة تلك التي افترضها أمر الشراء السابق. وقصّات النساء والخيارات المحتشمة الطويلة يجب أن تكون بنوداً قياسية في المخزون لا طلبات خاصة تستغرق أسابيع. وأخيراً احتفظ بالمخزون قرب موقع العمل، فالقطعة الصحيحة في مستودع مركزي بعيد ليست مخزوناً احتياطياً، بل مجرد بضاعة."
    },
    {
      "heading": "Write the Retirement Criteria Down",
      "headingAr": "دوّن معايير الإحالة للتقاعد",
      "body": "The decision to retire a protective garment should never depend on who happens to be standing at the store counter. Publish criteria, in plain language and supported by photographs, that a storekeeper can apply without escalating: tears, punctures and seam failure; abrasion that has thinned the fabric enough to change its hand; broken or missing closures, because a coverall that will not close is not a closed system; charring, melting, glazing or stiffening after heat or arc exposure; contamination by hydrocarbons or chemicals that cannot be laundered out, which on flame-resistant garments is a genuine hazard rather than a cosmetic one; retroreflective tape that has cracked, lifted or dulled; fluorescent background material that has faded; and any alteration a wearer has made themselves. For anything that needs a precise figure, such as permitted wash cycles, minimum remaining performance, or mandatory withdrawal after a specific exposure, take it from the garment's own care and use instructions, the standard it is certified to, and your site risk assessment, and record that source inside the policy so nobody has to guess twice.",
      "bodyAr": "قرار إحالة قطعة وقاية للتقاعد يجب ألا يتوقف على من يقف خلف نافذة المستودع في تلك اللحظة. انشر معايير مكتوبة بلغة واضحة ومدعّمة بصور، يستطيع أمين المستودع تطبيقها دون تصعيد: التمزّق والثقب وانفكاك الخياطة؛ التآكل الذي رقّق القماش حتى تغيّر ملمسه؛ كسر أو فقدان وسائل الإغلاق، لأن أفرولاً لا يُغلق ليس نظاماً مغلقاً؛ التفحّم أو الانصهار أو التزجّج أو التيبّس بعد التعرض للحرارة أو القوس الكهربائي؛ التلوّث بالمواد الهيدروكربونية أو الكيميائية الذي لا يزول بالغسيل، وهو على الملابس المقاومة للهب خطر حقيقي لا مسألة مظهر؛ الشريط العاكس المتشقّق أو المنفصل أو الباهت؛ خامة الخلفية الفلورية التي فقدت لونها؛ وأي تعديل أجراه المرتدي بنفسه. أما ما يحتاج رقماً محدداً، كعدد دورات الغسيل المسموحة أو الحد الأدنى للأداء المتبقي أو وجوب السحب بعد تعرّض بعينه، فخذه من تعليمات العناية والاستخدام المرفقة بالقطعة، ومن المعيار الذي شُهدت عليه، ومن تقييم مخاطر موقعك، وسجّل مصدر كل عتبة داخل السياسة نفسها كي لا يضطر أحد إلى التخمين مرتين."
    },
    {
      "heading": "A Same-Shift Swap Path",
      "headingAr": "مسار استبدال داخل الوردية",
      "body": "Replacement has to be a different process from annual issue, with different authority and a different queue. In a workable design the shift supervisor or storekeeper can release a replacement immediately, against a one-for-one exchange in which the damaged garment is surrendered and taken out of circulation on the spot. That single rule does most of the work: it keeps the buffer honest, it removes the temptation to hoard a spare in a locker, and it guarantees the retired item cannot drift back onto the floor. Escalation should be reserved for patterns, not for events; a role that keeps destroying garments is a task design or work organisation problem worth a manager's attention, while a single torn coverall is not. Cover the awkward hours deliberately, because night shifts, weekends and remote sites are exactly when the store is locked and a supervisor improvises. And make sure the policy never allows the two quiet defaults that hollow it out: telling a worker to wait for the next annual issue, or letting the cost land on the wearer.",
      "bodyAr": "الاستبدال يجب أن يكون مساراً مختلفاً عن الصرف السنوي، بصلاحية مختلفة وأولوية مختلفة. في التصميم العملي يستطيع مشرف الوردية أو أمين المستودع صرف البديل فوراً، مقابل تبادل قطعة بقطعة تُسلَّم فيه القطعة التالفة وتُسحب من التداول في الحال. هذه القاعدة وحدها تؤدي معظم الغرض: تُبقي المخزون منضبطاً، وتزيل إغراء تخزين قطعة إضافية في الخزانة الشخصية، وتضمن ألا تعود القطعة المستبعدة إلى أرض الموقع. أما التصعيد فيُحفظ للأنماط المتكررة لا للحوادث المفردة؛ فدور وظيفي يستهلك الملابس بوتيرة لافتة هو مشكلة تصميم مهمة أو تنظيم عمل تستحق انتباه الإدارة، بينما أفرول ممزق واحد لا يستدعي ذلك. وغطِّ الأوقات الصعبة عمداً، فالورديات الليلية ونهايات الأسبوع والمواقع النائية هي بالضبط اللحظات التي يكون فيها المستودع مغلقاً والمشرف مضطراً للارتجال. واحرص على ألا تسمح السياسة بالبديلين الصامتين اللذين يُفرغانها من مضمونها: إخبار العامل بأن ينتظر الصرف السنوي القادم، أو تحميله تكلفة البديل."
    },
    {
      "heading": "Records That Answer the Audit Question",
      "headingAr": "سجلات تُجيب على سؤال المدقق",
      "body": "An auditor is rarely interested in your stock levels. The question is narrower: when this garment stopped protecting this person, how long did they keep working without protection, and can you prove it. Design the record around that. Each replacement should capture the date and shift, the wearer, the item and size, a reason code, who authorised it, and what happened to the retired garment, because a [flame-resistant coverall](/shop/manufacturing/coverall-fr/) that is condemned and then quietly reissued is a worse finding than having no policy at all. Reason codes are the part most programmes skip and later regret; without them you hold a pile of stock transactions, and with them you hold a map of which roles, tasks and garment details keep failing. Where damage came from an event rather than ordinary wear, cross-reference the incident report, since the garment is often the only physical evidence a near-miss produced. Keep the form bilingual and short enough to complete at the store counter, because a record that slows the swap will not be completed at all.",
      "bodyAr": "المدقق نادراً ما يهتم بمستويات مخزونك؛ سؤاله أضيق من ذلك: حين توقفت هذه القطعة عن الحماية، كم استمر هذا العامل يعمل بلا حماية، وهل تستطيع إثبات ذلك؟ صمّم السجل حول هذا السؤال. كل عملية استبدال ينبغي أن تحفظ التاريخ والوردية، وهوية المرتدي، والصنف والمقاس، ورمز سبب العطب، ومن أذن بالصرف، ومصير القطعة المستبعدة، لأن [أفرولاً مقاوماً للهب](/ar/shop/manufacturing/coverall-fr/) أُحيل للتقاعد ثم عاد للتداول بهدوء ملاحظة أسوأ من غياب السياسة كلها. ورموز الأسباب هي الجزء الذي تتجاوزه معظم البرامج ثم تندم عليه؛ بدونها تملك كومة حركات مخزنية، ومعها تملك خريطة تكشف أي الأدوار والمهام وتفاصيل التصميم تفشل تكراراً. وحين يكون التلف ناتجاً عن واقعة لا عن استهلاك طبيعي، اربط السجل بتقرير الحادث، فالقطعة التالفة كثيراً ما تكون الدليل المادي الوحيد الذي خلّفه حادث وشيك. وأبقِ النموذج ثنائي اللغة وقصيراً بما يكفي لإكماله عند نافذة المستودع، فالسجل الذي يُبطئ الاستبدال لن يُملأ أصلاً."
    },
    {
      "heading": "Keeping the Buffer Replenished",
      "headingAr": "إبقاء المخزون الاحتياطي حياً",
      "body": "A buffer is a rotating asset, not a shelf you fill once. Set the [reorder trigger](/resources/uniform-inventory-reorder-management-guide/) on the buffer itself, so that drawing a garment out generates the order to replace it instead of waiting for a quarterly review, and expect the draw rate to rise through the hottest months, when heat, sweat and more frequent laundering age fabric faster and bring small failures forward. Two practical things keep a buffer usable over time. The first is specification stability: if fabric, colour and pattern block are re-tendered every year, last year's buffer stops matching this year's uniform, and a worker in a visibly different shade is a worker who will resist wearing it. Agree dye-lot and pattern continuity with your manufacturer in writing. The second is proximity, because a replacement programme is only as fast as the shortest reliable resupply route, which is why domestic production weighs more here than in almost any other uniform category. UNEOM manufactures inside the Kingdom and has done since 2013, works to ISO 9001:2015, and certifies to OEKO-TEX Standard 100.",
      "bodyAr": "المخزون الاحتياطي رصيد متجدد لا رفٌّ يُملأ مرة واحدة. اربط [حد إعادة الطلب](/ar/resources/uniform-inventory-reorder-management-guide/) بالمخزون نفسه، بحيث يولّد سحبُ قطعة أمرَ تعويضها بدل انتظار مراجعة ربع سنوية، وتوقّع ارتفاع وتيرة السحب في أشهر الذروة الحارة، حين تُسرّع الحرارة والعرق وتكرار الغسيل تقادم الأقمشة وتُظهر الأعطاب مبكراً. وأمران عمليان يُبقيان المخزون صالحاً مع الوقت. الأول ثبات المواصفة؛ فإذا أُعيدت مناقصة القماش واللون والباترون كل عام، توقّف مخزون العام الماضي عن مطابقة زي هذا العام، والعامل الذي يرتدي درجة لون مختلفة بوضوح هو عامل سيقاوم ارتداءه، لذا اتفق مع مصنّعك كتابةً على استمرارية دفعة الصباغة والباترون. والثاني القرب؛ فبرنامج الاستبدال لا يكون أسرع من أقصر مسار تزويد موثوق، ولهذا يزن التصنيع المحلي هنا أكثر مما يزن في أي فئة أزياء أخرى. تصنّع UNEOM داخل المملكة منذ 2013، وتعمل وفق ISO 9001:2015، وتعتمد OEKO-TEX Standard 100."
    }
  ],
  "faqs": [
    {
      "q": "How much PPE buffer stock should we hold?",
      "qAr": "ما حجم المخزون الاحتياطي المناسب لمعدات الوقاية؟",
      "a": "There is no universal figure. Work backwards from two things: how quickly your supplier can deliver a replacement in each size, and how often each role actually damages garments. Hold enough of the common sizes in the highest-wear roles to bridge that gap, then review the level against real draw-down and adjust it, rather than adopting an assumed percentage.",
      "aAr": "لا يوجد رقم صالح للجميع. اعمل عكسياً من أمرين: سرعة تزويد المورّد لكل مقاس، ومعدل تلف الملابس فعلياً في كل دور وظيفي لديك. احتفظ من المقاسات الشائعة في الأدوار الأعلى استهلاكاً بما يكفي لسدّ تلك الفجوة، ثم راجع المستوى وفق السحب الحقيقي وعدّله، بدل تبنّي نسبة مئوية مفترضة."
    },
    {
      "q": "Who should be allowed to authorise a PPE replacement?",
      "qAr": "من يملك صلاحية اعتماد استبدال قطعة وقاية؟",
      "a": "The lowest level that can act within the shift, usually the shift supervisor or storekeeper, against a one-for-one surrender of the damaged item. Escalate only when a pattern appears, such as one role or one design detail failing repeatedly. Requiring manager sign-off for every torn coverall guarantees delay and informal workarounds. Write the authority limit into the policy.",
      "aAr": "أدنى مستوى قادر على التصرف داخل الوردية، وغالباً مشرف الوردية أو أمين المستودع، مقابل تسليم القطعة التالفة قطعةً بقطعة. ويُحفظ التصعيد للأنماط المتكررة، كدور وظيفي أو تفصيل تصميمي يفشل مراراً. اشتراط توقيع مدير لكل أفرول ممزق يضمن التأخير ويدفع إلى حلول التفافية غير رسمية، لذا دوّن حدّ الصلاحية في السياسة."
    },
    {
      "q": "When should a protective garment be repaired rather than retired?",
      "qAr": "متى تُصلَح قطعة الوقاية ومتى تُحال للتقاعد؟",
      "a": "Repair is acceptable only where it does not touch the protective function, and only with materials and thread compatible with the garment; an ordinary polyester thread on a flame-resistant coverall creates a new hazard. Damage to seams, closures, retroreflective tape or the protective layer itself normally means retirement. Follow the manufacturer's instructions, and when the answer is unclear, retire.",
      "aAr": "الإصلاح مقبول فقط حين لا يمسّ الوظيفة الوقائية، وبخيوط ومواد متوافقة مع القطعة؛ فخيط بوليستر عادي على ثوب مقاوم للهب يخلق خطراً جديداً. أما تضرر الخياطات أو وسائل الإغلاق أو الشريط العاكس أو الطبقة الواقية نفسها فيعني الإحالة للتقاعد عادةً. اتبع تعليمات المصنّع، وعند الشك أحِل القطعة للتقاعد."
    },
    {
      "q": "What should a PPE replacement record contain?",
      "qAr": "ماذا يجب أن يتضمنه سجل الاستبدال؟",
      "a": "At minimum: date and shift, the wearer, the item and size issued, a reason code for the failure, who authorised the swap, and what happened to the retired garment. Cross-reference an incident report where damage came from an event. Reason codes are what later turn a stack of stock transactions into a usable picture of repeat failures.",
      "aAr": "كحد أدنى: التاريخ والوردية، وهوية المرتدي، والصنف والمقاس المصروف، ورمز سبب العطب، والجهة التي أذنت بالصرف، ومصير القطعة المستبعدة. واربط السجل بتقرير الحادث إذا نتج التلف عن واقعة. ورموز الأسباب تحديداً هي ما يحوّل لاحقاً كومة الحركات المخزنية إلى صورة مفيدة عن الأدوار والتفاصيل التي تفشل تكراراً."
    },
    {
      "q": "Does summer heat change how much replacement stock we need?",
      "qAr": "هل يغيّر حر الصيف حجم مخزون الاستبدال المطلوب؟",
      "a": "Directionally, yes. Outdoor and hot-work roles mean more sweat, more frequent laundering and stronger ultraviolet exposure, and each of those ages fabric, fades fluorescent background material and stresses seams and closures. Weight the buffer toward those roles ahead of the hot season rather than holding the same mix year-round, and let your own draw-down records set the level.",
      "aAr": "من حيث الاتجاه نعم. الأدوار الخارجية والأعمال الساخنة تعني عرقاً أكثر وغسيلاً أكثر تكراراً وتعرضاً أشد للأشعة فوق البنفسجية، وكل ذلك يُسرّع تقادم القماش ويبهت خامة الخلفية الفلورية ويُجهد الخياطات ووسائل الإغلاق. رجّح المخزون نحو تلك الأدوار قبل موسم الحر بدل إبقاء التركيبة نفسها طوال العام، ودع سجلات السحب لديك تحدد المستوى."
    }
  ],
  "author": {
    "name": "Ahmad Al-Rashidi",
    "nameAr": "أحمد الرشيدي",
    "title": "Procurement Solutions Director",
    "titleAr": "مدير حلول المشتريات"
  }
};
