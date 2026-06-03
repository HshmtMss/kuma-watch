import Link from "next/link";

/**
 * 全ページ最下部に出す B2B エントリ帯。
 * - 自治体・観光協会 / 製品掲載事業者 の 2 つの入口を、一般 UX を邪魔しない
 *   高さ・トーンで常時可視に置く。
 * - dismiss は付けない (常時表示が目的)。
 * - スタイルは「地図ピンを邪魔しない控えめなアースカラー帯」+ 両端の塗り chip。
 * - 表示優先順位は通常コンテンツより上、ボトムシートやドロップダウンより下。
 *
 * 地図トップは KumaClient.tsx の最下端で、PageShell.tsx は footer 直上で利用。
 */
export default function BusinessEntryStrip({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const compact = variant === "compact";
  return (
    <div
      className={`relative z-[1050] shrink-0 border-t border-stone-200 bg-stone-50 ${
        compact ? "px-2 py-1.5" : "px-3 py-2"
      }`}
      aria-label="法人の方向けエントリ"
    >
      <div className="mx-auto flex max-w-3xl items-stretch gap-2 text-[11px] sm:text-xs">
        <Link
          href="/for-gov"
          className="flex flex-1 items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5 ring-1 ring-stone-200 hover:bg-amber-50 hover:ring-amber-300 sm:px-3 sm:py-2"
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="rounded bg-stone-900 px-1 py-0.5 text-[9px] font-bold text-white"
            >
              自治体
            </span>
            <span className="font-semibold text-stone-900">
              出没情報の連携・配信
            </span>
            <span className="hidden text-stone-500 sm:inline">
              ・ 観光協会の方も
            </span>
          </span>
          <span aria-hidden className="shrink-0 font-bold text-amber-700">
            →
          </span>
        </Link>
        <Link
          href="/for-vendors"
          className="flex flex-1 items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5 ring-1 ring-stone-200 hover:bg-amber-50 hover:ring-amber-300 sm:px-3 sm:py-2"
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="rounded bg-amber-700 px-1 py-0.5 text-[9px] font-bold text-white"
            >
              事業者
            </span>
            <span className="font-semibold text-stone-900">対策製品の掲載</span>
            <span className="hidden text-stone-500 sm:inline">
              ・ 広告・PR
            </span>
          </span>
          <span aria-hidden className="shrink-0 font-bold text-amber-700">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
