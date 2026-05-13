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
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm sm:px-5">
        {/* ブランドはモバイルでも「くまウォッチ by 獣医工学ラボ」を表示する (ハンバーガー導入で幅確保)。 */}
        <div className="flex min-w-0 shrink items-center gap-2">
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
            <span className="truncate text-sm font-semibold tracking-tight text-stone-900 sm:text-base">
              くまウォッチ
            </span>
          </Link>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs text-stone-500 hover:text-stone-700 sm:inline"
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
