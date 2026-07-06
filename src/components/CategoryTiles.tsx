import Link from "next/link";
import { categoryIcon } from "@/components/CategoryGlyph";

/**
 * 「学ぶ（記事）」のカテゴリを、絵文字チップではなく“ブロック（タイル）”で並べる。
 * アイコンはフリー素材の Lucide（MIT）を使用（[[CategoryGlyph]] に一元化）。全カテゴリを
 * 俯瞰でき、学ぶ入口のハブとして機能する。クリックで /articles?cat=slug のフィルタへ。
 */

export type CategoryTileItem = {
  key: string;
  href: string;
  label: string;
  count?: number;
};

type Props = {
  title?: string;
  items: CategoryTileItem[];
  /** 現在選択中のキー。マッチするタイルを active 表示。 */
  activeKey: string;
};

export default function CategoryTiles({
  title = "カテゴリから探す",
  items,
  activeKey,
}: Props) {
  return (
    <nav aria-label={title} className="not-prose mb-8">
      <div className="mb-3 text-sm font-semibold text-stone-500">{title}</div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = categoryIcon(item.key);
          const isActive = item.key === activeKey;
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-6 text-center transition ${
                  isActive
                    ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm"
                    : "border-stone-200 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-sm"
                }`}
              >
                <Icon
                  className={isActive ? "text-amber-600" : "text-stone-500"}
                  size={30}
                  strokeWidth={1.7}
                  aria-hidden
                />
                <span className="text-sm font-bold leading-tight">
                  {item.label}
                </span>
                {typeof item.count === "number" && (
                  <span className="text-xs tabular-nums text-stone-400">
                    {item.count}件
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
