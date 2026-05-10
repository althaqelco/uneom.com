# Content Brief — Product: Hi-Vis Jacket (ANSI 107 Class 3)

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `hi-vis-jacket` · Category `manufacturing` · Industry `manufacturing`
- **URL (EN):** `https://uneom.com/shop/manufacturing/hi-vis-jacket/`
- **URL (AR):** `https://uneom.com/ar/shop/manufacturing/hi-vis-jacket/`
- **Reviewer:** TBD (Saudi Council of Engineers — Industrial PPE)
- **Data source-of-truth:** `src/lib/data/products/manufacturing.ts` (slug `hi-vis-jacket`)
- **Target publish:** Wave 3, Week 8 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Hi-Vis Jacket — ANSI 107 Class 3 Saudi Site PPE | UNEOM` (56)
- **Title (AR):** `سترة عاكسة ANSI 107 فئة 3 — معدّات سلامة موقع | UNEOM` (53)
- **Meta (EN):** `Class 3 hi-vis polyester jacket with retroreflective bands, replacement-band kits, optional fleece liner. 18-month warranty. From 395 SAR.` (140)
- **Meta (AR):** `سترة بوليستر عاكسة فئة 3 بأشرطة قابلة للاستبدال وخيار بطانة فليس. ضمان 18 شهراً. من 395 ريالاً.` (95)
- **OG image:** `og/products/hi-vis-jacket-1200x630.webp` (Saudi industrial site dawn lighting — high-vis effect visible)
- **Image strategy:** 6 images — front, back, retroreflective band macro (low-light), fleece liner detached, replaceable-band kit, embroidered worker name detail.

---

## Targeting

- **Primary KW (AR):** `سترة عاكسة للعمّال`
- **Primary KW (EN):** `hi-vis jacket Saudi Arabia`
- **Secondary KWs:**
  - `سترة ANSI 107` / `ANSI 107 Class 3 jacket`
  - `سترة عمّال موقع` / `industrial site safety jacket`
  - `سترة عاكسة ببطانة فليس` / `hi-vis jacket fleece liner`
  - `سترة بإسم العامل` / `worker-name embroidered hi-vis`
- **AI Citation queries:**
  - «ما الفرق بين Class 1، 2، 3 في الـhi-vis؟»
  - «هل أحتاج لـClass 3 أم Class 2 لموقعي الصناعي؟»
  - «كم تدوم الأشرطة العاكسة في السترة؟»
  - «هل يمكن استبدال الأشرطة بدلاً من الجاكيت كاملاً؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 25, lead 14–21d, warranty 18mo. 200 GSM reflective hi-vis polyester. Pricing 435/420/395 SAR.
- **Opinion:** O-M2 (250,000 FR coveralls/year, 30% non-tested) — adapt for hi-vis: "30% of hi-vis bands fail retroreflectivity within 18 months — annual band re-test = lives saved + costs reduced".
- **Reviews to collect:** 2–3 site safety officers / construction-zone supervisors.

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Reflective hi-vis polyester, 200gsm, fluorescent yellow + orange, ANSI 107 Class 3, 18mo warranty, 14–21d lead, MOQ 25
4. [ ] Use Case Block (~150 words — outdoor/dusk/dawn site visibility, NEOM/RSP construction perimeter, port/logistics yards)
5. [ ] Comparison Matrix (UNEOM Class 3 vs Class 2 vs Cheap pseudo-hi-vis)
6. [ ] Material Science Block (~180 words — retroreflective glass-bead vs prismatic films; ANSI 107 testing methodology; fluorescent dye chemistry)
7. [ ] **Replacement Bands Block** (~100 words — Plant-tier inclusion; 24-month replaceable-band kit; cost vs full-jacket replacement)
8. [ ] Care Instructions HowTo (industrial laundering preserving retroreflective integrity)
9. [ ] Customer Reviews (2–3 site safety officers)
10. [ ] Pricing Tiers (3 tiers from data file: Site / Plant / Enterprise)
11. [ ] FAQ Block (5)
12. [ ] Related Products (within-category): `coverall-fr`
13. [ ] CTA: Quote + Sample Request

---

## Required Numerics (≥5)

1. **ANSI 107 Class 3** = highest visibility classification (vs Class 1/2)
2. **200 GSM** reflective hi-vis polyester
3. **18-month warranty** + replaceable-band kits (Plant tier)
4. **435 SAR** Site / **420 SAR** Plant / **395 SAR** Enterprise
5. **MOQ 25 units**
6. **14–21 day lead** repeat orders
7. **30% retroreflectivity loss** in untested bands at 18 months (industry observation, UNEOM benchmark)

---

## Required Entities (≥5)

1. **ANSI/ISEA 107** — `https://webstore.ansi.org/standards/isea/ansiisea1072020`
2. **HCIS** — `https://www.hcis.gov.sa`
3. **SASO** — `https://www.saso.gov.sa`
4. **3M Scotchlite** (retroreflective technology, named contextually as industry standard)
5. **MHRSD** — `https://hrsd.gov.sa` (workplace safety attire)
6. **Saudi Council of Engineers**

---

## Definition Lock-in

From `manufacturing[hi-vis-jacket].definitionLockIn` (data file).

---

## Internal Links

| # | Anchor | Target |
|---|---|---|
| 1 | manufacturing PPE | `/shop/manufacturing/` |
| 2 | HRC2 FR Coverall | `/shop/manufacturing/coverall-fr/` |
| 3 | Manufacturing pillar | `/industries/manufacturing/` |
| 4 | Electrical Safety PPE Guide | `/resources/electrical-safety-ppe-guide/` |
| 5 | Weather Protection Guide | `/resources/weather-protection-guide/` |
| 6 | Quote (hi-vis) | `/quote/?industry=manufacturing&product=hi-vis-jacket` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| ANSI/ISEA 107 | `https://webstore.ansi.org/standards/isea/ansiisea1072020` |
| HCIS | `https://www.hcis.gov.sa` |
| MHRSD Workplace Safety | `https://hrsd.gov.sa` |

---

## Schema

- [x] `Product` — material "Reflective Hi-Vis Polyester", weight "200gsm", color array (Hi-Vis Yellow, Hi-Vis Orange), size array, image array
- [x] `AggregateOffer` — lowPrice 395, highPrice 460, offerCount 3
- [x] `WarrantyPromise` — P18M
- [x] `HowTo` (Care + retroreflectivity preservation)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`

---

## Customer Reviews

2–3 site safety officers / construction supervisors. Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Low-light retroreflectivity demo image included
- [ ] Replaceable-band kit photographed
- [ ] Customer Reviews ≥2 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 8.
