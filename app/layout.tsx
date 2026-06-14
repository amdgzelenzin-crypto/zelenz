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
  title: '#1 Premium Bridal Makeup Studio & Luxury Salon in Pala & Kottayam | NIXTUDIO',
  description:
    '#1 premium bridal makeup studio & luxury salon in Pala & Kottayam. HD & airbrush bridal, hair, nails, spa by Nikita Liby. Thodupuzha Rd, Pala.',
  authors: [{ name: 'Nikita Liby', url: 'https://nixtudio.in/about' }],
  creator: 'NIXTUDIO by Nikita Liby',
  metadataBase: new URL('https://nixtudio.in'),
  alternates: {
    canonical: 'https://nixtudio.in',
    types: {
      'text/plain': [{ url: '/llms.txt', title: 'LLMs.txt' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: "https://nixtudio.in",
    siteName: "NIXTUDIO by Nikita Liby",
    title: "#1 Premium Bridal Makeup Studio & Luxury Salon in Pala & Kottayam | NIXTUDIO",
    description:
      "#1 premium bridal makeup studio & luxury salon in Pala & Kottayam. HD & airbrush bridal, hair, nails, spa by Nikita Liby. Book now.",
    images: [
      {
        url: '/images/studio/nixtudio-studio-signage-pala-kerala.webp',
        width: 1200,
        height: 630,
        alt: 'NIXTUDIO premium bridal makeup studio and luxury salon in Pala Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Bridal Makeup Studio & Luxury Salon Pala | NIXTUDIO",
    description: "Pala & Kottayam's premium bridal makeup studio & luxury salon by Nikita Liby. HD & airbrush from ₹27,500.",
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
            html.nix-first-visit { background: #3D1520; }
            html.nix-first-visit::before {
              content: '';
              position: fixed;
              inset: 0;
              background: #3D1520;
              z-index: 9998;
            }
            html.nix-first-visit #nix-app-shell { visibility: hidden; }
            html.nix-has-loader::before { display: none; }
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!sessionStorage.getItem('nix-loaded')){document.documentElement.classList.add('nix-first-visit')}}catch(e){}`,
          }}
        />
        
        <link rel="alternate" type="text/plain" href="https://nixtudio.in/llms.txt" title="LLMs.txt" />
        <link
          rel="preload"
          as="image"
          href="/images/premium-bridal-makeup-studio-pala-kerala-hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preconnect to Google domains for Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        <JsonLd />
      </head>
      <body id="nix-body" suppressHydrationWarning className="min-h-screen antialiased overflow-x-hidden" style={{ background: "#FDE8E8", color: "#3D1520" }}>
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
