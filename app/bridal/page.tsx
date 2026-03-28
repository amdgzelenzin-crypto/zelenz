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
    console.log("Bridal form submitted:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* ──────── BRIDAL HERO ──────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 skeleton">
          <Image
            src="/images/hero-bridal.jpg"
            alt="Bridal makeup by Nikita Liby — NIXTUDIO premium makeup studio Pala Kerala"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-espresso/30" />
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
        </div>
        {/* Gold trim bottom mobile */}
        <div className="absolute bottom-0 left-0 w-full h-1 z-50 md:hidden bg-[linear-gradient(90deg,transparent_0%,#D4A055_20%,#F9C8C8_50%,#D4A055_80%,transparent_100%)]" />
      </section>

      {/* ──────── POSITIONING STATEMENT ──────── */}
      <section className="section-padding section-white texture-grain">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-serif font-light text-espresso text-3xl lg:text-5xl max-w-3xl leading-snug">
              One artist. <em>Your day.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/60 text-sm mt-6 max-w-lg">
              NIXTUDIO is Pala&rsquo;s only premium bridal makeup studio where every look is done exclusively by Nikita. Serving brides across Pala, Kottayam, and Changanacherry.
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
                <h2 className="font-serif font-light text-espresso mb-6">
                  One artist. Your day.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="font-sans text-espresso/70 max-w-lg mb-4">
                  Every bridal look at NIXTUDIO — from your engagement to your wedding reception — is created entirely by Nikita. Not supervised by Nikita. Not started by Nikita and finished by an assistant. Done by Nikita. Start to finish.
                </p>
                <p className="font-sans text-espresso/70 max-w-lg">
                  This is a personal commitment to every bride who books with us.
                </p>
              </FadeUp>
            </div>

            {/* Image */}
            <FadeUp className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src="/images/nikita-detail-work.png"
                  alt="Nikita Liby applying bridal makeup — NIXTUDIO studio Pala Kerala"
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
                <h3 className="font-serif text-xl mb-3" style={{ color: "#3D1520" }}>
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#5C2D3A" }}>
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
            <p className="label-caps mb-12">The Package</p>
          </FadeUp>
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
                    <span className="font-sans text-[15px]" style={{ color: "#3D1520" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-auto pt-6 text-xs font-sans" style={{ color: "#A86070" }}>Inclusive of 5% GST</p>
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
              <div style={{ width: "40px", height: "1px", margin: "20px 0" }} className="rosegold-shimmer" />
              <ul className="space-y-0">
                {["Makeup with detailed skin prep","Hairstyling","Saree draping","Lashes","Contact lenses","Outfit setting","Hair extensions if needed"].map((item, i, arr) => (
                  <li key={i} className="flex items-center gap-3 py-3 w-full" style={{ borderBottom: i < arr.length-1 ? "1px solid #FFE4E8" : "none" }}>
                    <span style={{ color: "#F9919F", fontSize: "12px" }}>✓</span>
                    <span className="font-sans text-[15px]" style={{ color: "#3D1520" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-auto pt-6 text-xs font-sans" style={{ color: "#A86070" }}>Inclusive of 5% GST</p>
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
                <p className="font-sans text-espresso/70 leading-relaxed">
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
            <h2 className="font-serif font-light text-espresso text-3xl lg:text-4xl mb-3">
              Let&rsquo;s begin.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/60 mb-4 max-w-lg">
              Share your wedding details and we&rsquo;ll confirm your availability.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm text-taupe mb-10 max-w-lg">
              NIXTUDIO is a studio-only experience. We are based in Pala and do not offer home or venue visits. All services are provided at the salon.
            </p>
          </FadeUp>

          {submitted ? (
            <FadeUp>
              <div className="max-w-lg p-8 border border-taupe/15">
                <p className="font-serif text-2xl text-espresso mb-3">
                  Thank you.
                </p>
                <p className="font-sans text-espresso/70 text-sm">
                  We&rsquo;ll be in touch shortly. If you need a faster response,{" "}
                  <a
                    href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso border-b border-espresso/40 hover:border-espresso transition-colors"
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
                      className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors appearance-none"
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
                    className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors resize-none"
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
                    className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                  <button
                    type="submit"
                    className="btn-primary px-10 w-full sm:w-auto"
                  >
                    Send Enquiry
                  </button>

                  <a
                    href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold px-10 w-full sm:w-auto flex justify-center items-center gap-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.996 1.996c1.196 0 2.378.196 3.528.58 2.03.684 3.737 1.956 4.965 3.5.584.72.932 1.488 1.156 2.22.424 1.4.524 3.01.2 4.498-.328 1.503-1.077 2.91-2.096 4.054a10 10 0 0 1-3.664 2.47c-1.396.536-3.003.856-4.526.856-1.55-.022-3.056-.46-4.32-1.09l-4.14 1.1c-.246.066-.465-.008-.6-.182a.584.584 0 0 1-.102-.34c0-.056.002-.124.016-.207l1.107-4c-.7-1.332-1.125-2.883-1.146-4.47-.024-1.57.34-3.13 1.05-4.502a10 10 0 0 1 2.898-3.41c1.558-1.137 3.51-1.63 5.674-1.6xM9.362 7.02c-.524.02-1.116.143-1.458.625l-.206.312c-.22.37-.417.818-.466 1.346-.07 1.05.286 2.062 1.03 2.92.83.94 1.838 1.63 3.007 2.146 1.178.508 2.382.72 3.61.545.6-.134 1.116-.546 1.396-1.107l.2-.4233c-.02-.857-.34-1.57-1.112-1.89l-1.306-.554a.792.792 0 0 0-.416-.018c-.29.074-.53.25-.79.497-.107.1-.197.18-.28.257-.14.12-.346.16-.547.054a9.123 9.123 0 0 1-2.906-2.584.582.582 0 0 1 .054-.74c.068-.088.163-.166.27-.26.222-.204.42-.42.508-.71.07-.225.045-.487-.132-.782a17.96 17.96 0 0 0-.485-.778l-.34-.52c-.288-.415-.595-.49-.86-.44-.194.024-.316.064-.52.17x"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </form>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
