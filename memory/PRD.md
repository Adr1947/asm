# PRD — ART Med Spa (Bethlehem, GA)

## Original Problem Statement
Redesign the existing med spa landing page (previously "Gold Skin Spa", dark gold/black luxury)
into a site for **ART Med Spa**, a real med spa in Bethlehem, Georgia. Source content, services,
branding and style from the live site https://art-medspa.com and rebuild "gsb" to match it.

## User Choices (confirmed)
1. Visual direction: **Match Art Medspa's real branding** — light/cream background, sage green + gold/champagne accents, elegant serif (Cormorant Garamond).
2. Book / Consultation buttons: **link to the real Vagaro booking links** (booking widget + free-consultation link).
3. Sections: removed **Gift Cards** & email lead-capture; added a **Testimonials** section.
4. Logo: use Art Medspa's **actual artist-palette "ART" logo** (downloaded to /app/frontend/public/art-logo.webp).

## Architecture
- **Frontend**: React 19 (CRA + craco), framer-motion, lenis (momentum scroll), react-fast-marquee, sonner, Tailwind. Single-page with anchor sections. All content in `src/lib/content.js`.
- **Backend**: FastAPI + MongoDB boilerplate only (unused by the site; all CTAs go to Vagaro).
- **Fonts**: Cormorant Garamond (display) + Outfit (body).
- **Palette (index.css vars)**: --cream #FBFAF6, --sage #AEC29B, --sage-deep #6E8A58, --gold #C2A15C, --gold-deep #A5883F, --champagne #E4D4A8, --ink #2B2B26.

## Sections implemented (2026-08 redesign)
- Announcement bar (20% off + free consult) + sticky glass Navbar (light) with mobile menu.
- Hero: masked reveal headline "Refine, Rejuvenate & Reclaim Your Glow", facial image, floating review + Licensed badge, sage/gold CTAs → Vagaro. Dark trust strip (Licensed Professionals / FDA-Approved Products / Personalized Care).
- Sage marquee.
- Services: 6 image cards (Injectables, Laser, Wellness/IV, Facial, Body Contouring, PRP) + extra-service chips + Book CTA.
- About: intro + 3 pillars (Precision / Artistry / Innovation), sticky interior image.
- Gallery: responsive image grid with hover labels.
- Testimonials: 3 real reviews (Sarah M., Jennifer K., Michael R.) + disclaimer.
- CTA banner: dark "Ready to reclaim your glow?".
- Visit Us: Working Hours card (real hours) + contact info + Google Map (372 Exchange Blvd, Bethlehem, GA 30620).
- FAQ accordion (6 real Qs), dark footer with logo, services, contact.

## Live integrations
- Vagaro BOOKING_URL and CONSULT_URL wired to all CTAs (open in new tab). No API key needed.
- Google Maps embed via public `?output=embed` (no API key).

## Business data (real)
- Address: 372 Exchange Blvd, Ste 2, Bethlehem, GA 30620 · Phone +1 (770) 902-6111 · info@art-medspa.com

## Backlog / Remaining
- P2: real photo gallery from client; blog/journal; multi-page routing; SEO metadata expansion.
