# Content Brief — Blog: How Saudi Medical Scrubs Have Evolved Since 2013

## Page Identity

- **Page type:** Blog Post (B.8)
- **Slug:** `medical-scrubs-evolution-saudi` · **Silo:** healthcare · **City:** Riyadh
- **URL (EN):** `https://uneom.com/blog/medical-scrubs-evolution-saudi/`
- **URL (AR):** `https://uneom.com/ar/blog/medical-scrubs-evolution-saudi/`
- **Author:** UNEOM Editorial · **Reviewer:** Saudi Council of Engineers (textile) + 1 ICMS infection-control SME (named, with consent)
- **Data source-of-truth:** `src/lib/data/blog/posts/medical-scrubs-evolution-saudi.ts` (slug, hero, sections, lead populated)
- **Target publish:** Wave 6, Week 15 · **Word count:** AR 1,900–2,300 / EN 1,700–2,100

---

## Bilingual + Smart-Image Layer (CANONICAL — Phase 2 Upgrade)

### Hreflang Configuration

```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/blog/medical-scrubs-evolution-saudi/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/blog/medical-scrubs-evolution-saudi/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/blog/medical-scrubs-evolution-saudi/" />
<link rel="canonical" href="https://uneom.com/{locale-prefix}blog/medical-scrubs-evolution-saudi/" /> <!-- self-canonical per locale -->
```

- AR side `<html lang="ar" dir="rtl">`, EN side `<html lang="en" dir="ltr">`
- Body text rendered with `font-family: var(--font-ar)` (AR) / `var(--font-en)` (EN) tokens

### Bilingual Authoring Principle

AR is **not a translation** of EN — both versions are independently authored to the same engineering claim with locale-native rhetoric, idioms, and FAQ Q&A. AR will run ~15–20% longer than EN (structural, not redundant).

---

## Layer 0 — On-Page Baseline (bilingual)

### EN side
- **Title (EN):** `How Saudi Medical Scrubs Have Evolved Since 2013 | UNEOM` (54)
- **Meta (EN):** `12 years of fabric science, modesty engineering, and 4.2-cycle/shift wash regime — what changed in Saudi medical uniforms, validated against laundry data.` (155)
- **OG title (EN):** "How Saudi Medical Scrubs Have Evolved Since 2013"
- **OG description (EN):** Same as meta or shorter punchier variant

### AR side
- **Title (AR):** `كيف تطوّر السكراب الطبي السعودي منذ 2013 | UNEOM` (44)
- **Meta (AR):** `12 سنة من علم الأقمشة وهندسة الاحتشام ونظام غسيل 4.2 دورة/وردية — ما الذي تغيّر في الزي الطبي السعودي، مُوثَّقاً ببيانات الغسيل.` (135)
- **OG title (AR):** «كيف تطوّر السكراب الطبي السعودي منذ 2013»
- **OG description (AR):** نفس الـmeta أو variant أقصر بقوّة

---

## Image Strategy (smart bilingual)

### Hero (LCP candidate — priority loading)
- **Path:** `public/images/blog/medical-scrubs-evolution-saudi.avif` (full-res 1920w)
- **Srcset:** `-640.avif`, `-960.avif`, `-1440.avif` + `.webp` fallbacks (all 8 variants present in repo)
- **Sizes attribute:** `(max-width: 640px) 100vw, (max-width: 960px) 100vw, (max-width: 1440px) 90vw, 1280px`
- **Aspect ratio:** 16:9 (1920×1080 or crop to 1200×675)
- **Dimensions explicit on tag:** `width="1920" height="1080"` (CLS=0)
- **Loading:** `eager` (LCP image)
- **Decoding:** `sync`
- **Fetchpriority:** `high`
- **Preload:** `<link rel="preload" as="image" imagesrcset=... imagesizes=... fetchpriority="high">` in `<head>`
- **Alt (EN):** "Saudi tertiary hospital ward with UNEOM Premium scrub — antimicrobial silver-ion poly-cotton 65/35 validated through 4.2 daily wash cycles per shift, AATCC Method 100 documented per batch"
- **Alt (AR):** «جناح مستشفى ثلاثي سعودي بسكراب UNEOM Premium — بوليستر-قطن 65/35 بأيونات الفضة المرتبطة، معتمَد عبر 4.2 دورات غسيل يومية في الوردية، AATCC Method 100 موثَّق لكل دفعة»
- **Caption (EN):** "Riyadh tertiary hospital — the 4.2-cycle/shift wash regime that catalogue cotton-100% scrubs cannot survive past month 4."
- **Caption (AR):** «مستشفى ثلاثي بالرياض — نظام غسيل 4.2 دورة/وردية الذي لا تنجو منه سكرابات القطن 100% بعد الشهر الرابع.»

### Inline figure 1 (~30% mark — material science section)
- **Path:** `public/images/fabrics/poly-cotton-65-35-macro-800.avif` (inline-grade 800w; full-size 1600w also available)
- **Srcset:** `-400.avif`, `-800.avif` + `.webp`
- **Aspect ratio:** 1:1 (macro square) — `width="800" height="800"`
- **Loading:** `lazy`
- **Decoding:** `async`
- **Alt (EN):** "Poly-cotton 65/35 fabric macro — bonded silver-ion antimicrobial fiber chemistry showing Polyamide-6 anchoring vs surface treatment"
- **Alt (AR):** «صورة مكبَّرة لقماش بوليستر-قطن 65/35 — كيمياء أيونات الفضة المرتبطة المضادّة للميكروبات تُظهِر تثبيت بولي أميد 6 مقابل المعالَجة السطحية»
- **Caption (EN):** "Bonded silver-ion: 80+ cycles AATCC 100. Surface treatment: 30 cycles. The chemistry that separates marketing from engineering."
- **Caption (AR):** «أيونات الفضة المرتبطة: 80+ دورة AATCC 100. المعالَجة السطحية: 30 دورة. الكيمياء التي تفصل التسويق عن الهندسة.»

### Inline figure 2 (~60% mark — Saudi context section)
- **Path:** `public/images/cities/hero-riyadh-960.avif` (inline-grade)
- **Srcset:** `-640.avif`, `-960.avif`, `-1440.avif`
- **Aspect ratio:** 16:9 — `width="960" height="540"`
- **Loading:** `lazy` · **Decoding:** `async`
- **Alt (EN):** "Riyadh — UNEOM's largest healthcare city portfolio, 12 tertiary referral hospitals running the 4.2-cycle/shift benchmark that defines Saudi clinical-uniform engineering"
- **Alt (AR):** «الرياض — أكبر محفظة رعاية صحية لـUNEOM، 12 مستشفى إحالة ثلاثياً تُشغّل معيار 4.2 دورات/وردية الذي يُحدِّد هندسة الزي السريري السعودي»
- **Caption (EN):** "Riyadh tertiary cluster — 38% above global hospital wash-cycle benchmark."
- **Caption (AR):** «عنقود الرياض الثلاثي — 38% فوق المعيار العالمي لدورات غسيل المستشفيات.»

### Inline figure 3 (FAQ block intro)
- **Path (primary):** `public/images/certificate/aatcc-method-100.avif` (if generated — currently TBD)
- **Path (fallback):** `public/images/blog/healthcare-uniforms-infection-control.avif` (cross-blog reference within same silo, allowed)
- **Loading:** `lazy` · **Decoding:** `async`
- **Alt (EN):** "AATCC Method 100 — per-batch antimicrobial efficacy lab certification accompanying every UNEOM healthcare programme shipment"
- **Alt (AR):** «AATCC Method 100 — اعتماد مختبَري لكفاءة مضاد الميكروبات لكل دفعة، يُرافِق كل شحنة برنامج رعاية صحية من UNEOM»

### OG image variants
- **EN OG:** `public/images/og/blog/medical-scrubs-evolution-saudi-1200x630-en.webp` (1200×630, <200KB, hero crop with optional EN-text overlay)
- **AR OG:** `public/images/og/blog/medical-scrubs-evolution-saudi-1200x630-ar.webp` (1200×630, RTL text overlay where applicable, culturally-adapted framing)
- **Twitter Card:** `summary_large_image` referencing the locale-matching OG

### LCP / CLS optimization (page-level)
- **LCP target:** Hero image LCP <2.5s on 4G
- **CLS target:** 0 (all images have explicit width + height + aspect ratio)
- **Preload hint:** `<link rel="preload" as="image" href="hero-{best-srcset}.avif" imagesrcset=... fetchpriority="high">` in `<head>` of both AR + EN pages

---

## Targeting

- **Primary KW (AR):** `تطوّر السكراب الطبي السعودي` · **EN:** `Saudi medical scrubs evolution`
- **Secondary KWs:**
  - سكراب AATCC 100 / AATCC 100 scrub Saudi
  - تاريخ السكراب الطبي السعودية / Saudi medical scrub history 2013
  - 4.2 دورة غسيل سكراب / 4.2 wash cycles medical scrub
  - تقنية silver-ion سكراب / bonded silver-ion scrub
- **AI Citation queries (6+):**
  - «كيف تطوّر الزي الطبي السعودي منذ 2013؟»
  - «ما الفرق بين سكراب 2013 و2026 في السعودية؟»
  - «لماذا 4.2 دورة غسيل/وردية معيار سعودي؟»
  - «هل القطن 100% فقد قيمته السريرية في الزي الطبي؟»
  - «ما هو AATCC Method 100 ومتى دخل السعودية؟»
  - «ما الـICMS protocol لتدوير السكراب؟»

---

## Inputs from `references/`

- **Stats (from stats.md §3):** 4.2 wash cycles/scrub/shift (UNEOM 38 partner hospitals), 80+ wash cycles UNEOM Premium AATCC-100 validated, 30 wash cycles cotton-100% efficacy decay threshold, 8mo vs 14mo standard rotation, 180 SAR avg scrub set, 220–280 SAR premium tier.
- **Opinion:** **O-H1** (cotton 22% TCO premium over 18 months) — visual pull-quote in §4 (material-science evolution). Mark one-time-used in opinions.md.
- **Story:** S-001 (Riyadh tertiary hospital scrub consolidation, 4 vendors → 1 UNEOM, 22% TCO reduction). Already referenced in case study brief; for this blog post use a thinner anecdote variant ("In one Riyadh ICU…") without naming the facility. Mark one-time-used in stories.md.

---

## Required Sections (B.8 — 9 sections)

### 1. Hook Paragraph (~80 words, primary KW within first 100)
Open with the laundry-data thesis: *"تطوّر السكراب الطبي السعودي ليس قصة موضة — هو قصة 4.2 دورة غسيل في كل وردية"*. Frame the 2013→2026 arc as engineering not aesthetics. Lead from the data file is already drafted — refine for hook tightness.

### 2. Definition / Context Block (~200 words — contains Architect Equation)
- Architect Equation (Plan §6.1): defines what a Saudi medical scrub is in 2026 — antimicrobial poly-cotton 65/35, MoH-licensed facility wear, AATCC 100 validated.
- 3 supporting definitions: bonded silver-ion methodology, AATCC Method 100 testing protocol, hijab-integrated MoH-compliant variant.

### 3. 5–7 H2 Sections (~250 words each)
Following data-file section headings + expansion:
1. **The 2013 baseline** (~250 words) — what hospitals were buying, why polyester-dominated catalogues failed
2. **The antimicrobial inflection (2015–2017)** (~250 words) — surface-treatment chemistry, why it failed at 30 cycles
3. **Bonded silver-ion arrival (2018–2020)** (~250 words) — Polyamide-6 anchoring methodology, AATCC 100 validation
4. **Modesty engineering (2019–2022)** (~250 words) — hijab-integrated variants, MoH compliance posture, SFDA registration
5. **The 4.2-cycle workload reality (2023–2026)** (~250 words) — Saudi tertiary hospital wash data, 38% above global benchmark
6. **What's coming (2026–2030)** (~250 words) — closed-loop take-back, Class 2 OEKO-TEX pediatric programmes, fluid-shield Teflon-grade integration

### 4. Saudi-Specific Application Block (~200 words)
Apply the evolution to Saudi context: 38-hospital UNEOM partner network, 4.2-cycle benchmark vs global 3.0, Riyadh tertiary referral concentration (12 hospitals), Saudi clinical workforce hijab-integration realities. Use الأربعينية / السموم thermal swing as fabric-stress amplifier specific to Riyadh.

### 5. Common Misconceptions Block (~150 words)
2 myths:
1. *"القطن 100% أنظف للجلد"* — physics-of-failure: cellulose breakdown at autoclave 121°C + surface-treatment antimicrobial decay at 30 cycles = net hygiene loss vs poly-cotton 65/35 silver-ion
2. *"كل سكراب «antimicrobial» متساوي"* — surface treatment vs Polyamide-6 anchored silver-ion: 30 cycles vs 80+ cycles documented divergence

### 6. Practical Checklist Block (~150 words — 8-item interactive list)
"Saudi Healthcare Scrub Procurement Audit — 8 items":
1. ☐ AATCC Method 100 per-batch certificate retained
2. ☐ Antimicrobial methodology disclosed (surface vs bonded)
3. ☐ Wash-cycle threshold documented (≥80 cycles target)
4. ☐ Hijab-integrated variant MoH-compliant + SFDA-registered
5. ☐ Pantone hold for Year-2 re-orders
6. ☐ Replacement-cycle SLA contracted
7. ☐ Per-batch lab report accessible (procurement audit pack)
8. ☐ Warranty duration ≥18 months

### 7. Story / Anecdote Block (~200 words)
Anonymous Riyadh ICU thin variant: 12-bed unit, 2024 audit, 4 vendor scrubs, antimicrobial drift visible at cycle 35. UNEOM Premium swap at month 6, AATCC retention through cycle 85, IPC team flag clearance.

### 8. FAQ Block (5–6 questions — drafted from data file expandedFaqs + extensions)
1. كيف تطوّر السكراب الطبي السعودي منذ 2013؟
2. ما هو AATCC Method 100 وما علاقته بالسكراب؟
3. ما الفرق بين القطن 100% والـpoly-cotton 65/35؟
4. ما الـ4.2 wash cycles/scrub/shift وما مصدرها؟
5. هل متغيّر الحجاب الطبي معتمد من MoH؟
6. كيف سيكون السكراب الطبي السعودي في 2030؟

### 9. CTA Strip + Internal Silo Strip
Quote (healthcare programme) + Subscribe Engineering Notes + 8-link silo strip (per §6.6 matrix)

---

## Required Numerics (≥5)

1. **4.2 wash cycles/scrub/shift** (UNEOM 38 partner hospitals, 38% above global)
2. **80+ industrial wash cycles** AATCC 100 validated (UNEOM Premium)
3. **30 wash cycles** cotton-100% efficacy decay threshold
4. **8 / 14 months** rotation cycle (catalogue / UNEOM Premium)
5. **18-month warranty** with embroidery + antimicrobial scope
6. **180 / 280 SAR** Classic / Premium scrub set (UNEOM Q1 2026)
7. **2013–2026 = 12-year arc** of Saudi medical scrub evolution

---

## Required Entities (≥6)

1. **MoH** — `https://www.moh.gov.sa`
2. **SFDA** — `https://www.sfda.gov.sa`
3. **AATCC Method 100** — `https://www.aatcc.org/test/methods/`
4. **OEKO-TEX Standard 100** — `https://www.oeko-tex.com/`
5. **ICMS — Infection Control Management System**
6. **King Faisal Specialist Hospital** + **King Abdulaziz Medical City** (anchor partners, contextual naming)
7. **Vision 2030 Healthcare Sector Strategy** — `https://www.vision2030.gov.sa`

---

## Definition Lock-in (1 primary)

**EN:**
> «The 2026 Saudi medical scrub is the **bonded silver-ion polyester-cotton 65/35 garment** that **MoH-licensed clinical staff wear** through **4.2 daily wash cycles** — engineered for 80+ AATCC-100-validated industrial laundering cycles and 18-month replacement cadence.»

**AR:**
> «السكراب الطبي السعودي في 2026 هو **القطعة من بوليستر-قطن 65/35 بأيونات الفضة المرتبطة** التي **يرتديها الطاقم السريري في المنشآت المرخّصة من وزارة الصحة** خلال **4.2 دورات غسيل يومياً** — مهندَس لـ80+ دورة غسيل صناعي معتمدة AATCC 100 وتدوير 18 شهراً.»

---

## Internal Links (8 — silo-aware per §6.6, bilingual locale-resolved targets)

The AR page links to `/ar/...` targets; the EN page links to `/...` targets. The locale-resolution is mandatory — NO cross-locale linking (an EN post must not link to `/ar/...` and vice versa).

| # | Anchor (EN) | Anchor (AR) | Target (EN) | Target (AR) |
|---|---|---|---|---|
| 1 | Healthcare blog category | مدوّنة الرعاية الصحية | `/blog/category/healthcare/` | `/ar/blog/category/healthcare/` |
| 2 | Healthcare industry pillar | قطاع الرعاية الصحية | `/industries/healthcare/` | `/ar/industries/healthcare/` |
| 3 | Classic Scrub Set product | طقم سكراب طبي كلاسيك | `/shop/medical-scrubs/scrub-set-classic/` | `/ar/shop/medical-scrubs/scrub-set-classic/` |
| 4 | Premium Scrub Set product | طقم سكراب طبي بريميوم | `/shop/medical-scrubs/scrub-set-premium/` | `/ar/shop/medical-scrubs/scrub-set-premium/` |
| 5 | Healthcare Uniform Standards | معايير الزي الطبي السعودي | `/resources/healthcare-uniform-standards/` | `/ar/resources/healthcare-uniform-standards/` |
| 6 | Nursing Uniform Guide | دليل زي الممرّضين | `/resources/nursing-uniform-guide/` | `/ar/resources/nursing-uniform-guide/` |
| 7 | Aesthetic clinic case study | دراسة حالة عيادة تجميل | `/case-studies/hospital-aesthetic/` | `/ar/case-studies/hospital-aesthetic/` |
| 8 | Riyadh location hub | الرياض | `/locations/riyadh/` | `/ar/locations/riyadh/` |

---

## External Links (3 — authoritative, language-agnostic)

| Anchor | URL | Note |
|---|---|---|
| MoH | `https://www.moh.gov.sa` | Saudi gov site auto-localises by Accept-Language |
| AATCC Method 100 | `https://www.aatcc.org/test/methods/` | EN-only authoritative source — link from both locales |
| OEKO-TEX 100 | `https://www.oeko-tex.com/` | Multi-lingual; link from both locales |

---

## Schema (B.8 — bilingual)

Both locales render Article schema with `inLanguage` field + cross-version `translationOfWork` / `workTranslation` linking.

### AR-side Article schema
```json
{
  "@type": "Article",
  "inLanguage": "ar-SA",
  "headline": "كيف تطوّر السكراب الطبي السعودي منذ 2013",
  "translationOfWork": { "@id": "https://uneom.com/blog/medical-scrubs-evolution-saudi/" },
  "author": { "@type": "Person", "name": "UNEOM Editorial", "sameAs": "https://www.linkedin.com/company/uneom" },
  "reviewedBy": { "@type": "Person", "name": "{TBD textile chair Saudi Council of Engineers}", "sameAs": "{LinkedIn}" },
  "datePublished": "2025-09-12",
  "dateModified": "2026-05-11"
}
```

### EN-side Article schema
```json
{
  "@type": "Article",
  "inLanguage": "en-SA",
  "headline": "How Saudi Medical Scrubs Have Evolved Since 2013",
  "workTranslation": { "@id": "https://uneom.com/ar/blog/medical-scrubs-evolution-saudi/" },
  "author": { "@type": "Person", "name": "UNEOM Editorial" },
  "reviewedBy": { "@type": "Person", "name": "{TBD}" },
  "datePublished": "2025-09-12",
  "dateModified": "2026-05-11"
}
```

### Bilingual schema checklist
- [x] `Article` (AR + EN) with `inLanguage` ar-SA / en-SA + translation cross-link
- [x] `Person` author + reviewer (`sameAs` LinkedIn)
- [x] `BreadcrumbList` (localised per locale)
- [x] `FAQPage` (6 Q&A — **AR FAQs authored independently from EN, not translated**)
- [x] `Speakable` (Definition Block + first FAQ answer — both locales)
- [x] `ImageObject` for hero with `inLanguage` + localised `caption`

---

## AI Citation Hooks (Plan §C)

- 1 Definition Lock-in (Saudi 2026 scrub canonical phrasing)
- 5+ Numeric Anchors with units + attribution
- 1 evolution timeline as Markdown table (2013 baseline → 2026 standard) — LLM-quotable
- Source attribution density: "وفقاً لـ" / "according to" ≥4 mentions
- Recency signal: "2026" in title + meta + 3 body locations
- Author credentials in Person schema

---

## Production Checkpoint (bilingual + smart-image — 108 checks × 2 locales)

### Content
- [ ] Brief reviewed
- [ ] **AR authored independently** (1,900–2,300 words) — not translation
- [ ] **EN authored independently** (1,700–2,100 words)
- [ ] AR and EN deliver the same engineering claim with locale-native rhetoric
- [ ] Definition Lock-in: full AR + full EN texts present (not "AR equivalent")
- [ ] FAQs: 6 Q&A authored AR + 6 authored EN — pairs are conceptually aligned but linguistically independent

### Bilingual SEO
- [ ] `hreflang` ar-SA + en-SA + x-default + per-locale `canonical` configured in `<head>`
- [ ] `<html lang="ar" dir="rtl">` AR / `<html lang="en" dir="ltr">` EN
- [ ] Title length 50–60ch in both locales
- [ ] Meta length 150–160ch in both locales
- [ ] No cross-locale link leakage in body (AR body links AR-only, EN body links EN-only)

### Images
- [ ] Hero `public/images/blog/medical-scrubs-evolution-saudi.{avif,webp}` with srcset 640/960/1440
- [ ] Hero `loading=eager` + `fetchpriority=high` + `<link rel=preload>` in both locales
- [ ] Hero alt + caption authored AR + EN (descriptive engineering claim, not generic)
- [ ] Inline figure 1 (poly-cotton-65-35-macro): lazy + async + bilingual alt + bilingual caption
- [ ] Inline figure 2 (cities/hero-riyadh): lazy + async + bilingual alt + bilingual caption
- [ ] Inline figure 3 (AATCC certificate or fallback): lazy + async + bilingual alt
- [ ] All `<img>` tags have explicit width + height attributes (CLS=0)
- [ ] OG image EN variant generated (1200×630, <200KB)
- [ ] OG image AR variant generated (1200×630, RTL-text-overlay or culturally-adapted framing)
- [ ] Twitter Card `summary_large_image` referencing locale-matching OG

### Performance (Core Web Vitals — both locales)
- [ ] LCP <2.5s on 4G (hero image)
- [ ] CLS = 0 (explicit dimensions on all `<img>`)
- [ ] INP <200ms (no heavy interactive blocking)

### Schema bilingual
- [ ] Article with `inLanguage: ar-SA` (AR) + `en-SA` (EN)
- [ ] `Article.translationOfWork` (AR→EN) + `Article.workTranslation` (EN→AR) cross-link
- [ ] `Person` author + reviewer with `sameAs` LinkedIn
- [ ] `BreadcrumbList` localised per locale
- [ ] `FAQPage` localised — 6 AR Q&A + 6 EN Q&A independently authored
- [ ] `Speakable` Definition Block + first FAQ — both locales
- [ ] `ImageObject` hero with `inLanguage` + localised caption
- [ ] Schema validated in Google Rich Results Test on BOTH `/ar/...` and `/...` URLs

### Discovery
- [ ] Internal links: 8 silo-aware (per §6.6), AR-target column resolved on AR page, EN-target on EN page
- [ ] External links: 3 authoritative (rel="noopener")
- [ ] Lighthouse SEO ≥95 on BOTH locales
- [ ] Accessibility WCAG AA ≥95 on BOTH locales (RTL-aware on AR)

### References ledger
- [ ] Opinion O-H1 marked one-time-used in `references/opinions.md`
- [ ] Story (anonymous Riyadh ICU variant) marked one-time-used in `references/stories.md`
- [ ] Stats from `references/stats.md` §3 cited in body — values match

### Sign-off
- [ ] All 108 baseline checks pass on AR page
- [ ] All 108 baseline checks pass on EN page
- [ ] Author + named reviewer publish-cleared with bio + credentials

**Status:** Brief ready. Production scheduled Wave 6, Week 15.
