# Content Brief — Hub: Blog Category — Healthcare (B.9)

## Page Identity

- **Page type:** Category Hub (B.9) · **Slug:** `healthcare` (within `/blog/category/`)
- **URL EN:** `/blog/category/healthcare/` · **AR:** `/ar/blog/category/healthcare/`
- **Page file:** `src/app/(site)/blog/category/[slug]/page.tsx` — renders via `postsByCategory('healthcare')`
- **Posts in category:** 6 (medical-scrubs-evolution-saudi + healthcare-uniforms-infection-control + nursing-uniform-guide-2025 + medical-hijab-healthcare-standards + hospital-uniform-safety-standards + advanced-fabrics-healthcare-uniforms)
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 600–750 / EN 500–650

## Hreflang
```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/blog/category/healthcare/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/blog/category/healthcare/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/blog/category/healthcare/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Healthcare Uniform Engineering — Saudi MoH + AATCC \| UNEOM Blog` (60) | `6 evergreen articles on Saudi healthcare uniforms — silver-ion antimicrobial, ICMS workflow, 12-hour shift, hijab variant, safety standards, advanced fabrics.` (155) |
| AR | `هندسة الزي الطبي السعودي — وزارة الصحة + AATCC \| مدوّنة UNEOM` (60) | `6 مقالات دائمة عن الزي الطبي السعودي — أيونات الفضّة المضادّة للميكروبات، ICMS، وردية 12 ساعة، متغيّر الحجاب، معايير السلامة، أقمشة متقدّمة.` (140) |

## Image Strategy
- **Hero:** `public/images/heroes/healthcare-pillar-hero.avif` + srcset
  - Alt EN: "Healthcare blog category — 6 evergreen articles on Saudi medical uniform engineering, MoH + SFDA + AATCC compliance"
  - Alt AR: «فئة الرعاية الصحية في المدوّنة — 6 مقالات دائمة عن هندسة الزي الطبي السعودي، التزام وزارة الصحة + SFDA + AATCC»
- **6 post-card thumbnails:** `public/images/blog/{slug}-640.avif` each (all 6 present)
- **OG:** `og/hubs/blog-category-healthcare-1200x630-{en,ar}.webp`

## Targeting
- **Primary KW (AR):** `مدوّنة الزي الطبي السعودي` · **EN:** `Saudi healthcare uniform blog`
- **AI Citation queries:** ما المقالات الطبيّة في مدوّنة UNEOM؟ · هل توجد مقالات عن AATCC 100؟ · ما الفرق بين فئات المدوّنة؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~70 words bilingual)

EN: «Healthcare uniform engineering for Saudi tertiary hospitals — 4.2 wash cycles/shift, 80+ AATCC-100 cycles, hijab-integrated default, MoH + SFDA registered. 6 evergreen articles covering the 12-year arc from 2013 catalogue to 2026 bonded silver-ion + dual-spec fluid-shield engineered programmes.»

AR: «هندسة الزي الطبي للمستشفيات الثلاثية السعودية — 4.2 دورة غسيل/وردية، 80+ دورة AATCC 100، الحجاب مدمج كقياسي، مسجَّل من وزارة الصحة وSFDA. 6 مقالات دائمة تُغطّي القوس الزمني 12 سنة من كتالوج 2013 إلى برامج 2026 المهندَسة بأيونات الفضّة المرتبطة + درع السوائل ثنائي المواصفة.»

### 2. Posts Grid (6 cards — auto-rendered via `postsByCategory('healthcare')`)

### 3. FAQ (3 bilingual independent)
1. كم مقالاً في فئة الرعاية الصحية؟ · How many healthcare posts?
2. ما المقال الأكثر قراءة؟ · Which post is most read?
3. هل يوجد مقالات للممرّضين؟ · Are there nursing-specific posts?

### 4. CTA + Hub Footer
EN: "Read all 6 + explore healthcare pillar." → `/industries/healthcare/`
AR: «اقرأ الـ6 + استكشف قطاع الرعاية الصحية.» ← `/ar/industries/healthcare/`

## Internal Links (bilingual)
6 post links + healthcare pillar + 2 scrub products + Healthcare Uniform Standards + Nursing Guide resource + Quote.

## Schema bilingual
`CollectionPage` + `ItemList` (6 posts) `inLanguage` ar-SA/en-SA · `BreadcrumbList` + `FAQPage` (3 AR + 3 EN independent) + `Speakable`. Rich Results validated.

## Production Checkpoint (108 × 2 locales)
- [ ] AR + EN authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 6 post cards bilingual alt + reading-minutes; OG en + ar generated
- [ ] Schema validated; Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
