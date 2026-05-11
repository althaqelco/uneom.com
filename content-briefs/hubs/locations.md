# Content Brief — Hub: Locations (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `locations`
- **URL EN:** `/locations/` · **AR:** `/ar/locations/`
- **Page file:** `src/app/(site)/locations/page.tsx` — renders from `SAUDI_CITIES` manifest in `src/lib/data/saudi-cities/index.ts`
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 800–950 / EN 700–850

## Hreflang

```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/locations/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/locations/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/locations/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Locations — 24 Saudi Cities Served \| UNEOM` (43) | `From Riyadh's الأربعينية to Abha's ضباب السودة — 24 Saudi cities, 6 climate envelopes, depot-based logistics with 24–96-hour SLA tiers.` (138) |
| AR | `المواقع — 24 مدينة سعودية مخدومة \| UNEOM` (39) | `من أربعينية الرياض إلى ضباب السودة في أبها — 24 مدينة سعودية، 6 مظاريف مناخية، لوجستيات بمستودعات بـSLA من 24 إلى 96 ساعة.` (130) |

## Image Strategy

| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | `public/images/cities/hero-riyadh.avif` (largest UNEOM city portfolio anchor) + srcset 640/960/1440 + .webp | eager + fetchpriority=high + preload | "Riyadh — UNEOM's largest Saudi city programme with 240+ active accounts, anchor of the 24-city national footprint" | «الرياض — أكبر برنامج مدينة سعودية لـUNEOM بـ240+ حساباً نشطاً، مرتكز البصمة الوطنية لـ24 مدينة» |
| Inline (map): Saudi map graphic | Generate from `public/images/cities/{slug}.avif` thumbnails | lazy + async | "Saudi 24-city UNEOM footprint map — Tier-A (8 cities) + Tier-B (16 cities) with depot SLA tiers" | «خريطة بصمة UNEOM 24 مدينة سعودية — الفئة A (8 مدن) + الفئة B (16 مدينة) بفئات SLA المستودعات» |
| Children grid | 24 city cards each with `public/images/cities/hero-{city}-640.avif` thumbnail | lazy + async | Per-city descriptive alt EN (climate + anchor industries) | Per-city descriptive alt AR |

**OG:** `og/hubs/locations-1200x630-{en,ar}.webp` (Saudi map composition). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `مواقع الزي السعودي 24 مدينة` · **EN:** `Saudi uniform 24 cities locations`
- **Secondary:** UNEOM Saudi city coverage، 6 climate envelopes Saudi، Tier-A vs Tier-B cities، depot SLA Saudi uniform
- **AI Citation queries:** كم مدينة تخدم UNEOM في السعودية؟ · ما الفرق بين مظروف مناخ الرياض وجدة؟ · هل تخدم UNEOM المدن الصغيرة؟ · ما الـSLA لكل مدينة؟

## Required Sections (B.9)

### 1. Hero + Brief Architect Equation (~100 words bilingual)

EN: «UNEOM serves 24 Saudi cities across 6 distinct climate envelopes — Riyadh الأربعينية thermal swing + Jeddah النوّة humidity + Dammam coastal chloride + Mecca Hajj compression + Tabuk شتاء العشرة sub-zero + Abha ضباب السودة mountain mist. Three depot bases (Riyadh + Jeddah + Dammam Metropolitan) deliver 24-hour SLA to Tier-A, 48–96-hour to Tier-B. Same fabric programmes, city-specific specifications.»

AR: «تخدم UNEOM 24 مدينة سعودية عبر 6 مظاريف مناخية متميّزة — أربعينية الرياض + نوّة جدة + كلوريد ساحلي الدمام + ضغط الحج بمكة + شتاء العشرة بتبوك تحت الصفر + ضباب السودة في عسير. ثلاث قواعد مستودعات (الرياض + جدة + الدمام الحضرية) تُسلِّم بـSLA 24 ساعة للفئة A و48-96 ساعة للفئة B. نفس برامج الأقمشة، مواصفات خاصّة بكل مدينة.»

### 2. Children Grid (24 city cards auto-rendered from manifest)

Each card: 30–50 words sourced from `src/lib/data/saudi-cities/{slug}.ts` (already populated). Tier-A cards highlighted.

### 3. Selection Guide — 6 Climate Envelope Map (~250 words bilingual)

EN table:

| Envelope | Cities | Fabric Thesis |
|---|---|---|
| Riyadh thermal swing | Riyadh, Al-Kharj, Wadi Al-Dawasir | Poly-cotton 65/35 + wool blend seasonal layering |
| Jeddah humidity + salt | Jeddah, Yanbu | Mercerised wool-poly + brass fasteners + hydrolysis-resistant dyes |
| Dammam chloride | Dammam, Khobar, Dhahran, Al-Qatif, Al-Ahsa, Al-Jubail | Ripstop performance polyester + chloride-resistant hardware |
| Mecca Hajj compression | Mecca, Medina | 120-cycle Hajj-grade + year-round mercerised |
| Tabuk cold-frontier | Tabuk, Arar, Sakaka, Buraidah, Hail | 3-layer integrated thermal regulation |
| Abha mountain mist | Abha, Khamis Mushait, Al-Baha, Najran, Taif | Water-repellent C0 + thermal-blend inner + UV-rated dye |
| Jazan tropical south | Jazan | Eastern-equivalent + tropical hydrolysis-resistance |

### 4. FAQ Block (4 bilingual independent)

1. كم مدينة تخدم UNEOM؟ · How many cities does UNEOM serve?
2. ما الـSLA لكل فئة مدن؟ · What's the SLA per city tier?
3. هل القماش نفسه عبر كل المدن؟ · Is the fabric the same across all cities?
4. كيف يتمّ الاختيار بين مستودع الرياض / جدة / الدمام؟ · How is the Riyadh / Jeddah / Dammam depot selected?

### 5. CTA + Hub Footer

EN: "Tell us your address. We'll tell you your depot." → Quote
AR: «أعطنا عنوانك. سنخبرك بمستودعك.» ← عرض سعر

## Required Numerics (≥3)

- 24 Saudi cities served
- 6 distinct climate envelopes
- 3 depot bases (Riyadh + Jeddah + Dammam Metro)
- SLA tiers: 24h Riyadh / 48h Tier-A / 72h Tier-B-near / 96h Tier-B-far

## Required Entities (≥5)

GASTAT (climate + population data), Saudi Arabia Vision 2030, Saudi municipalities (24 anchored), Saudi Council of Engineers, OEKO-TEX (where applicable).

## Definition Lock-in

**EN:** «UNEOM Locations is the **24-Saudi-city + 6-climate-envelope + 3-depot-base operational footprint** that delivers city-specific uniform engineering (not single-spec national programmes) with 24–96-hour SLA tiers — from Riyadh الأربعينية thermal swing to Abha ضباب السودة mountain mist.»

**AR:** «مواقع UNEOM هي **بصمة العمليات الـ24 مدينة سعودية + 6 مظاريف مناخية + 3 قواعد مستودعات** التي تُسلِّم هندسة زي خاصّة بكل مدينة (لا برامج وطنية بمواصفة واحدة) بفئات SLA من 24 إلى 96 ساعة — من تأرجح أربعينية الرياض إلى ضباب السودة في أبها.»

## Internal Links (bilingual — main hub fans out to 24 cities + key cross-hubs)

| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–24 | (24 city cards auto-rendered) | (الـ24 بطاقات مدن) | `/locations/{slug}/` × 24 | `/ar/locations/{slug}/` × 24 |
| 25 | Industries hub | القطاعات | `/industries/` | `/ar/industries/` |
| 26 | Weather Protection Guide | دليل الحماية من الطقس | `/resources/weather-protection-guide/` | `/ar/resources/weather-protection-guide/` |
| 27 | Fabric Selection service | اختيار الأقمشة | `/services/fabric-selection/` | `/ar/services/fabric-selection/` |
| 28 | Quote | عرض سعر | `/quote/` | `/ar/quote/` |

## External Links (2)

| Anchor | URL |
|---|---|
| GASTAT Climate Data | `https://www.stats.gov.sa` |
| Vision 2030 Tourism Strategy | `https://www.vision2030.gov.sa` |

## Schema bilingual

- `CollectionPage` + `ItemList` (24 city children) with `inLanguage` ar-SA/en-SA + cross-translation
- `BreadcrumbList` localised
- `FAQPage` (4 AR + 4 EN independent) + `Speakable` (Architect Equation)
- `Dataset` (6 climate envelopes machine-readable)
- Rich Results validated both locales

## Production Checkpoint (108 × 2 locales)

- [ ] AR (800–950) + EN (700–850) authored independently
- [ ] hreflang + canonical bilingual
- [ ] Saudi map composite generated; Riyadh hero LCP <2.5s + preload
- [ ] All 24 city cards: bilingual alt text descriptive (climate + anchor industries)
- [ ] OG en + ar generated; Schema validated bilingual
- [ ] Lighthouse SEO ≥95 both locales; CLS = 0

**Status:** Brief ready. Wave 6, Week 17.
