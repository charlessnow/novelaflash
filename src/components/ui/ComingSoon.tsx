import React from "react";
import Link from "@/components/ui/InternalLink";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

interface ComingSoonProps {
  title: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <main className="min-h-screen flex flex-col bg-rp-bg-primary relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rp-coral/10 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rp-amber/5 rounded-full blur-[120px] -z-10" />

      <Nav />

      <div className="flex-grow flex flex-col items-center justify-center relative px-6 pt-32">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-black text-[20vw] leading-none text-white/5 uppercase italic tracking-tighter">
            PRONTO
          </span>
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          <div className="badge badge-coral mb-6 inline-block">En Construcción</div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase italic tracking-wide mb-6">
            {title}
          </h1>
          <p className="text-rp-text-secondary text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed">
            Estamos trabajando arduamente para traerte esta página. ¡Vuelve pronto para descubrir las novedades!
          </p>
          
          <Link 
            href="/" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/20 text-white font-bold tracking-widest uppercase transition-all hover:bg-white/10"
          >
            <span className="relative z-10">Volver al Inicio</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rp-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};
