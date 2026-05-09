import type { ReactNode } from "react";

type Props = {
  /** 大見出し (例: "この記事のポイント") */
  title?: string;
  /** 要点。文字列 or JSX。検索結果のスニペット候補にもなるのでキーワードを含める */
  points: ReactNode[];
  /** 末尾の一言 (CTA / 注意書き) */
  footer?: ReactNode;
};

export default function ArticleSummary({
  title = "この記事のポイント",
  points,
  footer,
}: Props) {
  if (points.length === 0) return null;
  return (
    <aside
      aria-label={title}
      className="not-prose mt-10 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5"
    >
      <div className="mb-3 text-sm font-bold text-amber-900">{title}</div>
      <ul className="space-y-2 text-sm leading-relaxed text-stone-800">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="mt-0.5 shrink-0 text-amber-700">
              ✓
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      {footer && (
        <div className="mt-4 border-t border-amber-200 pt-3 text-xs text-stone-700">
          {footer}
        </div>
      )}
    </aside>
  );
}
