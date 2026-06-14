import type { Metadata } from 'next';
import LegalPage from '@/components/seo/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | NIXTUDIO Pala Kerala',
  description:
    'Privacy policy for NIXTUDIO by Nikita Liby — how we collect, use, and protect your information when you book salon, bridal makeup, or beauty services in Pala & Kottayam.',
  alternates: { canonical: 'https://nixtudio.in/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="2026-06-15">
      <p>
        NIXTUDIO by Nikita Liby (&quot;we&quot;, &quot;us&quot;) operates nixtudio.in and our salon at Thodupuzha Road,
        Pala, Kerala. This policy explains how we handle information when you enquire, book, or visit our studio.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Information we collect
      </h2>
      <p>
        When you contact us via WhatsApp, phone, email, or our website forms, we may collect your name, phone number,
        email address, appointment or event date, service preferences, and any details you choose to share about
        your skin, hair, or event.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        How we use it
      </h2>
      <p>
        We use your information solely to respond to enquiries, confirm bookings, provide salon, bridal makeup, and beauty services,
        send appointment reminders, and improve client experience. We do not sell your personal data.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Analytics &amp; cookies
      </h2>
      <p>
        Our website uses Google Analytics to understand traffic patterns. These tools may use cookies. You can control
        cookies through your browser settings.
      </p>
      <h2
        className="pt-2 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        Contact
      </h2>
      <p>
        For privacy questions, contact us at +91 70347 26402 or through our{' '}
        <a href="/contact" className="underline decoration-[#B76E79]/50">
          contact page
        </a>
        .
      </p>
    </LegalPage>
  );
}
