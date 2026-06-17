# UNEOM.COM — EXHAUSTIVE TECHNICAL SEO & AEO AUDIT
**Date:** 17 June 2026 · **Method:** Full BFS crawl of the deployed build (Next 15 App Router, bilingual EN/AR), 297 indexable pages, cross-checked against live `https://uneom.com` headers and the source tree · **Engine:** 18-dimension multi-agent analysis with adversarial verification of every Critical/High finding against the crawl corpus + codebase.

> **Verification note:** Every 🔴/🟠 finding below was re-checked against the raw data before publishing. Known auditor false positives were actively excluded: canonicals (296/297 self-referencing) and hreflang (reciprocal + x-default, 0 broken) are **healthy**; the decorative `alt=""` heroes are **intentional**; the OG image is **fine**; founding-year is now **consistently 2013**; source maps are **not exposed**. This report contains confirmed defects, not noise.

---

## 1. Executive Summary

### Site Health Score: **64 / 100** *(weighted by dimension importance)*
A genuinely strong technical foundation — **clean crawl surface, flat depth-2 architecture, reciprocal hreflang, excellent mobile, modern AEO/agentic infrastructure** — held back from elite by a cluster of **self-inflicted, mostly one-file bugs**: a Google **fake-review policy violation**, a sitewide **Arabic language/RTL defect**, an **on-page metadata** mess (double-brand titles, 48 hub pages with no H1, 42 over-length descriptions), **CWV** drag (homepage `no-store`, a hero-preload that's wrong on ~99% of pages), and a **thin-content** tail. None of these are architectural; all are fixable in days, not months.

**The real ceiling is off-page:** Domain Rating ≈ 3. The on-page work below moves you from "Google can't fully trust the markup" to "technically flawless," but **#1 in KSA will be won or lost on backlinks and entity authority**, not on any fix in this report.

### Screaming Frog Crawl Summary
| Metric | Value |
|---|---|
| Total URLs crawled | 297 indexable HTML (+ ~100 `?city=` param variants, canonicalized) |
| Indexable / Non-indexable | 297 / 0 accidental noindex (blog tag pages noindex by design) |
| Internal 4xx / 5xx | **0 / 0** |
| Internal redirect chains / loops | 0 internal · 1 two-hop chain on 6 legacy `/sectors/` URLs |
| Max crawl depth | **2** (depth-0: 2, depth-1: 75, depth-2: 220) — excellent |
| Self-referencing canonicals | 296 / 297 |
| Pages with reciprocal hreflang + x-default | 296 / 297 |

### 🔴 Top 5 Critical — fix within 24 hours
1. **Fabricated `AggregateRating` + self-authored `Review` on all 36 product pages.** Every product hardcodes the *identical* `ratingValue 4.8 / ratingCount 127 / reviewCount 89` (`src/lib/seo/schemas.ts:431`). Verified live on two unrelated products. This is a **Google fake-structured-data policy violation** → manual-action / rich-result-suppression risk. **Remove it today** (or gate behind real review data). *(D7, D18)*
2. **All 148 Arabic pages render `<html lang="en">` with no `dir="rtl"`** (`src/app/layout.tsx:78`). The Arabic half of an Arabic-first site declares English to Google and screen readers. *(D14, D16)*
3. **Homepage (and every route without a header rule) is served `cache-control: no-store`** → CDN-bypassed, ~2.2 s cold TTFB on your highest-value page. *(D6, D8)*
4. **Hero LCP preload is hardcoded to `healthcare-pillar-hero-960.avif` on every page** (`layout.tsx:83`) → ~294 of 296 pages preload an image they never render *and* fail to preload their actual LCP image. *(D8)*
5. **48 hub/listing pages have no `<h1>`** (their main heading is an `<h2>`): `/industries/ /shop/ /services/ /blog/ /locations/ /resources/ /case-studies/ /quote/ /contact/ /careers/` + all `/ar/` twins. *(D4, D16)*

### 🟠 Top 5 Quick Wins — highest ROI, lowest effort
1. **Kill the `| UNEOM | UNEOM` double-brand** on ~18 industry/location pages — delete the hardcoded `| UNEOM` from the title strings (the `title.template` already appends it). One-line edits.
2. **Real per-page `lastmod` in `sitemap.ts`** — replace the single hardcoded `2026-05-08` with each page's actual `updatedAt`/`publishedAt`. Restores sitemap trust.
3. **Add a `Cache-Control` header rule for `/` and `/ar/`** in `next.config.mjs` → instantly fixes homepage TTFB and CDN hit-rate.
4. **Add ~80 words of unique intro copy + an `<h1>` to the 12 thin shop/blog category pages** (the 8 soft-404s) — clears them out of Google's thin-content / soft-404 bucket.
5. **Fix or remove the invalid `HowTo` (zero `step`s) and the `Dataset → data.json` (404)** schema — both currently generate GSC structured-data errors with zero upside.

### Estimated Ranking Impact
- **Today:** technically capable but trust-compromised — fake-review markup + Arabic-lang defect + thin-tail are *active* drags; most non-brand KSA terms sit page 2–3.
- **After Phases 0–2 (≈3 weeks):** a clean, fully-trusted technical profile. On-page ceases to be a limiter; AI engines (already invited via robots + llms.txt) can cite cleanly. Expect movement to page 1–2 for mid-competition long-tail (`city × industry`, `procurement`, `Etimad`) terms **that you already out-content competitors on**.
- **#1 for head terms** (`زي موحد`, `medical scrubs Saudi`) remains **gated by DR ≈ 3** — requires the off-page/backlink program, not more code.

---

## 2. Screaming Frog-Style Summary Tables

### Response-Code Distribution (internal crawl)
| Code | Count | Notes |
|---|---|---|
| 200 | 297 | All internally-linked HTML |
| 3xx (internal) | 0 chains | 1 two-hop 308 chain on 6 legacy `/sectors/` URLs; whole estate emits 308 not 301 |
| 4xx | 0 | No broken internal links |
| 5xx | 0 | — |
| Soft-404 (200 + <120w + no H1) | **8** | shop/blog category shells |

### Title & Meta-Description Issues
| Issue | Count | Severity |
|---|---|---|
| Titles > 60 chars | 128 | 🟡 |
| Titles with `\| UNEOM \| UNEOM` double-brand | ~18 | 🟠 |
| Titles < 30 chars | 34 | 🟢 |
| Missing / duplicate titles | 0 / 0 | ✅ |
| Meta descriptions > 160 chars | 42 | 🟠 |
| Missing / duplicate descriptions | 0 / 0 | ✅ |

### H1 & Heading Issues
| Issue | Count |
|---|---|
| Pages with no `<h1>` (heading rendered as `<h2>`) | **48 hubs** (+`/ar/` twins) |
| Multiple H1 | 0 |
| Duplicate H1 across pages | 0 |

### Thin / Soft-404 Pages
| Bucket | Count | Examples |
|---|---|---|
| < 120 words (soft-404 risk) | 8 | `/shop/retail/` 93w, `/blog/category/aviation/` 95w, `/ar/shop/*` |
| < 300 words (thin) | 91 | shop + blog category pages; some city pages |
| ≥ 1000 words (strong) | 115 | blog posts, industry pillars |

### Internal-Link Health
| Metric | Value |
|---|---|
| Orphan pages (0 inlinks) | 0 |
| Near-orphans (1 inlink) | 0 |
| Over-linked (>100 outlinks) | footer/mega-nav driven; review |
| PageRank concentration | top 10% of pages ≈ 34% of internal equity |
| Blog posts avg inlinks | ~3.9 (under-linked cluster) |
| Generic-anchor ratio | ~0% (healthy) |

### Sitemap vs Crawl
| Check | Result |
|---|---|
| Sitemap `<loc>` count | 298 |
| `<lastmod>` distinct values | **1** (hardcoded `2026-05-08`, now stale) |
| Sitemap-only (orphan) URLs | 0 |
| Crawl-only (missing from sitemap) | minimal (param + tag noindex) |
| Thin/soft-404 URLs in sitemap | 8 (should be excluded or fixed) |

### URL Parameter Inventory
| Parameter | ~Count | Classification | Status |
|---|---|---|---|
| `/quote/?city=…` (+`industry`,`product`) | ~100 | content-altering form prefill | ✅ canonicalized to `/quote/` — not duplicate; minor crawl noise |

### Directive / Canonical Health
| Check | Result |
|---|---|
| Self-referencing canonicals | 296/297 ✅ |
| Canonical → non-200 / redirect / loop | 0 ✅ |
| Accidental noindex on money pages | 0 ✅ |
| `X-Robots-Tag` | `index, follow, max-image-preview:large, max-snippet:-1` ✅ |

---

## 3. Dimension Scorecard

| # | Dimension | Score | One-line verdict |
|---|---|---|---|
| 1 | Crawl & Response Codes | 8.0 | Clean surface, depth-2; minor 308-chain + soft-404s |
| 2 | Link Graph & Internal PageRank | 7.0 | No orphans, but blog cluster under-linked; equity concentrated |
| 3 | URL Structure & Parameters | 9.0 | Clean, lowercase, trailing-slash-consistent; params canonicalized |
| 4 | **On-Page Elements** | **4.5** | Double-brand titles, 48 missing H1s, 42 long descriptions |
| 5 | Image/Resource/Media | 6.5 | Heroes optimized; 339 KB shared JS; preload mismatch |
| 6 | Code Architecture & Rendering | 7.5 | Solid SSG; middleware forces homepage no-store; in-mem rate-limit |
| 7 | **Structured Data** | **5.5** | 🔴 Fabricated ratings; HowTo no-steps; areaServed bloat |
| 8 | **Core Web Vitals** | **5.5** | no-store TTFB; hardcoded hero preload; full-res mobile heroes |
| 9 | Crawl Efficiency & Indexation | 7.0 | Stale uniform lastmod; thin pages inflate footprint |
| 10 | Security | 7.5 | Strong headers; `unsafe-inline` CSP; phantom auth surface |
| 11 | AI Search (AEO) | 8.0 | Excellent infra; broken Dataset/HowTo assets; llms-full 404 |
| 12 | Mobile Experience | 8.5 | Strong responsive; sub-44px footer/hamburger targets |
| 13 | Duplicate Content | 6.5 | 32 city + 16 shop-cat near-dupe templated shells |
| 14 | **Hreflang & i18n** | **5.0** | 🔴 AR pages lang=en/no-dir; hreflang itself healthy |
| 15 | Pagination | 9.0 | None needed at this scale (correct) |
| 16 | Accessibility | 7.0 | Good focus/zoom; lang/dir + missing-H1 + contrast gaps |
| 17 | Content Quality & Authority | 6.0 | Strong pillars; thin category tail; cannibalization risk |
| 18 | Competitive Edge | 6.5 | Good infra; fake ratings; unverifiable authors; no tools |

**Unweighted average: 6.9/10 · Importance-weighted: 64/100.**

---

## 4. Prioritized Action Plan

### Phase 0 — Emergency (TODAY)
1. **Remove the fabricated `AggregateRating`/`Review`** from `src/lib/seo/schemas.ts:431` (product schema). Ship with no rating rather than a fake one. *(D7/D18 — policy risk)*
2. **Fix Arabic `<html lang>/<dir>`** — set `lang="ar" dir="rtl"` for `/ar/*`. Cleanest: give the `(site)` and `ar` route-groups their own root `<html>` (or read the path server-side). *(D14/D16)*
3. **Delete the invalid `HowTo` (no steps)** and the **`Dataset → /data.json` (404)** schema, or populate them correctly. *(D11)*

### Phase 1 — Critical (Week 1)
4. **Add `<h1>` to 48 hub pages** (promote the existing `<h2>` hero heading to `<h1>`). *(D4/D16)*
5. **Kill `| UNEOM | UNEOM`** — strip hardcoded `| UNEOM` from industry/location title maps. *(D4)*
6. **`Cache-Control` for `/` + `/ar/`** in `next.config.mjs headers()`; stop middleware forcing `no-store` on prerendered routes. *(D6/D8)*
7. **Dynamic hero preload** — preload the page's actual LCP image (pass per-template), not the hardcoded healthcare hero. *(D8)*
8. **Real per-page `lastmod`** in `sitemap.ts`; drop the 8 soft-404 pages from the sitemap until fixed. *(D9)*
9. **Trim 42 meta descriptions to ≤155 chars.** *(D4)*

### Phase 2 — High-Impact (Weeks 2-3)
10. **Thicken the 12 shop/blog category pages** (unique 80-word intros + H1 + FAQ); decide expand-vs-noindex for the 8 soft-404s. *(D1/D13/D17)*
11. **Width-responsive heroes for mobile** (`srcset`/`sizes` or width-specific AVIF on city/blog templates) — stops shipping 1920px to phones. *(D8)*
12. **Strengthen internal linking to blog posts** (related-posts, contextual links from industry/city pages) — raise the ~3.9 avg inlink. *(D2)*
13. **De-bloat `areaServed`** — emit a small representative City set or move it to one Organization node, not ~25 City+Geo per page. *(D7)*
14. **Add `Product Offer priceValidUntil`**, machine-readable `<time datetime>` on blog dates, and author profile pages with `sameAs`. *(D7/D11/D18)*

### Phase 3 — Advanced (Weeks 4-6)
15. **Reduce 339 KB shared JS** — audit the layout's client providers (WebMCP/agentic + analytics), lazy-load non-critical, target <250 KB. *(D5/D6)*
16. **Tighten CSP** — drop `script-src 'unsafe-inline'` via nonces/hashes; review the public `.well-known` OAuth/JWKS surface. *(D10)*
17. **WCAG AA contrast** fixes (emerald-on-white 2.54:1), 48px touch targets (footer/hamburger). *(D12/D16)*
18. **Engagement assets** — a uniform cost/quantity estimator or fabric selector (dwell-time + linkable). *(D18)*
19. **Publish `/llms-full.txt`**; fix `agent-skills` placeholder digests. *(D11)*

### Phase 4 — Ongoing
20. **The backlink program** (DR 3 → 25+): Saudi business directories, chambers of commerce, Digital-PR (the "Saudi uniform market" data study), client case-studies as linkable assets, GBP. **This is the real path to #1.**
21. Monthly Screaming Frog crawl; weekly GSC coverage/enhancements review.

---

## 5. Monitoring Dashboard

| Area | Metric | Tool | Alert threshold | Cadence |
|---|---|---|---|---|
| Indexation | Indexed vs submitted; soft-404 count | GSC Pages | any new "Crawled-not-indexed" cluster | Weekly |
| Structured data | Product/FAQ/Breadcrumb/HowTo errors | GSC Enhancements + Rich Results Test | any error after Phase 0 | Weekly |
| CWV | LCP/INP/CLS p75 (mobile) | CrUX + PSI | LCP >2.5s, INP >200ms | Weekly |
| Crawl health | 4xx/5xx, redirect chains, depth, orphans | Screaming Frog | any new chain >1 hop or orphan | Monthly full crawl |
| Caching | homepage `cache-control`, CDN hit-rate | `curl -I` / Firebase | `no-store` reappears on `/` | On deploy |
| Rankings | 20 head/long-tail KSA terms, non-brand clicks | GSC Performance + Ahrefs | −3 positions w/w | Weekly |
| Authority | DR, referring domains | Ahrefs | flat RD growth | Monthly |
| AI visibility | citations in AI Overviews / Perplexity / ChatGPT | manual prompts + Ahrefs Brand Radar | competitor cited, you're not | Monthly |

---

*Detailed per-dimension findings (severity · impact · evidence · copy-paste fix · Screaming Frog equivalent) follow below.*


---

# DETAILED PER-DIMENSION FINDINGS

## Dimension 1 — Full-Site Crawl & Response Code Map

**Verdict: 8/10 — Architecturally excellent and structurally clean, with a small set of self-inflicted gaps.** The crawl surface is healthy: 297/297 internally-linked HTML pages return HTTP 200, max crawl depth is 2, there are zero internal 4xx/5xx and zero internal redirect chains or loops, and the 11-layer `next.config.mjs` redirect system (283 rules) has no destination→source collisions among literal rules. The deductions are for (a) 8 true soft-404 pages, (b) a 2-hop 308 chain on six legacy `/sectors/` slugs, (c) the entire redirect estate emitting 308 instead of 301, and (d) a non-resolving `www` host with no apex fallback.

### Finding 1.1 — 8 soft-404 pages: HTTP 200 + <120 words + no H1 + indexable + in sitemap
- **Severity:** high
- **Impact:** These 8 pages match Google's exact soft-404 fingerprint: they return `200`, carry `index,follow` + self-canonical, are listed in `sitemap.xml`, yet render under 120 words with **no `<h1>`**. Google will most likely log them as "Soft 404" or "Crawled — currently not indexed" in GSC, wasting crawl budget and diluting site quality signals (Panda-class thin-content drag on the whole `/shop/` and `/blog/category/` sections).
- **Evidence:** Verified from `crawl_local.json` — all 8 are `status=200, words<120, h1_count=0, robots="index,follow…", canonical=self`, and present in `/tmp/uneom_audit/sitemap.xml`:
  - `/shop/retail/` (93w), `/blog/category/aviation/` (95w)
  - `/ar/shop/retail/` (88w), `/ar/shop/education/` (107w), `/ar/shop/manufacturing/` (110w), `/ar/shop/security/` (118w), `/ar/shop/aviation/` (118w), `/ar/blog/category/aviation/` (93w)
  - Broader thin tail: 91 pages <300w, dominated by the 6 EN + 6 AR `/shop/{retail,aviation,security,education,manufacturing,corporate}/` category pages (~93–137w) and blog category pages.
- **Fix (code):** Two-part. (1) Add unique intro prose + an H1 to each shop/blog category template so word count clears ~300w (the category page renders a product grid but no descriptive copy or `<h1>`). In the shop category page component (`src/app/(site)/shop/[category]/page.tsx` and its AR twin), inject a heading + 2–3 sentence localized category description above the grid:
  ```tsx
  <h1 className="text-3xl font-bold">{category.nameEn} Uniforms in Saudi Arabia</h1>
  <p className="mt-3 max-w-3xl text-gray-600">{category.intro /* 60–90 words, unique per category */}</p>
  ```
  (2) Until copy lands, stop feeding them to Google as indexable money pages — either drop them from `sitemap.ts` or add `robots: { index: false }` to the category `generateMetadata` for categories with <2 products:
  ```ts
  export async function generateMetadata({ params }) {
    const cat = getCategory(params.category);
    return { robots: cat.products.length < 2 ? { index: false, follow: true } : undefined, /* …*/ };
  }
  ```
- **SF-equivalent:** Screaming Frog → **Content → Low Content Pages** (Word Count threshold) cross-referenced with **Internal → HTML (200)** and **Sitemaps → URLs in Sitemap**; also surfaces in the **Page Titles / H1 → Missing** tab (h1_count=0).

### Finding 1.2 — 2-hop 308 redirect chain on six legacy `/sectors/` slugs
- **Severity:** medium
- **Impact:** A wildcard rule and a literal rule stack into a two-redirect chain. Chains bleed a fraction of link equity per extra hop and waste crawl budget; Google de-prioritizes deep chains. Affects 6 URLs (3 EN + 3 AR).
- **Evidence:** Confirmed **live** — `curl -sIL https://uneom.com/sectors/factory-industry/` returns `308 → /industries/factory-industry/` then `308 → /industries/manufacturing/` then `200` (2 redirects, `num_redirects=2`). Root cause in `next.config.mjs`: the Layer-11 wildcard `{ source: '/sectors/:slug/', destination: '/industries/:slug/' }` (line 506) carries `factory-industry` straight into the Layer-5 literal `{ source: '/industries/factory-industry/', destination: '/industries/manufacturing/' }` (line 323). Same pattern for `supply-manufacturing` (line 325) and `retail-shops` (line 327), each in EN and AR.
- **Fix (code):** Add literal `/sectors/` short-circuit rules that jump straight to the final destination, placed **before** the `/sectors/:slug/` wildcard, in the `legacyPlatform` array of `next.config.mjs`:
  ```js
  { source: '/sectors/factory-industry/',     destination: '/industries/manufacturing/', permanent: true },
  { source: '/ar/sectors/factory-industry/',  destination: '/ar/industries/manufacturing/', permanent: true },
  { source: '/sectors/supply-manufacturing/', destination: '/industries/manufacturing/', permanent: true },
  { source: '/ar/sectors/supply-manufacturing/', destination: '/ar/industries/manufacturing/', permanent: true },
  { source: '/sectors/retail-shops/',         destination: '/industries/retail/', permanent: true },
  { source: '/ar/sectors/retail-shops/',      destination: '/ar/industries/retail/', permanent: true },
  ```
- **SF-equivalent:** Screaming Frog → **Response Codes → Redirection (3xx)** with **Reports → Redirects → Redirect Chains** export (`Number of Redirects = 2`).

### Finding 1.3 — Entire redirect estate emits 308, not 301
- **Severity:** low
- **Impact:** All 283 `permanent: true` rules render as HTTP **308 Permanent Redirect** (Next.js default for `permanent: true`), not 301. Google treats 308 equivalently to 301 for consolidation, so ranking impact is negligible — but 308 is less universally understood: some legacy backlink-checkers, older crawlers, and a subset of AI/search bots handle it inconsistently, and 301 remains the de-facto standard reviewers/tools expect. This is the single largest-volume redirect signal on the site.
- **Evidence:** `grep` of `next.config.mjs` shows every redirect uses `permanent: true` with no `statusCode` override; live `curl -sI` on `/locations/jubail/`, `/privacy/`, `/sectors/education/`, `/blog/posts/healthcare-uniforms/` all return `HTTP/2 308`. (Note: the apex `http://→https://` redirect is a correct **301** served by the CDN, not Next — that one is fine.)
- **Fix (code):** If strict 301 semantics are desired, replace `permanent: true` with an explicit 301 status across the redirect tables in `next.config.mjs`:
  ```js
  // change   { source: …, destination: …, permanent: true }
  // to       { source: …, destination: …, statusCode: 301 }
  ```
  (`permanent` and `statusCode` are mutually exclusive in Next.js; `statusCode: 301` forces a true 301.) Lowest-risk approach: keep 308 (Google-equivalent) and treat this as documentation-only. Flagging because it is site-wide.
- **SF-equivalent:** Screaming Frog → **Response Codes → Redirection (3xx)**, Status Code column shows `308` rather than `301`.

### Finding 1.4 — `www.uneom.com` is NXDOMAIN — no www→apex safety redirect
- **Severity:** low
- **Impact:** `www.uneom.com` does not resolve (DNS NXDOMAIN). Any historical or scraped `www` URL — or a user/bot that prepends `www` — hits a hard connection failure instead of a clean 301 to the apex. All internal canonicals/hreflang correctly use the apex `https://uneom.com`, so on-site signals are clean; risk is confined to externally-originated `www` requests. Best practice is to have `www` resolve and 301 to apex so no variant ever dead-ends.
- **Evidence:** `nslookup www.uneom.com` → `NXDOMAIN`; `curl https://www.uneom.com/` → `000` (could not resolve host). Apex `nslookup uneom.com` → `35.219.201.40` (resolves, 200). `http://uneom.com/` → single `301 → https://uneom.com/` (correct).
- **Fix (code):** Not a code change in the repo — add a DNS `CNAME`/`A` record for `www` pointing at the Firebase App Hosting target, then add the `www` host to the App Hosting custom-domain config so the platform 301s `www → apex`. No `next.config.mjs` edit needed (host-level redirect).
- **SF-equivalent:** Screaming Frog → spider both `https://uneom.com` and `https://www.uneom.com`; the www crawl returns **Connection Refused / DNS error** in the **Response Codes → No Response** tab.

### Finding 1.5 — ~60 `/quote/?city=|industry=|product=` param URLs consume crawl budget (mitigated)
- **Severity:** low
- **Impact:** City, industry, and product pages link to parameterized quote URLs (e.g. `/quote/?city=riyadh`). The crawler captured **60 distinct** internally-linked param variants (34 `?city=`, 8 `?industry=`, 18 `?product=`; EVIDENCE's ~100 is the EN+AR upper bound across 24 cities × 2 langs + industries + products). Every variant is an extra URL Googlebot may request. This is **not a duplicate-content problem** — all variants self-consolidate — but it is wasted crawl budget on a DR≈3 site where crawl frequency is already limited.
- **Evidence:** From `crawl_local.json`/`analysis_local.json`: `/quote/` and `/ar/quote/` both emit `canonical = https://uneom.com/quote/` (and `…/ar/quote/`) — the metadata is a static export in `src/app/(site)/quote/page.tsx:12` (`canonical: 'https://uneom.com/quote/'`) with no `searchParams` branching, so all `?…` variants inherit the bare-path canonical. Links generated at `src/app/(site)/locations/[city]/page.tsx:121,339` and AR twin. **0** param URLs appear in `sitemap.xml`. Consolidation is correct; only crawl-budget cost remains.
- **Fix (code):** Optional. (a) Add a `Disallow: /quote/?` / `Disallow: /*?city=` style rule to `robots.txt` to stop Googlebot fetching the variants (canonical already prevents indexing, so this only saves crawl budget); or (b) convert the quote pre-fill links to use the apex path with the param as a non-crawlable fragment, or POST the context instead of GET. Lowest priority — current state is SEO-safe.
- **SF-equivalent:** Screaming Frog → **URL → Parameters** tab (URLs containing `?`), cross-checked with **Canonicals → Canonicalised** (all point to the param-free `/quote/`).

### What's working
- **100% 200-OK crawl surface:** 297/297 internally-linked HTML pages return HTTP 200; `errors_4xx_5xx = []` (zero internal broken links). (SF: Response Codes → Client Error 4xx / Server Error 5xx both empty.)
- **Outstanding crawl depth:** max depth = 2 (`depth_dist: {0:2, 1:75, 2:220}`) — every page is ≤2 clicks from home; `deep_pages = []`. Flat, fully-reachable architecture is ideal for crawl efficiency and equity flow.
- **No internal redirect chains or loops:** `multi_hop = []` for internally-linked pages; among 283 literal redirect rules, 0 destinations match another rule's source (verified by parse). Clean legacy rules (city aliases `jubail→al-jubail`, `qatif→al-qatif`, legal `/privacy/→/privacy-policy/`, `/blog/posts/*`) all resolve in a **single 308 hop** live.
- **Correct apex/protocol canonicalization:** `http://uneom.com/` → single **301** → `https://uneom.com/` (200); HSTS preloaded. All canonicals/hreflang use the apex host.
- **Param URLs correctly consolidated:** all `/quote/?…` variants self-canonicalize to the param-free `/quote/`; none are in the sitemap — no duplicate-content exposure.
- **Sitemap integrity:** 298 unique `<loc>` entries, no duplicate locs (the apparent `/shop/retail/` "duplicate" is a substring match against `/shop/retail/retail-staff-polo/`).

---

## Dimension 2 — Link Graph Topology & Internal PageRank

**Method:** Reconstructed the full internal link graph from `crawl_local.json` `links[]` across all **297 crawled pages** (149 EN + 148 AR), normalising trailing slashes and host. Computed unique-source inlink/outlink counts, ran weighted PageRank (d=0.85, 100 iterations), and measured anchor-text and external-link distributions. Cross-checked against the live source-of-truth components `src/components/layout/Footer.tsx`, `src/components/layout/Header.tsx`, and the central linking engine `src/components/ui/SiloLinks.tsx`.

**Headline:** Architecturally this is one of the cleanest link graphs an audit will find on a 297-page site — **0 orphans, 0 true near-orphans (minimum inlinks = 2), max crawl depth 2, no over-linked mega-menu, exemplary external citations, and a deliberate silo engine.** It is NOT flawless: the silo design starves the blog/resources/shop tail of equity, and three legal pages hoard top-tier PageRank. These are tuning problems, not breakage — hence a high score with concrete fixes.

---

### Finding 2.1 — Blog posts are equity dead-ends: 82 posts avg 3.9 inlinks, 16 get the bare minimum (no silo link at all)
- **Severity:** high
- **Impact:** The 82 blog posts are the single most important asset for the stated goal (Google KSA + AI-search citation) — they are the long-tail, entity-rich, FAQ-bearing content. Yet each holds only ~0.078% of internal PageRank versus 1.11% for a top hub page (a **14× equity gap**). Posts receive inlinks from only 3-4 sources: their EN/AR twin, the `/blog/` index, exactly one category page, and — for only 25 of 41 EN posts — one industry pillar (the `postsBySilo(silo).slice(0,4)` winners). **16 of 41 EN posts get exactly 3 inlinks** with no pillar/silo link whatsoever. Critically, `BlogPostLinks` in `SiloLinks.tsx` (lines 214-255) links a post UP to category/pillar/product/resource/case but emits **zero post→post links**, and the post body is rendered as plain strings (`{s.body}` at `src/app/(site)/blog/[slug]/page.tsx:106`) so there are **no in-content contextual links** either. Posts are leaf nodes that pass equity up and receive almost none back.
- **Evidence:** `crawl_local.json`: blog posts (EN+AR) inlinks min=3, max=9, median=4.0, mean=3.9. Example `/blog/uniform-procurement-tender-guide-saudi/` inlinks = `[/ar/blog/...twin, /blog/, /blog/category/corporate-education/]` (3 total). `SiloLinks.tsx:214-255` `BlogPostLinks` has no blog-post list. `src/app/(site)/blog/[slug]/page.tsx:101-110` renders body as raw text, no link parsing. No `related|recommend|read next` module exists (grep over `src/app/(site)/blog/` returns 0 hits).
- **Fix (code):** Add a "Related editorial" block to `BlogPostLinks` so posts cross-link within their silo (this also lifts the 16 zero-silo posts). In `src/components/ui/SiloLinks.tsx`, inside `BlogPostLinks` after the `caseStudy` section:
```tsx
// add near top of BlogPostLinks, after `const post = ...`
const relatedPosts = postsBySilo(silo)
  .filter(bp => bp.slug !== postSlug)
  .slice(0, 3);
// ...then add a new ListSection inside the grid:
{relatedPosts.length > 0 && (
  <ListSection title={t('editorial', lang)}>
    {relatedPosts.map(rp => (
      <ListLink
        key={rp.slug}
        href={`${p}/blog/${rp.slug}/`}
        label={lang === 'ar' ? rp.titleAr : rp.title}
        sublabel={`${rp.readingMinutes} ${t('min', lang)}`}
      />
    ))}
  </ListSection>
)}
```
This raises every post by +1 to +3 high-relevance inlinks and breaks the leaf-node trap. Separately, change the pillar `postsBySilo(silo).slice(0,4)` (line 117) to surface posts by recency/rotation rather than a fixed top-4 so the other 16 posts get a pillar inlink.
- **SF-equivalent:** Internal tab → "Inlinks" column sorted ascending; Crawl Analysis → "Link Score" (low-score URLs); the "Pages with only 1 internal link" / low-inlink report.

---

### Finding 2.2 — Link-equity sinks: /privacy-policy/, /terms-of-service/, /license/ each hold 1.11% PageRank (= a top money page), site-wide footer link
- **Severity:** medium
- **Impact:** Because `Footer.tsx:126-128` links the three legal pages on **every one of the 149 EN pages** (and the AR equivalents on 148 AR pages), each legal page accrues 149 inlinks and ranks in the top-15 internal PageRank — `/privacy-policy/` = 1.11% PR, identical to `/services/measurement-services/` or `/locations/riyadh/`. That is equity that should flow to money pages being parked on no-commercial-value utility pages. Same applies to `/license/` and (to a lesser degree) `/quote/` and `/sitemap.xml` (the latter is even linked as a footer anchor at `Footer.tsx:129`, sending it 296 inlinks and the #1-tied PageRank slot).
- **Evidence:** `crawl_local.json`: `/privacy-policy/` in=149 out=39; `/terms-of-service/` in=149; `/license/` in=149; `/sitemap.xml` in=296 (tied-highest PR 1.95%). PageRank top-15 includes `/privacy-policy/` at 1.11%. `Footer.tsx:126-129` emits these on every render.
- **Fix (code):** Keep the legal links crawlable but stop them from sinking equity. The cleanest pattern is to drop `/sitemap.xml` from the visible footer (it belongs only in robots.txt, which already declares it) and de-emphasise legal links is optional, but the highest-ROI move is to NOT add more footer links to legal. Remove the sitemap anchor at `Footer.tsx:129`:
```tsx
// DELETE this line — sitemap.xml is already advertised in robots.txt; a visible
// footer link gives it 296 inlinks and the #1 internal PageRank slot for zero benefit
<Link href="/sitemap.xml" className="hover:text-white">{ui.footer.sitemap}</Link>
```
Note: `rel="nofollow"` on internal links does NOT reclaim equity (PageRank sculpting is dead) — the only real fix is fewer site-wide links to low-value pages, so resist any temptation to nofollow them. This is a low-urgency optimisation: legal links in the footer are standard and Google discounts them, so do not over-engineer.
- **SF-equivalent:** Internal tab → sort "Inlinks" descending; Crawl Analysis → "Link Score" top URLs; "Internal" → filter by URL path /privacy/, /terms/.

---

### Finding 2.3 — Severe PageRank concentration: top 10% of pages hold 33.8% of internal equity (Gini 0.572), bimodal graph with a 136-page starved tail
- **Severity:** medium
- **Impact:** The distribution is bimodal by design: **75 pages sit at 149 inlinks** (everything in the header + footer global nav — industries, services, cities, company, legal) while **136 pages sit at ≤5 inlinks** (blog posts, shop categories/products, resources, case studies). There is a near-empty middle: **0 pages** fall in the 31-120 inlink band. The bottom 50% of pages collectively hold only 11.7% of internal PageRank. This means the templated "body" content (the pages that actually target specific commercial and informational queries) is structurally under-powered relative to the nav skeleton. For AI-search citation, the starved tail is exactly the content most likely to be cited — and it is the least internally endorsed.
- **Evidence:** `crawl_local.json` PageRank (d=0.85): top 29 pages (10%) = 33.8% of PR; bottom 50% = 11.7%; Gini = 0.572. Inlink buckets: 1-2:6, 3-5:130, 6-10:68, 11-30:18, **31-120:0**, 120+:75. 73 pages have exactly 149 inlinks (global nav set).
- **Fix (code):** Add a curated "mid-tier" linking surface that the nav currently skips — specifically surface shop categories and top resources/case-studies from the relevant hub and pillar pages so equity has a path into the tail. Two concrete moves: (1) On industry pillars, the `IndustryPillarLinks` block already lists products/resources/posts/case — extend the city pages (which currently link only to the 8 pillars, confirmed `/locations/riyadh/` → 8 industry links) to ALSO link the matching shop category, giving categories a path from 30+ city pages. (2) Add a "Browse by category" strip to the `/shop/` hub and `/resources/` hub that links every category/resource (they are currently reached by only 3-5 links each). These move pages out of the ≤5 band into the healthy middle without bloating any single page (current max is only 87 unique internal targets — there is ample headroom).
- **SF-equivalent:** Crawl Analysis → "Link Score" distribution; Internal → "Inlinks" histogram; "Crawl Depth" + "Link Score" cross-tab.

---

### Finding 2.4 — Shop category & product pages are under-linked (categories 3-5 inlinks, products avg 7.7)
- **Severity:** medium
- **Impact:** The 8 EN shop category pages get only 3-5 inlinks each (`/shop/retail/` = 3, the rest 4-5) and the 18 EN product pages average 7.7 inlinks. These are transactional pages (priced products, the closest thing to revenue intent on the site) yet they sit in the starved tail. The shop hub `/shop/` itself is nav-linked (149 inlinks) but does not pass that equity down to its categories with any density — `/shop/` is a thin listing page (93w per EVIDENCE.md) that links its categories once. Products are reached mainly via `ProductLinks` "related products" (3 per product) plus the pillar's 3-product slot.
- **Evidence:** `crawl_local.json`: shop categories `/shop/{retail:3, aviation:4, education:4, manufacturing:4, security:4, corporate:5, hospitality-attire:5, medical-scrubs:5}`. 18 EN product pages avg inlinks 7.7. `/shop/` is nav-linked (149 in) but EVIDENCE.md flags it as 93-137w thin listing.
- **Fix (code):** Make the `/shop/` hub a real category-distribution node and cross-link categories from their parent industry pillar. In the shop hub page, render all 8 categories with descriptive links (not just a sparse grid), and in `ProductLinks` (`SiloLinks.tsx:176-210`) the category is already linked once — additionally link the category from the matching industry pillar's Products section header (e.g. add a "View all {category}" link beside the 3 featured products in `IndustryPillarLinks` lines 134-140):
```tsx
{products.length > 0 && (
  <ListSection title={t('products', lang)}>
    {products.map(prod => ( /* ...existing... */ ))}
    {/* NEW: link the category hub so it escapes the 3-5 inlink band */}
    <li className="pt-2">
      <Link href={`${p}/shop/${products[0].category}/`} className="text-sm font-semibold text-accent-700 hover:text-accent-600">
        {lang === 'ar' ? 'تصفّح كل المنتجات ←' : 'Browse all products →'}
      </Link>
    </li>
  </ListSection>
)}
```
This gives each category an inlink from every pillar in its silo.
- **SF-equivalent:** Internal → filter URL contains "/shop/" → sort Inlinks ascending; Crawl Analysis → Link Score for transactional URLs.

---

### Finding 2.5 — `/quote/` parameter URLs: 100 unique `?city=`/`?product=` variants linked 216 times (crawl-budget only, correctly canonicalised — informational)
- **Severity:** low
- **Impact:** City and product pages link to pre-filled quote forms via 100 unique parameter URLs (`/quote/?city=dhahran`, `/quote/?product=scrub-set-premium`, EN+AR), generating 216 internal link instances. Per EVIDENCE.md these all carry `canonical = https://uneom.com/quote/` so they are correctly consolidated and pose **no duplicate-content risk**. The only effect is minor crawl-budget noise (Googlebot may fetch 100 param URLs that all fold to one canonical) and a small dilution of the `/quote/` link signal across param variants. Not a defect — noted for completeness.
- **Evidence:** `crawl_local.json`: 216 internal link instances to `/quote/?...`, 100 unique param URLs (`?city=` and `?product=`). EVIDENCE.md line 49 confirms canonical consolidation to `/quote/`.
- **Fix (code):** Optional. If crawl-budget tightening is desired, the param URLs are already covered by the self-referencing canonical; no action required. If you want to remove them from the crawl frontier entirely, the param can be passed via a non-crawlable mechanism, but given the site's flat depth-2 architecture and ample crawl budget, **leave as-is**.
- **SF-equivalent:** URL → "Parameters" report; Internal → filter "Address contains ?" ; Canonicals → "Canonicalised" report.

---

### What's working (genuinely strong — do not regress)
- **Zero orphans, zero true near-orphans.** Every one of the 297 pages has ≥2 inlinks (minimum = the 6 resources pages at 2). No unreachable content. (SF: Internal → Inlinks = 0 report would be empty.)
- **Flat, healthy architecture.** Max crawl depth = 2; every page reachable in ≤2 clicks via the global nav.
- **No over-linked pages / no mega-menu bloat.** Max unique internal outlinks on any page = 87 (`/ar/blog/`); only 2 pages exceed 100 raw link instances (`/blog/` and `/ar/blog/` at 103, driven by listing all posts). Nothing approaches the 100+ "diluted outlink" danger zone.
- **Clean language silos.** EN nav links the 149 EN pages, AR nav links the 148 AR pages; cross-language leakage is minimal and intentional (148 EN→AR + 443 AR→EN, the hreflang/language switcher). PageRank does not leak across languages.
- **Descriptive anchor text, near-zero generic anchors.** 0 empty/whitespace internal anchors; generic anchors ("learn more", "view all", etc.) = 7.9% of internal links. Top anchors are entity names (healthcare, hospitality, corporate, aviation) — strong topical relevance signals.
- **Exemplary external linking.** 512 of 517 external links carry `rel="noopener noreferrer"`; outbound citations point to authoritative KSA/standards bodies (SASO, SFDA, ISO, OEKO-TEX, MoH, MoE, GACA, municipalities) with descriptive anchors — excellent E-E-A-T outbound signal. The remaining 5 (Creative Commons, Content Credentials) correctly use `rel="nofollow"`.
- **Centralised, silo-aware linking engine.** `SiloLinks.tsx` is a single source of truth that prevents cross-silo link bleed by design — a rare, disciplined internal-linking architecture. The fixes above tune it; they do not replace it.

---

## Dimension 3 — URL Structure & Parameter Analysis

**Score: 9/10.** This is one of the healthiest dimensions on the site. URLs are short, lowercase, unencoded, trailing-slash-consistent, and shallow. The only parameterized surface (`/quote/?city=|industry=|product=`) is a finite, bounded set of content-prefill deep-links that is **live-verified to canonicalize back to the bare `/quote/`**, so it is NOT duplicate content — only a minor crawl-budget note. No faceted or infinite-URL risk exists anywhere. The two real (low-severity) gaps are a missing `www`→non-www safety redirect (www is NXDOMAIN) and an http→https redirect that targets an explicit `:443` host. Nothing here is breaking or degrading rankings.

### Finding 3.1 — `/quote/` param URLs are crawl-budget noise (correctly consolidated, NOT duplicate content)
- **Severity:** low
- **Impact:** 100 unique internal parameterized URLs (`/quote/?city=…`, `?industry=…`, `?product=…`, 50 EN + 50 AR) are linked as plain followed links (rel = none) from 116 pages. They all serve the identical `/quote/` form and self-consolidate via a hardcoded canonical, so there is **no indexation/duplicate-content risk** — Google will simply crawl them and fold them into `/quote/`. The only cost is a small amount of crawl budget spent re-fetching the same form 100×.
- **Evidence:**
  - Link-graph extraction of `crawl_local.json`: 100 unique `/quote/?param=` targets — `city`=48, `industry`=16, `product`=36 — all with trailing-slash form `/quote/?…` (0 in non-slash `/quote?…` form); emitted from 116 source pages, all `rel=(none)` (followed). `analysis_local.json.url_params` logs the de-duped subset (60).
  - **Live canonical verification (authoritative):** `curl https://uneom.com/quote/?city=riyadh` → `<link rel="canonical" href="https://uneom.com/quote/"/>`; `?industry=aviation` → same; `https://uneom.com/ar/quote/?product=chef-jacket-classic` → `<link rel="canonical" href="https://uneom.com/ar/quote/"/>`. Consolidation confirmed in production, not just the build.
  - **Classification — these params are tracking/prefill, NOT content-altering:** the page sets a *static* canonical (`src/app/(site)/quote/page.tsx:12` → `canonical: 'https://uneom.com/quote/'`) independent of `searchParams`; the page reads no `searchParams` (no `export const dynamic`, prerendered static); and the form `src/components/forms/QuoteFormEN.tsx:24-36` reads `industry`/`city`/`product` from submitted **form data** (`fd.get(...)`), with no `useSearchParams` URL-prefill anywhere in `src/components/forms/`. So a param variant renders byte-identical HTML to the bare page.
  - Sitemap is clean: `grep -c "quote?" sitemap.xml` = 0 — no param URLs submitted for indexing.
- **Fix (code):** Optional crawl-budget hygiene only (the canonical already protects indexation). Add a robots directive in `public/robots.txt` (or `src/app/robots.ts`) to stop bots fetching the param duplicates:
  ```
  # robots.txt — stop crawl-budget spend on quote prefill params (canonical already consolidates)
  Disallow: /quote/?*
  Disallow: /ar/quote/?*
  ```
  (Do NOT noindex them — the canonical handles indexing; a Disallow merely saves crawl. Keep the param links themselves in the UI; they are good UX.) Optionally register `city`, `industry`, `product` as "No URLs / Doesn't change page content for Google" in GSC's legacy URL-parameters tool if it resurfaces.
- **SF-equivalent:** *URL → Parameters* tab (and *URL → Contains a Space / Internal → URL: Parameters*). Screaming Frog flags every `?city=`/`?industry=`/`?product=` instance; the *Canonicals → Canonicalised* report shows them rolling up to `/quote/`.

### Finding 3.2 — No `www`→non-www redirect; `www.uneom.com` is NXDOMAIN
- **Severity:** low
- **Impact:** `www.uneom.com` does not resolve at all (`host www.uneom.com` → `NXDOMAIN`; `curl https://www.uneom.com/` → `000`/connection failure). There is no duplicate-host indexation problem (nothing is served on www), but it is a robustness gap: any inbound link, citation, or manually-typed `www.uneom.com` URL **dead-ends with a connection error instead of 301-ing to the canonical host** — losing that link equity and that visitor. For a DR≈3 site fighting for every backlink, silently dropping `www.` referrals is avoidable leakage.
- **Evidence:** `host www.uneom.com` → `Host www.uneom.com not found: 3(NXDOMAIN)`; `curl -sI https://www.uneom.com/` → exit/HTTP `000`. By contrast the apex `https://uneom.com/` serves 200.
- **Fix (code):** Add a `www` CNAME at the DNS provider pointing to the apex/App Hosting target, then a host-based 301. In `next.config.mjs` `redirects()`, prepend a host-conditioned rule:
  ```js
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'www.uneom.com' }],
    destination: 'https://uneom.com/:path*',
    permanent: true
  }
  ```
  (Or configure the redirect at the Firebase App Hosting / Cloud CDN edge if the platform strips Host before Next sees it.) This single rule future-proofs every `www.` link.
- **SF-equivalent:** *Crawl Comparison / "Crawl with www"* config + *Response Codes* tab — crawling `https://www.uneom.com/` returns "Connection Refused / DNS lookup failed" rather than a 301.

### Finding 3.3 — http→https 301 lands on an explicit `:443` host
- **Severity:** low
- **Impact:** `http://uneom.com/` 301-redirects to `https://uneom.com:443/` (the `Location` header carries the explicit `:443` port). It functionally resolves — following the redirect reaches `200 https://uneom.com:443/` in a single hop — and browsers normalise `:443` away, so there is no chain and no user-facing breakage. But the port-qualified host is cosmetically non-canonical and, in rare crawler/log edge cases, can be treated as a distinct host string. Best practice is a port-less HTTPS target.
- **Evidence:** `curl -sI http://uneom.com/` → `301 -> https://uneom.com:443/`; `curl -sIL --max-redirs 5 http://uneom.com/` → terminates at `200 https://uneom.com:443/` (one hop, no loop). HSTS `max-age=63072000; includeSubDomains; preload` is set, so HSTS-aware browsers skip the http hop entirely.
- **Fix (code):** This redirect originates at the edge/proxy (Envoy/Cloud CDN), not Next's `redirects()`. Configure the platform's HTTP→HTTPS rule to emit a port-less `Location: https://uneom.com/$1`. If it must be enforced in-app, add a host-normalising rule:
  ```js
  {
    source: '/:path*',
    has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
    destination: 'https://uneom.com/:path*',
    permanent: true
  }
  ```
  Lowest priority — HSTS preload already makes this near-invisible to real users.
- **SF-equivalent:** *Response Codes → Redirection (3xx)* and *Reports → Redirect Chains* — the `:443` target shows as the redirect destination.

### Finding 3.4 — Uppercase paths 404 instead of normalising (very low residual risk)
- **Severity:** low
- **Impact:** The site never emits uppercase or %-encoded URLs internally (0 of 297 pages, 0 of 432 link targets), so this is theoretical. But a mistyped or badly-transcribed external link such as `https://uneom.com/About/` returns a hard **404** rather than 301-ing to the lowercase canonical, dropping any equity from such a link. Acceptable given there is no evidence of uppercase inbound links today.
- **Evidence:** `curl -sI https://uneom.com/About/` → `404`. Corpus scan: `url_uppercase: []` (analysis_local.json), 0 uppercase paths and 0 `%`-encoded paths across all 297 crawled pages and all 432 internal link targets.
- **Fix (code):** Only worth doing if GSC Coverage later shows uppercase 404s. A lowercase-normalising middleware:
  ```ts
  // src/middleware.ts
  import { NextResponse } from 'next/server';
  export function middleware(req) {
    const { pathname, search } = req.nextUrl;
    const lower = pathname.toLowerCase();
    if (lower !== pathname) {
      const url = req.nextUrl.clone(); url.pathname = lower;
      return NextResponse.redirect(url, 308);
    }
  }
  export const config = { matcher: ['/((?!_next|api|images|fonts).*)'] };
  ```
  Defer unless data justifies it — adding middleware has a small perf cost on every request.
- **SF-equivalent:** *URL → Uppercase* tab (0 found internally) and *Response Codes → Client Error (4xx)* if external uppercase URLs are discovered.

### What's working
- **URL length: flawless.** 0 URLs over 115 chars; longest is 67 (`/ar/blog/airline-uniform-design-cultural-identity/`), median 49. `analysis_local.json.url_long: []`.
- **Case & encoding: flawless.** 0 uppercase paths, 0 %-encoded paths across all 297 pages and 432 link targets.
- **Trailing-slash consistency: flawless.** `trailingSlash:true` in `next.config.mjs:4`; 0 of 396 non-file internal link targets missing a trailing slash; live `/about` → 308 → `/about/` confirmed. Param URLs all use the consistent `/quote/?…` form (0 in `/quote?…`).
- **Directory depth: shallow & healthy.** Max path depth = 4, reached only by `/ar/shop/{category}/{product}/` leaf nodes; everything else ≤3. Click-depth maxes at 2 (depth0=2, depth1=75, depth2=220).
- **Parameter consolidation: correct and live-verified.** Only 3 param families exist (`city`, `industry`, `product`), all bounded by finite data arrays (24 cities + fixed industries/products), all canonicalising to `/quote/` / `/ar/quote/` in production. Form reads form-data not `searchParams`, so params don't even alter server HTML.
- **No faceted / infinite-URL risk.** Zero pagination/search/sort/filter params (`page`/`q`/`sort`/`filter`/`limit`/`color`/`size`) anywhere in the 19,109-instance internal link graph. No combinatorial URL explosion surface.
- **Duplicate-host hygiene: clean.** `/index.html` → 404 (no index duplicate); sitemap contains 0 param URLs; http→https is a single-hop 301→200; no redirect chains or loops among internally-linked pages.
- **Clean, human-readable, keyword-bearing slugs throughout** (e.g. `/locations/al-jubail/`, `/blog/healthcare-uniforms-infection-control/`), with a robust 11-layer redirect map in `next.config.mjs` normalising every legacy/alias slug to one canonical form.

---

## Dimension 4 — Page-Level On-Page Elements

The page-level layer is the weakest on-page area on the site. Three concrete defects are present at scale, all of them systematic (driven by shared templates/components, not one-off authoring mistakes), so each one is a single small fix that corrects 49–187 pages at once. Canonicals, directives and hreflang are healthy. Net score 4.5/10 — the issues are high-volume but mechanically trivial to fix.

---

### Finding 4.1 — Brand duplicated in 187/296 titles ("… | UNEOM | UNEOM" and "… — UNEOM | UNEOM") — DOUBLE-BRAND BUG
**Severity: HIGH** (degrades CTR + SERP cleanliness on 63% of the site right now; not de-indexing, so not critical)

**Impact:** Google truncates/penalises repetitive brand-stuffed titles and AI-search engines treat duplicated brand tokens as low-quality. The brand currently eats 16 chars ("| UNEOM | UNEOM") that should carry keywords, and the second occurrence pushes many titles over the pixel limit (see 4.2). This is the single most visible on-page defect.

**Evidence:** 187 of 296 HTML-200 pages render "UNEOM" twice in `<title>` (verified against `/tmp/uneom_audit/crawl_local.json`). Three patterns:
- **Pattern A — "… | UNEOM | UNEOM" (64 pages):** every `/industries/{slug}/` (8 EN + 8 AR) and every `/locations/{city}/` (24 EN + 24 AR). e.g. `/industries/education/` → "School Uniforms in Saudi Arabia — MoE-Compliant | UNEOM | UNEOM"; `/locations/mecca/` → "Mecca Uniforms — Hajj-Season Uniform Provider | UNEOM | UNEOM".
- **Pattern B — "… — UNEOM | UNEOM" (115 pages):** all `/services/{slug}/`, `/shop/{category}/`, `/shop/{cat}/{product}/`, and every AR blog/resource/case-study/product detail page. e.g. `/shop/medical-scrubs/` → "Medical Scrubs — UNEOM | UNEOM".
- **Pattern C — brand in body + appended suffix (8 pages):** `/`, `/ar/`, `/about/`, `/contact/`, `/quote/` (+AR twins).

**Root cause (two collisions):**
1. `src/app/layout.tsx:22` and `src/app/ar/layout.tsx:8` both set `title: { template: '%s | UNEOM' }`.
2. Page title strings ALSO hardcode the brand. Title maps end in `| UNEOM` (Pattern A) at `src/app/(site)/industries/[slug]/page.tsx:26-33,46`, `src/app/(site)/locations/[city]/page.tsx:23-30,44`, `src/app/ar/industries/[slug]/page.tsx:26-33,46`, `src/app/ar/locations/[city]/page.tsx:23-33,47`. And ~22 routes append `— UNEOM` (Pattern B), confirmed at: `src/app/(site)/services/[slug]/page.tsx:21,32`, `src/app/(site)/shop/[category]/page.tsx:20,30`, `src/app/(site)/resources/uniform-price-index-ksa/page.tsx:23`, `src/app/(site)/faq/page.tsx:9`, `src/app/(site)/license/page.tsx:6`, `src/app/(site)/quote/page.tsx:9`, `src/app/ar/blog/[slug]/page.tsx:18`, `src/app/ar/resources/[slug]/page.tsx:20`, `src/app/ar/case-studies/[slug]/page.tsx:20`, `src/app/ar/services/[slug]/page.tsx:21,32`, `src/app/ar/shop/[category]/page.tsx:20,30`, `src/app/ar/shop/[category]/[product]/page.tsx:23`, `src/app/ar/industries/[slug]/page.tsx:57`, `src/app/(site)/industries/[slug]/page.tsx:57` (openGraph), `src/app/ar/{license,privacy-policy,terms-of-service}/page.tsx:7`, `src/app/ar/resources/uniform-price-index-ksa/page.tsx:14`. (The homepage also self-collides: `src/app/(site)/page.tsx:19` title ends "… Corporate Workwear" but the homepage uses `metadata.title.default` style elsewhere — the rendered "/" is "…Corporate Workwear | UNEOM" plus its own leading "UNEOM —", giving two brand tokens.)

**Fix (code) — strip every hardcoded brand suffix; let the template own the brand exactly once.** The template at `layout.tsx:22` / `ar/layout.tsx:8` already appends `| UNEOM`, so remove `| UNEOM` and `— UNEOM` from all page title strings:

```ts
// src/app/(site)/industries/[slug]/page.tsx  (and ar twin)
const titleMap: Record<string,string> = {
  healthcare: 'Healthcare Uniforms in Saudi Arabia — Medical Scrubs & Lab Coats', // was: … Lab Coats | UNEOM
  education:  'School Uniforms in Saudi Arabia — MoE-Compliant',                 // was: … MoE-Compliant | UNEOM
  // …drop the trailing " | UNEOM" from every entry
};
// line 46 fallback:
title: titleMap[slug] ?? `${industry.nameEn} Uniforms — Saudi Arabia`, // was: … | UNEOM
// line 57 openGraph: og titles ARE NOT templated, so KEEP one brand:
openGraph: { title: `${industry.nameEn} Uniforms — UNEOM Saudi Arabia`, … }
```
```ts
// src/app/(site)/services/[slug]/page.tsx, shop/[category]/page.tsx, and ALL ar/ detail routes
title: service.nameEn,            // was: `${service.nameEn} — UNEOM`
title: cat.nameEn,                // was: `${cat.nameEn} — UNEOM`
title: post.titleAr,              // ar/blog/[slug]:18 — was `${post.titleAr} — UNEOM`
title: r.titleAr,                 // ar/resources/[slug]:20
title: c.titleAr,                 // ar/case-studies/[slug]:20
title: p.nameAr,                  // ar/shop/[category]/[product]:23
```
Rule of thumb: **`metadata.title` (gets the template) must never contain "UNEOM"; `openGraph.title`/`twitter.title` (NOT templated) keep exactly one brand mention.** A safe guard for the future is to add a dev assertion or lint that fails CI if a `title:` string in a `generateMetadata`/`metadata` export contains "UNEOM".

**SF-equivalent:** Page Titles → "Same" / over-length, and the Page Titles filter for duplicated tokens (Screaming Frog flags this under *Page Titles → Multiple* / custom-search for "| UNEOM | UNEOM").

---

### Finding 4.2 — 128 titles exceed ~60 chars (homepage 98c, /ar/ 94c)
**Severity: MEDIUM** (truncation in SERP; ~33 of these go under 60c automatically once 4.1 is fixed)

**Impact:** Google truncates titles at ~580px (~60 chars Latin). 128/296 pages (43%) overflow, so the keyword-bearing tail and/or the brand is cut. Homepage and `/ar/` are both over.

**Evidence:** 128 pages with title >60c (`crawl_local.json`). Homepage `/` = 98c ("UNEOM — Saudi Arabia Uniform Company | Medical Scrubs, School Uniforms, Corporate Workwear | UNEOM"), `/ar/` = 94c. **33 of the 128 drop to ≤60c purely by removing the duplicate brand from 4.1** — so fix 4.1 first, then re-audit. The remaining ~95 are genuinely long source strings (e.g. long AR case-study/blog titles).

**Fix (code):** (1) ship 4.1. (2) For the homepage, shorten `src/app/(site)/page.tsx:19` from the 90c string to ≤60c keyword-front-loaded, e.g. `title: 'Saudi Arabia Uniform Company — Scrubs, School & Corporate'` (the template adds "| UNEOM"). (3) For data-driven long titles (blog/case-study/resource), add an optional `titleSeo`/`metaTitle` field to the data records and prefer it in `generateMetadata` (`title: post.metaTitle ?? post.title`), then author ≤55c SEO titles for the worst offenders. Prioritise the money pages (industries/locations/shop categories) over deep blog posts.

**SF-equivalent:** Page Titles → "Over 60 Characters" / "Over 561 Pixels".

---

### Finding 4.3 — 42 meta descriptions exceed 160 chars (homepage 236c; case studies up to 282c)
**Severity: MEDIUM** (snippet truncation; no ranking penalty but lost SERP real-estate/CTR)

**Impact:** Google truncates descriptions at ~155–160 chars; 42 pages (14%) overflow and lose their call-to-action tail. The worst are content/case-study pages whose `summary` doubles as the meta description.

**Evidence:** 42 descriptions >160c (`crawl_local.json`). Homepage `/` = 236c, `/ar/` = 200c, and the hub pages noted in EVIDENCE (`/industries/` 183c, `/services/` 172c, `/locations/` 174c, `/shop/` 162c). The longest are case studies: `/case-studies/factory-safety-improvement/` 282c, `/case-studies/spa-chain-rebranding/` 278c, `/case-studies/5-star-hotel-spa/` 272c — these reuse `c.summary` (`src/app/(site)/case-studies/[slug]/page.tsx:21`) verbatim as the description. Only 1 description is <70c; 0 missing; 0 duplicate groups.

**Fix (code):** (1) Homepage — trim `src/app/(site)/page.tsx:20` to ≤155c, e.g. `description: COMPANY_STATS.activeClients + '+ Saudi enterprises trust UNEOM for scrubs, school, chef, safety & corporate uniforms — serving all 24 cities.'` (2) For case-studies/blog/resources, add a dedicated `metaDescription`/`metaDescriptionAr` field (≤155c) to the data records rather than reusing `summary`, and read it in `generateMetadata`: `description: c.metaDescription ?? c.summary`. (3) Trim the six hub-page descriptions in their `page.tsx` `metadata` exports to ≤155c. Affects 42 pages; ~2 hours of copywriting.

**SF-equivalent:** Meta Description → "Over 160 Characters" / "Over 985 Pixels".

---

### Finding 4.4 — 49 hub/listing pages have NO H1 (root cause: SectionHeader renders `<h2>`)
**Severity: HIGH** (every top-of-funnel category/hub page lacks its primary heading signal)

**Impact:** These 49 are the most important navigational/category pages on the site (industries hub, locations hub, shop + 9 shop categories, services hub, blog + 6 blog categories, resources, case-studies, careers, contact, quote — EN + AR). An H1 is a primary on-page relevance and accessibility signal; its absence weakens topical clarity for exactly the pages meant to rank for head terms like "uniform shop", "school uniforms", "medical scrubs". Detail pages are unaffected (they have a proper H1).

**Evidence:** 49 pages with `h1_count == 0`, 0 pages with multiple H1 (`crawl_local.json`). Full list includes: `/industries/`, `/locations/`, `/services/`, `/shop/`, `/shop/{medical-scrubs,hospitality-attire,education,aviation,corporate,security,retail,manufacturing}/`, `/blog/`, `/blog/category/{aviation,corporate-education,healthcare,hospitality,manufacturing-safety,sustainability-trends}/`, `/resources/`, `/resources/uniform-price-index-ksa/`, `/case-studies/`, `/careers/`, `/contact/`, `/quote/`, and every `/ar/` twin. **Root cause:** these pages render their page hero via `<SectionHeader title={…}/>`, and `src/components/ui/SectionHeader.tsx:18` hardcodes `<h2 className={…}>{title}</h2>`. Verified: e.g. `src/app/(site)/industries/page.tsx:34`, `src/app/(site)/shop/page.tsx:33`, `src/app/(site)/contact/page.tsx:29` all pass the page's main title into `SectionHeader`, which emits `<h2>` — so the page's visually-dominant heading is an H2 and there is no H1.

**Fix (code):** add an `as` prop to `SectionHeader` so the page-hero instance can render `<h1>` while in-page section headers stay `<h2>`:
```tsx
// src/components/ui/SectionHeader.tsx
interface Props { /* …existing… */ as?: 'h1' | 'h2'; }
export function SectionHeader({ eyebrow, title, lead, align = 'start', hero = false, as = 'h2' }: Props) {
  const Heading = as;                          // 'h1' for page hero, 'h2' default
  // …
  return (
    <div className={`flex flex-col gap-5 ${alignment} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className={`${hero ? 'text-display-2xl' : 'text-display-lg'} text-navy-900 balance`}>
        {title}
      </Heading>
      {/* …lead… */}
    </div>
  );
}
```
Then on each of the 49 hub pages, pass `as="h1"` to the single top-of-page `SectionHeader` (the one currently acting as the hero), e.g. `<SectionHeader as="h1" hero title={…}/>`. This is one component change + a one-line prop on each hub page; no visual change. Verify afterwards that each hub renders exactly one H1.

**SF-equivalent:** H1 → "Missing".

---

### What's working (state it plainly)
- **Canonicals: HEALTHY.** 296/297 self-referencing, 0 point-elsewhere, 0 missing (the "1 missing" is `/sitemap.xml`, not an HTML page). `/quote/?city=X` param variants correctly consolidate to `https://uneom.com/quote/`.
- **Directives: HEALTHY.** No accidental `noindex` on any money page; `X-Robots-Tag: index, follow, max-image-preview:large, max-snippet:-1`. Blog tag pages emit `noindex,follow` by design.
- **Titles missing: 0. Descriptions missing: 0. Duplicate title/description groups: 0** — every page has a unique, hand-authored title and description.
- **H1 on detail pages: correct** — exactly one H1 on homepage, industry/[slug], city, blog, resource, case-study and shop-product pages; 0 pages with multiple H1 anywhere.
- **Heading hierarchy** is otherwise clean (no multi-H1, H2s present on hub pages so the fix is a tag swap, not new content).

---

## Dimension 5 — Image, Resource & Media Audit

**Scope verdict:** Images themselves are in excellent shape (0 missing-alt, 0 CLS-causing dimensionless images, well-optimized hand-authored AVIF/WebP heroes). The real damage is on the **resource/JS side**: the 217 KB shared First-Load chunk that loads on all 297 pages is **almost entirely the Next.js dev-overlay/devtools bundle** shipped to production — not framer-motion or icon libraries (the prompt's hypothesis is wrong; those aren't even dependencies). Secondary issues: next/image is configured but inert in production, 6 font files all preloaded ahead of the LCP image, and a static, incomplete image sitemap. Evidence below is grounded in the live production bundle (`https://uneom.com`), the local build artifacts (`.next/`), and `crawl_local.json`.

---

### Finding 5.1 — 217 KB shared JS chunk shipped to every page is dominated by the Next.js dev-overlay / next-devtools bundle (NOT a UI library)
- **Severity:** critical
- **Impact:** The `ed9f2dc4` chunk is listed in `rootMainFiles` of `.next/build-manifest.json`, so it loads on **all 297 pages**. Live transfer size = **217,776 bytes gzipped** (`curl --compressed` on `https://uneom.com/_next/static/chunks/ed9f2dc4-98f8ce472e05c280.js`; `content-length: 820317` raw). Grepping the chunk shows **42 `dev-overlay` + 40 `next-devtools` references** and a `react-refresh` reference — the development error overlay / devtools indicator (`next-devtools/dev-overlay/components/devtools-indicator/devtools-indicator.css`, `css-loader`, `.pnpm` dev paths are baked in). The dev-overlay module span covers **799 KB of the 801 KB raw chunk**. A normal React 19 + App Router client runtime is ~120-140 KB gzipped; this chunk is ~80 KB heavier purely from dev-only code. That is wasted parse/execute on first visit and every CDN-miss across the whole site → elevated TBT/INP, the #1 resource-side ranking & Core-Web-Vitals risk. The chunk IS CDN-cached (`cache-control: public, max-age=31536000, immutable`, `cdn-cache-status: hit`), so repeat visits are spared the download, but never the parse/exec.
- **Evidence:** Live `ed9f2dc4-98f8ce472e05c280.js` = 217,776 B gz / 820,317 B raw, in `rootMainFiles` (77 page refs in `app-build-manifest.json`); `grep` → `42 dev-overlay`, `40 next-devtools`, `1 react-refresh`. `package.json` deps = only `next`, `react`, `react-dom`, `@next/third-parties` (no framer-motion/lucide/heroicons/gsap — grep across `src/` returns 0 usages).
- **Fix (code):** The dev-overlay must not be in a production build — it indicates the deploy ran without a clean `NODE_ENV=production next build`, or a Next 15.1 bug leaking devtools into `rootMainFiles`. Steps:
  1. Pin/upgrade Next to a patch where devtools are excluded from prod, and ensure the Firebase App Hosting build runs production mode. In `next.config.mjs`:
  ```js
  const nextConfig = {
    reactStrictMode: true,
    devIndicators: false, // disable dev overlay indicator
    // ...
  };
  ```
  2. Verify the build command (Firebase `apphosting.yaml` / build script) is exactly `next build` with `NODE_ENV=production`, not `next dev`-derived. Note the deployed adapter reports `x-fah-adapter: nextjs-14.0.21` while `package.json` is Next 15 — a version/adapter mismatch that can mis-bundle. Align the Firebase Next adapter to 15.x.
  3. After rebuild, re-grep the shared chunk: `grep -c "next-devtools" .next/static/chunks/*.js` must be 0 in `rootMainFiles`. Target shared First-Load ≤ ~140 KB gz.
- **SF-equivalent:** Screaming Frog **JavaScript** tab + **PageSpeed Insights integration → "Reduce unused JavaScript" / "Avoid serving legacy/dev code"**; also Custom Search for `next-devtools` in JS resources.

---

### Finding 5.2 — next/image optimizer is configured but inert in production; the `/_next/image` endpoint 404s
- **Severity:** medium
- **Impact:** `next.config.mjs` configures the image optimizer (`formats:['image/avif','image/webp']`, `deviceSizes`, `minimumCacheTTL`), and the **local dev build** routes 1,772 images through `/_next/image`. But on **live production the optimizer is bypassed entirely**: the homepage HTML contains **0 `/_next/image` references and 31 raw `/images/` references**. The optimizer endpoint is broken under `trailingSlash: true` — `https://uneom.com/_next/image?url=...&w=256` → **308 redirect**, and `/_next/image/?...` (slash) → **404** with `cache-control: private, no-store`. The header logo (`<Image src={logoImg} priority>`) therefore serves the **unoptimized static original** `src="/_next/static/media/logo.b2459592.webp"` at its full 320×98 intrinsic size for a ~140px display slot. Net effect is small today because the site leans on hand-pre-optimized AVIF/WebP (well done), but it means: (a) any future `<Image>` usage silently ships unoptimized originals, and (b) `priority` images don't get responsive `srcSet` from the optimizer.
- **Evidence:** Live homepage: `grep -c '_next/image'` = 0, `grep -c 'src="/images/'` = 31. `curl -sI https://uneom.com/_next/image/?url=%2Fimages%2Fclients%2Faramco.webp&w=256&q=75` → `HTTP/2 404`, `cache-control: private, no-cache, no-store`. Logo on live: `<img ... src="/_next/static/media/logo.b2459592.webp" width="320" height="98">`.
- **Fix (code):** Either (a) make next/image work behind Firebase + `trailingSlash` by adding a rewrite exempting the optimizer, or (b) drop next/image and standardize on the existing `ResponsiveImage` `<picture>` component. Recommended (b), since pre-optimization is already the site's strategy. For the logo specifically, replace the next/image `<Image>` in `src/components/layout/Header.tsx:25` with a plain `<img>` pointing at a ~280w webp (2× of 140px):
  ```jsx
  <img src="/images/logo.webp" alt="UNEOM Logo" width={280} height={86}
       className="w-auto h-7 sm:h-9 object-contain ..." loading="eager" fetchPriority="high" decoding="async" />
  ```
  If keeping next/image, add to `next.config.mjs` `rewrites()`: `{ source: '/_next/image/', destination: '/_next/image' }` and verify the Firebase adapter exposes the optimizer route.
- **SF-equivalent:** Screaming Frog **Images** tab + **Response Codes → Internal → 404** (the `/_next/image/` 404s) and **PageSpeed → "Properly size images" / "Serve images in next-gen formats"**.

---

### Finding 5.3 — Six font files + GTM + logo all preloaded ahead of the LCP hero image
- **Severity:** medium
- **Impact:** The live `<head>` preloads **6 Tajawal woff2 files** (400/700/800 × latin+arabic, 58 KB total), the logo image, a webpack chunk, AND the GA4 `gtag/js` script — and the **LCP hero preload appears LAST** in the preload list. All 6 font subsets are preloaded on every page regardless of language, so EN pages eagerly download the 3 **Arabic** subsets (and AR pages the latin ones) that aren't needed for first paint. This forces ~58 KB of fonts + the GTM script to contend with the hero AVIF for early connection bandwidth, delaying LCP. `next/font` Tajawal is otherwise correctly self-hosted (`/_next/static/media/*.woff2`, `display:'swap'`, `adjustFontFallback:true` → no FOIT, minimal CLS).
- **Evidence:** Live homepage preloads (in order): 6× `as="font"` woff2, `as="image" logo.webp`, `as="script" webpack`, `as="script" gtag/js?id=G-RSQSS61R9J`, then `as="image" healthcare-pillar-hero-960.avif fetchPriority="high"` (last). Font total = 58,064 B across `.next/static/media/*.woff2`.
- **Fix (code):** Reduce eagerly-preloaded fonts and de-prioritize GTM so the LCP image wins the race. In `src/app/layout.tsx:10`, split the font so only the needed weights preload, and stop preloading all subsets:
  ```js
  const tajawal = Tajawal({
    subsets: ['arabic', 'latin'],
    weight: ['400', '700'],      // drop 800 from preload set if only used in display headings
    display: 'swap',
    variable: '--font-tajawal',
    preload: false,              // stop auto-preloading all 6 files; rely on swap
    adjustFontFallback: true
  });
  ```
  Keep the hero `<link rel="preload" as="image">` (already present) but move it to be the FIRST child of `<head>` in `layout.tsx` (before `<JsonLd>`), so it's discovered before the font preloads Next injects. GA4 via `@next/third-parties` is already `afterInteractive`; no extra preload of `gtag/js` is needed for first paint.
- **SF-equivalent:** PageSpeed Insights **"Preload Largest Contentful Paint image"** and **"Avoid chaining critical requests" / font-display** audits (surfaced in SF's PSI integration tab).

---

### Finding 5.4 — Image sitemap is a static file: incomplete coverage (81 URLs vs 297 pages) and cannot auto-update
- **Severity:** low
- **Impact:** `public/sitemap-images.xml` is a **hand-written static file** with only **81 `<url>` entries / 100 `<image:image>` nodes**, covering essentially blog hero images. The site has 297 indexable pages and 155 unique image srcs (industry heroes, city heroes, product shots, client logos), so the vast majority of images are absent from the image sitemap → reduced Google Images discovery for industry/city/product imagery. Being static, it also drifts as content is added (same staleness class as the main sitemap's hardcoded lastmod). The `<image:license>https://uneom.com/license/` reference is valid (the `/license/` page exists and was crawled — not a broken link).
- **Evidence:** `grep -c "<loc>" public/sitemap-images.xml` = 81; `grep -c "<image:image>"` = 100. Unique image srcs in crawl = 155; pages = 297. No `src/app/sitemap-images*` route → confirmed static, not generated. `/license/` present at `src/app/(site)/license/page.tsx`.
- **Fix (code):** Replace the static file with a generated route that walks the IMAGES registry (`src/lib/data/images/`) used by `ResponsiveImage`, so coverage and freshness track content. Add `src/app/sitemap-images.xml/route.ts`:
  ```ts
  import { IMAGES } from '@/lib/data/images';
  export const dynamic = 'force-static';
  export function GET() {
    const items = Object.values(IMAGES).map(img =>
      `<url><loc>https://uneom.com${img.pageUrl ?? '/'}</loc>` +
      `<image:image><image:loc>https://uneom.com${img.path}</image:loc>` +
      `<image:title>${img.alt}</image:title>` +
      `<image:license>https://uneom.com/license/</image:license></image:image></url>`
    ).join('');
    const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${items}</urlset>`;
    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
  }
  ```
  (Map each image to its hosting page; remove `public/sitemap-images.xml`.)
- **SF-equivalent:** Screaming Frog **Sitemaps** tab → "Crawl Linked XML Sitemaps" / **Images → not in sitemap**.

---

### Finding 5.5 — LCP hero `<img>` fallback hardcodes the 1920 w AVIF and uses `decoding="sync"`; testimonial avatar over-fetches
- **Severity:** low
- **Impact:** The homepage hero (`src/app/(site)/page.tsx:55-64`) provides responsive `<source srcSet>` (640/960/1440/1920) for AVIF and WebP — correct for modern browsers — but the `<img>` fallback hardcodes `src="/images/heroes/healthcare-pillar-hero.avif"` (the **1920w / ~70 KB** master, no `srcSet` on the `<img>` itself), so any engine that ignores `<picture><source>` downloads the largest variant. `decoding="sync"` on a full-viewport LCP image can block the main thread during decode on low-end devices. Separately, the `aisha` testimonial avatar is requested via next/image at `w=1920&q=75` from a 999 KB source PNG (`public/images/testimonials/aisha.png`) — heavily over-fetched for an avatar (in production this falls back to the raw file per Finding 5.2). Note: the genuinely heavy source PNGs (`cultural/*.png` 890-954 KB, `testimonials/aisha.png` 999 KB, `client-1.jpg` 545 KB) are **dormant source files — none are served raw** in the crawl (the rendered blog/cultural images resolve to pre-optimized 160 KB-class AVIFs), so they bloat the repo/deploy but not user pages.
- **Evidence:** `page.tsx:56` `src=".../healthcare-pillar-hero.avif"` (1920w, no `srcSet`/`sizes` on `<img>`), `decoding="sync"` line 61. Crawl: `aisha.webp` requested `w=1920&q=75`, `loading=lazy`. Disk: `aisha.png`=998,983 B, `cultural/hajj-umrah-hospitality.png`=912,804 B (but rendered src = `/images/blog/hajj-umrah-staff-uniforms.avif`, a separate 162 KB file).
- **Fix (code):** Add `srcSet`/`sizes` to the hero `<img>` fallback and switch decode to async (the `<source>`-supporting path already wins):
  ```jsx
  <img src="/images/heroes/healthcare-pillar-hero-1440.avif"
       srcSet="/images/heroes/healthcare-pillar-hero-640.avif 640w, /images/heroes/healthcare-pillar-hero-960.avif 960w, /images/heroes/healthcare-pillar-hero-1440.avif 1440w, /images/heroes/healthcare-pillar-hero.avif 1920w"
       sizes="100vw" alt="" role="presentation" className="h-full w-full object-cover"
       fetchPriority="high" decoding="async" width={1920} height={1080} />
  ```
  For testimonial avatars, add `sizes="64px"` (or render a ~128w pre-optimized webp directly) and prune the multi-hundred-KB source PNGs from `public/images/` (move to a non-deployed assets dir) to shrink the deploy.
- **SF-equivalent:** PageSpeed **"Properly size images"** / SF **Images** tab (oversized images) + **Largest Contentful Paint element**.

---

### What's working (verified, do not re-flag)
- **Alt text is clean:** `img_noalt=0` across all pages. The **82 empty `alt=""`** are the decorative hero `<img alt="" role="presentation">` — intentional and WCAG-correct. Do not flag.
- **Zero CLS from images:** `img_nodims=0` — every `<img>` carries explicit `width`/`height` (enforced by `ResponsiveImage.tsx:71-72` and hardcoded on heroes). Excellent.
- **Heroes are well-optimized AVIF** with full responsive sets (640/960/1440/1920) and WebP fallback; sizes 23-86 KB. The healthcare hero LCP preload (`-960.avif`) is present on live and matches a real srcset candidate.
- **`ResponsiveImage` is a solid single-source component:** AVIF-primary + WebP `<picture>`, per-priority `loading`/`fetchPriority`/`decoding`, emits `ImageObject` JSON-LD for hero/product/city categories.
- **Static `/images/` assets cache perfectly:** live `cache-control: public, max-age=31536000, immutable`, `cdn-cache-status: hit` (config rule `next.config.mjs:42`).
- **Fonts are self-hosted via next/font** (Tajawal, 6 woff2 in `/_next/static/media/`, `display:'swap'`, `adjustFontFallback`) — no third-party font origin, no FOIT.
- **GA4 is the only third-party** (`G-RSQSS61R9J` via `@next/third-parties`, `afterInteractive`, CSP-allowlisted) — minimal third-party surface.
- **OG/social images valid:** `uneom-og-image.jpg` 49 KB (1200×630), `uneom-social-share.jpg` 12 KB — both exist and serve 200.
- **No external/3rd-party image hosts** — `img-src` is first-party; 0 hotlinked images in the crawl.

---

## Dimension 6 — Code Architecture & Rendering Integrity

**Verdict: architecturally strong.** Every route is statically pre-rendered (SSG), content is fully present in raw HTML (no JS-rendering risk for Google/AI crawlers), the dependency tree is minimal (4 prod deps), and over-client-ization is a non-issue (6 of 80 components are client). The defects are operational, not structural: (1) middleware needlessly running on the static homepage is the root cause of the `no-store` CDN-bypass flagged in the caching dimension, (2) the API rate-limiter is functionally inert on multi-instance hosting, and (3) error/404 boundaries are EN-only. Score is held at 7.5 by those plus the heavy-but-irreducible 339 kB shared runtime.

---

### Finding 6.1 — Middleware runs on the statically-prerendered homepage → forces `no-store`, defeats CDN caching
- **Severity:** high
- **Impact:** The homepage `/` (and `/ar` via the markdown branch) is built as a static prerender — confirmed: `.next/server/app/index.html` (30 KB) and `ar.html` (233 KB) exist, and `/` + `/ar` are in `prerender-manifest.json` `routes` (not `dynamicRoutes`). But `src/middleware.ts:121-123` sets `matcher: ['/', '/api/:path*']`, so **every** homepage request executes middleware. The Firebase App Hosting adapter cannot serve a route that passes through middleware from the immutable CDN tier, which is why live `/` returns `cache-control: no-store`, `cdn-cache-status: miss` despite `x-nextjs-prerender: 1` (EVIDENCE Dimension 8/10). Result: the single most important page re-serves from origin on every hit (cold TTFB ~2.2s) instead of from Cloud CDN. The middleware only does anything on `/` when `Accept: text/markdown` is present (a rare AI-agent header); for 99.9% of human/Googlebot requests it runs `NextResponse.next()` for nothing.
- **Evidence:** `src/middleware.ts:78-119` (returns `NextResponse.next()` for normal `/` GETs); matcher `['/', '/api/:path*']` at `src/middleware.ts:122`; build `middleware-manifest.json` confirms matcher `originalSource: "/"`; homepage present in `prerender-manifest.json` `routes` as static; EVIDENCE: live `/` `cache-control: no-store` + `x-nextjs-prerender: 1`.
- **Fix (code):** Remove `/` from the middleware matcher and gate markdown negotiation on the header inside config-free routing, OR move markdown negotiation to a route handler. Minimal change:
  ```ts
  // src/middleware.ts — stop intercepting the static homepage
  export const config = {
    matcher: ['/api/:path*'],
  };
  ```
  Then serve the markdown homepage variant from a dedicated handler (e.g. content-negotiation in `src/app/(site)/page.tsx` via `headers()` check is not possible for static; instead add a tiny `/llms.txt`-style route, which already exists). After this, add an explicit cache rule for `/` in `next.config.mjs` `headers()` (currently no rule matches `/` — the `/((?!_next|api|images|fonts).*)` rule at line 65 excludes the bare root because the regex requires at least the empty capture but the adapter's `no-store` from middleware wins):
  ```js
  { source: '/', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }] },
  ```
- **SF-equivalent:** Screaming Frog → *Response Codes* tab + *Directives* / custom extraction of the `Cache-Control` response header (and the "Crawl Data → Response Headers" config) showing `/` as `no-store` vs content pages as `s-maxage=3600`.

---

### Finding 6.2 — API rate-limiter uses an in-memory Map → ineffective on 1–10 instance autoscaling, no real protection
- **Severity:** medium
- **Impact:** `src/middleware.ts:11` declares `const ipLimits = new Map<...>()` at module scope and enforces "30 req/min per IP" (`src/middleware.ts:101-116`). `apphosting.yaml` sets `minInstances: 1`, `maxInstances: 10`, `concurrency: 80` — so under load there are up to 10 isolated middleware runtimes, each with its own Map. The effective limit becomes ~30×(active instances) and resets to empty on every cold start / new instance, so a real abuser is never throttled while the counter just consumes memory. The `/api/quote` (`src/app/api/quote/route.ts`) and `/api/revalidate` endpoints are therefore effectively unrate-limited. This is a security/abuse finding, not an SEO one, but it sits in the same middleware that harms caching (6.1).
- **Evidence:** `src/middleware.ts:11,101-116`; `apphosting.yaml` `minInstances: 1 / maxInstances: 10 / concurrency: 80`; middleware also runs per-request on the Cloud Run instance (no shared store).
- **Fix (code):** Either accept it as best-effort and document it, or move to a shared store. Cheapest correct option for App Hosting is Firestore/Redis; if that's out of scope, at minimum cap memory growth and make the limit honest by noting it's per-instance. Recommended: replace the Map with Upstash/Vercel-KV-style atomic counter, e.g.:
  ```ts
  // pseudo — back the limiter with a shared KV (Redis/Firestore), key = `rl:${ip}`
  const count = await kv.incr(`rl:${ip}`);
  if (count === 1) await kv.expire(`rl:${ip}`, 60);
  if (count > 30) return NextResponse.json({ error: 'Rate limited' }, { status: 429, headers: { 'Retry-After': '60' } });
  ```
- **SF-equivalent:** Not surfaced by Screaming Frog (server-side logic). Closest: SF *Response Codes → Internal → 429* if you stress-test, but this is found by code review, not crawl.

---

### Finding 6.3 — No root `error.tsx` / `global-error.tsx`; `not-found.tsx` is EN-only and lives in the `(site)` group
- **Severity:** low
- **Impact:** There is exactly one error boundary in the app: `src/app/(site)/not-found.tsx`. (a) No `error.tsx` or `global-error.tsx` anywhere → an uncaught render error falls through to Next's stock error screen (no branded UX, no localized copy). (b) `not-found.tsx` is inside the `(site)` (English) route group with hardcoded English copy ("Page not in the operations map.") and EN-only links (`/`, `/industries/`, `/contact/`) — so a 404 under `/ar/...` renders English chrome + LTR, not the AR RTL Header/Footer. 404s aren't indexed so this is not a ranking issue, but it is an i18n/UX inconsistency for the Arabic-first audience and a missing-resilience gap.
- **Evidence:** `find src/app -name error.tsx -o -name global-error.tsx -o -name not-found.tsx` returns only `src/app/(site)/not-found.tsx`; its body is English-only (lines 1-20); no `src/app/ar/not-found.tsx`, no `src/app/not-found.tsx`, no `src/app/global-error.tsx`.
- **Fix (code):** Add (1) a root `src/app/global-error.tsx` (must render its own `<html>`/`<body>`) for catastrophic failures, and (2) an AR `not-found` — either `src/app/ar/not-found.tsx` with Arabic copy + `dir="rtl"` and AR links, or detect locale in the existing component. Minimal AR variant:
  ```tsx
  // src/app/ar/not-found.tsx
  import Link from 'next/link';
  export default function NotFoundAr() {
    return (
      <section dir="rtl" lang="ar" className="container-page section flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mt-6 text-display-lg text-navy-900">الصفحة غير موجودة.</h1>
        <Link href="/ar/" className="btn-primary mt-8">العودة للرئيسية</Link>
      </section>
    );
  }
  ```
- **SF-equivalent:** Screaming Frog → *Response Codes → Client Error (4xx)* and a manual crawl of a bad `/ar/<nonexistent>/` URL to inspect the rendered 404 language/markup.

---

### Finding 6.4 — 339 kB shared First Load JS is heavy (INP/TBT exposure), though it is the irreducible React 19 + Next 15 runtime — not over-client-ization
- **Severity:** low
- **Impact:** Every route ships 339 kB First Load JS (`routes.txt`), dominated by the 820 kB-raw / ~217 kB-gzipped chunk `chunks/ed9f2dc4-…js`. I mapped that chunk: it is **react-dom + scheduler** (string-probe found only `react-dom` ×14, `scheduler` ×6; no framer-motion, no icon set, no chart lib). The full prod dependency tree is just `next`, `react`, `react-dom`, `@next/third-parties` — there is no heavy app library to remove. Only **6 of 80 components** carry `'use client'` (`WebMCPProvider`, `LangSwitcher`, `QuoteFormEN`, `QuoteFormAR`, `MobileMenu`, `WhatsAppFloat`), so the EVIDENCE digest's "over-client-ization" hypothesis is disproven — the bundle is the React 19 runtime, not bloat. The residual risk is real on low-end mobile (TBT/INP), but the lever is `@next/third-parties` GA loading and the inline scripts in `layout.tsx`, not component refactoring. Note one micro-inefficiency: `WebMCPProvider` (`src/components/WebMCPProvider.tsx`) is a `'use client'` component that only renders a static `<script dangerouslySetInnerHTML>` — it creates a client boundary for zero interactivity and could be a plain server component.
- **Evidence:** `routes.txt` "First Load JS shared by all 339 kB"; `ls .next/static/chunks` largest = `ed9f2dc4-5c894044462a248b.js` 820 KB raw; `grep` of that chunk = react-dom/scheduler only; `grep -rl "use client"` = 6 files / 80 `.tsx`; `package.json` dependencies = 4 packages; `src/components/WebMCPProvider.tsx:1` `'use client'` wrapping a static script.
- **Fix (code):** (1) Drop the needless client boundary — remove `'use client'` from `src/components/WebMCPProvider.tsx` (a `<script>` with `dangerouslySetInnerHTML` renders fine from a server component). (2) Keep GA via `@next/third-parties` (already `afterInteractive`). (3) Accept the React-19 runtime floor; do not chase the 339 kB further via component splitting. Optional: verify `optimizePackageImports` is actually helping — `next.config.mjs:15` only optimizes `@/lib/data/images`, which is fine.
- **SF-equivalent:** Not a Screaming Frog finding (SF doesn't measure JS bundle weight). Surfaced by the build route table / Lighthouse (TBT) / PageSpeed — SF's *PageSpeed Insights integration* tab if API-connected.

---

### Finding 6.5 — `x-fah-adapter: nextjs-14.0.21` is the Firebase adapter's own version, NOT a Next.js downgrade (investigated — benign)
- **Severity:** low
- **Impact:** The brief asked to investigate the live header `x-fah-adapter: nextjs-14.0.21` contradicting `package.json` "next: 15". **Resolved: this is a false alarm about the app.** `x-fah-adapter` reports the version of Firebase App Hosting's `@apphosting/adapter-nextjs` package (injected server-side at deploy, not a local dependency — absent from `node_modules`), whose semver is independent of Next's. The app genuinely runs **Next 15.5.18 / React 19.2.6** (verified from `node_modules/next/package.json` and `react/package.json`), and the build output is a Next-15 App Router build. The only actionable note: the Firebase adapter is on an older `14.x` release line and could be refreshed on the next deploy to pick up adapter bug-fixes, but it does not change the app's Next version or rendering. Separately, `@next/third-parties@16.2.9` paired with Next 15 looked like a mismatch but its `peerDependencies` explicitly allow `^15.0.0` (and `^16.0.0-beta.0`) — also benign.
- **Evidence:** `node_modules/next/package.json` version `15.5.18`; `node_modules/react/package.json` `19.2.6`; no `@apphosting` package in local `node_modules` (adapter is deploy-time); `node_modules/@next/third-parties/package.json` peer `next: ^13 || ^14 || ^15 || ^16.0.0-beta.0`.
- **Fix (code):** No code change required. Optional ops hygiene — pin/refresh the App Hosting Next adapter on redeploy (Firebase manages this; ensure the build uses the latest `@apphosting/adapter-nextjs`). Optionally bump `@next/third-parties` to a Next-15-aligned `15.x` to avoid future confusion: `npm i @next/third-parties@^15`.
- **SF-equivalent:** Screaming Frog → *Crawl Data → Response Headers* (custom header capture of `x-fah-adapter`) — useful to confirm, but interpretation requires knowing it's the adapter version.

---

### What's working
- **100% SSG / pre-rendered.** Both homepages are static (`index.html` 30 KB, `ar.html` 233 KB exist in the build); all 18 dynamic param routes use `generateStaticParams` + `dynamicParams = false`, so every URL is materialized at build time — zero runtime SSR, no ISR drift, no CSR shell. `prerender-manifest.json` lists 301 prerendered routes.
- **Content is in raw HTML.** The static homepage markup contains full prose and headings (10,446 words of markup, 225 content-marker hits) — Google and AI crawlers receive complete content with no JS-execution dependency. JS-rendering diff risk = none.
- **Not over-client-ized.** Only 6 of 80 components are `'use client'`; the rest are server components. The 339 kB bundle is the React 19 runtime, not app bloat.
- **Minimal, clean dependency tree.** 4 production dependencies (`next`, `react`, `react-dom`, `@next/third-parties`) — no heavy client libraries (no framer-motion, icon packs, chart/3D libs) to bloat or de-optimize.
- **Correct rendering config.** `reactStrictMode: true`, `trailingSlash: true`, `poweredByHeader: false`, `removeConsole` in prod, modern image formats (AVIF/WebP) — sensible `next.config.mjs`.
- **API routes are reasonably defended.** `/api/revalidate` is secret-gated (`REVALIDATE_SECRET`), `/api/quote` validates required fields + email regex + honeypot, `/api/ai-feed/[city]` is bot-gated and returns 403/404 correctly. `robots.txt` disallows `/api/revalidate` and `/api/admin/`. (Only the rate-limiter mechanism is weak — finding 6.2.)
- **Static-asset caching is correct** at the config layer: `/images/*`, `/_next/static/*`, `/fonts/*` all `max-age=31536000, immutable` in both `next.config.mjs` and `firebase.json`.
- **Genuinely on Next 15.5.18 / React 19** — no hidden version regression despite the `x-fah-adapter` header.

---

## Dimension 7 — Structured Data & Knowledge Graph

**Score: 5.5/10.** Schema *coverage* is genuinely excellent — 17+ types correctly modelled with a real `@id` graph (`#organization` / `#website` cross-referenced everywhere). But two issues are actively dangerous: every one of the 36 Product nodes ships a **fabricated, identical AggregateRating + a self-authored Review** with zero underlying data — a Google review-spam policy violation that risks a structured-data manual action and rich-result suppression across the entire shop. Layered on top is severe **`areaServed` City/GeoCoordinates bloat** (7,456 City + 7,448 GeoCoordinates nodes site-wide, ~25/page, ~50 on Service pages) that adds payload and graph noise with no rich-result upside. The single fabricated-rating issue alone caps this dimension below 6.

Evidence base: `src/lib/seo/schemas.ts` (read in full), root injection at `src/app/layout.tsx:90`, and the live JSON-LD type census from `/tmp/uneom_audit/crawl_local.json` (296 HTML pages).

---

### Finding 7.1 — Fabricated AggregateRating + self-authored Review on all 36 Product nodes
- **Severity:** critical
- **Impact:** `productSchema()` hardcodes `aggregateRating { ratingValue: '4.8', ratingCount: '127', reviewCount: '89' }` and a 5-star `review` authored by `"UNEOM Procurement Team"` — **identical on every product**. Grep of `src/lib/data/products/` returns **zero** `ratingValue`/`reviewCount`/`reviewBody` fields, so there is no real review data behind these numbers. This violates Google's structured-data review policy on two counts: (a) ratings not generated from genuine user reviews, and (b) self-serving reviews (the seller reviewing its own product — `review.author` is an Organization that resolves to UNEOM). This is the kind of pattern that triggers a "Marked up content not visible to users" / review-spam **manual action**, which can suppress *all* rich results sitewide, not just product stars.
- **Evidence:** `src/lib/seo/schemas.ts:431-446` (the hardcoded `aggregateRating`/`review` block). Live crawl confirms it renders on **36 pages** (`AggregateRating: 36`, `Review: 36`, `Rating: 36` in `crawl_local.json`) — 18 products × EN/AR. No per-product rating source exists: `grep -rn "ratingValue\|reviewCount" src/lib/data/products/` → 0 matches.
- **Fix (code):** Remove fabricated rating/review entirely until real, displayed reviews exist. In `productSchema()` delete the `aggregateRating` and `review` blocks (lines 431-446) OR gate them behind real data passed in via `ProductSchemaOpts`:
```ts
// ProductSchemaOpts: add  rating?: { value: number; count: number; reviewCount: number };
...(opts.rating ? {
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(opts.rating.value),
    bestRating: '5',
    ratingCount: String(opts.rating.count),
    reviewCount: String(opts.rating.reviewCount)
  }
} : {}),
// delete the hardcoded `review:` object outright — a vendor cannot review its own product.
```
Only re-add ratings once each product carries on-page, user-visible reviews that match the markup.
- **SF-equivalent:** Structured Data tab → "Product" + validation panel "AggregateRating/Review" warnings; Search Console → Enhancements ▸ Product snippets / Merchant listings (and Manual Actions report for the spam risk).

---

### Finding 7.2 — `areaServed` City + GeoCoordinates bloat (7,456 City + 7,448 GeoCoordinates nodes)
- **Severity:** high
- **Impact:** `organizationSchema()` maps the full 24-city `SAUDI_CITIES` list into `areaServed`, each with a nested `GeoCoordinates` (`schemas.ts:58-62`). Because Organization is injected in the **root layout** (`src/app/layout.tsx:90`), this array renders on **all 296 pages**. Census: **City = 7,456** and **GeoCoordinates = 7,448** nodes site-wide (~25/page). It compounds on Service pages — `serviceSchema()` *also* maps all 24 cities (`schemas.ts:164`) — so `/services/*` pages carry **48 City nodes** (confirmed `City: 48` on `/services/fabric-selection/`), and Location pages carry **26 GeoCoordinates**. This inflates every HTML payload, dilutes the entity graph with repetitive geo nodes, and is exactly the kind of mass-duplicated location markup that reads as a thin "spam signal" to Google's structured-data classifiers — with **no** corresponding rich result (Organization `areaServed` produces no SERP feature).
- **Evidence:** `schemas.ts:58-62` (Organization `areaServed`), `schemas.ts:164` (Service `areaServed`); `crawl_local.json` type totals: `City 7456`, `GeoCoordinates 7448`; per-page City distribution: 24 nodes on 266 pages, 48 nodes on 14 Service pages. `localBusinessSchema` already provides the *correct* per-city geo on `/locations/[city]/`, making the global broadcast redundant.
- **Fix (code):** Stop broadcasting the full city list on every page. Replace the geo-heavy `areaServed` on the Organization with a single `Country`, and drop `areaServed` from `serviceSchema` (city relevance already lives on the location pages):
```ts
// schemas.ts organizationSchema(): replace lines 58-62
areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
// schemas.ts serviceSchema(): delete line 164 (areaServed: SAUDI_CITIES.map(...))
```
If you want to retain city signals for AI search, keep them ONLY on `/locations/` pages via `localBusinessSchema` (already per-city and correct) and `/locations/` `ItemList`.
- **SF-equivalent:** Structured Data tab → Organization node size / "areaServed" item count; Custom Extraction (count `"@type":"City"` per URL) to quantify the per-page node explosion.

---

### Finding 7.3 — Product `Offer` missing `priceValidUntil` (and uses `AggregateOffer` with no concrete price/availability date)
- **Severity:** high
- **Impact:** `productSchema()` emits `offers: { '@type': 'AggregateOffer', lowPrice, priceCurrency: 'SAR', ... }` with **no `priceValidUntil`** anywhere in the codebase (`grep -rn "priceValidUntil" src/` → 0). Google's Merchant-listing/Product-snippet validator flags missing `priceValidUntil` as a warning and, after expiry heuristics, can drop the price from the rich result. On 36 product pages this means degraded/at-risk product snippets.
- **Evidence:** `schemas.ts:411-430` (`AggregateOffer` block); zero `priceValidUntil` in repo; crawl shows `AggregateOffer: 36`, `OfferShippingDetails: 36` (shipping is well-modelled, which makes the missing price-validity field the conspicuous gap).
- **Fix (code):** Add a rolling `priceValidUntil` to the AggregateOffer:
```ts
offers: {
  '@type': 'AggregateOffer',
  priceCurrency: 'SAR',
  lowPrice: opts.priceFrom,
  priceValidUntil: new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10),
  offerCount: opts.sizes.length * opts.colors.length,
  availability: 'https://schema.org/InStock',
  ...
}
```
- **SF-equivalent:** Structured Data tab → "Product" validation warnings ("Missing field priceValidUntil"); GSC ▸ Merchant listings.

---

### Finding 7.4 — AR pages (148) carry an English-only Organization node
- **Severity:** medium
- **Impact:** The AR layout (`src/app/ar/layout.tsx`) does **not** inject a localized Organization — all 148 Arabic pages inherit the root-layout `organizationSchema()`, which is English-keyed: `name: 'UNEOM'`, English `areaServed` city names, and **no `inLanguage`** on the Organization/WebSite nodes. For an Arabic-first KSA knowledge-graph target this is a missed entity-localization signal (the page declares `ar-SA` via hreflang/WebPage but the central entity speaks English). Mitigating factor: `alternateName: 'يونيوم'` is present (`schemas.ts:32`), which partially feeds the Arabic entity.
- **Evidence:** `src/app/ar/layout.tsx` (no `JsonLd`/`organizationSchema` import — confirmed by grep); `schemas.ts:26-99` Organization has no `inLanguage`; WebPage/AboutPage/ContactPage correctly localize `inLanguage` but the org does not.
- **Fix (code):** Add `inLanguage: ['ar-SA','en']` to the Organization and ensure the AR `name`/`areaServed` can render Arabic when `locale==='ar'`. Minimal version — parameterize `organizationSchema(locale)` and, in `websiteSchema`, the `inLanguage` array is already correct; for Organization add Arabic `name` when AR:
```ts
export function organizationSchema(locale: 'en'|'ar' = 'en') {
  return { ...,
    name: locale === 'ar' ? 'يونيوم' : 'UNEOM',
    alternateName: locale === 'ar' ? 'UNEOM' : 'يونيوم',
    inLanguage: ['ar-SA','en'],
    ... };
}
```
Then inject the AR variant from `src/app/ar/layout.tsx` instead of inheriting the EN root.
- **SF-equivalent:** Structured Data tab segmented by `/ar/` path → Organization `inLanguage`/`name` values; Hreflang vs JSON-LD language mismatch (manual cross-check).

---

### Finding 7.5 — Missing `@id` on BreadcrumbList, FAQPage, HowTo, Service-to-WebPage links (graph not fully stitched)
- **Severity:** low
- **Impact:** `breadcrumbSchema` (`schemas.ts:143-154`), `faqSchema` (`169-179`), and the inline product `HowTo` (`product/page.tsx:55-66`) emit **no `@id`** and are not tied to their page's WebPage node via `isPartOf`/`mainEntityOfPage`. `localBusinessSchema` has its own `@id` but is not linked to a WebPage. The graph still works (Google resolves nested nodes), but discrete `@id`s + `isPartOf` produce a cleaner, more de-duplicatable knowledge graph and help AI-search engines bind entities. Identical FAQ markup on EN+AR twins without `@id`/`inLanguage` on the FAQPage is also slightly weaker than it could be.
- **Evidence:** `schemas.ts:143-179` (no `@id` / no `inLanguage` on breadcrumb & FAQ); `crawl_local.json` shows `BreadcrumbList 293`, `FAQPage 150`, `HowTo 60` all present but standalone. Note: nested anonymous Orgs counted as "2 Organization" on 36 product + 12 blog pages are *legitimate* (review author / reviewer affiliation), not @id collisions — not a defect.
- **Fix (code):** Add page-scoped `@id` + `inLanguage` and link to WebPage:
```ts
// faqSchema(faqs, path, locale)
'@id': `${SITE}${path}#faq`,
inLanguage: locale === 'ar' ? 'ar-SA' : 'en',
isPartOf: { '@id': `${SITE}${path}#webpage` },
// breadcrumbSchema(items, path)
'@id': `${SITE}${path}#breadcrumb`,
// localBusinessSchema: add  isPartOf: { '@id': `${SITE}/locations/${slug}/#webpage` }
```
- **SF-equivalent:** Structured Data tab → node `@id` coverage; Validation panel "no @id / not connected" informational notes.

---

### Finding 7.6 — No VideoObject schema despite video-eligible content
- **Severity:** low
- **Impact:** `grep -rn "VideoObject" src/` → **0**. The structured-data layer covers Article/Product/HowTo/FAQ comprehensively but emits no `VideoObject`, so any product/process videos are invisible to Google Video and AI-search video citation. This is an opportunity gap, not a defect — only actionable if real video assets exist.
- **Evidence:** Zero `VideoObject` in repo; absent from the full `crawl_local.json` type census (which lists 50+ types).
- **Fix (code):** When product/process videos exist, add a `videoSchema()` generator and attach `VideoObject` to the relevant `HowTo`/`Product` (`hasPart` or `video`), with `name`, `thumbnailUrl`, `uploadDate`, `contentUrl`/`embedUrl`.
- **SF-equivalent:** Structured Data tab → absence of "VideoObject"; GSC ▸ Videos report (empty).

---

### What's working
- **Broad, correct type coverage:** Organization, WebSite (+SearchAction/EntryPoint), WebPage, CollectionPage, AboutPage, ContactPage, BreadcrumbList (293 pages), FAQPage (150), Article + Person `author` + `reviewedBy` (E-E-A-T), Product + AggregateOffer + OfferShippingDetails + MerchantReturnPolicy + WarrantyPromise, LocalBusiness (48 location nodes), Service, HowTo (60), JobPosting, SpeakableSpecification (82), Dataset/DataDownload. Only 1 page lacks JSON-LD (`/sitemap.xml`, correct).
- **Solid `@id` entity graph:** `#organization` and `#website` are consistently cross-referenced via `publisher`/`provider`/`about`/`isPartOf`/`mainEntity`/`seller`/`manufacturer` across WebPage, Article, Product, Service, About/Contact — a genuinely good central-entity model.
- **Strong Organization identity for KSA knowledge graph:** verified CRN + VAT as `PropertyValue identifier` with authoritative gov URLs (mc.gov.sa, zatca.gov.sa), `hasCredential` (ISO 9001 + OEKO-TEX), `foundingDate 2013`, `PostalAddress`, two `ContactPoint`s, `sameAs` (LinkedIn/Twitter/Instagram), `knowsAbout`, `alternateName: 'يونيوم'`.
- **Product schema depth (where not fabricated):** `sku`/`mpn`, `brand`, `material`, `countryOfOrigin`, `OfferShippingDetails` with handling/transit times, `hasMerchantReturnPolicy` and `hasWarranty` linked by `@id` — well above competitor baseline.
- **Speakable + Article E-E-A-T:** blog Articles carry `SpeakableSpecification`, `author` Person with `worksFor`, optional `reviewedBy` Person with `memberOf` — good for AI-search/voice citation.
- **Valid SearchAction** on every page via WebSite `potentialAction` (sitelinks search box eligible).

---

## Dimension 8 — Core Web Vitals (millisecond)

UNEOM's CWV foundation is mixed: the image layer is genuinely well-engineered (AVIF heroes 23–71KB, every `<img>` has explicit `width`/`height` so CLS is structurally near-zero, `next/font` Tajawal with `display:swap` is self-hosted so there is no render-blocking font CSS and no FOIT). But the LCP optimization that the layout *intends* to deliver is broken in three concrete ways: the single hardcoded hero preload is wrong on ~294 of 296 pages, the preload doesn't even match the responsive `<picture>` on the 2 pages it targets, and 130 location/blog pages ship full-1920px LCP images to mobile despite responsive variants existing on disk. On TTFB, the live homepage is `no-store` + CDN-miss (~2.2s cold) because no `next.config` header rule covers `/`. The 339KB shared JS is a real INP/TBT weight but — verified against `package.json` — it is the React 19 + Next 15 framework floor, not library bloat, so it is largely irreducible without architectural change. Net: the building blocks are good, but the headline LCP/TTFB levers are misconfigured.

### Finding 8.1 — Hero preload is hardcoded to one image; wrong on ~294 of 296 pages
- **Severity:** high
- **Impact:** `src/app/layout.tsx:81-87` injects `<link rel="preload" as="image" href="/images/heroes/healthcare-pillar-hero-960.avif" fetchPriority="high">` into the `<head>` of **every** route (root layout = all 296 HTML pages). Only 2 pages (`/` and `/ar/`) actually use that image as their LCP. The other ~294 pages render a *different* LCP hero with its own `fetchPriority="high"`: 16 industry-detail pages use `/images/heroes/{industry}-pillar-hero.avif` (corporate, aviation, manufacturing, security, retail, hospitality, education — confirmed `src/app/(site)/industries/[slug]/page.tsx:104-109` + `src/lib/data/industries/*.ts:34`), 48 location pages use `/images/cities/hero-{slug}.avif` (`src/app/(site)/locations/[city]/page.tsx:88-93`), 82 blog posts use `/images/{post.hero}.avif` (`src/app/(site)/blog/[slug]/page.tsx:90`). On all of those, the browser eagerly downloads the 34.5KB healthcare image that is never rendered, stealing bandwidth/connection priority from the real LCP element → slower LCP on the highest-value money pages (industry pillars + city pages).
- **Evidence:** `grep healthcare-pillar-hero src/` → preload at `layout.tsx:83` is the ONLY hero reference outside the homepage; 16 industry + 48 location + 82 blog detail pages each declare a distinct hero. Hero byte size verified: `healthcare-pillar-hero-960.avif` = 34,495 bytes wasted per non-home page load.
- **Fix (code):** Remove the global preload from `layout.tsx` and emit a route-correct preload per template via Next's metadata `other`/a `<head>` `<link>` in each page, or generate it from the page's own hero data. Minimal version — delete lines 80-87 of `src/app/layout.tsx` and add to each hero-bearing page (homepage example shown):
  ```tsx
  // src/app/(site)/page.tsx (and ar/page.tsx) — inside the returned <head>/JSX top
  <link rel="preload" as="image" type="image/avif" fetchPriority="high"
        imageSrcSet="/images/heroes/healthcare-pillar-hero-640.avif 640w, /images/heroes/healthcare-pillar-hero-960.avif 960w, /images/heroes/healthcare-pillar-hero-1440.avif 1440w, /images/heroes/healthcare-pillar-hero.avif 1920w"
        imageSizes="100vw" />
  ```
  For `industries/[slug]`, `locations/[city]`, `blog/[slug]`: build the preload from the same `heroImage`/`city.slug`/`post.hero` value the `<img>` uses, so the preload always matches the rendered LCP.
- **SF-equivalent:** Screaming Frog → **PageSpeed** tab (integrate PSI API): "Preload Largest Contentful Paint image" + "Largest Contentful Paint element" opportunities; also visible as an unused/orphaned resource in the **Crawl Data → Response** rendered-resource list.

### Finding 8.2 — Homepage preload does not match its own responsive `<picture>` → wasted/duplicate fetch
- **Severity:** medium
- **Impact:** Even on `/` and `/ar/` where the healthcare hero IS correct, the preload (`layout.tsx:82-87`) points at the fixed `-960.avif` with **no `imagesrcset`/`imagesizes`/`type`**, while the rendered hero is a responsive `<picture>` with `srcSet="…640w, …960w, …1440w, …1920w" sizes="100vw"` (`src/app/(site)/page.tsx:46-54`). On any viewport where the browser's `<picture>` logic selects a candidate other than 960w (e.g. ≥1440px desktop → 1440/1920, or a 480px DPR2 phone → 960 matches by luck but a 768 DPR2 → 1440), the preload warms `-960` and the page then downloads the *actually-selected* variant. That is a redundant 34.5KB fetch competing with the real LCP on the two most-trafficked pages.
- **Evidence:** Preload markup `layout.tsx:82-87` has only `href` (no `imageSrcSet`); rendered hero `page.tsx:46-54` is responsive `srcSet` + `sizes="100vw"`. A correct preload for a responsive image MUST mirror `imagesrcset`+`imagesizes` (per HTML spec, otherwise the preloaded candidate may not be reused).
- **Fix (code):** Use the `imageSrcSet`/`imageSizes` form shown in 8.1's fix so the preloaded candidate is the same one `<picture>` selects. Add `type="image/avif"` so non-AVIF browsers skip it.
- **SF-equivalent:** Screaming Frog → **PageSpeed** tab: "Preload LCP image" flagged as present-but-ineffective; **Rendered Page / Network** shows two hero requests.

### Finding 8.3 — 130 location + blog LCP heroes ship full-1920px AVIF to mobile (no width-descriptor srcSet)
- **Severity:** high
- **Impact:** The 48 location pages (`locations/[city]/page.tsx:86-93`) and 82 blog posts (`blog/[slug]/page.tsx:88-90`) render their LCP hero as `<source srcSet={".../hero-{slug}.avif"}>` / `<source srcSet={"${post.hero}.avif"}>` — a **single URL with no `w` descriptor and no `sizes`**, so every device (including 360px phones) downloads the full 1920px master. Responsive variants already exist on disk and are simply not referenced: `public/images/cities/hero-riyadh-640.avif` / `-960` / `-1440` all present; `public/images/blog/*-640.avif` (20 families) present. Riyadh's full hero is 37.9KB vs the 640 variant being a fraction of that. This inflates mobile LCP on KSA's overwhelmingly mobile B2B audience across 130 indexable pages — directly the opposite of the homepage's (otherwise good) responsive approach.
- **Evidence:** `ls public/images/cities/ | grep riyadh` → `hero-riyadh-640.avif, -960.avif, -1440.avif` exist; code references only `hero-riyadh.avif` (37,921 bytes). `ls public/images/blog/ | grep -c '\-640'` → 20 responsive blog families exist but `blog/[slug]/page.tsx:90` uses only `${post.hero}.avif`. (Note: some blog heroes e.g. `advanced-fabrics-healthcare-uniforms.avif` have NO responsive variant at all → generate those too.)
- **Fix (code):** Mirror the homepage pattern. Location page:
  ```tsx
  <source type="image/avif" sizes="100vw"
    srcSet={`/images/cities/hero-${city.slug}-640.avif 640w, /images/cities/hero-${city.slug}-960.avif 960w, /images/cities/hero-${city.slug}-1440.avif 1440w, /images/cities/hero-${city.slug}.avif 1920w`} />
  ```
  Blog page (same shape with `${post.hero}-640.avif … 640w, …`). Ensure every referenced `-640/-960/-1440` variant is generated; for blog heroes lacking variants, add them to the image build step.
- **SF-equivalent:** Screaming Frog → **PageSpeed** tab: "Properly size images" / "Improve image delivery"; also **Images** tab shows the single oversized source per page.

### Finding 8.4 — Homepage (and any route without a header rule) is `no-store` on live → ~2.2s cold TTFB
- **Severity:** high
- **Impact:** Live `/` returns `cache-control: no-store` with `cdn-cache-status: miss` while `x-nextjs-prerender: 1` (verified in EVIDENCE.md against production). The page is statically prerendered by Next but the Firebase/Cloud CDN is told `no-store`, so it is never edge-cached: every visit (and every Googlebot/AI-crawler hit) re-fetches from origin → ~2.2s cold TTFB vs ~0.18s warm. `next.config.mjs` `headers()` has a catch-all `/((?!_next|api|images|fonts).*)` rule (line 65) giving `s-maxage=3600, swr` — but on live, `/` is not benefiting (the homepage's per-route `no-store` wins). TTFB is a direct LCP input; a 2s TTFB caps the LCP ceiling regardless of the image work above. (Blog pages DO cache: `/blog/:path*` → `s-maxage=3600, swr`, `cdn-cache-status: hit`.)
- **Evidence:** EVIDENCE.md §CACHING: live `/` → `cache-control: no-store`, `cdn-cache-status: miss`, `x-nextjs-prerender:1`, `x-nextjs-cache: HIT`; cold ~2.2s / warm ~0.18s. `next.config.mjs:64-67` catch-all exists but no explicit `/` or `/ar/` rule (lines 76-85 only set the agent-discovery `Link` header on `/`, no Cache-Control). Local crawl masks this (origin warm, p50 40ms) — the LIVE header is authoritative.
- **Fix (code):** Add an explicit positive Cache-Control source rule for the homepage(s) in `next.config.mjs` `headers()`, placed so it isn't shadowed, and ensure the homepage route does not opt into `no-store` (check for any `export const dynamic`/`fetch(..., {cache:'no-store'})`/`revalidate` on the home page tree):
  ```js
  { source: '/', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }] },
  { source: '/ar', headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }] },
  ```
  If `no-store` originates from the route segment, set `export const revalidate = 3600` (or remove the dynamic opt-out) on the homepage segment so Next emits a cacheable header that the CDN honors. Re-verify on live with `curl -sI https://uneom.com/ | grep -i 'cache-control\|cdn-cache-status'`.
- **SF-equivalent:** Screaming Frog → **Response Codes / Crawl Data** "Cache-Control" column (no-store flagged) and **Directives**; corroborate cold TTFB via **PageSpeed** tab "Server response time (TTFB)" / "Reduce initial server response time".

### Finding 8.5 — 339KB shared First-Load JS (217KB single chunk) is an INP/TBT weight — but it is the framework floor, not bloat
- **Severity:** low
- **Impact:** Every route ships 339KB shared First-Load JS dominated by one 217KB chunk; homepage ≈349KB. On mid-range Android over Saudi mobile networks this adds parse/compile/hydrate cost → measurable TBT/INP. HOWEVER, this is mostly irreducible: `package.json` `dependencies` are only `next ^15.1.0`, `react ^19`, `react-dom ^19`, `@next/third-parties` — **zero** heavy UI libs (no framer-motion/lucide/three/chart/lottie, confirmed). The 217KB chunk is the React 19 + Next 15 App Router client runtime. The only app-level client components in the global tree are `WhatsAppFloat` and `WebMCPProvider`, and `WebMCPProvider` is a string-literal inline `<script>` (negligible JS). So there is little to code-split away; flagging low because the lever is small and the cause is structural, not negligence.
- **Evidence:** `routes.txt` → "First Load JS shared by all 339 kB"; `package.json` deps list (4 packages, no UI libs); `src/components/WebMCPProvider.tsx` is a `WEBMCP_SCRIPT` string injected as inline script; GA4 via `@next/third-parties` loads `afterInteractive` (non-blocking, `layout.tsx:103`).
- **Fix (code):** Low-yield options only: (a) keep GA4 deferred (already done). (b) Confirm `WhatsAppFloat` truly needs `'use client'` — if it's just an anchor with no state, make it a server component to drop one hydration boundary (`src/components/ui/WhatsAppFloat.tsx`). (c) Track Next minor upgrades for runtime size reductions. Do NOT chase the 217KB chunk as if it were app bloat — it is the framework. (d) The inlined battery/network/speculation-rules script in `layout.tsx:106-119` runs synchronously at `</body>`; it's small but audit it doesn't block — currently fine.
- **SF-equivalent:** Screaming Frog → **PageSpeed** tab: "Reduce unused JavaScript" / "Minimize main-thread work" / "JavaScript execution time" (will report large but with low unused-% given it's framework code).

### What's working
- **CLS is structurally solid:** every `<img>` carries explicit `width`/`height` (homepage hero `width={1920} height={1080}`, location `1920×800`, blog `1920×1080`); `img_nodims: 0` across all 297 pages. Heroes use `decoding="sync"` + `fetchPriority="high"` on the LCP element.
- **Fonts are optimal:** single `next/font/google` Tajawal (`layout.tsx:10-16`) with `display:'swap'` + `adjustFontFallback:true`, self-hosted by Next → no render-blocking external font CSS, no FOIT, minimal font-swap CLS. No need to preconnect `fonts.gstatic.com` (correctly absent — fonts are first-party).
- **Image format/optimization:** hand-authored AVIF + WebP `<picture>` heroes, 23–71KB; `next.config.mjs:42-51` sets `images/*`, `_next/static/*`, `fonts/*` → `max-age=31536000, immutable`. Long-cache static assets are correct.
- **LCP preload exists and uses correct primitives** (`rel=preload as=image fetchPriority=high type=image/avif`) — the mechanism is right, only the targeting/responsiveness (8.1–8.3) is wrong.
- **Lean dependency tree** (4 prod deps) means no third-party JS bloat to untangle; INP risk is framework-floor, not app debt.
- **Content pages cache well on live:** `/blog/:path*` → `s-maxage=3600, swr`, `cdn-cache-status: hit`; static asset and font caching immutable.
- **GA4 loads non-blocking** via `@next/third-parties` (`afterInteractive`), not in the critical path.
- **Resource hint present:** `preconnect` to `https://wa.me` (`layout.tsx:89`) warms the WhatsApp CTA connection.

---

## Dimension 9 — Crawl Efficiency & Indexation

**Score: 7/10.** Indexation hygiene is genuinely strong: the sitemap and the crawlable corpus are in near-perfect 1:1 alignment (298 `<loc>` ↔ 296 indexable 200 HTML pages), there is zero index-bloat (no noindex, no param URLs, no thin junk inside the sitemap), every page emits `index,follow`, and architecture is flat (max depth 2). The dimension is held back by one real, fully-confirmed defect — a **single hardcoded `lastmod` that is now older than the freshest content** — plus a cluster of thin listing pages bloating the indexable footprint and ~96 internally-linked `/quote/?city=` param URLs that waste crawl paths. I am also correcting a false framing in the evidence digest about Crawl-delay.

---

### Finding 9.1 — Sitemap `lastmod` is one hardcoded date, now STALE relative to live content
- **Severity:** high
- **Impact:** All 298 `<loc>` entries share one `<lastmod>2026-05-08T00:00:00.000Z`. The newest blog post is dated **2026-06-13** (`school-uniform-procurement-saudi`, committed in `8b10b9910`) and a second procurement guide dated ~2026-06-10 also shipped after that date — so the sitemap's lastmod is now OLDER than the freshest content it points to. A uniform/stale lastmod is treated by Google as an unreliable freshness signal and is effectively ignored; worse, when the declared lastmod predates real updates, Google has no signal to re-crawl the genuinely-changed pages, slowing re-indexing of new content (the exact opposite of what this site needs to win KSA + AI-search freshness). Real dates exist in the data layer but are thrown away: `src/lib/data/blog/index.ts:71-72` defines `publishedAt: string; updatedAt?: string;` and all 41 post files carry real `publishedAt` (e.g. `circular-economy-uniforms.ts:11 publishedAt: '2026-02-10'`).
- **Evidence:** `src/app/sitemap.ts:19` `const lastmod = new Date('2026-05-08');` applied to every `add()` call (lines 23, 25). Live `curl https://uneom.com/sitemap.xml | grep lastmod | sort -u` → single value `2026-05-08T00:00:00.000Z` across all 298 URLs. Newest content: `grep publishedAt src/lib/data/blog/posts/*.ts | sort | tail` → `2026-06-13`. The in-file comment at `sitemap.ts:17` even claims "10" blog posts but the sitemap actually emits **41** (`grep -oE "/blog/[a-z0-9-]+/" sitemap.xml | grep -v category | sort -u | wc -l` = 41), so the loop already iterates real `BLOG_POSTS` — the dates are available at the same iteration point.
- **Fix (code):** Use real per-entity dates where they exist, fall back to build time for dateless data (industries/services/cities/products/resources/case-studies have no date field). In `src/app/sitemap.ts`:
```ts
const BUILD = new Date(); // build-time fallback for dateless entities

function add(path: string, freq, pri: number, mirrorAr = true, mod: Date = BUILD) {
  entries.push({ url: `${SITE}${path}`, lastModified: mod, changeFrequency: freq, priority: pri });
  if (mirrorAr) entries.push({ url: `${SITE}/ar${path}`, lastModified: mod, changeFrequency: freq, priority: pri });
}

// Blog posts — use real updatedAt ?? publishedAt:
for (const p of BLOG_POSTS) {
  const d = new Date(p.updatedAt ?? p.publishedAt);
  add(`/blog/${p.slug}/`, 'monthly', 0.65, true, d);
}
```
Leave `BUILD` as the fallback for the other loops (it at least advances on every deploy instead of freezing on a literal). Also backfill `updatedAt` on the handful of posts you actually revise so re-crawl signals fire.
- **SF-equivalent:** Sitemaps tab → "lastmod" column / "URLs not in Sitemap" & "Sitemap" filters; XML Sitemap audit report.

---

### Finding 9.2 — Thin shop & blog category listing pages inflate the indexable footprint (8 soft-404-risk)
- **Severity:** medium
- **Impact:** 16 shop-category pages (`/shop/{retail,aviation,security,education,manufacturing,corporate,medical-scrubs,hospitality-attire}/` × EN+AR) render 88–163 words, and 4 blog-category pages render 93–95 words — all `index,follow` and all in the sitemap (`sitemap.ts:59,65`, priority 0.75/0.7, changefreq weekly). 8 of these are below the 120-word soft-404 threshold: `/shop/retail/` 93w, `/ar/shop/retail/` 88w, `/blog/category/aviation/` 95w, `/ar/blog/category/aviation/` 93w, plus `/ar/shop/{education,manufacturing,security,aviation}/`. Weekly changefreq on near-empty listing pages tells crawlers to keep re-visiting low-value URLs, diluting crawl budget away from the 115 strong (≥1000w) money pages.
- **Evidence:** crawl word counts (`crawl_local.json`): full shop-category table 88–163w; blog-category table 93–481w. All carry `meta_robots: index, follow, max-image-preview:large, max-snippet:-1` (none noindexed). All present in sitemap with `changeFrequency: 'weekly'`.
- **Fix (code):** Two options, pick per page. (a) Thicken: add a 150–200-word unique intro block + FAQ to each category template (`src/app/(site)/shop/[category]/page.tsx`, `src/app/(site)/blog/category/[slug]/page.tsx` and AR twins) so they clear 300w and earn their index slot. (b) For any that stay thin, drop sitemap priority/freq so they stop competing for crawl budget — in `sitemap.ts:59,65` change `'weekly'` → `'monthly'` and priority `0.75/0.7` → `0.5`. Do NOT noindex the EN shop categories (they're shallow but can rank for "{industry} uniforms shop"); the empty `/blog/category/aviation/` (95w, likely 1 post) is the strongest noindex candidate.
- **SF-equivalent:** Content tab → "Low Content Pages" (Word Count < threshold) filter; Internal → near-empty pages.

---

### Finding 9.3 — ~96 internally-linked `/quote/?city=` param URLs waste crawl paths
- **Severity:** low
- **Impact:** Every city page links to `/quote/?city=${slug}` twice (a body CTA + a footer CTA), across 24 cities × EN+AR = ~96 distinct parameterized URLs that Googlebot will discover and queue for crawling. They are correctly consolidated (canonical = `https://uneom.com/quote/`, confirmed at `src/app/(site)/quote/page.tsx:12`), so this is NOT duplicate-content index-bloat — but each is a wasted crawl request that returns a page Google then discards via canonical. On a DR-3 site with limited crawl allocation this is avoidable budget leakage. (Note: these did not surface as crawled URLs in `crawl_local.json` only because the BFS crawler strips query strings — `0` param URLs fetched — but Googlebot does not strip them.)
- **Evidence:** `src/app/(site)/locations/[city]/page.tsx:121` `href={\`/quote/?city=${city.slug}\`}` and `:339` `href: \`/quote/?city=${city.slug}\``; AR twin `src/app/ar/locations/[city]/page.tsx:124,342`. Canonical consolidation: `quote/page.tsx:11-12 alternates.canonical: 'https://uneom.com/quote/'`.
- **Fix (code):** Either (a) drop the query string and pass the city via state/anchor that doesn't create a crawlable URL, or (b) explicitly disallow the param in `public/robots.txt` so the path is never crawled while the canonical still protects against any stray index:
```
User-Agent: *
Allow: /
Disallow: /api/admin/
Disallow: /admin/
Disallow: /api/revalidate
Disallow: /quote/?*city=
Disallow: /ar/quote/?*city=
```
Option (a) is cleaner long-term (keeps the link equity, removes the URL entirely); the canonical means there's no urgent indexing risk either way.
- **SF-equivalent:** URL tab → "Parameters" filter; Crawl → "Non-Indexable: Canonicalised" (params canonicalised to /quote/).

---

### Finding 9.4 — robots.txt `Crawl-delay:10` is harmless (digest framing was wrong) but worth a note
- **Severity:** low
- **Impact:** The audit brief and EVIDENCE.md framed `Crawl-delay:10` as slowing Bing/Yandex. That is **incorrect for this file** — verified against both the static source and live. `Crawl-delay: 10` is applied ONLY to three backlink/SEO crawlers (`AhrefsBot`, `SemrushBot`, `MJ12bot`), NOT to Bingbot or Yandexbot. There is no Bingbot/Yandexbot block at all, so they fall under `User-Agent: *` which has NO crawl-delay → Bing & Yandex crawl at full speed. Throttling Ahrefs/Semrush/Majestic is a deliberate, sensible bandwidth/competitive-intel choice with zero SEO downside (those bots don't affect Google/Bing rankings). So: no fix required — but the directive should not be cited as a crawl-efficiency defect.
- **Evidence:** `public/robots.txt:51-58` — `User-Agent: AhrefsBot / Crawl-delay: 10`, `SemrushBot / Crawl-delay: 10`, `MJ12bot / Crawl-delay: 10`. No `Bingbot`/`Yandex` user-agent group anywhere in the file. Live `curl https://uneom.com/robots.txt | grep -i "crawl-delay\|bingbot\|yandex"` returns 3 Crawl-delay lines and zero Bingbot/Yandex matches.
- **Fix (code):** None needed. Optional hardening: since `Crawl-delay` is non-standard and ignored by Googlebot anyway, you may leave as-is. If you ever want to fully block competitive crawlers instead of just slowing them, swap `Crawl-delay: 10` for `Disallow: /` under those three agents — but that loses your own Ahrefs/Semrush dashboards, so keep the throttle.
- **SF-equivalent:** robots.txt tab → custom robots / "Blocked by robots.txt" report.

---

### What's working (do not flag as defects)
- **Sitemap ↔ crawl alignment is excellent:** 298 sitemap `<loc>` vs 296 indexable 200 HTML pages; path-normalized diff shows only 2 sitemap-only URLs (`/faq/`, `/ar/faq/` — in sitemap, simply not reached at crawl depth ≤2) and **0 crawled pages missing from the sitemap**. No orphan-vs-sitemap mismatch.
- **Zero index-bloat:** 296/296 indexable pages emit `index, follow, max-image-preview:large, max-snippet:-1`; **0 noindex pages**, 0 param URLs, 0 thin junk inside the sitemap. Index-bloat score is essentially nil.
- **Param consolidation is correct:** `/quote/?city=X` variants all canonicalize to `/quote/` (not duplicate content).
- **Flat architecture:** max crawl depth = 2 (depth0=2, depth1=75, depth2=220) — crawlers reach everything in ≤2 hops.
- **Robots directives sound:** `Allow: /`, sensible disallows (`/api/admin/`, `/admin/`, `/api/revalidate`), both `Sitemap:` lines present (`sitemap.xml` + `sitemap-images.xml`), `Host:` set, all major AI bots (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, CCBot, OAI-SearchBot, Applebot-Extended, anthropic-ai, Bytespider, cohere-ai) explicitly allowed with `Content-Signal: ai-train=yes, search=yes, ai-input=yes`.
- **Image sitemap present:** `/sitemap-images.xml` (181 image locs, 200) with title/caption/license per image.
- **No crawl errors among internal links:** 0 4xx/5xx and 0 redirect chains found across internally-linked pages.

---

## Dimension 10 — Security Audit

**Verdict: largely healthy (7.5/10).** Transport security is excellent (HSTS preload), the full modern security-header set is present and live-confirmed, source maps are NOT exposed (404), there is no API-key/secret leak in client JS, CORS is locked to same-origin, and the redirect system is 100% static with no open-redirect vector. The gaps are: (1) a **phantom OAuth/OIDC/JWKS discovery surface** that advertises authentication endpoints which all return 404 — a misleading, unmaintained security surface; (2) **rate limiting that is unreliable in production** (per-instance in-memory map on Cloud Run); (3) the known **CSP `'unsafe-inline'`** weakening; (4) missing COEP/CORP; (5) minor version-fingerprint info disclosure. None are actively breaking SEO/indexing.

---

### Finding 10.1 — Phantom OAuth 2.0 / OIDC / JWKS surface advertises auth endpoints that all 404
- **Severity:** medium
- **Impact:** The site publishes a full, signed-looking auth discovery surface — `/.well-known/openid-configuration`, `/.well-known/oauth-authorization-server`, `/.well-known/oauth-protected-resource`, and `/.well-known/jwks.json` (a real RSA public key, `kid: uneom-2026-01`) — all returning **HTTP 200 live**. Every endpoint they point to (`/api/auth/authorize`, `/api/auth/token`, `/api/auth/register`, `/api/auth/userinfo`) **returns 404** (no `src/app/api/auth/` directory exists). This is a non-functional, unmaintained security surface: it invites agents/scanners to attempt an OAuth flow that cannot complete, publishes a public key for a signing system that issues nothing, and creates a false impression of an authenticated API. It is also reputationally risky for an E-E-A-T / AI-citation play (an AI agent reading the OIDC metadata then hitting 404s degrades trust).
- **Evidence:**
  - Live: `GET /.well-known/openid-configuration` → 200; `GET /.well-known/oauth-authorization-server` → 200; `GET /.well-known/jwks.json` → 200 (publishes RSA `n`/`e`, `kid: uneom-2026-01`).
  - Live: `GET /api/auth/authorize` → 404, `GET /api/auth/token` → 404, `GET /api/auth/register` → 404 (followed through 308 trailing-slash redirect).
  - Code: `src/app/.well-known/openid-configuration/route.ts:11-15` and `src/app/.well-known/oauth-authorization-server/route.ts:11-14` hardcode `https://uneom.com/api/auth/{authorize,token,register,userinfo}`; `src/app/.well-known/jwks.json/route.ts:9-20` publishes a static key.
  - `ls src/app/api/` returns only `ai-feed, health, og, quote, revalidate` — **no `auth/`**.
- **Fix (code):** Either remove the phantom surface or gate it until the auth backend is real. Minimal removal:
  ```bash
  rm -rf "src/app/.well-known/openid-configuration" \
         "src/app/.well-known/oauth-authorization-server" \
         "src/app/.well-known/oauth-protected-resource" \
         "src/app/.well-known/jwks.json"
  ```
  Then drop the `ucp`/`mcp` Link-header rel values that depend on auth if they reference it, and keep only the discovery files whose targets actually resolve (`/llms.txt`, `/.well-known/mcp/server-card.json`, `/.well-known/api-catalog`). If the agentic-commerce roadmap needs these stubs to stay, make them return the real endpoints by creating `src/app/api/auth/[...]/route.ts` handlers, or change the metadata to omit endpoints that do not exist yet. Do NOT publish a JWKS key for a system that signs nothing.
- **SF-equivalent:** Screaming Frog → *Response Codes → Client Error (4xx)* (the `/api/auth/*` targets surface as 404 when `.well-known` JSON is crawled with "Extract JSON/Follow internal links"); also *Custom Search / Custom Extraction* on the `.well-known` JSON bodies.

---

### Finding 10.2 — `/api` rate limiting is unreliable in production (per-instance in-memory map on Cloud Run)
- **Severity:** medium
- **Impact:** `src/middleware.ts:11` stores counters in a module-level `Map` (`const ipLimits = new Map(...)`). On Firebase App Hosting (Cloud Run), this map is **per-instance and non-persistent** — it resets on cold start and is not shared across concurrently-scaled instances. So the advertised "30 req/min per IP" control is best-effort only and trivially bypassed by spreading requests across instances or triggering cold starts. Live proof: **35 rapid `GET /api/health/` → 0 × 429** (all 200). A separate burst of **40 `POST /api/quote/` returned only 3 × 429** (37 succeeded). The exposed `/api/quote/` POST is unauthenticated (honeypot field only, no CAPTCHA), so the effective control against lead-spam / log-flooding (`console.log('[QUOTE]', ...)` at `route.ts:47`) is weak.
- **Evidence:**
  - `src/middleware.ts:11` `const ipLimits = new Map<string, { count: number; reset: number }>();` (in-memory, per-instance).
  - `src/middleware.ts:108` `else if (limit.count > 30)` — off-by-one allows 31 before triggering, minor.
  - Live: 35× `GET /api/health/` → all `200`, zero `429`.
  - Live: 40× `POST /api/quote/` → 37× `200`, only 3× `429`.
  - `src/app/api/quote/route.ts:15-54` — no auth, only honeypot (`data.website`) at line 38; logs full payload at line 47.
- **Fix (code):** Use a shared store (Upstash Redis / Firebase) for limits, or move to an edge-native limiter. Minimum hardening without infra change — add a CAPTCHA/turnstile token check and tighten the honeypot, and document the limiter as best-effort. Shared-store example:
  ```ts
  // src/middleware.ts — replace the Map with a durable store
  import { Ratelimit } from '@upstash/ratelimit';
  import { Redis } from '@upstash/redis';
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(30, '60 s'),
  });
  // ...inside middleware, for /api/ paths:
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: 'Rate limited. Try again later.' },
      { status: 429, headers: { 'Retry-After': '60' } });
  }
  ```
  And on `/api/quote/` add a Cloudflare Turnstile / reCAPTCHA verification before the `console.log`/forward.
- **SF-equivalent:** Not a native Screaming Frog report (SF does not test rate limits). Closest: *Configuration → Speed* / custom crawl-rate stress, or surface via the *Response Codes* tab only if 429s appear under SF's configured threads. Flag as out-of-band (load test).

---

### Finding 10.3 — CSP allows `script-src 'unsafe-inline'` (and `style-src 'unsafe-inline'`) — weakens XSS protection
- **Severity:** medium
- **Impact:** The live CSP (`next.config.mjs:38`) is `default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' …`. `'unsafe-inline'` in `script-src` means the CSP provides **no meaningful protection against reflected/stored XSS** — any injected inline `<script>` executes. `frame-ancestors 'none'` (anti-clickjacking) and `img-src`/`connect-src` allow-lists are good, but the script directive is the one that matters most for XSS and it is effectively open to inline. This is a known, accepted weakness (GA4 inline bootstrap), but it is the single biggest hardening opportunity.
- **Evidence:** Live header confirmed: `content-security-policy: … script-src 'self' 'unsafe-inline' https://www.googletagmanager.com …`. Source: `next.config.mjs:38`.
- **Fix (code):** Move to a nonce-based CSP and drop `'unsafe-inline'` from `script-src`. In Next 15 App Router, generate a per-request nonce in middleware and inject it into the GA4 script + the CSP header:
  ```ts
  // middleware.ts (add to the existing middleware)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // styles can keep unsafe-inline short-term
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
    "frame-ancestors 'none'", "object-src 'none'", "base-uri 'self'",
  ].join('; ');
  const res = NextResponse.next();
  res.headers.set('content-security-policy', csp);
  res.headers.set('x-nonce', nonce);
  ```
  Then attach `nonce={headers().get('x-nonce')}` to the GA `<Script>` in `layout.tsx` and **remove** the static CSP from `next.config.mjs:38` (so the dynamic nonce header wins). Also add `object-src 'none'` and `base-uri 'self'` (currently absent — both cheap XSS-hardening wins).
- **SF-equivalent:** Screaming Frog → *Security tab* → "Missing CSP" / "Unsafe CSP" checks (SF flags `'unsafe-inline'` in the Security report's CSP column).

---

### Finding 10.4 — No Cross-Origin-Embedder-Policy (COEP) or Cross-Origin-Resource-Policy (CORP)
- **Severity:** low
- **Impact:** COOP `same-origin` is set (good, isolates the browsing context), but **COEP and CORP are absent** (live grep returns only `cross-origin-opener-policy`). Without CORP, the site's own static assets carry no cross-origin embedding restriction; without COEP the page cannot reach full cross-origin isolation. For a marketing/B2B site with no SharedArrayBuffer/cross-origin-isolation requirement this is low-impact, but adding CORP is a free defense-in-depth win.
- **Evidence:** Live: only `cross-origin-opener-policy: same-origin` returned; no `cross-origin-embedder-policy` / `cross-origin-resource-policy`. Source: `next.config.mjs:34` sets COOP only.
- **Fix (code):** Add CORP (safe, no breakage) to the global `headers()` block in `next.config.mjs` (after line 34):
  ```js
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  ```
  Hold off on COEP `require-corp` unless cross-origin isolation is actually needed — it can break third-party embeds (GTM/GA) and must be tested.
- **SF-equivalent:** Screaming Frog → *Security tab* → "Missing Cross-Origin-Resource-Policy" / "Missing Cross-Origin-Embedder-Policy" header checks.

---

### Finding 10.5 — Information disclosure: `x-fah-adapter: nextjs-14.0.21` version fingerprint (and mismatch)
- **Severity:** low
- **Impact:** Every response leaks `x-fah-adapter: nextjs-14.0.21` (Firebase App Hosting adapter), giving an attacker a precise framework+version fingerprint to match against CVEs. It is also **inaccurate** (package.json is Next 15), but the fingerprint itself is the disclosure. `x-powered-by` is correctly suppressed (`poweredByHeader: false`, `next.config.mjs:5`) and `server: envoy` is generic — so this single adapter header is the only avoidable fingerprint. Low impact (patched runtime), but trivially removable.
- **Evidence:** Live (homepage AND `/blog/`): `x-fah-adapter: nextjs-14.0.21`. `poweredByHeader: false` confirmed at `next.config.mjs:5`. Header is injected by the Firebase adapter, not app code.
- **Fix (code):** It is set by the Firebase App Hosting adapter, so strip it at the edge. Add to the global `headers()` block — Next can't unset a downstream-injected header via config, so override/blank it:
  ```js
  // next.config.mjs headers() — global block
  { key: 'X-Fah-Adapter', value: '' },
  ```
  If the adapter re-adds it after Next, strip it in `middleware.ts` on the response: `res.headers.delete('x-fah-adapter')`. Cosmetic hardening only.
- **SF-equivalent:** Screaming Frog → *Security tab* ("Server header disclosure" / version-leak checks) and *Response Headers* custom extraction on `x-fah-adapter`.

---

### What's working (do NOT regress)
- **HTTPS + HSTS preload — excellent.** Live: `strict-transport-security: max-age=63072000; includeSubDomains; preload` (2-year max-age, subdomains, preload-eligible). `next.config.mjs:27`.
- **Full modern security-header set present and live-confirmed:** X-Content-Type-Options `nosniff`, X-Frame-Options `SAMEORIGIN` + CSP `frame-ancestors 'none'` (clickjacking covered twice), Referrer-Policy `strict-origin-when-cross-origin`, Permissions-Policy (camera/mic off, geo self), COOP `same-origin`. `next.config.mjs:28-34`.
- **Source maps NOT exposed:** `…/_next/static/chunks/webpack-*.js.map` → 404 (no JS source-map leak).
- **No secret / API-key exposure in client JS:** zero `NEXT_PUBLIC_*` secrets, no hardcoded keys (`AIza…`, `sk-…`, Bearer tokens). `REVALIDATE_SECRET` is server-only and correctly checked (`src/app/api/revalidate/route.ts:14`); unauthenticated POST → **401 live**.
- **No open redirect.** The 11-layer redirect system (`next.config.mjs:93-542`) is entirely static source→destination rules — no user-controlled `?url=`/`?next=`/`?redirect=` param anywhere. The only programmatic redirect (`src/app/api/quote/route.ts:54`) builds `new URL('/quote/?status=received', req.url)` with a **hardcoded path** — not attacker-controllable.
- **CORS locked down.** `GET /api/health/` and `OPTIONS /api/quote/` return **no `Access-Control-Allow-Origin`** for `Origin: https://evil.example.com` (default same-origin). No wildcard CORS.
- **Admin surface not exposed:** `/admin/` → 404, `/api/admin/` → 404 (also robots-disallowed); `poweredByHeader: false`.
- **Quote endpoint has a honeypot** (`data.website`, `route.ts:38`) — partial spam mitigation (though needs a real CAPTCHA per 10.2).

---

## Dimension 11 — AI Search Engine Optimization (AEO)

UNEOM is, by a wide margin, the most AEO-mature site in this audit. It ships a curated `llms.txt` with an explicit citation-preference block, a complete `.well-known` agentic suite (api-catalog, MCP server-card, UCP, ACP, agent-skills — all returning 200), a WebMCP provider exposing 5 navigable tools to in-browser agents, a CC-BY 4.0 first-party Dataset (the Saudi Uniform Price Index) engineered specifically for LLM citation, a globally-injected Organization+WebSite entity graph with @id cross-referencing, and Article schema carrying author/reviewer/wordCount/speakable. Content is structured for extraction: FAQPage on 5 page types, definition-lock-in blockquotes, verbatim regulator citations with source URLs, and semantic HTML throughout. The score is held back from 9–10 by a cluster of concrete, code-level defects — a 404 dataset distribution, an invalid `HowTo` schema with no steps, blog dates missing `<time>`, thin reviewer/dateModified coverage, placeholder digests, and authors that are not linkable entities.

### Finding 11.1 — Dataset declares a `data.json` distribution that 404s (broken citation asset)
- **Severity:** high
- **Impact:** The Saudi Uniform Price Index is the single best AI-citation asset on the site, and its `Dataset` JSON-LD advertises a machine-readable `DataDownload` at `/resources/uniform-price-index-ksa/data.json`. That URL returns **404**. AI agents and Google Dataset Search that follow the `contentUrl` to ingest the structured data hit a dead end, undermining the exact machine-readability the page was built to provide and risking a "broken distribution" trust penalty.
- **Evidence:** `src/app/(site)/resources/uniform-price-index-ksa/page.tsx:70-73` declares `distribution: [...{ encodingFormat: 'application/json', contentUrl: ${SITE}/resources/uniform-price-index-ksa/data.json }]`. `curl http://localhost:3200/resources/uniform-price-index-ksa/data.json` → **404**. No route handler or public file exists (`find src/app -path "*uniform-price-index*data*"` → empty). Same broken claim mirrored in `src/app/ar/resources/uniform-price-index-ksa/page.tsx`.
- **Fix (code):** Add a route handler that emits the real index as JSON. Create `src/app/(site)/resources/uniform-price-index-ksa/data.json/route.ts`:
```ts
import { NextResponse } from 'next/server';
import { INDUSTRIES } from '@/lib/data/industries';
import { INDUSTRY_STATS } from '@/lib/data/stats';

export async function GET() {
  const rows = INDUSTRIES.map(i => {
    const s = INDUSTRY_STATS[i.slug];
    return { industry: i.nameEn, slug: i.slug, avgPriceSAR: s.avgPriceSAR, leadTimeDays: s.leadTimeDays, warrantyMonths: s.warrantyMonths };
  });
  return NextResponse.json(
    { name: 'Saudi Professional Uniform Price Index 2026', license: 'https://creativecommons.org/licenses/by/4.0/',
      datePublished: '2026-04-01', temporalCoverage: '2026-Q1/2026-Q2', source: 'https://uneom.com/resources/uniform-price-index-ksa/', rows },
    { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800' } }
  );
}
```
- **SF-equivalent:** Screaming Frog **Structured Data → Validation** (broken `contentUrl`) + **Response Codes → Internal → Client Error (4xx)** when "Crawl linked JSON-LD URLs" / custom extraction of `contentUrl` is enabled.

### Finding 11.2 — `HowTo` schema on 12 resource guides emits zero `step`s (invalid; no rich result)
- **Severity:** high
- **Impact:** `guideSchema()` outputs `@type: 'HowTo'` with `name`, `description`, `image`, `author`, `publisher` — but **no `step` array**. Google's HowTo spec makes `step` required; a HowTo with no steps is invalid, will not earn the HowTo rich result, and signals low-quality/templated markup to AI parsers. This applies to all 12 `/resources/*` guide pages × 2 locales = **24 pages**.
- **Evidence:** `src/lib/seo/schemas.ts:356-368` (`guideSchema`) returns `{ '@type': 'HowTo', name, description, image, author, publisher, inLanguage }` — `grep -n "step" src/lib/seo/schemas.ts` → no match. Consumed at `src/app/(site)/resources/[slug]/page.tsx:38` and `src/app/ar/resources/[slug]/page.tsx`.
- **Fix (code):** Either (a) switch the type to `Article`/`TechArticle` (honest, always valid), or (b) emit real steps. Minimal honest fix at `schemas.ts:358`:
```ts
'@type': 'Article',   // was 'HowTo' — pages have no ordered steps
```
If guides genuinely have ordered procedures, instead add `step: opts.steps.map((s,i)=>({ '@type':'HowToStep', position:i+1, name:s.title, text:s.body }))` and thread a `steps` field through the resource data model.
- **SF-equivalent:** Screaming Frog **Structured Data → Validation → Missing required property (`step`)** under the Google HowTo feature.

### Finding 11.3 — Blog post dates are not machine-readable (`<span>` instead of `<time datetime>`) — weakest link in freshness signalling
- **Severity:** medium
- **Impact:** Blog posts are the most freshness-sensitive content type for AI engines, yet the published date renders as a plain `<span>{date}</span>` with no `<time dateTime>` wrapper — even though industry, city, and product templates all correctly use `<time dateTime={...}>`. AI extractors and Google lose the document-level machine date on exactly the pages where recency matters most. Affects all 41 EN posts and 41 AR posts.
- **Evidence:** `src/app/(site)/blog/[slug]/page.tsx:78` → `<span>{date}</span>` (date built at line 39 via `toLocaleDateString`, discarding ISO form). AR twin: `src/app/ar/blog/[slug]/page.tsx:99` → `<p ...>{date}</p>`. Contrast `src/app/(site)/industries/[slug]/page.tsx:130`, `.../locations/[city]/page.tsx:117`, `.../shop/[category]/[product]/page.tsx:119` which all use `<time dateTime={...}>`.
- **Fix (code):** In `blog/[slug]/page.tsx` line 78 replace `<span>{date}</span>` with `<time dateTime={post.publishedAt}>{date}</time>`, and if `post.updatedAt` exists add `<time dateTime={post.updatedAt}>Updated {…}</time>`. Apply the identical change in the AR template at line 99.
- **SF-equivalent:** Not a default Frog report — surfaced via **Custom Extraction** (XPath `//time/@datetime`) showing blog URLs returning empty while other templates populate it.

### Finding 11.4 — `/llms-full.txt` returns 404 (only the short index is published)
- **Severity:** medium
- **Impact:** `llms.txt` is the curated short index; the companion `llms-full.txt` (the convention for a single concatenated full-content corpus that LLM ingestion tools fetch) is missing. AI crawlers that probe for `llms-full.txt` get nothing, so UNEOM forfeits a low-cost, high-signal full-text ingestion surface for a site that has otherwise opted fully into AI training/search.
- **Evidence:** `curl -I http://localhost:3200/llms-full.txt` → **404**. `find src/app -path "*llms*"` → no route; `ls public/llms*` → only `public/llms.txt` (3.4 KB) exists. The `Link:` header (`next.config.mjs:82`) advertises `/llms.txt` as `rel="service-doc"` but not a full variant.
- **Fix (code):** Add `src/app/llms-full.txt/route.ts` that concatenates the canonical prose (industry leads + definition lock-ins, FAQ Q/A pairs, the price-index table, about copy) into one text/plain document, then add `</llms-full.txt>; rel="service-doc"` to the `Link` header in `next.config.mjs:82`:
```ts
export async function GET() {
  const body = [HEADER, ...INDUSTRIES.map(i=>`# ${i.nameEn}\n${i.definitionLockIn?.en ?? i.tagline}`), ...FAQ_TEXT].join('\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } });
}
```
- **SF-equivalent:** Not a Frog report (Frog does not check `llms.txt`); verified via direct URL fetch / list crawl of `/llms-full.txt`.

### Finding 11.5 — E-E-A-T author/reviewer coverage is thin and authors are not linkable entities
- **Severity:** medium
- **Impact:** Author/reviewer is the strongest E-E-A-T lever for AI citation, and the infrastructure exists — but it is sparsely populated and not entity-grounded. Only **6 of 41** posts carry a `reviewer` (so 35 posts render with no "Reviewed by" block and no `reviewedBy` in schema), and the author byline is plain text: there is **no author profile page**, and the `author` Person node has no `url`/`sameAs`, so the author is an unverifiable string rather than a citable entity. The About page reinforces company trust (ISO/OEKO-TEX/SASO/Maroof) but names **no people** (no founder, no leadership, no author bios).
- **Evidence:** `grep -rl "reviewer:" src/lib/data/blog/posts/` → 6 files; total posts = 41. `articleSchema` author block (`src/lib/seo/schemas.ts:494-499`) has only `name`/`jobTitle`/`worksFor` — no `url`/`sameAs`. Blog byline `src/app/(site)/blog/[slug]/page.tsx:74` is a non-linked `<span>{post.author.name}</span>`. No author route exists (`find src/app -type d -name "author"` → empty). `src/app/(site)/about/page.tsx` lists certifications but zero named individuals.
- **Fix (code):** (1) Add `url`/`sameAs` to the author Person in `schemas.ts:494`: `author: { '@type':'Person', name: opts.authorName, jobTitle: opts.authorTitle, url: ${SITE}/about/#team, worksFor: { '@id': ORG_ID } }`. (2) Make the byline a link to an `/about/#team` anchor and add a named-team/leadership section to `about/page.tsx`. (3) Backfill `reviewer` on the remaining 35 posts (or at minimum every healthcare/safety/regulatory post) so `reviewedBy` is emitted site-wide.
- **SF-equivalent:** Screaming Frog **Structured Data** tab (presence of `author`/`reviewedBy` in Article) + **Custom Extraction** counting posts whose byline lacks an `<a href>`.

### Finding 11.6 — 40 of 41 posts have `dateModified == datePublished`; sitemap has one stale `lastmod` for all 298 URLs
- **Severity:** medium
- **Impact:** AI engines weight freshness. Only **1 of 41** posts sets `updatedAt`, so `articleSchema` emits `dateModified = datePublished` on 40 posts (`schemas.ts:493`), and the sitemap stamps **all 298 URLs with one hardcoded `lastmod 2026-05-08`** that predates newer content (e.g. a post dated 2026-06-13). The net effect is a flat, unreliable freshness signal across the corpus — content that has in fact been revised looks frozen to crawlers and LLMs.
- **Evidence:** `grep -rl "updatedAt:" src/lib/data/blog/posts/` → 1 file of 41. `src/lib/seo/schemas.ts:493` → `dateModified: opts.dateModified || opts.datePublished`. `src/app/sitemap.ts` hardcodes `new Date('2026-05-08')` for every entry (per EVIDENCE.md §RESPONSE/CRAWL).
- **Fix (code):** (1) When you genuinely revise a post, set `updatedAt` in its data file so `dateModified` diverges. (2) In `src/app/sitemap.ts`, replace the constant with a per-URL date — for blog entries use `post.updatedAt ?? post.publishedAt`; for templated pages use the page/data `lastUpdated`. This also serves the `<time>` fix in 11.3.
- **SF-equivalent:** Screaming Frog **Sitemaps → "Lastmod" column** (all identical) and **Structured Data** (Article `dateModified` equals `datePublished`).

### Finding 11.7 — `agent-skills/index.json` ships placeholder all-zero digests
- **Severity:** low
- **Impact:** The agent-skills discovery index (advertised via the `Link` header and reachable at `/.well-known/agent-skills/index.json`, 200) lists 6 skills each with `digest: 'sha256:0000…0000'`. The agent-skills RFC uses the digest for integrity verification; an all-zero digest is invalid and flags the implementation as a non-verifiable stub to any agent that validates it.
- **Evidence:** `src/app/.well-known/agent-skills/index.json/route.ts:21,28,35,42,49,56` all set `digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000'`. Endpoint returns 200 (verified). Skills also point `url` at HTML pages with `type: 'skill-md'` rather than actual `.md` skill files.
- **Fix (code):** Either compute a real SHA-256 over each skill's canonical content at build time and substitute it, or — if no real skill-md artifacts back these entries — drop the `digest` field rather than ship a placeholder. Minimal: remove the six `digest` lines so the index advertises only what it can stand behind.
- **SF-equivalent:** Not a Frog report — caught by direct fetch/JSON validation of `/.well-known/agent-skills/index.json`.

### What's working (do not flag)
- **AI-crawler access is fully open and unthrottled.** `public/robots.txt` `Allow: /` for `*` and explicitly for GPTBot, Google-Extended, PerplexityBot, ClaudeBot, CCBot, OAI-SearchBot, Applebot-Extended, anthropic-ai, Bytespider, cohere-ai, each with `Content-Signal: ai-train=yes, search=yes, ai-input=yes`. `Crawl-delay: 10` is scoped **only** to AhrefsBot/SemrushBot/MJ12bot — **no AI bot is delayed**.
- **Full `.well-known` agentic infrastructure, all live.** Verified 200: `/.well-known/api-catalog`, `/.well-known/mcp/server-card.json`, `/.well-known/ucp`, `/.well-known/acp.json`, `/.well-known/agent-skills/index.json` — advertised via the `Link` header (`next.config.mjs:82`). Plus a working `WebMCPProvider` (`src/components/WebMCPProvider.tsx`) registering 5 `navigator.modelContext` tools (browse_products, request_quote, find_industry_solution, check_city_availability, contact_uneom).
- **First-party citable Dataset.** The Saudi Uniform Price Index publishes `Dataset` schema under CC-BY 4.0 with a recommended-citation block, methodology, changelog, and a semantic `<table>` (caption/thead/th) — purpose-built for AI Overviews/LLM citation (the broken `data.json` is the only flaw, 11.1).
- **`llms.txt` is curated and strategic** (3.4 KB): business facts, full site map, key stats, and an explicit "Citation Preference" instruction to LLMs.
- **Global entity graph on every page.** Root layout injects `organizationSchema()` + `websiteSchema()` (`src/app/layout.tsx:90`) with `@id` cross-referencing, CRN/VAT `PropertyValue` identifiers (with verification URLs), `sameAs`, `knowsAbout`, certifications, and `contactPoint`.
- **Content structured for extraction.** FAQPage with proper `<dl>/<dt>/<dd>` on FAQ, industry, location, product, and blog pages (5 types × 2 locales); industry "Definition" lock-in blockquotes; verbatim regulator citations with source `href`s (`industries/[slug]/page.tsx:204-235`); comparison `<table>`s; concrete numeric FAQ answers.
- **Semantic HTML is strong.** `<article>/<header>/<section>/<aside>/<time dateTime>/<table>/<caption>/<dl>` used across blog, industry, location, product, and dataset templates; Article schema carries author, conditional `reviewedBy`, `wordCount`, `speakable` (SpeakableSpecification), and `isAccessibleForFree`.
- **Company-level E-E-A-T trust signals present:** ISO 9001:2015, OEKO-TEX, SASO, Maroof, ZATCA, plus CRN/VAT — surfaced both on the About page and in Organization schema.

---

## Dimension 12 — Mobile Experience (Mobile-First)

**Score: 8.5/10.** This is one of the healthiest dimensions on the site. The viewport is correct and zoom is allowed, forms are built mobile-first with 16px inputs that prevent iOS auto-zoom, the WhatsApp FAB and mobile menu are NOT intrusive interstitials, mobile content has full parity with desktop (no JS-gated accordions hiding text from Googlebot), and images ship proper AVIF/WebP `srcSet` with mobile-first `sizes` and dedicated 640w variants. The only real defects are footer touch-target spacing (medium) and a marginally-short secondary button height (low). The Arabic `<html dir>` document-level RTL gap is a real mobile-a11y concern but is owned/scored by Dimension 14 (I-18N/RTL) per the evidence digest, so I reference it here without double-counting its severity.

### Finding 1 — Footer link lists have sub-44px touch targets (rows ~20px tall, ~30px pitch)
- **Severity:** medium
- **Impact:** Every footer column (`/components/layout/Footer.tsx`) renders navigation links as bare `text-sm` (14px, ~20px line-box) inline `<Link>` elements inside `<li>`s with only `space-y-2.5` (10px) vertical gaps. Effective tap target ≈ 20px tall with ~30px row pitch — well under Google's 48px recommendation and WCAG 2.5.8 (24px min) / Apple HIG (44px). These are real internal links (industries, services, 8 cities, company pages, legal) crawled and tapped on mobile. PageSpeed Insights / Lighthouse will flag "Tap targets are not sized appropriately" and adjacent footer links risk mis-taps on a 320–428px screen. This appears on all 297 pages (footer is global, EN + AR).
- **Evidence:** `src/components/layout/Footer.tsx:49` `<ul className="mt-5 space-y-2.5 text-sm">` repeated for Industries (l.49), Services (l.62), Cities (l.75), Company (l.93); links at l.52, l.65, l.78, l.94–100 are `text-navy-200/80` with no padding. Bottom legal row `src/components/layout/Footer.tsx:123` is `text-xs` (12px) links (`privacy/terms/license/sitemap`, l.126–129) with even smaller targets. Phone/email `<a>` at l.38/l.42 also have no padded hit-area.
- **Fix (code):** Give footer links a padded, min-height hit area. Add a utility and apply it to every footer `<Link>`/`<a>`:
  ```css
  /* globals.css @layer components */
  .footer-link {
    @apply -mx-2 inline-flex min-h-[44px] items-center rounded-md px-2 text-navy-200/80 transition-colors hover:text-white;
  }
  ```
  Then in `src/components/layout/Footer.tsx` replace `className="text-navy-200/80 transition-colors hover:text-white"` on each `<Link>` with `className="footer-link"`, and tighten the list gap since padding now provides separation: change `space-y-2.5` → `space-y-0.5` on the four `<ul>`s (l.49/62/75/93). For the legal row (l.123) bump to `text-sm` and wrap each link with the same `.footer-link`.
- **SF-equivalent:** Screaming Frog → *Custom JS / Lighthouse integration* "Tap targets are not sized appropriately" (Mobile Usability), and the *Links* tab for the affected internal-link hrefs.

### Finding 2 — Primary/secondary `.btn` height is ~44px, just below the 48px mobile ideal
- **Severity:** low
- **Impact:** The shared button recipe is `px-6 py-3 text-sm` → 0.75rem×2 padding (24px) + 14px text at ~1.25rem line-height (20px) ≈ **44px** rendered height. That meets Apple's 44px floor but sits below Google's 48px recommendation. Affects every CTA site-wide (`btn-primary`, `btn-accent`, `btn-ghost`, `btn-outline`), including the header "Request a quote" (shown from `sm:` up) and homepage hero CTAs. Low severity because 44px rarely trips Lighthouse, but bumping it is a one-line win for thumb ergonomics.
- **Evidence:** `src/app/globals.css:76` `.btn { @apply ... px-6 py-3 text-sm ... }`; consumed by `btn-primary` (l.80), `btn-accent` (l.83), `btn-ghost` (l.87), `btn-outline` (l.91). Header CTAs `src/components/layout/Header.tsx:56` (`btn-primary text-sm`); hero CTAs `src/app/(site)/page.tsx:86,89`.
- **Fix (code):** In `src/app/globals.css:76` add a min-height to the base `.btn`:
  ```css
  .btn {
    @apply inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out;
  }
  ```
- **SF-equivalent:** Screaming Frog → *Lighthouse / Mobile Usability* "Tap targets are not sized appropriately" (low-confidence rows).

### Finding 3 — Arabic pages lack document-level `dir="rtl"` (mobile-a11y; scored under Dim 14, noted here)
- **Severity:** low (here — primary ownership is Dimension 14)
- **Impact:** All 148 AR pages render `<html lang="en">` with no `dir` attribute; RTL is applied only on an inner `<div dir="rtl">` (`src/app/ar/layout.tsx:36`). On mobile this still flows RTL visually because the wrapper sets direction, so the layout itself is not broken at 320–428px — but document-level `dir` is the correct signal for mobile screen readers / browser UI and is an a11y gap. I am NOT assigning higher severity to avoid double-counting Dimension 14, which owns this finding in full.
- **Evidence:** `src/app/layout.tsx:78` `<html lang="en" className={tajawal.variable}>`; `src/app/ar/layout.tsx:31` comment + l.36 `<div lang="ar" dir="rtl">`. Per EVIDENCE.md §I18N, distinct `<html lang|dir>` across corpus = `{"en|": 296}`.
- **Fix (code):** See Dimension 14 — move `lang`/`dir` to `<html>` (e.g. a route-group root layout per locale, or middleware-driven `lang`/`dir`), so AR routes emit `<html lang="ar" dir="rtl">`.
- **SF-equivalent:** Screaming Frog → *Directives* / language analysis (`html lang` column) and Mobile Usability.

### What's working
- **Viewport meta is correct and zoom is allowed.** `src/app/layout.tsx:64-70` exports `width: 'device-width', initialScale: 1, maximumScale: 5`. No `user-scalable=no` / `maximum-scale=1` anywhere in `src/` (grep returned zero) — passes WCAG 1.4.4 reflow/zoom.
- **Forms are exemplary mobile-first.** `QuoteFormEN.tsx`/`QuoteFormAR.tsx` inputs/selects/textareas (l.63–119 in each) use `px-4 py-3 text-base` — 16px font prevents iOS Safari auto-zoom-on-focus, and `py-3` yields ~48px target height. `w-full` blocks fields stack cleanly at 320px.
- **No intrusive interstitials.** There is NO ExitIntentPopup and NO CookieConsent component in the codebase (grep confirmed). The WhatsApp float is a 52px corner FAB on mobile (`globals.css:451-468`, `width:3.25rem` ≤640px), entering after a 2.2s CSS delay — never covers content full-screen. The mobile menu is a side drawer (`globals.css:574` `width: min(85vw, 380px)`), not a full-screen takeover, with backdrop, body-scroll-lock, and Escape-to-close (`MobileMenu.tsx:39-59`). None of these trip Google's intrusive-interstitial penalty.
- **Full mobile content parity for Googlebot.** The FAQ page (`src/app/(site)/faq/page.tsx`) is a server component (no `'use client'`, no `<details>`/`aria-expanded` toggles) — every answer is in the static HTML. FAQ content on industries/blog/locations/product pages is likewise server-rendered, so no text is JS-gated behind accordions/tabs.
- **Responsive images are correctly sized for mobile.** `CityCard.tsx:20`, `IndustryCard.tsx:44`, and `ResponsiveImage.tsx:66-77` emit `<picture>` with AVIF+WebP `srcSet` (`-640w/-960w/1920w`) and mobile-first `sizes="(max-width: 640px) 100vw, ..."`, so phones download the 640w variant. Heroes are 33–58KB AVIF (per EVIDENCE.md §Images); all images have width/height (zero CLS). Logo uses `sizes="140px"` with `priority`.
- **No horizontal-overflow risk.** Zero fixed pixel widths ≥100px in components/pages (grep). The only wide elements — comparison/price tables — are each wrapped in `overflow-x-auto` (`industries/[slug]/page.tsx:284`, `shop/[category]/[product]/page.tsx:269`, `resources/uniform-price-index-ksa/page.tsx:210`, plus AR twins), so they scroll internally instead of breaking the page at 320px. Hero CTAs use `flex flex-wrap` (`page.tsx:85`) and stack gracefully.
- **Body copy is ≥16px; small text is labels only.** No `font-size`/`text-base` override on `<html>`/`<body>` (Tailwind preflight = 16px). Body prose uses `text-base`/`text-lg` (hero `p` = `text-lg` 18px, `page.tsx:80`). Every `text-xs` (12px) occurrence is on uppercase eyebrows/section headings/meta (e.g. `Footer.tsx:48` `text-xs ... uppercase tracking-[0.18em]`), an editorial convention — not paragraph text.
- **Mobile a11y extras.** Hamburger has `aria-expanded`/`aria-controls`/`aria-label`; AR drawer has a localized skip-link (`ar/layout.tsx:37`); `*:focus-visible` ring preserved (`globals.css:36`); `prefers-reduced-motion` disables drawer/float animations (`globals.css:471-493`).

---

## Dimension 13 — Duplicate Content & Fingerprinting

**Score: 6.5/10.** No exact duplication exists anywhere (0 duplicate titles, 0 duplicate descriptions across all 297 pages), parameter URLs are correctly canonicalized, and the AR corpus is a genuine translation (not a duplicate). The problem is **near-duplication at the template level**: 60 templated "shell" pages (32 thin city pages, 16 shop-category listing pages, 12 blog-category pages) are 50-70% boilerplate with thin unique text, and they cannibalize the deep industry/product pages that target the same keywords. This is a fingerprinting/thin-content risk that suppresses these URLs in Google KSA and gives AI-search nothing citable, not an indexing-breaker — hence a mid score rather than low.

---

### Finding 13.1 — 32 thin city pages are 54%-boilerplate near-duplicates (data bifurcation: 8 enriched cities vs 16 stub cities)
**Severity:** high
**Impact:** The 16 "stub" cities (×2 languages = 32 URLs) render as near-identical shells. Google's near-duplicate clustering will fold them together and pick one canonical, wasting the city-targeting strategy; AI engines have no unique facts to cite. These are exactly the long-tail city queries the #1-KSA goal depends on.
**Evidence:** `src/lib/data/saudi-cities/` contains a hard bifurcation — 8 cities have rich 18,816-21,171 byte data files (riyadh.ts 21KB, jeddah.ts 20KB, mecca, medina, dammam, khobar, tabuk, abha) **with** `cityProfile`+`expandedFaqs`; the other 16 are 472-1,015 byte stubs (sakaka.ts 472B, hail.ts 474B, al-qatif.ts 496B, al-jubail.ts 858B …) with `cityProfile=0 faq=0` and empty/1-item `climateVocab`. Rendered result (crawl_local.json): enriched cities = 1,198-1,265 words / 7 H2s (`/locations/riyadh/` 1265w, `/locations/jeddah/` 1232w); stub cities = 186-260 words / 3-4 H2s (`/locations/hail/` 186w, `/locations/najran/` 195w, `/locations/sakaka/` 195w, `/locations/al-qatif/` 187w, `/locations/dhahran/` 198w). The template `src/app/(site)/locations/[city]/page.tsx` gates all rich blocks behind `{city.cityProfile && …}`, `{city.expandedFaqs && …}`, etc. (lines 131, 167, 187, 279, 308) — so a stub city renders only the hero + two industry-link grids. Fixed template strings (hero intro line 113 "Uniform programmes anchored in… coordinated from a single operations team.", "Full silo coverage" line 251, CTA body line 338) account for ~101 of ~186 words ≈ **54% identical boilerplate** across all 16 stubs; the only per-city tokens are the city name (repeated ~10×), region, 2 landmarks, and an anchor-industry list drawn from a shared pool of 8.
**Fix (code):** Make city enrichment mandatory before a city is shipped, OR until enriched, prune stubs from the index. Two options:

1. Backfill the 16 stub data files with the same fields the 8 rich cities have (`cityProfile.en[]`, `expandedFaqs`, `localizedArchitectEquation`, `industryContext`) — target ≥600 words of city-unique prose each.

2. Until backfilled, exclude stubs from indexing + sitemap so they don't dilute the cluster. In `src/app/(site)/locations/[city]/page.tsx` `generateMetadata`:
```ts
const ENRICHED = new Set(['riyadh','jeddah','mecca','medina','dammam','khobar','tabuk','abha']);
return {
  // ...existing title/description/alternates...
  robots: ENRICHED.has(citySlug) ? undefined : { index: false, follow: true },
};
```
And filter the sitemap (`src/app/sitemap.ts`) to emit only enriched city slugs. Mirror in `src/app/ar/locations/[city]/page.tsx`.
**SF-equivalent:** Content tab → "Near Duplicates" (set similarity threshold ~90%; enable "Near Duplicates" in Config > Content); Content tab → "Low Content Pages" (<200 words).

---

### Finding 13.2 — 16 shop-category pages are templated listing shells; 5 are soft-404s and cannibalize the industry pages
**Severity:** high
**Impact:** The shop-category pages carry near-zero unique prose and target the same head keywords as the 1,800-2,000-word industry pages, so they split relevance signals and several trip Google's soft-404/thin-content filter.
**Evidence:** `src/app/(site)/shop/[category]/page.tsx` (98 lines) renders only a `SectionHeader` (title=`cat.nameEn`, lead=one-sentence `cat.summary`), a "Part of the {industry} silo" line (line 61), a product grid with no prose, and a fixed CTA body (line 94). Crawl word counts (all 16 EN+AR ≤163w, 2 H2s): `/shop/retail/` 93w (1 product → soft-404, in analysis_local.json `soft404` list), `/shop/aviation/` 121w, `/shop/security/` 122w, `/shop/education/` 123w, `/shop/manufacturing/` 125w; AR twins 88-150w (5 AR shop pages in the `soft404` list). Product counts (grep `src/lib/data/products/`): retail=1, aviation/security/education/manufacturing=2, others=3. Cannibalization is direct: `/shop/medical-scrubs/` (163w, title "Medical Scrubs — UNEOM") vs `/industries/healthcare/` (1,993w, title "Healthcare Uniforms in Saudi Arabia — Medical Scrubs & Lab Coats"); `/shop/aviation/` (121w) vs `/industries/aviation/` (1,937w). Note: shop *product detail* pages are deep and unique (1,000-1,396w, 7 H2s each) — no duplication issue there.
**Fix (code):** Add a unique 150-250 word intro block per category and link decisively to the matching industry page to resolve the cannibalization. In `categories.ts` add an `introEn`/`introAr` field, then in `src/app/(site)/shop/[category]/page.tsx` after the `SectionHeader`:
```tsx
{cat.introEn && (
  <div className="prose prose-lg max-w-3xl mt-6 text-ink-700">
    {cat.introEn.map((p, i) => <p key={i} className="pretty">{p}</p>)}
  </div>
)}
```
For the lone-product `/shop/retail/` (and any category <2 products), either consolidate into the parent `/shop/` until product depth grows, or `robots: { index:false, follow:true }`. Make the industry link primary, not a footnote, so Google sees the industry page as the canonical money page for the head term.
**SF-equivalent:** Content tab → "Low Content Pages"; and the URL-level "Soft 404" detection (Spider with JS rendering; cross-reference with GSC "Crawled – currently not indexed").

---

### Finding 13.3 — 12 blog-category listing pages are indexable thin near-dupes; aviation category is a soft-404
**Severity:** medium
**Impact:** Templated archive pages with little unique prose compete with the actual blog posts and add thin URLs to the index. Unlike blog *tag* pages (correctly `noindex,follow`), category pages are fully indexable.
**Evidence:** Crawl shows all 12 `/blog/category/*` and `/ar/blog/category/*` pages emit `meta_robots="index, follow…"` (NOT noindex — unlike tag pages). Word counts: `/blog/category/aviation/` 95w + `/ar/blog/category/aviation/` 93w are in the `soft404` list (1 post each); `/blog/category/hospitality/` 223w, `/ar/blog/category/hospitality/` 206w, healthcare 273-276w. They are structurally identical archive shells differentiated only by category name + the post-card list.
**Fix (code):** `noindex,follow` blog-category pages that have fewer than ~3 posts (or all of them, matching the tag-page treatment), and rely on the post pages themselves for indexable depth. In the blog category route's `generateMetadata`:
```ts
const posts = getPostsByCategory(slug);
return { /* ...title/desc/alternates... */,
  robots: posts.length < 3 ? { index: false, follow: true } : undefined };
```
At minimum, noindex the aviation category in both languages immediately. Drop noindexed category pages from `sitemap.ts`.
**SF-equivalent:** Directives tab → "Index / Noindex" segmentation; Content tab → "Low Content Pages".

---

### Finding 13.4 — Sitewide `City`+`GeoCoordinates` schema repetition is a duplicate-fingerprint signal in structured data
**Severity:** low
**Impact:** Not text duplication, but every page ships an identical ~28-node `City`+`GeoCoordinates` block (the LocalBusiness `areaServed` city list), making the JSON-LD fingerprint near-identical sitewide and bloating every payload. It does not break anything but reinforces the "templated shell" pattern for thin pages and adds crawl/parse overhead.
**Evidence:** crawl `ld_types` for every page repeats the same 28 `City`/`GeoCoordinates` pairs (visible identically on `/locations/riyadh/` and stub `/locations/hail/` alike); analysis_local.json `schema_types` totals ~7,456 City + ~7,448 GeoCoordinates nodes across 297 pages ≈ 25/page. Source: `src/lib/seo/schemas.ts` `localBusinessSchema()`.
**Fix (code):** Emit the full `areaServed` city list only on `/`, `/locations/`, and city pages; on other routes reduce `areaServed` to a single `{ "@type":"Country","name":"Saudi Arabia" }` or reference the Organization `@id`. In `schemas.ts`, parameterize `localBusinessSchema(scope: 'full' | 'minimal')` and pass `'minimal'` from non-location templates.
**SF-equivalent:** Structured Data tab → validation/aggregation (node-count per URL); Custom Extraction to count repeated `@type:"City"` nodes.

---

### What's working
- **Zero exact duplication.** analysis_local.json: `title_dup` = 0 groups, `desc_dup` = 0 groups across all 297 pages — every title and meta description is unique.
- **Parameter duplication fully mitigated.** 60 `/quote/?city=X` param variants (EN+AR) all canonicalize to `https://uneom.com/quote/` (`src/app/(site)/quote/page.tsx:12`). Correctly consolidated — not duplicate content.
- **AR is a genuine translation, not a duplicate.** AR templates use `nameAr`/`summaryAr`/`cat.summaryAr` and self-referencing `/ar/` canonicals + hreflang reciprocity (296/297 healthy per EVIDENCE) — cross-language alternates, not dupes.
- **The 8 enriched city pages are genuinely differentiated** (1,198-1,265 words, 7 H2s, unique `cityProfile`, `localizedArchitectEquation`, `expandedFaqs`, `industryContext`, `localCompliance`) — the template scales well when fed real data.
- **Product detail pages are deep and unique** — all 40+ shop product pages run 1,000-1,396 words with 7 H2s; no thin/duplicate concern at the product level.
- **No duplicate H1s or duplicate canonicals** (h1_multi = 0; 296/297 self-referencing canonicals per EVIDENCE).

---

## Dimension 14 — Hreflang & International Targeting

**Score: 5/10.** Hreflang itself is genuinely excellent (296/296 reciprocal, self-ref + x-default, 0 broken), and locale formatting (currency, phone, dates) is well-handled. But the dimension is dragged down by a single **critical, site-wide defect**: all 148 Arabic pages declare `<html lang="en">` with **no `dir="rtl"`**. For an Arabic-first KSA market this contradicts the hreflang/`ar-SA` signals on the very same pages, and is a WCAG 3.1.1/3.1.2 failure. The HTTP-level signals tell Google "this is Arabic" while the document-level signal says "this is English."

---

### Finding 14.1 — 🔴 CRITICAL: All 148 AR pages render `<html lang="en">` with no `dir="rtl"` (document-level locale lies to crawlers & screen readers)

**Severity:** critical (actively contradicts the page's own hreflang/canonical Arabic signals; a11y failure).

**Impact:** The single most important international-targeting signal at the document level — the `<html lang>` attribute — is wrong on every one of the 148 Arabic pages. Google uses `<html lang>` as a corroborating language signal alongside hreflang and on-page content; here it directly contradicts them (page says `lang="en"` but content is Arabic, canonical is `/ar/...`, and hreflang labels it `ar-SA`). Screen readers will pronounce Arabic text with an English speech engine (WCAG 3.1.1 Language of Page — Level A failure). The absence of `dir="rtl"` on `<html>` means RTL is only applied via an inner `<div>`, so any content that escapes that div (portals, error boundaries, the `<body>` background, browser form controls, scrollbar side) renders LTR. This also undermines the AI-search-citation goal: assistants parsing `lang`/`dir` to decide which locale to cite see English declared on Arabic pages.

**Evidence:**
- Crawl (`/tmp/uneom_audit/crawl_local.json`, authoritative per EVIDENCE.md §I18N): distinct `<html lang|dir>` across the corpus = `{"en|": 296}` — i.e. **every page, EN and AR, emits `lang="en"` and an empty `dir`**. Recomputed on the 297 AR pages: **0 have `dir="rtl"` on `<html>`, 0 have `lang="ar*"` on `<html>`.**
- Root cause `src/app/layout.tsx:78`: `<html lang="en" className={tajawal.variable}>` — hardcoded, no per-locale logic. This is the **only** `<html>` in the app; both the `(site)` (EN) and `ar/` route groups are children of this one root layout.
- `src/app/ar/layout.tsx:34-36`: the AR layout only wraps a child div — `return (<div lang="ar" dir="rtl" className="font-sans">…)`. The comment at `ar/layout.tsx:31-32` explicitly admits the design: *"`<html lang>` is set on root layout; we wrap content in a `dir="rtl"` div."* So RTL/lang live on a `<div>`, never on `<html>`.
- Spot-checked AR URLs all show `lang='en'`, `dir=''`: `/ar/`, `/ar/contact/`, `/ar/about/`, `/ar/faq/`, `/ar/careers/`.

**Fix (code) — set `lang`/`dir` per-request via middleware header + root layout `headers()`:**

Next App Router renders exactly one `<html>` (in the root layout), so the locale must be resolved there. Plumb the pathname through middleware:

`src/middleware.ts` — broaden the matcher and stamp the path on a request header (additive; keeps existing markdown/rate-limit logic):
```ts
export function middleware(req: NextRequest) {
  // ... existing markdown + /api rate-limit logic unchanged ...

  // Expose pathname to the root layout so it can set <html lang|dir> per-locale
  const res = NextResponse.next();
  res.headers.set('x-pathname', req.nextUrl.pathname);
  return res;
}

export const config = {
  // was ['/', '/api/:path*'] — must now run on AR routes too.
  // Exclude static assets; include everything else.
  matcher: ['/((?!_next/static|_next/image|images|fonts|favicon.ico).*)'],
};
```

`src/app/layout.tsx:76-78` — read the header and branch (root layout is a Server Component, so `headers()` is available):
```tsx
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get('x-pathname') ?? '/';
  const isAr = pathname === '/ar' || pathname.startsWith('/ar/');
  const lang = isAr ? 'ar' : 'en';
  const dir = isAr ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir} className={tajawal.variable}>
      {/* ...head/body unchanged... */}
```

Then in `src/app/ar/layout.tsx:36` drop the now-redundant `lang`/`dir` from the wrapper (keep the div for styling, but `<html>` is now authoritative):
```tsx
return (
  <div className="font-sans">   {/* lang/dir removed — now on <html> */}
```

**Note:** `headers()` opts the root layout into dynamic rendering. To preserve static prerendering of the heavy EN/AR routes, the lighter-weight alternative is to keep two root layouts via a route-group split — move the current root into `src/app/(site)/layout.tsx` as the EN `<html lang="en" dir="ltr">` root and give `src/app/ar/layout.tsx` its own `<html lang="ar" dir="rtl">` root (each route group gets an independent document). That avoids `headers()` entirely and keeps full SSG. Either approach fixes the defect; the route-group-split is preferable for this static-heavy build.

**SF-equivalent:** Screaming Frog → Content tab → "Language" / column `HTML Lang`, and the "Page Titles/Directives" view; SF flags `lang` vs hreflang mismatch under Hreflang tab → "Inconsistent Language & Region Return Links" / Content → "Non-Indexable Language" — here it surfaces as every `/ar/*` URL reporting `Language: en`.

---

### Finding 14.2 — LOW: `ar-SA` blog dates render in Arabic-Indic numerals (intentional, verify design intent)

**Severity:** low (cosmetic/locale-consistency, not a ranking/indexing issue).

**Impact:** AR blog pages format dates with `toLocaleDateString('ar-SA', …)`, which on the build runtime outputs Gregorian months with Arabic-Indic digits (e.g. `١٣ يونيو ٢٠٢٦`). This is correct, locale-appropriate behaviour for KSA — flagged only so it is a conscious decision, since `ar-SA` can resolve to the Islamic (Hijri) calendar on some ICU/Node builds, which would silently change the displayed date. EN uses `en-GB` (`13 June 2026`).

**Evidence:**
- `src/app/ar/blog/page.tsx:24`, `src/app/ar/blog/category/[slug]/page.tsx:62`, `src/app/ar/blog/[slug]/page.tsx:47` → `new Date(post.publishedAt).toLocaleDateString('ar-SA', …)`.
- Runtime check (Node on this machine): `('2026-06-13').toLocaleDateString('ar-SA', {day:'numeric',month:'long',year:'numeric'})` → `١٣ يونيو ٢٠٢٦` (Gregorian, Arabic digits — correct).
- EN counterparts use `en-GB` (`src/app/(site)/blog/[slug]/page.tsx:39`).

**Fix (code) — pin Gregorian explicitly so calendar output is deterministic across ICU versions:**
```ts
// in each ar/blog*.tsx date line
new Date(post.publishedAt).toLocaleDateString('ar-SA-u-ca-gregory', {
  day: 'numeric', month: 'long', year: 'numeric'
});
```
(The `-u-ca-gregory` extension forces the Gregorian calendar regardless of host ICU defaults; output stays `١٣ يونيو ٢٠٢٦`.)

**SF-equivalent:** Not surfaced by Screaming Frog (rendered text, locale-runtime behaviour) — caught by manual rendered-page review / Custom Extraction of the date node.

---

### What's working (state plainly — do NOT "fix" these)

- **Hreflang is healthy and reciprocal — 296/296 pages.** Every page emits exactly three alternates: `en` → EN URL, `ar-SA` → `/ar/...` URL, `x-default` → EN URL. **0 broken targets; x-default always points to EN (100%); ar-SA always points to `/ar/` (296/296).** (The `broken_target: 888` in `analysis_local.json` is a confirmed FALSE POSITIVE from localhost-vs-production host mismatch — do not report it.) Generated centrally via `metadata.alternates.languages` in `layout.tsx:38-45`, `ar/layout.tsx:11-18`, and per-page `generateMetadata`.
- **Language codes are valid BCP-47.** `en`, `ar-SA`, `x-default` are all well-formed; `ar-SA` correctly targets Saudi Arabia specifically rather than generic `ar`.
- **Currency localized correctly:** EN renders prices as `… SAR` (e.g. `src/app/(site)/industries/[slug]/page.tsx:167`), AR renders the same figures as `… ريال` (the Arabic word for Riyal, `src/app/ar/industries/[slug]/page.tsx:167`). Schema uses ISO `unitCode: 'SAR'` (`resources/uniform-price-index-ksa/page.tsx:65`).
- **Phone in E.164 with KSA country code, consistent everywhere:** `+966 56 461 2017` (and compact `+966564612017` for `tel:`/schema). No local-format leakage.
- **Dates are locale-aware:** EN `en-GB`, AR `ar-SA` — not a single hardcoded `en-US` date on Arabic pages.
- **BiDi hygiene inside EN pages is correct:** Arabic snippets embedded in English pages are individually wrapped with `lang="ar" dir="rtl"` (e.g. `locations/[city]/page.tsx:109,200`, `locations/page.tsx:72`, `shop/[category]/[product]/page.tsx:108`), and the `LangSwitcher` label is wrapped with the correct opposite `lang`/`dir` (`LangSwitcher.tsx:33`). The only thing missing is the **document-level** `<html lang|dir>`.
- **Language switcher maps to the exact mirror URL** (`LangSwitcher.tsx:18-22`): EN `/x/` ↔ AR `/ar/x/`, matching the hreflang pairs — no cross-locale 404s.
- **GSC geotargeting:** domain property verified (token in `layout.tsx:37`), and `ar-SA` hreflang gives Google explicit country+language targeting without needing legacy GSC International Targeting (deprecated anyway).

---

## Dimension 15 — Pagination & Infinite Scroll

**Verdict: healthy by deliberate design.** uneom.com has **zero pagination, zero "load more", and zero infinite scroll** anywhere in the codebase — and that is the *correct* architecture for the current corpus size. Every listing renders its full item set in one static, server-rendered page. There are no `page/[n]` routes, no `?page=` params, no `rel="next"/"prev"`, no `IntersectionObserver`/scroll loaders, and no paginated URLs in the sitemap or internal link graph. Because no listing is large enough to need splitting (largest is the blog index at ~40 posts), there is no link-equity dilution, no orphaned page-2+ URLs, and no crawl-budget waste. The only real risk is *future* scaling — once the blog crosses ~50–100 posts a thoughtful pagination strategy will be needed, and the thin shop/blog category pages already flag a related (but separate) thin-content concern.

### Finding 15.1 — No pagination exists anywhere (correct for current scale, but a scaling cliff)
- **Severity:** low
- **Impact:** Currently a *strength*. All listing pages are single, fully server-rendered HTML documents — every item link is crawlable in one fetch with no JS, no page-2 to orphan, and no split PageRank. The only downside is forward-looking: the blog index already renders ~40 post cards on one page and will keep growing; with no pagination plan, a 100+ post index becomes a heavy, link-dense single page.
- **Evidence:**
  - Codebase-wide greps return **nothing** for `pagination|loadmore|infinitescroll|usePagination|nextPage|prevPage|hasMore|IntersectionObserver|rel=(next|prev)` across `src/app`, `src/components`, `src/lib`. No `page/[n]`, `[...page]`, or `?page=` handling (no `searchParams.page` reading anywhere).
  - `/blog/` (`src/app/(site)/blog/page.tsx:59-121`): `BLOG_POSTS` (≈40 posts, confirmed 41 files in `src/lib/data/blog/posts/`) sorted then sliced into `featured = posts[0]` + `rest = posts.slice(1)` — **all `rest` rendered in one grid**, no slice limit. Crawl confirms `/blog/` = 1621 words, **104 links** on a single page.
  - `/shop/` (`src/app/(site)/shop/page.tsx:41-57`): all 8 `PRODUCT_CATEGORIES` in one grid. `/locations/` (`src/app/(site)/locations/page.tsx:48-80`): all 24 `SAUDI_CITIES` in one page (metro grid + province-grouped full list, 86 links).
  - Sitemap check: `grep -c "page=" /tmp/uneom_audit/sitemap.xml` → **0**. No `/page/` or `page=` URL in any of the 297 crawled pages. No `rel=next/prev` link relations in crawl.
- **Fix (code):** No change needed now. Add a pagination plan to the backlog, triggered when `BLOG_POSTS.length > 24`. Recommended pattern (App Router, SEO-safe, self-canonicalizing page-N — do NOT canonical page-2 back to page-1):
  ```tsx
  // src/app/(site)/blog/page/[n]/page.tsx  (future)
  export const dynamicParams = false;
  const PER_PAGE = 12;
  export function generateStaticParams() {
    const pages = Math.ceil(BLOG_POSTS.length / PER_PAGE);
    return Array.from({ length: pages }, (_, i) => ({ n: String(i + 1) }));
  }
  export async function generateMetadata({ params }) {
    const { n } = await params; const page = Number(n);
    return {
      title: `Editorial — Page ${page}`,
      alternates: { canonical: `https://uneom.com/blog/page/${page}/` }, // self-ref, NOT page 1
      // optional: robots index,follow (Google ignores rel=next/prev but still crawls links)
    };
  }
  ```
  Keep `/blog/` as page 1 (canonical `https://uneom.com/blog/`). Ensure every paginated page links back to the hub and forward/back so none are orphaned.
- **SF-equivalent:** Screaming Frog → **Pagination** tab (Non-Indexable Paginated URLs / Orphaned Pages reports) and **Crawl Depth** — would currently show an empty Pagination tab (confirming none exists).

### Finding 15.2 — Shop/blog category listing pages are full (no pagination) but thin
- **Severity:** medium
- **Impact:** Category listing pages have so few items they render fully on one page (correct — no pagination needed) but several fall below the soft-404 word threshold. This is a *content-depth* problem, not a pagination one, but it surfaces on the same listing-page set, so flagging the overlap: pagination is rightly absent, yet the listings are thin enough to need body copy, not page splits.
- **Evidence:**
  - Shop categories hold only 1–3 products each (`retail`=1, `aviation/education/manufacturing/security`=2, `corporate/hospitality/medical-scrubs`=3; 26 products across 8 categories), so `productsByCategory()` returns a tiny grid. Crawl word counts: `/shop/retail/` **93w**, `/shop/aviation/` 121w, `/shop/security/` 122w, `/shop/education/` 123w, `/shop/corporate/` 136w, `/shop/hospitality-attire/` 152w, `/shop/medical-scrubs/` 163w — all thin; `/shop/retail/` is in the EVIDENCE soft-404 set (<120w).
  - Blog category `aviation` holds only 2 posts → `/blog/category/aviation/` = 95w (soft-404 risk per EVIDENCE). Largest category `corporate-education` = 12 posts, still trivially one page.
- **Fix (code):** Do NOT add pagination. Instead enrich each listing with unique intro/outro prose so the thin listings clear ~250–300 words. In `src/app/(site)/shop/[category]/page.tsx` (and the AR twin) add a `cat.intro`/`cat.body` long-form field rendered above/below the product grid; same for `src/app/(site)/blog/category/[slug]/page.tsx` using `cat.description` expanded into 2–3 paragraphs. (Handled in depth by the content-depth dimension; noted here only because it shares the listing-page surface.)
- **SF-equivalent:** Screaming Frog → **Content** tab → *Low Content Pages* (Word Count < 200) on the `/shop/*/` and `/blog/category/*/` listing URLs.

### What's working
- **Zero broken-pagination debt:** no `page/[n]` routes, no `?page=` params, no `rel=next/prev`, no infinite scroll, no "load more" — nothing to orphan, dilute, or mis-canonicalize. Sitemap has **0** `page=` entries; **0** paginated URLs in the 297-page crawl.
- **Listings are fully crawlable in one server-rendered fetch:** `/blog/` exposes all ~40 posts (104 links, no JS), `/shop/` all 8 categories, `/locations/` all 24 cities (86 links) — ideal for both Googlebot and AI crawlers; every detail page is reachable at crawl depth ≤2.
- **Right-sized for the corpus:** largest listing is ~40 items; largest category 12 items; shop categories 1–3 items. Pagination here would *hurt* SEO (split link equity, create thin page-2 URLs) — its absence is the correct call.
- **`dynamicParams = false` + `generateStaticParams()`** on category routes (`shop/[category]`, `blog/category/[slug]`) means the listing set is fully enumerated and statically prerendered — no dynamic param explosion, no accidental infinite URL space.

---

## Dimension 16 — Accessibility (A11y)

**Score: 7/10.** This is a genuinely well-built front end for accessibility — skip-nav links, landmark roles, ARIA-correct hamburger/breadcrumbs, fully-labeled forms, styled `:focus-visible`, `prefers-reduced-motion` support, and zoom permitted. The score is held back by three real defects, two of which double as SEO/i18n issues already flagged in other dimensions: (1) **148 Arabic pages ship with no `<html dir="rtl">` and `lang="en"`** (the single largest a11y + i18n defect, cross-ref D14); (2) **50 hub/listing pages have no `<h1>` and open their heading outline at `<h2>`** (cross-ref the H1-missing finding in D4); (3) a few **contrast failures** on emerald accent text and the lightest hint text.

### Finding 16.1 — Arabic pages declare English language and have no document-level RTL direction
- **Severity:** critical
- **Impact:** WCAG 3.1.1 (Language of Page) and 3.1.2 (Language of Parts) failure on all 148 Arabic pages. Screen readers (VoiceOver/NVDA/JAWS) read Arabic content with an English speech-synthesis voice → unintelligible pronunciation for the entire Arabic-first target market. Assistive tech and browser bidi engines also lose the document-level RTL hint; the site relies on a single inner `<div dir="rtl">` instead of the authoritative `<html dir>`. This is the same root cause as the i18n hreflang/explicit-signal issue in D14 — fixing it once resolves both.
- **Evidence:** Every one of the 297 crawled pages renders `<html lang="en" class="__variable_e1299a">` with NO `dir` attribute (crawl distribution: `{"en|": 296}`, zero `dir="rtl"`). Hardcoded at `src/app/layout.tsx:78`: `<html lang="en" className={tajawal.variable}>`. The AR layout (`src/app/ar/layout.tsx:31`) comment admits the workaround: "`<html lang>` is set on root layout; we wrap content in a `dir="rtl"` div". 148 Arabic URLs (the entire `/ar/` tree) are affected.
- **Fix (code):** Move `lang`/`dir` off the static root layout and set them per-locale. The cleanest fix in App Router is to compute them from the request and apply at the root. Minimal patch — in `src/app/layout.tsx`, derive locale and set both attributes:
  ```tsx
  // src/app/layout.tsx
  import { headers } from 'next/headers';

  export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = (await headers()).get('x-invoke-path') ?? '';      // or use a middleware-set header
    const isAr = pathname.startsWith('/ar');
    return (
      <html lang={isAr ? 'ar' : 'en'} dir={isAr ? 'rtl' : 'ltr'} className={tajawal.variable}>
      ...
  ```
  If `x-invoke-path` is not available, set it in `middleware.ts`:
  ```ts
  // middleware.ts
  export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    res.headers.set('x-invoke-path', req.nextUrl.pathname);
    return res;
  }
  ```
  Then delete the `lang="ar" dir="rtl"` wrapper `<div>` in `src/app/ar/layout.tsx:36` (it becomes redundant once `<html dir="rtl">` is correct). Verify post-deploy: `curl -s https://uneom.com/ar/ | grep -o '<html[^>]*>'` should return `<html lang="ar" dir="rtl" ...>`.
- **SF-equivalent:** Screaming Frog → "Content > Language" / the `HTML Lang` column in the Internal tab (Custom Extraction on `html[lang]` and `html[dir]`); also flagged by SF's Accessibility integration (if the WCAG/axe integration is enabled) under "Language of Page".

### Finding 16.2 — 50 hub/listing pages have no `<h1>`; page title is rendered as `<h2>`, breaking the heading outline
- **Severity:** high
- **Impact:** WCAG 1.3.1 (Info & Relationships) and 2.4.6 (Headings & Labels). Screen-reader users who navigate by heading (a primary AT navigation mode) land on a page whose document outline has no level-1 anchor and starts at `<h2>` — they cannot identify "what is this page" from the heading structure, and the implied hierarchy is wrong (an `<h2>` with nothing above it). This is the accessibility face of the "H1 missing on ~48 hubs" SEO finding in D4 — same fix resolves both.
- **Evidence:** 50 pages crawl with `h1_count == 0` (25 EN + 25 AR): all hub/listing routes — `/industries/ /shop/ /services/ /blog/ /locations/ /contact/ /quote/ /resources/ /case-studies/ /careers/` + every `/ar/` twin + blog-category + shop-category pages. Root cause is shared component `src/components/ui/SectionHeader.tsx`: it **always** renders the title as `<h2>` (`<h2 className={hero ? 'text-display-2xl' : 'text-display-lg'}>`), even when passed the `hero` prop as a page title. Hub pages call it as their main title, e.g. `src/app/(site)/industries/page.tsx:32-37` (`<SectionHeader hero title={…} />`). Detail pages are unaffected because they hand-author `<h1>` (e.g. `src/app/(site)/industries/[slug]/page.tsx:122` `<h1 className="...text-display-2xl...">`).
- **Fix (code):** Make `SectionHeader` render the correct element based on the `hero` flag (hero usage = page title = `<h1>`):
  ```tsx
  // src/components/ui/SectionHeader.tsx
  export function SectionHeader({ eyebrow, title, lead, align = 'start', hero = false }: Props) {
    const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'items-start';
    const Heading = hero ? 'h1' : 'h2';        // hero = page-level title → <h1>
    return (
      <div className={`flex flex-col gap-5 ${alignment} max-w-3xl`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading className={`${hero ? 'text-display-2xl' : 'text-display-lg'} text-navy-900 balance`}>
          {title}
        </Heading>
        {lead && <p className="text-lg leading-relaxed text-ink-500 pretty">{lead}</p>}
      </div>
    );
  }
  ```
  This single change promotes all 50 hubs from `<h2>`-only to a proper `<h1>` outline with zero template churn. Audit other `hero` callers to ensure none now produce two `<h1>`s on one page.
- **SF-equivalent:** Screaming Frog → "H1 > Missing" tab (will list ~50 URLs) and the "Page Titles / H1" columns; axe/WCAG integration flags it as "page-has-heading-one" and "heading-order".

### Finding 16.3 — Emerald accent text on white fails WCAG AA contrast (2.54:1)
- **Severity:** medium
- **Impact:** WCAG 1.4.3 (Contrast Minimum). `accent-500 #10B981` as a *foreground* color on white/off-white yields only **2.54:1**, well below the 4.5:1 (normal) and 3:1 (large/UI) thresholds. Where it is used for readable text or meaningful UI it is illegible to low-vision users. (Note: `accent-500` is fine where it's a *decorative* hairline/icon-on-fill; the failure is only when it carries text or essential meaning.)
- **Evidence:** Computed contrast (sRGB WCAG formula): `#10B981` on `#FFFFFF` = **2.54:1 (FAIL)**. By contrast `accent-700 #047857` on white = 5.48:1 (PASS) — and the codebase already uses `accent-700` correctly for the eyebrow text (`globals.css:97` `.eyebrow { … text-accent-700 }`) and for white-on-accent buttons (`globals.css:84` `.btn-accent { bg-accent-700 }` → white-on-#047857 = 5.48:1 PASS). The risk is any `text-accent-500` usage for words/links. Quick audit command: `grep -rn "text-accent-500" src` to enumerate offending sites.
- **Fix (code):** Never use `accent-500` for text on light backgrounds — swap to `accent-700` (already the brand's safe accent). Project-wide:
  ```
  # find offenders
  grep -rn "text-accent-500" src/
  # replace text usages with the AA-safe shade
  ```
  Change e.g. `className="text-accent-500"` → `className="text-accent-700"`. Keep `accent-500` only for fills (`bg-accent-500`), decorative rules (`.eyebrow::before` hairline), and icons that aren't the sole carrier of meaning.
- **SF-equivalent:** Screaming Frog → Accessibility (axe/WCAG) integration → "color-contrast" issues report; not surfaced by core SF crawl (needs the JS-rendering + accessibility add-on or a Lighthouse/axe pass).

### Finding 16.4 — Lightest hint text (`ink-400`) is borderline on the off-white page background
- **Severity:** low
- **Impact:** WCAG 1.4.3. The form hint paragraphs and footer micro-copy use `text-ink-400 #6E7785`. On pure white (`#FFFFFF`) this is 4.53:1 (just passes); on the actual site background `--bg: #FAFAFA` it drops to **4.34:1 (marginal FAIL for normal-size text)**. These are small (`text-xs`) hints, so they sit exactly on the threshold and fail on the real off-white surface.
- **Evidence:** Computed: `#6E7785` on `#FFFFFF` = 4.53:1 (PASS); on `#FAFAFA` (the body `--bg` defined `globals.css:7`) = **4.34:1 (FAIL <4.5)**. Usage examples: `src/components/forms/QuoteFormEN.tsx:62,74,86` (`<p className="text-xs text-ink-400 …">` field hints) and the closing micro-copy `:128`. `ink-300 #A8B0BD` (used for breadcrumb separators / decorative) is 2.19:1 but that's decorative-only and acceptable.
- **Fix (code):** Bump hint text one shade to `ink-500 #475569` (7.58:1 on white, comfortably AA) wherever `text-ink-400` carries readable copy on a card/page surface:
  ```tsx
  // QuoteFormEN.tsx / QuoteFormAR.tsx — field hints
  - <p className="text-xs text-ink-400 mt-1">We tailor the proposal…</p>
  + <p className="text-xs text-ink-500 mt-1">We tailor the proposal…</p>
  ```
  Hints sit on white `.card` surfaces inside the form, so `ink-400`→`ink-500` is a safe, low-risk legibility win. Audit with `grep -rn "text-ink-400" src`.
- **SF-equivalent:** Screaming Frog → Accessibility (axe/WCAG) integration → "color-contrast" (moderate); requires the accessibility/Lighthouse add-on.

### Finding 16.5 — Mobile hamburger touch target is 40×40px (under the 44px minimum); no focus trap in the drawer
- **Severity:** low
- **Impact:** WCAG 2.5.5 (Target Size, AAA) / 2.5.8 (Target Size Minimum, AA = 24px — this passes AA but misses the 44px best-practice). The hamburger button is `2.5rem` (40px) square — slightly under the 44px comfortable-tap guideline, marginally harder to hit for motor-impaired users on mobile. Separately, the open mobile drawer does not trap focus, so keyboard/AT users can Tab out of the menu into the (visually hidden) page behind it. Escape-to-close and scroll-lock ARE implemented, so this is a polish gap, not a blocker.
- **Evidence:** `src/app/globals.css:498-515` — `.mobile-menu-hamburger { width: 2.5rem; height: 2.5rem; }` (40px). The drawer (`src/components/layout/MobileMenu.tsx:87-118`) implements `aria-expanded`, `aria-controls`, `aria-label`, Escape handler (`:51-59`) and body-scroll lock (`:39-48`) but no focus containment. (Positive: WhatsApp float button is 56px desktop / 52px mobile — comfortably above 44px, `globals.css:355-356, 460-462`.)
- **Fix (code):** Enlarge the tap target to 44px and add a lightweight focus trap:
  ```css
  /* globals.css */
  .mobile-menu-hamburger { width: 2.75rem; height: 2.75rem; } /* 44px */
  ```
  ```tsx
  // MobileMenu.tsx — focus the first link on open, restore on close, trap Tab
  const panelRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a,button');
    focusables?.[0]?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !focusables?.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen]);
  // add ref={panelRef} to the <nav id="mobile-menu-panel">
  ```
- **SF-equivalent:** Not surfaced by Screaming Frog crawl (interactive/runtime concern); caught by Lighthouse Accessibility ("Tap targets are not sized appropriately") and axe DevTools manual keyboard audit.

### What's working (verified, do not flag)
- **Skip-to-content links** on both locales, targeting `#main`: `src/app/(site)/layout.tsx:11-16` ("Skip to content") and `src/app/ar/layout.tsx:37-42` ("انتقل إلى المحتوى"), shown on `:focus` via `sr-only focus:not-sr-only`.
- **Landmark structure** is correct: `<header>`, `<main id="main">` (both layouts), `<nav aria-label="Primary">` (Header.tsx:39), `<nav aria-label="Mobile navigation">` (MobileMenu.tsx:89), `<nav aria-label="Breadcrumb">` (Breadcrumbs.tsx:14), `<footer>`.
- **Focus is never removed:** `globals.css:36` styles `*:focus-visible { outline: 2px solid accent; outline-offset: 2px; }`; no `outline:none` strip anywhere in globals.css.
- **`prefers-reduced-motion: reduce`** is honored in 3 separate blocks (`globals.css:247-254, 471-493`) — kills marquee, WhatsApp pulse, glow, mobile-menu transitions/animations.
- **Forms are fully labeled:** every `<select>/<input>/<textarea>` in `QuoteFormEN.tsx` and `QuoteFormAR.tsx` has an associated `<label htmlFor>` matching its `id` (industry, headcount, city, name, company, email, phone, notes). Required fields use the native `required` attribute.
- **Hamburger menu ARIA is exemplary:** `aria-expanded`, `aria-controls`, dynamic `aria-label`, `sr-only` text, Escape-to-close, and body-scroll lock (`MobileMenu.tsx:64-77, 39-59`).
- **Decorative imagery handled correctly:** hero `<img alt="" role="presentation">` (82 pages — intentional per WCAG, confirmed false-positive in evidence digest); decorative SVGs/icons carry `aria-hidden="true"` (WhatsAppFloat.tsx:55,63; Header.tsx:32; Breadcrumbs.tsx:18); meaningful controls carry `aria-label` (logo link Header.tsx:24, LangSwitcher.tsx:31, WhatsApp CTA WhatsAppFloat.tsx:51).
- **Breadcrumbs** use semantic `<ol>`/`<li>` with `aria-current="page"` on the last crumb and `aria-hidden` separators (Breadcrumbs.tsx:14-20).
- **Zoom is allowed:** viewport `maximumScale: 5` (layout.tsx:69) — passes WCAG 1.4.4 (no zoom-blocking).
- **Color contrast on primary surfaces is strong:** navy-800 buttons (white on #0F2C4D = 14.12:1), navy-900 headings (16.61:1), ink-500 body text (7.58:1), accent-700 eyebrows/buttons (5.48:1) — all pass AA.

---

## Dimension 17 — Content Quality & Topical Authority

**Score: 6/10.** The site has a genuinely strong topical core — 115 pages ≥1000w, 9 deep industry pillars (467-line template), 12 substantive resource guides, a 41-post blog with healthy cadence, and an exemplary, hard-coded silo architecture that makes cross-silo link bleed impossible. But that authority is undercut by a long thin tail of **91 pages <300w (31% of the corpus)** concentrated in three structurally hollow templates (shop categories, skeleton city pages, empty-body blog posts), **8 soft-404-risk pages <120w**, and a **1:1 shop-category ↔ industry-pillar cannibalization** that splits ranking signals on the site's most valuable head terms. None of this is fatal (no money page is thin), so the dimension is "healthy core, thin periphery" — fixable with merge/expand/delete decisions and a 16-city enrichment push.

---

### Finding 17.1 — Shop-category ↔ industry-pillar keyword cannibalization (8 head-term collisions)
- **Severity: high**
- **Impact:** The 8 shop categories map 1:1 onto 8 of the 9 industry pillars and target the **same KSA head terms**. `/shop/medical-scrubs/` (`<title>Medical Scrubs — UNEOM`) competes with `/industries/healthcare/` (`<title>Healthcare Uniforms in Saudi Arabia — Medical Scrubs & Lab Coats`); `/shop/education/` vs `/industries/education/` (`School Uniforms in Saudi Arabia`); `/shop/aviation/` vs `/industries/aviation/`; and so on for corporate, manufacturing, security, retail, hospitality. Google has two URLs to choose from for "medical scrubs Saudi Arabia" / "school uniforms Saudi Arabia" — the weak 93–163w shop shell will usually lose, but the split dilutes the strong pillar and wastes crawl/PageRank. The shop summaries make it worse by keyword-stuffing the exact pillar term: `categories.ts:9` medical-scrubs summary = *"Scrub suit uniforms near me, lab coats, nurse uniforms & medical uniforms…"*.
- **Evidence:** `src/lib/data/products/categories.ts` (8 categories: medical-scrubs→healthcare, hospitality-attire→hospitality, aviation→aviation, corporate→corporate, education→education, manufacturing→manufacturing, security→security, retail→retail) vs `src/app/(site)/industries/[slug]/page.tsx:24-33` titleMap. Crawl confirms `/shop/medical-scrubs/` title `Medical Scrubs — UNEOM | UNEOM` (163w) vs `/industries/healthcare/` `Healthcare Uniforms in Saudi Arabia — Medical Scrubs & Lab Coats` (deep). Pages × 2 langs = 16 colliding URLs.
- **Fix (code):** Make the pillar the canonical ranking target and demote shop categories to transactional helpers. (a) In `src/app/(site)/shop/[category]/page.tsx:20`, strip the head term from the shop title — change `title: \`${cat.nameEn} — UNEOM\`` to a transactional variant `title: \`Buy ${cat.nameEn} — Bulk Pricing & Samples | UNEOM\``, and rewrite each `summary` in `categories.ts` to a buy-intent line (price, MOQ, lead time) instead of repeating the pillar keyword. (b) Strengthen the existing up-link (`shop/[category]/page.tsx:59-63` already links to the pillar) and add the reciprocal "Shop {category}" CTA on the pillar pointing to the category, so they read as a pillar→buy pair, not two competitors. (c) Optional but cleanest given 1–3 products each: `export const dynamicParams = false` already set — consider folding the thinnest categories' product grids directly into the pillar page and 301-redirecting `/shop/{retail}/` (1 product) to `/industries/retail/#products` in `next.config.mjs`.
- **SF-equivalent:** Reports → "Duplicate" / near-duplicate clusters; and a custom-extraction crawl cross-referencing `<title>` n-grams across the /shop/ and /industries/ folders (Search Analytics "keyword → multiple URLs" in GSC export confirms it live).

---

### Finding 17.2 — 8 soft-404-risk pages (<120w) from near-empty listing shells
- **Severity: high**
- **Impact:** 8 pages render <120w of unique prose — Google's soft-404 threshold territory. The cause is structural, not editorial: shop category pages have **1–3 products each** (`/shop/retail/` has **exactly 1 product** → 93w; `/ar/shop/retail/` 88w), and `/blog/category/aviation/` lists **only 2 posts** → 95w. These are templated grids with only a one-line `cat.summary`/`cat.description` as differentiator and **no H1** (`/shop/medical-scrubs/` crawl H1=`''`). Soft-404s drain crawl budget and can get dropped from the index.
- **Evidence:** Soft-404 set from crawl: `/shop/retail/` 93w, `/blog/category/aviation/` 95w, `/ar/shop/retail/` 88w, `/ar/shop/education/` 107w, `/ar/shop/manufacturing/` 110w, `/ar/shop/security/` 118w, `/ar/shop/aviation/` 118w, `/ar/blog/category/aviation/` 93w. Product counts: `grep -cE "^\s*slug: '" src/lib/data/products/*.ts` → retail=1, aviation=2, education=2, manufacturing=2, security=2 (18 products total across 8 categories). Blog: aviation category = 2 posts (`grep -rhoE "category: '...'" src/lib/data/blog/posts/*.ts`). Shop template `src/app/(site)/shop/[category]/page.tsx` emits no `<h1>` (only `SectionHeader`).
- **Fix (code):** (a) **Delete/merge** the thinnest: 301 `/shop/retail/` → `/industries/retail/` in `next.config.mjs` redirects (1 product doesn't warrant a category page); the AR twins follow. (b) **Expand** the rest by adding a 150–200w buyer-guidance block to the shop template — insert after `SectionHeader` in `shop/[category]/page.tsx:58` a `cat.buyingGuide` field (fabric options, MOQ, sizing, lead time, compliance) rendered as prose, and add the field to each entry in `categories.ts`. (c) Give every shop/blog-category page a real `<h1>`: in `shop/[category]/page.tsx` add `hero` already passes to SectionHeader but it renders no `<h1>` — change SectionHeader to emit `<h1>` when `hero` is set, or hard-add `<h1>{cat.nameEn} Uniforms — Saudi Arabia</h1>`. (d) For `/blog/category/aviation/`: either write 1–2 more aviation posts (you have an aviation pillar + products to support them) or merge the aviation category into a broader "Aviation & Transport" category in `src/lib/data/blog/categories.ts`.
- **SF-equivalent:** Content → "Low Content Pages" (<200 words) + Response Codes / "Soft 404" inspection (GSC Coverage "Soft 404").

---

### Finding 17.3 — 6 published blog posts have empty `body: ''` section stubs (hollow articles)
- **Severity: high**
- **Impact:** Six **live, indexed** blog posts are skeletons: lead paragraph + 4 H2 headings with **`body: ''` and `bodyAr: ''`** + FAQs. The H2s render with no paragraphs beneath them, producing 205–249w "articles" that look complete to a crawler header-wise but deliver no substance — the worst kind of thin content because it sits in the editorial cluster meant to demonstrate E-E-A-T. These are exactly the 6 thin blog posts flagged in the crawl.
- **Evidence:** `grep -rlE "body: ''" src/lib/data/blog/posts/*.ts` → exactly 6 files: `future-professional-wear-digital-age` (205w), `fabrics-student-uniforms` (214w), `material-innovations-aviation-attire` (209w), `industrial-electrostatic-protection` (216w), `mall-retail-uniforms-excellence` (222w), `circular-economy-uniforms` (249w). Confirmed in `src/lib/data/blog/posts/future-professional-wear-digital-age.ts:17-22` — all 4 `sections[].body` are empty strings. By contrast the new procurement post (`school-uniform-procurement-saudi.ts`) is 1160 words of source.
- **Fix (code):** Fill the `body`/`bodyAr` for all 4 sections in each of the 6 files (target ~250–400w per section → ~1000–1500w articles), e.g. in `future-professional-wear-digital-age.ts:18-21` write real copy for "Vital-sign monitoring textiles", "RFID for PPE traceability", etc. Until filled, these should not be published — gate rendering: in the blog post template, `{section.body && <p>…</p>}` already skips empty bodies (that's why they're thin, not broken), so the safest interim fix is to set `draft: true` (or remove from `BLOG_POSTS` export in `src/lib/data/blog/index.ts`) on the 6 until bodies are written, and drop them from the sitemap.
- **SF-equivalent:** Content → "Low Content Pages"; Custom Extraction counting `<h2>` with no following `<p>` text (heading-to-text ratio anomaly).

---

### Finding 17.4 — 16 of 24 city pages are skeleton near-duplicates (high template-similarity)
- **Severity: medium**
- **Impact:** The location template gates **6 major content blocks** (`localizedArchitectEquation`, `definitionLockIn`, `cityProfile`, `localStat`, `localCompliance`, `expandedFaqs`) behind optional fields. Only **8/24 cities** (riyadh, jeddah, dammam, mecca, medina, khobar, tabuk, abha — the 131–132-line data files) populate them. The other **16 cities** (hail, najran, sakaka, arar, al-baha, al-kharj, al-qatif, **dhahran**, yanbu, al-ahsa, al-jubail, buraidah, jazan, khamis-mushait, taif, wadi-al-dawasir — 16–19-line skeletons) collapse to hero + anchor-industry grid where the only differentiated text is the **city name + landmarks + the shared `industry.tagline`** (identical across all 24 cities). Result: 32 thin location pages (EN+AR, 180–260w) at high near-duplicate similarity. Notably **dhahran** (major oil-industry city, 198w) is a skeleton — a real local-SEO miss.
- **Evidence:** `grep -rlE "industryContext:" src/lib/data/saudi-cities/*.ts` → 8 files; same 8 for `expandedFaqs` and `cityProfile`. Template gating at `src/app/(site)/locations/[city]/page.tsx:131,142,149,167,187,279,308`. Fallback text at `locations/[city]/page.tsx:113` (city name + anchor list) and `:235` (`ctx?.en ?? industry.tagline` — shared tagline when no per-city context). City data: `wc -l src/lib/data/saudi-cities/*.ts` → 16-line skeletons vs 131-line enriched. Crawl: 16 EN + 16 AR thin location pages confirmed in thin set.
- **Fix (code):** Prioritized enrichment, not deletion (these are strategic local-SEO assets). Add `industryContext` + `cityProfile` + `expandedFaqs` to the data files of the highest-value skeleton cities first — **dhahran, al-jubail, yanbu** (industrial/oil), **taif, al-ahsa, buraidah, khamis-mushait** (population) — porting the riyadh.ts structure (`src/lib/data/saudi-cities/riyadh.ts:24-40`) with city-specific climate/industry/landmark prose (≥120 unique words/city to clear the near-duplicate bar). For the remaining low-priority small cities, either enrich lightly or consider consolidating into regional pages. Add a CI guard: fail the build if any `SaudiCity` lacks `industryContext` once committed to the strategy.
- **SF-equivalent:** Content → "Near Duplicates" (set similarity threshold ~90%); Crawl Analysis flags the /locations/ folder as a near-dup cluster.

---

### Finding 17.5 — Arabic content of thin posts/cities is untranslated (English in `*Ar` fields)
- **Severity: medium**
- **Impact:** For the 6 hollow blog posts, the Arabic fields (`leadAr`, `headingAr`, FAQ `aAr`) contain **verbatim English copy**, so the 6 `/ar/blog/...` twins serve English text under `lang/dir` that should be Arabic — bad for an Arabic-first market (148 AR pages) and a weak AI-citation/E-E-A-T signal. This compounds the i18n defect already noted in Dimension 14.
- **Evidence:** `src/lib/data/blog/posts/future-professional-wear-digital-age.ts:15-16` — `lead` and `leadAr` are byte-identical English; `:18-21` `headingAr` = English; `:23-28` FAQ `aAr` = English. Same pattern in `fabrics-student-uniforms.ts`, `material-innovations-aviation-attire.ts` (`grep -E "leadAr:"` shows English strings). The AR twins render in the thin set (`/ar/blog/future-professional-wear-digital-age/` 195w).
- **Fix (code):** When filling Finding 17.3 bodies, write real Arabic for every `*Ar` field (not copy-paste). Add a lint/test that flags any post where `leadAr === lead` or `bodyAr === body` to prevent regressions, e.g. a vitest over `BLOG_POSTS` asserting `post.leadAr !== post.lead`.
- **SF-equivalent:** Not natively surfaced; approximate via Custom Extraction comparing `<html lang>` body language vs declared `hreflang` (language-mismatch), or an external language-detection pass on /ar/ URLs.

---

### Finding 17.6 — Freshness signals missing: 40/41 posts have no `updatedAt`; sitemap lastmod is hard-coded stale
- **Severity: medium**
- **Impact:** Only **1 of 41 blog posts** carries `updatedAt`, and the sitemap stamps **one identical hard-coded `<lastmod>2026-05-08`** on all 298 URLs (even the post published 2026-06-13). Google gets no reliable freshness/recency signal, which matters for a market with seasonal demand (Hajj, back-to-school, National Day) and for AI-search recency ranking. The publishing cadence itself is healthy (27 posts in 2025, 14 in 2026, steady to crawl day) — the signal is just not exposed.
- **Evidence:** `grep -rlE "updatedAt:" src/lib/data/blog/posts/*.ts | wc -l` → 1 (of 41). `src/app/sitemap.ts` uses `new Date('2026-05-08')` for every entry (per EVIDENCE.md §RESPONSE). Newest post `school-uniform-procurement-saudi` dated 2026-06-13 still stamped 2026-05-08.
- **Fix (code):** (a) Add real `updatedAt` to each post's data and surface `dateModified` in the Article schema. (b) In `src/app/sitemap.ts`, replace the constant with per-URL real dates — `lastModified: post.updatedAt ?? post.publishedAt` for blog entries, and a content-hash or git-mtime for static hubs — so the sitemap stops emitting a single stale timestamp. (c) Establish a quarterly refresh pass on the 2025 pillar/cluster posts and bump `updatedAt`.
- **SF-equivalent:** Sitemaps report → "lastmod" consistency; Crawl Data → "Last Modified" column showing uniform/stale dates.

---

### Finding 17.7 — Content gaps vs. the procurement cluster (commercial-intent topics still missing)
- **Severity: low**
- **Impact:** Procurement coverage was just strengthened (`uniform-procurement-tender-guide-saudi`, `school-uniform-procurement-saudi` posts + `procurement-guide` resource, 668w). But several high-intent KSA B2B query clusters that competitors and AI assistants get asked about have **no dedicated asset**: (1) **pricing/cost** beyond the thin `uniform-price-index-ksa` (452w EN / 208w AR) — no "how much does a uniform programme cost in Saudi Arabia" calculator/guide; (2) **Saudization/Nitaqat uniform compliance** (referenced in corporate data but no standalone page); (3) **government/B2G tender bidding** mechanics (Etimad portal); (4) **uniform laundering/lifecycle/replacement-cycle** ops content; (5) comparison/alternative pages ("UNEOM vs [competitor]"). These are exactly the gap-fill topics that win AI-search citations for a DR-3 site that can't win on backlinks.
- **Evidence:** Resource slugs present (`grep slug src/lib/data/resources/*.ts`): cleanroom, electrical-safety-ppe, fabric, healthcare-standards, nursing, policy-templates, procurement, security-standards, security-equipment, size, sustainability, weather. No pricing-calculator, no Nitaqat page, no Etimad/B2G page, no lifecycle page. Price index thin (crawl: `/resources/uniform-price-index-ksa/` 452w, AR 208w).
- **Fix (code):** Add 4–5 new entries to `src/lib/data/resources/` and/or `src/lib/data/blog/posts/` targeting these clusters, wired into the relevant silo via `SiloLinks` (the architecture already supports it — just add the data file and set its `silo`). Start with expanding `uniform-price-index-ksa` to ≥800w with a real cost-band table (it's both thin and the highest commercial-intent gap), then a Nitaqat/Saudization compliance pillar-adjacent page.
- **SF-equivalent:** Not a crawl finding — surfaced by GSC "Queries with impressions but no/low-ranking URL" + competitor gap analysis (Ahrefs Content Gap).

---

### What's working
- **Exemplary silo architecture.** `src/components/ui/SiloLinks.tsx` is a single source of truth enforcing pillar→cluster→pillar internal linking (industry pillar → 3 products + 2 resources + 1 case + blog category + 4 posts + 24 cities + quote; products/posts/resources/cases all link UP to category + pillar). Cross-silo bleed is impossible by design. This is best-practice topical-cluster engineering.
- **No city×industry cannibalization.** The pSEO city×industry matrix from v1 was deliberately dropped; only `/locations/[city]/` and `/industries/[slug]/` exist — clean intent separation, no exploding near-dup grid.
- **Deep, intent-aligned pillars.** Industry pillar template is 467 lines with definition lock-in, programme economics, compliance citations with external authority links, comparison matrix, negative-framing ("what goes wrong"), 8-question FAQ, and external sources — strong E-E-A-T and AI-citation surface. 115 pages ≥1000w.
- **Healthy resource hub.** 12 substantive guides (400–1260w; fabric-guide 1260w) plus a price index, each wired into its silo.
- **Strong, consistent blog cadence.** 41 posts, 27 in 2025 + 14 in 2026, steady through crawl day (2026-06-13); the newest procurement posts are 1000+ words with author + reviewer attribution.
- **Services correctly scoped as process-intent.** custom-design / fabric-selection / bulk-ordering / quality-assurance etc. do not cannibalize industries or shop; detail pages are healthy 426–522w.
- **No rendered-text duplicates** among the 8 enriched cities or pillars; titles/descriptions all unique across 296 pages.

---

## Dimension 18 — Competitive Edge & Advanced Signals

UNEOM punches well above a DR-3 site on *advanced technical signals*: a real PWA (manifest + service worker + offline fallback), self-hosted Tajawal via `next/font`, HTTP/2+3 with Cloud CDN, Speculation Rules prerendering, and an emerging WebMCP agentic layer that almost no Saudi competitor has. E-E-A-T fundamentals are genuine (verified CRN/VAT, ISO 9001 + OEKO-TEX credentials, consistent 2013 founding, named authors *and* reviewers with bios). But three things actively cap the competitive ceiling: (1) a **fabricated `AggregateRating` (4.8 / 127 ratings)** hardcoded onto all 36 product pages — a Google rich-results policy violation and an E-E-A-T trust liability; (2) **named authors/reviewers have no profile pages, no `url`/`sameAs`, and their avatar images 404** — the experience signal is asserted but not verifiable; (3) **zero engagement engineering** — the "CognitiveEstimator"/calculator the brief references does not exist anywhere in the codebase, leaving a clear differentiation and dwell-time gap versus a thin competitor set.

**E-E-A-T score: 7/10.** Path to 10 below.

---

### Finding 18.1 — Fabricated AggregateRating on 36 product pages (policy + trust risk)
- **Severity:** high
- **Impact:** `productSchema()` hardcodes `aggregateRating: { ratingValue: '4.8', ratingCount: '127', reviewCount: '89' }` plus a self-authored `review` by "UNEOM Procurement Team" with `ratingValue: '5'`. This is emitted on **all 36 product detail pages** (`/shop/{category}/{product}/` EN + AR). Google's review-snippet policy prohibits self-serving / non-genuine ratings and ratings the business writes about itself. Risk: rich-result suppression, a structured-data manual action, and — worse for an AI-citation goal — LLMs ingesting a fabricated 4.8 as fact, which collapses trust if exposed. The numbers are identical on every product, which is itself a fabrication tell.
- **Evidence:** `src/lib/seo/schemas.ts:431-446` — `ratingValue: '4.8', bestRating: '5', ratingCount: '127', reviewCount: '89'`; `review.author = { '@type': 'Organization', name: 'UNEOM Procurement Team' }`. Call sites: `src/app/(site)/shop/[category]/[product]/page.tsx` + `src/app/ar/shop/[category]/[product]/page.tsx`. Crawl shows 36 product detail URLs.
- **Fix (code):** Remove the synthetic rating until real, collectable reviews exist. In `src/lib/seo/schemas.ts` `productSchema()`, delete the `aggregateRating` and `review` blocks:
```ts
// DELETE these two blocks from the returned object:
// aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ... },
// review: { '@type': 'Review', author: { ... 'UNEOM Procurement Team' }, ... },
```
When genuine reviews exist, gate them: `...(opts.ratingCount && opts.ratingCount > 0 ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: String(opts.ratingValue), ratingCount: String(opts.ratingCount), bestRating: '5' } } : {})` and only include `review` for real, attributed customer reviews.
- **SF-equivalent:** Structured Data → Validation (Search Appearance / Rich Results) → "Review snippet" — flags self-referential / policy-risk review markup; also surfaces in the Custom Extraction of `AggregateRating`.

---

### Finding 18.2 — Authors & reviewers are unverifiable: no profile pages, no `url`/`sameAs`, avatar images 404
- **Severity:** medium
- **Impact:** Blog `articleSchema()` emits `author` (Person + jobTitle + worksFor) and `reviewedBy` (Person + jobTitle), and rich author/reviewer bios exist in data (`AUTHORS` in `src/lib/data/authors.ts`, `REVIEWERS` in `src/lib/data/reviewers.ts`). But (a) there is **no `/author/` or `/team/` route** anywhere in `src/app` — the Person entities point to nothing crawlable; (b) the Person schema carries **no `url` and no `sameAs`**, so Google/LLMs cannot resolve these people to a verified identity; (c) every author/reviewer references an avatar under `public/images/authors/` (e.g. `/images/authors/ahmed-al-farsi.avif`, `/images/authors/reviewer-fatimah.avif`) but **`public/images/authors/` does not exist** — those `<img>` 404. The "Experience/Expertise" half of E-E-A-T is asserted, not demonstrated.
- **Evidence:** `articleSchema()` author block at `src/lib/seo/schemas.ts:494-499` (no `url`/`sameAs`); reviewer block `:500-507`. `ls public/images/authors/` → "NO authors image dir". `find src/app -path "*author*" -o -path "*team*"` → no route. Authors defined `src/lib/data/authors.ts`; reviewers `src/lib/data/reviewers.ts` (3 reviewers with `expertise[]` + `image`).
- **Fix (code):** (1) Ship author profile pages at `/experts/[slug]/` rendering `ProfilePage` + `Person` schema with `description` (bio), `image`, `jobTitle`, `knowsAbout` (from `expertise`), `worksFor: { '@id': ORG_ID }`, and `sameAs` (real LinkedIn URLs). (2) Add `url` + `sameAs` to `ArticleSchemaOpts` and pass through:
```ts
author: {
  '@type': 'Person',
  name: opts.authorName,
  jobTitle: opts.authorTitle,
  url: `${SITE}${prefix}/experts/${opts.authorSlug}/`,
  ...(opts.authorSameAs ? { sameAs: opts.authorSameAs } : {}),
  worksFor: { '@id': ORG_ID }
},
```
(3) Generate the missing avatars into `public/images/authors/` (or change `image` paths to existing assets) so the on-page bylines stop 404-ing.
- **SF-equivalent:** Response Codes → Internal → Client Error (4xx) for the `/images/authors/*.avif` image requests; Structured Data → "Article" validation for the author `url`/`sameAs` gaps; Crawl → "Pages without a linked author profile".

---

### Finding 18.3 — Zero engagement engineering (no calculator / estimator / quiz / configurator)
- **Severity:** medium
- **Impact:** A codebase-wide search for `calculator|estimator|quiz|configurator|CognitiveEstimator` returns **nothing** in `src/components` and `src/app`. There is no interactive lead-magnet (e.g. a uniform-program cost estimator, MOQ/bulk-pricing calculator, fabric/compliance selector quiz). For a B2B procurement audience this is the single highest-leverage dwell-time + backlink + AI-citation asset, and it is exactly the kind of "tool page" that earns links a DR-3 site desperately needs. Competitors (AttireCorp, Genius, ABG) also lack this, so it is a green-field differentiator rather than table stakes.
- **Evidence:** `grep -rli "calculator|estimator|quiz|configurator" src/components src/app` → no matches. The brief's referenced `CognitiveEstimator` does not exist. Quote flow is a static form (`/quote/`), not an interactive estimator.
- **Fix (code):** Add a client-island "Uniform Programme Cost Estimator" at `/resources/cost-estimator/` (EN + AR): inputs = industry, headcount, sets/employee/year, compliance tier → outputs an indicative SAR/unit range and annual budget, with a "Get exact quote" CTA pre-filling `/quote/`. Mark it up with `HowTo`/`WebApplication` schema and link it from every industry hub. Keep it a lazy-loaded `'use client'` island so it does not inflate the shared 339 kB bundle. This converts a static brochure into a citeable interactive tool.
- **SF-equivalent:** Not a defect SF flags directly — surfaces via Crawl → Internal HTML inventory (absence of any `/tools/` or `/resources/*estimator*` URL) and Custom Search ("no `<form>`/interactive widget on resource pages").

---

### Finding 18.4 — Client logos & testimonials carry no machine-readable trust markup
- **Severity:** low
- **Impact:** Real client logos render (Saudi Aramco, SABIC, STC, Almarai, SNB, NAPCO, Nada, Al Baik, QNB — all 9 `.webp` files exist in `public/images/clients/`) and 3 detailed testimonials render on EN + AR homepages (with real-named hospital/hotel/SABIC references and avatar images that exist). But: (a) the logo strip is a CSS marquee wrapped in a single `role="img" aria-label="Client logos"` — the **individual brand names are not exposed as text/structured data**, so AI engines cannot harvest "UNEOM serves Aramco/SABIC/STC"; (b) testimonials have a visible `rating: 5` but emit **no `Review`/`AggregateRating` schema** (the only Review schema is the fabricated product one in 18.1). The strongest social-proof asset on the site is invisible to search/AI.
- **Evidence:** `src/components/ui/ClientLogos.tsx:9-19` (9 clients, files confirmed via `ls public/images/clients/`), `:37-41` (`role="img"` wrapper). `src/components/ui/TestimonialSection.tsx:17-58` (3 testimonials, `rating: 5`, images exist in `public/images/testimonials/`). `grep "Review|AggregateRating" TestimonialSection.tsx` → no schema. Rendered on `(site)/page.tsx:115,225` and `ar/page.tsx:113,223`.
- **Fix (code):** (1) Keep the visual marquee but add a visually-hidden text list of client names so they are in the DOM/AI-readable, and add the client names to the Organization schema or a dedicated `ItemList`. (2) Add genuine `Review` schema for the testimonials (these are attributed, so they are legitimate) — emit a `Review[]` with `author` (Person, the named quoted person), `reviewBody`, `itemReviewed: { '@id': ORG_ID }`, and only an `AggregateRating` if you can substantiate the count. Do **not** reuse the fabricated 4.8 from 18.1.
- **SF-equivalent:** Structured Data → "Review" / "Organization" validation (missing Review markup on testimonial content); Accessibility → images-as-text inside `role="img"`.

---

### Finding 18.5 — PWA manifest declares `lang:"en"`/`dir:"ltr"` for an Arabic-first market; thin resource hints (no GA preconnect)
- **Severity:** low
- **Impact:** PWA is genuinely well-built (covered in "What's working"), but the single `manifest.json` hardcodes `"lang": "en"` and `"dir": "ltr"` — wrong for the 148 Arabic pages and reinforcing the broader RTL `<html lang>` defect. Separately, resource hints are minimal: only **one `preconnect` (wa.me)** and one LCP image `preload`. GA4 (`@next/third-parties`) loads `googletagmanager.com` cross-origin with **no `preconnect`/`dns-prefetch`** warm-up, adding a connection round-trip to a third-party on first paint.
- **Evidence:** `public/manifest.json:9-10` (`"lang": "en", "dir": "ltr"`). `src/app/layout.tsx:89` is the only preconnect; `:103` loads `GoogleAnalytics gaId="G-RSQSS61R9J"` with no preconnect to googletagmanager. Speculation Rules + SW + battery/network-aware inline script confirmed at `layout.tsx:106-119`.
- **Fix (code):** (1) Add a `preconnect` for analytics in `layout.tsx <head>`: `<link rel="preconnect" href="https://www.googletagmanager.com" />`. (2) For correct AR PWA install metadata, serve a locale-aware manifest (e.g. `/ar/manifest.json` with `"lang":"ar","dir":"rtl","start_url":"/ar/"`) referenced from `ar/layout.tsx` metadata, or at minimum set the root manifest neutral. (3) Optionally add `<link rel="preconnect" href="https://wa.me" crossorigin>` since the WhatsApp CTA also issues a cross-origin navigation.
- **SF-equivalent:** Not a core SF tab — manifest issues surface in Lighthouse/PWA audit (run via SF's PageSpeed integration); resource-hint gaps appear in the PageSpeed Insights tab ("Preconnect to required origins").

---

### What's working (do not "fix")
- **PWA is real and correct:** `public/manifest.json` (standalone, 192/512 icons, theme/background colors) + `public/sw.js` (network-first navigations with offline fallback, stale-while-revalidate for static assets, precache of 9 core shells, old-cache purge on activate) + `public/offline.html` exists. SW registered at idle via `requestIdleCallback` so it never blocks first paint (`layout.tsx:116`).
- **Font optimization is exemplary:** Tajawal via `next/font/google` with `subsets:['arabic','latin']`, `display:'swap'`, `adjustFontFallback:true`, exposed as `--font-tajawal` (`layout.tsx:10-16`) — self-hosted, no render-blocking external font CSS, zero font-swap CLS.
- **Critical CSS handled by framework:** Next 15 App Router auto-inlines critical CSS per route; no manual critters/beasties needed.
- **Forward-looking agentic layer:** `WebMCPProvider` (`src/components/WebMCPProvider.tsx`) ships a pure inline `<script>` (no bundle weight) registering 4 `navigator.modelContext` tools (browse_products, request_quote, explore_industry, find_location, get_contact) — a genuine AI-search/agentic-commerce edge competitors lack. Paired with `/llms.txt` and `.well-known` UCP/MCP infra.
- **Speculation Rules** prerender industry hubs + prefetch shop/locations (EN+AR), plus network-aware lite-mode and battery-saver classes (`layout.tsx:110-114`) — advanced perf engineering.
- **E-E-A-T fundamentals are solid:** verified CRN `4030253566` + VAT `311280328300003` with authority URLs, ISO 9001:2015 + OEKO-TEX as `EducationalOccupationalCredential`, consistent `foundingDate: 2013` everywhere (the old v1 2003/2013/2015 conflict is resolved — not flagged), Organization `sameAs` to LinkedIn/Twitter/Instagram, and a proper author **and** independent reviewer model in blog schema.
- **HTTP/2 + HTTP/3** (alt-svc h3) and Cloud CDN are live; LCP hero `preload` with `fetchPriority="high"` is correctly placed.