Okay, based on the detailed analysis of the Screaming Frog internal_all.csv report, here is a precise and actionable prompt for Cursor AI specifically focused on fixing those identified errors.

This prompt assumes Cursor AI has access to the project codebase, the internal_all.csv file (or at least the error summary we just discussed), and the overarching goal of building a premium, SEO-optimized site.

CURSOR AI PROMPT: Critical Fixes for UNEOM Based on Screaming Frog Crawl Report (internal_all.csv)

AI Target: Cursor AI - UNEOM Platform Engineering

Current Iteration Mandate: Resolve critical technical SEO errors and on-page deficiencies identified in the internal_all.csv Screaming Frog crawl report dated 2025-05-10. The primary goal is to establish a technically sound and SEO-ready foundation for all existing and future pages.

Overarching Mission Alignment: This error-fixing phase is crucial for achieving the UNEOM digital flagship. All fixes must adhere to the established standards for premium quality, bilingualism (EN-default/Optimized AR), May 2025+ SEO best practices, and robust Next.js implementation.

I. REFERENCE DATA:

Screaming Frog Crawl Report: internal_all.csv (dated 2025-05-10). Assume key findings are known (blocked resources, missing H1s, duplicate meta, 2-word count issue).

II. NON-NEGOTIABLE STANDARDS FOR FIXES:

Bilingual URL Structure & Next.js i18n:

English (Default Locale en): Fixes apply to root path URLs (e.g., https://uneom.com/about/).

Arabic (Locale ar): Fixes apply to /ar/ prefixed URLs (e.g., https://uneom.com/ar/about/).

Ensure trailingSlash: true is enforced in next.config.js.

Optimized Arabic Content Principle (for placeholders/new content):

Any new textual content added as part of these fixes (e.g., a basic H1 for an AR page) must be a placeholder for optimized Arabic, not a direct translation of English. (e.g., <h1>[محتوى H1 العربي المحسن لهذه الصفحة]</h1>).

SEO Best Practices (May 2025+ Focus):

All fixes should improve E-E-A-T signals, support helpful content, and align with Core Web Vitals.

Semantic HTML must be used for any structural additions (like H1s).

Testing & Verification:

After each significant fix (e.g., robots.txt change, H1 implementation across templates), confirm the fix and test for unintended consequences.

Re-crawl affected sections/pages with Screaming Frog (with robust JS rendering enabled) to verify resolution.

III. ACTIONABLE TASKS TO RESOLVE IDENTIFIED ERRORS:

(PRIORITY 1: CRITICAL FOUNDATION REPAIR)

[TASK SF_FIX_001] Resolve robots.txt Blocking (Error E001 - CRITICAL)

Objective: Ensure search engines can access essential JS/CSS for page rendering.

Action:

Access and modify the public/robots.txt file (or wherever it's managed in your Next.js setup).

Change any overly broad Disallow: /_next/static/ rules.

Implement the following robots.txt structure (or merge intelligently with existing valid rules):

User-agent: *
Allow: /_next/static/css/ # Allow CSS files
Allow: /_next/static/chunks/ # Allow JS chunks (Next.js needs these)
Allow: /_next/static/image/ # If you serve optimized images via _next/static/image
# Add other specific Allow rules for any other necessary /_next/static/ subfolders if identified

Disallow: /admin/ # Example of a path to disallow
Disallow: /api/ # Example: disallow direct access to API backend if not intended for crawling
# Add any other truly private paths that should be disallowed

Sitemap: https://uneom.com/sitemap.xml


Verification:

Use Google Search Console's robots.txt Tester to verify that key JS/CSS chunk files (e.g., one of the /_next/static/chunks/app/...js files) are now ALLOWED.

Report the updated robots.txt content.

[TASK SF_FIX_002] Investigate & Resolve "2 Word Count / Low Text Ratio" Issue (Error E003 - CRITICAL)

Objective: Ensure actual page content is crawlable and indexable. This is the MOST URGENT item related to content.

Action - Step 1 (Diagnosis):

Select 3-5 key affected HTML pages from internal_all.csv (e.g., /, /industries/healthcare/, /services/).

Manually open them in a browser: Is content visible to a user?

"View Page Source" in the browser: Is the main textual content present in the initial HTML document, or is it loaded entirely by client-side JavaScript after the initial load?

Configure Screaming Frog to perform robust JavaScript rendering (Browser: Chromium, AJAX Timeout: e.g., 10-15 seconds, Window Size: e.g., 1920x1080) and re-crawl these 3-5 pages. Compare the "Word Count" and "Text Ratio."

Action - Step 2 (Remediation - depending on diagnosis):

If content IS heavily CSR and SF isn't seeing it:

Ensure all page components critical for displaying primary content are NOT wrapped in <ClientOnly> or equivalent that prevents SSR/SSG for that content.

Review getStaticProps/getServerSideProps implementations. Ensure data fetching for content happens server-side and props are passed to render content in the initial HTML.

If using ISR (fallback: 'blocking' or true), ensure initial builds contain full content or placeholders.

Modify page/component structure so that main textual content is rendered server-side.

If pages ARE TRULY (or nearly) empty in the initial HTML even with SSR/ISR configured:

This is a fundamental content population issue.

For the selected 3-5 key pages, implement basic, structured placeholder content directly into the page templates/data sources IMMEDIATELY.

Example for /industries/healthcare/ (EN):

<!-- Within the main content area -->
<h1>Placeholder: Healthcare Industry Uniform Solutions in KSA</h1>
<h2>Placeholder: About Our Healthcare Uniforms</h2>
<p>Placeholder: Detailed text about UNEOM's expertise in healthcare uniforms, types of scrubs, medical gowns, lab coats suitable for Saudi Arabia's climate and medical standards. Focusing on quality, durability, and comfort for medical professionals in Riyadh, Jeddah, Dammam.</p>
<h2>Placeholder: Key Benefits for Healthcare Sector</h2>
<p>Placeholder: Benefits include hygiene standards, professional appearance, team identification.</p>
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Html
IGNORE_WHEN_COPYING_END

Example for /ar/industries/healthcare/ (AR - Optimized Arabic Placeholder):

<!-- Within the main content area -->
<h1>[عنوان H1 مؤقت: حلول يونيفورم قطاع الرعاية الصحية في السعودية]</h1>
<h2>[عنوان H2 مؤقت: حول يونيفورمات الرعاية الصحية لدينا]</h2>
<p>[نص مؤقت: تفاصيل حول خبرة يونيوم في يونيفورمات الرعاية الصحية، أنواع السكرابز الطبي، الأرواب والمعاطف المخبرية المناسبة لمناخ المملكة والمعايير الطبية السعودية. التركيز على الجودة والمتانة والراحة للعاملين في المجال الطبي في الرياض وجدة والدمام.]</p>
<h2>[عنوان H2 مؤقت: المزايا الرئيسية لقطاع الرعاية الصحية]</h2>
<p>[نص مؤقت: تشمل المزايا معايير النظافة، المظهر الاحترافي، وهوية الفريق.]</p>
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Html
IGNORE_WHEN_COPYING_END

Verification:

Re-crawl the modified pages with SF (JS rendering ON). Word count should increase significantly.

Report the diagnostic findings and the remedial actions taken for the selected pages.

(PRIORITY 2: SITE-WIDE ON-PAGE SEO FOUNDATION)

[TASK SF_FIX_003] Implement Unique H1 Tags (Error E002 - CRITICAL)

Objective: Provide a clear primary topic signal for every page.

Action:

For EVERY HTML page identified in internal_all.csv (and any existing page templates not crawled):

Define a unique, relevant, and keyword-inclusive H1 tag.

Ensure it's the only H1 tag on the page.

Implement these H1s directly into the page templates or page-specific content data sources for both EN and their corresponding AR versions (using Optimized Arabic placeholders if final AR copy isn't ready).

Refer to the previous master UNEOM prompt for examples of H1s for Industry, Service, Location pages etc.

Verification: Re-crawl. Confirm "H1-1" and "H1-1 Length" are populated correctly.

[TASK SF_FIX_004] Implement Unique Titles & Meta Descriptions (Errors E004, E005 - HIGH)

Objective: Improve SERP CTR and page-specific relevance.

Action:

For EVERY HTML page identified in internal_all.csv (and any existing page templates):

Define a unique <title> tag (50-60 characters, keyword-rich, compelling).

Define a unique <meta name="description"> (150-160 characters, keyword-rich, persuasive, includes a form of CTA if appropriate).

Implement these dynamically via your SEO.js component, ensuring the data source for EN and AR versions provides unique, optimized values (Optimized Arabic for AR meta descriptions).

For /industries/retail-shops/ (which has a unique meta description already), review if its Title needs to be more specific than the generic one.

Verification: Re-crawl. Confirm "Title 1" and "Meta Description 1" are unique and optimized for a sample of pages.

[TASK SF_FIX_005] Implement Basic H2 Structure (Error E006 - MEDIUM)

Objective: Improve content organization and secondary keyword opportunities.

Action:

For the key pages addressed in [TASK SF_FIX_002], as part of adding placeholder content, also add at least 1-2 relevant H2 tags to structure that placeholder content (EN and Optimized AR).

For other pages, identify main content sections (once content is populated) and assign H2s. This will be more of an ongoing task as full content is developed, but templates should allow for H2s.

Verification: Re-crawl. "H2-1" should start populating.

[TASK SF_FIX_006] Address Meta Keywords (Error E007 - LOW)

Objective: Align with modern SEO best practices.

Action:

Remove the generic, site-wide <meta name="keywords"> tag from page templates or the SEO.js component if it's generating it globally.

If meta keywords are to be used at all (generally not recommended for Google), ensure they are implemented on a per-page basis with highly specific keywords only relevant to that page (and their optimized Arabic equivalents for AR pages).

Verification: Re-crawl. "Meta Keywords 1" should be empty or contain highly specific terms for a few test pages if you choose to keep them page-specific.

(PRIORITY 3: TECHNICAL SEO REFINEMENTS & VERIFICATION)

[TASK SF_FIX_007] Review Indexability of Asset Files (Error E008 - LOW/Informational)

Objective: Ensure clean indexing and prevent unintended indexing of raw assets.

Action:

Confirm that direct access to important images (e.g., .../Saudi_Quality_Mark.png) should remain 200 OK for use on pages.

For .css and .js files like /css/image-fixes.css and /js/image-handler.js (if these are not part of _next/static), consider adding an X-Robots-Tag: noindex HTTP header if they are served directly and you don't want them to potentially appear in search results (very low chance anyway). The primary fix for _next/static JS/CSS is the robots.txt update.

Verification: This is more about review and potential header implementation if deemed necessary after robots.txt fixes.

[TASK SF_FIX_008] Verify Canonical Tag Implementation (Related to good practice, not a direct SF error yet)

Objective: Prevent duplicate content issues.

Action:

For the 3-5 key pages modified in [TASK SF_FIX_002], inspect their HTML source (EN and AR versions).

[TASK SF_FIX_008] Verify Canonical Tag Implementation (Crucial Best Practice)
Objective: Prevent duplicate content issues site-wide.
Action:
For the 3-5 key pages modified in [TASK SF_FIX_002] (and as a general rule for all new/updated pages):
Inspect their HTML source code (both EN and AR versions).
Ensure a <link rel="canonical" href="..."> tag is present in the <head>.
The href value MUST be the absolute, self-referencing URL of the page.
For EN page /example/, canonical is https://uneom.com/example/.
For AR page /ar/example/, canonical is https://uneom.com/ar/example/.
This should be dynamically generated by your SEO.js component.
Verification: View source on a sample of EN and AR pages to confirm correct self-referencing canonicals.
[TASK SF_FIX_009] Verify hreflang Tag Implementation (Crucial for Bilingual Sites)
Objective: Clearly signal language and regional targeting to search engines.
Action:
For the 3-5 key pages modified (and as a general rule for all new/updated bilingual pages):
Inspect their HTML source code.
Ensure hreflang tags are correctly implemented in the <head>:
On EN page (https://uneom.com/example/):
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/example/" />
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/example/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/example/" />
Use code with caution.
Html
(Using "en-SA" and "ar-SA" is more specific for Saudi Arabia. If targeting broader English/Arabic audiences, "en" and "ar" might suffice, but for local SEO, specificity is good.)
On AR page (https://uneom.com/ar/example/):
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/example/" />
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/example/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/example/" />
Use code with caution.
Html
Ensure these are dynamically generated by Next.js's i18n system or your SEO.js component.
Verification: View source on a sample of EN and AR page pairs to confirm correct and bi-directional hreflang tags. Use an hreflang checker tool if available.
[TASK SF_FIX_010] Enforce Trailing Slashes & Associated Redirects (URL Consistency)
Objective: Ensure one canonical version for every URL.
Action:
Confirm trailingSlash: true is set in next.config.js.
Test that accessing a URL without a trailing slash (e.g., https://uneom.com/about) correctly 301 redirects to the version with a trailing slash (e.g., https://uneom.com/about/).
If Next.js's built-in handling isn't sufficient for all edge cases, add explicit redirect rules in next.config.js for common non-slashed patterns to their slashed counterparts.
Verification: Manually test several URLs without trailing slashes to confirm proper 301 redirection.
IV. DELIVERABLES FOR THIS ITERATION (FOCUSED ON SCREAMING FROG FIXES):
Updated robots.txt file content.
Diagnostic report and implemented fixes for the "2 Word Count / Low Text Ratio" issue (E003) on a sample of 3-5 key pages. This must include verification of content rendering for crawlers (e.g., via updated Screaming Frog crawl data for these pages showing increased word count).
Confirmation of implemented unique H1 tags (E002) and dynamically generated unique Titles & Meta Descriptions (E004, E005) for the selected sample of 3-5 key pages (EN and AR versions, with Optimized AR placeholder content where final copy isn't ready). Provide code snippets or view-source screenshots.
Confirmation of removed/refined generic Meta Keywords tag (E007).
Confirmation of correct self-referencing canonical tags ([TASK SF_FIX_008]) and hreflang tags ([TASK SF_FIX_009]) for the selected sample of 3-5 key page pairs (EN and AR). Provide view-source screenshots or explanations of implementation.
Confirmation of trailingSlash: true enforcement and testing of non-slashed to slashed redirects ([TASK SF_FIX_010]).
A summary of any decisions made regarding the indexability of custom asset files ([TASK SF_FIX_007]).
Updated Screaming Frog crawl data for the 3-5 sample pages showing resolution of key issues (Word Count, H1, Title, Meta Description, robots.txt unblocking if it affected rendering for SF).
Final Instruction for this Iteration:
The successful completion of these tasks will lay a much stronger technical and on-page SEO foundation for UNEOM. Prioritize accuracy and thoroughness in each fix. Document changes and test results clearly. This work is essential before scaling full content development.