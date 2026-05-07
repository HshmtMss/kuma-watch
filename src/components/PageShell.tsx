import Image from "next/image";
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
      <header className="flex items-center justify-between gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm sm:px-5 sm:py-3">
        {/* ブランドロックアップ: トップページ (KumaClient) と同じ和名 + 監修者の
            2 段組。ブランドの「獣医師監修」シグナルを全ページで一貫させるため、
            タップ先は `/`(地図トップ) に統一。 */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="くまウォッチ by 獣医工学ラボ"
        >
          <Image
            src="/logo.png"
            alt="KumaWatch"
            width={120}
            height={36}
            priority
            className="h-7 w-auto sm:h-8"
            style={{ width: "auto", height: "auto" }}
          />
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold tracking-tight text-stone-900 sm:text-sm">
              くまウォッチ
            </span>
            <span className="text-[11px] text-stone-500 sm:text-xs">
              by{" "}
              <span className="font-semibold text-stone-700">獣医工学ラボ</span>
            </span>
          </span>
        </Link>
        <nav className="flex shrink-0 items-center gap-3 text-xs text-gray-600">
          <Link href="/" className="hover:text-gray-900">地図</Link>
          <Link href="/articles" className="hover:text-gray-900">記事</Link>
          <Link href="/for-gov" className="hidden hover:text-gray-900 sm:inline">自治体の方へ</Link>
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
          <div>
            運営: 獣医工学ラボ (
            <a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              リサーチコーディネート株式会社
            </a>
            )
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
