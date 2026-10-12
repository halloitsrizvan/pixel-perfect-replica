# MASTER BUILD PROMPT v2: VARATECT ARCHITECTURE STUDIO

## 0. CONFIG (edit before running)

MODE: concept_demo # concept_demo | production
PREPARED_BY: DepoX Studio # shown in the demo banner/footer only when MODE=concept_demo
IMAGE_MODE: temporary_concept # temporary_concept | client_supplied (/public/projects/<slug>/*)
DEPLOY_TARGET: Vercel

## 1. ROLE AND OBJECTIVE

Act as a senior creative director, UX engineer and Next.js developer. Build and run a complete, visually distinctive, working website for Varatect Architecture Studio (architecture, interior and landscape design, Kerala | Dubai).
Do not output only a plan or wireframe. Implement, run, inspect in the browser, fix, and report honestly. The result must feel custom-made for Varatect, never like an architecture template.

## 2. TRUTH RULES (highest priority, override all creative choices)

Source facts are in section 4 (FACT LEDGER). Everything else is "proposed copy".

1. Never invent: founding year, team size, awards, statistics, project dimensions, materials, budgets, completion dates, certifications, clients, email addresses, ratings.
2. Never present stock/concept imagery as real Varatect work. Every concept image needs a visible "Illustrative image" notice on project pages and an internal `isConceptImagery: true` flag.
3. Supplied Google reviews are REAL and verified, so use them verbatim with reviewer name and a "Google Review" label. Do not add any others.
4. Project 4 in the brief duplicates Project 2. Do NOT create a fourth project. Add one only when distinct verified details are supplied.
5. Do not say any project is "completed" or "occupied" unless stated. BALGO: design phase completed. EEVA: brought to the studio April 2025. Punalur: status not supplied.
6. Proposed copy (hero line, section headings, philosophy text) is marked in code comments as `// PROPOSED COPY`. Keep supplied service text and addresses verbatim.
7. If MODE=concept_demo, show a slim, tasteful "Concept preview by {PREPARED_BY}, not the official Varatect website" notice in the footer and in page metadata. If MODE=production, remove it.
8. Never claim a command, build, test or deployment succeeded unless you actually ran it and saw the result.

## 3. FIRST, INSPECT (Phase 1, no approval needed)

1. List the folder, read package.json and configs, identify the framework, dependencies and scripts. Reuse what's good; avoid needless installs or config rewrites. If the folder is empty, scaffold Next.js (App Router) + TypeScript + Tailwind.
2. Locate the uploaded logo/brand image under /public or the upload path and view it. The supplied image is a brand COVER: a white monogram with tiny "VARA TECT" lettering, centred on a dense dark-green mint-leaf canopy, with an about paragraph at the bottom.
3. Logo handling: reuse the supplied asset. Do NOT redraw, retype, or approximate the mark, and do not recolour it. If only the full cover is available:
   a. use the cover (cropped/darkened as needed) as a botanical background texture, and
   b. derive a clean transparent white logo crop from it for nav/footer, noting that it must be replaced with the official SVG/PNG when supplied.
   If the asset isn't accessible in the project, say so and tell me exactly where to copy it. Do not claim integration.
4. Sample the real greens/whites from the image and refine the palette tokens below to match.

## 4. FACT LEDGER (single source of truth, store in /src/data, never duplicate in components)

Studio: Varatect Architecture Studio. Disciplines: Architecture | Interior | Landscape. Presence: Kerala | Dubai.
Lead architect: Architect Roshan TS (named in the Google reviews).
Brand about text (from the cover, verbatim, may be used in the Studio section): "Varatect Concepts is an innovative architectural and design firm specializing in architecture, interior design, planning, and visualization services. The firm focuses on creating functional, sustainable, and aesthetically refined spaces that blend modern design with practical solutions. With a commitment to creativity, quality, and client satisfaction, Varatect Concepts delivers residential, commercial, and hospitality projects tailored to unique client visions."
Address: Varatect, Thuthiyil House, Malayalapuzha, Pathanamthitta, Keralam 689666 (keep "Keralam" as supplied).
Phone: +91 92072 47305 -> tel:+919207247305
WhatsApp: +91 95449 80118 -> https://wa.me/919544980118?text=<encoded: "Hello Varatect, I would like to discuss an architecture or interior design project.">
Instagram: https://www.instagram.com/varatect/ (@varatect, about 13.2K followers, shown as "13K+ on Instagram" only, no live counter)
Email: NOT SUPPLIED. Do not create one.
Services (verbatim):

- Landscape Design: Creative landscape designs that blend nature, functionality, and beauty to create inviting outdoor spaces for every lifestyle.
- Architecture Design: Thoughtfully designed homes and spaces that blend creativity, functionality, and timeless architecture, crafted to match your vision.
- Renovation: Transforming existing spaces with innovative renovation designs that improve functionality, enhance beauty, and bring new life to your home.
- Interior Design: Custom interior designs that combine style, comfort, and functionality to create spaces you'll love every day.
  Verified Google reviews (verbatim, credit reviewer, "Google Review"):
- Anand S: "Highly recommended architecture firm in Pathanamthitta with Architect Roshan TS combining creativity, clarity, and quality in every design."
- Akhil S: "Best architecture firm in Pathanamthitta, led by Architect Roshan TS, known for creative concepts, thoughtful planning, and modern design solutions that perfectly balance aesthetics and function."
- Aswin Ashokan: "Best architecture firm in Pathanamthitta. Truly creative, professional, and reliable service."

Projects (3 confirmed):

1. BALGO | slug balgo | Kayamkulam | Residential Architecture. An existing mango tree is preserved and becomes a defining element of the architecture; the balcony is positioned to create a visual relationship with the tree; the house grows around the landscape instead of removing it. Name = BALcony + manGO. Design phase completed by Varatect. Closing line: "A home designed around what was already there."
2. Punalur Residence (TEMPORARY title, keep editable) | slug punalur-residence | Punalur | Residential Redesign / Renovation. Client wanted a home "not merely renovated, but reimagined", one that embraces nature, creates pleasing views and offers a unique everyday experience. The team studied the whole site first (landscape, orientation, surroundings, natural elements, movement, potential views), explored multiple options, treated the site as an integral part of the architecture, and "designed the site first and allowed the architecture to emerge from it." Circulation, views, open spaces, landscape and built forms were composed as one experience. Result: a home that belongs to its surroundings without disappearing into them. Closing line: "A home designed around the site, rather than a site designed around a home." Status: not supplied.
3. EEVA | slug eeva | Malayalapuzha, Pathanamthitta | Residential Renovation. Came to the studio April 2025 for Mr. Akhil Vadakkan Pallikkal. A typical Kerala home with a simple rectangular structure; the existing building was documented and concepts presented; the client gave design freedom. The house felt congested, so extensions and selected wall removals create a well-planned 3BHK with proper living, dining and two additional bedrooms with attached toilets. The key feature is a sloped roof inspired by traditional Kerala architecture. The name means "life", "living one", "source of life"; the name's typography is inspired by the elevation design. Do not imply construction is complete.

## 5. BRAND AND ART DIRECTION

Concept: "Dark forest green + warm ivory", quiet, confident, editorial, nature-led. The opening spread of a premium architecture monograph, not a SaaS landing page.
Tokens (refine after sampling the real logo/cover; define in tailwind config + CSS variables):

- forest-950 #0A1B13, forest-900 #102D20, forest-700 #244633, leaf #2E6B3E (sparingly), mint #8FC9A0 (tiny highlights only, e.g. focus ring or link underline)
- ivory #F5F4ED, white #FFFFFF, stone #C9C4B7, text-muted #777A70 (check AA contrast), rule #DCDDD3
  Type: high-contrast editorial serif for display (Cormorant Garamond or Fraunces; check Malayalam/Latin rendering), neutral sans for UI/body (Inter or Manrope). Large headlines with deliberate line breaks, small uppercase letter-spaced labels, generous line-height; use next/font and fluid type.
  Visual language: 1px hairline rules, big imagery, asymmetric layouts, subtle paper-grain on ivory, and ONE signature motif drawn from the brand: a thin single-line "growth" stroke that draws in on scroll (echoing the continuous-line monogram) and a faint leaf-canopy texture in dark sections.
  Avoid: generic cards, heavy rounding, neon, heavy gradients, glassmorphism, 3D gimmicks, random icons, floating gimmick widgets, long intro animations, scroll hijacking.

## 6. TECH STACK

Next.js App Router, TypeScript, Tailwind, Framer Motion (restrained; or CSS where enough), lucide-react, next/image, next/font. No backend, DB, CMS, auth or paid services. All content in typed data files:
src/data/{site.ts (brand, contact, nav, CTA labels, colours refs), projects.ts, services.ts, reviews.ts, process.ts}
Typed Project: slug, title, location, category, conceptHeadline, shortDescription, fullDescription[], image {src, alt, ratio}, gallery[], status, isConceptImagery. Safe fallback for missing images (dark-green tinted block with a caption, never a broken icon).
Keep project structure that exists if it's good; don't create empty files.

## 7. IMAGERY

IMAGE_MODE=temporary_concept: use coherent, realistic architectural photography (tropical contemporary houses, Kerala-inspired sloped-roof homes, houses around existing trees, warm timber/stone interiors, courtyards and landscape). No repeats across hero/cards. Centralise URLs in projects.ts. Verify every remote URL loads, configure next.config images.remotePatterns, and if remote access is unreliable create a local /public/concept/ structure with tinted placeholders instead of broken links. Descriptive alt text on all images; blur/placeholder and fixed aspect ratios to prevent layout shift; priority only on the hero image.
IMAGE_MODE=client_supplied: read from /public/projects/<slug>/ and drop the "illustrative" labels for those images.

## 8. SITE STRUCTURE (homepage single-page + 3 project routes)

Nav: logo (links home), Projects, Studio, Services, Process, Contact, CTA "Start a Project" (-> WhatsApp). Fixed/sticky only if it doesn't obscure content; contrast-safe over light and dark sections via a scroll-aware style; accessible full-screen mobile menu with clear open/close state, focus trap, Esc to close, and auto-close on navigation; smooth anchor scroll with scroll-margin for the fixed header.

1. HERO: cinematic, image-led, NOT a logo splash. Dark forest base, wide architectural photo with a foliage texture area referencing the brand cover, correct logo, large serif headline.
   Eyebrow: ARCHITECTURE · INTERIOR · LANDSCAPE
   H1: "Architecture that grows with its surroundings." (PROPOSED COPY)
   Sub: "Thoughtful spaces shaped by people, place and nature." (PROPOSED COPY)
   CTAs: "Explore Projects" / "Start a Conversation". Location label: KERALA · DUBAI. Subtle scroll cue. The first viewport must make clear what the studio does.
   Optional short preloader (<=1.2s, skippable, once per session) only if it uses the real logo and never delays content; otherwise omit it.
2. STUDIO: "Spaces designed around life." (PROPOSED). Split layout: copy + a pull-quote-style statement + the verbatim about text above, plus the line "Led by Architect Roshan TS" and KERALA · DUBAI. Large image on the other side. NO statistics.
3. SELECTED WORKS: label SELECTED WORKS, heading "Architecture, shaped by context." Editorial grid with varied ratios (e.g. one large landscape, one portrait, one wide), numbered 01-03, hairline metadata, hover = gentle image zoom + arrow shift. Each card: title, category, location, image, one project-specific line, link to its route.
4. SERVICES: label WHAT WE DO, heading "Considered design, from ground to detail." (PROPOSED). Typographic rows 01-04 with fine rules, hover reveals the verbatim description (always visible on touch/mobile). Order: Architecture, Interior, Landscape, Renovation.
5. PHILOSOPHY / PROCESS: heading "Let the landscape lead." (PROPOSED) with large image and asymmetric text. Below it, a scroll-drawn vertical line timeline of the studio's site-first approach, derived strictly from the project narratives: 01 Study the site (landscape, orientation, views, movement) -> 02 Explore options -> 03 Compose circulation, views and open spaces as one experience -> 04 Refine the design -> 05 Deliver. Mark as proposed copy; do not claim it's an official methodology.
6. VOICES: the 3 verified Google reviews, verbatim, in an elegant quiet layout (not a carousel gimmick; a simple 3-column editorial row, stacked on mobile). Credit reviewers; "Google Review" label; no star-count or aggregate rating.
7. CONTACT: heading "Have a space in mind?" / "Let's start a conversation about your next project." Large WhatsApp CTA, phone CTA, Instagram, address (verbatim), KERALA · DUBAI. Provide an "Enquiry composer": a small form (Name, Project type [Architecture / Interior / Landscape / Renovation], Location, Message) that does NOT pretend to submit; it builds an encoded message and opens WhatsApp. Label it clearly ("Opens WhatsApp with your message"). No email, no fake submission. Optional map: a plain outbound "View on Google Maps" link only (no embed claim of an exact pin).
8. FOOTER: real logo, "Architecture · Interior · Landscape", "Kerala · Dubai", nav, phone, WhatsApp, Instagram, address, dynamic year, concept notice if MODE=concept_demo. Minimal. No fake socials.

Mobile: a modest sticky bottom "WhatsApp" button (small, safe-area aware, hidden when the contact section is in view). No oversized floating widget.

## 9. PROJECT DETAIL PAGES

Routes via generateStaticParams + generateMetadata: /projects/balgo, /projects/punalur-residence, /projects/eeva (unknown slug -> notFound()).
Shared template, magazine layout: minimal nav + "Back to projects"; full-bleed hero image; title, category, location; concept headline; details strip (Location, Type, Status) showing only supplied facts, using "Not supplied" or omitting a field, never inventing; full narrative in a wide, readable multi-column or offset layout (not a narrow single column); gallery with accessible lightbox; the visible "Illustrative imagery" notice when isConceptImagery; related projects with next/previous; WhatsApp CTA pre-filled with the project name; footer.
Include these exact closing lines: BALGO "A home designed around what was already there." / Punalur "A home designed around the site, rather than a site designed around a home." / EEVA: the meaning-of-the-name passage.

## 10. MOTION

Restrained and purposeful: clip-path image reveals on scroll, short text entrance, gentle hover zoom, CTA arrow shift, drawn-line motif, optional soft page transition. Easing cubic-bezier(0.22, 1, 0.36, 1). Respect prefers-reduced-motion (disable transforms, show content statically). Content must remain visible if JS animation fails (no opacity:0 without a fallback). No scroll hijacking, no heavy parallax, no long intro. Keep 60fps on low-end mobile.

## 11. RESPONSIVE, ACCESSIBILITY, SEO, PERFORMANCE

Validate at 375, 390, 768, 1024 and 1440px: no horizontal overflow, no clipped headlines, correct crops, readable measure (about 60-75ch), 44px touch targets, no overlapping sticky elements, stable image dimensions.
A11y: semantic landmarks, logical headings, skip link, visible focus states, AA contrast (verify muted text on ivory and on forest), keyboard-operable menu/lightbox, alt text.
SEO: title and meta description (concept noindex ONLY when MODE=concept_demo; indexable in production), Open Graph/Twitter, sitemap and robots. Target phrases naturally: "architects in Pathanamthitta", "architecture firm Kerala", "interior and landscape design Kerala". JSON-LD (ArchitecturalFirm/LocalBusiness) ONLY with verified data: name, address, phone, sameAs Instagram, areaServed. No aggregateRating, no invented facts, and only when MODE=production. Lazy-load below the fold, responsive `sizes`, AVIF/WebP via next/image. Favicon only if it can be derived cleanly from the supplied logo, otherwise skip.

## 12. EXECUTION PHASES (do them in order, don't stop after a plan)

1 Inspect -> 2 Foundation (tokens, fonts, layout primitives, data files, nav/global layout) -> 3 Homepage (get all 8 sections complete before decoration) -> 4 Project routes -> 5 Interactions (menu, links, motion, reduced-motion) -> 6 Visual refinement against the real browser render (typography, hero composition, crops, spacing, grid rhythm; do not accept a generic first pass) -> 7 Validation (dev server; visit "/" and all 3 project routes at the breakpoints above; lint; tsc; `npm run build`; verify tel/wa.me/Instagram links, image loading, console errors) -> 8 Delivery.

## 13. DELIVERY REPORT

Report: features built; file/component list; how to run locally; every validation command actually executed with its real result; known limitations; Vercel deploy steps; and an asset checklist: (a) official logo SVG/PNG (transparent, white + green variants), (b) real photos per project (hero + 4-8 gallery), (c) names/status for Punalur, (d) any distinct 4th project details, (e) Dubai contact details if a Dubai office exists, (f) an official email if wanted.

## 14. ACCEPTANCE CRITERIA

Real logo integrated, not redrawn. Dark-green/ivory identity polished and responsive. 3 working project routes; Punalur duplicate not treated as a 4th project. All supplied facts accurate and verbatim where specified. Concept imagery clearly labelled. Only the 3 verified reviews; no fake stats, awards, email or form submission. WhatsApp/tel/Instagram links work. Mobile menu works. Reduced-motion and accessibility handled. Production build passes. Ready for Vercel.

Start now: inspect the codebase and logo, then build the complete working site. Don't wait for approval.
