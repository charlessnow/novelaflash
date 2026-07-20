"use client";

import { useState } from "react";
import Link from "@/components/ui/InternalLink";
import { Article } from "@/lib/data";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

interface ArticlesClientProps {
  articles: Article[];
}

const CATEGORIES = [
  "All",
  "Industry Analysis",
  "AI & Tech",
  "Global Markets",
  "Platform News",
  "Funding",
  "Creator Economy",
  "Guide",
  "Comparison",
];

export const ArticlesClient = ({ articles }: ArticlesClientProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles = activeFilter === "All" 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-32">
      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              activeFilter === category
                ? "bg-rp-coral text-white shadow-[0_0_20px_rgba(255,51,102,0.3)]"
                : "bg-white/5 text-rp-text-secondary hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <ScrollReveal key={article.slug} direction="up" delay={index * 0.05}>
            <ArticleCard article={article} />
          </ScrollReveal>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-rp-text-muted font-display uppercase tracking-widest">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
};

const ArticleCard = ({ article }: { article: Article }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group card card-glow flex flex-col h-full overflow-hidden bg-rp-bg-card/30 border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-stone-900 border-b border-white/5">
        <VideoThumbnail
          poster={article.image}
          video={article.video}
          alt={article.title}
          playing={isHovered}
          className="absolute inset-0 z-0"
          fallbackGradient={
            article.categoryColor === 'violet' ? 'from-rose-600/20 to-red-900' :
            article.categoryColor === 'pink' ? 'from-pink-600/20 to-rose-900' :
            article.categoryColor === 'cyan' ? 'from-amber-600/20 to-orange-900' :
            'from-green-600/20 to-emerald-900'
          }
        />

        <div className="absolute top-4 left-4 z-20">
          <div className={`badge ${
            article.categoryColor === 'violet' ? 'badge-coral' :
            article.categoryColor === 'pink' ? 'badge-pink' :
            article.categoryColor === 'cyan' ? 'badge-amber' :
            'badge-green'}`}
          >
            {article.category}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 z-10 pointer-events-none">
          <span className="font-display font-bold text-white uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Read Now</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-display font-black text-2xl leading-tight text-white uppercase group-hover:text-rp-coral transition-colors mb-4 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-rp-text-secondary text-sm leading-relaxed mb-8 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-8 h-8 rounded-full border border-white/10"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">{article.author.name}</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-rp-text-muted">{article.publishedAt}</span>
            </div>
          </div>
          
          <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-rp-text-muted italic">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
};
