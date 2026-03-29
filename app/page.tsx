"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { blogPosts } from "@/lib/blog";
import { FadeUp } from "@/components/ui/AnimationWrapper";
import { useLoading } from "@/contexts/LoadingContext";

// Dynamic imports for heavy components
const ReviewMarquee = dynamic(() => import("@/components/ui/ReviewMarquee"), {
  ssr: false,
  loading: () => null,
});

const StatCounters = dynamic(() => import("@/components/ui/StatCounters"), {
  ssr: false,
  loading: () => null,
});

const GoogleMapsEmbed = dynamic(() => import("@/components/ui/GoogleMapsEmbed"), {
  ssr: false,
  loading: () => null,
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
    sub: "Exclusively designed Christian, Hindu, and Muslim bridal aesthetics.",
    link: "/bridal",
    linkText: "The Bridal Edit →",
    image: "/images/gallery/hd-christian-bridal-makeup-look-pala.webp",
    placeholder: "#F9C8C8",
    offset: 0,
    gradient: "linear-gradient(to bottom, rgba(249,145,159,0.15) 0%, rgba(61,26,31,0.75) 100%)",
  },
  {
    tag: "PARTY & GUEST MAKEUP",
    heading: "Party &\nGuests",
    sub: "Sophisticated engagement and reception styling.",
    link: "/party",
    linkText: "Party Makeup →",
    image: "/images/elegant-reception-party-makeup-pala.webp",
    placeholder: "#F4A8B0",
    offset: 40,
    gradient: "linear-gradient(to bottom, rgba(212,160,85,0.15) 0%, rgba(61,26,31,0.75) 100%)",
  },
  {
    tag: "HAIR · NAILS · SPA",
    heading: "Services",
    sub: "Premium hair styling and luxury gel nail lounge.",
    link: "/services",
    linkText: "Services →",
    image: "/images/studio/nixtudio-studio-signage-pala-kerala.webp",
    placeholder: "#EE8898",
    offset: 0,
    gradient: "linear-gradient(to bottom, rgba(183,110,121,0.20) 0%, rgba(61,26,31,0.75) 100%)",
  },
];
const heroImages = [
  "/images/premium-bridal-makeup-studio-pala-kerala-hero.webp",
  "/images/hd-bridal-makeup-artist-pala-kottayam.webp",
  "/images/traditional-kerala-bridal-styling-pala.webp",
  "/images/studio/premium-makeup-studio-interior-kerala.webp",
  "/images/studio/nixtudio-luxury-salon-interior-pala.webp",
  "/images/studio/bridal-prep-suite-pala-kottayam.webp",
  "/images/studio/luxury-hair-spa-station-pala.webp",
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState<number[]>([0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => {
        const next = (prev + 1) % heroImages.length;
        setMounted((m: number[]) => m.includes(next) ? m : [...m, next]);
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
              alt={
                i === 0 ? "Nix-Studio-Pala-Manavatty-Bridal-Makeup-Artist-Kottayam — Premium studio interior" :
                i === 1 ? "Nix-Studio-Pala-Christian-Bridal-Makeup-Look-Makeup-Artist-Kottayam — Flawless 'Azhagu' styling" :
                i === 2 ? "Nix-Studio-Pala-Traditional-Hindu-Wedding-Makeup-Artist-Kottayam — Authentic temple bridal look" :
                i === 3 ? "Nix-Studio-Pala-Luxury-Salon-Spa-Service-Kottayam — Advanced facial and hair care" :
                i === 4 ? "Nix-Studio-Pala-Bleach-Free-Hair-Coloring-Service-Kottayam — Professional salon services" :
                i === 5 ? "Nix-Studio-Pala-Vortex-Fusion-HydraFacial-Service-Kottayam — Medical-grade skin care" :
                "Nix-Studio-Pala-Bridal-Prep-Suite-Makeup-Artist-Kottayam — Exclusive private bridal dressing lounge"
              }
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover object-center"
              sizes="100vw"
              quality={i === 0 ? 90 : 85}
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
          alt={`Nix-Studio-Pala-${card.heading}-Service-Makeup-Artist-Kottayam — Specialized 'Manavatty' and 'Azhagu' styling`}
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
  const { isLoading, isReady } = useLoading();

  // Don't render content until loader is ready or if loading is complete
  if (!isReady) {
    return null;
  }

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

          <FadeUp delay={0.1}>
            <h1
              aria-label="Bridal Makeup & Salon in Pala, Kerala — NIXTUDIO by Nikita Liby. Every face. Carefully considered."
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(48px, 9vw, 92px)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "#FFFFFF",
              }}
            >
              Every face. <br />
              Carefully considered.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.6,
                marginBottom: "40px",
              }}
            >
              Bridal makeup done exclusively by Nikita.
            </p>
          </FadeUp>

          {/* ──────── GEO BLUF (Hidden for pure visual aesthetic) ──────── */}
          <div className="sr-only">
            <strong>NIXTUDIO by Nikita Liby</strong> is the premier bridal makeup studio and luxury salon in Pala, Kerala, specializing in international-standard HD and Airbrush bridal aesthetics for Christian, Hindu, and Muslim weddings. With over 6 years of professional experience and having personally styled more than 500 brides across Pala, Kottayam, Changanacherry, and greater Kerala, Nikita Liby offers exclusive one-on-one bridal consultations and personalized makeup applications. Our comprehensive services include engagement makeup, wedding day bridal styling, reception makeup, party makeup for guests, advanced hair treatments, bleach-free hair coloring, gel nail extensions, and luxury spa services. The studio features state-of-the-art facilities including a private bridal prep suite, advanced skincare treatments like Vortex Fusion HydraFacial, and uses only premium, FDA-approved products. Located at Moozhayil House on Thodupuzha Road in Pala, our salon serves clients throughout Kerala with specialized expertise in traditional Kerala temple jewelry makeup, humidity-resistant techniques for tropical weather, and customized color matching for various skin tones and lighting conditions. Book your appointment with the most sought-after makeup artist in Central Kerala.
          </div>

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
                  src="/images/nikita-liby-professional-makeup-artist-pala.webp"
                  alt="Nix-Studio-Pala-Nikita-Liby-Makeup-Artist-Kottayam — Founder and Head MUA specializing in 'Supermodel' aesthetics"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-[rgba(61,21,32,0.1)] mb-16">
            <FadeUp>
              <h4 style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#B76E79", textTransform: "uppercase", marginBottom: "16px" }}>Advanced Skin Prep</h4>
              <p style={{ fontFamily: "var(--font-body), serif", fontSize: "14px", color: "#3D1520", lineHeight: "1.6" }}>
                Our proprietary 7-step hydration protocol ensures your base remains flawless and luminous through 16+ hours of Kerala's intensity and humidity.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h4 style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#B76E79", textTransform: "uppercase", marginBottom: "16px" }}>Facial Architecture</h4>
              <p style={{ fontFamily: "var(--font-body), serif", fontSize: "14px", color: "#3D1520", lineHeight: "1.6" }}>
                We use high-definition contouring and highlight placement to naturally refine facial structure, specifically optimized for multi-angle cinematic wedding photography.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h4 style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#B76E79", textTransform: "uppercase", marginBottom: "16px" }}>Pigment Sync</h4>
              <p style={{ fontFamily: "var(--font-body), serif", fontSize: "14px", color: "#3D1520", lineHeight: "1.6" }}>
                Scientific color theory mapping ensures your makeup undertones harmonize perfectly with specific gold temple jewelry and varied ceremonial lighting.
              </p>
            </FadeUp>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "32px" }}>
            {[
              { src: "/images/gallery/hd-christian-bridal-makeup-look-pala.webp", alt: "Nix-Studio-Pala-Christian-Bridal-Makeup-Makeup-Artist-Kottayam — HD finish" },
              { src: "/images/gallery/traditional-hindu-wedding-makeup-kottayam.webp", alt: "Nix-Studio-Pala-Hindu-Wedding-Makeup-Makeup-Artist-Kottayam — Traditional styling" },
              { src: "/images/gallery/south-indian-temple-wedding-makeup-pala.webp", alt: "Nix-Studio-Pala-Temple-Wedding-Makeup-Makeup-Artist-Kottayam — Authentic Azhagu" },
              { src: "/images/gallery/flawless-engagement-reception-styling-pala.webp", alt: "Nix-Studio-Pala-Engagement-Reception-Styling-Makeup-Artist-Kottayam" },
              { src: "/images/gallery/bridesmaid-party-makeup-styling-pala.webp", alt: "Nix-Studio-Pala-Party-Makeup-Guest-Styling-Makeup-Artist-Kottayam" },
              { src: "/images/gallery/gel-nail-extensions-pala-kottayam.webp", alt: "Nix-Studio-Pala-Gel-Nail-Extensions-Lounge-Makeup-Artist-Kottayam" }
            ].map((img, i) => (
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
                  src={img.src}
                  alt={img.alt}
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
            <Link href="/gallery" className="btn-outline-gold">View Full Portfolio →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ──── 5.5. LATEST FROM THE JOURNAL ──── */}
      <section className="section-padding bg-white">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>
          <FadeUp>
            <div style={{ position: "relative", height: "300px", borderRadius: "24px", overflow: "hidden", marginBottom: "60px" }}>
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Beauty journal and makeup trends editorial"
                fill
                className="object-cover"
                sizes="100vw"
                quality={80}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(61,26,31,0.1) 0%, rgba(61,26,31,0.3) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <h2 style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(36px, 6vw, 64px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "16px"
                  }}>
                    Beauty Insights
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "16px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.9
                  }}>
                    Expert Tips & Latest Trends
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <header style={{ marginBottom: "60px" }}>
            <FadeUp>
              <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#B76E79", textTransform: "uppercase", marginBottom: "12px" }}>
                LEARNINGS & TRENDS
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, fontStyle: "italic", color: "#3D1520", lineHeight: 1.2 }}>
                From the <em>Journal.</em>
              </h2>
            </FadeUp>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {blogPosts.slice(0, 3).map((post, idx) => (
              <FadeUp key={post.slug} delay={idx * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block text-decoration-none">
                  <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: "24px", overflow: "hidden", marginBottom: "24px" }}>
                    <Image
                      src={post.image}
                      alt={`Nix-Studio-Pala-${post.title.replace(/\s+/g, '-')}-Makeup-Artist-Kottayam`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#B76E79", textTransform: "uppercase", marginBottom: "12px" }}>
                    {post.category}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "24px", color: "#3D1520", marginBottom: "12px", lineHeight: "1.3" }} className="group-hover:text-[#B76E79] transition-colors">
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body), serif", fontSize: "15px", color: "rgba(61,21,32,0.60)", lineHeight: "1.7", marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                  <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "#3D1520", fontWeight: 500, borderBottom: "1px solid #D4A055", paddingBottom: "4px" }}>
                    Read Article
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
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
          <div className="w-full h-auto min-h-[400px]">
            <GoogleMapsEmbed />
          </div>
        </FadeUp>
      </section>
    </>
  );
}
