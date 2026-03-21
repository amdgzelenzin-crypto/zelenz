import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon",
  description:
    "Full salon services in Pala — haircut, coloring, spa treatments, gel nails, facials, waxing, and more. Book an appointment with NIXTUDIO.",
  openGraph: {
    title: "Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon",
    description:
      "Full salon services in Pala — haircut, coloring, spa treatments, gel nails, facials, waxing, and more. Book an appointment with NIXTUDIO.",
    url: "https://nixtudio.com/salon",
    images: [{ url: "/og/salon-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon",
    description:
      "Full salon services in Pala — haircut, coloring, spa treatments, gel nails, facials, waxing, and more. Book an appointment with NIXTUDIO.",
    images: ["/og/salon-og.jpg"],
  },
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
