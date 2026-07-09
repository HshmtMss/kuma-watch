import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CATEGORY_ICONS } from "@/components/CategoryGlyph";

/**
 * カテゴリ/種別/地域などの絞り込みを、絵文字チップではなく“ブロック（タイル）”で並べる
 * 共通コンポーネント。アイコンはフリー素材の Lucide（MIT）。学ぶ・探すの各絞り込みで
 * 共通利用する。アイコンは item.icon で明示するか、記事カテゴリは key から自動解決する。
 */

export type CategoryTileItem = {
  key: string;
  href: string;
  label: string;
  count?: number;
  /** タイルに表示する Lucide アイコン。未指定なら記事カテゴリ key から自動解決。 */
  icon?: LucideIcon;
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
    <nav aria-label={title} className="not-prose mb-6">
      <div className="mb-2 text-sm font-semibold text-stone-500">{title}</div>
      {/* 縦長の大きな四角はスペースを食うため、アイコン左・ラベル右の横型スリム
          タイルに。1 行の高さに収まり省スペース。列数は画面幅で増やす。 */}
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon ?? CATEGORY_ICONS[item.key];
          const isActive = item.key === activeKey;
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full items-center gap-2.5 rounded-xl border px-3 py-2.5 transition ${
                  isActive
                    ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm"
                    : "border-stone-200 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-sm"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`shrink-0 ${isActive ? "text-amber-600" : "text-stone-500"}`}
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden
                  />
                )}
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-sm font-bold">
                    {item.label}
                  </span>
                  {typeof item.count === "number" && (
                    <span className="text-[11px] tabular-nums text-stone-400">
                      {item.count.toLocaleString()}件
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
