# Apollo Nails & Spa — website

Plain HTML/CSS/JS. No build step. Vercel framework preset: **Other**.

## Files
- `index.html` — the whole home page (English + Spanish side by side)
- `terms.html`, `privacy.html`, `accessibility.html`, `404.html`
- `styles.css`, `script.js`, `lang-init.js` (sets language before the page paints), `noscript.css`
- `vercel.json` — security and cache headers
- `optimize-images.sh` — turns photos into web-ready WebP + JPG
- `PLAN.md` — research, decisions and the image list
- `CREDITS.md` — where every photo came from (stock licenses logged)

## Preview locally
```
cd ~/apollo-nails-spa && python3 -m http.server 8765
```
Then open http://127.0.0.1:8765/

## Adding photos
1. Drop photos into `images/` using the exact names in PLAN.md section 6 (e.g. `hero.jpg`, `gallery-1.jpg`).
2. Run `bash optimize-images.sh` (needs `brew install webp`).
3. Originals move to `images/originals/` (not uploaded). Each slot shows its photo automatically — no code changes.
4. Drink photos live in `images/drinks/` (`drink-1.jpg` … `drink-32.jpg`, copied from Ventana Katy). Drop a replacement there and rerun the script.

## Common edits
- **Hours:** the hours table in `index.html` (`#visit`) and `CONFIG.HOURS` at the top of `script.js` (drives "Open now").
- **Holiday closures:** add a date to `CONFIG.SPECIAL` in `script.js`.
- **Prices:** every price shows cash and card (card = cash × 1.02). Edit both numbers in the menu section of `index.html`, and the cash price in the JSON-LD at the top. The official menu is in PLAN.md section 1.
- **Site URL:** `https://www.apollonailsspakaty.com` is set in `index.html` (canonical, Open Graph, schema), `robots.txt` and `sitemap.xml`. Change all of them together if the domain ever changes.
- **Spanish:** every English line has a matching `<span class="es">` next to it. Edit both.
