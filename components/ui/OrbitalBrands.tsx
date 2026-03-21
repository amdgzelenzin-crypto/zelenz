"use client";

import { useRef } from "react";

const outerBrands = [
  "GUCCI", "CHANEL", "DIOR", "CHARLOTTE TILBURY",
  "GIVENCHY", "NARS", "FENTY BEAUTY", "PAT McGRATH",
  "URBAN DECAY", "MAC", "LAURA MERCIER", "HUDA BEAUTY",
];

const innerBrands = ["NARS", "CHANEL", "DIOR", "MAC", "GUCCI"];

export default function OrbitalBrands() {
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePause = (paused: boolean) => {
    const el = containerRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>("[data-anim]").forEach((node) => {
      node.style.animationPlayState = paused ? "paused" : "running";
    });
  };

  return (
    <section
      style={{
        background: "#3D1520",
        minHeight: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "60px 24px",
      }}
    >
      {/* ── Orbital container ── */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "min(600px, 90vw)",
          height: "min(600px, 90vw)",
          margin: "0 auto",
        }}
        onMouseEnter={() => togglePause(true)}
        onMouseLeave={() => togglePause(false)}
      >
        {/* Center label */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F9919F",
              lineHeight: 1.4,
            }}
          >
            PRODUCTS
            <br />
            USED
          </p>
          {/* Small dot ring decoration */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(232,204,144,0.30)",
              margin: "8px auto 0",
            }}
          />
        </div>

        {/* ── Outer ring (12 brands, 20s CW) ── */}
        <div
          data-anim
          style={{
            position: "absolute",
            inset: 0,
            animation: "orbit 20s linear infinite",
          }}
        >
          {outerBrands.map((brand, i) => {
            const angle = (i / outerBrands.length) * 360;
            // radius as proportion of container — we use CSS calc for responsive
            return (
              <div
                key={brand}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 0,
                  height: 0,
                  // Place on circle: rotate by angle, then move out by radius
                  transform: `rotate(${angle}deg) translateX(min(220px, 37vw))`,
                }}
              >
                <span
                  data-anim
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    // Center text on the point & counter-rotate to stay upright
                    transform: "translate(-50%, -50%)",
                    animation: "counter-orbit 20s linear infinite",
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(9px, 1.2vw, 12px)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#E8CC90",
                  }}
                >
                  {brand}
                </span>
              </div>
            );
          })}
          {/* Outer circle guide (faint) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(440px, 74vw)",
              height: "min(440px, 74vw)",
              borderRadius: "50%",
              border: "1px solid rgba(232,204,144,0.10)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── Inner ring (5 brands, 40s CCW) ── */}
        <div
          data-anim
          style={{
            position: "absolute",
            inset: 0,
            animation: "orbit-reverse 40s linear infinite",
          }}
        >
          {innerBrands.map((brand, i) => {
            const angle = (i / innerBrands.length) * 360;
            return (
              <div
                key={`inner-${brand}`}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 0,
                  height: 0,
                  transform: `rotate(${angle}deg) translateX(min(140px, 23vw))`,
                }}
              >
                <span
                  data-anim
                  style={{
                    display: "block",
                    whiteSpace: "nowrap",
                    transform: "translate(-50%, -50%)",
                    animation: "counter-orbit-reverse 40s linear infinite",
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(8px, 1vw, 10px)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(232,204,144,0.45)",
                  }}
                >
                  {brand}
                </span>
              </div>
            );
          })}
          {/* Inner circle guide (faint) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(280px, 46vw)",
              height: "min(280px, 46vw)",
              borderRadius: "50%",
              border: "1px solid rgba(232,204,144,0.06)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#C4903A",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 20,
          }}
        />
      </div>
    </section>
  );
}
