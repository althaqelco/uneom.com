/**
 * AI Content Optimizer - December 2025 & 2026 Standards
 * 
 * This utility provides:
 * - Content optimization for AI search engines (Google SGE, Bing Copilot)
 * - Voice search and conversational AI optimization
 * - FAQ generation for featured snippets
 * - Semantic content structuring
 * - Readability enhancement
 * - Multilingual content optimization (EN/AR)
 */

// Types
export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'faq' | 'quote' | 'cta' | 'image' | 'video';
  content: string;
  contentAr?: string;
  metadata?: Record<string, any>;
}

export interface FAQItem {
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  keywords?: string[];
}

export interface OptimizedContent {
  title: string;
  titleAr?: string;
  metaDescription: string;
  metaDescriptionAr?: string;
  keywords: string[];
  keywordsAr?: string[];
  mainContent: ContentBlock[];
  faqs: FAQItem[];
  relatedTopics: string[];
  readingTime: number;
  wordCount: number;
}

// Industry-specific content templates
export const industryTemplates = {
  healthcare: {
    en: {
      seoTitle: 'Professional Healthcare Uniforms & Medical Scrubs in Saudi Arabia | UNEOM',
      seoDescription: 'Premium medical scrubs, nursing uniforms, and healthcare attire designed for Saudi Arabian climate. Antimicrobial fabrics, moisture-wicking technology. Free delivery to Riyadh, Jeddah, Dammam.',
      keywords: [
        'medical scrubs Saudi Arabia',
        'healthcare uniforms Riyadh',
        'nursing uniforms KSA',
        'hospital uniforms',
        'antimicrobial scrubs',
        'doctor coats Saudi',
        'nursing attire Jeddah',
        'medical workwear Dammam'
      ],
      faqs: [
        {
          question: 'What are the best fabrics for medical uniforms in Saudi Arabia?',
          answer: 'For Saudi Arabia\'s hot climate, we recommend antimicrobial polyester-cotton blends (65%/35%) with moisture-wicking technology. Our fabrics feature silver-ion treatment for infection control and are designed to keep healthcare professionals comfortable during long shifts.'
        },
        {
          question: 'Do you deliver medical uniforms to all cities in Saudi Arabia?',
          answer: 'Yes, UNEOM delivers to all major cities including Riyadh, Jeddah, Dammam, Mecca, Medina, and across the Kingdom. We offer express 24-48 hour delivery for urgent orders.'
        },
        {
          question: 'Can I customize medical uniforms with our hospital logo?',
          answer: 'Absolutely! We offer full customization including embroidered logos, department color-coding, name tags, and custom sizing from XS to 5XL. Our design team can help match your hospital\'s brand identity.'
        }
      ]
    },
    ar: {
      seoTitle: 'الزي الطبي الاحترافي والسكراب في السعودية | يونيوم',
      seoDescription: 'سكرابات طبية فاخرة وأزياء تمريض مصممة للمناخ السعودي. أقمشة مضادة للبكتيريا وتقنية امتصاص الرطوبة. توصيل مجاني للرياض وجدة والدمام.',
      keywords: [
        'سكرابات طبية السعودية',
        'زي المستشفيات الرياض',
        'ملابس التمريض جدة',
        'أزياء الرعاية الصحية',
        'سكراب مضاد للبكتيريا',
        'معاطف الأطباء'
      ],
      faqs: [
        {
          question: 'ما هي أفضل الأقمشة للزي الطبي في السعودية؟',
          answer: 'للمناخ السعودي الحار، نوصي بخلطات القطن والبوليستر المضادة للبكتيريا (65%/35%) مع تقنية امتصاص الرطوبة. أقمشتنا مُعالجة بأيونات الفضة للسيطرة على العدوى وتحافظ على راحة العاملين في الرعاية الصحية.'
        },
        {
          question: 'هل توصلون الزي الطبي لجميع مدن السعودية؟',
          answer: 'نعم، يونيوم توصل لجميع المدن الرئيسية بما في ذلك الرياض وجدة والدمام ومكة والمدينة وجميع أنحاء المملكة. نقدم توصيل سريع خلال 24-48 ساعة للطلبات العاجلة.'
        }
      ]
    }
  },
  
  corporate: {
    en: {
      seoTitle: 'Corporate Uniforms & Professional Business Attire in Saudi Arabia | UNEOM',
      seoDescription: 'Elevate your brand with premium corporate uniforms. Executive suits, business shirts, and branded workwear for Saudi companies. Custom design and bulk ordering available.',
      keywords: [
        'corporate uniforms Saudi Arabia',
        'business attire Riyadh',
        'company uniforms KSA',
        'executive suits',
        'branded workwear',
        'professional uniforms',
        'office attire Saudi'
      ],
      faqs: [
        {
          question: 'How can corporate uniforms improve our company brand?',
          answer: 'Corporate uniforms create a cohesive brand identity, enhance professionalism, and build customer trust. Studies show that 75% of customers perceive uniformed staff as more trustworthy. UNEOM designs uniforms that reflect your brand values and corporate culture.'
        },
        {
          question: 'What is the minimum order quantity for corporate uniforms?',
          answer: 'Our minimum order is 20 pieces per design. For large organizations, we offer volume discounts starting at 100 pieces. We also provide uniform management programs for ongoing supply.'
        }
      ]
    },
    ar: {
      seoTitle: 'الزي الرسمي للشركات والملابس المهنية في السعودية | يونيوم',
      seoDescription: 'ارتقِ بعلامتك التجارية مع الزي الرسمي الفاخر. بدلات تنفيذية وقمصان عمل وملابس مؤسسية للشركات السعودية. تصميم مخصص وطلبات بالجملة.',
      keywords: [
        'زي الشركات السعودية',
        'ملابس العمل الرياض',
        'الزي المؤسسي',
        'بدلات تنفيذية',
        'ملابس مهنية'
      ],
      faqs: [
        {
          question: 'كيف يمكن للزي الموحد تحسين علامتنا التجارية؟',
          answer: 'الزي الموحد يخلق هوية علامة تجارية متماسكة ويعزز المهنية ويبني ثقة العملاء. الدراسات تظهر أن 75% من العملاء يرون الموظفين بالزي الموحد أكثر جدارة بالثقة.'
        }
      ]
    }
  },
  
  hospitality: {
    en: {
      seoTitle: 'Hospitality Uniforms - Hotel & Restaurant Staff Attire in Saudi Arabia | UNEOM',
      seoDescription: 'Premium hospitality uniforms for Saudi hotels and restaurants. Front desk, housekeeping, chef uniforms, and F&B attire. Elegant designs that reflect Arabian hospitality.',
      keywords: [
        'hospitality uniforms Saudi',
        'hotel uniforms Riyadh',
        'restaurant staff uniforms',
        'chef uniforms KSA',
        'front desk attire',
        'housekeeping uniforms',
        'F&B uniforms Saudi Arabia'
      ],
      faqs: [
        {
          question: 'What hospitality uniforms do you offer for hotels?',
          answer: 'We provide complete hotel uniform solutions including front desk/concierge attire, housekeeping uniforms, F&B service wear, chef uniforms, spa attire, and management suits. All designs can be customized to match your hotel\'s aesthetic.'
        },
        {
          question: 'Can you design uniforms that reflect Saudi/Arabian culture?',
          answer: 'Yes! We specialize in creating hospitality uniforms that blend international standards with Arabian elegance. Our design team incorporates traditional elements and modest designs while maintaining modern functionality.'
        }
      ]
    },
    ar: {
      seoTitle: 'أزياء الضيافة - زي الفنادق والمطاعم في السعودية | يونيوم',
      seoDescription: 'أزياء ضيافة فاخرة للفنادق والمطاعم السعودية. زي الاستقبال والتدبير المنزلي والطهاة. تصاميم أنيقة تعكس الضيافة العربية.',
      keywords: [
        'أزياء الضيافة السعودية',
        'زي الفنادق الرياض',
        'ملابس الطهاة',
        'زي المطاعم',
        'أزياء الاستقبال'
      ],
      faqs: [
        {
          question: 'ما هي أزياء الضيافة التي تقدمونها للفنادق؟',
          answer: 'نقدم حلول زي فندقية شاملة تشمل زي الاستقبال والكونسيرج وزي التدبير المنزلي وملابس خدمة الطعام والمشروبات وأزياء الطهاة وملابس السبا وبدلات الإدارة.'
        }
      ]
    }
  },
  
  aviation: {
    en: {
      seoTitle: 'Aviation Uniforms - Airline Crew & Pilot Attire in Saudi Arabia | UNEOM',
      seoDescription: 'Professional aviation uniforms for Saudi airlines. Pilot uniforms, cabin crew attire, and ground staff workwear. Meeting international aviation standards.',
      keywords: [
        'aviation uniforms Saudi',
        'airline uniforms KSA',
        'pilot uniforms',
        'cabin crew attire',
        'flight attendant uniforms',
        'ground staff workwear'
      ],
      faqs: [
        {
          question: 'What aviation safety standards do your uniforms meet?',
          answer: 'Our aviation uniforms meet GACA (General Authority of Civil Aviation) requirements and international standards. Fabrics are flame-retardant, anti-static, and designed for comfort during long flights.'
        }
      ]
    },
    ar: {
      seoTitle: 'أزياء الطيران - زي طاقم الطائرة والطيارين في السعودية | يونيوم',
      seoDescription: 'أزياء طيران احترافية لشركات الطيران السعودية. زي الطيارين وطاقم الضيافة والعاملين الأرضيين. متوافقة مع المعايير الدولية.',
      keywords: [
        'أزياء الطيران السعودية',
        'زي الطيارين',
        'ملابس طاقم الضيافة',
        'أزياء المضيفات'
      ],
      faqs: [
        {
          question: 'ما هي معايير السلامة التي تلبيها أزياء الطيران؟',
          answer: 'أزياء الطيران لدينا تلبي متطلبات الهيئة العامة للطيران المدني والمعايير الدولية. الأقمشة مقاومة للحريق ومضادة للكهرباء الساكنة ومصممة للراحة خلال الرحلات الطويلة.'
        }
      ]
    }
  },
  
  industrial: {
    en: {
      seoTitle: 'Industrial Uniforms & Safety Workwear in Saudi Arabia | UNEOM',
      seoDescription: 'Heavy-duty industrial uniforms and safety workwear for Saudi factories and construction sites. Flame-resistant, high-visibility, and protective clothing.',
      keywords: [
        'industrial uniforms Saudi',
        'safety workwear KSA',
        'construction uniforms',
        'factory uniforms',
        'flame resistant clothing',
        'high visibility workwear',
        'PPE Saudi Arabia'
      ],
      faqs: [
        {
          question: 'What safety certifications do your industrial uniforms have?',
          answer: 'Our industrial uniforms are certified to Saudi SASO standards and international safety requirements including ISO, EN, and NFPA. We offer flame-resistant (FR), high-visibility (Hi-Vis), and chemical-resistant options.'
        },
        {
          question: 'Do you provide PPE along with industrial uniforms?',
          answer: 'Yes, we offer complete PPE solutions including safety helmets, gloves, boots, eye protection, and respiratory equipment alongside our uniform range.'
        }
      ]
    },
    ar: {
      seoTitle: 'الزي الصناعي وملابس السلامة في السعودية | يونيوم',
      seoDescription: 'أزياء صناعية متينة وملابس سلامة للمصانع ومواقع البناء السعودية. ملابس مقاومة للحريق وعالية الوضوح وحماية.',
      keywords: [
        'زي صناعي السعودية',
        'ملابس السلامة',
        'زي البناء',
        'زي المصانع',
        'ملابس مقاومة للحريق'
      ],
      faqs: [
        {
          question: 'ما هي شهادات السلامة التي تحملها أزياءكم الصناعية؟',
          answer: 'أزياؤنا الصناعية معتمدة وفق معايير ساسو السعودية ومتطلبات السلامة الدولية بما في ذلك ISO وEN وNFPA. نقدم خيارات مقاومة للحريق وعالية الوضوح ومقاومة للكيماويات.'
        }
      ]
    }
  },
  
  education: {
    en: {
      seoTitle: 'School Uniforms & Educational Attire in Saudi Arabia | UNEOM',
      seoDescription: 'Quality school uniforms for Saudi Arabian schools. Durable, comfortable, and compliant with education ministry guidelines. Boys and girls uniforms available.',
      keywords: [
        'school uniforms Saudi Arabia',
        'student uniforms Riyadh',
        'girls school uniform KSA',
        'boys school uniform',
        'international school uniforms',
        'university attire'
      ],
      faqs: [
        {
          question: 'Do your school uniforms comply with Saudi Ministry of Education guidelines?',
          answer: 'Yes, all our school uniforms are designed to comply with Saudi Ministry of Education guidelines. We offer both boys and girls options with appropriate modest designs and durable fabrics suitable for active students.'
        }
      ]
    },
    ar: {
      seoTitle: 'الزي المدرسي والملابس التعليمية في السعودية | يونيوم',
      seoDescription: 'زي مدرسي عالي الجودة للمدارس السعودية. متين ومريح ومتوافق مع إرشادات وزارة التعليم. زي البنين والبنات متوفر.',
      keywords: [
        'زي مدرسي السعودية',
        'ملابس الطلاب الرياض',
        'زي البنات المدرسي',
        'زي البنين المدرسي'
      ],
      faqs: [
        {
          question: 'هل الزي المدرسي يتوافق مع إرشادات وزارة التعليم السعودية؟',
          answer: 'نعم، جميع أزياءنا المدرسية مصممة وفق إرشادات وزارة التعليم السعودية. نقدم خيارات للبنين والبنات بتصاميم محتشمة وأقمشة متينة مناسبة للطلاب النشطين.'
        }
      ]
    }
  },
  
  security: {
    en: {
      seoTitle: 'Security Uniforms & Guard Attire in Saudi Arabia | UNEOM',
      seoDescription: 'Professional security uniforms for Saudi security companies. Guard uniforms, tactical wear, and corporate security attire. Customizable with badges and insignia.',
      keywords: [
        'security uniforms Saudi',
        'guard uniforms KSA',
        'tactical uniforms',
        'corporate security attire',
        'security guard clothing'
      ],
      faqs: [
        {
          question: 'Can you customize security uniforms with company badges?',
          answer: 'Yes, we offer full customization including embroidered badges, shoulder patches, name tags, rank insignia, and company logos. We can match specific color requirements and design security-appropriate attire.'
        }
      ]
    },
    ar: {
      seoTitle: 'أزياء الأمن والحراسة في السعودية | يونيوم',
      seoDescription: 'أزياء أمن احترافية لشركات الحراسة السعودية. زي الحراس والملابس التكتيكية وأزياء أمن الشركات. قابلة للتخصيص بالشارات.',
      keywords: [
        'زي الأمن السعودية',
        'ملابس الحراس',
        'زي تكتيكي',
        'أزياء أمن الشركات'
      ],
      faqs: [
        {
          question: 'هل يمكنكم تخصيص أزياء الأمن بشارات الشركة؟',
          answer: 'نعم، نقدم تخصيص كامل يشمل الشارات المطرزة وشارات الكتف وبطاقات الأسماء ورتب الشارات وشعارات الشركة.'
        }
      ]
    }
  }
};

// Content optimization functions
export function generateAIOptimizedTitle(
  baseTitle: string,
  industry?: string,
  location?: string,
  locale: 'en' | 'ar' = 'en'
): string {
  const maxLength = 60;
  let title = baseTitle;
  
  if (industry) {
    title = `${baseTitle} | ${industry}`;
  }
  
  if (location && title.length < maxLength - location.length - 3) {
    title = `${title} in ${location}`;
  }
  
  // Add brand
  if (title.length < maxLength - 9) {
    title = `${title} | ${locale === 'ar' ? 'يونيوم' : 'UNEOM'}`;
  }
  
  return title.substring(0, maxLength);
}

export function generateAIOptimizedDescription(
  content: string,
  keywords: string[],
  locale: 'en' | 'ar' = 'en'
): string {
  const maxLength = 160;
  let description = content;
  
  // Ensure description starts with a strong keyword
  const primaryKeyword = keywords[0];
  if (primaryKeyword && !description.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    description = `${primaryKeyword} - ${description}`;
  }
  
  // Add CTA for engagement
  const cta = locale === 'ar' 
    ? 'اتصل بنا اليوم.' 
    : 'Contact us today.';
  
  if (description.length < maxLength - cta.length - 1) {
    description = `${description} ${cta}`;
  }
  
  return description.substring(0, maxLength);
}

export function generateVoiceSearchQueries(
  topic: string,
  locale: 'en' | 'ar' = 'en'
): string[] {
  if (locale === 'ar') {
    return [
      `أين أجد ${topic} في السعودية؟`,
      `ما هي أفضل شركة ${topic}؟`,
      `كم سعر ${topic}؟`,
      `هل يوجد ${topic} بالقرب مني؟`
    ];
  }
  
  return [
    `Where can I find ${topic} in Saudi Arabia?`,
    `What is the best ${topic} company?`,
    `How much does ${topic} cost?`,
    `Is there ${topic} near me?`
  ];
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function generateKeywordsFromContent(
  content: string,
  industry: string,
  locale: 'en' | 'ar' = 'en'
): string[] {
  const baseKeywords = locale === 'ar'
    ? ['يونيوم', 'السعودية', 'الرياض', 'جدة', 'زي موحد']
    : ['UNEOM', 'Saudi Arabia', 'Riyadh', 'Jeddah', 'uniform'];
  
  const industryKeywords = industryTemplates[industry as keyof typeof industryTemplates]?.[locale]?.keywords || [];
  
  return [...new Set([...baseKeywords, ...industryKeywords])];
}

export default {
  industryTemplates,
  generateAIOptimizedTitle,
  generateAIOptimizedDescription,
  generateVoiceSearchQueries,
  calculateReadingTime,
  generateKeywordsFromContent
};

