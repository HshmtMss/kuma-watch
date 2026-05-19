import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getCachedSightings } from "@/lib/sightings-cache";
import { sortedResearchEntries } from "@/lib/research-entries";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "this-week";
const TITLE = "今週のクマ出没ハイライト — 過去 7 日の全国動向";
const DESCRIPTION =
  "全国 70+ の公的データソース・主要報道を集約した、過去 7 日のクマ出没ハイライト。都道府県別・市町村別のホットスポット、報道された事案、関連日次レポートを 1 ページで確認できます。獣医工学ラボ運営、日次自動更新。";

// ISR: 6 時間（公式データは 6 時間毎に refresh される運用に合わせる）
export const revalidate = 21600;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function formatRange(from: Date, to: Date): string {
  return `${from.getFullYear()}年${from.getMonth() + 1}月${from.getDate()}日 〜 ${to.getMonth() + 1}月${to.getDate()}日`;
}

export default async function ThisWeekPage() {
  const all = await getCachedSightings();
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const previousWeekStart = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const inWindow = all.filter((r) => {
    const d = new Date(r.date);
    return d >= sevenDaysAgo && d <= now;
  });
  const previousWindow = all.filter((r) => {
    const d = new Date(r.date);
    return d >= previousWeekStart && d < sevenDaysAgo;
  });

  // 都道府県別集計
  const prefCount = new Map<string, number>();
  for (const r of inWindow) {
    const k = r.prefectureName || "（未分類）";
    prefCount.set(k, (prefCount.get(k) ?? 0) + (r.headCount || 1));
  }
  const topPrefs = [...prefCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // 市町村別集計
  const muniCount = new Map<string, { pref: string; city: string; count: number }>();
  for (const r of inWindow) {
    if (!r.prefectureName || !r.cityName) continue;
    const key = `${r.prefectureName}/${r.cityName}`;
    const cur = muniCount.get(key);
    if (cur) {
      cur.count += r.headCount || 1;
    } else {
      muniCount.set(key, {
        pref: r.prefectureName,
        city: r.cityName,
        count: r.headCount || 1,
      });
    }
  }
  const topMunis = [...muniCount.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  // 週次変化
  const weekDelta = inWindow.length - previousWindow.length;
  const weekDeltaPct =
    previousWindow.length > 0
      ? ((weekDelta / previousWindow.length) * 100).toFixed(1)
      : "—";

  // 公式 vs 報道
  const officialCount = inWindow.filter((r) => r.isOfficial !== false).length;
  const newsCount = inWindow.filter((r) => r.sourceKind === "news").length;

  // 報道された事案（news source、新しい順）
  const newsItems = inWindow
    .filter((r) => r.sourceKind === "news" && r.sourceUrl)
    .sort((a, b) => (b.ingestedAt ?? 0) - (a.ingestedAt ?? 0))
    .slice(0, 20);

  // 該当期間の日次レポート
  const reports = sortedResearchEntries()
    .filter((e) => e.category === "daily-report")
    .filter((e) => {
      const m = e.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (!m) return false;
      const d = new Date(`${m[1]}-${m[2]}-${m[3]}`);
      return d >= sevenDaysAgo && d <= now;
    })
    .slice(0, 10);

  return (
    <PageShell
      title={TITLE}
      lead={`期間: ${formatRange(sevenDaysAgo, now)}｜${inWindow.length.toLocaleString()} 件の事案を集約`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/research" className="hover:text-stone-900">
          研究・知見
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">今週のハイライト</span>
      </nav>

      {/* サマリーカード */}
      <div className="not-prose mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">今週の件数</div>
          <div className="mt-1 text-xl font-bold text-stone-900 tabular-nums">
            {inWindow.length.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件 / 7日</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">前週比</div>
          <div
            className={`mt-1 text-xl font-bold tabular-nums ${
              weekDelta > 0 ? "text-red-700" : weekDelta < 0 ? "text-green-700" : "text-stone-700"
            }`}
          >
            {weekDelta > 0 ? "+" : ""}
            {weekDeltaPct}
            {weekDeltaPct !== "—" ? "%" : ""}
          </div>
          <div className="text-[11px] text-stone-400">
            前週 {previousWindow.length.toLocaleString()} 件
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">公式情報</div>
          <div className="mt-1 text-xl font-bold text-stone-900 tabular-nums">
            {officialCount.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件（自治体・警察）</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">報道事案</div>
          <div className="mt-1 text-xl font-bold text-amber-700 tabular-nums">
            {newsCount.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件（メディア掲載）</div>
        </div>
      </div>

      <h2 id="top-prefs">都道府県別 件数（多い順 Top 10）</h2>
      <p className="text-sm text-stone-600">
        過去 7 日でクマ出没件数が多い都道府県。市町村別の詳細・地区別マップは各都道府県名から辿れます。
      </p>
      {topPrefs.length === 0 ? (
        <p className="text-stone-500">該当期間に集計済みデータがありません。</p>
      ) : (
        <ul className="not-prose my-4 grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
          {topPrefs.map(([pref, count], i) => (
            <li key={pref}>
              <Link
                href={`/place/${encodeURIComponent(pref)}`}
                className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-amber-400 hover:bg-amber-50"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    i < 3 ? "bg-amber-500 text-white" : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-semibold text-stone-900">{pref}</span>
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 tabular-nums">
                  {count.toLocaleString()} 件
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <h2 id="top-munis">市町村別ホットスポット Top 15</h2>
      <p className="text-sm text-stone-600">
        過去 7 日で出没件数が多い市町村。タップすると地区別・周辺マップに移動します。
      </p>
      {topMunis.length === 0 ? (
        <p className="text-stone-500">該当期間に集計済みデータがありません。</p>
      ) : (
        <ul className="not-prose my-4 grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
          {topMunis.map((m, i) => (
            <li key={`${m.pref}/${m.city}`}>
              <Link
                href={`/place/${encodeURIComponent(m.pref)}/${encodeURIComponent(m.city)}`}
                className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-amber-400 hover:bg-amber-50"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                    i < 3 ? "bg-amber-500 text-white" : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-stone-900">{m.city}</span>
                  <span className="block text-[11px] text-stone-500">{m.pref}</span>
                </span>
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 tabular-nums">
                  {m.count.toLocaleString()} 件
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {newsItems.length > 0 && (
        <>
          <h2 id="news">今週の報道事案</h2>
          <p className="text-sm text-stone-600">
            主要メディアが報じたクマ関連事案。クリックで元記事に遷移します。
          </p>
          <ul className="not-prose my-4 list-none space-y-2 pl-0">
            {newsItems.map((n) => (
              <li
                key={n.id}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2"
              >
                <div className="flex flex-wrap items-baseline gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">
                    {formatDate(n.date)}
                  </span>
                  <Link
                    href={`/place/${encodeURIComponent(n.prefectureName)}/${encodeURIComponent(n.cityName)}`}
                    className="text-amber-700 hover:underline"
                  >
                    {n.prefectureName} {n.cityName}
                  </Link>
                  <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">
                    報道
                  </span>
                </div>
                <div className="mt-1 text-sm text-stone-900">
                  {n.comment || `${n.cityName} ${n.sectionName} でクマ出没`}
                </div>
                {n.sourceUrl && (
                  <a
                    href={n.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-1 inline-block text-xs text-stone-500 hover:text-amber-700 hover:underline"
                  >
                    元記事を読む →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {reports.length > 0 && (
        <>
          <h2 id="reports">今週の日次レポート</h2>
          <p className="text-sm text-stone-600">
            獣医工学ラボが毎日公開している、その日のクマ出没事案の時空間分析レポート。
          </p>
          <ul className="not-prose my-4 grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
            {reports.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/research/${r.slug}`}
                  className="block rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-amber-400 hover:bg-amber-50"
                >
                  <div className="text-xs text-stone-500">{formatDate(r.publishedAt)} 公開</div>
                  <div className="mt-0.5 text-sm font-semibold text-stone-900">{r.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 id="data">データ・更新頻度について</h2>
      <ul>
        <li>
          本ページは <strong>6 時間ごと</strong>に自動更新されます。
        </li>
        <li>
          データソースは全国 70 以上の自治体公開ページ、警察庁 110 番通報統計、環境省、地方紙報道（Google News RSS）の集約です。
        </li>
        <li>
          報道事案（メディア掲載）は <strong>1 時間ごと</strong>に Google News から取り込まれ、重複は自動排除されます。
        </li>
        <li>
          市町村別の詳細・地区別マップ・月次推移は{" "}
          <Link href="/place">都道府県別ページ</Link>から、観光地・登山口は{" "}
          <Link href="/spot">観光地ページ</Link>から確認できます。
        </li>
        <li>
          長期トレンドは{" "}
          <Link href="/place/ranking">全国出没ランキング（直近 90 日）</Link>、
          年次振り返りは{" "}
          <Link href="/articles/bear-2025-retrospective">
            2025 年クマ大量出没を振り返る
          </Link>
          を参照してください。
        </li>
      </ul>

      <p className="text-sm text-stone-500">
        ※ 自治体ごとに公開フォーマット・更新頻度に差があり、当日中の事案が翌日以降に反映されることがあります。最新かつ正確な情報は各自治体・警察の公式発表をご確認ください。
      </p>
    </PageShell>
  );
}
