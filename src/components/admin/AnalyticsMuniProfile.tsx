export type SurgeLevel = "surge" | "rising" | "steady" | "quiet";
export type MuniProfile = {
  pref: string;
  muni: string;
  total12mo: number;
  share: number;
  rank: number;
  muniCount: number;
  prefAvg12mo: number;
  vsAvg: number | null;
  recent: number;
  prev: number;
  ratio: number | null;
  level: SurgeLevel;
  recentLabel: string;
  prevLabel: string;
};

const LEVEL: Record<SurgeLevel, { word: string; text: string }> = {
  surge: { word: "急増", text: "text-red-700" },
  rising: { word: "増加", text: "text-orange-700" },
  steady: { word: "横ばい", text: "text-stone-600" },
  quiet: { word: "減少", text: "text-sky-700" },
};

function Tile({
  label,
  value,
  unit,
  sub,
  valueClass = "text-stone-900",
}: {
  label: string;
  value: string;
  unit?: string;
  sub?: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-xl bg-white/70 px-3 py-2.5">
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className={`text-xl font-extrabold tabular-nums ${valueClass}`}>
          {value}
        </span>
        {unit && (
          <span className="text-xs font-bold text-stone-400">{unit}</span>
        )}
      </div>
      {sub && (
        <div className="mt-0.5 truncate text-[11px] text-stone-400">{sub}</div>
      )}
    </div>
  );
}

export default function AnalyticsMuniProfile({
  data,
}: {
  data: MuniProfile;
}) {
  const lv = LEVEL[data.level];
  const none = data.total12mo === 0;

  return (
    <div className="not-prose rounded-2xl border border-amber-200 bg-amber-50/60 p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-lg font-extrabold text-stone-900">
          {data.pref} {data.muni}
        </span>
        <span className="text-xs font-bold text-amber-700">のカルテ</span>
        <span className="ml-auto text-[11px] text-stone-400">
          直近1年・県内比較
        </span>
      </div>

      {none ? (
        <p className="text-sm text-stone-600">
          直近1年の出没記録はありません（{data.pref}内{data.muniCount}市町村に出没あり）。
          下の各分析は全期間の記録があれば表示されます。
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Tile
              label="県内順位"
              value={`${data.rank}`}
              unit="位"
              sub={`${data.muniCount}市町村中`}
              valueClass={
                data.rank <= 3 ? "text-red-700" : "text-stone-900"
              }
            />
            <Tile
              label="県平均との比"
              value={data.vsAvg == null ? "—" : `×${data.vsAvg}`}
              sub={`県平均 ${data.prefAvg12mo}件`}
              valueClass={
                data.vsAvg != null && data.vsAvg >= 1.5
                  ? "text-orange-700"
                  : "text-stone-900"
              }
            />
            <Tile
              label="直近1年の出没"
              value={data.total12mo.toLocaleString()}
              unit="件"
              sub={`県内シェア ${data.share}%`}
            />
            <Tile
              label="直近30日の動き"
              value={lv.word}
              valueClass={lv.text}
              sub={`${data.prev} ▸ ${data.recent}（前30日比）`}
            />
          </div>

          <p className="mt-3 border-t border-amber-200/70 pt-3 text-sm leading-relaxed text-stone-700">
            <span className="font-bold">{data.muni}</span>は{data.pref}内で{" "}
            <span className="font-bold text-stone-900">{data.rank}位</span>
            {data.vsAvg != null && (
              <>
                （県平均の
                <span className="font-bold text-orange-700">
                  {data.vsAvg}倍
                </span>
                ）
              </>
            )}
            。直近は<span className={`font-bold ${lv.text}`}>{lv.word}</span>
            （直近30日 {data.recent}件・前30日 {data.prev}件）。
            {data.share >= 50 && (
              <span className="text-stone-400">
                {" "}
                県内シェアが高い自治体は、通報の集約先や地名の丸めで実態より高く出る場合があります。
              </span>
            )}
          </p>

          <p className="mt-2 text-[11px] text-stone-400">
            以下の各分析（時系列・時間帯・地点・再発 など）はこの市町村に絞って表示しています。
            母数が小さい市町村では月ごとの増減が大きく振れる点に注意。
          </p>
        </>
      )}
    </div>
  );
}
