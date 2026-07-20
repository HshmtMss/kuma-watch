"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

type MonthPoint = { month: string; count: number };
type SeasonPoint = { month: number; thisYear: number; priorAvg: number };
type PrefRow = { pref: string; d90: number; d365: number };
type Hotspot = {
  pref: string;
  city: string;
  recent: number;
  baseline: number;
  ratio: number;
};
type Bucket = { label: string; count: number };
type SeverityPoint = { month: string; injury: number; cull: number };
type IncidentRow = { date: string; pref: string; city: string; comment: string };

type Momentum = {
  d7: number;
  prev7: number;
  d30: number;
  prev30: number;
  topMovers: { pref: string; recent: number; prev: number; delta: number }[];
};
type RegimeYear = {
  year: number;
  total: number;
  ratio: number | null;
  type: "autumn" | "summer" | "unknown";
  complete: boolean;
};
type BacktestRow = {
  year: number;
  actual: number;
  predictedAllYears: number;
  predictedSameType: number;
  errorAllYears: number;
  errorSameType: number;
  type: string;
};
type Regime = {
  years: RegimeYear[];
  backtest: BacktestRow[];
  forecastOct: {
    month: number;
    predicted: number;
    basisYears: number[];
    caveat: string | null;
  } | null;
};
type CentroidPoint = { year: number; lat: number; lon: number; count: number };
type MultiBearPoint = {
  month: string;
  total: number;
  multi: number;
  share: number;
};
type YearSummary = {
  year: number;
  total: number;
  peakMonth: number;
  topPref: string;
  injuries: number;
};

type Data = {
  today: string;
  pref: string | null;
  total: number;
  monthly: MonthPoint[];
  seasonality: SeasonPoint[];
  momentum: Momentum;
  centroid: CentroidPoint[];
  multiBear: MultiBearPoint[];
  yearly: YearSummary[];
  prefectures: PrefRow[];
  hotspots: Hotspot[];
  hours: { buckets: Bucket[]; withTime: number };
  dow: Bucket[];
  severity: { series: SeverityPoint[]; recentInjuries: IncidentRow[] };
  regime: Regime;
  prefOptions: string[];
};

export default function AdminAnalytics() {
  return (
    <AdminShell active="analytics" title="分析">
      {(secret, deauth) => <Content secret={secret} deauth={deauth} />}
    </AdminShell>
  );
}

function Content({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState("");
  const [pref, setPref] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(
    async (p: string) => {
      setLoading(true);
      setError("");
      try {
        const q = p ? `?pref=${encodeURIComponent(p)}` : "";
        const res = await fetch(`/api/admin/analytics${q}`, {
          headers: { Authorization: `Bearer ${secret}` },
          cache: "no-store",
        });
        if (res.status === 401) {
          deauth();
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        setData((await res.json()) as Data);
      } catch {
        setError("読み込みに失敗しました。");
      } finally {
        setLoading(false);
      }
    },
    [secret, deauth],
  );

  useEffect(() => {
    load(pref);
  }, [load, pref]);

  if (error && !data)
    return <p className="text-sm text-rose-700">{error}</p>;
  if (!data)
    return <p className="text-sm text-stone-500">集計中…（初回は数秒）</p>;

  const scope = pref || "全国";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm text-stone-600">対象地域</label>
        <select
          value={pref}
          onChange={(e) => setPref(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          <option value="">全国</option>
          {data.prefOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {loading && <span className="text-xs text-stone-400">更新中…</span>}
        <span className="ml-auto text-xs text-stone-400">
          基準日 {data.today} / 全 {data.total.toLocaleString("ja-JP")} 件
        </span>
      </div>

      {/* I: 年の型と予測 — 出没予測の中核なので最上部に置く */}
      <Section
        title="I. 年の「型」と10月の予測"
        note="秋(9-11月)/初夏(6-7月)の比。同一年内の比なので、年ごとに変わる観測条件(ソース数)が相殺される。2.5以上と1.0以下に分かれ中間値が無く、連続的なばらつきではなく2状態の切り替わりとして扱える。堅果類の豊凶が背景にある可能性。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">年</th>
                <th className="py-2 pr-3 text-right">総件数</th>
                <th className="py-2 pr-3 text-right">秋/初夏</th>
                <th className="py-2">型</th>
              </tr>
            </thead>
            <tbody>
              {data.regime.years.map((y) => (
                <tr key={y.year} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 tabular-nums">{y.year}</td>
                  <td className="py-1.5 pr-3 text-right tabular-nums">
                    {y.total.toLocaleString()}
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums">
                    {y.ratio === null ? "—" : y.ratio.toFixed(2)}
                  </td>
                  <td className="py-1.5">
                    {y.type === "autumn" ? (
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                        秋型
                      </span>
                    ) : y.type === "summer" ? (
                      <span className="rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800">
                        夏型
                      </span>
                    ) : (
                      <span className="text-xs text-stone-400">未確定（年途中）</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.regime.forecastOct && (
          <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-3">
            <div className="text-xs font-semibold text-stone-500">今年の10月の予測</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-stone-900">
              {data.regime.forecastOct.predicted.toLocaleString()} 件
            </div>
            {data.regime.forecastOct.caveat && (
              <p className="mt-1 text-xs leading-relaxed text-amber-800">
                ⚠ {data.regime.forecastOct.caveat}
              </p>
            )}
            <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
              型は年内の出方からは判別できません（初夏と秋の絶対件数の相関は +0.884 で、
              「初夏が少ない年は秋が荒れる」は成立しない）。事前に型を当てるには
              堅果類の豊凶調査のような外部の先行指標が必要です。
            </p>
          </div>
        )}
      </Section>

      {/* I-2: 予測の答え合わせ */}
      <Section
        title="I-2. 予測の答え合わせ（10月・バックテスト）"
        note="各年の1〜8月実績から10月を予測し、実績と比べたもの。予測を出す以上、当たったかどうかも併記する。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">年</th>
                <th className="py-2 pr-3 text-right">実績</th>
                <th className="py-2 pr-3 text-right">全年平均</th>
                <th className="py-2 pr-3 text-right">同じ型のみ</th>
              </tr>
            </thead>
            <tbody>
              {data.regime.backtest.slice(-8).map((b) => (
                <tr key={b.year} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 tabular-nums">{b.year}</td>
                  <td className="py-1.5 pr-3 text-right font-semibold tabular-nums">
                    {b.actual.toLocaleString()}
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-500">
                    {b.predictedAllYears.toLocaleString()}
                    <span className="ml-1 text-[11px]">
                      ({(b.errorAllYears * 100).toFixed(0)}%)
                    </span>
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-900">
                    {b.predictedSameType.toLocaleString()}
                    <span className="ml-1 text-[11px]">
                      ({(b.errorSameType * 100).toFixed(0)}%)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.regime.backtest.length > 0 && (
          <p className="mt-2 text-xs text-stone-600">
            平均誤差 — 全年平均{" "}
            <strong>
              {(
                (data.regime.backtest.reduce((a, b) => a + b.errorAllYears, 0) /
                  data.regime.backtest.length) *
                100
              ).toFixed(0)}
              %
            </strong>{" "}
            / 同じ型のみ{" "}
            <strong className="text-stone-900">
              {(
                (data.regime.backtest.reduce((a, b) => a + b.errorSameType, 0) /
                  data.regime.backtest.length) *
                100
              ).toFixed(0)}
              %
            </strong>
            。過去数年を平均する方式は性質の違う2つの型を混ぜるため原理的に外します。
          </p>
        )}
      </Section>

      {/* E: 直近の勢い */}
      <Section
        title="E. 直近の勢い"
        note={`${scope}・件数の前週比・前月比。急な立ち上がりを早く掴む。※直近数日は報道/公式の取り込み途中で少なめに出ることがあります。`}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <MomentumStat
            label="直近7日"
            cur={data.momentum.d7}
            prev={data.momentum.prev7}
            prevLabel="前7日"
          />
          <MomentumStat
            label="直近30日"
            cur={data.momentum.d30}
            prev={data.momentum.prev30}
            prevLabel="前30日"
          />
        </div>
        {data.momentum.topMovers.length > 0 && (
          <div className="mt-3">
            <p className="mb-1 text-xs text-stone-500">
              増加が目立つ都道府県（30日 vs 前30日）
            </p>
            <Table
              head={["都道府県", "直近30日", "前30日", "増減"]}
              rows={data.momentum.topMovers.map((m) => [
                m.pref,
                String(m.recent),
                String(m.prev),
                `+${m.delta}`,
              ])}
              emphasizeCol={3}
            />
          </div>
        )}
      </Section>

      {/* A: 時系列トレンド */}
      <Section
        title="A. 時系列トレンド"
        note={`${scope}・月次件数（直近36か月）。出没日ベース。`}
      >
        <LineChart
          labels={data.monthly.map((m) => m.month)}
          series={[
            {
              name: "月次件数",
              color: "#d97706",
              values: data.monthly.map((m) => m.count),
            },
          ]}
          labelEvery={6}
        />
      </Section>

      <Section
        title="季節性（今年 vs 例年）"
        note={`${scope}・月別に今年と過去5年平均を比較。「今年は例年より多いか/早いか」。`}
      >
        <LineChart
          labels={data.seasonality.map((s) => `${s.month}月`)}
          series={[
            {
              name: "今年",
              color: "#d97706",
              values: data.seasonality.map((s) => s.thisYear),
            },
            {
              name: "例年平均",
              color: "#a8a29e",
              dashed: true,
              values: data.seasonality.map((s) => s.priorAvg),
            },
          ]}
          labelEvery={1}
        />
      </Section>

      {/* G: 親子連れ率 */}
      <Section
        title="G. 親子連れ・群れの割合"
        note={`${scope}・月次で複数頭(2頭以上)の出没が占める割合。子育て・群れのシグナル。`}
      >
        <LineChart
          labels={data.multiBear.map((m) => m.month)}
          series={[
            {
              name: "複数頭の割合(%)",
              color: "#7c3aed",
              values: data.multiBear.map((m) => m.share),
            },
          ]}
          labelEvery={4}
        />
      </Section>

      {/* F: 重心移動 */}
      <Section
        title="F. 分布の重心移動（年別）"
        note={`${scope}・年ごとの出没の重心(緯度経度の平均)。緯度が下がる=南下、経度の変化=東西の移動。`}
      >
        {data.centroid.length < 2 ? (
          <Empty>データ不足</Empty>
        ) : (
          <Table
            head={["年", "重心 緯度", "重心 経度", "件数"]}
            rows={data.centroid.map((c) => [
              String(c.year),
              c.lat.toFixed(3),
              c.lon.toFixed(3),
              c.count.toLocaleString("ja-JP"),
            ])}
          />
        )}
      </Section>

      {/* H: 年次サマリー */}
      <Section
        title="H. 年次サマリー"
        note={`${scope}・年別の総件数・ピーク月・最多地域・人身被害数。`}
      >
        <Table
          head={["年", "総件数", "ピーク月", "最多地域", "人身被害"]}
          rows={data.yearly.map((y) => [
            String(y.year),
            y.total.toLocaleString("ja-JP"),
            `${y.peakMonth}月`,
            y.topPref,
            String(y.injuries),
          ])}
        />
      </Section>

      {/* C: 地域傾向・急増検知（全国固定） */}
      <Section
        title="C. 急増地域（全国）"
        note="直近30日の市町村別件数が、過去1年の同期間あたり平均を大きく超えるもの。早期警戒用。※データ源の追加でも急増に見える場合があるため、recent と平均の両方で判断。"
      >
        {data.hotspots.length === 0 ? (
          <Empty>該当なし</Empty>
        ) : (
          <Table
            head={["市町村", "直近30日", "平均/30日", "倍率"]}
            rows={data.hotspots.map((h) => [
              `${h.pref} ${h.city}`,
              String(h.recent),
              String(h.baseline),
              `×${h.ratio}`,
            ])}
            emphasizeCol={3}
          />
        )}
      </Section>

      <Section
        title="都道府県別（全国）"
        note="直近90日 / 直近365日の件数（多い順・上位20）。"
      >
        <Table
          head={["都道府県", "直近90日", "直近365日"]}
          rows={data.prefectures.map((p) => [
            p.pref,
            p.d90.toLocaleString("ja-JP"),
            p.d365.toLocaleString("ja-JP"),
          ])}
        />
      </Section>

      {/* B: 時間帯・曜日 */}
      <Section
        title="B. 出没の時間帯"
        note={`${scope}・時刻が判明した ${data.hours.withTime.toLocaleString("ja-JP")} 件ベース（2時間刻み）。全件ではない点に注意。`}
      >
        <Bars data={data.hours.buckets} color="#0369a1" />
      </Section>

      <Section title="曜日別" note={`${scope}・全記録の曜日分布。`}>
        <Bars data={data.dow} color="#0369a1" />
      </Section>

      {/* D: 重大事案 */}
      <Section
        title="D. 重大事案（人身被害・駆除/捕獲）"
        note={`${scope}・月次件数（直近24か月）。コメントのキーワード抽出のため精度は目安。`}
      >
        <LineChart
          labels={data.severity.series.map((s) => s.month)}
          series={[
            {
              name: "人身被害",
              color: "#e11d48",
              values: data.severity.series.map((s) => s.injury),
            },
            {
              name: "駆除・捕獲",
              color: "#78716c",
              values: data.severity.series.map((s) => s.cull),
            },
          ]}
          labelEvery={4}
        />
      </Section>

      <Section title="直近の人身被害（推定）" note="コメントから人身被害らしき事案を新しい順に抽出。">
        {data.severity.recentInjuries.length === 0 ? (
          <Empty>該当なし</Empty>
        ) : (
          <Table
            head={["日付", "場所", "内容"]}
            rows={data.severity.recentInjuries.map((r) => [
              r.date,
              `${r.pref} ${r.city}`,
              r.comment,
            ])}
          />
        )}
      </Section>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-bold text-stone-900">{title}</h2>
      {note && <p className="mb-2 mt-0.5 text-xs text-stone-500">{note}</p>}
      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="py-6 text-center text-sm text-stone-400">{children}</p>;
}

function MomentumStat({
  label,
  cur,
  prev,
  prevLabel,
}: {
  label: string;
  cur: number;
  prev: number;
  prevLabel: string;
}) {
  const delta = cur - prev;
  const pct = prev > 0 ? Math.round((delta / prev) * 100) : null;
  const up = delta > 0;
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
      <div className="text-[11px] text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className="text-2xl font-bold tabular-nums text-stone-900">
          {cur.toLocaleString("ja-JP")}
        </span>
        <span className="text-xs text-stone-500">件</span>
      </div>
      <div
        className={`mt-1 text-xs font-medium tabular-nums ${
          delta === 0 ? "text-stone-400" : up ? "text-rose-600" : "text-emerald-600"
        }`}
      >
        {prevLabel} {prev.toLocaleString("ja-JP")} 件 → {up ? "+" : ""}
        {delta.toLocaleString("ja-JP")}
        {pct !== null ? `（${up ? "+" : ""}${pct}%）` : ""}
      </div>
    </div>
  );
}

// ---- 折れ線（複数系列・凡例つき） ----
function LineChart({
  labels,
  series,
  labelEvery,
}: {
  labels: string[];
  series: { name: string; color: string; values: number[]; dashed?: boolean }[];
  labelEvery: number;
}) {
  const w = 640;
  const h = 200;
  const padL = 34;
  const padR = 8;
  const padT = 10;
  const padB = 22;
  const n = labels.length;
  const allVals = series.flatMap((s) => s.values);
  const max = Math.max(1, ...allVals);
  const x = (i: number) =>
    padL + (n <= 1 ? 0 : (i / (n - 1)) * (w - padL - padR));
  const y = (v: number) => padT + (1 - v / max) * (h - padT - padB);
  const ticks = [0, max / 2, max].map((v) => Math.round(v));
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full min-w-[520px]"
        role="img"
      >
        {ticks.map((t, i) => (
          <g key={i}>
            <line
              x1={padL}
              x2={w - padR}
              y1={y(t)}
              y2={y(t)}
              stroke="#f0eeec"
            />
            <text x={0} y={y(t) + 3} fontSize={9} fill="#a8a29e">
              {t.toLocaleString("ja-JP")}
            </text>
          </g>
        ))}
        {labels.map((lb, i) =>
          i % labelEvery === 0 || i === n - 1 ? (
            <text
              key={i}
              x={x(i)}
              y={h - 6}
              fontSize={9}
              fill="#a8a29e"
              textAnchor="middle"
            >
              {lb}
            </text>
          ) : null,
        )}
        {series.map((s) => {
          const d = s.values
            .map(
              (v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`,
            )
            .join(" ");
          return (
            <path
              key={s.name}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? "4 3" : undefined}
            />
          );
        })}
      </svg>
      {series.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-3">
          {series.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5 text-xs text-stone-600">
              <span
                className="inline-block h-2 w-4 rounded-full"
                style={{ background: s.color }}
              />
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- 縦棒 ----
function Bars({ data, color }: { data: Bucket[]; color: string }) {
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div>
      {/* 棒の行: 列を親の高さ(160px)いっぱいに伸ばし、下揃えで積む。
          棒は列の高さに対する % で伸ばす(最大85%=上のラベル用に余白を残す)。 */}
      <div className="flex gap-1" style={{ height: 160 }}>
        {data.map((d) => (
          <div
            key={d.label}
            className="flex h-full flex-1 flex-col items-center justify-end"
          >
            <span className="mb-1 text-[9px] tabular-nums text-stone-400">
              {d.count.toLocaleString("ja-JP")}
            </span>
            <div
              className="w-full rounded-t"
              style={{
                height: `${Math.max(
                  (d.count / max) * 85,
                  d.count > 0 ? 2 : 0,
                )}%`,
                background: color,
              }}
            />
          </div>
        ))}
      </div>
      {/* 目盛りラベルの行(棒と同じ flex-1 で列に揃える) */}
      <div className="mt-1 flex gap-1">
        {data.map((d) => (
          <div
            key={d.label}
            className="flex-1 text-center text-[9px] text-stone-500"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- 表 ----
function Table({
  head,
  rows,
  emphasizeCol,
}: {
  head: string[];
  rows: string[][];
  emphasizeCol?: number;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
            {head.map((h, i) => (
              <th key={i} className="py-1.5 pr-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-stone-100 last:border-0">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`py-1.5 pr-3 ${
                    j === 0 ? "text-stone-900" : "tabular-nums text-stone-600"
                  } ${emphasizeCol === j ? "font-bold text-rose-700" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
