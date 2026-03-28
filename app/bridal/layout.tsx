import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bridal Makeup in Pala by Nikita Liby | NIXTUDIO",
  description:
    "Bridal makeup in Pala by Nikita Liby. HD & airbrush packages from ₹27,500. Engagement, wedding & reception. Book now.",
  openGraph: {
    title: "Bridal Makeup in Pala by Nikita Liby | NIXTUDIO",
    description:
      "Bridal makeup in Pala by Nikita Liby. HD & airbrush packages from ₹27,500. Engagement, wedding & reception.",
    url: "https://nixtudio.in/bridal",
    images: [{ url: "/og/bridal-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Bridal Makeup in Pala by Nikita Liby | NIXTUDIO",
    description:
      "Bridal makeup in Pala by Nikita Liby. HD & airbrush packages from ₹27,500. Engagement, wedding & reception.",
    images: ["/og/bridal-og.jpg"],
  },
  alternates: {
    canonical: "/bridal",
  },
};

export default function BridalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
