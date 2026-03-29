import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Salon in Pala, Kerala — Hair, Nails & Spa | NIXTUDIO",
  description:
    "Salon in Pala, Kerala — NIXTUDIO. Hair, nails, facials, spa, waxing & more by Nikita Liby. Walk-ins welcome. Call 70347 26402.",
  openGraph: {
    title: "Salon in Pala, Kerala — Hair, Nails & Spa | NIXTUDIO",
    description:
      "Salon in Pala, Kerala — NIXTUDIO. Hair, nails, facials, spa, waxing & more by Nikita Liby. Walk-ins welcome.",
    url: "https://www.nixtudio.in/services",
    images: [{ url: "/og/services-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Salon in Pala, Kerala — Hair, Nails & Spa | NIXTUDIO",
    description:
      "Salon in Pala, Kerala — NIXTUDIO. Hair, nails, facials, spa, waxing & more by Nikita Liby. Walk-ins welcome.",
    images: ["/og/services-og.jpg"],
  },
  alternates: {
    canonical: "https://www.nixtudio.in/services",
  },
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
