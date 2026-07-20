import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "15 Best Chinese Short Dramas to Watch in 2026 (Ranked) — NovelaFlash",
  description: "The 15 best Chinese short dramas of 2026, ranked by genre and viewer ratings. Covers where to watch on ReelShort and DramaBox, episode counts, and what makes each series worth binging.",
};

export default function BestChineseShortDramas() {
  const guidePath = "/guides/best-chinese-short-dramas";
  const shows = [
    {
      rank: 1,
      title: "No Return",
      genre: "Thriller",
      rating: 4.9,
      description: "A gripping thriller about a woman who discovers she can't go back to her old life. No Return explores themes of transformation, survival, and redemption. The show's intense narrative and powerful performances have made it a global phenomenon. It's a masterclass in suspenseful storytelling."
    },
    {
      rank: 2,
      title: "Mute Girl Who Sings",
      genre: "Drama",
      rating: 4.8,
      description: "An inspiring story about a mute girl who finds her voice through music. Mute Girl Who Sings celebrates resilience and self-discovery. The show's emotional depth and beautiful cinematography create a moving viewing experience. It's a testament to the power of art and expression."
    },
    {
      rank: 3,
      title: "The Past Drowned in Moonlight",
      genre: "Romance",
      rating: 4.8,
      description: "A poetic romance about two people reconnecting with their past. The Past Drowned in Moonlight combines beautiful visuals with emotional storytelling. The show explores themes of nostalgia, love, and second chances. It's a romantic drama that lingers in your heart."
    },
    {
      rank: 4,
      title: "Boxing Champion",
      genre: "Sports",
      rating: 4.7,
      description: "An inspiring sports drama about a boxer's journey to greatness. Boxing Champion combines athletic excellence with personal struggle. The show's dynamic action sequences and character development create an engaging narrative. It's perfect for sports enthusiasts and drama lovers alike."
    },
    {
      rank: 5,
      title: "Love Never Ends",
      genre: "Romance",
      rating: 4.7,
      description: "A sweeping romance about love that transcends time and circumstance. Love Never Ends explores the depths of human connection and devotion. The show's epic scope and emotional intensity have captivated millions. It's a celebration of love's transformative power."
    },
    {
      rank: 6,
      title: "Iron Lady",
      genre: "Drama",
      rating: 4.6,
      description: "An empowering drama about a woman rising to power in a male-dominated world. Iron Lady celebrates female strength and intelligence. The show's strong protagonist and compelling narrative resonate with modern audiences. It's inspiring without being preachy."
    },
    {
      rank: 7,
      title: "East of Eden",
      genre: "Drama",
      rating: 4.6,
      description: "An epic family drama exploring generational conflict and redemption. East of Eden combines sweeping narratives with intimate character moments. The show's exploration of family dynamics and personal growth creates a rich viewing experience. It's a modern classic."
    },
    {
      rank: 8,
      title: "My Heroine",
      genre: "Romance",
      rating: 4.5,
      description: "A charming romance about a woman becoming the hero of her own story. My Heroine celebrates self-love and empowerment. The show's witty dialogue and genuine performances create an engaging love story. It's perfect for those seeking feel-good romance."
    },
    {
      rank: 9,
      title: "One and Only",
      genre: "Romance",
      rating: 4.5,
      description: "A passionate romance about soulmates finding each other against all odds. One and Only explores the concept of destiny and true love. The show's chemistry between leads and emotional depth create a compelling narrative. It's a romantic drama that celebrates connection."
    },
    {
      rank: 10,
      title: "Intense Love",
      genre: "Romance",
      rating: 4.4,
      description: "A steamy romance about passion and obsession. Intense Love explores the darker side of love and desire. The show's chemistry and emotional intensity create an addictive viewing experience. It's a drama for those who appreciate complex relationships."
    },
    {
      rank: 11,
      title: "Drowning in Love",
      genre: "Romance",
      rating: 4.4,
      description: "A romantic drama about losing yourself in love. Drowning in Love explores themes of sacrifice and devotion. The show's beautiful cinematography and emotional performances create a moving experience. It's a poetic exploration of love's power."
    },
    {
      rank: 12,
      title: "Dark Lord",
      genre: "Fantasy",
      rating: 4.3,
      description: "A dark fantasy about a powerful lord and the woman who challenges him. Dark Lord combines supernatural elements with romance. The show's unique worldbuilding and compelling characters create an engaging narrative. It's perfect for fantasy enthusiasts."
    },
    {
      rank: 13,
      title: "Destined for More",
      genre: "Drama",
      rating: 4.3,
      description: "An ambitious drama about a woman breaking free from her circumstances. Destined for More celebrates ambition and self-determination. The show's inspiring narrative and strong performances resonate with audiences. It's an empowering story about claiming your destiny."
    },
    {
      rank: 14,
      title: "Redemption",
      genre: "Thriller",
      rating: 4.2,
      description: "A gripping thriller about seeking redemption for past sins. Redemption explores themes of justice, forgiveness, and transformation. The show's intense narrative and moral complexity create a thought-provoking experience. It's a drama that challenges viewers' perspectives."
    },
    {
      rank: 15,
      title: "Runaway Sweetheart",
      genre: "Romance",
      rating: 4.2,
      description: "A charming romance about two people on the run together. Runaway Sweetheart combines adventure with love. The show's chemistry and humor create an entertaining viewing experience. It's a fun, engaging romance with heart."
    }
  ];

  const platforms = [
    {
      name: "ReelShort",
      description: "Specializes in Chinese short dramas with English subtitles. Offers both free and premium viewing options.",
      icon: "📱"
    },
    {
      name: "DramaBox",
      description: "Features a diverse collection of Chinese dramas alongside other international content.",
      icon: "🎬"
    },
    {
      name: "YouTube",
      description: "Many Chinese short drama channels upload full series with subtitles. Search for specific show titles.",
      icon: "▶️"
    },
    {
      name: "Douyin (TikTok China)",
      description: "The original platform where many Chinese short dramas debut. Only available in mainland China and Hong Kong. International users have TikTok instead.",
      icon: "🎵"
    }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["best-chinese-short-dramas"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["best-chinese-short-dramas"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Best Chinese Short Dramas
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl mb-8">
              Explore the phenomenon reshaping entertainment. Discover the top 15 Chinese short dramas of 2026, where to watch them, and why this $26 billion market is taking over the world.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-coral">Top 15 Series</div>
              <div className="badge badge-pink">$26B Market</div>
              <div className="badge badge-cyan">Global Phenomenon</div>
            </div>
          </ScrollReveal>
        </section>

        {/* Market Overview */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                The Chinese Short Drama Phenomenon
              </h2>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                Chinese short dramas have exploded into a global phenomenon, generating over $26 billion in revenue annually. What started as a niche entertainment format has become a cultural force, captivating audiences worldwide with compelling storytelling, high production values, and innovative vertical cinema technology.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                The format's success lies in its ability to deliver complete narratives in bite-sized episodes, perfect for modern viewing habits. Chinese creators have mastered the art of cliffhangers, emotional depth, and character development within tight time constraints.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed">
                From romantic dramas to action thrillers, Chinese short dramas offer something for every taste. The industry's rapid growth has attracted investment from major streaming platforms and production companies worldwide, ensuring continued innovation and quality.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Top 15 Shows */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight">
              Top 15 Series
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {shows.map((show, index) => (
              <ScrollReveal key={show.rank} direction="up" delay={index * 0.05}>
                <div className="group card card-glow p-8 md:p-10 border-white/5 hover:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <span className="font-display font-black text-6xl md:text-7xl text-white/10 italic select-none">
                        {show.rank.toString().padStart(2, '0')}
                      </span>
                    </div>

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

        {/* Where to Watch */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight">
              Where to Watch
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} direction="up" delay={i * 0.1}>
                <div className="card p-8 border-white/5">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-rp-text-secondary leading-relaxed">
                    {platform.description}
                  </p>
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
                { genre: "Drama", count: 4, color: "from-purple-600 to-violet-600" },
                { genre: "Thriller", count: 2, color: "from-red-600 to-orange-600" },
                { genre: "Other", count: 2, color: "from-blue-600 to-cyan-600" }
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

        {/* Viewing Tips */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                Tips for Watching Chinese Short Dramas
              </h2>
              <div className="space-y-4 text-rp-text-secondary">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Embrace the Format:</span> Chinese short dramas are designed for binge-watching. Episodes are typically 5-15 minutes, making them perfect for quick entertainment sessions.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Check Subtitles:</span> Most platforms offer English subtitles, but quality varies. ReelShort and DramaBox typically have the best subtitle quality.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Expect Cliffhangers:</span> Chinese dramas are masters of the cliffhanger. Each episode ends with a hook designed to keep you watching. This is intentional and part of the appeal.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Explore Different Genres:</span> Don't limit yourself to one genre. Chinese creators excel across romance, thriller, fantasy, and comedy.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Join Communities:</span> Connect with other fans online. Many shows have dedicated communities where viewers discuss episodes and theories.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Chinese Dramas Win */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Why Chinese Short Dramas Are Winning
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Innovative Storytelling",
                  desc: "Chinese creators have perfected the art of telling complete stories in short episodes. They understand pacing, character development, and emotional beats in ways that keep audiences engaged."
                },
                {
                  title: "High Production Values",
                  desc: "Despite the short format, Chinese dramas invest heavily in cinematography, costumes, and set design. The visual quality rivals traditional television dramas."
                },
                {
                  title: "Diverse Content",
                  desc: "From historical epics to contemporary romances, Chinese short dramas cover every genre and theme. There's something for every viewer."
                },
                {
                  title: "Cultural Authenticity",
                  desc: "These dramas offer authentic glimpses into Chinese culture, values, and storytelling traditions. They provide cultural education alongside entertainment."
                },
                {
                  title: "Affordable Access",
                  desc: "Most platforms offer free viewing with ads or affordable premium subscriptions. The cost-to-content ratio is unbeatable."
                },
                {
                  title: "Global Appeal",
                  desc: "Despite being Chinese productions, these dramas resonate with audiences worldwide. Universal themes of love, ambition, and redemption transcend cultural boundaries."
                }
              ].map((item, i) => (
                <ScrollReveal key={item.title} direction="up" delay={i * 0.1}>
                  <div className="card p-8 border-white/5">
                    <h3 className="font-bold text-white text-lg mb-3 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-rp-text-secondary leading-relaxed">{item.desc}</p>
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
