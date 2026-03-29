import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Nikita Liby — Lead Bridal Makeup Artist, Pala Kerala | NIXTUDIO',
  description:
    'Meet Nikita Liby, founder and lead bridal makeup artist at NIXTUDIO in Pala, Kottayam, Kerala. 6+ years of exclusive bridal artistry — HD & Airbrush techniques, bleach-free hair colouring, and a luxury studio experience. Every bride is personally attended by Nikita.',
  openGraph: {
    title: 'About Nikita Liby — Lead Bridal Makeup Artist, Pala Kerala | NIXTUDIO',
    description:
      'Meet Nikita Liby — the artist behind every NIXTUDIO bridal look. Exclusive, one-artist bridal service in Pala, Kottayam, Kerala.',
    url: 'https://www.nixtudio.in/about',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://www.nixtudio.in/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
