import type { Service } from './index';

export const programManagement: Service = {
  slug: 'program-management',
  nameEn: 'Programme Management',
  nameAr: 'إدارة البرامج',
  heroImage: 'heroes/corporate-pillar-hero',
  summary: 'Joiner kits, leaver returns, replacement cycles, inventory dashboards — one point of contact for everything uniform.',
  summaryAr: 'أطقم الموظفين الجدد، إرجاعات المغادرين، دورات الاستبدال، لوحات معلومات المخزون — نقطة اتصال واحدة لكلّ ما يخص الزيّ.',

  description: 'A single point of contact for everything uniform: new-hire onboarding kits, exit returns, scheduled rotations, on-site fittings, and inventory dashboards. Ideal for headcounts above 200.',
  descriptionAr: 'نقطة اتصال واحدة لكلّ ما يخصّ الأزياء: أطقم تأهيل الموظفين الجدد، إرجاعات المغادرين، تدوير مجدول، قياسات في الموقع، ولوحات معلومات للمخزون. مثالية لأعداد الموظفين فوق 200.',

  sections: [
    {
      heading: 'The problem with managing uniforms internally',
      headingAr: 'مشكلة إدارة الأزياء داخلياً',
      body: 'In a 500-employee Saudi organisation, the HR or admin team spends an average of 12 hours per month handling uniform logistics — tracking who received what, chasing sizes that were never stocked, managing returns from leavers, and re-ordering replacements for worn-out garments. That\'s 144 hours per year spent on a task that isn\'t their core job. Multiply that by the per-hour cost of your HR team and you have a hidden line item that never appears in the uniform budget. Programme Management eliminates that cost by moving the entire operational burden to UNEOM.',
      bodyAr: 'في منشأة سعودية بـ500 موظف، يقضي فريق الموارد البشرية أو الإدارة بمتوسط 12 ساعة شهرياً في لوجستيات الزيّ — تتبّع من استلم ماذا، ملاحقة المقاسات غير المتوفرة، إدارة إرجاعات المغادرين، وإعادة طلب البدائل للملابس البالية. هذه 144 ساعة سنوياً تُهدر على مهمة ليست وظيفتهم الأساسية. اضرب ذلك بتكلفة الساعة لفريق HR وستجد بنداً مخفياً لا يظهر أبداً في ميزانية الزيّ. إدارة البرامج تُزيل تلك التكلفة بنقل العبء التشغيلي بالكامل إلى UNEOM.'
    },
    {
      heading: 'What the programme covers',
      headingAr: 'ما يشمله البرنامج',
      body: 'Joiner Kits — when a new employee is hired, we dispatch a full uniform set within 48 hours anywhere in Saudi Arabia. The kit is pre-sized based on digital measurement records or standard sizing from the employee\'s onboarding form. Leaver Returns — when an employee exits, we coordinate garment return, inspect condition, and credit usable inventory back to your stock pool. Replacement Cycles — based on industry-specific wear rates (8 months for healthcare scrubs, 12 months for corporate, 18 months for aviation), we automatically schedule and produce the next cycle before the current one expires. Inventory Dashboard — a live portal showing your stock levels by size, style, and location, with automated low-stock alerts.',
      bodyAr: 'أطقم الموظفين الجدد — عند توظيف موظف جديد، نُرسل طقم زيّ كامل خلال 48 ساعة في أيّ مكان بالمملكة. الطقم مقاسه محدّد مسبقاً بناءً على سجلات قياس رقمية أو مقاسات قياسية من نموذج التأهيل. إرجاعات المغادرين — عند مغادرة موظف، ننسّق إرجاع الملابس، نفحص الحالة، ونُعيد المخزون الصالح لمجموعة مخزونك. دورات الاستبدال — بناءً على معدلات البلى حسب القطاع (8 أشهر للسكراب الطبي، 12 شهراً للزيّ الإداري، 18 شهراً للطيران)، نجدول وننتج الدورة التالية تلقائياً قبل انتهاء الحالية. لوحة المخزون — بوابة مباشرة تعرض مستويات مخزونك حسب المقاس والتصميم والموقع، مع تنبيهات تلقائية عند انخفاض المخزون.'
    },
    {
      heading: 'Multi-city programme coordination',
      headingAr: 'تنسيق البرامج متعددة المدن',
      body: 'For organisations operating across multiple Saudi cities — hospital groups with branches in Riyadh, Jeddah, and Dammam; retail chains with 40 stores nationwide; or industrial operators with facilities in Jubail and Yanbu — programme management includes a single national contract with one account manager. Delivery schedules are synced across all locations. Fit data is stored per-employee, so when staff transfer between branches, their uniform specification follows them. One invoice, one quality standard, one escalation path.',
      bodyAr: 'للمنشآت العاملة عبر عدة مدن سعودية — مجموعات مستشفيات بفروع في الرياض وجدة والدمام، سلاسل تجزئة بـ40 متجراً على مستوى المملكة، أو مشغّلي صناعة بمنشآت في الجبيل وينبع — تشمل إدارة البرنامج عقداً وطنياً واحداً بمدير حساب واحد. جداول التوصيل متزامنة عبر جميع المواقع. بيانات القياس مخزّنة لكل موظف، فعند نقل الموظفين بين الفروع، مواصفات زيّهم تنتقل معهم. فاتورة واحدة، معيار جودة واحد، مسار تصعيد واحد.'
    }
  ],

  stats: [
    { value: '48h', label: 'joiner-kit dispatch', labelAr: 'إرسال طقم الموظف الجديد' },
    { value: '200+', label: 'ideal headcount threshold', labelAr: 'الحد المثالي لعدد الموظفين' },
    { value: '78%', label: 'client repeat rate', labelAr: 'معدّل إعادة التعاقد' },
    { value: '24', label: 'cities covered', labelAr: 'مدينة مُغطّاة' }
  ],

  idealFor: [
    'Organisations with 200+ employees and high staff turnover (hospitality, retail, healthcare)',
    'Multi-site enterprises needing centralised uniform logistics across Saudi Arabia',
    'Companies that want to eliminate internal admin hours spent on uniform management'
  ],
  idealForAr: [
    'المنشآت بـ200+ موظف ودوران عمالة عالي (الضيافة، التجزئة، الرعاية الصحية)',
    'المؤسسات متعددة المواقع التي تحتاج لوجستيات زيّ مركزية عبر المملكة',
    'الشركات التي تريد القضاء على ساعات الإدارة الداخلية المُهدرة على إدارة الزيّ'
  ],

  outcome: { value: '48 hours', label: 'joiner-kit dispatch nationwide' },
  outcomeAr: { value: '48 ساعة', label: 'إرسال أطقم الموظفين الجدد عبر المملكة' }
};
