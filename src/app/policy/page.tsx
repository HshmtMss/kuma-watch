import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  CATEGORY_LABEL,
  MINISTRY_LABEL,
  type GovAnnouncement,
  type GovMinistry,
} from "@/lib/sources/gov";
import announcementsData from "@/../public/data/gov-announcements.json";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策の政府発表・政策動向｜環境省・農水省・林野庁の最新アナウンス",
  description:
    "獣医師監修・獣医工学ラボ運営。環境省・農林水産省・林野庁が公表するクマ対策・鳥獣保護管理に関する政策・予算・通知・統計レポートを集約して時系列で表示。最新の指定管理鳥獣化・補助金・審議会動向を 1 ページで確認できます。",
  alternates: { canonical: `${SITE_URL}/policy` },
  openGraph: {
    title: "クマ対策の政府発表・政策動向｜KumaWatch",
    description:
      "環境省・農水省・林野庁のクマ対策・鳥獣保護管理に関する最新アナウンスを集約。",
    url: `${SITE_URL}/policy`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

// 表示は ISR 5 分。cron がデータを更新したら短い遅延で反映する。
export const revalidate = 300;

type Snapshot = { generatedAt: number; items: GovAnnouncement[] };

const MINISTRY_ACCENT: Record<GovMinistry, string> = {
  env: "border-emerald-300 bg-emerald-50 text-emerald-900",
  maff: "border-amber-300 bg-amber-50 text-amber-900",
  rinya: "border-stone-300 bg-stone-50 text-stone-800",
};

const CATEGORY_ACCENT: Record<GovAnnouncement["category"], string> = {
  policy: "bg-blue-100 text-blue-800",
  budget: "bg-amber-100 text-amber-800",
  guidance: "bg-purple-100 text-purple-800",
  report: "bg-emerald-100 text-emerald-800",
  meeting: "bg-stone-100 text-stone-700",
  press: "bg-stone-100 text-stone-700",
};

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

export default function PolicyIndexPage() {
  const snap = announcementsData as Snapshot;
  const items = [...snap.items].sort(
    (a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id),
  );

  // 月ごとにグルーピング ("2026-05" のキーで yyyy-mm 降順)
  const byMonth = new Map<string, GovAnnouncement[]>();
  for (const it of items) {
    const key = it.date.slice(0, 7);
    const arr = byMonth.get(key) ?? [];
    arr.push(it);
    byMonth.set(key, arr);
  }
  const months = [...byMonth.keys()].sort((a, b) => b.localeCompare(a));

  const byMinistry = new Map<GovMinistry, number>();
  for (const it of items) {
    byMinistry.set(it.ministry, (byMinistry.get(it.ministry) ?? 0) + 1);
  }

  return (
    <PageShell
      title="政府発表・政策動向"
      lead="環境省・農林水産省・林野庁が公表するクマ対策・鳥獣保護管理に関する最新アナウンスを集約しています。新規発表は概ね 6 時間以内に反映されます。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">ホーム</Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">政府発表</span>
      </nav>

      {/* サマリーカード — 省別件数 */}
      <div className="not-prose mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-center">
          <div className="text-xs text-stone-500">登録件数</div>
          <div className="mt-1 text-xl font-bold text-stone-900">{items.length}</div>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
          <div className="text-xs text-emerald-700">環境省</div>
          <div className="mt-1 text-xl font-bold text-emerald-900">
            {byMinistry.get("env") ?? 0}
          </div>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center">
          <div className="text-xs text-amber-700">農水省</div>
          <div className="mt-1 text-xl font-bold text-amber-900">
            {byMinistry.get("maff") ?? 0}
          </div>
        </div>
        <div className="rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-center">
          <div className="text-xs text-stone-600">林野庁</div>
          <div className="mt-1 text-xl font-bold text-stone-800">
            {byMinistry.get("rinya") ?? 0}
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="not-prose text-base text-stone-600">
          まだ集約済みの発表がありません。新規取り込み (6 時間サイクル) を待ってください。
        </p>
      ) : (
        months.map((month) => {
          const monthItems = byMonth.get(month) ?? [];
          const m = /^(\d{4})-(\d{2})$/.exec(month);
          const label = m ? `${m[1]}年${Number(m[2])}月` : month;
          return (
            <section key={month} className="not-prose mt-6">
              <h2 className="mb-3 text-lg font-bold text-stone-900 sm:text-xl">
                {label}
                <span className="ml-2 text-sm font-normal text-stone-500">
                  {monthItems.length} 件
                </span>
              </h2>
              <ul className="space-y-3">
                {monthItems.map((it) => (
                  <li key={it.id}>
                    <a
                      href={it.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-xl border p-4 shadow-sm hover:shadow ${MINISTRY_ACCENT[it.ministry]}`}
                    >
                      <div className="mb-1.5 flex flex-wrap items-baseline gap-2 text-xs">
                        <span className="rounded-full bg-white/60 px-2 py-0.5 font-semibold">
                          {MINISTRY_LABEL[it.ministry]}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 font-semibold ${CATEGORY_ACCENT[it.category]}`}
                        >
                          {CATEGORY_LABEL[it.category]}
                        </span>
                        {it.tag && (
                          <span className="rounded-full bg-white/60 px-2 py-0.5 text-stone-600">
                            {it.tag}
                          </span>
                        )}
                        <span className="tabular-nums text-stone-600">
                          {formatDate(it.date)}
                        </span>
                      </div>
                      <div className="text-base font-bold leading-snug">
                        {it.title}
                      </div>
                      {it.summary && (
                        <p className="mt-1.5 text-sm leading-relaxed text-stone-700">
                          {it.summary}
                        </p>
                      )}
                      <div className="mt-2 text-xs text-stone-500">
                        {it.url} ↗
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}

      <details className="not-prose group my-8 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-stone-50 px-5 py-3 text-base font-semibold text-stone-800 marker:hidden [&::-webkit-details-marker]:hidden">
          <span>このページについて</span>
          <span className="text-stone-400 transition group-open:rotate-180">▼</span>
        </summary>
        <div className="space-y-3 px-5 py-4 text-sm leading-relaxed text-stone-700">
          <p>
            環境省・農林水産省・林野庁の press release ページから「クマ」「鳥獣保護管理」「指定管理鳥獣」「緊急銃猟」等のキーワードに合致する発表を自動取得し、LLM (Gemini) で分類・要約しています。原本へのリンクから各省の公式 HP に直接アクセスできます。
          </p>
          <p>
            このページに掲載されない自治体・都道府県レベルのアナウンスは、各
            <Link href="/place" className="text-amber-700 underline">都道府県・市町村ページ</Link>
            の「自治体公式情報」セクションをご参照ください。
          </p>
        </div>
      </details>
    </PageShell>
  );
}
