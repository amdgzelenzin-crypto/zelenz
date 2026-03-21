"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FadeUp } from "@/components/ui/AnimationWrapper";

/* ─────────────────────────────────────────────
   GALLERY DATA
   Place images in /public/images/gallery/
   naming: bridal-001.jpg, party-001.jpg …
   ───────────────────────────────────────────── */

type Category = "bridal" | "party" | "hair" | "nails";

type GalleryItem = {
  src: string;          // empty string = placeholder
  category: Category;
  alt: string;
  label?: string;       // shown only while src is empty
};

const galleryItems: GalleryItem[] = [
  { src: "", category: "bridal", alt: "Bridal makeup by NIXTUDIO", label: "bridal-001.jpg" },
  { src: "", category: "bridal", alt: "Bridal makeup by NIXTUDIO", label: "bridal-002.jpg" },
  { src: "", category: "bridal", alt: "Bridal makeup by NIXTUDIO", label: "bridal-003.jpg" },
  { src: "", category: "bridal", alt: "Bridal makeup by NIXTUDIO", label: "bridal-004.jpg" },
  { src: "", category: "party", alt: "Party makeup by NIXTUDIO", label: "party-001.jpg" },
  { src: "", category: "party", alt: "Party makeup by NIXTUDIO", label: "party-002.jpg" },
  { src: "", category: "party", alt: "Party makeup by NIXTUDIO", label: "party-003.jpg" },
  { src: "", category: "hair",  alt: "Hair styling at NIXTUDIO",  label: "hair-001.jpg"  },
  { src: "", category: "hair",  alt: "Hair coloring at NIXTUDIO", label: "hair-002.jpg"  },
  { src: "", category: "nails", alt: "Nail art — The Nail Lounge by NIXTUDIO", label: "nails-001.jpg" },
  { src: "", category: "nails", alt: "Gel nails — The Nail Lounge by NIXTUDIO", label: "nails-002.jpg" },
  { src: "", category: "nails", alt: "Nail extensions — The Nail Lounge by NIXTUDIO", label: "nails-003.jpg" },
];

type FilterKey = "all" | Category;

const filterOptions: { key: FilterKey; label: string }[] = [
  { key: "all",    label: "All"    },
  { key: "bridal", label: "Bridal" },
  { key: "party",  label: "Party"  },
  { key: "hair",   label: "Hair"   },
  { key: "nails",  label: "Nails"  },
];

/* ─────────────────────────────────────────────
   LIGHTBOX
   ───────────────────────────────────────────── */

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
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
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(61,26,31,0.95)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none z-10"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 lg:left-8 text-white/60 hover:text-white text-4xl p-4 z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        ←
      </button>

      {/* Image or placeholder */}
      <div
        className="flex items-center justify-center"
        style={{ maxHeight: "90vh", maxWidth: "90vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.src ? (
          <Image
            src={item.src}
            alt={item.alt}
            width={1200}
            height={900}
            className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto"
          />
        ) : (
          <div
            className="flex items-center justify-center border border-white/10"
            style={{ width: "min(80vw, 600px)", aspectRatio: "4/3", background: "rgba(255,255,255,0.05)" }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">{item.label}</span>
          </div>
        )}
      </div>

      {/* Next */}
      <button
        className="absolute right-4 lg:right-8 text-white/60 hover:text-white text-4xl p-4 z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        →
      </button>

      {/* Counter */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GALLERY PAGE CONTENT
   ───────────────────────────────────────────── */

function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean[]>(galleryItems.map(() => true));

  // Sync filter from URL on mount
  useEffect(() => {
    const f = searchParams.get("filter") as FilterKey | null;
    if (f && filterOptions.some((x) => x.key === f)) {
      setActiveFilter(f);
    }
  }, [searchParams]);

  const handleFilter = (key: FilterKey) => {
    // Animate out, swap, animate in
    setVisible(galleryItems.map(() => false));
    setTimeout(() => {
      setActiveFilter(key);
      const params = new URLSearchParams(searchParams.toString());
      if (key === "all") { params.delete("filter"); } else { params.set("filter", key); }
      router.replace(`/gallery?${params.toString()}`, { scroll: false });
      setVisible(
        galleryItems.map((item) => key === "all" || item.category === key)
      );
    }, 200);
  };

  useEffect(() => {
    setVisible(
      galleryItems.map((item) => activeFilter === "all" || item.category === activeFilter)
    );
  }, [activeFilter]);

  const filtered = galleryItems.filter((_, i) => visible[i]);
  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((p) => (p === null ? null : (p - 1 + filteredItems.length) % filteredItems.length)),
    [filteredItems.length]
  );
  const nextImage = useCallback(() =>
    setLightboxIndex((p) => (p === null ? null : (p + 1) % filteredItems.length)),
    [filteredItems.length]
  );

  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ background: "var(--pink-wash, #EAC8C2)" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h1 className="font-serif font-light text-espresso text-5xl lg:text-7xl mb-4">
              The Work
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/70">
              Every face. Carefully considered.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ── */}
      <div
        className="sticky top-20 lg:top-24 z-30 border-b"
        style={{ background: "rgba(245,237,230,0.95)", borderColor: "rgba(158,123,117,0.15)", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex gap-3 py-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilter(f.key)}
                className="shrink-0 px-5 py-2 text-[11px] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-200 rounded-full"
                style={
                  activeFilter === f.key
                    ? { background: "var(--pink, #D4A5A0)", color: "var(--espresso, #2C1810)", border: "1px solid transparent" }
                    : { background: "transparent", color: "var(--taupe, #9E7B75)", border: "1px solid var(--taupe, #9E7B75)" }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MASONRY GRID ── */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
        <div
          style={{
            columns: "4 220px",
            gap: "12px",
          }}
        >
          {galleryItems.map((item, idx) => {
            const isVisible = activeFilter === "all" || item.category === activeFilter;
            return (
              <div
                key={`${item.category}-${idx}`}
                onClick={() => {
                  if (isVisible) {
                    const fi = filteredItems.findIndex((x) => x === item);
                    if (fi > -1) setLightboxIndex(fi);
                  }
                }}
                style={{
                  breakInside: "avoid",
                  marginBottom: "12px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.95)",
                  transition: "opacity 250ms ease, transform 250ms ease",
                  cursor: isVisible ? "pointer" : "default",
                  display: isVisible ? "block" : "none",
                }}
              >
                {item.src ? (
                  <div className="relative w-full overflow-hidden group">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover"
                      data-category={item.category}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ border: "2px solid var(--brass, #C4883A)" }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-full flex items-center justify-center group"
                    style={{
                      aspectRatio: "3/4",
                      background: "var(--pink-15, rgba(212,165,160,0.15))",
                      border: "1px solid rgba(158,123,117,0.12)",
                    }}
                    data-category={item.category}
                  >
                    <span className="text-[10px] font-sans tracking-widest uppercase text-center px-4"
                      style={{ color: "var(--taupe, #9E7B75)", opacity: 0.5 }}>
                      {item.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center py-20 font-sans text-sm" style={{ color: "var(--taupe)" }}>
            No images in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryContent />
    </Suspense>
  );
}
