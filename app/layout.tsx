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
  title: "Nixtudio | Pala's #1 Luxury Bridal Artistry & Advanced Hair Care Studio",
  description:
    "Pala's #1 destination for luxury bridal artistry, HD & Airbrush makeup, and advanced hair care. Expert bleach-free balayage, keratin treatments, and premium beauty services near Carmel Hospital. Serving Kottayam, Ettumanoor & Central Travancore.",
  keywords: [
    "Pala's #1 bridal studio",
    "luxury bridal artistry Pala",
    "advanced hair care Kottayam",
    "HD bridal makeup Pala",
    "Airbrush makeup artist Kottayam",
    "bleach-free balayage Pala",
    "keratin treatment Kerala",
    "bridal makeup near Carmel Hospital",
    "premium woman salon Pala",
    "bridal studio Kottayam district",
    "luxury makeup artist Pala",
    "bridal artistry studio Kerala",
    "natural bridal makeup Kottayam",
    "humidity-proof bridal makeup",
    "waterproof wedding makeup Kerala",
    "bridal makeup Ettumanoor",
    "bridal makeup Changanacherry",
    "bridal studio near me Pala",
    "Nikita Liby bridal artist",
    "luxury hair salon Pala",
    "bridal prep suite Kerala",
    "organic hair color Pala",
    "hair Botox treatment Kottayam",
    "bridal makeup Pala Town",
    "makeup studio near KSRTC Stand Pala",
    "luxury beauty salon Central Travancore",
    "minimalist bridal makeup Kerala",
    "Noura bridal look Pala",
    "bridal makeup artist Pala Kerala",
    "top rated bridal studio Kottayam",
    "exclusive bridal artistry Pala",
    "bridal makeup 4.9 rating Pala",
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
    title: "Nixtudio | Pala's #1 Luxury Bridal Artistry & Advanced Hair Care Studio",
    description:
      "Pala's #1 destination for luxury bridal artistry, HD & Airbrush makeup, and advanced hair care. Expert bleach-free balayage, keratin treatments, and premium beauty services near Carmel Hospital. Serving Kottayam, Ettumanoor & Central Travancore.",
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
    title: "Nixtudio | Pala's #1 Luxury Bridal Artistry & Advanced Hair Care Studio",
    description: "Pala's #1 destination for luxury bridal artistry, HD & Airbrush makeup, and advanced hair care. Expert bleach-free balayage, keratin treatments, and premium beauty services near Carmel Hospital. Serving Kottayam, Ettumanoor & Central Travancore.",
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
