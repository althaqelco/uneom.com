import type { Service } from './index';

export const customDesign: Service = {
  slug: 'custom-design',
  nameEn: 'Custom Design',
  nameAr: 'التصميم المخصّص',
  heroImage: 'process/custom-design-workflow',
  summary: 'Bespoke uniform design from concept sketch to bulk-ready production tech-pack — custom design & tailoring for Saudi enterprises in 14 days.',
  summaryAr: 'تفصيل يونيفورم وتصميم أزياء مخصّصة من الرسم الأوّلي إلى حزمة إنتاج جاهزة للتصنيع — تفصيل الزي الموحد وخياطة الزي الموحد للمؤسسات السعودية خلال 14 يوماً.',

  description: 'Six-step workflow: brand audit → concept design → fabric and trim sourcing → physical sampling → fit refinement across body sizes → production tech-pack and grading. Average concept-to-sample time: 14 days.',
  descriptionAr: 'سير عمل من 6 خطوات: تدقيق العلامة التجارية ← تصميم أوّلي ← تأمين الأقمشة والكماليات ← عيّنات مادية ← تحسين القياسات عبر أحجام الجسم ← حزمة التصنيع وتدريج المقاسات. متوسط الوقت من الفكرة للعيّنة: 14 يوماً.',

  sections: [
    {
      heading: 'Why off-the-shelf fails Saudi enterprises',
      headingAr: 'لماذا يفشل الزيّ الجاهز مع المؤسسات السعودية',
      body: 'Catalogue uniforms are built for a "global average" body, climate, and brand. Saudi operating conditions are none of those. Riyadh heat-soak at 50°C demands different fabric physics than Jeddah coastal humidity at 90%+ RH. A hospital with 3,000 staff needs 14-point body grading, not S/M/L guesswork. And when your brand identity is on the seam — the thread colour, the lapel angle, the pocket depth — a catalogue won\'t carry it. Custom design is how UNEOM closes the gap between what a brand needs and what a factory can deliver.',
      bodyAr: 'الأزياء الجاهزة مصمّمة لـ"متوسط عالمي" في شكل الجسم والمناخ والعلامة التجارية. والظروف التشغيلية السعودية ليست أيّاً من ذلك. حرارة الرياض عند 50 درجة مئوية تتطلّب فيزياء قماش مختلفة عن رطوبة جدة الساحلية فوق 90%. مستشفى بـ3,000 موظف يحتاج تدريج جسم من 14 نقطة، لا تخمينات S/M/L. وعندما تكون هوية علامتك التجارية على الخياطة — لون الخيط، زاوية الياقة، عمق الجيب — الكتالوج لن يحملها. التصميم المخصّص هو كيف تُغلق UNEOM الفجوة بين ما تحتاجه العلامة وما يمكن للمصنع تنفيذه.'
    },
    {
      heading: 'The 6-step design workflow',
      headingAr: 'سير عمل التصميم بـ6 خطوات',
      body: 'Step 1 — Brand Audit: our design team reviews your brand book, existing uniforms (if any), competitor positioning, and regulatory requirements for your industry. Step 2 — Concept Design: 3–5 initial concepts presented as digital renders with fabric mood-boards. Step 3 — Fabric & Trim Sourcing: shortlisting from 40+ fabrics in our active rotation, tested against Saudi climate conditions in our in-house textile lab. Step 4 — Physical Sampling: first physical sample produced in 7–10 days. Step 5 — Fit Refinement: the sample is tested across 5 body sizes (XS–XXL) with 14-point measurement grading to ensure consistency. Step 6 — Production Tech-Pack: final specifications, Pantone-locked colours, graded patterns, and factory-ready files handed to our cutting floor.',
      bodyAr: 'الخطوة 1 — تدقيق العلامة التجارية: فريق التصميم يراجع كتاب علامتك التجارية، الأزياء الحالية (إن وُجدت)، وضع المنافسين، والمتطلبات التنظيمية لقطاعك. الخطوة 2 — التصميم المفهومي: 3-5 مفاهيم أوّلية تُعرض كعروض رقمية مع لوحات أقمشة إلهامية. الخطوة 3 — تأمين الأقمشة والكماليات: اختيار من 40+ قماشاً في تدويرنا النشط، مُختبرة ضد ظروف المناخ السعودي في مختبر المنسوجات الداخلي. الخطوة 4 — العيّنة المادية: أوّل عيّنة مادية تُنتج خلال 7-10 أيام. الخطوة 5 — تحسين القياسات: العيّنة تُختبر عبر 5 أحجام جسم (XS–XXL) بتدريج قياسات من 14 نقطة لضمان التناسق. الخطوة 6 — حزمة التصنيع: المواصفات النهائية، ألوان Pantone مقفلة، أنماط مُدرَّجة، وملفات جاهزة للمصنع تُسلّم لطاولة القصّ.'
    },
    {
      heading: 'What you receive at the end',
      headingAr: 'ما تتسلّمه في النهاية',
      body: 'A complete production tech-pack: graded patterns in 7 sizes, Pantone-matched colour cards, seam and stitch specifications, fabric and trim BOMs, care-label content, and a digital archive your procurement team can use for repeat orders without re-briefing us. The tech-pack is yours — we don\'t lock IP.',
      bodyAr: 'حزمة تصنيع متكاملة: أنماط مُدرَّجة في 7 مقاسات، بطاقات ألوان مطابقة لـPantone، مواصفات الخياطة والغُرز، قوائم مواد الأقمشة والكماليات، محتوى ملصقات العناية، وأرشيف رقمي يمكن لفريق مشترياتك استخدامه لإعادة الطلب بدون إعادة إحاطتنا. حزمة التصنيع ملكك — لا نقفل الملكية الفكرية.'
    }
  ],

  stats: [
    { value: '14', label: 'days concept-to-sample', labelAr: 'يوماً من الفكرة للعيّنة' },
    { value: '6', label: 'step design workflow', labelAr: 'خطوات في سير العمل' },
    { value: '40+', label: 'fabrics in rotation', labelAr: 'قماشاً في التدوير النشط' },
    { value: '7', label: 'graded sizes per design', labelAr: 'مقاسات مُدرَّجة لكل تصميم' }
  ],

  idealFor: [
    'Enterprises launching a new brand identity across 200+ staff',
    'Hospitals or hotel chains consolidating multiple uniform vendors into one programme',
    'Organisations with Saudi-specific regulatory requirements (SASO, MoH, GACA)'
  ],
  idealForAr: [
    'المؤسسات التي تُطلق هوية علامة تجارية جديدة عبر 200+ موظف',
    'المستشفيات أو سلاسل الفنادق التي توحّد موردي الزيّ المتعددين في برنامج واحد',
    'المنشآت ذات المتطلبات التنظيمية السعودية الخاصة (SASO، وزارة الصحة، GACA)'
  ],

  outcome: { value: '14 days', label: 'concept to first sample' },
  outcomeAr: { value: '14 يوماً', label: 'من الفكرة إلى العيّنة الأولى' }
};
