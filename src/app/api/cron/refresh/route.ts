import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

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

  // Next.js 16: 2 番目の引数で stale-while-revalidate のウィンドウを指定。
  // "max" は最長の stale 期間。次のリクエストは即時 stale を返しつつ裏で再集約。
  revalidateTag("kuma-records", "max");

  return NextResponse.json({
    ok: true,
    revalidated: ["kuma-records"],
    at: new Date().toISOString(),
  });
}
