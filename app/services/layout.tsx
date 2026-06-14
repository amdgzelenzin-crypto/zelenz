import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Salon in Pala Kerala — Hair, Nails, Spa & Bridal | NIXTUDIO",
  description:
    "Best salon in Pala, Kerala — NIXTUDIO. Hair styling, gel nails, HydraFacial, waxing, threading, facials, spa & bridal makeup by Nikita Liby. Walk-ins welcome. Call 70347 26402.",
  openGraph: {
    title: "Best Salon in Pala Kerala — Hair, Nails, Spa & Bridal | NIXTUDIO",
    description:
      "Best salon in Pala, Kerala — NIXTUDIO. Hair, nails, facials, spa, waxing & bridal makeup by Nikita Liby. Walk-ins welcome.",
    url: "https://nixtudio.in/services",
    images: [{ url: "/og/services-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Best Salon in Pala Kerala — Hair, Nails, Spa & Bridal | NIXTUDIO",
    description:
      "Best salon in Pala, Kerala — NIXTUDIO. Hair, nails, facials, spa, waxing & bridal makeup by Nikita Liby. Walk-ins welcome.",
    images: ["/og/services-og.jpg"],
  },
  alternates: {
    canonical: "https://nixtudio.in/services",
  },
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
