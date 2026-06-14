# NIX-STUDIO

Marketing site for **NIXTUDIO by Nikita Liby** — bridal makeup and luxury salon in Pala & Kottayam, Kerala.

Live: [nixtudio.in](https://nixtudio.in)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- React 19, TypeScript, Tailwind CSS 4
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (runs sitemap generation via `postbuild`) |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project structure

- `app/` — routes and pages (homepage, services, bridal, blog, SEO landing pages)
- `components/` — UI, SEO, and layout components
- `lib/` — content, SEO configs, blog data
- `public/` — static assets and gallery images
- `next-sitemap.config.js` — sitemap generation

## Deployment

The site is deployed on Vercel. Domain and DNS are managed in the Vercel project dashboard and your domain registrar — do not commit DNS records or verification tokens to this repo.

## SEO notes

- Server-rendered content is always present for crawlers (homepage H1, schema, crawlable copy).
- JSON-LD (`Organization`, `BeautySalon`, `WebSite`) is injected in the root layout.
- Sitemaps are generated on build via `next-sitemap`.
