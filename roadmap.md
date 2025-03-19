# Optimized Cursor AI Prompt for UNEOM.com NextJS Website

You are inside a new NextJS 14.2.23 project within the `uneom-3` directory. I need you to help me build a professional B2B uniform supplier website for UNEOM - Saudi Arabia's leading provider of professional uniforms and scrubs. The website should be bilingual (English/Arabic) with built-in shop functionality.

## Project Setup

```bash
# Current project: NextJS 14.2.23 (no src directory)
# Images are already in /public/images/
# Need to implement:
# - Statically generated pages with ISR
# - Shop functionality
# - Bilingual support (EN/AR with RTL for Arabic)
```

## Website Architecture

### Language Structure
- Primary site: uneom.com (English)
- Arabic version: uneom.com/ar/* (with RTL support)
- Use hreflang tags for language indication
- Implement locale switching with proper URL structure

### Navigation Menu
```jsx
const navigationItems = [
  {
    name: "Industries",
    dropdown: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Aviation", href: "/industries/aviation" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Corporate", href: "/industries/corporate" },
      { name: "Education", href: "/industries/education" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Security", href: "/industries/security" }
    ]
  },
  {
    name: "Services",
    dropdown: [
      { name: "Uniform Program Management", href: "/services/program-management" },
      { name: "Custom Design & Branding", href: "/services/custom-design" },
      { name: "Bulk Ordering", href: "/services/bulk-ordering" },
      { name: "Measurement Services", href: "/services/measurement-services" },
      { name: "Corporate Uniform Policies", href: "/services/uniform-policies" }
    ]
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Fabric Guide", href: "/resources/fabric-guide" },
      { name: "Size Guide", href: "/resources/size-guide" },
      { name: "Procurement Guide", href: "/resources/procurement-guide" },
      { name: "Uniform Policy Templates", href: "/resources/policy-templates" },
      { name: "Blog", href: "/blog" }
    ]
  },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Shop", href: "/shop" }
]
```

### Primary CTA
- "Request Quote" button prominently displayed in header

## Page Implementation Requirements

### Homepage (pages/index.js)
```jsx
// Key sections to implement:
// 1. Hero Section
//    - Headline: "Saudi Arabia's Leading Provider of Professional Uniforms & Scrubs for Businesses"
//    - Subheading: "Tailored B2B Solutions for Healthcare, Aviation, Hospitality & Corporate Sectors"
//    - CTA Buttons: "Request a Quote" + "Explore Industries"
//    - Background: High-quality image of professional uniforms on Saudi models
// 2. Trust Signals Section
//    - Years in business, clients served, Saudi-made options, compliance, delivery
// 3. Industry Categories Grid (6 industries with images and descriptions)
// 4. Client Testimonials Carousel (3-4 testimonials with logos)
// 5. Featured Products Section (4-6 best-selling products)
// 6. Quick Quote Form
// 7. Recent Blog Posts (3 latest articles)
```

### Industry Pages (pages/industries/[slug].js)
- Implement static paths generation for all 7 industries
- Each industry page should have:
  1. Hero with industry-specific headline and image
  2. Introduction paragraph for industry context
  3. Key Benefits Section (4-5 benefits with icons)
  4. Featured Products Grid specific to that industry
  5. Fabric Technology Section
  6. Customization Options
  7. Client Testimonials specific to industry
  8. CTA for consultation request
- Example content structure for Healthcare:
```jsx
const healthcareContent = {
  title: "Professional Medical Scrubs & Healthcare Uniforms in Saudi Arabia",
  introduction: "High-quality medical uniforms are essential in Saudi healthcare settings...",
  keyBenefits: [
    { title: "Saudi Healthcare Compliance", description: "..." },
    { title: "Islamic Dress Code Options", description: "..." },
    { title: "Climate-Appropriate Fabrics", description: "..." },
    { title: "Custom Branding Solutions", description: "..." }
  ],
  categories: [
    { name: "Emergency Department", products: [...] },
    { name: "Surgery", products: [...] },
    { name: "Pediatrics", products: [...] },
    // More departments
  ],
  fabricTechnologies: [...],
  testimonials: [...]
}
```
### Service Pages (pages/services/[slug].js)
- Static generation for 5 service pages
- Each service page should include:
  1. Service overview
  2. Service components/steps
  3. Visual process timeline
  4. Benefits section
  5. Case studies/examples
  6. Client testimonials
  7. CTA for service consultation

### Shop Implementation (pages/shop/*)
- Main shop page (pages/shop/index.js)
- Category pages (pages/shop/[category]/index.js)
- Product pages (pages/shop/[category]/[product].js)
- Include:
  1. Category navigation
  2. Filtering system
  3. Product grid
  4. Sorting options
  5. "Add to Quote" functionality
  6. Quick quote form

### About Page (pages/about.js)
- Company history
- Mission and values
- Team section
- Saudi market expertise
- Industry partnerships
- Quality standards and compliance

### Contact Page (pages/contact.js)
- Contact form
- Office locations in Saudi Arabia
- Map integration
- Contact information
- Social media links

### Blog Section (pages/blog/*)
- Blog index page with article grid
- Individual blog post pages with:
  1. Featured image
  2. Article content
  3. Author info
  4. Published date
  5. Related articles
  6. Social sharing

## Key Components to Create

### Layout Components
```jsx
// components/layout/MainLayout.js
// components/layout/Header.js
// components/layout/Footer.js
// components/layout/Navigation.js
// components/layout/LanguageSwitcher.js
// components/layout/RTLWrapper.js (for Arabic)
```

### UI Components
```jsx
// components/ui/Button.js (primary/secondary/outline variants)
// components/ui/Card.js
// components/ui/ProductCard.js
// components/ui/TestimonialCard.js
// components/ui/Container.js
// components/ui/SectionHeading.js
// components/ui/Dropdown.js
```

### Form Components
```jsx
// components/forms/QuoteForm.js
// components/forms/ContactForm.js
// components/forms/SearchForm.js
// components/forms/FilterForm.js
```

### Section Components
```jsx
// components/sections/HeroSection.js
// components/sections/TrustSignals.js
// components/sections/IndustryGrid.js
// components/sections/FeaturedProducts.js
// components/sections/TestimonialCarousel.js
// components/sections/BlogPreview.js
```

### Shop Components
```jsx
// components/shop/ProductGrid.js
// components/shop/ProductFilters.js
// components/shop/ColorSwatches.js
// components/shop/SizeChart.js
// components/shop/PricingTable.js
// components/shop/AddToQuoteButton.js
```

## Bilingual Implementation

### Language Detection and Switching
```jsx
// lib/i18n/config.js
// pages/_app.js - Language detection and context
// components/layout/LanguageSwitcher.js
```

### Content Structure
```jsx
// lib/i18n/translations/en.js
// lib/i18n/translations/ar.js
```

### RTL Support
```jsx
// styles/rtl.css
// components/layout/RTLWrapper.js
```

## SEO Implementation

### Global SEO Component
```jsx
// components/SEO.js - Dynamic meta tags
```

### Schema Markup
```jsx
// lib/schema/organization.js
// lib/schema/product.js
// lib/schema/breadcrumb.js
```

### Page-specific SEO
```jsx
// For each page, implement:
// - Custom title
// - Meta description
// - Open Graph tags
// - Twitter card tags
// - Canonical URL
// - hreflang tags
```

## Data Structure

### Industry Data
```jsx
// lib/data/industries.js
export const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Professional Medical Scrubs & Healthcare Uniforms in Saudi Arabia",
    description: "...",
    image: "/images/industries/healthcare.jpg",
    benefits: [...],
    products: [...],
    testimonials: [...],
    fabricTechnologies: [...],
    cta: {
      text: "Request Healthcare Uniform Consultation",
      url: "/contact?industry=healthcare"
    }
  },
  // Other industries
];
```

### Product Data
```jsx
// lib/data/products.js
export const products = [
  {
    id: "premium-scrubs",
    category: "medical-scrubs",
    name: "Premium Medical Scrubs",
    shortDescription: "Professional-grade scrubs with antimicrobial properties",
    description: "...",
    features: [...],
    images: [
      { src: "/images/products/scrubs/premium-1.jpg", alt: "Front view" },
      { src: "/images/products/scrubs/premium-2.jpg", alt: "Back view" },
      // More images
    ],
    colors: [
      { name: "Hospital Blue", value: "#1a5276", image: "/images/products/scrubs/premium-blue.jpg" },
      { name: "Surgical Green", value: "#117a65", image: "/images/products/scrubs/premium-green.jpg" },
      // More colors
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Polyester, 35% Cotton",
      gsm: "180",
      features: ["Antimicrobial", "Fluid-resistant", "Easy-care"]
    },
    customizationOptions: [...],
    relatedProducts: [...]
  },
  // Other products
];
```

### Service Data
```jsx
// lib/data/services.js
export const services = [
  {
    id: "program-management",
    name: "Uniform Program Management",
    title: "End-to-End Uniform Program Management for Saudi Corporations",
    description: "...",
    image: "/images/services/program-management.jpg",
    components: [...],
    process: [...],
    caseStudies: [...],
    testimonials: [...]
  },
  // Other services
];
```

## Color Scheme and Typography

```jsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf8e4',
          100: '#fbefc8',
          200: '#f8e599',
          300: '#f6db6b',
          400: '#f3d13d',
          500: '#f1c80f',
          600: '#c1a00c',
          700: '#917809',
          800: '#615006',
          900: '#302803',
          950: '#181401',
        },
        neutral: {
          // neutral shades
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
}
```

## Image Handling

```jsx
// components/ui/OptimizedImage.js - For responsive images
// lib/utils/imageLoader.js - For image optimization
```

## ISR Implementation

```jsx
// In all getStaticProps functions:
return {
  props: {
    // props data
  },
  revalidate: 3600, // Revalidate every hour
}
```

## API Routes

```jsx
// pages/api/quote-request.js - For quote form submissions
// pages/api/contact.js - For contact form submissions
// pages/api/newsletter.js - For newsletter subscriptions
```

## Mobile Optimization

```jsx
// components/layout/MobileMenu.js - Mobile navigation
// styles for responsive design in Tailwind
```

## Code Examples for Key Features

### Language Switcher
```jsx
const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(asPath, asPath, { locale: newLocale });
  };
  
  return (
    <button 
      onClick={switchLanguage} 
      className="flex items-center px-3 py-2 text-sm font-medium"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
};
```

### Quote Form
```jsx
const QuoteForm = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    industry: '',
    contactPerson: '',
    email: '',
    phone: '',
    uniformType: '',
    quantity: '',
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
      {/* Form fields */}
      <button 
        type="submit" 
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded"
      >
        Request Quote
      </button>
    </form>
  );
};
```

### Industry Page Template
```jsx
// pages/industries/[slug].js
export default function IndustryPage({ industry, locale }) {
  const isRTL = locale === 'ar';
  
  return (
    <Layout>
      <SEO 
        title={industry.title}
        description={industry.metaDescription}
      />
      
      <HeroSection 
        title={industry.title}
        subtitle={industry.subtitle}
        image={industry.heroImage}
      />
      
      <section className="py-12">
        <Container>
          <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-2/3">
              <SectionHeading>{industry.introTitle}</SectionHeading>
              <div className="prose max-w-none">
                {industry.introduction}
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={industry.introImage} 
                alt={industry.name} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <BenefitsSection benefits={industry.benefits} />
      
      <ProductsGrid 
        title={`${industry.name} Uniforms`}
        products={industry.featuredProducts}
      />
      
      <TestimonialsSection testimonials={industry.testimonials} />
      
      <CTASection 
        title={industry.ctaTitle}
        description={industry.ctaDescription}
        buttonText={industry.ctaButtonText}
        buttonUrl={industry.ctaButtonUrl}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const industries = getIndustries();
  
  // Generate paths for both English and Arabic
  const paths = industries.flatMap(industry => [
    { params: { slug: industry.slug }, locale: 'en' },
    { params: { slug: industry.slug }, locale: 'ar' }
  ]);
  
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  const industry = getIndustryBySlug(params.slug, locale);
  
  if (!industry) {
    return { notFound: true };
  }
  
  return {
    props: {
      industry,
      locale
    },
    revalidate: 3600 // Revalidate every hour
  };
}
```

## Final Implementation Notes

1. Ensure all pages have a mobile-first responsive design
2. Implement proper error handling and loading states
3. Optimize images with next/image for performance
4. Add proper aria labels and semantic HTML for accessibility
5. Set up Google Analytics for tracking
6. Implement site search functionality
7. Create a sitemap.xml and robots.txt
8. Set up proper 404 and 500 error pages
9. Ensure all links open in the same tab (except for external links)
10. Implement breadcrumb navigation for better user experience

This website should showcase UNEOM as Saudi Arabia's premier B2B uniform supplier with a focus on high-quality products, industry expertise, and excellent customer service.

Planning mode:


Please plan from A to Z the entire project so that the next part of the process will know everything - this includes any SQL, navigation, or anything else that is required to understand from the beginning what you will need to do until the very end of the project. Plan to do it in 4 steps, so like a basic implementation, a more advanced implementation, a full implementation, then bug fix and production, with testing at the end of each step



Act mode:


If you feel like you need to refresh any documentation because of recent changes (for example nextjs, stripe, supabase, etc) use the Brave MCP at any time in order to look for real life examples on the internet that are recent

Test all code using the browser function especially stripe, login, and other third party APIs, test them fully, not just whether or not the integration looks good, but that it works  - include verbose terminal logs so that you can effectively bug fix yourself - and ensure that everything is working properly at all times. This should be done before task completion every single time. I want you to make sure that CSS is working through tests, everything looks good, all third party API functionality works completely and is tested etc.

Make sure everything is actually useful to the user - do not create anything that is simply placeholder code, or base functionality (unless you are planning on expanding on it later) at no point should you say something is implemented when it is only 10% implemented or is pure placeholder code - you are expected to code from A to Z and not just placeholder or small parts of code that don’t really do what a user would want.

When you need a new .env variable, you should ask me for it, and then add it to my .env and then test to make sure that is working, in whatever order makes sense to you or to the part of the project we’re working on at that time. 

