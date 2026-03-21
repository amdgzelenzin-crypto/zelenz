"use client";

const services = [
  "Bridal Makeup", "HD & Airbrush", "Hairstyling", "Saree Draping",
  "Gel Nails", "Hair Coloring", "Facials & Spa", "Party Makeup",
  "Hair Treatments", "Nail Extensions",
];

const SEPARATOR = (
  <span style={{ color: "#F9919F", margin: "0 28px", fontSize: "12px", lineHeight: 1 }}>✦</span>
);

export default function ServiceTicker() {
  const items = services.flatMap((s) => [s, "separator"]);
  const doubled = [...items, ...items]; // seamless loop

  return (
    <div
      style={{
        background: "#3D1520",
        height: "52px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: "ticker-scroll 25s linear infinite",
        }}
      >
        {doubled.map((item, i) =>
          item === "separator" ? (
            <span key={i}>{SEPARATOR}</span>
          ) : (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "14px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8CC90",
              }}
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
}
