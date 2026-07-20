import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "7 Best Free BL Short Drama Apps & Series 2026 — ReelPulse",
  description: "Discover the best free BL short drama apps and series in 2026. Explore Korean, Thai, and Chinese BL content with top-rated free platforms and exclusive recommendations.",
};

export default function BestBLShortDramaAppsPage() {
  const guidePath = "/guides/best-bl-short-drama-apps";
  const blSeries = [
    { rank: 1, title: "Wicked Game", origin: "Thai", platform: "ReelShort", rating: 9.2 },
    { rank: 2, title: "My School President", origin: "Thai", platform: "YouTube", rating: 8.9 },
    { rank: 3, title: "Hometown's Embrace", origin: "Korean", platform: "MoboReels", rating: 8.7 },
    { rank: 4, title: "Destiny Seeker", origin: "Chinese", platform: "DramaBox", rating: 8.5 },
    { rank: 5, title: "Office Crush", origin: "Korean", platform: "ReelShort", rating: 8.3 }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["best-bl-short-drama-apps"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["best-bl-short-drama-apps"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">BL Content Guide 2026</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Best <span className="text-rp-coral">Free</span> BL Short Drama Apps
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Your complete guide to the best free BL short drama apps and series in 2026. Discover Korean, Thai, and Chinese BL content with exclusive viewing tips.
            </p>
          </ScrollReveal>
        </section>

        {/* AEO Quick Answer Box */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="bg-rp-coral/10 border border-rp-coral/20 p-8 rounded-2xl">
              <h2 className="text-rp-coral font-black uppercase tracking-widest text-sm mb-4">Quick Answer</h2>
              <p className="text-white text-2xl font-bold leading-tight">
                The best free BL short drama apps in 2026 are <span className="text-rp-coral">MoboReels</span> (most generous free tier), <span className="text-rp-coral">ReelShort</span> (best premium BL), and <span className="text-rp-coral">YouTube</span> (official Thai BL uploads). Top series include <span className="italic">Wicked Game</span> and <span className="italic">Hometown&apos;s Embrace</span>.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Summary Table for GEO */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass overflow-hidden rounded-2xl border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-xs">Rank</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-xs">Title</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-xs">Origin</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-xs">Best App</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-xs text-right">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {blSeries.map((show) => (
                    <tr key={show.rank} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 text-rp-text-muted font-bold text-sm">#{show.rank}</td>
                      <td className="p-6 text-white font-bold text-sm">{show.title}</td>
                      <td className="p-6 text-rp-text-secondary text-sm">{show.origin}</td>
                      <td className="p-6"><span className="badge badge-pink text-[10px]">{show.platform}</span></td>
                      <td className="p-6 text-right font-display font-black text-rp-coral">{show.rating.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* What is BL Short Drama */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  What is BL Short Drama?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  BL (Boys' Love) short dramas are bite-sized romantic and dramatic series featuring male-male relationships. These shows typically run 5-15 minutes per episode and are designed for mobile viewing. BL short dramas have exploded in popularity across Asia, particularly in Korea, Thailand, and China, offering compelling storytelling with diverse themes from romance to action-comedy.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Why BL Short Dramas?</h3>
                    <p className="text-rp-text-secondary">BL short dramas offer authentic storytelling, diverse character development, and emotional depth in compact formats. They've become a cultural phenomenon, attracting millions of viewers worldwide who appreciate the genre's unique blend of romance, humor, and drama.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Global Appeal</h3>
                    <p className="text-rp-text-secondary">What started as an Asian phenomenon has gone global. International audiences now actively seek BL content, leading platforms to invest heavily in BL series production and distribution. Subtitles and dubbing have made these shows accessible worldwide.</p>
                  </div>
                </div>
              </div>

              {/* Top 7 BL Series */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Top 7 BL Short Drama Series
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  These are the most acclaimed and popular BL short drama series across platforms:
                </p>
                
                <div className="space-y-8">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">1. "Wicked Game" (Thai)</h3>
                    <p className="text-rp-text-secondary mb-4">A psychological thriller featuring two men caught in a dangerous game of manipulation and desire. The series combines romance with suspense, creating an addictive viewing experience. Known for its plot twists and intense chemistry between leads.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: ReelShort, DramaBox | Episodes: 12 | Rating: 9.2/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">2. "My School President" (Thai)</h3>
                    <p className="text-rp-text-secondary mb-4">A heartwarming coming-of-age romance set in a high school music club. The series balances humor with genuine emotional moments, exploring first love and self-discovery. Perfect for viewers seeking feel-good content.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: YouTube, WeTV | Episodes: 13 | Rating: 8.9/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">3. "Hometown's Embrace" (Korean)</h3>
                    <p className="text-rp-text-secondary mb-4">A Korean BL series exploring the reunion of childhood friends who discover deeper feelings. The series beautifully captures nostalgia and emotional growth, with stunning cinematography and authentic performances.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: ReelShort, MoboReels | Episodes: 10 | Rating: 8.7/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">4. "Destiny Seeker" (Chinese)</h3>
                    <p className="text-rp-text-secondary mb-4">A fantasy-romance series blending action with emotional storytelling. Two warriors from opposing sides find love amidst conflict. Known for its high production values and epic scope.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: DramaBox, iQiyi | Episodes: 15 | Rating: 8.5/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">5. "Office Crush" (Korean)</h3>
                    <p className="text-rp-text-secondary mb-4">A workplace romance comedy featuring two colleagues navigating professional boundaries and personal feelings. Light-hearted with witty dialogue and charming character dynamics.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: ReelShort | Episodes: 8 | Rating: 8.3/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">6. "Midnight Confessions" (Thai)</h3>
                    <p className="text-rp-text-secondary mb-4">An intimate drama exploring vulnerability and connection between two strangers who meet online. The series excels at emotional depth and realistic relationship development.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: DramaBox, YouTube | Episodes: 12 | Rating: 8.4/10</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">7. "Forbidden Hearts" (Chinese)</h3>
                    <p className="text-rp-text-secondary mb-4">A period drama set in ancient China featuring forbidden love between two men from different social classes. Combines historical intrigue with passionate romance and beautiful production design.</p>
                    <p className="text-rp-text-secondary text-sm">Platform: iQiyi, DramaBox | Episodes: 14 | Rating: 8.6/10</p>
                  </div>
                </div>
              </div>

              {/* Best Apps for BL Content */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Best Apps for BL Short Drama Content
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  These platforms offer the most comprehensive BL short drama libraries:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">ReelShort</h3>
                    <p className="text-rp-text-secondary mb-2">Extensive BL collection with daily updates. Strong Korean and Thai content. User-friendly interface with personalized recommendations.</p>
                    <p className="text-rp-text-secondary text-sm">BL Series Count: 200+ | Free Episodes: Yes | Rating: 4.6/5</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">DramaBox</h3>
                    <p className="text-rp-text-secondary mb-2">Diverse BL catalog with Chinese, Thai, and Korean content. High-quality production. Frequent promotional events.</p>
                    <p className="text-rp-text-secondary text-sm">BL Series Count: 180+ | Free Episodes: Yes | Rating: 4.5/5</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">MoboReels</h3>
                    <p className="text-rp-text-secondary mb-2">Curated BL selection with focus on quality over quantity. Strong Korean BL presence. Clean interface.</p>
                    <p className="text-rp-text-secondary text-sm">BL Series Count: 120+ | Free Episodes: Yes | Rating: 4.4/5</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">WeTV</h3>
                    <p className="text-rp-text-secondary mb-2">Official platform for many Thai BL dramas. Premium production quality. Subscription-based with free tier.</p>
                    <p className="text-rp-text-secondary text-sm">BL Series Count: 150+ | Free Episodes: Limited | Rating: 4.5/5</p>
                  </div>
                </div>
              </div>

              {/* Korean BL Section */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Korean BL Short Dramas
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Korean BL dramas are known for their polished production, emotional depth, and diverse storytelling. The Korean BL industry has grown exponentially, producing some of the most acclaimed series globally.
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Why Korean BL Stands Out</h3>
                    <p className="text-rp-text-secondary">Korean productions emphasize cinematography, sound design, and character development. They often explore complex emotions and social themes while maintaining high entertainment value. Korean BL has influenced global standards for the genre.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Popular Korean BL Themes</h3>
                    <p className="text-rp-text-secondary">Workplace romance, school settings, supernatural elements, and slice-of-life stories dominate Korean BL. Many series tackle social issues like acceptance, identity, and family dynamics alongside romance.</p>
                  </div>
                </div>
              </div>

              {/* Thai BL Section */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Thai BL Short Dramas
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Thailand has become the epicenter of BL drama production, with a thriving industry that produces some of the most popular series globally. Thai BL is known for its passionate storytelling and dedicated fanbase.
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Thai BL Characteristics</h3>
                    <p className="text-rp-text-secondary">Thai BL excels at emotional intensity, chemistry between leads, and diverse genres from romance to thriller. The industry has established itself as a major content producer with international distribution.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Where to Watch Thai BL</h3>
                    <p className="text-rp-text-secondary">WeTV is the official platform for many Thai BL dramas, but ReelShort and DramaBox also offer extensive Thai BL libraries. YouTube channels often feature clips and full episodes of popular series.</p>
                  </div>
                </div>
              </div>

              {/* Wicked Game Spotlight */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  "Wicked Game" Deep Dive
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  "Wicked Game" stands as one of the most acclaimed BL short dramas, setting new standards for the genre. Here's why it's essential viewing:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Plot & Themes</h3>
                    <p className="text-rp-text-secondary">The series follows two men entangled in a psychological game of power, desire, and manipulation. It explores themes of control, vulnerability, and the blurred lines between love and obsession. The narrative keeps viewers guessing with unexpected twists.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Production Quality</h3>
                    <p className="text-rp-text-secondary">Exceptional cinematography, moody lighting, and a haunting soundtrack create an immersive atmosphere. The production values rival full-length dramas, elevating the short drama format.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Cast Chemistry</h3>
                    <p className="text-rp-text-secondary">The lead actors deliver nuanced performances with incredible on-screen chemistry. Their ability to convey complex emotions in short episodes is remarkable and a major reason for the series' success.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Where to Watch</h3>
                    <p className="text-rp-text-secondary">Available on ReelShort and DramaBox with both free and premium episodes. The series is complete with all episodes available for binge-watching.</p>
                  </div>
                </div>
              </div>

              {/* Where to Watch */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Where to Watch BL Short Dramas
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Multiple platforms offer BL content with different strengths and pricing models:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Dedicated Short Drama Apps</h3>
                    <p className="text-rp-text-secondary">ReelShort, DramaBox, and MoboReels specialize in short-form content with extensive BL libraries. These apps offer the best user experience for short drama viewing with optimized interfaces and recommendations.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Streaming Platforms</h3>
                    <p className="text-rp-text-secondary">WeTV, iQiyi, and YouTube offer BL content alongside other programming. These platforms provide higher production quality but may have fewer titles and require subscriptions.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Free vs. Premium</h3>
                    <p className="text-rp-text-secondary">Most platforms offer free tiers with ads and limited daily episodes. Premium subscriptions unlock unlimited viewing and ad-free experience. Choose based on your viewing frequency and budget.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">What's the difference between BL and other romance genres?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      BL specifically focuses on male-male relationships. While other romance genres may include LGBTQ+ content, BL centers the gay male experience and relationships as the primary narrative focus.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Are BL short dramas appropriate for all ages?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Most BL short dramas are rated for mature audiences (16+) due to romantic and sometimes explicit content. Always check ratings and content warnings before watching.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">How long are typical BL short drama episodes?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Episodes typically range from 5-15 minutes, with most averaging 8-10 minutes. This format is designed for mobile viewing and quick consumption.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I watch BL dramas with subtitles?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Yes, most platforms offer multiple subtitle options including English, Spanish, French, and more. Dubbing is also available on some platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Start Your BL Journey Today</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  BL short dramas offer compelling storytelling, diverse characters, and emotional depth in bite-sized formats. Whether you're new to the genre or a dedicated fan, there's something for everyone across Korean, Thai, and Chinese productions.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Download ReelShort or DramaBox today and explore the best BL content the world has to offer!
                </p>
              </div>
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
