import Link from "next/link";
import SiteBrand from "@/components/SiteBrand";
import type { ReactNode } from "react";
import HeaderNav from "@/components/HeaderNav";
import LegalLinks from "@/components/LegalLinks";
import ProviderCredit from "@/components/ProviderCredit";

type Props = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function PageShell({ title, lead, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3">
        <SiteBrand />
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
            <span className="text-stone-300" aria-hidden>·</span>
            {/* 一般向けゴール = 通知登録。全ページ共通フッターにも常設 (③)。 */}
            <Link
              href="/notify"
              className="inline-block py-1 font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              クマ出没通知を受け取る
            </Link>
          </div>
          {/* 提供クレジット (サポーター機能公開時のみ表示)。命に関わる通知本文
              ではなく、フッターの控えめな位置に置く。 */}
          <ProviderCredit />
          {/* 全ページの最下段に補足リンクを置く。法的ページへの導線をどのページからも辿れるようにする。 */}
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
