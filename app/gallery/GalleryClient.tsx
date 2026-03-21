"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FadeUp } from "@/components/ui/AnimationWrapper";
import type { GalleryItem } from "@/lib/gallery-utils";

type Category = "bridal" | "party" | "hair" | "nails";
type FilterKey = "all" | Category;
type LayoutMode = "masonry" | "grid";

const filterOptions: { key: FilterKey; label: string }[] = [
  { key: "all",    label: "All"    },
  { key: "bridal", label: "Bridal" },
  { key: "party",  label: "Party"  },
  { key: "hair",   label: "Hair"   },
  { key: "nails",  label: "Nails"  },
];

/* ── Lightbox ── */
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
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(61,26,31,0.95)" }}
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none z-10" onClick={onClose} aria-label="Close">×</button>
      <button className="absolute left-4 lg:left-8 text-white/60 hover:text-white text-4xl p-4 z-10" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">←</button>
      <div className="flex items-center justify-center" style={{ maxHeight: "90vh", maxWidth: "90vw" }} onClick={(e) => e.stopPropagation()}>
        {item.src ? (
          <Image src={item.src} alt={item.alt} width={1200} height={900} className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto" />
        ) : (
          <div className="flex items-center justify-center border border-white/10" style={{ width: "min(80vw, 600px)", aspectRatio: "4/3", background: "rgba(255,255,255,0.05)" }}>
            <span className="text-white/30 text-xs tracking-widest uppercase">{item.label}</span>
          </div>
        )}
      </div>
      <button className="absolute right-4 lg:right-8 text-white/60 hover:text-white text-4xl p-4 z-10" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">→</button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">{index + 1} / {items.length}</p>
    </div>
  );
}

/* ── Layout toggle icons ── */
function GridIcon({ active }: { active: boolean }) {
  const c = active ? "#C4903A" : "#A86070";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7" height="7" stroke={c} strokeWidth="1.5" />
      <rect x="10" y="1" width="7" height="7" stroke={c} strokeWidth="1.5" />
      <rect x="1" y="10" width="7" height="7" stroke={c} strokeWidth="1.5" />
      <rect x="10" y="10" width="7" height="7" stroke={c} strokeWidth="1.5" />
    </svg>
  );
}
function MasonryIcon({ active }: { active: boolean }) {
  const c = active ? "#C4903A" : "#A86070";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7" height="10" stroke={c} strokeWidth="1.5" />
      <rect x="10" y="1" width="7" height="6" stroke={c} strokeWidth="1.5" />
      <rect x="10" y="9" width="7" height="8" stroke={c} strokeWidth="1.5" />
      <rect x="1" y="13" width="7" height="4" stroke={c} strokeWidth="1.5" />
    </svg>
  );
}

/* ── Gallery Content ── */
function GalleryContent({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [layout, setLayout] = useState<LayoutMode>("masonry");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean[]>(galleryItems.map(() => true));

  useEffect(() => {
    const f = searchParams.get("filter") as FilterKey | null;
    if (f && filterOptions.some((x) => x.key === f)) setActiveFilter(f);
  }, [searchParams]);

  const handleFilter = (key: FilterKey) => {
    setVisible(galleryItems.map(() => false));
    setTimeout(() => {
      setActiveFilter(key);
      const params = new URLSearchParams(searchParams.toString());
      if (key === "all") { params.delete("filter"); } else { params.set("filter", key); }
      router.replace(`/gallery?${params.toString()}`, { scroll: false });
      setVisible(galleryItems.map((item) => key === "all" || item.category === key));
    }, 200);
  };

  useEffect(() => {
    setVisible(galleryItems.map((item) => activeFilter === "all" || item.category === activeFilter));
  }, [activeFilter, galleryItems]);

  const filteredItems = galleryItems.filter((item) => activeFilter === "all" || item.category === activeFilter);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((p) => (p === null ? null : (p - 1 + filteredItems.length) % filteredItems.length)), [filteredItems.length]);
  const nextImage = useCallback(() => setLightboxIndex((p) => (p === null ? null : (p + 1) % filteredItems.length)), [filteredItems.length]);

  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ background: "#FFCDD4" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeUp>
            <h1 className="font-serif font-light text-espresso text-5xl lg:text-7xl mb-4">
              The <em>Work.</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-espresso/70">Every face. Carefully considered.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── STICKY FILTER + LAYOUT TOGGLE ── */}
      <div
        className="sticky top-20 lg:top-24 z-30 border-b"
        style={{ background: "rgba(255,245,247,0.95)", borderColor: "#FFCDD4", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex items-center gap-3 py-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {/* Filter pills */}
            <div className="flex gap-2 flex-1">
              {filterOptions.map((f) => (
                <button
                  key={f.key}
                  onClick={() => handleFilter(f.key)}
                  className="shrink-0 px-5 py-2 text-[11px] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-200 rounded-full"
                  style={
                    activeFilter === f.key
                      ? { background: "#F9919F", color: "#FFFFFF", border: "1px solid transparent" }
                      : { background: "transparent", color: "#A86070", border: "1px solid #FFCDD4" }
                  }
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Layout toggle */}
            <div className="flex items-center gap-1 shrink-0 border rounded-lg overflow-hidden" style={{ borderColor: "#FFCDD4" }}>
              <button
                onClick={() => setLayout("grid")}
                className="px-3 py-2 transition-colors duration-200"
                style={{ background: layout === "grid" ? "#FFE4E8" : "transparent" }}
                title="Tight grid"
                aria-label="Grid layout"
              >
                <GridIcon active={layout === "grid"} />
              </button>
              <div style={{ width: "1px", height: "24px", background: "#FFCDD4" }} />
              <button
                onClick={() => setLayout("masonry")}
                className="px-3 py-2 transition-colors duration-200"
                style={{ background: layout === "masonry" ? "#FFE4E8" : "transparent" }}
                title="Masonry"
                aria-label="Masonry layout"
              >
                <MasonryIcon active={layout === "masonry"} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── GRID / MASONRY ── */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
        {layout === "masonry" ? (
          /* Masonry */
          <div style={{ columns: "4 220px", gap: "12px" }}>
            {galleryItems.map((item, idx) => {
              const isVisible = activeFilter === "all" || item.category === activeFilter;
              return (
                <div
                  key={`m-${idx}`}
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
                      <Image src={item.src} alt={item.alt} width={600} height={800} className="w-full h-auto object-cover" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ border: "2px solid #C4903A" }} />
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-center group" style={{ aspectRatio: "3/4", background: "#FFF5F7", border: "1px solid rgba(158,123,117,0.12)" }}>
                      {/* Placeholder bg only */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Tight grid — flush, no gaps */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
            {galleryItems.map((item, idx) => {
              const isVisible = activeFilter === "all" || item.category === activeFilter;
              if (!isVisible) return null;
              return (
                <div
                  key={`g-${idx}`}
                  className="group relative overflow-hidden"
                  style={{ aspectRatio: "1/1", cursor: "pointer" }}
                  onClick={() => {
                    const fi = filteredItems.findIndex((x) => x === item);
                    if (fi > -1) setLightboxIndex(fi);
                  }}
                >
                  {item.src ? (
                    <Image
                      src={item.src} alt={item.alt} fill
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF5F7" }}>
                      {/* Placeholder bg only */}
                    </div>
                  )}
                  {/* Pink hover overlay + magnify icon */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(61,21,32,0.12)" }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.80)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "22px",
                        lineHeight: 1,
                      }}
                    >
                      ＋
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredItems.length === 0 && (
          <p className="text-center py-20 font-sans text-sm" style={{ color: "#A86070" }}>No images in this category yet.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox items={filteredItems} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
    </>
  );
}

export default function GalleryClient({ galleryItems }: { galleryItems: GalleryItem[] }) {
  return (
    <Suspense>
      <GalleryContent galleryItems={galleryItems} />
    </Suspense>
  );
}
