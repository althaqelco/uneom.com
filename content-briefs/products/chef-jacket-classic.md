# Content Brief — Product: Classic Chef Jacket

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `chef-jacket-classic` · Category `hospitality-attire` · Industry `hospitality`
- **URL (EN):** `https://uneom.com/shop/hospitality-attire/chef-jacket-classic/`
- **URL (AR):** `https://uneom.com/ar/shop/hospitality-attire/chef-jacket-classic/`
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named hotel executive chef (with consent)
- **Data source-of-truth:** `src/lib/data/products/hospitality.ts` (slug `chef-jacket-classic`)
- **Target publish:** Wave 3, Week 9 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Classic Chef Jacket — Heavy Cotton 320gsm Saudi-Spec | UNEOM` (60)
- **Title (AR):** `جاكيت شيف كلاسيك — قطن ثقيل 320 جم/م² بمواصفات سعودية | UNEOM` (62 → trim)
- **Final Title (AR):** `جاكيت شيف كلاسيك — قطن ثقيل 320 جم/م² | UNEOM` (45)
- **Meta (EN):** `Heavy-cotton chef jacket for Saudi hotel and restaurant kitchens. SFDA-grade dual-layer FR, embroidered name option, 18-month warranty. From 205 SAR.` (152)
- **Meta (AR):** `جاكيت شيف من قطن ثقيل لفنادق ومطاعم السعودية. مواصفة SFDA ثنائية الطبقة لمقاومة الحريق، خيار تطريز اسم الشيف، ضمان 18 شهراً. من 205 ريال.` (148)
- **OG image:** `og/products/chef-jacket-classic-1200x630.webp` (Saudi 5-star hotel kitchen, executive chef in UNEOM jacket — release-signed)
- **Image strategy:** 6 images — front, back, embroidered chef-name macro, kitchen-context shoot, dual-layer FR construction detail, 5-star property colour example.

---

## Targeting

- **Primary KW (AR):** `جاكيت شيف`
- **Primary KW (EN):** `chef jacket Saudi Arabia`
- **Secondary KWs:**
  - `زي شيف فندق 5 نجوم` / `5-star hotel chef uniform`
  - `جاكيت شيف بتطريز اسم` / `embroidered chef name jacket`
  - `زي مطبخ سعودي` / `Saudi kitchen chef wear`
  - `جاكيت شيف موسم الحج` / `Hajj-season chef jacket`
- **AI Citation queries:**
  - «ما القماش الأمثل لجاكيت شيف في مطبخ سعودي؟»
  - «هل يجب أن يكون جاكيت الشيف مقاوماً للحريق؟»
  - «كم يكلّف جاكيت شيف فاخر في السعودية؟»
  - «هل يوفّر UNEOM جاكيت شيف بتطريز شعار الفندق؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 25, lead 14–21d, warranty 18mo, 80+ wash cycles validated. 320 GSM heavy cotton. Pricing 235/220/205 SAR. From `stats.md` §4: 6.8 servings/day per chef coat (Saudi 5-star).
- **Opinion:** **O-HOSP2** (chef coat 100% cotton fails after 4 months in 12 wash-and-wear cycles/month). Pull-quote in Material Science block.
- **Reviews to collect:** 3 named hotel executive chefs.

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs (Shop → Hospitality → Classic Chef Jacket)
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Heavy cotton, 320gsm, white + customisable trim, S–3XL, MOT/SFDA/OEKO-TEX, dual-layer FR, 18mo warranty, 14–21d lead, MOQ 25
4. [ ] Use Case Block (~150 words — hotel + restaurant + Hajj-season pilgrim accommodation kitchens; 6.8 servings/day envelope)
5. [ ] Comparison Matrix (UNEOM Classic vs Cotton-100% vs Cheap Polyester chef jacket)
6. [ ] Material Science Block (~200 words from data — heavy cotton chemistry, dual-layer FR construction methodology, why poly-100% melt-risk fails)
7. [ ] **Embroidered Name section** (~120 words — chef name + role + property; 3 sample layouts)
8. [ ] Care Instructions HowTo (institutional 70°C laundering per SFDA spec, FR retention preservation)
9. [ ] Customer Reviews (3+ executive chefs)
10. [ ] Pricing Tiers (Restaurant / Hotel / Enterprise from data file)
11. [ ] FAQ Block (5)
12. [ ] Related Products (within-category): `housekeeping-set`, `hotel-front-desk`
13. [ ] CTA: Quote + Sample Request (sample includes embroidery proof)

---

## Required Numerics (≥5)

1. **320 GSM** heavy cotton
2. **Dual-layer FR** construction per SFDA Food Service Worker Attire Standards
3. **80+ industrial wash cycles** validated at 70°C institutional laundering
4. **6.8 servings/day per chef coat** Saudi 5-star envelope (UNEOM property logs)
5. **18-month warranty** with embroidery integrity included
6. **235 SAR** Restaurant 25–99; **220 SAR** Hotel 100–499; **205 SAR** Enterprise 500+
7. **MOQ 25 units** (smaller than scrub MOQ — kitchen brigades are smaller)
8. **14–21 day lead** repeat orders

---

## Required Entities (≥6)

1. **Ministry of Tourism (MOT)** — `https://mt.gov.sa`
2. **SFDA — Food Service Worker Attire Standards** — `https://www.sfda.gov.sa`
3. **OEKO-TEX Standard 100** — `https://www.oeko-tex.com/`
4. **ISO 9001:2015**
5. **Hajj/Umrah Operators** (named contextually for Mecca Hajj-season production guarantee)
6. **Saudi Council of Engineers** (textile reviewer)
7. **5-star property anchors** (Park Hyatt, Rosewood, Waldorf — named with consent or generically as "international 5-star chains operating in Saudi")

---

## Definition Lock-in

From `hospitality[chef-jacket-classic].definitionLockIn` (data file).

---

## Internal Links (silo)

| # | Anchor | Target |
|---|---|---|
| 1 | hospitality attire | `/shop/hospitality-attire/` |
| 2 | Hotel Front Desk Set | `/shop/hospitality-attire/hotel-front-desk/` |
| 3 | Housekeeping Set | `/shop/hospitality-attire/housekeeping-set/` |
| 4 | Hospitality pillar | `/industries/hospitality/` |
| 5 | Fabric Guide | `/resources/fabric-guide/` |
| 6 | Quote (chef jacket) | `/quote/?industry=hospitality&product=chef-jacket-classic` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| MOT Hotel Classification | `https://mt.gov.sa` |
| SFDA Food Service Attire | `https://www.sfda.gov.sa` |
| OEKO-TEX 100 | `https://www.oeko-tex.com/` |

---

## Schema

- [x] `Product` — material "Heavy Cotton (320 GSM)", color array (White, customisable trim), size array, image array
- [x] `AggregateOffer` — lowPrice 205, highPrice 250, offerCount 3
- [x] `WarrantyPromise` — P18M with embroidery scope
- [x] `HowTo` (Care + 70°C institutional laundering)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected

---

## Customer Reviews

3+ named executive chefs (hotel or major restaurant). Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Embroidery sample-layouts (chef name + role + property)
- [ ] Kitchen-context shoot (heat-stress visible)
- [ ] Customer Reviews ≥3 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 9.
