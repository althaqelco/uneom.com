import type { Service } from './index';

export const bulkOrdering: Service = {
  slug: 'bulk-ordering',
  nameEn: 'Bulk Ordering',
  nameAr: 'الطلبات بالجملة',
  heroImage: 'process/bulk-ordering',
  summary: 'Bulk uniform ordering from 50 to 50,000 units — your uniform shop near you with consistent fit, on-time delivery, and 14–21 day lead times across Saudi Arabia.',
  summaryAr: 'شركة الزي الموحد للطلبات بالجملة من 50 إلى 50,000 وحدة — محلات الزي الموحد وملابس يونيفورم بقياسات متناسقة وتسليم في الوقت المحدّد وأوقات تنفيذ 14-21 يوماً عبر السعودية.',

  description: 'Dedicated production blocks, in-house cutting and sewing, multi-stage QC, and direct-to-site delivery anywhere in Saudi Arabia. Lead times 14–21 days for repeat programmes, 21–35 for new designs.',
  descriptionAr: 'خطوط إنتاج مخصّصة، قصّ وخياطة داخلية، فحص جودة متعدد المراحل، وتسليم مباشر للموقع في أيّ مكان بالمملكة العربية السعودية. أوقات التسليم 14-21 يوماً للبرامج المتكررة، و21-35 يوماً للتصاميم الجديدة.',

  sections: [
    {
      heading: 'How bulk ordering works at UNEOM',
      headingAr: 'كيف تعمل الطلبات بالجملة في UNEOM',
      body: 'Most Saudi uniform suppliers outsource production. UNEOM doesn\'t. We operate an in-house cutting floor and sewing line, which means your order doesn\'t sit in a third-party queue. When you place a repeat programme order, we allocate a dedicated production block — same operators, same machines, same QC inspector who handled your last batch. That\'s why fit consistency stays within ±0.5 cm across 10,000 units. New designs go through a 3-day pre-production run to lock patterns, thread tension, and pressing before the full batch starts.',
      bodyAr: 'معظم موردي الزيّ السعوديين يُوكلون الإنتاج لجهات خارجية. UNEOM لا تفعل ذلك. نُشغّل طاولة قصّ وخط خياطة داخلياً، مما يعني أن طلبك لا ينتظر في طابور طرف ثالث. عندما تضع طلب برنامج متكرر، نُخصّص كتلة إنتاج مخصّصة — نفس العمّال، نفس الآلات، نفس مفتش الجودة الذي تعامل مع دفعتك السابقة. لهذا السبب يبقى تناسق القياسات ضمن ±0.5 سم عبر 10,000 وحدة. التصاميم الجديدة تمرّ بتشغيل ما قبل الإنتاج لمدة 3 أيام لتثبيت الأنماط وتوتّر الخيط والكيّ قبل بدء الدفعة الكاملة.'
    },
    {
      heading: 'Lead times and delivery logistics',
      headingAr: 'أوقات التنفيذ ولوجستيات التوصيل',
      body: 'Repeat programme orders: 14–21 days from PO to delivery. New designs: 21–35 days (includes the pre-production run). Emergency replenishment — joiner kits, replacement sets — dispatches within 48 hours from our warehouse for items in the standard-stock programme. Delivery is direct-to-site across all 24 Saudi cities. For multi-site organisations, we split shipments by location and deliver simultaneously so your Riyadh HQ and Jeddah branch receive on the same day.',
      bodyAr: 'طلبات البرامج المتكررة: 14-21 يوماً من أمر الشراء للتسليم. التصاميم الجديدة: 21-35 يوماً (تشمل تشغيل ما قبل الإنتاج). التجديد الطارئ — أطقم الموظفين الجدد، مجموعات الاستبدال — تُرسل خلال 48 ساعة من مستودعنا للعناصر في برنامج المخزون القياسي. التوصيل مباشر للموقع عبر جميع 24 مدينة سعودية. للمنشآت متعددة المواقع، نقسّم الشحنات حسب الموقع ونوصّل في نفس اللحظة ليتلقّى مقرّ الرياض وفرع جدة في اليوم نفسه.'
    },
    {
      heading: 'Pricing structure and MOQs',
      headingAr: 'هيكل التسعير والحد الأدنى للطلب',
      body: 'Minimum order quantity: 50 units per style per colour. Price tiers scale at 200, 500, 1,000, and 5,000+ units — the 5,000-unit tier typically reduces per-unit cost by 18–22% versus the 50-unit entry point. Every quote includes fabric, trims, production, QC, packaging, and delivery to your site. No hidden charges. Multi-year programme clients receive locked pricing for 12 months and priority production scheduling during peak seasons (September back-to-school, Hajj season, Q4 corporate renewals).',
      bodyAr: 'الحد الأدنى للطلب: 50 وحدة لكل تصميم لكل لون. شرائح الأسعار تتدرّج عند 200، 500، 1,000، و5,000+ وحدة — شريحة 5,000 وحدة عادةً تخفض تكلفة الوحدة بنسبة 18-22% مقارنة بنقطة الدخول 50 وحدة. كل عرض سعر يشمل القماش، الكماليات، الإنتاج، فحص الجودة، التغليف، والتوصيل لموقعك. لا رسوم مخفية. عملاء البرامج متعددة السنوات يحصلون على أسعار مثبّتة لمدة 12 شهراً وجدولة إنتاج أولوية خلال مواسم الذروة (سبتمبر عودة المدارس، موسم الحج، تجديدات Q4 الشركات).'
    }
  ],

  stats: [
    { value: '14–21', label: 'days for repeat orders', labelAr: 'يوماً للطلبات المتكررة' },
    { value: '50', label: 'unit MOQ per style', labelAr: 'وحدة حد أدنى لكل تصميم' },
    { value: '±0.5cm', label: 'fit consistency', labelAr: 'دقّة تناسق القياس' },
    { value: '48h', label: 'emergency dispatch', labelAr: 'إرسال طوارئ' }
  ],

  idealFor: [
    'Organisations with 200+ employees needing annual uniform refresh cycles',
    'Multi-site Saudi enterprises requiring simultaneous delivery across cities',
    'Procurement teams that need locked pricing for 12-month budget planning'
  ],
  idealForAr: [
    'المنشآت بـ200+ موظف تحتاج دورات تجديد زيّ سنوية',
    'المؤسسات السعودية متعددة المواقع التي تحتاج توصيلاً متزامناً عبر المدن',
    'فرق المشتريات التي تحتاج أسعاراً مثبّتة لتخطيط ميزانية 12 شهراً'
  ],

  outcome: { value: '14–35 days', label: 'production lead time' },
  outcomeAr: { value: '14-35 يوماً', label: 'وقت التنفيذ للإنتاج' }
};
