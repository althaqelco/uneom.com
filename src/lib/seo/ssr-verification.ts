/**
 * Server-Side Rendering Verification
 * 
 * This utility helps diagnose and fix the "2 Word Count / Low Text Ratio" issue (E003)
 * by verifying that content is properly rendered server-side and not exclusively client-side.
 * 
 * The low text ratio problem occurs when pages have minimal server-rendered text content
 * with most content being loaded by JavaScript after initial page load, making it less
 * accessible to search engine crawlers.
 */

/**
 * Calculate the text to HTML ratio for a given HTML string
 * @param htmlContent The HTML content to analyze
 * @returns Text to HTML ratio as a percentage
 */
export function calculateTextToHtmlRatio(htmlContent: string): number {
  if (!htmlContent) return 0;
  
  // Extract visible text content (excluding HTML tags, scripts, and styles)
  const textContent = htmlContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Calculate ratio
  const textLength = textContent.length;
  const htmlLength = htmlContent.length;
  
  if (htmlLength === 0) return 0;
  return (textLength / htmlLength) * 100;
}

/**
 * Count the number of words in a given text
 * @param text The text to count words in
 * @returns Number of words
 */
export function countWords(text: string): number {
  if (!text) return 0;
  
  // Remove extra whitespace and split by spaces
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .length;
}

/**
 * Analyze the quality of server-side rendered content
 * @param htmlContent The HTML content to analyze
 * @returns Analysis results
 */
export function analyzeServerRenderedContent(htmlContent: string): {
  textToHtmlRatio: number;
  wordCount: number;
  hasH1Tag: boolean;
  hasMetaDescription: boolean;
  hasSufficientContent: boolean;
  contentScore: number;
  suggestions: string[];
} {
  const textToHtmlRatio = calculateTextToHtmlRatio(htmlContent);
  
  // Extract visible text content
  const textContent = htmlContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const wordCount = countWords(textContent);
  
  // Check for H1 tag
  const hasH1Tag = /<h1[^>]*>.*?<\/h1>/i.test(htmlContent);
  
  // Check for meta description
  const hasMetaDescription = /<meta[^>]*name=["']description["'][^>]*>/i.test(htmlContent);
  
  // Check if there's sufficient content (minimum 300 words is a common SEO recommendation)
  const hasSufficientContent = wordCount >= 300;
  
  // Calculate an overall content score (max 100)
  let contentScore = 0;
  
  // Word count contributes 40% of the score (max 40 points)
  contentScore += Math.min(wordCount / 15, 40);
  
  // Text-to-HTML ratio contributes 30% of the score (max 30 points)
  contentScore += Math.min(textToHtmlRatio * 3, 30);
  
  // H1 tag contributes 15% of the score
  if (hasH1Tag) contentScore += 15;
  
  // Meta description contributes 15% of the score
  if (hasMetaDescription) contentScore += 15;
  
  // Generate suggestions based on the analysis
  const suggestions: string[] = [];
  
  if (wordCount < 300) {
    suggestions.push(`Add more textual content (currently ${wordCount} words, recommend at least 300)`);
  }
  
  if (textToHtmlRatio < 10) {
    suggestions.push(`Improve text-to-HTML ratio (currently ${textToHtmlRatio.toFixed(2)}%, recommend at least 10%)`);
  }
  
  if (!hasH1Tag) {
    suggestions.push('Add an H1 tag with the main page title');
  }
  
  if (!hasMetaDescription) {
    suggestions.push('Add a meta description tag');
  }
  
  return {
    textToHtmlRatio,
    wordCount,
    hasH1Tag,
    hasMetaDescription,
    hasSufficientContent,
    contentScore: Math.round(contentScore),
    suggestions
  };
}

/**
 * Verify if a page has the minimum required text content for good SEO
 * @param htmlContent The HTML content to verify
 * @returns Whether the content passes the minimum requirements
 */
export function verifyMinimumTextContent(htmlContent: string): boolean {
  const { wordCount, hasH1Tag, hasMetaDescription, textToHtmlRatio } = analyzeServerRenderedContent(htmlContent);
  
  // Basic requirements:
  // 1. At least 200 words
  // 2. Has an H1 tag
  // 3. Has a meta description
  // 4. Text-to-HTML ratio of at least 5%
  return wordCount >= 200 && hasH1Tag && hasMetaDescription && textToHtmlRatio >= 5;
}

/**
 * Generate a fix recommendation based on the content analysis
 * @param htmlContent The HTML content to analyze
 * @returns Fix recommendation
 */
export function generateContentFixRecommendation(htmlContent: string): string {
  const analysis = analyzeServerRenderedContent(htmlContent);
  
  if (analysis.contentScore >= 80) {
    return 'The page content is well-optimized for search engines.';
  }
  
  let recommendation = 'To improve the page content for search engines:\n\n';
  
  if (analysis.suggestions.length > 0) {
    recommendation += analysis.suggestions.map(s => `- ${s}`).join('\n');
  }
  
  recommendation += `\n\nCurrent stats:\n- Word count: ${analysis.wordCount}\n- Text-to-HTML ratio: ${analysis.textToHtmlRatio.toFixed(2)}%\n- Content score: ${analysis.contentScore}/100`;
  
  return recommendation;
}

export default {
  calculateTextToHtmlRatio,
  countWords,
  analyzeServerRenderedContent,
  verifyMinimumTextContent,
  generateContentFixRecommendation
};
