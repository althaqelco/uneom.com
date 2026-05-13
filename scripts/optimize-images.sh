#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# UNEOM Phase 2.1 — Image Compression Pipeline
# Compresses oversized PNG/JPG assets to WebP with appropriate sizes
# ═══════════════════════════════════════════════════════════════

set -e
IMAGES="/Users/ahmedsalem/Desktop/all my projects/uneom.comـnew/public/images"
TOTAL_SAVED=0

log() { echo "  ✅ $1"; }
warn() { echo "  ⚠️  $1"; }

echo "═══════════════════════════════════════════════════════════"
echo "  UNEOM Image Compression Pipeline — Phase 2.1"
echo "═══════════════════════════════════════════════════════════"
echo ""

# ─── 1. Testimonial Avatars (resize to 192×192 → WebP) ─────────────
echo "▸ Compressing testimonial avatars..."

# aisha.png: 3840×2160 → 192×192 (displayed at 48×48, need 4x for retina)
if [ -f "$IMAGES/testimonials/aisha.png" ]; then
  OLD=$(du -k "$IMAGES/testimonials/aisha.png" | cut -f1)
  sips -z 192 192 "$IMAGES/testimonials/aisha.png" --out "$IMAGES/testimonials/aisha-resized.png" -s format png > /dev/null 2>&1
  cwebp -q 85 -resize 192 192 "$IMAGES/testimonials/aisha-resized.png" -o "$IMAGES/testimonials/aisha.webp" > /dev/null 2>&1
  rm "$IMAGES/testimonials/aisha-resized.png"
  NEW=$(du -k "$IMAGES/testimonials/aisha.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "aisha.png → aisha.webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
fi

# abdullah.png: 1080×1080 → 192×192
if [ -f "$IMAGES/testimonials/abdullah.png" ]; then
  OLD=$(du -k "$IMAGES/testimonials/abdullah.png" | cut -f1)
  cwebp -q 85 -resize 192 192 "$IMAGES/testimonials/abdullah.png" -o "$IMAGES/testimonials/abdullah.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/testimonials/abdullah.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "abdullah.png → abdullah.webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
fi

# fahad.jpg: 1080×1080 → 192×192
if [ -f "$IMAGES/testimonials/fahad.jpg" ]; then
  OLD=$(du -k "$IMAGES/testimonials/fahad.jpg" | cut -f1)
  cwebp -q 85 -resize 192 192 "$IMAGES/testimonials/fahad.jpg" -o "$IMAGES/testimonials/fahad.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/testimonials/fahad.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "fahad.jpg → fahad.webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
fi

# client-1.jpg: 1808×3072 → 192×192 (if used as avatar)
if [ -f "$IMAGES/testimonials/client-1.jpg" ]; then
  OLD=$(du -k "$IMAGES/testimonials/client-1.jpg" | cut -f1)
  cwebp -q 85 -resize 192 192 "$IMAGES/testimonials/client-1.jpg" -o "$IMAGES/testimonials/client-1.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/testimonials/client-1.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "client-1.jpg → client-1.webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
fi

# testimonial-2.jpg
if [ -f "$IMAGES/testimonials/testimonial-2.jpg" ]; then
  OLD=$(du -k "$IMAGES/testimonials/testimonial-2.jpg" | cut -f1)
  cwebp -q 85 -resize 192 192 "$IMAGES/testimonials/testimonial-2.jpg" -o "$IMAGES/testimonials/testimonial-2.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/testimonials/testimonial-2.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "testimonial-2.jpg → testimonial-2.webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
fi

echo ""

# ─── 2. Cultural Images (compress to WebP at 640px) ─────────────────
echo "▸ Compressing cultural images..."

for f in "$IMAGES/cultural/"*.png; do
  [ -f "$f" ] || continue
  BASENAME=$(basename "$f" .png)
  OLD=$(du -k "$f" | cut -f1)
  cwebp -q 80 -resize 640 640 "$f" -o "$IMAGES/cultural/${BASENAME}.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/cultural/${BASENAME}.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "${BASENAME}.png → .webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
done

echo ""

# ─── 3. Process Images (compress to WebP at 800px) ──────────────────
echo "▸ Compressing process images..."

for f in "$IMAGES/process/"*.png; do
  [ -f "$f" ] || continue
  BASENAME=$(basename "$f" .png)
  OLD=$(du -k "$f" | cut -f1)
  cwebp -q 80 -resize 800 800 "$f" -o "$IMAGES/process/${BASENAME}.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/process/${BASENAME}.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "${BASENAME}.png → .webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
done

echo ""

# ─── 4. Grid Pattern → CSS (just note, replaced in CSS) ────────────
echo "▸ grid-pattern.png (496K) — will be replaced via CSS pattern"

echo ""

# ─── 5. Large hero/default images → WebP ────────────────────────────
echo "▸ Compressing hero/default images..."

for f in "$IMAGES/default5.jpg" "$IMAGES/uneom_hero.jpg" "$IMAGES/home-hero.jpg" "$IMAGES/hero-ar.jpg" "$IMAGES/uneom-store.jpg" "$IMAGES/uneom-og-image.jpg"; do
  [ -f "$f" ] || continue
  BASENAME=$(basename "$f")
  NAMEONLY="${BASENAME%.*}"
  OLD=$(du -k "$f" | cut -f1)
  cwebp -q 80 "$f" -o "$IMAGES/${NAMEONLY}.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/${NAMEONLY}.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "${BASENAME} → .webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
done

echo ""

# ─── 6. Client Logos → WebP ──────────────────────────────────────────
echo "▸ Compressing client logos..."

for f in "$IMAGES/clients/"*.png; do
  [ -f "$f" ] || continue
  BASENAME=$(basename "$f" .png)
  OLD=$(du -k "$f" | cut -f1)
  cwebp -q 85 "$f" -o "$IMAGES/clients/${BASENAME}.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/clients/${BASENAME}.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "${BASENAME}.png → .webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
done

echo ""

# ─── 7. Certificate Images → WebP ───────────────────────────────────
echo "▸ Compressing certificate images..."

for f in "$IMAGES/certificate/"*.png; do
  [ -f "$f" ] || continue
  BASENAME=$(basename "$f" .png)
  OLD=$(du -k "$f" | cut -f1)
  cwebp -q 85 "$f" -o "$IMAGES/certificate/${BASENAME}.webp" > /dev/null 2>&1
  NEW=$(du -k "$IMAGES/certificate/${BASENAME}.webp" | cut -f1)
  SAVED=$((OLD - NEW))
  TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
  log "${BASENAME}.png → .webp: ${OLD}K → ${NEW}K (saved ${SAVED}K)"
done

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  Total space saved: ~${TOTAL_SAVED}K"
echo "═══════════════════════════════════════════════════════════"
