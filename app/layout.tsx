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
  title: "Nixtudio | Premium Bridal Makeup & Salon in Pala",
  description:
    "Pala's #1 premium bridal makeup studio. Expert bridal artistry & advanced hair care exclusively by Nikita. Top-rated salon in Pala, Kottayam, Kerala. Book now.",
  keywords: [
    "bridal studio Pala",
    "bridal studio Kottayam",
    "salon Pala", 
    "salon Kottayam",
    "bridal makeup Kerala",
    "makeup studio Pala Kerala",
    "best bridal makeup Pala",
    "best bridal makeup Kottayam",
    "luxury bridal salon Pala",
    "luxury bridal salon Kottayam",
    "bridal makeup artist Pala",
    "bridal makeup artist Kottayam",
    "top rated salon Pala Kerala",
    "premium bridal studio Pala",
    "bridal artistry Pala",
    "hair salon Pala",
    "hair salon Kottayam",
    "bridal makeup near me Pala",
    "bridal makeup near me Kottayam",
    "Nikita bridal makeup Pala",
    "Nikita bridal makeup Kottayam",
    "bridal makeup studio Kerala",
    "luxury salon Pala",
    "bridal makeup Pala Kerala",
    "bridal artist Pala",
    "bridal artist Kottayam",
    "bridal beauty salon Pala",
    "bridal beauty salon Kottayam",
    "bridal makeup services Pala",
    "bridal makeup services Kottayam",
    "best salon in Pala",
    "best salon in Kottayam",
    "bridal makeup expert Pala",
    "bridal makeup expert Kottayam",
    "Pala bridal studio",
    "Kottayam bridal studio",
    "Kerala bridal makeup",
    "bridal makeup artist Kerala",
    "luxury bridal Kerala",
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
    title: "Nixtudio | Premium Bridal Makeup & Salon in Pala",
    description:
      "Pala's #1 premium bridal makeup studio. Expert bridal artistry & advanced hair care exclusively by Nikita. Top-rated salon in Pala, Kottayam, Kerala. Book now.",
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
    title: "Nixtudio | Premium Bridal Makeup & Salon in Pala",
    description: "Pala's #1 premium bridal makeup studio. Expert bridal artistry & advanced hair care exclusively by Nikita. Top-rated salon in Pala, Kottayam, Kerala. Book now.",
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
        
        {/* Font display swap optimization */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap" as="style" />
        
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
        
        {/* Defer non-critical scripts */}
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-R89TBWLTXG"></script>
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
