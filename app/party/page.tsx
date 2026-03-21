"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const packages = [
  {
    title: "Package 1",
    desc: "Makeup & Hair — Basic to Intermediate",
    price: "₹5,500",
  },
  {
    title: "Package 2",
    desc: "Makeup & Hair — Advanced",
    price: "₹7,500",
  },
  {
    title: "Kids Package",
    desc: "Makeup & Hair (under 10)",
    price: "₹3,500",
  },
];

const individualServices = [
  { name: "Makeup Only", price: "₹4,500" },
  { name: "Kids Makeup Only (under 10)", price: "₹2,500" },
  { name: "Hair Basic–Intermediate", price: "₹1,500–₹2,500" },
  { name: "Hair Advanced", price: "₹3,500–₹4,500" },
  { name: "Normal Saree Draping", price: "₹1,000" },
  { name: "Iron Draped / Pre-pleated Saree", price: "₹1,600" },
  { name: "Half Saree Draping", price: "₹750" },
  { name: "Hair Extensions", price: "₹2,000" },
  { name: "Lashes / Lens", price: "₹500 per pair" },
  { name: "Simple Eye Makeup Only", price: "₹1,000" },
  { name: "Advanced Eye Makeup (e.g. Smokey)", price: "₹1,500" },
];

export default function PartyPage() {
  return (
    <>
      {/* ──────── SIMPLE HERO ──────── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <h1 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-4">
                  Party & Guest Makeup
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-lg text-espresso/60 max-w-md">
                  For every celebration that deserves to be remembered.
                </p>
              </FadeUp>
            </div>
            <FadeUp className="lg:col-span-5 lg:col-start-8" delay={0.15}>
              <div className="w-full aspect-[4/3] bg-pink flex items-center justify-center">
                <span className="text-white/80 font-sans text-sm tracking-wide">
                  REPLACE: party-makeup.jpg
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── IMPORTANT DISCLAIMER ──────── */}
      <section className="section-padding bg-pink-15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 max-w-3xl">
          <FadeUp>
            <h2 className="font-serif font-light text-espresso text-2xl lg:text-3xl mb-6">
              A note before you book.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-4 font-sans text-espresso/70">
              <p>
                Party makeup and bridal makeup are fundamentally different services.
                If your event is an engagement, wedding, or wedding reception — please
                visit our Bridal page. Party makeup is not offered as a substitute for
                bridal work, regardless of guest count.
              </p>
              <p>
                Party packages are available for: wedding-eve functions, Haldi, Sangeet,
                birthday celebrations, professional events, and guest/family members.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link
              href="/bridal"
              className="inline-flex items-center gap-2 text-sm font-sans text-espresso border-b border-espresso/40 pb-1 hover:border-espresso transition-colors duration-300 mt-6"
            >
              Booking a bridal event? →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ──────── PACKAGES ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-12">Party Makeup Packages</p>
          </FadeUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
            staggerDelay={0.12}
          >
            {packages.map((pkg) => (
              <StaggerItem key={pkg.title}>
                <div className="p-6 lg:p-8 border border-taupe/15">
                  <p className="label-caps text-taupe mb-3">{pkg.title}</p>
                  <p className="font-sans text-sm text-espresso/60 mb-5">
                    {pkg.desc}
                  </p>
                  <span className="font-serif text-3xl lg:text-4xl font-light text-espresso block">
                    {pkg.price}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.4}>
            <div className="mt-8 max-w-4xl space-y-1">
              <p className="text-sm font-sans text-taupe">
                All prices inclusive of 5% GST.
              </p>
              <p className="text-sm font-sans text-taupe">
                Combo packages offer a more cost-effective option than booking makeup and hair separately.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── INDIVIDUAL PRICING ──────── */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-10">Individual Pricing</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl space-y-3">
              {individualServices.map((s) => (
                <div
                  key={s.name}
                  className="flex items-baseline justify-between gap-4 py-2 border-b border-taupe/8"
                >
                  <span className="font-sans text-sm text-espresso/70">
                    {s.name}
                  </span>
                  <span className="font-sans text-sm font-medium text-espresso shrink-0">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs font-sans text-taupe/60 mt-6 max-w-2xl">
              Advanced eye makeup (e.g. Smokey) is not included in any package.
              Flowers for hair not provided. Hair accessories available at extra cost.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── WHAT'S NOT INCLUDED ──────── */}
      <section className="py-10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="label-caps mb-4">Please Note</p>
              <ul className="space-y-2 text-sm font-sans text-espresso/60">
                <li>Lashes, lens, and hair extensions are not included in packages — available as add-ons.</li>
                <li>Flowers for hair are not provided.</li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── FAST BOOKING CTA ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="font-sans text-sm text-taupe mb-6 max-w-lg">
              NIXTUDIO is a studio-only experience. We are based in Pala and do not offer home or venue visits. All services are provided at the salon.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/917034726407?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20party%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20%0ANumber%20of%20people%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-3.5 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso/90 transition-colors duration-300"
                id="party-whatsapp-btn"
              >
                WhatsApp to Book
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans text-espresso border-b border-espresso/40 pb-1 hover:border-espresso transition-colors duration-300"
              >
                Prefer a form? →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
