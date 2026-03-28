"use client";

import { useRef, useEffect, useState } from "react";

export type ReviewItem = {
  quote: string;
  name: string;
  detail: string;
};

const defaultReviews: ReviewItem[] = [
  {
    quote: "I was extremely happy and satisfied with the makeup and hair for my wedding day. It turned out even better than I had imagined! She understood each and every request of mine and executed everything perfectly...",
    name: "Jessy Joseph",
    detail: "Bride",
  },
  {
    quote: "I had my engagement and wedding makeup done by Nikita, and it was such a wonderful experience. She was very vocal and guided me clearly on what would suit me best, which I truly appreciated.",
    name: "Stelly Tomy",
    detail: "Bride",
  },
  {
    quote: "Thank you so much Nikita for making me look my best on my BigDay. Your work played a huge role in making me so happy and confident on my wedding day. I looked exactly like what I expected ❤️",
    name: "Jane Josy",
    detail: "Bride",
  },
  {
    quote: "Nikita did my bridal makeup and I couldn't be happier with the results. She understood exactly the look I wanted and made me feel so confident and beautiful on my big day.",
    name: "Meenu Mathai",
    detail: "Bride",
  },
  {
    quote: "I just wanted to share my amazing experience with Nikita 🫶, she made me feel beautiful on my engagement day and I received so many compliments. I highly recommend NIXTUDIO for anyone!",
    name: "Riya Kurian",
    detail: "Bride",
  },
  {
    quote: "Absolutely loved my engagement and bridal makeup❤️! Huge thanks to Nikita for making the whole experience feel so friendly and comfortable. She really listened to what I wanted, and the final look was beautiful😌.",
    name: "Aleena Varghese",
    detail: "Bride",
  },
];

function ReviewCard(r: ReviewItem) {
  return (
    <div className="shrink-0 flex flex-col bg-white rounded-[20px] border border-[rgba(244,168,176,0.30)] card-glow w-[280px] md:w-[320px] p-[24px] md:p-[32px]">
      {/* Opening quote */}
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "72px",
          color: "#F9919F",
          lineHeight: 0.8,
          marginBottom: "14px",
        }}
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p
        style={{
          fontFamily: "var(--font-body), Georgia, serif",
          fontStyle: "italic",
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#2D1518",
          marginBottom: "24px",
          flex: 1,
        }}
      >
        {r.quote}
      </p>

      {/* Gold divider */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "#D4A055",
          marginBottom: "16px",
        }}
      />

      {/* Name */}
      <p
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "14px",
          fontWeight: 600,
          color: "#3D1520",
        }}
      >
        {r.name}
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "#6B3040",
          marginTop: "4px",
        }}
      >
        {r.detail}
      </p>
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
    <section
      style={{
        background: "#FFF0EC",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          padding: "0 24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#B76E79",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          KIND WORDS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display, serif)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#4E4247",
          }}
        >
          What our brides{" "}
          <em
            style={{
              color: "#B76E79",
            }}
          >
            say.
          </em>
        </h2>
      </div>

      {/* Left fade edge */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: `linear-gradient(
            to right,
            #FFF0EC,
            transparent
          )`,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Right fade edge */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: `linear-gradient(
            to left,
            #FFF0EC,
            transparent
          )`,
            zIndex: 2,
            pointerEvents: "none",
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
    </section>
  );
}
