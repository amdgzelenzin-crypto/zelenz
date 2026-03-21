import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Party & Guest Makeup in Pala Kerala | NIXTUDIO by Nikita Liby',
  description: 'Party makeup packages from ₹5,500 in Pala, Kerala. Guest makeup, hair styling, saree draping for weddings, functions, and celebrations.',
  openGraph: {
    title: 'Party & Guest Makeup in Pala Kerala | NIXTUDIO by Nikita Liby',
    description: 'Party makeup packages from ₹5,500 in Pala, Kerala. Guest makeup, hair styling, saree draping for weddings, functions, and celebrations.',
    url: "https://nixtudio.com/party",
    images: [{ url: "/og/party-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Party & Guest Makeup in Pala Kerala | NIXTUDIO by Nikita Liby',
    description: 'Party makeup packages from ₹5,500 in Pala, Kerala. Guest makeup, hair styling, saree draping for weddings, functions, and celebrations.',
    images: ["/og/party-og.jpg"],
  },
};

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
