import Link from 'next/link';

/**
 * Server-rendered crawlable copy for the homepage.
 * Ensures search engines and LLM crawlers receive H1/H2 hierarchy even without JS.
 */
export default function HomePageCrawlContent() {
  return (
    <section
      aria-label="About Zelenz Unisex Saloon premium beauty salon in Pala and Kottayam"
      className="mx-auto max-w-3xl px-6 py-16 text-center animate-fade-in"
      style={{ background: '#000000' }}
    >
      <h2
        className="mb-4 text-3xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#000000' }}
      >
        #1 Premium Unisex Grooming &amp; Bridal Studio — Pala &amp; Kottayam
      </h2>
      <p
        className="mb-5 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#e9ce98' }}
      >
        Zelenz Unisex Saloon is the district's leading luxury grooming destination, offering dual locations in Pala (near Civil Station) and Kottayam (Kanjikuzhy). We specialize in creative hair cuts and coloring, ammonia-free root touch-ups, premium hair botox, luxury hair spa treatments, advanced skin care cleanups, and organic facials.
      </p>
      <p
        className="mb-5 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#e9ce98' }}
      >
        Our nail studio offers solid gel polishes, dip powders, chrome nails, gel/acrylic extensions, and custom 3D nail art. We also cater to traditional and modern bridal makeup, groom makeup, kids styling, and custom beard grooming. All treatments are performed under medical-grade sterilization conditions in an elegant, cozy environment.
      </p>
      <p
        className="mb-8 text-base leading-relaxed"
        style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#e9ce98' }}
      >
        Zelenz brings international luxury brands and trained hair and makeup experts to central Kerala, creating a premium sanctuary for beauty and self-care.
      </p>
      <p
        className="mb-8 text-xs leading-relaxed"
        style={{ fontFamily: 'var(--font-sans), sans-serif', color: '#323232' }}
      >
        Individual results vary based on hair/skin profile. Please share details of any sensitivities with our coordinator during booking.
      </p>
      <h3
        className="mb-3 text-xl font-light italic"
        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#c49c4d' }}
      >
        Explore Sections
      </h3>
      <nav
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
        style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        aria-label="Key sections"
      >
        <Link href="#home" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Home
        </Link>
        <Link href="#our-story" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Our Story
        </Link>
        <Link href="#services" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Services Catalog
        </Link>
        <Link href="#why-choose" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Why Choose Zelenz
        </Link>
        <Link href="#gallery" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Photo &amp; Video Gallery
        </Link>
        <Link href="#contact" className="underline decoration-[#c49c4d]/50 hover:decoration-[#c49c4d]">
          Book Appointment
        </Link>
      </nav>
    </section>
  );
}
