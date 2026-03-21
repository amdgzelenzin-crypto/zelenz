import type { Metadata } from "next";
import { Playfair_Display, Lora, Jost, Cormorant } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientComponents from "@/components/ui/ClientComponents";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'NIXTUDIO by Nikita Liby | Premium Bridal Makeup Studio, Pala',
  description: 'Premium bridal makeup studio in Pala, Kerala by Nikita Liby. HD and airbrush bridal makeup done exclusively by Nikita. Engagement, wedding, and reception packages from ₹27,500.',
  keywords: [
    'bridal makeup Pala',
    'bridal makeup Kerala',
    'makeup artist Pala',
    'makeup artist Kottayam',
    'HD bridal makeup Kerala',
    'airbrush makeup Kerala',
    'NIXTUDIO',
    'Nikita Liby makeup',
    'engagement makeup Pala',
    'wedding makeup Kerala',
    'party makeup Pala',
    'nail lounge Pala',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nixtudio.in',
    siteName: 'NIXTUDIO by Nikita Liby',
    title: 'NIXTUDIO | Premium Bridal Makeup Studio, Pala Kerala',
    description: 'Bridal makeup done exclusively by Nikita Liby in Pala, Kerala. HD and airbrush packages from ₹27,500.',
    images: [{ url: "/og/home-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIXTUDIO | Premium Bridal Makeup Studio, Pala Kerala",
    description: "Bridal makeup done exclusively by Nikita Liby in Pala, Kerala. HD and airbrush packages from ₹27,500.",
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
      className={`${playfair.variable} ${lora.variable} ${jost.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var seen = sessionStorage.getItem('nix-loaded');
                  if (!seen) {
                    document.documentElement.style.visibility = 'hidden';
                  }
                } catch(e) {}
              })();
            `
          }}
        />
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
      <body id="nix-body" suppressHydrationWarning className="min-h-screen antialiased" style={{ background: "#FDE8E8", color: "#3D1520" }}>
        <ClientComponents />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
