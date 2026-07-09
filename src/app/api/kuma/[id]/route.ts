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
  try {
    const unified = await getCachedSightings();
    const citizen =
      process.env.SUBMIT_ENABLED === "1"
        ? await getApprovedCitizenSightings().catch(
            () => [] as UnifiedSighting[],
          )
        : [];
    const found = [...unified, ...citizen].find(
      (s) => String(s.id) === targetId,
    );
    if (!found) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
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
