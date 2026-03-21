import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Gallery | NIXTUDIO by Nikita Liby — Pala, Kerala",
  description:
    "Browse bridal, party, hair and nail work by NIXTUDIO. Premium makeup studio in Pala, Kerala.",
  openGraph: {
    title: "Portfolio & Gallery | NIXTUDIO by Nikita Liby — Pala, Kerala",
    description:
      "Browse bridal, party, hair and nail work by NIXTUDIO. Premium makeup studio in Pala, Kerala.",
    url: "https://nixtudio.com/gallery",
    images: [{ url: "/og/gallery-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Gallery | NIXTUDIO by Nikita Liby — Pala, Kerala",
    description:
      "Browse bridal, party, hair and nail work by NIXTUDIO. Premium makeup studio in Pala, Kerala.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
