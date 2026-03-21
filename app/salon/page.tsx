"use client";

import { useState, useEffect } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

const categories = [
  { id: "haircut", label: "Haircut & Styling" },
  { id: "hair-coloring", label: "Hair Coloring" },
  { id: "hair-spa", label: "Hair Spa & Treatments" },
  { id: "facials", label: "Facials" },
  { id: "cleanup", label: "Cleanup & Detan" },
  { id: "pedicure-manicure", label: "Pedicure & Manicure" },
  { id: "gel-nails", label: "Gel Nails" },
  { id: "waxing", label: "Waxing" },
  { id: "threading", label: "Threading" },
  { id: "massages", label: "Massages" },
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
  { name: "Nix'ed Balayage / Highlights", price: "₹7,000+" },
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
  { name: "Hair Botox (Formaldehyde Free)", price: "₹6,000+", note: "60–70% straighter, lasts 40–60 washes" },
  { name: "Nanoplastia / Biotin (Formaldehyde Free)", price: "₹6,000+", note: "80–100% straighter, lasts 60–80 washes" },
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
const gelNatural = [
  { name: "Solid Polish Hand/Feet", price: "₹1,100", single: "₹650" },
  { name: "Neon Polish", price: "₹1,100", single: "₹650" },
  { name: "Glitter Polish", price: "₹1,250", single: "₹700" },
  { name: "Ombre / Special", price: "₹1,800", single: "₹1,200" },
  { name: "French Polish", price: "₹1,800", single: "₹1,200" },
  { name: "Gel with Dry Glitter", price: "₹1,600", single: "₹1,000" },
  { name: "Chrome / Cat Eye", price: "₹1,500", single: "₹850" },
  { name: "Dip Powder", price: "₹1,350", single: "₹850" },
  { name: "BIAB / Gel Overlay / Acrylic Overlay", price: "₹1,800", single: "₹1,050" },
];

const nailArt = [
  { name: "Nail Art", price: "₹150/finger" },
  { name: "Advanced Nail Art", price: "₹250/finger" },
  { name: "3D Art", price: "₹350/finger" },
  { name: "Jewellery", price: "₹200/finger" },
];

const gelExtensions = [
  { name: "New Set Form", price: "₹3,000", single: "₹1,650" },
  { name: "New Set Acrylic", price: "₹2,750", single: "₹1,500" },
  { name: "New Set Tip Gel", price: "₹2,750", single: "₹1,500" },
  { name: "Gel Refill", price: "₹2,500", single: "₹1,350" },
  { name: "Acrylic Refill", price: "₹2,500", single: "₹1,350" },
  { name: "Soft Gel", price: "₹2,600", single: "₹1,400" },
  { name: "Gum Gel", price: "₹3,250", single: "₹1,700" },
  { name: "In-Built French Extension", price: "₹3,750", single: "₹2,300" },
  { name: "In-Built Nail Art Extensions", price: "₹4,200", single: "₹2,800" },
  { name: "Filing Add-on", price: "₹500", single: "₹350" },
  { name: "Polish Removal", price: "₹550", single: "₹350" },
  { name: "Extension Removal", price: "₹950", single: "₹550" },
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
  items: { name: string; price: string; note?: string }[];
  note?: string;
}) {
  return (
    <div className="space-y-0">
      {items.map((s) => (
        <div
          key={s.name}
          className="flex items-baseline justify-between gap-4 py-2.5 border-b border-taupe/8"
        >
          <div>
            <span className="font-sans text-sm text-espresso/70">{s.name}</span>
            {s.note && (
              <span className="block font-sans text-xs text-taupe/60 mt-0.5">
                {s.note}
              </span>
            )}
          </div>
          <span className="font-sans text-sm font-medium text-espresso shrink-0">
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
      {/* ──────── HEADER ──────── */}
      <section className="pt-28 lg:pt-36 pb-8">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h1 className="font-serif font-light text-espresso text-4xl lg:text-5xl mb-3">
              Salon Services
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/60 mb-1">
              Hair · Makeup · Nails · Spa
            </p>
            <p className="font-sans text-sm text-taupe">
              Appointment recommended. Walk-ins welcome based on availability.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ──────── STICKY CATEGORY NAV ──────── */}
      <div className="sticky top-20 lg:top-24 z-30 bg-parchment/95 backdrop-blur-sm border-b border-taupe/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`shrink-0 px-4 py-1.5 text-[11px] font-sans font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                  activeCategory === cat.id
                    ? "text-espresso border-b-2 border-pink"
                    : "text-taupe hover:text-espresso"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ──────── SERVICE SECTIONS ──────── */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-20">
        {/* HAIRCUT & STYLING */}
        <section id="haircut" className="section-padding pb-16">
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

        {/* GEL NAILS */}
        <section id="gel-nails" className="section-padding pt-0 pb-16">
          <FadeUp>
            <p className="label-caps mb-6">Gel Nails — Natural Nails</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-3xl">
              <DualPriceList items={gelNatural} headers={["Both", "One Hand"]} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-6 max-w-2xl">
              <PriceList items={nailArt} />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10">
              <p className="label-caps mb-6">Gel Extensions</p>
              <div className="max-w-3xl">
                <DualPriceList
                  items={gelExtensions}
                  headers={["Full Set", "One Hand"]}
                />
              </div>
            </div>
          </FadeUp>
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
      </div>

      {/* ──────── SALON PERKS ──────── */}
      <section className="section-padding bg-pink-15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h2 className="font-serif font-light text-espresso text-2xl lg:text-3xl mb-10">
              The NIXTUDIO experience.
            </h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {[
              "Complimentary tea, coffee, or juice on all services.",
              "Complimentary food and drinks for services over 2 hours.",
              "Complimentary 10-minute leg massage for services over 2 hours.",
            ].map((text) => (
              <StaggerItem key={text}>
                <p className="font-sans text-sm text-espresso/70 leading-relaxed">
                  {text}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ──────── SALON BOOKING CTA ──────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <p className="font-sans text-sm text-taupe mb-6 max-w-lg">
              Scheduling an appointment in advance ensures we can give you our full attention.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/917034726402?text=Hi%2C%20I%27d%20like%20to%20book%20a%20salon%20appointment.%0AService%20required%3A%20%0APreferred%20date%20and%20time%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-3.5 bg-espresso text-parchment text-[11px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-espresso/90 transition-colors duration-300"
                id="salon-whatsapp-btn"
              >
                Book Appointment
              </a>
              <a
                href="tel:+917034726402"
                className="inline-flex items-center gap-2 text-sm font-sans text-espresso border-b border-espresso/40 pb-1 hover:border-espresso transition-colors duration-300"
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
