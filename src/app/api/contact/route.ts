import { NextResponse } from "next/server";
import {
  contactStoreConfigured,
  saveContact,
  type ContactKind,
  type ContactMessage,
} from "@/lib/contact-store";

// フォーム送信の受け口。ContactForm から JSON POST される。
// 受信内容を Upstash に保存し (必ず)、RESEND_API_KEY があればメール通知も飛ばす
// (通知は best-effort、失敗しても保存済みなら 200 を返す)。
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO || "contact@research-coordinate.co.jp";
// Resend の送信元。独自ドメイン検証前は onboarding@resend.dev が使える。
const FROM = process.env.RESEND_FROM || "KumaWatch <onboarding@resend.dev>";

const KIND_LABEL: Record<ContactKind, string> = {
  gov: "自治体連携",
  vendor: "製品掲載",
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function sendEmail(msg: ContactMessage): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const label = KIND_LABEL[msg.kind];
  const lines = [
    `KumaWatch ${label}のお問い合わせが届きました。`,
    "",
    `■ご担当者お名前: ${msg.name}`,
    `■${msg.kind === "gov" ? "自治体名・ご担当部署" : "会社名・部署"}: ${msg.org}`,
    `■メールアドレス: ${msg.email}`,
    `■お電話番号: ${msg.phone || "(未記入)"}`,
    "■ご相談内容:",
    msg.message,
  ];
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: msg.email,
        subject: `【KumaWatch ${label}】${msg.org}`,
        text: lines.join("\n"),
      }),
    });
    if (!r.ok) {
      console.error(`[contact] resend HTTP ${r.status}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error("[contact] resend failed", e);
    return false;
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // ハニーポット: ボットが埋める隠しフィールド。値があれば静かに成功扱いで捨てる。
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const kind: ContactKind = body.kind === "vendor" ? "vendor" : "gov";
  const name = str(body.name).slice(0, 100);
  const org = str(body.org).slice(0, 200);
  const email = str(body.email).slice(0, 200);
  const phone = str(body.phone).slice(0, 50);
  const message = str(body.message).slice(0, 5000);

  if (!name || !org || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (!contactStoreConfigured()) {
    // 保存先が無いのに 200 を返すと問い合わせが消失する。設定不備は明示的に失敗。
    console.error("[contact] upstash not configured");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const msg: ContactMessage = {
    id: `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    kind,
    name,
    org,
    email,
    phone: phone || undefined,
    message,
    receivedAt: Date.now(),
    status: "new",
    userAgent: str(req.headers.get("user-agent")).slice(0, 300) || undefined,
  };

  try {
    await saveContact(msg);
  } catch (e) {
    console.error("[contact] save failed", e);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  const emailed = await sendEmail(msg);
  return NextResponse.json({ ok: true, emailed });
}
