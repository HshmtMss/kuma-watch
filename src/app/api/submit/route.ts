import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import {
  saveSubmission,
  submissionsConfigured,
  type StoredSubmission,
} from "@/lib/submission-store";
import { verifyIdToken } from "@/lib/line-client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
  /** 写真EXIFから読み取った撮影位置（クライアントが圧縮前に抽出）。 */
  photoLat?: number;
  photoLon?: number;
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

  // 写真EXIFの撮影位置（任意）。地球上の妥当範囲のみ受理し、それ以外は無視。
  const pLat = Number(b.photoLat);
  const pLon = Number(b.photoLon);
  const photoLat =
    Number.isFinite(pLat) && pLat >= -90 && pLat <= 90 ? pLat : undefined;
  const photoLon =
    Number.isFinite(pLon) && pLon >= -180 && pLon <= 180 ? pLon : undefined;

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
      photoLat: photoLat != null && photoLon != null ? photoLat : undefined,
      photoLon: photoLat != null && photoLon != null ? photoLon : undefined,
    },
  };
}

/** 投稿座標を逆ジオコーディングして県・市町村・字を得る (既存 /api/geocode を再利用)。 */
async function reverseGeocode(
  origin: string,
  lat: number,
  lon: number,
): Promise<{
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
}> {
  try {
    // 内部 geocode がハングしても投稿 API 全体を巻き込まないよう 5 秒で打ち切る。
    const res = await fetch(
      `${origin}/api/geocode?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
      { signal: AbortSignal.timeout(5000) },
    );
    if (!res.ok) return {};
    const j = (await res.json()) as {
      result?: { prefecture?: string; city?: string; district?: string };
    };
    return {
      prefectureName: j.result?.prefecture,
      cityName: j.result?.city,
      sectionName: j.result?.district,
    };
  } catch {
    return {};
  }
}

/** 写真 (data URL) を Vercel Blob にアップロードして公開 URL を返す。Blob 未設定なら undefined。 */
async function uploadPhoto(
  id: string,
  dataUrl: string,
): Promise<string | undefined> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return undefined;
  const m = /^data:(image\/(\w+));base64,(.+)$/.exec(dataUrl);
  if (!m) return undefined;
  const ext = m[2] === "jpeg" ? "jpg" : m[2];
  const buf = Buffer.from(m[3], "base64");
  try {
    const { url } = await put(`submissions/${id}.${ext}`, buf, {
      access: "public",
      contentType: m[1],
    });
    return url;
  } catch {
    return undefined;
  }
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

  // 公開フラグ OFF の間は受け付けない (案内を返す)
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
  if (!submissionsConfigured()) {
    return NextResponse.json(
      { ok: false, error: "投稿の保存先が未設定です" },
      { status: 503 },
    );
  }

  const id = crypto.randomUUID();
  const { photoDataUrl, ...rest } = result.payload;
  const origin = new URL(req.url).origin;

  // LINE 内 (LIFF) 投稿は idToken を添えてくる。検証して userId を得る (なりすまし
  // 防止のためクライアントの申告 userId は信用せず必ず検証)。Web の匿名投稿では
  // idToken が無く、検証も未設定なら null になる。投稿自体はブロックしない。
  const rawIdToken =
    typeof (raw as Record<string, unknown>).idToken === "string"
      ? ((raw as Record<string, unknown>).idToken as string)
      : undefined;

  // 逆ジオコーディング・写真アップロード・idToken 検証を並列実行
  const [geo, photoUrl, lineUser] = await Promise.all([
    reverseGeocode(origin, rest.lat, rest.lon),
    photoDataUrl ? uploadPhoto(id, photoDataUrl) : Promise.resolve(undefined),
    rawIdToken
      ? verifyIdToken(rawIdToken).catch(() => null)
      : Promise.resolve(null),
  ]);

  const submission: StoredSubmission = {
    id,
    lat: rest.lat,
    lon: rest.lon,
    occurredAt: rest.occurredAt,
    headCount: rest.headCount,
    situation: rest.situation,
    comment: rest.comment,
    contact: rest.contact,
    photoUrl,
    photoLat: rest.photoLat,
    photoLon: rest.photoLon,
    prefectureName: geo.prefectureName,
    cityName: geo.cityName,
    sectionName: geo.sectionName,
    receivedAt: Date.now(),
    status: "pending",
    lineUserId: lineUser?.userId,
  };

  // 個人情報 (連絡先・コメント本文) は Vercel ログに残さない。長さだけ記録。
  console.log(
    "[submit:queued]",
    JSON.stringify({
      id,
      situation: submission.situation,
      pref: submission.prefectureName,
      city: submission.cityName,
      hasPhoto: Boolean(photoUrl),
      via: lineUser ? "line" : "web",
      contactLen: rest.contact?.length ?? 0,
      commentLen: rest.comment?.length ?? 0,
    }),
  );

  try {
    await saveSubmission(submission);
  } catch {
    return NextResponse.json(
      { ok: false, error: "投稿の保存に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id, status: "received" });
}
