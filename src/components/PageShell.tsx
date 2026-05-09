import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function PageShell({ title, lead, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm sm:px-5">
        {/* ブランドロックアップ: ロゴ + くまウォッチ → ホーム (内部リンク)、
            by 獣医工学ラボ → 獣医工学ラボの公式ページ (外部リンク) の 2 リンク構造。
            獣医工学ラボの実体的なランディング先を確実に提供する。 */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="くまウォッチ ホーム"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="KumaWatch"
              className="block h-7 w-auto sm:h-8"
            />
            <span className="text-[13px] font-semibold tracking-tight text-stone-900 sm:text-sm">
              くまウォッチ
            </span>
          </Link>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-stone-500 hover:text-stone-700 sm:text-xs"
            aria-label="獣医工学ラボ (新しいタブで開く)"
          >
            by{" "}
            <span className="font-medium text-stone-700">獣医工学ラボ</span>
          </a>
        </div>
        <nav className="flex shrink-0 items-center gap-4 text-xs font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-900">地図</Link>
          <Link href="/articles" className="hover:text-stone-900">記事</Link>
          <Link href="/for-gov" className="hidden hover:text-stone-900 sm:inline">自治体の方へ</Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-8 sm:py-10">
        <h1 className="mb-3 text-2xl font-extrabold leading-tight text-stone-900 sm:text-3xl">
          {title}
        </h1>
        {lead && (
          <p className="mb-8 text-base leading-relaxed text-stone-600">{lead}</p>
        )}
        <div className="article-body max-w-none">{children}</div>
      </main>
      <footer className="border-t border-black/8 bg-white px-5 py-6 text-xs text-gray-500">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
          {/* ブランドはトップヘッダーと同じく「獣医工学ラボ」に統一。
              ラボの公式ページへ外部リンクで誘導する。
              法人名 (リサーチコーディネート株式会社) は /credits 等の
              法的記載コンテキストにのみ表示する。 */}
          <div>
            運営:{" "}
            <a
              href="https://www.research-coordinate.co.jp/labs/vet/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              獣医工学ラボ
            </a>
          </div>
          <nav className="flex flex-wrap items-center gap-3">
            <Link href="/about" className="hover:text-gray-900">このサイトについて</Link>
            <Link href="/for-gov" className="hover:text-gray-900">自治体の方へ</Link>
            <Link href="/research" className="hover:text-gray-900">研究・知見</Link>
            <Link href="/disclaimer" className="hover:text-gray-900">免責事項</Link>
            <Link href="/privacy" className="hover:text-gray-900">プライバシー</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
