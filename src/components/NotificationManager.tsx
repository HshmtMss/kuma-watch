"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/**
 * 中央の通知設定ページ (/notifications) の本体。
 *
 * この端末の Web Push subscription (endpoint) を取得し、サーバの
 * /api/push/list で「登録中の市町村・観光地」を引いて一覧表示する。
 * 各項目を個別に解除でき、「すべて解除」でまとめて解除＋ブラウザ購読自体も
 * 破棄する。登録した各ページに戻らなくても、ここから解除を完結できる。
 */

type MuniItem = { pref: string; city: string };

type Phase = "loading" | "unsupported" | "no-subscription" | "ready";

export default function NotificationManager() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [endpoint, setEndpoint] = useState<string>("");
  const [munis, setMunis] = useState<MuniItem[]>([]);
  const [spots, setSpots] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [busy, setBusy] = useState<string>(""); // 操作中の項目キー

  const load = useCallback(async () => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setPhase("unsupported");
      return;
    }
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (!sub) {
        setPhase("no-subscription");
        return;
      }
      setEndpoint(sub.endpoint);
      const res = await fetch("/api/push/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: sub.endpoint }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as {
        munis?: MuniItem[];
        spots?: string[];
      };
      setMunis(data.munis ?? []);
      setSpots(data.spots ?? []);
      setPhase("ready");
    } catch {
      // SW は登録されるまで ready が解決しない場合があるので register も試す
      try {
        await navigator.serviceWorker.register("/sw.js");
      } catch {
        /* noop */
      }
      setPhase("no-subscription");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const removeMuni = useCallback(
    async (m: MuniItem) => {
      const key = `muni:${m.pref}/${m.city}`;
      setBusy(key);
      setMessage("");
      try {
        const res = await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint, pref: m.pref, city: m.city }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setMunis((prev) =>
          prev.filter((x) => !(x.pref === m.pref && x.city === m.city)),
        );
        setMessage(`${m.city} の通知を解除しました`);
      } catch (e) {
        setMessage(
          `解除に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy("");
      }
    },
    [endpoint],
  );

  const removeSpot = useCallback(
    async (slug: string) => {
      const key = `spot:${slug}`;
      setBusy(key);
      setMessage("");
      try {
        const res = await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint, slug }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setSpots((prev) => prev.filter((x) => x !== slug));
        setMessage(`${slug} 周辺の通知を解除しました`);
      } catch (e) {
        setMessage(
          `解除に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy("");
      }
    },
    [endpoint],
  );

  const removeAll = useCallback(async () => {
    setBusy("all");
    setMessage("");
    try {
      await Promise.all([
        ...munis.map((m) =>
          fetch("/api/push/unsubscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint, pref: m.pref, city: m.city }),
          }),
        ),
        ...spots.map((slug) =>
          fetch("/api/push/unsubscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint, slug }),
          }),
        ),
      ]);
      // ブラウザの購読自体も破棄して、この端末への通知を完全に止める
      try {
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        await sub?.unsubscribe();
      } catch {
        /* noop */
      }
      setMunis([]);
      setSpots([]);
      setMessage("すべての通知を解除しました");
    } catch (e) {
      setMessage(
        `一括解除に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    } finally {
      setBusy("");
    }
  }, [endpoint, munis, spots]);

  if (phase === "loading") {
    return <p className="text-sm text-stone-500">読み込み中…</p>;
  }

  if (phase === "unsupported") {
    return (
      <p className="text-sm text-stone-600">
        このブラウザは通知 (Web Push) に対応していません。
      </p>
    );
  }

  if (phase === "no-subscription") {
    return (
      <div className="text-sm text-stone-600">
        <p>この端末では、まだ通知を登録していません。</p>
        <p className="mt-2">
          市町村ページ・観光地ページの「通知する」から登録できます。
          <br />
          <Link href="/" className="text-emerald-700 underline">
            地図トップへ
          </Link>
        </p>
      </div>
    );
  }

  const total = munis.length + spots.length;

  return (
    <div className="not-prose">
      {total === 0 ? (
        <p className="text-sm text-stone-600">
          この端末で登録中の通知はありません。
          市町村ページ・観光地ページの「通知する」から登録できます。
        </p>
      ) : (
        <>
          <p className="mb-4 text-sm text-stone-600">
            この端末で登録中の通知は <b>{total}</b> 件です。不要なものは
            「解除」で個別に、または「すべて解除」でまとめて止められます。
          </p>

          {munis.length > 0 && (
            <section className="mb-6">
              <h2 className="mb-2 text-sm font-bold text-stone-900">
                市町村（{munis.length}）
              </h2>
              <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
                {munis.map((m) => {
                  const key = `muni:${m.pref}/${m.city}`;
                  return (
                    <li
                      key={key}
                      className="flex items-center justify-between gap-3 px-4 py-3"
                    >
                      <span className="min-w-0 text-sm text-stone-800">
                        <span className="text-stone-500">{m.pref}</span>{" "}
                        <span className="font-semibold">{m.city}</span>
                      </span>
                      <button
                        type="button"
                        disabled={busy !== ""}
                        onClick={() => removeMuni(m)}
                        className="shrink-0 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-50"
                      >
                        {busy === key ? "解除中…" : "解除"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {spots.length > 0 && (
            <section className="mb-6">
              <h2 className="mb-2 text-sm font-bold text-stone-900">
                観光地（{spots.length}）
              </h2>
              <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
                {spots.map((slug) => {
                  const key = `spot:${slug}`;
                  return (
                    <li
                      key={key}
                      className="flex items-center justify-between gap-3 px-4 py-3"
                    >
                      <span className="min-w-0 text-sm font-semibold text-stone-800">
                        {slug}
                        <span className="ml-1 text-xs font-normal text-stone-500">
                          周辺 10km
                        </span>
                      </span>
                      <button
                        type="button"
                        disabled={busy !== ""}
                        onClick={() => removeSpot(slug)}
                        className="shrink-0 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-50"
                      >
                        {busy === key ? "解除中…" : "解除"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <button
            type="button"
            disabled={busy !== ""}
            onClick={removeAll}
            className="rounded-full border border-rose-300 bg-white px-4 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:opacity-50"
          >
            {busy === "all" ? "解除中…" : "すべて解除"}
          </button>
        </>
      )}

      {message && <p className="mt-4 text-sm text-stone-700">{message}</p>}
    </div>
  );
}
