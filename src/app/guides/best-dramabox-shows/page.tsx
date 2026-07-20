import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Top 20 Most Popular DramaBox Shows 2026 — NovelaFlash",
  description: "The best DramaBox shows ranked for 2026. Discover Return of His Majesty, Divorced at the Wedding Day, Miss You After Goodbye, and 17 more viral dramas. Complete guide with ratings.",
};

export default function BestDramaBoxShows() {
  const guidePath = "/guides/best-dramabox-shows";
  const shows = [
    {
      rank: 1,
      title: "Divorced at the Wedding Day",
      genre: "Romance",
      rating: 4.9,
      description: "A shocking drama that begins with a wedding and ends with a divorce announcement. This emotional rollercoaster explores betrayal, love, and second chances. The show's unexpected plot twists and powerful performances have made it DramaBox's most-watched series. Viewers are captivated by the complex relationships and the journey toward redemption."
    },
    {
      rank: 2,
      title: "Return of His Majesty",
      genre: "Fantasy",
      rating: 4.8,
      description: "An epic fantasy drama about a king's return to reclaim his throne. Return of His Majesty combines political intrigue with supernatural elements, creating a compelling narrative. The show's stunning production design and charismatic lead have earned it a massive following. Each episode reveals new layers of conspiracy and power struggles."
    },
    {
      rank: 3,
      title: "Miss You After Goodbye",
      genre: "Drama",
      rating: 4.8,
      description: "A poignant story about love, loss, and the messages we leave behind. Miss You After Goodbye explores the depths of human connection and the pain of separation. The show's emotional authenticity and beautiful cinematography have resonated with millions. It's a tearjerker that celebrates the power of love transcending death."
    },
    {
      rank: 4,
      title: "Forever Was a Lie",
      genre: "Thriller",
      rating: 4.7,
      description: "A gripping psychological thriller about a woman discovering her entire life was built on deception. Forever Was a Lie keeps viewers guessing with its intricate plot and shocking revelations. The protagonist's journey to uncover the truth is both thrilling and emotionally devastating. The show's twist ending has sparked countless fan theories."
    },
    {
      rank: 5,
      title: "Mafia Lover",
      genre: "Romance",
      rating: 4.7,
      description: "A dangerous romance between an innocent woman and a mafia boss. Mafia Lover combines passion with peril, creating an addictive viewing experience. The chemistry between leads is undeniable, and the show balances romance with action sequences. It's a guilty pleasure that explores love in the most unlikely circumstances."
    },
    {
      rank: 6,
      title: "Cheer Up Baby",
      genre: "Comedy",
      rating: 4.6,
      description: "A lighthearted comedy about a cheerleader and an unexpected romance. Cheer Up Baby brings joy and laughter with its witty dialogue and charming characters. The show's feel-good vibes and genuine humor have made it a comfort watch. It proves that short dramas can be both entertaining and heartwarming."
    },
    {
      rank: 7,
      title: "Ashes of Glory",
      genre: "Drama",
      rating: 4.6,
      description: "An epic drama about rising from the ashes of failure and tragedy. Ashes of Glory explores themes of resilience, redemption, and personal growth. The show's powerful storytelling and strong performances create an unforgettable viewing experience. It's inspiring without being preachy."
    },
    {
      rank: 8,
      title: "I'm Nothing But a Mortal",
      genre: "Fantasy",
      rating: 4.5,
      description: "A fantasy drama about a god discovering what it means to be human. I'm Nothing But a Mortal combines philosophical questions with engaging storytelling. The show explores mortality, love, and the value of human connection. Its unique premise and thoughtful narrative have earned critical acclaim."
    },
    {
      rank: 9,
      title: "Kayla and Rowan",
      genre: "Romance",
      rating: 4.5,
      description: "A sweet romance about two people finding love in unexpected places. Kayla and Rowan captures the magic of genuine connection and slow-burn romance. The show's authentic characters and beautiful moments have made it a fan favorite. It's a celebration of love in its purest form."
    },
    {
      rank: 10,
      title: "The Mafia's Obsession",
      genre: "Thriller",
      rating: 4.4,
      description: "A dark thriller about obsession, power, and dangerous love. The Mafia's Obsession delivers intense action and psychological depth. The protagonist's struggle against a powerful antagonist creates compelling drama. The show's morally gray characters and complex relationships keep viewers engaged."
    },
    {
      rank: 11,
      title: "He Loves My Sister",
      genre: "Drama",
      rating: 4.4,
      description: "A complex drama about love triangles and family loyalty. He Loves My Sister explores the tension between romantic feelings and familial bonds. The show's emotional depth and character development create a compelling narrative. It's a story about choosing between love and loyalty."
    },
    {
      rank: 12,
      title: "A Deal with the Hockey Captain",
      genre: "Romance",
      rating: 4.3,
      description: "A sports romance about a deal that turns into genuine love. A Deal with the Hockey Captain combines athletic excellence with romantic tension. The show's charismatic lead and engaging plot have built a dedicated fanbase. It's perfect for those who love sports dramas with heart."
    },
    {
      rank: 13,
      title: "Lady Boss",
      genre: "Drama",
      rating: 4.3,
      description: "An empowering drama about a woman rising to the top of the corporate world. Lady Boss celebrates female ambition and intelligence. The show's strong protagonist and exploration of work-life balance resonate with modern audiences. It's inspiring without sacrificing entertainment value."
    },
    {
      rank: 14,
      title: "Finn Carter",
      genre: "Thriller",
      rating: 4.2,
      description: "A gripping thriller about a man uncovering corporate corruption. Finn Carter combines suspense with social commentary. The show's exploration of justice and morality creates a thought-provoking narrative. It's a page-turner that keeps you guessing until the end."
    },
    {
      rank: 15,
      title: "House Husband",
      genre: "Comedy",
      rating: 4.2,
      description: "A humorous take on gender roles and domestic life. House Husband challenges stereotypes with wit and charm. The show's relatable characters and funny situations have made it a hit. It's a comedy that also explores deeper themes about identity and purpose."
    },
    {
      rank: 16,
      title: "Watch Out I'm the Lady Boss",
      genre: "Drama",
      rating: 4.1,
      description: "A confident drama about a woman taking control of her destiny. Watch Out I'm the Lady Boss celebrates female empowerment and independence. The show's strong protagonist and engaging plot have earned it a loyal following. It's empowering entertainment at its finest."
    },
    {
      rank: 17,
      title: "When Love Turns Toxic",
      genre: "Thriller",
      rating: 4.1,
      description: "A dark exploration of love that becomes obsession and abuse. When Love Turns Toxic handles sensitive topics with care and authenticity. The show's unflinching look at toxic relationships creates important conversations. It's a powerful drama that educates while entertaining."
    },
    {
      rank: 18,
      title: "Ruling Over All I See",
      genre: "Fantasy",
      rating: 4.0,
      description: "An ambitious fantasy about power, ambition, and the cost of ruling. Ruling Over All I See combines epic worldbuilding with personal drama. The show's complex protagonist and intricate plot create an engaging narrative. It's a fantasy that explores the burden of leadership."
    },
    {
      rank: 19,
      title: "Punished by His Love",
      genre: "Romance",
      rating: 3.9,
      description: "A passionate romance about punishment, redemption, and love. Punished by His Love explores themes of forgiveness and second chances. The show's intense chemistry and emotional depth create a compelling love story. It's a drama that celebrates the transformative power of love."
    },
    {
      rank: 20,
      title: "The Princess of His Heart",
      genre: "Romance",
      rating: 3.8,
      description: "A fairy tale romance about a woman becoming a princess in more ways than one. The Princess of His Heart is a charming story about love, acceptance, and belonging. The show's sweet moments and genuine performances create a feel-good experience. It's perfect for those seeking escapist romance."
    }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["best-dramabox-shows"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["best-dramabox-shows"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Top 20 DramaBox Shows
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl mb-8">
              The most popular and critically acclaimed DramaBox dramas of 2026. From Divorced at the Wedding Day to The Princess of His Heart, discover the shows that have captivated millions of viewers worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-coral">2026 Rankings</div>
              <div className="badge badge-pink">20 Shows</div>
              <div className="badge badge-cyan">Updated Monthly</div>
            </div>
          </ScrollReveal>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                Why DramaBox Dominates
              </h2>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                DramaBox has established itself as a powerhouse in the short drama industry with a diverse catalog of compelling stories. Our ranking considers viewer engagement, production quality, narrative innovation, and cultural impact. These 20 shows represent the best of what DramaBox offers in 2026.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed">
                From intense thrillers to heartwarming romances, DramaBox's library spans every genre and emotion. The platform's commitment to quality storytelling and diverse representation has made it a favorite among short drama enthusiasts worldwide.
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

        {/* DramaBox Features */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                What Makes DramaBox Special
              </h2>
              <div className="space-y-4 text-rp-text-secondary">
                <p className="text-lg leading-relaxed">
                  DramaBox stands out for its commitment to diverse storytelling and high production values. The platform features shows from multiple countries and cultures, offering viewers a truly global perspective on short drama entertainment.
                </p>
                <p className="text-lg leading-relaxed">
                  The app's user-friendly interface and personalized recommendations make it easy to discover new favorites. DramaBox also offers flexible viewing options, from free ad-supported viewing to premium subscriptions with exclusive content.
                </p>
                <p className="text-lg leading-relaxed">
                  With regular updates and new releases, DramaBox ensures there's always something fresh to watch. The platform's community features also allow viewers to connect with other fans and discuss their favorite shows.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Viewing Guide */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              How to Watch on DramaBox
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Download the App",
                  desc: "Get DramaBox from your device's app store (iOS or Android). The app is free to download and install."
                },
                {
                  step: "02",
                  title: "Create Your Account",
                  desc: "Sign up with your email or social media account. Personalize your profile to get tailored recommendations."
                },
                {
                  step: "03",
                  title: "Browse & Discover",
                  desc: "Explore the extensive library of shows. Use filters and recommendations to find content that matches your interests."
                },
                {
                  step: "04",
                  title: "Start Watching",
                  desc: "Begin with free episodes or use coins to unlock premium content. Earn free coins through daily rewards and login bonuses."
                }
              ].map((item) => (
                <ScrollReveal key={item.step} direction="up">
                  <div className="card p-8 border-white/5 flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-display font-black text-4xl text-rp-coral">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-rp-text-secondary">{item.desc}</p>
                    </div>
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
