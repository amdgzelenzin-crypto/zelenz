"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const brands = [
  "GUCCI", "CHANEL", "DIOR", "CHARLOTTE TILBURY",
  "GIVENCHY", "NARS", "FENTY BEAUTY", "PAT McGRATH",
  "URBAN DECAY", "MAC", "LAURA MERCIER", "HUDA BEAUTY",
];

const testimonials = [
  {
    quote: "She understood exactly what I wanted before I could even explain it. The result was effortless — I looked like myself, only luminous.",
    name: "Aishwarya",
    detail: "Bride, 2024",
  },
  {
    quote: "From the pre-bridal guide to the final look, every step felt intentional and unhurried. I never once felt like just another booking.",
    name: "Meera",
    detail: "Bride, 2024",
  },
  {
    quote: "The attention to detail was extraordinary. My skin had never looked like that in photographs before.",
    name: "Devika",
    detail: "Bride, 2023",
  },
];

export default function Home() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pt-24 lg:pt-0">
          {/* Left — Text */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10 order-2 lg:order-1">
            <FadeUp>
              <p className="label-caps mb-5">Premium Makeup Studio</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif font-light text-espresso leading-[1.08] mb-6">
                Every face.<br />
                Carefully considered.
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-lg text-espresso/70 mb-8 max-w-md">
                Bridal makeup done exclusively by Nikita.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/bridal"
                className="inline-flex items-center gap-2 text-sm font-sans text-espresso border-b border-espresso/40 pb-1 hover:border-espresso transition-colors duration-300 w-fit"
              >
                Explore Bridal Work
                <span className="text-xs">→</span>
              </Link>
            </FadeUp>
          </div>

          {/* Right — Image Placeholder */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <FadeUp delay={0.15}>
              <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] bg-pink flex items-center justify-center lg:ml-auto lg:-mr-12 xl:-mr-20">
                <span className="text-white/80 font-sans text-sm tracking-wide">
                  REPLACE: hero-bridal.jpg
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── THREE-PATH NAVIGATION ──────── */}
      <section>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3" staggerDelay={0.15}>
          {[
            {
              title: "Bridal",
              sub: "For your engagement, wedding, and reception",
              link: "/bridal",
              linkText: "The Bridal Edit →",
            },
            {
              title: "Party & Guests",
              sub: "For every celebration in between",
              link: "/party",
              linkText: "Party Makeup →",
            },
            {
              title: "Salon & Spa",
              sub: "Hair, nails, skincare, and more",
              link: "/salon",
              linkText: "Salon Services →",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <Link href={item.link} className="group block relative h-[40vh] min-h-[300px] overflow-hidden">
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-[#C4B0A8] group-hover:brightness-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-espresso/40" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                  <h2 className="font-serif text-3xl lg:text-4xl text-white/95 mb-2">
                    {item.title}
                  </h2>
                  <p className="font-sans text-sm text-white/70 mb-4">
                    {item.sub}
                  </p>
                  <span className="font-sans text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.linkText}
                  </span>

                  {/* Pink hover line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ──────── NIKITA SIGNAL ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <FadeUp className="lg:col-span-5">
              <div className="w-full aspect-[3/4] bg-[#C4B0A8] flex items-center justify-center">
                <span className="text-white/80 font-sans text-sm tracking-wide">
                  REPLACE: nikita-portrait.jpg
                </span>
              </div>
            </FadeUp>

            {/* Text */}
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeUp>
                <p className="label-caps mb-4">The Artist</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif font-light text-espresso mb-6">
                  Not delegated. Not supervised. Nikita.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="font-sans text-espresso/70 max-w-lg">
                  Every bridal booking — engagement, wedding, reception — is handled
                  exclusively by Nikita from first consultation to final look. This is
                  not a team service. This is a personal commitment.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── BRAND ASSOCIATION STRIP ──────── */}
      <section className="section-padding bg-pink-15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps text-center mb-10">Products Used</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto">
              {brands.map((brand, i) => (
                <span
                  key={brand}
                  className="text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-espresso/60"
                >
                  {brand}
                  {i < brands.length - 1 && (
                    <span className="ml-6 text-taupe/30">·</span>
                  )}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── SOCIAL PROOF ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <StaggerContainer className="space-y-16 lg:space-y-20 max-w-3xl" staggerDelay={0.2}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <blockquote>
                  <p className="font-serif italic text-2xl lg:text-3xl font-light text-espresso/85 leading-snug mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <cite className="not-italic font-sans text-sm text-taupe">
                    — {t.name}, {t.detail}
                  </cite>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── FOOTER CTA ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
          <FadeUp>
            <h2 className="font-serif font-light text-espresso text-3xl lg:text-4xl mb-6">
              Your date may already be booked.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso/90 transition-colors duration-300"
              >
                Check Bridal Availability
              </Link>
              <a
                href="https://wa.me/917034726407?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-espresso text-espresso text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso hover:text-parchment transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
