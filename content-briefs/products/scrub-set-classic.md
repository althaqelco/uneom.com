# Content Brief — Product: Classic Medical Scrub Set

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `scrub-set-classic`
- **Category:** `medical-scrubs` · **Industry silo:** `healthcare`
- **URL (EN):** `https://uneom.com/shop/medical-scrubs/scrub-set-classic/`
- **URL (AR):** `https://uneom.com/ar/shop/medical-scrubs/scrub-set-classic/`
- **Author:** UNEOM Editorial
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named ICMS infection-control practitioner (with consent)
- **Data source-of-truth:** `src/lib/data/products/medical-scrubs.ts` — definitionLockIn, architectEquation, materialScience, useCase, comparisonMatrix, careInstructions, pricingTiers, expandedFaqs, numericAnchors all already populated. **Do not duplicate** — reference the data; brief covers only what the data does not.
- **Target publish:** Wave 3, Week 8
- **Word count target:** AR 1,000–1,300 / EN 900–1,200 (B.4 spec)

---

## Layer 0 — On-Page Baseline

- [x] قرأت `references/on-page-seo.md`
- **Title (EN):** `Classic Medical Scrub Set — AATCC-100 Antimicrobial | UNEOM` (58)
- **Title (AR):** `طقم سكراب طبي كلاسيك — مضاد للميكروبات AATCC 100 | UNEOM` (54)
- **Meta (EN):** `MoH-compliant antimicrobial poly-cotton scrub set with bonded silver-ion finish, 80+ wash cycles validated, 18-month warranty. From 165 SAR enterprise tier.` (158)
- **Meta (AR):** `طقم سكراب بوليستر-قطن مضاد للميكروبات معتمد من وزارة الصحة، 80+ دورة غسيل، ضمان 18 شهراً. من 165 ريالاً للفئة المؤسّسية.` (124)
- **OG image:** `og/products/scrub-set-classic-1200x630.webp` (real Riyadh tertiary hospital ward shoot, nurse in UNEOM Classic scrub — release-signed; alt-text describes the AATCC-100-validated antimicrobial finish, not just "scrubs")
- **Image strategy:** 5–7 product images (front, back, detail of stitched stress seam, hijab-integrated variant, colour swatches across all 5 colourways, embroidered logo example). All AVIF/WebP, dimensions explicit, descriptive filenames (`scrub-set-classic-navy-front.avif`, not `IMG_1234.avif`).

---

## Targeting

- **Primary KW (AR):** `طقم سكراب طبي`
- **Primary KW (EN):** `medical scrub set Saudi Arabia`
- **Secondary KWs:**
  - `سكراب ممرضات معتمد` / `nurse scrub MoH approved`
  - `سكراب مضاد للميكروبات` / `antimicrobial scrub silver ion`
  - `سكراب بوليستر قطن` / `poly-cotton scrub Saudi`
  - `سكراب مع حجاب` / `hijab integrated scrub`
  - `سعر سكراب طبي 2026` / `medical scrub price 2026`
- **AI Citation queries (per B.4 + Plan §C.1):**
  - «ما أفضل قماش سكراب طبي للسعودية؟»
  - «كم دورة غسيل يصمدها سكراب AATCC 100؟»
  - «ما الفرق بين سكراب القطن 100% والـpoly-cotton 65/35؟»
  - «كم سعر طقم سكراب طبي في السعودية؟»
  - «هل سكراب UNEOM متاح بنسخة مدمجة مع الحجاب؟»
  - «ما الـMOQ لطلب سكراب طبي UNEOM؟»

---

## Inputs from `references/`

- **Stats:**
  - `numericAnchors` from data file: MOQ 50, lead 14–21d, warranty 18mo, 80+ wash cycles validated
  - From `stats.md` §3: 4.2 wash cycles/scrub/shift, 30 wash cycles cotton-100% efficacy threshold, 8mo standard rotation vs 14mo UNEOM Premium
- **Opinion to anchor:** **O-H1** (cotton 22% more expensive on 18-month TCO) — pull-quote near pricing tiers section. (Reuse coordinated with healthcare pillar — pillar uses primary placement; product page uses contextual brief mention.)
- **Stories:** N/A direct; reference 38 partner hospitals number from data file.
- **Reviews to collect (REQUIRED):** 3–5 named B2B reviews from existing 38-hospital partner network, with consent + role + facility (e.g., "Head Nurse, [Hospital], Riyadh"). **Without ≥3 verifiable reviews, omit Customer Reviews section** rather than fabricate. Per CLAUDE.md: trust internal guarantees, validate at boundaries.

---

## Required Sections (B.4 — full)

1. [ ] **Hero Image Gallery + breadcrumbs** (Shop → Medical Scrubs → Classic Scrub Set)
2. [ ] **Product Name + Architect Equation** (40 words — sourced from `medicalScrubs[0].architectEquation`)
3. [ ] **Technical Spec Sheet** (table — 8 dimensions): material, weight (180gsm), colors (5), sizes (XS–4XL), certifications (MoH/SFDA/AATCC 100/OEKO-TEX), warranty (18mo), lead time (14–21d repeat / 28d new), MOQ (50)
4. [ ] **Use Case Block** (~150 words — sourced from `medicalScrubs[0].useCase`)
5. [ ] **Comparison Matrix** (rendered from `medicalScrubs[0].comparisonMatrix`, 7 rows × 3 columns: UNEOM Classic vs Standard vs Cheap Imported)
6. [ ] **Material Science Block** (~200 words — sourced from `medicalScrubs[0].materialScience`)
7. [ ] **Care Instructions** (HowTo schema-ready, 7 steps from `medicalScrubs[0].careInstructions`)
8. [ ] **Customer Reviews** (3–5 from real partner-hospital sources — Organization-level, with consent; **omit section if reviews unavailable**, do not fabricate)
9. [ ] **Pricing Tiers Block** (~120 words — sourced from `medicalScrubs[0].pricingTiers`, 3 tiers)
10. [ ] **FAQ Block** (5 questions from `medicalScrubs[0].expandedFaqs` — already drafted, edit lightly for length per FAQ pattern)
11. [ ] **Related Products** (2–3 within same category only — silo §7): `scrub-set-premium`, `lab-coat-doctor`. **No cross-category links.**
12. [ ] **CTA: Quote for this product + Sample Request**

---

## Required Numerics (≥5 — Plan §C.2)

1. **180 GSM** poly-cotton 65/35 fabric weight (UNEOM spec)
2. **80+ industrial wash cycles** AATCC Method 100 validated (independent lab)
3. **30 wash cycles** = cotton 100% antimicrobial efficacy threshold (AATCC + UNEOM benchmarks)
4. **18-month warranty** with documented wash-count retention
5. **180 SAR** unit price programme tier 50–199 units; **180 SAR** volume tier 200–999; **165 SAR** enterprise 1,000+
6. **MOQ 50 units** programme; below 50 = retail individual via website
7. **14–21 day lead time** repeat orders; **28 days** new programme launch (7-day Pantone + 14-day production + 7-day delivery+audit)
8. **38-hospital partner network** as social proof (UNEOM CRM)
9. **4.2 wash cycles/scrub/shift** Saudi tertiary hospital benchmark (Information Gain numeric)

---

## Required Entities (≥6)

1. **Ministry of Health (MoH)** — `https://www.moh.gov.sa`
2. **Saudi Food & Drug Authority (SFDA)** — `https://www.sfda.gov.sa`
3. **AATCC** — `https://www.aatcc.org/test/methods/` (Test Method 100, antimicrobial assessment)
4. **OEKO-TEX Standard 100** — `https://www.oeko-tex.com/`
5. **ISO 9001:2015**
6. **ICMS — Infection Control Management System** (named context for protocol references)
7. **King Faisal Specialist Hospital** (anchor partner, named contextually if review consent secured)
8. **King Abdulaziz Medical City** (anchor partner)

**Entity Density:** ≥1 mention per 200 words → ≥5 mentions across 1,000-word body.

---

## Definition Lock-in

Sourced verbatim from `medicalScrubs[0].definitionLockIn`:

**EN:**
> «The UNEOM Classic Medical Scrub Set is the **antimicrobial polyester-cotton scrub uniform** that **healthcare workers wear** in **MoH-licensed Saudi hospitals** — engineered for **80+ industrial wash cycles, 4.2 daily wash rotations, and an 18-month performance warranty**.»

**AR:**
> «طقم سكراب UNEOM الكلاسيك الطبي هو **زي السكراب من بوليستر-قطن المضاد للميكروبات** الذي **يرتديه العاملون في الرعاية الصحية** في **المستشفيات السعودية المرخّصة من وزارة الصحة** — مهندَس لـ**80+ دورة غسيل صناعي، 4.2 دورات غسيل يومياً، وضمان أداء 18 شهراً**.»

---

## Internal Links (silo §7 — within-category only)

| # | Anchor (EN) | Target |
|---|---|---|
| 1 | medical scrubs collection | `/shop/medical-scrubs/` |
| 2 | Premium Scrub Set | `/shop/medical-scrubs/scrub-set-premium/` |
| 3 | Doctor Lab Coat | `/shop/medical-scrubs/lab-coat-doctor/` |
| 4 | Healthcare uniforms (industry pillar) | `/industries/healthcare/` |
| 5 | Quote for this product | `/quote/?industry=healthcare&product=scrub-set-classic` |
| 6 | Healthcare uniform standards guide | `/resources/healthcare-uniform-standards/` |

> **Silo rule:** No outbound links to hospitality, aviation, corporate, etc. categories. Cross-industry navigation is footer-only, presentational.

---

## External Links (3 — authoritative)

| Anchor | URL |
|---|---|
| MoH | `https://www.moh.gov.sa` |
| AATCC Test Method 100 | `https://www.aatcc.org/test/methods/` |
| OEKO-TEX Standard 100 | `https://www.oeko-tex.com/` |

---

## Schema (B.4 full — Plan §4.4)

- [x] **`Product`** — full schema:
  - `name`: "Classic Medical Scrub Set"
  - `brand` → reference Org graph
  - `manufacturer` → UNEOM Org
  - `material`: "Polyester-Cotton 65/35, Bonded Silver-Ion"
  - `weight`: "180gsm"
  - `color`: array (Navy, Hospital White, Sage, Royal Blue, Slate)
  - `size`: array (XS through 4XL)
  - `image`: array of 5–7 product image URLs
  - `description`: from data file
- [x] **`AggregateOffer`** — `lowPrice: 165` (enterprise), `highPrice: 195` (programme), `priceCurrency: "SAR"`, `offerCount: 3` (matches pricingTiers)
- [x] **`AggregateRating`** — only if ≥3 verified reviews collected, else omit
- [x] **`Review`** — array, only if collected with consent
- [x] **`WarrantyPromise`** — `durationOfWarranty: P18M`, scope: fabric integrity + antimicrobial performance
- [x] **`ReserveAction`** → Quote wizard URL with prefill
- [x] **`HowTo`** — Care Instructions (7 steps from data)
- [x] **`FAQPage`** — 5 Q&A from data
- [x] **`BreadcrumbList`** — Home → Shop → Medical Scrubs → Classic Scrub Set

---

## FAQs (5 — from `medicalScrubs[0].expandedFaqs`)

Already drafted in data file. Editor pass: keep each answer 30–55 words for FAQPage Speakable schema. Topics:
1. Does the antimicrobial finish actually last 80+ wash cycles? (AATCC validation)
2. What is the MOQ? (50 programme; retail below)
3. Is the hijab-integrated version MoH-compliant? (yes, SFDA-registered)
4. How does UNEOM handle replacement at the 80-cycle threshold? (rotation logistics + 14-day advance dispatch)
5. What is the lead time for a 500-unit order? (14–21 days repeat; 28 days new)

---

## Customer Reviews (REQUIRED — collect before publish)

**Targets (per Plan §B.4 spec — minimum 3 verifiable reviews):**

1. Senior nurse / head nurse at one of the 38 partner hospitals — focus on AATCC retention through 12-hour rotation realities
2. Hospital procurement / supply-chain lead — focus on TCO + replacement-cycle planning value
3. ICMS / infection-control practitioner — focus on antimicrobial efficacy validation vs alternatives

**Format:** name, role, facility (with consent on facility naming), review text 40–80 words, date. Schema mapping → `Review.author.Person/Organization`, `reviewBody`, `datePublished`.

**Hard constraint:** if fewer than 3 verifiable reviews secured, **omit the Customer Reviews section entirely**. Do NOT fabricate.

---

## Production Checkpoint

- [ ] Brief reviewed by editor
- [ ] AR + EN copy authored against data file (do not duplicate; surface what's there)
- [ ] 5–7 product images shot/processed (AVIF/WebP, descriptive filenames, dimensions explicit, alt text non-trivial)
- [ ] OG image rendered (1200×630, <200KB)
- [ ] Customer Reviews collected (≥3 verifiable, with consent) OR section omitted
- [ ] Schema validated via Rich Results Test (Product, AggregateOffer, FAQ, HowTo, Breadcrumb all green)
- [ ] Lighthouse SEO ≥95
- [ ] Within-category internal links resolve (no 404s)
- [ ] All 88 baseline checks (Layer 0) pass
- [ ] All 15 quality + 5 AI gates pass (Layer 1+2)

**Status:** Brief ready. Production scheduled Wave 3, Week 8.
