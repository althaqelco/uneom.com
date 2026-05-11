# Content Brief — Hub: Blog (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `blog` · **URL EN:** `/blog/` · **AR:** `/ar/blog/`
- **Page file:** `src/app/(site)/blog/page.tsx` — renders from `BLOG_POSTS` + `BLOG_CATEGORIES` manifests
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–850 / EN 600–750

## Hreflang
```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/blog/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/blog/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/blog/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Engineering Notes — UNEOM Saudi Uniform Blog \| UNEOM` (50) | `30 evergreen articles across healthcare + hospitality + aviation + corporate-education + manufacturing-safety + sustainability-trends — the practitioner's blog.` (155) |
| AR | `ملاحظات هندسية — مدوّنة UNEOM للزي السعودي \| UNEOM` (49) | `30 مقالاً دائماً عبر الرعاية الصحية + الضيافة + الطيران + المؤسّسات والتعليم + التصنيع والسلامة + الاستدامة والاتجاهات — مدوّنة الممارس.` (140) |

## Image Strategy
| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | `public/images/default-blog.jpg` upgraded to 1200×630 AVIF + srcset | eager + preload | "UNEOM Engineering Notes — 30 evergreen practitioner articles across 6 Saudi uniform categories" | «ملاحظات UNEOM الهندسية — 30 مقالاً ممارساً دائماً عبر 6 فئات للزي السعودي» |
| Category grid | Each of 6 category cards uses `public/images/heroes/{matching-pillar}-pillar-hero-640.avif` | lazy + async | Per-category descriptive alt EN | Per-category descriptive alt AR |
| Latest posts grid | Each post thumbnail uses `public/images/blog/{slug}-640.avif` | lazy + async | Per-post descriptive alt EN | Per-post descriptive alt AR |

**OG:** `og/hubs/blog-1200x630-{en,ar}.webp` (Engineering Notes composition). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `مدوّنة الزي السعودي UNEOM` · **EN:** `UNEOM Saudi uniform blog engineering notes`
- **Secondary:** UNEOM Engineering Notes، مدوّنة زي مهني سعودي، 30 evergreen posts, Saudi uniform blog
- **AI Citation queries:** هل لـUNEOM مدوّنة؟ · كم مقالاً في مدوّنة UNEOM؟ · ما الفئات الـ6؟ · هل المقالات بـAR وEN؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~80 words bilingual)

EN: «UNEOM Engineering Notes is 30 evergreen practitioner articles — not industry "thought leadership", not vendor marketing. Each post: 1,500–2,400 words, 5+ numeric anchors with attribution, named expert reviewer (Saudi Council of Engineers + sector SME), bilingual (AR + EN), with FAQ + Speakable schema. Six categories: healthcare (6), hospitality (5), aviation (3), corporate-education (6), manufacturing-safety (7), sustainability-trends (3). Updated 2026.»

AR: «ملاحظات UNEOM الهندسية هي 30 مقالاً دائماً بمستوى الممارس — ليست «قيادة فكر صناعية»، ليست تسويقاً مزوّداً. كل مقال: 1,500-2,400 كلمة، 5+ ركائز رقمية باعتماد، مراجِع خبير مُسمَّى (المجلس السعودي للمهندسين + خبير قطاعي)، ثنائي اللغة (AR + EN)، مع FAQ + Speakable schema. ستّ فئات: الرعاية الصحية (6) + الضيافة (5) + الطيران (3) + المؤسّسات والتعليم (6) + التصنيع والسلامة (7) + الاستدامة والاتجاهات (3). محدَّث 2026.»

### 2. Category Grid (6 category cards auto-rendered from BLOG_CATEGORIES)

Each card: category name + post count + 30–50 word description.

### 3. Latest / Featured Posts Grid (Auto-rendered top 6–12 posts by `publishedAt` + featured flag)

### 4. FAQ (4 bilingual independent)

1. كم مقالاً في مدوّنة UNEOM؟ · How many blog posts?
2. هل المقالات مكتوبة من قبل خبراء؟ · Are posts expert-reviewed?
3. كم مرّة يتمّ تحديث المدوّنة؟ · How often updated?
4. هل يمكن الاشتراك بنشرة Engineering Notes؟ · Can I subscribe?

### 5. CTA + Hub Footer

EN: "Read the engineering. Quote when ready." → Subscribe + Quote
AR: «اقرأ الهندسة. اطلب عرض السعر عند الجاهزية.» ← اشترك + عرض سعر

## Required Numerics (≥3)
- 30 evergreen posts
- 6 categories
- 1,500–2,400 words per post target
- Bilingual independent authoring (AR + EN)

## Required Entities (≥4)
SCE + sector SMEs per category (MoH / SFDA / GACA / HCIS / MoE / MoT). OEKO-TEX, Vision 2030.

## Definition Lock-in

**EN:** «UNEOM Engineering Notes is the **30-evergreen-article bilingual practitioner blog** across 6 categories (healthcare + hospitality + aviation + corporate-education + manufacturing-safety + sustainability-trends) — expert-reviewed, numeric-anchored, schema-validated, updated 2026.»

**AR:** «ملاحظات UNEOM الهندسية هي **مدوّنة الممارس ثنائية اللغة لـ30 مقالاً دائماً** عبر 6 فئات (الرعاية الصحية + الضيافة + الطيران + المؤسّسات والتعليم + التصنيع والسلامة + الاستدامة والاتجاهات) — مُراجَعة من خبراء، مرتكَزة بالأرقام، معتمَدة الـschema، محدَّثة 2026.»

## Internal Links (bilingual)
| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–6 | (6 category cards auto-rendered) | (الـ6 بطاقات فئات) | `/blog/category/{slug}/` × 6 | `/ar/blog/category/{slug}/` × 6 |
| 7–18 | (12 featured post cards auto-rendered) | (12 بطاقة مقال مميَّز) | `/blog/{slug}/` × 12 | `/ar/blog/{slug}/` × 12 |
| 19 | Resources hub | الموارد | `/resources/` | `/ar/resources/` |
| 20 | Subscribe Engineering Notes | اشترك في Engineering Notes | `/newsletter/` | `/ar/newsletter/` |

## External Links (1)
SCE.

## Schema bilingual
`CollectionPage` + `ItemList` (6 categories + featured 12 posts) `inLanguage` ar-SA/en-SA · `BreadcrumbList` + `FAQPage` (4 AR + 4 EN) + `Speakable`. Rich Results validated.

## Production Checkpoint (108 × 2 locales)
- [ ] AR (700–850) + EN (600–750) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 6 category cards + 12 featured post cards: bilingual alt
- [ ] OG en + ar generated; Schema validated; Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
