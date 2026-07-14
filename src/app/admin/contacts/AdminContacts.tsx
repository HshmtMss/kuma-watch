"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, RotateCcw, Trash2 } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import type { ContactMessage } from "@/lib/contact-store";

const KIND_LABEL: Record<string, string> = {
  gov: "自治体連携",
  vendor: "製品掲載",
};

type Filter = "all" | "new" | "handled";

function isNew(c: ContactMessage): boolean {
  return (c.status ?? "new") !== "handled";
}

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
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError("");
    try {
      const res = await fetch(`/api/admin/contacts`, {
        headers: { Authorization: `Bearer ${secret}` },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(String(res.status));
      const d = (await res.json()) as { contacts?: ContactMessage[] };
      setContacts(d.contacts ?? []);
    } catch {
      setError("読み込みに失敗しました。");
    }
  }, [secret]);

  useEffect(() => {
    load();
  }, [load]);

  const patch = useCallback(
    async (id: string, status: "new" | "handled") => {
      setBusy(id);
      try {
        const res = await fetch(`/api/admin/contacts`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${secret}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, status }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setContacts((prev) =>
          prev
            ? prev.map((c) => (c.id === id ? { ...c, status } : c))
            : prev,
        );
      } catch {
        setError("更新に失敗しました。");
      } finally {
        setBusy(null);
      }
    },
    [secret],
  );

  const remove = useCallback(
    async (id: string) => {
      if (!window.confirm("この問い合わせを削除しますか?")) return;
      setBusy(id);
      try {
        const res = await fetch(
          `/api/admin/contacts?id=${encodeURIComponent(id)}`,
          { method: "DELETE", headers: { Authorization: `Bearer ${secret}` } },
        );
        if (!res.ok) throw new Error(String(res.status));
        setContacts((prev) => (prev ? prev.filter((c) => c.id !== id) : prev));
      } catch {
        setError("削除に失敗しました。");
      } finally {
        setBusy(null);
      }
    },
    [secret],
  );

  const newCount = useMemo(
    () => (contacts ?? []).filter(isNew).length,
    [contacts],
  );

  const shown = useMemo(() => {
    let list = contacts ?? [];
    if (filter === "new") list = list.filter(isNew);
    if (filter === "handled") list = list.filter((c) => !isNew(c));
    const term = q.trim().toLowerCase();
    if (term) {
      list = list.filter((c) =>
        [c.name, c.org, c.email, c.message]
          .join(" ")
          .toLowerCase()
          .includes(term),
      );
    }
    return list;
  }, [contacts, filter, q]);

  if (error && contacts === null)
    return <p className="text-sm text-rose-700">{error}</p>;
  if (contacts === null)
    return <p className="text-sm text-stone-500">読み込み中…</p>;

  const FILTERS: { key: Filter; label: string; n: number }[] = [
    { key: "all", label: "すべて", n: contacts.length },
    { key: "new", label: "新着", n: newCount },
    { key: "handled", label: "対応済み", n: contacts.length - newCount },
  ];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              filter === f.key
                ? "bg-amber-100 text-amber-900"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            {f.label}
            <span className="ml-1 tabular-nums text-stone-400">{f.n}</span>
          </button>
        ))}
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="名前・自治体・本文で検索"
          className="ml-auto w-full max-w-[16rem] rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
      </div>

      {error && <p className="text-sm text-rose-700">{error}</p>}

      {shown.length === 0 ? (
        <p className="py-8 text-center text-sm text-stone-500">
          該当する問い合わせはありません。
        </p>
      ) : (
        shown.map((c) => {
          const fresh = isNew(c);
          return (
            <div
              key={c.id}
              className={`rounded-xl border bg-white p-4 shadow-sm ${
                fresh ? "border-amber-200" : "border-stone-200"
              }`}
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
                  {KIND_LABEL[c.kind] ?? c.kind}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    fresh
                      ? "bg-rose-100 text-rose-700"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {fresh ? "新着" : "対応済み"}
                </span>
                <span className="text-xs text-stone-500">
                  {fmt(c.receivedAt)}
                </span>
                <div className="ml-auto flex items-center gap-1">
                  {fresh ? (
                    <button
                      type="button"
                      onClick={() => patch(c.id, "handled")}
                      disabled={busy === c.id}
                      className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-2.5 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-50 disabled:opacity-50"
                    >
                      <Check size={13} aria-hidden />
                      対応済みにする
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => patch(c.id, "new")}
                      disabled={busy === c.id}
                      className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-2.5 py-1 text-xs text-stone-500 hover:bg-stone-50 disabled:opacity-50"
                    >
                      <RotateCcw size={13} aria-hidden />
                      新着に戻す
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => remove(c.id)}
                    disabled={busy === c.id}
                    aria-label="削除"
                    className="inline-flex items-center rounded-full p-1.5 text-stone-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                  >
                    <Trash2 size={14} aria-hidden />
                  </button>
                </div>
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
                    href={`mailto:${c.email}?subject=${encodeURIComponent(
                      "Re: KumaWatch お問い合わせ",
                    )}`}
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
          );
        })
      )}
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
