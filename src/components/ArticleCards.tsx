import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Zap,
  BookMarked,
  Newspaper,
  TrendingUp,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 * 研究ダイジェスト記事で繰り返し使うカード群を共通部品化したもの。
 * 以前は各号の page.tsx にインラインでベタ書きされ、
 * ラベルが text-[10px] uppercase tracking-widest で極小・字間開きすぎ、
 * 本文も text-sm で詰まって読みづらかった。
 * ここで一元化し、モバイルで読みやすいサイズ・余白・配色に統一する。
 *
 * すべて .not-prose を付け、.article-body の段落スタイルの影響を切る。
 * ------------------------------------------------------------------ */

type Tone = "amber" | "emerald" | "blue" | "stone" | "red";

const TONE: Record<
  Tone,
  { wrap: string; label: string; dot: string; icon: LucideIcon }
> = {
  amber: {
    wrap: "border-amber-200 bg-amber-50",
    label: "text-amber-800",
    dot: "bg-amber-400",
    icon: Zap,
  },
  emerald: {
    wrap: "border-emerald-200 bg-emerald-50",
    label: "text-emerald-700",
    dot: "bg-emerald-400",
    icon: Sparkles,
  },
  blue: {
    wrap: "border-blue-200 bg-blue-50",
    label: "text-blue-700",
    dot: "bg-blue-400",
    icon: FileText,
  },
  stone: {
    wrap: "border-stone-200 bg-white",
    label: "text-stone-500",
    dot: "bg-stone-400",
    icon: ClipboardList,
  },
  red: {
    wrap: "border-red-200 bg-red-50",
    label: "text-red-800",
    dot: "bg-red-400",
    icon: TrendingUp,
  },
};

/** カード上部の見出しラベル。アイコン + 読みやすい 13px 太字。
 *  日本語なので字間は開けない(旧: uppercase tracking-widest を撤去)。 */
function CardLabel({
  icon: Icon,
  className,
  children,
}: {
  icon: LucideIcon;
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex items-center gap-1.5 text-[13px] font-bold ${className}`}>
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

/** 出典リンク(Scholar / DOI 等)。文言に含まれる「→」はそのまま渡す。 */
function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block text-[13px] font-semibold text-amber-700 underline decoration-amber-300 underline-offset-2 hover:decoration-amber-700"
    >
      {children}
    </a>
  );
}

export type Paper = {
  title: ReactNode;
  citation?: ReactNode;
  href?: string;
  linkText?: string;
};

/** 「今号で読み解く論文」カード(青)。
 *  1 本なら title/citation/href/linkText を直接渡す。
 *  複数本(「2 本の論文」「論文群」)は papers 配列で渡す。 */
export function PaperCard({
  label = "今号で読み解く論文",
  title,
  citation,
  href,
  linkText,
  papers,
}: {
  label?: string;
  title?: ReactNode;
  citation?: ReactNode;
  href?: string;
  linkText?: string;
  papers?: Paper[];
}) {
  const list: Paper[] = papers ?? [{ title, citation, href, linkText }];
  return (
    <div className="not-prose my-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 sm:p-5">
      <CardLabel icon={FileText} className="text-blue-700">
        {label}
      </CardLabel>
      <div className="mt-2 space-y-4">
        {list.map((p, i) => (
          <div key={i}>
            <p className="text-[15px] font-bold leading-snug text-stone-900">
              {p.title}
            </p>
            {p.citation && (
              <p className="mt-1.5 text-[13px] leading-relaxed text-stone-600">
                {p.citation}
              </p>
            )}
            {p.href && (
              <SourceLink href={p.href}>{p.linkText ?? p.href}</SourceLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** 箇条書きのハイライト(「時間がない人向けの 3 行」/観察された傾向 など)。
 *  items は各行の ReactNode(<strong> 等を含んでよい)。 */
export function KeyPoints({
  label,
  items,
  tone = "amber",
  icon,
}: {
  label: string;
  items: ReactNode[];
  tone?: Tone;
  icon?: LucideIcon;
}) {
  const t = TONE[tone];
  return (
    <div className={`not-prose my-6 rounded-2xl border p-4 sm:p-5 ${t.wrap}`}>
      <CardLabel icon={icon ?? t.icon} className={t.label}>
        {label}
      </CardLabel>
      <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-stone-800">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5">
            <span
              className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${t.dot}`}
              aria-hidden
            />
            <span className="min-w-0">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 段落型のハイライト枠(「要点」「次号予告」など単一の説明文)。 */
export function Callout({
  label,
  tone = "emerald",
  icon,
  children,
}: {
  label?: string;
  tone?: Tone;
  icon?: LucideIcon;
  children: ReactNode;
}) {
  const t = TONE[tone];
  return (
    <div className={`not-prose my-6 rounded-2xl border p-4 sm:p-5 ${t.wrap}`}>
      {label && (
        <CardLabel icon={icon ?? t.icon} className={t.label}>
          {label}
        </CardLabel>
      )}
      <div className="mt-2 text-[15px] leading-relaxed text-stone-800">
        {children}
      </div>
    </div>
  );
}

/** 次号予告(緑)。Callout の薄いラッパ。 */
export function NextIssue({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Callout label={label} tone="emerald" icon={Newspaper}>
      {children}
    </Callout>
  );
}

/** 大きな数字を見せる統計枠(既定は赤=注意喚起)。 */
export function StatCallout({
  label,
  value,
  note,
  tone = "red",
}: {
  label: string;
  value: ReactNode;
  note?: ReactNode;
  tone?: Tone;
}) {
  const t = TONE[tone];
  return (
    <div
      className={`not-prose my-6 rounded-2xl border p-5 text-center sm:p-6 ${t.wrap}`}
    >
      <div className={`text-[13px] font-bold ${t.label}`}>{label}</div>
      <div className="mt-2 text-4xl font-extrabold tabular-nums text-red-700 sm:text-5xl">
        {value}
      </div>
      {note && (
        <div className="mt-2 text-[15px] leading-relaxed text-stone-700">
          {note}
        </div>
      )}
    </div>
  );
}

export type Reference = {
  title: ReactNode;
  /** 出典表記。無い項目もあるため任意。 */
  citation?: ReactNode;
  /** 原典リンク。無い項目(リンク先が存在しない文献)もあるため任意。 */
  href?: string;
  linkText?: string;
};

/** 参考文献リスト。項目ごとに出典・リンクの有無はまちまちなので、
 *  citation / href はどちらも任意。あるものだけ描画する。 */
export function References({ items }: { items: Reference[] }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <ol className="m-0 list-none divide-y divide-stone-100 p-0">
        {items.map((r, i) => (
          <li key={i} className="px-4 py-4 sm:px-5">
            <p className="text-[15px] font-bold leading-snug text-stone-900">
              {r.title}
            </p>
            {r.citation && (
              <p className="mt-1 text-[13px] leading-relaxed text-stone-600">
                {r.citation}
              </p>
            )}
            {r.href && (
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[13px] font-semibold text-amber-700 underline decoration-amber-300 underline-offset-2 hover:decoration-amber-700"
              >
                {r.linkText ?? r.href}
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// BookMarked は参考文献セクション見出し用にエクスポート(必要な号で使用可)。
export { BookMarked };
