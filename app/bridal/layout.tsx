import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Makeup in Pala | The Bridal Edit — NIXTUDIO",
  description:
    "Premium HD and airbrush bridal makeup exclusively by Nikita Liby. Engagement, wedding, and reception packages from ₹27,500. Based in Pala.",
  openGraph: {
    title: "Bridal Makeup in Pala | The Bridal Edit — NIXTUDIO",
    description:
      "Premium HD and airbrush bridal makeup exclusively by Nikita Liby. Engagement, wedding, and reception packages from ₹27,500. Based in Pala.",
    url: "https://nixtudio.com/bridal",
    images: [{ url: "/og/bridal-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Bridal Makeup in Pala | The Bridal Edit — NIXTUDIO",
    description:
      "Premium HD and airbrush bridal makeup exclusively by Nikita Liby. Engagement, wedding, and reception packages from ₹27,500. Based in Pala.",
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
