import Link from "next/link";
import { RESEARCH_ENTRIES } from "@/lib/research-entries";

/**
 * 研究記事末尾に置く、言及地域 → サイト本体への誘導カード。
 * slug を受け取り、RESEARCH_ENTRIES から regions を引いて各
 * /place/[pref] と /research/region/[pref] アーカイブへのリンクを並べる。
 *
 * SEO 観点: 各研究記事 → 都道府県マップ・地域アーカイブへの内部リンクを
 * 生成し、サイト全体の回遊性とハブ構造を強化する。
 */
export default function ResearchPlaceLinks({ slug }: { slug: string }) {
  const entry = RESEARCH_ENTRIES.find((e) => e.slug === slug);
  const regions = entry?.regions ?? [];
  if (regions.length === 0) return null;
  return (
    <aside className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-amber-800">
        この記事で言及した地域の最新出没
      </div>
      <div className="mt-2 text-sm text-stone-700">
        登山・旅行・通勤前のチェックには、地域別の最新マップが便利です。
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {regions.map((pref) => (
          <Link
            key={pref}
            href={`/place/${encodeURIComponent(pref)}`}
            className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-3 py-1.5 text-xs font-medium text-amber-900 hover:bg-amber-100"
          >
            🗺️ {pref} の出没マップ
          </Link>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {regions.map((pref) => (
          <Link
            key={pref}
            href={`/research/region/${encodeURIComponent(pref)}`}
            className="text-blue-700 underline hover:text-blue-900"
          >
            {pref} の分析レポート一覧 →
          </Link>
        ))}
      </div>
    </aside>
  );
}
