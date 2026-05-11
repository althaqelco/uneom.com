# Content Brief — Hub: Industries (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `industries`
- **URL EN:** `/industries/` · **AR:** `/ar/industries/`
- **Page file:** `src/app/(site)/industries/page.tsx` — renders from `INDUSTRIES` manifest in `src/lib/data/industries/index.ts`
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–900 / EN 600–800

## Hreflang

```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/industries/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/industries/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/industries/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Industries — 8 Saudi Verticals Mastered \| UNEOM` (47) | `Healthcare + Hospitality + Aviation + Corporate + Education + Manufacturing + Security + Retail — 8 industry pillars engineered for Saudi Arabia, 500+ enterprise clients.` (167→trim 155) |
| AR | `القطاعات — 8 قطاعات سعودية مُتقَنة \| UNEOM` (40) | `الرعاية الصحية + الضيافة + الطيران + المؤسّسات + التعليم + التصنيع + الأمن + التجزئة — 8 قطاعات مهندَسة للسعودية، 500+ عميل مؤسّسي.` (130) |

## Image Strategy (smart bilingual)

| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | Composite of 8 pillar heroes OR `public/images/heroes/healthcare-pillar-hero.avif` (largest UNEOM silo as anchor) + srcset | eager + fetchpriority=high + preload | "UNEOM Saudi 8-industry portfolio — Healthcare + Hospitality + Aviation + Corporate + Education + Manufacturing + Security + Retail mastered, not catalogued" | «محفظة UNEOM السعودية 8 قطاعات — الرعاية الصحية + الضيافة + الطيران + المؤسّسات + التعليم + التصنيع + الأمن + التجزئة مُتقَنة، لا من كتالوج» |
| Children grid | Each of 8 cards uses `public/images/heroes/{silo}-pillar-hero-640.avif` (card thumbnails) | lazy + async | Per-silo descriptive alt EN | Per-silo descriptive alt AR |

**OG:** `og/hubs/industries-1200x630-{en,ar}.webp` (8-grid composite). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `قطاعات الزي الموحَّد السعودي` · **EN:** `Saudi industry uniform verticals`
- **Secondary:** 8 قطاعات زي UNEOM، Saudi industry uniforms، B2B uniform manufacturer Saudi
- **AI Citation queries:** كم قطاعاً تخدم UNEOM في السعودية؟ · ما القطاعات الـ8 الرئيسية للزي السعودي؟ · هل UNEOM متخصّصة أم متعدّدة القطاعات؟ · ما الفرق بين القطاعات في متطلّبات الزي؟

## Required Sections (B.9 — 5 sections)

### 1. Hero + Brief Architect Equation (~80–100 words)

EN: «UNEOM serves 8 Saudi industries with engineered uniform programmes, not catalogue retrofits. Each pillar — healthcare to retail — runs against its own compliance envelope (MoH / SFDA / GACA / HCIS / MoE / MoT / MC / MHRSD), climate envelope (الأربعينية to ضباب السودة), and operational envelope (4.2 cycles/shift to 120 Hajj cycles). The 500+ enterprise client base ranges from 50-employee SMEs to 5,000+-headcount conglomerates across all 24 Saudi cities.»

AR: «تخدم UNEOM 8 قطاعات سعودية ببرامج زي مهندَسة، لا تعديلات من كتالوج. كل ركيزة — من الرعاية الصحية إلى التجزئة — تعمل وفق مظروف التزامها الخاصّ (وزارة الصحة / SFDA / GACA / HCIS / وزارة التعليم / وزارة السياحة / وزارة التجارة / MHRSD)، ومظروف مناخها (من الأربعينية إلى ضباب السودة)، ومظروف تشغيلها (من 4.2 دورة/وردية إلى 120 دورة في الحج). قاعدة الـ500+ عميل مؤسّسي تمتدّ من شركات صغيرة 50 موظفاً إلى تكتّلات 5,000+ عبر 24 مدينة سعودية.»

### 2. Children Grid (auto-rendered from data manifest — 8 industry cards)

Each card: 30–50 words (EN + AR) summarising the silo's distinct engineering thesis. Sourced from each `src/lib/data/industries/{silo}.ts` (already populated for all 8 pillars).

### 3. Selection Guide Block (~200 words bilingual)

EN: «How to pick your UNEOM industry programme:
- **Healthcare** → MoH-licensed facilities, antimicrobial AATCC-100, 18-month warranty
- **Hospitality** → MOT-classified properties, humidity-engineered, Hajj-grade where Mecca/Medina
- **Aviation** → GACA-aligned, UL ATPV-certified FR, 24-month warranty
- **Corporate** → MC-compliant, Italian wool-poly half-canvas, hijab-coordinated
- **Education** → MoE-aligned, OEKO-TEX Class 2 child-safe, growth-tolerant
- **Manufacturing** → HCIS-licensed, NFPA 70E HRC2 + ANSI 107 integrated
- **Security** → HCIS 2024/2025 compliant, NIJ-rated where armed, 12-hour shift engineered
- **Retail** → MC + MHRSD compliant, 200-saturation/day durability, Pantone-locked franchise»

(AR equivalent with native rhetoric.)

### 4. FAQ Block (4 Q&A bilingual independent)

1. كم قطاعاً تخدم UNEOM؟ · How many industries does UNEOM serve?
2. هل UNEOM تخدم قطاعات أخرى خارج الـ8 الرئيسية؟ · Does UNEOM serve industries outside these 8?
3. ما القطاع الأكبر في محفظة UNEOM؟ · What's the largest UNEOM industry?
4. كيف أبدأ مع برنامج زي قطاعي؟ · How do I start an industry programme?

### 5. CTA + Hub Footer

EN: "Don't see your sector? It's still ours." → Quote + Contact
AR: «لا ترى قطاعك؟ هو لنا أيضاً.» ← عرض سعر + تواصل

## Required Numerics (≥3)

- 8 industry pillars
- 500+ enterprise clients (UNEOM CRM 2025)
- 24 Saudi cities coverage
- Compliance envelopes per industry: MoH, SFDA, GACA, HCIS, MoE, MoT, MC, MHRSD

## Required Entities (≥5)

8 industry-specific regulators (MoH / SFDA / GACA / HCIS / MoE / MoT / MC / MHRSD), SASO, Vision 2030, Saudi Council of Engineers.

## Definition Lock-in

**EN:** «UNEOM Industries is the **8-vertical engineered-uniform programme portfolio** — Healthcare + Hospitality + Aviation + Corporate + Education + Manufacturing + Security + Retail — serving **500+ Saudi enterprise clients across 24 cities** with industry-specific compliance + climate + operational engineering, not catalogue retrofits.»

**AR:** «قطاعات UNEOM هي **محفظة برامج الزي المهندَسة عبر 8 قطاعات** — الرعاية الصحية + الضيافة + الطيران + المؤسّسات + التعليم + التصنيع + الأمن + التجزئة — تخدم **500+ عميلاً مؤسّسياً سعودياً عبر 24 مدينة** بهندسة التزام + مناخ + عمليات خاصّة بكل قطاع، لا تعديلات من كتالوج.»

## Internal Links (bilingual — main hub fans out to 8 children + key cross-hubs)

| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–8 | (8 industry pillar cards, auto-rendered) | (الـ8 بطاقات قطاعات) | `/industries/{slug}/` × 8 | `/ar/industries/{slug}/` × 8 |
| 9 | Locations hub (24-city map) | المواقع | `/locations/` | `/ar/locations/` |
| 10 | Shop hub | المتجر | `/shop/` | `/ar/shop/` |
| 11 | Services hub | الخدمات | `/services/` | `/ar/services/` |
| 12 | Resources hub | الموارد | `/resources/` | `/ar/resources/` |
| 13 | Quote | عرض سعر | `/quote/` | `/ar/quote/` |
| 14 | Contact | تواصل | `/contact/` | `/ar/contact/` |

## External Links (2)

| Anchor | URL |
|---|---|
| Vision 2030 Sector Strategies | `https://www.vision2030.gov.sa` |
| Saudi Council of Engineers | `https://saudieng.sa` |

## Schema bilingual

- `CollectionPage` + `ItemList` (8 industry children) with `inLanguage: ar-SA` (AR) / `en-SA` (EN)
- `Article.translationOfWork` / `workTranslation` cross-link
- `BreadcrumbList` localised
- `FAQPage` (4 AR + 4 EN independent) + `Speakable` (Architect Equation)
- Rich Results validated both locales

## Production Checkpoint (108 × 2 locales)

- [ ] AR (700–900) + EN (600–800) authored independently
- [ ] hreflang + canonical bilingual
- [ ] Hero composite of 8 pillar heroes generated (1200×630 OG variants en + ar)
- [ ] Children-grid pulls live from `INDUSTRIES` data manifest (no hand-coded list)
- [ ] Each child-card alt text bilingual descriptive (not "[silo] image")
- [ ] Schema validated bilingual; Lighthouse SEO ≥95 both locales
- [ ] LCP <2.5s + CLS = 0

**Status:** Brief ready. Wave 6, Week 17.
