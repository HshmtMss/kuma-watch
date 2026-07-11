"use client";

import { useCallback, useEffect, useState } from "react";
import { lineAddFriendUrl } from "@/lib/line-links";

/**
 * LIFF (LINE 内ブラウザ) で動く通知登録クライアント。
 *
 * 流れ:
 *   1. @line/liff を動的 import して liff.init({ liffId })
 *   2. 未ログインなら liff.login() (LINE 内なら基本ログイン済み)
 *   3. liff.getIDToken() を取得し、購読 API に idToken を渡す
 *      → サーバ側で検証して本物の userId を得る (なりすまし防止)
 *   4. 公式アカウントを友だち追加済みか確認する。LINE は友だちでない相手に
 *      push できないため、未追加のまま購読させると「登録できたのに一生届かない」
 *      という最悪の失敗になる。未追加なら登録させず友だち追加へ誘導する。
 *   5. target が渡っていれば「登録」ボタン、無ければ一覧のみ
 *   6. 現在の登録一覧 (/api/line/list) を表示し、個別解除もできる
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
  // lat/lon は /api/line/list が元から返している (GeoPoint そのまま)。
  // 「どこを登録したか分からない」を解消するため、地図へ戻すリンクに使う。
  geos: { id: string; label?: string; radiusKm: number; lat: number; lon: number }[];
};

/** 登録地点を地図で開く URL。dispatch の通知リンクと同じ形にそろえる。 */
function mapUrlForGeo(g: { lat: number; lon: number; label?: string }): string {
  const params = new URLSearchParams({
    lat: g.lat.toFixed(5),
    lon: g.lon.toFixed(5),
    z: "12",
  });
  if (g.label) params.set("label", g.label);
  // 空白が + にならないようにする (LIFF の外部ブラウザで開くリンクだが、
  // 表示される URL に + が出るのを避け、lineRegisterUrl と挙動をそろえる)。
  return `/?${params.toString().replace(/\+/g, "%20")}`;
}

/**
 * URL のパス片。日本語はそのまま残し、パスを壊す文字だけエンコードする。
 * dispatch/route.ts の pathSegment と同じ方針 (LINE は日本語 URL もそのまま
 * リンク化するので、%E6... の長大表示を避ける)。
 */
function pathSegment(s: string): string {
  return /[\s/?#%&+]/.test(s) ? encodeURIComponent(s) : s;
}

/** 登録した市町村のページ URL。通知の飛び先 (/place/{県}/{市}) にそろえる。 */
function placeUrlForMuni(m: { pref: string; city: string }): string {
  return `/place/${pathSegment(m.pref)}/${pathSegment(m.city)}`;
}

/** 登録した観光地のページ URL。通知の飛び先 (/spot/{slug}) にそろえる。 */
function pageUrlForSpot(slug: string): string {
  return `/spot/${pathSegment(slug)}`;
}

type Phase = "init" | "ready" | "error";

/**
 * getFriendship は @line/liff の既定バンドルに同梱されているが、型は
 * `declare module '@liff/core'` によるモジュール拡張で足されるため、
 * './exports' 由来の Liff 型からは見えない。存在確認できる形で読む。
 */
type FriendshipCapable = {
  getFriendship?: () => Promise<{ friendFlag: boolean }>;
};

/**
 * 友だち追加済みかを返す。API が使えない環境では true (= 通す) にフォールバック
 * する。ここで false 倒れすると登録自体ができなくなるため、判定不能は通す。
 */
async function checkFriendship(liff: unknown): Promise<boolean> {
  const fn = (liff as FriendshipCapable).getFriendship;
  if (typeof fn !== "function") return true;
  try {
    const { friendFlag } = await fn.call(liff);
    return friendFlag;
  } catch {
    return true;
  }
}

function targetLabel(t: Exclude<Target, null>): string {
  if (t.kind === "muni") return `${t.pref}${t.city}`;
  if (t.kind === "spot") return t.name ?? t.slug;
  return t.label || "選んだ地点";
}

/**
 * 未ログインで開かれたときの対象の持ち回し。
 *
 * liff.login() は LINE の認可画面へ飛ばし、戻り先ではクエリが失われることが
 * ある (戻り URL は LIFF エンドポイントで、?pref=... は引き継がれない)。
 * その結果「LINEで受け取る」を押したのにログイン後は管理画面だけが出て、
 * 肝心の登録ができない。ログイン前に対象を退避し、戻ってきた回だけ復元する。
 *
 * 復元はログイン往復の直後 1 回きり (PENDING_KEY があるときだけ)。そうしないと、
 * 後日ユーザが管理目的でクエリ無しに開いたときに、古い対象の登録カードが
 * 蘇ってしまう。
 */
const TARGET_KEY = "kw:line-register-target";
const PENDING_KEY = "kw:line-login-pending";

function stashTarget(t: Exclude<Target, null>): void {
  try {
    sessionStorage.setItem(TARGET_KEY, JSON.stringify(t));
  } catch {
    // プライベートブラウズ等で使えなくても登録自体は続行させる
  }
}

/** ログイン往復の直後なら退避した対象を返し、退避を消す。 */
function takeStashedTarget(): Target {
  try {
    if (!sessionStorage.getItem(PENDING_KEY)) return null;
    const raw = sessionStorage.getItem(TARGET_KEY);
    sessionStorage.removeItem(PENDING_KEY);
    sessionStorage.removeItem(TARGET_KEY);
    return raw ? (JSON.parse(raw) as Target) : null;
  } catch {
    return null;
  }
}

function clearStash(): void {
  try {
    sessionStorage.removeItem(PENDING_KEY);
    sessionStorage.removeItem(TARGET_KEY);
  } catch {
    // noop
  }
}

export default function LineRegisterClient({
  target: initialTarget,
}: {
  target: Target;
}) {
  // ログイン往復でクエリが落ちた場合は退避から復元するため、対象は state で持つ。
  const [target, setTarget] = useState<Target>(initialTarget);
  const [phase, setPhase] = useState<Phase>("init");
  const [errMsg, setErrMsg] = useState("");
  const [idToken, setIdToken] = useState<string | null>(null);
  const [subs, setSubs] = useState<Subs | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [isFriend, setIsFriend] = useState(true);

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
          // 戻ってきたときに対象を復元できるよう、飛ぶ前に退避する。
          if (initialTarget) stashTarget(initialTarget);
          sessionStorage.setItem(PENDING_KEY, "1");
          // 既定の戻り先はエンドポイント URL でクエリが落ちるため、明示する。
          liff.login({ redirectUri: window.location.href });
          return; // login はリダイレクトするので以降は次回ロードで処理
        }
        // ログイン往復から戻ってきた回だけ、落ちたクエリの代わりに復元する。
        if (!initialTarget) {
          const restored = takeStashedTarget();
          if (restored && !cancelled) setTarget(restored);
        } else {
          clearStash();
        }
        const token = liff.getIDToken();
        if (cancelled) return;
        if (!token) {
          setPhase("error");
          setErrMsg("LINE のログイン情報を取得できませんでした。");
          return;
        }
        const friend = await checkFriendship(liff);
        if (cancelled) return;
        setIsFriend(friend);
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
  }, [initialTarget]);

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
    if (!idToken || !target || !isFriend) return;
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
  }, [idToken, target, isFriend, loadSubs]);

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

      {/* 友だち未追加の警告。target が無い (一覧だけ) 場合でも、
          既に登録済みの通知が届かない状態なので必ず知らせる。 */}
      {!isFriend && !target && (
        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-800">
          公式アカウントが友だち追加されていないため、登録済みの通知もお届けできません。
          <a
            href={lineAddFriendUrl()}
            className="mt-1 block font-bold underline underline-offset-2"
          >
            友だち追加する
          </a>
        </p>
      )}

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
          ) : !isFriend ? (
            // 友だち未追加のまま登録させると、購読は成立するのに push が
            // 一生届かない。登録させず追加へ誘導する。
            <a
              href={lineAddFriendUrl()}
              className="mt-3 block w-full rounded-full bg-emerald-600 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-emerald-700"
            >
              まず公式アカウントを友だち追加
            </a>
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
          {!isFriend && !done && (
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              追加が終わったらこの画面に戻り、もう一度開いてください。
            </p>
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
                <span className="min-w-0 text-stone-800">
                  {m.pref}
                  {m.city}
                  {/* 通知と同じ /place ページへ。地域の状況をまとめて見られる。 */}
                  <a
                    href={placeUrlForMuni(m)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-xs font-medium text-emerald-700 underline decoration-dotted underline-offset-2"
                  >
                    ページを見る
                  </a>
                </span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ pref: m.pref, city: m.city })}
                  className="shrink-0 self-start text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
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
                <span className="min-w-0 text-stone-800">
                  {s}（観光地）
                  {/* 通知と同じ /spot ページへ。 */}
                  <a
                    href={pageUrlForSpot(s)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-xs font-medium text-emerald-700 underline decoration-dotted underline-offset-2"
                  >
                    ページを見る
                  </a>
                </span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ slug: s })}
                  className="shrink-0 self-start text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
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
                <span className="min-w-0 text-stone-800">
                  {g.label || "登録地点"}（周辺 {g.radiusKm}km）
                  {/* 任意地点は名前だけでは思い出せないことがある。地図へ戻す。 */}
                  <a
                    href={mapUrlForGeo(g)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-xs font-medium text-emerald-700 underline decoration-dotted underline-offset-2"
                  >
                    地図で見る
                  </a>
                </span>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => unregister({ geoId: g.id })}
                  className="shrink-0 self-start text-xs font-medium text-stone-400 underline decoration-dotted hover:text-red-600"
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
