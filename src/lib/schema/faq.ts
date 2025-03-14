/**
 * Schema.org FAQ Page markup
 * Optimized for better search visibility and rich results
 * @param faqs Array of questions and answers
 * @returns FAQPage schema object
 */
export function getFAQSchema(faqs: Array<{
  question: string;
  answer: string;
  category?: string;
  locale?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      },
      ...(faq.category && { about: { '@type': 'Thing', name: faq.category } })
    }))
  };
}

/**
 * Generate FAQ section schema for industry-specific pages
 * This helps with rich results for industry-specific questions
 * @param industry Industry name
 * @param locale Language code
 * @returns FAQ schema optimized for the specific industry
 */
export function getIndustryFAQSchema(industry: string, locale: string = 'en') {
  const isArabic = locale === 'ar';
  
  // Common questions mapped by industry
  const industryFAQs: {[key: string]: Array<{question: string; answer: string}>} = {
    healthcare: [
      {
        question: isArabic 
          ? 'ما هي أنواع الأقمشة المستخدمة في الملابس الطبية من يونيوم؟'
          : 'What types of fabrics are used in UNEOM medical scrubs?',
        answer: isArabic
          ? 'تستخدم ملابسنا الطبية مزيجًا من البوليستر والقطن المعالج بمضادات الميكروبات، ومصممة خصيصًا لمناخ المملكة العربية السعودية، وتوفر الراحة والمتانة ومقاومة البقع.'
          : 'Our medical scrubs use antimicrobial-treated polyester-cotton blends specifically designed for Saudi Arabia\'s climate, providing comfort, durability, and stain resistance.'
      },
      {
        question: isArabic
          ? 'هل تقدم يونيوم ملابس طبية متوافقة مع احتياجات المرأة المسلمة؟'
          : 'Does UNEOM offer medical uniforms compatible with Muslim women\'s needs?',
        answer: isArabic
          ? 'نعم، نقدم مجموعة كاملة من الملابس الطبية المتوافقة مع الشريعة الإسلامية، بما في ذلك خيارات الحجاب الطبي والأكمام الطويلة والتصاميم المحتشمة التي تلبي المتطلبات الدينية والثقافية مع الحفاظ على المعايير المهنية.'
          : 'Yes, we offer a full range of Sharia-compliant medical wear, including medical hijab options, long sleeves, and modest designs that meet religious and cultural requirements while maintaining professional standards.'
      }
    ],
    aviation: [
      {
        question: isArabic
          ? 'كيف تضمن يونيوم مطابقة أزياء الطيران للمعايير الدولية؟'
          : 'How does UNEOM ensure aviation uniforms meet international standards?',
        answer: isArabic
          ? 'تلتزم جميع أزياء الطيران لدينا بمعايير IATA ومتطلبات شركات الطيران العالمية. نستخدم أقمشة مقاومة للحريق ومريحة تلبي معايير السلامة مع التركيز على الأناقة والراحة طوال الرحلات الطويلة.'
          : 'All our aviation uniforms comply with IATA standards and global airline requirements. We use flame-resistant, comfortable fabrics that meet safety standards while focusing on elegance and comfort during long flights.'
      },
      {
        question: isArabic
          ? 'هل يمكن تخصيص أزياء الطيران بألوان وشعارات الشركة؟'
          : 'Can aviation uniforms be customized with company colors and logos?',
        answer: isArabic
          ? 'نعم، نقدم خدمات تخصيص كاملة لأزياء الطيران، بما في ذلك دمج ألوان العلامة التجارية للشركة، والشعارات المطرزة، والتصميمات الحصرية التي تعكس هوية شركة الطيران الفريدة.'
          : 'Yes, we offer full customization services for aviation uniforms, including incorporation of company brand colors, embroidered logos, and exclusive designs that reflect the airline\'s unique identity.'
      }
    ],
    hospitality: [
      {
        question: isArabic
          ? 'ما الذي يميز أزياء الضيافة من يونيوم؟'
          : 'What sets UNEOM hospitality uniforms apart?',
        answer: isArabic
          ? 'تتميز أزياء الضيافة لدينا بتصميمات أنيقة تجمع بين التأثيرات العربية التقليدية واتجاهات الموضة العالمية. نستخدم أقمشة فاخرة مريحة ومقاومة للتجاعيد مصممة خصيصًا للعمل الطويل في بيئات الفنادق والمطاعم.'
          : 'Our hospitality uniforms feature elegant designs that blend traditional Arabian influences with global fashion trends. We use premium fabrics that are comfortable and wrinkle-resistant, specially designed for long shifts in hotel and restaurant environments.'
      }
    ],
    corporate: [
      {
        question: isArabic
          ? 'كيف يمكن للزي الموحد تعزيز هوية العلامة التجارية للشركة؟'
          : 'How can uniforms enhance a company\'s brand identity?',
        answer: isArabic
          ? 'تلعب الأزياء الموحدة دورًا حاسمًا في تعزيز التعرف على العلامة التجارية وتوحيد فريقك. تقوم يونيوم بدمج ألوان وشعارات وقيم علامتك التجارية في تصميمات أنيقة تعزز الهوية المؤسسية وتخلق انطباعًا مهنيًا متناسقًا.'
          : 'Uniforms play a crucial role in enhancing brand recognition and unifying your team. UNEOM incorporates your brand colors, logos, and values into elegant designs that reinforce corporate identity and create a cohesive professional impression.'
      }
    ],
    education: [
      {
        question: isArabic
          ? 'ما هي مميزات الزي المدرسي من يونيوم؟'
          : 'What are the advantages of UNEOM school uniforms?',
        answer: isArabic
          ? 'توفر أزياء المدارس لدينا مزيجًا مثاليًا من المتانة والراحة والسهولة في العناية، وهي مصممة خصيصًا لمناخ المملكة العربية السعودية. نستخدم أقمشة عالية الجودة تدوم طوال العام الدراسي وتحافظ على مظهرها بعد الغسيل المتكرر.'
          : 'Our school uniforms provide the perfect blend of durability, comfort, and ease of care, designed specifically for Saudi Arabia\'s climate. We use high-quality fabrics that last throughout the school year and maintain their appearance after repeated washing.'
      }
    ],
    manufacturing: [
      {
        question: isArabic
          ? 'كيف تضمن يونيوم سلامة ملابس العمل الصناعية؟'
          : 'How does UNEOM ensure the safety of industrial workwear?',
        answer: isArabic
          ? 'تخضع جميع ملابس العمل الصناعية لدينا لاختبارات صارمة وتتوافق مع معايير السلامة الدولية مثل OSHA وANSI. نستخدم أقمشة مقاومة للحرارة واللهب والمواد الكيميائية والتمزق، مع التركيز على الراحة والمتانة في البيئات الصناعية القاسية.'
          : 'All our industrial workwear undergoes rigorous testing and complies with international safety standards such as OSHA and ANSI. We use fabrics that are resistant to heat, flame, chemicals, and tears, while focusing on comfort and durability in harsh industrial environments.'
      }
    ],
    security: [
      {
        question: isArabic
          ? 'ما الذي يميز أزياء الأمن من يونيوم؟'
          : 'What distinguishes UNEOM security uniforms?',
        answer: isArabic
          ? 'تتميز أزياء الأمن لدينا بمظهر احترافي ورسمي يلهم الثقة والاحترام. مصممة باستخدام أقمشة متينة مقاومة للتجاعيد وسهلة الحركة، وتشمل ميزات عملية مثل الجيوب متعددة الأغراض وأنظمة تعليق للمعدات.'
          : 'Our security uniforms feature a professional, authoritative appearance that inspires confidence and respect. They\'re designed with durable, wrinkle-resistant fabrics that allow ease of movement, including practical features like multi-purpose pockets and equipment suspension systems.'
      }
    ]
  };
  
  // Get industry-specific FAQs or fallback to default FAQs
  const faqs = industryFAQs[industry] || [
    {
      question: isArabic
        ? 'لماذا تختار يونيوم لتوريد الزي الموحد لشركتك؟'
        : 'Why choose UNEOM for your company\'s uniform supply?',
      answer: isArabic
        ? 'تقدم يونيوم حلول أزياء موحدة متكاملة مصممة خصيصًا لاحتياجات السوق السعودي. نحن نوفر أقمشة عالية الجودة وتصميمات أنيقة وخدمات شاملة من القياس إلى التسليم، مع التركيز على خدمة العملاء الاستثنائية.'
        : 'UNEOM offers integrated uniform solutions tailored specifically for the Saudi market\'s needs. We provide high-quality fabrics, elegant designs, and comprehensive services from measurement to delivery, with a focus on exceptional customer service.'
    },
    {
      question: isArabic 
        ? 'ما هي مدة تسليم الطلبات الكبيرة من الأزياء الموحدة؟'
        : 'What is the delivery timeframe for large uniform orders?',
      answer: isArabic
        ? 'تعتمد مواعيد التسليم على حجم الطلب ومتطلبات التخصيص. عمومًا، يمكننا تسليم الطلبات الكبيرة القياسية في غضون 3-4 أسابيع، بينما قد تستغرق الطلبات المخصصة بالكامل من 5-6 أسابيع. نقدم أيضًا خيارات تسليم مستعجلة عند الحاجة.'
        : 'Delivery timeframes depend on order size and customization requirements. Generally, we can deliver standard large orders within 3-4 weeks, while fully customized orders may take 5-6 weeks. We also offer expedited delivery options when needed.'
    }
  ];
  
  // Add industry as category to each FAQ
  const faqsWithCategory = faqs.map(faq => ({
    ...faq,
    category: industry,
    locale
  }));
  
  return getFAQSchema(faqsWithCategory);
}

export default {
  getFAQSchema,
  getIndustryFAQSchema
}; 