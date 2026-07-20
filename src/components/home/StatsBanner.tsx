"use client";

import React, { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

export const StatsBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
      <div className="glass rounded-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden divide-x divide-y lg:divide-y-0 divide-rp-border">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const [displayValue, setDisplayValue] = useState(stat.value);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
    const suffix = stat.value.replace(/[0-9.]/g, "");
    const decimals = stat.value.includes(".") ? 1 : 0;

    if (Number.isNaN(numericValue)) return;

    const animate = () => {
      hasAnimated.current = true;
      const start = performance.now();
      const duration = 2000;

      const tick = (now: number) => {
        const elapsed = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        const current = numericValue * eased;
        setDisplayValue(current.toFixed(decimals) + suffix);
        if (elapsed < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = false;
          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    const onPageShow = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animate();
        }
      }
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [stat.value]);

  return (
    <div ref={cardRef} className="p-8 lg:p-10 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-rp-text-muted">{stat.label}</span>
        <div className={`flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 rounded-full transition-colors ${
          stat.trend === "up" ? "bg-white/5 text-rp-text-muted group-hover:bg-rp-coral/10 group-hover:text-rp-coral" : "bg-red-500/10 text-red-400"
        }`}>
          {stat.trend === "up" ? "↑" : "↓"} {stat.change}
        </div>
      </div>
      <div className="font-display font-black text-4xl lg:text-5xl text-white group-hover:text-rp-coral transition-colors">
        {displayValue}
      </div>
    </div>
  );
};
