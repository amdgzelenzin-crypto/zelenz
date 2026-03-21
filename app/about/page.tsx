"use client";

import { FadeUp } from "@/components/ui/AnimationWrapper";

export default function AboutPage() {
  return (
    <>
      {/* ──────── PORTRAIT SECTION ──────── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-0">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <FadeUp className="lg:col-span-5">
              <div className="w-full aspect-[3/4] bg-[#C4B0A8] flex items-center justify-center sticky top-28">
                <span className="text-white/80 font-sans text-sm tracking-wide">
                  REPLACE: nikita-editorial-portrait.jpg
                </span>
              </div>
            </FadeUp>

            {/* Text */}
            <div className="lg:col-span-6 lg:col-start-7 lg:py-20">
              <FadeUp>
                <h1 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-2">
                  Nikita Liby
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-sm text-taupe mb-8">
                  Creative Director, NIXTUDIO
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="font-sans text-espresso/70 max-w-lg mb-6">
                  Makeup, for Nikita, has never been about following a trend or
                  recreating a reference photo. It has always been about understanding
                  a face — its structure, its light, its character — and working
                  with it, not against it.
                </p>
              </FadeUp>

              {/* ──────── THE PRACTICE ──────── */}
              <FadeUp delay={0.2}>
                <div className="mt-12">
                  <p className="label-caps mb-6">The Practice</p>
                  <div className="space-y-5 font-sans text-espresso/70 max-w-lg">
                    <p>
                      Every bridal client who books with NIXTUDIO is attended to
                      exclusively by Nikita — from the first conversation about the
                      look to the final inspection before the bride leaves the studio.
                      No delegation. No assistants finishing what she started. This is
                      a commitment that has never been compromised.
                    </p>
                    <p>
                      Beyond bridal work, Nikita specializes in bleach-free hair
                      coloring — her signature balayage and highlighting techniques
                      are designed to protect hair integrity while achieving tones that
                      feel natural, not processed.
                    </p>
                    <p className="italic text-espresso/80">
                      &ldquo;Simple refers to the look — soft, minimal, subtle. It does not
                      mean fewer products or skipped steps. Whether subtle or bold, the
                      time, skill, and care remain exactly the same.&rdquo;
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* ──────── THE STUDIO ──────── */}
              <FadeUp delay={0.25}>
                <div className="mt-12">
                  <p className="label-caps mb-6">The Studio</p>
                  <div className="space-y-5 font-sans text-espresso/70 max-w-lg">
                    <p>
                      NIXTUDIO is a space built around intention. Every tool is
                      single-use or sterilized. Every appointment is scheduled with
                      enough buffer to never feel rushed. Walk-ins are welcome when
                      availability allows, but scheduling in advance ensures we can
                      give you our full attention.
                    </p>
                    <p>
                      Complimentary tea, coffee, or juice on all services.
                      Complimentary food and drinks for services over two hours.
                      And a complimentary 10-minute leg massage for longer appointments —
                      because the experience matters as much as the result.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── SIGNATURE CLOSE ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="font-serif italic text-3xl lg:text-4xl font-light text-espresso/85 leading-snug mb-6">
                &ldquo;We make sure every bride radiates confidence and grace.&rdquo;
              </p>
              <p className="font-sans text-sm text-taupe">
                Nikita Liby, NIXTUDIO
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
