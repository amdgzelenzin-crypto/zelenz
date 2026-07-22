"use client";

import { useRef, useEffect, useState } from "react";
import { StarRating } from "@/components/ui/PremiumIcon";

export type ReviewItem = {
  quote: string;
  name: string;
  detail: string;
  rating?: number;
};

const defaultReviews: ReviewItem[] = [
  {
    quote: "The best salon experience I've ever had. Amazing atmosphere, skilled staff, and outstanding service!",
    name: "Sarah Interiors",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "My engagement mehendi turned out beautifully. Harsha was patient, professional, and incredibly talented.",
    name: "Athira Rajeev",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "They transformed my wedding look perfectly. The makeup, hairstyle, and saree draping were flawless.",
    name: "Trisha Jacob",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "Excellent hair spa and facial. The relaxing massage and professional care made the experience unforgettable.",
    name: "Avanthika S",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "I've trusted Zelenz for my hair treatments multiple times. They truly know what works best for your hair.",
    name: "Anu Sebastian",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "My haircut was exactly what I wanted, and the hair spa was fantastic. Highly recommended!",
    name: "Janet Jacob",
    detail: "Google Review",
    rating: 5,
  },
  {
    quote: "The Hydra Facial and hair treatments are amazing. Friendly staff and consistently excellent service.",
    name: "Sweety Criss",
    detail: "Google Review",
    rating: 5,
  },
];

function GoogleGIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.99 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function ReviewCard(r: ReviewItem) {
  return (
    <div className="shrink-0 flex flex-col bg-white rounded-[20px] border border-[rgba(244,168,176,0.40)] card-glow w-[300px] md:w-[340px] p-6 md:p-7 shadow-xs hover:shadow-md transition-all duration-300">
      {/* Top Header: Rating + Google Badge */}
      <div className="flex items-center justify-between mb-4">
        <StarRating count={r.rating ?? 5} size={15} />
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF5F7] border border-[#FFE4E8] text-[11px] font-sans font-medium text-[#6B3040]">
          <GoogleGIcon />
          <span>Google Review</span>
        </div>
      </div>

      {/* Opening quote icon */}
      <span
        className="block font-serif text-[44px] text-[#F9919F] leading-none mb-1 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="font-serif italic text-sm md:text-[15px] leading-relaxed text-[#2D1518] mb-6 flex-1">
        {r.quote}
      </p>

      {/* Gold divider */}
      <div className="w-8 h-[1px] bg-[#D4A055] mb-4" />

      {/* Name and Detail */}
      <div>
        <p className="font-serif font-semibold text-sm text-[#3D1520]">
          {r.name}
        </p>
        <p className="font-sans text-[11px] tracking-wider uppercase text-[#A86070] mt-0.5">
          {r.detail}
        </p>
      </div>
    </div>
  );
}

export default function ReviewMarquee({
  reviews = defaultReviews,
}: {
  reviews?: ReviewItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<number | undefined>(undefined);

  // Drag state
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartScrollRef = useRef<number>(0);

  const SPEED = 0.5; // pixels per frame

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const track = trackRef.current;
    if (!track) return;

    // Auto-scroll animation loop
    const animate = () => {
      if (!isPausedRef.current && !isDraggingRef.current) {
        positionRef.current += SPEED;

        // Reset when halfway through
        const halfWidth = track.scrollWidth / 2;

        if (positionRef.current >= halfWidth) {
          positionRef.current = 0;
        }

        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MOUSE DRAG (desktop)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartScrollRef.current = positionRef.current;
      track.style.cursor = "grabbing";

      // Clear any resume timer
      window.clearTimeout(resumeTimerRef.current);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const delta = dragStartXRef.current - e.clientX;

      let newPos = dragStartScrollRef.current + delta;

      // Clamp to valid range
      const halfWidth = track.scrollWidth / 2;
      if (newPos < 0) newPos = 0;
      if (newPos > halfWidth) newPos = halfWidth - 1;

      positionRef.current = newPos;
      track.style.transform = `translateX(-${newPos}px)`;
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      track.style.cursor = "grab";

      // Resume auto-scroll after 2s
      resumeTimerRef.current = window.setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    };

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TOUCH SWIPE (mobile)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const onTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.touches[0].clientX;
      dragStartScrollRef.current = positionRef.current;
      window.clearTimeout(resumeTimerRef.current);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;

      const delta = dragStartXRef.current - e.touches[0].clientX;

      let newPos = dragStartScrollRef.current + delta;

      const halfWidth = track.scrollWidth / 2;
      if (newPos < 0) newPos = 0;
      if (newPos > halfWidth) newPos = halfWidth - 1;

      positionRef.current = newPos;
      track.style.transform = `translateX(-${newPos}px)`;
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;

      // Resume auto-scroll after 2s
      resumeTimerRef.current = window.setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    };

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // HOVER PAUSE (desktop)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const onMouseEnter = () => {
      if (!isDraggingRef.current) {
        isPausedRef.current = true;
        window.clearTimeout(resumeTimerRef.current);
      }
    };

    const onMouseLeave = () => {
      if (!isDraggingRef.current) {
        isPausedRef.current = false;
      }
      // Ensure drag ends if mouse leaves the container
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        track.style.cursor = "grab";
        resumeTimerRef.current = window.setTimeout(() => {
          isPausedRef.current = false;
        }, 2000);
      }
    };

    // Attach all event listeners
    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mousemove", onMouseMove);
    track.addEventListener("mouseenter", onMouseEnter);
    track.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseup", onMouseUp);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);

    // Initial cursor style
    track.style.cursor = "grab";

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.clearTimeout(resumeTimerRef.current);
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mousemove", onMouseMove);
      track.removeEventListener("mouseenter", onMouseEnter);
      track.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative overflow-hidden py-4">
      {/* Left fade edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #FFF5F7, transparent)",
        }}
      />

      {/* Right fade edge */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #FFF5F7, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "24px",
          width: "max-content",
          willChange: "transform",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {/* SR-visible main reviews */}
        {reviews.map((review, i) => (
          <div key={`orig-${i}`}>
            <ReviewCard {...review} />
          </div>
        ))}

        {/* Client-side cloned reviews with aria-hidden to eliminate crawler duplicates */}
        {isMounted && reviews.map((review, i) => (
          <div key={`clone-${i}`} aria-hidden="true">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
}

