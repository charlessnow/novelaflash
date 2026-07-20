"use client";

import React, { useState } from "react";
import Link from "@/components/ui/InternalLink";
import { latestArticles } from "@/lib/data";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";

const INITIAL_COUNT = 3;

export const LatestNews = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const hasMore = visibleCount < latestArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, latestArticles.length));
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
        <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider">
          Latest News
        </h2>
        <Link href="/articles" className="text-[10px] font-bold uppercase tracking-[0.2em] text-rp-text-muted hover:text-white transition-colors">
          View All Archive
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-white/5">
        {latestArticles.slice(0, visibleCount).map((article) => (
          <LatestArticleItem key={article.slug} article={article} />
        ))}
      </div>
      
      {hasMore && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="mt-8 py-4 border border-white/5 bg-white/[0.02] text-sm font-bold uppercase tracking-wider text-rp-text-secondary hover:bg-white/[0.05] hover:text-white transition-all rounded-lg cursor-pointer"
        >
          Load More News
        </button>
      )}
    </div>
  );
};

const LatestArticleItem = ({ article }: { article: typeof latestArticles[0] }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group py-8 flex gap-6 items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VideoThumbnail
        poster={article.image}
        video={article.video}
        alt={article.title}
        playing={isHovered}
        className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-lg border border-white/5"
        fallbackGradient={
          article.categoryColor === 'violet' ? 'from-rose-600/20 to-red-900' :
          article.categoryColor === 'pink' ? 'from-pink-600/20 to-rose-900' :
          article.categoryColor === 'cyan' ? 'from-amber-600/20 to-orange-900' :
          'from-green-600/20 to-emerald-900'
        }
        fallbackText="RP"
      />

      <div className="flex flex-col gap-2">
        <div className={`badge text-[9px] w-fit ${
          article.categoryColor === 'violet' ? 'badge-coral' : 
          article.categoryColor === 'pink' ? 'badge-pink' : 
          article.categoryColor === 'cyan' ? 'badge-amber' : 
          'badge-green'}`}
        >
          {article.category}
        </div>
        
        <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight text-white uppercase group-hover:text-rp-coral transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-rp-text-secondary text-sm line-clamp-1 font-medium hidden sm:block">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 mt-1 text-[11px] font-bold uppercase tracking-wider text-rp-text-muted">
          <img src={article.author.avatar} alt={article.author.name} className="w-5 h-5 rounded-full object-cover" />
          <span className="text-rp-text-secondary font-black">{article.author.name}</span>
          <span>•</span>
          <span>{article.publishedAt}</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
};
