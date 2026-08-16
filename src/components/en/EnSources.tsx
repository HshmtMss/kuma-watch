import Link from "next/link";

/**
 * 英語ページの信頼性(E-E-A-T)ブロック。出典・データの作り方・最終更新日を明示する。
 * 安全/健康系は「誰の情報か・いつの情報か」を示すほど Google に評価されやすい。
 * updated: 表示用の整形済み日付文字列（例 "August 17, 2026"）。
 */
export default function EnSources({
  updated,
  className = "",
}: {
  updated?: string;
  className?: string;
}) {
  return (
    <section
      className={`not-prose rounded-2xl border border-stone-200 bg-stone-50 p-4 text-[13px] leading-relaxed text-stone-600 ${className}`}
    >
      <h2 className="text-sm font-bold text-stone-800">Sources &amp; reliability</h2>
      <p className="mt-1.5">
        Bear sighting data is compiled continuously from{" "}
        <b>official municipal and prefectural reports and local news</b> across
        Japan. Safety guidance follows advice from Japan&apos;s{" "}
        <b>Ministry of the Environment</b> and prefectural wildlife authorities;
        for brown bears we reference the <b>Hokkaido Government</b>.
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px]">
        <a
          href="https://www.env.go.jp/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 underline hover:text-emerald-800"
        >
          Ministry of the Environment ↗
        </a>
        <a
          href="https://www.pref.hokkaido.lg.jp/ks/skn/higuma1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 underline hover:text-emerald-800"
        >
          Hokkaido Government: brown bears ↗
        </a>
        <Link
          href="/data"
          className="text-emerald-700 underline hover:text-emerald-800"
        >
          How we compile data
        </Link>
      </div>
      {updated && (
        <p className="mt-2 text-[12px] text-stone-400">Last updated: {updated}</p>
      )}
      <p className="mt-2 text-[11px] text-stone-400">
        Information is provided for reference only and may be incomplete. Always
        follow local signage and official guidance.
      </p>
    </section>
  );
}
