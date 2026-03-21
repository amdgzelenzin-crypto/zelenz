import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nikita Liby | Creative Director, NIXTUDIO Pala",
  description:
    "Nikita Liby is a premium makeup artist and creative director based in Pala, specializing in bridal makeup and bleach-free hair coloring.",
  openGraph: {
    title: "About Nikita Liby | Creative Director, NIXTUDIO Pala",
    description:
      "Nikita Liby is a premium makeup artist and creative director based in Pala, specializing in bridal makeup and bleach-free hair coloring.",
    url: "https://nixtudio.com/about",
    images: [{ url: "/og/about-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "About Nikita Liby | Creative Director, NIXTUDIO Pala",
    description:
      "Nikita Liby is a premium makeup artist and creative director based in Pala, specializing in bridal makeup and bleach-free hair coloring.",
    images: ["/og/about-og.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
