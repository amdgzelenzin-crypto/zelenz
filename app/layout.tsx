import type { Metadata } from 'next'
import { Playfair_Display, Lora, Jost, Cormorant } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientComponents from "@/components/ui/ClientComponents";
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import { LoadingProvider } from '@/contexts/LoadingContext'
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ['Georgia', 'serif'],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  fallback: ['Georgia', 'serif'],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const cormorant = Cormorant({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  display: "swap",
  preload: false,
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: "NIXTUDIO by Nikita Liby | Premium Bridal Makeup Studio, Pala",
  description:
    "Best makeup artist in Kottayam & Pala, Kerala. NIXTUDIO offers premium bridal makeup, HD & airbrush services by Nikita Liby.",
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
    "best makeup artist Kottayam",
    "bridal studio near me",
    "beauty salon Pala",
    "pre bridal package Pala",
    "nail art Pala",
    "nail lounge Pala",
    "hair styling Pala",
    "spa Pala Kerala",
    "bridal makeup near me Pala",
    "Nikita Liby makeup",
    "engagement makeup Pala",
    "Christian bridal makeup Pala",
    "Hindu bridal makeup Kerala",
    "Muslim bridal makeup Pala",
    "traditional Kerala wedding makeup",
    "temple bridal makeup Kottayam",
    "luxury bridal suite Pala",
    "bridal prep lounge Kerala",
  ],
  authors: [{ name: 'NIXTUDIO' }],
  creator: 'NIXTUDIO',
  metadataBase: new URL('https://nixtudio.in'),
  alternates: {
    canonical: 'https://nixtudio.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: "https://nixtudio.in",
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
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: Georgia, serif; }
            .skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
            @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
          `
        }} />
        
        {/* Preconnect to font domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload hero image for LCP - WebP format */}
        <link
          rel="preload"
          as="image"
          href="/images/premium-bridal-makeup-studio-pala-kerala-hero.webp"
          type="image/webp"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect to Google domains for Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      </head>
      <body id="nix-body" suppressHydrationWarning className="min-h-screen antialiased" style={{ background: "#FDE8E8", color: "#3D1520" }}>
        <LoadingProvider>
          <JsonLd />
          <ClientComponents />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat />
          {/* Load Google Analytics at the end of body for better performance */}
          <GoogleAnalytics gaId="G-R89TBWLTXG" />
        </LoadingProvider>
      </body>
    </html>
  );
}
