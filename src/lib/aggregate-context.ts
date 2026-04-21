import {
  findMunicipalAggregates,
  findPrefectureAggregate,
  type MunicipalAggregate,
} from "@/data/municipal-aggregates";

export type AggregateContext = {
  prefCode: string;
  prefName: string;
  prefAnnualRecent: Array<{ fiscalYear: number; sighting: number }>;
  muniName?: string;
  muniTier?: string;
  muniBand?: string;
  muniAnnualRecent: Array<{ fiscalYear: number; sighting: number }>;
  latestMonthly?: Array<{ fiscalYear: number; month: number; sighting: number }>;
  sources: Array<{ url: string; label: string }>;
  notes?: string;
};

/**
 * 集計データを LLM context 向けに整形する。
 * muniName が与えられれば市町村 tier / band を含める。
 */
export function buildAggregateContext(
  prefCode: string,
  muniName?: string,
): AggregateContext | null {
  const p = findPrefectureAggregate(prefCode);
  if (!p) return null;

  const prefAnnual = p.annual
    .filter((a) => !a.muniName && typeof a.counts.sighting === "number")
    .sort((a, b) => b.period.fiscalYear - a.period.fiscalYear)
    .slice(0, 5)
    .map((a) => ({ fiscalYear: a.period.fiscalYear, sighting: a.counts.sighting! }));

  let muniTier: string | undefined;
  let muniBand: string | undefined;
  let muniAnnual: Array<{ fiscalYear: number; sighting: number }> = [];
  if (muniName) {
    const munis = p.annual.filter((a) => a.muniName === muniName);
    const latestTier = munis.find((a) => a.tier);
    if (latestTier) {
      muniTier = latestTier.tier;
      muniBand = latestTier.band;
    }
    muniAnnual = munis
      .filter((a) => typeof a.counts.sighting === "number")
      .sort((a, b) => b.period.fiscalYear - a.period.fiscalYear)
      .slice(0, 5)
      .map((a) => ({ fiscalYear: a.period.fiscalYear, sighting: a.counts.sighting! }));
  }

  const latestYear = prefAnnual[0]?.fiscalYear;
  const latestMonthly = latestYear
    ? (p.monthly ?? [])
        .filter(
          (a) =>
            !a.muniName &&
            a.period.fiscalYear === latestYear &&
            typeof a.counts.sighting === "number" &&
            typeof a.period.month === "number",
        )
        .map((a) => ({
          fiscalYear: a.period.fiscalYear,
          month: a.period.month!,
          sighting: a.counts.sighting!,
        }))
    : undefined;

  return {
    prefCode: p.prefCode,
    prefName: p.prefName,
    prefAnnualRecent: prefAnnual,
    muniName,
    muniTier,
    muniBand,
    muniAnnualRecent: muniAnnual,
    latestMonthly,
    sources: p.sources.map(({ url, label }) => ({ url, label })),
    notes: p.notes,
  };
}

/** LLM プロンプト用テキスト整形 */
export function formatAggregateForPrompt(ctx: AggregateContext): string {
  const lines: string[] = [];
  lines.push(`【${ctx.prefName} 公式集計（点座標非公開のため件数のみ）】`);
  if (ctx.prefAnnualRecent.length > 0) {
    const latest = ctx.prefAnnualRecent[0];
    lines.push(`- 直近年度 (令和${latest.fiscalYear - 2018}年度/${latest.fiscalYear}): 県全体 ${latest.sighting.toLocaleString()} 件`);
    const historical = ctx.prefAnnualRecent.slice(1).map(
      (a) => `令和${a.fiscalYear - 2018}(${a.fiscalYear}): ${a.sighting.toLocaleString()}`,
    );
    if (historical.length > 0) lines.push(`- 過去年次: ${historical.join(" / ")}`);
  }
  if (ctx.latestMonthly && ctx.latestMonthly.length > 0) {
    const sorted = [...ctx.latestMonthly].sort((a, b) => b.sighting - a.sighting);
    const peak = sorted[0];
    lines.push(`- 月次ピーク: ${peak.month}月 ${peak.sighting.toLocaleString()}件`);
  }
  if (ctx.muniName) {
    if (ctx.muniBand || ctx.muniTier) {
      lines.push(`- ${ctx.muniName}: 直近年度の出没帯 ${ctx.muniBand ?? ctx.muniTier}`);
    }
    if (ctx.muniAnnualRecent.length > 0) {
      const s = ctx.muniAnnualRecent
        .map((a) => `令和${a.fiscalYear - 2018}(${a.fiscalYear}): ${a.sighting.toLocaleString()}`)
        .join(" / ");
      lines.push(`- ${ctx.muniName} 年次: ${s}`);
    }
  }
  if (ctx.notes) lines.push(`- 注記: ${ctx.notes}`);
  if (ctx.sources.length > 0) {
    lines.push(`- 出典: ${ctx.sources.map((s) => s.label).join(" / ")}`);
  }
  return lines.join("\n");
}
