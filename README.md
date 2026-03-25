This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Vercel DNS Configuration

To point your domain `nixtudio.in` to this site on Vercel, update your DNS records in your registrar to match these exactly:

| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | **`76.76.21.21`** (Change from `216.198.79.1`) | 14400 |
| **CNAME** | `www` | **`cname.vercel-dns.com`** (Or the specific one from Vercel) | 14400 |
| **TXT** | `@` | `google-site-verification=LAajSHtWnZO6fup_YAS_H67VWoEW_VOvJJnWG9fmqp4` | 70 |

*Note: Your current A record points to `216.198.79.1` (Bluehost). You **must** change it to `76.76.21.21` for the sitemap and site to work.*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
