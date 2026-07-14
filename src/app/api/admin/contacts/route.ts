import { NextResponse } from "next/server";
import {
  contactStoreConfigured,
  deleteContact,
  listContacts,
  setContactStatus,
} from "@/lib/contact-store";

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

export async function PATCH(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: { id?: string; status?: string };
  try {
    body = (await req.json()) as { id?: string; status?: string };
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const id = (body.id ?? "").trim();
  const status = body.status === "handled" ? "handled" : "new";
  if (!id) {
    return NextResponse.json({ error: "missing_id" }, { status: 400 });
  }
  try {
    const updated = await setContactStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, contact: updated });
  } catch (e) {
    console.error("[admin/contacts] patch failed", e);
    return NextResponse.json({ error: "patch_failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "missing_id" }, { status: 400 });
  }
  try {
    await deleteContact(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin/contacts] delete failed", e);
    return NextResponse.json({ error: "delete_failed" }, { status: 500 });
  }
}
