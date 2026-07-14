"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import type { ContactMessage } from "@/lib/contact-store";

const KIND_LABEL: Record<string, string> = {
  gov: "自治体連携",
  vendor: "製品掲載",
};

function fmt(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000); // JST
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}/${p(d.getUTCMonth() + 1)}/${p(
    d.getUTCDate(),
  )} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`;
}

function ContactList({ secret }: { secret: string }) {
  const [contacts, setContacts] = useState<ContactMessage[] | null>(null);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const remove = useCallback(
    async (id: string) => {
      if (!window.confirm("この問い合わせを削除しますか?")) return;
      setDeleting(id);
      try {
        const res = await fetch(`/api/admin/contacts?id=${encodeURIComponent(id)}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${secret}` },
        });
        if (!res.ok) throw new Error(String(res.status));
        setContacts((prev) => (prev ? prev.filter((c) => c.id !== id) : prev));
      } catch {
        setError("削除に失敗しました。");
      } finally {
        setDeleting(null);
      }
    },
    [secret],
  );

  const load = useCallback(async () => {
    setError("");
    try {
      const res = await fetch(`/api/admin/contacts`, {
        headers: { Authorization: `Bearer ${secret}` },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(String(res.status));
      const d = (await res.json()) as {
        contacts?: ContactMessage[];
        configured?: boolean;
      };
      setContacts(d.contacts ?? []);
    } catch {
      setError("読み込みに失敗しました。");
    }
  }, [secret]);

  useEffect(() => {
    load();
  }, [load]);

  if (error) return <p className="text-sm text-rose-700">{error}</p>;
  if (contacts === null)
    return <p className="text-sm text-stone-500">読み込み中…</p>;
  if (contacts.length === 0)
    return (
      <p className="text-sm text-stone-500">まだ問い合わせはありません。</p>
    );

  return (
    <div className="space-y-3">
      <p className="text-xs text-stone-500">{contacts.length} 件</p>
      {contacts.map((c) => (
        <div
          key={c.id}
          className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
              {KIND_LABEL[c.kind] ?? c.kind}
            </span>
            <span className="text-xs text-stone-500">{fmt(c.receivedAt)}</span>
            <button
              type="button"
              onClick={() => remove(c.id)}
              disabled={deleting === c.id}
              className="ml-auto text-xs text-stone-400 hover:text-rose-600 disabled:opacity-50"
            >
              {deleting === c.id ? "削除中…" : "削除"}
            </button>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
            <dt className="text-stone-500">お名前</dt>
            <dd className="text-stone-900">{c.name}</dd>
            <dt className="text-stone-500">
              {c.kind === "gov" ? "自治体・部署" : "会社・部署"}
            </dt>
            <dd className="text-stone-900">{c.org}</dd>
            <dt className="text-stone-500">メール</dt>
            <dd>
              <a
                href={`mailto:${c.email}`}
                className="text-amber-700 underline"
              >
                {c.email}
              </a>
            </dd>
            {c.phone && (
              <>
                <dt className="text-stone-500">電話</dt>
                <dd className="text-stone-900">{c.phone}</dd>
              </>
            )}
          </dl>
          <p className="mt-2 whitespace-pre-wrap rounded-lg bg-stone-50 p-3 text-sm text-stone-800">
            {c.message}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function AdminContacts() {
  return (
    <AdminShell active="contacts" title="問い合わせ">
      {(secret) => <ContactList secret={secret} />}
    </AdminShell>
  );
}
