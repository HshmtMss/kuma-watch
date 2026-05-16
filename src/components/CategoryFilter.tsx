import Link from "next/link";

/**
 * 共通カテゴリフィルター。/articles, /spot, /place など複数ページで利用する。
 *
 * 設計: タブを並べた pill 集合体。クリックで URL クエリが切替わり、ページ内で
 * 表示内容が絞り込まれる (Server Component 親側で読み取る)。
 *
 * スタイル方針:
 * - スマホでも押しやすい (h-12 タッチターゲット)
 * - 中高年向けに字を大きく (text-base)
 * - 絵文字 + ラベル + 件数の 3 要素
 * - active 時は accent カラーで反転、subtle shadow
 * - 横スクロール可能 (項目が多い場合に折り返さずスクロール)
 * - sticky 親要素と組み合わせて常時切替可
 */

export type CategoryFilterItem = {
  key: string;
  href: string;
  label: string;
  emoji?: string;
  count?: number;
};

type Props = {
  title?: string;
  items: CategoryFilterItem[];
  /** 現在選択中のキー。マッチするものを active 表示。 */
  activeKey: string;
  /** sticky にするかどうか */
  sticky?: boolean;
  /** accent カラー (amber / emerald / blue 等) */
  accent?: "amber" | "emerald" | "blue";
};

const ACCENT_CLASSES: Record<
  NonNullable<Props["accent"]>,
  {
    bar: string;
    title: string;
    activeBg: string;
    activeText: string;
    activeShadow: string;
    inactiveText: string;
    inactiveBorder: string;
    countActive: string;
    countInactive: string;
  }
> = {
  amber: {
    bar: "bg-amber-50/95 border-amber-200",
    title: "text-amber-800",
    activeBg: "bg-amber-600",
    activeText: "text-white",
    activeShadow: "shadow-md shadow-amber-600/30",
    inactiveText: "text-stone-700 hover:text-amber-900 hover:bg-amber-50",
    inactiveBorder: "border-stone-200 hover:border-amber-300",
    countActive: "text-amber-100",
    countInactive: "text-stone-400",
  },
  emerald: {
    bar: "bg-emerald-50/95 border-emerald-200",
    title: "text-emerald-800",
    activeBg: "bg-emerald-600",
    activeText: "text-white",
    activeShadow: "shadow-md shadow-emerald-600/30",
    inactiveText: "text-stone-700 hover:text-emerald-900 hover:bg-emerald-50",
    inactiveBorder: "border-stone-200 hover:border-emerald-300",
    countActive: "text-emerald-100",
    countInactive: "text-stone-400",
  },
  blue: {
    bar: "bg-blue-50/95 border-blue-200",
    title: "text-blue-800",
    activeBg: "bg-blue-600",
    activeText: "text-white",
    activeShadow: "shadow-md shadow-blue-600/30",
    inactiveText: "text-stone-700 hover:text-blue-900 hover:bg-blue-50",
    inactiveBorder: "border-stone-200 hover:border-blue-300",
    countActive: "text-blue-100",
    countInactive: "text-stone-400",
  },
};

export default function CategoryFilter({
  title = "カテゴリで絞り込み",
  items,
  activeKey,
  sticky = true,
  accent = "amber",
}: Props) {
  const a = ACCENT_CLASSES[accent];
  const stickyClass = sticky
    ? "sticky top-0 z-30 -mx-5 mb-6 border-b px-5 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5 sm:py-4"
    : "mb-6 rounded-2xl border px-5 py-4";

  return (
    <nav aria-label={title} className={`not-prose ${stickyClass} ${a.bar}`}>
      <div className={`mb-2.5 text-sm font-semibold ${a.title}`}>{title}</div>
      <div className="-mx-1 overflow-x-auto">
        <ul className="flex w-max gap-2 px-1 sm:flex-wrap sm:w-full">
          {items.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`flex h-12 shrink-0 items-center gap-2 rounded-xl border px-4 text-base font-semibold transition ${
                    isActive
                      ? `${a.activeBg} ${a.activeText} ${a.activeShadow} border-transparent`
                      : `bg-white ${a.inactiveText} ${a.inactiveBorder}`
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.emoji && (
                    <span aria-hidden className="text-lg leading-none">
                      {item.emoji}
                    </span>
                  )}
                  <span className="whitespace-nowrap">{item.label}</span>
                  {typeof item.count === "number" && (
                    <span
                      className={`text-sm tabular-nums ${
                        isActive ? a.countActive : a.countInactive
                      }`}
                    >
                      ({item.count})
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
