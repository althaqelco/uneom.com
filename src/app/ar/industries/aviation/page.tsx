'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Metadata } from 'next';

// تعريف الواجهات المطلوبة محلياً
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  features?: string[];
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export default function AviationPageArabic() {
  const locale = 'ar';
  
  // البيانات العربية لصفحة صناعة الطيران
  const aviationIndustryData = {
    locale: locale,
    title: "يونيفورم الطيران المتخصص | زي موحد لشركات الطيران السعودية والخليجية",
    subtitle: "أزياء طيران احترافية متوافقة مع معايير GACA و شروط الطيران المدني 2025",
    heroImage: "/images/industries/airlines-fleet.jpg",
    metaDescription: "يونيفورم طيران احترافي للخطوط السعودية وطيران ناس وطيران أديل وكافة شركات الطيران الخليجية. متوافق مع معايير GACA ورؤية 2030.",
    keywords: ["يونيفورم طيران", "أزياء مضيفات الطيران", "زي موحد للخطوط السعودية", "يونيفورم الخطوط السعودية", "زي طاقم الطيران", "أزياء الطيارين", "يونيفورم طيران ناس", "معايير GACA", "يونيفورم محتشم للطيران", "أزياء الطيران الإسلامية", "يونيفورم طاقم الضيافة الجوية", "بدلات الطيارين السعوديين", "يونيفورم العمليات الأرضية", "أزياء طيران أديل"],
    canonicalUrl: "https://www.uneom.com/ar/industries/aviation",
    
    // المقدمة
    introduction: [
      "نقدم في يونيوم أزياء احترافية لقطاع الطيران تجمع بين الالتزام بمعايير الهيئة العامة للطيران المدني السعودية (GACA) والأناقة العصرية مع احترام الهوية الإسلامية.",
      "شريك موثوق لكبرى شركات الطيران السعودية والخليجية، نصمم ونُصنّع يونيفورم متكامل يلبي احتياجات الطيارين والمضيفين والمضيفات وطاقم العمليات الأرضية والفنيين.",
      "نلتزم بأعلى معايير الجودة والسلامة مع تقديم حلول متكاملة لإدارة دورة حياة اليونيفورم، مما يضمن تمثيلاً مشرفاً لهوية شركات الطيران وانسجاماً مع رؤية المملكة 2030 في تطوير قطاع الطيران."
    ],
    
    // المميزات الرئيسية
    benefits: [
      {
        title: "متوافق مع معايير GACA",
        description: "يونيفورم مطابق لمعايير الهيئة العامة للطيران المدني السعودية والمنظمة الدولية للطيران المدني (ICAO) من حيث السلامة والمواصفات.",
        icon: "/icons/role-identification.svg"
      },
      {
        title: "تصاميم محتشمة للمضيفات",
        description: "أزياء تجمع بين الاحتشام والأناقة، مصممة خصيصاً للمرأة السعودية والخليجية العاملة في قطاع الطيران مع الالتزام بالضوابط الشرعية.",
        icon: "/icons/modest-modifications.svg"
      },
      {
        title: "أقمشة متطورة مريحة",
        description: "أقمشة عالية الجودة بتقنيات كول كور وكومفورت فلكس لضمان الراحة والأداء المثالي خلال الرحلات الطويلة وفي مختلف الظروف المناخية.",
        icon: "/icons/coolcore.svg"
      },
      {
        title: "تمييز واضح للرتب",
        description: "أنظمة متكاملة لتمييز الرتب والأدوار الوظيفية عبر الشارات والألوان والتصاميم المختلفة وفق المعايير الدولية وأنظمة GACA.",
        icon: "/icons/department-colors.svg"
      }
    ],
    
    // المنتجات المعروضة
    products: [
      {
        id: "aviation-blazer",
        name: "سترة الطيار الرسمية",
        description: "سترة احترافية مصممة خصيصًا للطيارين، متوافقة تمامًا مع معايير الهيئة العامة للطيران المدني السعودية (GACA). مصنوعة من أقمشة فاخرة مقاومة للتجاعيد والبقع.",
        image: "/images/products/aviation-blazer.jpg",
        href: "/ar/shop/aviation-uniforms/aviation-blazer?source=aviation-page",
        features: ["متوافقة مع معايير GACA", "مقاومة للتجاعيد والبقع", "تصميم مريح للرحلات الطويلة", "جيوب عملية متعددة"]
      },
      {
        id: "crew-shirts",
        name: "قمصان الطاقم الرسمية",
        description: "قمصان رسمية عالية الجودة مصممة خصيصًا لطاقم الطيران، تجمع بين الأناقة والراحة. مصنوعة من أقمشة كول كور المتطورة التي تمنح تهوية مثالية وتنظيم لدرجة الحرارة.",
        image: "/images/products/crew-shirts.jpg",
        href: "/ar/shop/aviation-uniforms/crew-shirts?source=aviation-page",
        features: ["تقنية كول كور لتنظيم الحرارة", "معالجة بيوكير المضادة للبكتيريا", "تصميم مقاوم للتجاعيد", "ياقات وأكمام قابلة للتخصيص"]
      },
      {
        id: "modest-cabin-crew",
        name: "زي مضيفة الطيران المحتشم",
        description: "يونيفورم متكامل لمضيفات الطيران مصمم بعناية ليجمع بين الالتزام بالضوابط الشرعية والمتطلبات المهنية لخدمات الضيافة الجوية. يتميز بتصاميم محتشمة وأنيقة.",
        image: "/images/products/modest-cabin-crew.jpg",
        href: "/ar/shop/aviation-uniforms/modest-cabin-crew?source=aviation-page",
        features: ["تصميم محتشم كامل", "تقنية كومفورت فلكس للراحة", "مقاومة للسوائل والبقع", "غطاء رأس مريح وعملي"]
      },
      {
        id: "ground-operations",
        name: "يونيفورم العمليات الأرضية",
        description: "يونيفورم عملي ومتين مصمم خصيصًا لفرق العمليات الأرضية في المطارات. مصنوع من أقمشة متينة مقاومة للتآكل والظروف الجوية المختلفة، مع شرائط عاكسة للضوء لتعزيز عوامل السلامة.",
        image: "/images/products/ground-crew.jpg",
        href: "/ar/shop/aviation-uniforms/ground-operations?source=aviation-page",
        features: ["متانة عالية للعمل الشاق", "شرائط عاكسة للسلامة", "مقاوم للماء والزيوت", "تهوية ممتازة في المناخ الحار"]
      },
      {
        id: "maintenance-technician",
        name: "بدلة فنيي الصيانة",
        description: "بدلة عمل متخصصة لفنيي صيانة الطائرات، مصممة وفق أعلى معايير السلامة المهنية ومعتمدة من GACA. توفر حماية ممتازة مع أقمشة مقاومة للحريق والزيوت والمواد الكيميائية.",
        image: "/images/products/maintenance-tech.jpg",
        href: "/ar/shop/aviation-uniforms/maintenance-technician?source=aviation-page",
        features: ["مقاومة للحريق (EN ISO 14116)", "حماية من المواد الكيميائية", "جيوب متعددة للأدوات", "خفيفة الوزن ومريحة"]
      },
      {
        id: "crew-luggage",
        name: "حقيبة طاقم الطيران",
        description: "حقيبة متينة ومتعددة الاستخدامات مصممة خصيصًا لطاقم الطيران. مصنوعة من مواد عالية الجودة مقاومة للماء والتآكل، مع عجلات سلسة وتصميم مدروس يسمح بتنظيم المحتويات بفعالية.",
        image: "/images/products/crew-luggage.jpg",
        href: "/ar/shop/aviation-accessories/crew-luggage?source=aviation-page",
        features: ["عجلات مزدوجة صامتة", "مقاومة للماء والصدمات", "أقفال آمنة بكلمة مرور", "خفيفة الوزن ومتينة"]
      }
    ],
    
    // قسم جديد مميز للمنتجات مع تحسين الوصف والروابط الداخلية
    featuredSection: {
      title: "حلول يونيفورم الطيران المتوافقة مع معايير GACA السعودية",
      subtitle: "أزياء طيران متخصصة لكافة الأقسام بتصاميم عصرية وخامات ممتازة",
      backgroundImage: "/images/industries/aviation.jpg",
      content: "تقدم يونيوم مجموعة متكاملة من أزياء الطيران المصممة خصيصاً للسوق السعودي، مع الالتزام بمعايير الهيئة العامة للطيران المدني (GACA) والمتطلبات الخاصة بشركات الطيران السعودية. يتميز يونيفورم الطيران لدينا بالراحة والتصميم العملي والخامات عالية الجودة التي تتحمل ظروف العمل المختلفة."
    },
    
    // قسم التقنيات مع أيقونات واضحة
    fabricTechnologies: [
      {
        name: "تقنية ترافل فريش المضادة للميكروبات",
        description: "معالجة متطورة للأقمشة تمنع نمو البكتيريا وتحافظ على النظافة طوال الرحلات الطويلة، وتقضي على الروائح غير المرغوبة وتطيل عمر اليونيفورم.",
        icon: "/icons/biocare.svg",
        benefits: ["مضاد للبكتيريا", "يمنع الروائح", "يطيل عمر القماش", "حماية دائمة"]
      },
      {
        name: "تقنية كومفورت فلكس للراحة المثالية",
        description: "قماش مرن بتقنية متطورة يوفر حرية الحركة الكاملة أثناء أداء المهام المختلفة، مما يضمن الراحة خلال ساعات العمل الطويلة ويقلل الإجهاد.",
        icon: "/icons/comfortflex.svg",
        benefits: ["مرونة فائقة", "حرية الحركة", "راحة مستمرة", "مقاومة للتمدد"]
      },
      {
        name: "تقنية رينكل فري للمظهر المثالي",
        description: "تقنية خاصة تجعل الأقمشة مقاومة للتجعد بشكل فعال، مما يحافظ على المظهر الأنيق والمهني للزي الموحد طوال ساعات الطيران والمناوبات الطويلة.",
        icon: "/icons/coolcore.svg",
        benefits: ["مقاوم للتجعد", "مظهر أنيق", "سهل الكي", "مضاد للانكماش"]
      },
      {
        name: "تقنية كلايمت كنترول للتحكم الحراري",
        description: "أقمشة ذكية تتكيف مع التغيرات في درجات الحرارة بين المطار والطائرة، مما يضمن الراحة الحرارية للموظفين في جميع الظروف المناخية وبيئات العمل المختلفة.",
        icon: "/icons/duraseal.svg",
        benefits: ["تنظيم الحرارة", "امتصاص العرق", "تهوية ممتازة", "راحة مستمرة"]
      }
    ],
    
    // قسم الشهادات مع إضافة المزيد من الشهادات
    testimonials: [
      {
        id: "testimonial-1",
        quote: "قامت يونيوم بتطوير وتنفيذ برنامج متكامل ليونيفورم الطيران لشركتنا، متوافق بشكل كامل مع معايير الهيئة العامة للطيران المدني السعودية، مع مراعاة الهوية الوطنية والإسلامية. الأقمشة عالية الجودة والراحة الفائقة للطواقم خلال الرحلات الطويلة كانت محل إشادة من جميع الموظفين.",
        author: "كابتن فهد القحطاني",
        position: "مدير العمليات التشغيلية",
        company: "طيران السماء السعودي",
        avatar: "/images/testimonials/captain-avatar.jpg"
      },
      {
        id: "testimonial-2",
        quote: "التصاميم المحتشمة التي طورتها يونيوم لمضيفات الطيران لدينا لاقت استحساناً كبيراً من الموظفات والمسافرين على حد سواء. الأزياء تعكس هويتنا الإسلامية مع تلبية المتطلبات العملية للرحلات الجوية. جودة الأقمشة استثنائية، والخدمة المقدمة كانت احترافية طوال فترة المشروع.",
        author: "سارة العتيبي",
        position: "مديرة خدمات المقصورة",
        company: "الخطوط الجوية الخليجية",
        avatar: "/images/testimonials/female-manager-avatar.jpg"
      },
      {
        id: "testimonial-3",
        quote: "نظام إدارة اليونيفورم الذي قدمته يونيوم خفض تكاليفنا التشغيلية بنسبة 25% وقدم حلاً متكاملاً سهل الإدارة مع الاهتمام بأدق التفاصيل. استطاعوا توحيد مظهر موظفينا في 18 مطاراً دولياً مع المحافظة على هويتنا السعودية وتلبية معايير الجودة العالمية والمتطلبات التنظيمية.",
        author: "م. عبدالعزيز الشمري",
        position: "نائب الرئيس للموارد البشرية",
        company: "شركة طيران السعودية الدولية",
        avatar: "/images/testimonials/executive-avatar.jpg"
      }
    ],
    
    // قسم الأسئلة الشائعة مع تحسين محركات البحث
    faq: [
      {
        question: "كيف يضمن يونيفورم الطيران من يونيوم الامتثال لمعايير الهيئة العامة للطيران المدني السعودية؟",
        answer: "يتم تصميم جميع أزياء الطيران لدينا وفقًا للمتطلبات الدقيقة لهيئة الطيران المدني السعودية (GACA)، حيث نلتزم بمعايير السلامة والجودة المحددة. يشمل ذلك استخدام أقمشة مقاومة للحريق ومعالجات خاصة للسلامة، وتصميم عناصر مرئية واضحة للتمييز بين الرتب والوظائف، وأنماط قص وخياطة تتوافق مع إرشادات الصناعة العالمية مع مراعاة خصوصية المتطلبات السعودية."
      },
      {
        question: "ما الذي يميز أزياء الطيران المحتشمة للموظفات السعوديات في يونيوم؟",
        answer: "تتميز مجموعة اليونيفورم المحتشم للموظفات السعوديات بتصاميم مبتكرة تجمع بين الالتزام بالشريعة الإسلامية والأناقة العصرية. نوفر خيارات متنوعة تشمل أغطية رأس أنيقة مصممة خصيصًا لمهام الطيران، وقصات محتشمة توفر حرية الحركة اللازمة للعمل، وطبقات متعددة يمكن تعديلها حسب المهام المختلفة. كما نستخدم أقمشة خفيفة ومريحة تناسب العمل لساعات طويلة وتحافظ على التهوية المناسبة."
      },
      {
        question: "كيف تضمنون توحيد المظهر بين مختلف أقسام شركة الطيران مع تمييز الأدوار المختلفة؟",
        answer: "نعتمد نظام تصميم متكامل يوازن بين الهوية الموحدة وتمييز الأدوار المختلفة من خلال: استخدام نفس لوحة الألوان الأساسية مع تنويعات مدروسة لكل قسم، وشارات وعلامات مميزة للرتب تتبع نظامًا موحدًا مع اختلافات واضحة، وعناصر تصميم مشتركة (كالأزرار والشعارات) عبر جميع الأقسام مع اختلاف في القصات والتفاصيل حسب طبيعة العمل، ونظام إكسسوارات متدرج يعكس المستويات الوظيفية. هذا النهج يساعد المسافرين على تمييز موظفي الشركة بسهولة مع فهم أدوارهم المختلفة."
      },
      {
        question: "ما هي خطوات تنفيذ مشروع يونيفورم متكامل لشركة طيران سعودية جديدة؟",
        answer: "تتضمن عملية تنفيذ مشروع يونيفورم الطيران الخطوات التالية: أولاً، جلسات استشارية لفهم هوية العلامة التجارية والاحتياجات التشغيلية. ثانيًا، تصميم مفاهيم أولية وتطويرها مع فريق الإدارة. ثالثًا، إنتاج عينات للاختبار واعتمادها. رابعًا، تطوير نظام مقاسات مفصل يناسب التنوع الجسدي للموظفين. خامسًا، التنفيذ المرحلي مع جلسات قياس وتدريب للموظفين. سادسًا، إنشاء دليل إرشادي متكامل وبرنامج للصيانة والاستبدال. نخصص مدير مشروع لكل عميل لضمان التنفيذ السلس والالتزام بالمواعيد والميزانية المحددة."
      },
      {
        question: "كيف تتعاملون مع التحديات الخاصة بالمناخ السعودي في تصميم يونيفورم الطيران؟",
        answer: "نأخذ بعين الاعتبار التحديات المناخية الفريدة في المملكة عند تصميم أزياء الطيران من خلال: استخدام أقمشة خاصة ذات خصائص تبريد وامتصاص للرطوبة للعمل في البيئات الحارة، وطبقات قابلة للتعديل للتكيف مع الانتقال بين البيئات المكيفة والخارجية، ومعالجات مضادة للأشعة فوق البنفسجية للعاملين في المناطق المكشوفة، وتقنيات نسيج متقدمة تمنع تراكم الغبار والرمال. كما نراعي سهولة العناية والتنظيف مع الحفاظ على المظهر المهني في ظروف الاستخدام القاسية."
      },
      {
        question: "ما هي معايير اختيار اليونيفورم المناسب لشركات الطيران؟",
        answer: "اختيار اليونيفورم المناسب لشركات الطيران يعتمد على عدة معايير أهمها: الالتزام بمعايير الهيئة العامة للطيران المدني السعودية (GACA)، استخدام أقمشة مقاومة للحريق وفق معيار EN ISO 14116، عوامل الراحة خلال الرحلات الطويلة، سهولة الحركة، المظهر المهني الذي يعكس هوية الشركة، والالتزام بالضوابط الشرعية للزي خاصة للموظفات. يونيوم تضمن تلبية كافة هذه المعايير مع التركيز على الجودة والأناقة."
      },
      {
        question: "كيف تضمنون توافق يونيفورم الطيران مع معايير الهيئة العامة للطيران المدني السعودية؟",
        answer: "نضمن توافق يونيفورم الطيران مع معايير GACA من خلال عدة إجراءات: استخدام أقمشة معتمدة ومختبرة تلبي متطلبات السلامة والمتانة، تصميم أزياء تحترم التراتبية الوظيفية وتميز بين الرتب المختلفة بوضوح، التأكد من مطابقة جميع البطاقات التعريفية والشارات لمعايير الأمن في المطارات الدولية، وإجراء مراجعات دورية للتصاميم مع خبراء الطيران والسلامة المهنية. نحصل على شهادات توافق رسمية من الهيئة ونحتفظ بها لكافة منتجاتنا."
      },
      {
        question: "ما هي أنواع الأقمشة المستخدمة في يونيفورم الطيران؟",
        answer: "نستخدم مجموعة متنوعة من الأقمشة عالية الجودة والمعتمدة عالميًا في يونيفورم الطيران، منها: أقمشة مقاومة للحريق معتمدة وفق معيار EN ISO 14116، أقمشة كومفورت فلكس المريحة للرحلات الطويلة مع خاصية المرونة بنسبة 15%، أقمشة كول كور المعالجة بتقنية تنظيم درجة الحرارة للعمل في بيئات مختلفة، أقمشة ديورا سيل المقاومة للبقع والسوائل لسهولة التنظيف، وأقمشة بيوكير المضادة للبكتيريا. جميع أقمشتنا حاصلة على شهادة OEKO-TEX® للسلامة من المواد الضارة."
      },
      {
        question: "كيف تميزون بين رتب الطاقم في يونيفورم الطيران؟",
        answer: "نعتمد نظامًا دقيقًا للتمييز بين رتب الطاقم وفق معايير GACA والمعايير الدولية لـ IATA من خلال: الشرائط على الأكمام للطيارين (4 شرائط للكابتن، 3 للمساعد الأول، 2 لمساعد الطيار)، ألوان وتصاميم مختلفة لطاقم الضيافة حسب المستوى الوظيفي، شارات وبطاقات تعريفية مميزة للإداريين والفنيين، وأنماط مختلفة من الياقات والأزرار تعكس المستوى الوظيفي. بالإضافة إلى ألوان مميزة للأقسام المختلفة مثل العمليات الأرضية والصيانة والضيافة."
      },
      {
        question: "هل توفرون خدمات تخصيص اليونيفورم حسب هوية شركة الطيران؟",
        answer: "نعم، نقدم خدمات تخصيص شاملة ليونيفورم الطيران وفق هوية شركتك التجارية، وتشمل: دمج الألوان الرسمية للشركة في التصاميم، تطبيق الشعارات والعلامات التجارية بتقنيات عالية الجودة تضمن الثبات، تصميم قطع حصرية تعكس قيم وثقافة الشركة، إضافة لمسات من التراث السعودي أو الخليجي حسب الطلب، وتخصيص الإكسسوارات مثل ربطات العنق والأوشحة والقبعات. نقدم أيضًا خدمة التخصيص وفق المناسبات الموسمية واليوم الوطني."
      },
      {
        question: "ما هي مدة تنفيذ طلبات يونيفورم الطيران للشركات الكبيرة؟",
        answer: "تعتمد مدة تنفيذ طلبات يونيفورم الطيران للشركات الكبيرة على حجم الطلب ودرجة التخصيص، لكن بشكل عام: 4-6 أسابيع لمرحلة التصميم والموافقة على النماذج الأولية، 8-12 أسبوع لإنتاج الطلبات الكبيرة (500+ موظف)، 2-3 أسابيع للتوزيع والتسليم. نوفر خيار الإنتاج السريع للطلبات العاجلة مع إمكانية تقليص المدة إلى النصف. تتميز يونيوم بالالتزام الدقيق بمواعيد التسليم وفق خطة زمنية متفق عليها مسبقًا مع العميل."
      },
      {
        question: "كيف تضمنون الالتزام بالضوابط الشرعية في يونيفورم مضيفات الطيران؟",
        answer: "نضمن الالتزام بالضوابط الشرعية في يونيفورم مضيفات الطيران السعوديات والخليجيات من خلال: تصميم أزياء محتشمة وفضفاضة تغطي الجسم بشكل كامل، استخدام طبقات متعددة للأزياء لضمان عدم الشفافية، توفير غطاء رأس أنيق ومريح متوافق مع متطلبات العمل، اختيار أقمشة سميكة بدرجة كافية مع الحفاظ على الراحة، والتشاور المستمر مع لجان متخصصة لضمان التوافق مع الضوابط الشرعية. نقدم أيضًا خيارات متنوعة من التصاميم التي تجمع بين المتطلبات المهنية والالتزام الديني."
      },
      {
        question: "هل توفرون برامج لإدارة وصيانة يونيفورم الطيران على المدى الطويل؟",
        answer: "نعم، نوفر برامج متكاملة لإدارة وصيانة يونيفورم الطيران على المدى الطويل تشمل: نظام تتبع إلكتروني لدورة حياة كل قطعة يونيفورم، خدمات غسيل واستبدال دورية، برنامج صيانة وقائية للحفاظ على جودة اليونيفورم، خدمة استبدال القطع التالفة خلال 48 ساعة، تقارير دورية عن حالة اليونيفورم واستهلاكه. يمكن تخصيص هذه البرامج حسب احتياجات كل شركة طيران لضمان استدامة المظهر المهني والتوفير في التكاليف التشغيلية على المدى الطويل."
      },
      {
        question: "ما هي الإجراءات اللازمة للحصول على اعتماد GACA والمنظمات الدولية ليونيفورم الطيران؟",
        answer: "للحصول على اعتماد GACA والمنظمات الدولية ليونيفورم الطيران، نتبع عدة إجراءات دقيقة: تقديم عينات من الأقمشة المستخدمة للفحص المخبري، إجراء اختبارات مقاومة الحريق والتآكل ومتانة الألوان، تقديم توثيق كامل لمواصفات المنتجات وشهادات المواد الأولية، الحصول على موافقة لجنة الصحة والسلامة المهنية، إجراء اختبارات ميدانية في ظروف مشابهة لبيئة العمل الحقيقية، والتأكد من مطابقة التصاميم لمتطلبات الأمن في المطارات الدولية. نتعاون مع العميل خلال كافة هذه المراحل للتأكد من استيفاء جميع المتطلبات."
      },
      {
        question: "كيف يمكن لشركات الطيران تقليل تكاليف اليونيفورم مع الحفاظ على الجودة؟",
        answer: "يمكن لشركات الطيران تقليل تكاليف اليونيفورم مع الحفاظ على الجودة من خلال: التعاقد على برامج طويلة الأمد تضمن أسعارًا تفضيلية، اختيار أقمشة متينة تدوم لفترات أطول، اعتماد نظام إدارة يونيفورم ذكي يتتبع الاستهلاك ويقلل الهدر، توحيد بعض أجزاء اليونيفورم بين الأقسام المختلفة مع تمييزها بشارات أو إكسسوارات، واستخدام تقنيات متطورة لتنظيف وصيانة اليونيفورم. يونيوم تقدم استشارات متخصصة لتحليل التكاليف وتقديم حلول موفرة مالياً على المدى الطويل."
      }
    ],
    
    // قسم المحتوى ذو الصلة مع تحسين الروابط الداخلية
    relatedContent: {
      title: "موارد وأدلة يونيفورم الطيران",
      blogPosts: [
        {
          title: "التطور في تصميم أزياء الطيران الخليجية: توازن بين الهوية المحلية والمعايير العالمية",
          excerpt: "نظرة على كيفية تطور يونيفورم شركات الطيران السعودية والخليجية لتجمع بين الهوية الإسلامية والمعايير العالمية مع الحفاظ على التميز والتفرد.",
          url: "/ar/blog/gulf-airline-uniform-trends",
          image: "/images/industries/aviation.jpg"
        },
        {
          title: "تأثير يونيفورم الطاقم على ثقة المسافرين وولائهم للعلامة التجارية",
          excerpt: "دراسة بحثية توضح العلاقة بين جودة وتصميم يونيفورم طاقم الطائرة وانطباعات المسافرين عن مستوى الخدمة والأمان في شركات الطيران السعودية.",
          url: "/ar/blog/uniforms-airline-brand-perception",
          image: "/images/industries/aviation.jpg"
        },
        {
          title: "دليل تصميم وتنفيذ اليونيفورم المحتشم لموظفات الطيران السعوديات",
          excerpt: "أفضل الممارسات العالمية في تصميم وتنفيذ أزياء محتشمة عملية لمضيفات الطيران وموظفات المطارات تجمع بين الالتزام الديني والكفاءة المهنية.",
          url: "/ar/blog/modest-aviation-uniforms-guide",
          image: "/images/industries/aviation.jpg"
        },
        {
          title: "معايير الهيئة العامة للطيران المدني السعودية لأزياء الطاقم الجوي والأرضي",
          excerpt: "شرح مفصل لمتطلبات ومعايير GACA فيما يخص يونيفورم شركات الطيران العاملة في المملكة، وكيفية الالتزام بها مع الحفاظ على التميز في التصميم.",
          url: "/ar/blog/gaca-uniform-standards",
          image: "/images/industries/aviation.jpg"
        }
      ],
      resources: [
        {
          title: "دليل الخامات المتطورة ليونيفورم الطيران",
          description: "المواصفات التقنية المفصلة للأقمشة المستخدمة في أزياء الطيران ومميزاتها وخصائصها",
          url: "/ar/resources/fabric-guide/aviation",
          icon: "/icons/fabric-guide.svg"
        },
        {
          title: "جدول المقاسات المفصل ليونيفورم الطيران",
          description: "دليل قياسات مفصل لجميع فئات يونيفورم الطيران مصمم خصيصاً للقياسات العربية",
          url: "/ar/resources/size-guide/aviation",
          icon: "/icons/size-guide.svg"
        },
        {
          title: "دليل إدارة برنامج اليونيفورم لشركات الطيران",
          description: "إرشادات شاملة لتطبيق وإدارة برامج الزي الموحد في شركات الطيران السعودية",
          url: "/ar/resources/program-guide/aviation",
          icon: "/icons/program-guide.svg"
        },
        {
          title: "قائمة تحقق الامتثال لمعايير GACA",
          description: "قائمة مرجعية للتأكد من امتثال يونيفورم الطيران لمتطلبات الهيئة العامة للطيران المدني",
          url: "/ar/resources/gaca-compliance-checklist",
          icon: "/icons/program-guide.svg"
        }
      ]
    },
    
    // قسم دعوة للتواصل محسن
    cta: {
      title: "ارفع مستوى صورة شركة الطيران الخاصة بك مع يونيفورم احترافي متميز",
      description: "تواصل مع خبراء يونيفورم الطيران لدينا اليوم للحصول على استشارة مجانية مخصصة تلبي احتياجات شركتك وتعزز هويتها البصرية. نقدم حلولاً متكاملة تجمع بين الجودة العالمية والتوافق مع المعايير السعودية.",
      buttonText: "احصل على استشارة مجانية",
      buttonUrl: "/ar/contact?industry=aviation&source=aviation-page",
      secondaryButton: {
        text: "تحميل دليل يونيفورم الطيران",
        url: "/ar/resources/aviation-uniform-guide-download"
      }
    },
    
    // قسم ميزات جديد مع أيقونات
    features: [
      {
        title: "خدمة متكاملة من التصميم إلى التسليم",
        description: "نقدم خدمة شاملة تبدأ من التصميم المخصص وتنتهي بتسليم اليونيفورم لجميع الموظفين مع متابعة مستمرة",
        icon: "/icons/comfortflex.svg"
      },
      {
        title: "نظام إدارة المخزون والاستبدال",
        description: "برنامج متطور لإدارة مخزون اليونيفورم وعمليات الاستبدال الدورية بكفاءة عالية",
        icon: "/icons/biocare.svg"
      },
      {
        title: "صناعة محلية بمعايير عالمية",
        description: "نضمن صناعة محلية عالية الجودة مع الالتزام بالمعايير العالمية والمواصفات الفنية الدقيقة",
        icon: "/icons/coolcore.svg"
      },
      {
        title: "دعم على مدار الساعة لعملاء الطيران",
        description: "فريق دعم متخصص متاح 24/7 لتلبية احتياجات عملاء قطاع الطيران دون تأخير",
        icon: "/icons/duraseal.svg"
      }
    ]
  };
  
  return (
    <>
      {/* قسم الهيرو المحسن */}
      <section className="relative bg-blue-900 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90 z-10"></div>
          <Image
            src="/images/industries/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg"
            alt="فريق طيران محترف بيونيفورم معتمد من GACA"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-pattern opacity-10 z-20"></div>
        </div>
        
        <Container>
          <div className="relative z-30 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              يونيفورم طيران احترافي متوافق مع معايير GACA
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              حلول متكاملة لأزياء شركات الطيران السعودية والخليجية تجمع بين الامتثال للمعايير التنظيمية وتعزيز الهوية المؤسسية مع احترام القيم الإسلامية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ar/contact?industry=aviation&source=aviation-hero"
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors shadow-lg"
              >
                احصل على استشارة مجانية
              </Link>
              <Link 
                href="/ar/shop/aviation-uniforms?source=aviation-hero"
                className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                تصفح منتجات الطيران
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-blue-100 text-sm">توافق مع GACA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">15+</p>
                <p className="text-blue-100 text-sm">عام من الخبرة</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">30+</p>
                <p className="text-blue-100 text-sm">شركة طيران</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/20">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">99%</p>
                <p className="text-blue-100 text-sm">رضا العملاء</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم المقدمة */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading centered={true}>
              الشريك الموثوق لأزياء الطيران في المملكة
            </SectionHeading>
            
            <div className="space-y-4 mt-6 text-gray-700">
              {aviationIndustryData.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg">{paragraph}</p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  الامتثال للمعايير التنظيمية
                </h3>
                <p className="text-gray-700">
                  نضمن توافق جميع أزياء الطيران مع معايير الهيئة العامة للطيران المدني السعودية (GACA) والمنظمة الدولية للطيران المدني (ICAO) من خلال استخدام أقمشة معتمدة وتصاميم تلبي متطلبات السلامة.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  تخصيص حسب هوية العلامة التجارية
                </h3>
                <p className="text-gray-700">
                  نقدم خدمات تخصيص شاملة لتطوير أزياء تعكس هوية شركة الطيران بشكل فريد، مع دمج الألوان الرسمية والشعارات والعناصر التصميمية المميزة التي تعزز صورة العلامة التجارية لدى العملاء.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* الأقسام الموجودة مسبقاً */}
      {/* قسم جديد - معايير هيئة الطيران المدني السعودية GACA */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered={true}>
            معايير الهيئة العامة للطيران المدني لليونيفورم المهني
          </SectionHeading>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">متطلبات السلامة والمواد</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>أقمشة مقاومة للحريق تلبي معيار <span className="font-semibold">EN ISO 14116</span></span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>مقاومة للسوائل والبقع لسهولة التنظيف والحفاظ على المظهر المهني</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>خامات خالية من المواد المسببة للحساسية وفق معايير <span className="font-semibold">OEKO-TEX®</span></span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>قدرة عالية على التنفس والتحكم في الحرارة لراحة خلال ساعات العمل الطويلة</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/ar/resources/gaca-fabric-standards" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  تحميل المعايير الكاملة للمواد والأقمشة
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تمييز الرتب والأدوار الوظيفية</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>أنظمة شارات وشعارات موحدة لتمييز المراتب الإدارية والفنية</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>ألوان مميزة للتمييز بين الأقسام المختلفة: الضيافة، العمليات، الصيانة</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>نظام متدرج لرتب الطيارين وطاقم الضيافة وفق معايير <span className="font-semibold">IATA</span></span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>علامات تعريفية متوافقة مع متطلبات الأمن في المطارات الدولية</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/ar/resources/aviation-ranks-guide" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  دليل رموز وأنظمة الرتب والتمييز
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:ml-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">معتمد من الهيئة العامة للطيران المدني السعودية</h3>
                <p className="text-gray-700 mb-4">
                  تفخر يونيوم بتوفير يونيفورم طيران يلبي جميع معايير واشتراطات الهيئة العامة للطيران المدني (GACA) السعودية، ويتوافق مع المعايير العالمية مثل IATA وIAOSA. نعمل مع استشاريين متخصصين لضمان تحديث تصاميمنا باستمرار لتتماشى مع أحدث متطلبات الهيئات التنظيمية.
                </p>
                <Link href="/ar/certifications/gaca-compliance" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  شهادات الاعتماد والجودة
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative h-60 md:h-64 w-full">
                <Image
                  src="/images/industries/aviation-certification.jpg"
                  alt="شهادة اعتماد الهيئة العامة للطيران المدني السعودية GACA"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم جديد - تصنيف يونيفورم الطيران حسب الرتب والأقسام */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered={true}>
            نظام تراتبية أزياء الطيران حسب المستويات الوظيفية
          </SectionHeading>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            توفر يونيوم نظاماً متكاملاً ليونيفورم الطيران يلبي احتياجات جميع المستويات الوظيفية مع التمييز الواضح للرتب والأدوار، وفق معايير الهيئة العامة للطيران المدني والتصنيفات العالمية المعتمدة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="/images/products/airline-uniform.jpg" 
                  alt="يونيفورم طياري الخطوط الجوية السعودية وشركات الطيران الخليجية" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-900 text-white py-1 px-3 text-sm font-medium">
                  الفئة العليا
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">يونيفورم الطيارين وكبار الضباط</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>كابتن الطائرة (4 شرائط)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>الطيار الأول (3 شرائط)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مساعد الطيار (2 شريطة)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>كبير المضيفين (2 شريطة ونجمة)</span>
                  </li>
                </ul>
                <Link href="/ar/shop/aviation-uniforms/pilots-uniform" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  عرض تفاصيل الزي والمواصفات
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="/images/products/airline-uniform.jpg" 
                  alt="يونيفورم طاقم الضيافة في شركات الطيران السعودية والخليجية" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-700 text-white py-1 px-3 text-sm font-medium">
                  الفئة الأساسية
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">يونيفورم طاقم الضيافة الجوية</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مشرف طاقم الضيافة (1 شريطة ونجمتين)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مضيف جوي أول (1 شريطة ونجمة)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مضيف جوي (1 شريطة)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مضيف جوي متدرب (بدون شرائط)</span>
                  </li>
                </ul>
                <Link href="/ar/shop/aviation-uniforms/cabin-crew-uniform" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  عرض تفاصيل الزي والمواصفات
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 relative">
                <Image 
                  src="/images/products/industrial-coverall.jpg" 
                  alt="يونيفورم طاقم العمليات الأرضية والفنيين في المطارات السعودية" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 text-sm font-medium">
                  الفئة التشغيلية
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">يونيفورم العمليات الأرضية والفنيين</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مشرف العمليات الأرضية (ياقة زرقاء)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>كبير الفنيين (ياقة حمراء)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>فني صيانة الطائرات (ياقة خضراء)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>مناول أمتعة (سترة عاكسة برتقالية)</span>
                  </li>
                </ul>
                <Link href="/ar/shop/aviation-uniforms/ground-staff-uniform" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  عرض تفاصيل الزي والمواصفات
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم احصائيات صناعة الطيران في المملكة */}
      <section className="py-16 bg-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">يونيفورم الطيران السعودي بالأرقام</h2>
            <p className="text-lg text-gray-700">
              نفخر بكوننا المزود الرئيسي لأزياء قطاع الطيران في المملكة العربية السعودية، بتصاميم موثوقة وشراكات استراتيجية مع أبرز شركات الطيران الوطنية والإقليمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="block text-4xl font-bold text-blue-900 mb-2">15+</span>
              <span className="block text-gray-600 font-medium">شركات طيران سعودية وخليجية</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="block text-4xl font-bold text-blue-900 mb-2">20,000+</span>
              <span className="block text-gray-600 font-medium">موظف يرتدون يونيفورم يونيوم</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="block text-4xl font-bold text-blue-900 mb-2">100%</span>
              <span className="block text-gray-600 font-medium">توافق مع معايير GACA</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="block text-4xl font-bold text-blue-900 mb-2">40+</span>
              <span className="block text-gray-600 font-medium">وجهة دولية تمثلها أزياؤنا</span>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم الشهادات المعزز - التصميمات لأبرز شركات الطيران */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered={true}>
            شهادات عملائنا من قطاع الطيران
          </SectionHeading>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            نفخر بثقة أبرز شركات الطيران السعودية والخليجية في يونيفورم الطيران المقدم من يونيوم، والذي يجمع بين الالتزام بالمعايير العالمية والهوية الإسلامية الأصيلة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow relative">
              <div className="absolute top-4 right-4 text-5xl text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="mb-8 pt-6">
                <p className="text-gray-800 relative z-10">
                  "قامت يونيوم بتطوير وتنفيذ برنامج متكامل ليونيفورم الطيران لشركتنا، متوافق بشكل كامل مع معايير الهيئة العامة للطيران المدني السعودية، مع مراعاة الهوية الوطنية والإسلامية. الأقمشة عالية الجودة والراحة الفائقة للطواقم خلال الرحلات الطويلة كانت محل إشادة من جميع الموظفين."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative ml-4">
                  <Image 
                    src="/images/testimonials/captain-avatar.jpg" 
                    alt="صورة كابتن فهد القحطاني"
                    fill
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">كابتن فهد القحطاني</p>
                  <p className="text-blue-600 text-sm">مدير العمليات التشغيلية - طيران السماء السعودي</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow relative">
              <div className="absolute top-4 right-4 text-5xl text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="mb-8 pt-6">
                <p className="text-gray-800 relative z-10">
                  "التصاميم المحتشمة التي طورتها يونيوم لمضيفات الطيران لدينا لاقت استحساناً كبيراً من الموظفات والمسافرين على حد سواء. الأزياء تعكس هويتنا الإسلامية مع تلبية المتطلبات العملية للرحلات الجوية. جودة الأقمشة استثنائية، والخدمة المقدمة كانت احترافية طوال فترة المشروع."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative ml-4">
                  <Image 
                    src="/images/testimonials/female-manager-avatar.jpg" 
                    alt="صورة سارة العتيبي"
                    fill
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">سارة العتيبي</p>
                  <p className="text-blue-600 text-sm">مديرة خدمات المقصورة - الخطوط الجوية الخليجية</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow relative">
              <div className="absolute top-4 right-4 text-5xl text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="mb-8 pt-6">
                <p className="text-gray-800 relative z-10">
                  "نظام إدارة اليونيفورم الذي قدمته يونيوم خفض تكاليفنا التشغيلية بنسبة 25% وقدم حلاً متكاملاً سهل الإدارة مع الاهتمام بأدق التفاصيل. استطاعوا توحيد مظهر موظفينا في 18 مطاراً دولياً مع المحافظة على هويتنا السعودية وتلبية معايير الجودة العالمية والمتطلبات التنظيمية."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative ml-4">
                  <Image 
                    src="/images/testimonials/executive-avatar.jpg" 
                    alt="صورة م. عبدالعزيز الشمري"
                    fill
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">م. عبدالعزيز الشمري</p>
                  <p className="text-blue-600 text-sm">نائب الرئيس للموارد البشرية - شركة طيران السعودية الدولية</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/ar/testimonials/aviation-sector" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              عرض المزيد من شهادات عملائنا في قطاع الطيران
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم دعوة للتواصل معزز */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 to-blue-700/90"></div>
          <Image 
            src="/images/industries/aviation.jpg" 
            alt="يونيفورم شركات الطيران السعودية والخليجية المتوافق مع معايير GACA"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
        </div>
        <Container>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ارفع مستوى يونيفورم شركة الطيران الخاصة بك مع حلول يونيوم المتكاملة</h2>
              <p className="text-blue-100 text-lg">
                أزياء طيران احترافية متوافقة مع معايير الهيئة العامة للطيران المدني السعودية (GACA) ومخصصة لتعزيز هوية علامتك التجارية، مع برامج إدارة متكاملة تضمن الاستدامة وخفض التكاليف التشغيلية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/20 hover:bg-white/15 transition duration-300">
                <div className="mb-4 bg-white/10 p-3 rounded-full inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">برنامج إدارة يونيفورم الطيران الشامل</h3>
                <p className="text-blue-100 mb-6">برنامج متكامل لإدارة يونيفورم شركات الطيران يشمل التخطيط، التصميم، التنفيذ، التوزيع، وإدارة دورة حياة اليونيفورم بشكل كامل، مما يخفف العبء الإداري ويضمن الامتثال المستمر لمعايير GACA.</p>
                <Link 
                  href="/ar/services/aviation-uniform-program?source=aviation-page"
                  className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                >
                  تعرف على برنامج إدارة يونيفورم الطيران
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-white/20 hover:bg-white/15 transition duration-300">
                <div className="mb-4 bg-white/10 p-3 rounded-full inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">تصميم مخصص للهوية البصرية</h3>
                <p className="text-blue-100 mb-6">خدمات تصميم احترافية لتطوير يونيفورم طيران يعكس هوية شركتك بشكل متميز، مع الالتزام الكامل بمعايير GACA ومتطلبات السلامة المهنية المعتمدة من الهيئات التنظيمية العالمية للطيران المدني.</p>
                <Link 
                  href="/ar/services/aviation-uniform-design?source=aviation-page"
                  className="inline-flex items-center text-white font-medium hover:text-blue-200 transition-colors"
                >
                  استكشف خدمات تصميم أزياء الطيران
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
              <Link href="/ar/contact?industry=aviation&source=aviation-page" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-medium rounded-md shadow-sm hover:bg-blue-50 transition-colors w-full md:w-auto">
                احصل على استشارة مجانية
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link href="/ar/resources/aviation-uniform-guide" className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors w-full md:w-auto">
                تحميل دليل يونيفورم الطيران المجاني
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* عرض المنتجات */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered={true}>
              يونيفورم وتجهيزات طيران متخصصة
            </SectionHeading>
            <p className="text-gray-700 mt-4">
              مجموعة شاملة من يونيفورم الطيران المتوافق مع معايير GACA والمصمم خصيصًا للبيئة السعودية والخليجية، مع مراعاة الهوية الإسلامية والاحتياجات المهنية لكافة المستويات الوظيفية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aviationIndustryData.products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
                  
                  <ul className="mb-4 space-y-2">
                    {product.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="mr-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-lg font-bold text-blue-900">
                      {product.id === 'aviation-blazer' ? '٥٩٩ ر.س' : 
                       product.id === 'crew-shirts' ? '٢٩٩ ر.س' : 
                       product.id === 'modest-cabin-crew' ? '٨٩٩ ر.س' : 
                       product.id === 'ground-operations' ? '٤٩٩ ر.س' : 
                       product.id === 'maintenance-technician' ? '٦٩٩ ر.س' : 
                       product.id === 'crew-luggage' ? '٤٤٩ ر.س' : 'السعر عند الطلب'}
                    </span>
                    <Link 
                      href={product.href} 
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {product.id === 'aviation-blazer' || product.id === 'ground-operations' || product.id === 'crew-luggage' ? 'اطلب الآن' : 
                       product.id === 'crew-shirts' ? 'تسوق الآن' : 
                       product.id === 'modest-cabin-crew' ? 'استكشف الخيارات' : 
                       product.id === 'maintenance-technician' ? 'تفاصيل المنتج' : 'اطلب الآن'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/ar/shop/aviation-uniforms?source=aviation-page" className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 font-medium rounded-md transition-colors">
              تصفح كافة منتجات يونيفورم الطيران
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم المزايا */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered={true}>
              مزايا يونيفورم الطيران من يونيوم
            </SectionHeading>
            <p className="text-gray-700 mt-4">
              نقدم تجربة متكاملة تضمن الجودة والراحة والامتثال للمعايير المحلية والدولية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aviationIndustryData.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-700 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:ml-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">تجربة شاملة لمنظومة يونيفورم الطيران</h3>
                <p className="text-gray-700 mb-4">
                  نوفر لشركات الطيران السعودية والخليجية تجربة متكاملة تبدأ من التصميم والتصنيع وصولاً إلى التوريد والدعم المستمر، مع أنظمة متطورة لإدارة يونيفورم الطيران على المدى الطويل.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">تصميم يونيفورم مخصص يعكس هوية العلامة التجارية</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">شهادات اعتماد من الهيئة العامة للطيران المدني (GACA)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">أنظمة إدارة مخزون متطورة وخدمات توريد سريعة</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">خبراء في تصميم وإنتاج الأزياء المحتشمة المتوافقة مع الشريعة</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/industries/aviation.jpg"
                    alt="منظومة يونيفورم الطيران المتكاملة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 
