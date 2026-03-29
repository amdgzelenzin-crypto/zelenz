import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Party Makeup — NIX Studio Bridal Makeup Pala',
  description: 'Flawless party makeup and guest styling services at NIX Studio, Pala. Perfect for weddings, receptions, and special occasions.',
  alternates: {
    canonical: 'https://www.nixtudio.in/party',
  },
}

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
