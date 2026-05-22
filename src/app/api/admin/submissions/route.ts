import { NextResponse } from "next/server";
import {
  listPending,
  moderateSubmission,
  submissionsConfigured,
} from "@/lib/submission-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 管理者向け：市民投稿のモデレーション API。
 * ADMIN_SECRET (合言葉) を Bearer で送って認証する。管理画面 (/admin/submissions)
 * から呼ばれる。
 *   GET  → 承認待ち一覧
 *   POST { id, decision: "approve" | "reject" } → 承認 / 却下
 */
function authed(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!submissionsConfigured()) {
    return NextResponse.json(
      { error: "投稿の保存先が未設定です" },
      { status: 503 },
    );
  }
  const submissions = await listPending(200);
  return NextResponse.json({ ok: true, submissions });
}

export async function POST(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!submissionsConfigured()) {
    return NextResponse.json(
      { error: "投稿の保存先が未設定です" },
      { status: 503 },
    );
  }
  let body: { id?: string; decision?: string };
  try {
    body = (await req.json()) as { id?: string; decision?: string };
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const { id, decision } = body;
  if (!id || (decision !== "approve" && decision !== "reject")) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const updated = await moderateSubmission(id, decision);
  if (!updated) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, submission: updated });
}
