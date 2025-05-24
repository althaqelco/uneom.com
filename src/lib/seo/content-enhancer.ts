/**
 * Content Enhancer Utility
 * 
 * Helps fix the "2 Word Count / Low Text Ratio" issue (E003) identified in the Screaming Frog report
 * by ensuring pages have sufficient server-side rendered text content.
 * 
 * This utility provides:
 * 1. Server-side content generation helper functions
 * 2. Minimum content thresholds to ensure proper indexability
 * 3. Hooks for injecting SEO-optimized content
 */

import { GetStaticPropsContext } from 'next';

// Helper function to get the site URL
const getSiteUrl = (path: string = '') => {
  const baseUrl = 'https://uneom.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Minimum content requirements for good SEO
 */
export const MINIMUM_CONTENT_REQUIREMENTS = {
  wordCount: 300,
  textToHtmlRatio: 10, // percentage
  headings: {
    h1: 1, // Exactly one H1 tag
    h2: 2, // At least 2 H2 tags recommended
  }
};

/**
 * Interface for content section
 */
export interface ContentSection {
  heading: string;
  content: string | React.ReactNode;
  id?: string;
}

/**
 * Interface for enhanced page content
 */
export interface EnhancedPageContent {
  title: string;
  description?: string;
  contentSections: ContentSection[];
  locale: string;
  pageUrl: string;
  jsonLd?: Record<string, any>;
  keywords?: string[];
}

/**
 * Generate page content in getStaticProps or getServerSideProps
 * to ensure it's rendered server-side and indexable by search engines
 */
export function generatePageContent({
  title,
  description,
  contentSections,
  locale = 'en',
  keywords = [],
  pathname,
  baseUrl = 'https://uneom.com'
}: {
  title: string;
  description?: string;
  contentSections: ContentSection[];
  locale?: string;
  keywords?: string[];
  pathname: string;
  baseUrl?: string;
}): EnhancedPageContent {
  // Ensure the pathname has leading slash
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Construct full URL
  const pageUrl = `${baseUrl}${normalizedPath}`;
  
  // Return structured content for server-side rendering
  return {
    title,
    description,
    contentSections,
    locale,
    pageUrl,
    keywords,
  };
}

/**
 * Helper function for getStaticProps to ensure page content is server-rendered
 */
export function withEnhancedContent<T>(
  getContentFn: (context: GetStaticPropsContext) => EnhancedPageContent,
  additionalProps?: T
) {
  return async (context: GetStaticPropsContext) => {
    const locale = context.locale || 'en';
    const { params, preview } = context;
    
    // Generate the page content
    const pageContent = getContentFn(context);
    
    // Count the total words in the content sections
    const wordCount = pageContent.contentSections.reduce((total, section) => {
      if (typeof section.content === 'string') {
        const words = section.content.split(/\s+/).filter(w => w.length > 0);
        return total + words.length;
      }
      // For React nodes, we can only estimate
      return total + 50; // Assume an average of 50 words per section if it's a React node
    }, 0);
    
    // Add SEO warnings if content is insufficient
    const seoWarnings = [];
    
    if (wordCount < MINIMUM_CONTENT_REQUIREMENTS.wordCount) {
      seoWarnings.push(`Low word count: ${wordCount} words (minimum recommended: ${MINIMUM_CONTENT_REQUIREMENTS.wordCount})`);
    }
    
    if (pageContent.contentSections.length < MINIMUM_CONTENT_REQUIREMENTS.headings.h2) {
      seoWarnings.push(`Insufficient H2 headings: ${pageContent.contentSections.length} (minimum recommended: ${MINIMUM_CONTENT_REQUIREMENTS.headings.h2})`);
    }
    
    if (!pageContent.description || pageContent.description.length < 50) {
      seoWarnings.push('Missing or short meta description');
    }
    
    // Return the props
    return {
      props: {
        pageContent,
        seoInfo: {
          wordCount,
          seoWarnings: seoWarnings.length > 0 ? seoWarnings : null,
        },
        ...(additionalProps || {})
      },
      // Enable ISR with a 1 hour revalidation period
      revalidate: 3600
    };
  };
}

/**
 * Generate placeholder content to ensure minimum text ratio
 * Use this for development or when actual content is not ready
 */
export function generatePlaceholderContent(
  locale: string = 'en',
  wordCount: number = 300
): string {
  // Basic placeholder content in English
  const enPlaceholders = [
    "This section provides comprehensive information about our services and products.",
    "We strive to deliver high-quality solutions tailored to your specific needs.",
    "Our team of experts is dedicated to ensuring your complete satisfaction.",
    "With years of experience in the industry, we understand the challenges you face.",
    "Contact us today to learn more about how we can help you achieve your goals.",
    "We offer competitive pricing and flexible options to suit your budget.",
    "Our customer support team is available to assist you with any questions.",
    "We use the latest technology and methods to deliver superior results.",
    "All our products are carefully designed with attention to detail and quality.",
    "We continuously improve our processes to better serve our customers."
  ];
  
  // Basic placeholder content in Arabic
  const arPlaceholders = [
    "يوفر هذا القسم معلومات شاملة حول خدماتنا ومنتجاتنا.",
    "نحن نسعى جاهدين لتقديم حلول عالية الجودة مصممة خصيصًا لتلبية احتياجاتك المحددة.",
    "فريقنا من الخبراء مكرس لضمان رضاك التام.",
    "مع سنوات من الخبرة في هذه الصناعة، نحن نفهم التحديات التي تواجهها.",
    "اتصل بنا اليوم لمعرفة المزيد حول كيف يمكننا مساعدتك في تحقيق أهدافك.",
    "نحن نقدم أسعارًا تنافسية وخيارات مرنة لتناسب ميزانيتك.",
    "فريق دعم العملاء لدينا متاح لمساعدتك في أي أسئلة.",
    "نحن نستخدم أحدث التقنيات والأساليب لتقديم نتائج متفوقة.",
    "جميع منتجاتنا مصممة بعناية مع الاهتمام بالتفاصيل والجودة.",
    "نحن نعمل باستمرار على تحسين عملياتنا لخدمة عملائنا بشكل أفضل."
  ];
  
  // Select the appropriate placeholders based on locale
  const placeholders = locale === 'ar' ? arPlaceholders : enPlaceholders;
  
  // Calculate how many sentences we need to reach the desired word count
  const averageWordsPerSentence = 15;
  const sentencesNeeded = Math.ceil(wordCount / averageWordsPerSentence);
  
  // Generate the content by repeating placeholders as needed
  let content = '';
  for (let i = 0; i < sentencesNeeded; i++) {
    const index = i % placeholders.length;
    content += placeholders[index] + ' ';
  }
  
  return content.trim();
}

export default {
  MINIMUM_CONTENT_REQUIREMENTS,
  generatePageContent,
  withEnhancedContent,
  generatePlaceholderContent
};
