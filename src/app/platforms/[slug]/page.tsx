import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { platforms } from "@/lib/data";
import { createBreadcrumbList, SITE_URL, toAbsoluteUrl } from "@/lib/seo";
import Link from "@/components/ui/InternalLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const PLATFORM_REVIEWS: Record<string, {
  tagline: string;
  overview: string;
  contentLibrary: string;  
  pricing: string;
  verdict: string;
  pros: string[];
  cons: string[];
}> = {
  reelshort: {
    tagline: "The undisputed market leader in short drama entertainment",
    overview: "ReelShort, developed by Crazy Maple Studio (a subsidiary of COL Group), has emerged as the dominant force in the micro-drama market. Launched in August 2022, the platform generated an estimated $250 million in revenue in 2024, with over 55 million downloads globally. ReelShort was recognized as a TIME 100 Most Influential Company in 2024. Its breakout title 'The Double Life of My Billionaire Husband' surpassed 500 million views. The platform excels in content localization, offering high-quality vertical dramas spanning romance, thriller, fantasy, and revenge genres tailored for Western audiences.",
    contentLibrary: "ReelShort boasts the largest and most diverse content library among short drama apps. The platform produces and acquires hundreds of original titles annually, with strong offerings in CEO romance, werewolf fantasy, billionaire drama, and revenge thriller genres. Content quality is consistently high, with professional production values that rival traditional streaming platforms. The localization from Chinese source material to English-language content is among the best in the industry.",
    pricing: "ReelShort operates on a coin-based system where episodes cost between $0.20-$0.50 each. A typical 80-episode series costs $16-$40 to watch in full. VIP subscriptions are available at $6.99/week or $19.99/month, offering unlimited access to select content. The platform also offers a limited number of free episodes daily through ad-supported viewing. While pricing is premium compared to competitors, the content quality justifies the cost for most users.",
    verdict: "ReelShort is the clear market leader for good reason. Its content quality, diverse library, and polished user experience set the standard for the short drama industry. The premium pricing may deter budget-conscious users, but for those willing to invest, ReelShort delivers the best short drama experience available.",
    pros: ["Best content quality in the market", "Largest and most diverse library", "Excellent localization and production values", "TIME 100 recognized company", "Strong recommendation algorithm"],
    cons: ["Premium pricing compared to competitors", "Aggressive monetization with frequent purchase prompts", "Some users report difficulty canceling subscriptions"],
  },
  dramabox: {
    tagline: "The fast-growing challenger with an unbeatable content library",
    overview: "DramaBox, developed by STORYMATRIX PTE. LTD., has rapidly established itself as ReelShort's primary competitor. With over 40 million downloads and an App Store rating of ~4.8 stars (598K+ ratings), DramaBox is often the #1 short drama app in downloads and revenue globally. The platform focuses heavily on romance and revenge genres, offering one of the largest content libraries in the space with AI-driven recommendations and almost daily new releases.",
    contentLibrary: "DramaBox offers an enormous library that rivals and sometimes exceeds ReelShort in sheer volume. The platform is particularly strong in romance, revenge, and CEO drama genres. Content is sourced from a wide network of Chinese production studios, resulting in a constant stream of new releases. While individual title quality can be inconsistent, the breadth of selection ensures something for every taste.",
    pricing: "DramaBox uses a similar coin-based model but generally offers more competitive pricing than ReelShort. Episodes typically cost $0.15-$0.40, and the platform frequently runs promotions and offers bonus coins. A subscription option is available at a lower price point than ReelShort. The ad-supported free tier is more generous, making it a better option for budget-conscious viewers.",
    verdict: "DramaBox is the best choice for viewers who prioritize volume and value. Its massive library and competitive pricing make it an excellent ReelShort alternative, particularly for romance drama fans. The trade-off is slightly less consistent quality and a less polished user interface.",
    pros: ["Massive content library with daily new releases", "More competitive pricing than ReelShort", "Generous free tier and frequent promotions", "Strong in romance and revenge genres"],
    cons: ["Inconsistent content quality across titles", "Less polished user interface", "Some localization could be improved"],
  },
  shortmax: {
    tagline: "The content powerhouse with 50M+ downloads worldwide",
    overview: "ShortMax, developed by SHORTMAX LIMITED, has become one of the biggest names in short drama with 50M+ downloads across iOS and Android. The platform has built a strong reputation in romance and drama genres, pairing a massive content catalog with an effective recommendation engine that keeps viewers cycling through new series. On Google Play, it holds a 4.2 star rating with 1.42M reviews, underscoring both its scale and broad mainstream appeal in the global short-form streaming market.",
    contentLibrary: "ShortMax offers a large library that rivals DramaBox in sheer volume, with particular strength in romance, revenge, and CEO drama storylines. The app pushes daily new releases aggressively, giving heavy viewers a constant stream of fresh episodes and serialized hooks. Its catalog breadth is a major advantage for users who want maximum variety without leaving the platform.",
    pricing: "ShortMax uses the familiar coin-based unlock model used by leading short drama competitors, while also offering subscription options for viewers who want more predictable access. Pricing is generally competitive within the category, and the platform regularly runs promotions that improve value for frequent watchers.",
    verdict: "ShortMax is an excellent choice for volume-focused viewers who want a massive library, reliable recommendations, and competitive pricing in one app.",
    pros: ["Massive 50M+ download user base", "Large and diverse content library", "Strong recommendation algorithm", "Competitive pricing with frequent promotions"],
    cons: ["App interface could be more polished", "Some content quality inconsistency", "Heavy ad presence on free tier"],
  },
  flextv: {
    tagline: "Genre diversity beyond the romance formula",
    overview: "FlexTV differentiates itself by offering the widest genre diversity among short drama apps. While most competitors focus heavily on romance, FlexTV has invested in thriller, fantasy, sci-fi, and action content. With 5 million+ downloads on Google Play and multi-language subtitle support, the platform appeals to viewers looking for something beyond the typical CEO romance formula.",
    contentLibrary: "FlexTV's content strategy prioritizes genre breadth over depth. The platform offers competitive selections in thriller, supernatural, and action categories that are underserved by competitors. Romance content is available but doesn't dominate the library. This makes FlexTV the go-to platform for male viewers and anyone seeking non-romance short dramas.",
    pricing: "FlexTV's pricing is competitive, with episodes ranging from $0.15-$0.40. The platform offers a reasonable free tier with ad-supported content and regular promotional offers. Subscription pricing is in line with industry averages.",
    verdict: "FlexTV is the best choice for viewers who want more than romance. Its genre diversity fills a genuine gap in the market. The trade-off is a smaller overall user base and occasionally slower content updates.",
    pros: ["Best genre diversity in the market", "Strong thriller and fantasy content", "Appeals to male audience", "Competitive pricing"],
    cons: ["Smaller user base than top platforms", "Slower content update cycle", "Less polished production on some titles"],
  },
  moboreels: {
    tagline: "The budget-friendly entry point to short dramas",
    overview: "MoboReels is the newest major entrant in the short drama space, positioning itself as the most accessible platform with its generous ad-supported free tier. With 3 million downloads and $15 million in annual revenue, MoboReels targets budget-conscious viewers who want to explore short dramas without significant upfront investment.",
    contentLibrary: "MoboReels has the smallest library among the top five platforms but is growing rapidly. Content skews toward popular genres like romance and revenge, with a mix of licensed and original titles. The platform compensates for its smaller library with aggressive free-to-watch offerings through its ad-supported model.",
    pricing: "MoboReels offers the most generous free tier in the industry. Users can watch a significant amount of content for free with ads, and paid episodes are the cheapest among major platforms at $0.10-$0.30 each. This makes it an excellent starting point for users new to short dramas who aren't ready to commit to premium pricing.",
    verdict: "MoboReels is perfect for newcomers to short dramas or budget-conscious viewers. Its free tier is genuinely useful, and paid content is the cheapest available. The compromise is a smaller library and more frequent ads.",
    pros: ["Best free tier in the industry", "Cheapest paid content", "Low barrier to entry for newcomers", "Growing content library"],
    cons: ["Smallest content library", "More frequent and intrusive ads", "Less premium feel overall", "Limited original productions"],
  },
  flickreels: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  snackshort: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  starshort: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  honeyreels: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  topshort: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  footage: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  veloria: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  pancake: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  stardusttv: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
  playlet: {
    tagline: "Short Drama Platform",
    overview: "Official short drama streaming platform.",
    contentLibrary: "Vertical micro-dramas.",
    pricing: "In-app purchases and subscription options available.",
    verdict: "Data pending detailed review.",
    pros: ["Official app"],
    cons: ["Detailed metrics currently unavailable"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((item) => item.slug === slug);

  if (!platform) {
    notFound();
  }

  const title = `${platform.name} Review 2026 — ReelPulse`;
  const description = `${platform.name} review with a ${platform.score.toFixed(1)}/10 score, ${platform.downloads} downloads, and key insights on pricing, content, and value. Compare top apps now.`;
  const canonical = `/platforms/${platform.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default async function PlatformReview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms.find(p => p.slug === slug);

  if (!platform) {
    notFound();
  }

  const review = PLATFORM_REVIEWS[slug as keyof typeof PLATFORM_REVIEWS];
  const platformUrl = `${SITE_URL}/platforms/${platform.slug}`;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${platform.name} review`,
    reviewBody: review?.verdict ?? platform.description,
    url: platformUrl,
    author: {
      "@type": "Organization",
      name: "ReelPulse",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: platform.score,
      bestRating: 10,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: platform.name,
      description: platform.description,
      applicationCategory: platform.category,
      image: toAbsoluteUrl(platform.icon),
      operatingSystem: "iOS, Android, Web",
      url: platform.links?.website ?? platformUrl,
    },
  };
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Platforms", item: `${SITE_URL}/platforms` },
    { name: platform.name, item: platformUrl },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-rp-bg-secondary to-rp-bg-primary py-20 border-b border-white/5 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4`} />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-3xl object-cover shadow-2xl shadow-rose-500/20"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white">
                      {platform.name}
                    </h1>
                    <div className="badge badge-coral text-sm py-1.5 px-4">{platform.category}</div>
                  </div>
                  <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
                    {platform.description}
                  </p>
                  <div className="mt-8">
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-5 bg-rp-coral text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_30px_rgba(255,87,87,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:bg-white hover:text-rp-bg-primary transition-all group">
                      Claim Free Coins & Watch Now
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Editorial Score</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-5xl text-rp-coral">{platform.score.toFixed(1)}</span>
                    <span className="text-rp-text-muted font-bold">/ 10</span>
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Global Downloads</span>
                  <span className="font-display font-black text-5xl text-white">{platform.downloads}</span>
                </div>
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Est. Annual Revenue</span>
                  <span className="font-display font-black text-5xl text-white">{platform.revenue}</span>
                </div>
              </div>

              {platform.links && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {platform.links.appStore && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-rp-coral hover:text-white transition-all">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      App Store
                    </a>
                  )}
                  {platform.links.googlePlay && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-rp-coral hover:text-white transition-all">
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"/><path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"/><path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"/><path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"/></svg>
                      Google Play
                    </a>
                  )}
                  {platform.links.website && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Official Website
                    </a>
                  )}
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="space-y-16">
                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Overview</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.overview}</p>
                   </div>
                 </section>

                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Content Library</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.contentLibrary}</p>
                   </div>
                 </section>

                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Pricing & Value</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.pricing}</p>
                   </div>
                 </section>

                <section className="p-8 rounded-2xl bg-rp-bg-card border border-white/5">
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-8">The Verdict</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                     <div>
                       <h4 className="text-rp-green font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-rp-green" /> Pros
                       </h4>
                       <ul className="space-y-3 text-sm text-rp-text-secondary">
                         {review?.pros.map((pro) => (
                           <li key={pro} className="flex items-start gap-2">
                             <span className="text-rp-green font-bold">✓</span> {pro}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-rp-pink font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-rp-pink" /> Cons
                       </h4>
                       <ul className="space-y-3 text-sm text-rp-text-secondary">
                         {review?.cons.map((con) => (
                           <li key={con} className="flex items-start gap-2">
                             <span className="text-rp-pink font-bold">×</span> {con}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                    <p className="text-white font-medium italic border-t border-white/5 pt-6">
                      &ldquo;{review?.verdict}&rdquo;
                    </p>
                 </section>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-8">Score Breakdown</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Content Quality", score: 9.5 },
                      { label: "User Experience", score: 9.0 },
                      { label: "Value for Money", score: 8.5 },
                      { label: "Innovation", score: 9.8 },
                    ].map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                          <span className="text-rp-text-secondary">{item.label}</span>
                          <span className="text-white">{item.score}</span>
                        </div>
                        <div className="score-bar">
                          <div className="score-bar-fill" style={{ width: `${item.score * 10}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Developer", value: "Crazy Maple Studio" },
                      { label: "Headquarters", value: "Sunnyvale, CA" },
                      { label: "Launch Date", value: "August 2022" },
                      { label: "Availability", value: "iOS, Android, Web" },
                    ].map((fact) => (
                      <div key={fact.label} className="flex flex-col">
                        <span className="text-[10px] text-rp-text-muted uppercase tracking-widest font-black mb-1">{fact.label}</span>
                        <span className="text-sm font-bold text-white">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6">Alternatives</h3>
                  <div className="flex flex-col gap-4">
                    {platforms.slice(1, 4).map((alt) => (
                      <Link key={alt.slug} href={`/platforms/${alt.slug}`} className="group card p-4 flex items-center gap-4">
                        <img
                          src={alt.icon}
                          alt={alt.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white group-hover:text-rp-coral transition-colors">{alt.name}</span>
                          <span className="text-[10px] text-rp-text-muted uppercase font-black">{alt.score} Rating</span>
                        </div>
                         <span className="ml-auto text-rp-text-muted group-hover:text-white transition-colors"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return platforms.map(p => ({ slug: p.slug }));
}
