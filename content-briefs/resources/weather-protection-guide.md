# Content Brief — Resource: The Saudi Weather Protection Uniform Guide

## Page Identity

- **Page type:** Resource Guide (B.6 — silo: aviation + manufacturing)
- **Slug:** `weather-protection-guide`
- **URL (EN):** `https://uneom.com/resources/weather-protection-guide/`
- **URL (AR):** `https://uneom.com/ar/resources/weather-protection-guide/`
- **Reviewer:** Named TBD — Saudi Council of Engineers + 1 named site safety officer or aviation ground ops director (with consent)
- **Data source-of-truth:** `src/lib/data/resources/weather-protection-guide.ts`
- **Target publish:** Wave 4, Week 12 · **Word count:** AR 3,000–3,600 / EN 2,700–3,200

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Saudi Weather Protection Uniform Guide — 50°C Heat to -3°C Cold | UNEOM` (72 → trim)
- **Final Title (EN):** `Saudi Weather Protection Uniform Guide — 50°C to -3°C | UNEOM` (60)
- **Title (AR):** `الدليل السعودي لزي الحماية من الطقس — من 50°م إلى -3°م | UNEOM` (60)
- **Meta (EN):** `Engineering uniform programmes for Saudi extremes: 50°C heat-soak, sub-zero Tabuk highlands, Jeddah humidity, Asir mountain mist. City-specific spec.` (155)
- **Meta (AR):** `هندسة برامج الزي للظروف السعودية المتطرّفة: حرارة 50°م، مرتفعات تبوك تحت الصفر، رطوبة جدة، ضباب جبال عسير. مواصفة لكل مدينة.` (130)
- **OG image:** `og/resources/weather-protection-guide-1200x630.webp`

---

## Targeting

- **Primary KW (AR):** `دليل زي الحماية من الطقس السعودي`
- **Primary KW (EN):** `Saudi weather protection uniform guide`
- **AI Citation queries (10+):**
  - «ما القماش لـ65°م مدرج جدة في يوليو؟»
  - «ما الزي الأمثل لـ-3°م في تبوك في يناير؟»
  - «كيف نخطّط زي لمناخات سعودية متعدّدة؟»
  - «ما الفرق بين زي الرياض وجدة في الصيف؟»
  - «ما هو heat-soak rating للقماش الصناعي؟»
  - «هل البطانة الحرارية مطلوبة في تبوك ونيوم؟»
  - «ما الـwater-repellent C0 وأين يُستخدم؟»
  - «كيف يصمد الزي تحت رياح الـالأربعينية؟»
  - «هل ضباب السودة في عسير يتطلّب قماش مختلف؟»
  - «ما الـUV-rated dye chemistry للمرتفعات؟»

---

## Inputs from `references/`

- **Stats:** 50°C plant-floor heat-soak, 65°C tarmac KAIA July, -3°C Tabuk highland January, 90% RH Jeddah summer, 60–75% RH Abha mountain mist year-round, 50°C annual swing Tabuk envelope.
- **Saudi NLP terms:** الأربعينية, السموم, النوّة, خماسين الصيف, موسم الخبر البحري, شتاء العشرة, برد عسير, ضباب السودة — referenced for city-specific weather thesis.

---

## Required Sections (B.6)

### 1. Executive Summary (~180 words, Speakable)
- Saudi Arabia's climate is not one envelope but six — Riyadh thermal swing / Jeddah humidity / Dammam chloride / Mecca compression / Tabuk cold + thermal swing / Abha mountain mist
- A single fabric spec cannot satisfy all six — programme stratification by anchor city is the engineering answer
- Heat-soak above 50°C is plant-floor reality (not lab condition); 65°C tarmac is aviation reality
- Sub-zero -3°C Tabuk highland January and +42°C July = 50°C annual swing demanding layered thermal regulation
- Mountain mist (Abha) demands water-repellent + UV-rated dye chemistry distinct from desert envelope

### 2. TOC

### 3. Definition Block (~250 words)
- Saudi-Spec Weather-Protected Uniform Definition Lock-in
- Heat-Soak Rating Definition Lock-in (the engineering metric, not marketing)
- Layered Thermal Regulation Definition Lock-in (Tabuk-style integrated 3-layer single-garment)

### 4. Compliance Citation Block (~250 words)
- **MHRSD — Workplace Hours and Attire** (heat-stress + cold-weather attire fitness)
- **HCIS — Industrial Worker PPE Standards** (50°C heat-soak envelope)
- **GACA — Cabin Safety + Tarmac Operations** (65°C tarmac surface envelope)
- **GASTAT — Climate Data** (citation for the per-city weather envelopes)
- **OEKO-TEX Standard 100** (chemical safety baseline regardless of climate)

### 5. The Six Saudi Climate Envelopes Block (~720 words across 6 H2 subsections — 120 each)

- **5.1 Riyadh — الأربعينية + السموم** thermal swing 5°C ↔ 50°C → poly-cotton 65/35 + wool blend seasonal layering
- **5.2 Jeddah — النوّة + خماسين الصيف** 90% RH + salt-aerosol → mercerised wool-poly + brass fasteners + hydrolysis-resistant dyes
- **5.3 Dammam/Khobar — موسم الخبر البحري** 6,500 mg/m³ chloride + 78–85% Gulf humidity → ripstop performance polyester + chloride-resistant fasteners
- **5.4 Mecca/Medina — موسم الحج + العمرة الموسمية** 120-cycle compression in 7 weeks (Mecca) + 200+ continuous-flow (Medina) → Hajj-grade vs highland-stable mercerised
- **5.5 Tabuk — شتاء العشرة + 50°C annual swing** -3°C overnight to +42°C daytime → integrated 3-layer single-garment with detachable thermal liner
- **5.6 Abha — برد عسير + ضباب السودة** 60–75% RH year-round + 2,200m UV intensity → water-repellent C0 + thermal-blend inner + UV-rated reactive dye

### 6. Comparison Matrix — Climate Envelopes (Markdown)

| City | Heat envelope | Cold envelope | Humidity | Chemical stress | Fabric thesis |
|---|---|---|---|---|---|
| Riyadh | 50°C+ السموم | 5°C الأربعينية | <15% summer | Dust haboob | Seasonal layering |
| Jeddah | 38°C + salt | Mild | 90% النوّة | Salt-aerosol | Mercerised wool-poly |
| Dammam | 38°C + chloride | Mild | 78–85% بحري | 6,500 mg/m³ Cl⁻ | Ripstop + chloride-resistant |
| Mecca | 43°C + Hajj | Mild | Variable | 120-cycle wash | Hajj-grade weave |
| Medina | 38°C | Mild | Lower | 200+ annual cycles | Highland-stable mercerised |
| Tabuk | 42°C tarmac | -3°C highland | Low | Wind | 3-layer integrated |
| Abha | 28°C mild | 2°C | 60–75% mist | UV at 2,200m | Water-repellent + UV-rated |

### 7. Decision Framework (~250 words)
"Multi-city programme — how to spec fabrics?":
- Single anchor city + remote sites within 80 km → single climate-spec
- Multi-city across <2 envelopes → unified spec acceptable (e.g., Riyadh + Tabuk = 2 thermal-swing envelopes both layered)
- Multi-city across ≥3 envelopes → city-spec stratification mandatory; UNEOM ships variant per city under unified Pantone
- NEOM/RSP construction → Tabuk-spec layered with future expansion to coastal-spec as project zones diversify

### 8. Common Mistakes (~280 words — 4 anti-patterns)

1. **Single-spec fabric across all Saudi cities** — Riyadh-spec fails Jeddah within 4 months (humidity), Dammam within 5 (chloride), Tabuk within 3 (cold)
2. **Buying "all-weather" without accelerated lab cert** — marketing label fails at the actual envelope extreme
3. **Standard polyester for tarmac use** — anti-static finish degrades at 55°C, static spark risk at fuel ramp
4. **Catalogue cold-weather garment for Tabuk** — designed for European 0–10°C envelope, fails -3°C overnight + +42°C daytime swing

### 9. Saudi Context Block (~250 words)
- 6 distinct climate envelopes, 24 cities, 8 industries — the procurement complexity
- Vision 2030 megaproject scale (NEOM, RSP) = climate-extreme deployment growth
- Climate data citation methodology — GASTAT regional climate datasets

### 10. FAQ Block (12 questions)
1. ما القماش لـ65°م مدرج جدة؟
2. ما الزي الأمثل لـ-3°م في تبوك؟
3. كيف نخطّط زي لمناخات متعدّدة؟
4. ما الفرق بين زي الرياض وجدة الصيفي؟
5. ما هو heat-soak rating؟
6. هل البطانة الحرارية مطلوبة في تبوك ونيوم؟
7. ما الـwater-repellent C0 وأين يُستخدم؟
8. كيف يصمد الزي تحت الأربعينية؟
9. هل ضباب السودة يتطلّب قماش مختلف؟
10. ما الـUV-rated dye للمرتفعات؟
11. ما عدد الـclimate envelopes في المملكة؟
12. هل يمكن استخدام نفس Pantone عبر variants المدن؟

### 11. Downloadable Resource
PDF: "Saudi Multi-City Uniform Specification Template — 6-Envelope Decision Tree" (gated)

### 12. Related Reading
- Fabric Guide
- Fabric Selection service
- Aviation industry pillar
- Manufacturing industry pillar
- Tabuk + Abha + Dammam + Jeddah + Riyadh + Mecca + Medina city hubs

---

## Required Numerics (≥10)

1. **6 distinct climate envelopes** across the Saudi 24-city programme
2. **50°C plant-floor heat-soak** Saudi industrial reality
3. **65°C tarmac surface** KAIA July afternoon
4. **-3°C Tabuk highland January overnight** (شتاء العشرة)
5. **90% RH Jeddah summer** (النوّة)
6. **6,500 mg/m³ chloride** Dammam coastal envelope
7. **120-cycle Hajj compression** Mecca 7-week window
8. **2,200m elevation** Abha (UV intensity ~30% above sea-level)
9. **50°C annual swing** Tabuk (-3°C to +42°C)
10. **60–75% RH year-round** Abha mountain mist envelope

---

## Required Entities (≥7)

1. **MHRSD** — `https://hrsd.gov.sa`
2. **HCIS** — `https://www.hcis.gov.sa`
3. **GACA** — `https://gaca.gov.sa`
4. **GASTAT — Climate Data** — `https://www.stats.gov.sa`
5. **OEKO-TEX Standard 100**
6. **NEOM + Red Sea Global** (named contextually for Tabuk-region context)
7. **Saudi Council of Engineers**

---

## Definition Lock-ins (3)

- Saudi-Spec Weather-Protected Uniform = lab-tested against the specific deployment-city climate envelope, validated through accelerated cycles equivalent to 18 months of operational service
- Heat-Soak Rating = the lab-attributed temperature threshold above which the fabric retains structural integrity + anti-static finish + dimensional stability
- Layered Thermal Regulation = integrated 3-layer single-garment construction (moisture-wicking inner + thermal insulation mid + wind-resistant outer) for thermal-swing envelopes (Tabuk-style)

---

## Internal Links (15)

| # | Anchor | Target |
|---|---|---|
| 1 | Fabric Guide | `/resources/fabric-guide/` |
| 2 | Fabric Selection service | `/services/fabric-selection/` |
| 3 | Custom Design service | `/services/custom-design/` |
| 4 | Aviation industry pillar | `/industries/aviation/` |
| 5 | Manufacturing industry pillar | `/industries/manufacturing/` |
| 6 | Tabuk location hub | `/locations/tabuk/` |
| 7 | Abha location hub | `/locations/abha/` |
| 8 | Dammam location hub | `/locations/dammam/` |
| 9 | Jeddah location hub | `/locations/jeddah/` |
| 10 | Riyadh location hub | `/locations/riyadh/` |
| 11 | Mecca location hub | `/locations/mecca/` |
| 12 | Medina location hub | `/locations/medina/` |
| 13 | HRC2 FR Coverall | `/shop/manufacturing/coverall-fr/` |
| 14 | Ground Staff Uniform | `/shop/aviation/ground-staff-uniform/` |
| 15 | Quote (multi-city programme) | `/quote/?topic=multi-city` |

---

## External Links (4)

| Anchor | URL |
|---|---|
| GASTAT Climate Data | `https://www.stats.gov.sa` |
| MHRSD Heat/Cold Stress | `https://hrsd.gov.sa` |
| HCIS Industrial PPE | `https://www.hcis.gov.sa` |
| GACA Tarmac Ops | `https://gaca.gov.sa` |

---

## Schema

- [x] `Article` + `Person` author + reviewer
- [x] `HowTo` (multi-city fabric specification decision tree)
- [x] `FAQPage` (12)
- [x] `Speakable`
- [x] `BreadcrumbList`
- [x] `Dataset` (6-envelope climate matrix)

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy (2,700–3,600 words)
- [ ] Saudi 6-envelope climate map graphic
- [ ] Per-city fabric thesis comparison table
- [ ] PDF multi-city decision tree (gated)
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 4, Week 12.
