import { NextResponse } from "next/server";

export type SubmitPayload = {
  lat: number;
  lon: number;
  occurredAt: string;
  headCount: number;
  situation: "sight" | "trace" | "damage" | "injury";
  comment?: string;
  contact?: string;
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
  if (!Number.isInteger(headCount) || headCount < 1 || headCount > 20)
    return { ok: false, error: "頭数は 1〜20 で指定してください" };

  const situation = b.situation;
  if (typeof situation !== "string" || !SITUATION_VALUES.has(situation))
    return { ok: false, error: "状況が不正です" };

  const comment = typeof b.comment === "string" ? b.comment.slice(0, 300) : undefined;
  const contact = typeof b.contact === "string" ? b.contact.slice(0, 200) : undefined;

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
  const submission = {
    id,
    ...result.payload,
    receivedAt: new Date().toISOString(),
    status: "pending" as const,
  };

  // TODO: Supabase に永続化。現状は dev ログに出力するだけのプロトタイプ。
  console.log("[submit]", JSON.stringify(submission));

  return NextResponse.json({ ok: true, id, status: "received" });
}
