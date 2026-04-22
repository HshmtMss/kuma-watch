"use client";

type Props = {
  onGpsRequest: () => void;
  onDismiss: () => void;
  gpsLoading?: boolean;
};

export default function WelcomeOverlay({
  onGpsRequest,
  onDismiss,
  gpsLoading,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-[1500] flex items-center justify-center bg-stone-900/40 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kw-welcome-title"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onDismiss}
          aria-label="閉じる"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700"
        >
          ×
        </button>

        <div className="mb-1 text-3xl" aria-hidden>
          🐻
        </div>
        <h2
          id="kw-welcome-title"
          className="text-lg font-bold leading-tight tracking-tight text-stone-900"
        >
          目的地の安全、出発前に確認。
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">
          全国のクマ出没情報を地図で一目で把握。検索・タップ・現在地のどれでも、
          その場所のリスクをすぐに確認できます。
        </p>

        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={onGpsRequest}
            disabled={gpsLoading}
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-stone-900 text-sm font-medium text-white transition hover:bg-stone-800 disabled:opacity-60"
          >
            <span aria-hidden>📍</span>
            {gpsLoading ? "現在地を取得中..." : "現在地で見る"}
          </button>
          <button
            onClick={onDismiss}
            className="flex h-11 items-center justify-center gap-2 rounded-full border border-stone-200 bg-white text-sm font-medium text-stone-700 transition hover:bg-stone-50"
          >
            <span aria-hidden>🗺️</span>
            地図を探索する
          </button>
        </div>

        <p className="mt-3 text-center text-[10px] text-stone-400">
          登録不要・無料 / 位置情報は端末内のみで処理されます
        </p>
      </div>
    </div>
  );
}
