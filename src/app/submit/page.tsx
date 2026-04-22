"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Situation = "sight" | "trace" | "damage" | "injury";

const SITUATIONS: Array<{ value: Situation; label: string; emoji: string; hint: string }> = [
  { value: "sight", label: "目撃した", emoji: "👀", hint: "姿を見た" },
  { value: "trace", label: "痕跡を見た", emoji: "🐾", hint: "足跡・糞・木の皮" },
  { value: "damage", label: "物損あり", emoji: "💥", hint: "農作物・建物の被害" },
  { value: "injury", label: "人身被害", emoji: "🚑", hint: "人への被害" },
];

function toLocalInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function SubmitContent() {
  const sp = useSearchParams();
  const initLat = Number(sp.get("lat"));
  const initLon = Number(sp.get("lon"));

  const [lat, setLat] = useState<number | null>(Number.isFinite(initLat) ? initLat : null);
  const [lon, setLon] = useState<number | null>(Number.isFinite(initLon) ? initLon : null);
  const [occurredAt, setOccurredAt] = useState(toLocalInputValue(new Date()));
  const [headCount, setHeadCount] = useState(1);
  const [situation, setSituation] = useState<Situation>("sight");
  const [comment, setComment] = useState("");
  const [contact, setContact] = useState("");
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  useEffect(() => {
    if (Number.isFinite(initLat) && Number.isFinite(initLon)) {
      setLat(initLat);
      setLon(initLon);
    }
  }, [initLat, initLon]);

  const useGps = () => {
    setGpsError(null);
    if (!navigator.geolocation) {
      setGpsError("ブラウザが位置情報に対応していません");
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude);
        setLon(pos.coords.longitude);
        setGpsLoading(false);
      },
      (err) => {
        setGpsLoading(false);
        setGpsError(
          err.code === err.PERMISSION_DENIED
            ? "位置情報の利用が許可されていません"
            : "現在地を取得できませんでした",
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
    );
  };

  const submit = async () => {
    if (lat == null || lon == null) {
      setSubmitError("位置を指定してください");
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lat,
          lon,
          occurredAt: new Date(occurredAt).toISOString(),
          headCount,
          situation,
          comment: comment || undefined,
          contact: contact || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data?.error ?? "送信に失敗しました");
        return;
      }
      setSubmittedId(data.id);
    } catch {
      setSubmitError("ネットワークエラーが発生しました");
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedId) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-8">
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
          <div className="mb-2 text-4xl">✅</div>
          <h2 className="mb-2 text-lg font-bold text-gray-900">ありがとうございました</h2>
          <p className="mb-5 text-sm text-gray-600">
            ご投稿を受け付けました。内容を確認のうえ地図に反映されます。
          </p>
          <div className="text-[10px] text-gray-400">受付番号: {submittedId}</div>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              href={lat && lon ? `/place?lat=${lat}&lon=${lon}` : "/"}
              className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
            >
              この地点の詳細を見る
            </Link>
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-900">
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 pb-32 pt-3">
      <div className="mb-4 flex items-center gap-2">
        <Link
          href="/"
          aria-label="戻る"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:bg-gray-50"
        >
          ←
        </Link>
        <div>
          <div className="text-base font-bold text-gray-900">目撃情報を投稿</div>
          <div className="text-xs text-gray-500">匿名で 30 秒。自治体への共有にも使われます</div>
        </div>
      </div>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 text-sm font-semibold text-gray-800">
          1. 場所 <span className="text-red-500">*</span>
        </div>
        {lat != null && lon != null ? (
          <div className="mb-2 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-800">
            <span className="font-mono">{lat.toFixed(5)}, {lon.toFixed(5)}</span>
          </div>
        ) : (
          <p className="mb-2 text-xs text-gray-500">
            現在地を取得するか、地図から場所を選んで再度アクセスしてください。
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={useGps}
            disabled={gpsLoading}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            📍 {gpsLoading ? "取得中..." : "現在地を使う"}
          </button>
          <Link
            href="/"
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            🗺️ 地図から選ぶ
          </Link>
        </div>
        {gpsError && <p className="mt-1 text-[11px] text-red-600">⚠️ {gpsError}</p>}
      </section>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 text-sm font-semibold text-gray-800">
          2. いつ <span className="text-red-500">*</span>
        </div>
        <input
          type="datetime-local"
          value={occurredAt}
          onChange={(e) => setOccurredAt(e.target.value)}
          max={toLocalInputValue(new Date())}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
        />
        <p className="mt-1 text-[10px] text-gray-500">過去 14 日以内まで</p>
      </section>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 text-sm font-semibold text-gray-800">
          3. 状況 <span className="text-red-500">*</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {SITUATIONS.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSituation(s.value)}
              className={`rounded-lg border p-3 text-left text-sm transition ${
                situation === s.value
                  ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span aria-hidden>{s.emoji}</span>
                <span className="font-medium text-gray-900">{s.label}</span>
              </div>
              <div className="text-[10px] text-gray-500">{s.hint}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 text-sm font-semibold text-gray-800">
          4. 頭数 <span className="text-red-500">*</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHeadCount((v) => Math.max(1, v - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200"
            aria-label="減らす"
          >
            −
          </button>
          <div className="flex-1 text-center text-2xl font-bold text-gray-900">
            {headCount}
            <span className="ml-1 text-sm font-normal text-gray-500">頭</span>
          </div>
          <button
            type="button"
            onClick={() => setHeadCount((v) => Math.min(20, v + 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200"
            aria-label="増やす"
          >
            ＋
          </button>
        </div>
      </section>

      <details className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <summary className="cursor-pointer text-sm font-semibold text-gray-800">
          詳細（任意）
        </summary>
        <div className="mt-3 space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              コメント
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 300))}
              rows={3}
              placeholder="例: 林道を歩いているクマを確認。50mほどで森に消えた。"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
            <div className="mt-0.5 text-right text-[10px] text-gray-400">
              {comment.length} / 300
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              連絡先（非公開）
            </label>
            <input
              type="email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="確認が必要な場合のみ使用します"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
          </div>
        </div>
      </details>

      <p className="mb-2 px-2 text-[11px] leading-relaxed text-gray-500">
        送信内容は確認のうえ、地図および自治体等への共有データに反映される場合があります。
        プライバシーポリシーは <Link href="/privacy" className="underline">こちら</Link>。
      </p>

      {submitError && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          ⚠️ {submitError}
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <div className="mx-auto max-w-md">
          <button
            type="button"
            onClick={submit}
            disabled={submitting || lat == null || lon == null}
            className="flex h-12 w-full items-center justify-center rounded-full bg-amber-600 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:opacity-60"
          >
            {submitting ? "送信中..." : "この内容で送信する"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">読み込み中...</div>}>
        <SubmitContent />
      </Suspense>
    </main>
  );
}
