import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { latestArticles } from "@/lib/data";
import Link from "@/components/ui/InternalLink";

export const metadata: Metadata = {
  title: "Short Drama Guides & Resources — ReelPulse",
  description: "Expert guides for navigating the short drama ecosystem. App safety reviews, pricing guides, creator resources, and platform comparisons.",
};

export default function GuidesPage() {
  const safetyGuide = latestArticles.find(a => a.slug === "short-drama-app-safety-guide");

  const additionalGuides = [
    {
      title: "Are Short Drama Apps Safe?",
      href: "/guides/is-dramabox-safe",
      category: "Safety & Trust",
      description: "A practical safety review of DramaBox privacy, app-store legitimacy, subscriptions, and billing risk.",
      readTime: "10 min",
      gradient: "from-rose-500/20 to-red-900/40"
    },
    {
      title: "Best Short Drama Apps 2026",
      category: "App Reviews",
      description: "Our definitive ranking of the top apps for quality, value, and user experience this year.",
      readTime: "15 min",
      gradient: "from-amber-500/20 to-orange-900/40"
    },
    {
      title: "How to Make Money with Short Dramas",
      category: "Creator Economy",
      description: "From script writing to production — a guide to monetization opportunities in the vertical cinema space.",
      readTime: "12 min",
      gradient: "from-pink-500/20 to-rose-900/40"
    },
    {
      title: "DramaBox vs ReelShort",
      href: "/articles/dramabox-vs-reelshort-2026",
      category: "Comparison",
      description: "An head-to-head comparison of the industry's two biggest rivals: content, pricing, and UX.",
      readTime: "8 min",
      gradient: "from-violet-500/20 to-purple-900/40"
    },
    {
      title: "Short Drama Pricing Guide",
      href: "/guides/shortmax-pricing",
      category: "Value Analysis",
      description: "ShortMax coins, VIP plans, free episodes, and how to control binge-watch costs.",
      readTime: "10 min",
      gradient: "from-cyan-500/20 to-blue-900/40"
    },
    {
      title: "Is ReelShort Safe?",
      href: "/guides/is-reelshort-safe",
      category: "Safety & Trust",
      description: "Review ReelShort legitimacy, privacy, subscriptions, coin purchases, and safer viewing habits.",
      readTime: "9 min",
      gradient: "from-fuchsia-500/20 to-pink-900/40"
    },
    {
      title: "How to Submit Content to Short Drama Platforms",
      category: "Creator Guide",
      description: "A step-by-step walkthrough for studios and independent creators looking to distribute their work.",
      readTime: "7 min",
      gradient: "from-emerald-500/20 to-green-900/40"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Guides
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Expert resources for navigating the short drama ecosystem — whether you&apos;re a viewer, creator, or investor.
            </p>
          </ScrollReveal>
        </section>

        {/* Featured Guide */}
        {safetyGuide && (
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <ScrollReveal direction="up">
              <div className="group card-glow rounded-3xl overflow-hidden">
                <div className="relative p-12 md:p-20 bg-rp-bg-card border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rp-coral/10 blur-[150px] -translate-y-1/2 translate-x-1/4" />
                  
                  <div className="relative z-10 max-w-3xl">
                    <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Featured Guide</div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-6 leading-[1.1]">
                      {safetyGuide.title}
                    </h2>
                    <p className="text-rp-text-secondary text-xl font-medium mb-10 leading-relaxed">
                      {safetyGuide.excerpt}
                    </p>
                    <Link href={`/articles/${safetyGuide.slug}`} className="inline-flex items-center gap-4 bg-white text-rp-bg-primary px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-rp-coral hover:text-white transition-all shadow-2xl">
                      Read Guide <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                  </div>

                  <div className="absolute bottom-10 right-10 hidden lg:block opacity-10">
                    <span className="font-display font-black text-[15rem] leading-none select-none tracking-tight uppercase italic">SAFETY</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* All Guides Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-10 italic">
              All Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalGuides.map((guide, i) => (
                <ScrollReveal key={guide.title} direction="up" delay={i * 0.05}>
                  <div className="group card card-glow p-8 h-full flex flex-col border-white/5 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-40 h-40 blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-to-br ${guide.gradient}`} />
                    
                    <div className="mb-6">
                      <div className="badge badge-coral bg-white/5 border-white/10 text-white/60 mb-4">{guide.category}</div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rp-coral transition-colors leading-tight">{guide.title}</h3>
                      <p className="text-rp-text-secondary text-sm leading-relaxed mb-8">{guide.description}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-rp-text-muted italic">{guide.readTime} read</span>
                      <Link href={guide.href ?? "#"} className="font-display font-black text-white uppercase tracking-widest text-[10px] hover:text-rp-coral transition-colors">
                        View <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
