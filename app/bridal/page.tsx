"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const brands = [
  "GUCCI", "CHANEL", "DIOR", "CHARLOTTE TILBURY",
  "GIVENCHY", "NARS", "FENTY BEAUTY", "PAT McGRATH",
  "URBAN DECAY", "MAC", "LAURA MERCIER", "HUDA BEAUTY",
];

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
        <div className="absolute inset-0 bg-pink flex items-center justify-center">
          <span className="text-white/80 font-sans text-sm tracking-wide">
            REPLACE: hero-bridal-fullscreen.jpg
          </span>
        </div>
        <div className="absolute inset-0 bg-espresso/30" />
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pb-16 lg:pb-24">
          <FadeUp>
            <h1 className="font-serif font-light text-white text-5xl lg:text-7xl mb-3">
              The Bridal Edit
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-white/70 text-sm tracking-wide">
              By Nikita Liby
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── POSITIONING STATEMENT ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-serif font-light text-espresso text-3xl lg:text-5xl max-w-3xl leading-snug">
              Bridal makeup is not a service. It is the last thing you put on before you become a bride.
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ──────── THE NIKITA COMMITMENT ──────── */}
      <section className="section-padding pt-0">
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
              <div className="w-full aspect-square bg-pink/80 flex items-center justify-center">
                <span className="text-white/80 font-sans text-sm tracking-wide">
                  REPLACE: nikita-detail-work.jpg
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── THE PROCESS ──────── */}
      <section className="section-padding bg-pink-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-12">What to Expect</p>
          </FadeUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            staggerDelay={0.12}
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.num}>
                <span className="font-serif text-5xl lg:text-6xl font-light text-espresso/15 block mb-3">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl text-espresso mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-espresso/60 leading-relaxed">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── BRAND STRIP ──────── */}
      <section className="section-padding">
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

      {/* ──────── THE PACKAGE ──────── */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-12">The Package</p>
          </FadeUp>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl"
            staggerDelay={0.15}
          >
            {/* HD */}
            <StaggerItem>
              <div>
                <span className="font-serif text-4xl lg:text-5xl font-light text-espresso block mb-2">
                  ₹27,500
                </span>
                <span className="label-caps block mb-6">HD Makeup</span>
                <ul className="space-y-2.5 text-sm font-sans text-espresso/70">
                  <li>Makeup with detailed skin preparation</li>
                  <li>Hairstyling</li>
                  <li>Saree draping with or without pre-pleat</li>
                  <li>Lashes</li>
                  <li>Contact lenses</li>
                  <li>Outfit setting</li>
                  <li>Hair extensions if needed</li>
                </ul>
              </div>
            </StaggerItem>

            {/* Airbrush */}
            <StaggerItem>
              <div>
                <span className="font-serif text-4xl lg:text-5xl font-light text-espresso block mb-2">
                  ₹32,500
                </span>
                <span className="label-caps block mb-6">Airbrush Makeup</span>
                <ul className="space-y-2.5 text-sm font-sans text-espresso/70">
                  <li>Makeup with detailed skin preparation</li>
                  <li>Hairstyling</li>
                  <li>Saree draping with or without pre-pleat</li>
                  <li>Lashes</li>
                  <li>Contact lenses</li>
                  <li>Outfit setting</li>
                  <li>Hair extensions if needed</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeUp delay={0.3}>
            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-sans text-taupe">
                All prices inclusive of 5% GST.
              </p>
              <p className="text-sm font-sans text-taupe">
                Valid for Engagement, Wedding, and Wedding Reception.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── GOOD TO KNOW ──────── */}
      <section className="section-padding bg-parchment">
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
      <section className="section-padding">
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
                    href="https://wa.me/917034726407?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso border-b border-espresso/40 hover:border-espresso transition-colors"
                  >
                    WhatsApp us directly at +91 70347 26407
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

                <button
                  type="submit"
                  className="inline-flex items-center px-10 py-3.5 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso/90 transition-colors duration-300"
                >
                  Send Enquiry
                </button>

                <p className="text-sm text-taupe mt-4">
                  Prefer WhatsApp?{" "}
                  <a
                    href="https://wa.me/917034726407?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup.%0ADate%20of%20function%3A%20%0ATime%20I%20need%20to%20leave%3A%20%0AServices%20required%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso border-b border-espresso/40 hover:border-espresso transition-colors"
                  >
                    Message us directly.
                  </a>
                </p>
              </form>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
