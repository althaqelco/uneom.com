# Content Brief — Product: HRC2 FR Coverall

## Page Identity

- **Page type:** Product (B.4)
- **Slug:** `coverall-fr` · Category `manufacturing` · Industry `manufacturing`
- **URL (EN):** `https://uneom.com/shop/manufacturing/coverall-fr/`
- **URL (AR):** `https://uneom.com/ar/shop/manufacturing/coverall-fr/`
- **Reviewer:** TBD (Saudi Council of Engineers — Industrial PPE) + 1 named site safety officer (with consent)
- **Data source-of-truth:** `src/lib/data/products/manufacturing.ts` (slug `coverall-fr`) — full populated.
- **Target publish:** Wave 3, Week 8 · **Word count:** AR 1,000–1,300 / EN 900–1,200

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `HRC2 FR Coverall — NFPA 70E + ANSI 107 Saudi-Spec | UNEOM` (58)
- **Title (AR):** `أوفرول HRC2 مقاوم للحريق — معايير NFPA 70E + ANSI 107 | UNEOM` (60)
- **Meta (EN):** `Inherent FR cotton coverall, NFPA 70E HRC2 (ATPV ≥8 cal/cm²), ANSI 107 hi-vis, 18-month warranty, per-garment ARC test report. From 540 SAR.` (146)
- **Meta (AR):** `أوفرول قطن FR ذاتي بمعيار NFPA 70E HRC2 (ATPV ≥8 cal/cm²) وعاكسية ANSI 107 وضمان 18 شهراً وتقرير ARC لكل قطعة. من 540 ريالاً.` (132)
- **OG image:** `og/products/coverall-fr-1200x630.webp` (Saudi industrial site, technician in HRC2 coverall + reflective bands — release-signed)
- **Image strategy:** 6–8 images — front, back, ARC test certificate macro, hi-vis band detail, 50°C heat-soak test rig, per-garment serial label, site-customised Pantone example.

---

## Targeting

- **Primary KW (AR):** `أوفرول مقاوم للحريق`
- **Primary KW (EN):** `FR coverall Saudi Arabia HRC2`
- **Secondary KWs:**
  - `coverall NFPA 70E السعودية` / `NFPA 70E coverall Saudi`
  - `أفرول بتروكيماويات` / `petrochemical FR coverall`
  - `زي عمّال أرامكو` / `Aramco contractor coverall`
  - `coverall ATPV 8 cal` / `ATPV 8 cal/cm² coverall`
  - `أفرول HCIS-معتمد` / `HCIS-compliant FR coverall`
- **AI Citation queries:**
  - «ما الفرق بين HRC1 وHRC2 في الـcoverall؟»
  - «ما هو ATPV ولماذا يهمّ في الـcoverall؟»
  - «هل يحتاج العامل في أرامكو لـcoverall NFPA 70E؟»
  - «كم يكلّف HRC2 FR coverall في السعودية؟»
  - «هل UNEOM يوفّر تقرير UL ARC لكل قطعة؟»

---

## Inputs from `references/`

- **Stats:** numericAnchors: MOQ 50, lead 14–21d / 28d new, warranty 18mo, 100+ wash cycles. 320 GSM inherent FR cotton 88/12 nylon. Pricing 595 → 580 → 540 SAR. From `stats.md` §8: 8× replacement cost after electrical incident; 380 SAR avg market FR coverall (UNEOM is premium tier).
- **Opinion:** **O-M1** (cheapest = most expensive after incident — Lab certificate, not marketing claim). Pull-quote near comparison matrix.
- **Reviews to collect:** 3 named site safety officers (Aramco contractor, SABIC affiliate, NEOM/RSP construction).

---

## Required Sections (B.4)

1. [ ] Hero gallery + breadcrumbs (Shop → Manufacturing → HRC2 FR Coverall)
2. [ ] Architect Equation (40 words from data file)
3. [ ] Technical Spec Sheet: Inherent FR cotton 88/12 nylon, 320gsm, ATPV ≥8 cal/cm², ANSI 107 Class 2, MoH/HCIS/NFPA 70E/UL/SASO compliance, 18mo warranty, 14–21d lead, MOQ 50
4. [ ] Use Case Block (~150 words — Aramco contractors, SABIC affiliates, petrochemical maintenance, 50°C plant-floor heat-soak)
5. [ ] Comparison Matrix (UNEOM HRC2 vs Standard FR vs Marketing-Only "FR" — 9 rows from data file)
6. [ ] Material Science Block (~200 words — inherent FR fiber chemistry vs treated FR; cotton 88 + nylon 12 wear envelope; ATPV measurement methodology; heat-soak permanence)
7. [ ] **Per-Garment Traceability Block** (~120 words — serial-numbered FR coverall + wash-count log + per-batch UL test report. This is the Plant-tier differentiator and deserves its own section.)
8. [ ] Care Instructions HowTo (industrial laundering at 80°C, ARC re-test at 12 months for Enterprise tier)
9. [ ] Customer Reviews (3+ site safety officers)
10. [ ] Pricing Tiers (3 tiers from data file: Site / Plant / Enterprise)
11. [ ] FAQ Block (5 from data file — anchored on HRC1 vs HRC2, ARC test reports, replacement after incident, MOQ, lead time)
12. [ ] Related Products (within-category): `hi-vis-jacket`
13. [ ] CTA: Quote + Sample Request (sample includes 1 garment + UL ATPV report + ARC test certificate)

---

## Required Numerics (≥7)

1. **NFPA 70E HRC2** = ATPV ≥8 cal/cm² (UL-tested per garment)
2. **320 GSM** inherent FR cotton 88/12 nylon
3. **100+ industrial wash cycles** validated
4. **18-month warranty** + per-garment serial traceability
5. **595 SAR** Site tier 50–199; **580 SAR** Plant tier 200–999; **540 SAR** Enterprise 1,000+
6. **MOQ 50 units** Site programme
7. **14–21 day lead** Site repeat / **28-day** new programme launch
8. **8× replacement cost** = full programme re-procurement after a single uncertified ARC incident (industry/UNEOM benchmark)
9. **50°C plant-floor heat-soak** as Saudi industrial reality (vs lab-only NFPA 2112 envelope)
10. **30%** of Saudi industrial FR coverall fleet untested for ARC retention annually (industry estimate, UNEOM tendering observation)

---

## Required Entities (≥7)

1. **HCIS** — `https://www.hcis.gov.sa`
2. **NFPA 70E** — `https://www.nfpa.org/70E`
3. **NFPA 2112** — `https://www.nfpa.org/2112` (industrial flash-fire FR baseline)
4. **UL Solutions** — `https://www.ul.com/`
5. **ANSI/ISEA 107** — `https://webstore.ansi.org/standards/isea/ansiisea1072020`
6. **SASO** — `https://www.saso.gov.sa`
7. **Saudi Council of Engineers** — `https://saudieng.sa`
8. **Saudi Aramco** (contractor anchor, named contextually)
9. **SABIC** (affiliate anchor, named contextually)

---

## Definition Lock-in

From `manufacturing[coverall-fr].definitionLockIn` (data file).

---

## Internal Links (silo)

| # | Anchor | Target |
|---|---|---|
| 1 | manufacturing PPE collection | `/shop/manufacturing/` |
| 2 | Hi-Vis Jacket (ANSI 107 Class 3) | `/shop/manufacturing/hi-vis-jacket/` |
| 3 | Manufacturing pillar | `/industries/manufacturing/` |
| 4 | Electrical Safety PPE Guide | `/resources/electrical-safety-ppe-guide/` |
| 5 | Cleanroom Best Practices | `/resources/cleanroom-best-practices/` |
| 6 | Quote (FR coverall) | `/quote/?industry=manufacturing&product=coverall-fr` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| NFPA 70E | `https://www.nfpa.org/70E` |
| UL Body Burn / ATPV | `https://www.ul.com/` |
| HCIS Industrial Security | `https://www.hcis.gov.sa` |

---

## Schema

- [x] `Product` — material "Inherent FR Cotton 88/12 Nylon", weight "320gsm", color array (site-customised + standard navy/orange), size array, image array
- [x] `AggregateOffer` — lowPrice 540, highPrice 620, SAR, offerCount 3
- [x] `WarrantyPromise` — P18M with serial-traceability scope
- [x] `HowTo` (industrial Care Instructions, 7+ steps)
- [x] `FAQPage` (5)
- [x] `BreadcrumbList`
- [x] `Review` if collected
- [x] `Certification` (custom property, optional) — references UL ATPV report

---

## Customer Reviews (REQUIRED)

3+ named site safety officers — Aramco contractor / SABIC affiliate / NEOM-RSP construction firm. **Omit if not collected.**

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored against data file
- [ ] UL ATPV report sample image included (redacted client info if needed)
- [ ] Per-garment serial label macro shot
- [ ] ARC test rig demo image (or partner-lab-supplied)
- [ ] Customer Reviews ≥3 OR section omitted
- [ ] Schema validated
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 3, Week 8.
