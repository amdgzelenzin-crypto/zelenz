"use client";

import { FadeUp } from "@/components/ui/AnimationWrapper";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────────
   STUDIO GALLERY DATA — unique alts & captions
   ────────────────────────────────────── */
const studioImages = [
  {
    file: "studio-001.jpg",
    alt: "Nix-Studio-Pala-Private-Bridal-Suite-Interior-Kottayam — Exclusive dressing room for brides",
    caption: "Private Bridal Suite",
  },
  {
    file: "studio-002.jpg",
    alt: "Nix-Studio-Pala-Professional-Makeup-Station-Kottayam — Ring-light setup for HD bridal application",
    caption: "Professional Makeup Station",
  },
  {
    file: "studio-003.png",
    alt: "Nix-Studio-Pala-Luxury-Hair-Styling-Chair-Kottayam — Bleach-free hair colouring station",
    caption: "Hair Styling & Colour Station",
  },
  {
    file: "studio-004.png",
    alt: "Nix-Studio-Pala-Gel-Nail-Art-Lounge-Kottayam — Dedicated nail extensions and nail art space",
    caption: "Gel Nail Art Lounge",
  },
  {
    file: "studio-005.jpg",
    alt: "Nix-Studio-Pala-Client-Lounge-Waiting-Area-Kottayam — Complimentary refreshments for guests",
    caption: "Client Lounge & Refreshment Area",
  },
  {
    file: "studio-006.jpg",
    alt: "Nix-Studio-Pala-Sterilized-Equipment-Display-Kottayam — Single-use tools and hygiene-first setup",
    caption: "Sterilized Equipment Station",
  },
];

/* ──────────────────────────────────────
   FAQ DATA
   ────────────────────────────────────── */
const faqs = [
  {
    q: "Does Nikita do home visits or outstation bridal makeup?",
    a: "All bridal services are conducted exclusively at the NIXTUDIO studio in Pala. This ensures access to professional-grade lighting, sterilized tools, and the full product inventory for a flawless result.",
  },
  {
    q: "How many years of experience does Nikita have?",
    a: "Nikita has 6+ years of professional bridal and beauty experience, having personally styled over 500 brides across Pala, Kottayam, Changanacherry, and greater Kerala.",
  },
  {
    q: "Does NIXTUDIO offer bridal trials?",
    a: "Yes. We strongly recommend a trial session 2–4 weeks before your wedding date. This allows us to perfect your look, test products on your skin, and ensure everything photographs beautifully.",
  },
  {
    q: "What brands and products does Nikita use?",
    a: "We use a curated selection of premium, dermatologist-tested brands including MAC, Bobbi Brown, Charlotte Tilbury, and Kryolan Airbrush systems — chosen specifically for Kerala's humid climate.",
  },
  {
    q: "Can I book Nikita for engagement, reception, and wedding day?",
    a: "Absolutely. Most brides book the complete package — engagement, wedding, and reception — to maintain a consistent aesthetic across all events. Package pricing starts at ₹14,500+.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ──────── PERSON SCHEMA (About-page specific) ──────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nikita Liby",
            jobTitle: "Lead Bridal Makeup Artist & Founder",
            url: "https://nixtudio.in/about",
            image: "https://nixtudio.in/images/nikita-portrait.jpg",
            description:
              "Nikita Liby is the founder and lead bridal makeup artist at NIXTUDIO in Pala, Kerala. With 6+ years of experience, she personally handles every bridal appointment — from engagement to reception.",
            affiliation: {
              "@type": "BeautySalon",
              name: "NIXTUDIO",
              url: "https://nixtudio.in",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pala",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/nixtudio/",
            ],
            knowsAbout: [
              "HD Bridal Makeup",
              "Airbrush Bridal Makeup",
              "Bleach-Free Hair Colouring",
              "Kerala Wedding Styling",
              "Christian Bridal Makeup",
            ],
          }),
        }}
      />

      {/* ──────── FAQ SCHEMA ──────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      {/* ──────── PORTRAIT SECTION ──────── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-0">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <FadeUp className="lg:col-span-5">
              <div className="w-full aspect-[3/4] relative overflow-hidden sticky top-28">
                <Image
                  src="/images/nikita-portrait.jpg"
                  alt="Nikita Liby, bridal makeup artist and founder of NIXTUDIO studio in Pala, Kerala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              {/* CTA — above the fold on mobile */}
              <div className="mt-6 lg:hidden">
                <Link href="/contact" className="btn-primary w-full flex items-center justify-center">
                  Check Your Date →
                </Link>
              </div>
            </FadeUp>

            {/* Text */}
            <div className="lg:col-span-6 lg:col-start-7 lg:py-20">
              <FadeUp>
                <h1 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-2">
                  Nikita Liby — Bridal Makeup Artist, Pala Kerala
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-sm text-taupe mb-4">
                  Founder & Lead Artist, NIXTUDIO · Pala, Kottayam, Kerala
                </p>
              </FadeUp>

              {/* CTA — desktop, right after title */}
              <FadeUp delay={0.12}>
                <div className="hidden lg:block mb-8">
                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    Check Bridal Availability →
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="font-sans text-espresso/70 max-w-lg mb-6">
                  Makeup, for Nikita, has never been about following a trend or
                  recreating a reference photo. It has always been about understanding
                  a face — its structure, its light, its character — and working
                  with it, not against it. Every bridal look created at NIXTUDIO in Pala
                  reflects this philosophy — a &lsquo;Manavatty&rsquo; elegance that
                  feels utterly natural yet unmistakably intentional.
                </p>
              </FadeUp>

              {/* ──────── CREDENTIALS & EXPERTISE (E-E-A-T) ──────── */}
              <FadeUp delay={0.18}>
                <div className="mt-8 mb-8 p-6 bg-[rgba(212,160,85,0.08)] rounded-2xl max-w-lg">
                  <h2 className="font-serif text-xl text-espresso mb-4">
                    Credentials & Expertise
                  </h2>
                  <ul className="space-y-3 font-sans text-sm text-espresso/70 list-disc list-inside">
                    <li><strong>6+ years</strong> of professional bridal and beauty experience in Pala, Kottayam, and Kerala</li>
                    <li><strong>500+ brides</strong> personally styled — engagement, wedding, and reception</li>
                    <li>Certified in <strong>HD and Airbrush bridal application</strong> techniques</li>
                    <li>Specialist in <strong>humidity-resistant makeup</strong> engineered for Kerala&apos;s tropical climate</li>
                    <li>Trained in <strong>bleach-free, ammonia-free hair colouring</strong> for safe, long-lasting results</li>
                    <li>Proficient with premium brands: <strong>MAC, Bobbi Brown, Charlotte Tilbury, Kryolan</strong></li>
                  </ul>
                </div>
              </FadeUp>

              {/* ──────── THE PRACTICE ──────── */}
              <FadeUp delay={0.2}>
                <div className="mt-12">
                  <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-[#B76E79] mb-6">The Practice</h2>
                  <div className="space-y-5 font-sans text-espresso/70 max-w-lg">
                    <p>
                      Every bridal client who books with NIXTUDIO in Pala is attended to
                      exclusively by Nikita — from the first consultation about the
                      look to the final inspection before the bride leaves the studio.
                      No delegation. No assistants finishing what she started. This is
                      a commitment that has never been compromised across
                      Pala, Kottayam, and Changanacherry.
                    </p>
                    <p>
                      Beyond bridal work, Nikita specializes in{" "}
                      <Link href="/services" className="text-[#B76E79] underline underline-offset-2 hover:text-espresso transition-colors">
                        bleach-free hair colouring
                      </Link>{" "}
                      — her signature balayage and highlighting techniques
                      are designed to protect hair integrity while achieving tones that
                      feel natural, not processed. This service is available at the{" "}
                      <Link href="/services" className="text-[#B76E79] underline underline-offset-2 hover:text-espresso transition-colors">
                        NIXTUDIO salon in Pala
                      </Link>.
                    </p>
                    <p className="italic text-espresso/80">
                      &ldquo;Simple refers to the look — soft, minimal, subtle. It does not
                      mean fewer products or skipped steps. Whether subtle or bold, the
                      time, skill, and care remain exactly the same.&rdquo;
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* ──────── STUDIO GALLERY STRIP ──────── */}
              <div className="mt-12">
                <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-[#B76E79] mb-6">The Studio — Pala, Kerala</h2>
                <div
                  className="flex gap-4 overflow-x-auto"
                  style={{
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    cursor: "grab",
                  }}
                >
                  {studioImages.map((img, i) => (
                    <div
                      key={i}
                      className="shrink-0 relative overflow-hidden"
                      style={{
                        scrollSnapAlign: "start",
                        width: "min(80vw, 500px)",
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          height: "clamp(280px, 35vw, 400px)",
                          border: "1px solid rgba(158,123,117,0.10)",
                        }}
                      >
                        <Image
                          src={`/images/studio/${img.file}`}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="80vw"
                          loading="lazy"
                        />
                      </div>
                      {/* Caption */}
                      <p className="font-sans text-xs text-taupe mt-2 text-center tracking-wide">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ──────── THE STUDIO (Text) ──────── */}
              <FadeUp delay={0.25}>
                <div className="mt-12">
                  <h2 className="font-sans text-xs tracking-[0.25em] uppercase text-[#B76E79] mb-6">The NIXTUDIO Experience</h2>
                  <div className="space-y-5 font-sans text-espresso/70 max-w-lg">
                    <p>
                      NIXTUDIO is a premium bridal makeup studio in Pala, Kottayam, built
                      around intention. Every tool is single-use or sterilized — a
                      hygiene-first approach that sets us apart as the most trusted
                      beauty studio in the Pala–Kottayam region. Every appointment is
                      scheduled with enough buffer to never feel rushed.
                    </p>
                    <p>
                      Complimentary tea, coffee, or juice on all services.
                      Complimentary food and drinks for services over two hours.
                      The experience matters as much as the result.
                    </p>
                    <p>
                      Walk-ins are welcome when availability allows, but{" "}
                      <Link href="/contact" className="text-[#B76E79] underline underline-offset-2 hover:text-espresso transition-colors">
                        scheduling in advance
                      </Link>{" "}
                      ensures we can give you our full attention.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── FAQ SECTION ──────── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#3D1520",
                marginBottom: "40px",
              }}
            >
              Frequently Asked <em>Questions</em>
            </h2>
          </FadeUp>
          <div className="max-w-3xl space-y-8">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="border-b border-[rgba(61,21,32,0.08)] pb-6">
                  <h3
                    className="font-sans text-base font-medium text-espresso mb-3"
                  >
                    {faq.q}
                  </h3>
                  <p className="font-sans text-sm text-espresso/65 leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── SIGNATURE CLOSE + CTA ──────── */}
      <section className="section-padding section-gradient-deep">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <p className="font-serif italic text-3xl lg:text-4xl font-light text-white/90 leading-snug mb-6">
                &ldquo;We make sure every bride radiates confidence and grace.&rdquo;
              </p>
              <p className="font-sans text-sm text-white/60 mb-10">
                Nikita Liby — Bridal Makeup Artist, Pala, Kerala
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                  style={{ minWidth: "220px", minHeight: "52px" }}
                >
                  Check Bridal Availability
                </Link>
                <Link
                  href="/bridal"
                  className="btn-outline-gold inline-flex items-center justify-center"
                  style={{ minWidth: "220px", minHeight: "52px" }}
                >
                  View Bridal Portfolio →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
