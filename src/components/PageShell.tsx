import Link from "next/link";
import type { ReactNode } from "react";
import HeaderNav from "@/components/HeaderNav";
import LegalLinks from "@/components/LegalLinks";
import BusinessEntryStrip from "@/components/BusinessEntryStrip";

type Props = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function PageShell({ title, lead, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between gap-2 border-b border-black/8 bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3">
        {/* ブランドはモバイルでも「くまウォッチ by 獣医工学ラボ」を表示する (ハンバーガー導入で幅確保)。
            文字サイズは小デバイスでの 1 行収まりを優先しつつ、空きが目立たない最大値に調整:
            ロゴ画像 h-8→h-9, タイトル base→lg, by 獣医工学ラボ xs→sm。 */}
        <div className="flex min-w-0 shrink items-center gap-1.5 sm:gap-2">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="くまウォッチ ホーム"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="KumaWatch"
              className="block h-8 w-auto sm:h-9"
            />
            <span className="truncate text-base font-bold tracking-tight text-stone-900 sm:text-lg">
              くまウォッチ
            </span>
          </Link>
          {/* ベータ版バッジ。免責事項 (情報の精度・限界) ページにリンクして、
              ユーザーが「これは試験運用中で、情報には限界がある」ことを 1 クリックで
              確認できるようにする。タイトル隣に小さく置きヘッダー幅を圧迫しない。 */}
          <Link
            href="/disclaimer"
            className="shrink-0 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-900 hover:bg-amber-300"
            aria-label="ベータ版運用中 — 免責事項を見る"
            title="ベータ版運用中"
          >
            BETA
          </Link>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-xs text-stone-500 hover:text-stone-700 sm:text-sm"
            aria-label="獣医工学ラボ (新しいタブで開く)"
          >
            by{" "}
            <span className="font-medium text-stone-700">獣医工学ラボ</span>
          </a>
        </div>
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
      {/* B2B エントリ帯 — フッター直上で「次の問い合わせ動線」を提示。
          地図トップは KumaClient 内で別途同じ帯を出している。 */}
      <BusinessEntryStrip />
      <footer className="border-t border-black/8 bg-white px-5 py-6 text-sm text-gray-700">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>
              運営:{" "}
              <a
                href="https://www.research-coordinate.co.jp/labs/vet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 font-medium text-gray-900 hover:underline"
              >
                獣医工学ラボ
              </a>
            </span>
            <span className="text-gray-300" aria-hidden>·</span>
            <a
              href="mailto:contact@research-coordinate.co.jp"
              className="inline-block py-1 hover:text-gray-900 hover:underline"
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
