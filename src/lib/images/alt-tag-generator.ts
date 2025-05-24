/**
 * Alt Tag Generator
 * 
 * This utility helps generate descriptive alt tags for images based on context,
 * improving accessibility and SEO. It analyzes image file names, page context,
 * and surrounding content to suggest appropriate alt text.
 */

import { DEFAULT_LANGUAGE } from '@/lib/i18n/config';

// Generic alt text templates by context
interface AltTextTemplates {
  [key: string]: {
    en: string[];
    ar: string[];
  };
}

// Alt text templates by context
const altTextTemplates: AltTextTemplates = {
  corporate: {
    en: [
      '{industry} professional uniform in {color}',
      '{industry} staff wearing corporate attire',
      'Business uniform for {industry} professionals',
      'Corporate {garment} for office workers',
      'Professional {garment} for {industry} environment'
    ],
    ar: [
      'زي موحد مهني لقطاع {industry} باللون {color}',
      'موظفي {industry} يرتدون الزي الرسمي للشركات',
      'زي موحد للعمل لمهنيي {industry}',
      '{garment} للشركات لموظفي المكاتب',
      '{garment} مهني لبيئة {industry}'
    ]
  },
  healthcare: {
    en: [
      'Medical {garment} for healthcare professionals',
      'Hospital uniform in {color} for {role}',
      'Healthcare staff wearing {garment}',
      'Medical uniform designed for {role}',
      '{role} wearing professional healthcare attire'
    ],
    ar: [
      '{garment} طبي للمتخصصين في الرعاية الصحية',
      'زي المستشفى باللون {color} لـ {role}',
      'طاقم الرعاية الصحية يرتدي {garment}',
      'زي طبي مصمم لـ {role}',
      '{role} يرتدي ملابس الرعاية الصحية المهنية'
    ]
  },
  hospitality: {
    en: [
      'Hotel staff uniform for {role}',
      'Restaurant {garment} in {color}',
      'Hospitality uniform designed for {role}',
      'Professional attire for {industry} staff',
      '{industry} worker wearing service uniform'
    ],
    ar: [
      'زي موظفي الفندق لـ {role}',
      '{garment} المطعم باللون {color}',
      'زي الضيافة مصمم لـ {role}',
      'ملابس مهنية لموظفي {industry}',
      'عامل {industry} يرتدي زي الخدمة'
    ]
  },
  location: {
    en: [
      'UNEOM store in {location}',
      'Our {location} showroom',
      'UNEOM headquarters in {location}',
      'UNEOM branch in {location}',
      'Uniform display at our {location} location'
    ],
    ar: [
      'متجر UNEOM في {location}',
      'صالة العرض لدينا في {location}',
      'المقر الرئيسي لـ UNEOM في {location}',
      'فرع UNEOM في {location}',
      'عرض الزي الموحد في موقعنا في {location}'
    ]
  },
  product: {
    en: [
      '{product} in {color} color',
      'High-quality {product} for professional use',
      '{product} designed for {industry} sector',
      'Premium {product} made from {material}',
      'Durable {product} for daily work use'
    ],
    ar: [
      '{product} باللون {color}',
      '{product} عالي الجودة للاستخدام المهني',
      '{product} مصمم لقطاع {industry}',
      '{product} فاخر مصنوع من {material}',
      '{product} متين للاستخدام اليومي في العمل'
    ]
  }
};

// Color terms for substitution
const colorTerms = {
  en: ['blue', 'white', 'black', 'gray', 'navy', 'red', 'green', 'khaki', 'beige', 'teal'],
  ar: ['أزرق', 'أبيض', 'أسود', 'رمادي', 'كحلي', 'أحمر', 'أخضر', 'كاكي', 'بيج', 'أزرق مخضر']
};

// Garment terms for substitution
const garmentTerms = {
  en: ['uniform', 'shirt', 'pants', 'suit', 'dress', 'scrubs', 'coat', 'jacket', 'vest', 'workwear'],
  ar: ['زي موحد', 'قميص', 'بنطلون', 'بدلة', 'فستان', 'سكراب', 'معطف', 'جاكيت', 'صدرية', 'ملابس العمل']
};

// Role terms for substitution
const roleTerms = {
  en: ['doctor', 'nurse', 'receptionist', 'waiter', 'chef', 'manager', 'staff', 'worker', 'technician', 'specialist'],
  ar: ['طبيب', 'ممرضة', 'موظف استقبال', 'نادل', 'شيف', 'مدير', 'موظف', 'عامل', 'فني', 'متخصص']
};

// Industry terms for substitution
const industryTerms = {
  en: ['healthcare', 'hospitality', 'corporate', 'industrial', 'retail', 'education', 'security', 'food service', 'aviation', 'banking'],
  ar: ['الرعاية الصحية', 'الضيافة', 'الشركات', 'الصناعة', 'البيع بالتجزئة', 'التعليم', 'الأمن', 'خدمة الطعام', 'الطيران', 'البنوك']
};

// Product terms for substitution
const productTerms = {
  en: ['uniform', 'workwear', 'scrubs', 'lab coat', 'chef jacket', 'corporate suit', 'safety vest', 'work shirt', 'pants', 'coverall'],
  ar: ['زي موحد', 'ملابس العمل', 'سكراب', 'معطف مختبر', 'جاكيت شيف', 'بدلة شركات', 'سترة سلامة', 'قميص عمل', 'بنطلون', 'افرول']
};

// Location terms for substitution
const locationTerms = {
  en: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Khobar', 'Jubail', 'Tabuk', 'Abha', 'Najran'],
  ar: ['الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة', 'الخبر', 'الجبيل', 'تبوك', 'أبها', 'نجران']
};

// Material terms for substitution
const materialTerms = {
  en: ['cotton', 'polyester', 'wool', 'linen', 'denim', 'silk', 'nylon', 'microfiber', 'twill', 'canvas'],
  ar: ['قطن', 'بوليستر', 'صوف', 'كتان', 'دنيم', 'حرير', 'نايلون', 'مايكروفايبر', 'تويل', 'قماش قنب']
};

/**
 * Extract context keywords from a file path or name
 */
export function extractContextFromPath(imagePath: string): string[] {
  const path = imagePath.toLowerCase();
  const contexts: string[] = [];
  
  // Check for industry context
  if (path.includes('corporate') || path.includes('office') || path.includes('business')) {
    contexts.push('corporate');
  }
  if (path.includes('healthcare') || path.includes('medical') || path.includes('hospital')) {
    contexts.push('healthcare');
  }
  if (path.includes('hospitality') || path.includes('hotel') || path.includes('restaurant')) {
    contexts.push('hospitality');
  }
  
  // Check for location context
  if (path.includes('location') || path.includes('store') || path.includes('branch')) {
    contexts.push('location');
  }
  
  // Check for product context
  if (path.includes('product') || path.includes('uniform') || path.includes('garment')) {
    contexts.push('product');
  }
  
  // Default to product if no context found
  if (contexts.length === 0) {
    contexts.push('product');
  }
  
  return contexts;
}

/**
 * Pick a random term from the appropriate term list
 */
function getRandomTerm(termType: string, locale: string): string {
  const termMap: {[key: string]: {[locale: string]: string[]}} = {
    'color': colorTerms,
    'garment': garmentTerms,
    'role': roleTerms,
    'industry': industryTerms,
    'product': productTerms,
    'location': locationTerms,
    'material': materialTerms
  };
  
  const terms = termMap[termType][locale as keyof typeof colorTerms] || termMap[termType].en;
  const randomIndex = Math.floor(Math.random() * terms.length);
  return terms[randomIndex];
}

/**
 * Replace placeholders in template with appropriate terms
 */
function fillTemplate(template: string, locale: string): string {
  // Find all placeholders in the format {placeholder}
  const placeholderRegex = /{([^}]+)}/g;
  let match;
  let filledTemplate = template;
  
  // Replace each placeholder with a random appropriate term
  while ((match = placeholderRegex.exec(template)) !== null) {
    const placeholder = match[1];
    const term = getRandomTerm(placeholder, locale);
    filledTemplate = filledTemplate.replace(`{${placeholder}}`, term);
  }
  
  return filledTemplate;
}

/**
 * Generate an alt tag based on image path and page context
 */
export function generateAltTag(
  imagePath: string,
  pageType: string = '',
  locale: string = DEFAULT_LANGUAGE,
  specificContext: string = ''
): string {
  // Extract context from path if not provided
  const contexts = specificContext 
    ? [specificContext] 
    : pageType 
      ? [pageType] 
      : extractContextFromPath(imagePath);
  
  // Use the first context found
  const primaryContext = contexts[0];
  
  // Get templates for the context
  const templates = altTextTemplates[primaryContext]?.[locale as keyof typeof altTextTemplates[typeof primaryContext]] || 
                   altTextTemplates[primaryContext]?.en || 
                   altTextTemplates.product.en;
  
  // Pick a random template
  const randomIndex = Math.floor(Math.random() * templates.length);
  const template = templates[randomIndex];
  
  // Fill the template with appropriate terms
  return fillTemplate(template, locale);
}

/**
 * Create a more specific alt tag for an image when we have more context
 */
export function generateSpecificAltTag(
  imagePath: string,
  context: {
    industry?: string;
    garment?: string;
    color?: string;
    role?: string;
    product?: string;
    location?: string;
    material?: string;
  },
  locale: string = DEFAULT_LANGUAGE
): string {
  // Extract base context from path
  const contexts = extractContextFromPath(imagePath);
  const primaryContext = contexts[0];
  
  // Get templates for the context
  const templates = altTextTemplates[primaryContext]?.[locale as keyof typeof altTextTemplates[typeof primaryContext]] || 
                   altTextTemplates[primaryContext]?.en || 
                   altTextTemplates.product.en;
  
  // Pick a random template
  const randomIndex = Math.floor(Math.random() * templates.length);
  let template = templates[randomIndex];
  
  // Fill the template with provided context
  const placeholderRegex = /{([^}]+)}/g;
  let match;
  
  while ((match = placeholderRegex.exec(template)) !== null) {
    const placeholder = match[1];
    
    if (context[placeholder as keyof typeof context]) {
      template = template.replace(
        `{${placeholder}}`, 
        context[placeholder as keyof typeof context] as string
      );
    } else {
      // If specific context not provided, use random term
      template = template.replace(
        `{${placeholder}}`,
        getRandomTerm(placeholder, locale)
      );
    }
  }
  
  return template;
}

export default {
  generateAltTag,
  generateSpecificAltTag,
  extractContextFromPath
};
