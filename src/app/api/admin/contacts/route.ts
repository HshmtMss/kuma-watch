import { NextResponse } from "next/server";
import { contactStoreConfigured, listContacts } from "@/lib/contact-store";

/**
 * 問い合わせ一覧 (管理)。ADMIN_SECRET (合言葉) を Bearer で送って認証する
 * (push-stats / submissions / line-stats と共通)。
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!contactStoreConfigured()) {
    return NextResponse.json({ contacts: [], configured: false });
  }
  try {
    const contacts = await listContacts({ limit: 300 });
    return NextResponse.json({ contacts, configured: true });
  } catch (e) {
    console.error("[admin/contacts] list failed", e);
    return NextResponse.json({ error: "list_failed" }, { status: 500 });
  }
}
