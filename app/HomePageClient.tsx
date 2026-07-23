"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";
import {
  Sparkles,
  Compass,
  Eye,
  Heart,
  Star,
  Smile,
  ShieldCheck,
  Check,
  Play,
  Phone,
  MapPin,
  Clock,
  Mail,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import type { GalleryItem } from "@/lib/gallery-utils";

// Dynamic imports for heavy components
const ReviewMarquee = dynamic(
  () => import("@/components/ui/ReviewMarquee")
    .then(mod => ({ default: mod.default || mod }))
    .catch(() => ({ default: () => <div className="text-center py-8">Reviews loading...</div> })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse h-32 rounded-lg mb-8" style={{background:'#1a1a1a'}}></div>,
  }
);

const GoogleMapsEmbed = dynamic(
  () => import("@/components/ui/GoogleMapsEmbed")
    .then(mod => ({ default: mod.default || mod }))
    .catch(() => ({ default: () => <div className="text-center py-8">Map loading...</div> })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse h-64 rounded-lg mb-8" style={{background:'#1a1a1a'}}></div>,
  }
);

/* ──────────────────────────────────────
   SERVICES DATA
   ────────────────────────────────────── */
const serviceCategories = [
  {
    id: "hair-lounge",
    label: "Hair Lounge",
    desc: "Premium cuts, styling, coloring, and restorative spa treatments.",
    services: [
      { name: "Haircut & Blast Dry", price: "₹450" },
      { name: "Root Touch-up", price: "₹2,000" },
      { name: "Global Hair Color", price: "₹6,500" },
      { name: "Luxury Hair Spa", price: "₹1,250" },
      { name: "Creative Styling", price: "₹1,500" }
    ]
  },
  {
    id: "skin-face",
    label: "Skin & Face",
    desc: "Revitalizing skin cleanups, luxury facials, and hydrating therapy.",
    services: [
      { name: "Hydra-Boost Cleanup", price: "₹1,350" },
      { name: "Skin Brightening Facial", price: "₹2,100" },
      { name: "Premium Detan Treatment", price: "₹550" },
      { name: "Luxury Bridal Facial", price: "₹4,500" }
    ]
  },
  {
    id: "nail-lounge",
    label: "Nail Lounge",
    desc: "Chic gel polishes, acrylic extensions, and relaxing nail care.",
    services: [
      { name: "Gel Polish Application", price: "₹1,100" },
      { name: "Gel Nail Extensions", price: "₹2,750" },
      { name: "Classic Pedicure", price: "₹1,200" },
      { name: "Classic Manicure", price: "₹650" }
    ]
  },
  {
    id: "premium-grooming",
    label: "Premium Grooming",
    desc: "Grooming, hair shaping, and luxury makeovers for special occasions.",
    services: [
      { name: "Beard Shaping & Trim", price: "₹250" },
      { name: "Premium Groom Makeup", price: "₹7,500" },
      { name: "HD Bridal Makeup", price: "₹27,500" },
      { name: "Saree Draping & Styling", price: "₹3,000" }
    ]
  }
];


/* ──────────────────────────────────────
   VIDEOS DATA
   ────────────────────────────────────── */
const galleryVideos = [
  {
    id: "tour",
    title: "Luxury Salon Tour",
    desc: "Step inside Zelenz Unisex Saloon and experience the premium ambiance of our Pala and Kottayam lounges.",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Fallback embed link
  },
  {
    id: "bridal",
    title: "Signature Bridal Edit",
    desc: "A closer look at our humidity-resistant HD makeup and styling process for a modern Kerala bride.",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "hair",
    title: "Precision Balayage & Hair Botox",
    desc: "Watch our master stylists craft gorgeous, low-maintenance color blends and healthy, silky hair transformations.",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

/* ──────────────────────────────────────
   LIGHTBOX SUB-COMPONENT
   ────────────────────────────────────── */
function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.96)" }}
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition-colors z-10" onClick={onClose} aria-label="Close">
        <X size={28} />
      </button>
      
      <button 
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-all p-3 z-10 hover:scale-110" 
        onClick={(e) => { e.stopPropagation(); onPrev(); }} 
        aria-label="Previous"
      >
        <ChevronLeft size={44} strokeWidth={1.5} />
      </button>

      <div className="flex items-center justify-center max-h-[80vh] max-w-[85vw]" onClick={(e) => e.stopPropagation()}>
        {item.src ? (
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image 
              src={item.src} 
              alt={item.alt} 
              width={1000} 
              height={750} 
              className="object-contain max-h-[80vh] max-w-[85vw] w-auto h-auto" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-center border border-white/10 rounded-xl" style={{ width: "min(80vw, 600px)", aspectRatio: "4/3", background: "rgba(255,255,255,0.05)" }}>
            <span className="text-white/30 text-xs tracking-widest uppercase">{item.label}</span>
          </div>
        )}
      </div>

      <button 
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-all p-3 z-10 hover:scale-110" 
        onClick={(e) => { e.stopPropagation(); onNext(); }} 
        aria-label="Next"
      >
        <ChevronRight size={44} strokeWidth={1.5} />
      </button>

      <div className="mt-4 text-center">
        <p className="text-white text-sm font-sans tracking-wide">{item.alt}</p>
        <p className="text-white/40 text-xs tracking-widest uppercase mt-2">{index + 1} / {items.length}</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   MAIN HOMEPAGE CLIENT COMPONENT
   ────────────────────────────────────── */
type HomePageClientProps = {
  galleryItems: GalleryItem[];
};

export default function HomePageClient({ galleryItems }: HomePageClientProps) {
  // Services Section State
  const [selectedServiceCategory, setSelectedServiceCategory] = useState(serviceCategories[0].id);

  // Gallery Section State
  const [galleryTab, setGalleryTab] = useState<"photos" | "videos">("photos");
  const [photoCategory, setPhotoCategory] = useState<string>("all");
  const [photoLayoutMode, setPhotoLayoutMode] = useState<"masonry" | "grid">("masonry");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video Player Modal State
  const [activeVideoEmbed, setActiveVideoEmbed] = useState<string | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    services: "",
    location: "Pala"
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handlers for Photo Filter
  const filteredPhotos = photoCategory === "all"
    ? galleryItems
    : galleryItems.filter((img) => img.category === photoCategory);

  const handlePrevPhoto = useCallback(() => {
    setLightboxIndex(prev => (prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length));
  }, [filteredPhotos.length]);

  const handleNextPhoto = useCallback(() => {
    setLightboxIndex(prev => (prev === null ? null : (prev + 1) % filteredPhotos.length));
  }, [filteredPhotos.length]);

  // Contact Form Submission
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    let text = `Hi Zelenz, I'd like to book an appointment.\n\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    if (formData.date) text += `*Preferred Date:* ${formData.date}\n`;
    if (formData.services) text += `*Services Required:* ${formData.services}\n`;
    text += `*Preferred Location:* ${formData.location}\n`;

    const encodedText = encodeURIComponent(text);
    const waNumber = "917560862329";
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

    window.open(waUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ──── 1. HOME (Hero Section) ──── */}
      <section
        id="home"
        className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center text-center px-6"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/zelenz_hero_poster.webp"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src="/videos/zelenz_hero_video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background: "linear-gradient(to bottom, rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.65) 60%, rgba(0, 0, 0, 0.85) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center">
          <FadeUp>
            <span
              className="text-[#c49c4d] uppercase tracking-[0.3em] text-xs md:text-sm font-sans mb-4 block"
            >
              WELCOME TO PRESTIGE BEAUTY
            </span>
          </FadeUp>
          
          <FadeUp delay={0.15}>
            <h1
              className="font-serif font-light text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Zelenz <span className="italic text-[#c49c4d]">Unisex Saloon</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p
              className="font-serif italic text-white/90 text-lg md:text-2xl lg:text-3xl mb-12 tracking-wide font-light"
            >
              &ldquo;Where Luxury Meets Beauty&rdquo;
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-medium bg-[#c49c4d] hover:bg-[#c1a447] text-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-medium bg-transparent border border-white/40 hover:border-white text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Bouncing Scroll Down Arrow */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
          <div
            className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div
              className="w-1.5 h-1.5 bg-[#c49c4d] rounded-full animate-bounce"
            />
          </div>
        </div>
      </section>

      {/* ──── 2. OUR STORY ──── */}
      <section
        id="our-story"
        className="section-padding bg-[#000000] relative overflow-hidden border-b border-[#2a2200]"
      >
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#000000] rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="mx-auto max-w-[1140px] px-6 lg:px-12 relative z-10">
          {/* Header & Logo */}
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <FadeUp>
              <div className="inline-flex items-center justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Zelenz Emblem"
                  width={180}
                  height={54}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <p className="label-caps mb-3 text-[#c49c4d]">18 Years of Mastery</p>
              <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Redefining Luxury <em>Grooming</em> & Beauty
              </h2>
            </FadeUp>
          </div>

          {/* Minimal Story Quote */}
          <FadeUp delay={0.15}>
            <div className="max-w-[840px] mx-auto text-center mb-14">
              <p className="font-serif italic text-lg md:text-2xl text-[#e9ce98] leading-relaxed mb-6">
                &ldquo;True luxury is not just about looking beautiful—it&apos;s about feeling confident, valued, and genuinely cared for.&rdquo;
              </p>
              <p className="font-sans text-sm md:text-base text-[#e9ce98]/90 leading-relaxed max-w-2xl mx-auto">
                For over 18 years, Zelenz Unisex Saloon has set the gold standard in premium hair care, advanced skin therapy, custom grooming, and flawless bridal transformations across Pala & Kottayam.
              </p>
            </div>
          </FadeUp>

          {/* Vision & Mission Minimal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            <FadeUp delay={0.25}>
              <div className="p-8 rounded-2xl bg-[#000000] border border-[#323232] transition-all duration-300 hover:border-[#c1a447] hover:shadow-xs">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#323232] flex items-center justify-center text-[#c49c4d]">
                    <Eye size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#e9ce98]">Our Vision</h3>
                </div>
                <p className="text-[#e9ce98]/90 font-sans text-xs md:text-sm leading-relaxed">
                  To set new benchmarks in luxury salon experiences through artistry, medical-grade hygiene standards, and world-class beauty products.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="p-8 rounded-2xl bg-[#000000] border border-[#323232] transition-all duration-300 hover:border-[#c1a447] hover:shadow-xs">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#323232] flex items-center justify-center text-[#c49c4d]">
                    <Compass size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#e9ce98]">Our Mission</h3>
                </div>
                <p className="text-[#e9ce98]/90 font-sans text-xs md:text-sm leading-relaxed">
                  To deliver tailored hair, skin, and grooming treatments with warm hospitality, ensuring every guest leaves feeling radiant and confident.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──── 3. LUXURY EXPERIENCES / SIGNATURE SERVICES ──── */}
      <section
        id="services"
        className="section-padding bg-[#000000] border-y border-[#323232]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <FadeUp>
              <p className="label-caps mb-3">Zelenz Catalogue</p>
              <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Luxury Experiences & <em>Signature</em> Services
              </h2>
              <p className="text-sm font-sans text-[#c1a447] mt-4 max-w-md mx-auto">
                Explore our comprehensive services catalog spanning hair, skin, bridal, and kids beauty grooming.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Category Nav - Left side */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 z-20">
              <FadeUp>
                <div
                  className="bg-[#1a1a1a] border border-[#323232] rounded-2xl p-4 md:p-6 shadow-[0_4px_24px_rgba(196,156,77,0.04)] space-y-1.5 max-h-[80vh] overflow-y-auto"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#c49c4d] uppercase block mb-4 px-3">
                    Categories
                  </span>
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedServiceCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-sans text-xs tracking-wider uppercase font-medium flex items-center justify-between group ${
                        selectedServiceCategory === cat.id
                          ? "bg-[#323232] text-[#e9ce98] font-semibold"
                          : "text-[#c1a447] hover:bg-[#000000] hover:text-[#c49c4d]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full transition-all ${selectedServiceCategory === cat.id ? "bg-[#c49c4d] scale-110" : "bg-transparent border border-[#c1a447]"}`} />
                        {cat.label}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${selectedServiceCategory === cat.id ? "bg-[#000000] text-[#c49c4d]" : "bg-[#000000] text-[#c1a447]"}`}>
                        {cat.services.length}
                      </span>
                    </button>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Service Items Grid - Right side */}
            <div className="lg:col-span-8">
              <FadeUp>
                <div className="bg-[#1a1a1a] border border-[#323232] rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(196,156,77,0.04)] min-h-[450px] flex flex-col">
                  {serviceCategories.map((cat) => {
                    if (cat.id !== selectedServiceCategory) return null;
                    return (
                      <div key={cat.id} className="flex-1 flex flex-col">
                        <div className="mb-8 border-b border-[#323232] pb-6">
                          <h3 className="font-serif text-2xl lg:text-3xl text-[#e9ce98] mb-2">{cat.label}</h3>
                          <p className="text-[#c1a447] font-sans text-sm">{cat.desc}</p>
                        </div>

                        <div className="space-y-4 flex-1">
                          {cat.services.map((svc) => (
                            <div
                              key={svc.name}
                              className="flex items-center justify-between py-3.5 border-b border-[#000000] last:border-b-0 hover:bg-[#000000]/80 px-2 rounded-lg transition-all duration-200 group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#c49c4d] rounded-full group-hover:scale-125 transition-transform" />
                                <span className="font-sans text-sm md:text-base text-[#c49c4d] font-semibold group-hover:text-[#e9ce98] transition-colors">
                                  {svc.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Card CTA */}
                        <div className="mt-12 pt-6 border-t border-[#323232] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-xs font-sans text-[#c1a447] italic">
                            Want custom combinations or specific styling packages?
                          </span>
                          <a
                            href="#contact"
                            className="px-6 py-2.5 rounded-full font-sans text-[11px] tracking-widest uppercase font-medium bg-[#000000] text-white hover:bg-[#c49c4d] hover:text-white transition-all duration-300 transform active:scale-95 shrink-0"
                          >
                            Book appointment
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──── 4. WHY CHOOSE ZELENZ ──── */}
      <section
        id="why-choose"
        className="section-padding bg-[#1a1a1a]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <FadeUp>
              <p className="label-caps mb-3">The Zelenz Difference</p>
              <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Why Clients <em>Choose</em> Us
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "18+ Years Mastery",
                desc: "Over 18 years of experience delivering top-tier hair, beauty, and grooming excellence."
              },
              {
                icon: Sparkles,
                title: "Medical-Grade Hygiene",
                desc: "Strict sanitization protocol with single-use kits and autoclave sterilized equipment."
              },
              {
                icon: Heart,
                title: "Premium Products",
                desc: "We exclusively use top global luxury hair, skin, and makeup brands."
              },
              {
                icon: Smile,
                title: "Personalized Care",
                desc: "Bespoke consultations ensuring every haircut, facial, and makeover matches your persona."
              }
            ].map((feature, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-[#000000] border border-[#323232] rounded-2xl p-6 text-center hover:border-[#c1a447] transition-all duration-300 hover:shadow-xs group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-[#323232] flex items-center justify-center text-[#c49c4d] mx-auto mb-5 group-hover:scale-110 transition-transform">
                      <feature.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#e9ce98] mb-3">{feature.title}</h3>
                    <p className="font-sans text-xs text-[#e9ce98]/85 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 5. HAPPY CLIENTS ──── */}
      <section
        id="happy-clients"
        className="section-padding bg-[#000000] border-y border-[#323232]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#323232] text-xs font-sans font-medium text-[#e9ce98] mb-4 shadow-xs">
                <span className="text-[#c49c4d] font-semibold tracking-wide">5.0 ★★★★★</span>
                <span className="text-[#c49c4d]">•</span>
                <span>Verified Google Reviews</span>
              </div>
              <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Our Happy <em>Clients</em>
              </h2>
            </FadeUp>
          </div>

          {/* Review Marquee */}
          <ReviewMarquee />
        </div>
      </section>

      {/* ──── 6. GALLERY (Photos & Videos) ──── */}
      <section
        id="gallery"
        className="section-padding bg-[#1a1a1a]"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#323232] pb-6">
            <div>
              <FadeUp>
                <p className="label-caps mb-3">Portfolio & Work</p>
                <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Visual <em>Galleries</em>
                </h2>
              </FadeUp>
            </div>

            {/* Photos / Videos Toggle Tab pills */}
            <div className="flex gap-2">
              <FadeUp delay={0.1}>
                <button
                  onClick={() => setGalleryTab("photos")}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium transition-all ${
                    galleryTab === "photos"
                      ? "bg-[#000000] text-white"
                      : "bg-[#000000] text-[#c1a447] border border-[#323232] hover:bg-[#323232]"
                  }`}
                >
                  Photo Gallery
                </button>
              </FadeUp>
              <FadeUp delay={0.15}>
                <button
                  onClick={() => setGalleryTab("videos")}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium transition-all ${
                    galleryTab === "videos"
                      ? "bg-[#000000] text-white"
                      : "bg-[#000000] text-[#c1a447] border border-[#323232] hover:bg-[#323232]"
                  }`}
                >
                  Video Gallery
                </button>
              </FadeUp>
            </div>
          </div>

          {/* Tab 1: PHOTO GALLERY CONTENT */}
          {galleryTab === "photos" && (
            <div>
              {/* Photo Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { id: "all", label: "All Photos" },
                  { id: "groom", label: "Groom Styling" },
                  { id: "bridal", label: "Bridal" },
                  { id: "hair", label: "Hair & Styling" },
                  { id: "skin", label: "Skin & Facials" },
                  { id: "nails", label: "Nails & Art" },
                  { id: "party", label: "Party & Events" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setPhotoCategory(cat.id)}
                    className={`px-4 py-2 rounded-full font-sans text-xs uppercase font-medium tracking-wider transition-all ${
                      photoCategory === cat.id
                        ? "bg-[#000000] text-white shadow-xs"
                        : "bg-[#000000] text-[#c1a447] border border-[#323232] hover:bg-[#323232]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Photos Grid */}
              {filteredPhotos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((item, idx) => (
                    <div
                      key={`photo-g-${idx}`}
                      onClick={() => setLightboxIndex(idx)}
                      className="relative aspect-square overflow-hidden rounded-xl border border-[#323232] shadow-xs cursor-pointer group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transform group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={idx < 4}
                        loading={idx < 4 ? "eager" : "lazy"}
                        quality={80}
                      />
                      <div className="absolute inset-0 bg-[#000000]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-lg">
                          +
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-[#000000] rounded-2xl border border-[#323232]">
                  <p className="font-serif text-lg text-[#e9ce98] mb-2">No photos in this category yet</p>
                  <p className="text-sm font-sans text-[#c1a447]">More works will be uploaded soon. Check back shortly!</p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: VIDEO GALLERY CONTENT */}
          {galleryTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryVideos.map((video) => (
                <FadeUp key={video.id}>
                  <div
                    onClick={() => setActiveVideoEmbed(video.videoUrl)}
                    className="relative aspect-video overflow-hidden rounded-2xl border border-[#323232] shadow-md group cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                      <div className="w-16 h-16 rounded-full bg-[#c49c4d] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg font-medium text-[#e9ce98]">{video.title}</h3>
                    <p className="text-xs font-sans text-[#c1a447] mt-1 leading-relaxed">{video.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ──── 7. CONTACT US ──── */}
      <section
        id="contact"
        className="section-padding bg-[#000000] border-t border-[#323232]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-[700px] mb-16">
            <FadeUp>
              <p className="label-caps mb-3">Reservation & Location</p>
              <h2 className="font-serif font-light text-[#e9ce98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Connect With <em>Zelenz</em> Saloon
              </h2>
              <p className="text-sm font-sans text-[#c1a447] mt-4">
                Fill out the booking request form, and our coordinator will message you on WhatsApp to confirm slot timings.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left side info + form */}
            <div className="lg:col-span-7 space-y-10">
              {/* Form Card */}
              <FadeUp>
                <div className="bg-[#1a1a1a] border border-[#323232] rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(196, 156, 77, 0.04)]">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[#323232] flex items-center justify-center text-[#c49c4d] mx-auto mb-6">
                        <Check size={28} />
                      </div>
                      <h3 className="font-serif text-2xl text-[#e9ce98] mb-2">Enquiry Sent!</h3>
                      <p className="text-sm font-sans text-[#c1a447] max-w-sm mx-auto mb-6">
                        Thank you for your enquiry. We will redirect you to WhatsApp to complete your slot booking process.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2 rounded-full font-sans text-xs tracking-wider uppercase bg-[#323232] text-[#e9ce98] hover:bg-[#323232]/80 transition-colors"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#c1a447] uppercase block mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full bg-[#000000] border border-[#323232] rounded-xl px-4 py-3 text-sm font-sans text-[#e9ce98] placeholder-[#6b5a2a] focus:outline-none focus:border-[#c49c4d] focus:ring-1 focus:ring-[#c49c4d] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#c1a447] uppercase block mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full bg-[#000000] border border-[#323232] rounded-xl px-4 py-3 text-sm font-sans text-[#e9ce98] placeholder-[#6b5a2a] focus:outline-none focus:border-[#c49c4d] focus:ring-1 focus:ring-[#c49c4d] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#c1a447] uppercase block mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFormChange}
                            className="w-full bg-[#000000] border border-[#323232] rounded-xl px-4 py-3 text-sm font-sans text-[#e9ce98] focus:outline-none focus:border-[#c49c4d] focus:ring-1 focus:ring-[#c49c4d] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#c1a447] uppercase block mb-2">
                            Preferred Location
                          </label>
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleFormChange}
                            className="w-full bg-[#000000] border border-[#323232] rounded-xl px-4 py-3 text-sm font-sans text-[#e9ce98] focus:outline-none focus:border-[#c49c4d] focus:ring-1 focus:ring-[#c49c4d] transition-all"
                          >
                            <option value="Cherpunkal">Cherpunkal Branch (Opp. Mar Sleeva Medicity)</option>
                            <option value="Pala">Pala Branch (Santhom Complex, Kottaramattom)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-sans font-semibold tracking-wider text-[#c1a447] uppercase block mb-2">
                          Services Required
                        </label>
                        <textarea
                          name="services"
                          rows={3}
                          placeholder="e.g. Haircut, Global Color, Bridal Makeup..."
                          value={formData.services}
                          onChange={handleFormChange}
                          className="w-full bg-[#000000] border border-[#323232] rounded-xl px-4 py-3 text-sm font-sans text-[#e9ce98] placeholder-[#6b5a2a] focus:outline-none focus:border-[#c49c4d] focus:ring-1 focus:ring-[#c49c4d] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-sans text-xs tracking-widest uppercase font-medium bg-[#000000] text-white hover:bg-[#c49c4d] transition-all duration-300 shadow-md active:scale-98"
                      >
                        Submit & Open WhatsApp
                      </button>
                    </form>
                  )}
                </div>
              </FadeUp>
            </div>

            {/* Right side contact information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Branch Hours & Info */}
              <FadeUp delay={0.2}>
                <div className="bg-[#1a1a1a] border border-[#323232] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(196, 156, 77, 0.04)] space-y-6">
                  <h3 className="font-serif text-xl font-medium text-[#e9ce98]">Studio Contacts</h3>

                  <div className="space-y-4 font-sans text-sm text-[#e9ce98]">
                    <div className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-[#c49c4d] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#e9ce98] text-xs uppercase tracking-wider mb-1">Cherpunkal Branch (Main)</p>
                        <p className="text-[#c1a447]">Zelenz Unisex Saloon, Opp. Mar Sleeva Medicity, Cherpunkal</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-[#c49c4d] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#e9ce98] text-xs uppercase tracking-wider mb-1">Pala Branch</p>
                        <p className="text-[#c1a447]">Zelenz Makeups, Santhom Complex, Kottaramattom, Pala</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone size={18} className="text-[#c49c4d] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#e9ce98] text-xs uppercase tracking-wider mb-1">Call / WhatsApp</p>
                        <p className="text-[#c1a447] hover:text-[#c49c4d] transition-colors space-y-1">
                          <a href="tel:+917560862329" className="block">+91 75608 62329</a>
                          <a href="tel:+919847798820" className="block">+91 98477 98820</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail size={18} className="text-[#c49c4d] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#e9ce98] text-xs uppercase tracking-wider mb-1">Email Support</p>
                        <p className="text-[#c1a447] hover:text-[#c49c4d] transition-colors">
                          <a href="mailto:zelenzmakeups@gmail.com">zelenzmakeups@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock size={18} className="text-[#c49c4d] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#e9ce98] text-xs uppercase tracking-wider mb-1">Working Hours</p>
                        <p className="text-[#c1a447]">Mon – Sun: 9:30 AM – 7:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Double map view row */}
          <div className="mt-16 border-t border-[#323232] pt-16">
            <FadeUp>
              <GoogleMapsEmbed />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──── LIGHTBOX & VIDEO MODALS ──── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}

      {activeVideoEmbed !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#000000]/95"
          onClick={() => setActiveVideoEmbed(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setActiveVideoEmbed(null)}
          >
            <X size={32} />
          </button>
          <div
            className="relative w-full max-w-[800px] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideoEmbed}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
