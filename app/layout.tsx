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
  title: 'Zelenz Unisex Saloon | Premium Beauty & Styling Salon in Pala & Kottayam',
  description:
    'Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.',
  authors: [{ name: 'Zelenz Unisex Saloon', url: 'https://zelenzsaloon.com' }],
  creator: 'Zelenz Unisex Saloon',
  metadataBase: new URL('https://zelenzsaloon.com'),
  alternates: {
    canonical: 'https://zelenzsaloon.com',
    types: {
      'text/plain': [{ url: '/llms.txt', title: 'LLMs.txt' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: "https://zelenzsaloon.com",
    siteName: "Zelenz Unisex Saloon",
    title: "Zelenz Unisex Saloon | Premium Beauty & Styling Salon in Pala & Kottayam",
    description:
      "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
    images: [
      {
        url: '/images/studio/nixtudio-studio-signage-pala-kerala.webp',
        width: 1200,
        height: 630,
        alt: 'Zelenz Unisex Saloon in Pala and Kottayam Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zelenz Unisex Saloon | Premium Beauty & Styling Salon in Pala & Kottayam",
    description: "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
    images: ['/images/studio/nixtudio-studio-signage-pala-kerala.webp'],
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
            .skeleton { background: linear-gradient(90deg, #e9ce98 25%, #e9ce98 50%, #e9ce98 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
            @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
          `
        }} />
        
        <link rel="alternate" type="text/plain" href="https://nixtudio.in/llms.txt" title="LLMs.txt" />
        <link
          rel="preload"
          as="image"
          href="/videos/zelenz_hero_poster.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="video"
          href="/videos/zelenz_hero_video.mp4"
          type="video/mp4"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preconnect to Google domains for Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        <JsonLd />
      </head>
      <body id="nix-body" suppressHydrationWarning className="min-h-screen antialiased overflow-x-hidden" style={{ background: "#000000", color: "#e9ce98" }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingProvider>
          <ClientComponents />
          <div id="nix-app-shell" className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
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
