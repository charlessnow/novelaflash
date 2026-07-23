export interface AffiliateLink {
  slug: string;
  name: string;
  url: string;
}

export const AFFILIATE_LINKS: Record<string, string> = {
  // DramaBox CPS tracking link
  dramabox: "https://r.reelsgo.tv/K5xrp16CotAf",

  // ReelShort CPS tracking link (Homepage link)
  reelshort: "https://r.reelsgo.tv/Uv8ccoLDvU16",

  // ShortMax CPS tracking link
  shortmax: "https://r.reelsgo.tv/3ML04mnWiOwe",

  // KalosTV CPS tracking link
  kalostv: "https://r.reelsgo.tv/Y8191huWQrqz",

  // GoodShort CPS tracking link
  goodshort: "https://r.reelsgo.tv/TZRaNvRJTpEs",

  // DreameShort CPS tracking link
  dreameshort: "https://r.reelsgo.tv/y1V3F5563Ffr",

  // Placeholders for additional platforms

  flextv: "https://www.flextv.cc",
  moboreels: "https://r.reelsgo.tv/kxVy9yDis38P",
  flickreels: "https://r.reelsgo.tv/1V6HxVFh1xoW",
  snackshort: "https://r.reelsgo.tv/YX4KmWj9EX1E",
  starshort: "https://www.starshort.com",
  honeyreels: "https://r.reelsgo.tv/l7Z40t399u8W",
  topshort: "https://r.reelsgo.tv/RE-OTXKI3yV_",
  footage: "https://r.reelsgo.tv/4KR8bW9SQlFb",
  veloria: "https://r.reelsgo.tv/izKqx8iMdldh",
  stardusttv: "https://r.reelsgo.tv/EmyxsIsT9Yzc",
  playlet: "https://r.reelsgo.tv/4aS9fbcpmkzz",

};

/**
 * Get the target tracking URL for a given platform slug.
 * Falls back to the direct website if no specific tracking link is configured.
 */
export function getAffiliateUrl(slug: string): string {
  return AFFILIATE_LINKS[slug] || `https://www.${slug}.com`;
}
