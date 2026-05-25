import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { getApprovedCitizenSightings } from "@/lib/submission-store";
import type { UnifiedSighting } from "@/lib/sources/types";

/**
 * 出没データの「軽量サマリ」だけを返すポーリング用エンドポイント。
 *
 * ホーム地図は 30 秒ごとに新着を確認するが、本体 (/api/kuma) は最大 10 万件の
 * JSON を返すため、毎回フルで叩くとクライアント帯域が大きい。ここでは件数と
 * 最新取り込み時刻 (署名) だけを数バイトで返し、署名が変化したときだけ
 * クライアントが本体を取り直す。フィルタ条件は /api/kuma と一致させる。
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const source = searchParams.get("source");

  try {
    const unified = await getCachedSightings();
    const citizen =
      process.env.SUBMIT_ENABLED === "1"
        ? await getApprovedCitizenSightings().catch(
            () => [] as UnifiedSighting[],
          )
        : [];
    const all = [...unified, ...citizen];
    const todayIso = new Date().toISOString().slice(0, 10);

    let matched = 0;
    let latestDate: string | null = null;
    let latestIngestedAt = 0;
    for (const r of all) {
      if (pref && r.prefectureName !== pref) continue;
      if (from && !(r.date >= from)) continue;
      if (to && !(r.date <= to)) continue;
      if (source && r.source !== source) continue;
      // /api/kuma と同じく未来日付は除外
      if (!(r.date <= todayIso)) continue;
      matched++;
      if (!latestDate || r.date > latestDate) latestDate = r.date;
      if (typeof r.ingestedAt === "number" && r.ingestedAt > latestIngestedAt) {
        latestIngestedAt = r.ingestedAt;
      }
    }

    return NextResponse.json(
      { matched, latestDate, latestIngestedAt },
      {
        headers: {
          "Cache-Control":
            "public, max-age=30, s-maxage=30, stale-while-revalidate=300",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 },
    );
  }
}
