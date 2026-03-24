import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — NIX Studio Bridal Makeup Pala',
  description: 'Explore NIX Studio\'s full range of bridal services including HD makeup, airbrush, pre-bridal packages, and traditional Kerala bridal looks.',
}

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
