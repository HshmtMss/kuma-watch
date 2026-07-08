import { NextResponse } from "next/server";
import { recordPushSnapshot, isConfigured } from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 通知登録数の日次スナップショットを push:hist に保存する cron。
 * GitHub Actions から Authorization: Bearer <CRON_SECRET> で日次に叩く想定。
 * 同日再実行は上書き（冪等）。管理画面(通知登録)で登録数の推移を表示する。
 */
function authed(req: Request): boolean {
  const expected = process.env.CRON_SECRET;
  if (!expected) return true; // 未設定環境（ローカル等）は素通し
  return req.headers.get("authorization") === `Bearer ${expected}`;
}

export async function GET(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isConfigured()) {
    return NextResponse.json(
      { ok: false, error: "push notifications not configured" },
      { status: 503 },
    );
  }
  const snapshot = await recordPushSnapshot();
  return NextResponse.json({ ok: true, snapshot });
}

// POST でも同じ（GitHub Actions からは POST で叩く）。
export const POST = GET;
