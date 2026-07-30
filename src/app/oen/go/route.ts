import { NextResponse } from "next/server";
import { resolveDonationTarget, resolveCategory } from "@/data/donation-targets";
import { rakutenAffiliateUrl } from "@/lib/rakuten-affiliate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 地域応援の転送エンドポイント。
 *   /oen/go?pref=秋田県&city=秋田市   … その市町村のふるさと納税へ（市町村カード用）
 *   /oen/go?cat=shizen                … テーマ別の楽天ふるさと納税へ（/oen ハブ用）
 * → 着地 URL を解決 → 楽天アフィリ ID を付与して 307 リダイレクト。
 *
 * LINE 通知・市町村ページ・観光地ページの「応援」導線は、この自社 URL を見せて
 * ここから楽天へ飛ばす（信頼感・計測・差し替え自由のため）。pref 省略で全国。
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat") ?? undefined;

  // テーマ別（/oen ハブのカテゴリボタン）
  if (cat) {
    const category = resolveCategory(cat);
    if (category) {
      return NextResponse.redirect(rakutenAffiliateUrl(category.targetUrl), 307);
    }
  }

  const pref = searchParams.get("pref") ?? undefined;
  const city = searchParams.get("city") ?? undefined;

  const target = resolveDonationTarget(pref, city);
  const dest = rakutenAffiliateUrl(target.targetUrl);

  return NextResponse.redirect(dest, 307);
}
