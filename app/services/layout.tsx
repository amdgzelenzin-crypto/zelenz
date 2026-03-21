import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon Kerala',
  description: 'Full salon services in Pala Kerala — haircut, hair coloring, gel nails, facials, spa treatments, waxing. The Nail Lounge by NIXTUDIO.',
  openGraph: {
    title: 'Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon Kerala',
    description: 'Full salon services in Pala Kerala — haircut, hair coloring, gel nails, facials, spa treatments, waxing. The Nail Lounge by NIXTUDIO.',
    url: "https://nixtudio.com/services",
    images: [{ url: "/og/services-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Hair, Nails, Facials & Spa in Pala | NIXTUDIO Salon Kerala',
    description: 'Full salon services in Pala Kerala — haircut, hair coloring, gel nails, facials, spa treatments, waxing. The Nail Lounge by NIXTUDIO.',
    images: ["/og/services-og.jpg"],
  },
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
