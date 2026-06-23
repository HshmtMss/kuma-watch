import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getCachedSightings } from "@/lib/sightings-cache";
import { getMuniOfficialLink } from "@/data/muni-official-links";
import { jstToday } from "@/lib/jst-date";
import { haversineKm } from "@/lib/nearby-sightings";
import {
  buildSeasonalModel,
  forecastArea,
  BAND_LABEL,
} from "@/lib/forecast";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * B2B コンソールの「月次レポート」プレビュー（議会・予算・住民説明用）。
 *
 * 公開ページではなく、URL を共有して見せる営業用の非公開プレビュー:
 * - robots noindex / sitemap 非掲載 / どこからもリンクしない
 * - 印刷に最適化（ブラウザの「PDFに保存」でそのまま配布資料になる）
 *
 * 正式な有料機能化時は REPORT_ENABLED フラグ + 認証 + 共同ブランドを付ける。
 */

const NEAR_RADIUS_KM = 10;
const SITE_URL = "https://kuma-watch.jp";

type Props = { params: Promise<{ slug: string }> };

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = decode(slug);
  return {
    title: `${name} クマ出没 月次レポート（プレビュー）`,
    robots: { index: false, follow: false },
    alternates: { canonical: `${SITE_URL}/report/spot/${encodeURIComponent(name)}` },
  };
}

function ym(d: string): string {
  return d.slice(0, 7);
}

function monthLabel(yyyymm: string): string {
  const [y, m] = yyyymm.split("-");
  return `${y}年${Number(m)}月`;
}

export default async function ReportPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const landmark = JAPAN_LANDMARKS.find((l) => l.slug === slug);
  if (!landmark) notFound();

  const sightings = await getCachedSightings();
  const today = jstToday();

  // 周辺 10km の日付（全期間）と直近事案を集める。
  const areaDates: string[] = [];
  const allDates: string[] = [];
  type Inc = { date: string; cityName: string; sectionName: string; comment: string };
  const incidents: Inc[] = [];
  for (const s of sightings) {
    if (!s.date || s.date > today) continue;
    allDates.push(s.date);
    if (typeof s.lat !== "number" || typeof s.lon !== "number") continue;
    if (haversineKm(landmark.lat, landmark.lon, s.lat, s.lon) > NEAR_RADIUS_KM) continue;
    areaDates.push(s.date);
    incidents.push({
      date: s.date,
      cityName: s.cityName ?? "",
      sectionName: s.sectionName ?? "",
      comment: s.comment ?? "",
    });
  }
  incidents.sort((a, b) => (a.date < b.date ? 1 : -1));

  // 直近 12 ヶ月の月別件数。
  const byMonth = new Map<string, number>();
  const months: string[] = [];
  {
    const base = new Date(`${today}T00:00:00Z`);
    for (let i = 11; i >= 0; i--) {
      const d = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() - i, 1));
      months.push(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`);
    }
  }
  const monthSet = new Set(months);
  for (const d of areaDates) {
    const k = ym(d);
    if (monthSet.has(k)) byMonth.set(k, (byMonth.get(k) ?? 0) + 1);
  }
  const maxMonth = Math.max(1, ...months.map((m) => byMonth.get(m) ?? 0));

  const cutoff = (days: number) => {
    const d = new Date(`${today}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() - days);
    return d.toISOString().slice(0, 10);
  };
  const c90 = areaDates.filter((d) => d >= cutoff(90)).length;
  const c365 = areaDates.filter((d) => d >= cutoff(365)).length;
  const latest = incidents[0]?.date ?? null;

  const forecast = forecastArea(areaDates, buildSeasonalModel(allDates), today);
  const official = landmark.muniName
    ? getMuniOfficialLink(landmark.prefName, landmark.muniName)
    : null;

  const issued = today.replace(/-/g, "/");

  return (
    <main className="mx-auto max-w-[800px] bg-white p-8 text-stone-900 print:p-0">
      <style>{`@media print { @page { margin: 16mm; } .no-print { display: none !important; } }`}</style>

      {/* 非公開プレビューの注記（印刷時は消える） */}
      <div className="no-print mb-4 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
        これは B2B コンソールの月次レポート（プレビュー）です。共有用・非公開（検索除外）。
        ブラウザの「印刷 → PDFに保存」で配布資料になります。
      </div>

      <header className="border-b-2 border-stone-800 pb-3">
        <div className="flex items-baseline justify-between">
          <h1 className="m-0 text-2xl font-bold">
            {landmark.name} 周辺 クマ出没 月次レポート
          </h1>
          <span className="text-xs text-stone-500">発行 {issued}</span>
        </div>
        <p className="mt-1 text-sm text-stone-600">
          {landmark.prefName}
          {landmark.muniName ? ` ${landmark.muniName}` : ""} ／ 周辺 {NEAR_RADIUS_KM}km 圏
          ・獣医師監修（獣医工学ラボ）
        </p>
      </header>

      {/* サマリー */}
      <section className="mt-5">
        <h2 className="text-base font-bold">月次サマリー</h2>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="rounded border border-stone-200 p-3 text-center">
            <div className="text-xs text-stone-500">直近90日</div>
            <div className="text-2xl font-bold">{c90}</div>
            <div className="text-[10px] text-stone-400">件</div>
          </div>
          <div className="rounded border border-stone-200 p-3 text-center">
            <div className="text-xs text-stone-500">直近1年</div>
            <div className="text-2xl font-bold">{c365}</div>
            <div className="text-[10px] text-stone-400">件</div>
          </div>
          <div className="rounded border border-stone-200 p-3 text-center">
            <div className="text-xs text-stone-500">最新の出没</div>
            <div className="mt-1 text-sm font-semibold">{latest ?? "—"}</div>
          </div>
        </div>
      </section>

      {/* 月別推移 */}
      <section className="mt-5">
        <h2 className="text-base font-bold">月別 出没件数（直近12ヶ月）</h2>
        <table className="mt-2 w-full border-collapse text-sm">
          <tbody>
            {months.map((m) => {
              const n = byMonth.get(m) ?? 0;
              return (
                <tr key={m} className="border-b border-stone-100">
                  <td className="w-28 py-1 pr-2 text-stone-600">{monthLabel(m)}</td>
                  <td className="py-1">
                    <span
                      className="inline-block h-3 rounded-sm bg-amber-500 align-middle"
                      style={{ width: `${Math.round((n / maxMonth) * 100)}%`, minWidth: n > 0 ? 4 : 0 }}
                    />
                  </td>
                  <td className="w-12 py-1 pl-2 text-right tabular-nums font-semibold">{n}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* 今後の見通し（予測） */}
      {forecast && (
        <section className="mt-5">
          <h2 className="text-base font-bold">今後4週間の見通し（統計予測）</h2>
          <p className="mt-1 text-lg font-bold">
            {BAND_LABEL[forecast.band]}
            {forecast.vsTypicalPct !== null && (
              <span className="ml-2 text-sm font-semibold text-stone-600">
                例年同期比 {forecast.vsTypicalPct >= 0 ? "+" : ""}
                {forecast.vsTypicalPct}%
              </span>
            )}
          </p>
          <ul className="mt-1 list-disc pl-5 text-xs leading-relaxed text-stone-700">
            {forecast.basis.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-1 text-[11px] text-stone-500">
            過去3年（2023–2025）の季節パターンと直近の実測ペースから算出。統計的見通しであり確定的予測ではありません。
          </p>
        </section>
      )}

      {/* 主要事案 */}
      {incidents.length > 0 && (
        <section className="mt-5">
          <h2 className="text-base font-bold">直近の主要事案</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {incidents.slice(0, 8).map((r, i) => (
              <li key={`${r.date}-${i}`} className="border-b border-stone-100 pb-1">
                <span className="font-semibold">{r.date}</span>
                <span className="ml-2 text-stone-500">
                  {r.cityName}
                  {r.sectionName ? ` ${r.sectionName}` : ""}
                </span>
                {r.comment && (
                  <span className="ml-2 text-xs text-stone-600">{r.comment.slice(0, 60)}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 出典・問い合わせ */}
      <footer className="mt-6 border-t border-stone-300 pt-3 text-xs text-stone-500">
        <p>
          出典: 警察・自治体・報道を集約（獣医工学ラボ監修）。
          {official?.bearUrl && <> 一次出典: {landmark.muniName} 公式クマ出没情報。</>}
        </p>
        <p className="mt-1">
          KumaWatch（くまウォッチ）／リサーチコーディネート株式会社 ・ {SITE_URL}
        </p>
      </footer>
    </main>
  );
}
