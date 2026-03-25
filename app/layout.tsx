import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display, Lora, Jost, Cormorant } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientComponents from "@/components/ui/ClientComponents";
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

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
  title: 'NIXTUDIO — Bridal Makeup Artist in Pala, Kottayam Kerala',
  description: 'NIXTUDIO is a premium bridal makeup studio in Pala, Kottayam, Kerala. HD bridal makeup, airbrush, traditional Kerala bridal looks, pre-bridal packages, nail art, hair styling and spa. Book your appointment today.',
  keywords: [
    "bridal makeup Pala",
    "bridal makeup Kottayam",
    "NIXTUDIO Pala",
    "HD bridal makeup Pala",
    "airbrush bridal makeup Kerala",
    "wedding makeup Pala Kerala",
    "makeup artist Pala",
    "beauty salon Pala",
    "pre bridal package Pala",
    "nail art Pala",
    "hair styling Pala",
    "spa Pala Kerala",
    "best makeup artist Kottayam",
    "bridal makeup near me Pala"
  ],
  authors: [{ name: 'NIXTUDIO' }],
  creator: 'NIXTUDIO',
  metadataBase: new URL('https://nixtudio.in'),
  openGraph: {
    title: 'NIXTUDIO — Bridal Makeup Artist, Pala Kerala',
    description: 'Premium bridal makeup studio in Pala, Kottayam. HD makeup, airbrush, traditional bridal looks. Book your wedding date.',
    url: 'https://nixtudio.in',
    siteName: 'NIXTUDIO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NIXTUDIO Bridal Makeup Pala Kerala',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIXTUDIO — Bridal Makeup Artist, Pala Kerala',
    description: 'Premium bridal makeup studio in Pala, Kottayam. Book your wedding date.',
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
      className={`${playfair.variable} ${lora.variable} ${jost.variable} ${cormorant.variable} ${cormorantGaramond.variable} ${inter.variable}`}
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
