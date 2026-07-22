export interface AffiliateLink {
  slug: string;
  name: string;
  url: string;
}

export const AFFILIATE_LINKS: Record<string, string> = {
  // DramaBox CPS tracking link
  dramabox: "https://r.reelsgo.tv/VNDhcgPUDGE6",

  // ReelShort CPS tracking link (Homepage link)
  reelshort: "https://r.reelsgo.tv/hC2wg5fyQh49",

  // ShortMax CPS tracking link
  shortmax: "https://r.reelsgo.tv/pjgTB29D4TZY",

  // KalosTV CPS tracking link
  kalostv: "https://r.reelsgo.tv/6Rc95E7rK98T",

  // GoodShort CPS tracking link
  goodshort: "https://r.reelsgo.tv/vTdBwkgSWdxz",

  // DreameShort CPS tracking link
  dreameshort: "https://r.reelsgo.tv/w1XPf2tgOo_X",

  // Placeholders for additional platforms

  flextv: "https://www.flextv.cc",
  moboreels: "https://r.reelsgo.tv/pEtS61RUds_2",
  flickreels: "https://r.reelsgo.tv/j3kcBl_YGBC0",
  snackshort: "https://r.reelsgo.tv/YX4KmWj9EX1E",
  starshort: "https://www.starshort.com",
  honeyreels: "https://r.reelsgo.tv/l7Z40t399u8W",
  topshort: "https://r.reelsgo.tv/RE-OTXKI3yV_",
  footage: "https://r.reelsgo.tv/4KR8bW9SQlFb",
  veloria: "https://r.reelsgo.tv/izKqx8iMdldh",
  stardusttv: "https://r.reelsgo.tv/EmyxsIsT9Yzc",
  playlet: "https://r.reelsgo.tv/nXLu58jr6t_W",

};

/**
 * Get the target tracking URL for a given platform slug.
 * Falls back to the direct website if no specific tracking link is configured.
 */
export function getAffiliateUrl(slug: string): string {
  return AFFILIATE_LINKS[slug] || `https://www.${slug}.com`;
}
