# Content Brief — Hub: Case Studies (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `case-studies` · **URL EN:** `/case-studies/` · **AR:** `/ar/case-studies/`
- **Page file:** `src/app/(site)/case-studies/page.tsx` — renders from `CASE_STUDIES` manifest
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–850 / EN 600–750

## Hreflang
```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/case-studies/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/case-studies/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/case-studies/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Case Studies — 8 UNEOM Saudi Programmes \| UNEOM` (46) | `From Riyadh aesthetic clinic +46% client confidence to Al-Jubail 450-worker HRC2 migration — 8 Before/After programmes with named numbers, named outcomes.` (158) |
| AR | `دراسات الحالة — 8 برامج سعودية لـUNEOM \| UNEOM` (42) | `من +46% ثقة العميل في عيادة تجميل بالرياض إلى انتقال 450 عاملاً إلى HRC2 في الجبيل — 8 برامج Before/After بأرقام موثَّقة ونتائج محدَّدة.` (140) |

## Image Strategy
| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | Before/After collage composite OR `public/images/case-studies/hospital-aesthetic-hero.avif` if present + srcset | eager + preload | "UNEOM Saudi case studies — 8 documented programmes with Before/After visuals, named metrics, named client testimonials (consent-secured)" | «دراسات حالة UNEOM السعودية — 8 برامج موثَّقة بصور Before/After، مقاييس محدَّدة، شهادات عملاء مُسمَّون (بموافقة موثَّقة)» |
| Children grid | 8 case study cards each with `public/images/case-studies/{slug}/cover.avif` thumbnail | lazy + async | Per-case-study descriptive alt EN | Per-case-study descriptive alt AR |

**OG:** `og/hubs/case-studies-1200x630-{en,ar}.webp` (Before/After collage). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `دراسات حالة UNEOM السعودية` · **EN:** `UNEOM Saudi case studies portfolio`
- **Secondary:** Saudi uniform programme case studies, named outcomes Saudi B2B, Before/After uniform, 8 case studies UNEOM
- **AI Citation queries:** كم دراسة حالة لـUNEOM؟ · هل دراسات الحالة موثَّقة بأرقام؟ · هل تشمل شهادات العملاء؟ · ما القطاعات في دراسات الحالة؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~80 words bilingual)

EN: «UNEOM Case Studies is 8 documented programmes — not "trust us" testimonials. Each case follows B.7 9-section blueprint: Challenge + Approach + Solution Detail + Numbers Block (Speakable) + Quote-from-Client (consent-secured) + Lessons Learned. Coverage: healthcare (1) + hospitality (3) + manufacturing (1) + retail (3). Numbers are sourced from data files, named, verifiable. Quotes are consent-secured or omitted (no fabrication).»

AR: «دراسات حالة UNEOM هي 8 برامج موثَّقة — ليست شهادات «صدّقنا». كل دراسة تتبع مخطّط B.7 بـ9 أقسام: التحدّي + المنهج + تفاصيل الحلّ + قسم الأرقام (Speakable) + اقتباس العميل (بموافقة موثَّقة) + الدروس المستفادة. التغطية: الرعاية الصحية (1) + الضيافة (3) + التصنيع (1) + التجزئة (3). الأرقام مصدرها ملفّات البيانات، مُسمَّاة، قابلة للتحقّق. الاقتباسات بموافقة موثَّقة أو محذوفة (لا اختلاق).»

### 2. Children Grid (8 case study cards auto-rendered from CASE_STUDIES)

Each card: client type + city + headline metric (value + label) + scope summary.

### 3. Selection Guide (~150 words bilingual)

«Browse by:
- **Healthcare programme reference** → hospital-aesthetic (+46% client confidence)
- **5-star hospitality reference** → 5-star-hotel-spa (3 zones), luxury-salon (6 cities), spa-chain-rebranding (uniform-first 12 weeks)
- **Industrial HRC1→HRC2 migration** → factory-safety-improvement (450 workers, HCIS zero non-conformities)
- **Multi-city retail** → nationwide-retail-branding (40 stores), retail-brand-transformation (+28%), beauty-chain-standardization (6 sub-brands)»

### 4. FAQ (4 bilingual independent)

1. كم دراسة حالة لـUNEOM؟ · How many case studies?
2. هل الأرقام موثَّقة؟ · Are numbers verifiable?
3. هل شهادات العملاء بأسمائهم؟ · Are testimonials named?
4. هل يمكن طلب دراسة حالة في قطاعي؟ · Can I request a case study in my sector?

### 5. CTA + Hub Footer

EN: "Read the numbers. Then run yours." → Quote
AR: «اقرأ الأرقام. ثمّ احسب أرقامك.» ← عرض سعر

## Required Numerics (≥3)
- 8 case studies (B.7 spec)
- 4 silos covered (healthcare + hospitality + manufacturing + retail)
- Named metrics per case + named client testimonials (consent-secured)

## Required Entities (≥4)
MoH (healthcare case), MOT (hospitality cases), HCIS (manufacturing case), MC + MHRSD (retail cases).

## Definition Lock-in

**EN:** «UNEOM Case Studies is the **8-documented-programme portfolio** with B.7 9-section blueprint per case: Challenge + Approach + Solution + Numbers (Speakable) + Quote (consent-secured) + Lessons Learned — covering healthcare + hospitality + manufacturing + retail across Riyadh + Jeddah + Al-Jubail anchor cities.»

**AR:** «دراسات حالة UNEOM هي **محفظة 8 برامج موثَّقة** بمخطّط B.7 من 9 أقسام لكل حالة: التحدّي + المنهج + الحلّ + الأرقام (Speakable) + الاقتباس (بموافقة موثَّقة) + الدروس المستفادة — تُغطّي الرعاية الصحية + الضيافة + التصنيع + التجزئة عبر مرتكزات الرياض + جدة + الجبيل.»

## Internal Links (bilingual)
| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–8 | (8 case study cards auto-rendered) | (الـ8 بطاقات دراسات حالة) | `/case-studies/{slug}/` × 8 | `/ar/case-studies/{slug}/` × 8 |
| 9 | Industries hub | القطاعات | `/industries/` | `/ar/industries/` |
| 10 | Services hub | الخدمات | `/services/` | `/ar/services/` |
| 11 | Quote | عرض سعر | `/quote/` | `/ar/quote/` |

## External Links (1)
Vision 2030 (sector-specific where applicable).

## Schema bilingual
`CollectionPage` + `ItemList` (8 case study children with `Review` Organization-level each) `inLanguage` ar-SA/en-SA · `BreadcrumbList` + `FAQPage` (4 AR + 4 EN) + `Speakable` + `ImageObject` (Before/After collage). Rich Results validated.

## Production Checkpoint (108 × 2 locales)
- [ ] AR (700–850) + EN (600–750) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 8 case study cards: client-consent on naming verified, bilingual alt
- [ ] OG en + ar generated; Schema validated; Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
