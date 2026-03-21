import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIXTUDIO by Nikita Liby | Premium Makeup Studio in Pala",
  description:
    "Bridal, party, and salon services in Pala by Nikita Liby. Bridal makeup done exclusively by Nikita using international luxury brands.",
  metadataBase: new URL("https://nixtudio.com"),
  openGraph: {
    type: "website",
    siteName: "NIXTUDIO by Nikita Liby",
    title: "NIXTUDIO by Nikita Liby | Premium Makeup Studio in Pala",
    description:
      "Bridal, party, and salon services in Pala by Nikita Liby. Bridal makeup done exclusively by Nikita using international luxury brands.",
    url: "https://nixtudio.com",
    images: [{ url: "/og/home-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIXTUDIO by Nikita Liby | Premium Makeup Studio in Pala",
    description:
      "Bridal, party, and salon services in Pala by Nikita Liby. Bridal makeup done exclusively by Nikita using international luxury brands.",
    images: ["/og/home-og.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "NIXTUDIO by Nikita Liby",
              image: "https://nixtudio.com/og/home-og.jpg",
              url: "https://nixtudio.com",
              telephone: "+917034726402",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pala",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 10:00-19:00",
              priceRange: "₹₹₹",
              description:
                "Premium bridal makeup, party makeup, and salon services in Pala, Kerala by Nikita Liby.",
              sameAs: ["https://instagram.com/nixtudio"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-parchment text-espresso antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
