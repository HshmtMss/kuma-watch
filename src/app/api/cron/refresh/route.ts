import { NextResponse } from "next/server";
import { invalidateSightingsCache } from "@/lib/sightings-cache";

// Vercel Cron からスケジュール実行されるエンドポイント。
// 集約結果のキャッシュタグを invalidate し、次のリクエストで再集約させる。
//
// 認証:
// - 本番では CRON_SECRET 環境変数を Vercel に登録し、Authorization: Bearer <secret> を要求する。
// - Vercel Cron は自動的に Authorization ヘッダを付与する (Vercel Cron 仕様)。
// - 任意の手動実行も同じヘッダを使えば可。

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: Request) {
  const expected = process.env.CRON_SECRET;
  if (expected) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${expected}`) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  // 出没データはサーバー単位のメモリキャッシュで持つので、
  // タグではなく直接キャッシュを破棄して次回再ロードさせる。
  invalidateSightingsCache();

  return NextResponse.json({
    ok: true,
    revalidated: ["kuma-records"],
    at: new Date().toISOString(),
  });
}
