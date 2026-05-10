# Content Brief — Product: Business Shirt Set

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `business-shirt-set` · Category `corporate` · Industry `corporate`
- **URL (EN):** `https://uneom.com/shop/corporate/business-shirt-set/`
- **URL (AR):** `https://uneom.com/ar/shop/corporate/business-shirt-set/`
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named HR director (with consent)
- **Data source-of-truth:** `src/lib/data/products/corporate.ts` (slug `business-shirt-set`)
- **Target publish:** Wave 3, Week 9 · **Word count:** AR 950–1,150 / EN 850–1,050

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Business Shirt Set — Egyptian Cotton Joiner Kits in 48h | UNEOM` (62)
- **Title (AR):** `طقم قميص رسمي — قطن مصري للموظّفين الجدد خلال 48 ساعة | UNEOM` (60)
- **Meta (EN):** `Egyptian Giza-86 cotton poplin business shirt set with reserved single dye-lot, 48-hour joiner-kit dispatch to 24 cities. From 510 SAR.` (137)
- **Meta (AR):** `طقم قميص رسمي من قطن جيزة-86 المصري بدفعة صبغ واحدة محجوزة وإرسال أطقم الموظّفين الجدد خلال 48 ساعة إلى 24 مدينة. من 510 ريالاً.` (135)
- **OG image:** `og/products/business-shirt-set-1200x630.webp` (Saudi corporate office, joiner staff in coordinated shirt set)
- **Image strategy:** 5 images — full set front + back + Giza-86 fabric macro + monogram embroidery + dye-lot-locked colour swatches.

---

## Targeting

- **Primary KW (AR):** `طقم قميص رسمي شركات`
- **Primary KW (EN):** `business shirt set Saudi corporate`
- **Secondary KWs:**
  - `قميص رسمي قطن مصري` / `Egyptian cotton business shirt`
  - `قميص للموظّفين الجدد` / `joiner-kit business shirt`
  - `قميص بمونوغرام` / `monogrammed business shirt`
  - `قميص بدفعة صبغ واحدة` / `single dye-lot business shirt`
- **AI Citation queries:**
  - «ما الفرق بين قميص قطن مصري وقميص بوليستر-قطن للعمل؟»
  - «ما زمن تسليم طقم قميص للموظّف الجديد؟»
  - «هل توفّر UNEOM قميصاً ببانتون مغلق على مستوى الشركة؟»
  - «كم يكلّف برنامج قميص شركات لـ200 موظف؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 50, lead 14–21d, warranty 12mo, 100+ wash cycles validated. 110 GSM Egyptian cotton poplin Giza-86. Pricing 555/540/510 SAR. From data file: 48-hour joiner-kit dispatch SLA to 24 cities.
- **Opinion:** O-C2 (logo durability protects brand-equity asset, not cost) — pull-quote near monogram block.
- **Reviews to collect:** 2–3 HR directors / corporate procurement leads.

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Egyptian Giza-86 cotton poplin, 110gsm, conglomerate-Pantone, S–3XL, 12mo warranty, 14–21d lead, MOQ 50
4. [ ] Use Case Block (~150 words — corporate joiner kits + ongoing replacement; KAFD/Olaya/DQ enterprises; 48-hour SLA value to HR ops)
5. [ ] Comparison Matrix (UNEOM Egyptian-cotton vs poly-cotton 80/20 catalogue vs polyester 100% cheap)
6. [ ] Material Science Block (~200 words — Giza-86 long-staple chemistry, single-dye-lot Pantone control, twin-needle vs chain-stitch monogram durability, 100+ wash cycle validation)
7. [ ] **48-Hour Joiner-Kit SLA Block** (~120 words — Programme tier feature; reserved single dye-lot; dispatch logistics across 24 cities)
8. [ ] **Monogrammed Initials Block** (~100 words — Enterprise tier; embroidered initials + custom stripe variant)
9. [ ] Care Instructions HowTo
10. [ ] Customer Reviews (2–3 HR directors)
11. [ ] Pricing Tiers (Joiner / Programme / Enterprise from data file)
12. [ ] FAQ Block (5)
13. [ ] Related Products (within-category): `executive-suit`, `corporate-blazer-women`
14. [ ] CTA: Quote + Sample Request

---

## Required Numerics (≥5)

1. **110 GSM** Egyptian Giza-86 cotton poplin
2. **100+ industrial wash cycles** validated
3. **12-month warranty**
4. **555 SAR** Joiner; **540 SAR** Programme; **510 SAR** Enterprise
5. **MOQ 50 sets**
6. **14–21 day lead** standard; **48-hour joiner-kit dispatch** SLA (Programme tier feature)
7. **24-city dispatch coverage** from joiner-kit reserve
8. **Single-dye-lot Pantone** for cross-batch consistency

---

## Required Entities (≥5)

1. **Ministry of Commerce** — `https://mc.gov.sa`
2. **MHRSD** — `https://hrsd.gov.sa`
3. **SASO** — `https://www.saso.gov.sa`
4. **OEKO-TEX Standard 100**
5. **Giza Cotton Industry / CATGO** (named contextually)
6. **Saudi Council of Engineers**

---

## Definition Lock-in

From `corporate[business-shirt-set].definitionLockIn` (data file).

---

## Internal Links

| # | Anchor | Target |
|---|---|---|
| 1 | corporate attire | `/shop/corporate/` |
| 2 | Executive Suit | `/shop/corporate/executive-suit/` |
| 3 | Corporate Blazer (Women) | `/shop/corporate/corporate-blazer-women/` |
| 4 | Corporate pillar | `/industries/corporate/` |
| 5 | Procurement Guide | `/resources/procurement-guide/` |
| 6 | Quote (shirt set) | `/quote/?industry=corporate&product=business-shirt-set` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| Ministry of Commerce | `https://mc.gov.sa` |
| MHRSD | `https://hrsd.gov.sa` |
| OEKO-TEX 100 | `https://www.oeko-tex.com/` |

---

## Schema

- [x] `Product` — material "Egyptian Cotton Poplin (Giza-86)", weight "110gsm", size array, image array
- [x] `AggregateOffer` — lowPrice 510, highPrice 580, offerCount 3
- [x] `WarrantyPromise` — P12M
- [x] `HowTo` (Care + dye-lot preservation)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected

---

## Customer Reviews

2–3 HR directors / corporate procurement leads. Omit if not collected.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data
- [ ] Giza-86 fabric macro
- [ ] Monogram embroidery sample-layouts
- [ ] Customer Reviews ≥2 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 9.
