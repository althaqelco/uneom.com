/**
 * AI Search Optimized SEO Component
 * مكون SEO محسن للبحث بالذكاء الاصطناعي
 * 
 * Compatible with:
 * - Google SGE (Search Generative Experience)
 * - Bing Copilot
 * - ChatGPT Browse
 * - Perplexity AI
 * - Claude AI Search
 * 
 * Features:
 * - Speakable content markup
 * - FAQ structured data
 * - HowTo schema when applicable
 * - Entity optimization
 * - Featured snippet targeting
 * - Voice search optimization
 */

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import {
  generateAIOptimizedContent,
  generateSpeakableSchema,
  generateHowToSchema,
  generateItemListSchema,
  optimizeTitleForAI,
  optimizeDescriptionForAI,
  AI_OPTIMIZED_FAQS,
  AI_SEARCH_KEYWORDS,
  AISearchConfig,
  AIFriendlyContent,
  Entity
} from '@/lib/seo/ai-search-optimization-2025';

interface AISearchOptimizedSEOProps {
  // Basic SEO
  title: string;
  description: string;
  keywords?: string[];
  
  // Page configuration
  locale?: 'en' | 'ar';
  pageType?: 'homepage' | 'product' | 'service' | 'industry' | 'blog' | 'location' | 'faq';
  industryType?: 'healthcare' | 'corporate' | 'hospitality' | 'aviation' | 'education' | 'industrial' | 'security' | 'manufacturing';
  
  // Content
  primaryEntity?: string;
  secondaryEntities?: string[];
  keyPoints?: string[];
  summary?: string;
  
  // FAQs - can be custom or auto-generated based on industry
  customFaqs?: { question: string; answer: string }[];
  autoGenerateFaqs?: boolean;
  
  // HowTo content (optional)
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string; image?: string }[];
    totalTime?: string;
  };
  
  // Product list (optional)
  productList?: {
    name: string;
    description: string;
    items: { name: string; url: string; image?: string; description?: string }[];
  };
  
  // Images
  image?: string;
  imageAlt?: string;
  
  // Canonical & alternates
  canonicalUrl?: string;
  alternateUrls?: { en: string; ar: string };
  
  // Additional
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  
  // Speakable
  speakableSelectors?: string[];
  
  // Trust signals
  trustSignals?: string[];
  
  // Disable certain features
  noIndex?: boolean;
}

const AISearchOptimizedSEO: React.FC<AISearchOptimizedSEOProps> = ({
  title,
  description,
  keywords = [],
  locale = 'en',
  pageType = 'service',
  industryType,
  primaryEntity = 'UNEOM Professional Uniforms',
  secondaryEntities = [],
  keyPoints = [],
  summary,
  customFaqs,
  autoGenerateFaqs = true,
  howTo,
  productList,
  image = '/images/og-image.jpg',
  imageAlt,
  canonicalUrl,
  alternateUrls,
  author,
  publishedTime,
  modifiedTime,
  speakableSelectors = ['h1', '.summary', '.key-points', '.faq-answer'],
  trustSignals = [],
  noIndex = false
}) => {
  const pathname = usePathname();
  const currentUrl = canonicalUrl || `https://uneom.com${pathname}`;
  const isArabic = locale === 'ar';
  
  // Get optimized title and description
  const optimizedTitle = optimizeTitleForAI(title, locale, pageType);
  const optimizedDescription = optimizeDescriptionForAI(description, locale);
  
  // Get FAQs - either custom or auto-generated
  let faqs: { question: string; answer: string }[] = customFaqs || [];
  if (autoGenerateFaqs && industryType && !customFaqs?.length) {
    const industryFaqs = AI_OPTIMIZED_FAQS[industryType as keyof typeof AI_OPTIMIZED_FAQS];
    if (industryFaqs) {
      faqs = industryFaqs[locale] || [];
    }
  }
  
  // Build entities
  const entities: Entity[] = [
    {
      name: 'UNEOM',
      type: 'Organization',
      description: isArabic 
        ? 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية في السعودية'
        : 'UNEOM - Leading professional uniform manufacturer in Saudi Arabia',
      sameAs: [
        'https://www.facebook.com/uneomuniforms/',
        'https://www.instagram.com/uneomuniforms/',
        'https://www.linkedin.com/company/uneom'
      ]
    }
  ];
  
  // Add industry-specific entity if applicable
  if (industryType) {
    entities.push({
      name: primaryEntity,
      type: 'Service',
      description: description
    });
  }
  
  // Build AI-friendly content structure
  const aiContent: AIFriendlyContent = {
    headline: title,
    summary: summary || description,
    keyPoints,
    faqs,
    entities,
    callToAction: isArabic ? 'احصل على عرض سعر مجاني' : 'Get a free quote'
  };
  
  // Build AI config
  const aiConfig: AISearchConfig = {
    locale,
    pageType,
    primaryEntity,
    secondaryEntities,
    targetQueries: AI_SEARCH_KEYWORDS[locale]?.primary.slice(0, 5) || [],
    speakableSelectors
  };
  
  // Generate main schema
  const mainSchema = generateAIOptimizedContent(aiConfig, aiContent);
  
  // Generate speakable schema
  const speakableSchema = generateSpeakableSchema(
    optimizedTitle,
    optimizedDescription,
    speakableSelectors
  );
  
  // Generate HowTo schema if provided
  const howToSchema = howTo ? generateHowToSchema(
    howTo.name,
    howTo.description,
    howTo.steps,
    howTo.totalTime
  ) : null;
  
  // Generate ItemList schema if products provided
  const itemListSchema = productList ? generateItemListSchema(
    productList.name,
    productList.description,
    productList.items
  ) : null;
  
  // Build Open Graph tags
  const ogImage = image.startsWith('http') ? image : `https://uneom.com${image}`;
  
  // Determine language alternates
  const enUrl = alternateUrls?.en || (isArabic 
    ? currentUrl.replace('/ar/', '/').replace('/ar', '/') 
    : currentUrl);
  const arUrl = alternateUrls?.ar || (isArabic 
    ? currentUrl 
    : `/ar${pathname}`);

  return (
    <>
      {/* Primary Meta Tags */}
      <meta name="title" content={optimizedTitle} />
      <meta name="description" content={optimizedDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noIndex 
          ? 'noindex, nofollow' 
          : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        } 
      />
      <meta 
        name="googlebot" 
        content={noIndex 
          ? 'noindex, nofollow' 
          : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        } 
      />
      <meta 
        name="bingbot" 
        content={noIndex 
          ? 'noindex, nofollow' 
          : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        } 
      />
      
      {/* AI Crawlers - 2024-2026 Optimization */}
      <meta name="ChatGPT-User-Agent" content="allow" />
      <meta name="GPTBot" content="index, follow" />
      <meta name="Google-Extended" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />
      <meta name="ClaudeBot" content="index, follow" />
      <meta name="anthropic-ai" content="index, follow" />
      
      {/* Author & Publication */}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta name="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
      
      {/* Canonical & Hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang="en-SA" href={enUrl} />
      <link rel="alternate" hrefLang="ar-SA" href={arUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={pageType === 'blog' ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt || title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_SA'} />
      <meta property="og:locale:alternate" content={isArabic ? 'en_SA' : 'ar_SA'} />
      <meta property="og:site_name" content="UNEOM - يونيوم" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uneom_sa" />
      <meta name="twitter:creator" content="@uneom_sa" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt || title} />
      
      {/* Trust Signals */}
      {trustSignals.length > 0 && (
        <meta name="trust-signals" content={trustSignals.join(', ')} />
      )}
      
      {/* Main AI-Optimized Schema */}
      <Script
        id="ai-optimized-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      
      {/* Speakable Schema for Voice Search */}
      <Script
        id="speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      
      {/* HowTo Schema if applicable */}
      {howToSchema && (
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      
      {/* ItemList Schema for product lists */}
      {itemListSchema && (
        <Script
          id="itemlist-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
    </>
  );
};

export default AISearchOptimizedSEO;

