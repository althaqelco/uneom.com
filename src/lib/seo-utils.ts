/**
 * Utilidades SEO para auditar y mejorar páginas
 */

/**
 * Estima el número de palabras en un texto
 * @param text Texto a analizar
 * @returns Número de palabras
 */
export function countWords(text: string): number {
  if (!text || typeof text !== 'string') return 0;
  // Eliminar HTML tags si existen
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, " ");
  // Dividir por espacios y filtrar elementos vacíos
  return cleanText.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Verifica si una página tiene un H1 único y válido
 * @param html Contenido HTML de la página
 * @returns Objeto con información del análisis
 */
export function checkH1(html: string): { 
  hasH1: boolean;
  count: number;
  h1Text: string | null;
  isValid: boolean;
} {
  if (!html) return { hasH1: false, count: 0, h1Text: null, isValid: false };
  
  // Expresión regular para encontrar todos los H1
  const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gi;
  const matches = [...html.matchAll(h1Regex)];
  
  const result = {
    hasH1: matches.length > 0,
    count: matches.length,
    h1Text: matches.length > 0 ? matches[0][1].trim() : null,
    isValid: matches.length === 1 && matches[0][1].trim().length > 0
  };
  
  return result;
}

/**
 * Verifica si una página tiene una estructura de encabezados válida (H1, H2, H3...)
 * @param html Contenido HTML de la página
 * @returns Objeto con información del análisis
 */
export function checkHeadingStructure(html: string): {
  isValid: boolean;
  issues: string[];
  headings: { level: number; text: string }[];
} {
  if (!html) return { isValid: false, issues: ['No content provided'], headings: [] };
  
  // Expresión regular para encontrar todos los encabezados H1-H6
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  const matches = [...html.matchAll(headingRegex)];
  
  const headings = matches.map(match => ({
    level: parseInt(match[1], 10),
    text: match[2].trim()
  }));
  
  const issues: string[] = [];
  
  // Verificar si hay un H1
  if (!headings.some(h => h.level === 1)) {
    issues.push('Missing H1 heading');
  }
  
  // Verificar si hay múltiples H1
  if (headings.filter(h => h.level === 1).length > 1) {
    issues.push('Multiple H1 headings found');
  }
  
  // Verificar saltos en la estructura (por ejemplo, H1 -> H3 sin H2)
  let previousLevel = 0;
  for (const heading of headings) {
    if (heading.level > previousLevel + 1 && heading.level !== 1) {
      issues.push(`Heading structure skip: H${previousLevel} to H${heading.level}`);
    }
    previousLevel = heading.level;
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    headings
  };
}

/**
 * Comprueba si la página tiene suficiente contenido textual
 * @param html Contenido HTML
 * @param minWords Número mínimo de palabras recomendado (por defecto 300)
 * @returns Objeto con resultado de la evaluación
 */
export function checkContentSufficiency(html: string, minWords = 300): {
  isValid: boolean;
  wordCount: number;
  textRatio: number; // Relación texto/HTML
  assessment: 'poor' | 'fair' | 'good' | 'excellent';
} {
  if (!html) return { isValid: false, wordCount: 0, textRatio: 0, assessment: 'poor' };
  
  // Eliminar scripts y estilos
  const contentHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  
  // Extraer texto sin etiquetas
  const plainText = contentHtml.replace(/<\/?[^>]+(>|$)/g, " ").trim();
  
  const wordCount = countWords(plainText);
  const textRatio = plainText.length / html.length;
  
  // Evaluación del contenido
  let assessment: 'poor' | 'fair' | 'good' | 'excellent' = 'poor';
  if (wordCount >= minWords * 1.5 && textRatio > 0.3) {
    assessment = 'excellent';
  } else if (wordCount >= minWords && textRatio > 0.2) {
    assessment = 'good';
  } else if (wordCount >= minWords * 0.7 || textRatio > 0.15) {
    assessment = 'fair';
  }
  
  return {
    isValid: wordCount >= minWords,
    wordCount,
    textRatio,
    assessment
  };
}

/**
 * Verifica meta etiquetas básicas para SEO
 * @param html Contenido HTML
 * @returns Objeto con resultados de verificación
 */
export function checkMetaTags(html: string): {
  hasTitle: boolean;
  hasDescription: boolean;
  hasCanonical: boolean;
  hasHreflang: boolean;
  titleLength: number;
  descriptionLength: number;
  issues: string[];
} {
  const result = {
    hasTitle: false,
    hasDescription: false,
    hasCanonical: false,
    hasHreflang: false,
    titleLength: 0,
    descriptionLength: 0,
    issues: [] as string[]
  };
  
  // Verificar title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  result.hasTitle = !!titleMatch;
  if (titleMatch) {
    const titleText = titleMatch[1].trim();
    result.titleLength = titleText.length;
    
    if (titleText.length < 30) {
      result.issues.push('Title too short (< 30 chars)');
    } else if (titleText.length > 60) {
      result.issues.push('Title too long (> 60 chars)');
    }
  } else {
    result.issues.push('Missing title tag');
  }
  
  // Verificar meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) || 
                   html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  
  result.hasDescription = !!descMatch;
  if (descMatch) {
    const descText = descMatch[1].trim();
    result.descriptionLength = descText.length;
    
    if (descText.length < 120) {
      result.issues.push('Description too short (< 120 chars)');
    } else if (descText.length > 160) {
      result.issues.push('Description too long (> 160 chars)');
    }
  } else {
    result.issues.push('Missing meta description');
  }
  
  // Verificar canonical
  result.hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
  if (!result.hasCanonical) {
    result.issues.push('Missing canonical link');
  }
  
  // Verificar hreflang
  result.hasHreflang = /<link[^>]*rel=["']alternate["'][^>]*hreflang=[^>]*>/i.test(html);
  if (!result.hasHreflang) {
    result.issues.push('Missing hreflang tags');
  }
  
  return result;
}

export default {
  countWords,
  checkH1,
  checkHeadingStructure,
  checkContentSufficiency,
  checkMetaTags
}; 