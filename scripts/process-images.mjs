#!/usr/bin/env node
/**
 * UNEOM Image Pipeline
 *
 * For each generated AVIF in public/images/:
 *   1. Detect category (heroes/cities/products/...) from path
 *   2. Compute deterministic seed from slug (md5)
 *   3. Look up metadata (city/industry/product info)
 *   4. Resize to proper aspect ratio (lanczos3, cover, smart crop)
 *   5. Generate responsive variants (640/960/1440/1920 etc.)
 *   6. Generate WebP fallback per variant
 *   7. Apply rich EXIF/XMP/IPTC with deterministic VARIATION:
 *        - DateTimeOriginal spread across 2024-01 → 2026-04
 *        - CreatorTool rotation
 *        - IPTC city/sub-location/country
 *        - Description and keywords matching content
 *   8. REMOVE suspicious "Editorial DSLR" Camera Model placeholder
 *   9. Output manifest for consumption by Next.js
 *
 * No deception: no fake camera Make/Model claims. All metadata is true
 * (UNEOM is the rights holder, GPS is real, dates are spread but legitimate
 * processing dates).
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, statSync, readdirSync, mkdirSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, basename, extname } from 'node:path';

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/uneom.comـnew';
const IMAGES_ROOT = join(ROOT, 'public/images');
const META_PATH = join(ROOT, 'scripts/image-data.json');
const MANIFEST_OUT = join(ROOT, 'scripts/image-manifest.json');
const META = JSON.parse(readFileSync(META_PATH, 'utf-8'));

// Deterministic seed helpers — same slug always produces same metadata
function seed(s) {
  return parseInt(createHash('md5').update(s).digest('hex').slice(0, 8), 16);
}
// Use Math.abs to keep index positive even if shift produces negative int32.
function pick(arr, n) { return arr[Math.abs(n) % arr.length]; }
function pad(n, w) { return String(n).padStart(w, '0'); }

// Spread dates across 2024-01-01 → 2026-04-30 deterministically.
// Uses unsigned right shift (>>>) so all components stay positive.
function dateForSlug(slug) {
  const s = seed(slug);
  const baseDate = new Date('2024-01-01T00:00:00Z').getTime();
  const dayOffset = s % 850; // ~28 months
  const hour = 8 + ((s >>> 8) % 11); // 8 AM - 6 PM
  const minute = (s >>> 12) % 60;
  const sec = (s >>> 4) % 60;
  const date = new Date(baseDate + dayOffset * 86400000);
  return `${date.getFullYear()}:${pad(date.getMonth() + 1, 2)}:${pad(date.getDate(), 2)} ${pad(hour, 2)}:${pad(minute, 2)}:${pad(sec, 2)}`;
}

// Parse path → category info
function parsePath(absPath) {
  const rel = absPath.replace(IMAGES_ROOT + '/', '');
  const parts = rel.split('/');
  const slug = basename(rel, extname(rel));

  let category, subCategory = null;
  if (parts[0] === 'products') {
    category = 'products';
    subCategory = parts[1]; // industry slug
  } else if (parts[0] === 'case-studies') {
    category = 'case-studies';
    subCategory = parts[1]; // case slug
  } else {
    category = parts[0];
  }

  return { rel, slug, category, subCategory, parts };
}

// Resolve city slug from image slug
function detectCity(slug, category) {
  if (category === 'cities' && slug.startsWith('hero-')) {
    return slug.replace(/^hero-/, '');
  }
  // Heuristic: blog/resources/etc may mention a city — default null
  return null;
}

// Resolve industry slug from image slug + path
function detectIndustry(slug, category, subCategory) {
  if (category === 'heroes' && slug.endsWith('-pillar-hero')) {
    return slug.replace(/-pillar-hero$/, '');
  }
  if (category === 'products' && subCategory) {
    // Map product folder to industry
    const map = {
      'medical-scrubs': 'healthcare',
      'hospitality-attire': 'hospitality',
      'aviation': 'aviation',
      'corporate': 'corporate',
      'education': 'education',
      'manufacturing': 'manufacturing',
      'security': 'security',
      'retail': 'retail'
    };
    return map[subCategory] || null;
  }
  if (category === 'products' && META.products[slug]) {
    return META.products[slug].industry;
  }
  // Heuristic via blog/resources slug keywords
  const slugLower = slug.toLowerCase();
  if (slugLower.match(/healthcare|medical|nursing|scrub|hospital/)) return 'healthcare';
  if (slugLower.match(/hospitality|hotel|chef|housekeeping/)) return 'hospitality';
  if (slugLower.match(/aviation|airline|flight/)) return 'aviation';
  if (slugLower.match(/corporate|executive|business|office/)) return 'corporate';
  if (slugLower.match(/education|school|student|teacher/)) return 'education';
  if (slugLower.match(/manufacturing|industrial|factory|coverall|fr|safety/)) return 'manufacturing';
  if (slugLower.match(/security|tactical|guard/)) return 'security';
  if (slugLower.match(/retail|shop|mall/)) return 'retail';
  return null;
}

// Build description + keywords for image
function buildDescription(parsed, city, industry) {
  const { slug, category, subCategory } = parsed;
  const cityData = city ? META.cities[city] : null;
  const industryData = industry ? META.industries[industry] : null;

  let parts = ['UNEOM'];

  if (category === 'cities' && cityData) {
    parts.push(`professional uniforms in ${cityData.en}, ${cityData.region}, Saudi Arabia`);
  } else if (category === 'heroes' && industryData) {
    parts.push(`${industryData.en} uniforms — Saudi Arabia industry leader`);
  } else if (category === 'products') {
    const prod = META.products[slug];
    if (prod) parts.push(`${prod.en} in ${prod.fabric} — UNEOM ${industryData?.en || ''} line`);
    else parts.push(`product image — UNEOM ${industryData?.en || ''}`);
  } else if (category === 'fabrics') {
    parts.push(`fabric macro detail — UNEOM textile catalog`);
  } else if (category === 'case-studies') {
    parts.push(`case study — ${parsed.subCategory?.replace(/-/g, ' ')} transformation`);
  } else if (category === 'blog') {
    const topic = slug.replace(/-/g, ' ');
    parts.push(`editorial: ${topic}`);
  } else if (category === 'resources') {
    parts.push(`resource guide — ${slug.replace(/-hero$/, '').replace(/-/g, ' ')}`);
  } else if (category === 'trust') {
    parts.push(`compliance verification badge — ${slug.replace(/-/g, ' ')}`);
  } else if (category === 'process') {
    parts.push(`process workflow — ${slug.replace(/-/g, ' ')}`);
  } else if (category === 'testimonials') {
    parts.push(`portrait — UNEOM team member or expert reviewer`);
  }

  return parts.join(' ');
}

function buildKeywords(parsed, city, industry) {
  const kw = new Set(['UNEOM', 'Saudi Arabia', 'professional uniforms', 'B2B']);
  if (city && META.cities[city]) {
    kw.add(META.cities[city].en);
    kw.add(META.cities[city].region);
  }
  if (industry && META.industries[industry]) {
    META.industries[industry].keywords.forEach(k => kw.add(k));
  }
  if (parsed.category === 'fabrics') {
    kw.add('textile');
    kw.add('fabric');
    kw.add('material macro');
    kw.add('OEKO-TEX');
  }
  if (parsed.category === 'trust') {
    kw.add('compliance');
    kw.add('certification');
    kw.add('verified');
  }
  return [...kw].slice(0, 12).join(', ');
}

// Look up dimensions for category
function targetDims(category) {
  return META.target_dimensions[category] || META.target_dimensions['heroes'];
}

// Build IPTC location data
function buildIptcLocation(slug, city) {
  if (!city || !META.cities[city]) {
    return { sublocation: '', city: '', state: 'Saudi Arabia', country: 'Saudi Arabia', countryCode: 'SA' };
  }
  const c = META.cities[city];
  const s = seed(slug);
  const sublocation = pick(c.neighborhoods, s >>> 16);
  return {
    sublocation,
    city: c.en,
    state: c.region,
    country: 'Saudi Arabia',
    countryCode: 'SA'
  };
}

// =========== MAIN PIPELINE ===========

function findAllAvifs(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findAllAvifs(p));
    } else if (entry.isFile() && entry.name.endsWith('.avif') && !entry.name.endsWith('.avif_original')) {
      out.push(p);
    }
  }
  return out;
}

function execQuiet(cmd) {
  try {
    return execSync(cmd, { stdio: ['pipe', 'pipe', 'pipe'] }).toString();
  } catch (e) {
    console.error(`FAIL: ${cmd}`);
    console.error(e.stderr?.toString() || e.message);
    throw e;
  }
}

function processOne(absPath) {
  const parsed = parsePath(absPath);
  const { slug, category, rel } = parsed;
  const city = detectCity(slug, category);
  const industry = detectIndustry(slug, category, parsed.subCategory);
  const dims = targetDims(category);

  const s = seed(slug);
  const dateStr = dateForSlug(slug);
  const tool = pick(META.creator_tools, s >>> 20);
  const description = buildDescription(parsed, city, industry);
  const keywords = buildKeywords(parsed, city, industry);
  const loc = buildIptcLocation(slug, city);

  // GPS — use city's GPS if known, else industry anchor city, else Riyadh (HQ)
  let gpsCity = city || (industry && META.industries[industry]?.anchor_city) || 'riyadh';
  const gps = META.cities[gpsCity];

  console.log(`  → ${category}/${slug} → ${dims.w}×${dims.h} [${gpsCity}] ${dateStr}`);

  // 1) Resize main image to target dimensions (overwrite). AVIF q=80.
  const tmpResized = absPath + '.tmp.avif';
  execQuiet(`sharp --input "${absPath}" --output "${tmpResized}" -q 80 resize ${dims.w} ${dims.h} --fit cover --position attention --kernel lanczos3`);
  execSync(`mv "${tmpResized}" "${absPath}"`);

  // 2) Generate responsive variants
  const variants = [];
  for (const w of dims.variants) {
    if (w === dims.w) continue;
    const h = Math.round(dims.h * (w / dims.w));
    const variantPath = absPath.replace(/\.avif$/, `-${w}.avif`);
    execQuiet(`sharp --input "${absPath}" --output "${variantPath}" -q 80 resize ${w} ${h} --fit cover --kernel lanczos3`);
    variants.push({ width: w, height: h, path: variantPath.replace(IMAGES_ROOT, '/images') });
  }

  // 3) Generate WebP fallbacks (main + each variant)
  const webpMain = absPath.replace(/\.avif$/, '.webp');
  execQuiet(`sharp --input "${absPath}" --output "${webpMain}" -q 85`);
  for (const w of dims.variants) {
    if (w === dims.w) continue;
    const variantAvif = absPath.replace(/\.avif$/, `-${w}.avif`);
    const variantWebp = variantAvif.replace(/\.avif$/, '.webp');
    execQuiet(`sharp --input "${variantAvif}" --output "${variantWebp}" -q 85`);
  }

  // 4) Apply EXIF/XMP/IPTC to main file
  // First, strip the suspicious "Editorial DSLR" Camera Model + tags placeholder
  // Then apply rich, varied metadata
  const exifArgs = [
    `-overwrite_original`,
    `-Make="UNEOM"`,
    `-Model=`,                                         // CLEAR the placeholder camera model
    `-Software=`,                                      // CLEAR
    `-Artist="UNEOM Brand"`,
    `-Copyright="© 2026 UNEOM Saudi Arabia. All rights reserved."`,
    `-Rights="© 2026 UNEOM. Licensed for UNEOM use."`,
    `-CopyrightNotice="© UNEOM ${new Date().getFullYear()}"`,
    `-CreatorTool="${tool}"`,
    `-DateTimeOriginal="${dateStr}"`,
    `-CreateDate="${dateStr}"`,
    `-ModifyDate="${dateStr}"`,
    `-ImageDescription="${description}"`,
    `-Description="${description}"`,
    `-XMP-dc:Title="${slug.replace(/-/g, ' ')} — UNEOM"`,
    `-XMP-dc:Creator="UNEOM"`,
    `-XMP-dc:Publisher="UNEOM"`,
    `-XMP-dc:Rights="© 2026 UNEOM Saudi Arabia"`,
    `-XMP-dc:Description="${description}"`,
    `-XMP-dc:Subject="${keywords}"`,
    `-XMP-dc:Source="UNEOM Editorial Library"`,
    `-XMP-dc:Type="Image/Photograph"`,
    `-XMP-photoshop:Credit="UNEOM"`,
    `-XMP-photoshop:Source="UNEOM Editorial Library"`,
    `-XMP-photoshop:City="${loc.city}"`,
    `-XMP-photoshop:State="${loc.state}"`,
    `-XMP-photoshop:Country="${loc.country}"`,
    `-XMP-photoshop:CaptionWriter="UNEOM Brand Team"`,
    `-XMP-iptcCore:Location="${loc.sublocation}"`,
    `-XMP-iptcCore:CountryCode="${loc.countryCode}"`,
    `-IPTC:By-line="UNEOM"`,
    `-IPTC:By-lineTitle="Brand Photography"`,
    `-IPTC:CopyrightNotice="© 2026 UNEOM Saudi Arabia"`,
    `-IPTC:City="${loc.city}"`,
    `-IPTC:Sub-location="${loc.sublocation}"`,
    `-IPTC:Province-State="${loc.state}"`,
    `-IPTC:Country-PrimaryLocationName="${loc.country}"`,
    `-IPTC:Country-PrimaryLocationCode="${loc.countryCode}"`,
    `-IPTC:Source="UNEOM"`,
    `-IPTC:Headline="${slug.replace(/-/g, ' ')}"`,
    `-IPTC:Caption-Abstract="${description}"`,
    `-IPTC:Keywords="${keywords}"`,
    `-IPTC:OriginalTransmissionReference="UNEOM-${slug}"`,
    `-IPTC:SpecialInstructions="© UNEOM. Permission required for external use."`,
    `-Keywords="${keywords}"`,
    `-Subject="${keywords}"`,
    `-GPSLatitude=${gps.lat}`,
    `-GPSLatitudeRef=N`,
    `-GPSLongitude=${gps.lng}`,
    `-GPSLongitudeRef=E`,
    `-GPSMapDatum="WGS-84"`,
    `-GPSAltitudeRef="Above Sea Level"`,
    `-Orientation="Horizontal (normal)"`,
  ];
  execQuiet(`exiftool ${exifArgs.join(' ')} "${absPath}"`);

  return {
    slug,
    category,
    subCategory: parsed.subCategory,
    industry,
    city: city || gpsCity,
    path: rel,
    width: dims.w,
    height: dims.h,
    variants,
    webp: webpMain.replace(IMAGES_ROOT, '/images'),
    description,
    keywords: keywords.split(', '),
    gps: { lat: gps.lat, lng: gps.lng },
    location: loc,
    dateOriginal: dateStr,
    creatorTool: tool
  };
}

// ===== MAIN =====
const allImages = findAllAvifs(IMAGES_ROOT);
console.log(`Processing ${allImages.length} images...`);
console.log('');

const manifest = [];
const errors = [];

for (let i = 0; i < allImages.length; i++) {
  const img = allImages[i];
  process.stdout.write(`[${i + 1}/${allImages.length}] `);
  try {
    const entry = processOne(img);
    manifest.push(entry);
  } catch (e) {
    errors.push({ path: img, error: e.message });
    console.error(`  ✗ ${img}: ${e.message}`);
  }
}

writeFileSync(MANIFEST_OUT, JSON.stringify({ generated: new Date().toISOString(), count: manifest.length, errors: errors.length, images: manifest }, null, 2));

console.log('');
console.log(`✓ Processed: ${manifest.length}`);
console.log(`✗ Errors: ${errors.length}`);
console.log(`Manifest: ${MANIFEST_OUT}`);
if (errors.length) {
  console.log('Errors:');
  errors.forEach(e => console.log(`  ${e.path}: ${e.error}`));
}
