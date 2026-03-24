import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bridal — NIX Studio Bridal Makeup Pala',
  description: 'Premium bridal makeup services in Pala, Kottayam. We specialize in HD, airbrush, and traditional bridal looks tailored for your special day.',
}

export default function BridalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
