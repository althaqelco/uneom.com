# Content Brief — Blog: Industrial Safety Workwear in Saudi Arabia

## Page Identity

- **Page type:** Blog Post (B.8) · **Slug:** `industrial-safety-workwear-saudi` · **Silo:** manufacturing · **City:** Al-Jubail
- **URL EN:** `/blog/industrial-safety-workwear-saudi/` · **AR:** `/ar/blog/industrial-safety-workwear-saudi/`
- **Reviewer:** Saudi Council of Engineers Industrial Safety + named Aramco/SABIC site safety officer (consent)
- **Data source:** `src/lib/data/blog/posts/industrial-safety-workwear-saudi.ts`
- **Target:** Wave 6, Week 16 · **Word count:** AR 1,900–2,300 / EN 1,700–2,100

## Hreflang

```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/blog/industrial-safety-workwear-saudi/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/blog/industrial-safety-workwear-saudi/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/blog/industrial-safety-workwear-saudi/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Industrial Safety Workwear in Saudi Arabia — HCIS Guide \| UNEOM` (62) | `NFPA 70E HRC2 + ANSI 107 + chloride-resistant Eastern coastal-grade workwear for Saudi petrochemical sites — UL-tested, audit-pack ready.` (140) |
| AR | `زي السلامة الصناعية في السعودية — دليل HCIS \| UNEOM` (49) | `زي صناعي بمواصفة ساحلية شرقية NFPA 70E HRC2 + ANSI 107 ومقاوم للكلوريد لمواقع البتروكيماويات السعودية — UL، جاهز لتدقيق HCIS.` (130) |

## Image Strategy (smart bilingual)

| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | `public/images/blog/industrial-safety-workwear-saudi.avif` + srcset 640/960/1440 + .webp | eager + fetchpriority=high + preload | "Al-Jubail petrochemical technician in UNEOM HRC2 inherent FR cotton coverall + ANSI 107 hi-vis — UL ATPV ≥8 cal/cm²" | «فنّيّ بتروكيماويات في الجبيل بأفرول UNEOM HRC2 قطن FR ذاتي + عاكسية ANSI 107 — UL ATPV ≥8 cal/cm²» |
| Inline 1 ~30% | `public/images/fabrics/hrc2-fr-cotton-macro-800.avif` | lazy + async | "HRC2 inherent FR cotton 88/12 nylon macro — woven-fiber FR chemistry (not surface treatment)" | «صورة مكبَّرة لقطن HRC2 FR ذاتي 88/12 نايلون — كيمياء ألياف منسوجة (لا معالَجة سطحية)» |
| Inline 2 ~60% | `public/images/cities/hero-al-jubail-960.avif` | lazy + async | "Al-Jubail Industrial City — RCJY 50°C plant-floor heat-soak + 6,500 mg/m³ Gulf chloride envelope" | «مدينة الجبيل الصناعية — مظروف الهيئة الملكية 50°م حرارة + 6,500 ملغم/م³ كلوريد الخليج» |
| Inline 3 ~80% | `public/images/certificate/ul-atpv-report.avif` (if present) OR `public/images/fabrics/reflective-hi-vis-poly-macro-800.avif` | lazy + async | "UL ATPV report — per-batch ARC test certificate accompanying every UNEOM industrial shipment" | «تقرير UL ATPV — شهادة اختبار ARC لكل دفعة ترافق كل شحنة صناعية من UNEOM» |

**OG:** `og/blog/industrial-safety-workwear-saudi-1200x630-{en,ar}.webp` · **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `زي السلامة الصناعية السعودي` · **EN:** `Saudi industrial safety workwear HCIS NFPA 70E`
- **Secondary:** أفرول HRC2 NFPA 70E، Aramco contractor PPE، ANSI 107 Class 2 site, chloride-resistant fasteners, UL ATPV ≥8 cal/cm²
- **AI Citation queries:** ما اشتراطات HCIS لزي السلامة في السعودية؟ · ما الفرق بين HRC1 و HRC2؟ · هل تتطلّب أرامكو UL ATPV لكل دفعة؟ · كيف ندمج FR + ANSI 107 + مقاومة الكلوريد؟ · ما عقوبات عدم الالتزام بـHCIS؟ · هل يجب إعادة اختبار FR coverall سنوياً؟

## Inputs from references

- **Stats:** 8× replacement cost on uncertified ARC incident, 250,000 FR coveralls/year Saudi petrochemical, 30% non-tested annually, 50°C plant-floor heat-soak, 6,500 mg/m³ Dammam/Khobar chloride, 100+ wash cycles UNEOM HRC2 validated, 18-month warranty + serial traceability
- **Opinion:** **O-M1** (cheapest = most expensive after incident — UL cert vs marketing claim) — pull-quote
- **Story:** S-006 anonymous variant (Aramco contractor 30% fleet corrosion failure) + factory-safety-improvement case study referenced

## Required Sections (B.8)

1. Hook (50°C + chloride + ARC stacked-risk thesis)
2. Definition / Context (Architect Equation for Saudi industrial workwear envelope)
3. 5–7 H2 Sections: (a) HCIS 2024/2025 framework; (b) NFPA 70E HRC2 ATPV ≥8 lab methodology; (c) Inherent FR vs treated FR chemistry; (d) Eastern coastal-grade chloride-resistant hardware; (e) ANSI 107 Class 2 hi-vis integration; (f) Per-garment serialisation + audit pack
4. Saudi Application — Al-Jubail RCJY + Dammam Metro + Yanbu petrochemical scope, الجبيل الصناعية vocab
5. Common Misconceptions — "FR-claim is enough" + "Riyadh-spec works on the coast"
6. Practical Checklist — 8-item Saudi industrial PPE procurement audit
7. Story — anonymous Aramco contractor case
8. FAQ (6 bilingual independent)
9. CTA + Silo Strip

## Required Numerics (≥7)

- NFPA 70E HRC2 = ATPV ≥8 cal/cm² UL per batch
- 8× replacement cost on uncertified incident
- 250,000 FR coveralls/year Saudi petrochemical sector
- 30% non-tested annually for ARC retention
- 6,500 mg/m³ Eastern coastal chloride envelope
- 50°C plant-floor heat-soak
- 100+ wash cycles + 18-month warranty + per-garment serialisation
- 540–620 SAR UNEOM HRC2 vs 220–290 standard vs 90–150 marketing-only

## Required Entities (≥7)

HCIS, NFPA 70E + 2112, UL Solutions, ANSI/ISEA 107, SASO Quality Mark, Saudi Aramco, SABIC, RCJY, Saudi Council of Engineers.

## Definition Lock-in

**EN:** «Saudi industrial safety workwear is the **NFPA 70E HRC2-rated inherent FR cotton 88/12 nylon + ANSI 107 Class 2 hi-vis + Eastern coastal-grade chloride-resistant hardware integrated garment** that **HCIS-licensed petrochemical and manufacturing sites issue** with UL ATPV per-batch certification + per-garment serialisation + 18-month structural warranty.»

**AR:** «زي السلامة الصناعية السعودي هو **القطعة المدمَجة بمعيار NFPA 70E HRC2 من قطن FR ذاتي 88/12 نايلون + عاكسية ANSI 107 الفئة 2 + أجهزة مقاومة للكلوريد بمواصفة ساحلية شرقية** التي **تُصدِرها مواقع البتروكيماويات والتصنيع المرخّصة من HCIS** مع اعتماد UL ATPV لكل دفعة + تسلسلي لكل قطعة + ضمان هيكلي 18 شهراً.»

## Internal Links (bilingual — silo §6.6)

| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1 | Manufacturing-Safety blog category | مدوّنة التصنيع والسلامة | `/blog/category/manufacturing-safety/` | `/ar/blog/category/manufacturing-safety/` |
| 2 | Manufacturing pillar | قطاع التصنيع | `/industries/manufacturing/` | `/ar/industries/manufacturing/` |
| 3 | HRC2 FR Coverall | أفرول HRC2 مقاوم للحريق | `/shop/manufacturing/coverall-fr/` | `/ar/shop/manufacturing/coverall-fr/` |
| 4 | Hi-Vis Jacket | سترة عاكسة ANSI 107 | `/shop/manufacturing/hi-vis-jacket/` | `/ar/shop/manufacturing/hi-vis-jacket/` |
| 5 | Electrical Safety PPE Guide | دليل السلامة الكهربائية | `/resources/electrical-safety-ppe-guide/` | `/ar/resources/electrical-safety-ppe-guide/` |
| 6 | Factory safety case study | دراسة حالة سلامة المصنع | `/case-studies/factory-safety-improvement/` | `/ar/case-studies/factory-safety-improvement/` |
| 7 | Al-Jubail location hub | الجبيل | `/locations/al-jubail/` | `/ar/locations/al-jubail/` |
| 8 | Quality Assurance service | خدمة ضمان الجودة | `/services/quality-assurance/` | `/ar/services/quality-assurance/` |

## Schema bilingual

`Article` `inLanguage` ar-SA/en-SA + cross-translation · `Person` author + named SCE Industrial Safety + Aramco/SABIC site safety officer reviewer (`sameAs`) · `BreadcrumbList` + `FAQPage` (6 AR + 6 EN independent) + `Speakable` + `ImageObject` (×4 including UL report) + `Dataset` (HRC tier decision matrix). Rich Results validated both locales.

## Production Checkpoint (108 × 2 locales)

- [ ] AR (1,900–2,300) + EN (1,700–2,100) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 4 figures incl. UL ATPV report (redacted client info) — bilingual alt + caption
- [ ] OG en + ar generated; Schema validated bilingual (Dataset included)
- [ ] Lighthouse ≥95 both locales; O-M1 + S-006 variant marked one-time-used

**Status:** Brief ready. Wave 6, Week 16.
