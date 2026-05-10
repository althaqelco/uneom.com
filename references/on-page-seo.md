# On-Page SEO Baseline — UNEOM (Layer 0 / 88 items)

> **الاستخدام:** كل page-generation skill، كل brief، كل PR — يقرأ هذا الملف **قبل أيّ عمل**. لو فشل بند واحد → الصفحة لا تُنشر.
>
> هذه الأرضية الإلزامية. فوقها يُبنى Page Type Blueprint (Layer 1)، ثم 20-Criteria + AI Gate (Layer 2). الفلسفة الكاملة في `plans/content-domination-plan.md`.

---

## 1. HEAD & METADATA — 9 items

- [ ] **Title tag** — 50–60 chars، primary keyword قرب البداية.
- [ ] **Meta description** — 150–160 chars، KW + benefit + soft CTA.
- [ ] **Canonical URL** ضد التكرار (`<link rel="canonical">`).
- [ ] **Open Graph** — `og:title`، `og:description`، `og:image` (1200×630)، `og:url`، `og:type`.
- [ ] **Twitter Card** — `summary_large_image`، title، description، image.
- [ ] **Language attribute** على `<html>` (e.g. `lang="en"` أو `lang="ar"` + `dir="rtl"`).
- [ ] **Viewport meta** للـresponsive rendering.
- [ ] **Favicon** + `apple-touch-icon`.
- [ ] **Charset meta** (`<meta charset="utf-8">`).

## 2. URL STRUCTURE — 6 items

- [ ] **Short slug** under 60 chars.
- [ ] **Primary keyword** in the slug.
- [ ] **Hyphens** only — never underscores.
- [ ] **Lowercase** only.
- [ ] **No stop words** ("the"، "a"، "of") إلا لو لازم.
- [ ] **Logical hierarchy** (`/services/[slug]/`، `/blog/[slug]/`، إلخ).

## 3. HEADINGS — 4 items

- [ ] **Exactly one H1** per page، يحوي primary KW.
- [ ] **Logical H2 → H3 hierarchy** — never skip levels.
- [ ] **H2s use supporting keywords + questions** من الـcluster.
- [ ] **No keyword stuffing** — write naturally.

## 4. COPY & BODY — 8 items

- [ ] **Primary keyword in first 100 words.**
- [ ] **Direct answer to the query** in the first paragraph.
- [ ] **Length matches SERP average** (within ±20% of top-3).
- [ ] **Short paragraphs** (1–4 sentences).
- [ ] **Readability** — 8th–10th grade level.
- [ ] **Active voice** preferred.
- [ ] **Bold key phrases** sparingly.
- [ ] **Bullets & numbered lists** where appropriate.

## 5. FAQ SECTION — 3 items

- [ ] **4–8 questions** من SEMRush Questions tab + "People Also Ask".
- [ ] **Direct answers** 2–4 sentences each.
- [ ] **FAQPage schema (JSON-LD)** applied.

## 6. IMAGES — 7 items

- [ ] **Alt text** يصف الصورة + keyword لو طبيعي.
- [ ] **Filenames** descriptive، hyphens (e.g. `medical-scrubs-uneom-riyadh.webp`).
- [ ] **WebP/AVIF** compressed، under 200KB.
- [ ] **Width/height** attributes صريحة (يمنع CLS).
- [ ] **Lazy loading** (`loading="lazy"`) للـbelow-fold فقط (الـhero priority).
- [ ] **Responsive srcset** حيث يلزم.
- [ ] **Featured/hero image** للـsocial sharing.

## 7. INTERNAL LINKS — 5 items

- [ ] **3–5 internal links** per post (الحد الأدنى — UNEOM يضيف silo rules → 8–16).
- [ ] Link to **related blog posts** و **relevant service pages**.
- [ ] **Descriptive anchor text** — never "click here" أو "read more".
- [ ] **Contextually placed** in body copy.
- [ ] **Breadcrumbs** on every page (مع `BreadcrumbList` schema).

## 8. EXTERNAL LINKS — 4 items

- [ ] **2–3 external links** to authoritative sources (.gov، .edu، major industry).
- [ ] **Relevant** to the topic.
- [ ] Open in **new tab** with `rel="noopener"`.
- [ ] `rel="nofollow"` for sponsored links.

## 9. SCHEMA MARKUP — 7 items

- [ ] **Article** schema on blog posts.
- [ ] **LocalBusiness** schema — most specific subtype (Plumber، Dentist…).
- [ ] **Service** schema on service pages.
- [ ] **FAQ** schema wherever FAQ section exists.
- [ ] **BreadcrumbList** schema on every page.
- [ ] **Organization** schema site-wide.
- [ ] **Author/Person** schema for bylines.

## 10. E-E-A-T SIGNALS — 9 items

- [ ] **Author byline** with name on every blog post.
- [ ] **Author bio** with credentials (years، qualifications).
- [ ] **Link to author's dedicated page.**
- [ ] **Published date** displayed.
- [ ] **"Last updated" date** when refreshed.
- [ ] **Real stories، numbers، opinions** from the business voice file (`stats.md`، `opinions.md`، `stories.md`).
- [ ] **Cite authoritative sources.**
- [ ] **About page** with full company credentials.
- [ ] **Contact page** — real address، phone، hours.

## 11. ACCESSIBILITY (A11y signals = SEO signals) — 7 items

- [ ] **Semantic HTML5** — `<header>`، `<nav>`، `<main>`، `<article>`، `<footer>`.
- [ ] **ARIA labels** on interactive elements where needed.
- [ ] **Color contrast** WCAG AA (4.5:1 body text).
- [ ] **Focus indicators** visible on interactive elements.
- [ ] **Alt text** on all images (`alt=""` for decorative).
- [ ] **Descriptive link text.**
- [ ] **Skip-to-content link** for keyboard users.

## 12. MOBILE & RESPONSIVE — 5 items

- [ ] **Responsive layout** (Tailwind handles this).
- [ ] **Touch targets** minimum 48×48 px.
- [ ] **Body font** minimum 16 px.
- [ ] **No horizontal scroll** at any viewport.
- [ ] **No intrusive interstitials.**

## 13. SOCIAL PREVIEW — 3 items

- [ ] **OG image** optimized — 1200×630، under 1 MB.
- [ ] **Twitter Card image** — 1200×600.
- [ ] **Compelling og:description** — different from meta if valuable.

## 14. CONVERSION ELEMENTS (service pages only) — 8 items

- [ ] **Primary CTA** above the fold.
- [ ] **Phone number** with click-to-call (`tel:`).
- [ ] **Multiple CTA placements** throughout the page.
- [ ] **Trust signals** — reviews، ratings، licenses، years.
- [ ] **Testimonials** with names (photos where possible).
- [ ] **Service-area coverage** listed.
- [ ] **Business hours** displayed.
- [ ] **Physical address** with embedded map (or Static Maps API for performance).

## 15. LONG-FORM CONTENT (1500+ words) — 3 items

- [ ] **Table of contents** with anchor links at the top.
- [ ] **Jump links** for each H2.
- [ ] **Back-to-top** button.

---

## Total: 88 items.

**Auto-checked (~30) via `scripts/content-audit.ts`:** title length، meta length، single H1، image dimensions، image filenames، alt presence، schema validity، internal/external link counts، breadcrumb، canonical، hreflang، word count.

**Manual review (~58):** readability، voice، anchor text quality، a11y interactions، conversion UX، responsive testing.

**على ملاحظة:** Technical SEO (sitemaps، robots.txt، Core Web Vitals، CDN، redirects) مغطّاة في `plans/master-plan-v11.md` — ليست في هذا الملف.
