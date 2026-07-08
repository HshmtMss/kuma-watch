"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Eye,
  PawPrint,
  Zap,
  Ambulance,
  CircleCheck,
  AlertTriangle,
  MapPin,
  Map as MapIcon,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  Clock,
  type LucideIcon,
} from "lucide-react";

type Situation = "sight" | "trace" | "damage" | "injury";

const SITUATIONS: Array<{
  value: Situation;
  label: string;
  Icon: LucideIcon;
  hint: string;
}> = [
  { value: "sight", label: "姿を見た", Icon: Eye, hint: "クマそのものを目撃した" },
  { value: "trace", label: "痕跡を見た", Icon: PawPrint, hint: "足あと・フン・木の皮はぎ" },
  { value: "damage", label: "物の被害", Icon: Zap, hint: "畑・果樹・建物などの被害" },
  { value: "injury", label: "人がケガをした", Icon: Ambulance, hint: "人への被害があった" },
];

const SITUATION_LABEL: Record<Situation, string> = Object.fromEntries(
  SITUATIONS.map((s) => [s.value, s.label]),
) as Record<Situation, string>;

function toLocalInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// 確認画面用に「2026年7月8日 7:52」の形へ。
function formatOccurred(v: string): string {
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}:${pad(d.getMinutes())}`;
}

const SUBMIT_DRAFT_KEY = "kumaWatch.submitDraft";
type SubmitDraft = {
  occurredAt: string;
  headCount: number;
  situation: Situation;
  comment: string;
  contact: string;
  step?: number;
};

function defaultHeadCount(s: Situation): number {
  // 痕跡だけ見た場合はクマ未確認なので 0 が自然
  return s === "trace" ? 0 : 1;
}

// 写真を長辺 1600px・JPEG(0.82) に縮小して data URL を返す。
// スマホの写真は数MBあり、そのまま送ると Vercel のリクエスト上限を超えるため。
function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read failed"));
    reader.onload = () => {
      const src = typeof reader.result === "string" ? reader.result : "";
      const img = new Image();
      img.onerror = () => reject(new Error("decode failed"));
      img.onload = () => {
        const MAX = 1600;
        let { width, height } = img;
        if (width > MAX || height > MAX) {
          const scale = MAX / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(src); // 変換不可なら元データで (小さい画像を想定)
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  });
}

// ウィザードの各ステップ。3 つの入力 + 確認の計 4 画面。
// 1 画面に関連する 2 項目までをまとめ、遷移を最小限にする。
const STEPS = ["ようす・頭数", "いつ・どこで", "写真・補足", "確認"] as const;
const TOTAL_STEPS = STEPS.length;

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

  const [step, setStep] = useState(0);
  const [lat, setLat] = useState<number | null>(initLat);
  const [lon, setLon] = useState<number | null>(initLon);
  const [occurredAt, setOccurredAt] = useState(toLocalInputValue(new Date()));
  const [headCount, setHeadCount] = useState(1);
  const [situation, setSituationRaw] = useState<Situation>("sight");
  const [comment, setComment] = useState("");
  const [contact, setContact] = useState("");
  const [placeName, setPlaceName] = useState<string | null>(null);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

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

  // 座標を逆ジオコーディングして「○○県○○市」の地名を出す。
  // 子ども〜高齢者には緯度経度より地名の方が分かりやすい。
  useEffect(() => {
    if (lat == null || lon == null) {
      setPlaceName(null);
      return;
    }
    const ctrl = new AbortController();
    setPlaceName(null);
    fetch(`/api/geocode?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`, {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then(
        (
          data: {
            result?: { prefecture?: string; city?: string; district?: string };
          } | null,
        ) => {
          const h = data?.result;
          if (!h) return;
          const name = [h.prefecture, h.city, h.district]
            .filter(Boolean)
            .join("");
          setPlaceName(name || null);
        },
      )
      .catch(() => {
        /* 取得できなくても座標で表示するので無視 */
      });
    return () => ctrl.abort();
  }, [lat, lon]);

  // /?pick=submit から戻ってきた場合、保存していた下書きとステップを復元
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
      if (typeof draft.step === "number") setStep(draft.step);
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
      step,
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
      setGpsError("お使いの端末では位置情報が使えません");
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
            ? "位置情報の利用が許可されていません。「地図で選ぶ」もお使いいただけます。"
            : "現在地を取得できませんでした。「地図で選ぶ」をお試しください。",
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
    );
  };

  const onPhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setPhotoError("画像ファイルを選んでください");
      return;
    }
    // 20MB より大きい元ファイルはさすがに弾く (縮小前チェック)。
    if (file.size > 20 * 1024 * 1024) {
      setPhotoError("ファイルサイズが大きすぎます");
      return;
    }
    try {
      // スマホの写真は数MBあり、そのまま送ると Vercel のリクエスト上限(4.5MB)を
      // 超えて「サーバーエラー」になる。長辺 1600px・JPEG に縮小して送る。
      const compressed = await compressImage(file);
      setPhotoDataUrl(compressed);
    } catch {
      setPhotoError("画像の読み込みに失敗しました");
    }
  };

  const submit = async () => {
    if (lat == null || lon == null) {
      setSubmitError("場所を指定してください");
      setStep(1);
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

  // ─────────────────────────────────────────────────────────────
  // 送信完了画面 — 緊急連絡の警告を大きく出す。
  // ─────────────────────────────────────────────────────────────
  if (submittedId) {
    const isUrgent = situation === "injury" || situation === "damage";
    return (
      <div className="mx-auto w-full max-w-md px-4 py-8">
        <div className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
          <div className="mb-3 flex justify-center">
            <CircleCheck size={56} className="text-emerald-600" aria-hidden />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            ありがとうございました
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-600">
            投稿を受け付けました。内容を確認のうえ、地図に反映されます。
          </p>
          <div className="mb-6 text-xs text-gray-400">受付番号: {submittedId}</div>

          {/* 緊急連絡の警告。人身被害・物損など緊急性が高いときは赤で最上部相当に強調。 */}
          {situation === "injury" ? (
            <div className="mb-5 text-left">
              <InjuryAlert />
            </div>
          ) : (
            <div
              className={`mb-5 rounded-2xl border-2 p-4 text-left ${
                isUrgent
                  ? "border-red-400 bg-red-50"
                  : "border-amber-300 bg-amber-50"
              }`}
            >
              <div
                className={`flex items-center gap-2 text-base font-bold ${
                  isUrgent ? "text-red-700" : "text-amber-800"
                }`}
              >
                <AlertTriangle size={20} aria-hidden />
                緊急のときは必ず連絡を
              </div>
              <p
                className={`mt-1.5 text-base leading-relaxed ${
                  isUrgent ? "text-red-800" : "text-amber-900"
                }`}
              >
                クマが今もその場にいる・人や家畜に危険が迫っているなど緊急のときは、この投稿だけで終わらせず、
                <strong>必ず警察（110番）やお住まいの自治体</strong>に連絡してください。
              </p>
              <a
                href="tel:110"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 text-base font-bold text-white shadow-sm hover:bg-red-700"
              >
                <Phone size={18} aria-hidden />
                110番に電話する
              </a>
            </div>
          )}

          {/* 完了後は地図に戻して、投稿した地点をピンで見せる。/place は地図が
              無く現在地が分かりにくいため使わない。replace で履歴を置き換え、
              「戻る」で投稿フォームの最初に戻ってしまう問題も防ぐ。 */}
          <div className="flex flex-col gap-2">
            <Link
              replace
              href={
                lat && lon
                  ? `/?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}${
                      placeName ? `&label=${encodeURIComponent(placeName)}` : ""
                    }`
                  : "/"
              }
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-amber-600 px-5 text-base font-semibold text-white hover:bg-amber-700"
            >
              <MapIcon size={18} aria-hidden />
              地図で場所を見る
            </Link>
            <Link
              replace
              href="/"
              className="flex h-11 items-center justify-center text-sm text-gray-500 hover:text-gray-900"
            >
              地図（トップ）に戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // ウィザード本体
  // ─────────────────────────────────────────────────────────────
  const hasLocation = lat !== null && lon !== null;
  // 各ステップで「次へ」を押せる条件。場所 (step 1) 以外は既定値があるので常に進める。
  const canProceed = step === 1 ? hasLocation : true;
  const isLast = step === TOTAL_STEPS - 1;

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
    else router.push("/");
  };
  const goNext = () => {
    if (!canProceed) return;
    if (!isLast) setStep((s) => s + 1);
  };

  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-4 pb-28 pt-3">
      {/* ヘッダー: タイトル + 進捗 */}
      <div className="mb-4">
        <div className="mb-1 flex items-baseline justify-between">
          <div className="text-lg font-bold text-gray-900">目撃情報を投稿</div>
          <div className="text-sm font-semibold tabular-nums text-gray-500">
            {step + 1}／{TOTAL_STEPS}
          </div>
        </div>
        {/* 進捗ドット */}
        <div className="flex gap-1.5" aria-hidden>
          {STEPS.map((label, i) => (
            <div
              key={label}
              className={`h-2 flex-1 rounded-full transition ${
                i <= step ? "bg-amber-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ステップ内容 */}
      <div className="flex-1">
        {step === 1 && (
          <StepCard
            title="いつ・どこで見ましたか？"
            subtitle="場所と日時を教えてください。"
          >
            <div className="space-y-6">
              <div>
                <SubLabel>
                  クマを見た場所 <span className="text-red-500">*</span>
                </SubLabel>
                {hasLocation && (
                  // 選択済みの場所は、次ページの選択肢と同じオレンジの選択表示にする。
                  <div className="mb-1 flex items-center gap-3 rounded-2xl border-2 border-amber-500 bg-amber-50 px-4 py-4 ring-4 ring-amber-100">
                    <MapPin size={26} className="shrink-0 text-amber-700" aria-hidden />
                    <div className="min-w-0 flex-1 truncate text-lg font-bold text-gray-900">
                      {placeName
                        ? `${placeName} 付近`
                        : `${lat!.toFixed(5)}, ${lon!.toFixed(5)}`}
                    </div>
                    <Check size={24} className="shrink-0 text-amber-600" aria-hidden />
                  </div>
                )}
                {!hasLocation && (
                  <p className="mb-1 flex items-start gap-2 rounded-2xl bg-yellow-50 px-4 py-4 text-base leading-relaxed text-yellow-900 ring-1 ring-yellow-200">
                    <AlertTriangle size={22} className="mt-0.5 shrink-0" aria-hidden />
                    下のボタンで、クマや痕跡を見た場所を指定してください。
                  </p>
                )}
                <BigButton
                  onClick={useGps}
                  disabled={gpsLoading}
                  icon={MapPin}
                  variant="outline"
                >
                  {gpsLoading ? "現在地を取得中..." : "現在地を使う"}
                </BigButton>
                <BigButton onClick={goPickOnMap} icon={MapIcon} variant="outline">
                  地図で選ぶ
                </BigButton>
                {gpsError && (
                  <p
                    role="alert"
                    className="mt-2 flex items-start gap-1.5 text-sm leading-relaxed text-red-600"
                  >
                    <AlertTriangle size={16} className="mt-0.5 shrink-0" aria-hidden />
                    {gpsError}
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 pt-5">
                <SubLabel>いつ見ましたか</SubLabel>
                {/* iOS Safari 対策: appearance-none で枠のはみ出しを防ぎ、高さは
                    h 固定でなく py で作ることで値の上寄せも防ぐ。値は左寄せ・
                    余白ゼロにして枠内に収める。文字は大きめ。 */}
                <input
                  type="datetime-local"
                  value={occurredAt}
                  onChange={(e) => setOccurredAt(e.target.value)}
                  max={toLocalInputValue(new Date())}
                  className="box-border block w-full min-w-0 max-w-full appearance-none rounded-2xl border-2 border-gray-200 bg-white px-4 py-4 text-xl text-gray-900 [color-scheme:light] [&::-webkit-date-and-time-value]:m-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-datetime-edit]:p-0 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100"
                />
                <BigButton
                  onClick={() => setOccurredAt(toLocalInputValue(new Date()))}
                  icon={Clock}
                  variant="outline"
                >
                  たった今
                </BigButton>
                <p className="mt-2 text-sm text-gray-500">
                  だいたいで構いません。過去14日以内まで。
                </p>
              </div>
            </div>
          </StepCard>
        )}

        {step === 0 && (
          <StepCard
            title="何を見ましたか？"
            subtitle="ようすと頭数を教えてください。"
          >
            <div className="space-y-6">
              <div>
                <SubLabel>どんなようす？（1つ選ぶ）</SubLabel>
                <div className="flex flex-col gap-3">
                  {SITUATIONS.map((s) => {
                    const selected = situation === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setSituation(s.value)}
                        aria-pressed={selected}
                        className={`flex min-h-[72px] w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition ${
                          selected
                            ? "border-amber-500 bg-amber-50 ring-4 ring-amber-100"
                            : "border-gray-200 bg-white active:bg-gray-50"
                        }`}
                      >
                        <s.Icon
                          size={30}
                          className={selected ? "text-amber-700" : "text-gray-500"}
                          aria-hidden
                        />
                        <div className="flex-1">
                          <div className="text-lg font-bold text-gray-900">
                            {s.label}
                          </div>
                          <div className="text-sm text-gray-500">{s.hint}</div>
                        </div>
                        {selected && (
                          <Check size={24} className="text-amber-600" aria-hidden />
                        )}
                      </button>
                    );
                  })}
                </div>
                {situation === "injury" && (
                  <div className="mt-5">
                    <InjuryAlert />
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-5">
                <SubLabel>クマは何頭？</SubLabel>
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setHeadCount((v) => Math.max(0, v - 1))}
                    disabled={headCount <= 0}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl font-bold text-gray-700 active:bg-gray-200 disabled:opacity-40"
                    aria-label="頭数を減らす"
                  >
                    −
                  </button>
                  <div className="text-center">
                    <span className="text-5xl font-bold tabular-nums text-gray-900">
                      {headCount}
                    </span>
                    <span className="ml-1 text-xl text-gray-500">頭</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHeadCount((v) => Math.min(20, v + 1))}
                    disabled={headCount >= 20}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl font-bold text-gray-700 active:bg-gray-200 disabled:opacity-40"
                    aria-label="頭数を増やす"
                  >
                    ＋
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  姿を見ていない場合は 0 のままで構いません。
                </p>
              </div>
            </div>
          </StepCard>
        )}

        {step === 2 && (
          <StepCard
            title="写真や補足はありますか？"
            subtitle="なくても大丈夫です。そのまま「次へ」を押してください。"
          >
            {photoDataUrl ? (
              <div className="mb-3 flex flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- プレビュー、最適化不要 */}
                <img
                  src={photoDataUrl}
                  alt="選んだ写真のプレビュー"
                  className="max-h-64 w-full rounded-2xl object-contain"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPhotoDataUrl(null);
                    setPhotoError(null);
                  }}
                  className="h-11 rounded-full px-4 text-base font-medium text-red-600 hover:bg-red-50"
                >
                  写真を削除する
                </button>
              </div>
            ) : (
              <label className="mb-2 flex min-h-[96px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-3 py-6 text-base text-gray-600 active:bg-gray-100">
                <Camera size={30} aria-hidden />
                <span className="font-medium">写真を撮る／選ぶ</span>
                {/* capture は付けない。付けるとモバイルでカメラが強制起動し、
                    フォトライブラリからの選択ができなくなる。 */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={onPhotoChange}
                  className="hidden"
                />
              </label>
            )}
            {photoError && (
              <p role="alert" className="mb-2 flex items-center gap-1.5 text-sm text-red-600">
                <AlertTriangle size={16} aria-hidden />
                {photoError}
              </p>
            )}
            <p className="mb-4 text-xs text-gray-500">
              5MB まで。クマ本体・足あと・フン・被害物などが確認に役立ちます。
            </p>

            <label className="mb-1 block text-base font-medium text-gray-700">
              ひとこと（任意）
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 300))}
              rows={3}
              placeholder="例：林道を歩いているクマを見ました。50mほどで森に入りました。"
              className="w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100"
            />
            <div className="mt-0.5 text-right text-xs text-gray-400">
              {comment.length} / 300
            </div>

            <div className="mt-4">
              <label className="mb-1 block text-base font-medium text-gray-700">
                連絡先メール（非公開・任意）
              </label>
              <input
                type="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="確認が必要なときのみ使います"
                className="box-border block h-12 w-full min-w-0 max-w-full rounded-2xl border-2 border-gray-200 bg-white px-4 text-base text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </StepCard>
        )}

        {step === 3 && (
          <StepCard
            title="内容を確認してください"
            subtitle="この内容で送信します。直したいときは各行の「なおす」から。"
          >
            <dl className="divide-y divide-gray-100 rounded-2xl border border-gray-200">
              <SummaryRow label="ようす" onEdit={() => setStep(0)}>
                {SITUATION_LABEL[situation]}
              </SummaryRow>
              <SummaryRow label="頭数" onEdit={() => setStep(0)}>
                {headCount}頭
              </SummaryRow>
              <SummaryRow label="場所" onEdit={() => setStep(1)}>
                {hasLocation ? (
                  placeName ? (
                    <span>{placeName} 付近</span>
                  ) : (
                    <span className="font-mono text-sm">
                      {lat!.toFixed(5)}, {lon!.toFixed(5)}
                    </span>
                  )
                ) : (
                  <span className="text-red-600">未指定</span>
                )}
              </SummaryRow>
              <SummaryRow label="いつ" onEdit={() => setStep(1)}>
                {formatOccurred(occurredAt)}
              </SummaryRow>
              <SummaryRow label="写真" onEdit={() => setStep(2)}>
                {photoDataUrl ? "あり" : "なし"}
              </SummaryRow>
              {comment && (
                <SummaryRow label="ひとこと" onEdit={() => setStep(2)}>
                  <span className="text-sm">{comment}</span>
                </SummaryRow>
              )}
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              匿名で送信されます。内容は確認のうえ、地図や自治体等への共有データに反映される場合があります。
              プライバシーポリシーは{" "}
              {/* ページ遷移せずアプリ内モーダルで表示する。ホーム追加(PWA)だと
                  target="_blank" が新規タブにならず同一画面で開き、入力中の
                  フォームに戻れなくなるため。 */}
              <button
                type="button"
                onClick={() => setShowPrivacy(true)}
                className="underline"
              >
                こちら
              </button>
              。
            </p>

            {submitError && (
              <div
                role="alert"
                className="mt-3 flex items-start gap-1.5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                <AlertTriangle size={16} className="mt-0.5 shrink-0" aria-hidden />
                {submitError}
              </div>
            )}
          </StepCard>
        )}
      </div>

      {/* 下部ナビ: 戻る / 次へ（最後は送信） */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white/95 px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <button
            type="button"
            onClick={goBack}
            className="flex h-14 shrink-0 items-center justify-center gap-1 rounded-full border-2 border-gray-200 px-5 text-base font-semibold text-gray-700 active:bg-gray-50"
          >
            <ChevronLeft size={20} aria-hidden />
            {step === 0 ? "やめる" : "戻る"}
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={submit}
              disabled={submitting || !hasLocation}
              className="flex h-14 flex-1 items-center justify-center rounded-full bg-amber-600 text-lg font-bold text-white shadow-sm active:bg-amber-700 disabled:opacity-60"
            >
              {submitting ? "送信中..." : "この内容で送信する"}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed}
              className="flex h-14 flex-1 items-center justify-center gap-1 rounded-full bg-amber-600 text-lg font-bold text-white shadow-sm active:bg-amber-700 disabled:opacity-50"
            >
              次へ
              <ChevronRight size={22} aria-hidden />
            </button>
          )}
        </div>
      </div>

      {/* プライバシーポリシー: ページ遷移せずアプリ内で全文表示 (PWA でも安全)。 */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
            <div className="text-base font-bold text-gray-900">
              プライバシーポリシー
            </div>
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="h-10 rounded-full px-4 text-base font-semibold text-amber-700 hover:bg-amber-50"
            >
              閉じる
            </button>
          </div>
          <iframe
            src="/privacy"
            title="プライバシーポリシー"
            className="min-h-0 w-full flex-1 border-0"
          />
        </div>
      )}
    </div>
  );
}

// 人がケガをしたときの緊急警告。状況ステップと送信完了画面で共通利用。
// けが人には救急(119)が必要なので、110(警察)と119(救急)の両方を出す。
function InjuryAlert() {
  return (
    <div className="rounded-2xl border-2 border-red-500 bg-red-50 p-4">
      <div className="flex items-center gap-2 text-base font-bold text-red-700">
        <Phone size={20} aria-hidden />
        けが人がいるときは、今すぐ通報を
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-red-800">
        この投稿だけで終わらせず、
        <strong>警察（110番）・救急（119番）</strong>とお住まいの自治体に連絡してください。
      </p>
      <div className="mt-3 flex gap-2">
        <a
          href="tel:110"
          className="flex h-14 flex-1 flex-col items-center justify-center rounded-2xl bg-red-600 font-bold text-white active:bg-red-700"
        >
          <span className="text-lg leading-none">110番</span>
          <span className="text-xs opacity-90">警察</span>
        </a>
        <a
          href="tel:119"
          className="flex h-14 flex-1 flex-col items-center justify-center rounded-2xl bg-red-600 font-bold text-white active:bg-red-700"
        >
          <span className="text-lg leading-none">119番</span>
          <span className="text-xs opacity-90">救急・消防</span>
        </a>
      </div>
    </div>
  );
}

// 1 画面に複数項目をまとめるときの、各項目の見出し。
function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 text-lg font-bold text-gray-800">{children}</div>
  );
}

// 各ステップの共通カード（大きな見出し + サブ）。
function StepCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <h1 className="text-2xl font-bold leading-snug text-gray-900">{title}</h1>
      {subtitle && (
        <p className="mb-4 mt-1 text-base leading-relaxed text-gray-500">
          {subtitle}
        </p>
      )}
      <div className={subtitle ? "" : "mt-4"}>{children}</div>
    </section>
  );
}

// 大きな全幅ボタン（場所ステップなど）。
function BigButton({
  onClick,
  disabled,
  icon: Icon,
  variant = "primary",
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  icon: LucideIcon;
  variant?: "primary" | "outline";
  children: React.ReactNode;
}) {
  const base =
    "mt-3 flex min-h-[60px] w-full items-center justify-center gap-2 rounded-2xl px-4 text-lg font-bold transition disabled:opacity-60";
  const style =
    variant === "primary"
      ? "bg-amber-600 text-white active:bg-amber-700"
      : "border-2 border-gray-200 bg-white text-gray-800 active:bg-gray-50";
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${base} ${style}`}>
      <Icon size={22} aria-hidden />
      {children}
    </button>
  );
}

// 確認画面の 1 行（ラベル・値・なおす）。
function SummaryRow({
  label,
  onEdit,
  children,
}: {
  label: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <dt className="w-16 shrink-0 text-sm font-medium text-gray-500">{label}</dt>
      <dd className="flex-1 text-base text-gray-900">{children}</dd>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-50"
      >
        なおす
      </button>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Suspense
        fallback={
          <div className="p-8 text-center text-base text-gray-500">読み込み中...</div>
        }
      >
        <SubmitContent />
      </Suspense>
    </main>
  );
}
