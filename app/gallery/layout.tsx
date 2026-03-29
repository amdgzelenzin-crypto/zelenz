import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — NIX Studio Bridal Makeup Pala',
  description: 'Explore the NIX Studio gallery featuring our best bridal transformations, HD makeup, and airbrush bridal looks in Pala, Kerala.',
  alternates: {
    canonical: 'https://nixtudio.in/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
