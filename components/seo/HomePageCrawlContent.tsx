import Link from 'next/link';

/**
 * Server-rendered crawlable copy for the homepage.
 * Ensures search engines and LLM crawlers receive H1/H2 hierarchy even without JS.
 */
export default function HomePageCrawlContent() {
  return (
    <section
      aria-label="About NIXTUDIO premium bridal makeup studio and luxury salon in Pala and Kottayam"
      className="mx-auto max-w-3xl px-6 py-16 text-center"
      style={{ background: '#FFF9F5' }}
    >
      <h2
        className="mb-4 text-3xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        #1 Premium Bridal Makeup Studio &amp; Luxury Salon — Pala &amp; Kottayam
      </h2>
      <p
        className="mb-5 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
      >
        NIXTUDIO by Nikita Liby is a top-rated premium bridal makeup studio and luxury salon on
        Thodupuzha Road, Pala, serving clients across Kottayam district — from Kottayam town and
        Ettumanoor to Changanacherry, Vaikom, and Kanjirappally. The studio is known for
        humidity-resistant HD and airbrush bridal makeup, precision hair styling, gel nails,
        facials, waxing, threading, and elegant party makeup for guests and family.
      </p>
      <p
        className="mb-5 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
      >
        Bridal packages begin at ₹27,500 for Standard HD, with airbrush options at ₹32,500 and premium
        signature finishes at ₹40,000. Every bridal booking is handled personally by Nikita Liby, with a
        trained team for multi-event days. The studio welcomes Christian, Hindu, and Muslim brides, and
        offers on-location bridal service for venues across central Kerala.
      </p>
      <p
        className="mb-8 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
      >
        Beyond bridal makeup, NIXTUDIO is a full-service luxury salon: creative cuts and colour, keratin
        and hair botox, HydraFacial and skin therapies, the nail lounge, and curated spa rituals — all in
        a calm, editorial studio environment designed for discerning clients in Pala and Kottayam.
      </p>
      <p
        className="mb-8 text-xs leading-relaxed"
        style={{ fontFamily: 'var(--font-sans), sans-serif', color: '#8A7878' }}
      >
        Salon and beauty services are cosmetic in nature. Individual results vary. Please share allergies or
        sensitivities when booking.
      </p>
      <h3
        className="mb-3 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#B76E79' }}
      >
        Explore
      </h3>
      <nav
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
        style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        aria-label="Key service pages"
      >
        <Link href="/best-salon-pala" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Best salon services in Pala
        </Link>
        <Link href="/best-salon-kottayam" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Salon for Kottayam district
        </Link>
        <Link href="/bridal" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Bridal packages &amp; pricing
        </Link>
        <Link href="/contact" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Book an appointment
        </Link>
      </nav>
    </section>
  );
}
