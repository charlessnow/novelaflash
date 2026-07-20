"use client";

import React, { useState } from "react";
import { MouseGlow } from "@/components/effects/MouseGlow";

const SCENES = [
  {
    name: "Revenge Drama",
    video: "/videos/hero/scene-0.mp4",
    thumbImage: "/videos/hero/thumb-0.jpg",
    blobs: [
      { color: "bg-rose-900/40", pos: "top-[-10%] left-[-10%]", size: "w-[60vw] h-[60vw]", delay: "0s" },
      { color: "bg-red-800/30", pos: "bottom-[-10%] right-[-10%]", size: "w-[50vw] h-[50vw]", delay: "5s" },
    ],
    thumbnail: "from-rose-500 to-red-800",
  },
  {
    name: "CEO Romance",
    video: "/videos/hero/scene-1.mp4",
    thumbImage: "/videos/hero/thumb-1.jpg",
    blobs: [
      { color: "bg-amber-700/30", pos: "top-[-5%] right-[-5%]", size: "w-[55vw] h-[55vw]", delay: "1s" },
      { color: "bg-yellow-600/20", pos: "bottom-[10%] left-[5%]", size: "w-[45vw] h-[45vw]", delay: "4s" },
    ],
    thumbnail: "from-amber-400 to-yellow-700",
  },
  {
    name: "Fantasy Epic",
    video: "/videos/hero/scene-2.mp4",
    thumbImage: "/videos/hero/thumb-2.jpg",
    blobs: [
      { color: "bg-emerald-900/30", pos: "top-[-10%] left-[10%]", size: "w-[60vw] h-[60vw]", delay: "0s" },
      { color: "bg-teal-900/30", pos: "bottom-[-5%] right-[5%]", size: "w-[50vw] h-[50vw]", delay: "6s" },
    ],
    thumbnail: "from-emerald-500 to-teal-800",
  },
  {
    name: "Sweet Revenge",
    video: "/videos/hero/scene-3.mp4",
    thumbImage: "/videos/hero/thumb-3.jpg",
    blobs: [
      { color: "bg-rose-600/30", pos: "top-[10%] right-[10%]", size: "w-[50vw] h-[50vw]", delay: "0s" },
      { color: "bg-pink-900/30", pos: "bottom-[-10%] left-[-5%]", size: "w-[60vw] h-[60vw]", delay: "4s" },
    ],
    thumbnail: "from-rose-400 to-pink-700",
  },
  {
    name: "Thriller",
    video: "/videos/hero/scene-4.mp4",
    thumbImage: "/videos/hero/thumb-4.jpg",
    blobs: [
      { color: "bg-red-800/35", pos: "top-[-15%] left-[5%]", size: "w-[65vw] h-[65vw]", delay: "2s" },
      { color: "bg-rose-900/30", pos: "bottom-[5%] right-[-5%]", size: "w-[55vw] h-[55vw]", delay: "0s" },
    ],
    thumbnail: "from-red-500 to-rose-800",
  },
  {
    name: "Dark Noir",
    video: "/videos/hero/scene-5.mp4",
    thumbImage: "/videos/hero/thumb-5.jpg",
    blobs: [
      { color: "bg-stone-700/30", pos: "top-[5%] right-[5%]", size: "w-[50vw] h-[50vw]", delay: "1s" },
      { color: "bg-orange-900/20", pos: "bottom-[20%] left-[-10%]", size: "w-[60vw] h-[60vw]", delay: "3s" },
    ],
    thumbnail: "from-stone-500 to-amber-900",
  },
];

export const Hero = () => {
  const [activeScene, setActiveScene] = useState(0);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0C0A09]">
      <MouseGlow />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {SCENES.map((scene, sceneIndex) => (
          <div
            key={scene.name}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              activeScene === sceneIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {"video" in scene && scene.video ? (
              <>
                <video
                  src={scene.video}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload={sceneIndex === activeScene ? "auto" : "metadata"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </>
            ) : (
              scene.blobs.map((blob, blobIndex) => (
                <div
                  key={`${scene.name}-${blobIndex}`}
                  className={`absolute ${blob.pos} ${blob.size} rounded-full ${blob.color} blur-[150px] animate-[float_25s_infinite_alternate]`}
                  style={{ animationDelay: blob.delay }}
                />
              ))
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center xl:items-start">
        <div className="w-full flex flex-col items-center xl:items-start max-w-[1800px] xl:max-w-[60vw] xl:pl-12">
          <h1 className="flex flex-col font-display font-black leading-[0.8] text-white uppercase tracking-tight text-center xl:text-left">
            <span className="text-[14vw] sm:text-[12vw] xl:text-[10vw] whitespace-nowrap">THE PULSE OF</span>
            <span className="text-[14vw] sm:text-[12vw] xl:text-[10vw] whitespace-nowrap">SHORT DRAMA</span>
          </h1>

          <div className="mt-10 xl:mt-6 max-w-2xl text-center xl:text-left">
            <p className="text-stone-400/70 text-lg md:text-xl font-medium leading-relaxed">
              Industry intelligence for the $26 billion micro-drama revolution.
              The most comprehensive data-driven analysis of the global short-form entertainment market.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center xl:justify-start gap-5">
              <a href="/rankings" className="group flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300">
                <span className="pl-8 pr-5 py-3.5 text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                  Explore Rankings
                </span>
                <span className="mr-1.5 w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.15] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
              <a href="/industry" className="group flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300">
                <span className="pl-8 pr-5 py-3.5 text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                  Read Latest
                </span>
                <span className="mr-1.5 w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.15] transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:grid absolute right-[6%] top-1/2 -translate-y-1/2 grid-cols-2 gap-x-4 gap-y-8 z-20">
        {SCENES.map((scene, i) => (
          <button
            type="button"
            key={scene.name}
            onClick={() => setActiveScene(i)}
            className="group relative flex flex-col items-center"
          >
            <div
              className={`w-28 h-28 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                activeScene === i
                  ? "opacity-100 scale-105 ring-2 ring-white/80 shadow-[0_0_30px_rgba(244,63,94,0.4)]"
                  : "opacity-25 hover:opacity-55 hover:scale-[1.03]"
              }`}
            >
              {"thumbImage" in scene && scene.thumbImage ? (
                <img src={scene.thumbImage} alt={scene.name} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${scene.thumbnail}`} />
              )}
            </div>
            <span
              className={`mt-2 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.15em] transition-opacity duration-300 ${
                activeScene === i ? "text-white/70 opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              {scene.name}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};
