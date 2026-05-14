import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  RESEARCH_CATEGORY_LABEL,
  researchEntryMonth,
  researchRegionsWithCount,
  sortedResearchEntries,
  type ResearchEntry,
} from "@/lib/research-entries";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ出没 研究・知見｜獣医師監修 獣医工学ラボ｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。全国のクマ出没事案の時空間分析、アーバン・ベア（都市型出没）研究、自治体・専門家向けの公開知見。日次・月次レポートを地域別・日付別に整理して公開。",
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    title: "クマ出没 研究・知見｜獣医師監修 獣医工学ラボ",
    description:
      "全国のクマ出没事案の時空間分析・アーバン・ベア研究を、獣医師監修で公開。",
    url: `${SITE_URL}/research`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ISR: 5 分ごとに静的 HTML を再生成。新規記事 (import-research が
// /research/<slug>/page.tsx を追加 → RESEARCH_ENTRIES を更新) を CDN エッジに
// 短い遅延で反映するため。
export const revalidate = 300;

// "2026-05" → "2026年5月"。日次レポートを月別グルーピングする見出しに使う。
function formatMonth(yyyymm: string): string {
  const m = yyyymm.match(/^(\d{4})-(\d{2})$/);
  if (!m) return yyyymm;
  return `${m[1]}年${Number(m[2])}月`;
}

export default function ResearchIndexPage() {
  const sorted = sortedResearchEntries();

  // 月次・テーマ・政策レポートは上段でフィード形式に。日次は下段で月別に折りたたむ。
  const monthly = sorted.filter((e) => e.category === "monthly-report");
  const weekly = sorted.filter((e) => e.category === "weekly-report");
  const topicPolicy = sorted.filter(
    (e) => e.category === "topic" || e.category === "policy",
  );
  const daily = sorted.filter((e) => e.category === "daily-report");

  // 日次を YYYY-MM でグルーピング (新しい月から)。
  const dailyByMonth = new Map<string, ResearchEntry[]>();
  for (const e of daily) {
    const m = researchEntryMonth(e.slug);
    const arr = dailyByMonth.get(m) ?? [];
    arr.push(e);
    dailyByMonth.set(m, arr);
  }
  const dailyMonths = [...dailyByMonth.keys()].sort((a, b) => b.localeCompare(a));

  const regions = researchRegionsWithCount();

  return (
    <PageShell
      title="研究・知見"
      lead="獣医工学ラボが公開する、クマ出没事案の分析・テーマ解説。自治体・研究機関・専門家の皆様向けの情報です。"
    >
      <div className="not-prose mb-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        {/* ブランドストリップ: ロゴと会社名をそれぞれ外部リンク化。
            ブランド情報がここに集約されているので、下のボディからは
            「獣医工学ラボはリサーチコーディネート…」の重複説明文を削除している。 */}
        <div className="flex flex-col items-center gap-4 px-6 pb-5 pt-6 sm:flex-row sm:items-center sm:gap-7 sm:px-8 sm:py-7">
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            aria-label="獣医工学ラボ (新しいタブで開く)"
          >
            <Image
              src="/labs/vet-eng-lab.jpeg"
              alt="獣医工学ラボ ロゴ"
              width={480}
              height={267}
              className="h-auto w-44 sm:w-52"
              priority
            />
          </a>
          <div className="text-center sm:border-l sm:border-stone-200 sm:pl-7 sm:text-left">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              運営
            </div>
            <div className="mt-1.5 text-sm leading-relaxed text-stone-700 sm:text-[15px]">
              獣医療・野生動物・公衆衛生領域の
              <br className="hidden sm:block" />
              技術プロジェクト
            </div>
            <div className="mt-2 text-xs text-stone-500">
              <a
                href="https://www.research-coordinate.co.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-700"
              >
                リサーチコーディネート株式会社
              </a>
            </div>
          </div>
        </div>
        {/* 説明ボディ: 区切り線 + 薄トーンで本文と分離 */}
        <div className="border-t border-stone-100 bg-stone-50 px-6 py-5 text-sm leading-relaxed text-stone-700 sm:px-8">
          <p className="m-0">
            リサーチコーディネート株式会社は<strong>2017年に獣医学的研究支援事業として創業</strong>し、大学・研究機関向けの研究支援を続けてきました。<strong>2021年からはクマ検知 AI の開発をはじめとするクマ対策プロジェクト</strong>にも着手しており、そこで蓄積した検知技術・行動分析の知見を、獣医工学ラボの活動として社会実装しています。
          </p>
          <p className="mt-3">
            KumaWatch（くまウォッチ）はその社会実装の一つとして、全国のクマ出没情報を集約し可視化することで、人と野生動物の境界における事故リスクの低減に取り組んでいます。本ページでは、KumaWatch のデータ・運営知見をもとにした分析レポートや、自治体・専門家向けのテーマ解説を公開しています。データ連携や共同研究のご相談は
            <Link href="/for-gov" className="text-blue-700 underline">
              自治体の方へ
            </Link>
            のページ、または末尾の連絡先までご連絡ください。
          </p>
        </div>
      </div>

      {/* 地域から探す: 各都道府県の関連レポートへの導線。
          記事内で頻出している都道府県をチップで並べる。 */}
      {regions.length > 0 && (
        <>
          <h2>地域から探す</h2>
          <p className="text-sm text-stone-600">
            都道府県を選ぶと、その地域に関連するレポートを一覧できます。
          </p>
          <div className="not-prose mt-3 flex flex-wrap gap-2">
            {regions.map((r) => (
              <Link
                key={r.pref}
                href={`/research/region/${encodeURIComponent(r.pref)}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-900"
              >
                <span>{r.pref}</span>
                <span className="text-[10px] tabular-nums text-stone-400">
                  {r.count}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* 月次レポート: 最新動向の総括として最上段に大きく置く。 */}
      {monthly.length > 0 && (
        <>
          <h2>月次レポート</h2>
          <ul className="not-prose space-y-4">
            {monthly.map((e) => (
              <ResearchCard key={e.slug} entry={e} accent="emerald" />
            ))}
          </ul>
        </>
      )}

      {/* 週次レポート: 月次と日次の中間粒度。現状エントリが無い場合は非表示。 */}
      {weekly.length > 0 && (
        <>
          <h2>週次レポート</h2>
          <ul className="not-prose space-y-4">
            {weekly.map((e) => (
              <ResearchCard key={e.slug} entry={e} accent="emerald" />
            ))}
          </ul>
        </>
      )}

      {/* テーマ解説。エントリが無ければセクション自体を表示しない。
          内部的に topic/policy の両カテゴリを束ねるが、UI 上は「政策提言」の
          語を出さず「テーマ解説」に統合表示する（読者にとって区別が薄いため）。 */}
      {topicPolicy.length > 0 && (
        <>
          <h2>テーマ解説</h2>
          <ul className="not-prose space-y-4">
            {topicPolicy.map((e) => (
              <ResearchCard key={e.slug} entry={e} accent="blue" />
            ))}
          </ul>
        </>
      )}

      {/* 日次レポート: 月別 details で折りたたみ。最新の月だけ open。 */}
      {daily.length > 0 && (
        <>
          <h2>日次レポート</h2>
          <p className="text-sm text-stone-600">
            その日の全国のクマ出没事案・人身被害・行政対応をまとめた速報レポート。月別にまとめています。
          </p>
          {dailyMonths.map((m, idx) => {
            const items = dailyByMonth.get(m) ?? [];
            return (
              <details
                key={m}
                className="not-prose group mt-4 overflow-hidden rounded-xl border border-stone-200 bg-white"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-800 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{formatMonth(m)}</span>
                  <span className="flex items-center gap-2 text-xs font-normal text-stone-500">
                    <span className="tabular-nums">{items.length}件</span>
                    <span className="text-stone-400 group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>
                <ul className="divide-y divide-stone-100">
                  {items.map((e) => (
                    <li key={e.slug}>
                      <Link
                        href={`/research/${e.slug}`}
                        className="block px-4 py-3 hover:bg-emerald-50/40"
                      >
                        {/* 日次レポートはタイトルがどれも同じ定型なので省略し、
                            日付と自治体タグだけで識別できるようにする。 */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className="text-sm font-semibold tabular-nums text-stone-900">
                            {e.publishedAt}
                          </span>
                          {e.regions.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {e.regions.slice(0, 5).map((r) => (
                                <span
                                  key={r}
                                  className="inline-block rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700"
                                >
                                  {r}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </>
      )}

      <h2>編集方針</h2>
      <p>
        研究記事は、公開ニュースおよび自治体発表をもとにした情報集約・要約に、
        大規模言語モデル（AI）を活用しています。最終的な内容は獣医工学ラボの獣医師が
        確認・編集の上で公開しており、編集責任は獣医工学ラボに帰属します。
      </p>
      <p>
        事実関係の誤りや、より正確な一次出典をご存じの場合は、お手数ですがフッターの連絡先までご連絡ください。
      </p>
    </PageShell>
  );
}

function ResearchCard({
  entry,
  accent,
}: {
  entry: ResearchEntry;
  accent: "emerald" | "blue";
}) {
  const accentChip =
    accent === "emerald"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-blue-100 text-blue-800";
  const accentHover =
    accent === "emerald"
      ? "hover:border-emerald-500 hover:bg-emerald-50/40"
      : "hover:border-blue-500 hover:bg-blue-50/40";
  return (
    <li
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${accentHover}`}
    >
      <Link href={`/research/${entry.slug}`} className="block p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className={`rounded-full px-2 py-0.5 font-medium ${accentChip}`}>
            {RESEARCH_CATEGORY_LABEL[entry.category]}
          </span>
          <span>{entry.publishedAt}</span>
        </div>
        <div className="mt-2 text-base font-semibold text-gray-900">
          {entry.title}
        </div>
        <div className="mt-1 text-sm text-gray-600">{entry.lead}</div>
        {entry.regions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {entry.regions.slice(0, 5).map((r) => (
              <span
                key={r}
                className="inline-block rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-700"
              >
                {r}
              </span>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
}
