import type { Metadata } from 'next';
import LegalPage from '@/components/seo/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | NIXTUDIO Pala Kerala',
  description:
    'Terms of service for booking salon, bridal makeup, and beauty services at NIXTUDIO by Nikita Liby in Pala & Kottayam, Kerala.',
  alternates: { canonical: 'https://nixtudio.in/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="2026-06-15">
      <p>
        By using nixtudio.in or booking services with NIXTUDIO by Nikita Liby, you agree to these terms. Please read
        them before confirming an appointment or package.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Services &amp; bookings
      </h2>
      <p>
        Services, pricing, and package inclusions are described on our website and confirmed at booking. Dates are
        secured with advance payment. Cancellations and rescheduling are handled per the agreement shared at
        confirmation.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Health &amp; beauty disclaimer
      </h2>
      <p>
        Salon, skin, and bridal beauty services are cosmetic in nature. Results vary by individual skin type, allergies, and
        environmental conditions. Please disclose sensitivities, pregnancy, or medical conditions before your
        appointment. We are not a medical provider.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Website content
      </h2>
      <p>
        Text, images, and pricing on this site are for general information. We reserve the right to update services
        and rates. Portfolio images represent real client work; individual results may differ.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Contact
      </h2>
      <p>
        For questions about these terms, reach us at +91 70347 26402 or via our{' '}
        <a href="/contact" className="underline decoration-[#B76E79]/50">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
