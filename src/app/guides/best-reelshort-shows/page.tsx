import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Top 20 Most Popular ReelShort Shows 2026 — ReelPulse",
  description: "Best ReelShort shows ranked for 2026, including The Senator's Son, Kingsley, King or Clown, Harper Reeves, and more viral hits.",
};

export default function BestReelShortShows() {
  const guidePath = "/guides/best-reelshort-shows";
  const shows = [
    {
      rank: 1,
      title: "The Senator's Son",
      genre: "Romance",
      rating: 4.8,
      description: "A gripping tale of forbidden love between a senator's son and someone from the opposite side of the tracks. This show captivated millions with its intense chemistry, shocking plot twists, and exploration of class divides. The production quality rivals traditional dramas, with stellar cinematography and compelling character development that keeps viewers binge-watching until the very end."
    },
    {
      rank: 2,
      title: "Kingsley",
      genre: "Drama",
      rating: 4.7,
      description: "An epic saga following a man's rise from nothing to power. Kingsley delivers jaw-dropping moments, complex character arcs, and a narrative that spans multiple timelines. The show's exploration of ambition, betrayal, and redemption resonates deeply with audiences worldwide. Each episode ends on a cliffhanger that leaves viewers desperate for more."
    },
    {
      rank: 3,
      title: "King or Clown",
      genre: "Thriller",
      rating: 4.7,
      description: "A psychological thriller that questions identity and power. The protagonist's journey from obscurity to prominence is fraught with danger, deception, and moral ambiguity. With stellar acting and a plot that keeps you guessing, King or Clown has become a cultural phenomenon among short drama enthusiasts."
    },
    {
      rank: 4,
      title: "Money Guns and Merry Christmas",
      genre: "Action",
      rating: 4.6,
      description: "An adrenaline-pumping action drama that combines heist elements with holiday charm. The show balances intense action sequences with heartfelt moments, creating a unique viewing experience. Its witty dialogue and charismatic cast have made it a fan favorite for those seeking entertainment with substance."
    },
    {
      rank: 5,
      title: "I Had a Baby Without You",
      genre: "Romance",
      rating: 4.6,
      description: "A touching romance that explores parenthood, sacrifice, and unexpected love. The emotional depth of this show resonates with viewers who appreciate character-driven narratives. With beautiful cinematography and genuine performances, it's a must-watch for romance enthusiasts."
    },
    {
      rank: 6,
      title: "Harper Reeves",
      genre: "Mystery",
      rating: 4.5,
      description: "A gripping mystery centered around a woman uncovering dark secrets from her past. Harper Reeves combines suspense with personal drama, creating a compelling narrative that keeps audiences on edge. The show's intricate plot and strong female lead have earned it critical acclaim."
    },
    {
      rank: 7,
      title: "Damian the CEO",
      genre: "Drama",
      rating: 4.5,
      description: "Follow Damian's journey as he navigates the cutthroat world of corporate leadership. This show explores themes of power, loyalty, and personal growth. With sharp writing and dynamic performances, Damian the CEO offers both entertainment and insight into the business world."
    },
    {
      rank: 8,
      title: "Pool Boy",
      genre: "Comedy",
      rating: 4.4,
      description: "A lighthearted yet surprisingly deep comedy about a pool boy who becomes entangled in the lives of a wealthy family. The show balances humor with genuine emotional moments, creating a perfect blend of entertainment. Its charm and wit have made it a beloved series."
    },
    {
      rank: 9,
      title: "When I'm Gone",
      genre: "Drama",
      rating: 4.4,
      description: "A poignant drama exploring mortality, legacy, and the impact we leave behind. When I'm Gone tackles heavy themes with sensitivity and grace. The show's emotional resonance and powerful performances make it a standout in the short drama landscape."
    },
    {
      rank: 10,
      title: "You Fired a Tech Genius",
      genre: "Thriller",
      rating: 4.3,
      description: "A revenge thriller about a tech genius who was wrongfully fired and seeks to expose corporate corruption. The show combines technical intrigue with personal vendetta, creating a compelling narrative. Its exploration of justice and redemption resonates with modern audiences."
    },
    {
      rank: 11,
      title: "Kiss Me One Last Time",
      genre: "Romance",
      rating: 4.3,
      description: "A bittersweet romance about second chances and lost love. Kiss Me One Last Time explores the complexity of relationships and the power of nostalgia. With beautiful cinematography and heartfelt performances, it's a tearjerker that stays with you long after viewing."
    },
    {
      rank: 12,
      title: "Alpha Mate",
      genre: "Fantasy",
      rating: 4.2,
      description: "A paranormal romance featuring werewolves and fated mates. Alpha Mate combines fantasy worldbuilding with passionate romance, appealing to fans of supernatural dramas. The show's unique premise and engaging cast have built a dedicated fanbase."
    },
    {
      rank: 13,
      title: "Queen Never Cry",
      genre: "Drama",
      rating: 4.2,
      description: "An inspiring story of a woman rising to power despite overwhelming odds. Queen Never Cry celebrates resilience, intelligence, and female empowerment. The protagonist's journey is both entertaining and motivational, making it a favorite among viewers seeking strong female characters."
    },
    {
      rank: 14,
      title: "Summer Situationship",
      genre: "Romance",
      rating: 4.1,
      description: "A contemporary romance about undefined relationships and summer romance. Summer Situationship captures the uncertainty and excitement of modern dating. Its relatable characters and witty dialogue have made it a hit with younger audiences."
    },
    {
      rank: 15,
      title: "Xmas Surprise",
      genre: "Comedy",
      rating: 4.1,
      description: "A festive comedy about unexpected holiday encounters and second chances. Xmas Surprise combines humor with heartwarming moments, perfect for seasonal viewing. The show's charm and feel-good vibes make it a comfort watch."
    },
    {
      rank: 16,
      title: "Ben Armstrong",
      genre: "Thriller",
      rating: 4.0,
      description: "A gripping thriller following a man's quest for truth and justice. Ben Armstrong delivers suspense, action, and emotional depth. The show's intricate plot and strong performances keep viewers engaged throughout."
    },
    {
      rank: 17,
      title: "Surrender to My Professor",
      genre: "Romance",
      rating: 4.0,
      description: "A forbidden romance between a student and professor that explores power dynamics and genuine connection. Surrender to My Professor is a guilty pleasure that combines tension with emotional depth. The chemistry between leads is undeniable."
    },
    {
      rank: 18,
      title: "Too Little Too Late",
      genre: "Drama",
      rating: 3.9,
      description: "A poignant drama about regret, redemption, and the consequences of our choices. Too Little Too Late explores themes of family, forgiveness, and second chances. Its emotional impact and strong storytelling make it memorable."
    },
    {
      rank: 19,
      title: "You Belong With Me",
      genre: "Romance",
      rating: 3.9,
      description: "A sweet romance about childhood friends discovering love. You Belong With Me captures the magic of slow-burn romance and genuine connection. The show's nostalgic charm and authentic performances resonate with audiences."
    },
    {
      rank: 20,
      title: "Breaking the Ice",
      genre: "Sports",
      rating: 3.8,
      description: "A sports drama about figure skaters overcoming personal and professional obstacles. Breaking the Ice combines athletic excellence with personal drama. The show's stunning visuals and compelling characters make it a unique entry in the short drama genre."
    }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["best-reelshort-shows"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["best-reelshort-shows"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Top 20 ReelShort Shows
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl mb-8">
              The most popular and critically acclaimed ReelShort dramas of 2026. From The Senator's Son to Breaking the Ice, discover the shows that have captivated millions of viewers worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-coral">2026 Rankings</div>
              <div className="badge badge-pink">20 Shows</div>
              <div className="badge badge-cyan">Updated Monthly</div>
            </div>
          </ScrollReveal>
        </section>

        {/* AEO Quick Answer Box */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="bg-rp-coral/10 border border-rp-coral/20 p-8 rounded-2xl">
              <h2 className="text-rp-coral font-black uppercase tracking-widest text-sm mb-4">Quick Answer</h2>
              <p className="text-white text-2xl font-bold leading-tight">
                The best ReelShort shows in 2026 are <span className="text-rp-coral">The Senator&apos;s Son</span>, <span className="text-rp-coral">Kingsley</span>, and <span className="text-rp-coral">King or Clown</span>. These titles lead the rankings based on viewer engagement, production quality, and cultural impact.
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
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider">Rank</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider">Show Title</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider">Genre</th>
                    <th className="p-6 font-display font-black text-white uppercase tracking-wider text-right">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {shows.slice(0, 5).map((show) => (
                    <tr key={show.rank} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 text-rp-text-muted font-bold">#{show.rank}</td>
                      <td className="p-6 text-white font-bold">{show.title}</td>
                      <td className="p-6"><span className="badge badge-coral">{show.genre}</span></td>
                      <td className="p-6 text-right font-display font-black text-rp-coral">{show.rating.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-white/5 text-center">
                <p className="text-rp-text-muted text-xs font-medium italic">Table shows Top 5 of 20 ranked shows. Scroll down for full details.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                Why These Shows Stand Out
              </h2>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                ReelShort has revolutionized short-form drama with vertical cinema technology and compelling storytelling. Our ranking considers viewer engagement, critical reception, production quality, and cultural impact. These 20 shows represent the pinnacle of what the platform offers in 2026.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed">
                Whether you're seeking intense thrillers, heartwarming romances, or action-packed adventures, this list covers the full spectrum of ReelShort's diverse catalog. Each show has earned its place through exceptional storytelling and audience devotion.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Shows List */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="space-y-6">
            {shows.map((show, index) => (
              <ScrollReveal key={show.rank} direction="up" delay={index * 0.05}>
                <div className="group card card-glow p-8 md:p-10 border-white/5 hover:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      <span className="font-display font-black text-6xl md:text-7xl text-white/10 italic select-none">
                        {show.rank.toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-3">
                            {show.title}
                          </h3>
                          <div className="badge badge-coral">{show.genre}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black uppercase tracking-widest text-rp-text-muted">Rating</span>
                          <span className="font-display font-black text-4xl text-rp-coral">{show.rating.toFixed(1)}</span>
                          <span className="text-rp-text-muted">/5</span>
                        </div>
                      </div>

                      <p className="text-rp-text-secondary text-base leading-relaxed">
                        {show.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Genre Breakdown */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Genre Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { genre: "Romance", count: 7, color: "from-pink-600 to-rose-600" },
                { genre: "Drama", count: 5, color: "from-purple-600 to-violet-600" },
                { genre: "Thriller", count: 4, color: "from-red-600 to-orange-600" },
                { genre: "Other", count: 4, color: "from-blue-600 to-cyan-600" }
              ].map((item) => (
                <ScrollReveal key={item.genre} direction="up">
                  <div className={`glass p-8 rounded-2xl border-white/10 bg-gradient-to-br ${item.color} bg-opacity-10`}>
                    <div className="text-4xl font-display font-black text-white mb-2">{item.count}</div>
                    <div className="text-rp-text-secondary font-bold uppercase tracking-wider text-sm">{item.genre} Shows</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* How to Watch */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                How to Watch These Shows
              </h2>
              <div className="space-y-4 text-rp-text-secondary">
                <p className="text-lg leading-relaxed">
                  All 20 shows on this list are available exclusively on the ReelShort app. Download the app from your device's app store (iOS or Android) to start watching immediately.
                </p>
                <p className="text-lg leading-relaxed">
                  ReelShort offers both free and premium viewing options. Free users can watch with ads, while premium subscribers enjoy ad-free viewing and early access to new episodes. Many shows offer free episodes to get you hooked before requiring coins for continued viewing.
                </p>
                <p className="text-lg leading-relaxed">
                  Pro tip: Check ReelShort's daily rewards and login bonuses to earn free coins. Many of these top shows can be watched entirely without spending money if you're strategic about your viewing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Are these shows completed or ongoing?",
                  a: "Most of these shows have completed seasons, though some may have new seasons in production. Check the ReelShort app for current status and episode availability."
                },
                {
                  q: "Can I watch these shows for free?",
                  a: "Yes! ReelShort offers free viewing with ads. You can also earn coins through daily rewards and login bonuses to unlock premium episodes."
                },
                {
                  q: "What's the average episode length?",
                  a: "ReelShort episodes typically range from 5-15 minutes, making them perfect for quick entertainment during breaks or commutes."
                },
                {
                  q: "Are subtitles available?",
                  a: "Most shows include English subtitles. Check individual show pages on ReelShort for subtitle availability in your language."
                }
              ].map((item, i) => (
                <ScrollReveal key={item.q} direction="up" delay={i * 0.1}>
                  <div className="card p-8 border-white/5">
                    <h3 className="font-bold text-white text-lg mb-3 uppercase tracking-tight">{item.q}</h3>
                    <p className="text-rp-text-secondary leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
