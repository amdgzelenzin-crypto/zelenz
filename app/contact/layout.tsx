import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — NIX Studio Bridal Makeup Pala',
  description: 'Book your bridal makeup session at NIX Studio in Pala, Kottayam. Get in touch for enquiries, packages, and wedding date availability.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
