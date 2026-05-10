import fs from 'fs';
import path from 'path';

// Arabic translations map for all blog posts
const translations = {
  'medical-scrubs-evolution-saudi': {
    titleAr: 'كيف تطورت السكراب الطبي في السعودية منذ 2013',
    excerptAr: 'اثنا عشر عامًا من علم الأقمشة وهندسة الاحتشام والواقع التشغيلي — ما الذي تغيّر في الزي الطبي السعودي وما الذي لم يتغيّر.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
    reviewerAr: 'م. عبدالعزيز السلمي', reviewerTitleAr: 'مهندس أقمشة أول', reviewerAffAr: 'الهيئة السعودية للمهندسين',
  },
  'healthcare-uniforms-infection-control': {
    titleAr: 'أزياء الرعاية الصحية ومكافحة العدوى: ما تتطلبه وزارة الصحة فعلاً',
    excerptAr: 'قراءة مباشرة للإرشادات ذات الصلة من وزارة الصحة وهيئة الغذاء والدواء — وما يفوته معظم فرق المشتريات عند توريد السكراب.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
  },
  'nursing-uniform-guide-2025': {
    titleAr: 'دليل الممارس لاختيار زي التمريض في المستشفيات السعودية',
    excerptAr: 'المقاس والقماش والاحتشام والمتانة — أربع محادثات يحتاجها كل برنامج تمريض بالترتيب.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
  },
  'hotel-staff-uniform-guide': {
    titleAr: 'أزياء موظفي الفنادق السعودية: دليل مدير البرنامج',
    excerptAr: 'الاستقبال والأغذية والتدبير المنزلي والكونسيرج — خمس مواصفات لكل دور في الفنادق الفاخرة السعودية.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة',
  },
  'chef-uniform-design-guide': {
    titleAr: 'أزياء الطهاة في المطبخ السعودي: جولة في علم المواد',
    excerptAr: 'الحرارة والزيت والسكاكين وحركة المطبخ — ما صُمّمت جاكيت الشيف لتتحمّله فعلاً.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة',
  },
  'airline-uniform-design-cultural-identity': {
    titleAr: 'أزياء الطيران السعودي والهوية الثقافية على ارتفاع 35,000 قدم',
    excerptAr: 'كيف تنسج شركات الطيران السعودية الهوية الثقافية في أزياء الطاقم الحديثة — ولماذا لا يزال الوشاح مهمًا.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة والطيران',
  },
  'corporate-uniform-psychology': {
    titleAr: 'سيكولوجية الزي المؤسسي في بيئات العمل السعودية',
    excerptAr: 'لماذا يغيّر ما يرتديه فريقك طريقة حضورهم — وما يخطئ فيه 75% من الشركات السعودية.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج الشركات',
  },
  'cultural-identity-saudi-school-uniforms': {
    titleAr: 'الزي المدرسي السعودي: الهوية الثقافية تلتقي بمنحنيات النمو',
    excerptAr: 'لماذا يفشل معظم الزي المدرسي مع العائلات السعودية في السنة الثانية — وكيف يبدو التصميم القابل للتمديد.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج التعليم',
  },
  'industrial-safety-workwear-saudi': {
    titleAr: 'ملابس السلامة الصناعية في السعودية: لماذا يتفوّق HRC2 على HRC1 في الحرارة الشديدة',
    excerptAr: 'واقع تدقيق HCIS ولماذا تفشل أفرولات FR المستوردة في أرضيات المصانع السعودية.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مهندس سلامة صناعية',
    reviewerAr: 'م. عبدالعزيز السلمي', reviewerTitleAr: 'مهندس أقمشة أول', reviewerAffAr: 'الهيئة السعودية للمهندسين',
  },
  'medical-hijab-healthcare-standards': {
    titleAr: 'الحجاب الطبي في الرعاية الصحية السعودية — الهندسة والمعايير',
    excerptAr: 'كيف يتلاقى الاحتشام والسلامة السريرية ومقاومة الغسيل في قطعة قماش واحدة — وما يغفله معظم الكتالوجات.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
  },
  'hospital-uniform-safety-standards': {
    titleAr: 'معايير سلامة الزي في المستشفيات: دليل للمشتريات السعودية',
    excerptAr: 'معايير وزارة الصحة وهيئة الغذاء والدواء وساسو التي يجب أن يرجع إليها كل ملف مشتريات مستشفى.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
  },
  'advanced-fabrics-healthcare-uniforms': {
    titleAr: 'أقمشة الزي الطبي المتقدمة: ما الذي تغيّر مؤخرًا',
    excerptAr: 'ربط أيونات الفضة ودروع السوائل بدرجة تفلون والجيل الجديد من التشطيبات المضادة للميكروبات القادمة للمستشفيات السعودية.',
    authorAr: 'ليلى الحسن', authorTitleAr: 'أخصائية أقمشة الرعاية الصحية',
    reviewerAr: 'م. عبدالعزيز السلمي', reviewerTitleAr: 'مهندس أقمشة أول', reviewerAffAr: 'الهيئة السعودية للمهندسين',
  },
  'hospitality-uniforms-guest-experience': {
    titleAr: 'أزياء الضيافة وتجربة الضيف السعودي',
    excerptAr: 'لماذا تصل الأزياء للضيوف 100 مرة أكثر من الشعارات — وكيف تستغل الفنادق السعودية الفاخرة هذه الحقيقة.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة',
  },
  'hospitality-uniforms-cultural-identity': {
    titleAr: 'الهوية الثقافية في أزياء الضيافة السعودية',
    excerptAr: 'كيف تنسج الفنادق والمطاعم السعودية هوية الحجاز والنجد وعسير في أزياء الضيافة الحديثة.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة',
  },
  'hajj-umrah-staff-uniforms': {
    titleAr: 'أزياء موظفي الحج والعمرة: واقع البرامج',
    excerptAr: 'سبعة أسابيع. حرارة أربعين درجة. مليونا حاج. برنامج الأزياء الذي ينجو من موسم الحج.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الضيافة',
  },
  'aviation-uniforms-brand-identity': {
    titleAr: 'أزياء الطيران كهوية علامة تجارية على ارتفاع 35,000 قدم',
    excerptAr: 'كيف تحوّل شركات الطيران السعودية المقصورة إلى سطح للعلامة التجارية — وما تتطلبه صلاحية GACA من التجربة.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الطيران',
  },
  'material-innovations-aviation-attire': {
    titleAr: 'ابتكارات المواد في أزياء الطيران',
    excerptAr: 'مزيج الصوف الاستوائي والمقاومة للحريق رباعية الاتجاه والجيل القادم من أقمشة طواقم الطائرات القادمة لشركات الطيران السعودية.',
    authorAr: 'أحمد الفارسي', authorTitleAr: 'مدير برامج الطيران',
  },
  'corporate-dress-code-evolution': {
    titleAr: 'تطور قواعد اللباس المؤسسي في السعودية',
    excerptAr: 'من الثوب فقط إلى البرامج الهجينة — كيف تتطور قواعد اللباس المؤسسي مع بيئات عمل رؤية 2030.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج الشركات',
  },
  'fabrics-student-uniforms': {
    titleAr: 'اختيار الأقمشة للزي المدرسي السعودي',
    excerptAr: 'لماذا أصبح البوليستر-قطن 65/35 المعيار العالمي — وأين تختلف متطلبات المناخ السعودي.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج التعليم',
  },
  'national-day-corporate-uniforms': {
    titleAr: 'أزياء الشركات لليوم الوطني: تصميم البرنامج',
    excerptAr: 'برامج أزياء اليوم الوطني السعودي — كيف تنفّذها بشكل صحيح والأخطاء التشغيلية التي ترتكبها معظم الشركات.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج الشركات',
  },
  'industrial-heat-stress-management': {
    titleAr: 'إدارة الإجهاد الحراري الصناعي من خلال تصميم الزي',
    excerptAr: 'كيف يغيّر اختيار القماش في أرضية مصنع بحرارة 50 درجة مخاطر الإصابات والإنتاجية ونتائج تدقيق HCIS.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مهندس سلامة صناعية',
    reviewerAr: 'م. عبدالعزيز السلمي', reviewerTitleAr: 'مهندس أقمشة أول', reviewerAffAr: 'الهيئة السعودية للمهندسين',
  },
  'industrial-electrostatic-protection': {
    titleAr: 'الحماية من الكهرباء الساكنة في ملابس العمل الصناعية السعودية',
    excerptAr: 'أفرولات مصنّفة ESD للبتروكيماويات وتجميع الإلكترونيات وبيئات المتفجرات — ما يتوقعه HCIS.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مهندس سلامة صناعية',
  },
  'industrial-uniform-color-coding': {
    titleAr: 'نظام ترميز ألوان الزي الصناعي لأرضيات المصانع السعودية',
    excerptAr: 'لماذا تقلّل الأزياء المرمّزة بالألوان الحوادث وتختصر وقت التدريب وتجتاز تدقيقات HCIS أسرع.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مهندس سلامة صناعية',
  },
  'advanced-fabrics-security-uniforms': {
    titleAr: 'الأقمشة المتقدمة في أزياء الأمن السعودية الحديثة',
    excerptAr: 'بوليستر ريبستوب عالي الأداء وحوامل سترات مخفية وعلم الأقمشة وراء ورديات 12 ساعة السعودية.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مدير برامج الأمن',
  },
  'bulletproof-protection-technologies': {
    titleAr: 'الحماية البالستية في برامج أزياء الأمن السعودية',
    excerptAr: 'مواصفات السترات وتصنيفات NIJ ودمج الحماية البالستية في الأمن المؤسسي السعودي الحديث.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مدير برامج الأمن',
  },
  'future-professional-wear-digital-age': {
    titleAr: 'مستقبل الملابس المهنية في العصر الرقمي السعودي',
    excerptAr: 'المنسوجات الذكية وأجهزة الاستشعار القابلة للارتداء والجيل القادم من أزياء B2B القادمة للشركات السعودية.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'مديرة برامج الابتكار',
  },
  'mall-retail-uniforms-excellence': {
    titleAr: 'تميّز أزياء التجزئة في المولات: واقع البرامج',
    excerptAr: 'لماذا تدوم أزياء التجزئة السعودية في المولات 6 أشهر بالقماش العادي — وكيف تمدّدها يونيوم إلى 14 شهرًا.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج التجزئة',
  },
  'corporate-security-branding': {
    titleAr: 'العلامة التجارية للأمن المؤسسي من خلال تصميم الزي',
    excerptAr: 'كيف تستخدم المجمّعات السعودية تصميم الزي لإبراز السلطة دون الترهيب.',
    authorAr: 'خالد العتيبي', authorTitleAr: 'مدير برامج الأمن',
  },
  'choosing-uniform-supplier-guide': {
    titleAr: 'كيف تختار مورّد الأزياء الموحدة في السعودية',
    excerptAr: 'ستة أسئلة يجب أن تطرحها كل شركة سعودية قبل توقيع عقد برنامج الأزياء.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'أخصائية برامج الشركات',
  },
  'circular-economy-uniforms': {
    titleAr: 'أزياء الاقتصاد الدائري في سوق B2B السعودي',
    excerptAr: 'برامج الاسترداد وأقمشة البوليستر المعاد تدويره وما تعنيه رؤية 2030 لسلسلة توريد الأزياء السعودية.',
    authorAr: 'سارة الغامدي', authorTitleAr: 'مديرة برامج الاستدامة',
  },
};

const dir = 'src/lib/data/blog/posts';
const files = fs.readdirSync(dir);
let updated = 0;

for (const file of files) {
  const slug = file.replace('.ts', '');
  const t = translations[slug];
  if (!t) continue;

  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace titleAr (English placeholder → Arabic)
  const oldTitleAr = content.match(/titleAr: '([^']+)'/);
  if (oldTitleAr && t.titleAr) {
    content = content.replace(`titleAr: '${oldTitleAr[1]}'`, `titleAr: '${t.titleAr}'`);
  }

  // Replace excerptAr
  const oldExcerptAr = content.match(/excerptAr: '([^']+)'/);
  if (oldExcerptAr && t.excerptAr) {
    content = content.replace(`excerptAr: '${oldExcerptAr[1]}'`, `excerptAr: '${t.excerptAr}'`);
  }

  // Replace author nameAr and titleAr
  if (t.authorAr) {
    // Match: name: 'X', nameAr: 'X' pattern in author
    content = content.replace(
      /author: \{ name: '([^']+)', nameAr: '[^']+', title: '([^']+)', titleAr: '[^']+' \}/,
      `author: { name: '$1', nameAr: '${t.authorAr}', title: '$2', titleAr: '${t.authorTitleAr}' }`
    );
  }

  // Replace reviewer if exists
  if (t.reviewerAr) {
    content = content.replace(
      /reviewer: \{ name: '([^']+)', nameAr: '[^']+', title: '([^']+)', titleAr: '[^']+', affiliation: '([^']+)', affiliationAr: '[^']+' \}/,
      `reviewer: { name: '$1', nameAr: '${t.reviewerAr}', title: '$2', titleAr: '${t.reviewerTitleAr}', affiliation: '$3', affiliationAr: '${t.reviewerAffAr}' }`
    );
  }

  fs.writeFileSync(filePath, content);
  updated++;
}
console.log(`Updated ${updated} blog posts with Arabic translations`);
