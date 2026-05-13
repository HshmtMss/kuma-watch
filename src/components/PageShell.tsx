import Link from "next/link";
import type { ReactNode } from "react";
import LegalLinks from "@/components/LegalLinks";

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
            {/* sm 未満では「くまウォッチ」テキストを隠してナビ幅を確保 (ロゴ画像が ブランド表記を兼ねる) */}
            <span className="hidden text-[13px] font-semibold tracking-tight text-stone-900 sm:inline sm:text-sm">
              くまウォッチ
            </span>
          </Link>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] text-stone-500 hover:text-stone-700 sm:inline sm:text-xs"
            aria-label="獣医工学ラボ (新しいタブで開く)"
          >
            by{" "}
            <span className="font-medium text-stone-700">獣医工学ラボ</span>
          </a>
        </div>
        <nav className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-stone-600 sm:gap-4 sm:text-xs">
          <Link href="/" className="hover:text-stone-900">地図</Link>
          <Link href="/place" className="hover:text-stone-900">都道府県</Link>
          <Link href="/spot" className="hover:text-stone-900">観光地</Link>
          <Link href="/articles" className="hover:text-stone-900">クマ対策</Link>
          <Link href="/research" className="hover:text-stone-900">研究</Link>
          <Link href="/for-gov" className="hover:text-stone-900">自治体の方へ</Link>
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
      <footer className="border-t border-black/8 bg-white px-5 py-5 text-xs text-gray-500">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs">
            運営:{" "}
            <a
              href="https://www.research-coordinate.co.jp/labs/vet/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              獣医工学ラボ
            </a>
            <span aria-hidden className="mx-2">·</span>
            <a
              href="mailto:contact@research-coordinate.co.jp"
              className="hover:text-gray-900"
            >
              お問合せ
            </a>
          </div>
          {/* 全ページの最下段に補足リンクを置く。法的ページへの導線をどのページからも辿れるようにする。 */}
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
