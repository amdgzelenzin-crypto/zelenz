import Link from 'next/link';

/**
 * Server-rendered crawlable copy for the homepage.
 * Ensures search engines and LLM crawlers receive H1/H2 hierarchy even without JS.
 */
export default function HomePageCrawlContent() {
  return (
    <section
      aria-label="About NIXTUDIO salon and bridal makeup in Pala and Kottayam"
      className="mx-auto max-w-3xl px-6 py-16 text-center"
      style={{ background: '#FFF9F5' }}
    >
      <h2
        className="mb-4 text-3xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
      >
        #1 Salon &amp; Bridal Makeup in Pala &amp; Kottayam
      </h2>
      <p
        className="mb-6 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
      >
        NIXTUDIO by Nikita Liby is the top-rated premium salon and bridal makeup studio in Pala,
        Kerala — trusted across Kottayam district for HD and airbrush bridal makeup, hair styling,
        gel nails, facials, waxing, threading, and party makeup. Bridal packages from ₹27,500.
        Studio on Thodupuzha Road, Pala; home bridal service across Kottayam town, Ettumanoor,
        Changanacherry, Vaikom, and Kanjirappally.
      </p>
      <h3
        className="mb-3 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#B76E79' }}
      >
        Services
      </h3>
      <p
        className="mb-8 text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
      >
        Bridal makeup · Party makeup · Hair cuts &amp; colour · Keratin &amp; hair botox · Gel nails
        · Facials &amp; skin prep · Waxing &amp; threading
      </p>
      <nav
        className="flex flex-wrap justify-center gap-4 text-sm"
        style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        aria-label="Key service pages"
      >
        <Link href="/best-salon-pala" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Best Salon Pala
        </Link>
        <Link href="/best-salon-kottayam" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Best Salon Kottayam
        </Link>
        <Link href="/best-bridal-makeup-pala" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Bridal Makeup Pala
        </Link>
        <Link href="/best-bridal-makeup-kottayam" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Bridal Makeup Kottayam
        </Link>
        <Link href="/bridal" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Bridal Packages
        </Link>
        <Link href="/contact" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
          Book Appointment
        </Link>
      </nav>
    </section>
  );
}
