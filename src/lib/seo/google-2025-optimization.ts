/**
 * Google 2025 SEO Optimization Library
 * تحسين السيو وفقاً لأحدث معايير جوجل لمايو 2025
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  hreflang?: { [key: string]: string };
  structuredData?: any;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  robots?: RobotsConfig;
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: 'website' | 'article' | 'product';
  locale: string;
  siteName: string;
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  creator?: string;
  site?: string;
}

export interface RobotsConfig {
  index: boolean;
  follow: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

/**
 * الكلمات المفتاحية الرئيسية للموقع
 */
export const PRIMARY_KEYWORDS = {
  ar: [
    'الأزياء المهنية السعودية',
    'الزي الموحد',
    'يونيوم',
    'أزياء طبية',
    'أزياء الطيران',
    'الأزياء الصناعية',
    'أزياء الضيافة',
    'الأزياء التعليمية',
    'أزياء الأمن',
    'تصنيع الأزياء المهنية',
    'الزي المدرسي',
    'سكرابز طبية',
    'أزياء المستشفيات',
    'الرياض',
    'جدة',
    'الدمام'
  ],
  en: [
    'professional uniforms saudi arabia',
    'medical scrubs',
    'aviation uniforms',
    'hospitality attire',
    'industrial uniforms',
    'school uniforms',
    'security uniforms',
    'corporate uniforms',
    'uniform manufacturing',
    'custom uniforms',
    'riyadh uniforms',
    'jeddah uniforms',
    'dammam uniforms',
    'healthcare uniforms',
    'UNEOM'
  ]
};

/**
 * إعدادات السيو للصفحات المختلفة
 */
export const SEO_TEMPLATES = {
  homepage: {
    ar: {
      title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية',
      description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية. نخدم القطاعات الطبية والطيران والضيافة والتعليم والأمن والصناعة بأعلى معايير الجودة.',
      keywords: PRIMARY_KEYWORDS.ar.slice(0, 10)
    },
    en: {
      title: 'UNEOM - Leading Professional Uniform Manufacturer in Saudi Arabia',
      description: 'UNEOM is the leading professional uniform manufacturer in Saudi Arabia. We serve healthcare, aviation, hospitality, education, security, and industrial sectors with the highest quality standards.',
      keywords: PRIMARY_KEYWORDS.en.slice(0, 10)
    }
  },
  shop: {
    ar: {
      title: 'متجر الأزياء المهنية - يونيوم | أكبر تشكيلة أزياء مهنية في السعودية',
      description: 'تسوق من أكبر تشكيلة أزياء مهنية في السعودية. أزياء طبية، طيران، ضيافة، تعليمية، أمن وصناعية. جودة عالية وأسعار منافسة مع التوصيل لجميع أنحاء المملكة.',
      keywords: ['متجر الأزياء المهنية', 'شراء الزي الموحد', ...PRIMARY_KEYWORDS.ar.slice(0, 8)]
    },
    en: {
      title: 'Professional Uniforms Shop - UNEOM | Largest Collection in Saudi Arabia',
      description: 'Shop from the largest collection of professional uniforms in Saudi Arabia. Medical, aviation, hospitality, education, security and industrial uniforms. High quality and competitive prices with delivery across the Kingdom.',
      keywords: ['uniform shop', 'buy uniforms', ...PRIMARY_KEYWORDS.en.slice(0, 8)]
    }
  },
  services: {
    ar: {
      title: 'خدمات تصنيع الأزياء المهنية - يونيوم | تصميم مخصص وجودة عالية',
      description: 'خدمات شاملة لتصنيع الأزياء المهنية تشمل التصميم المخصص، اختيار الأقمشة، التصنيع، ضمان الجودة، والتشطيبات التقنية. خبرة 15+ سنة في خدمة الشركات السعودية.',
      keywords: ['خدمات تصنيع الأزياء', 'التصميم المخصص', ...PRIMARY_KEYWORDS.ar.slice(0, 8)]
    },
    en: {
      title: 'Professional Uniform Manufacturing Services - UNEOM | Custom Design & Quality',
      description: 'Comprehensive uniform manufacturing services including custom design, fabric selection, manufacturing, quality assurance, and technical finishes. 15+ years of experience serving Saudi companies.',
      keywords: ['uniform manufacturing services', 'custom design', ...PRIMARY_KEYWORDS.en.slice(0, 8)]
    }
  },
  industries: {
    ar: {
      title: 'الصناعات التي نخدمها - يونيوم | حلول الأزياء المهنية لجميع القطاعات',
      description: 'نخدم جميع القطاعات في السعودية: الطبي، الطيران، الضيافة، التعليم، الأمن، الصناعة، والشركات. حلول مخصصة لكل صناعة مع أعلى معايير الجودة والسلامة.',
      keywords: ['الصناعات', 'القطاعات', ...PRIMARY_KEYWORDS.ar.slice(0, 8)]
    },
    en: {
      title: 'Industries We Serve - UNEOM | Professional Uniform Solutions for All Sectors',
      description: 'We serve all sectors in Saudi Arabia: healthcare, aviation, hospitality, education, security, industrial, and corporate. Customized solutions for each industry with the highest quality and safety standards.',
      keywords: ['industries', 'sectors', ...PRIMARY_KEYWORDS.en.slice(0, 8)]
    }
  }
};

/**
 * إنشاء البيانات المنظمة (Schema.org)
 */
export function generateStructuredData(type: string, data: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return baseSchema;
}

/**
 * إنشاء علامات Open Graph
 */
export function generateOpenGraphTags(config: OpenGraphConfig): Record<string, string> {
  return {
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.image,
    'og:image:alt': config.imageAlt,
    'og:type': config.type,
    'og:locale': config.locale,
    'og:site_name': config.siteName,
    'og:url': typeof window !== 'undefined' ? window.location.href : ''
  };
}

/**
 * إنشاء علامات Twitter
 */
export function generateTwitterTags(config: TwitterConfig): Record<string, string> {
  const tags: Record<string, string> = {
    'twitter:card': config.card,
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.image,
    'twitter:image:alt': config.imageAlt
  };

  if (config.creator) tags['twitter:creator'] = config.creator;
  if (config.site) tags['twitter:site'] = config.site;

  return tags;
}

/**
 * إنشاء علامات Robots
 */
export function generateRobotsTags(config: RobotsConfig): string {
  const directives: string[] = [];
  
  directives.push(config.index ? 'index' : 'noindex');
  directives.push(config.follow ? 'follow' : 'nofollow');
  
  if (config.noarchive) directives.push('noarchive');
  if (config.nosnippet) directives.push('nosnippet');
  if (config.noimageindex) directives.push('noimageindex');
  if (config.maxSnippet) directives.push(`max-snippet:${config.maxSnippet}`);
  if (config.maxImagePreview) directives.push(`max-image-preview:${config.maxImagePreview}`);
  if (config.maxVideoPreview) directives.push(`max-video-preview:${config.maxVideoPreview}`);

  return directives.join(', ');
}

/**
 * إنشاء علامات Hreflang
 */
export function generateHreflangTags(hreflang: { [key: string]: string }): Array<{ rel: string; hreflang: string; href: string }> {
  return Object.entries(hreflang).map(([lang, url]) => ({
    rel: 'alternate',
    hreflang: lang,
    href: url
  }));
}

/**
 * تحسين العنوان للسيو
 */
export function optimizeTitle(title: string, siteName: string = 'يونيوم'): string {
  // التأكد من أن العنوان لا يتجاوز 60 حرف
  const maxLength = 60;
  const separator = ' | ';
  const availableLength = maxLength - siteName.length - separator.length;
  
  if (title.length <= availableLength) {
    return `${title}${separator}${siteName}`;
  }
  
  // قطع العنوان إذا كان طويلاً
  const truncatedTitle = title.substring(0, availableLength - 3) + '...';
  return `${truncatedTitle}${separator}${siteName}`;
}

/**
 * تحسين الوصف للسيو
 */
export function optimizeDescription(description: string): string {
  const maxLength = 160;
  
  if (description.length <= maxLength) {
    return description;
  }
  
  // قطع الوصف عند آخر مسافة قبل الحد الأقصى
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.substring(0, lastSpace) + '...';
}

/**
 * إنشاء URL canonical
 */
export function generateCanonicalUrl(path: string, baseUrl: string = 'https://uneom.com'): string {
  // إزالة المعاملات والهاش
  const cleanPath = path.split('?')[0].split('#')[0];
  
  // إزالة الشرطة المائلة في النهاية إذا لم تكن الصفحة الرئيسية
  const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
  
  return `${baseUrl}${normalizedPath}`;
}

/**
 * إنشاء الكلمات المفتاحية المحسنة
 */
export function generateOptimizedKeywords(keywords: string[], locale: string = 'ar'): string {
  // ترتيب الكلمات المفتاحية حسب الأهمية
  const primaryKeywords = keywords.slice(0, 5);
  const secondaryKeywords = keywords.slice(5, 10);
  
  return [...primaryKeywords, ...secondaryKeywords].join(', ');
}

/**
 * تحليل كثافة الكلمات المفتاحية
 */
export function analyzeKeywordDensity(content: string, keyword: string): number {
  const words = content.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  const keywordLength = keywordWords.length;
  
  let matches = 0;
  for (let i = 0; i <= words.length - keywordLength; i++) {
    const phrase = words.slice(i, i + keywordLength).join(' ');
    if (phrase === keyword.toLowerCase()) {
      matches++;
    }
  }
  
  return (matches / words.length) * 100;
}

/**
 * إنشاء البيانات المنظمة للمنتج
 */
export function generateProductSchema(product: any) {
  return generateStructuredData('Product', {
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: 'UNEOM'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'UNEOM',
      url: 'https://uneom.com'
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'UNEOM'
      }
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating.value,
      reviewCount: product.rating.count,
      bestRating: 5,
      worstRating: 1
    } : undefined
  });
}

/**
 * إنشاء البيانات المنظمة للمقال
 */
export function generateArticleSchema(article: any) {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url
    },
    publisher: {
      '@type': 'Organization',
      name: 'UNEOM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uneom.com/images/logo/uneom-logo.png'
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  });
}

/**
 * إعدادات السيو الافتراضية
 */
export const DEFAULT_SEO_CONFIG: SEOConfig = {
  title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
  description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية',
  keywords: PRIMARY_KEYWORDS.ar.slice(0, 10),
  canonicalUrl: 'https://uneom.com',
  robots: {
    index: true,
    follow: true,
    maxSnippet: 160,
    maxImagePreview: 'large',
    maxVideoPreview: 30
  },
  openGraph: {
    title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية',
    image: 'https://uneom.com/images/og/uneom-og-image.jpg',
    imageAlt: 'شعار شركة يونيوم للأزياء المهنية',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'UNEOM - يونيوم'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يونيوم - الرائدة في تصنيع الأزياء المهنية في السعودية',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية',
    image: 'https://uneom.com/images/twitter/uneom-twitter-card.jpg',
    imageAlt: 'شعار شركة يونيوم للأزياء المهنية',
    site: '@uneom_sa'
  }
};