# Jonatan Eslava — Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), showcasing full stack development and data/BI work. Bilingual (English / Spanish) with static routing, no client-side frameworks.

**Live site:** [add your Render URL here]

## Features

- **Bilingual (EN/ES)** via Astro's built-in i18n routing — `/` for English, `/es/` for Spanish, no JS runtime required
- **Editorial design system** — Fraunces (serif) + Archivo (sans), a custom 5-color palette, square corners, no rounded UI
- **Bento-style stack section** — technologies grouped by category (Frontend, Backend, Database, Data/BI) with brand icons that go from grayscale to color on hover
- **Dual CV download** — the primary button follows the site's current language; a secondary link always offers the other language
- **Copy-to-clipboard contact button** — with a fallback for non-secure contexts (e.g. testing over local network via HTTP)
- **Mobile-first** — every section is designed for small screens first, then enhanced for desktop

## Tech stack

| Category  | Tools                                       |
| --------- | ------------------------------------------- |
| Framework | Astro                                       |
| Styling   | Tailwind CSS v4 (`@tailwindcss/vite`)       |
| Language  | TypeScript                                  |
| Icons     | [Simple Icons](https://simpleicons.org) CDN |
| Fonts     | Fraunces, Archivo (Google Fonts)            |
| Hosting   | Render (Static Site)                        |

## Project structure

```
src/
├── components/       # Section components (Hero, About, Stack, Projects, Experience, Contact)
├── data/             # Pure content data (projects.ts, stack.ts, experience.ts, contact.ts)
├── i18n/             # Translation dictionary (ui.ts) and helpers (utils.ts)
├── layouts/          # Base Layout.astro (fonts, meta tags, global CSS import)
├── pages/
│   ├── index.astro   # English (default locale)
│   └── es/
│       └── index.astro  # Spanish
└── styles/
    └── global.css    # Tailwind import + design tokens (@theme)
```

## Getting started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# expose dev server on local network
npm run dev -- --host

# build for production
npm run build

# preview the production build locally
npm run preview
```

## Adding content

- **Projects:** edit `src/data/projects.ts`, then add matching translation keys (`projects.<key>.title`, `projects.<key>.desc`) in `src/i18n/ui.ts` for both `en` and `es`.
- **Stack/technologies:** edit `src/data/stack.ts`. Icons use [Simple Icons](https://simpleicons.org) slugs (e.g. `react`, `dotnet`, `powerbi`) — check the site for the exact slug if an icon doesn't load.
- **Experience:** edit `src/data/experience.ts` and its translation keys under `experience.*`.
- **Contact links:** edit `src/data/contact.ts` with your real email, LinkedIn, and GitHub URLs.
- **CVs:** place PDF files in `public/cv/` and reference them from `src/i18n/cv.ts`.

## Deployment (Render)

1. Push the repository to GitHub.
2. On [Render](https://render.com), create a **New Static Site** and connect the repo.
3. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Deploy — Render rebuilds automatically on every push to the connected branch.

## License

Personal project — feel free to use the structure as a reference, but please don't copy the content as your own.
