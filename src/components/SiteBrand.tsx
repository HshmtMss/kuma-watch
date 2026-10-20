import Link from "next/link";

/**
 * サイト共通ヘッダーのブランド表示 (ロゴ + くまウォッチ + BETA + 一文)。
 * PageShell / 学ぶ / LINE 登録ページで共有し、ブランドの言い方を一か所で管理する。
 * 一般向けの名乗りは「獣医師開発のクマ警戒レベルマップ」に一本化 (運営者名=獣医工学ラボはフッター側)。
 */
export default function SiteBrand() {
  // ブランド一式をまとめてトップ (地図) への 1 つのリンクにする。
  return (
    <Link
      href="/"
      className="flex min-w-0 shrink items-center gap-2"
      aria-label="くまウォッチ ホーム（地図）"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="くまウォッチ"
        className="block h-8 w-auto sm:h-9"
      />
      {/* 1 行目: くまウォッチ + BETA / 2 行目: ブランドの一文「獣医師開発のクマ警戒レベルマップ」。 */}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate text-base font-bold tracking-tight text-stone-900 sm:text-lg">
            くまウォッチ
          </span>
          <span className="shrink-0 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-900">
            BETA
          </span>
        </span>
        {/* 幅 400px 未満の端末でも 1 行に収まるよう文字を一段小さくする。 */}
        <span className="truncate text-[10px] font-medium text-stone-500 min-[400px]:text-[11px] sm:text-xs">
          獣医師開発のクマ警戒レベルマップ
        </span>
      </span>
    </Link>
  );
}
