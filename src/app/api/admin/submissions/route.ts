import { NextResponse } from "next/server";
import {
  deleteSubmission,
  listSubmissions,
  moderateSubmission,
  submissionsConfigured,
  type SubmissionStatus,
} from "@/lib/submission-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 管理者向け：市民投稿のモデレーション API。
 * ADMIN_SECRET (合言葉) を Bearer で送って認証する。/admin/submissions から呼ぶ。
 *   GET ?status=pending|approved|rejected|all → 投稿一覧 (新しい順)
 *   POST { id, decision: "approve" | "reject" | "delete" }
 *        承認 / 却下 / 削除。承認・却下はあとから何度でもやり直せる。
 */
function authed(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

const STATUSES: SubmissionStatus[] = ["pending", "approved", "rejected"];

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
  const sp = new URL(req.url).searchParams.get("status");
  const status =
    sp && (STATUSES as string[]).includes(sp)
      ? (sp as SubmissionStatus)
      : undefined; // "all" / 未指定 は全件
  const submissions = await listSubmissions({ status, limit: 300 });
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
  if (
    !id ||
    (decision !== "approve" && decision !== "reject" && decision !== "delete")
  ) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  if (decision === "delete") {
    const ok = await deleteSubmission(id);
    if (!ok) return NextResponse.json({ error: "not found" }, { status: 404 });
    return NextResponse.json({ ok: true, deleted: true });
  }

  const updated = await moderateSubmission(id, decision);
  if (!updated) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, submission: updated });
}
