import Link from "next/link";

/**
 * 「このサイトについて / 免責事項 / プライバシー / クレジット」の補足リンク群。
 * 各ページの お問合せカード末尾に小さく配置する。
 *
 * 設計方針: 主要導線はヘッダーに集約、補足の法的・利用規約系リンクは
 * 「お問合せ後に詳しく見たい人」のためにここに置く。視覚的にはフッター感を持たせる。
 */
export default function LegalLinks() {
  return (
    <nav
      aria-label="補足リンク"
      className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-gray-100 pt-3 text-[11px] text-gray-400"
    >
      <Link href="/about" className="hover:text-gray-600 hover:underline">
        このサイトについて
      </Link>
      <span aria-hidden>·</span>
      <Link href="/disclaimer" className="hover:text-gray-600 hover:underline">
        免責事項
      </Link>
      <span aria-hidden>·</span>
      <Link href="/privacy" className="hover:text-gray-600 hover:underline">
        プライバシー
      </Link>
    </nav>
  );
}
