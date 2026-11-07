# Apollo Nails & Spa: Website Plan

Research and plan only. No website code has been written. Prepared 2026-11-07.

**Status: waiting for your approval.** Before the build starts, please answer the questions in section 2 marked **DECISION**.

---

## 1. Apollo facts found

Source key:
- **OBS**: your Obsidian vault
- **PDF-MENU**: `~/Downloads/MENU APOLLO - VENTANA - 23-6-26.pdf`
- **PDF-CARD**: `~/Downloads/CARD APOLLO NAILS SPA - final.pdf`
- **PDF-FLYER**: `~/Downloads/Apollo Nails & Spa-1 (2).pdf`
- **GMAPS**: Google Maps listing, pulled 2026-11-07
- **WEB**: the existing apollonailsspakaty.com
- **GOCHECKIN**: the live booking page

> **Obsidian result:** I read Filing Rules, Clients — Hub, Ventana Nails Spa — Hub, Ventana Katy (Clay Rd) — Website Build, Ventana Richmond — Website Build, and Ventana — Legal Pages, Cookies & Accessibility. I also searched the whole vault, including `_Backup before reorg 2026-11-02`. **No note mentions "Apollo".** There is also no Base44 or kiosk menu note for Apollo; the only kiosk mention is the $100 kiosk line on the Richmond invoice. The one indirect link is in the Katy build notes in `~/ventana-nails-spa-katy/BUILD-NOTES.md`: Katy's "Salon Policy" was copied from a source titled **"Apollo Nails & Spa Policy"**. That source turned out to be the printed menu PDF in Downloads. All the Apollo facts below come from your Downloads files and the web.

### Business basics

| Fact | Value | Source |
|---|---|---|
| Name | Apollo Nails & Spa. The flyer brands it **"Apollo Nails & Spa at Elyson"** | PDF-CARD, PDF-FLYER |
| Address | 23927 FM 529 Rd, Suite 800, Katy, TX 77493. Google writes it "23927 FM 529 #800" | You, PDF-CARD, GMAPS, WEB |
| Phone | (832) 305-6566 → `tel:+18323056566` | You, PDF-CARD, WEB |
| Hours | Mon–Fri 9:30 AM–7:00 PM · Sat 9:00 AM–7:00 PM · Sun 11:00 AM–5:30 PM (same as Ventana) | PDF-CARD, WEB. Holiday hours unconfirmed |
| Google rating | **4.8 ★, 492 reviews** (as of 2026-11-07) | GMAPS |
| Google category | Nail salon | GMAPS |
| Google Place ID | `ChIJQdxJflEpQYYRumk3VogDbMM` (lets us build a direct "Leave a review" link) | GMAPS |
| Booking link | **https://booking.gocheckin.net/v2/19035** (live, page title "Apollo Nails & Spa") | WEB, GOCHECKIN |
| Instagram | https://www.instagram.com/apollo_nails_spa_katy/ (@apollo_nails_spa_katy) | WEB (link is live) |
| Facebook | https://www.facebook.com/692083963985831 | WEB |
| Existing website | **apollonailsspakaty.com is already live**, built by **Fastboy Marketing** on GoCheckin's CMS. This is the same situation as Ventana Katy | WEB, PDF-FLYER |
| Opened | Grand opening was about the last week of July 2025 (earliest reviews 2025-07-27 mention it) | GMAPS reviews |
| Legal entity | The Zelle QR code on the flyer is for **"ELYSON LLC"**, probably the operating company. Unconfirmed | PDF-FLYER |
| Email | Not found | — |

### Things customers mention in reviews (useful copy, but confirm before publishing)

- Complimentary drinks with a full bar: mimosa, margarita, old fashioned, Vietnamese iced coffee, mocktails, "Cucumber Fresh". Cucumber Fresh is also Ventana drink #25, so Apollo probably has the **same drink menu as Ventana**. The printed menu cover says "Complimentary Drinks: Wine · Soft Drinks · Coffee · Water · Cocktail".
- Promotions: "today was 20% off because it's Monday", "various promotions throughout the week", and 20% off for new customers or the grand opening. **Unconfirmed. Do not publish without the owner's OK.**
- Massage pedicure chairs "with built-in chargers", a large color selection, "newly sanitized and wrapped supplies", walk-ins accepted, Sunday same-day service.
- The menu also lists a **disposable pedi kit** (under the Bomb Spa).

### OFFICIAL MENU (from the owner, 2026-11-07). Replaces every earlier Apollo price, including the 23-6-26 PDF, Obsidian, the web and the Ventana sites

**Pricing format:** every service has a **cash** price and a **card** price. Card is exactly **2% higher**. The site shows both on every item ("$20 cash · $20.40 card") and has the note "Card payments are 2% higher than cash." at the top of the services section. "& up" items show "& up" on both prices. All 46 card prices were checked against cash × 1.02 and none differ.

Gel polish (shellac) upgrade on **any** manicure or pedicure: $20 cash · $20.40 card

**Manicure**

| Service | Massage | Cash | Card |
|---|---|---|---|
| Basic Manicure | — | $20 | $20.40 |
| Signature Manicure | 7 min | $40 | $40.80 |
| Deluxe Manicure | 10 min | $50 | $51 |

**Pedicure** (each has a "See full details" toggle with its steps and scents)

| # | Service | Massage | Cash | Card | Scent options |
|---|---|---|---|---|---|
| 1 | Basic Pedicure | 5 min | $36 | $36.72 | — |
| 2 | Sugar Pedicure | 8 min | $42 | $42.84 | Lavender, Tropical, Mango |
| 3 | Sugar and Mask | 12 min | $50 | $51 | Orange, Lemon, Cucumber Dream, White Pearl |
| 4 | Deluxe Pedicure | 14 min | $60 | $61.20 | Rose, Orange, Green Tea, Milk & Honey, Cucumber, Lemongrass |
| 5 | Billionaire Spa | 18 min | $70 | $71.40 | Lavender, Coffee, Green Tea & Aloe Vera, Jasmine, Golden Rose |
| 6 | Bomb Spa | 22 min | $80 | $81.60 | Japanese Cherry Blossom, Melon Mango, Hawaii Citrus, 24K Crazy Rich, Mother of Pearl, Red Carpet |
| 7 | Collagen Spa Pedicure (9 steps) | 28 min | $90 | $91.80 | Rose Gold, Crystal Water, Fuji Pearl, Spearmint |
| 8 | Herbal Bliss Spa ("Dedicated to your well-being", Foot Detox & Muscle Relief) | 35 min | $100 | $102 | — (ingredients listed) |

The full step text for every pedicure is in `index.html`, copied word for word from the official menu message, with Spanish alongside.

**Nail Enhancement**

| Service | Full set (cash · card) | Fill-in (cash · card) |
|---|---|---|
| Gel X | $65 · $66.30 | not offered |
| Hybrid Gel | $65 · $66.30 | $55 · $56.10 |
| Acrylic | $55 · $56.10 | $47 · $47.94 |
| Builder | $60 · $61.20 | $50 · $51 |
| PSW - Ombre | $65 · $66.30 | $60 · $61.20 |
| Dip | $50 · $51 | not offered |
| Full Set Color Powder | $55 · $56.10 | $45 · $45.90; with color change $50 · $51 |

Extras & add-ons: Gel Color Only $30 · $30.60 / Toe or Fingernail Color Change $15 · $15.30 / Nail Removal Only $15 · $15.30 / Nail Removal With Service $10 · $10.20 / Shape (Cut Down & Reshape) $5 · $5.10 / Length $5 & up · $5.10 & up / Design $5 & up · $5.10 & up / French $5 & up · $5.10 & up

**Waxing** (cash · card)

Eyebrows $12 · $12.24 / Lip or Chin $10 & up · $10.20 & up / Whole Face $45 & up · $45.90 & up / Full Arms $55 & up · $56.10 & up / Half Arms $35 & up · $35.70 & up / Underarms $25 & up · $25.50 & up / Full Legs $55 & up · $56.10 & up / Half Legs $40 & up · $40.80 & up / Back $45 & up · $45.90 & up / Brow Tinting $45 & up · $45.90 & up

**Eyelash** (its own tab)

Eyelash Strips $25 · $25.50 / Eyelash Individuals $120 · $122.40 / Eyelash Cluster $45 · $45.90

**Drinks:** the same 32 drinks as Ventana. Photos are copied from `~/ventana-nails-spa-katy/images/` (all 32 were there, so the Richmond fallback wasn't needed) into `images/drinks/`, with the same file names (`drink-1.jpg` … `drink-32.jpg`). The names come from Ventana Katy's `DRINKS` list in the same order. The Ventana folders were not changed.

**Salon Policy** (8 rules plus intro and thank-you; already translated to Spanish in the Katy site and reusable)
1. We reserve the right to refuse service to anyone.
2. No refunds; we will try our best to resolve the issue.
3. Prices are available and transparent on the menu.
4. Cancel at least 3 hours ahead. After 3 no-notice cancellations, you can no longer book in advance.
5. Health issues or diabetes must be told before service.
6. Report any issue immediately or within 24 hours.
7. No guarantee on regular polish or fill-in/refill services.
8. Our license does not allow ingrown nail removal, but we will help manage it.

> ⚠️ **Do not copy the Katy menu.** Katy's prices match Apollo's, but Katy also has 7 Ventana-only services that are **not on Apollo's printed menu**: Volcano Spa Eruption $70, Volcano Luxury $100, Ventana Herbal $120, Gel Manicure $40, Add Gel Color $20, Paraffin $8, Extra Massage $1/min. Apollo is built from the Apollo PDF only.

### Existing brand look (from Apollo's own print materials)

- **Printed menu and policy:** deep teal-evergreen gradient (about `#1F3836` → `#46646A`) with champagne-gold line-art palm leaves and fine gold "wave" lines. The logo is a thin lowercase "Apollo" with widely spaced "NAILS & SPA" capitals. Headings are a high-contrast serif.
- **Business card:** black marble, gold veins, glitter, all-caps serif "APOLLO / Nails & Spa".
- **Flyer:** "APOLLO NAILS & SPA at ELYSON" in a gold serif.
- Those are three different logos. See the DECISION about the logo in section 2.
- `~/Downloads/VENTANA & APOLLO NAILS SPA*.png` (10 files) are **sugar-scrub product labels**, not website photos. Their stock or AI pedicure images are not good hero material.

### Six real 5★ Google reviews (copied word for word from Google Maps on 2026-11-07)

These are copied exactly as written, emoji included. I only changed line breaks to paragraphs. I skipped reviews that name a competitor or have a negative "Update:" added later. All are English, so they stay English on the Spanish page, as on Katy.

1. **Cindy** ★★★★★ (Aug 2026)
   > I had an amazing experience at Apollo Nails & Spa! The salon is spotless, relaxing, and the staff is incredibly friendly and welcoming. They took their time to make sure every detail was perfect, and my nails came out absolutely beautiful. The shape is flawless, the finish is smooth and elegant, and they look even better than I imagined. I never felt rushed, and the quality of their work really stands out. I highly recommend Apollo Nails & Spa if you're looking for beautiful, long-lasting nails and excellent customer service. I'll definitely be coming back! 💕

2. **Alexis** ★★★★★ (Sep 2026)
   > Jimmy did an AMAZING job on my nails. This is the best my nails have ever looked and he was quick and precise with every detail on them although I got a simple set. I am very specific on shape, length, and thickness of the nail and he gave me exactly what I wanted effortlessly.

3. **Miesha** ★★★★★ (Aug 2026)
   > This was an amazing experience from the time I walked in until I walked out. Helen really took her time to work on my calluses and extra cuticles. She took her time to scrub and massage my feet. They brought me a drink, I got a mocktail and it was cute and presented like a cocktail. the massage chairs were comfortable and they used newly sanitized and wrapped supplies to do my feet. 10/10. I am putting this place in my rotation.

4. **Ebony** ★★★★★ (Oct 2026)
   > Finally found my nail spot. Just moved from Dallas and have been looking for the right nail salon. Tee was very detailed with my short square, acrylic refill. She was gentle and very efficient. Polish was neat and she did what I wanted. Christine did my pedicure and I am extremely pleased. The salon is super clean, elegant and has a large color selections. They offered us a complimentary drink. I had the mimosa. My daughter had a margarita. We called before arriving and they were able to service us on a Sunday with very little notice. Prices are reasonable. All of the staff was very friendly and helpful. I highly recommend.

5. **Isabelle** ★★★★★ (Aug 2026)
   > It was my first time at this nail salon and my experience was great. I decided to book an appointment with Tee after reading the reviews and she is a great nail tech! She was quick yet attentive to detail and didn’t rush me when I was choosing my color. She also made sure I was satisfied with everything. I will definitely be coming back!

6. **Journi** ★★★★★ (Sep 2026)
   > Great conversation with Anna & Tee, it was my first time coming and they made me feel so comfortable! Also them drinks were HITTING, had a mimosa and felt sooo relaxed. Definitely my new spot!!

Backups, also real 5★: Leonor, Shaneka, Stanisha, Krystal, An, Mililani. I have the full text of 40 recent reviews if you want to swap any.

> Note: Ebony's review is long. In the carousel, long reviews will show the first ~4 lines with a "Read more" toggle. The text itself is never shortened.

---

## 2. MISSING INFO: what I need from you

**DECISIONS**
1. **DECISION: Domain.** apollonailsspakaty.com is already used by the Fastboy/GoCheckin site, and it is printed on the flyer. Options: (a) take the domain over from Fastboy, which needs registrar access, or (b) launch on a free `*.vercel.app` address first and decide later, as with Katy. Until then I'll use a marked `SITE_URL` placeholder and won't point canonical tags at a domain you don't control.
2. **DECISION: Which logo?** Option 1: thin "Apollo / NAILS & SPA" from the menu (my recommendation; it's the cleanest and most premium). Option 2: serif caps from the business card. Option 3: "at ELYSON" from the flyer. **I need the logo file**, ideally SVG or AI/PDF vector, or else a transparent PNG at least 1200 px wide.
3. **DECISION: Name in the header:** "Apollo Nails & Spa" or "Apollo Nails & Spa at Elyson"? I recommend "Apollo Nails & Spa" as the name, with "at Elyson · Katy, TX" as the line under it. That way the site still ranks for "Elyson".
4. ~~Spanish as separate `/es/` pages~~ **Settled by your build rules:** one set of pages with an EN/ES toggle that translates everything (including legal pages) and remembers the choice. English text is written directly in the HTML, so Google and AI tools can read prices and hours. Spanish comes from the toggle. Tradeoff: Google will mostly index the English version. That's acceptable for launch, and Spanish URLs can be added later if wanted.

**Content to confirm**
5. Is the menu PDF dated **23-6-26** still current? (It was saved to Downloads in July.)
6. Can I fix the menu typos on the site? "Billionairse" → "Billionaire", "Dedecated" → "Dedicated", "Unskin Texture" → "Uneven Skin Texture", "Japanese Cheery Blossom" → "Japanese Cherry Blossom", "MεταBolism" → "Metabolism", "Nails Remove" → "Nail Removal".
7. ~~Collagen Spa CBD line~~ **Settled by the official menu:** the CBD wording is gone.
8. Show the long **ingredient lists** (Billionaire Spa, Herbal Bliss)? I suggest putting them behind a small "Ingredients" toggle (good for allergies) rather than removing them.
9. ~~Drinks~~ **Settled:** reuse Ventana's drink list and photos (now in `images/drinks/`).
10. **Promotions:** is "Monday 20% off" or a new-customer discount real and ongoing? If yes, I'll add an optional, easy-to-turn-off announcement bar.
11. **Email address** for the contact section and legal pages.
12. **Holiday hours or closures.**
13. **Gift cards:** sold or not?
14. **Walk-ins welcome?** Reviews say yes; please confirm before I state it.
15. **Legal entity name** for the Terms and Privacy pages: is it "Elyson LLC"?
16. **Photos:** the full list is in section 6. The Fastboy site has 7+ gallery photos (`gocheckin.net/19035-4760/page/gallery-*.webp`). If those are the salon's own photos, I can **get the originals from the owner rather than download them** from Fastboy's site.

---

## 3. Design direction: "Evergreen & Champagne"

> Skill check: **`impeccable` and `design-motion-principles` are not installed** on this Mac. They aren't in `~/.claude/skills` or the plugin list. I followed the same principles by hand: restraint, clear hierarchy, real contrast, and purposeful motion. If you install them, I'll run the build through them.

**Goal:** Apollo should feel like a quiet, modern day spa. Ventana feels like warm cream and bright gold "glam"; Apollo should look calmer, more editorial and more expensive. The identity grows out of Apollo's own printed menu (evergreen plus fine gold line-art), so the site and the in-salon menu look like one brand.

**How it differs from Ventana**

| | Ventana (Katy and Richmond today) | Apollo |
|---|---|---|
| Base | Warm cream `#FAF6EE` with charcoal bands | Cool porcelain `#F6F4EF` with **deep evergreen** bands |
| Gold | Bright metallic `#D4AF37`, used a lot | **Champagne** `#C8A96A`, used sparingly (hairlines, numbers, small details) |
| Fonts | Marcellus + DM Sans | **Bodoni Moda** (display) + **Manrope** (text) + **Tenor Sans** (small wide capitals, like the "NAILS & SPA" lockup) |
| Shapes | Rounded 14–24 px pills, arched hero photo | Crisp 2–6 px corners, thin 1 px lines, tall portrait photos with generous margins |
| Hero | Split layout with arched photo and badge | Full-height photo with an evergreen gradient and a big serif headline |
| Feel | Glam, glowy | Calm, spa-like, editorial |

**Color tokens** (contrast checked against WCAG AA)

| Token | Hex | Use |
|---|---|---|
| `--evergreen-900` | `#10292A` | Dark bands, footer, mobile bar |
| `--evergreen-700` | `#1E4442` | Buttons, links, active tab |
| `--sage-400` | `#8FA7A0` | Dividers on dark, muted icons |
| `--porcelain` | `#F6F4EF` | Page background |
| `--stone` | `#E7E2D8` | Cards, alternate sections |
| `--ink` | `#1A2322` | Body text (≈15:1 on porcelain) |
| `--muted` | `#5C6866` | Secondary text (≈5.6:1) |
| `--champagne` | `#C8A96A` | Gold details **on dark only** (≈6.5:1 on evergreen-900) |
| `--bronze-text` | `#7A5A24` | Gold-tone text on light backgrounds (≈5.6:1) |

**Type scale:** fluid with `clamp()`. Display 44–84 px Bodoni Moda in light/regular weight; H2 32–48 px; body 17 px Manrope at 1.6 line height; labels 12–13 px Tenor Sans with 0.18 em letter spacing. Fonts are **self-hosted WOFF2** (no Google Fonts request) and preloaded.

**Motion principles**
- Motion explains; it never decorates. Sections fade and rise 12 px once, over 500 ms, using `cubic-bezier(.2,.7,.2,1)`, with list items staggered 60 ms apart. Nothing loops.
- Interface responses are fast: 150–200 ms for tabs, accordions and hover states. Accordions animate height with `grid-template-rows` so nothing jumps.
- One signature moment: a thin gold "wave" line (from the menu art) draws itself under the hero headline once, as an SVG stroke animation (~1.2 s).
- No auto-rotating carousels. Reviews only move when the visitor moves them. No pulsing buttons.
- `prefers-reduced-motion` turns off all movement and keeps instant opacity changes only.

---

## 4. Site map (one main page plus legal pages, in English and Spanish)

| # | Section | What's in it |
|---|---|---|
| 0 | Announcement bar (optional, off by default) | Promo or holiday notice, set in CONFIG, closable |
| 1 | Header (sticky, shrinks on scroll) | Logo · Services · Pedicures · Gallery · Reviews · Visit · **EN / ES** switch · Call · **Book** button. On phones: a full-screen menu |
| 2 | Hero | Interior photo with evergreen gradient. Headline: "Katy's calm place for beautiful nails" (draft). Line: "at Elyson · 23927 FM 529". **4.8 ★ · 490+ Google reviews**. Book / See menu buttons. **Live "Open now · closes 7 PM"** status using **Texas time** |
| 3 | Promise strip (4 items) | Complimentary drinks & full bar · Sanitized, sealed tools · Massage pedicure chairs · Open 7 days |
| 4 | **Pedicure Journey** (new, Apollo's signature) | The 8 pedicures on one horizontal "ladder" ordered by **massage minutes (5 → 35)** and price, so the upgrade path is easy to see. Tapping one opens its steps and scents. Answers "which pedicure should I get?" at a glance |
| 5 | Full menu | Tabs: Manicure · Pedicure · Nail Enhancement · Waxing · Eyelash · Drinks. Menu-style rows (name · massage time · price · Book). **Expandable "Details"** shows steps, **scent chips** and optional ingredients. Nail Enhancement uses a real **Full set / Fill in** table. A "+ $20 gel upgrade" note on every manicure and pedicure |
| 6 | Drinks bar | **Built as the Drinks tab inside the menu** (nav "Drinks" opens it). 32 drinks, filters (All · Cocktails · Alcohol-free), lightbox. Images load only when opened |
| 7 | Gallery | 9 portrait photos in an editorial grid, captions, lightbox |
| 8 | Reviews | The 6 real reviews, hand-scrolled with arrows and swipe, "Read more" on long ones, plus a **"Read all 490+ on Google"** link and a **"Leave us a review"** button (direct Google link from the Place ID) |
| 10 | FAQ (new) | Walk-ins? · How do I book or cancel (3-hour rule)? · How long does gel last? · Ingrown nails? · Allergies or diabetes? · Parking? · Gift cards? Marked up as FAQPage schema |
| 11 | Salon Policy | The 8 rules, in a quiet two-column list |
| 12 | Visit | Hours table (today highlighted), address with "at Elyson", Directions / Call / Book, Google map that loads **only after cookie consent** (kept from Ventana) |
| 13 | Footer | Logo, quick links, Instagram/Facebook, NAP (name, address, phone), legal links (Terms · Privacy · Accessibility · Cookie Settings), disclaimer line, © 2026 |
| 14 | Mobile action bar | **Call · Directions · Book**, safe-area aware, hides when the cookie banner is open |
| — | `terms.html`, `privacy.html`, `accessibility.html` | Adapted from Ventana for Apollo's details, **fully translated by the same EN/ES toggle** |
| — | `404.html` | A styled "page not found" page with Book / Home buttons |

---

## 5. Audit of the Ventana sites and improvements for Apollo

### a) What worked and carries over
1. A plain static site with no frameworks, deployed on Vercel with GitHub auto-deploy. Simple for you to own.
2. A single **CONFIG** block for booking link, phone, address, socials, rating and **hours**. Hours feed the table, footer, badge and schema from one place.
3. Tabbed service menu, menu-style rows with a per-service Book button, and **expand-in-place details**.
4. Drinks tab whose images load only on first open.
5. A dependency-free **lightbox** (keyboard, swipe, focus return).
6. Reviews carousel with real quotes kept in their original English.
7. **Real EN/ES translation** with no flash on reload. Katy since September; Richmond since commit `8eedacc`.
8. **Image pipeline** (`optimize-images.sh`): originals backed up, resized and compressed, lazy-loaded, width/height set. Richmond also makes WebP plus `srcset`.
9. SEO pack: NailSalon JSON-LD, Open Graph, canonical, robots and sitemap, generated icons.
10. **Cookie consent that gates the Google Map**, plus Terms, Privacy and Accessibility pages and a footer disclaimer.
11. Accessibility basics: ARIA tabs with arrow keys, `:focus-visible` rings, reduced motion, descriptive alt text.
12. Mobile sticky **Call + Book** bar.
13. `vercel.json` security headers (CSP, HSTS, no framing) and a `.gitignore` that keeps the 100 MB of originals out of GitHub.
14. Salon Policy section, already translated to Spanish.

### b) Weaknesses to fix in Apollo
> **The two you listed are already fixed in both sites.** The Spanish toggle is a real translation (Katy: 132 `data-i18n` keys; Richmond: 139, added in commit `8eedacc`). Images are compressed and lazy-loaded (Katy 108 MB → 10 MB; Richmond 12 MB with WebP). The Richmond build note in Obsidian still lists them as TODO; that note is out of date. Apollo carries both fixes forward. Here is what is **still** wrong:

1. **"Open today" badge uses the visitor's own clock.** `new Date().getDay()` at `index.html:1884` in Katy. Someone browsing from another time zone sees the wrong open/closed state. Apollo will use `America/Chicago` time.
2. **Key content exists only after JavaScript runs.** Services, hours, policy and drinks are injected by script (`#hoursTable`, `#policyList` are empty in the HTML). Search engines and AI assistants that don't run scripts see no prices or hours, and the page shifts while it builds. Apollo ships all text as real HTML.
3. **Spanish can't be found on Google.** It's a client-side swap on the same URL with no `hreflang`. Apollo gets real `/es/` pages.
4. **Legal pages are English only** (0 translation keys in terms, privacy and accessibility).
5. **Reviews autoplay every 6 s with no visible pause button.** This fails WCAG 2.2.2, the accessibility rule on moving content; hover-pause doesn't help phone users.
6. **No skip link and no `<main>` landmark.** Keyboard and screen-reader users can't jump past the navigation. This matters for ADA risk, which your legal note flagged as the biggest one.
7. **Katy has no WebP or responsive `srcset`.** Phones download desktop-size JPEGs. The Drinks tab adds about **8 MB** when opened.
8. **Google Fonts is loaded from Google.** That's an extra connection before text paints, a third-party request in the privacy story, and a CSP exception. Apollo self-hosts its fonts.
9. **One ~2,000-line file with all CSS and JS inline, copy-pasted between the two sites.** Hard to maintain, and it forces `'unsafe-inline'` in the CSP. Apollo splits into `css/`, `js/` and a single `content` data file.
10. **Domain and canonical problems.** Katy's `SITE_URL` is still the `.example` placeholder, so canonical, OG and sitemap are broken. Richmond's canonical is `ventananailsspa.business`, while **`ventananailssparichmond.space` (the URL in your Obsidian note) now returns 404.** Worth checking separately.
11. **Rating is hard-coded in schema** (`aggregateRating` 4.6/900) and goes stale. Google also ignores self-published review stars for local businesses. Apollo shows the rating as visible text. **Build note:** `aggregateRating` (4.8 / 492) IS included in the schema because the build brief asked for rating in the schema. Update it now and then.
12. **Wrong photo:** Katy's `service-eyelash.jpg` shows eyebrow waxing, not lashes.
13. **No FAQ, no "leave a review" path, no Directions button in the mobile bar.**
14. **Drink photos have no visible names** (the Richmond TODO; Katy uses them only as alt text).

### c) Upgrades Apollo gets that neither site has (numbered improvements)
1. **Distinct Apollo brand system** (section 3): evergreen and champagne, new fonts, new layout. Not a Ventana re-skin.
2. **Complete Spanish everywhere:** the toggle also covers the legal pages, cookie banner, alt text, aria labels, page `<title>`/meta, hours and "Open now" status. The choice is remembered across all pages with no English flash, and switching keeps you on the same section.
3. **Content in plain HTML, not built by JavaScript.** Menu, hours, policy and FAQ are written in `index.html`, so crawlers see them without running scripts. `script.js` only adds behaviour and the Spanish text. Files: `index.html` + `styles.css` + `script.js` + legal pages. No build step, no framework, Vercel preset "Other".
4. **Pedicure Journey ladder:** Apollo's 8 pedicures by massage minutes and price, with steps and scent chips.
5. **Scent chips and ingredient toggles** on every spa service; helpful for allergies and unique to Apollo.
6. **Full set / Fill in price table** for enhancements, instead of a grey sub-line.
7. **Texas-time "Open now / Closes at / Opens tomorrow at" status**, plus holiday overrides in CONFIG.
8. **Modern images:** WebP with JPG fallback through `<picture>`, with explicit width/height and lazy loading below the fold. Only the hero preloads, with `fetchpriority="high"`. The image script also checks that every file the HTML references exists.
9. **Self-hosted, subset WOFF2 fonts.** No third-party requests until the visitor accepts the map.
10. **Stricter security:** CSS and JS live in `styles.css` / `script.js`, with only the small JSON-LD and no-flash language snippet inline. That allows a much tighter CSP than Ventana's.
11. **Accessible reviews:** no autoplay, "Read more" for long reviews, a link to all Google reviews, and a direct **"Leave us a review"** button.
12. **Accessibility pass to WCAG 2.2 AA:** skip link, landmarks, contrast-checked tokens, 44 px touch targets, and a focus trap in the lightbox and mobile menu.
13. **FAQ section with FAQPage schema.** Richer schema too: NailSalon, `OfferCatalog` of services and prices, `sameAs`, geo coordinates, `areaServed` (Katy, Elyson, Cypress, Fulshear), and both languages.
14. **Local SEO copy** for "Elyson", "FM 529" and "Katy 77493", plus a Google review link built from the Place ID.
15. **Mobile action bar with Call · Directions · Book.**
16. **Optional announcement bar** for promotions or holiday hours, switched on and off in CONFIG.
17. **Drinks with names and filters** (All / Cocktails / Alcohol-free) and lazy loading per row.
18. **Branded 404 page and a web app manifest**, so saving to the home screen shows Apollo's icon and colors.
19. **Performance budget:** above-the-fold under 400 KB on phones, Lighthouse 95+ in all four categories, checked at 375 / 768 / 1440 px before handoff.
20. **Deploy checklist that includes `git remote add origin`**, fixing the silent push failure that blocked the Katy launch.

---

## 6. Image list

**Images go in last, right before deploy.** Until then, every slot is a styled placeholder box at the correct aspect ratio, labelled with its future file name, so the layout won't shift. Every path already points to `images/<file name>`.

When ready, drop originals into `~/apollo-nails-spa/images/` with **exactly** these names. Send the **largest version you have**: phone photos straight from the camera are fine, and screenshots are not. The image script moves originals to `images/originals/` (kept out of GitHub) and writes compressed **WebP + JPG** versions at web sizes. **Real salon photos only; no stock images of other salons.**

| File name | What it should show | Shape · minimum size |
|---|---|---|
| `logo.svg` (preferred) **or** `logo.png` | Main Apollo logo, dark version, transparent background | Vector, or PNG ≥ 1200 px wide |
| `logo-light.svg` / `logo-light.png` | Same logo in champagne or white, for dark backgrounds (header over hero, footer) | Same as above |
| `logo-mark.png` | Just the "A" or emblem, square, for the browser icon and home-screen icon | Square, ≥ 512 × 512 |
| `hero.jpg` | **Done:** owner-posted Google Maps photo (pink glitter + hand-painted flower coffin nails on white fur), cropped 16:9. No owner interior photos exist on Google/Instagram | Landscape 16:9 · 2400 × 1350 |
| `hero-mobile.jpg` | **Done:** same photo, cropped tall for phones | Portrait 9:16 · 1080 × 1920 |
| `service-manicure.jpg` | **Done:** free Unsplash stock (see CREDITS.md) | Portrait 4:5 |
| `service-pedicure.jpg` | **Done:** free Unsplash stock (see CREDITS.md) | Portrait 4:5 |
| `service-nails.jpg` | **Done:** free Unsplash stock (see CREDITS.md) | Portrait 4:5 |
| `service-waxing.jpg` | **Done:** free Unsplash stock (see CREDITS.md) | Portrait 4:5 |
| `service-eyelash.jpg` | **Done:** free Unsplash stock (see CREDITS.md) | Portrait 4:5 |
| `gallery-1.jpg` … `gallery-7.jpg` | **Done:** the 7 photos from the old site, with frame and badge cropped off (878 × 878). An 8th tile links to Instagram | Square 1:1 |
| `drinks/drink-1.jpg` … `drinks/drink-32.jpg` | **Done:** copied from Ventana Katy and optimized | **Build:** tall 9:16 · 720 × 1280 (same shape as Ventana's drink photos) |
| `og-image.jpg` | Auto-made by the script from the logo on evergreen (1200 × 630). You don't need to supply it | — |
| `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Auto-made from `logo-mark.png` | — |

**Minimum to launch:** logo (dark and light), `hero.jpg`, `hero-mobile.jpg`, the 5 `service-*` photos and 6 gallery photos. Everything else can follow. Until a photo arrives, its spot shows an evergreen placeholder with a gold line pattern, never a broken image.

---

*Next step after your answers (Phase 2):* build `index.html`, `styles.css`, `script.js`, `terms.html`, `privacy.html`, `accessibility.html`, `404.html`, `robots.txt`, `sitemap.xml`, `vercel.json`, `site.webmanifest`, `optimize-images.sh`, README and BUILD-NOTES, with image placeholders. Anything still unknown shows a visible `[… NEEDED]` tag. Then check it at 375 / 768 / 1440 px and open it in your browser.


### Old website image audit (2026-11-07)
Everything on apollonailsspakaty.com was checked:
- **Used:** 7 gallery photos; the gold 3D logo (transparent padding trimmed, used in header, footer and share image).
- **Not usable:** the 8 "service" images are photos of the **old menu pages** (outdated prices). `about-us.jpeg` is a generic stock model photo, not Apollo. The background images are leaf patterns.
- **Drinks page:** the same photo set as Ventana, but low-res (≈430 px). The site keeps Ventana's 1080 px copies. The old Apollo page lists **28** drinks: no Devil Margarita, Midnight Splash, Cucumber Fresh or Creamsicle Fizz, and "Viet Coffee hot/iced" instead of "with cream".
- **Filled later (2026-11-07):** hero from an owner-posted Google Maps photo; the 5 service photos from free Unsplash stock (CREDITS.md). The Experience section and interior-1/2/3 were removed on request.
