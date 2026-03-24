import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — NIX Studio Bridal Makeup Pala',
  description: 'Learn about Nikita and NIX Studio, the leading bridal makeup studio in Pala, Kottayam. Our mission is to provide premium, flawless bridal transformations.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
