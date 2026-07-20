export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  category: string;
  categoryColor: "violet" | "pink" | "cyan" | "green";
  image: string;
  video?: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Platform {
  slug: string;
  name: string;
  icon: string;
  score: number;
  downloads: string;
  revenue: string;
  description: string;
  category: string;
  links?: {
    appStore?: string;
    googlePlay?: string;
    website?: string;
  };
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export const stats: Stat[] = [
  {
    label: "Mercado Global",
    value: "$26B",
    change: "+34%",
    trend: "up",
    icon: "globe",
  },
  {
    label: "Usuarios Activos (DramaBox)",
    value: "5.2M",
    change: "+150%",
    trend: "up",
    icon: "users",
  },
  {
    label: "Descargas LatAm",
    value: "100M+",
    change: "+85%",
    trend: "up",
    icon: "dollar",
  },
  {
    label: "Crecimiento Anual",
    value: "~3x",
    change: "H1 2026",
    trend: "up",
    icon: "trending",
  },
];

export const platforms: Platform[] = [
  {
    slug: "dramabox",
    name: "DramaBox",
    icon: "/platforms/dramabox.png",
    score: 9.8,
    downloads: "80M+",
    revenue: "$150M+/año",
    description: "El líder indiscutible en América Latina. Recomendaciones impulsadas por IA y un catálogo masivo de novelas de hombres lobo, venganza y romances de millonarios. ¡La aplicación más popular de 2026!",
    category: "Premium",
    links: { appStore: "/go/dramabox", googlePlay: "/go/dramabox", website: "/go/dramabox" },
  },
  {
    slug: "shortmax",
    name: "ShortMax",
    icon: "/platforms/shortmax.png",
    score: 9.5,
    downloads: "60M+",
    revenue: "$90M/año",
    description: "Una de las plataformas de miniseries más grandes del mundo. Conocida por su increíble biblioteca de contenido en español y su algoritmo de recomendación.",
    category: "Premium",
    links: { appStore: "/go/shortmax", googlePlay: "/go/shortmax", website: "/go/shortmax" },
  },
  {
    slug: "moboreels",
    name: "MoboReels",
    icon: "/platforms/moboreels.png",
    score: 9.2,
    downloads: "25M+",
    revenue: "$30M/año",
    description: "Plataforma muy accesible con opción de ver series gratis con anuncios. Excelente para contenido de romance y fantasía en español.",
    category: "Crecimiento",
    links: { appStore: "/go/moboreels", googlePlay: "/go/moboreels", website: "/go/moboreels" },
  },
  {
    slug: "reelshort",
    name: "ReelShort",
    icon: "/platforms/reelshort.png",
    score: 9.0,
    downloads: "55M+",
    revenue: "$320M+/año",
    description: "Líder en el mercado de EE. UU. pero con un gran catálogo subtitulado al español. Creadores del gran éxito 'La doble vida de mi esposo multimillonario'.",
    category: "Premium",
    links: { appStore: "/go/reelshort", googlePlay: "/go/reelshort", website: "/go/reelshort" },
  },
  {
    slug: "flextv",
    name: "FlexTV",
    icon: "/platforms/flextv.png",
    score: 8.5,
    downloads: "15M+",
    revenue: "$25M/año",
    description: "Combina dramas cortos y contenido internacional con excelentes subtítulos en español.",
    category: "Crecimiento",
    links: { appStore: "/go/flextv", googlePlay: "/go/flextv", website: "/go/flextv" },
  },
  {
    slug: "goodshort",
    name: "GoodShort",
    icon: "/platforms/goodshort.png",
    score: 8.4,
    downloads: "15M+",
    revenue: "$45M/año",
    description: "Escalando rápidamente en los ránkings. Conocida por sus miniseries originales y un vasto catálogo de thrillers románticos.",
    category: "Crecimiento",
    links: { appStore: "/go/goodshort", googlePlay: "/go/goodshort", website: "/go/goodshort" },
  },
  {
    slug: "kalostv",
    name: "KalosTV",
    icon: "/platforms/kalostv.png",
    score: 8.3,
    downloads: "10M+",
    revenue: "$35M/año",
    description: "Famosa por títulos exclusivos como 'Amor a Destiempo'. Alta retención de usuarios con nuevos episodios diarios.",
    category: "Crecimiento",
    links: { appStore: "/go/kalostv", googlePlay: "/go/kalostv", website: "/go/kalostv" },
  },
  {
    slug: "dreameshort",
    name: "DreameShort",
    icon: "/platforms/dreameshort.png",
    score: 8.0,
    downloads: "12M+",
    revenue: "$30M/año",
    description: "Respaldada por Stary/Dreame. Adapta las novelas de hombres lobo y mafia más vendidas en adictivos episodios de 2 minutos.",
    category: "Crecimiento",
    links: { appStore: "/go/dreameshort", googlePlay: "/go/dreameshort", website: "/go/dreameshort" },
  },
  {
    slug: "flickreels",
    name: "FlickReels",
    icon: "/platforms/flickreels.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/flickreels", googlePlay: "/go/flickreels", website: "/go/flickreels" },
  },
  {
    slug: "snackshort",
    name: "SnackShort",
    icon: "/platforms/snackshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/snackshort", googlePlay: "/go/snackshort", website: "/go/snackshort" },
  },
  {
    slug: "starshort",
    name: "StarShort",
    icon: "/platforms/starshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/starshort", googlePlay: "/go/starshort", website: "/go/starshort" },
  },
  {
    slug: "honeyreels",
    name: "HoneyReels",
    icon: "/platforms/honeyreels.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/honeyreels", googlePlay: "/go/honeyreels", website: "/go/honeyreels" },
  },
  {
    slug: "topshort",
    name: "TopShort",
    icon: "/platforms/topshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/topshort", googlePlay: "/go/topshort", website: "/go/topshort" },
  },
  {
    slug: "footage",
    name: "Footage",
    icon: "/platforms/footage.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/footage", googlePlay: "/go/footage", website: "/go/footage" },
  },
  {
    slug: "veloria",
    name: "Veloria",
    icon: "/platforms/veloria.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/veloria", googlePlay: "/go/veloria", website: "/go/veloria" },
  },
  {
    slug: "pancake",
    name: "Pancake",
    icon: "/platforms/pancake.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/pancake", googlePlay: "/go/pancake", website: "/go/pancake" },
  },
  {
    slug: "stardusttv",
    name: "StardustTV",
    icon: "/platforms/stardusttv.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/stardusttv", googlePlay: "/go/stardusttv", website: "/go/stardusttv" },
  },
  {
    slug: "playlet",
    name: "Playlet",
    icon: "/platforms/playlet.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Plataforma oficial de streaming de miniseries.",
    category: "Emergente",
    links: { appStore: "/go/playlet", googlePlay: "/go/playlet", website: "/go/playlet" },
  }
];

export const featuredArticle: Article = {
  slug: "como-ver-dramabox-gratis",
  title: "Cómo ver series en DramaBox completamente GRATIS: Guía Definitiva 2026",
  excerpt: "Descubre los mejores trucos legales para conseguir monedas gratis en DramaBox y disfrutar de tus miniseries favoritas sin gastar un centavo.",
  category: "Guía",
  categoryColor: "violet",
  image: "/images/articles/free_coins_guide_cover.jpg",
  video: "/videos/hero/featured-video.mp4",
  author: {
    name: "NovelaFlash Equipo",
    avatar: "/images/avatar-editorial.png",
  },
  publishedAt: "Ago 15, 2026",
  readTime: "5 min",
  featured: true,
};

export const trendingArticles: Article[] = [
  {
    slug: "mejores-novelas-hombres-lobo-2026",
    title: "Las 10 mejores novelas de Hombres Lobo en 2026",
    excerpt: "Las series de Alfa y Omega más adictivas que no podrás dejar de ver.",
    metaTitle: "Mejores Series de Hombres Lobo 2026 | NovelaFlash",
    metaDescription: "Descubre las series más candentes de hombres lobo y romances alfa disponibles en DramaBox y ShortMax.",
    category: "Recomendaciones",
    categoryColor: "cyan",
    image: "/images/articles/free_coins_guide_cover.jpg",
    author: { name: "Sofía Martínez", avatar: "/images/avatar-1.png" },
    publishedAt: "Jul 21, 2026",
    readTime: "4 min",
    trending: true,
  },
  {
    slug: "dramabox-vs-shortmax",
    title: "DramaBox vs ShortMax: ¿Cuál es mejor?",
    excerpt: "Comparamos las dos aplicaciones gigantes de miniseries en América Latina.",
    category: "Comparación",
    categoryColor: "pink",
    image: "/images/articles/werewolf_alpha_cover.jpg",
    author: { name: "Carlos Nieve", avatar: "/images/avatar-2.png" },
    publishedAt: "Jul 20, 2026",
    readTime: "6 min",
    trending: true,
  },
];

export const latestArticles: Article[] = [
  {
    slug: "la-doble-vida-esposo-multimillonario-resumen",
    title: "La doble vida de mi esposo multimillonario: Resumen Completo",
    excerpt: "Todo lo que necesitas saber sobre el mayor éxito de ReelShort. Análisis de episodios, actores y secretos del final.",
    category: "Resumen",
    categoryColor: "violet",
    image: "/images/double_life_billionaire_husband_cover.jpg",
    author: { name: "Carlos Nieve", avatar: "/images/avatar-1.png" },
    publishedAt: "Jul 9, 2026",
    readTime: "8 min",
  },
  {
    slug: "amor-a-destiempo-kalostv",
    title: "Amor a Destiempo en KalosTV: Guía de episodios",
    excerpt: "Una revisión en profundidad del drama de matrimonio flash de KalosTV. Descubre cómo conseguir episodios gratis.",
    category: "Resumen",
    categoryColor: "pink",
    image: "/images/timely_love_kalostv_cover.jpg",
    author: { name: "NovelaFlash Equipo", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Jul 9, 2026",
    readTime: "7 min",
  }
];

export const homeSpotlights = [
  {
    slug: "guias-gratis",
    title: "Guías para ver Gratis",
    description: "Aprende cómo conseguir monedas y bonos diarios en DramaBox, ShortMax y ReelShort sin pagar.",
  },
  {
    slug: "recomendaciones",
    title: "Mejores Series",
    description: "Nuestras listas seleccionadas de los mejores dramas de venganza, millonarios y romance alfa.",
  },
  {
    slug: "ultimos-estrenos",
    title: "Últimos Estrenos",
    description: "Mantente al día con los episodios recién lanzados en las plataformas más populares.",
  },
];

export const industrySpotlights = homeSpotlights;
