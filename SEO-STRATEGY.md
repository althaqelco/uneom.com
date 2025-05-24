# UNEOM SEO Strategy 2024

This document outlines the comprehensive SEO strategy for fixing issues identified in the Screaming Frog crawler report.

## 1. Key Issues From Screaming Frog Analysis

### Critical Issues
- **Blocked Resources**: Essential JS/CSS files were incorrectly blocked in robots.txt
- **Word Count / Low Text Ratio**: Many pages have insufficient textual content for search engines
- **Missing H1 Tags**: Several pages lack proper H1 headings
- **Duplicate/Generic Meta Descriptions & Titles**: Pages sharing the same meta information

### Technical Architecture Issues
- **Client-Side vs Server-Side Rendering**: 'use client' directives in pages with metadata exports cause conflicts
- **URL Structure & Canonicalization**: Inconsistent handling of trailing slashes
- **Hreflang Implementation**: Missing or incorrect language alternative signals

## 2. Implementation Strategy

### Separation of Client and Server Components

We've implemented a strict separation of concerns:

1. **Client Components (`client.tsx`)**
   - Include the 'use client' directive
   - House all interactive UI elements
   - Contain React state/hooks and event handlers
   - Include Schema.org structured data through our `SchemaMarkup` component

2. **Server Components (`page.tsx`)**
   - No 'use client' directive
   - Export the Next.js metadata object for SEO
   - Import and render the corresponding client component
   - Leverage server-side rendering benefits for SEO

### Metadata Implementation

For proper SEO signaling, we've created:

1. **ServerSEO Component** (`src/components/seo/ServerSEO.tsx`)
   - Provides a standardized way to generate Next.js metadata
   - Ensures proper canonical URLs
   - Implements hreflang correctly for bilingual support (en-SA, ar-SA, x-default)
   - Makes metadata generation consistent across the site

2. **i18n Configuration** (`src/lib/i18n/config.ts`)
   - Centralizes locale configuration
   - Provides utilities for URL generation between language variants
   - Maintains consistent language codes and country targeting

### Robots.txt Optimization

We've updated the robots.txt file to:
- Allow access to essential Next.js static files
- Properly block non-user-facing content
- Include sitemap references

### URL Structure Enforcement

We enforce a consistent URL structure across the site:
- English URLs at the root path: `https://uneom.com/path/`
- Arabic URLs with `/ar/` prefix: `https://uneom.com/ar/path/`
- All canonical URLs end with trailing slashes 
- 301 redirects in place for proper path normalization

## 3. Content Quality Improvements

To address the "2 Word Count / Low Text Ratio" issue:

1. **Enhanced Content Templates**
   - Each page type now has rich, structured content
   - Proper HTML semantic structure with headers (H1, H2, H3)
   - Sufficient word count (300+ words minimum per page)

2. **Bilingual Quality**
   - Arabic content is not directly translated, but independently optimized
   - Cultural and linguistic nuances respected in both languages
   - Keyword research specific to each language market

## 4. Schema.org Structured Data

We've implemented comprehensive structured data:

1. **Product Pages**
   - Full Product schema with prices, descriptions, availability
   - Aggregate ratings where applicable

2. **Information Pages**
   - WebPage, Article, or FAQPage schemas as appropriate
   - Organization schema for company pages

3. **Location Pages**
   - LocalBusiness schema with accurate NAP data 
   - Geographic coordinates and service areas

## 5. Monitoring & Maintenance

We've created tools to maintain SEO quality:

1. **SEO Checker** (`src/scripts/seo-checker.js`)
   - Scans the codebase for SEO issues
   - Identifies missing H1 tags, metadata, hreflang
   - Reports word count issues

2. **Migration Guide** (`src/scripts/update-metadata.js`) 
   - Documents the transition to server-side metadata
   - Provides examples for developers

## 6. Implementation Roadmap

1. **Phase 1: Technical Foundation** ✓
   - Create server-side SEO components
   - Fix robots.txt
   - Implement proper redirects
   - Establish client/server component pattern

2. **Phase 2: Page-by-Page Implementation** (In Progress)
   - Apply the new pattern to all pages
   - Ensure proper H1 tags
   - Add comprehensive metadata
   - Implement Schema.org markup

3. **Phase 3: Content Enrichment**
   - Enhance textual content 
   - Optimize for relevant keywords
   - Ensure proper semantic structure

4. **Phase 4: Verification & Monitoring**
   - Re-crawl with Screaming Frog
   - Test in Google Search Console
   - Ongoing monitoring

This strategy addresses all issues identified in the Screaming Frog report while establishing a sustainable pattern for future development. 