import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { getApprovedCitizenSightings } from "@/lib/submission-store";
import type { UnifiedSighting } from "@/lib/sources/types";
import { unifiedToKumaRecord } from "../route";

// 1 レコードの詳細 (comment・cityName・sectionName・headCount・sourceUrl・photoUrl 等)
// を id で返す。地図は初期に lite=1 で最小フィールドのみ取得し、ピンをタップした時に
// ここから詳細を取得してポップアップに出す (初期転送量の削減)。
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const targetId = decodeURIComponent(id);
  // 座標ヒント。news の id は過去に一意でなく (news-{source}-{index}-{i} が
  // cron 実行をまたいで重複)、同一 id に別地域のレコードが複数ぶら下がる。
  // 単純な先頭一致だと、クリックしたピン (岡山) とは別のレコード (北海道等) の
  // 詳細を返してしまう。ピンの lat/lon を受け取り、同一 id の中でその座標に
  // 最も近いものを選んで曖昧さを解消する (既存データも即座に正しく表示)。
  const sp = new URL(_req.url).searchParams;
  const hintLat = Number(sp.get("lat"));
  const hintLon = Number(sp.get("lon"));
  const hasHint = Number.isFinite(hintLat) && Number.isFinite(hintLon);
  try {
    const unified = await getCachedSightings();
    const citizen =
      process.env.SUBMIT_ENABLED === "1"
        ? await getApprovedCitizenSightings().catch(
            () => [] as UnifiedSighting[],
          )
        : [];
    const matches = [...unified, ...citizen].filter(
      (s) => String(s.id) === targetId,
    );
    if (matches.length === 0) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    const found =
      hasHint && matches.length > 1
        ? matches.reduce((best, s) => {
            const d = (lat: number, lon: number) =>
              (lat - hintLat) ** 2 + (lon - hintLon) ** 2;
            return typeof s.lat === "number" &&
              typeof s.lon === "number" &&
              typeof best.lat === "number" &&
              typeof best.lon === "number" &&
              d(s.lat, s.lon) < d(best.lat, best.lon)
              ? s
              : best;
          })
        : matches[0];
    return NextResponse.json(
      { record: unifiedToKumaRecord(found) },
      {
        headers: {
          "Cache-Control":
            "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
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
