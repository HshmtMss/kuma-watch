"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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

const SUBMIT_DRAFT_KEY = "kumaWatch.submitDraft";
type SubmitDraft = {
  occurredAt: string;
  headCount: number;
  situation: Situation;
  comment: string;
  contact: string;
};

function defaultHeadCount(s: Situation): number {
  // 痕跡だけ見た場合はクマ未確認なので 0 が自然
  return s === "trace" ? 0 : 1;
}

function SubmitContent() {
  const sp = useSearchParams();
  const router = useRouter();

  // URL クエリから lat/lon を読む。`Number(null) === 0` で (0,0) = アフリカ沖に
  // 飛んでしまう既知バグを避けるため、必ず存在チェックしてから Number() に通す。
  const latParam = sp.get("lat");
  const lonParam = sp.get("lon");
  const initLat =
    latParam !== null && latParam !== "" && Number.isFinite(Number(latParam))
      ? Number(latParam)
      : null;
  const initLon =
    lonParam !== null && lonParam !== "" && Number.isFinite(Number(lonParam))
      ? Number(lonParam)
      : null;

  const [lat, setLat] = useState<number | null>(initLat);
  const [lon, setLon] = useState<number | null>(initLon);
  const [occurredAt, setOccurredAt] = useState(toLocalInputValue(new Date()));
  const [headCount, setHeadCount] = useState(1);
  const [situation, setSituationRaw] = useState<Situation>("sight");
  const [comment, setComment] = useState("");
  const [contact, setContact] = useState("");
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const setSituation = (s: Situation) => {
    setSituationRaw(s);
    // ユーザーが手で頭数を編集していなければ、状況に応じた既定値に追従
    setHeadCount((cur) => {
      const wasDefaultForOther = SITUATIONS.some(
        (x) => defaultHeadCount(x.value) === cur,
      );
      return wasDefaultForOther ? defaultHeadCount(s) : cur;
    });
  };

  useEffect(() => {
    if (initLat !== null && initLon !== null) {
      setLat(initLat);
      setLon(initLon);
    }
  }, [initLat, initLon]);

  // /?pick=submit から戻ってきた場合、保存していた下書きを復元
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sp.get("fromPicker") !== "1") return;
    try {
      const raw = window.sessionStorage.getItem(SUBMIT_DRAFT_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw) as SubmitDraft;
      if (draft.occurredAt) setOccurredAt(draft.occurredAt);
      if (typeof draft.headCount === "number") setHeadCount(draft.headCount);
      if (draft.situation) setSituationRaw(draft.situation);
      if (draft.comment) setComment(draft.comment);
      if (draft.contact) setContact(draft.contact);
      window.sessionStorage.removeItem(SUBMIT_DRAFT_KEY);
    } catch {
      /* ignore */
    }
  }, [sp]);

  const goPickOnMap = () => {
    if (typeof window === "undefined") return;
    const draft: SubmitDraft = {
      occurredAt,
      headCount,
      situation,
      comment,
      contact,
    };
    try {
      window.sessionStorage.setItem(SUBMIT_DRAFT_KEY, JSON.stringify(draft));
    } catch {
      /* ignore */
    }
    const params = new URLSearchParams({ pick: "submit" });
    if (lat !== null && lon !== null) {
      params.set("lat", lat.toFixed(5));
      params.set("lon", lon.toFixed(5));
    }
    router.push(`/?${params.toString()}`);
  };

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

  const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setPhotoError("画像ファイルを選んでください");
      return;
    }
    // 5 MB までに制限
    if (file.size > 5 * 1024 * 1024) {
      setPhotoError("ファイルサイズは 5MB 以下にしてください");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoDataUrl(typeof reader.result === "string" ? reader.result : null);
    };
    reader.onerror = () => {
      setPhotoError("画像の読み込みに失敗しました");
    };
    reader.readAsDataURL(file);
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
          photoDataUrl: photoDataUrl || undefined,
        }),
      });
      // 200 系で JSON が壊れている場合 / 5xx で HTML エラーページが返る場合に
      // 同じ catch に流れるが、メッセージを分けて UX 上の混乱を避ける。
      let data: { id?: string; error?: string } | null = null;
      try {
        data = (await res.json()) as { id?: string; error?: string };
      } catch {
        data = null;
      }
      if (!res.ok) {
        setSubmitError(data?.error ?? "サーバーエラーが発生しました");
        return;
      }
      if (!data?.id) {
        setSubmitError("予期しないレスポンスを受信しました");
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
        {lat !== null && lon !== null ? (
          <div className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900">
            <span className="font-mono">
              {lat.toFixed(5)}, {lon.toFixed(5)}
            </span>
            <span className="ml-2 text-amber-700">✓ 場所が指定されています</span>
          </div>
        ) : (
          <p className="mb-2 rounded-lg bg-yellow-50 px-3 py-2 text-xs text-yellow-800">
            ⚠️ 場所が未指定です。下のボタンから現在地を取得するか、地図上で選んでください。
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
          <button
            type="button"
            onClick={goPickOnMap}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            🗺️ 地図から選ぶ
          </button>
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
            onClick={() => setHeadCount((v) => Math.max(0, v - 1))}
            disabled={headCount <= 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-40"
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
            disabled={headCount >= 20}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200 disabled:opacity-40"
            aria-label="増やす"
          >
            ＋
          </button>
        </div>
        <p className="mt-2 text-[10px] text-gray-500">
          痕跡のみで姿を確認していない場合は <strong>0</strong> でも構いません。
        </p>
      </section>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 text-sm font-semibold text-gray-800">
          5. 写真（任意）
        </div>
        {photoDataUrl ? (
          <div className="mb-2 flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- 選択した画像のプレビュー、最適化不要 */}
            <img
              src={photoDataUrl}
              alt="選択した写真のプレビュー"
              className="max-h-64 w-full rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={() => {
                setPhotoDataUrl(null);
                setPhotoError(null);
              }}
              className="text-[11px] text-gray-500 hover:underline"
            >
              写真を削除
            </button>
          </div>
        ) : (
          <label className="flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-5 text-xs text-gray-600 hover:bg-gray-100">
            <span className="text-2xl" aria-hidden>
              📸
            </span>
            <span>タップして写真を選択/撮影</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={onPhotoChange}
              className="hidden"
            />
          </label>
        )}
        {photoError && (
          <p
            role="alert"
            aria-live="assertive"
            className="mt-1 text-[11px] text-red-600"
          >
            ⚠️ {photoError}
          </p>
        )}
        <p className="mt-1 text-[10px] text-gray-500">
          5MB まで。クマ本体・足跡・糞・被害物などの写真が確認に役立ちます。
        </p>
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
        <div
          role="alert"
          aria-live="assertive"
          className="mb-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700"
        >
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
