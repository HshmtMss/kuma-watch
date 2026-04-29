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
      <header className="flex items-center justify-between border-b border-black/8 bg-white px-5 py-3 shadow-sm">
        <Link href="/" className="flex items-center gap-3" aria-label="KumaWatch">
          <Image
            src="/logo.png"
            alt="KumaWatch"
            width={120}
            height={36}
            priority
            className="h-9 w-auto"
            style={{ width: "auto", height: "2.25rem" }}
          />
          <div className="hidden sm:block">
            <div className="text-xs text-gray-500">全国クマ出没予報・危険度マップ</div>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-xs text-gray-600">
          <Link href="/" className="hover:text-gray-900">地図</Link>
          <Link href="/articles" className="hover:text-gray-900">記事</Link>
          <Link href="/for-gov" className="hover:text-gray-900">自治体の方へ</Link>
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
            <Link href="/disclaimer" className="hover:text-gray-900">免責事項</Link>
            <Link href="/privacy" className="hover:text-gray-900">プライバシー</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
