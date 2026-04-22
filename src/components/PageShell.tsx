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
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">🐻</span>
          <div>
            <div className="text-base font-bold leading-tight tracking-tight text-gray-900">
              KumaWatch <span className="text-xs font-normal text-gray-500">（クマウォッチ）</span>
            </div>
            <div className="text-xs text-gray-500">全国クマ出没予報・危険度マップ</div>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-xs text-gray-600">
          <Link href="/map" className="hover:text-gray-900">地図に戻る</Link>
          <Link href="/for-gov" className="hover:text-gray-900">自治体の方へ</Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
        {lead && <p className="mb-8 text-sm text-gray-600">{lead}</p>}
        <div className="prose prose-sm max-w-none text-gray-800">{children}</div>
      </main>
      <footer className="border-t border-black/8 bg-white px-5 py-6 text-xs text-gray-500">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <div>© リサーチコーディネート株式会社</div>
          <nav className="flex flex-wrap items-center gap-3">
            <Link href="/about" className="hover:text-gray-900">このサイトについて</Link>
            <Link href="/sources" className="hover:text-gray-900">データ出典</Link>
            <Link href="/for-gov" className="hover:text-gray-900">自治体の方へ</Link>
            <Link href="/disclaimer" className="hover:text-gray-900">免責事項</Link>
            <Link href="/privacy" className="hover:text-gray-900">プライバシー</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
