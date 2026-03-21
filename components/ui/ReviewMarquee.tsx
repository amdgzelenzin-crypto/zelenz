"use client";

export type ReviewItem = {
  quote: string;
  name: string;
  detail: string;
};

const defaultReviews: ReviewItem[] = [
  { quote: "She understood exactly what I wanted before I could even explain it. The result was effortless — I looked like myself, only luminous.", name: "Aishwarya S.", detail: "Bride · 2024" },
  { quote: "From the pre-bridal guide to the final look, every step felt intentional and unhurried. I never once felt like just another booking.", name: "Meera K.", detail: "Bride · 2024" },
  { quote: "The attention to detail was extraordinary. My skin had never looked like that in photographs before.", name: "Devika R.", detail: "Bride · 2023" },
  { quote: "Nikita has an incredible eye. She enhanced what I already had and made me feel completely myself on the most important day.", name: "Priya B.", detail: "Bride · 2024" },
  { quote: "I showed her one reference photo. She understood the soul of it immediately. The result was better than my imagination.", name: "Sreelakshmi V.", detail: "Bride · 2023" },
  { quote: "Every bride deserves to feel seen. Nikita made sure I did — not just in the mirror, but in every photograph from that day.", name: "Ananya M.", detail: "Bride · 2024" },
];

export default function ReviewMarquee({ reviews = defaultReviews }: { reviews?: ReviewItem[] }) {
  return (
    <section className="texture-grain pink-bloom" style={{ background: "#FFF0E8", padding: "clamp(60px, 8vw, 100px) 0", overflow: "hidden" }}>
      {/* Heading */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)", marginBottom: "48px" }}>
        <p className="label-caps" style={{ marginBottom: "8px" }}>Kind Words</p>
        <h2
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#3D1520",
            lineHeight: 1.2,
          }}
        >
          What our brides <em style={{ color: "#E8A890" }}>say.</em>
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollMarqueeMobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); } /* Accounts for gap */
        }
        @keyframes scrollMarqueeDesktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
      `}} />

      {/* Horizontal auto-scrolling track */}
      <div 
        className="flex gap-[20px] w-max hover:[animation-play-state:paused] animate-[scrollMarqueeDesktop_50s_linear_infinite] max-md:animate-[scrollMarqueeMobile_30s_linear_infinite]"
        style={{ paddingLeft: "min(20px, 2vw)" }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col bg-white rounded-[20px] border border-[rgba(244,168,176,0.30)] card-glow w-[280px] md:w-[320px] p-[24px] md:p-[32px]"
          >
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
                color: "#3D1520",
                marginBottom: "24px",
                flex: 1,
              }}
            >
              {r.quote}
            </p>

            {/* Gold divider */}
            <div style={{ width: "32px", height: "1px", background: "#D4A055", marginBottom: "16px" }} />

            {/* Name */}
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "14px",
                fontWeight: 500,
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
                color: "#B07880",
                marginTop: "4px",
              }}
            >
              {r.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
