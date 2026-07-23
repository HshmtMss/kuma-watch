/**
 * LINE Messaging API / LINE ログイン (LIFF) のサーバサイドクライアント。
 *
 * 依存を増やさないため公式 SDK (@line/bot-sdk) は使わず、fetch で直接叩く。
 * Web Push が web-push を薄く使っているのと同じ方針。
 *
 * env 変数:
 *   LINE_CHANNEL_ACCESS_TOKEN  … Messaging API のチャネルアクセストークン (長期)
 *   LINE_CHANNEL_SECRET        … webhook 署名検証用のチャネルシークレット
 *   LINE_LOGIN_CHANNEL_ID      … ID トークン検証の audience。LIFF は Messaging API
 *                                チャネルに追加できないため別途「LINE ログイン
 *                                チャネル」を作りそこに LIFF を置く。idToken の aud は
 *                                その LINE ログインチャネルの ID になる (Messaging API
 *                                チャネル ID ではない)。同一プロバイダー配下なら
 *                                userId (sub) は Messaging API と一致する。
 *
 * いずれも本番 env にのみ投入する (.env は要確認)。未設定なら各関数は
 * isLineConfigured() が false を返し、呼び出し側で 503 を返す。
 */

const MESSAGING_API = "https://api.line.me/v2/bot";
const VERIFY_ENDPOINT = "https://api.line.me/oauth2/v2.1/verify";

/** multicast の 1 リクエストあたり上限 (LINE 仕様)。 */
const MULTICAST_CHUNK = 500;

export type LineMessage =
  | { type: "text"; text: string }
  | Record<string, unknown>;

export function isLineConfigured(): boolean {
  return Boolean(process.env.LINE_CHANNEL_ACCESS_TOKEN);
}

function accessToken(): string {
  const t = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!t) throw new Error("LINE_CHANNEL_ACCESS_TOKEN not set");
  return t;
}

// ─────────────────────────────────────────────────────────────────────────
// webhook 署名検証
// ─────────────────────────────────────────────────────────────────────────

/**
 * webhook リクエストの x-line-signature を検証する。
 * 署名 = HMAC-SHA256(rawBody, channelSecret) を base64 したもの。
 * 必ず「生のリクエストボディ文字列」で計算すること (JSON.parse 後は不可)。
 */
export async function verifyLineSignature(
  rawBody: string,
  signature: string | null,
): Promise<boolean> {
  const secret = process.env.LINE_CHANNEL_SECRET;
  if (!secret || !signature) return false;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, enc.encode(rawBody));
  const expected = Buffer.from(new Uint8Array(mac)).toString("base64");
  // タイミング安全比較 (長さが違えば即 false)
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

// ─────────────────────────────────────────────────────────────────────────
// ID トークン検証 (LIFF から受け取った idToken → 本物の userId を得る)
// ─────────────────────────────────────────────────────────────────────────

/**
 * LIFF の liff.getIDToken() が返す ID トークンを LINE のエンドポイントで
 * 検証し、userId (sub) を取り出す。
 *
 * クライアントが送ってきた userId を鵜呑みにすると他人の userId で
 * 勝手に購読させられる (なりすまし)。購読 API は必ずこの検証を通した
 * userId を使うこと。
 */
export async function verifyIdToken(
  idToken: string,
): Promise<{ userId: string; displayName?: string } | null> {
  const clientId = process.env.LINE_LOGIN_CHANNEL_ID;
  if (!clientId) return null;
  const res = await fetch(VERIFY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ id_token: idToken, client_id: clientId }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    sub?: string;
    name?: string;
    aud?: string;
  };
  if (!data.sub) return null;
  return { userId: data.sub, displayName: data.name };
}

// ─────────────────────────────────────────────────────────────────────────
// 送信
// ─────────────────────────────────────────────────────────────────────────

/** 1 ユーザへ push。webhook の返信以外の任意送信に使う。 */
/**
 * LINE API の失敗内容を短く要約した文字列。
 * 例: "403 The account is not allowed to send messages" / "429 ..."。
 * 送信0が続く原因(権限・上限・トークン)を管理画面から特定できるようにする。
 * 課金・個人情報に関わらない範囲(status とエラーメッセージ)だけを拾う。
 */
async function summarizeError(res: Response): Promise<string> {
  let detail = "";
  try {
    const body = (await res.json()) as { message?: string };
    if (body?.message) detail = ` ${body.message}`;
  } catch {
    // JSON でなければ本文は捨てる (status だけで足りる)
  }
  return `${res.status}${detail}`.slice(0, 200);
}

export async function pushMessage(
  to: string,
  messages: LineMessage[],
): Promise<{ ok: boolean; status: number; error?: string }> {
  const res = await fetch(`${MESSAGING_API}/message/push`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken()}`,
    },
    body: JSON.stringify({ to, messages }),
  });
  return {
    ok: res.ok,
    status: res.status,
    error: res.ok ? undefined : await summarizeError(res),
  };
}

/** replyToken で友だち追加/メッセージへ返信する (無料枠・課金対象外)。 */
export async function replyMessage(
  replyToken: string,
  messages: LineMessage[],
): Promise<{ ok: boolean; status: number }> {
  const res = await fetch(`${MESSAGING_API}/message/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken()}`,
    },
    body: JSON.stringify({ replyToken, messages }),
  });
  return { ok: res.ok, status: res.status };
}

/**
 * 複数ユーザへ一斉送信 (課金対象: 1 通 = 1 人 × 1 回)。
 * 500 件ずつに分割して送る。到達失敗のあった userId (400 で invalid など) は
 * 個別には判別しにくいので、呼び出し側で必要なら pushMessage にフォールバック
 * する。ここでは送信できた概算件数だけ返す。
 */
export async function multicast(
  userIds: string[],
  messages: LineMessage[],
): Promise<{ sent: number; failedChunks: number; error?: string }> {
  let sent = 0;
  let failedChunks = 0;
  let error: string | undefined;
  for (let i = 0; i < userIds.length; i += MULTICAST_CHUNK) {
    const chunk = userIds.slice(i, i + MULTICAST_CHUNK);
    const res = await fetch(`${MESSAGING_API}/message/multicast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify({ to: chunk, messages }),
    });
    if (res.ok) {
      sent += chunk.length;
    } else {
      failedChunks++;
      // 最初の失敗理由だけ残す (全チャンク同じ理由で落ちるのが普通なので)。
      if (!error) error = await summarizeError(res);
    }
  }
  return { sent, failedChunks, error };
}

/** テキストメッセージを組み立てる小ヘルパ。 */
export function text(body: string): LineMessage {
  return { type: "text", text: body };
}
