import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Short Korean Dramas 2026 — NovelaFlash",
  description: "Best short Korean dramas of 2026, with top K-drama mini series, where to watch them, and a quick comparison with Chinese short dramas.",
};

export default function ShortKoreanDramas() {
  const guidePath = "/guides/short-korean-dramas";
  const shows = [
    {
      rank: 1,
      title: "First Marriage Then Love",
      genre: "Romance",
      rating: 4.8,
      description: "A charming K-drama about a marriage of convenience that blossoms into genuine love. First Marriage Then Love captures the essence of Korean romance with witty dialogue, genuine chemistry, and heartfelt moments. The show's exploration of unexpected connections and personal growth resonates with audiences worldwide."
    },
    {
      rank: 2,
      title: "Hometown's Embrace",
      genre: "Drama",
      rating: 4.7,
      description: "A touching drama about returning home and reconnecting with the past. Hometown's Embrace explores themes of nostalgia, family, and self-discovery. The show's beautiful cinematography and emotional performances create a moving viewing experience that celebrates the importance of roots."
    },
    {
      rank: 3,
      title: "Midnight Confessions",
      genre: "Romance",
      rating: 4.6,
      description: "A romantic drama about secrets revealed in the darkness of night. Midnight Confessions combines mystery with romance, creating an engaging narrative. The show's exploration of vulnerability and trust creates compelling character dynamics."
    },
    {
      rank: 4,
      title: "Seoul Nights",
      genre: "Thriller",
      rating: 4.6,
      description: "A gripping thriller set in the bustling streets of Seoul. Seoul Nights combines suspense with urban drama. The show's fast-paced narrative and complex characters create an addictive viewing experience that keeps you on edge."
    },
    {
      rank: 5,
      title: "Love in the Workplace",
      genre: "Romance",
      rating: 4.5,
      description: "A contemporary romance about colleagues navigating professional boundaries and personal feelings. Love in the Workplace captures the tension and excitement of workplace romance. The show's relatable characters and witty banter make it a fan favorite."
    },
    {
      rank: 6,
      title: "Echoes of Yesterday",
      genre: "Drama",
      rating: 4.5,
      description: "A poignant drama about confronting the past and moving forward. Echoes of Yesterday explores themes of forgiveness, redemption, and personal growth. The show's emotional depth and strong performances create a memorable viewing experience."
    },
    {
      rank: 7,
      title: "Starlight Promise",
      genre: "Fantasy",
      rating: 4.4,
      description: "A magical fantasy about dreams coming true and destiny. Starlight Promise combines whimsy with emotional depth. The show's unique premise and charming characters create an enchanting viewing experience perfect for escapism."
    },
    {
      rank: 8,
      title: "Autumn Leaves",
      genre: "Romance",
      rating: 4.4,
      description: "A bittersweet romance about love and loss. Autumn Leaves captures the melancholy beauty of change and transition. The show's poetic storytelling and genuine performances create a deeply moving experience."
    },
    {
      rank: 9,
      title: "Hidden Truths",
      genre: "Thriller",
      rating: 4.3,
      description: "A suspenseful thriller about uncovering dangerous secrets. Hidden Truths keeps viewers guessing with its intricate plot and shocking revelations. The show's exploration of deception and truth creates a thought-provoking narrative."
    },
    {
      rank: 10,
      title: "New Beginnings",
      genre: "Drama",
      rating: 4.2,
      description: "An inspiring drama about starting over and finding hope. New Beginnings celebrates resilience and the courage to change. The show's uplifting message and genuine characters create an encouraging viewing experience."
    }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["short-korean-dramas"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["short-korean-dramas"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Best Short Korean Dramas
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl mb-8">
              Discover the rise of K-drama mini series. Explore the top 10 short Korean dramas of 2026, where to watch them, and how they compare to Chinese short dramas.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-coral">Top 10 Series</div>
              <div className="badge badge-pink">K-Drama Mini</div>
              <div className="badge badge-cyan">2026 Guide</div>
            </div>
          </ScrollReveal>
        </section>

        {/* The Rise of K-Drama Shorts */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                The Rise of Short K-Dramas
              </h2>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                Korean drama studios have embraced the short-form format, creating mini series that deliver the emotional depth and storytelling excellence K-dramas are known for in bite-sized episodes. This evolution represents a significant shift in how Korean content is being produced and consumed globally.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                Short K-dramas maintain the hallmarks of traditional Korean dramas—strong character development, emotional resonance, and high production values—while adapting to modern viewing habits. The format has proven so successful that major Korean networks and streaming platforms are investing heavily in short-form content.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed">
                These mini series offer the perfect entry point for viewers new to K-dramas, while longtime fans appreciate the concentrated storytelling and quick resolutions. The format has also opened doors for emerging Korean creators to showcase their talent on a global stage.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Top 10 Shows */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight">
              Top 10 K-Drama Mini Series
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

        {/* Genre Breakdown */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Genre Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { genre: "Romance", count: 4, color: "from-pink-600 to-rose-600" },
                { genre: "Drama", count: 3, color: "from-purple-600 to-violet-600" },
                { genre: "Thriller", count: 2, color: "from-red-600 to-orange-600" },
                { genre: "Fantasy", count: 1, color: "from-blue-600 to-cyan-600" }
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

        {/* K-Drama vs C-Drama Comparison */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              K-Drama vs C-Drama: Short Series Comparison
            </h2>
            <div className="space-y-6">
              {[
                {
                  aspect: "Storytelling Style",
                  kdrama: "Character-driven narratives with emotional depth. K-dramas focus on internal conflicts and personal growth.",
                  cdrama: "Plot-driven stories with high stakes and dramatic twists. C-dramas emphasize action and external conflicts."
                },
                {
                  aspect: "Production Quality",
                  kdrama: "Consistent high production values with attention to detail. Korean studios maintain cinematic standards.",
                  cdrama: "Increasingly high production values, though quality varies. Chinese studios are rapidly improving technical standards."
                },
                {
                  aspect: "Romance Approach",
                  kdrama: "Slow-burn romance with emphasis on emotional connection. K-dramas excel at building tension and chemistry.",
                  cdrama: "Passionate, intense romance with quick emotional escalation. C-dramas often feature more dramatic romantic arcs."
                },
                {
                  aspect: "Episode Length",
                  kdrama: "Typically 30-50 minutes per episode, condensed for short series format.",
                  cdrama: "Typically 5-15 minutes per episode, designed for quick consumption."
                },
                {
                  aspect: "Cultural Elements",
                  kdrama: "Incorporates Korean culture, values, and social commentary. Often explores contemporary Korean society.",
                  cdrama: "Features Chinese culture, traditions, and historical elements. Often blends traditional and modern themes."
                },
                {
                  aspect: "Audience Appeal",
                  kdrama: "Strong appeal to viewers seeking emotional depth and character development. Popular with K-drama enthusiasts.",
                  cdrama: "Appeals to viewers seeking fast-paced entertainment and dramatic twists. Popular with action and romance fans."
                }
              ].map((item, i) => (
                <ScrollReveal key={item.aspect} direction="up" delay={i * 0.1}>
                  <div className="card p-8 border-white/5">
                    <h3 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">{item.aspect}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-bold text-rp-coral uppercase tracking-widest mb-2">K-Drama</div>
                        <p className="text-rp-text-secondary text-sm leading-relaxed">{item.kdrama}</p>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-rp-coral uppercase tracking-widest mb-2">C-Drama</div>
                        <p className="text-rp-text-secondary text-sm leading-relaxed">{item.cdrama}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Where to Watch */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                Where to Watch Short K-Dramas
              </h2>
              <div className="space-y-4 text-rp-text-secondary">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Netflix:</span> The primary platform for Korean short dramas. Netflix has invested heavily in K-drama content and offers a growing library of mini series.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Viki:</span> Specializes in Asian content including Korean dramas. Offers both free and premium viewing options with excellent subtitle quality.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">YouTube:</span> Many Korean production companies upload short dramas directly to YouTube with subtitles. Search for official channels from major Korean networks.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Wavve & Tving:</span> Korean streaming platforms that offer short dramas. May require VPN access outside Korea but offer authentic Korean content.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Watch K-Drama Shorts */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Why Watch Short K-Dramas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Emotional Depth",
                  desc: "K-dramas are masters of emotional storytelling. Even in short format, they deliver powerful character arcs and meaningful narratives."
                },
                {
                  title: "High Production Values",
                  desc: "Korean studios maintain cinematic quality standards. Expect beautiful cinematography, excellent acting, and polished production."
                },
                {
                  title: "Diverse Genres",
                  desc: "From romance to thriller to fantasy, K-drama shorts cover every genre with excellence and creativity."
                },
                {
                  title: "Cultural Insight",
                  desc: "Experience Korean culture, values, and contemporary society through authentic storytelling and cultural representation."
                },
                {
                  title: "Perfect Pacing",
                  desc: "K-drama shorts deliver complete stories without filler. Every episode serves the narrative and character development."
                },
                {
                  title: "Gateway to K-Drama",
                  desc: "Short K-dramas are perfect for newcomers to the genre. They offer the essence of K-drama appeal in digestible format."
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
