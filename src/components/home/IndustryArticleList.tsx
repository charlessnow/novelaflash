"use client";

import { useState } from "react";
import Link from "@/components/ui/InternalLink";
import { type Article } from "@/lib/data";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";

export const IndustryArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <IndustryArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
};

const IndustryArticleCard = ({ article }: { article: Article }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group card card-glow p-6 flex flex-col md:flex-row gap-8 items-center border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VideoThumbnail
        poster={article.image}
        video={article.video}
        alt={article.title}
        playing={isHovered}
        className="w-full md:w-64 h-40 shrink-0 rounded-xl"
        fallbackGradient={
          article.categoryColor === "violet" ? "from-violet-600/40 to-purple-900" :
          article.categoryColor === "pink" ? "from-pink-600/40 to-rose-900" :
          article.categoryColor === "cyan" ? "from-cyan-600/40 to-blue-900" :
          "from-emerald-600/40 to-green-900"
        }
        fallbackText="NovelaFlash"
      />
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`badge ${
              article.categoryColor === "violet" ? "badge-coral" :
              article.categoryColor === "pink" ? "badge-pink" :
              article.categoryColor === "cyan" ? "badge-amber" :
              "badge-green"
            }`}
          >
            {article.category}
          </div>
          <span className="text-[10px] text-rp-text-muted font-bold uppercase tracking-widest">
            {article.publishedAt}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rp-coral transition-colors">
          {article.title}
        </h3>
        <p className="text-rp-text-secondary text-sm line-clamp-2 mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <div className="w-6 h-6 rounded-full bg-stone-800 border border-white/10 overflow-hidden">
            <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-xs font-bold text-white/80">{article.author.name}</span>
          <span className="text-white/20 px-2">&bull;</span>
          <span className="text-xs font-bold text-rp-text-muted">{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
};
