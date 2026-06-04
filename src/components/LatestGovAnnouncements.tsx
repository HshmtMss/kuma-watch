import Link from "next/link";
import {
  CATEGORY_LABEL,
  MINISTRY_LABEL,
  type GovAnnouncement,
  type GovMinistry,
} from "@/lib/sources/gov";
import announcementsData from "@/../public/data/gov-announcements.json";

/**
 * 「最新の政府発表」サイドカード。/measures や /research など、関連
 * セクションのページ末尾に埋め込んで /policy への導線を作る。
 *
 * server component で gov-announcements.json を直接読む。ISR で十分新鮮。
 */

type Snapshot = { generatedAt: number; items: GovAnnouncement[] };

const MINISTRY_DOT: Record<GovMinistry, string> = {
  env: "bg-emerald-500",
  maff: "bg-amber-500",
  rinya: "bg-stone-500",
};

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

type Props = {
  /** 表示件数 (default: 3) */
  limit?: number;
  /** 見出し文言 (default: "国の最新発表") */
  title?: string;
};

export default function LatestGovAnnouncements({
  limit = 3,
  title = "国の最新発表",
}: Props) {
  const snap = announcementsData as Snapshot;
  const items = [...snap.items]
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
    .slice(0, limit);

  if (items.length === 0) return null;

  return (
    <aside className="not-prose my-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      {/* role + aria-level で h2 セマンティクスを残しつつ、.article-body h2 の
          グローバルスタイル ('#' プレフィックス・黄色アンダーライン・40px トップ
          マージン) を回避する。これがないと aside 内側上部に白い余白ができる。 */}
      <div className="mb-3 flex items-baseline justify-between">
        <div
          role="heading"
          aria-level={2}
          className="text-base font-bold text-stone-900 sm:text-lg"
        >
          {title}
        </div>
        <Link
          href="/policy"
          className="text-sm font-semibold text-amber-700 hover:underline"
        >
          一覧へ →
        </Link>
      </div>
      <ul className="divide-y divide-stone-100">
        {items.map((it) => (
          <li key={it.id} className="py-2.5 first:pt-0 last:pb-0">
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5"
            >
              <div className="flex flex-wrap items-baseline gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span
                    aria-hidden
                    className={`inline-block h-2 w-2 rounded-full ${MINISTRY_DOT[it.ministry]}`}
                  />
                  {MINISTRY_LABEL[it.ministry]}
                </span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-stone-700">
                  {CATEGORY_LABEL[it.category]}
                </span>
                <span className="tabular-nums text-stone-500">
                  {formatDate(it.date)}
                </span>
              </div>
              <div className="text-sm font-semibold leading-snug text-stone-900 group-hover:text-amber-700 sm:text-base">
                {it.title}
              </div>
              {it.summary && (
                <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {it.summary}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-xs text-stone-500">
        環境省・農林水産省・林野庁の最新クマ対策発表を集約。
        <Link href="/policy" className="ml-1 text-amber-700 underline">
          政府発表ページで全て見る
        </Link>
      </div>
    </aside>
  );
}
