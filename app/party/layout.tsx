import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party & Guest Makeup in Pala | NIXTUDIO by Nikita Liby",
  description:
    "Party and guest makeup packages from ₹5,500 in Pala. Hair, makeup, and saree draping by the NIXTUDIO team.",
  openGraph: {
    title: "Party & Guest Makeup in Pala | NIXTUDIO by Nikita Liby",
    description:
      "Party and guest makeup packages from ₹5,500 in Pala. Hair, makeup, and saree draping by the NIXTUDIO team.",
    url: "https://nixtudio.com/party",
    images: [{ url: "/og/party-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Party & Guest Makeup in Pala | NIXTUDIO by Nikita Liby",
    description:
      "Party and guest makeup packages from ₹5,500 in Pala. Hair, makeup, and saree draping by the NIXTUDIO team.",
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
