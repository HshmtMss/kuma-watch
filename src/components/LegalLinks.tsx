import Link from "next/link";
import { isPushReleased } from "@/lib/push-flag";

/**
 * 「このサイトについて / 免責事項 / プライバシー / クレジット」の補足リンク群。
 * 各ページの お問合せカード末尾に小さく配置する。
 *
 * 設計方針: 主要導線はヘッダーに集約、補足の法的・利用規約系リンクは
 * 「お問合せ後に詳しく見たい人」のためにここに置く。視覚的にはフッター感を持たせる。
 * 通知設定 (/notifications) もここに置き、登録した各ページに戻らなくても
 * 全ページ共通のフッターから解除へ辿り着けるようにする。
 */
export default function LegalLinks() {
  return (
    <nav
      aria-label="補足リンク"
      className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-gray-200 pt-3 text-sm text-gray-600"
    >
      <Link
        href="/about"
        className="inline-block py-1 hover:text-gray-900 hover:underline"
      >
        このサイトについて
      </Link>
      <span className="text-gray-300" aria-hidden>·</span>
      <Link
        href="/data"
        className="inline-block py-1 hover:text-gray-900 hover:underline"
      >
        データの透明性
      </Link>
      <span className="text-gray-300" aria-hidden>·</span>
      <Link
        href="/for-vendors"
        className="inline-block py-1 hover:text-gray-900 hover:underline"
      >
        製品・サービスの掲載
      </Link>
      <span className="text-gray-300" aria-hidden>·</span>
      <Link
        href="/disclaimer"
        className="inline-block py-1 hover:text-gray-900 hover:underline"
      >
        免責事項
      </Link>
      <span className="text-gray-300" aria-hidden>·</span>
      <Link
        href="/privacy"
        className="inline-block py-1 hover:text-gray-900 hover:underline"
      >
        プライバシー
      </Link>
      {isPushReleased() && (
        <>
          <span className="text-gray-300" aria-hidden>·</span>
          <Link
            href="/notifications"
            className="inline-block py-1 hover:text-gray-900 hover:underline"
          >
            通知設定
          </Link>
        </>
      )}
    </nav>
  );
}
