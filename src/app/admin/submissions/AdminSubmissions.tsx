"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import AdminSubmissionsMap, { type MapItem } from "./AdminSubmissionsMap";
import SubmissionList, { type Submission } from "./SubmissionList";
import AdminShell from "@/components/admin/AdminShell";
import {
  REJECT_REASONS,
  compareByPriority,
  priorityBucket,
  type PriorityBucket,
  type RejectReason,
} from "@/lib/submission-priority";

/**
 * 市民投稿モデレーション画面 (合言葉でログイン)。
 *
 * - ステータス絞り込み: 承認待ち / 公開中 / 却下 / すべて
 * - 承認待ちのときは「優先度の受信箱」を出す:
 *     ① 今すぐ見る (至急)  ② 順に見る  ③ 後で見る (信ぴょう性 低)
 *   至急は信ぴょう性に関係なく①に入る。①が空であること自体が合図になる。
 * - リスト表示 / 地図表示の切替
 * - 承認 / 却下 (理由を定型で記録) / 削除 (あとから何度でもやり直せる)
 *
 * server コードを client に取り込まないよう、型はこのファイル内で定義する。
 */



const TABS: { key: string; label: string }[] = [
  { key: "pending", label: "承認待ち" },
  { key: "approved", label: "公開中" },
  { key: "rejected", label: "却下" },
  { key: "all", label: "すべて" },
];


type Decision = "approve" | "reject" | "delete";

const BUCKET_ORDER: PriorityBucket[] = ["now", "queue", "later"];
/** 優先度の 3 段階。職員が読むのはこれだけ */
const BUCKET_NO: Record<PriorityBucket, string> = {
  now: "優先度 高",
  queue: "中",
  later: "低",
};
/** 選択中のチップの色。至急は赤、通常は琥珀、低は石 */
const BUCKET_ON: Record<PriorityBucket, string> = {
  now: "bg-rose-600 text-white",
  queue: "bg-amber-600 text-white",
  later: "bg-stone-700 text-white",
};
const BUCKET_OFF: Record<PriorityBucket, string> = {
  now: "border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100",
  queue: "border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100",
  later: "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50",
};


/** 経過時間を「4時間前」「3日前」の形で返す */
function sinceLabel(ms: number): string {
  const h = Math.floor((Date.now() - ms) / 3600_000);
  if (h < 1) return "1時間以内";
  if (h < 24) return `${h}時間前`;
  return `${Math.floor(h / 24)}日前`;
}


export default function AdminSubmissions() {
  return (
    <AdminShell active="submissions" title="投稿">
      {(secret, deauth) => (
        <SubmissionsContent secret={secret} deauth={deauth} />
      )}
    </AdminShell>
  );
}

function SubmissionsContent({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [status, setStatus] = useState("pending");
  // 地図のピンから選ばれた投稿。一覧の該当行までスクロールさせる
  const [focusId, setFocusId] = useState<string | null>(null);
  // 一括操作の選択状態（リスト表示のチェックボックス）。
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // 自由検索（地名・地区・コメント・連絡先）。ステータス絞り込みの内側で効く。
  const [query, setQuery] = useState("");
  // 承認待ちのときだけ効く優先度の箱。null = すべて
  const [bucket, setBucket] = useState<PriorityBucket | null>(null);
  // 却下理由を聞くダイアログの対象 (id)。null = 閉じている
  const [rejecting, setRejecting] = useState<string | null>(null);

  // 検索で絞ったもの。優先度チップの件数はここを母数にする
  const searched = useMemo(() => {
    const t = query.trim().toLowerCase();
    if (!t) return items;
    return items.filter((s) =>
      [s.prefectureName, s.cityName, s.sectionName, s.comment, s.contact]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(t),
    );
  }, [items, query]);

  /** 箱ごとの件数。①が空であること自体が「急ぎは無い」の合図になる */
  const bucketCounts = useMemo(() => {
    const c: Record<PriorityBucket, number> = { now: 0, queue: 0, later: 0 };
    for (const s of searched) c[priorityBucket(s.assessment)] += 1;
    return c;
  }, [searched]);

  const oldestPending = useMemo(() => {
    const t = searched.filter((s) => s.status === "pending");
    if (t.length === 0) return null;
    return Math.min(...t.map((s) => s.receivedAt));
  }, [searched]);

  const shown = useMemo(() => {
    const base = bucket
      ? searched.filter((s) => priorityBucket(s.assessment) === bucket)
      : searched;
    // 承認待ちは優先度順。公開中・却下は既定の新しい順のまま (履歴として見るため)
    if (status !== "pending") return base;
    return [...base].sort(compareByPriority);
  }, [searched, bucket, status]);

  const load = useCallback(
    async (st: string) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/admin/submissions?status=${st}`, {
          headers: { Authorization: `Bearer ${secret}` },
          cache: "no-store",
        });
        if (res.status === 401) {
          deauth();
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { submissions: Submission[] };
        setItems(data.submissions ?? []);
      } catch (e) {
        setError(
          `読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setLoading(false);
      }
    },
    [secret, deauth],
  );

  useEffect(() => {
    load(status);
  }, [load, status]);

  const moderate = useCallback(
    async (id: string, decision: Decision, reason?: RejectReason) => {
      if (decision === "delete" && !window.confirm("この投稿を完全に削除します。よろしいですか?")) {
        return;
      }
      setBusy(id);
      try {
        const res = await fetch("/api/admin/submissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${secret}`,
          },
          body: JSON.stringify({ id, decision, reason }),
        });
        if (!res.ok) throw new Error(String(res.status));
        // ステータスが変わると現在の絞り込みから外れるので再読込
        await load(status);
      } catch (e) {
        setError(
          `操作に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy(null);
      }
    },
    [secret, status, load],
  );

  // 選択中の投稿を一括で承認/却下（削除は誤操作防止のため一括対象外）。
  const bulkModerate = useCallback(
    async (decision: "approve" | "reject") => {
      const ids = [...selected];
      if (ids.length === 0) return;
      if (
        !window.confirm(
          `選択した ${ids.length} 件を${decision === "approve" ? "承認して公開" : "却下"}します。よろしいですか？`,
        )
      )
        return;
      setBusy("bulk");
      try {
        for (const id of ids) {
          const res = await fetch("/api/admin/submissions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${secret}`,
            },
            body: JSON.stringify({ id, decision }),
          });
          if (!res.ok) throw new Error(String(res.status));
        }
        setSelected(new Set());
        await load(status);
      } catch (e) {
        setError(
          `一括操作に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy(null);
      }
    },
    [selected, secret, status, load],
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const changeTab = (key: string) => {
    setStatus(key);
    setSelected(new Set());
    setBucket(null);
  };

  const mapItems: MapItem[] = shown.map((s) => ({
    id: s.id,
    priority: s.assessment?.priority,
    lat: s.lat,
    lon: s.lon,
    situation: s.situation,
    status: s.status,
    headCount: s.headCount,
    occurredAt: s.occurredAt,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    comment: s.comment,
    photoUrl: s.photoUrl,
    photoLat: s.photoLat,
    photoLon: s.photoLon,
  }));

  return (
    <>
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={() => load(status)}
          disabled={loading}
          className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50 disabled:opacity-50"
        >
          {loading ? "更新中…" : "更新"}
        </button>
      </div>

      {/* ステータス絞り込みタブ */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => changeTab(t.key)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              status === t.key
                ? "bg-stone-900 text-white"
                : "border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 優先度の受信箱。承認待ちのときだけ出す。
          ①今すぐ見る = 緊急度「至急」(信ぴょう性は問わない)
          ②順に見る   = 通常・低 かつ 信ぴょう性 高/中
          ③後で見る   = 信ぴょう性 低。捨てずに沈めるだけ */}
      {status === "pending" && (
        <div className="mb-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
          <div className="mb-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-base font-bold text-stone-900">
              未処理 {searched.length} 件
            </span>
            {oldestPending && (
              <span className="text-sm text-stone-500">
                いちばん古いもの {sinceLabel(oldestPending)}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {BUCKET_ORDER.map((b) => {
              const on = bucket === b;
              const n = bucketCounts[b];
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBucket(on ? null : b)}
                  aria-pressed={on}
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                    on ? BUCKET_ON[b] : BUCKET_OFF[b]
                  } ${n === 0 && !on ? "opacity-50" : ""}`}
                >
                  <span>{BUCKET_NO[b]}</span>
                  <span
                    className={`min-w-[1.5rem] rounded-full px-1.5 py-0.5 text-center text-xs tabular-nums ${
                      on ? "bg-white/25" : "bg-white/70"
                    }`}
                  >
                    {n}
                  </span>
                </button>
              );
            })}
            {bucket && (
              <button
                type="button"
                onClick={() => setBucket(null)}
                className="rounded-xl px-3 py-2 text-sm text-stone-500 hover:bg-stone-100"
              >
                すべて表示
              </button>
            )}
          </div>
          {bucketCounts.now === 0 && !bucket && (
            <p className="mt-2.5 text-sm text-stone-500">
              優先度「高」の投稿はありません。「中」から順に確認してください。
            </p>
          )}
        </div>
      )}

      {/* 自由検索（地名・地区・コメント・連絡先） */}
      <div className="mb-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="地名・地区・コメント・連絡先で検索"
          className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
      </div>

      <div className="mb-2 text-sm text-stone-500">
        {shown.length} 件
        {query.trim() && (
          <span className="text-stone-400">（全 {items.length} 件中）</span>
        )}
      </div>

      {error && (
        <p className="mb-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">
          {error}
        </p>
      )}

      {shown.length === 0 && !loading && (
        <p className="rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          {query.trim()
            ? "検索に一致する投稿はありません。"
            : "該当する投稿はありません。"}
        </p>
      )}

      {/* 地図を先に出す。どこに集まっているかを見てから、下の一覧を順に捌く */}
      {shown.length > 0 && (
        <div className="mb-3">
          <AdminSubmissionsMap
            items={mapItems}
            onModerate={moderate}
            onSelect={setFocusId}
          />
          <p className="mt-1 text-xs text-stone-500">
            ピンを押すと、下の一覧の該当する投稿に移動します。色は優先度
            (赤=高 / 橙=中 / 灰=低)。📷 は写真の撮影位置です。
          </p>
        </div>
      )}

      {shown.length > 0 && (
        <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm">
              <label className="flex items-center gap-1.5 text-stone-600">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selected.size > 0 && selected.size === shown.length}
                  ref={(el) => {
                    if (el)
                      el.indeterminate =
                        selected.size > 0 && selected.size < shown.length;
                  }}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked
                        ? new Set(shown.map((i) => i.id))
                        : new Set(),
                    )
                  }
                />
                全選択
              </label>
              {selected.size > 0 && (
                <>
                  <span className="text-stone-500">
                    {selected.size}件選択中
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => bulkModerate("approve")}
                      disabled={busy === "bulk"}
                      className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                    >
                      一括承認
                    </button>
                    <button
                      type="button"
                      onClick={() => bulkModerate("reject")}
                      disabled={busy === "bulk"}
                      className="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-50"
                    >
                      一括却下
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(new Set())}
                      className="rounded-full px-2 py-1.5 text-xs text-stone-500 hover:bg-stone-100"
                    >
                      解除
                    </button>
                  </div>
                </>
              )}
        </div>
      )}

      {shown.length > 0 && (
        <SubmissionList
          items={shown}
          selected={selected}
          toggleSelect={toggleSelect}
          moderate={moderate}
          onReject={setRejecting}
          busy={busy}
          highlightId={focusId}
        />
      )}

      {/* 却下理由。溜まればフォームの改善材料になるので、定型 5 つから選ばせる。
          自由記入は集計できないので置かない。 */}
      {rejecting && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-stone-900/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="却下の理由を選ぶ"
          onClick={() => setRejecting(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-1 text-base font-bold text-stone-900">
              却下の理由
            </h3>
            <p className="mb-3 text-sm text-stone-500">
              あとで投稿フォームを直すときの材料になります。
            </p>
            <div className="flex flex-col gap-2">
              {REJECT_REASONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    const id = rejecting;
                    setRejecting(null);
                    void moderate(id, "reject", r);
                  }}
                  className="rounded-xl border border-stone-300 px-4 py-3 text-left text-sm font-semibold text-stone-800 hover:bg-stone-50"
                >
                  {r}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setRejecting(null)}
              className="mt-3 w-full rounded-xl px-4 py-2.5 text-sm text-stone-500 hover:bg-stone-100"
            >
              やめる
            </button>
          </div>
        </div>
      )}

    </>
  );
}

// エクセル風の一覧表。取得できる全項目を横並びの列で見せる（横スクロール）。
