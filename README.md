# Fairfax Dental Atelier

Premium marketing website for a dental clinic on `fairfax.dentist`, optimized for the primary SEO query **Dentist in Fairfax, VA**.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint with Next.js Core Web Vitals rules

## Project Structure

```text
app/
  layout.tsx        Global metadata, Open Graph, Twitter Cards, root shell
  page.tsx          Homepage composition and section order
  globals.css       Tailwind import, global tokens, reveal animations
components/
  AnimatedReveal.tsx    Scroll reveal animation with IntersectionObserver fallback
  HeroBackground.tsx    Autoplay hero video and dental image fallback
  HeroSection.tsx       Premium hero composition and Framer Motion interactions
  JsonLd.tsx            Schema.org JSON-LD renderer
  SiteHeader.tsx        Fixed header and navigation
  SiteFooter.tsx        Footer contact details
  content-cards.tsx     Reusable cards used by homepage sections
  ui.tsx                Section shell, icons, and small UI primitives
lib/
  site.ts          Shared site config, content arrays, SEO/schema data
public/
  videos/hero.mp4  Dental hero video background
```

## Architecture Notes

- `app/page.tsx` is intentionally kept as a section composer. Reusable presentation patterns live in `components/content-cards.tsx`.
- Shared content, clinic details, navigation, and structured data live in `lib/site.ts` to avoid duplicated phone numbers, addresses, and SEO data.
- Interactive animation components are marked as Client Components only where needed. Static layout, metadata, footer, and JSON-LD stay server-rendered.
- `AnimatedReveal` keeps content visible by default and only hides nodes after the browser confirms animation support, preventing permanent invisible content if IntersectionObserver fails.
- The hero video uses `/public/videos/hero.mp4` with `autoplay`, `muted`, `loop`, `playsInline`, and `preload="auto"`.

## SEO

Implemented in `app/layout.tsx` and `components/JsonLd.tsx`:

- Primary title and description for "Dentist in Fairfax, VA"
- Canonical URL
- Open Graph metadata
- Twitter Cards
- Indexable robots metadata
- Schema.org `Dentist` and `LocalBusiness` JSON-LD

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`
- Descriptive labels for navigation, hero imagery, and appointment form
- Keyboard-friendly links, buttons, inputs, `details`/`summary` FAQ
- Reduced-motion support through `prefers-reduced-motion`
- High-contrast hero overlay for readable text on video

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Checks

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Content Updates

Most clinic content can be updated in `lib/site.ts`:

- Navigation
- Benefits/statistics
- Dental services
- Practice feature cards
- Doctor credentials
- Reviews
- FAQ
- Contact details
- Schema.org data

Hero copy and CTA labels live in `components/HeroSection.tsx` because they are tightly coupled to the hero layout.

## Handoff Checklist

- Confirm `/public/videos/hero.mp4` is the approved final clinic video.
- Replace demo phone number, address, and email with real client details in `lib/site.ts`.
- Replace stock imagery URLs with licensed final assets if required.
- Run `npm run lint` and `npm run build` before deployment.
- Re-check mobile, tablet, and desktop layouts after changing copy or media.
