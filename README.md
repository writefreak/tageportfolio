# Endwell Heritage — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + lucide-react.

## Setup

1. Drop these files into a fresh Next.js project (or run `npx create-next-app@latest` with TypeScript, Tailwind, and App Router, then overwrite with these files).
2. `npm install lucide-react`
3. `npm run dev`

## Notes

- Tailwind v4: no `tailwind.config.ts` needed. All tokens live in `app/globals.css` under `@theme inline`.
- Add your photo: replace the placeholder block in `components/Hero.tsx` (clearly marked) with a Next `<Image />` tag pointing at your portrait, ideally a 4:5 crop.
- Update real links in `components/Contact.tsx` (email, GitHub, LinkedIn) and `lib/projects.ts` (project URLs) before deploying.
- Add an `/public/og-image.jpg` (1200x630) for social previews, referenced in `app/layout.tsx`.
- Color tokens, including the accent #8EE612, live at the top of `app/globals.css` if you want to adjust the palette.
