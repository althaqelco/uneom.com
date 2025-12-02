/**
 * AI Search Optimization for 2024-2026
 * تحسين البحث بالذكاء الاصطناعي لـ 2024-2026
 * 
 * This module implements the latest AI search optimization techniques including:
 * - Google SGE (Search Generative Experience) optimization
 * - Bing Copilot compatibility
 * - ChatGPT Browse with Bing compatibility
 * - Perplexity AI optimization
 * - Claude AI search compatibility
 * 
 * Key Features:
 * - Conversational content structure
 * - Entity-based optimization
 * - Speakable content markup
 * - Featured snippet optimization
 * - Direct answer formatting
 */

// AI Search Types
export interface AISearchConfig {
  locale: 'en' | 'ar';
  pageType: 'homepage' | 'product' | 'service' | 'industry' | 'blog' | 'location' | 'faq';
  primaryEntity: string;
  secondaryEntities: string[];
  targetQueries: string[];
  speakableSelectors: string[];
}

export interface AIFriendlyContent {
  headline: string;
  summary: string;
  keyPoints: string[];
  faqs: { question: string; answer: string }[];
  entities: Entity[];
  callToAction: string;
}

export interface Entity {
  name: string;
  type: 'Organization' | 'Product' | 'Service' | 'Place' | 'Person' | 'Event';
  description: string;
  sameAs?: string[];
}

// AI Search-friendly structured data types
export interface AIOptimizedSchema {
  '@context': 'https://schema.org';
  '@graph': any[];
}

/**
 * القوائم الموصى بها للأسئلة الشائعة حسب نوع الصفحة
 * Recommended FAQ lists by page type
 */
export const AI_OPTIMIZED_FAQS = {
  healthcare: {
    ar: [
      {
        question: 'ما هي أفضل أنواع الأقمشة للأزياء الطبية في السعودية؟',
        answer: 'أفضل أقمشة الأزياء الطبية في السعودية هي خلطات القطن والبوليستر (65% قطن، 35% بوليستر) مع تقنيات مضادة للبكتيريا وطاردة للرطوبة. يونيوم تستخدم تقنية الأيونات الفضية للحماية المتقدمة ومقاومة البقع.'
      },
      {
        question: 'كم سعر السكرابز الطبية في السعودية؟',
        answer: 'تبدأ أسعار السكرابز الطبية من يونيوم من 169 ريال سعودي للقطعة الواحدة، مع خصومات للطلبات الكبيرة. الأسعار تشمل خيارات التخصيص مثل التطريز والشعارات.'
      },
      {
        question: 'أين أجد أزياء طبية بالجملة في الرياض؟',
        answer: 'يونيوم هي المورد الرائد للأزياء الطبية بالجملة في الرياض، مع توصيل مجاني خلال 24 ساعة للطلبات الكبيرة. نخدم أكثر من 200 مستشفى وعيادة في المملكة.'
      }
    ],
    en: [
      {
        question: 'What are the best fabric types for medical uniforms in Saudi Arabia?',
        answer: 'The best medical uniform fabrics in Saudi Arabia are cotton-polyester blends (65% cotton, 35% polyester) with antimicrobial and moisture-wicking technologies. UNEOM uses silver-ion technology for advanced protection and stain resistance.'
      },
      {
        question: 'How much do medical scrubs cost in Saudi Arabia?',
        answer: 'UNEOM medical scrubs start from SAR 169 per piece, with discounts for bulk orders. Prices include customization options like embroidery and logos.'
      },
      {
        question: 'Where can I find wholesale medical uniforms in Riyadh?',
        answer: 'UNEOM is the leading wholesale medical uniform supplier in Riyadh, with free delivery within 24 hours for large orders. We serve over 200 hospitals and clinics across the Kingdom.'
      }
    ]
  },
  corporate: {
    ar: [
      {
        question: 'ما هي مواصفات الزي الرسمي للشركات في السعودية؟',
        answer: 'الزي الرسمي للشركات في السعودية يجب أن يكون أنيقاً ومريحاً ومناسباً للمناخ. يونيوم تقدم أقمشة عالية الجودة مقاومة للتجعد مع خيارات للتصميم الكلاسيكي والعصري.'
      },
      {
        question: 'كيف أطلب زي موحد لشركتي؟',
        answer: 'يمكنك طلب الزي الموحد من يونيوم عبر: 1) طلب عرض سعر مجاني من الموقع 2) الاتصال على +966-50-123-4567 3) زيارة أحد معارضنا في الرياض أو جدة. نقدم استشارات مجانية لتصميم الزي الأمثل.'
      }
    ],
    en: [
      {
        question: 'What are the specifications for corporate uniforms in Saudi Arabia?',
        answer: 'Corporate uniforms in Saudi Arabia should be elegant, comfortable, and climate-appropriate. UNEOM offers high-quality wrinkle-resistant fabrics with classic and modern design options.'
      },
      {
        question: 'How do I order uniforms for my company?',
        answer: 'You can order uniforms from UNEOM by: 1) Requesting a free quote from our website 2) Calling +966-50-123-4567 3) Visiting our showrooms in Riyadh or Jeddah. We offer free consultations for optimal uniform design.'
      }
    ]
  },
  hospitality: {
    ar: [
      {
        question: 'ما هي أزياء الضيافة المتوفرة للفنادق في السعودية؟',
        answer: 'يونيوم تقدم مجموعة شاملة من أزياء الضيافة للفنادق: زي الاستقبال، زي الكونسيرج، زي المطاعم، زي التدبير المنزلي، وأزياء الإدارة. جميعها مصممة لتعكس هوية الفندق مع الحفاظ على الأناقة والراحة.'
      }
    ],
    en: [
      {
        question: 'What hospitality uniforms are available for hotels in Saudi Arabia?',
        answer: 'UNEOM offers a comprehensive range of hospitality uniforms for hotels: reception uniforms, concierge attire, restaurant uniforms, housekeeping uniforms, and management attire. All designed to reflect hotel identity while maintaining elegance and comfort.'
      }
    ]
  }
};

/**
 * إنشاء محتوى محسن للبحث بالذكاء الاصطناعي
 * Generate AI-optimized content structure
 */
export function generateAIOptimizedContent(
  config: AISearchConfig,
  content: AIFriendlyContent
): AIOptimizedSchema {
  const organizationSchema = {
    '@type': 'Organization',
    '@id': 'https://uneom.com/#organization',
    name: 'UNEOM',
    alternateName: 'يونيوم',
    url: 'https://uneom.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/uneom-logo.png',
      width: 200,
      height: 60
    },
    description: config.locale === 'ar' 
      ? 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية'
      : 'UNEOM is the leading manufacturer of professional uniforms and workwear in Saudi Arabia',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Al Olaya District',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: '12214',
      addressCountry: 'SA'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966-50-123-4567',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'SA'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+966-50-123-4567',
        contactType: 'sales',
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'SA'
      }
    ],
    sameAs: [
      'https://www.facebook.com/uneomuniforms/',
      'https://www.instagram.com/uneomuniforms/',
      'https://www.linkedin.com/company/uneom',
      'https://twitter.com/uneom_sa',
      'https://www.tiktok.com/@uneomcom',
      'https://www.youtube.com/@uneom-uniforms'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia'
    },
    knowsAbout: [
      'Professional Uniforms',
      'Medical Scrubs',
      'Corporate Workwear',
      'Hospitality Attire',
      'Industrial Uniforms',
      'Aviation Uniforms',
      'School Uniforms',
      'Security Uniforms'
    ]
  };

  const webSiteSchema = {
    '@type': 'WebSite',
    '@id': 'https://uneom.com/#website',
    url: 'https://uneom.com',
    name: 'UNEOM',
    alternateName: 'يونيوم',
    description: config.locale === 'ar'
      ? 'الموقع الرسمي لشركة يونيوم للأزياء المهنية'
      : 'Official website of UNEOM Professional Uniforms',
    publisher: { '@id': 'https://uneom.com/#organization' },
    inLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' }
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://uneom.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Speakable specification for voice search
  const speakableSchema = {
    '@type': 'SpeakableSpecification',
    cssSelector: config.speakableSelectors.length > 0 
      ? config.speakableSelectors 
      : ['h1', '.summary', '.key-points']
  };

  // FAQ Schema if FAQs exist
  const faqSchema = content.faqs.length > 0 ? {
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // Build the graph
  const graph: any[] = [organizationSchema, webSiteSchema];

  if (faqSchema) {
    graph.push(faqSchema);
  }

  // Add entity schemas
  content.entities.forEach(entity => {
    graph.push({
      '@type': entity.type,
      name: entity.name,
      description: entity.description,
      sameAs: entity.sameAs || []
    });
  });

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

/**
 * إنشاء علامات Speakable للبحث الصوتي
 * Generate Speakable markup for voice search
 */
export function generateSpeakableSchema(
  headline: string,
  summary: string,
  cssSelectors: string[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors
    },
    name: headline,
    description: summary
  };
}

/**
 * تنسيق المحتوى للمقتطفات المميزة
 * Format content for featured snippets
 */
export function formatForFeaturedSnippet(
  type: 'paragraph' | 'list' | 'table' | 'steps',
  content: any
): string {
  switch (type) {
    case 'paragraph':
      return `<p class="featured-snippet-paragraph">${content}</p>`;
    
    case 'list':
      return `<ul class="featured-snippet-list">${content.map((item: string) => `<li>${item}</li>`).join('')}</ul>`;
    
    case 'steps':
      return `<ol class="featured-snippet-steps">${content.map((step: string, i: number) => `<li><strong>Step ${i + 1}:</strong> ${step}</li>`).join('')}</ol>`;
    
    case 'table':
      return `<table class="featured-snippet-table">
        <thead><tr>${content.headers.map((h: string) => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${content.rows.map((row: string[]) => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>`;
    
    default:
      return content;
  }
}

/**
 * الكلمات المفتاحية المحسنة للبحث بالذكاء الاصطناعي
 * AI Search Optimized Keywords
 */
export const AI_SEARCH_KEYWORDS = {
  ar: {
    primary: [
      'أفضل مورد أزياء مهنية في السعودية',
      'شراء سكرابز طبية الرياض',
      'زي موحد للشركات جدة',
      'أسعار الأزياء الطبية السعودية',
      'تصميم زي موحد مخصص',
      'أفضل أقمشة الأزياء المهنية',
      'مصنع ملابس عمل في السعودية'
    ],
    conversational: [
      'وين أحصل أزياء طبية في الرياض؟',
      'كم سعر الزي الموحد للشركات؟',
      'كيف أطلب سكرابز بالجملة؟',
      'ما هي أفضل شركة أزياء مهنية في السعودية؟',
      'هل يوجد توصيل سريع للأزياء الطبية؟'
    ],
    longTail: [
      'أزياء طبية مضادة للبكتيريا في الرياض',
      'زي موحد فندقي فاخر في جدة',
      'ملابس عمل صناعية مقاومة للحرارة',
      'تصميم زي مدرسي سعودي حديث',
      'أزياء أمن وحراسة احترافية'
    ]
  },
  en: {
    primary: [
      'best professional uniform supplier saudi arabia',
      'buy medical scrubs riyadh',
      'corporate uniform jeddah',
      'medical uniform prices saudi',
      'custom uniform design',
      'best professional uniform fabrics',
      'workwear manufacturer saudi arabia'
    ],
    conversational: [
      'where to find medical uniforms in riyadh',
      'how much do corporate uniforms cost',
      'how to order scrubs wholesale',
      'what is the best uniform company in saudi arabia',
      'do you deliver medical uniforms fast'
    ],
    longTail: [
      'antimicrobial medical uniforms riyadh',
      'luxury hotel uniforms jeddah',
      'heat resistant industrial workwear',
      'modern saudi school uniform design',
      'professional security guard uniforms'
    ]
  }
};

/**
 * إنشاء بيانات HowTo المنظمة
 * Generate HowTo structured data
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime?: string,
  supply?: string[],
  tool?: string[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    supply: supply?.map(item => ({
      '@type': 'HowToSupply',
      name: item
    })),
    tool: tool?.map(item => ({
      '@type': 'HowToTool',
      name: item
    })),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? {
        '@type': 'ImageObject',
        url: step.image.startsWith('http') ? step.image : `https://uneom.com${step.image}`
      } : undefined
    }))
  };
}

/**
 * إنشاء بيانات ItemList المنظمة للقوائم
 * Generate ItemList structured data for lists
 */
export function generateItemListSchema(
  name: string,
  description: string,
  items: { name: string; url: string; image?: string; description?: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        url: item.url.startsWith('http') ? item.url : `https://uneom.com${item.url}`,
        image: item.image,
        description: item.description
      }
    }))
  };
}

/**
 * تحسين عنوان الصفحة للبحث بالذكاء الاصطناعي
 * Optimize page title for AI search
 */
export function optimizeTitleForAI(
  title: string,
  locale: 'en' | 'ar',
  pageType: string
): string {
  const maxLength = 60;
  const brandSuffix = locale === 'ar' ? ' | يونيوم' : ' | UNEOM';
  const emoji = getEmoji(pageType);
  
  // For Arabic, add emoji at the end
  // For English, add emoji at the beginning
  let optimizedTitle = locale === 'ar' 
    ? `${title} ${emoji}`.trim()
    : `${emoji} ${title}`.trim();
  
  // Ensure title doesn't exceed max length with brand
  const availableLength = maxLength - brandSuffix.length;
  if (optimizedTitle.length > availableLength) {
    optimizedTitle = optimizedTitle.substring(0, availableLength - 3) + '...';
  }
  
  return `${optimizedTitle}${brandSuffix}`;
}

function getEmoji(pageType: string): string {
  const emojis: Record<string, string> = {
    healthcare: '🏥',
    corporate: '🏢',
    hospitality: '🏨',
    aviation: '✈️',
    education: '🎓',
    industrial: '🏭',
    security: '🛡️',
    manufacturing: '⚙️',
    homepage: '🇸🇦',
    shop: '🛍️',
    blog: '📝',
    contact: '📞',
    about: 'ℹ️',
    location: '📍'
  };
  return emojis[pageType] || '✨';
}

/**
 * تحسين الوصف للبحث بالذكاء الاصطناعي
 * Optimize description for AI search
 */
export function optimizeDescriptionForAI(
  description: string,
  locale: 'en' | 'ar',
  includeCallToAction: boolean = true
): string {
  const maxLength = 160;
  const cta = locale === 'ar' 
    ? ' | احصل على عرض سعر مجاني الآن'
    : ' | Get a free quote now';
  
  let optimized = description;
  
  if (includeCallToAction && description.length + cta.length <= maxLength) {
    optimized = description + cta;
  }
  
  if (optimized.length > maxLength) {
    optimized = optimized.substring(0, maxLength - 3) + '...';
  }
  
  return optimized;
}

export default {
  generateAIOptimizedContent,
  generateSpeakableSchema,
  formatForFeaturedSnippet,
  generateHowToSchema,
  generateItemListSchema,
  optimizeTitleForAI,
  optimizeDescriptionForAI,
  AI_OPTIMIZED_FAQS,
  AI_SEARCH_KEYWORDS
};

