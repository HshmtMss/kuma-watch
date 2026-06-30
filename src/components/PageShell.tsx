import Link from "next/link";
import type { ReactNode } from "react";
import HeaderNav from "@/components/HeaderNav";
import LegalLinks from "@/components/LegalLinks";

type Props = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function PageShell({ title, lead, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3">
        {/* ブランドはモバイルでも「くまウォッチ by 獣医工学ラボ」を表示する (ハンバーガー導入で幅確保)。
            文字サイズは小デバイスでの 1 行収まりを優先しつつ、空きが目立たない最大値に調整:
            ロゴ画像 h-8→h-9, タイトル base→lg, by 獣医工学ラボ xs→sm。 */}
        {/* ブランド一式 (ロゴ + くまウォッチ + BETA) をまとめてトップ (地図) への
            1 つのリンクに。BETA は個別リンクをやめバッジに統一。テキスト/バッジは
            relative top で僅かに下げ、ロゴと上下中央を揃える。 */}
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          aria-label="くまウォッチ ホーム（地図）"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="KumaWatch"
            className="block h-8 w-auto sm:h-9"
          />
          <span className="relative top-[2px] truncate text-base font-bold tracking-tight text-stone-900 sm:text-lg">
            くまウォッチ
          </span>
          <span className="relative top-[2px] shrink-0 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-900">
            BETA
          </span>
        </Link>
        <HeaderNav />
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
      <footer className="border-t border-stone-200 bg-white px-5 py-6 text-sm text-stone-700">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>
              運営:{" "}
              <a
                href="https://www.research-coordinate.co.jp/labs/vet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 font-medium text-stone-900 hover:underline"
              >
                獣医工学ラボ
              </a>
            </span>
            <span className="text-stone-300" aria-hidden>·</span>
            <a
              href="mailto:contact@research-coordinate.co.jp"
              className="inline-block py-1 hover:text-stone-900 hover:underline"
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
