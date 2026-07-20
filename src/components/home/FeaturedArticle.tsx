"use client";

import React, { useState } from "react";
import Link from "@/components/ui/InternalLink";
import { featuredArticle } from "@/lib/data";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";

export const FeaturedArticle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <article
        className="card-glow rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-[55%] relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 to-rp-bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />
            <VideoThumbnail
              poster={featuredArticle.image}
              video={featuredArticle.video}
              alt={featuredArticle.title}
              playing={isHovered}
              className="w-full h-full min-h-[300px] group-hover:scale-105 transition-transform duration-[2s] ease-out"
              fallbackGradient="from-stone-800 to-stone-900"
              fallbackText="DESTACADO"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <div className="badge badge-coral mb-4">{featuredArticle.category}</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-[45%] bg-rp-bg-card p-12 flex flex-col justify-center border-l border-white/5">
            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight uppercase tracking-tight text-white mb-6">
              {featuredArticle.title}
            </h2>
            <p className="text-rp-text-secondary text-lg leading-relaxed mb-10 font-medium">
              {featuredArticle.excerpt}
            </p>
            
            <div className="flex items-center gap-4 mt-auto mb-10 pt-10 border-t border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 p-[1px]">
                <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">{featuredArticle.author.name}</span>
                <span className="text-rp-text-muted text-xs uppercase tracking-wider">{featuredArticle.publishedAt} • {featuredArticle.readTime}</span>
              </div>
            </div>

            <Link href={`/articles/${featuredArticle.slug}`} className="flex items-center gap-3 font-display font-bold text-white uppercase tracking-wider group w-fit transition-colors hover:text-rp-coral">
              Read Full Article 
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rp-coral transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
