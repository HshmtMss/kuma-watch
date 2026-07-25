import type { SeasonFrame } from "@/components/admin/AnalyticsSeasonMap";
import type { SurgeBoard } from "@/components/admin/AnalyticsSurgeBoard";
import type { MunicipalityBoard } from "@/components/admin/AnalyticsMuniBoard";
import type { MuniProfile } from "@/components/admin/AnalyticsMuniProfile";

/**
 * 要約レポート（印刷=PDF用）。地図は非同期で印刷に載りにくいので使わず、
 * 数値と色バーだけで1〜2枚に収める。画面では隠れており、要約印刷時のみ出る
 * （globals.css の .analytics-report / .pm-summary で制御）。
 */
export default function AnalyticsReport({
  scope,
  today,
  total,
  surge,
  spatialSeasonal,
  muni,
  muniProfile,
}: {
  scope: string;
  today: string;
  total: number;
  surge: SurgeBoard | null;
  spatialSeasonal: SeasonFrame[];
  muni: MunicipalityBoard | null;
  muniProfile: MuniProfile | null;
}) {
  const n = surge?.national;
  const peak = spatialSeasonal.reduce(
    (best, f) => (f.total > best.total ? f : best),
    spatialSeasonal[0] ?? { month: 0, total: 0, cells: [] },
  );
  const dirWord =
    n == null || n.ratio == null
      ? "—"
      : n.ratio >= 1.15
        ? "増加"
        : n.ratio <= 0.85
          ? "減少"
          : "横ばい";
  const risingNames = surge?.rising.slice(0, 6).map((r) => r.pref) ?? [];

  return (
    <div className="analytics-report text-stone-900 print:text-[10.5pt]">
      {/* ヘッダー */}
      <div className="mb-4 border-b-2 border-stone-800 pb-2">
        <div className="text-[9pt] font-semibold uppercase tracking-widest text-amber-700">
          KUMA-WATCH 分析レポート
        </div>
        <h1 className="mt-0.5 text-[18pt] font-bold leading-tight">
          クマ出没 分析サマリー — {scope}
        </h1>
        <div className="mt-1 flex flex-wrap gap-x-4 text-[9pt] text-stone-600">
          <span>基準日：{today}</span>
          <span>収録：全国 {total.toLocaleString()} 件</span>
          <span>出典：kuma-watch.jp（クマ出没マップ）</span>
        </div>
      </div>

      {/* 自治体カルテ（市町村選択時） */}
      {muniProfile && muniProfile.total12mo > 0 && (
        <section className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3">
          <div className="text-[8pt] font-bold uppercase tracking-wide text-amber-700">
            自治体カルテ
          </div>
          <div className="mt-1 grid grid-cols-4 gap-2 text-center">
            <ReportStat
              label="県内順位"
              value={`${muniProfile.rank}位`}
              sub={`${muniProfile.muniCount}市町村中`}
            />
            <ReportStat
              label="県平均比"
              value={muniProfile.vsAvg == null ? "—" : `×${muniProfile.vsAvg}`}
              sub={`平均 ${muniProfile.prefAvg12mo}件`}
            />
            <ReportStat
              label="直近1年"
              value={`${muniProfile.total12mo.toLocaleString()}件`}
              sub={`県内${muniProfile.share}%`}
            />
            <ReportStat
              label="直近30日"
              value={`${muniProfile.recent}件`}
              sub={`前30日 ${muniProfile.prev}`}
            />
          </div>
        </section>
      )}

      {/* 要約の一言 */}
      <section className="mb-4">
        <div className="text-[8pt] font-bold uppercase tracking-wide text-stone-500">
          サマリー
        </div>
        <p className="mt-1 leading-relaxed">
          {scope}の全国傾向は<strong>{dirWord}</strong>
          {n && n.ratio != null && (
            <>（直近30日 {n.recent.toLocaleString()}件・前月比 {n.ratio}）</>
          )}
          。
          {risingNames.length > 0 ? (
            <>
              いま増えている地域は <strong>{risingNames.join("・")}</strong>
              {(surge?.rising.length ?? 0) > risingNames.length
                ? ` ほか${(surge?.rising.length ?? 0) - risingNames.length}県`
                : ""}
              。
            </>
          ) : (
            <>目立った急増地域はなし。</>
          )}
          {peak.month > 0 && <> 出没の年間ピークは<strong>{peak.month}月</strong>。</>}
        </p>
      </section>

      {/* キー指標 */}
      {n && (
        <section className="mb-4">
          <div className="text-[8pt] font-bold uppercase tracking-wide text-stone-500">
            キー指標
          </div>
          <table className="mt-1 w-full border-collapse text-[9.5pt]">
            <tbody>
              <ReportRow
                k="直近30日 / 前30日"
                v={`${n.recent.toLocaleString()} / ${n.prev.toLocaleString()} 件（比 ${n.ratio ?? "—"}）`}
              />
              <ReportRow
                k="直近7日 / 前7日"
                v={`${n.recent7.toLocaleString()} / ${n.prev7.toLocaleString()} 件`}
              />
              <ReportRow k="年間ピーク月" v={`${peak.month}月`} />
              <ReportRow k="収録データ" v={`全国 ${total.toLocaleString()} 件`} />
            </tbody>
          </table>
        </section>
      )}

      {/* 増えている地域 */}
      {surge && surge.rising.length > 0 && (
        <section className="mb-4">
          <div className="text-[8pt] font-bold uppercase tracking-wide text-stone-500">
            増えている地域（直近30日 vs 直前30日）
          </div>
          <table className="mt-1 w-full border-collapse text-[9.5pt]">
            <thead>
              <tr className="border-b border-stone-300 text-left text-[8pt] text-stone-500">
                <th className="py-0.5">地域</th>
                <th className="py-0.5 text-right">前30日</th>
                <th className="py-0.5 text-right">直近30日</th>
                <th className="py-0.5 text-right">倍率</th>
                <th className="py-0.5 text-center">判定</th>
              </tr>
            </thead>
            <tbody>
              {surge.rising.slice(0, 10).map((r) => (
                <tr key={r.pref} className="border-b border-stone-100">
                  <td className="py-0.5 font-medium">{r.pref}</td>
                  <td className="py-0.5 text-right tabular-nums">{r.prev}</td>
                  <td className="py-0.5 text-right font-bold tabular-nums">
                    {r.recent}
                  </td>
                  <td className="py-0.5 text-right tabular-nums">
                    {r.ratio == null ? "新規" : `×${r.ratio}`}
                  </td>
                  <td className="py-0.5 text-center">
                    {r.level === "surge" ? "急増" : "増加"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* 県内市町村（県選択時） */}
      {muni && muni.rows.length > 0 && (
        <section className="mb-4 break-inside-avoid">
          <div className="text-[8pt] font-bold uppercase tracking-wide text-stone-500">
            {muni.pref}の市町村（直近1年の多い順・上位10）
          </div>
          <table className="mt-1 w-full border-collapse text-[9.5pt]">
            <thead>
              <tr className="border-b border-stone-300 text-left text-[8pt] text-stone-500">
                <th className="py-0.5">市町村</th>
                <th className="py-0.5 text-right">年間</th>
                <th className="py-0.5 text-right">県内%</th>
                <th className="py-0.5 text-right">直近30日</th>
                <th className="py-0.5 text-center">動き</th>
              </tr>
            </thead>
            <tbody>
              {muni.rows.slice(0, 10).map((r) => (
                <tr key={r.muni} className="border-b border-stone-100">
                  <td className="py-0.5 font-medium">{r.muni}</td>
                  <td className="py-0.5 text-right tabular-nums">
                    {r.total12mo}
                  </td>
                  <td className="py-0.5 text-right tabular-nums">{r.share}%</td>
                  <td className="py-0.5 text-right tabular-nums">
                    {r.prev}▸{r.recent}
                  </td>
                  <td className="py-0.5 text-center">
                    {r.level === "surge"
                      ? "急増"
                      : r.level === "rising"
                        ? "増加"
                        : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* 注記 */}
      <section className="mt-5 border-t border-stone-300 pt-2 text-[8pt] leading-relaxed text-stone-500">
        <div className="font-bold">データについて</div>
        急増判定は直近30日と直前30日の同一情報源どうしの短期比較（季節の平年比ではない）。
        件数は情報源や取り込みタイミングに影響される。市町村の県内シェアは地名の丸めで
        高く出る場合がある。詳細な地図・時系列・時間帯分析は管理画面（画面表示）を参照。
        <div className="mt-1 text-stone-400">
          生成：kuma-watch 分析ダッシュボード（基準日 {today}）
        </div>
      </section>
    </div>
  );
}

function ReportStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div>
      <div className="text-[7.5pt] text-stone-500">{label}</div>
      <div className="text-[12pt] font-bold leading-tight">{value}</div>
      <div className="text-[7.5pt] text-stone-400">{sub}</div>
    </div>
  );
}

function ReportRow({ k, v }: { k: string; v: string }) {
  return (
    <tr className="border-b border-stone-100">
      <td className="py-0.5 pr-3 text-stone-500">{k}</td>
      <td className="py-0.5 text-right font-medium tabular-nums">{v}</td>
    </tr>
  );
}
