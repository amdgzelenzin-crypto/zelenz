"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FadeUp } from "@/components/ui/AnimationWrapper";
import GoogleMapsEmbed from "@/components/ui/GoogleMapsEmbed";

const faqs = [
  {
    q: "Is there a makeup trial before the wedding day?",
    a: "Your consultation happens on the day of your function — it is thorough, detailed, and unhurried. We begin with a full discussion of your preferences before a single product is applied.",
  },
  {
    q: "Can dates be changed after booking?",
    a: "Date and venue changes after booking are subject to availability only. Please read our Terms & Conditions for full details before confirming.",
  },
  {
    q: "Is guest and family makeup available?",
    a: "Yes — guest and family makeup is charged separately. All requirements must be communicated at the time of booking for proper scheduling.",
  },
  {
    q: "What does the bridal package include?",
    a: "Standard Package includes makeup, hairstyling, lashes, lens, outfit styling, and hair extensions if needed. See our grooming catalogue for family makeup options.",
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
    const message = `Hi Zelenz, I'd like to enquire about bridal makeup.

*Full Name:* ${data.name}
*Phone:* ${data.phone}
*Wedding Date:* ${data.date}
*Time I Need to Leave:* ${data.leaveTime}
*Event Type:* ${data.eventType}
*Services Required:* ${data.services}
*Additional Details:* ${data.details || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
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
              Reach out to us to schedule your premium grooming or bridal makeup session.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── TWO-PATH LAYOUT ──────── */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT — WHATSAPP INFO */}
            <FadeUp>
              <div className="flex flex-col gap-6 justify-center h-full p-8 rounded-2xl border border-[#FFE4E8] bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(183,110,121,0.04)]">
                <p className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-[#A86070]">
                  Quick Booking
                </p>
                <h2 className="font-serif font-light text-espresso text-2xl lg:text-3xl">
                  Connect Directly on WhatsApp
                </h2>
                <p className="font-sans text-sm text-taupe leading-relaxed">
                  Have a quick question or want to secure your appointment immediately? Chat with our studio representatives on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#25D366] text-white text-[11px] font-sans font-medium tracking-[0.12em] uppercase rounded-xl hover:bg-[#25D366]/90 transition-colors duration-300 w-fit"
                  id="contact-whatsapp-btn"
                >
                  Open WhatsApp Chat
                </a>
                <div className="border-t border-taupe/10 pt-6 mt-2 space-y-2">
                  <p className="font-sans text-xs text-taupe">
                    <strong>Pala Studio:</strong> Dummy Building, Near Civil Station, Pala, Kerala
                  </p>
                  <p className="font-sans text-xs text-taupe">
                    <strong>Kottayam Studio:</strong> Dummy Complex, Kanjikuzhy, Kottayam, Kerala
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* RIGHT — BRIDAL FORM */}
            <FadeUp delay={0.15}>
              <div className="h-full bg-white border border-[#FFE4E8] rounded-2xl p-8 shadow-[0_4px_24px_rgba(183,110,121,0.04)]">
                <p className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-taupe mb-4">
                  Bridal Enquiry
                </p>
                <h2 className="font-serif font-light text-espresso text-2xl mb-4">
                  For engagement, wedding, and reception bookings.
                </h2>
                <p className="font-sans text-sm text-taupe mb-8">
                  Zelenz is a studio-only experience. All services are provided at our Pala or Kottayam lounges.
                </p>

                {submitted ? (
                  <div className="p-8 border border-taupe/15 rounded-xl">
                    <p className="font-serif text-2xl text-espresso mb-3">
                      Thank you.
                    </p>
                    <p className="font-sans text-espresso/70 text-sm">
                      We&rsquo;ll be in touch shortly. If you need a faster response,{" "}
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-espresso border-b border-espresso/40 hover:border-espresso transition-colors font-semibold"
                      >
                        WhatsApp us at +91 98765 43210
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
                          className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors appearance-none"
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
                      <label className="label-caps block mb-2" htmlFor="contact-details">
                        Additional Details
                        <span className="text-taupe/50 text-[10px] normal-case ml-2">Optional</span>
                      </label>
                      <textarea
                        id="contact-details"
                        rows={3}
                        {...register("details")}
                        className="w-full px-4 py-3 bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl text-espresso font-sans text-sm focus:border-espresso focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-10 py-3.5 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase rounded-xl hover:bg-espresso/90 transition-colors duration-300 w-full"
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
      <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="label-caps mb-4">FIND US</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-serif font-light text-espresso text-3xl mb-8">
            Our Lounge Locations
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <GoogleMapsEmbed />
        </FadeUp>
      </section>
    </>
  );
}
