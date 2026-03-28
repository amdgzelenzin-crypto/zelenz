"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";
import ReviewMarquee from "@/components/ui/ReviewMarquee";
import StatCounters from "@/components/ui/StatCounters";
import dynamic from "next/dynamic";

const StudioMap = dynamic(() => import("@/components/ui/StudioMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] skeleton rounded-[20px]" />
});

/* ──────────────────────────────────────
function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY < 100);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "32px",
        right: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ animation: "bounce-down 1.5s ease-in-out infinite" }}
      >
        <path d="M10 3v14M4 11l6 6 6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────
   EDITORIAL STAGGERED CARDS
   ────────────────────────────────────── */
const cards = [
  {
    tag: "BRIDAL EXPERIENCE",
    heading: "Bridal",
    sub: "For your engagement, wedding, and reception",
    link: "/bridal",
    linkText: "The Bridal Edit →",
    image: "/images/gallery/bridal-001.jpg",
    placeholder: "#F9C8C8",
    offset: 0,
    gradient: "linear-gradient(to bottom, rgba(249,145,159,0.15) 0%, rgba(61,26,31,0.75) 100%)",
  },
  {
    tag: "PARTY & GUEST MAKEUP",
    heading: "Party &\nGuests",
    sub: "For every celebration in between",
    link: "/party",
    linkText: "Party Makeup →",
    image: "/images/party-makeup.jpg",
    placeholder: "#F4A8B0",
    offset: 40,
    gradient: "linear-gradient(to bottom, rgba(212,160,85,0.15) 0%, rgba(61,26,31,0.75) 100%)",
  },
  {
    tag: "HAIR · NAILS · SPA",
    heading: "Services",
    sub: "Hair, nails, skincare, and more",
    link: "/services",
    linkText: "Services →",
    image: "/images/studio/studio-007.png",
    placeholder: "#EE8898",
    offset: 0,
    gradient: "linear-gradient(to bottom, rgba(183,110,121,0.20) 0%, rgba(61,26,31,0.75) 100%)",
  },
];
const heroImages = [
  "/images/hero-bridal.jpg",
  "/images/hero-bridal-2.jpg",
  "/images/hero-bridal-3.jpg",
  "/images/studio/studio-002.jpg",
  "/images/studio/studio-003.png",
  "/images/studio/studio-005.jpg",
  "/images/studio/studio-006.jpg",
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState<number[]>([0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % heroImages.length;
        setMounted((m) => m.includes(next) ? m : [...m, next]);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, i) => (
        mounted.includes(i) && (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out skeleton"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt="Bridal makeup by Nikita Liby — NIXTUDIO makeup studio Pala Kerala"
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
            />
          </div>
        )
      ))}
    </div>
  );
}

function EditorialCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-[280px] md:h-[520px] md:max-w-[380px] max-md:mb-4 max-md:[&:nth-child(2)]:ml-4 card-glow"
      style={{
        marginTop: `${card.offset}px`,
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 60px rgba(61,21,32,0.22)"
          : "0 8px 48px rgba(61,21,32,0.12)",
        transition: "box-shadow 400ms ease",
        flexShrink: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image / placeholder */}
      <div
        className="skeleton"
        style={{
          position: "absolute",
          inset: 0,
          background: card.placeholder,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 600ms ease",
        }}
      >
        <Image
          src={card.image}
          alt={`${card.heading} — NIXTUDIO beauty services in Pala Kerala`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={80}
          loading="lazy"
          onError={() => {}} // silently use placeholder bg on missing image
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
          borderRadius: "inherit",
          transition: "opacity 400ms ease",
          opacity: hovered ? 0.8 : 1
        }}
      />

      {/* Text content */}
      <Link href={card.link} style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "32px",
            zIndex: 2,
          }}
        >
          {/* Tag */}
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#E8A890",
              marginBottom: "12px",
            }}
          >
            {card.tag}
          </p>

          {/* Heading */}
          <h3
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(36px, 5vw, 48px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "8px",
              whiteSpace: "pre-line",
            }}
          >
            {card.heading}
          </h3>

          {/* Sub */}
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.5,
              marginBottom: "20px",
            }}
          >
            {card.sub}
          </p>

          {/* Link */}
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transform: hovered ? "translateX(6px)" : "translateX(0)",
              transition: "transform 300ms ease",
            }}
          >
            {card.linkText}
          </span>
        </div>
      </Link>
    </div>
  );
}

/* ──────────────────────────────────────
   PAGE
   ────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ──── 1. HERO — full screen ──── */}
      <section
        className="relative w-screen h-[100svh] overflow-hidden texture-grain pink-depth max-md:pt-[max(80px,calc(env(safe-area-inset-top)+60px))]"
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes petalSway {
            0%, 100% { transform: rotate(var(--r)) translateY(0px); }
            50% { transform: rotate(var(--r)) translateY(-12px); }
          }
          @keyframes bounceHero {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
        `}} />

        {/* Gold Botanical Detail Line (Mobile Only) */}
        <div className="absolute top-0 left-0 w-full h-1 z-50 md:hidden bg-[linear-gradient(90deg,transparent_0%,#D4A055_20%,#F9C8C8_50%,#D4A055_80%,transparent_100%)]" />

        {/* Background image / placeholder */}
        <HeroSlideshow />


        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(61,26,31,0.5) 100%)",
          }}
        />

        {/* Floating Petals Mobile Only */}
        <div className="absolute inset-0 z-0 pointer-events-none md:hidden overflow-hidden">
          <div style={{
            position: "absolute", top: "15%", right: "8%", width: "60px", height: "80px",
            background: "rgba(249,200,200,0.25)", borderRadius: "50% 0 50% 0",
            ["--r" as any]: "45deg", transform: "rotate(45deg)",
            animation: "petalSway 6s ease-in-out infinite"
          }} />
          <div style={{
            position: "absolute", top: "25%", left: "5%", width: "40px", height: "55px",
            background: "rgba(212,160,85,0.20)", borderRadius: "50% 0 50% 0",
            ["--r" as any]: "-30deg", transform: "rotate(-30deg)",
            animation: "petalSway 8s ease-in-out infinite reverse"
          }} />
          <div style={{
            position: "absolute", bottom: "25%", right: "10%", width: "50px", height: "65px",
            background: "rgba(249,145,159,0.20)", borderRadius: "0 50% 0 50%",
            ["--r" as any]: "120deg", transform: "rotate(120deg)",
            animation: "petalSway 7s ease-in-out infinite 2s"
          }} />
        </div>

        {/* Text — bottom left */}
        <div
          className="absolute z-10 max-w-[680px] bottom-[40px] md:bottom-[80px] left-[20px] md:left-[clamp(24px,5vw,64px)]"
        >
          <FadeUp>
            <p
              className="mt-[16px] md:mt-0"

              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
                marginBottom: "16px",
              }}
            >
              Premium Makeup Studio · Pala, Kerala
            </p>
          </FadeUp>

          <h1 className="sr-only">
            Bridal Makeup & Salon in Pala, Kerala — NIXTUDIO by Nikita Liby
          </h1>
          <FadeUp delay={0.1}>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(52px, 11vw, 88px)",
                lineHeight: 1.08,
                color: "#FFFFFF",
              }}
            >
              Every face. <br />
              Carefully <br />
              considered.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "16px",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Bridal makeup done exclusively by Nikita.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col md:flex-row gap-[14px] md:gap-[16px]">
              <Link href="/services" 
                className="w-full md:w-fit min-w-[200px] min-h-[52px] flex items-center justify-center transition-transform hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.20)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(255,255,255,0.50)",
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  padding: "0 24px",
                }}
              >
                Explore Services
              </Link>
              <Link href="/contact" 
                className="w-full md:w-fit min-w-[200px] min-h-[52px] flex items-center justify-center transition-transform hover:scale-105 rosegold-shimmer"
                style={{
                  border: "none",
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  padding: "0 24px",
                }}
              >
                Check Availability
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "24px", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
        }}>
          <div style={{
            fontSize: "20px", color: "rgba(255,255,255,0.60)",
            animation: "bounceHero 2s ease-in-out infinite",
          }}>
            ↓
          </div>
        </div>
      </section>

      {/* ──── 2. EDITORIAL SERVICE CARDS ──── */}
      <section style={{ background: "#FFFFFF", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Section header */}
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p className="label-caps" style={{ marginBottom: "12px" }}>Our Services</p>
              <h2
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  color: "#3D1520",
                  lineHeight: 1.2,
                }}
              >
                Find your <em>perfect</em> experience.
              </h2>
            </div>
          </FadeUp>

          {/* Cards row */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              padding: "0 12px",
            }}
          >
            {cards.map((card, i) => (
              <EditorialCard key={card.tag} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── 3. NIKITA SIGNAL — white ──── */}
      <section className="section-padding" style={{ background: "#FDE8E8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            {/* Portrait */}
            <FadeUp>
              <div
                className="w-full relative"
                style={{
                  background: "#F9C8C8",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/nikita-portrait.jpg"
                  alt="Nikita Liby — bridal makeup artist and founder of NIXTUDIO, Pala Kerala"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />

                {/* Heart Pulse Mobile Badge */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes heartPulseNikita {
                    0%, 100% { transform: scale(1); opacity: 0.70; }
                    50% { transform: scale(1.15); opacity: 1; }
                  }
                `}} />
                <div style={{
                  position: "absolute", top: "-10px", right: "16px",
                  fontSize: "28px", color: "#F9919F",
                  animation: "heartPulseNikita 2s ease-in-out infinite",
                  zIndex: 20
                }}>
                  ♥
                </div>
              </div>
            </FadeUp>

            {/* Text */}
            <div>
              <FadeUp><p className="label-caps" style={{ marginBottom: "16px" }}>The Artist</p></FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: "#3D1520",
                    marginBottom: "24px",
                  }}
                >
                  Not delegated. <br /> Not supervised. <em>Nikita.</em>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "17px",
                    lineHeight: 1.85,
                    color: "#3D1520",
                    marginBottom: "32px",
                    maxWidth: "480px",
                  }}
                >
                  Every bridal booking — engagement, wedding, reception — is handled
                  exclusively by Nikita from first consultation to final look. This is
                  not a team service. This is a personal commitment.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <StatCounters />
              </FadeUp>
              <FadeUp delay={0.4}>
                <Link href="/bridal" className="btn-primary" style={{ marginTop: "40px", display: "inline-flex" }}>
                  The Bridal Edit
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──── 4. REVIEWS ──── */}
      <ReviewMarquee />

      {/* ──── 5. GALLERY PREVIEW ──── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>
          <FadeUp>
            <p className="label-caps" style={{ marginBottom: "8px" }}>Portfolio</p>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
                color: "#3D1520",
                marginBottom: "40px",
              }}
            >
              The <em>Work.</em>
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "32px" }}>
            {["bridal-001.jpg","bridal-002.jpg","bridal-003.jpg","party-001.jpg","party-002.jpg","nails-001.jpg"].map((label, i) => (
              <Link
                key={i}
                href="/gallery"
                style={{
                  display: "block",
                  aspectRatio: "1/1",
                  background: "#FFFFFF",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
                className="group skeleton"
              >
                <Image
                  src={`/images/gallery/${label}`}
                  alt={label.startsWith('bridal') ? `HD bridal makeup look by Nikita Liby, NIXTUDIO Pala Kerala` : label.startsWith('party') ? `Party guest makeup by NIXTUDIO team, Pala Kerala` : `Gel nail art — The Nail Lounge by NIXTUDIO, Pala Kerala`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 20vw"
                  quality={80}
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
          <FadeUp>
            <Link href="/gallery" className="btn-outline-gold">View All Work →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ──── 6. FOOTER CTA ──── */}
      <section className="section-padding section-gradient-deep">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)", textAlign: "center" }}>
          <FadeUp>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Your date may already be booked.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.80)",
                marginBottom: "40px",
                maxWidth: "400px",
                margin: "0 auto 40px",
              }}
            >
              Bridal dates fill months in advance. Check your availability now.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  background: "#FFFFFF",
                  color: "#3D1520",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 300ms ease",
                }}
              >
                Check Bridal Availability
              </Link>
              <a
                href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1.5px solid rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 300ms ease",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ──── MAP SECTION ──── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF', maxWidth: '1200px', margin: '0 auto' }}>
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
            Pala, Kerala · Studio-only experience.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <StudioMap />
        </FadeUp>
      </section>
    </>
  );
}
