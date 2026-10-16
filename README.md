# Cynergy

Astro + React islands + Tailwind CSS v4 + Framer Motion.

## Commands
- `npm install`
- `npm run dev` → http://localhost:4321
- `npm run build`

## Structure
- `src/pages` – routes (.astro)
- `src/layouts` – page shells
- `src/components/ui` – small static Astro pieces
- `src/components/sections` – page sections (.astro)
- `src/components/islands` – React + Framer Motion (use `client:*`)
- `src/lib` – helpers, shared motion variants
- `src/data` – site content/config
- `src/styles/global.css` – Tailwind entry + theme tokens
