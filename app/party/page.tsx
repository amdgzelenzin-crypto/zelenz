"use client";

import Link from "next/link";
import Image from "next/image";
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
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20" style={{ background: "#FFCDD4" }}>
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
              <div className="w-full aspect-[4/3] relative overflow-hidden skeleton">
                <Image
                  src="/images/party-makeup.jpg"
                  alt="Party guest makeup by NIXTUDIO team, Pala Kerala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── IMPORTANT DISCLAIMER ──────── */}
      <section className="section-padding" style={{ background: "#FFF5F7" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 max-w-3xl">
          <FadeUp>
            <div style={{ borderLeft: "3px solid #C4903A", paddingLeft: "24px" }}>
              <h2 className="font-serif font-light text-2xl lg:text-3xl mb-6" style={{ color: "#3D1520" }}>
                A note before you book.
              </h2>
              <div className="space-y-4 font-sans" style={{ color: "#5C2D3A" }}>
                <p>Party makeup and bridal makeup are fundamentally different services. If your event is an engagement, wedding, or wedding reception &mdash; please visit our Bridal page. Party makeup is not offered as a substitute for bridal work, regardless of guest count.</p>
                <p>Party packages are available for: wedding-eve functions, Haldi, Sangeet, birthday celebrations, professional events, and guest/family members.</p>
              </div>
              <Link href="/bridal" className="inline-flex items-center gap-2 text-sm font-sans mt-6 transition-colors duration-300" style={{ color: "#C4903A" }}>
                Booking a bridal event? →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── PACKAGES ──────── */}
      <section className="section-padding section-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="label-caps mb-12">Party Makeup Packages</p></FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl" staggerDelay={0.12}>
            {packages.map((pkg, index) => (
              <StaggerItem key={pkg.title}>
                <div className="premium-pricing-card group">
                  {/* Premium shimmer overlay */}
                  <div className="premium-shimmer" />
                  
                  {/* Gradient border effect */}
                  <div className="premium-border" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <p className="label-caps mb-3 transition-colors duration-300 group-hover:text-[#C4903A]" style={{ color: "#A86070" }}>
                      {pkg.title}
                    </p>
                    <p className="font-sans text-sm mb-5 transition-opacity duration-300 group-hover:opacity-80" style={{ color: "#5C2D3A", opacity: 0.7 }}>
                      {pkg.desc}
                    </p>
                    <span className="price-medium block transition-transform duration-300 group-hover:scale-105">
                      <span className="price-rupee">₹</span>{pkg.price.replace("₹","")}
                    </span>
                    <div className="premium-divider" />
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="premium-glow" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.4}>
            <div className="mt-8 max-w-4xl space-y-1">
              <p className="text-sm font-sans" style={{ color: "#A86070" }}>All prices inclusive of 5% GST.</p>
              <p className="text-sm font-sans" style={{ color: "#A86070" }}>Combo packages offer a more cost-effective option than booking makeup and hair separately.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── INDIVIDUAL PRICING ──────── */}
      <section className="section-padding" style={{ background: "#FFE4E8" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp><p className="label-caps mb-10">Individual Pricing</p></FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              {individualServices.map((s) => (
                <div key={s.name} className="service-row">
                  <span className="service-row-name">{s.name}</span>
                  <span className="service-row-price">{s.price}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs font-sans mt-6 max-w-2xl" style={{ color: "rgba(168,96,112,0.6)" }}>
              Advanced eye makeup (e.g. Smokey) is not included in any package. Flowers for hair not provided. Hair accessories available at extra cost.
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
      <section className="section-padding section-gradient-deep">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="font-sans text-sm mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              NIXTUDIO is a studio-only experience. We are based in Pala and do not offer home or venue visits.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20party%20makeup."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full text-[11px] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-300"
                style={{ background: "#25D366", color: "#FFFFFF" }}
                id="party-whatsapp-btn"
              >
                WhatsApp to Book
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans border-b pb-1 transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.80)", borderColor: "rgba(255,255,255,0.40)" }}
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
