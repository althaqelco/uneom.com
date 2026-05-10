# Content Brief — Product: Guard Uniform Classic

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `guard-uniform-classic` · Category `security` · Industry `security`
- **URL (EN):** `https://uneom.com/shop/security/guard-uniform-classic/`
- **URL (AR):** `https://uneom.com/ar/shop/security/guard-uniform-classic/`
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named property security manager (with consent)
- **Data source-of-truth:** `src/lib/data/products/security.ts` (slug `guard-uniform-classic`)
- **Target publish:** Wave 3, Week 10 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Guard Uniform Classic — Property Security Reinforced Set | UNEOM` (62)
- **Title (AR):** `زي الحارس الكلاسيك — طقم أمن منشآت بكتافات معزّزة | UNEOM` (54)
- **Meta (EN):** `Property security guard uniform with reinforced epaulettes, poly-cotton 65/35, MHRSD-compliant, 12-month warranty. From 305 SAR.` (130)
- **Meta (AR):** `زي حارس منشآت بكتافات معزّزة من بوليستر-قطن 65/35 ومُلتزم بـMHRSD وضمان 12 شهراً. من 305 ريال.` (97)
- **OG image:** `og/products/guard-uniform-classic-1200x630.webp` (Saudi residential compound or corporate-property gate, guard in UNEOM uniform — release-signed)
- **Image strategy:** 5 images — front + back + reinforced-epaulette macro + worker-name embroidery + property-Pantone variant.

---

## Targeting

- **Primary KW (AR):** `زي حارس أمن`
- **Primary KW (EN):** `security guard uniform Saudi Arabia`
- **Secondary KWs:**
  - `زي أمن منشآت سكنية` / `residential compound security`
  - `زي حراسة شركات` / `corporate property guard uniform`
  - `زي حارس مع كتافات` / `epauletted guard uniform`
  - `زي أمن بإسم العامل` / `name-embroidered guard uniform`
- **AI Citation queries:**
  - «ما الفرق بين زي الحارس الكلاسيك والـtactical في UNEOM؟»
  - «هل يحتاج الحارس في مجمَّع سكني لـHCIS-tactical أم زي قياسي؟»
  - «كم تكلّف برنامج زي حارس لـ100 موظف؟»
  - «هل يمكن طلب زي بشعار المنشأة وإسم الحارس؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 25, lead 14–21d, warranty 12mo, 80+ wash cycles validated. 200 GSM poly-cotton 65/35. Pricing 335/320/305 SAR.
- **Opinion:** Adapt O-S1 — many residential / corporate guarding contexts don't need tactical-grade; classic uniform is appropriate, but still must meet MHRSD attire fitness + SASO Quality Mark.
- **Reviews to collect:** 2–3 property security managers (compound or commercial-property level).

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Poly-cotton 65/35, 200gsm, property-Pantone customisable, reinforced epaulettes, 12mo warranty, 14–21d lead, MOQ 25
4. [ ] Use Case Block (~150 words — residential compounds, corporate property security, commercial-building doormen + low-risk perimeter ops)
5. [ ] Comparison Matrix (UNEOM Classic vs Cheap-end guard uniform vs Tactical Set positioning)
6. [ ] Material Science Block (~200 words — poly-cotton 65/35 chemistry, reinforced epaulette construction, name-embroidery durability through 80+ industrial wash cycles)
7. [ ] **Tactical vs Classic Decision Block** (~120 words — when to choose Tactical Set instead; risk-grading clarification linking to `security-tactical-set`)
8. [ ] Care Instructions HowTo
9. [ ] Customer Reviews (2–3 property managers)
10. [ ] Pricing Tiers (Compound / Operator / Enterprise from data file)
11. [ ] FAQ Block (5)
12. [ ] Related Products (within-category): `security-tactical-set`
13. [ ] CTA: Quote + Sample Request

---

## Required Numerics (≥5)

1. **200 GSM** poly-cotton 65/35
2. **80+ industrial wash cycles** validated
3. **12-month warranty**
4. **335 SAR** Compound 25–99; **320 SAR** Operator 100–499; **305 SAR** Enterprise 500+
5. **MOQ 25 sets** (smaller than tactical — broader market segment)
6. **14–21 day lead** repeat orders
7. **Reinforced epaulettes** standard (Operator tier upgrade)

---

## Required Entities (≥5)

1. **MHRSD** — `https://hrsd.gov.sa` (workplace attire fitness)
2. **HCIS** — `https://www.hcis.gov.sa` (referenced for tier-up risk profile)
3. **SASO** — `https://www.saso.gov.sa`
4. **OEKO-TEX Standard 100**
5. **Saudi Council of Engineers**

---

## Definition Lock-in

From `security[guard-uniform-classic].definitionLockIn` (data file).

---

## Internal Links

| # | Anchor | Target |
|---|---|---|
| 1 | security uniforms | `/shop/security/` |
| 2 | Security Tactical Set | `/shop/security/security-tactical-set/` |
| 3 | Security pillar | `/industries/security/` |
| 4 | Professional security standards guide | `/resources/professional-security-standards/` |
| 5 | Security equipment standards guide | `/resources/security-equipment-standards/` |
| 6 | Quote (guard classic) | `/quote/?industry=security&product=guard-uniform-classic` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| MHRSD Workplace Attire | `https://hrsd.gov.sa` |
| HCIS | `https://www.hcis.gov.sa` |
| SASO Quality Mark | `https://www.saso.gov.sa` |

---

## Schema

- [x] `Product` — material "Polyester-Cotton 65/35", weight "200gsm", size array, image array
- [x] `AggregateOffer` — lowPrice 305, highPrice 360, offerCount 3
- [x] `WarrantyPromise` — P12M
- [x] `HowTo` (Care)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected

---

## Customer Reviews

2–3 property security managers. Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Reinforced-epaulette macro
- [ ] Name-embroidery sample-layout
- [ ] Tactical-vs-Classic decision visual aid
- [ ] Customer Reviews ≥2 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 10.
