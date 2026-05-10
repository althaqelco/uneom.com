#!/usr/bin/env node
/**
 * Fix the negative-minute bug in process-images.mjs.
 * Re-derives DateTimeOriginal using UNSIGNED shift (>>>) and re-applies
 * to all 100 images + updates manifest.
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/uneom.comـnew';
const MANIFEST = `${ROOT}/scripts/image-manifest.json`;

function seed(s) {
  return parseInt(createHash('md5').update(s).digest('hex').slice(0, 8), 16);
}
function pad(n, w) { return String(n).padStart(w, '0'); }

function dateForSlug(slug) {
  const s = seed(slug);
  const baseDate = new Date('2024-01-01T00:00:00Z').getTime();
  const dayOffset = s % 850;
  // FIX: use unsigned shift >>> to avoid negative mod results
  const hour = 8 + ((s >>> 8) % 11);
  const minute = (s >>> 12) % 60;
  const sec = (s >>> 4) % 60;
  const date = new Date(baseDate + dayOffset * 86400000);
  return `${date.getFullYear()}:${pad(date.getMonth() + 1, 2)}:${pad(date.getDate(), 2)} ${pad(hour, 2)}:${pad(minute, 2)}:${pad(sec, 2)}`;
}

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf-8'));
let fixed = 0;

for (const img of manifest.images) {
  const newDate = dateForSlug(img.slug);
  if (newDate === img.dateOriginal) continue;

  const absPath = `${ROOT}/public/images/${img.path}`;
  try {
    execSync(`exiftool -overwrite_original -DateTimeOriginal="${newDate}" -CreateDate="${newDate}" -ModifyDate="${newDate}" "${absPath}"`, { stdio: 'pipe' });
    img.dateOriginal = newDate;
    fixed++;
    process.stdout.write('.');
  } catch (e) {
    console.error(`\n✗ ${img.slug}: ${e.message}`);
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`\n\n✓ Fixed ${fixed}/${manifest.images.length} timestamps`);
