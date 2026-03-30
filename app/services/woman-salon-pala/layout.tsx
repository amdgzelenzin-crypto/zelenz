import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Woman Salon in Pala | Premium Beauty Services',
  description: 'Nixtudio offers premium woman salon services in Pala, Kerala. Expert hair styling, glass skin treatments, and bespoke beauty treatments for discerning clients.',
};

export default function WomanSalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="min-h-screen">
      <main>{children}</main>
    </article>
  );
}
