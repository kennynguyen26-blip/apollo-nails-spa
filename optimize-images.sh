#!/bin/bash
# =============================================================================
#  optimize-images.sh — Apollo Nails & Spa
#
#  WHAT IT DOES:
#   1. Any photo you drop into  images/  (e.g. images/hero.jpg) is moved into
#      images/originals/  so the full-size file is never lost (and never uploaded).
#   2. From each original it writes the web versions the site uses:
#        images/<name>.jpg   (compressed JPG fallback)
#        images/<name>.webp  (smaller WebP, used by modern browsers)
#      resized to the width each slot needs.
#   3. Builds the browser icons + social share image from the logo files.
#   4. Prints the size before and after, and lists any slot that is still missing.
#
#  HOW TO RUN (Terminal):   cd ~/apollo-nails-spa && bash optimize-images.sh
#  Safe to run again any time. Needs: sips (built into macOS) + cwebp (brew install webp).
# =============================================================================
set -euo pipefail
cd "$(dirname "$0")"
IMG="images"; ORIG="images/originals"
mkdir -p "$ORIG"
command -v cwebp >/dev/null || { echo "cwebp is missing. Install it with:  brew install webp"; exit 1; }

# slot name -> max width
width_for() {
  case "$1" in
    hero) echo 2400 ;;
    hero-mobile) echo 1080 ;;
    service-*) echo 1200 ;;
    gallery-*) echo 1000 ;;
    *) echo 1600 ;;
  esac
}

# 1) move newly dropped photos into originals/
#    A file counts as "new" if it changed after this script last finished (marker file below).
STAMP="$ORIG/.last-run"
is_new() { [ ! -f "$STAMP" ] || [ "$1" -nt "$STAMP" ]; }
shopt -s nullglob nocaseglob
for f in "$IMG"/*.{jpg,jpeg,png,heic,webp}; do
  base="$(basename "$f")"; name="${base%.*}"
  case "$name" in og-image|icon-192|icon-512|logo|logo-light|logo-mark) continue ;; esac
  is_new "$f" || continue          # skip web files this script made last time
  rm -f "$ORIG/$name".*; mv -f "$f" "$ORIG/$base"
done
# drink photos live in images/drinks/ (originals in images/originals/drinks/)
mkdir -p "$ORIG/drinks"
for f in "$IMG"/drinks/*.{jpg,jpeg,png,heic,webp}; do
  base="$(basename "$f")"; name="${base%.*}"
  is_new "$f" || continue
  rm -f "$ORIG/drinks/$name".*; mv -f "$f" "$ORIG/drinks/$base"
done
shopt -u nocaseglob

BEFORE=$(du -sk "$ORIG" | cut -f1)
echo "== Writing web images =="
for src in "$ORIG"/*; do
  base="$(basename "$src")"; name="${base%.*}"
  [ -f "$src" ] || continue
  w=$(width_for "$name")
  cur=$(sips -g pixelWidth "$src" | awk '/pixelWidth/{print $2}')
  [ "$cur" -lt "$w" ] && w=$cur
  sips -s format jpeg -s formatOptions 78 --resampleWidth "$w" "$src" --out "$IMG/$name.jpg" >/dev/null
  cwebp -quiet -q 76 -m 6 "$IMG/$name.jpg" -o "$IMG/$name.webp"
  printf "  %-22s %5spx  jpg %4dKB  webp %4dKB\n" "$name" "$w" $(( $(stat -f %z "$IMG/$name.jpg")/1024 )) $(( $(stat -f %z "$IMG/$name.webp")/1024 ))
done

for src in "$ORIG"/drinks/*; do
  base="$(basename "$src")"; name="${base%.*}"
  [ -f "$src" ] || continue
  w=720; cur=$(sips -g pixelWidth "$src" | awk '/pixelWidth/{print $2}'); [ "$cur" -lt "$w" ] && w=$cur
  sips -s format jpeg -s formatOptions 78 --resampleWidth "$w" "$src" --out "$IMG/drinks/$name.jpg" >/dev/null
  cwebp -quiet -q 76 -m 6 "$IMG/drinks/$name.jpg" -o "$IMG/drinks/$name.webp"
  printf "  %-22s %5spx  jpg %4dKB  webp %4dKB\n" "drinks/$name" "$w" $(( $(stat -f %z "$IMG/drinks/$name.jpg")/1024 )) $(( $(stat -f %z "$IMG/drinks/$name.webp")/1024 ))
done

# 3) icons + share image from logo files (if present)
if [ -f "$IMG/logo-mark.png" ]; then
  sips -Z 180 "$IMG/logo-mark.png" --out apple-touch-icon.png >/dev/null
  sips -Z 192 "$IMG/logo-mark.png" --out "$IMG/icon-192.png" >/dev/null
  sips -Z 512 "$IMG/logo-mark.png" --out "$IMG/icon-512.png" >/dev/null
  sips -s format ico -Z 48 "$IMG/logo-mark.png" --out favicon.ico >/dev/null 2>&1 || true
fi
if [ -f "$IMG/logo-light.png" ]; then
  T="$(mktemp -d)"
  sips -Z 520 "$IMG/logo-light.png" --out "$T/l.png" >/dev/null
  sips -p 630 1200 --padColor 10292A "$T/l.png" --out "$T/og.png" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 85 "$T/og.png" --out "$IMG/og-image.jpg" >/dev/null
  rm -rf "$T"
fi

sleep 1; touch "$STAMP"   # everything written above is now "old"
echo "== Checking every slot the site expects =="
missing=0
for n in logo logo-light; do [ -f "$IMG/$n.png" ] || { echo "  MISSING  $n.png"; missing=1; }; done
for n in hero hero-mobile service-manicure service-pedicure service-nails service-waxing service-eyelash \
         gallery-{1..7}; do
  [ -f "$IMG/$n.jpg" ] && [ -f "$IMG/$n.webp" ] || { echo "  MISSING  $n.jpg"; missing=1; }
done
for i in {1..32}; do
  [ -f "$IMG/drinks/drink-$i.jpg" ] && [ -f "$IMG/drinks/drink-$i.webp" ] || { echo "  MISSING  drinks/drink-$i.jpg"; missing=1; }
done
[ $missing -eq 0 ] && echo "  all slots filled"
WEB=$(find "$IMG" -maxdepth 2 -not -path "*/originals/*" -type f \( -name '*.jpg' -o -name '*.webp' -o -name '*.png' \) -exec stat -f %z {} + | awk '{s+=$1} END{printf "%.1f", s/1048576}')
echo "== Done: originals $(awk -v k="$BEFORE" 'BEGIN{printf "%.1f", k/1024}') MB  ->  web images ${WEB} MB =="
