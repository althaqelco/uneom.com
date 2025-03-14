# UNEOM Website SEO Optimization Guide

This guide provides instructions for implementing and maintaining the enhanced SEO system for the UNEOM website, optimized for ranking in Saudi Arabia for both Arabic and English versions.

## Table of Contents

1. [Overview](#overview)
2. [Components](#components)
3. [Implementation Guide](#implementation-guide)
4. [Page-Specific SEO](#page-specific-seo)
5. [Schema.org Markup](#schemaorg-markup)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Overview

The SEO system includes the following key features:

- Meta tags management for title, description, and keywords
- Open Graph and Twitter Card meta tags for social sharing
- Structured data (Schema.org) implementation
- Multilingual SEO support for English and Arabic
- hreflang tags for language alternatives
- Canonical URL management
- Breadcrumb support
- Industry-specific optimizations

## Components

The SEO system consists of several components:

1. **SEO Component** (`src/components/SEO.tsx`): Client component for page-level SEO
2. **SchemaMarkup Component** (`src/components/SchemaMarkup.tsx`): Client component for structured data
3. **SEOSchemaMarkup Component** (`src/components/SEOSchemaMarkup.tsx`): Base schema markup component
4. **Schema Libraries** (`src/lib/schema/`): Schema.org structured data generators
    - `organization.ts`: Organization schema
    - `product.ts`: Product and ProductList schemas
    - `faq.ts`: FAQ schema
    - `review.ts`: Review and rating schemas
5. **i18n Support** (`src/lib/i18n/`): Internationalization utilities
    - `config.ts`: Language configuration
    - `client.ts`: Client-side language hooks
    - `seo.ts`: SEO metadata management
    - `translations/seo-data.ts`: Localized SEO content

## Implementation Guide

### 1. Base Layout Integration

Add the `SEOSchemaMarkup` component to your base layout:

```tsx
// app/[locale]/layout.tsx
import SEOSchemaMarkup from '@/components/SEOSchemaMarkup';

export default function RootLayout({ children, params }) {
  const { locale } = params;
  
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* Add SEOSchemaMarkup for organization data on all pages */}
        <SEOSchemaMarkup locale={locale} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 2. Page-Level SEO

Add the `SEO` component to individual pages:

```tsx
// app/[locale]/about/page.tsx
'use client';

import SEO from '@/components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About UNEOM"
        description="UNEOM provides integrated uniform solutions tailored for businesses across Saudi Arabia and the Middle East."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' }
        ]}
      />
      
      {/* Page content */}
    </>
  );
}
```

### 3. Product Pages with Structured Data

For product pages, use the `SchemaMarkup` component:

```tsx
// app/[locale]/products/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import SEO from '@/components/SEO';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { getProduct } from '@/lib/data';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  
  return (
    <>
      <SEO 
        title={product.name}
        description={product.description}
        ogImage={product.image}
        ogType="product"
      />
      
      <SchemaMarkup 
        type="product"
        data={product}
        pageUrl={`/products/${id}`}
      />
      
      {/* Product content */}
    </>
  );
}
```

### 4. FAQ Pages

For FAQ pages, implement the FAQ schema:

```tsx
// app/[locale]/faq/page.tsx
'use client';

import SEO from '@/components/SEO';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { getFAQs } from '@/lib/data';

export default function FAQPage() {
  const faqs = getFAQs();
  
  return (
    <>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about UNEOM's products and services."
      />
      
      <SchemaMarkup 
        type="faq"
        data={faqs}
      />
      
      {/* FAQ content */}
    </>
  );
}
```

### 5. Industry Pages

For industry-specific pages, use industry FAQs:

```tsx
// app/[locale]/industries/healthcare/page.tsx
'use client';

import SEO from '@/components/SEO';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export default function HealthcareIndustryPage() {
  return (
    <>
      <SEO 
        title="Healthcare Uniforms & Scrubs"
        description="UNEOM provides high-quality medical uniforms and scrubs designed for healthcare professionals in Saudi Arabia."
      />
      
      <SchemaMarkup 
        type="faq"
        data={{ industry: 'healthcare' }}
      />
      
      {/* Industry content */}
    </>
  );
}
```

## Page-Specific SEO

Update the `seo-data.ts` file with page-specific metadata:

```typescript
// src/lib/i18n/translations/seo-data.ts
export const seoData = {
  en: {
    home: {
      title: "UNEOM - Saudi Arabia's Leading Provider of Professional Uniforms",
      description: "UNEOM provides integrated uniform solutions tailored specifically for businesses across Saudi Arabia and the Middle East.",
      keywords: "uniforms, Saudi Arabia, professional uniforms, scrubs, corporate uniforms"
    },
    about: {
      title: "About UNEOM - Our Story and Mission",
      description: "Learn about UNEOM's journey to become Saudi Arabia's premier provider of high-quality professional uniforms and business wear.",
      keywords: "UNEOM history, uniform company Saudi Arabia, Saudi uniform provider"
    },
    // Add more pages...
  },
  ar: {
    home: {
      title: "يونيوم - المزود الرائد للأزياء المهنية في المملكة العربية السعودية",
      description: "توفر يونيوم حلول أزياء موحدة متكاملة مصممة خصيصًا للشركات في جميع أنحاء المملكة العربية السعودية والشرق الأوسط.",
      keywords: "أزياء موحدة, المملكة العربية السعودية, أزياء مهنية, ملابس طبية, زي موحد للشركات"
    },
    about: {
      title: "عن يونيوم - قصتنا ومهمتنا",
      description: "تعرف على رحلة يونيوم لتصبح المزود الأول للأزياء المهنية عالية الجودة وملابس الأعمال في المملكة العربية السعودية.",
      keywords: "تاريخ يونيوم, شركة أزياء موحدة سعودية, مزود أزياء سعودي"
    },
    // Add more pages...
  }
};

export default seoData;
```

## Schema.org Markup

The system provides several schema types:

1. **Organization Schema**: Company information
2. **Product Schema**: Product details
3. **FAQ Schema**: Questions and answers
4. **Review Schema**: Customer reviews and ratings
5. **Local Business Schema**: Physical location information

Use the `MultiSchemaMarkup` component to combine multiple schemas:

```tsx
import { MultiSchemaMarkup } from '@/components/SchemaMarkup';

<MultiSchemaMarkup 
  schemas={[
    { type: 'organization' },
    { type: 'product', data: product, pageUrl: '/products/123' },
    { type: 'faq', data: faqs }
  ]}
/>
```

## Best Practices

1. **Title Tags**: Keep between 50-60 characters, include target keywords
2. **Meta Descriptions**: Keep between 150-160 characters, include call-to-action
3. **URLs**: Use clean, descriptive URLs with keywords
4. **Images**: Always provide alt text and optimize image sizes
5. **Mobile Optimization**: Ensure all pages are responsive
6. **Page Speed**: Monitor and optimize loading times
7. **Content Strategy**: Create unique, valuable content for each page
8. **Internal Linking**: Link between related pages
9. **External Linking**: Link to authoritative sources
10. **Regular Updates**: Keep content fresh and relevant

## Troubleshooting

### Schema Validation

Test your schema implementation using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Common Issues

1. **Missing Language Alternates**: Ensure hreflang tags are properly implemented
2. **Duplicate Content**: Use canonical URLs to prevent duplicate content issues
3. **Missing Structured Data**: Verify schema is rendered correctly
4. **Mobile Compatibility**: Test on different devices
5. **Performance Issues**: Optimize page loading speed

For additional support, refer to the code documentation or contact the development team. 