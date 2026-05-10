# Content Brief — Product: Ground Staff Uniform

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `ground-staff-uniform` · Category `aviation` · Industry `aviation`
- **URL (EN):** `https://uneom.com/shop/aviation/ground-staff-uniform/`
- **URL (AR):** `https://uneom.com/ar/shop/aviation/ground-staff-uniform/`
- **Reviewer:** TBD (Saudi Council of Engineers — Industrial PPE) + 1 named airport ground operations director (with consent)
- **Data source-of-truth:** `src/lib/data/products/aviation.ts` (slug `ground-staff-uniform`)
- **Target publish:** Wave 3, Week 9 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Ground Staff Uniform — ANSI 107 Class 2 + Tarmac-Rated | UNEOM` (62)
- **Title (AR):** `زي الخدمة الأرضية — ANSI 107 فئة 2 معتمد لحرارة المدرج | UNEOM` (60)
- **Meta (EN):** `Performance polyester polo + ANSI 107 Class 2 hi-vis vest + neck-shade cap. 65°C tarmac-tested, 18-month warranty. From 360 SAR.` (135)
- **Meta (AR):** `بولو بوليستر عالي الأداء + سترة عاكسة ANSI 107 فئة 2 + قبّعة بحماية رقبة. مختبَر لمدرج 65°م، ضمان 18 شهراً. من 360 ريالاً.` (130)
- **OG image:** `og/products/ground-staff-uniform-1200x630.webp` (KAIA tarmac in midday Jeddah heat — release-signed)
- **Image strategy:** 6 images — full set, hi-vis vest macro, neck-shade cap detail, moisture-wicking demo, KAIA/KKIA tarmac context, replacement-band kit.

---

## Targeting

- **Primary KW (AR):** `زي الخدمة الأرضية للمطار`
- **Primary KW (EN):** `airport ground staff uniform Saudi`
- **Secondary KWs:**
  - `زي عمّال مدرج` / `tarmac ramp uniform`
  - `زي مناولة أمتعة` / `baggage handler uniform`
  - `زي الخدمة الأرضية ANSI 107` / `ANSI 107 ground handling`
  - `زي مطار بحماية رقبة` / `airport uniform neck-shade`
- **AI Citation queries:**
  - «ما القماش الأمثل لـ65°م حرارة المدرج؟»
  - «ما الفرق بين Class 2 وClass 3 hi-vis للمدرج؟»
  - «هل توفّر UNEOM قبّعة بحماية رقبة لطاقم المدرج؟»
  - «كم يكلّف زي خدمة أرضية مطار كامل؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 50, lead 14–21d, warranty 18mo. 160 GSM performance polyester. Pricing 395/380/360 SAR. From data FAQ: 65°C KAIA July tarmac surface; 30% retroreflectivity loss in untested bands.
- **Opinion:** Adapted O-AV2 (60% of regional FR-claim suppliers lack UL — extend to hi-vis: same lab-vs-claim gap applies).
- **Reviews to collect:** 2–3 airport ground ops directors (KAIA, KKIA, KFIA).

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Performance polyester, 160gsm, hi-vis yellow + custom Pantone, ANSI 107 Class 2, 18mo warranty, 14–21d lead, MOQ 50
4. [ ] Use Case Block (~150 words — KAIA + KKIA + KFIA tarmac/ramp ops; baggage handlers; aircraft marshallers; pushback ops)
5. [ ] Comparison Matrix (UNEOM Ground vs Generic ramp polo vs Cheap polyester)
6. [ ] Material Science Block (~200 words from data file FAQ — hydrophilic moisture-wicking vs cotton-blend thermal mass; 160 GSM breathability/durability threshold; neck-shade UV reduction)
7. [ ] **Neck-Shade Cap Block** (~100 words — heat-stress injury prevention engineering; the differentiator from competitor uniforms)
8. [ ] Care Instructions HowTo
9. [ ] Customer Reviews (2–3 ground ops directors)
10. [ ] Pricing Tiers (Operator / Airport / Enterprise from data file)
11. [ ] FAQ Block (5)
12. [ ] Related Products (within-category): `airline-crew-uniform`
13. [ ] CTA: Quote + Sample Request

---

## Required Numerics (≥5)

1. **160 GSM** performance polyester (calibrated to breathability/durability threshold)
2. **ANSI 107 Class 2** retroreflective hi-vis vest
3. **65°C tarmac surface temperature** at KAIA July afternoons (GASTAT climate dataset)
4. **18-month warranty** + first-24-month replacement bands (Airport tier)
5. **395 SAR** Operator; **380 SAR** Airport; **360 SAR** Enterprise
6. **MOQ 50 sets**
7. **14–21 day lead** repeat orders
8. **Hydrophilic moisture-wicking** evaporative cooling vs cotton thermal-mass dehydration acceleration

---

## Required Entities (≥6)

1. **GACA** — `https://gaca.gov.sa`
2. **ANSI/ISEA 107** — `https://webstore.ansi.org/standards/isea/ansiisea1072020`
3. **HCIS** — `https://www.hcis.gov.sa`
4. **OEKO-TEX Standard 100** — `https://www.oeko-tex.com/`
5. **MHRSD** — `https://hrsd.gov.sa`
6. **KAIA / KKIA / KFIA** (airport anchors)
7. **Saudi Council of Engineers**

---

## Definition Lock-in

From `aviation[ground-staff-uniform].definitionLockIn` (data file).

---

## Internal Links

| # | Anchor | Target |
|---|---|---|
| 1 | aviation uniforms | `/shop/aviation/` |
| 2 | Airline Crew Uniform | `/shop/aviation/airline-crew-uniform/` |
| 3 | Aviation pillar | `/industries/aviation/` |
| 4 | Weather Protection Guide | `/resources/weather-protection-guide/` |
| 5 | Tarmac heat-stress blog | `/blog/tarmac-heat-stress-aviation-saudi/` |
| 6 | Quote (ground staff) | `/quote/?industry=aviation&product=ground-staff-uniform` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| GACA Ramp Operations | `https://gaca.gov.sa` |
| ANSI/ISEA 107 | `https://webstore.ansi.org/standards/isea/ansiisea1072020` |
| MHRSD Heat-Stress | `https://hrsd.gov.sa` |

---

## Schema

- [x] `Product` — material "Performance Polyester", weight "160gsm", size array, image array
- [x] `AggregateOffer` — lowPrice 360, highPrice 410, offerCount 3
- [x] `WarrantyPromise` — P18M
- [x] `HowTo` (Care)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected

---

## Customer Reviews

2–3 named airport ground ops directors / ramp supervisors. Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Tarmac-context heat shoot (release-signed)
- [ ] Neck-shade detail macro
- [ ] Customer Reviews ≥2 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 9.
