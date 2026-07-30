import { NextResponse } from "next/server";
import { resolveDonationTarget } from "@/data/donation-targets";
import { rakutenAffiliateUrl } from "@/lib/rakuten-affiliate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 地域応援の転送エンドポイント。
 *   /oen/go?pref=秋田県&city=秋田市
 * → 対応表でテーマに沿った楽天ふるさと納税の着地 URL を解決
 * → 楽天アフィリ ID を付与して 307 リダイレクト。
 *
 * LINE 通知・市町村ページ・観光地ページの「応援」導線は、この自社 URL を見せて
 * ここから楽天へ飛ばす（信頼感・計測・差し替え自由のため）。pref 省略で全国。
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref") ?? undefined;
  const city = searchParams.get("city") ?? undefined;

  const target = resolveDonationTarget(pref, city);
  const dest = rakutenAffiliateUrl(target.targetUrl);

  return NextResponse.redirect(dest, 307);
}
