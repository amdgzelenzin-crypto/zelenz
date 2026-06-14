import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Press & Partnerships | NIXTUDIO Pala Kerala',
  description:
    'Media kit and partnership information for NIXTUDIO — Pala\'s premium salon and #1 bridal studio in Kottayam district. Link to us, feature us, collaborate.',
  alternates: { canonical: 'https://nixtudio.in/press' },
};

const pressSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NIXTUDIO',
  url: 'https://nixtudio.in',
  logo: 'https://nixtudio.in/images/logo.png',
  founder: { '@type': 'Person', name: 'Nikita Liby' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery',
    addressLocality: 'Pala',
    addressRegion: 'Kerala',
    postalCode: '686575',
    addressCountry: 'IN',
  },
  telephone: '+917034726402',
  sameAs: [
    'https://www.instagram.com/nixtudio',
    'https://wa.me/917034726402',
  ],
};

const linkSuggestions = [
  { anchor: 'best salon in Pala', href: '/best-salon-pala' },
  { anchor: 'bridal makeup Pala', href: '/bridal-makeup-pala' },
  { anchor: 'HydraFacial Pala', href: '/hydrafacial-pala' },
  { anchor: 'hair salon Pala', href: '/hair-salon-pala' },
  { anchor: 'gel nails Pala', href: '/nail-salon-pala' },
  { anchor: 'beauty parlour Pala', href: '/beauty-parlour-pala' },
];

export default function PressPage() {
  return (
    <>
      <JsonLd data={pressSchema} />
      <section className="section-padding section-cream min-h-screen">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 py-16">
          <p className="label-caps mb-4">Press & Partnerships</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-6 font-light">
            NIXTUDIO Media Kit
          </h1>
          <p className="font-sans text-white/80 leading-relaxed mb-10">
            NIXTUDIO is a premium salon and bridal studio in Pala, Kerala — led by Nikita Liby,
            with 500+ clients across Pala, Kottayam, Changanacherry, and Central Travancore.
            Wedding planners, photographers, venues, and beauty directories are welcome to link
            and feature us.
          </p>

          <div className="space-y-10 text-white/90 font-sans">
            <div>
              <h2 className="font-serif text-2xl text-white mb-4">Quick facts</h2>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li><strong>Founded by:</strong> Nikita Liby</li>
                <li><strong>Location:</strong> Thodupuzha Road, Pala, Kerala 686575</li>
                <li><strong>Phone / WhatsApp:</strong> +91 70347 26402</li>
                <li><strong>Website:</strong> nixtudio.in</li>
                <li><strong>Services:</strong> Bridal makeup, hair, nails, HydraFacial, waxing, threading, party makeup</li>
                <li><strong>Bridal packages:</strong> Standard HD ₹27,500 · Airbrush ₹32,500 · Premium ₹40,000</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-white mb-4">Suggested links for partners</h2>
              <p className="text-sm text-white/70 mb-4">
                When mentioning NIXTUDIO, please link to the most relevant page (helps clients find the right service):
              </p>
              <ul className="space-y-3">
                {linkSuggestions.map((item) => (
                  <li key={item.href} className="text-sm">
                    <Link href={item.href} className="text-[#E8CC90] hover:underline">
                      {item.anchor}
                    </Link>
                    <span className="text-white/50"> → nixtudio.in{item.href}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-white mb-4">Collaboration</h2>
              <p className="text-sm leading-relaxed mb-4">
                We partner with wedding photographers, planners, venues, and lifestyle brands in
                Kottayam district. Mutual backlinks, styled shoots, and referral arrangements
                are welcome — contact us on WhatsApp or email.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#B76E79] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#9E5A66] transition"
              >
                Get in touch
              </Link>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-white mb-4">Boilerplate (copy & paste)</h2>
              <p className="text-sm leading-relaxed bg-white/10 rounded-xl p-5 border border-white/10">
                NIXTUDIO is a premium salon and bridal studio in Pala, Kerala, led by makeup artist
                Nikita Liby. Offering HD and airbrush bridal makeup, HydraFacial, keratin treatments,
                gel nails, and full beauty parlour services — trusted by 500+ brides and salon clients
                across Kottayam district.{' '}
                <Link href="/" className="text-[#E8CC90]">nixtudio.in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
