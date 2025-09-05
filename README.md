# Next.js + Tailwind + shadcn/ui Template

Production‑ready starter with Next.js App Router, Tailwind CSS, and shadcn/ui prewired. Clone and start building.

## Quick Start

- Prereqs: Node 18+ and your package manager (`pnpm` recommended).
- Install: `pnpm install`
- Dev: `pnpm dev` then open http://localhost:3000

## What’s Included

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui setup with base tokens and a `Button` component
- Dark mode via `next-themes`
- Path aliases (`@/*`) and `cn` utility
- Prettier (with Tailwind plugin) and ESLint

## Add More shadcn/ui Components

This template includes the shadcn config (`components.json`) and base styling.

- If you want to pull more components later:
  - `npx shadcn-ui@latest add [component]`
  - Examples: `button`, `input`, `dialog`, `dropdown-menu`, `card`, etc.

## Project Structure

- `src/app` — App Router pages, layout, and global styles
- `src/components/ui` — shadcn/ui components (sample `button` included)
- `src/components` — other components
- `src/lib` — utilities (e.g., `cn`)

## Scripts

- `pnpm dev` — Run dev server
- `pnpm build` — Build production bundle
- `pnpm start` — Start production server
- `pnpm lint` — Lint
- `pnpm typecheck` — TypeScript typecheck
- `pnpm format` — Format with Prettier

## Using As Your Template

Option A: Use this repo as a GitHub template and create a new repo from it.

Option B: Clone directly:

```bash
git clone <this-repo-url> my-app
cd my-app
pnpm install
pnpm dev
```

Then update `package.json` name, add your license, CI, and deploys.

## Notes

- If you prefer `npm` or `yarn`, adjust the lockfile and `packageManager` field in `package.json` accordingly.
- Tailwind tokens and theme scales are aligned to shadcn defaults and can be customized in `tailwind.config.ts` and `src/app/globals.css`.

