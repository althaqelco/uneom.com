# Content Brief — Hub: Shop (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `shop`
- **URL EN:** `/shop/` · **AR:** `/ar/shop/`
- **Page file:** `src/app/(site)/shop/page.tsx` — renders from `PRODUCT_CATEGORIES` + `PRODUCTS` manifests
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–850 / EN 600–750

## Hreflang

```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/shop/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/shop/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/shop/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Shop — 8 Categories, 18 Hero Products \| UNEOM` (43) | `Medical scrubs + lab coats + chef jackets + housekeeping + airline crew + executive suits + tactical sets + school uniforms — 18 hero products across 8 categories.` (160→trim 155) |
| AR | `المتجر — 8 فئات، 18 منتجاً رئيسياً \| UNEOM` (40) | `سكرابات طبية + معاطف + جاكيتات شيف + تدبير + طاقم طيران + بدلات تنفيذية + أطقم تكتيكية + زي مدرسي — 18 منتجاً رئيسياً عبر 8 فئات.` (130) |

## Image Strategy

| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | Composite OR `public/images/heroes/manufacturing-pillar-hero.avif` + `healthcare-pillar-hero.avif` collage + srcset | eager + fetchpriority=high + preload | "UNEOM Saudi product catalogue — 18 hero products engineered across 8 categories, compliance + climate + operational envelopes" | «كتالوج منتجات UNEOM السعودي — 18 منتجاً رئيسياً مهندَساً عبر 8 فئات، مظاريف الالتزام والمناخ والعمليات» |
| Children grid (8 categories) | Each card uses `public/images/products/{category}/...avif` thumbnail | lazy + async | Per-category descriptive alt EN | Per-category descriptive alt AR |

**OG:** `og/hubs/shop-1200x630-{en,ar}.webp` (8-category grid). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `متجر زي UNEOM السعودي` · **EN:** `UNEOM Saudi uniform shop categories`
- **Secondary:** كتالوج زي سعودي، 18 منتج رئيسي UNEOM، B2B uniform catalogue Saudi
- **AI Citation queries:** ما المنتجات الرئيسية لـUNEOM؟ · كم فئة في كتالوج UNEOM؟ · هل يمكن تخصيص أيّ منتج؟ · ما الـMOQ لكل منتج؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~80–100 words bilingual)

EN: «UNEOM's product catalogue covers 18 hero products across 8 industry-aligned categories — medical scrubs, lab coats, hospitality attire, aviation crew, corporate suits, manufacturing PPE, security tactical, education K-12, retail polos. Every product specifies fabric (8 families), compliance (per-industry), warranty (12–24 months), and MOQ (25–100). Custom Design overlays available for brand-critical programmes.»

AR: «يُغطّي كتالوج منتجات UNEOM 18 منتجاً رئيسياً عبر 8 فئات مُحاذاة للقطاع — سكرابات طبية، معاطف مختبر، أزياء ضيافة، طاقم طيران، بدلات مؤسّسية، PPE تصنيع، تكتيكي أمني، K-12 تعليمي، بولو تجزئة. كل منتج يُحدّد القماش (8 عائلات)، الالتزام (لكل قطاع)، الضمان (12-24 شهراً)، والـMOQ (25-100). طبقات التصميم المخصّص متاحة للبرامج الحرجة للعلامة.»

### 2. Children Grid (8 category cards auto-rendered from PRODUCT_CATEGORIES)

Each card: 30–50 words + product count + price range.

### 3. Selection Guide (~200 words bilingual)

«How to navigate:
- By industry compliance → Healthcare/Manufacturing/Aviation/etc.
- By fabric family → 8 fabric stack (Fabric Guide resource)
- By MOQ → 25 (Lab coat) → 50 (most) → 100 (Education) baseline
- By warranty tier → 12mo (Hospitality + Retail + Corporate + Education) / 18mo (Healthcare + Manufacturing + Security) / 24mo (Aviation)»

### 4. FAQ (4 bilingual independent)

1. ما الـMOQ لمنتج UNEOM؟ · What's the MOQ?
2. هل كل منتج قابل للتخصيص؟ · Is every product customisable?
3. ما الفرق بين فئات المنتجات؟ · How do categories differ?
4. هل يمكن طلب منتج خارج الكتالوج؟ · Can I order a product outside the catalogue?

### 5. CTA + Hub Footer

EN: "Browse by category, or skip to Quote." → Quote
AR: «تصفّح بالفئة، أو انتقل إلى عرض السعر.» ← عرض سعر

## Required Numerics (≥4)

- 18 hero products
- 8 product categories aligned to 8 industry pillars
- 25–100 MOQ range
- 12 / 18 / 24-month warranty tiers

## Required Entities (≥4)

8 industry regulators (per silo), SASO, OEKO-TEX, Saudi Council of Engineers, ISO 9001:2015.

## Definition Lock-in

**EN:** «UNEOM Shop is the **18-hero-product catalogue across 8 industry-aligned categories** — each product engineered to per-industry compliance + per-fabric-family chemistry + per-warranty-tier durability — with Custom Design overlays for brand-critical programmes.»

**AR:** «متجر UNEOM هو **كتالوج 18 منتجاً رئيسياً عبر 8 فئات مُحاذاة للقطاع** — كل منتج مهندَس وفق التزام كل قطاع + كيمياء كل عائلة قماش + متانة كل فئة ضمان — مع طبقات تصميم مخصّصة للبرامج الحرجة للعلامة.»

## Internal Links (bilingual)

| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–8 | (8 category cards auto-rendered) | (الـ8 بطاقات فئات) | `/shop/{category}/` × 8 | `/ar/shop/{category}/` × 8 |
| 9 | Industries hub | القطاعات | `/industries/` | `/ar/industries/` |
| 10 | Fabric Guide | دليل الأقمشة | `/resources/fabric-guide/` | `/ar/resources/fabric-guide/` |
| 11 | Custom Design service | التصميم المخصّص | `/services/custom-design/` | `/ar/services/custom-design/` |
| 12 | Quote | عرض سعر | `/quote/` | `/ar/quote/` |

## External Links (2)

| Anchor | URL |
|---|---|
| SASO Quality Mark | `https://www.saso.gov.sa` |
| OEKO-TEX Standard 100 | `https://www.oeko-tex.com/` |

## Schema bilingual

`CollectionPage` + `ItemList` (8 category children) `inLanguage` ar-SA/en-SA + cross-translation · `BreadcrumbList` + `FAQPage` (4 AR + 4 EN independent) + `Speakable` + `OfferCatalog` (referencing 18 hero products). Rich Results validated.

## Production Checkpoint (108 × 2 locales)

- [ ] AR (700–850) + EN (600–750) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 8 category cards: bilingual alt + product-count + price range
- [ ] OG en + ar generated; Schema validated bilingual
- [ ] Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
