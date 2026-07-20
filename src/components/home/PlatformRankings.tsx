import React from "react";
import Link from "@/components/ui/InternalLink";
import { platforms } from "@/lib/data";

export const PlatformRankings = () => {
  return (
    <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8 mb-8">
      <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-8 flex items-center gap-2">
        Top Platforms <span className="w-1.5 h-1.5 rounded-full bg-rp-coral animate-pulse-glow" />
      </h2>

      <div className="flex flex-col gap-6">
        {platforms.slice(0, 5).map((platform, index) => (
          <div key={platform.slug} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-display font-black text-2xl text-white/10 italic select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                
                <img
                  src={platform.icon}
                  alt={platform.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover shadow-lg"
                />
                
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm leading-none">{platform.name}</span>
                  <span className="text-[10px] text-rp-text-muted uppercase tracking-widest font-black mt-1">
                    {platform.category}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <span className="font-display font-black text-xl text-rp-coral">
                  {platform.score.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="score-bar ml-14">
              <div 
                className="score-bar-fill" 
                style={{ width: `${platform.score * 10}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      <Link href="/rankings" className="mt-8 block py-3 text-center border border-white/5 bg-white/[0.02] text-[11px] font-bold uppercase tracking-[0.2em] text-rp-text-secondary hover:bg-white/[0.05] hover:text-white transition-all rounded-lg">
        See Full Leaderboard
      </Link>
    </div>
  );
};
