import { NextResponse } from "next/server";
import {
  isLineConfigured,
  replyMessage,
  text,
  verifyLineSignature,
} from "@/lib/line-client";
import { purgeUser, upsertUser } from "@/lib/line-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * LINE Messaging API の webhook 受け口。
 * LINE Developers コンソールの「Webhook URL」に
 *   https://kuma-watch.jp/api/line/webhook
 * を設定する。
 *
 * 扱うイベント:
 *   - follow   … 友だち追加。ユーザを登録し、地域登録 (LIFF) への導線を返信。
 *   - unfollow … ブロック / 削除。購読を完全に purge (以後 dispatch されない)。
 *   - message  … 何か送ってきたら地域登録リンクを返す (簡易ヘルプ)。
 *
 * 署名検証: x-line-signature を「生ボディ」で検証してから処理する。
 * 検証失敗は 401 (LINE の再送を誘発しないよう本文は最小限)。
 */

type LineEvent = {
  type: string;
  replyToken?: string;
  source?: { userId?: string };
};

function liffUrl(): string | null {
  const id = process.env.NEXT_PUBLIC_LIFF_ID;
  return id ? `https://liff.line.me/${id}` : null;
}

function welcomeMessages() {
  const url = liffUrl();
  const intro =
    "友だち追加ありがとうございます。\n" +
    "お住まいの地域や気になる場所を登録すると、その周辺で新しいクマの出没情報が入ったときにここでお知らせします。\n\n" +
    "通知が来ない日は「その地域で出没の届け出がない＝ふだん通り」ということです。";
  const msgs = [text(intro)];
  if (url) {
    msgs.push(text(`▼ 地域を登録する\n${url}`));
  }
  return msgs;
}

export async function POST(req: Request) {
  if (!isLineConfigured()) {
    return NextResponse.json({ error: "line not configured" }, { status: 503 });
  }

  // 署名検証は生ボディで行う必要があるため text() で受ける。
  const rawBody = await req.text();
  const signature = req.headers.get("x-line-signature");
  if (!(await verifyLineSignature(rawBody, signature))) {
    return NextResponse.json({ error: "bad signature" }, { status: 401 });
  }

  let body: { events?: LineEvent[] };
  try {
    body = JSON.parse(rawBody) as { events?: LineEvent[] };
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const events = body.events ?? [];
  for (const ev of events) {
    const userId = ev.source?.userId;
    try {
      if (ev.type === "follow" && userId) {
        await upsertUser({ userId });
        if (ev.replyToken) {
          await replyMessage(ev.replyToken, welcomeMessages());
        }
      } else if (ev.type === "unfollow" && userId) {
        // ブロック / 削除。購読を完全削除して以後 dispatch しない。
        await purgeUser(userId);
      } else if (ev.type === "message" && ev.replyToken) {
        await replyMessage(ev.replyToken, welcomeMessages());
      }
    } catch {
      // 1 イベントの失敗で 500 を返すと LINE が全体を再送するため、
      // 個別の失敗は握りつぶして 200 を返す。
    }
  }

  // LINE は 2xx を期待する。常に 200。
  return NextResponse.json({ ok: true });
}
