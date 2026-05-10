#!/usr/bin/env node
/**
 * Comprehensive fix for all signed-shift bugs in process-images.mjs.
 * Recomputes CreatorTool + IPTC location with unsigned shift (>>>), and
 * re-applies to all affected images. Updates manifest.
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/uneom.comـnew';
const META = JSON.parse(readFileSync(`${ROOT}/scripts/image-data.json`, 'utf-8'));
const MANIFEST_PATH = `${ROOT}/scripts/image-manifest.json`;
const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));

function seed(s) {
  return parseInt(createHash('md5').update(s).digest('hex').slice(0, 8), 16);
}
function pick(arr, n) {
  // FIX: use Math.abs to ensure positive index
  const idx = Math.abs(n) % arr.length;
  return arr[idx];
}

function detectCity(slug, category) {
  if (category === 'cities' && slug.startsWith('hero-')) return slug.replace(/^hero-/, '');
  return null;
}

function buildIptcLocation(slug, city) {
  if (!city || !META.cities[city]) {
    return { sublocation: '', city: '', state: 'Saudi Arabia', country: 'Saudi Arabia', countryCode: 'SA' };
  }
  const c = META.cities[city];
  const s = seed(slug);
  // FIX: use Math.abs in pick
  const sublocation = pick(c.neighborhoods, s >>> 16);
  return {
    sublocation,
    city: c.en,
    state: c.region,
    country: 'Saudi Arabia',
    countryCode: 'SA'
  };
}

let fixed = 0;
let creatorToolFixes = 0;
let sublocFixes = 0;

for (const img of manifest.images) {
  const s = seed(img.slug);
  // FIX: unsigned shift for tool selection
  const newTool = pick(META.creator_tools, s >>> 20);

  const city = detectCity(img.slug, img.category);
  const newLoc = buildIptcLocation(img.slug, city);

  const absPath = `${ROOT}/public/images/${img.path}`;
  const args = [];

  // Fix CreatorTool if it changed
  if (newTool !== img.creatorTool) {
    args.push(`-CreatorTool="${newTool}"`);
    img.creatorTool = newTool;
    creatorToolFixes++;
  }

  // Fix Sub-location for city images (where city was detected)
  if (city && newLoc.sublocation && img.location?.sublocation !== newLoc.sublocation) {
    args.push(`-XMP-photoshop:City="${newLoc.city}"`);
    args.push(`-XMP-iptcCore:Location="${newLoc.sublocation}"`);
    args.push(`-IPTC:Sub-location="${newLoc.sublocation}"`);
    args.push(`-IPTC:City="${newLoc.city}"`);
    img.location = newLoc;
    sublocFixes++;
  }

  if (args.length === 0) continue;

  args.push(`-overwrite_original`);
  try {
    execSync(`exiftool ${args.join(' ')} "${absPath}"`, { stdio: 'pipe' });
    fixed++;
    process.stdout.write('.');
  } catch (e) {
    console.error(`\n✗ ${img.slug}: ${e.message}`);
  }
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
console.log(`\n\n✓ Fixed ${fixed} images`);
console.log(`  - CreatorTool repairs: ${creatorToolFixes}`);
console.log(`  - Sub-location repairs: ${sublocFixes}`);
