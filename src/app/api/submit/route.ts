import { NextResponse } from "next/server";

export type SubmitPayload = {
  lat: number;
  lon: number;
  occurredAt: string;
  headCount: number;
  situation: "sight" | "trace" | "damage" | "injury";
  comment?: string;
  contact?: string;
  /** data URL 形式 (image/jpeg, image/png など) の写真 */
  photoDataUrl?: string;
};

const SITUATION_VALUES = new Set(["sight", "trace", "damage", "injury"]);

function validate(body: unknown): { ok: true; payload: SubmitPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "本文が不正です" };
  const b = body as Record<string, unknown>;
  const lat = Number(b.lat);
  const lon = Number(b.lon);
  if (!Number.isFinite(lat) || lat < 20 || lat > 50)
    return { ok: false, error: "緯度が範囲外です" };
  if (!Number.isFinite(lon) || lon < 120 || lon > 150)
    return { ok: false, error: "経度が範囲外です" };

  const occurredAt = typeof b.occurredAt === "string" ? b.occurredAt : "";
  const occurredDate = new Date(occurredAt);
  if (!occurredAt || Number.isNaN(occurredDate.getTime()))
    return { ok: false, error: "日時が不正です" };
  const now = Date.now();
  if (occurredDate.getTime() > now + 60_000)
    return { ok: false, error: "未来の日時は投稿できません" };
  if (occurredDate.getTime() < now - 14 * 86400_000)
    return { ok: false, error: "14 日より前の情報は受け付けていません" };

  const headCount = Number(b.headCount);
  if (!Number.isInteger(headCount) || headCount < 0 || headCount > 20)
    return { ok: false, error: "頭数は 0〜20 で指定してください (痕跡のみは 0)" };

  const situation = b.situation;
  if (typeof situation !== "string" || !SITUATION_VALUES.has(situation))
    return { ok: false, error: "状況が不正です" };

  const comment = typeof b.comment === "string" ? b.comment.slice(0, 300) : undefined;
  const contact = typeof b.contact === "string" ? b.contact.slice(0, 200) : undefined;

  let photoDataUrl: string | undefined;
  if (typeof b.photoDataUrl === "string" && b.photoDataUrl.length > 0) {
    if (!b.photoDataUrl.startsWith("data:image/")) {
      return { ok: false, error: "写真は画像形式で送信してください" };
    }
    // data URL は base64 含めて 7MB 以下 (生ファイル 5MB + 33% base64 膨張想定)
    if (b.photoDataUrl.length > 7 * 1024 * 1024) {
      return { ok: false, error: "写真のサイズが大きすぎます (5MB まで)" };
    }
    photoDataUrl = b.photoDataUrl;
  }

  return {
    ok: true,
    payload: {
      lat,
      lon,
      occurredAt: occurredDate.toISOString(),
      headCount,
      situation: situation as SubmitPayload["situation"],
      comment,
      contact,
      photoDataUrl,
    },
  };
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON が不正です" }, { status: 400 });
  }

  const result = validate(raw);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const id = crypto.randomUUID();
  // 写真は base64 が長くログに出ないよう別に扱う
  const { photoDataUrl, ...rest } = result.payload;
  const submission = {
    id,
    ...rest,
    photoSize: photoDataUrl?.length ?? 0,
    receivedAt: new Date().toISOString(),
    status: "pending" as const,
  };

  // 永続化は Phase 3 で Supabase に接続する。それまでは console に記録のみ。
  // 公開ローンチ初期は投稿機能を「準備中」表示にし、503 を返してフロントに案内させる。
  // 個人情報 (連絡先メール・コメント本文) は Vercel ログに残さない。長さだけ記録する。
  const { contact, comment, ...safeSubmission } = submission;
  console.log("[submit:queued]", JSON.stringify({
    ...safeSubmission,
    contactLen: contact?.length ?? 0,
    commentLen: comment?.length ?? 0,
  }));

  if (process.env.SUBMIT_ENABLED !== "1") {
    return NextResponse.json(
      {
        ok: false,
        status: "preparing",
        error:
          "投稿機能は現在準備中です。公開後に順次有効化します（数日内予定）。",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, id, status: "received" });
}
