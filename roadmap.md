Definitive, Hyper-Detailed & Elite Professional Prompt for UNEOM Platform Engineering via Cursor AI

AI Target: Cursor AI

Mission Mandate: Engineer an uncompromisingly premium, conversion-optimized B2B digital ecosystem for UNEOM, solidifying its position as the undisputed leader in Saudi Arabia's professional uniform and scrubs market. This is not merely a website build; it is the creation of a digital flagship demanding meticulous attention to every detail – from pixel-perfect rendering to strategically crafted, persuasive content architecture. The platform will utilize Next.js 14.2.23, featuring seamless EN/AR bilingualism (with flawless RTL), performance-driven ISR, and integrated B2B quote functionality.

Overarching Quality Imperative: The final deliverable must be indistinguishable from platforms built by top-tier global digital agencies. Standard functionality is baseline; the expectation is exceptional execution, demonstrable strategic thinking in implementation, and visible C-suite level professionalism in every facet. Exaggerate the quality, polish, and effectiveness.

Project Foundation & Core Technologies:

Framework: NextJS 14.2.23 (Standard directory structure, no src).

Environment: uneom project directory.

Assets: Leverage existing high-quality images in /public/images/. Ensure any generated placeholders match this quality.

Key Technologies: ISR (fine-tuned revalidation, e.g., revalidate: 3600), Flawless Next.js Locale Routing (EN/AR), Robust B2B "Add to Quote" Shop Logic, Tailwind CSS (expertly configured with brand colors, fonts, and potentially reusable gradients/RTL utilities).

Planning, Testing & Workflow Protocol (Non-Negotiable):

Phased Execution: Adhere strictly to the 4-step plan (Basic > Advanced > Full > Bugfix/Prod). State clearly which phase you are starting/completing.

Rigorous Multi-Vector Testing (Post-Phase & Pre-Completion):

Functional: Confirm all features work end-to-end (form submissions via API routes, locale switching, navigation, filters, Add-to-Quote logic). Use verbose terminal logs for self-debugging and report key test outcomes.

Visual: Pixel-perfect matching against intended design/layout derived from this prompt. Mandatory Cross-Browser/Device Testing (Latest Chrome, Firefox, Safari, Edge; desktop, tablet, mobile viewports). Ensure perfect RTL rendering for Arabic text, layout, and navigation.

Performance: Utilize next/bundle-analyzer if needed. Target Green Lighthouse scores (Performance, Accessibility, Best Practices, SEO). Address Core Web Vitals proactively.

Accessibility: Target WCAG 2.1 AA compliance. Implement semantic HTML, proper ARIA roles, sufficient color contrast (test using tools), full keyboard navigability.

API Integrity: Test API endpoints (quote, contact) with valid and invalid data to confirm robust validation, security, and correct response handling.

Documentation Research: Proactively use Brave MCP for the latest documentation/best practices (Next.js 14+, Tailwind CSS 3+, any integrated APIs). Cite sources if adopting newer patterns.

Useful Code Only: Zero tolerance for incomplete features or pure placeholder code passed off as implemented. Features must be fully functional, user-valuable, and align with the professional standard within the scope of each phase.

Environment Variables: Request necessary .env variables (e.g., API keys, backend URLs) before attempting implementation. Confirm successful integration via testing after adding them.

Global Elements & Architecture:

Bilingual Core (Flawless Execution Required):

URLs: uneom.com (EN default), uneom.com/ar/* (AR). Utilize Next.js built-in i18n routing.

RTL Excellence: Implement via dir="rtl" on <html> or relevant wrappers for the ar locale. Configure Tailwind for RTL variants (e.g., rtl:mr-4 becoming margin-left in RTL) or use dedicated utilities (tailwindcss-rtl or manual setup). Test all components and layouts meticulously in Arabic.

LanguageSwitcher.js: Implement an intuitive, visually clean switcher (e.g., dropdown or text link in header/footer) that correctly switches locale while preserving the current page path and query parameters.

hreflang Tags: Ensure Next.js automatically generates correct hreflang tags for corresponding EN/AR pages. Verify output in page source.

Content Source: All user-facing text MUST originate from a centralized translation system (e.g., lib/i18n/translations/{en,ar}.js or similar structure), using keys.

Navigation (components/layout/Header.js, components/layout/Navigation.js): Implement the navigation using the navigationItems array. Ensure:

Accurate EN/AR labels fetched from translation files.

Smooth, accessible dropdown menus for "Industries," "Services," "Resources."

Clear visual indication of the active page/section.

Fully responsive behavior including a clean mobile menu (components/layout/MobileMenu.js).

Primary CTA (Request Quote): Button prominently placed and styled with primary brand colors in the fixed/sticky Header for constant visibility and access.

Detailed Page Implementation Mandates:

Industry Pages (pages/industries/[slug].js) – [ZONE OF MAXIMUM EMPHASIS & EXAGGERATED PROFESSIONALISM]:

Strategic Role: These are MISSION-CRITICAL conversion funnels, acting as elite, professional landing pages specifically designed to motivate high-value B2B customers to request a quote. Their execution MUST be exceptional and visibly superior. The standard is exaggerated professionalism and conversion effectiveness.

Generation: ISR (getStaticPaths generating all 7x2=14 paths, getStaticProps fetching rich, localized industryData, revalidate: 3600). Implement skeleton loaders or visually appealing loading states for fallback: 'blocking'. Handle notFound gracefully.

Design & UX Mandates (Attractive, Eye-Catching, Conversion-Focused):

Visual Palette & Depth: Masterful application of attractive professional colors. Utilize subtle, elegant color gradients strategically (e.g., Hero overlay, section backgrounds like final CTA, potentially subtle button gradients) to add depth and visual appeal without looking unprofessional. Define these gradients centrally in tailwind.config.js if possible.

Iconography: Mandatory use of a single, high-quality, professional icon set (e.g., Heroicons 24 Outline) consistently for elements like Key Benefits. Icons must be pixel-perfect, semantically relevant, and contribute to the sophisticated aesthetic.

Animation & Micro-interactions: Implement smooth, subtle, professional animations (e.g., scroll-triggered fade-in-up effects via Framer Motion or Tailwind variants) for sections/elements to enhance polish and guide attention. Add refined micro-interactions (e.g., gentle button scale/shadow on hover/focus). All motion must feel premium and serve a purpose (engagement, flow).

Layout & Imagery: Employ a strict grid system, generous whitespace, perfect alignment, and flawless responsiveness. Intelligently and strategically utilize high-quality images from the designated Public/Images/industries/{slug}/ directory. The Hero image (hero.jpg or equivalent) is mandatory. Other images must directly illustrate or enhance the section's content. CRITICAL: Use the optimized next/image component for all images, providing meaningful, keyword-informed alt text (localized if appropriate) and specifying width/height for layout stability. Use priority prop for the hero image.

Content Strategy Mandates (Hyper-Persuasive & SEO-Dominant):

Professional & SEO Content: ALL text MUST be professionally crafted, exhibiting deep understanding of the target industry and Saudi B2B context. It must be explicitly written to be persuasive and motivate the customer to request a quote. Content must be meticulously prepared for SEO:

Keywords: Naturally integrate primary and LSI keywords relevant to the specific {Industry} + {Uniforms/Scrubs} + {Saudi Arabia/KSA/Riyadh/Jeddah} context throughout all text elements. CRITICAL: Add these keywords naturally into HTML <title> tags and on-page H1/H2/H3 headings.

Tone & Persuasion: Maintain an authoritative, expert, yet highly professional and trustworthy tone. Employ persuasive copywriting techniques subtly. Exaggerate the professionalism and confidence projected by the text.

Bilingual Perfection: Content MUST exist flawlessly in both English and Arabic using the {en: "...", ar: "..."} structure in the data source (lib/data/industries.js). Translations must be accurate, culturally appropriate, and maintain the intended professional tone. Proofreading is implied.

THE Persuasive Intro Paragraph: Place this section immediately below the Hero. It MUST be exceptionally well-written: deeply understanding the specific industry's challenges/needs in KSA, integrating keywords naturally, establishing UNEOM's authority and tailored solution, and creating a compelling reason to read further.

Required Sections (Implement Meticulously, Style Professionally):

Hero Section: Full-width, visually dominant using the industry-specific hero.jpg. Apply a sophisticated gradient overlay (e.g., bg-gradient-to-t from-neutral-900/75 via-neutral-900/30 to-transparent) ensuring excellent text contrast. Feature the keyword-rich H1 heroHeadline[locale], a compelling heroSubheadline[locale], and a highly visible primary Button labeled explicitly (e.g., "Request Quote for Healthcare Uniforms") linking to the quote/contact page with industry context (/contact?industry=healthcare). Implement subtle entrance animations for text elements.

Persuasive Intro Paragraph: Implement as defined above. Potentially use a slightly different background or contain it visually to give it prominence.

Key Benefits Section: Display 4-5 core benefits tailored to the industry using BenefitCard components in a grid/flex layout. Each card MUST feature: A Professional Icon, benefit.title[locale], and concise benefit.description[locale] focusing on tangible client outcomes. Use subtle animations as cards scroll into view.

Featured Industry Products (Mandatory: Exactly 3): Display 3 highly relevant products in a clean grid using ProductCard. Each card MUST show: Optimized product image, product.name[locale], product.shortDescription[locale], and a clear CTA button ("View Details" or "Inquire for Quote") linking appropriately (to product page or triggering quote form logic).

[MANDATORY ACTION & DETAIL]: If these 3 specific products do not exist in lib/data/products.js, you MUST create them. Generate complete, professional-quality, fully bilingual placeholder entries. Each placeholder MUST have: id (e.g., aviation-pilot-shirt-premium), category (e.g., aviation), relevant tags: ['aviation', 'pilot'], name: {en: 'Premium Pilot Shirt', ar: 'قميص طيار فاخر'}, shortDescription: {en: '...', ar: '...'}, a realistic high-quality image path (can reuse a generic appropriate image if necessary), placeholder colors, sizes, fabricDetails. Do not proceed without creating these if needed. Link their IDs in industryData[industry].featuredProductIds.

Fabric & Technology Spotlight: Dedicated section explaining relevant material choices (e.g., climate-suitability for KSA, durability, specific finishes like antimicrobial), certifications, or unique manufacturing techniques UNEOM employs for this industry. Use icons or a relevant illustrative image (next/image optimized) if it adds value. Content should reinforce quality and suitability (fabricTechSection.title[locale], fabricTechSection.content[locale]).

Customization Showcase: Clearly explain or visually demonstrate customization options relevant to the industry (e.g., specific embroidery placement for logos, epaulets for aviation, color matching for corporate branding). Include a clear CTA linking to /services/custom-design. (customizationSection.title[locale], customizationSection.content[locale]).

Industry-Specific Client Testimonials/Logos: Feature 2-4 testimonials or client logos from this specific industry. Use TestimonialCard components or a logo strip. Data (testimonials array within industryData) should include { quote: {en, ar}, name: {en, ar}, company: {en, ar}, logo: '/path/logo.png' }. Use high-quality, realistic (but clearly marked) placeholders if real data is not yet available.

Related Blog Posts (Mandatory: Exactly 3): Display 3 highly relevant blog posts in a grid using BlogCard. Each card MUST show: Optimized post image, post.title[locale], post.excerpt[locale], and a "Read More" link to the post page.

[MANDATORY ACTION & DETAIL]: If 3 relevant blog posts do not exist, you MUST create them. Generate complete, professional-quality, fully bilingual placeholder entries in your blog data source (lib/data/blog.js or markdown files). Each placeholder MUST have: id, unique slug, relevant tags: [industry], title: {en: 'Relevant Blog Title', ar: 'عنوان المقال ذو الصلة'}, excerpt: {en: '...', ar: '...'}, image path, placeholder author/date. Link their IDs in industryData[industry].relatedBlogPostIds. Page structure depends on this.

Compelling Final CTA Section: Make this visually distinct (e.g., full-width section with a brand gradient background). Include a strong headline (cta.title[locale] e.g., "Elevate Your [Industry] Team's Image Today?"), a brief reinforcing message, and a large, prominently styled (perhaps secondary color) Button with explicit text (cta.buttonText[locale] e.g., "Get Your Custom Quote Now") linking to the contact/quote page.

Developer Notes Integration: Add comments where appropriate (// TODO: Link to actual product page when built). Consider subtle, user-facing "Notes" or "Pro Tips" styled within the page content where relevant (e.g., a small box mentioning minimum order quantities for certain customizations).

Service Pages (pages/services/[slug].js): Apply the same elevated standards of professionalism, design, content quality, SEO, and bilingual execution. Implement using ISR. Key sections: SEO-rich Intro, Components/Steps (visualized if possible), 3 Related Products (create fully bilingual placeholders if needed), Key Benefits, 3 Related Blog Posts (create fully bilingual placeholders if needed), Case Studies/Examples (structure for placeholders), Testimonials, Clear Service-Specific CTA.

Homepage, Shop (pages/shop/*), About (pages/about.js), Contact (pages/contact.js), Blog (pages/blog/*): Implement based on initial detailed requirements BUT elevate the execution to match the hyper-professional standard defined for Industry/Service pages (visual polish, performance, accessibility, bilingual perfection). The Shop (/shop index, category, product pages) MUST function flawlessly with the B2B "Add to Quote" workflow, filtering, sorting, and navigation.

Component Library (components/...): Develop robust, reusable, accessible, and professionally styled components (Buttons with variants, Cards, ProductCard, BlogCard, TestimonialCard, Layouts, Forms, etc.). Use next/image within an OptimizedImage wrapper. Implement UI components to gracefully handle EN/AR text lengths and RTL alignment.

Data Structures (lib/data/...) & i18n (lib/i18n/...):

industries.js: Structure precisely as needed for the detailed sections above, ensuring all text fields use the {en: "...", ar: "..."} format. Include arrays for featuredProductIds and relatedBlogPostIds.

products.js / blog.js (or MDX): Structure to contain all required fields, fully supporting the {en, ar} format for translatable strings from the outset, even for placeholders. Add necessary tags/categories for filtering.

lib/i18n/translations/{en,ar}.js: Centralize all UI strings (button labels, form placeholders, static text).

SEO Infrastructure (components/SEO.js, lib/schema/..., next.config.js): Implement site-wide using next-seo. Generate dynamic, unique, keyword-optimized titles, descriptions, OG/Twitter tags, canonical URLs for every page. Configure Schema.org meticulously (Organization, BreadcrumbList site-wide; Product, Service, BlogPosting, ItemPage contextually). Ensure next.config.js handles i18n correctly. Generate sitemap.xml and robots.txt.

API Routes (pages/api/...): Secure, server-side validated endpoints for Quote Requests and Contact Form submissions. Implement proper try/catch blocks, status codes, response messages (consider localization), and potentially logging.

Final Mandate: Execute this meticulously detailed blueprint with the goal of creating an unequivocally best-in-class digital platform for UNEOM. The focus must be on flawless execution, demonstrable quality, strategic conversion optimization (especially on Industry Pages), and perfect bilingual functionality. Deliver a platform that inspires confidence and drives significant B2B engagement.