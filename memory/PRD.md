# PRD — "For Akshita Di" Raksha Bandhan Experience

## Original Problem Statement
"Make a website for my lovely sister my bestest sister which I can send her on Raksha Bandhan. Make the design special not the generic ones featuring a personalized digital card with animations, a photo gallery, and heartfelt messages. Use black and white as theme and same for typography make it premium style with sophisticated, elegant transitions."
Follow-up direction: Awwwards-level craft — kinetic hero with masked line-by-line reveal, lenis smooth scrolling, framer-motion scroll reveals, editorial marquee, numbered manifesto chapters, 3D/parallax hero moment.

## User Choices (confirmed)
- Sister's name: **Akshita Di**
- Sender signature: generic — "your brother, always"
- Photos: placeholders now; user swaps in real photos later (marked in Gallery.jsx)
- Extras: BOTH background music toggle + hidden surprise message

## Architecture
- Pure frontend experience (React 19 + CRA/craco). No auth, no backend data dependency.
- Backend: stock FastAPI template retained (health endpoint /api/ verified).
- Libraries added: lenis 1.3.26, react-fast-marquee 1.6.5 (framer-motion & lucide-react preinstalled).
- Design system: /app/design_guidelines.json — Monochrome Editorial; Cormorant Garamond + IBM Plex Sans; strict B&W (#0A0A0A / #F8F8F8).

## Implemented (2026-08-24)
- Kinetic hero: on-load black curtain ("a letter, for you —"), masked line-by-line serif reveal "Dearest Akshita Di", mouse-driven 3D tilt letterpress card with scroll parallax
- Slow editorial marquee ("Happy Raksha Bandhan ✳ Akshita Di") with outline text
- Chapters 01–03 manifesto (The Thread / Us / The Promise), sticky chapter numbers, chapter 02 inverted black
- Gallery "Fragments of us" — bento grid, 6 framed grayscale placeholders, hover zoom, fig. captions, swap-photos comment block
- Hidden surprise: rotating "DO NOT OPEN · FOR AKSHITA DI ONLY" wax-seal button → full-screen clip-path overlay with secret message, signed "your brother, always"
- Music toggle: WebAudio-generated soft ambient pad (no external file), spinning dashed ring while playing
- Lenis smooth momentum scrolling, film-grain overlay, custom selection/scrollbar
- Page title/meta updated for sharing

### 2026-08-24 (iteration 2) — Countdown Reveal
- Sealed lock screen (CountdownGate) covers the site until local midnight 28.08.2026: rotating lock seal, live days/hours/minutes/seconds countdown, curtain-lift unlock animation at zero
- Sender bypass: append ?preview=true ("sender preview" link on the gate, subtle)

### 2026-08-24 (iteration 3) — "From another mother" rewrite + lock lifted
- All copy rewritten for a chosen-sibling bond (not blood-related): hero sub, chapters 01–03, surprise note ("sister by every single thing that actually matters", signed "your brother, by choice, always"), footer ("the one you chose"), gallery caption
- Countdown lock TEMPORARILY DISABLED via LOCK_ENABLED=false in CountdownGate.jsx — flip to true to re-seal (user will ask when ready)

## Verified
- curl /api/ → healthy; frontend 200
- Playwright: hero, marquee, chapters, gallery rendered; surprise overlay open/close; music toggle click; no blocking console errors

## Backlog
- DONE: Real photos placed in gallery (3 portraits, served from /public/photos) — 2026-08-24
- P1: User's real name as signature (currently generic "your brother, by choice, always")
- P1: Optional real instrumental mp3 instead of WebAudio ambient
- P2: Mobile-specific envelope-opening gesture; share-preview OG image
