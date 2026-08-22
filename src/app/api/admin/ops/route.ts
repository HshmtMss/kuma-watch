import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { sourceHealth } from "@/lib/source-health";
import { DATA_SOURCES } from "@/data/data-sources";
import { listChurn } from "@/lib/churn-log";
import { jstToday } from "@/lib/jst-date";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 運用面の指標。クマ出没そのものの分析 (/api/admin/analytics) とは目的が
 * 違うので分けている。こちらは「基盤が健全に動いているか」を見る。
 */
export async function GET(req: Request) {
  const secret = process.env.ADMIN_SECRET;
  const auth = req.headers.get("authorization") ?? "";
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const today = jstToday();
  const records = await getCachedSightings();
  // 「本来データが来るはずのソース」を渡し、1 件も来ていないものを missing として
// 検出させる。extractor を持つ登録だけが取り込み対象 (URL だけの参照用エントリは除く)。
const expected = DATA_SOURCES.filter((s) => s.extractor).map((s) => ({
  id: s.id,
  bearStatus: s.bearStatus,
}));
const health = sourceHealth(records, today, { expected });
  const churn = await listChurn(180);

  const hidden = records.filter(
    (r) => (r as { geoInconsistent?: boolean }).geoInconsistent,
  ).length;

  return NextResponse.json({
    ok: true,
    today,
    totals: {
      records: records.length,
      sources: health.length,
      hiddenInconsistent: hidden,
    },
    health,
    churn: {
      // 記録を始めたのが最近なので、当面は件数が少ない点を UI 側で明示する
      count: churn.length,
      byChannel: churn.reduce<Record<string, number>>((a, c) => {
        a[c.channel] = (a[c.channel] ?? 0) + 1;
        return a;
      }, {}),
      medianLifetimeDays: (() => {
        const v = churn
          .map((c) => c.lifetimeDays)
          .filter((n): n is number => typeof n === "number")
          .sort((a, b) => a - b);
        return v.length ? v[Math.floor(v.length / 2)] : null;
      })(),
    },
  });
}
