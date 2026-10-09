# Ember & Oak: approved design

Standalone fictional restaurant concept preserving the existing case study's charcoal brown (#211C18), cream (#F5EAD8), terracotta (#D79C79), serif identity and original photograph. Cormorant Garamond headings and Inter body are self-hosted. Cinematic editorial direction, with five AI-generated concept photographs.

## Page journey

Concept notice and navigation → hero → gathering story → categorized nine-dish sample menu → preparation / finished plate / shared table sequence → asymmetric space gallery → reservation preview → case-study return link.

Reservation buttons open a modal explaining the intended booking journey. No inputs, personal data, submission or real reservations. Menu categories use keyboard-accessible toggle buttons. No prices, testimonials, awards, contact numbers or real addresses.

## Motion and responsive behaviour

GSAP loads separately for hero entrances, section reveals and signature image crossfades. Content is visible by default. At 1000px and above the sequence uses sticky imagery and native scrolling; narrower screens and reduced motion show vertical illustrated stories. No scroll interception, autoplay video or 3D. Contexts and media listeners revert on unmount and media changes.

Images use 640px and 1280px WebP variants. The hero is prioritized; later imagery is lazy-loaded with dimensions reserved. Native anchors work before hydration; interactive buttons enable when their handlers attach.

## Scope

Existing Krelyvo pages, case studies, other demos and Agent Studio remain unchanged. GitHub publishing, Cloudflare connection and demo-ember-oak.krelyvo.com are a later milestone. Noindex is already present. No homepage preview section is approved.

## Verification

TypeScript, production build, and nine browser tests cover menu categories, modal focus containment/restoration, Escape, no outgoing submission, 320/390/430/1440px layouts, imagery and overflow, reduced motion, desktop scroll progression and mobile reset, fictional labels and HTTP 404.
