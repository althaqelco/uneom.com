import type { BlogPost } from '../index';

/**
 * Scheduled article — publishes 2026-09-07 (Mon).
 * Written + adversarially verified (uneom-schedule batch 3/4).
 * Guardrail: مصيدة معايير حرجة: اذكر ATPV وNFPA 70E كمفاهيم/عائلات معايير فقط. ممنوع تماماً ا
 */
export const arcFlashRatingsExplainedProcurement: BlogPost = {
  "slug": "arc-flash-ratings-explained-procurement",
  "title": "Arc Flash Rating Explained: ATPV, Breakopen and What Procurement Should Ask",
  "titleAr": "تصنيف القوس الكهربائي وقيمة ATPV: شرح عملي لفرق المشتريات",
  "excerpt": "What an arc rating measures, how ATPV and breakopen differ, why the required level comes from a site risk assessment, and which supplier documents to demand.",
  "excerptAr": "ما الذي يقيسه تصنيف القوس الكهربائي، والفرق بين ATPV والتمزق الحراري، ولماذا يُحدَّد المستوى المطلوب من تقييم مخاطر الموقع، وما المستندات التي يجب طلبها من المورّد.",
  "category": "manufacturing-safety",
  "publishedAt": "2026-09-07",
  "hero": "blog/arc-flash-ratings-explained-procurement",
  "silo": "manufacturing",
  "readingMinutes": 6,
  "lead": "Procurement teams are routinely asked to buy arc-rated workwear without a technical background in electrical safety. This guide explains, in plain terms, what an arc rating measures, how ATPV differs from breakopen, why flame resistance alone is not protection, and why the level you must buy is decided by a site arc flash risk assessment.",
  "leadAr": "يُطلب من فرق المشتريات شراء ملابس مصنَّفة ضد القوس الكهربائي دون خلفية تقنية في السلامة الكهربائية. يشرح هذا الدليل بلغة واضحة ما الذي يقيسه تصنيف القوس، والفرق بين ATPV والتمزق الحراري، ولماذا لا تكفي مقاومة اللهب وحدها، ولماذا يُحدَّد المستوى الواجب شراؤه من تقييم مخاطر القوس في الموقع لا من الكتالوج.",
  "sections": [
    {
      "heading": "What an Arc Rating Measures",
      "headingAr": "ماذا يقيس تصنيف القوس",
      "body": "An arc rating is not a pass or fail badge and it does not describe how strong a fabric is. It is a laboratory-derived measure of how much thermal energy a material can absorb before the heat passing through it is likely to cause a second-degree burn on the skin beneath. The exposure being simulated is an electric arc: an intense, extremely short release of heat, light, pressure and molten material. Arc ratings are expressed in calories per square centimetre, the same unit used to describe the incident energy an electrical worker could face at a given point in a system. That shared unit is the whole point, because it lets a safety team compare the hazard at a specific piece of equipment with the protection offered by a specific garment. What an arc rating does not do is prevent the arc, protect against shock or electrocution, or guarantee an uninjured worker. It describes one property of one barrier under controlled test conditions, and it is only meaningful when read alongside the hazard it is being matched to.",
      "bodyAr": "تصنيف القوس الكهربائي ليس شهادة نجاح أو رسوب، ولا يصف متانة القماش. هو قياس مخبري لمقدار الطاقة الحرارية التي يمكن للمادة أن تمتصها قبل أن تصبح الحرارة النافذة عبرها كافية لإحداث حرق من الدرجة الثانية في الجلد تحتها. والتعرض الذي تحاكيه الاختبارات هو قوس كهربائي: انطلاق شديد وقصير جداً للحرارة والضوء والضغط والمعادن المنصهرة. ويُعبَّر عن تصنيف القوس بوحدة السعرات الحرارية لكل سنتيمتر مربع، وهي الوحدة نفسها المستخدمة في وصف الطاقة الساقطة التي قد يتعرض لها العامل عند نقطة محددة في المنظومة. وهذا التطابق في الوحدة هو جوهر الموضوع، لأنه يتيح لفريق السلامة مقارنة الخطر عند معدة بعينها بمستوى الحماية الذي يوفره ثوب بعينه. أما ما لا يفعله التصنيف فهو منع حدوث القوس، أو الحماية من الصعق الكهربائي، أو ضمان خروج العامل دون إصابة. إنه يصف خاصية واحدة لحاجز واحد في ظروف اختبار مضبوطة، ولا يكتسب معناه إلا حين يُقرأ مقابل الخطر الذي يُراد مواجهته."
    },
    {
      "heading": "ATPV and Breakopen",
      "headingAr": "ATPV والتمزق الحراري",
      "body": "Two terms cause most of the confusion in tender documents. ATPV, the arc thermal performance value, describes the incident energy level at which enough heat is predicted to pass through the fabric to bring a wearer to the onset of a second-degree burn, at a defined statistical likelihood built into the test method. Breakopen, reported as EBT, describes something physically different: the energy level at which the material is likely to open up and form a hole, exposing skin directly regardless of how well the fabric conducted heat. A fabric is tested for both behaviours, and the arc rating a supplier may publish is the lower of the two, because the lower figure is the point at which the garment stops behaving as intended. This is why a specification that simply says ATPV can be answered with a report that lists EBT, and why buyers should ask which failure mode governed the result. Neither term expresses a category, a class or a required protection level; both are properties of a tested material.",
      "bodyAr": "يتركز أكثر اللبس في كراسات المواصفات حول مصطلحين. فـ ATPV، أي قيمة الأداء الحراري للقوس، تعبّر عن مستوى الطاقة الساقطة الذي يُتوقع عنده أن تنفذ حرارة كافية عبر القماش لتصل بالعامل إلى بداية حرق من الدرجة الثانية، وفق احتمالية إحصائية محددة داخل طريقة الاختبار نفسها. أما التمزق الحراري، ويُرمز له بـ EBT، فيصف سلوكاً مختلفاً فيزيائياً: مستوى الطاقة الذي يُرجَّح عنده أن تنفتح المادة وتتكوّن فتحة تكشف الجلد مباشرة بصرف النظر عن قدرة القماش على عزل الحرارة. ويُختبر القماش لكلا السلوكين، ويكون التصنيف المُعلن هو الأدنى بينهما، لأن القيمة الأدنى هي النقطة التي يتوقف عندها الثوب عن أداء وظيفته المقصودة. لهذا قد تُقابَل مواصفة تطلب ATPV بتقرير يذكر EBT، ومن حق المشتري أن يسأل أي نمط فشل هو الذي حكم النتيجة. ولا يعبّر أي من المصطلحين عن فئة أو مستوى حماية مطلوب؛ كلاهما خاصية لمادة خضعت للاختبار."
    },
    {
      "heading": "Flame Resistant Is Not Arc Rated",
      "headingAr": "مقاومة اللهب ليست تصنيفاً للقوس",
      "body": "A flame-resistant fabric resists ignition and will not continue to burn once the ignition source is removed. That is a necessary property, but it is a behaviour, not a number, and it says nothing about how much arc energy the material can absorb. Every arc-rated fabric is flame resistant; not every flame-resistant fabric has been arc tested, and an untested fabric has no arc rating to quote. The distinction matters in three practical places. First, garment components: thread, closures, labels, interlinings, reflective tape and any high-visibility background become part of the thermal barrier, and non-arc-rated components can fail before the shell does. Second, base layers: meltable synthetics worn against the skin can melt and adhere during an exposure, which is why natural or arc-rated fibres are specified underneath. Third, layered systems: arc ratings of separate garments do not add up arithmetically, so a multilayer claim must come from testing the combination as a system rather than from summing two datasheets.",
      "bodyAr": "القماش المقاوم للهب يقاوم الاشتعال ولا يستمر في الاحتراق بعد إزالة مصدر اللهب. هذه خاصية ضرورية، لكنها سلوك لا رقم، ولا تقول شيئاً عن مقدار طاقة القوس التي تستطيع المادة امتصاصها. وكل قماش مصنَّف ضد القوس هو مقاوم للهب، لكن ليس كل قماش مقاوم للهب قد خضع لاختبار القوس، وما لم يُختبر فلا تصنيف له يمكن الاستشهاد به. ويظهر أثر هذا التمييز في ثلاثة مواضع عملية. أولاً مكوّنات الثوب: الخيوط والسحّابات والملصقات والبطانات والأشرطة العاكسة وخلفيات الملابس عالية الوضوح تصبح جزءاً من الحاجز الحراري، وقد تفشل المكوّنات غير المصنَّفة قبل القماش الخارجي. ثانياً الطبقات الداخلية: الألياف الصناعية القابلة للانصهار الملامسة للجلد قد تنصهر وتلتصق أثناء التعرض، ولهذا تُشترط ألياف طبيعية أو مصنَّفة تحت الزي. ثالثاً الأنظمة متعددة الطبقات: تصنيفات الأثواب المنفصلة لا تُجمع حسابياً، فأي ادعاء لنظام متعدد الطبقات يجب أن يستند إلى اختبار التركيبة كنظام واحد لا إلى جمع رقمين من نشرتين."
    },
    {
      "heading": "The Site Study Sets the Level",
      "headingAr": "تقييم الموقع هو من يحدد المستوى",
      "body": "The single most important thing a procurement team can understand is that nobody selects an arc rating from a catalogue. The required level is an output of [an arc flash risk assessment](/resources/electrical-safety-ppe-guide/) carried out for the specific installation: the equipment, the available fault current, the protective device clearing behaviour, the working distance and the tasks people actually perform. Standards families such as NFPA 70E, and the IEC 61482 series used in many international specifications, describe how that assessment is structured and how the resulting clothing requirement is expressed, whether through calculated incident energy or through a table-driven category approach. What they do not do is tell a buyer what to order for a plant they have never seen. In practice the assessment produces equipment labelling and a written clothing requirement, and procurement's job begins there: convert that requirement into a specification, buy to it exactly, and refuse substitutions that are justified on price or availability rather than on an equivalent tested rating. Never let a supplier, including us, define the level.",
      "bodyAr": "أهم ما ينبغي لفريق المشتريات إدراكه أن أحداً لا يختار تصنيف القوس من كتالوج. فالمستوى المطلوب مخرَج من مخرجات [تقييم مخاطر القوس الكهربائي](/ar/resources/electrical-safety-ppe-guide/) المنفَّذ على المنشأة تحديداً: المعدات، وتيار العطل المتاح، وسلوك أجهزة الحماية عند الفصل، ومسافة العمل، والمهام التي يؤديها الناس فعلاً. أما عائلات المعايير مثل NFPA 70E وسلسلة IEC 61482 المعتمدة في كثير من المواصفات الدولية فتصف كيف يُبنى هذا التقييم وكيف يُعبَّر عن متطلب الملابس الناتج عنه، سواء عبر حساب الطاقة الساقطة أو عبر منهج الجداول والفئات. وما لا تفعله هذه المعايير هو أن تخبر المشتري بما يطلبه لمنشأة لم يرها أحد. وعملياً يُنتج التقييم ملصقات تعريف على المعدات ومتطلباً مكتوباً للملابس، ومن هنا تبدأ مهمة المشتريات: تحويل المتطلب إلى مواصفة شرائية، والشراء بمقتضاها حرفياً، ورفض أي بدائل تُبرَّر بالسعر أو التوافر بدلاً من تصنيف مختبَر مكافئ. ولا ينبغي لأي مورّد، ونحن منهم، أن يحدد المستوى."
    },
    {
      "heading": "What to Ask Suppliers For",
      "headingAr": "ما الذي تطلبه من المورّد",
      "body": "A quotation is not evidence. Ask for the third-party test report itself, issued by an accredited laboratory, and check that the fabric it describes is the fabric being offered: the same construction, weight, fibre blend, finish and, where relevant, the same colour, since dyes and finishes are part of the tested material. Ask for traceability from that report to the production lot you will receive. If the offer is a layered system, ask for the system test, not two separate reports. Request the permanent garment label content in advance, including the standard referenced, the rating, composition and care instructions, and confirm the label survives industrial laundering. Ask what happens to components under repair, which thread and fabric will be used, and whether the supplier accepts garments back for arc-rated repair. Ask for the laundering instructions the rating depends on, since softeners, bleach and hydrocarbon contamination can compromise performance. Finally, ask about [quality-system evidence](/services/quality-assurance/), because consistency between lots is what turns a single good test into a reliable programme.",
      "bodyAr": "عرض السعر ليس دليلاً. اطلب تقرير الاختبار نفسه صادراً عن مختبر طرف ثالث معتمد، وتحقق أن القماش الموصوف فيه هو القماش المعروض عليك: التركيب نفسه، والوزن، ونسب الألياف، والتجهيز، واللون حين يكون ذا أثر، لأن الأصباغ والتجهيزات جزء من المادة المختبَرة. واطلب تتبعاً من التقرير إلى دفعة الإنتاج التي ستستلمها. وإن كان العرض نظاماً متعدد الطبقات فاطلب اختبار النظام مجتمعاً لا تقريرين منفصلين. واطلب مسبقاً محتوى الملصق الدائم للثوب متضمناً المعيار المرجعي والتصنيف والتركيب وتعليمات العناية، وتأكد أن الملصق يصمد أمام الغسيل الصناعي. واسأل عن المكوّنات عند الإصلاح، وأي خيط وأي قماش سيُستخدم، وهل يستقبل المورّد الأثواب لإصلاحها بمواد مصنَّفة. واطلب تعليمات الغسيل التي يقوم عليها أداء التصنيف، فالمنعّمات والمبيّضات وتلوث المواد الهيدروكربونية قد تُضعف الحماية. وأخيراً اسأل عن [أدلة نظام الجودة](/ar/services/quality-assurance/)، فالثبات بين الدفعات هو ما يحوّل اختباراً ناجحاً واحداً إلى برنامج يُعتمد عليه."
    },
    {
      "heading": "Specifying for Saudi Conditions",
      "headingAr": "التحديد في الظروف السعودية",
      "body": "Saudi programmes add a constraint that temperate specifications ignore: heat. Summer work in Riyadh, Jubail or the Eastern Province substations happens in ambient conditions that push workers toward [heat stress](/resources/cooling-moisture-wicking-uniform-fabric-guide/) long before any electrical event occurs, and heavier fabric generally carries more thermal protection but also more heat burden. That trade-off cannot be resolved by lowering the required rating, which is fixed by the risk assessment; it is resolved through fabric selection within the required rating, garment cut, ventilation detailing that does not compromise coverage, and rotation and hydration rules written into the work procedure. Coverage requirements common in Saudi workplaces align naturally with arc-rated design, which already demands closed necklines, full sleeves and covered hardware, and the same logic extends to modest cuts for women in technical roles as Saudization broadens the workforce. Practical programme factors matter too: a full size range including women's fits, reliable replacement cycles, and local production capacity. UNEOM has manufactured inside the Kingdom since 2013, works to ISO 9001:2015, and holds OEKO-TEX Standard 100.",
      "bodyAr": "تضيف البرامج السعودية قيداً تغفله المواصفات المكتوبة لمناخات معتدلة: الحرارة. فالعمل الصيفي في الرياض أو الجبيل أو محطات المنطقة الشرقية يجري في ظروف تدفع العامل نحو [الإجهاد الحراري](/ar/resources/cooling-moisture-wicking-uniform-fabric-guide/) قبل وقوع أي حدث كهربائي، والأقمشة الأثقل تحمل عادة حماية حرارية أعلى لكنها تحمل معها عبئاً حرارياً أكبر. ولا تُحل هذه المقايضة بخفض التصنيف المطلوب، فهو ثابت يحدده تقييم المخاطر، بل تُحل باختيار القماش داخل حدود التصنيف المطلوب، وبقصّة الثوب، وبتفاصيل التهوية التي لا تنتقص من التغطية، وبقواعد التناوب والترطيب المكتوبة في إجراء العمل. كما تتوافق متطلبات التغطية الشائعة في بيئات العمل السعودية بطبيعتها مع تصميم الملابس المصنَّفة، الذي يفرض أصلاً ياقات مغلقة وأكماماً كاملة وإكسسوارات مغطاة، ويمتد المنطق نفسه إلى قصّات محتشمة للنساء في الأدوار الفنية مع اتساع مشاركة الكوادر الوطنية. وتبقى عوامل البرنامج العملية مؤثرة: مدى مقاسات كامل يشمل قصّات نسائية، ودورات استبدال منتظمة، وقدرة إنتاج محلية. وتصنّع يونيوم داخل المملكة منذ 2013، وتعمل وفق ISO 9001:2015، وتحمل OEKO-TEX Standard 100."
    }
  ],
  "faqs": [
    {
      "q": "What does ATPV mean?",
      "qAr": "ما معنى ATPV؟",
      "a": "ATPV stands for arc thermal performance value. It expresses the incident energy level at which a fabric is predicted to transfer enough heat to bring the wearer to the onset of a second-degree burn under the test method's defined conditions. It is a measured property of a specific tested material, not a protection class or a purchasing category.",
      "aAr": "ATPV اختصار لقيمة الأداء الحراري للقوس. وهي تعبّر عن مستوى الطاقة الساقطة الذي يُتوقع عنده أن ينقل القماش حرارة كافية توصل مرتديه إلى بداية حرق من الدرجة الثانية وفق شروط طريقة الاختبار. إنها خاصية مقيسة لمادة محددة خضعت للاختبار، وليست فئة حماية ولا تصنيفاً شرائياً جاهزاً."
    },
    {
      "q": "How do I know which arc rating to buy?",
      "qAr": "كيف أعرف التصنيف الذي ينبغي شراؤه؟",
      "a": "You do not decide it, and neither does your supplier. The required level comes from an arc flash risk assessment for your specific installation, covering equipment, fault conditions, protective device behaviour, working distance and tasks. That assessment, carried out by qualified electrical personnel, produces equipment labelling and a clothing requirement. Procurement converts that written requirement into a purchase specification.",
      "aAr": "أنت لا تحدده، ولا يحدده المورّد. المستوى المطلوب ينتج عن تقييم مخاطر القوس الكهربائي للمنشأة تحديداً، شاملاً المعدات وظروف العطل وسلوك أجهزة الحماية ومسافة العمل وطبيعة المهام. ويُخرج هذا التقييم، الذي ينفذه مختصون كهربائيون مؤهلون، ملصقات على المعدات ومتطلباً مكتوباً للملابس تحوّله المشتريات إلى مواصفة شرائية."
    },
    {
      "q": "Is flame-resistant clothing the same as arc-rated clothing?",
      "qAr": "هل الملابس المقاومة للهب هي نفسها المصنَّفة ضد القوس؟",
      "a": "No. Flame resistance describes a fabric that resists ignition and self-extinguishes; an arc rating is a tested figure describing thermal protection against an arc exposure. Arc-rated garments are flame resistant, but a flame-resistant garment with no arc test has no arc rating to quote. Ask for the test evidence, not the label wording.",
      "aAr": "لا. مقاومة اللهب تصف قماشاً يقاوم الاشتعال وينطفئ ذاتياً، أما تصنيف القوس فرقم مختبَر يصف الحماية الحرارية من تعرض قوسي. وكل ثوب مصنَّف ضد القوس مقاوم للهب، لكن الثوب المقاوم للهب دون اختبار قوس لا تصنيف له يُستشهد به. اطلب دليل الاختبار لا صياغة الملصق."
    },
    {
      "q": "Can I add the ratings of two garments together?",
      "qAr": "هل أجمع تصنيفي ثوبين معاً؟",
      "a": "No. Layering generally increases protection because of the air gaps and additional mass, but the effect is not arithmetic and cannot be predicted from two datasheets. If you intend to claim a system rating for a shirt-plus-coverall or coverall-plus-jacket combination, the combination must be tested together as a system and the report must describe that exact stack.",
      "aAr": "لا. التطبيق المتعدد الطبقات يرفع الحماية عادة بفضل الفجوات الهوائية والكتلة الإضافية، لكن الأثر ليس حسابياً ولا يمكن استنتاجه من نشرتين. وإذا أردت ادعاء تصنيف لنظام يجمع قميصاً وأفرولاً أو أفرولاً وسترة، فيجب اختبار التركيبة مجتمعة كنظام، وأن يصف التقرير هذا الترتيب بعينه."
    },
    {
      "q": "Does laundering affect the arc rating?",
      "qAr": "هل يؤثر الغسيل في تصنيف القوس؟",
      "a": "The rating belongs to the fabric, and properly specified arc-rated materials are designed to retain it through repeated correct laundering. Damage comes from the process, not the wash count: fabric softeners, bleach, incorrect temperatures and hydrocarbon or solvent contamination can leave flammable residue or degrade the garment. Follow the care instructions the tested performance depends on.",
      "aAr": "التصنيف خاصية للقماش، والمواد المصنَّفة جيداً مصممة للاحتفاظ به عبر غسيل صحيح متكرر. والضرر يأتي من طريقة الغسيل لا من عدد المرات: المنعّمات والمبيّضات ودرجات الحرارة الخاطئة وتلوث الزيوت والمذيبات قد تترك بقايا قابلة للاشتعال أو تُضعف الثوب. التزم بتعليمات العناية التي يقوم عليها الأداء المختبَر."
    }
  ],
  "author": {
    "name": "Ahmad Al-Rashidi",
    "nameAr": "أحمد الرشيدي",
    "title": "Procurement Solutions Director",
    "titleAr": "مدير حلول المشتريات"
  }
};
