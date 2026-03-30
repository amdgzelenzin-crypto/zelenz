"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

const categories = [
  { id: "makeup", label: "Bridal & Event Makeup" },
  { id: "haircut", label: "Haircut & Styling" },
  { id: "hair-coloring", label: "Hair Coloring" },
  { id: "hair-spa", label: "Hair Spa & Treatments" },
  { id: "facials", label: "Facials" },
  { id: "cleanup", label: "Cleanup & Detan" },
  { id: "pedicure-manicure", label: "Pedicure & Manicure" },
  { id: "nail-lounge", label: "The Nail Lounge" },
  { id: "waxing", label: "Waxing" },
  { id: "threading", label: "Threading" },
  { id: "massages", label: "Massages" },
];

const makeupServices = [
  { name: "Bridal Makeup — Christian / Hindu / Muslim", price: "Starting at ₹27,500", note: "By Nikita Liby. Specialized long-wear HD and Humidity-resistant Airbrush 'Manavatty' aesthetics. Ask about our 'Happy Bride Story' sessions." },
  { name: "Engagement / Reception Styling", price: "From ₹14,500", note: "Nuanced 'Azhagu' looks optimized for", link: { href: '/bridal-makeup-pala', text: 'Pala' }, noteSuffix: "& Kottayam church/hall lighting." },
  { name: "Pre-Wedding / Post-Wedding Shoot", price: "₹12,000+", note: "Photography-focused 'Supermodel' aesthetics for outdoor and studio sessions." },
  { name: "Party & Guest Makeup", price: "₹4,500", note: "Elegant, sophisticated styling for bridesmaids and family members." },
  { name: "Trial Consultation", price: "Included", note: "Detailed technical skin and color analysis on day-of booking." },
];

/* ──── Category: Haircut ──── */
const haircutServices = [
  { name: "Creative Director (By Nikita)", price: "₹2,000" },
  { name: "Top Stylist", price: "₹1,350" },
  { name: "Basic Stylist", price: "₹550" },
  { name: "Kids Cut (Boys)", price: "₹300" },
  { name: "Fringe / Bangs", price: "₹300" },
  { name: "Men's Cut", price: "₹400" },
  { name: "Beard Shaping", price: "₹250" },
  { name: "Men's Cut + Beard", price: "₹600" },
];

const stylingHeaders = ["Service", "Short", "Medium", "Long", "XL"];
const stylingRows = [
  ["Wash & Blast Dry", "₹450", "₹600", "₹750", "₹900"],
  ["Wash & Blow Dry", "₹750", "₹900", "₹1,150", "₹1,350"],
  ["Wash, Blast Dry & Ironing", "₹1,000", "₹1,350", "₹1,800", "₹2,250"],
  ["Ironing", "₹800", "₹1,100", "₹1,650", "₹1,850"],
  ["Wash, Blow Dry & Tongs", "₹1,000", "₹1,350", "₹1,800", "₹2,250"],
  ["Tongs / Curling", "₹800", "₹1,100", "₹1,650", "₹1,850"],
];

/* ──── Category: Hair Coloring ──── */
const colorByNikita = [
  { name: "Nix'ed Balayage / Highlights", price: "₹7,000+", note: "Bleach-free ammonia-free hair coloring for a 'Supermodel' low-maintenance gloss finish. Ideal for Kerala's bright sunlight." },
  { name: "Streaky-age", price: "₹4,500+" },
  { name: "Peekabooo", price: "₹4,000+" },
  { name: "Peekabooo with Balayage", price: "₹7,500+" },
];

const colorBySenior = [
  { name: "Balayage / Highlights", price: "₹6,000+" },
  { name: "Partial / Half Highlights", price: "₹3,500+" },
  { name: "Ombre", price: "₹5,500+" },
  { name: "Global Color", price: "₹6,500+" },
  { name: "Streaks", price: "₹700/streak" },
  { name: "Block Colour", price: "₹900/block" },
  { name: "Just the Roots", price: "₹2,000+" },
  { name: "Ammonia Free (Men's)", price: "₹900+" },
  { name: "Men's Highlights", price: "₹3,500+" },
  { name: "Ammonia Free (Women's)", price: "₹2,000+" },
  { name: "Color Correction", price: "₹4,500+" },
  { name: "Add-on: Toning", price: "₹2,500+" },
  { name: "Add-on: Box Color/Henna Removal", price: "₹3,500+" },
];

/* ──── Category: Hair Spa ──── */
const spaHeaders = ["Treatment", "Short", "Medium", "Long", "XL"];
const spaRows = [
  ["Classic — Nourishing/Smoothing", "₹900", "₹1,100", "₹1,350", "₹1,750"],
  ["Premium — Nourishing/Smoothing", "₹1,250", "₹1,650", "₹1,850", "₹2,250"],
  ["Premium — Repairing", "₹1,250", "₹1,650", "₹1,850", "₹2,250"],
  ["Luxury — Coffee Spa", "₹1,750", "₹1,950", "₹2,250", "₹3,000"],
  ["Luxury — Keratin Spa", "₹1,900", "₹2,150", "₹2,550", "₹3,200"],
  ["Luxury — Japanese Lux + Dandruff", "₹2,250", "₹2,750", "₹3,200", "₹3,750"],
  ["Olaplex (with Chemical Treatment)", "₹1,350", "₹1,800", "₹2,250", "₹2,750"],
  ["Olaplex Standalone", "₹2,250", "₹2,750", "₹3,200", "₹3,700"],
];

const spaSingles = [
  { name: "Dandruff Ampule (add-on with spa)", price: "₹600" },
];

const hairTreatments = [
  { name: "Humidity-Resistant Hair Botox (Formaldehyde Free)", price: "₹6,000+", note: "Restoration and smoothing for 'Supermodel' silkiness. Lasts 40–60 washes." },
  { name: "Nanoplastia / Biotin (Formaldehyde Free)", price: "₹6,000+", note: "80–100% straighter, lasts 60–80 washes." },
  { name: "Permanent Hair Spa", price: "₹3,500+", note: "20–30% straighter, lasts ~15 washes" },
  { name: "Smoothening / Straightening Full", price: "₹5,000+" },
  { name: "Smoothening / Straightening Crown", price: "₹3,000+" },
  { name: "Smoothening / Straightening Fringes", price: "₹1,250+" },
  { name: "Dandruff Treatment Heavy", price: "₹3,200" },
  { name: "Dandruff Treatment Normal", price: "₹2,250" },
];

/* ──── Category: Facials ──── */
const classicFacials = [
  { name: "Brightening", price: "₹2,100" },
  { name: "Tan Removal", price: "₹2,100" },
  { name: "Chocolate", price: "₹2,200" },
  { name: "Acne Purification", price: "₹2,000" },
  { name: "Tangerine Whitening", price: "₹2,050" },
];

const premiumFacials = [
  { name: "Jamaican Skin Whitening", price: "₹2,800" },
  { name: "Ginger & Walnut Even Tone", price: "₹2,600" },
  { name: "Papaya Sensitive Skin", price: "₹2,800" },
  { name: "Oil Control", price: "₹2,300" },
  { name: "Anti Ageing", price: "₹2,450" },
  { name: "Hydrating & Smoothing", price: "₹3,000" },
  { name: "Pigmentation Treatment", price: "₹2,800" },
];

const luxuryFacials = [
  { name: "Vortex-Fusion HydraFacial", price: "₹7,500+", note: "FDA-approved clinical skin resurfacing optimized for humidity-prone Kerala skin." },
  { name: "Save the Date — Bridal Facial + Detan", price: "₹4,500" },
  { name: "Pigmentation & Even Tone", price: "₹3,750" },
  { name: "Acne Treatment & Oil Control", price: "₹3,250" },
  { name: "Anti Aging Brightening", price: "₹3,550" },
  { name: "Whitening Detan Combination", price: "₹3,300" },
];

/* ──── Category: Cleanup & Detan ──── */
const cleanupServices = [
  { name: "Normal / Combination Skin Cleanup", price: "₹1,350" },
  { name: "Pro Merge Dry Skin Cleanup", price: "₹1,800" },
  { name: "Pro Matte Oily Skin Cleanup", price: "₹1,800" },
  { name: "Detan Face", price: "₹550" },
  { name: "Detan Hands", price: "₹850" },
  { name: "Detan Legs", price: "₹1,250" },
  { name: "Detan Back / Front", price: "₹850" },
  { name: "Detan Full Body", price: "₹3,200" },
];

/* ──── Category: Pedicure & Manicure ──── */
const pedicures = [
  { name: "Classic", price: "₹1,200" },
  { name: "Premium Milkshake", price: "₹1,800" },
  { name: "Ice-Cream Radiance", price: "₹2,250" },
  { name: "Jelly Hydra-Boost", price: "₹2,500" },
  { name: "Cocktail Brightening Algae", price: "₹2,750" },
];

const manicures = [
  { name: "Classic Manicure with Polish", price: "₹650" },
  { name: "Normal Polish (Hand or Feet)", price: "₹200" },
];

const pmCombos = [
  { name: "Classic P&M", price: "₹1,800" },
  { name: "Premium Milkshake P&M", price: "₹2,250" },
  { name: "Ice-Cream Radiance P&M", price: "₹2,950" },
  { name: "Jelly Hydra-Boost P&M", price: "₹3,200" },
  { name: "Cocktail Brightening Algae P&M", price: "₹3,600" },
];

/* ──── Category: Gel Nails ──── */
const nlGel = [
  { name: "Solid Polish", both: "₹1,100", one: "₹650" },
  { name: "Neon Polish", both: "₹1,100", one: "₹650" },
  { name: "Glitter Polish", both: "₹1,250", one: "₹700" },
  { name: "Ombre / Special", both: "₹1,800", one: "₹1,200" },
  { name: "French Polish", both: "₹1,800", one: "₹1,200" },
  { name: "Gel with Dry Glitter", both: "₹1,600", one: "₹1,000" },
  { name: "Chrome / Cat Eye", both: "₹1,500", one: "₹850" },
  { name: "Dip Powder", both: "₹1,350", one: "₹850" },
  { name: "BIAB / Gel / Acrylic Overlay", both: "₹1,800", one: "₹1,050" }
];

const nlArt = [
  { name: "Nail Art", price: "₹150/finger" },
  { name: "Advanced Nail Art", price: "₹250/finger" },
  { name: "3D Art", price: "₹350/finger" },
  { name: "Jewellery", price: "₹200/finger" }
];

const nlExt = [
  { name: "New Set Form", both: "₹3,000", one: "₹1,650" },
  { name: "New Set Acrylic", both: "₹2,750", one: "₹1,500" },
  { name: "New Set Tip Gel", both: "₹2,750", one: "₹1,500" },
  { name: "Gel Refill", both: "₹2,500", one: "₹1,350" },
  { name: "Acrylic Refill", both: "₹2,500", one: "₹1,350" },
  { name: "Soft Gel", both: "₹2,600", one: "₹1,400" },
  { name: "Gum Gel", both: "₹3,250", one: "₹1,700" },
  { name: "In-Built French", both: "₹3,750", one: "₹2,300" },
  { name: "In-Built Nail Art", both: "₹4,200", one: "₹2,800" },
  { name: "Filing (Add-on)", both: "₹500", one: "₹350" }
];

const nlRem = [
  { name: "Polish Removal", both: "₹550", one: "₹350" },
  { name: "Extension Removal", both: "₹950", one: "₹550" }
];

/* ──── Category: Waxing ──── */
const bodyWaxing = [
  { name: "Half Legs", price: "₹650" },
  { name: "Full Legs", price: "₹1,200" },
  { name: "Full Hands", price: "₹850" },
  { name: "Underarms", price: "₹350" },
  { name: "Full Back", price: "₹1,050" },
  { name: "Full Front", price: "₹850" },
  { name: "Full Body", price: "₹3,900" },
  { name: "Bikini", price: "₹2,050" },
];

const faceWaxing = [
  { name: "Eyebrows", price: "₹200" },
  { name: "Upper Lip", price: "₹120" },
  { name: "Forehead", price: "₹120" },
  { name: "Chin", price: "₹90" },
  { name: "Nose", price: "₹90" },
  { name: "Side Burns", price: "₹250" },
  { name: "Full Face", price: "₹650" },
];

/* ──── Category: Threading ──── */
const threadingServices = [
  { name: "Eyebrows", price: "₹90" },
  { name: "Upper Lip", price: "₹40" },
  { name: "Forehead", price: "₹70" },
  { name: "Chin", price: "₹40" },
  { name: "Side Burns", price: "₹90" },
];

/* ──── Category: Massages ──── */
const massageServices = [
  { name: "Head Oil Massage with Hair Wash", price: "₹1,200" },
  { name: "Head Oil Massage (25 mins)", price: "₹700" },
  { name: "Leg Massage (20 mins)", price: "₹550" },
  { name: "Hand Massage (20 mins)", price: "₹400" },
  { name: "Leg & Hand Massage (30 mins)", price: "₹900" },
];

/* ────────────────────────────────────────
   HELPER COMPONENTS
   ──────────────────────────────────────── */

function PriceList({
  items,
  note,
}: {
  items: { name: string; price: string; note?: string; link?: { href: string; text: string }; noteSuffix?: string }[];
  note?: string;
}) {
  return (
    <div className="space-y-0">
      {items.map((s) => (
        <div
          key={s.name}
          className="service-row"
        >
          <div>
            <span className="service-row-name">{s.name}</span>
            {(s.note || s.link) && (
              <span className="block font-sans text-xs text-taupe/60 mt-0.5">
                {s.note}
                {s.link && (
                  <Link href={s.link.href} className='text-[#B76E79] underline decoration-[#B76E79]/50 hover:decoration-[#B76E79] transition-colors'>
                    {s.link.text}
                  </Link>
                )}
                {s.noteSuffix}
              </span>
            )}
          </div>
          <span className="service-row-price shrink-0">
            {s.price}
          </span>
        </div>
      ))}
      {note && (
        <p className="text-xs font-sans text-taupe/60 mt-4">{note}</p>
      )}
    </div>
  );
}

function DualPriceList({
  items,
  headers,
}: {
  items: { name: string; price: string; single: string }[];
  headers: [string, string];
}) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 py-2 border-b border-taupe/20 mb-1">
        <span className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-taupe/60">
          Service
        </span>
        <span className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-taupe/60 text-right w-20">
          {headers[0]}
        </span>
        <span className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-taupe/60 text-right w-20">
          {headers[1]}
        </span>
      </div>
      {items.map((s) => (
        <div
          key={s.name}
          className="grid grid-cols-[1fr_auto_auto] gap-4 py-2 border-b border-taupe/8"
        >
          <span className="font-sans text-sm text-espresso/70">{s.name}</span>
          <span className="font-sans text-sm font-medium text-espresso w-20 text-right">
            {s.price}
          </span>
          <span className="font-sans text-sm text-taupe w-20 text-right">
            {s.single}
          </span>
        </div>
      ))}
    </div>
  );
}

function LengthTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full min-w-[500px]">
        <caption className="sr-only">Hair service lengths and pricing options</caption>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className={`text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-taupe/60 pb-3 ${
                  h === headers[0] ? "text-left" : "text-right"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-taupe/8">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-2.5 font-sans text-sm ${
                    ci === 0
                      ? "text-espresso/70 text-left"
                      : "text-espresso font-medium text-right"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NailTable({
  title,
  headers,
  rows,
  singleCol = false
}: {
  title: string;
  headers: string[];
  rows: any[];
  singleCol?: boolean;
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "32px",
        marginBottom: "24px",
        border: "1px solid rgba(183,110,121,0.15)",
        boxShadow: "0 2px 16px rgba(183,110,121,0.06)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "#B76E79",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </p>
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: singleCol ? "auto" : "480px", tableLayout: "fixed" }}>
          <caption className="sr-only">{title} pricing and services</caption>
          <thead>
            <tr style={{ background: "rgba(183,110,121,0.10)" }}>
              <th
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "#4E4247",
                  padding: "10px 16px",
                  textAlign: "left",
                  textTransform: "uppercase",
                  width: singleCol ? "auto" : "55%",
                }}
              >
                {headers[0]}
              </th>
              {!singleCol && headers.slice(1).map((h, i) => (
                <th
                  key={i}
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "#4E4247",
                    padding: "10px 16px",
                    textAlign: "right",
                    textTransform: "uppercase",
                    width: "22.5%",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="hover:!bg-[rgba(253,232,232,0.50)] transition-colors duration-200"
                style={{
                  background: i % 2 === 0 ? "#FFFFFF" : "rgba(253,232,232,0.20)",
                  borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(183,110,121,0.15)",
                }}
              >
                <td
                  style={{
                    padding: "14px 16px",
                    textAlign: "left",
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "15px",
                    color: "#4E4247",
                    fontWeight: 400,
                  }}
                >
                  {row.name}
                </td>
                {singleCol ? (
                  <td
                    style={{
                      padding: "14px 16px",
                      textAlign: "right",
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "15px",
                      color: "#B76E79",
                      fontWeight: 500,
                    }}
                  >
                    {row.price}
                  </td>
                ) : (
                  <>
                    <td
                      style={{
                        padding: "14px 16px",
                        textAlign: "right",
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "15px",
                        color: "#B76E79",
                        fontWeight: 500,
                      }}
                    >
                      {row.both}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        textAlign: "right",
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "15px",
                        color: "#B76E79",
                        fontWeight: 500,
                      }}
                    >
                      {row.one}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   SALON PAGE
   ──────────────────────────────────────── */

export default function SalonPage() {
  const [activeCategory, setActiveCategory] = useState("haircut");

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (const section of sections.reverse()) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 relative overflow-hidden" style={{ background: "#FDE8E8" }}>
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: "linear-gradient(135deg, rgba(212,160,85,0.15) 0%, rgba(183,110,121,0.10) 50%, transparent 100%)" 
          }} 
        />
        <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <h1 className="sr-only">
                Salon in Pala, Kerala — Hair, Nails, Facials & Spa at NIXTUDIO
              </h1>
              <FadeUp>
                <h2 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-4">
                  Services
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="font-sans text-espresso/60 mb-2">
                  Hair · Nails · Facials · Makeup · Spa · Waxing
                </p>
                <p className="font-sans text-sm text-taupe">
                  Appointment recommended. Walk-ins welcome based on availability.
                </p>
                {/* ──────── GEO BLUF (Generative Engine Optimization) ──────── */}
                <p className="font-sans text-sm text-espresso/80 mt-6 max-w-lg leading-relaxed">
                  <strong>NIXTUDIO is <Link href='/bridal-makeup-pala' className='text-[#B76E79] underline decoration-[#B76E79]/50 hover:decoration-[#B76E79] transition-colors'>Pala&rsquo;s</Link> premier high-end unisex salon</strong>, specializing in FDA-approved Vortex-Fusion HydraFacial, humidity-resistant Hair Botox, and bleach-free ammonia-free hair coloring with a &lsquo;Supermodel&rsquo; low-maintenance gloss finish. The leader in medical-grade beauty in the Kottayam district.
                </p>
              </FadeUp>
            </div>
            <FadeUp className="lg:col-span-7" delay={0.15}>
              <div 
                className="w-full relative overflow-hidden rounded-xl h-[260px] lg:h-[400px] skeleton"
              >
                <Image
                  src="/images/studio/nixtudio-studio-signage-pala-kerala.webp"
                  alt="Nix-Studio-Pala-Salon-Entrance-Makeup-Artist-Kottayam — Professional aesthetics and makeup studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                  fetchPriority="high"
                  loading="eager"
                  quality={85}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──────── STICKY CATEGORY NAV ──────── */}
      <div className="sticky top-20 lg:top-24 z-30 border-b" style={{ background: "rgba(255,245,247,0.95)", backdropFilter: "blur(12px)", borderColor: "#FFCDD4" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`shrink-0 px-4 py-1.5 text-[11px] font-sans font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                  activeCategory === cat.id
                    ? "border-b-2"
                    : ""
                }`}
                style={{
                  color: activeCategory === cat.id ? "#C4903A" : "#A86070",
                  borderColor: activeCategory === cat.id ? "#C4903A" : "transparent",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ──────── SERVICE SECTIONS ──────── */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-20">
        
        {/* BRIDAL & EVENT MAKEUP SILO */}
        <section id="makeup" className="section-padding pb-16">
          <FadeUp>
            <p className="label-caps mb-2">Makeup Artistry — By Nikita</p>
            <p className="text-xs font-sans text-taupe/60 mb-8 max-w-lg leading-relaxed">
              Specialized high-definition bridal and occasion styling. We explicitly address nuanced parameters like religious bridal aesthetics and event-specific lighting requirements.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={makeupServices} />
            </div>
            <div className="mt-8">
              <Link href="/bridal" className="text-sm font-sans text-[#B76E79] border-b border-[#B76E79]/30 hover:border-[#B76E79] transition-colors">
                View Detailed Bridal Packages →
              </Link>
            </div>
          </FadeUp>
        </section>

        {/* HAIRCUT & STYLING */}
        <section id="haircut" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-2">Haircut</p>
            <p className="text-xs font-sans text-taupe/60 mb-8">
              All haircuts include consultation, wash, cut and style
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={haircutServices} />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12">
              <p className="label-caps mb-6">Styling & Hair Setting</p>
              <div className="max-w-3xl">
                <LengthTable headers={stylingHeaders} rows={stylingRows} />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* HAIR COLORING */}
        <section id="hair-coloring" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-2">Hair Coloring — By Nikita</p>
            <p className="text-xs font-sans text-taupe/60 mb-8">Bleach Free</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={colorByNikita} />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12">
              <p className="label-caps mb-6">Hair Coloring — By Senior Stylist</p>
              <div className="max-w-2xl">
                <PriceList
                  items={colorBySenior}
                  note="+ denotes price increases with length and thickness after consultation"
                />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* HAIR SPA & TREATMENTS */}
        <section id="hair-spa" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Hair Spa</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-3xl">
              <LengthTable headers={spaHeaders} rows={spaRows} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="max-w-2xl mt-4">
              <PriceList
                items={spaSingles}
                note="All spa done after consultation only"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-12">
              <p className="label-caps mb-6">Hair Treatments</p>
              <div className="max-w-2xl">
                <PriceList
                  items={hairTreatments}
                  note="+ = increases with length/thickness after consultation"
                />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* FACIALS */}
        <section id="facials" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Classic Facial</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={classicFacials} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10">
              <p className="label-caps mb-6">Premium Facial</p>
              <div className="max-w-2xl">
                <PriceList items={premiumFacials} />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10">
              <p className="label-caps mb-6">Luxury Facial</p>
              <div className="max-w-2xl">
                <PriceList items={luxuryFacials} />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* CLEANUP & DETAN */}
        <section id="cleanup" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Cleanup & Detan</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={cleanupServices} />
            </div>
          </FadeUp>
        </section>

        {/* PEDICURE & MANICURE */}
        <section id="pedicure-manicure" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Pedicure</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={pedicures} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10">
              <p className="label-caps mb-6">Manicure</p>
              <div className="max-w-2xl">
                <PriceList items={manicures} />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10">
              <p className="label-caps mb-6">Pedicure & Manicure Combos</p>
              <div className="max-w-2xl">
                <PriceList items={pmCombos} />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* THE NAIL LOUNGE */}
        <section
          id="nail-lounge"
          className="marble-header relative overflow-hidden"
          style={{
            padding: "clamp(60px, 8vw, 80px) clamp(20px, 5vw, 48px)",
          }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .marble-header {
              background-color: #ffffff;
              background-image: 
                linear-gradient(to right, rgba(212,160,85,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(212,160,85,0.05) 1px, transparent 1px),
                radial-gradient(ellipse at 80% 20%, rgba(249,145,159,0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 20% 80%, rgba(212,160,85,0.1) 0%, transparent 50%);
              background-size: 40px 40px, 40px 40px, 100% 100%, 100% 100%;
            }
            .marble-header::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 60px;
              background: #FDE8E8;
              border-radius: 50% 50% 0 0 / 100% 100% 0 0;
              pointer-events: none;
            }
          `}} />
          {/* Decorative Accents */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "250px", height: "250px", background: "conic-gradient(from 200deg at 80% 20%, rgba(212,160,85,0.25) 0deg, rgba(183,110,121,0.20) 60deg, rgba(240,180,160,0.15) 120deg, transparent 180deg)", borderRadius: "0 0 0 100%", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "180px", height: "180px", background: "radial-gradient(ellipse at 20% 80%, rgba(183,110,121,0.18) 0%, rgba(212,160,85,0.12) 40%, transparent 70%)", borderRadius: "100% 0 0 0", pointerEvents: "none", zIndex: 0 }} />

          <div style={{ maxWidth: "1024px", margin: "0 auto", position: "relative", zIndex: 10 }}>
            <FadeUp>
              <div
                className="relative pl-6 mb-12"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rosegold-shimmer rounded-full" />
                <h2
                  className="gold-foil-text"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(32px, 5vw, 56px)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  THE NAIL LOUNGE
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-script), Georgia, serif",
                    fontSize: "20px",
                    color: "#B76E79",
                    fontStyle: "italic",
                    marginTop: "8px",
                  }}
                >
                  by NIXTUDIO
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <NailTable
                title="GEL / ACRYLIC ON NATURAL NAILS"
                headers={["Service", "Both/Feet", "One Hand"]}
                rows={nlGel}
              />
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <NailTable
                title="NAIL ART (PER FINGER)"
                headers={["Nail Art", ""]}
                rows={nlArt}
                singleCol
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <NailTable
                title="EXTENSIONS"
                headers={["Service", "Both Hands", "One Hand"]}
                rows={nlExt}
              />
            </FadeUp>

            <FadeUp delay={0.25}>
              <NailTable
                title="REMOVAL"
                headers={["Service", "Both/Feet", "One Hand"]}
                rows={nlRem}
              />
            </FadeUp>
          </div>
        </section>

        {/* WAXING */}
        <section id="waxing" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-2">Body Waxing</p>
            <p className="text-xs font-sans text-taupe/60 mb-6">Rica</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={bodyWaxing} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-10">
              <p className="label-caps mb-2">Face Waxing</p>
              <p className="text-xs font-sans text-taupe/60 mb-6">Brazilian</p>
              <div className="max-w-2xl">
                <PriceList items={faceWaxing} />
              </div>
            </div>
          </FadeUp>
        </section>

        {/* THREADING */}
        <section id="threading" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Threading</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={threadingServices} />
            </div>
          </FadeUp>
        </section>

        {/* MASSAGES */}
        <section id="massages" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Head & Body Massages</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl">
              <PriceList items={massageServices} />
            </div>
          </FadeUp>
        </section>
        {/* ──────── INVESTMENT TIERS ──────── */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <FadeUp>
              <p className="label-caps mb-4">Pricing Transparency</p>
              <h2 className="font-serif font-light text-espresso text-3xl lg:text-4xl mb-12">Investment Tiers</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Premium Bridal", price: "₹27,500", desc: "Starting price for HD/Airbrush packages including styling and draping." },
                { title: "Engagement Styling", price: "₹14,500", desc: "Sophisticated 'Azhagu' looks for your first ceremony." },
                { title: "Clinical Aesthetics", price: "₹7,500", desc: "Starting price for FDA-approved Vortex-Fusion HydraFacial treatments." }
              ].map((tier, i) => (
                <FadeUp key={tier.title} delay={i * 0.1}>
                  <div className="p-8 border border-taupe/15 rounded-2xl hover:border-taupe/30 transition-colors">
                    <h3 className="font-sans text-[11px] tracking-[0.2em] text-[#B76E79] mb-2 uppercase">{tier.title}</h3>
                    <div className="text-3xl font-serif text-espresso mb-4">{tier.price}<span className="text-sm font-sans text-taupe/60 ml-1">+</span></div>
                    <p className="font-sans text-sm text-taupe/70 leading-relaxed">{tier.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ──────── SALON PERKS ──────── */}
      <section className="section-padding section-gradient-pink">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-serif font-light text-white text-2xl lg:text-3xl mb-10">The NIXTUDIO experience.</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {[
              "Complimentary tea, coffee, or juice on all services.",
              "Complimentary food and drinks for services over 2 hours.",
              "Complimentary 10-minute leg massage for services over 2 hours.",
            ].map((text) => (
              <StaggerItem key={text}>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>{text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── SALON BOOKING CTA ──────── */}
      <section className="section-padding section-gradient-deep">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="font-sans text-sm mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Scheduling an appointment in advance ensures we can give you our full attention.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20book%20a%20salon%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full text-[11px] font-sans font-medium tracking-[0.12em] uppercase"
                style={{ background: "#25D366", color: "#FFFFFF" }}
                id="salon-whatsapp-btn"
              >
                Book Appointment
              </a>
              <a
                href="tel:+917034726402"
                className="inline-flex items-center gap-2 text-sm font-sans border-b pb-1"
                style={{ color: "rgba(255,255,255,0.80)", borderColor: "rgba(255,255,255,0.40)" }}
              >
                Call to Schedule →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
