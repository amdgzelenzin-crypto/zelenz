"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string; };

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Faces Transformed" },
  { value: 5,   suffix: "★", label: "Client Rating"     },
  { value: 7,   suffix: "+", label: "Years of Artistry"  },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);
  return (
    <div className="flex-1 text-center bg-white md:bg-transparent rounded-[100px] md:rounded-none px-[20px] py-[16px] md:p-0 border border-[#FADADD] md:border-none card-glow rosegold-shimmer md:shadow-none">
      <p className="font-serif font-normal text-[32px] md:text-[clamp(40px,5vw,64px)] text-[#3D1520] md:text-[#D4A055] leading-none mb-1 md:mb-2 tracking-[-0.01em] gold-foil-text">
        {count}{active ? stat.suffix : ""}
      </p>
      <p className="font-sans text-[9px] md:text-[10px] tracking-[0.20em] uppercase text-[#A86070] md:text-[#B07880]">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex md:items-stretch max-w-full md:max-w-[400px] gap-2 md:gap-0">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-stretch flex-1">
          <StatItem stat={stat} active={active} />
          {i < stats.length - 1 && (
            <div className="hidden md:block w-[1px] bg-[#F9C8C8] my-1 shrink-0 px-[0.5px]" />
          )}
        </div>
      ))}
    </div>
  );
}
