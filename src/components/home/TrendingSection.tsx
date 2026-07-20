"use client";

import React from "react";
import Link from "@/components/ui/InternalLink";
import { trendingArticles } from "@/lib/data";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";

export const TrendingSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider flex items-center gap-3">
          Tendencias <span className="animate-bounce">🔥</span>
        </h2>
        <Link href="/articles" className="text-sm font-bold uppercase tracking-wider text-rp-text-muted hover:text-rp-coral transition-colors">
          View All <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingArticles.map((article) => (
          <TrendingCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
};

const TrendingCard = ({ article }: { article: typeof trendingArticles[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group card card-glow flex flex-col h-full overflow-hidden"
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

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl leading-tight text-white uppercase group-hover:text-rp-coral transition-colors mb-4 line-clamp-2">
          {article.title}
        </h3>
        <div className="mt-auto flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-rp-text-muted">
          <span>{article.publishedAt}</span>
          <span className="flex items-center gap-1.5 italic">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
};
