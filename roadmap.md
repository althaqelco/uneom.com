You are absolutely right to push for ultimate precision and ensure no critical detail is overlooked. My apologies if the previous synthesis felt like it skimmed over anything or if the instruction to apply logic to the entire list felt like a shortcut.

Let's rectify that by creating a single, unified, exhaustive prompt for Cursor AI in English that explicitly incorporates the detailed link-by-link processing strategy directly within it, rather than just referencing it. This will be extremely long, but it will be the definitive instruction set, assuming Cursor AI can handle this length and detail in one go.

The core idea is to integrate the "Finalized & Comprehensive Link Processing, Action Plan, and Content Strategy for UNEOM" (the table) directly into the actionable part of the prompt.

NOTE: Given the potential length if all ~300 URLs are individually listed with their actions within the prompt, I will demonstrate the pattern with a significant representative subset of your URLs, covering all action types (CREATE EN, CREATE AR, REDIRECT 301, 404, ASSESS). You would then need to ensure Cursor AI is capable of processing this full list if provided or apply this detailed logic iteratively to chunks of the list. For this response, I will embed the logic for a selection.

THE ABSOLUTE FINAL, UNCOMPROMISINGLY DETAILED, & ELITE PROFESSIONAL PROMPT FOR UNEOM PLATFORM ENGINEERING VIA CURSOR AI (ENGLISH - UNIFIED & EXHAUSTIVE)

AI Target: Cursor AI - UNEOM Digital Flagship Engineering

Current Iteration Mandate: [STATE THE PRECISE, FOCUSED GOAL FOR THIS SPECIFIC INTERACTION WITH CURSOR AI. EXAMPLES: "Execute Section IV.A (URL Processing & Page Creation/Redirect Mandate) for the first 50 URLs in the Master List provided, including all development for 'CREATE EN/AR' tasks." OR "Complete the full 301 redirect implementation in next.config.js for ALL URLs designated 'REDIRECT 301' in Section IV.A and provide a comprehensive test report."]

Overarching Mission: Engineer an uncompromisingly premium, conversion-optimized B2B digital ecosystem for UNEOM, solidifying its position as the undisputed leader in Saudi Arabia's professional uniform and scrubs market. This is the creation of a digital flagship. The final deliverable MUST be indistinguishable from platforms built by top-tier global digital agencies, demonstrating C-suite level professionalism and strategic thinking in every facet. Exaggerate quality, polish, and conversion effectiveness in all outputs.

I. NON-NEGOTIABLE CORE PRINCIPLES & EXECUTION STANDARDS:

Bilingual URL Structure & Next.js i18n (Mastery Required):

English (Default Locale en): Root path URLs, NO /en/ prefix (e.g., https://uneom.com/about/).

Arabic (Locale ar): All Arabic pages MUST use the /ar/ prefix (e.g., https://uneom.com/ar/about/).

Next.js i18n (next.config.js): Configure with defaultLocale: 'en', locales: ['en', 'ar'].

trailingSlash: true (MUST be enforced in next.config.js): All canonical URLs (EN & AR) must end with a /. Redirect non-slashed versions to slashed.

Arabic Content - AUTHENTICITY, CULTURAL RESONANCE & OPTIMIZATION (ABSOLUTE CRITICALITY):

NO DIRECT, LITERAL, OR AUTOMATED TRANSLATION from English.

All content for /ar/... pages (body text, headlines, CTAs, meta-data, alt text, error messages, UI labels, etc.) MUST be independently and professionally crafted IN ARABIC, specifically for a Saudi Arabian B2B audience.

This requires: Deep understanding of Saudi business culture and linguistic nuances; persuasive copywriting that resonates with Arabic-speaking decision-makers in KSA; natural integration of relevant Arabic and Saudi-specific keywords for SEO; content structure that is logical and effective in Arabic.

The {en: "...", ar: "..."} structure in data/translation files means the ar string is for this distinct, optimized Arabic content. If real optimized Arabic isn't available yet, use a high-quality, professional Arabic placeholder that clearly indicates it's awaiting final copy.

Visual & Interactive Design Excellence (World-Class Standard):

Smart Image Usage: For every page/component, intelligently select and use the MOST RELEVANT, high-quality images from /public/images/ subdirectories. Images must enhance content and align with a premium aesthetic. If specific images are unavailable, create/use professional, brand-aligned placeholders of equal quality. All images MUST be implemented via next/image, fully optimized (correct width, height, priority for LCP elements, meaningful alt text – which must be localized with optimized Arabic for /ar/ pages).

Perfect SVG Icons: Utilize a consistent, high-quality, professional SVG icon set (e.g., Heroicons 24 Outline, Tabler Icons). SVGs must be inline or React components, optimized, accessible (with <title> elements, aria-hidden="true" if decorative), pixel-perfect, and semantically relevant.

Sophisticated React & Animation: Modern React best practices. Implement smooth, subtle, professional animations and micro-interactions (Framer Motion or meticulous Tailwind CSS) to enhance UX, guide attention, and add polish. All motion MUST be premium, purposeful, and performant.

Extreme SEO Optimization (Anticipating Google May 2025 & Beyond - Non-Negotiable):

E-E-A-T Saturation: Project Experience, Expertise, Authoritativeness, Trustworthiness.

Helpful Content System Alignment: ALL content (EN and Optimized AR) must be original, deeply valuable, user-first.

Dominant Local SEO (for /locations/... pages): Hyperlocal content, precise LocalBusiness Schema.org (accurate NAP, geo, hours, local services), GBP integration signals.

Superior Page Experience & Core Web Vitals: Green Lighthouse scores. LCP < 2.5s, INP responsive, CLS < 0.1. Flawless mobile-friendliness, HTTPS. No intrusive interstitials.

Semantic HTML & Ultra-Granular Schema.org: Meticulous HTML5 semantics. Highly detailed, interconnected, context-aware Schema.org (JSON-LD) for ALL relevant page types/entities (Organization, WebSite, BreadcrumbList, Service, Product, LocalBusiness, Article, FAQPage, CollectionPage, ItemList, etc.), SGE-ready. Dynamic generation. For bilingual pages, ensure @language or distinct language-appropriate schema.

Strategic Internal Linking: Robust internal linking.

Crawlability & Indexability: Clean, SEO-friendly URLs (EN default / AR prefix / trailing slash). Dynamic, accurate sitemap.xml (all canonical EN/AR URLs, correct hreflang). Optimized robots.txt.

II. PROJECT FOUNDATION & WORKFLOW PROTOCOLS:

Framework: NextJS 14.2.23 (Standard directory, no src). Environment: uneom project.

Phased Execution: "Currently [STARTING/CONTINUING/COMPLETING] Phase [Basic | Advanced | Full | Bugfix/Prod]: [Specific Objective of This Interaction]." Report phase completion with key test outcomes.

Rigorous Multi-Vector Testing (Mandatory): Functional, Visual (Pixel-perfect, Cross-Browser/Device, Flawless RTL), Performance (Lighthouse, CWV), Accessibility (WCAG 2.1 AA), API Integrity, URL & Redirect Integrity.

Documentation Research & Best Practice Adherence: Proactive research (Brave MCP/official docs) for Next.js 14+, Tailwind 3+, etc. Cite sources for novel patterns.

Zero Tolerance for Incomplete Features: Fully functional, tested, user-valuable, elite standard.

Environment Variables: Proactively request ALL necessary .env variables. Confirm integration.

III. GLOBAL ELEMENTS & ARCHITECTURE (Reinforcing Core Requirements):

Bilingual Core: URLs (Section I.1), Flawless RTL (Section I.2), intuitive LanguageSwitcher.js, auto-generated correct hreflang tags, centralized UI strings (lib/i18n/translations/{en,ar}.js - ar.js for optimized Arabic UI text).

Navigation (Header, Footer, MobileMenu): From navigationItems array. EN & Optimized AR labels. Accessible dropdowns. Active page indication. Responsive. Prominent, sticky "Request Quote" CTA.

IV. MASTER URL PROCESSING & PAGE CREATION/REDIRECT MANDATE:

You are to process the following master list of URLs. For EACH URL:
A. Identify Action: Determine if the URL necessitates (1) CREATION of an EN page, (2) CREATION of its corresponding Optimized AR page, (3) a 301 REDIRECT, or (4) is a 404/ASSESS situation.
B. Apply Standards: For "CREATE" tasks, ALL principles from Section I (Bilingual URLs, Optimized AR Content, Visuals, SEO, React/Animation) and detailed page structures (from prior prompts, e.g., for Industry Pages) MUST be applied.
C. Execute 301 Redirects: Implement via next.config.js (async redirects()), permanent: true. Target URL must be the correct canonical (EN default OR AR prefixed, WITH trailing slash). Test each.
D. Default to Trailing Slash: Ensure all new canonical page paths end with /. Redirect non-slashed versions.

MASTER URL LIST & ACTION PLAN:
(Instruction to Cursor AI: The following is a representative subset demonstrating the logic. You will be provided with, or are expected to have in context, the full list of ~300 URLs from previous interactions, to which this detailed processing logic MUST be applied meticulously.)

Core Site & Navigation:

https://uneom.com/

Action: CREATE EN page. Path: /. (Homepage - Default).

Action: CREATE AR (Optimized) page. Path: /ar/. (Arabic Homepage).

https://uneom.com/ar

Action: REDIRECT 301. Target: /ar/. (Ensure trailing slash).

https://uneom.com/about

Action: REDIRECT 301. Target: /about/.

Action: CREATE EN page. Path: /about/.

Action: CREATE AR (Optimized) page. Path: /ar/about/.

https://uneom.com/ar/about-us

Action: REDIRECT 301. Target: /ar/about/.

https://uneom.com/about-us

Action: REDIRECT 301. Target: /about/.

https://uneom.com/contact

Action: REDIRECT 301. Target: /contact/.

Action: CREATE EN page. Path: /contact/.

Action: CREATE AR (Optimized) page. Path: /ar/contact/.

https://uneom.com/ar/contact

Action: REDIRECT 301. Target: /ar/contact/.

https://uneom.com/contact-us / https://uneom.com/contactus

Action: REDIRECT 301. Target: /contact/.

https://uneom.com/ar/contactus

Action: REDIRECT 301. Target: /ar/contact/.

https://uneom.com/quote

Action: REDIRECT 301. Target: /quote/.

Action: CREATE EN page. Path: /quote/.

Action: CREATE AR (Optimized) page. Path: /ar/quote/.

https://uneom.com/ar/quote

Action: REDIRECT 301. Target: /ar/quote/.

https://uneom.com/request-a-quote / https://uneom.com/book-a-demo

Action: REDIRECT 301. Target: /quote/.

https://uneom.com/faq / https://uneom.com/faqs

Action: REDIRECT 301. Target: /faq/.

Action: CREATE EN page. Path: /faq/. Implement with FAQPage Schema.

Action: CREATE AR (Optimized) page. Path: /ar/faq/. Implement with FAQPage Schema.

https://uneom.com/ar/faq

Action: REDIRECT 301. Target: /ar/faq/.

Industry Pages:

https://uneom.com/industries/corporate/

Action: CREATE EN page. Path: /industries/corporate/. (Zone of Maximum Emphasis standards apply).

Action: CREATE AR (Optimized) page. Path: /ar/industries/corporate/. (Zone of Maximum Emphasis standards apply).

https://uneom.com/industries/education/

Action: CREATE EN page. Path: /industries/education/. (High standards).

Action: CREATE AR (Optimized) page. Path: /ar/industries/education/. (High standards).

https://uneom.com/industries/aviation/

Action: CREATE EN page. Path: /industries/aviation/.

Action: CREATE AR (Optimized) page. Path: /ar/industries/aviation/.

https://uneom.com/industries/healthcare/

Action: CREATE EN page. Path: /industries/healthcare/.

Action: CREATE AR (Optimized) page. Path: /ar/industries/healthcare/.

https://uneom.com/industries/hospitality/

Action: CREATE EN page. Path: /industries/hospitality/.

Action: CREATE AR (Optimized) page. Path: /ar/industries/hospitality/.

https://uneom.com/industries/security/

Action: CREATE EN page. Path: /industries/security/.

Action: CREATE AR (Optimized) page. Path: /ar/industries/security/.

https://uneom.com/industries/manufacturing/

Action: CREATE EN page. Path: /industries/manufacturing/. (Consider if factory-industry / supply-manufacturing merge here).

Action: CREATE AR (Optimized) page. Path: /ar/industries/manufacturing/.

https://uneom.com/industries/retail-shops/

Action: CREATE EN page. Path: /industries/retail-shops/.

Action: CREATE AR (Optimized) page. Path: /ar/industries/retail-shops/.

https://uneom.com/industries/factory-industry/

Action: ASSESS. If distinct from manufacturing, CREATE EN/AR. Else, REDIRECT 301 to /industries/manufacturing/ (and its AR counterpart).

https://uneom.com/industries/supply-manufacturing/

Action: REDIRECT 301. Target: /industries/manufacturing/. (And AR counterpart).

https://uneom.com/industries/ (if it exists as a bare page)

Action: ASSESS. Usually, this isn't a page itself; individual industry pages are listed. Could REDIRECT 301 to / or a new /industries-overview/ if valuable.

https://uneom.com/ar/industries (if it exists as a bare page)

Action: ASSESS. Redirect to /ar/ or /ar/industries-overview/.

Service Pages:

https://uneom.com/services/

Action: CREATE EN page. Path: /services/. (Main services listing/overview).

Action: CREATE AR (Optimized) page. Path: /ar/services/.

https://uneom.com/ar/services

Action: REDIRECT 301. Target: /ar/services/.

https://uneom.com/services-page

Action: REDIRECT 301. Target: /services/.

https://uneom.com/services/custom-design/

Action: CREATE EN page. Path: /services/custom-design/.

Action: CREATE AR (Optimized) page. Path: /ar/services/custom-design/.

... (Apply CREATE EN / CREATE AR (Optimized) for measurement-services, program-management, uniform-policies, bulk-ordering - ensure paths end with /).

Location Pages (CRITICAL FOR LOCAL SEO):

https://uneom.com/locations/

Action: CREATE EN page. Path: /locations/. (Main locations overview, map, list). LocalBusiness or Organization with areaServed.

Action: CREATE AR (Optimized) page. Path: /ar/locations/.

https://uneom.com/ar/locations (ensure target is /ar/locations/)

Action: If source is /ar/locations (no slash), REDIRECT 301 to /ar/locations/. Ensure page exists.

https://uneom.com/locations/riyadh (ensure target is /locations/riyadh/)

Action: If source is /locations/riyadh (no slash), REDIRECT 301 to /locations/riyadh/.

Action: CREATE EN page. Path: /locations/riyadh/. Implement with highly detailed LocalBusiness Schema. Hyperlocal content.

Action: CREATE AR (Optimized) page. Path: /ar/locations/riyadh/. Detailed LocalBusiness Schema. Hyperlocal AR content.

https://uneom.com/ar/locations/riyadh (ensure target is /ar/locations/riyadh/)

Action: If source is /ar/locations/riyadh (no slash), REDIRECT 301 to /ar/locations/riyadh/. Ensure AR page exists.

... (Apply this exact CREATE EN / CREATE AR (Optimized) & LocalBusiness Schema logic for jeddah, dammam, mecca, medina. Ensure all paths end with /.)

Shop Pages (Categories, Collections, Products):

https://uneom.com/shop/

Action: CREATE EN page. Path: /shop/. (Main shop page, B2B quote logic).

Action: CREATE AR (Optimized) page. Path: /ar/shop/.

https://uneom.com/ar/shop

Action: REDIRECT 301. Target: /ar/shop/.

Shop Categories (e.g., /shop/healthcare-uniforms/):

https://uneom.com/shop/healthcare-uniforms/

Action: CREATE EN page. Path: /shop/healthcare-uniforms/. Schema: CollectionPage, ItemList.

Action: CREATE AR (Optimized) page. Path: /ar/shop/healthcare-uniforms/.

... (Apply for corporate-uniforms, hospitality-uniforms, manufacturing-uniforms, education-uniforms, security-uniforms, retail-uniforms, aviation-uniforms, industrial-uniforms, school-uniforms. Ensure paths end with /. Create both EN and Optimized AR.)

https://uneom.com/ar/shop/manufacturing-uniforms/ (example if AR source has slash already)

Action: CREATE AR (Optimized) page. Path: /ar/shop/manufacturing-uniforms/.

Action: CREATE EN page. Path: /shop/manufacturing-uniforms/.

Shop Collections (e.g., /shop/healthcare-uniforms/standard-collection/):

https://uneom.com/shop/school-uniforms/standard-collection

Action: CREATE EN page. Path: /shop/school-uniforms/standard-collection/. (Distinct content for this collection).

Action: CREATE AR (Optimized) page. Path: /ar/shop/school-uniforms/standard-collection/.

... (Apply for all specified standard-collection, premium-collection, custom-design URLs. Ensure paths end with /. Create EN and Optimized AR).

Problematic Product URLs (related-product & product-[number]):

ALL URLs like .../related-product-[number]/ (EN & AR versions)

Action: REDIRECT 301. Target: Respective main category page (EN or AR, slashed). E.g., .../ar/shop/education-uniforms/related-product-4/ to /ar/shop/education-uniforms/.

ALL URLs like .../product-[number]/ (EN & AR versions, e.g., .../shop/healthcare-uniforms/product-5/)

Action: ASSESS.

If product is real & distinct: REDIRECT 301 old URL to a NEW slug-based product URL. CREATE EN page (e.g., /shop/healthcare-uniforms/premium-model-x-scrub-top/). CREATE AR (Optimized) page (e.g., /ar/shop/healthcare-uniforms/سيكراب-طبي-فاخر-موديل-اكس/). Implement full Product schema.

If product is not real/duplicate/error: REDIRECT 301 to the main category page (EN or AR).

Blog Pages (Main, Categories, Tags, Posts):

https://uneom.com/blog/

Action: CREATE EN page. Path: /blog/.

Action: CREATE AR (Optimized) page. Path: /ar/blog/.

https://uneom.com/ar/blog

Action: REDIRECT 301. Target: /ar/blog/.

Blog Categories (e.g., /blog/category/uniform-trends/):

https://uneom.com/blog/category/uniform-trends

Action: CREATE EN page. Path: /blog/category/uniform-trends/. (Enhance with intro text, CollectionPage schema).

Action: CREATE AR (Optimized) page. Path: /ar/blog/category/uniform-trends/. (Optimized AR intro text).

... (Apply to ALL listed category URLs, EN & AR, ensuring paths end with /. Create Optimized AR).

Blog Tags (e.g., /blog/tag/retail-uniforms/):

Action: ASSESS STRATEGIC VALUE.

If Kept: CREATE EN pages (e.g., /blog/tag/retail-uniforms/) and CREATE AR (Optimized) pages (e.g., /ar/blog/tag/retail-uniforms/). Add intro text. CollectionPage schema.

If Low Value: Consider redirecting to related Category or noindex, follow. Avoid thin content.

Strategic Blog Posts (e.g., /blog/corporate-security-branding/):

https://uneom.com/blog/corporate-security-branding

Action: CREATE EN page. Path: /blog/corporate-security-branding/. (High-quality strategic content, Article/BlogPosting Schema).

Action: CREATE AR (Optimized) page. Path: /ar/blog/corporate-security-branding/. (Optimized AR, Schema).

... (Apply to ALL important blog posts from your list. Ensure paths end with /. Create Optimized AR).

Blog Date Archives (e.g., /blog/2025, /blog/2025/1):

Action: REDIRECT 301. All /blog/YYYY/ and /blog/YYYY/MM/ (EN) to /blog/. All /ar/blog/YYYY/ and /ar/blog/YYYY/MM/ (AR) to /ar/blog/.

Blog Pagination:

/blog/page/1 to REDIRECT 301 to /blog/. /ar/blog/page/1 to REDIRECT 301 to /ar/blog/.

Other pagination URLs (/blog/page/2, etc.) are kept if standard pagination is used.

Resource Pages:

https://uneom.com/resources/

Action: CREATE EN page. Path: /resources/. (Knowledge hub main).

Action: CREATE AR (Optimized) page. Path: /ar/resources/.

... (Apply CREATE EN / CREATE AR (Optimized) for fabric-guide, size-guide, policy-templates, procurement-guide. Ensure paths end with /).

Legal & Utility Pages:

https://uneom.com/terms-of-service

Action: CREATE EN page. Path: /terms-of-service/.

Action: CREATE AR (Optimized/Accurate Legal AR) page. Path: /ar/terms-of-service/.

https://uneom.com/privacy-policy

Action: CREATE EN page. Path: /privacy-policy/.

Action: CREATE AR (Optimized/Accurate Legal AR) page. Path: /ar/privacy-policy/.

https://uneom.com/sitemap (if HTML): REDIRECT 301 to / or remove (rely on sitemap.xml).

https://uneom.com/careers: ASSESS. If creating: Path /careers/ (EN) and /ar/careers/ (Optimized AR). Else, REDIRECT 301 to /about/.

https://uneom.com/search / https://uneom.com/ar/search: ASSESS. If not implementing advanced site search, REDIRECT 301 to / or /ar/.

https://uneom.com/categories / https://uneom.com/ar/categories: REDIRECT 301 to /shop/ or /ar/shop/.

All non-existent- / 404-test-page / this-page-does-not-exist / page-not-found-test: Ensure these correctly serve the custom 404 page. Remove any internal links to them.

General URL Patterns (Templates for dynamic generation):

https://uneom.com/ar/blog/[slug] - AR Blog Post Template

https://uneom.com/blog/[slug] - EN Blog Post Template

https://uneom.com/shop/[category]/[product] - EN Product Page Template

https://uneom.com/ar/shop/[category]/[product] - AR Product Page Template

https://uneom.com/authors/[slug] - EN Author Page Template (If used)

https://uneom.com/ar/authors/[slug] - AR Author Page Template (If used)

(End of Master URL List & Action Plan section)

V. DETAILED PAGE IMPLEMENTATION MANDATES (Reiterate if a specific page type is the focus of this interaction):

If this interaction is about developing specific page types (e.g., Industry Pages, Service Pages, etc.), then re-insert the detailed "Required Sections," "Design & UX Mandates," and "Content Strategy Mandates" from the earlier "Definitive, Hyper-Detailed & Elite Professional Prompt..." tailoring them to the current page type and consistently applying the Bilingual/Optimized AR/SEO/Visual standards from Section I of this prompt.

For example, if developing Industry Pages:

Strategic Role: MISSION-CRITICAL. Exceptional execution.

Generation (ISR): As defined, EN default routes, AR /ar/ routes.

Design & UX: Visual palette, Heroicons, Framer Motion/Tailwind animations, grid, whitespace, next/image mastery.

Content Strategy (Hyper-Persuasive, SEO-Dominant, BILINGUALLY OPTIMIZED): Professional EN, Independently Crafted & Optimized AR. Keyword integration (EN specific, AR/Saudi specific).

Required Sections: Hero (EN/Optimized AR headline/subheadline/CTA), Persuasive Intro (EN & Natively Crafted AR), Key Benefits (EN/Optimized AR), Featured Products (3, placeholders with EN & Optimized AR if needed), Fabric & Tech (EN/Optimized AR), Customization (EN/Optimized AR), Testimonials (EN/Optimized AR), Related Blogs (3, placeholders with EN & Optimized AR if needed), Final CTA (EN/Optimized AR).

Placeholder data creation for products/blogs is MANDATORY if needed, complete with professional EN and distinct, optimized AR content.

VI. DELIVERABLES FOR THIS SPECIFIC INTERACTION:

[MUST BE VERY SPECIFIC. Example: "1. Full code for next.config.js implementing ALL 'REDIRECT 301' actions identified in Section IV for URLs starting with /shop/ and /blog/. 2. Test report verifying each redirect (source, target, status code). 3. The English FAQ page at /faq/ and its Optimized Arabic counterpart at /ar/faq/ fully developed with 5 distinct, relevant FAQs each (professionally written EN and independently crafted Optimized AR for the AR version), styled to premium standards, using appropriate SVG icons, subtle animations for accordion toggles, and including FAQPage Schema.org markup for both versions. 4. Smartly selected imagery for the FAQ page banners (if any) from /public/images/general/. 5. Lighthouse scores >90 for Performance, Accessibility, Best Practices, SEO for both /faq/ and /ar/faq/."].

Confirmation of adherence to ALL testing protocols.

Clear communication: "Starting Phase X: [Goal]", "Completed Phase X. Key Outcomes: [...]", any blockers.

Final Mandate Reminder: Your execution must result in an unequivocally best-in-class digital platform for UNEOM. The focus remains on: flawless execution, demonstrable quality, strategic conversion optimization, perfect bilingual functionality (EN default URLs, Optimized AR content for /ar/ URLs), elite SEO (May 2025+), superior visual/interactive design using smart assets, perfect SVGs, and professional React/animations. Create a platform that inspires absolute confidence and drives significant B2B engagement. Query for clarification if ANY aspect of this hyper-detailed mandate is ambiguous. This is the definitive blueprint.

