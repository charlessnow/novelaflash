import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { platforms } from "@/lib/data";
import Link from "@/components/ui/InternalLink";

export const metadata: Metadata = {
  title: "Short Drama Platforms Directory 2026 — ReelPulse",
  description: "Every major short drama app reviewed and ranked. Compare ReelShort, DramaBox, ShortMax, FlexTV, and MoboReels with expert editorial scores.",
};

export default function PlatformsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Platforms
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mb-16">
              Every major short drama app, reviewed and ranked by our editorial team.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-12 mb-32">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.slug} direction="up" delay={index * 0.1}>
                <div className="group card card-glow p-10 md:p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
                  {/* Background Accents */}
                  <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/4 rounded-full
                    ${index % 3 === 0 ? 'bg-rp-coral' : index % 3 === 1 ? 'bg-rp-amber' : 'bg-rp-pink'}`} 
                  />
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-10 flex-grow relative z-10">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      width={160}
                      height={160}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl shrink-0"
                    />
                    
                    <div className="flex flex-col text-center md:text-left">
                      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                          {platform.name}
                        </h3>
                        <div className="badge badge-coral text-sm py-1 px-4">{platform.category}</div>
                      </div>
                      <p className="text-rp-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-80 flex flex-col gap-6 relative z-10 p-8 glass rounded-2xl border-white/5">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-rp-text-muted">ReelScore</span>
                      <span className="font-display font-black text-5xl text-rp-coral leading-none">{platform.score.toFixed(1)}</span>
                    </div>
                    <div className="score-bar w-full h-2">
                      <div className="score-bar-fill" style={{ width: `${platform.score * 10}%` }} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 my-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest mb-1">Downloads</span>
                        <span className="text-base font-bold text-white">{platform.downloads}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest mb-1">Est. Revenue</span>
                        <span className="text-base font-bold text-white">{platform.revenue}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="block py-4 text-center bg-rp-coral text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-rp-bg-primary transition-all rounded-xl shadow-[0_0_20px_rgba(255,87,87,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        Watch Now <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1 -mt-0.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </a>
                      <Link href={`/platforms/${platform.slug}`} className="block py-3 text-center bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all rounded-xl">
                        Read Full Review
                      </Link>
                    </div>

                    {platform.links && (
                      <div className="flex items-center justify-center gap-3 mt-4">
                        {platform.links.appStore && (
                          <a href={platform.links.appStore} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rp-text-muted hover:text-white hover:bg-white/10 transition-all" aria-label={`${platform.name} on App Store`}>
                            <span className="sr-only">{platform.name} on App Store</span>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                          </a>
                        )}
                        {platform.links.googlePlay && (
                          <a href={platform.links.googlePlay} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rp-text-muted hover:text-white hover:bg-white/10 transition-all" aria-label={`${platform.name} on Google Play`}>
                            <span className="sr-only">{platform.name} on Google Play</span>
                            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 32 32" fill="currentColor"><path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"/><path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"/><path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"/><path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"/></svg>
                          </a>
                        )}
                        {platform.links.website && (
                          <a href={platform.links.website} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rp-text-muted hover:text-white hover:bg-white/10 transition-all" aria-label={`${platform.name} website`}>
                            <span className="sr-only">{platform.name} website</span>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <ScrollReveal direction="up">
            <NewsletterCTA />
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
