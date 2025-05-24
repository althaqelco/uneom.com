/**
 * Content Analyzer Utility
 * 
 * This utility analyzes page content to identify and fix "2 Word Count / Low Text Ratio" issues
 * (Error E003) identified in the Screaming Frog report. It helps ensure that sufficient
 * textual content is available in the initial HTML for search engines.
 */

// Define threshold values for content analysis
const THRESHOLDS = {
  MIN_WORD_COUNT: 300, // Minimum words for a page to be considered content-rich
  MIN_TEXT_RATIO: 0.15, // Minimum text-to-HTML ratio (15%)
  RECOMMENDED_WORD_COUNT: 500, // Recommended word count for good content
  RECOMMENDED_TEXT_RATIO: 0.25 // Recommended text-to-HTML ratio (25%)
};

export interface ContentAnalysisResult {
  url: string;
  wordCount: number;
  htmlSize: number;
  textSize: number;
  textRatio: number;
  hasSufficientContent: boolean;
  isOptimal: boolean;
  recommendations: string[];
}

/**
 * Count words in a text string
 */
export function countWords(text: string): number {
  // Remove HTML tags if present
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, ' ');
  
  // Remove special characters and normalize whitespace
  const normalizedText = cleanText
    .replace(/[^\w\s\u0600-\u06FF]/g, ' ') // Keep Latin and Arabic characters
    .replace(/\s+/g, ' ')
    .trim();
  
  // Count words (sequences of characters separated by spaces)
  if (normalizedText.length === 0) {
    return 0;
  }
  
  return normalizedText.split(' ').length;
}

/**
 * Calculate text-to-HTML ratio
 */
export function calculateTextRatio(html: string): {
  htmlSize: number;
  textSize: number;
  textRatio: number;
} {
  // Get HTML size
  const htmlSize = html.length;
  
  // Extract text content (remove HTML tags)
  const textContent = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Get text size
  const textSize = textContent.length;
  
  // Calculate ratio
  const textRatio = htmlSize > 0 ? textSize / htmlSize : 0;
  
  return {
    htmlSize,
    textSize,
    textRatio
  };
}

/**
 * Analyze content for SEO
 */
export function analyzeContent(
  url: string,
  html: string
): ContentAnalysisResult {
  // Count words
  const textContent = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const wordCount = countWords(textContent);
  
  // Calculate text ratio
  const { htmlSize, textSize, textRatio } = calculateTextRatio(html);
  
  // Check against thresholds
  const hasSufficientContent = 
    wordCount >= THRESHOLDS.MIN_WORD_COUNT && 
    textRatio >= THRESHOLDS.MIN_TEXT_RATIO;
  
  const isOptimal = 
    wordCount >= THRESHOLDS.RECOMMENDED_WORD_COUNT && 
    textRatio >= THRESHOLDS.RECOMMENDED_TEXT_RATIO;
  
  // Generate recommendations
  const recommendations: string[] = [];
  
  if (wordCount < THRESHOLDS.MIN_WORD_COUNT) {
    recommendations.push(
      `Add more textual content to reach at least ${THRESHOLDS.MIN_WORD_COUNT} words (currently ${wordCount}).`
    );
  }
  
  if (textRatio < THRESHOLDS.MIN_TEXT_RATIO) {
    recommendations.push(
      `Improve text-to-HTML ratio to at least ${THRESHOLDS.MIN_TEXT_RATIO * 100}% (currently ${(textRatio * 100).toFixed(2)}%).`
    );
  }
  
  if (wordCount < THRESHOLDS.RECOMMENDED_WORD_COUNT && wordCount >= THRESHOLDS.MIN_WORD_COUNT) {
    recommendations.push(
      `Consider adding more content to reach ${THRESHOLDS.RECOMMENDED_WORD_COUNT}+ words for optimal SEO.`
    );
  }
  
  return {
    url,
    wordCount,
    htmlSize,
    textSize,
    textRatio,
    hasSufficientContent,
    isOptimal,
    recommendations
  };
}

/**
 * Check if a page has sufficient content for indexing
 */
export function hasSufficientContent(html: string): boolean {
  // Count words
  const textContent = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const wordCount = countWords(textContent);
  
  // Calculate text ratio
  const { textRatio } = calculateTextRatio(html);
  
  // Check against thresholds
  return wordCount >= THRESHOLDS.MIN_WORD_COUNT && textRatio >= THRESHOLDS.MIN_TEXT_RATIO;
}

/**
 * Generate SEO-friendly placeholder content for a given topic
 * This helps quickly address low word count issues on key pages
 */
export function generatePlaceholderContent(
  topic: string,
  locale: string = 'en',
  wordCount: number = THRESHOLDS.RECOMMENDED_WORD_COUNT
): string {
  // Create basic placeholder content structure for a given topic
  // This is just a template - real content should be professionally written
  if (locale === 'ar') {
    return `[محتوى مؤقت: هذا النص هو مثال لمحتوى يمكن أن يكون في صفحة حول "${topic}". 
    يجب استبدال هذا النص بمحتوى حقيقي ومناسب لموضوع الصفحة. 
    المحتوى المناسب سيتضمن معلومات مفصلة عن "${topic}"، 
    بما في ذلك الميزات والفوائد والمواصفات والخدمات ذات الصلة.
    
    هذا المحتوى المؤقت يضمن أن الصفحة تحتوي على عدد كافٍ من الكلمات لتحسين محركات البحث،
    مما يساعد على تحسين تصنيف الصفحة في نتائج البحث.
    
    يجب أن يتضمن المحتوى النهائي معلومات محددة ومفيدة للزوار،
    مع التركيز على تقديم قيمة حقيقية بدلاً من مجرد الكلمات لتحسين محركات البحث.
    
    عند إنشاء المحتوى النهائي، يجب مراعاة استخدام الكلمات الرئيسية المناسبة،
    وتنظيم المحتوى بشكل منطقي، واستخدام العناوين الفرعية لتقسيم المحتوى،
    وتضمين دعوات للعمل واضحة ومناسبة.]`;
  }

  return `[Placeholder content: This is example content for a page about "${topic}". 
  This text should be replaced with real, relevant content for the page topic. 
  Appropriate content would include detailed information about "${topic}", 
  including features, benefits, specifications, and related services.
  
  This placeholder content ensures the page has sufficient word count for SEO purposes,
  helping to improve the page's ranking in search results.
  
  The final content should include specific and helpful information for visitors,
  focusing on providing real value rather than just words for SEO.
  
  When creating the final content, consider using appropriate keywords,
  organizing the content logically, using subheadings to break up the content,
  and including clear and appropriate calls to action.]`;
}

export default {
  THRESHOLDS,
  countWords,
  calculateTextRatio,
  analyzeContent,
  hasSufficientContent,
  generatePlaceholderContent
};
