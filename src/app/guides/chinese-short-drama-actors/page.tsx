import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chinese Short Drama Actors: Complete Guide 2026 — ReelPulse",
  description: "Discover the top Chinese short drama actors and actresses of 2026. Learn about rising stars, their notable shows, salaries, and how to identify them across platforms.",
};

export default function ChineseShortDramaActors() {
  const guidePath = "/guides/chinese-short-drama-actors";
  const maleActors = [
    {
      rank: 1,
      name: "Chen Hao",
      notableRoles: ["The Senator's Son", "Kingsley", "King or Clown"],
      description: "One of the most sought-after male leads in Chinese short dramas. Chen Hao brings intensity and charisma to every role, specializing in complex, morally gray characters. His ability to convey deep emotion through subtle expressions has made him a fan favorite.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 2,
      name: "Liu Yang",
      notableRoles: ["No Return", "Forever Was a Lie", "The Mafia's Obsession"],
      description: "Known for his versatility and range, Liu Yang excels in both romantic and thriller roles. His chemistry with co-stars is undeniable, and his performances often steal scenes. He's become synonymous with high-quality short drama productions.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 3,
      name: "Zhang Wei",
      notableRoles: ["Mafia Lover", "Intense Love", "Dark Lord"],
      description: "A rising star who has quickly become one of the most recognizable faces in short dramas. Zhang Wei's boyish charm and genuine performances have earned him a massive fanbase. He's particularly popular in romance and fantasy genres.",
      platforms: ["ReelShort", "DramaBox", "Douyin"]
    },
    {
      rank: 4,
      name: "Wang Jian",
      notableRoles: ["Boxing Champion", "East of Eden", "Redemption"],
      description: "An actor known for his dramatic depth and ability to carry heavy emotional scenes. Wang Jian brings authenticity to every character, making viewers invest in his journey. His performances often leave lasting impressions.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 5,
      name: "Li Ming",
      notableRoles: ["Love Never Ends", "Drowning in Love", "One and Only"],
      description: "A romantic lead who specializes in passionate, intense love stories. Li Ming's chemistry with co-stars is electric, and his ability to convey vulnerability makes him perfect for emotional dramas. Fans adore his dedication to character development.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 6,
      name: "Xu Kai",
      notableRoles: ["Iron Lady", "Destined for More", "Ruling Over All I See"],
      description: "Known for playing strong, commanding characters. Xu Kai brings authority and presence to every role. His performances in power-driven narratives are particularly compelling, making him a favorite for ambitious, complex characters.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 7,
      name: "Guo Tao",
      notableRoles: ["My Heroine", "Summer Situationship", "Breaking the Ice"],
      description: "A charming actor who excels in lighter, comedic roles. Guo Tao brings warmth and humor to his characters, making him perfect for feel-good dramas. His genuine smile and relatable performances have earned him a loyal fanbase.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 8,
      name: "Qian Feng",
      notableRoles: ["When I'm Gone", "Too Little Too Late", "Surrender to My Professor"],
      description: "An actor known for his emotional depth and ability to portray vulnerable characters. Qian Feng's performances often move audiences to tears. He's particularly skilled at conveying internal conflict and personal growth.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 9,
      name: "Shen Yu",
      notableRoles: ["You Fired a Tech Genius", "Ben Armstrong", "Hidden Truths"],
      description: "A talented actor who specializes in thriller and suspense roles. Shen Yu brings intensity and unpredictability to his characters. His ability to keep audiences guessing makes him perfect for plot-driven narratives.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 10,
      name: "Huang Jie",
      notableRoles: ["Kiss Me One Last Time", "You Belong With Me", "Xmas Surprise"],
      description: "A versatile actor who can handle both romance and drama with equal skill. Huang Jie brings authenticity and charm to every role. His performances often feel natural and unforced, making him relatable to audiences.",
      platforms: ["ReelShort", "DramaBox", "YouTube"]
    }
  ];

  const femaleActors = [
    {
      rank: 1,
      name: "Li Na",
      notableRoles: ["Divorced at the Wedding Day", "Miss You After Goodbye", "Return of His Majesty"],
      description: "The most recognizable female face in Chinese short dramas. Li Na brings elegance and emotional depth to every role. Her ability to portray complex female characters has made her an icon in the industry. She's known for choosing roles that challenge and inspire.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 2,
      name: "Wang Xin",
      notableRoles: ["Mute Girl Who Sings", "The Past Drowned in Moonlight", "Queen Never Cry"],
      description: "An actress known for her powerful performances and ability to carry entire shows. Wang Xin brings authenticity and vulnerability to her characters. Her range spans from delicate romance to fierce drama, showcasing her versatility.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 3,
      name: "Zhang Jing",
      notableRoles: ["Forever Was a Lie", "Cheer Up Baby", "Lady Boss"],
      description: "A rising star who has quickly become one of the most sought-after actresses. Zhang Jing brings charm and intelligence to her roles. Her ability to balance humor with emotional depth makes her perfect for diverse genres.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 4,
      name: "Liu Fang",
      notableRoles: ["Ashes of Glory", "I'm Nothing But a Mortal", "Kayla and Rowan"],
      description: "An actress known for her emotional intelligence and nuanced performances. Liu Fang brings depth to every character, making viewers care about her journey. Her ability to convey complex emotions makes her a standout performer.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 5,
      name: "Chen Mei",
      notableRoles: ["He Loves My Sister", "A Deal with the Hockey Captain", "Watch Out I'm the Lady Boss"],
      description: "A talented actress who specializes in strong female characters. Chen Mei brings confidence and intelligence to her roles. Her performances often inspire viewers with messages of empowerment and self-determination.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 6,
      name: "Xu Ling",
      notableRoles: ["When Love Turns Toxic", "Punished by His Love", "The Princess of His Heart"],
      description: "An actress known for her ability to portray complex emotional states. Xu Ling brings authenticity to challenging roles. Her performances often explore the darker sides of human relationships with sensitivity and depth.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 7,
      name: "Gao Yan",
      notableRoles: ["Love in the Workplace", "Midnight Confessions", "Autumn Leaves"],
      description: "A charming actress who excels in contemporary romance roles. Gao Yan brings warmth and relatability to her characters. Her ability to portray modern women navigating love and career resonates with audiences.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 8,
      name: "Shen Li",
      notableRoles: ["Hometown's Embrace", "Echoes of Yesterday", "New Beginnings"],
      description: "An actress known for her emotional depth and ability to carry dramatic narratives. Shen Li brings authenticity to every role. Her performances often explore themes of family, forgiveness, and personal growth.",
      platforms: ["DramaBox", "YouTube"]
    },
    {
      rank: 9,
      name: "Qin Hua",
      notableRoles: ["Starlight Promise", "Seoul Nights", "First Marriage Then Love"],
      description: "A versatile actress who can handle fantasy, thriller, and romance with equal skill. Qin Hua brings magic to her roles. Her ability to embody different character types makes her a valuable asset to any production.",
      platforms: ["ReelShort", "DramaBox"]
    },
    {
      rank: 10,
      name: "Jiang Mei",
      notableRoles: ["Runaway Sweetheart", "House Husband", "Finn Carter"],
      description: "An actress known for her comedic timing and ability to bring humor to dramatic situations. Jiang Mei brings lightness and joy to her roles. Her performances often provide comic relief while maintaining emotional authenticity.",
      platforms: ["ReelShort", "DramaBox", "YouTube"]
    }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["chinese-short-drama-actors"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["chinese-short-drama-actors"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Chinese Short Drama Actors
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl mb-8">
              Meet the rising stars of Chinese short dramas. Discover the top 10 male actors and 10 female actresses of 2026, their notable roles, and how to identify them across platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-coral">Top 20 Actors</div>
              <div className="badge badge-pink">Rising Stars</div>
              <div className="badge badge-cyan">2026 Guide</div>
            </div>
          </ScrollReveal>
        </section>

        {/* The Rise of Short Drama Stars */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                The Rise of Short Drama Stars
              </h2>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                Chinese short drama actors represent a new generation of entertainment stars. Unlike traditional television and film actors, short drama stars have built their careers through vertical cinema, often becoming household names through viral performances and dedicated fan communities.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed mb-6">
                These actors differ from traditional performers in several key ways. They often work in rapid production cycles, shooting multiple shows simultaneously. They're more accessible to fans through social media and direct engagement. And they've mastered the art of conveying emotion and character depth in short, intense bursts of screen time.
              </p>
              <p className="text-rp-text-secondary text-lg leading-relaxed">
                The success of short drama actors has created new career paths in entertainment. Many have leveraged their short drama fame into traditional film and television roles, while others have built massive followings that rival traditional celebrities.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Top 10 Male Actors */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight">
              Top 10 Male Actors
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {maleActors.map((actor, index) => (
              <ScrollReveal key={actor.rank} direction="up" delay={index * 0.05}>
                <div className="group card card-glow p-8 md:p-10 border-white/5 hover:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <span className="font-display font-black text-6xl md:text-7xl text-white/10 italic select-none">
                        {actor.rank.toString().padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4">
                        {actor.name}
                      </h3>

                      <p className="text-rp-text-secondary text-base leading-relaxed mb-6">
                        {actor.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-rp-text-muted block mb-2">Notable Roles</span>
                          <div className="flex flex-wrap gap-2">
                            {actor.notableRoles.map((role) => (
                              <span key={role} className="badge badge-coral text-xs">{role}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-rp-text-muted block mb-2">Platforms</span>
                          <div className="flex flex-wrap gap-2">
                            {actor.platforms.map((platform) => (
                              <span key={platform} className="badge badge-pink text-xs">{platform}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Top 10 Female Actresses */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight">
              Top 10 Female Actresses
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {femaleActors.map((actor, index) => (
              <ScrollReveal key={actor.rank} direction="up" delay={index * 0.05}>
                <div className="group card card-glow p-8 md:p-10 border-white/5 hover:border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <span className="font-display font-black text-6xl md:text-7xl text-white/10 italic select-none">
                        {actor.rank.toString().padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4">
                        {actor.name}
                      </h3>

                      <p className="text-rp-text-secondary text-base leading-relaxed mb-6">
                        {actor.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-rp-text-muted block mb-2">Notable Roles</span>
                          <div className="flex flex-wrap gap-2">
                            {actor.notableRoles.map((role) => (
                              <span key={role} className="badge badge-coral text-xs">{role}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-rp-text-muted block mb-2">Platforms</span>
                          <div className="flex flex-wrap gap-2">
                            {actor.platforms.map((platform) => (
                              <span key={platform} className="badge badge-pink text-xs">{platform}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* How to Identify Actors */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              How to Identify Actors Across Shows
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Look for Distinctive Features",
                  desc: "Pay attention to unique physical characteristics—distinctive eyes, facial structure, or mannerisms. These often remain consistent across different roles and makeup."
                },
                {
                  title: "Notice Acting Patterns",
                  desc: "Actors often have signature expressions, speech patterns, or movement styles. Once you recognize these, you'll spot them in other shows."
                },
                {
                  title: "Check Credits",
                  desc: "Most platforms display cast information. Check the show's credits or description to confirm actor identities."
                },
                {
                  title: "Use Social Media",
                  desc: "Follow actors on social media platforms like Weibo, Instagram, or TikTok. They often post behind-the-scenes content and announcements about new projects."
                },
                {
                  title: "Join Fan Communities",
                  desc: "Online fan communities are excellent resources for identifying actors. Fans often create databases and guides for tracking actors across shows."
                },
                {
                  title: "Watch Multiple Shows",
                  desc: "The more shows you watch, the more familiar you become with recurring actors. You'll naturally start recognizing faces and performances."
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

        {/* Salary & Career Info */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass p-8 md:p-12 rounded-2xl border-white/10">
              <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">
                Salaries & Career Opportunities
              </h2>
              <div className="space-y-4 text-rp-text-secondary">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Entry-Level Actors:</span> New actors typically earn $500-$2,000 per show. As they gain experience and recognition, earnings increase significantly.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Established Stars:</span> Top-tier actors can earn $10,000-$50,000+ per show, depending on their fame and the production budget.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Additional Income:</span> Successful actors earn money through endorsements, social media sponsorships, fan meetings, and merchandise sales.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">Career Progression:</span> Many short drama actors transition to traditional film and television, often commanding higher salaries. Some build production companies and create their own content.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-white">International Opportunities:</span> As short dramas gain global popularity, actors are increasingly getting opportunities in international productions and collaborations.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Cross-Platform Appearances */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-12">
              Cross-Platform Appearances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  platform: "ReelShort",
                  desc: "The primary platform for many Chinese short drama actors. Most top actors have multiple shows on ReelShort."
                },
                {
                  platform: "DramaBox",
                  desc: "A major platform featuring many of the same actors as ReelShort. Some actors appear exclusively on DramaBox."
                },
                {
                  platform: "YouTube",
                  desc: "Many actors have shows uploaded to YouTube channels. This provides free access and international exposure."
                },
                {
                  platform: "Douyin (TikTok China)",
                  desc: "The original platform where many short dramas debut. Actors often have personal accounts with millions of followers."
                },
                {
                  platform: "Weibo",
                  desc: "China's primary social media platform. Actors use Weibo for announcements, behind-the-scenes content, and fan interaction."
                },
                {
                  platform: "Instagram & TikTok",
                  desc: "International actors and those targeting global audiences maintain accounts on these platforms for international fan engagement."
                }
              ].map((item, i) => (
                <ScrollReveal key={item.platform} direction="up" delay={i * 0.1}>
                  <div className="card p-8 border-white/5">
                    <h3 className="font-bold text-white text-lg mb-3 uppercase tracking-tight">{item.platform}</h3>
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
