import type { Service } from './index';

export const qualityAssurance: Service = {
  slug: 'quality-assurance',
  nameEn: 'Quality Assurance',
  nameAr: 'ضمان الجودة',
  heroImage: 'process/quality-assurance',
  summary: 'Multi-stage inspection from incoming fabric to finished garment — every piece serialised, 12-month warranty.',
  summaryAr: 'فحص متعدد المراحل من القماش الوارد إلى القطعة النهائية — كل قطعة برقم تسلسلي، وضمان 12 شهراً.',

  description: 'Fabric weight and weave testing, colour-fastness lab, seam-strength QC, and pre-ship inspection. Every garment ships with a serial number and 12-month performance guarantee.',
  descriptionAr: 'اختبار وزن ونسيج القماش، مختبر ثبات الألوان، فحص جودة قوّة الخياطة، وفحص ما قبل الشحن. كل قطعة تُشحن برقم تسلسلي وضمان أداء لمدة 12 شهراً.',

  sections: [
    {
      heading: 'Why quality fails in uniform manufacturing',
      headingAr: 'لماذا تفشل الجودة في تصنيع الأزياء الموحّدة',
      body: 'The most common quality failure in Saudi uniforms isn\'t stitching — it\'s fabric degradation after washing. A scrub that looks perfect on delivery loses its antimicrobial finish after 30 wash cycles if the fabric is standard cotton. The colour fades, the shape distorts, and the garment enters the "still usable but looks unprofessional" zone that damages your brand. The root cause is physical: autoclave cycles at 121°C break down cellulose fibres and dissolve surface-bonded treatments. Testing only the finished garment misses this entirely. Quality assurance must begin at the fabric stage — before a single stitch is sewn.',
      bodyAr: 'أكثر فشل جودة شائع في الأزياء الموحّدة السعودية ليس الخياطة — بل تدهور القماش بعد الغسل. سكراب يبدو مثالياً عند التسليم يفقد تشطيبه المضادّ للميكروبات بعد 30 دورة غسل إذا كان القماش قطناً قياسياً. يتلاشى اللون، يتشوّه الشكل، وتدخل القطعة منطقة "لا تزال قابلة للاستخدام لكن تبدو غير احترافية" التي تُضرّ بعلامتك التجارية. السبب الجذري فيزيائي: دورات الأوتوكلاف عند 121 درجة مئوية تُحلّل ألياف السليلوز وتُذيب المعالجات المرتبطة بالسطح. اختبار القطعة النهائية فقط يغفل عن هذا تماماً. ضمان الجودة يجب أن يبدأ في مرحلة القماش — قبل خياطة غُرزة واحدة.'
    },
    {
      heading: 'Our 5-gate inspection process',
      headingAr: 'عملية الفحص بـ5 بوّابات',
      body: 'Gate 1 — Incoming Fabric: weight-per-square-metre testing, weave density count, and colour-fastness against ISO 105-C06 (wash fastness grade 4 minimum). Gate 2 — Pre-Cut Verification: fabric is inspected for defects at the roll stage using a 4-point inspection system — any roll exceeding 40 penalty points per 100 linear yards is rejected. Gate 3 — In-Line Stitching: seam strength tested against ASTM D1683 (minimum 30 N for critical seams), stitch count per inch verified, and pressing quality checked. Gate 4 — Pre-Ship Final: every finished garment is measured against the production tech-pack (tolerance ±0.5 cm), visually inspected under controlled lighting, and tagged with a unique serial number. Gate 5 — Delivery Confirmation: a random 2% sample from each batch is pulled at the delivery point and re-inspected to verify no transit damage.',
      bodyAr: 'البوّابة 1 — القماش الوارد: اختبار الوزن لكل متر مربع، عدّ كثافة النسيج، وثبات اللون وفق ISO 105-C06 (الحد الأدنى درجة 4 لثبات الغسل). البوّابة 2 — التحقق قبل القصّ: القماش يُفحص للعيوب في مرحلة اللفائف باستخدام نظام فحص 4 نقاط — أيّ لفافة تتجاوز 40 نقطة عقوبة لكل 100 ياردة خطية تُرفض. البوّابة 3 — الخياطة أثناء الإنتاج: قوّة الخياطة تُختبر وفق ASTM D1683 (الحد الأدنى 30 نيوتن للخياطات الحرجة)، عدد الغُرز في البوصة يُتحقّق منه، وجودة الكيّ تُفحص. البوّابة 4 — النهائي قبل الشحن: كل قطعة جاهزة تُقاس وفق حزمة التصنيع (تحمّل ±0.5 سم)، تُفحص بصرياً تحت إضاءة مُحكمة، وتُعلّم برقم تسلسلي فريد. البوّابة 5 — تأكيد التسليم: عيّنة عشوائية 2% من كل دفعة تُسحب عند نقطة التسليم وتُعاد فحصها للتحقق من عدم وجود ضرر أثناء النقل.'
    },
    {
      heading: 'The 12-month performance warranty',
      headingAr: 'ضمان الأداء لمدة 12 شهراً',
      body: 'Every UNEOM garment carries a 12-month warranty against manufacturing defects — seam failure, colour fade beyond acceptable tolerance, fabric delamination, or hardware failure (buttons, zippers, snaps). The warranty is tracked by serial number: if a garment fails, photograph it, send us the serial, and we replace it at no cost. Healthcare and aviation garments carry extended warranties of 18 and 24 months respectively, reflecting the higher per-unit investment. The warranty covers normal-use conditions as defined by the care label — industrial laundering at the specified temperature and cycle count.',
      bodyAr: 'كل قطعة من UNEOM تحمل ضمان 12 شهراً ضد عيوب التصنيع — انهيار الخياطة، تلاشي اللون خارج التحمّل المقبول، انفصال طبقات القماش، أو فشل القطع المعدنية (الأزرار، السحّابات، الكبسولات). الضمان مُتتبع بالرقم التسلسلي: إذا فشلت قطعة، صوّرها، أرسل لنا الرقم التسلسلي، ونستبدلها بدون تكلفة. ملابس الرعاية الصحية والطيران تحمل ضمانات ممتدّة 18 و24 شهراً على التوالي، تعكس الاستثمار الأعلى للوحدة. الضمان يغطي ظروف الاستخدام الطبيعي وفق ملصق العناية — الغسيل الصناعي عند الحرارة وعدد الدورات المحدّدة.'
    }
  ],

  stats: [
    { value: '5', label: 'inspection gates', labelAr: 'بوّابات فحص' },
    { value: '12mo', label: 'standard warranty', labelAr: 'ضمان قياسي' },
    { value: '±0.5cm', label: 'measurement tolerance', labelAr: 'تحمّل القياس' },
    { value: 'ISO 9001', label: 'certified process', labelAr: 'عملية معتمدة' }
  ],

  idealFor: [
    'Healthcare institutions requiring antimicrobial efficacy certification (AATCC 100)',
    'Aviation operators subject to GACA fabric compliance standards',
    'Any organisation that has experienced quality failures with previous uniform suppliers'
  ],
  idealForAr: [
    'المؤسسات الصحية التي تتطلب شهادة فعالية مضادّة للميكروبات (AATCC 100)',
    'مشغّلي الطيران الخاضعين لمعايير GACA للأقمشة',
    'أيّ منشأة عانت من إخفاقات جودة مع موردي زيّ سابقين'
  ],

  outcome: { value: '12 months', label: 'performance warranty' },
  outcomeAr: { value: '12 شهراً', label: 'ضمان الأداء' }
};
