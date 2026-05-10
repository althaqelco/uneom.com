#!/usr/bin/env node
/**
 * Apply C2PA Content Credentials to every image in the registry.
 *
 * PRECONDITIONS:
 *   - c2patool installed (brew install c2patool)
 *   - UNEOM_C2PA_CERT and UNEOM_C2PA_KEY env vars point to valid PEM files
 *     (issued by Content Authenticity Initiative — see scripts/c2pa/README.md)
 *
 * USAGE:
 *   export UNEOM_C2PA_CERT=/secure/path/uneom-cert.pem
 *   export UNEOM_C2PA_KEY=/secure/path/uneom-key.pem
 *   node scripts/c2pa/sign-all.mjs
 *
 * For each image:
 *   1. Load default manifest template
 *   2. Inject per-image data (title, slug, content location)
 *   3. Sign in-place via c2patool
 *   4. Verify signature
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/uneom.comـnew';
const CERT = process.env.UNEOM_C2PA_CERT;
const KEY = process.env.UNEOM_C2PA_KEY;

if (!CERT || !KEY) {
  console.error('✗ UNEOM_C2PA_CERT and UNEOM_C2PA_KEY env vars required.');
  console.error('  See scripts/c2pa/README.md for setup.');
  process.exit(1);
}
if (!existsSync(CERT) || !existsSync(KEY)) {
  console.error('✗ Cert or key file not found at configured paths.');
  process.exit(1);
}

try {
  execSync('c2patool --version', { stdio: 'pipe' });
} catch {
  console.error('✗ c2patool not installed. Run: brew install c2patool');
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(`${ROOT}/scripts/image-manifest.json`, 'utf-8'));
const template = JSON.parse(readFileSync(`${ROOT}/scripts/c2pa/templates/manifest-default.json`, 'utf-8'));
const tmp = mkdtempSync(join(tmpdir(), 'uneom-c2pa-'));

let signed = 0;
let failed = 0;

for (const img of manifest.images) {
  const absPath = `${ROOT}/public/images/${img.path.replace(/^\/images\//, '')}`;
  if (!existsSync(absPath)) {
    console.error(`✗ Source missing: ${absPath}`);
    failed++;
    continue;
  }

  // Per-image manifest: clone template + inject specifics
  const m = JSON.parse(JSON.stringify(template));
  m.title = img.alt || `UNEOM ${img.slug}`;

  // Add per-image schema.org data with location/keywords
  const cw = m.assertions.find(a => a.label === 'stds.schema-org.CreativeWork');
  cw.data.name = img.alt;
  cw.data.description = img.alt;
  cw.data.keywords = img.keywords?.join(', ');
  cw.data.dateCreated = img.dateOriginal?.replace(/^(\d{4}):(\d{2}):(\d{2}) /, '$1-$2-$3T') + '+03:00';
  if (img.location?.city) {
    cw.data.contentLocation = {
      '@type': 'Place',
      name: img.location.city,
      address: {
        '@type': 'PostalAddress',
        addressLocality: img.location.city,
        addressRegion: img.location.state,
        addressCountry: img.location.countryCode
      }
    };
  }

  const manifestPath = join(tmp, `${img.slug}.json`);
  writeFileSync(manifestPath, JSON.stringify(m, null, 2));

  try {
    execSync(
      `c2patool --certs "${CERT}" --key "${KEY}" --manifest "${manifestPath}" --force "${absPath}"`,
      { stdio: 'pipe' }
    );
    signed++;
    process.stdout.write('.');
  } catch (e) {
    console.error(`\n✗ ${img.slug}: ${e.stderr?.toString() || e.message}`);
    failed++;
  }
}

rmSync(tmp, { recursive: true, force: true });
console.log(`\n\n✓ Signed:  ${signed}`);
console.log(`✗ Failed:  ${failed}`);
console.log(`\nVerify any image: c2patool /path/to/image.avif`);
console.log(`Public verifier:  https://contentcredentials.org/verify`);
