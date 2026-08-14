import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/**
 * /en 配下の英語チャンク。ルート layout はグローバルヘッダーを持たない(各ページが
 * PageShell 等で描画)ため、英語ページ用の軽いヘッダー/フッターをここで足す。
 * これで /en は日本語UIに混ざらず、英語の独立した見た目になる。
 * (ルート <html lang="ja"> は据え置き。content と hreflang で言語は担保。)
 */
export const metadata: Metadata = {
  title: { default: "KumaWatch — Bear Safety in Japan", template: "%s" },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Link href="/en" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="KumaWatch"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-sm font-black text-stone-900">
              KumaWatch
              <span className="ml-1.5 font-medium text-stone-400">
                Bear Safety in Japan
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-xs font-semibold">
            <Link href="/en#spots" className="text-stone-600 hover:text-stone-900">
              Spots
            </Link>
            <Link href="/" className="text-stone-400 hover:text-stone-600">
              日本語
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="mt-10 border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-2xl px-4 py-6 text-xs leading-relaxed text-stone-500">
          <p className="font-bold text-stone-700">KumaWatch</p>
          <p className="mt-1">
            Real-time bear (higuma / tsukinowaguma) sightings across Japan, from
            official reports and news.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/en" className="hover:text-stone-800">
              Bear safety guide
            </Link>
            <Link href="/en#spots" className="hover:text-stone-800">
              Hiking spots
            </Link>
            <Link href="/" className="hover:text-stone-800">
              日本語サイト
            </Link>
          </div>
          <p className="mt-3 text-[11px] text-stone-400">
            Information is provided for reference only and may be incomplete.
            Always follow local signage and official guidance. © KumaWatch
          </p>
        </div>
      </footer>
    </div>
  );
}
