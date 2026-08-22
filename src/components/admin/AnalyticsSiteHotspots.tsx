import { MapPin } from "lucide-react";

export type SiteHotspot = {
  key: string;
  lat: number;
  lon: number;
  label: string;
  pref: string;
  city: string;
  total: number;
  last12: number;
  days: number;
  years: number;
  latestDate: string;
  peakMonth: number | null;
  injuries: number;
  multiBear: number;
};

export type SiteHotspotBoard = {
  since: string;
  spanYears: number;
  scopedTotal: number;
  cells: number;
  repeatCells: number;
  repeatShare: number;
  cumulative: { topN: number; share: number }[];
  sites: SiteHotspot[];
};

/** 集計に足りる件数。これ未満は「参考値」と断って出す */
const MIN_RELIABLE = 20;

function pct(v: number): string {
  return `${Math.round(v * 100)}%`;
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl bg-stone-50 px-3 py-2.5">
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 text-xl font-extrabold tabular-nums text-stone-900">
        {value}
      </div>
      {sub && <div className="mt-0.5 text-[11px] text-stone-400">{sub}</div>}
    </div>
  );
}

/**
 * 地点別の出没台帳。「この地域のどこから手を付けるか」を件数順に並べる。
 * 他の自治体と比べる表ではないので、順位や比較は出さない。
 */
export default function AnalyticsSiteHotspots({
  data,
  showCity,
  years,
}: {
  data: SiteHotspotBoard;
  /** 全国・県表示では市町村名を添える。市町村を選んでいるときは冗長なので省く */
  showCity: boolean;
  /** 集計期間 (年)。見出しの表示にだけ使う (分母は data.spanYears) */
  years: number;
}) {
  if (data.cells === 0)
    return (
      <p className="py-6 text-center text-sm text-stone-400">
        座標のある出没記録がありません
      </p>
    );

  const top5 = data.cumulative.find((c) => c.topN === 5);

  return (
    <div>
      {data.scopedTotal < MIN_RELIABLE && (
        <p className="mb-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          この地域の対象件数は {data.scopedTotal} 件です。数が少ないため、
          下の順序は参考値として扱ってください。
        </p>
      )}

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {top5 && (
          <Stat
            label="上位5地点への集中"
            value={pct(top5.share)}
            sub={`${data.scopedTotal.toLocaleString("ja-JP")}件のうち`}
          />
        )}
        <Stat
          label="くり返し出た地点"
          value={`${data.repeatCells.toLocaleString("ja-JP")}`}
          sub={`全${data.cells.toLocaleString("ja-JP")}地点中・件数の${pct(data.repeatShare)}`}
        />
        <Stat
          label="集計期間"
          value={`${years}年`}
          sub={`${data.since} 以降`}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
              <th className="py-1.5 pr-3 font-medium">地点</th>
              <th className="py-1.5 pr-3 font-medium">{years}年計</th>
              <th className="py-1.5 pr-3 font-medium">直近1年</th>
              <th className="py-1.5 pr-3 font-medium">出た日数</th>
              <th className="py-1.5 pr-3 font-medium">出た年数</th>
              <th className="py-1.5 pr-3 font-medium">多い月</th>
              <th className="py-1.5 pr-3 font-medium">人身</th>
              <th className="py-1.5 pr-3 font-medium">最終</th>
              <th className="py-1.5 font-medium">地図</th>
            </tr>
          </thead>
          <tbody>
            {data.sites.map((s) => {
              // 期間がまたぐ全ての暦年に出ている = 常襲地点。単年のまとまりと区別する
              const chronic = s.years >= data.spanYears && s.total >= 3;
              return (
                <tr
                  key={s.key}
                  className="border-b border-stone-100 last:border-0"
                >
                  <td className="py-1.5 pr-3 text-stone-900">
                    <span className="font-medium">
                      {s.label || "地点名なし"}
                    </span>
                    {showCity && s.city && (
                      <span className="ml-1 text-xs text-stone-400">
                        {s.city}
                      </span>
                    )}
                    {chronic && (
                      <span className="ml-1.5 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">
                        常襲
                      </span>
                    )}
                  </td>
                  <td className="py-1.5 pr-3 font-bold tabular-nums text-stone-900">
                    {s.total}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-stone-600">
                    {s.last12}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-stone-600">
                    {s.days}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-stone-600">
                    {s.years}/{data.spanYears}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-stone-600">
                    {s.peakMonth ? `${s.peakMonth}月` : "—"}
                  </td>
                  <td
                    className={`py-1.5 pr-3 tabular-nums ${
                      s.injuries > 0 ? "font-bold text-rose-700" : "text-stone-400"
                    }`}
                  >
                    {s.injuries > 0 ? s.injuries : "—"}
                  </td>
                  <td className="py-1.5 pr-3 tabular-nums text-stone-500">
                    {s.latestDate.slice(2).replace(/-/g, "/")}
                  </td>
                  <td className="py-1.5">
                    <a
                      href={`/?lat=${s.lat}&lon=${s.lon}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-0.5 text-xs text-sky-700 hover:underline"
                      title="地図でこの地点を開く"
                    >
                      <MapPin size={12} aria-hidden />
                      開く
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
