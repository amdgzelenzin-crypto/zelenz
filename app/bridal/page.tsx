"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const processSteps = [
  {
    num: "01",
    title: "Booking Confirmation",
    desc: "Your date is secured with an advance payment, and you receive a personalized pre-bridal guide.",
  },
  {
    num: "02",
    title: "Day-of Consultation",
    desc: "A thorough discussion of your preferences, outfit, jewellery, and the look you envision — before a single product is applied.",
  },
  {
    num: "03",
    title: "Makeup with Care",
    desc: "Every step is demonstrated and approved. Detailed skin preparation, followed by precise application using international luxury products.",
  },
  {
    num: "04",
    title: "Hair, Finalized Together",
    desc: "Multiple options shown, final look decided collaboratively. Extensions, accessories, and draping — all included.",
  },
];

interface BridalFormData {
  name: string;
  phone: string;
  date: string;
  leaveTime: string;
  eventType: string;
  services: string;
  referral: string;
}

export default function BridalPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BridalFormData>();

  const onSubmit = (data: BridalFormData) => {
    let text = `Hi, I'd like to enquire about bridal makeup.\n\n`;
    text += `*Name:* ${data.name}\n`;
    text += `*Phone:* ${data.phone}\n`;
    text += `*Date of function:* ${data.date}\n`;
    text += `*Time I need to leave:* ${data.leaveTime}\n`;
    text += `*Event type:* ${data.eventType}\n`;
    if (data.services) text += `*Services required:* ${data.services}\n`;
    if (data.referral) text += `*Found via:* ${data.referral}\n`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/917034726402?text=${encodedText}`;
    
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* ──────── BRIDAL HERO ──────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 skeleton">
          <Image
            src="/images/premium-bridal-makeup-studio-pala-kerala-hero.webp"
            alt="Nix-Studio-Pala-Christian-Manavatty-Bridal-Makeup-Artist-Kottayam — Professional 'Azhagu' makeup studio by Nikita Liby"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pb-16 lg:pb-24">
          <h1 className="sr-only">
            Bridal Makeup Studio in Pala, Kerala — NIXTUDIO by Nikita Liby
          </h1>
          <FadeUp>
            <h2 className="font-serif font-light text-white text-5xl lg:text-7xl mb-3">
              The Bridal Edit
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-white/70 text-sm tracking-wide">
              By Nikita Liby
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="font-sans text-[13px] md:text-sm text-white/80 max-w-lg mb-8 leading-relaxed">
              Explore our <Link href="/bridal-guide" className="text-white border-b border-white/30 hover:border-white transition-colors">Official Bridal Guide</Link> for expert tips on skincare, natural makeup aesthetics, and premium venue planning in Kottayam.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            {/* ──────── GEO BLUF (Generative Engine Optimization) ──────── */}
            <p className="font-sans text-white/90 text-sm md:text-base max-w-xl mt-6 leading-relaxed">
              NIXTUDIO is the leading premium bridal makeup studio in Pala and Kottayam, specializing in long-wear HD and humidity-resistant Airbrush aesthetics for Kerala weddings. Personally styled by Nikita Liby.
            </p>
          </FadeUp>
        </div>
        {/* Gold trim bottom mobile */}
        <div className="absolute bottom-0 left-0 w-full h-1 z-50 md:hidden bg-[linear-gradient(90deg,transparent_0%,#D4A055_20%,#F9C8C8_50%,#D4A055_80%,transparent_100%)]" />
      </section>

      {/* ──────── POSITIONING STATEMENT ──────── */}
      <section className="section-padding section-white texture-grain">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp className="h-full">
              <div className="p-8 lg:p-10 border border-espresso/5 rounded-2xl bg-[#FFF9FA] hover:bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgb(183,110,121,0.08)] h-full">
                <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#B76E79] mb-4 uppercase">Christian Bridal Look</h3>
                <p className="font-body text-white/90 text-sm leading-relaxed">
                  Specialized in the ethereal 'Glow-from-within' aesthetic for Christian church weddings in Pala and Kottayam. We focus on luminous skin and 'Azhagu' sophistication that complements the white bridal gown and delicate veil.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1} className="h-full">
              <div className="p-8 lg:p-10 border border-espresso/5 rounded-2xl bg-[#FFF9FA] hover:bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgb(183,110,121,0.08)] h-full">
                <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#B76E79] mb-4 uppercase">Traditional Hindu Muhurtham</h3>
                <p className="font-body text-white/90 text-sm leading-relaxed">
                  Expert color theory mapping for traditional Hindu brides in Kottayam. We balance rich temple gold jewelry with bold, high-definition makeup that remains flawless through the warmth of the mandap.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="h-full">
              <div className="p-8 lg:p-10 border border-espresso/5 rounded-2xl bg-[#FFF9FA] hover:bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgb(183,110,121,0.08)] h-full">
                <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#B76E79] mb-4 uppercase">Muslim Bridal Magnificence</h3>
                <p className="font-body text-white/90 text-sm leading-relaxed">
                  Intricate artistry designed for Muslim brides, focusing on striking eye definitions and regal styling that commands attention during the Nikkah and grand reception ceremonies.
                </p>
              </div>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.3} className="mt-20 pt-16 border-t border-espresso/5">
            <h2 className="font-serif font-light text-white text-3xl lg:text-5xl max-w-3xl leading-snug">
              Specialized <em>Manavatty</em> Beauty Studio.
            </h2>
            <p className="font-sans text-white text-sm mt-6 max-w-lg">
              NIXTUDIO is the region's premier destination for high-intent 'Azhagu' makeup in Pala. Specializing in Christian bride church ceremony styling and 'Pala Bridal Edit' photography-focused technical excellence for elite brides in Kottayam.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── THE NIKITA COMMITMENT ──────── */}
      <section className="section-padding" style={{ background: "#FFE4E8" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <FadeUp>
                <p className="label-caps mb-4">The Commitment</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif font-light text-white mb-6">
                  One artist. Your day.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="font-sans text-white/80 max-w-lg mb-4">
                  Every bridal look at NIXTUDIO — from your engagement to your wedding reception — is created entirely by Nikita. Our 'Humidity-resistant Airbrush Finish' is specifically engineered to survive 16-hour Kerala wedding marathons without cakeing.
                </p>
                <p className="font-sans text-white/80 max-w-lg">
                  Ask about our 'Happy Bride Story' sessions to capture your transformation from first look to final 'Manavatty' elegance.
                </p>
              </FadeUp>
            </div>

            {/* Image */}
            <FadeUp className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="w-full aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/detailed-bridal-makeover-pala-kottayam.webp"
                  alt="Nix-Studio-Pala-Engagement-Look-Makeup-Artist-Kottayam — Precision 'Happy Bride Story' application for Christian ceremonies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── THE PROCESS ──────── */}
      <section className="section-padding section-gradient-process">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-12">What to <em>Expect</em></p>
          </FadeUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            staggerDelay={0.12}
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.num}>
                <span className="font-serif block mb-3" style={{ fontSize: "80px", fontWeight: 300, color: "#F9919F", lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 className="font-serif text-xl mb-3" style={{ color: "#FFFFFF" }}>
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── BRAND STRIP — removed (orbital moved to home) ──────── */}


      {/* ──────── THE PACKAGE — gold pricing cards ──────── */}
      <section className="section-padding section-cream">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-4">Investment Tiers</p>
            <h2 className="font-serif font-light text-white text-3xl lg:text-4xl mb-12">The Bridal Package</h2>
            <p className="font-sans text-white/80 text-sm mb-12 max-w-lg">
              Transparent pricing for premium 'Manavatty' aesthetics. We offer specialized tiers for your wedding and pre-wedding functions.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-espresso/5 pb-16">
            {[
              { title: "Engagement / Reception", price: "₹14,500", desc: "Sophisticated styling for your first look." },
              { title: "Premium Bridal (HD)", price: "₹27,500", desc: "Our signature high-definition bridal package." },
              { title: "Luxury Bridal (Airbrush)", price: "₹32,500", desc: "Humidity-resistant finish for max durability." }
            ].map((tier, i) => (
              <FadeUp key={tier.title} delay={i * 0.1}>
                <div className="p-8 border border-espresso/5 rounded-2xl bg-white/50">
                  <h3 className="font-sans text-[10px] tracking-[0.2em] text-[#B76E79] mb-2 uppercase">{tier.title}</h3>
                  <div className="text-2xl font-serif text-white mb-3">{tier.price}<span className="text-xs font-sans text-white/70 ml-1">+</span></div>
                  <p className="font-sans text-[13px] text-white/80">{tier.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-8 max-w-3xl">

            {/* HD Card */}
            <div className="pricing-card flex-1 w-full max-md:p-[32px_24px] card-glow rosegold-shimmer" style={{ padding: "clamp(32px, 4vw, 40px)", borderRadius: "16px" }}>
              <div className="bg-white h-full w-full rounded-[14px] p-6 lg:p-10 flex flex-col items-center">
              <p className="label-caps mb-4" style={{ color: "#A86070" }}>HD Makeup</p>
              <div className="price-display mb-2 max-md:text-[56px] gold-foil-text">
                <span className="price-rupee">₹</span>27,500
              </div>
              <div style={{ width: "40px", height: "1px", margin: "20px 0" }} className="rosegold-shimmer" />
              <ul className="space-y-0">
                {["Makeup with detailed skin prep","Hairstyling","Saree draping","Lashes","Contact lenses","Outfit setting","Hair extensions if needed"].map((item, i, arr) => (
                  <li key={i} className="flex items-center gap-3 py-3 w-full" style={{ borderBottom: i < arr.length-1 ? "1px solid #FFE4E8" : "none" }}>
                    <span style={{ color: "#F9919F", fontSize: "12px" }}>✓</span>
                    <span className="font-sans text-[15px]" style={{ color: "#FFFFFF" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-auto pt-6 text-xs font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>Inclusive of 5% GST</p>
              </div>
            </div>

            {/* Airbrush Card — MOST POPULAR */}
            <div className="pricing-card flex-1 w-full max-md:p-[32px_24px] card-glow rosegold-shimmer" style={{ position: "relative", padding: "clamp(32px, 4vw, 40px)", borderRadius: "16px" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #C4903A, #E8CC90)", color: "#FFFFFF", fontSize: "10px", letterSpacing: "0.15em", padding: "4px 20px", borderRadius: "100px", whiteSpace: "nowrap", zIndex: 10 }}>
                MOST POPULAR
              </div>
              <div className="bg-white h-full w-full rounded-[14px] p-6 lg:p-10 flex flex-col items-center relative">
              <p className="label-caps mb-4" style={{ color: "#A86070" }}>Airbrush Makeup</p>
              <div className="price-display mb-2 max-md:text-[56px] gold-foil-text">
                <span className="price-rupee">₹</span>32,500
              </div>
              <p className="text-[11px] font-sans text-[#B76E79] mb-4 uppercase tracking-wider">Humidity-Resistant Finish</p>
              <div style={{ width: "40px", height: "1px", margin: "20px 0" }} className="rosegold-shimmer" />
              <ul className="space-y-0">
                {["Makeup with detailed skin prep","Hairstyling","Saree draping","Lashes","Contact lenses","Outfit setting","Hair extensions if needed"].map((item, i, arr) => (
                  <li key={i} className="flex items-center gap-3 py-3 w-full" style={{ borderBottom: i < arr.length-1 ? "1px solid #FFE4E8" : "none" }}>
                    <span style={{ color: "#F9919F", fontSize: "12px" }}>✓</span>
                    <span className="font-sans text-[15px]" style={{ color: "#FFFFFF" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-auto pt-6 text-xs font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>Inclusive of 5% GST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── GOOD TO KNOW ──────── */}
      <section className="section-padding" style={{ background: "#FFE4E8" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-12">Good to Know</p>
          </FadeUp>
          <StaggerContainer className="space-y-8 max-w-2xl" staggerDelay={0.1}>
            {[
              "There are no makeup or hair trials. Your consultation happens on the day — it is thorough, it is personal, and it is enough.",
              "Guest and family makeup is available separately. Please inform us at the time of booking so we can schedule correctly.",
              "Hair accessories — extensions, lashes, lenses, slides, pins, nets — are provided. Flowers for hair are not included.",
              "Once booked, date changes are subject to availability only.",
            ].map((text, i) => (
              <StaggerItem key={i}>
                <p className="font-sans text-white/90 leading-relaxed">
                  {text}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── BOOKING FORM ──────── */}
      <section className="section-padding section-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-serif font-light text-white text-3xl lg:text-4xl mb-3">
              Let&rsquo;s begin.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-white/80 mb-4 max-w-lg">
              Share your wedding details and we&rsquo;ll confirm your availability.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm text-white/90 mb-10 max-w-lg">
              NIXTUDIO is a studio-only experience. We are based in Pala and do not offer home or venue visits. All services are provided at the salon.
            </p>
          </FadeUp>

          {submitted ? (
            <FadeUp>
              <div className="max-w-lg p-8 border border-taupe/15">
                <p className="font-serif text-2xl text-white mb-3">
                  Thank you.
                </p>
                <p className="font-sans text-white/90 text-sm">
                  We&rsquo;ll be in touch shortly. If you need a faster response,{" "}
                  <a
                    href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border-b border-white/40 hover:border-white transition-colors"
                  >
                    WhatsApp us directly at +91 70347 26402
                  </a>
                  .
                </p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.2}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="label-caps block mb-2" htmlFor="bridal-name">
                      Full Name
                    </label>
                    <input
                      id="bridal-name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <span className="text-xs text-brass mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="label-caps block mb-2" htmlFor="bridal-phone">
                      Phone Number
                    </label>
                    <input
                      id="bridal-phone"
                      type="tel"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-xs text-brass mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="label-caps block mb-2" htmlFor="bridal-date">
                      Date of Function
                    </label>
                    <input
                      id="bridal-date"
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.date && (
                      <span className="text-xs text-brass mt-1 block">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  {/* Leave Time */}
                  <div>
                    <label className="label-caps block mb-2" htmlFor="bridal-time">
                      Time You Need to Leave
                    </label>
                    <input
                      id="bridal-time"
                      type="time"
                      {...register("leaveTime", { required: "Time is required" })}
                      className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.leaveTime && (
                      <span className="text-xs text-brass mt-1 block">
                        {errors.leaveTime.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="label-caps block mb-2" htmlFor="bridal-event">
                    Event Type
                  </label>
                  <select
                    id="bridal-event"
                    {...register("eventType", { required: "Please select event type" })}
                    className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select event type</option>
                    <option value="engagement">Engagement</option>
                    <option value="wedding">Wedding</option>
                    <option value="reception">Wedding Reception</option>
                  </select>
                  {errors.eventType && (
                    <span className="text-xs text-brass mt-1 block">
                      {errors.eventType.message}
                    </span>
                  )}
                </div>

                {/* Services */}
                <div>
                  <label className="label-caps block mb-2" htmlFor="bridal-services">
                    Services Required
                    <span className="text-taupe/50 text-[10px] normal-case ml-2">
                      Optional
                    </span>
                  </label>
                  <textarea
                    id="bridal-services"
                    rows={3}
                    {...register("services")}
                    className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Referral */}
                <div>
                  <label className="label-caps block mb-2" htmlFor="bridal-referral">
                    How Did You Find Us?
                    <span className="text-taupe/50 text-[10px] normal-case ml-2">
                      Optional
                    </span>
                  </label>
                  <input
                    id="bridal-referral"
                    type="text"
                    {...register("referral")}
                    className="w-full px-4 py-3 bg-transparent border border-white/25 text-white font-sans text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto px-10 py-4 mt-4"
                  >
                    Send Enquiry via WhatsApp
                  </button>
                  <p className="text-xs text-taupe/60 mt-3 font-sans">
                    You will be redirected to WhatsApp to complete your enquiry.
                  </p>
                </div>
              </form>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
