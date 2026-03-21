import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Bridal Makeup in Pala | NIXTUDIO by Nikita Liby',
  description: 'Book bridal or party makeup at NIXTUDIO in Pala, Kerala. WhatsApp +91 70347 26407 or fill our booking form. Studio-only — no home visits.',
  openGraph: {
    title: 'Book Bridal Makeup in Pala | NIXTUDIO by Nikita Liby',
    description: 'Book bridal or party makeup at NIXTUDIO in Pala, Kerala. WhatsApp +91 70347 26407 or fill our booking form. Studio-only — no home visits.',
    url: "https://nixtudio.com/contact",
    images: [{ url: "/og/contact-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Book Bridal Makeup in Pala | NIXTUDIO by Nikita Liby',
    description: 'Book bridal or party makeup at NIXTUDIO in Pala, Kerala. WhatsApp +91 70347 26407 or fill our booking form. Studio-only — no home visits.',
    images: ["/og/contact-og.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
