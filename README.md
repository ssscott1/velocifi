# Velocity Works

The brochure site for **Velocity Works** — a founder-owned, AI-native
financial-services production house. Its first venture is **Velocifi**, the
platform that runs the ecosystem. _Build once. Launch many._

Built with Next.js (App Router) + TypeScript + Tailwind CSS. No CMS, no database,
no external APIs — all content lives in editable constants.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm start` (serve the build).

## Editing content

All copy is in one file: **`lib/content.ts`**.

- **Email** — `site.email` (`hello@velocityworks.com.au`), used by the Contact mailto link.
- **Tagline** — `site.tagline`.
- **Ventures** — the `ventures.items` array (name, description, status, and an
  optional `href` that renders an external link). Add an object to list another venture.
- Hero, thesis, platform and contact copy live alongside them in the same file.

## Adjusting the brand

Brand colours are defined once in **`tailwind.config.ts`** (and mirrored as CSS
variables in `app/globals.css`):

| Token  | Hex       | Use                                   |
| ------ | --------- | ------------------------------------- |
| ink    | `#11141A` | Primary near-black                    |
| signal | `#00C46E` | Accent green — emphasis only          |
| paper  | `#F6F7F5` | Off-white background                  |
| slate  | `#6B7280` | Muted / secondary text                |

Edit the hex values there and they update across the whole site.

## Structure

```
app/
  layout.tsx     Shared shell: <Nav /> + page + <Footer />, metadata
  page.tsx       The one-page composition
  globals.css    Tailwind layers + brand CSS variables
  icon.svg       Favicon (tile-V mark)
components/
  Logo.tsx       Inline-SVG mark + wordmark (themeable)
  Nav.tsx        Sticky nav, transparent-to-solid on scroll, mobile menu
  Hero.tsx       Ink hero band
  About.tsx      01 — The thesis
  Platform.tsx   02 — The platform
  Ventures.tsx   03 — Ventures
  Contact.tsx    04 — Contact (Ink band, mailto)
  Footer.tsx     Minimal footer
  Section.tsx    Shared content band (width + spacing)
  Eyebrow.tsx    Mono section label with green dot
  Reveal.tsx     Subtle fade/slide-up on scroll
lib/
  content.ts     All site copy (single source of truth)
```

The App Router setup means sections can later be promoted to dedicated routes
(e.g. `/ventures`, `/about`) by adding folders under `app/`.
