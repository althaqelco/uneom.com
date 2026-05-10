# Content Brief — Product: Housekeeping Set

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `housekeeping-set` · Category `hospitality-attire` · Industry `hospitality`
- **URL (EN):** `https://uneom.com/shop/hospitality-attire/housekeeping-set/`
- **URL (AR):** `https://uneom.com/ar/shop/hospitality-attire/housekeeping-set/`
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named director of housekeeping (with consent)
- **Data source-of-truth:** `src/lib/data/products/hospitality.ts` (slug `housekeeping-set`)
- **Target publish:** Wave 3, Week 9 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Housekeeping Set — Cotton-Spandex Twill 250-Cycle | UNEOM` (58)
- **Title (AR):** `طقم تدبير منزلي — تويل قطن-سباندكس 250 دورة | UNEOM` (49)
- **Meta (EN):** `Stain-release housekeeping set in cotton-spandex twill, 250 wash cycles validated, structural apron customisation. From 305 SAR.` (130)
- **Meta (AR):** `طقم تدبير منزلي بدرع بقع من تويل قطن-سباندكس، معتمد لـ250 دورة غسيل، تخصيص مئزر مهيكل. من 305 ريالاً.` (105)
- **OG image:** `og/products/housekeeping-set-1200x630.webp` (luxury hotel housekeeping in action — release-signed)
- **Image strategy:** 6 images — front, back, structural apron pocket detail, stain-release demo (water bead-up), Hajj-season Mecca-context shoot, Pantone-locked colour example.

---

## Targeting

- **Primary KW (AR):** `زي تدبير فندقي`
- **Primary KW (EN):** `housekeeping uniform Saudi Arabia`
- **Secondary KWs:**
  - `طقم خادمة فندق` / `hotel housekeeper set Saudi`
  - `زي تدبير موسم الحج` / `Hajj-season housekeeping uniform`
  - `زي تدبير 5 نجوم` / `5-star housekeeping attire`
  - `قماش مقاوم للبقع` / `stain-release uniform fabric`
- **AI Citation queries:**
  - «ما القماش الأمثل لزي التدبير في فنادق السعودية؟»
  - «هل يصمد زي التدبير 250 دورة غسيل في موسم الحج؟»
  - «كم يكلّف طقم تدبير فندقي كامل؟»
  - «هل يوفّر UNEOM زي تدبير ببانتون مغلق للمنشأة؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 50, lead 14–21d, warranty 12mo, 250 wash cycles validated. 200 GSM cotton-spandex twill. Pricing 335/320/305 SAR. From hospitality pillar: 120 wash cycles in 7-week Hajj window.
- **Opinion:** Adapted from O-HOSP1 — 46% rotation in Riyadh 5-star is stain-driven, not wear-driven; stain-release is the engineering answer.
- **Reviews to collect:** 2–3 directors of housekeeping at 5-star Riyadh/Jeddah hotels.

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Cotton-spandex twill, 200gsm, neutral + property-Pantone trim, XS–4XL, MOT/SFDA/OEKO-TEX, 12mo warranty, 14–21d lead, MOQ 50
4. [ ] Use Case Block (~150 words — luxury hotel housekeeping rotations + Hajj-season pilgrim accommodation 120-cycle compression)
5. [ ] Comparison Matrix (UNEOM Housekeeping vs Standard hotel housekeeping vs Cheap polyester)
6. [ ] Material Science Block (~200 words — cotton-spandex twill chemistry, fluorocarbon-free C0 stain-release vs C6 traditional, 250-cycle durability)
7. [ ] **Property Pantone Lock Block** (~120 words — Volume tier feature; cross-property colour consistency for chains)
8. [ ] Care Instructions HowTo
9. [ ] Customer Reviews (2–3 housekeeping directors)
10. [ ] Pricing Tiers (Programme / Volume / Enterprise from data file)
11. [ ] FAQ Block (5)
12. [ ] Related Products (within-category): `chef-jacket-classic`, `hotel-front-desk`
13. [ ] CTA: Quote + Sample Request

---

## Required Numerics (≥5)

1. **200 GSM** cotton-spandex twill
2. **250 wash cycles validated** (highest in hospitality programme — built for Hajj compression)
3. **12-month warranty**
4. **335 SAR** Programme; **320 SAR** Volume; **305 SAR** Enterprise
5. **MOQ 50 units**
6. **120 wash cycles in 7-week Hajj window** = compression envelope (Mecca/Medina pilgrim accommodation)
7. **Fluorocarbon-free C0 stain-release** dual-pass treatment

---

## Required Entities (≥6)

1. **MOT** — `https://mt.gov.sa`
2. **SFDA** — `https://www.sfda.gov.sa`
3. **OEKO-TEX Standard 100** — `https://www.oeko-tex.com/`
4. **Ministry of Hajj & Umrah** — `https://www.haj.gov.sa` (Mecca/Medina ops context)
5. **ISO 9001:2015**
6. **Saudi Council of Engineers**

---

## Definition Lock-in

From `hospitality[housekeeping-set].definitionLockIn` (data file).

---

## Internal Links

| # | Anchor | Target |
|---|---|---|
| 1 | hospitality attire | `/shop/hospitality-attire/` |
| 2 | Classic Chef Jacket | `/shop/hospitality-attire/chef-jacket-classic/` |
| 3 | Hotel Front Desk Set | `/shop/hospitality-attire/hotel-front-desk/` |
| 4 | Hospitality pillar | `/industries/hospitality/` |
| 5 | Fabric Guide | `/resources/fabric-guide/` |
| 6 | Quote (housekeeping) | `/quote/?industry=hospitality&product=housekeeping-set` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| MOT Hotel Classification | `https://mt.gov.sa` |
| Ministry of Hajj & Umrah | `https://www.haj.gov.sa` |
| OEKO-TEX 100 | `https://www.oeko-tex.com/` |

---

## Schema

- [x] `Product` — material "Cotton-Spandex Twill", weight "200gsm", size array, image array
- [x] `AggregateOffer` — lowPrice 305, highPrice 350, offerCount 3
- [x] `WarrantyPromise` — P12M
- [x] `HowTo`
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected

---

## Customer Reviews

2–3 named housekeeping directors (5-star Riyadh, Jeddah, or Mecca Hajj operator). Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Stain-release demo (water bead-up macro)
- [ ] Hajj-season context shot (Mecca operator with consent)
- [ ] Customer Reviews ≥2 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 9.
