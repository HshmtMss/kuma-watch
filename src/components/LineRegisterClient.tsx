"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * LIFF (LINE 内ブラウザ) で動く通知登録クライアント。
 *
 * 流れ:
 *   1. @line/liff を動的 import して liff.init({ liffId })
 *   2. 未ログインなら liff.login() (LINE 内なら基本ログイン済み)
 *   3. liff.getIDToken() を取得し、購読 API に idToken を渡す
 *      → サーバ側で検証して本物の userId を得る (なりすまし防止)
 *   4. target が渡っていれば「登録」ボタン、無ければ一覧のみ
 *   5. 現在の登録一覧 (/api/line/list) を表示し、個別解除もできる
 *
 * LIFF_ID 未設定や LIFF 外アクセスなど失敗時は理由を表示して静かに止まる。
 */

export type Target =
  | { kind: "muni"; pref: string; city: string }
  | { kind: "spot"; slug: string; name?: string }
  | { kind: "geo"; lat: number; lon: number; radiusKm: number; label?: string }
  | null;

const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID ?? "";

type Subs = {
  munis: { pref: string; city: string }[];
  spots: string[];
  geos: { id: string; label?: string; radiusKm: number }[];
};

type Phase = "init" | "ready" | "error";

function targetLabel(t: Exclude<Target, null>): string {
  if (t.kind === "muni") return `${t.pref}${t.city}`;
  if (t.kind === "spot") return t.name ?? t.slug;
  return t.label || "選んだ地点";
}

export default function LineRegisterClient({ target }: { target: Target }) {
  const [phase, setPhase] = useState<Phase>("init");
  const [errMsg, setErrMsg] = useState("");
  const [idToken, setIdToken] = useState<string | null>(null);
  const [subs, setSubs] = useState<Subs | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  // ── LIFF 初期化 ──────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!LIFF_ID) {
        setPhase("error");
        setErrMsg("LIFF ID が設定されていません。");
        return;
      }
      try {
        const liff = (await import("@line/liff")).default;
        await liff.init({ liffId: LIFF_ID });
        if (!liff.isLoggedIn()) {
          liff.login();
          return; // login はリダイレクトするので以降は次回ロードで処理
        }
        const token = liff.getIDToken();
        if (cancelled) return;
        if (!token) {
          setPhase("error");
          setErrMsg("LINE のログイン情報を取得できませんでした。");
          return;
        }
        setIdToken(token);
        setPhase("ready");
      } catch (e) {
        if (cancelled) return;
        setPhase("error");
        setErrMsg(
          `LINE の初期化に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // ── 現在の登録一覧を取得 ─────────────────────────────────────────────
  const loadSubs = useCallback(async (token: string) => {
    try {
      const res = await fetch("/api/line/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
      });
      if (!res.ok) return;
      const data = (await res.json()) as Subs;
      setSubs(data);
    } catch {
      // 一覧表示は失敗しても致命的でないので黙って無視
    }
  }, []);

  useEffect(() => {
    if (phase === "ready" && idToken) loadSubs(idToken);
  }, [phase, idToken, loadSubs]);

  // ── 登録 ─────────────────────────────────────────────────────────────
  const register = useCallback(async () => {
    if (!idToken || !target) return;
    setBusy(true);
    setErrMsg("");
    try {
      const body: Record<string, unknown> = { idToken };
      if (target.kind === "muni") {
        body.pref = target.pref;
        body.city = target.city;
      } else if (target.kind === "spot") {
        body.slug = target.slug;
      } else {
        body.geo = {
          lat: target.lat,
          lon: target.lon,
          radiusKm: target.radiusKm,
          label: target.label,
        };
      }
      const res = await fetch("/api/line/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`登録に失敗しました (${res.status})`);
      setDone(true);
      await loadSubs(idToken);
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }, [idToken, target, loadSubs]);

  // ── 解除 ─────────────────────────────────────────────────────────────
  const unregister = useCallback(
    async (body: Record<string, unknown>) => {
      if (!idToken) return;
      setBusy(true);
      try {
        const res = await fetch("/api/line/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken, ...body }),
        });
        if (res.ok) await loadSubs(idToken);
      } finally {
        setBusy(false);
      }
    },
    [idToken, loadSubs],
  );

  // ── 表示 ─────────────────────────────────────────────────────────────
  if (phase === "init") {
    return (
      <main className="mx-auto max-w-md px-4 py-10 text-center text-stone-500">
        読み込み中…
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="mx-auto max-w-md px-4 py-10">
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {errMsg || "LINE 内で開いてください。"}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md px-4 py-8">
      <h1 className="text-lg font-bold text-stone-900">クマ出没通知の設定</h1>
      <p className="mt-1 text-sm text-stone-500">
        登録した地域や場所の周辺で新しい出没情報が入ると、この LINE にお知らせします。
      </p>

      {/* 今回の登録対象 */}
      {target && (
        <section className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
          <p className="text-xs font-semibold text-emerald-700">通知を受け取る</p>
          <p className="mt-1 text-base font-bold text-stone-900">
            {targetLabel(target)}
            {target.kind === "geo" && (
              <span className="ml-1 text-sm font-normal text-stone-500">
                （周辺 {target.radiusKm}km）
              </span>
            )}
          </p>
          {done ? (
            <p className="mt-3 rounded-full bg-white px-4 py-2 text-center text-sm font-bold text-emerald-700">
              登録しました ✓
            </p>
          ) : (
            <button
              type="button"
              onClick={register}
              disabled={busy}
              className="mt-3 w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60"
            >
              {busy ? "処理中…" : "この通知を受け取る"}
            </button>
          )}
        </section>
      )}

      {errMsg && phase === "ready" && (
        <p className="mt-3 text-sm text-red-600">{errMsg}</p>
      )}

      {/* 現在の登録一覧 */}
      <section className="mt-6">
        <h2 className="text-sm font-semibold text-stone-700">現在の登録</h2>
        {!subs ? (
          <p className="mt-2 text-sm text-stone-400">読み込み中…</p>
        ) : subs.munis.length === 0 &&
          subs.spots.length === 0 &&
          subs.geos.length === 0 ? (
          <p className="mt-2 text-sm text-stone-400">まだ登録がありません。</p>
        ) : (
          <ul className="mt-2 divide-y divide-stone-100 rounded-xl border border-stone-200">
            {subs.munis.map((m) => (
              <li
                key={`m-${m.pref}-${m.city}`}
                className="flex items-center justify-between px-3 py-2.5 text-sm"
              >
                <span className="text-stone-800">
                  {m.pref}
                  {m.city}
                </span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ pref: m.pref, city: m.city })}
                  className="text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
                >
                  解除
                </button>
              </li>
            ))}
            {subs.spots.map((s) => (
              <li
                key={`s-${s}`}
                className="flex items-center justify-between px-3 py-2.5 text-sm"
              >
                <span className="text-stone-800">{s}（観光地）</span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ slug: s })}
                  className="text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
                >
                  解除
                </button>
              </li>
            ))}
            {subs.geos.map((g) => (
              <li
                key={`g-${g.id}`}
                className="flex items-center justify-between px-3 py-2.5 text-sm"
              >
                <span className="text-stone-800">
                  {g.label || "登録地点"}（周辺 {g.radiusKm}km）
                </span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ geoId: g.id })}
                  className="text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
                >
                  解除
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-6 text-xs leading-relaxed text-stone-400">
        通知が来ない日は、その地域で出没の届け出がない（ふだん通り）ということです。
        情報は各自治体などの公表をまとめたもので、すべての出没を網羅するものではありません。
      </p>
    </main>
  );
}
