import { NextResponse } from "next/server";
import { getAffiliateUrl } from "@/lib/affiliate";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const targetUrl = getAffiliateUrl(slug);

  return NextResponse.redirect(targetUrl, 307);
}
