"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";
import StudioMap from "@/components/ui/StudioMap";

const faqs = [
  {
    q: "Is there a makeup trial before the wedding day?",
    a: "No trials are offered. Your consultation happens on the day of your function — it is thorough, detailed, and unhurried. We begin with a full discussion of your preferences before a single product is applied.",
  },
  {
    q: "Can dates be changed after booking?",
    a: "Date and venue changes after booking are subject to availability only. Please read our Terms & Conditions for full details before confirming.",
  },
  {
    q: "Is guest and family makeup available?",
    a: "Yes — guest and family makeup is charged separately under our Party Makeup catalogue. All requirements must be communicated at the time of booking for proper scheduling.",
  },
  {
    q: "What happens if I want simple makeup?",
    a: "Simple refers to the look, not the effort. A subtle, natural look requires the same preparation, products, and skill as a full glam. Our pricing reflects the quality behind every look, regardless of intensity.",
  },
  {
    q: "What payment is required to book?",
    a: "An advance payment is required to confirm your slot. The balance is settled on the day of the event. Full Terms & Conditions available on request.",
  },
  {
    q: "What does the bridal package include?",
    a: "Makeup with detailed skin preparation, hairstyling, saree draping with or without pre-pleat, lashes, contact lenses, outfit setting, and hair extensions if needed. Hair flowers are not included but accessories such as pins, nets, and bands are provided.",
  },
];

interface BridalFormData {
  name: string;
  phone: string;
  date: string;
  leaveTime: string;
  eventType: string;
  services: string;
  details: string;
  referral: string;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-taupe/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-sm text-espresso font-medium pr-4">
          {q}
        </span>
        <span
          className={`text-taupe text-lg shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? "max-h-[500px] pb-5" : "max-h-0"
        }`}
      >
        <p className="font-sans text-sm text-espresso/60 leading-relaxed pr-8">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BridalFormData>();

  const onSubmit = (data: BridalFormData) => {
    console.log("Bridal enquiry:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* ──────── PAGE HEADER ──────── */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h1 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-4">
              Let&rsquo;s make it happen.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/60 text-lg max-w-lg">
              Two ways to reach us — choose what works for you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── TWO-PATH LAYOUT ──────── */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT — WHATSAPP */}
            <FadeUp>
              <div className="relative h-full flex flex-col overflow-hidden min-h-[500px]">
                {/* Background Image - full clean image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/book-now.jpg"
                    alt="Bookings are open"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                {/* Button at bottom */}
                <div className="relative z-10 mt-auto p-8 lg:p-10">
                  <a
                    href="https://wa.me/917034726407?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3.5 bg-parchment text-espresso text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-parchment/90 transition-colors duration-300"
                    id="contact-whatsapp-btn"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* RIGHT — BRIDAL FORM */}
            <FadeUp delay={0.15}>
              <div className="h-full">
                <p className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-taupe mb-4">
                  Bridal Enquiry
                </p>
                <h2 className="font-serif font-light text-espresso text-2xl lg:text-3xl mb-4">
                  For engagement, wedding, and reception bookings.
                </h2>
                <p className="font-sans text-sm text-taupe mb-8">
                  NIXTUDIO is a studio-only experience. We are based in Pala and do not offer home or venue visits. All services are provided at the salon.
                </p>

                {submitted ? (
                  <div className="p-8 border border-taupe/15">
                    <p className="font-serif text-2xl text-espresso mb-3">
                      Thank you.
                    </p>
                    <p className="font-sans text-espresso/70 text-sm">
                      We&rsquo;ll be in touch shortly. If you need a faster response,{" "}
                      <a
                        href="https://wa.me/917034726407"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-espresso border-b border-espresso/40 hover:border-espresso transition-colors"
                      >
                        WhatsApp us directly at +91 70347 26407
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="label-caps block mb-2" htmlFor="contact-name">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
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
                      <div>
                        <label className="label-caps block mb-2" htmlFor="contact-phone">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
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
                      <div>
                        <label className="label-caps block mb-2" htmlFor="contact-date">
                          Wedding Date
                        </label>
                        <input
                          id="contact-date"
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
                      <div>
                        <label className="label-caps block mb-2" htmlFor="contact-time">
                          Time You Need to Leave
                        </label>
                        <input
                          id="contact-time"
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

                    <div>
                      <label className="label-caps block mb-2" htmlFor="contact-event">
                        Event Type
                      </label>
                      <select
                        id="contact-event"
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

                    <div>
                      <label className="label-caps block mb-2" htmlFor="contact-referral">
                        How Did You Find Us?
                        <span className="text-taupe/50 text-[10px] normal-case ml-2">Optional</span>
                      </label>
                      <input
                        id="contact-referral"
                        type="text"
                        {...register("referral")}
                        className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="label-caps block mb-2" htmlFor="contact-details">
                        Additional Details
                        <span className="text-taupe/50 text-[10px] normal-case ml-2">Optional</span>
                      </label>
                      <textarea
                        id="contact-details"
                        rows={3}
                        {...register("details")}
                        className="w-full px-4 py-3 bg-transparent border border-taupe/25 text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center px-10 py-3.5 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso/90 transition-colors duration-300"
                      id="contact-submit-btn"
                    >
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── FAQ ──────── */}
      <section className="section-padding bg-pink-15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="label-caps mb-10">Common Questions</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──────── MAP SECTION ──────── */}
      <section style={{
        padding: '80px 24px',
        background: '#FFFFFF',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section label */}
        <FadeUp>
          <p style={{
            fontFamily: 'var(--font-sans, sans-serif)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: '#B76E79',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            FIND US
          </p>
        </FadeUp>

        {/* Section heading */}
        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: '#4E4247',
            marginBottom: '8px',
          }}>
            Visit the studio.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p style={{
            fontFamily: 'var(--font-body, serif)',
            fontSize: '15px',
            fontStyle: 'italic',
            color: '#A86070',
            marginBottom: '40px',
          }}>
            Pala, Kerala · Studio-only experience. We do not travel for makeup.
          </p>
        </FadeUp>

        {/* The map */}
        <FadeUp delay={0.3}>
          <StudioMap />
        </FadeUp>
      </section>

      {/* ──────── LOCATION / CONTACT STRIP ──────── */}
      <section className="py-12 border-t border-taupe/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-sans text-taupe">
              <span className="font-medium text-espresso">NIXTUDIO</span>
              <span>Pala, Kerala</span>
              <a href="tel:+917034726402" className="hover:text-espresso transition-colors">
                +91 70347 26402
              </a>
              <a href="tel:+917034726407" className="hover:text-espresso transition-colors">
                +91 70347 26407
              </a>
              <a
                href="https://instagram.com/nixtudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-espresso transition-colors"
              >
                @nixtudio
              </a>
              <span className="text-xs text-taupe/50">GST: 32AWNPL0049D1ZW</span>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
