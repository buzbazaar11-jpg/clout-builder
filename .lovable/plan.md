# AYMO Digital — Website Build Plan

A premium multi-page marketing site for AYMO Digital (Personal Brand Growth Agency) targeting USA/UK/Canada/UAE. Apple-level minimalism with a luxury dark theme.

## Design System

- &nbsp;

&nbsp;

CAREPLUS MEDICAL UI CLONE (PIXEL-PERFECT REFERENCE)

&nbsp;

Design Goal

&nbsp;

Create a pixel-perfect recreation of the provided medical website reference.

&nbsp;

The final design must feel:

&nbsp;

Clean

&nbsp;

Modern Healthcare

&nbsp;

Premium Medical

&nbsp;

Soft Luxury

&nbsp;

Minimal

&nbsp;

High Trust

&nbsp;

High Conversion

&nbsp;

&nbsp;

Avoid dark backgrounds.

&nbsp;

Avoid gold accents.

&nbsp;

Avoid heavy glassmorphism.

&nbsp;

Avoid neon effects.

&nbsp;

The entire design should feel exactly like a modern private hospital website.

&nbsp;

&nbsp;

---

&nbsp;

Color System

&nbsp;

Primary Background

&nbsp;

#EAF6F8

&nbsp;

Very soft medical blue.

&nbsp;

&nbsp;

---

&nbsp;

Secondary Background

&nbsp;

#F5FBFC

&nbsp;

Used for cards and sections.

&nbsp;

&nbsp;

---

&nbsp;

Pure White

&nbsp;

#FFFFFF

&nbsp;

Cards, navbar, booking form.

&nbsp;

&nbsp;

---

&nbsp;

Primary Accent

&nbsp;

#63D0D7

&nbsp;

Buttons and active states.

&nbsp;

&nbsp;

---

&nbsp;

Accent Hover

&nbsp;

#4EC4CC

&nbsp;

&nbsp;

---

&nbsp;

Heading Color

&nbsp;

#111827

&nbsp;

Almost black.

&nbsp;

&nbsp;

---

&nbsp;

Body Text

&nbsp;

#6B7280

&nbsp;

&nbsp;

---

&nbsp;

Borders

&nbsp;

#E5EEF0

&nbsp;

Very subtle.

&nbsp;

&nbsp;

---

&nbsp;

Typography

&nbsp;

Font Family

&nbsp;

Headings

&nbsp;

Poppins

&nbsp;

Weights:

&nbsp;

600

700

800

&nbsp;

&nbsp;

---

&nbsp;

Body

&nbsp;

Inter

&nbsp;

Weights:

&nbsp;

400

500

600

&nbsp;

&nbsp;

---

&nbsp;

Font Sizes

&nbsp;

Hero Heading

&nbsp;

72px Desktop

52px Tablet

36px Mobile

&nbsp;

Weight:

&nbsp;

800

&nbsp;

Line Height:

&nbsp;

1.05

&nbsp;

&nbsp;

---

&nbsp;

Section Headings

&nbsp;

48px

&nbsp;

Weight:

&nbsp;

700

&nbsp;

&nbsp;

---

&nbsp;

Card Titles

&nbsp;

24px

&nbsp;

Weight:

&nbsp;

600

&nbsp;

&nbsp;

---

&nbsp;

Paragraphs

&nbsp;

18px

&nbsp;

Weight:

&nbsp;

400

&nbsp;

Line Height:

&nbsp;

1.7

&nbsp;

&nbsp;

---

&nbsp;

Layout

&nbsp;

Max Width

&nbsp;

1440px

&nbsp;

&nbsp;

---

&nbsp;

Content Width

&nbsp;

1280px

&nbsp;

&nbsp;

---

&nbsp;

Horizontal Padding

&nbsp;

32px

&nbsp;

Desktop

&nbsp;

24px

&nbsp;

Tablet

&nbsp;

16px

&nbsp;

Mobile

&nbsp;

&nbsp;

---

&nbsp;

Navbar

&nbsp;

Floating navbar exactly like reference.

&nbsp;

Height

&nbsp;

90px

&nbsp;

Radius

&nbsp;

999px

&nbsp;

Background

&nbsp;

rgba(255,255,255,0.95)

&nbsp;

Shadow

&nbsp;

0 10px 40px rgba(0,0,0,.08)

&nbsp;

Navigation centered.

&nbsp;

CTA button on right.

&nbsp;

&nbsp;

---

&nbsp;

Hero Section

&nbsp;

Height

&nbsp;

850px

&nbsp;

&nbsp;

---

&nbsp;

Structure

&nbsp;

Left Side:

&nbsp;

Large heading

&nbsp;

Description

&nbsp;

Booking Widget

&nbsp;

&nbsp;

Right Side:

&nbsp;

Doctor image

&nbsp;

Patient image

&nbsp;

Hospital environment

&nbsp;

&nbsp;

Exactly like reference.

&nbsp;

&nbsp;

---

&nbsp;

Booking Widget

&nbsp;

Floating glass card.

&nbsp;

Background

&nbsp;

rgba(255,255,255,.96)

&nbsp;

Radius

&nbsp;

28px

&nbsp;

Shadow

&nbsp;

0 15px 50px rgba(0,0,0,.08)

&nbsp;

Fields:

&nbsp;

Department

&nbsp;

Doctor

&nbsp;

Date

&nbsp;

&nbsp;

CTA:

&nbsp;

Book Now

&nbsp;

&nbsp;

---

&nbsp;

Department Cards

&nbsp;

Three cards per row.

&nbsp;

Card Height

&nbsp;

260px

&nbsp;

Radius

&nbsp;

32px

&nbsp;

Background

&nbsp;

#FFFFFF

&nbsp;

Hover

&nbsp;

transform: translateY(-8px);

&nbsp;

Shadow

&nbsp;

0 15px 40px rgba(0,0,0,.06)

&nbsp;

Icons:

&nbsp;

Large soft cyan gradient icons.

&nbsp;

&nbsp;

---

&nbsp;

Featured Services

&nbsp;

Horizontal card layout.

&nbsp;

Radius

&nbsp;

28px

&nbsp;

Image Height

&nbsp;

240px

&nbsp;

Card Padding

&nbsp;

24px

&nbsp;

Shadow

&nbsp;

0 12px 35px rgba(0,0,0,.06)

&nbsp;

&nbsp;

---

&nbsp;

Border Radius System

&nbsp;

Buttons:

&nbsp;

16px

&nbsp;

Inputs:

&nbsp;

18px

&nbsp;

Cards:

&nbsp;

28px

&nbsp;

Large Containers:

&nbsp;

36px

&nbsp;

Navbar:

&nbsp;

999px

&nbsp;

&nbsp;

---

&nbsp;

Shadows

&nbsp;

Use only soft medical shadows.

&nbsp;

0 10px 30px rgba(0,0,0,.05)

&nbsp;

0 15px 40px rgba(0,0,0,.07)

&nbsp;

0 20px 60px rgba(0,0,0,.08)

&nbsp;

Never use harsh shadows.

&nbsp;

&nbsp;

---

&nbsp;

Animations

&nbsp;

Very subtle only.

&nbsp;

Fade Up

&nbsp;

0.5s

&nbsp;

Hover Scale

&nbsp;

scale(1.02)

&nbsp;

Button Hover

&nbsp;

translateY(-2px)

&nbsp;

No flashy animations.

&nbsp;

&nbsp;

---

&nbsp;

Final Design Direction

&nbsp;

Clone the provided screenshot as closely as possible:

&nbsp;

Same layout hierarchy

&nbsp;

Same spacing

&nbsp;

Same typography scale

&nbsp;

Same navbar style

&nbsp;

Same booking form placement

&nbsp;

Same department cards

&nbsp;

Same medical blue color palette

&nbsp;

Same card shadows

&nbsp;

Same rounded corners

&nbsp;

Same clean hospital aesthetic

&nbsp;

&nbsp;

Target: Premium Private Hospital Website UI with 99% visual similarity to the reference image.

- **Components**: shadcn primitives restyled with the new tokens (buttons, cards, inputs).

## Pages & Routes

```
src/routes/
  __root.tsx        -> nav + footer shell, fonts, global head
  index.tsx         -> Home
  about.tsx         -> About
  services.tsx      -> Services
  case-studies.tsx  -> Case Studies
  industries.tsx    -> Industries
  pricing.tsx       -> Pricing
  contact.tsx       -> Contact
  blog.tsx          -> Blog index (placeholder posts)
```

Each route gets its own `head()` with unique title + meta + og tags. Shared header/footer rendered in `__root.tsx`.

## Home Page Sections

1. **Hero** — Split layout (text left, visual right) with a rotating headline carousel (4 slides: "Become The Go-To Authority…", "Turn Your Knowledge Into Influence", "Build a Personal Brand That Attracts Clients", "Grow On YouTube & LinkedIn Without Posting Daily"). Primary CTA "Book Strategy Call", secondary "View Case Studies". Right side: generated luxury CEO portrait with floating glass UI cards (YouTube growth, LinkedIn posts, Shorts, Authority Score graph).
2. **Trust strip** — "Trusted by Founders & CEOs Worldwide" + USA/UK/Canada/UAE flags row.
3. **Problem** — "Why Most Experts Stay Invisible Online" + 5 bullet cards.
4. **Solution** — "The AYMO Authority System™" intro block.
5. **Services overview** — 5 glass cards (Personal Branding, YouTube, LinkedIn, Short Form, Repurposing).
6. **How It Works** — 4-step horizontal timeline.
7. **Case Studies preview** — 3 result cards.
8. **Industries** — Chip/tag grid (Founders, CEOs, Coaches, Consultants, Real Estate, SaaS, Doctors, Lawyers, Finance).
9. **Pricing** — 3 tiers (Starter $497, Growth $1497, Elite $2997) with middle tier highlighted in gold.
10. **About preview** — "We don't create content. We build authorities."
11. **Final CTA** — Strategy call banner.
12. **Footer** — Links + `hello@aymo.digital`.

## Inner Pages

- **About**: Mission, Vision, Origin story, CTA.
- **Services**: Detailed breakdowns of YouTube, LinkedIn, Personal Branding, Shorts/Reels.
- **Case Studies**: Reusable Before → After → Strategy → Result card layout (3 placeholder studies).
- **Industries**: One section per audience with tailored angle.
- **Pricing**: Full pricing table + FAQ.
- **Contact**: Form (Name, Email, Business Type, Current Platform, Goal) — client-side validation with zod; submit shows success toast (no backend wired yet; can be connected to Lovable Cloud later if you want lead storage/email).
- **Blog**: Index with 3–4 placeholder articles and category chips.

## Imagery

Generated via image tool, saved to `src/assets/`:

- Hero CEO portrait (dark, cinematic)
- Abstract authority/analytics visual
- 3 case study cover images
- About origin image

## Technical Notes

- TanStack Start file-based routing, shared `<Header/>` and `<Footer/>` in `__root.tsx`.
- All semantic tokens defined in `src/styles.css` — no hardcoded colors in components.
- Smooth section reveals via simple CSS/Motion transitions (no heavy libs).
- SEO: per-route `head()` with title <60 chars, description <160 chars, og + twitter tags, single H1 per page, semantic HTML, alt text on all images.

## Out of scope (unless you confirm)

- Backend (Lovable Cloud) for contact form submissions, blog CMS, or auth.
- Real case study content (using polished placeholders).
- Booking integration (Calendly/Cal.com) — CTAs will scroll to contact form unless you provide a link.

## Clarifications I can proceed with defaults on, but flag if you want changes

- **Booking link**: defaulting "Book Strategy Call" to `/contact`. Share a Calendly URL if you'd like it linked instead.
- **Logo**: I'll set a clean gold "AYMO" wordmark unless you upload a logo.
- **Contact form**: client-only for now; say the word to enable Lovable Cloud + email notifications.