import Link from "@/components/ui/InternalLink";
import { homeSpotlights } from "@/lib/data";

export const IndustrySpotlight = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-wider italic">
              Deep Dives
            </h2>
            <div className="flex gap-2">
              <div className="w-12 h-0.5 bg-rp-coral" />
              <div className="w-4 h-0.5 bg-rp-coral/30" />
            </div>
          </div>
          
          <p className="text-rp-text-secondary text-lg leading-relaxed max-w-md">
            Unpacking the micro-drama phenomenon through data-driven analysis, 
            cultural insights, and industry-first reporting. We go beyond the 
            surface to understand the forces shaping the future of mobile entertainment.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          {homeSpotlights.map((spotlight, index) => (
            <div key={spotlight.slug} className="group">
              <div className="py-10">
                <Link 
                  href={`/industry/${spotlight.slug}`}
                  className="inline-block group/link"
                >
                  <h3 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight transition-colors duration-300 group-hover/link:text-rp-coral">
                    {spotlight.title}
                  </h3>
                </Link>
                
                <p className="mt-4 text-rp-text-secondary text-lg leading-relaxed max-w-2xl">
                  {spotlight.description}
                </p>
              </div>
              
              {index !== homeSpotlights.length - 1 && (
                <div className="h-px w-full bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
