"use client";

import React, { useEffect, useRef } from "react";

export const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const secondaryGlowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const update = () => {
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

      glowPos.current.x = lerp(glowPos.current.x, mousePos.current.x, 0.1);
      glowPos.current.y = lerp(glowPos.current.y, mousePos.current.y, 0.1);

      secondaryGlowPos.current.x = lerp(secondaryGlowPos.current.x, mousePos.current.x, 0.05);
      secondaryGlowPos.current.y = lerp(secondaryGlowPos.current.y, mousePos.current.y, 0.05);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x - 300}px, ${glowPos.current.y - 300}px)`;
      }

      if (secondaryGlowRef.current) {
        secondaryGlowRef.current.style.transform = `translate(${secondaryGlowPos.current.x - 100}px, ${secondaryGlowPos.current.y - 100}px)`;
      }

      requestAnimationFrame(update);
    };

    const animationFrame = requestAnimationFrame(update);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-0 opacity-[0.06] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--rp-coral) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        ref={secondaryGlowRef}
        className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full z-0 opacity-[0.04] blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--rp-amber) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </>
  );
};
