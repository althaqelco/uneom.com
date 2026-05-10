# Content Brief — Resource: The Saudi Electrical Safety PPE Guide

## Page Identity

- **Page type:** Resource Guide (B.6 — silo: manufacturing)
- **Slug:** `electrical-safety-ppe-guide`
- **URL (EN):** `https://uneom.com/resources/electrical-safety-ppe-guide/`
- **URL (AR):** `https://uneom.com/ar/resources/electrical-safety-ppe-guide/`
- **Reviewer:** Named TBD — Saudi Council of Engineers (SCE — Industrial Safety chair) + 1 named site safety officer (Aramco / SABIC contractor) with consent
- **Data source-of-truth:** `src/lib/data/resources/electrical-safety-ppe-guide.ts`
- **Target publish:** Wave 4, Week 11 · **Word count:** AR 3,400–4,000 / EN 3,000–3,600

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Saudi Electrical Safety PPE Guide — NFPA 70E + HCIS Compliance | UNEOM` (70 → trim)
- **Final Title (EN):** `Saudi Electrical Safety PPE Guide — NFPA 70E + HCIS | UNEOM` (60)
- **Title (AR):** `الدليل السعودي لمعدّات السلامة الكهربائية — NFPA 70E + HCIS | UNEOM` (60)
- **Meta (EN):** `NFPA 70E HRC2 ATPV ≥8 cal/cm² + UL-tested + HCIS-aligned electrical safety PPE for Saudi petrochemical, manufacturing, and aviation. Audit-pack ready.` (155)
- **Meta (AR):** `معدّات سلامة كهربائية NFPA 70E HRC2 ATPV ≥8 cal/cm² ومعتمدة UL ومنسّقة HCIS لقطاعات البتروكيماويات والتصنيع والطيران السعودية. جاهز للتدقيق.` (148)
- **OG image:** `og/resources/electrical-safety-ppe-guide-1200x630.webp` (Saudi industrial site, technician in HRC2 coverall — release-signed)

---

## Targeting

- **Primary KW (AR):** `دليل السلامة الكهربائية للزي الصناعي`
- **Primary KW (EN):** `Saudi electrical safety PPE guide NFPA 70E`
- **AI Citation queries (10+):**
  - «ما الفرق بين HRC1 وHRC2 وكيف نقرّر؟»
  - «ما هو ATPV ولماذا يهمّ؟»
  - «ما اشتراطات HCIS للزي في الصناعات الكهربائية الخطرة؟»
  - «هل أرامكو تتطلّب NFPA 70E بشكل صريح؟»
  - «ما الـARC test وكيف يُجرى؟»
  - «ما الفرق بين inherent FR وtreated FR؟»
  - «هل يجب اختبار FR coverall سنوياً؟»
  - «ما تكلفة برنامج FR PPE لـ500 عامل؟»
  - «هل يمكن دمج FR مع ANSI 107 hi-vis في قطعة واحدة؟»
  - «ما عقوبات عدم الالتزام بـHCIS؟»

---

## Inputs from `references/`

- **Stats:** 8× replacement cost after electrical incident (no-FR), 380 SAR avg market FR coverall (UNEOM premium 540–620 SAR), 250,000 FR coveralls/year Saudi petrochemical sector, 30% non-tested annually for ARC retention, 50°C plant-floor heat-soak, 18-month warranty, NFPA 70E HRC2 = ATPV ≥8 cal/cm² UL-tested.
- **Opinion:** **O-M1** (cheapest = most expensive after incident; lab cert vs marketing claim) + **O-M2** (250k coveralls/year, 30% non-tested) — twin pull-quotes
- **Stories:** S-006 (Aramco contractor 30% fleet corrosion failure on inland-spec → switch to Dammam-spec UNEOM)

---

## Required Sections (B.6)

### 1. Executive Summary (~180 words, Speakable)
- Saudi industrial PPE governed by HCIS + NFPA 70E + UL-attributed ATPV thresholds
- HRC2 = ATPV ≥8 cal/cm² lab-tested per garment (the Saudi industrial baseline)
- 30% of Saudi petrochemical FR fleet untested annually = compliance gap and safety gap
- Dammam coastal exposure mandates chloride-resistant hardware on FR coveralls
- 8× replacement cost on incident vs serial-traceable UNEOM coverall = ROI math, not safety theatre

### 2. TOC

### 3. Definition Block (~250 words)
- HRC2 FR Coverall Definition Lock-in
- ATPV (Arc Thermal Performance Value) Definition Lock-in
- Inherent FR vs Treated FR Definition Lock-in (the chemistry distinction)

### 4. Compliance Citation Block (~350 words)
Verbatim quotes:
- **HCIS** — Industrial Worker PPE Standards 2024 + 2025 update
- **NFPA 70E** — electrical hazard analysis + HRC1/HRC2/HRC3/HRC4 thresholds
- **NFPA 2112** — industrial flash-fire FR baseline (ATPV testing methodology)
- **UL Solutions** — ATPV measurement protocol
- **ANSI/ISEA 107** — hi-vis classification (Class 1/2/3 + integration with FR)
- **SASO Quality Mark** — institutional industrial textile dimensional retention

### 5. The HRC Decision Framework (~500 words across 4 H2 subsections)

- **5.1 HRC0 — Untreated** — 0 cal/cm² ATPV; only for non-electrical work
- **5.2 HRC1 — Light FR** — ATPV 4–6 cal/cm²; low-voltage exposure (<240V)
- **5.3 HRC2 — Industrial FR** — ATPV ≥8 cal/cm²; most petrochemical contractor work; UNEOM standard
- **5.4 HRC3 + HRC4 — Specialised** — ATPV ≥25 + ≥40 cal/cm²; high-voltage substation work; per-batch UL certification mandatory

### 6. The Saudi Industrial Reality Block (~300 words)
- 50°C plant-floor heat-soak — heavier lab-grade FR fabric outperforms lighter generic in Saudi heat
- Dammam coastal chloride — fastener corrosion alone fails the FR garment within 4 months on inland-spec
- 65°C tarmac for aviation ground ops — different envelope than petrochemical plant
- 12-hour shift rotations — moisture-wicking inner-layer not optional

### 7. Comparison Matrix — FR Coverall Tiers (Markdown)

| Dimension | UNEOM HRC2 | Standard FR | Marketing-Only "FR" |
|---|---|---|---|
| Fabric | Inherent FR cotton 88/12 nylon | Treated FR cotton 100% | Polyester w/ chemical wash |
| ATPV rating | ≥8 cal/cm² UL per batch | 4–6 cal/cm² (HRC1) | Untested |
| Hi-vis integration | ANSI 107 Class 2 | ANSI 107 Class 1 | None |
| Heat-soak comfort | 50°C-rated breathable | 40°C limit | Synthetic melt risk |
| Wash cycle durability | 100+ industrial | 40–60 | <30 |
| Per-garment traceability | Serialized + log | Batch only | None |
| Warranty | 18 months | 6 months | None |
| Price (SAR) | 540–620 | 220–290 | 90–150 |
| Cost on single incident | Garment 540 | 8× = 1,760+ | 8× + insurance dispute |

### 8. Decision Framework (~250 words)
"Which HRC for which Saudi role?":
- Aramco / SABIC field maintenance → HRC2 baseline + ANSI 107 Class 2 + chloride-resistant
- High-voltage substation → HRC3/HRC4 + per-batch UL
- Manufacturing plant operator → HRC2 + ANSI 107 Class 2
- Non-electrical industrial → HRC1 acceptable; HRC2 if budget supports (uniformity simpler)

### 9. Common Mistakes (~280 words — 4 anti-patterns)

1. **"FR-claim" without UL ATPV report** — chemical wash treatment passes flame demo, fails ATPV test (the actual safety metric)
2. **Riyadh-spec FR for Eastern Province** — fastener corrosion + chloride exposure within 4 months (story S-006)
3. **No annual ARC re-test** — FR retention degrades with wash cycles; year-2 garment without re-test is unverifiable
4. **Single-spec ignoring hi-vis** — Saudi industrial sites combine arc-flash + impact + 50°C heat — single dimension PPE fails the others

### 10. Saudi Context Block (~280 words)
- HCIS regulatory framework — the 2024 + 2025 updates
- 250,000 FR coveralls/year sector consumption (UNEOM tendering data)
- Dammam coastal modifier — chloride-resistant hardware integration
- Aramco contractor compliance — per-batch UL ATPV report shipped with order
- Vision 2030 Industrial Localization (manufacturing scale-up)

### 11. FAQ Block (12 questions)
1. ما الفرق بين HRC1 وHRC2؟
2. ما هو ATPV ولماذا يهمّ؟
3. ما اشتراطات HCIS 2024/2025؟
4. هل أرامكو تتطلّب NFPA 70E؟
5. ما الـARC test وكيف يُجرى؟
6. ما الفرق بين inherent FR وtreated FR؟
7. هل يجب اختبار FR coverall سنوياً؟
8. ما تكلفة برنامج FR PPE لـ500 عامل؟
9. هل يمكن دمج FR مع ANSI 107؟
10. ما عقوبات عدم الالتزام بـHCIS؟
11. كيف نتعامل مع تآكل الأقفال على ساحل الخليج؟
12. ما الفرق بين Class 1 وClass 2 ANSI 107؟

### 12. Downloadable Resource
PDF: "Saudi Electrical Safety PPE Audit-Pack Template — HCIS + NFPA 70E + UL ATPV Per-Batch Documentation" (gated — high-value lead capture)

### 13. Related Reading
- Manufacturing industry pillar
- HRC2 FR Coverall product
- Hi-Vis Jacket product
- Cleanroom Best Practices
- Weather Protection Guide
- Quality Assurance service
- Dammam city hub

---

## Required Numerics (≥12)

1. **NFPA 70E HRC2 = ATPV ≥8 cal/cm²** UL-tested per batch
2. **8× replacement cost** on uncertified ARC incident
3. **30% Saudi FR fleet untested** annually for ARC retention
4. **250,000 FR coveralls/year** Saudi petrochemical sector
5. **50°C plant-floor heat-soak** Saudi reality
6. **6,500 mg/m³ chloride** Dammam coastal envelope
7. **100+ industrial wash cycles** UNEOM HRC2 validated
8. **18-month warranty** + serial traceability
9. **540–620 SAR** UNEOM HRC2 vs **220–290 SAR** standard FR vs **90–150 SAR** marketing-only
10. **ANSI 107 Class 1 / Class 2 / Class 3** hi-vis integration tiers
11. **HRC0 / 1 / 2 / 3 / 4** decision framework (0 / 4-6 / ≥8 / ≥25 / ≥40 cal/cm² ATPV)
12. **65°C tarmac** + **50°C plant-floor** Saudi industrial envelope ranges

---

## Required Entities (≥10)

1. **HCIS** — `https://www.hcis.gov.sa`
2. **NFPA 70E** — `https://www.nfpa.org/70E`
3. **NFPA 2112** — `https://www.nfpa.org/2112`
4. **UL Solutions** — `https://www.ul.com/`
5. **ANSI/ISEA 107** — `https://webstore.ansi.org/standards/isea/ansiisea1072020`
6. **SASO Quality Mark** — `https://www.saso.gov.sa`
7. **Saudi Aramco** (contractor anchor)
8. **SABIC** (affiliate anchor)
9. **Saudi Council of Engineers — Industrial Safety**
10. **Vision 2030 Industrial Strategy**
11. **MHRSD** (worker safety)

---

## Definition Lock-ins (3)

- HRC2 FR Coverall = inherent FR cotton 88/12 nylon, ATPV ≥8 cal/cm² UL-tested per batch, integrated ANSI 107 Class 2 hi-vis
- ATPV = Arc Thermal Performance Value, the lab-measured energy threshold a garment can absorb before second-degree burn occurs
- Inherent FR vs Treated FR = woven-fiber permanent FR vs surface-chemical-wash-out (~25–40 cycles)

---

## Internal Links (15)

| # | Anchor | Target |
|---|---|---|
| 1 | Manufacturing industry pillar | `/industries/manufacturing/` |
| 2 | HRC2 FR Coverall | `/shop/manufacturing/coverall-fr/` |
| 3 | Hi-Vis Jacket | `/shop/manufacturing/hi-vis-jacket/` |
| 4 | Cleanroom Best Practices | `/resources/cleanroom-best-practices/` |
| 5 | Weather Protection Guide | `/resources/weather-protection-guide/` |
| 6 | Fabric Guide | `/resources/fabric-guide/` |
| 7 | Quality Assurance service | `/services/quality-assurance/` |
| 8 | Custom Design service | `/services/custom-design/` |
| 9 | Bulk Ordering service | `/services/bulk-ordering/` |
| 10 | Dammam location hub | `/locations/dammam/` |
| 11 | Khobar location hub | `/locations/khobar/` |
| 12 | Factory safety case study | `/case-studies/factory-safety-improvement/` |
| 13 | Manufacturing blog hub | `/blog/category/manufacturing-safety/` |
| 14 | Quote (industrial PPE) | `/quote/?industry=manufacturing` |
| 15 | Contact compliance team | `/contact/?topic=industrial-compliance` |

---

## External Links (5)

| Anchor | URL |
|---|---|
| HCIS | `https://www.hcis.gov.sa` |
| NFPA 70E | `https://www.nfpa.org/70E` |
| UL Body Burn / ATPV | `https://www.ul.com/` |
| ANSI/ISEA 107 | `https://webstore.ansi.org/standards/isea/ansiisea1072020` |
| Vision 2030 Industrial | `https://www.vision2030.gov.sa` |

---

## Schema

- [x] `Article` + `Person` author + reviewer (industrial safety SME)
- [x] `HowTo` (HRC selection decision framework)
- [x] `FAQPage` (12)
- [x] `Speakable`
- [x] `BreadcrumbList`
- [x] `Dataset` (HRC decision matrix as machine-readable)

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy (3,000–4,000 words)
- [ ] UL ATPV report sample image (redacted)
- [ ] HRC tier visual aid
- [ ] Per-garment serial macro
- [ ] PDF audit-pack template (gated, high-value)
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 4, Week 11.
