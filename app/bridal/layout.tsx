import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bridal Makeup in Pala Kerala | HD & Airbrush — NIXTUDIO',
  description: 'Premium HD (₹27,500) and airbrush (₹32,500) bridal makeup in Pala, Kerala by Nikita Liby. Engagement, wedding, reception packages. Studio-only, no home visits.',
  openGraph: {
    title: 'Bridal Makeup in Pala Kerala | HD & Airbrush — NIXTUDIO',
    description: 'Premium HD (₹27,500) and airbrush (₹32,500) bridal makeup in Pala, Kerala by Nikita Liby. Engagement, wedding, reception packages. Studio-only, no home visits.',
    url: "https://nixtudio.com/bridal",
    images: [{ url: "/og/bridal-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Bridal Makeup in Pala Kerala | HD & Airbrush — NIXTUDIO',
    description: 'Premium HD (₹27,500) and airbrush (₹32,500) bridal makeup in Pala, Kerala by Nikita Liby. Engagement, wedding, reception packages. Studio-only, no home visits.',
    images: ["/og/bridal-og.jpg"],
  },
};

export default function BridalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
