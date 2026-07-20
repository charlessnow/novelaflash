import Link from "@/components/ui/InternalLink";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-rp-border relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-orange-500/50" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic">
                NOVELAFLASH
              </span>
              <div className="w-2 h-2 rounded-full bg-rp-coral animate-pulse" />
            </Link>
            <p className="text-rp-text-secondary max-w-xs text-sm leading-relaxed">
              Tu pulso en la revolución del microdrama. Inteligencia de la industria, rankings y las mejores recomendaciones de contenido mundial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6">Plataformas</h4>
            <ul className="space-y-4 text-sm text-rp-text-muted">
              <li><Link href="/platforms/reelshort" className="hover:text-rp-coral transition-colors">ReelShort</Link></li>
              <li><Link href="/platforms/dramabox" className="hover:text-rp-coral transition-colors">DramaBox</Link></li>
              <li><Link href="/platforms/shortmax" className="hover:text-rp-coral transition-colors">ShortMax</Link></li>
              <li><Link href="/platforms/flextv" className="hover:text-rp-coral transition-colors">FlexTV</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6">Rankings</h4>
            <ul className="space-y-4 text-sm text-rp-text-muted">
              <li><Link href="/rankings/top-100" className="hover:text-rp-coral transition-colors">Top 100 Apps</Link></li>
              <li><Link href="/rankings/revenue" className="hover:text-rp-coral transition-colors">Líderes de Ingresos</Link></li>
              <li><Link href="/rankings/studios" className="hover:text-rp-coral transition-colors">Estudios</Link></li>
              <li><Link href="/rankings/growth" className="hover:text-rp-coral transition-colors">Crecimiento</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6">Industria</h4>
            <ul className="space-y-4 text-sm text-rp-text-muted">
              <li><Link href="/industry/market-reports" className="hover:text-rp-coral transition-colors">Reportes de Mercado</Link></li>
              <li><Link href="/industry/tech-ai" className="hover:text-rp-coral transition-colors">Tecnología e IA</Link></li>
              <li><Link href="/industry/global-markets" className="hover:text-rp-coral transition-colors">Mercados Globales</Link></li>
              <li><Link href="/industry/creator-economy" className="hover:text-rp-coral transition-colors">Economía de Creadores</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-rp-text-muted">
              <li><Link href="/about" className="hover:text-rp-coral transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/newsletter" className="hover:text-rp-coral transition-colors">Boletín</Link></li>
              <li><Link href="/contact" className="hover:text-rp-coral transition-colors">Contacto</Link></li>
              <li><Link href="/privacy" className="hover:text-rp-coral transition-colors">Privacidad</Link></li>
              <li><a href="https://duanjuhao.com" target="_blank" rel="noopener" className="hover:text-rp-coral transition-colors">中文 · 短剧好</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rp-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-rp-text-muted hover:text-white transition-colors">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" className="text-rp-text-muted hover:text-white transition-colors">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="#" className="text-rp-text-muted hover:text-white transition-colors">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </Link>
          </div>
          <p className="text-rp-text-muted text-xs">
            © {new Date().getFullYear()} NovelaFlash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
