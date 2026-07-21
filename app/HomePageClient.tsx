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
    loading: () => <div className="animate-pulse bg-gray-100 h-32 rounded-lg mb-8"></div>,
  }
);

const GoogleMapsEmbed = dynamic(
  () => import("@/components/ui/GoogleMapsEmbed")
    .then(mod => ({ default: mod.default || mod }))
    .catch(() => ({ default: () => <div className="text-center py-8">Map loading...</div> })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-100 h-64 rounded-lg mb-8"></div>,
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
      style={{ backgroundColor: "rgba(61,26,31,0.96)" }}
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

  // Handlers for Photo Filter (simplified to display all photos directly)
  const filteredPhotos = galleryItems;

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
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src="/videos/zelenz_hero_video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background: "linear-gradient(to bottom, rgba(61,26,31,0.4) 0%, rgba(61,26,31,0.65) 60%, rgba(61,26,31,0.85) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center">
          <FadeUp>
            <span
              className="text-[#E8A890] uppercase tracking-[0.3em] text-xs md:text-sm font-sans mb-4 block"
            >
              WELCOME TO PRESTIGE BEAUTY
            </span>
          </FadeUp>
          
          <FadeUp delay={0.15}>
            <h1
              className="font-serif font-light text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Zelenz <span className="italic text-[#E8CC90]">Unisex Saloon</span>
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
                className="px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase font-medium bg-[#D4A055] hover:bg-[#C4903A] text-white transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
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
              className="w-1.5 h-1.5 bg-[#E8CC90] rounded-full animate-bounce"
            />
          </div>
        </div>
      </section>

      {/* ──── 2. OUR STORY ──── */}
      <section
        id="our-story"
        className="section-padding bg-[#FFF9FA] relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left side text blocks */}
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="label-caps mb-3">18 Years of Excellence</p>
                <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                  Redefining Luxury <em>Grooming</em> & Beauty
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="space-y-6 text-[#4E4247] font-sans text-base leading-relaxed">
                  <p>
                    At Zelenz, we believe true luxury is not just about looking beautiful—it&apos;s about feeling confident, valued, and cared for. For over 18 years, we&apos;ve been delivering exceptional hair, beauty, and grooming experiences through expert craftsmanship, premium products, and personalized attention. Every guest who walks through our doors is treated with warmth, professionalism, and a commitment to excellence.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right side Vision & Mission Cards */}
            <div className="lg:col-span-6 space-y-8">
              <FadeUp delay={0.2}>
                <div
                  className="p-8 rounded-2xl border border-[#FADADD] bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgba(183,110,121,0.08)] transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDE8E8] flex items-center justify-center text-[#B76E79]">
                      <Eye size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#3D1520]">Our Vision</h3>
                  </div>
                  <p className="text-[#4E4247]/90 font-sans text-sm leading-relaxed">
                    To become a globally admired luxury beauty brand, setting new standards of excellence through exceptional artistry, innovation, and unforgettable client experiences.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.35}>
                <div
                  className="p-8 rounded-2xl border border-[#FADADD] bg-white transition-all duration-500 hover:shadow-[0_8px_30px_rgba(183,110,121,0.08)] transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDE8E8] flex items-center justify-center text-[#B76E79]">
                      <Compass size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#3D1520]">Our Mission</h3>
                  </div>
                  <p className="text-[#4E4247]/90 font-sans text-sm leading-relaxed">
                    To deliver exceptional hair, beauty, makeup, and grooming experiences through expert professionals, premium-quality products, and uncompromising service, ensuring every client feels confident, valued, and beautifully transformed.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──── 3. LUXURY EXPERIENCES / SIGNATURE SERVICES ──── */}
      <section
        id="services"
        className="section-padding bg-[#FFF5F7] border-y border-[#FFE4E8]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <FadeUp>
              <p className="label-caps mb-3">Zelenz Catalogue</p>
              <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Luxury Experiences & <em>Signature</em> Services
              </h2>
              <p className="text-sm font-sans text-[#A86070] mt-4 max-w-md mx-auto">
                Explore our comprehensive services catalog spanning hair, skin, bridal, and kids beauty grooming.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Category Nav - Left side */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 z-20">
              <FadeUp>
                <div
                  className="bg-white border border-[#FFE4E8] rounded-2xl p-4 md:p-6 shadow-[0_4px_24px_rgba(183,110,121,0.04)] space-y-1.5 max-h-[80vh] overflow-y-auto"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#B76E79] uppercase block mb-4 px-3">
                    Categories
                  </span>
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedServiceCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-sans text-xs tracking-wider uppercase font-medium flex items-center justify-between group ${
                        selectedServiceCategory === cat.id
                          ? "bg-[#FFE4E8] text-[#3D1520] font-semibold"
                          : "text-[#A86070] hover:bg-[#FFF9FA] hover:text-[#3D1520]"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight 
                        size={14} 
                        className={`transition-transform duration-300 ${
                          selectedServiceCategory === cat.id 
                            ? "transform translate-x-1" 
                            : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Service Lists - Right side */}
            <div className="lg:col-span-8">
              <FadeUp>
                <div className="bg-white border border-[#FFE4E8] rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(183,110,121,0.04)] min-h-[450px] flex flex-col">
                  {serviceCategories.map((cat) => {
                    if (cat.id !== selectedServiceCategory) return null;
                    return (
                      <div key={cat.id} className="flex-1 flex flex-col">
                        <div className="mb-8 border-b border-[#FFE4E8] pb-6">
                          <h3 className="font-serif text-2xl lg:text-3xl text-[#3D1520] mb-2">{cat.label}</h3>
                          <p className="text-[#A86070] font-sans text-sm">{cat.desc}</p>
                        </div>

                        {/* List */}
                        <div className="space-y-4 flex-1">
                          {cat.services.map((svc) => (
                            <div
                              key={svc.name}
                              className="flex items-center justify-between py-3.5 border-b border-[#FFF0F2] last:border-b-0 hover:bg-[#FFF9FA]/80 px-2 rounded-lg transition-all duration-200 group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#D4A055] rounded-full group-hover:scale-125 transition-transform" />
                                <span className="font-sans text-sm md:text-base text-[#4E4247] font-medium group-hover:text-[#3D1520] transition-colors">
                                  {svc.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-6">
                                <span className="font-serif font-light text-base md:text-lg text-[#B76E79]">
                                  {svc.price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Card CTA */}
                        <div className="mt-12 pt-6 border-t border-[#FFE4E8] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-xs font-sans text-[#A86070] italic">
                            Want custom combinations or specific styling packages?
                          </span>
                          <a
                            href="#contact"
                            className="px-6 py-2.5 rounded-full font-sans text-[11px] tracking-widest uppercase font-medium bg-[#3D1520] text-white hover:bg-[#D4A055] hover:text-white transition-all duration-300 transform active:scale-95 shrink-0"
                          >
                            Book appointment
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>

              {/* Dynamic Pricing Note */}
              <FadeUp delay={0.15}>
                <div
                  className="mt-6 p-6 rounded-xl border border-[#FFE4E8] bg-white/60 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFE4E8] flex items-center justify-center text-[#B76E79] shrink-0 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#3D1520] mb-1">Pricing & Consultations Note</h4>
                    <p className="text-xs text-[#A86070] font-sans leading-relaxed">
                      Prices listed are starting rates (exclusive of taxes) and may vary depending on hair length, density, skin texture, customized makeup layers, or specific brand materials required. A comprehensive consultation will be provided prior to starting any treatment to finalize options.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ──── 4. WHY CHOOSE ZELENZ ──── */}
      <section
        id="why-choose"
        className="section-padding bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <FadeUp>
              <p className="label-caps mb-3">Zelenz Standards</p>
              <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Why Discerning Guests <em>Choose</em> Zelenz
              </h2>
            </FadeUp>
          </div>

          {/* 4 Column highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeUp>
              <div
                className="p-8 rounded-2xl border border-[#FDE8E8] bg-[#FFF9FA] hover:bg-white hover:border-[#FADADD] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(183,110,121,0.06)] h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#FFE4E8] flex items-center justify-center text-[#D4A055] mb-6 shadow-sm">
                  <Star size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#3D1520] mb-3">Experienced Staff</h3>
                <p className="text-[#A86070] font-sans text-xs md:text-sm leading-relaxed flex-1">
                  Our team consists of internationally trained stylists and certified skin technicians dedicated to modern grooming, custom highlights, and flawless bridal drapes.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                className="p-8 rounded-2xl border border-[#FDE8E8] bg-[#FFF9FA] hover:bg-white hover:border-[#FADADD] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(183,110,121,0.06)] h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#FFE4E8] flex items-center justify-center text-[#D4A055] mb-6 shadow-sm">
                  <Sparkles size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#3D1520] mb-3">Premium Products</h3>
                <p className="text-[#A86070] font-sans text-xs md:text-sm leading-relaxed flex-1">
                  We use only high-end international hair and skincare products (ammonia-free hair dyes, botanicals, and professional makeup bases) for chemical-safe results.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div
                className="p-8 rounded-2xl border border-[#FDE8E8] bg-[#FFF9FA] hover:bg-white hover:border-[#FADADD] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(183,110,121,0.06)] h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#FFE4E8] flex items-center justify-center text-[#D4A055] mb-6 shadow-sm">
                  <Smile size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#3D1520] mb-3">Cozy Ambiance</h3>
                <p className="text-[#A86070] font-sans text-xs md:text-sm leading-relaxed flex-1">
                  Step into our modern, beautifully lit lounges. Relax in state-of-the-art chairs while listening to soft music and sipping our premium coffee, tea, or fresh juice.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div
                className="p-8 rounded-2xl border border-[#FDE8E8] bg-[#FFF9FA] hover:bg-white hover:border-[#FADADD] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(183,110,121,0.06)] h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#FFE4E8] flex items-center justify-center text-[#D4A055] mb-6 shadow-sm">
                  <ShieldCheck size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#3D1520] mb-3">Hygienic Environment</h3>
                <p className="text-[#A86070] font-sans text-xs md:text-sm leading-relaxed flex-1">
                  Your safety is paramount. All tools go through autoclaves and chemical disinfection. We use single-use towels, gowns, and clean applicator kits for every service.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ──── 5. HAPPY CLIENTS ──── */}
      <section
        id="happy-clients"
        className="section-padding bg-[#FFF5F7] border-y border-[#FFE4E8]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <FadeUp>
              <p className="label-caps mb-3">Testimonials</p>
              <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight">
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
        className="section-padding bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#FFE4E8] pb-6">
            <div>
              <FadeUp>
                <p className="label-caps mb-3">Portfolio & Work</p>
                <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight">
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
                      ? "bg-[#3D1520] text-white"
                      : "bg-[#FFF9FA] text-[#A86070] border border-[#FFE4E8] hover:bg-[#FFE4E8]"
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
                      ? "bg-[#3D1520] text-white"
                      : "bg-[#FFF9FA] text-[#A86070] border border-[#FFE4E8] hover:bg-[#FFE4E8]"
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
              {/* Photo Filter Pills + Layout Mode Selector */}
              <div className="flex justify-end gap-4 mb-8">
                {/* Grid / Masonry Toggle */}
                <div className="flex items-center gap-1 border border-[#FFE4E8] rounded-lg overflow-hidden shrink-0">
                  <button
                    onClick={() => setPhotoLayoutMode("grid")}
                    className={`px-3 py-1.5 transition-colors text-xs font-sans uppercase font-medium ${
                      photoLayoutMode === "grid" ? "bg-[#FFE4E8] text-[#3D1520]" : "text-[#A86070]"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setPhotoLayoutMode("masonry")}
                    className={`px-3 py-1.5 transition-colors text-xs font-sans uppercase font-medium ${
                      photoLayoutMode === "masonry" ? "bg-[#FFE4E8] text-[#3D1520]" : "text-[#A86070]"
                    }`}
                  >
                    Masonry
                  </button>
                </div>
              </div>

              {/* Photos List */}
              {photoLayoutMode === "masonry" ? (
                <div style={{ columns: "4 240px", gap: "16px" }}>
                  {filteredPhotos.map((item, idx) => (
                    <div
                      key={`photo-m-${idx}`}
                      onClick={() => setLightboxIndex(idx)}
                      className="break-inside-avoid mb-4 relative overflow-hidden rounded-xl border border-[#FFE4E8] shadow-sm cursor-pointer group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#3D1520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-lg">
                          +
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((item, idx) => (
                    <div
                      key={`photo-g-${idx}`}
                      onClick={() => setLightboxIndex(idx)}
                      className="relative aspect-square overflow-hidden rounded-xl border border-[#FFE4E8] shadow-sm cursor-pointer group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transform group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#3D1520]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-lg">
                          +
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredPhotos.length === 0 && (
                <p className="text-center py-20 text-sm font-sans text-[#A86070]">No works uploaded in this category yet.</p>
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
                    className="relative aspect-video overflow-hidden rounded-2xl border border-[#FFE4E8] shadow-md group cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                      <div className="w-16 h-16 rounded-full bg-[#D4A055] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg font-medium text-[#3D1520]">{video.title}</h3>
                    <p className="text-xs font-sans text-[#A86070] mt-1 leading-relaxed">{video.desc}</p>
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
        className="section-padding bg-[#FFF5F7] border-t border-[#FFE4E8]"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-[700px] mb-16">
            <FadeUp>
              <p className="label-caps mb-3">Reservation & Location</p>
              <h2 className="font-serif font-light text-[#3D1520] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Connect With <em>Zelenz</em> Saloon
              </h2>
              <p className="text-sm font-sans text-[#A86070] mt-4">
                Fill out the booking request form, and our coordinator will message you on WhatsApp to confirm slot timings.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left side info + form */}
            <div className="lg:col-span-7 space-y-10">
              {/* Form Card */}
              <FadeUp>
                <div className="bg-white border border-[#FFE4E8] rounded-2xl p-6 md:p-10 shadow-[0_8px_32px_rgba(183,110,121,0.04)]">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[#FFE4E8] flex items-center justify-center text-[#B76E79] mx-auto mb-6">
                        <Check size={28} />
                      </div>
                      <h3 className="font-serif text-2xl text-[#3D1520] mb-2">Enquiry Sent!</h3>
                      <p className="text-sm font-sans text-[#A86070] max-w-sm mx-auto mb-6">
                        Thank you for your enquiry. We will redirect you to WhatsApp to complete your slot booking process.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2 rounded-full font-sans text-xs tracking-wider uppercase bg-[#FFE4E8] text-[#3D1520] hover:bg-[#FFE4E8]/80 transition-colors"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#A86070] uppercase block mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl px-4 py-3 text-sm font-sans text-[#3D1520] placeholder-gray-400 focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#A86070] uppercase block mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl px-4 py-3 text-sm font-sans text-[#3D1520] placeholder-gray-400 focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#A86070] uppercase block mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleFormChange}
                            className="w-full bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl px-4 py-3 text-sm font-sans text-[#3D1520] focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-sans font-semibold tracking-wider text-[#A86070] uppercase block mb-2">
                            Preferred Location
                          </label>
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleFormChange}
                            className="w-full bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl px-4 py-3 text-sm font-sans text-[#3D1520] focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all"
                          >
                            <option value="Cherpunkal">Cherpunkal Branch (Opp. Mar Sleeva Medicity)</option>
                            <option value="Pala">Pala Branch (Santhom Complex, Kottaramattom)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-sans font-semibold tracking-wider text-[#A86070] uppercase block mb-2">
                          Services Required
                        </label>
                        <textarea
                          name="services"
                          rows={3}
                          placeholder="e.g. Haircut, Global Color, Bridal Makeup..."
                          value={formData.services}
                          onChange={handleFormChange}
                          className="w-full bg-[#FFF9FA] border border-[#FFE4E8] rounded-xl px-4 py-3 text-sm font-sans text-[#3D1520] placeholder-gray-400 focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-sans text-xs tracking-widest uppercase font-medium bg-[#3D1520] text-white hover:bg-[#D4A055] transition-all duration-300 shadow-md active:scale-98"
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
                <div className="bg-white border border-[#FFE4E8] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(183,110,121,0.04)] space-y-6">
                  <h3 className="font-serif text-xl font-medium text-[#3D1520]">Studio Contacts</h3>

                  <div className="space-y-4 font-sans text-sm text-[#4E4247]">
                    <div className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D1520] text-xs uppercase tracking-wider mb-1">Cherpunkal Branch (Main)</p>
                        <p className="text-[#A86070]">Zelenz Unisex Saloon, Opp. Mar Sleeva Medicity, Cherpunkal</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D1520] text-xs uppercase tracking-wider mb-1">Pala Branch</p>
                        <p className="text-[#A86070]">Zelenz Makeups, Santhom Complex, Kottaramattom, Pala</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D1520] text-xs uppercase tracking-wider mb-1">Call / WhatsApp</p>
                        <p className="text-[#A86070] hover:text-[#3D1520] transition-colors space-y-1">
                          <a href="tel:+917560862329" className="block">+91 75608 62329</a>
                          <a href="tel:+919847798820" className="block">+91 98477 98820</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D1520] text-xs uppercase tracking-wider mb-1">Email Support</p>
                        <p className="text-[#A86070] hover:text-[#3D1520] transition-colors">
                          <a href="mailto:zelenzmakeups@gmail.com">zelenzmakeups@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock size={18} className="text-[#B76E79] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#3D1520] text-xs uppercase tracking-wider mb-1">Working Hours</p>
                        <p className="text-[#A86070]">Mon – Sun: 9:30 AM – 7:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Double map view row */}
          <div className="mt-16 border-t border-[#FFE4E8] pt-16">
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3D1520]/95"
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
