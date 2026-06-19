# Hollanden & Vale — Next.js

Plain React (Next.js 15, App Router) version of the site. No TanStack.

## Run locally

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — routes (App Router). `page.tsx` per route, `layout.tsx` is the root shell.
- `components/` — `SiteHeader`, `SiteFooter`, `ContactForm`.
- `public/assets/` — images.
- `app/globals.css` — Tailwind v4 + brand tokens.
