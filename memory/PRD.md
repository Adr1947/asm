# PRD — Gold Skin Spa & Beauty

## Original Problem Statement
Build a website for a med spa named "Gold Skin Spa And Beauty". The existing site had only a hero section (Gloss Genius template). Provided assets: the brand logo (gold/black 6-petal flower) and a screenshot of the current hero. Directive: make it award-worthy (Awwwards Site-of-the-Day level), motion-first, gold & black luxury.

## User Choices
- Sections: About, Services, Before/After Gallery, Contact, FAQ, Lead capture, + Gift Card showcase.
- Forms: visual/demo only (no persistence).
- Content: professional placeholder content.
- Theme: match logo — gold & black luxury.
- Gift cards: showcase only (no real checkout).

## Architecture
- **Frontend**: React 19 (CRA + craco), framer-motion (scroll reveals, masked hero, 3D tilt), lenis (momentum scroll), react-fast-marquee, react-compare-slider, sonner toasts, Tailwind. Single-page with anchor sections.
- **Backend**: FastAPI + MongoDB boilerplate only (unused by the site; forms are client-side demo).
- **Fonts**: Cormorant Garamond (display) + Outfit (body).
- Logo saved at `/app/frontend/public/logo-mark.png`.

## Implemented (2026-06)
- Sticky glass Navbar with mobile menu.
- Kinetic Hero: masked line-by-line reveal, parallax background, logo integration.
- Editorial marquee, About manifesto (3 numbered chapters, sticky layout).
- Services menu (8 items) with hover reveal + floating preview image.
- Before/After Gallery (3 draggable compare sliders).
- Gift Cards (3 tiers) with mouse-tracked 3D tilt + demo purchase toast.
- FAQ accordion, Lead Capture email (demo), Contact form (demo), Footer.
- Verified: testing agent frontend pass 100% (27/27 checks), no console errors.

## Core Requirements (static)
- Luxury gold/black aesthetic matching logo; premium motion throughout; responsive; all interactive elements have data-testids.

## Backlog / Remaining
- **P1**: Real booking backend (save appointments + admin view); functional gift card checkout (Stripe).
- **P2**: CMS-editable services/pricing; real before/after photo pairs; blog/journal; multi-page routing; SEO metadata + sitemap.
