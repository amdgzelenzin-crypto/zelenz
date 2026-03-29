import type { Metadata } from 'next'
import { Playfair_Display, Lora, Jost, Cormorant } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientComponents from "@/components/ui/ClientComponents";
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
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
  title: "NIXTUDIO by Nikita Liby | Premium Bridal Makeup Studio, Pala",
  description:
    "NIXTUDIO — Premium bridal makeup & salon in Pala, Kerala by Nikita Liby. HD & Airbrush bridal packages from ₹27,500. Hair, nails & spa. Book today.",
  keywords: [
    "bridal makeup Pala",
    "bridal makeup Kottayam",
    "bridal makeup Kerala",
    "NIXTUDIO Pala",
    "HD bridal makeup Pala",
    "airbrush bridal makeup Kerala",
    "wedding makeup Pala Kerala",
    "makeup artist Pala",
    "makeup artist Kottayam",
    "beauty salon Pala",
    "pre bridal package Pala",
    "nail art Pala",
    "nail lounge Pala",
    "hair styling Pala",
    "spa Pala Kerala",
    "best makeup artist Kottayam",
    "bridal makeup near me Pala",
    "Nikita Liby makeup",
    "engagement makeup Pala",
    "party makeup Pala",
  ],
  authors: [{ name: 'NIXTUDIO' }],
  creator: 'NIXTUDIO',
  metadataBase: new URL('https://www.nixtudio.in'),
  alternates: {
    canonical: 'https://www.nixtudio.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: "https://www.nixtudio.in",
    siteName: "NIXTUDIO by Nikita Liby",
    title: "NIXTUDIO | Premium Bridal Makeup Studio, Pala Kerala",
    description:
      "NIXTUDIO — Premium bridal makeup & salon in Pala, Kerala by Nikita Liby. Bridal, party makeup, hair, nails & spa.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NIXTUDIO Bridal Makeup Pala Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIXTUDIO | Premium Bridal Makeup Studio, Pala Kerala',
    description: 'Bridal makeup done exclusively by Nikita Liby in Pala, Kerala. HD and airbrush packages from ₹27,500.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: 'LAajSHtWnZO6fup_YAS_H67VWoEW_VOvJJnWG9fmqp4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${lora.variable} ${jost.variable} ${cormorant.variable}`}
    >
      <head>
        {/* Preload hero image for LCP - AVIF favored in 2026 */}
        <link
          rel="preload"
          as="image"
          href="/images/premium-bridal-makeup-studio-pala-kerala-hero.avif"
          type="image/avif"
        />
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
      </head>
      <body id="nix-body" suppressHydrationWarning className="min-h-screen antialiased" style={{ background: "#FDE8E8", color: "#3D1520" }}>
        <GoogleAnalytics gaId="REPLACE_WITH_G_MEASUREMENT_ID" />
        <JsonLd />
        <ClientComponents />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
