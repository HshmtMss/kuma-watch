import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  loadDataStats,
  SOURCE_KIND_LABEL,
  SOURCE_KIND_NOTE,
  type SourceKind,
} from "@/lib/data-stats";
import { ARTICLES } from "@/lib/articles-meta";
import { RESEARCH_ENTRIES } from "@/lib/research-entries";
import announcementsData from "@/../public/data/gov-announcements.json";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "データの透明性 — 出典・更新頻度・カバレッジ・方法論｜KumaWatch",
  description:
    "KumaWatch がどのデータを、どの頻度で、どう処理して掲載しているかを公開します。総レコード数・出典別内訳・都道府県別カバレッジ・既知の制約・引用方法まで、研究者・記者・自治体担当者が参照できる形でまとめています。",
  alternates: { canonical: `${SITE_URL}/data` },
  openGraph: {
    title: "データの透明性｜KumaWatch",
    description:
      "70+ ソース・7 万件超のクマ出没データの内訳、更新頻度、方法論、既知の制約を公開。",
    url: `${SITE_URL}/data`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

const SOURCE_FRESHNESS: Record<SourceKind, string> = {
  sharp9110: "1 分間隔 (毎分 GitHub Actions cron)",
  news: "5 分間隔 (毎時 12 回 GitHub Actions cron)",
  arcgis: "1 日 2 回 (refresh-sightings cron)",
  csv: "1 日 2 回 (refresh-sightings cron)",
  "llm-html": "1 日 2 回 (refresh-sightings cron)",
  citizen: "リアルタイム (管理者承認後すぐ反映)",
};

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

function formatDateTime(ms: number): string {
  const d = new Date(ms);
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${y}年${Number(mo)}月${Number(da)}日 ${h}:${mi} (JST)`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("ja-JP");
}

export default async function DataPage() {
  const stats = await loadDataStats();
  const gov = (announcementsData as { items?: unknown[] }).items?.length ?? 0;

  const topPrefs = stats.byPrefecture.slice(0, 10);
  const bottomPrefs = stats.byPrefecture
    .filter((p) => p.count > 0)
    .slice(-5)
    .reverse();

  return (
    <PageShell
      title="データの透明性"
      lead="KumaWatch がどのデータを、どの頻度で、どう処理して掲載しているかを公開します。数字は約 5 分のキャッシュで更新されるので、研究者・記者・自治体の方は引用前に最終更新時刻をご確認ください。"
    >
      {/* === ライブ数値 === */}
      <h2>データ概況</h2>
      <p>
        最終更新: <strong>{formatDateTime(stats.generatedAt)}</strong>
      </p>

      <ul className="not-prose grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="総レコード数" value={formatNumber(stats.totalRecords)} hint="累計" />
        <Stat
          label="過去 90 日"
          value={formatNumber(stats.recordsInLast90Days)}
          hint="直近 3 ヶ月の新規"
          accent
        />
        <Stat
          label="カバー都道府県"
          value={`${stats.uniquePrefectures} / 47`}
          hint="少なくとも 1 件存在"
        />
        <Stat
          label="一次ソース数"
          value={`${stats.uniqueSources}`}
          hint="自治体・通報・報道"
        />
      </ul>

      <p className="text-sm text-stone-600">
        収録期間: <strong>{formatDate(stats.oldestDate)}</strong> 〜{" "}
        <strong>{formatDate(stats.newestDate)}</strong>。 政府発表アーカイブは{" "}
        <Link href="/policy">/policy</Link> に <strong>{gov}</strong> 件、
        対策記事は <Link href="/articles">/articles</Link> に{" "}
        <strong>{ARTICLES.length}</strong> 件、 研究レポートは{" "}
        <Link href="/research">/research</Link> に{" "}
        <strong>{RESEARCH_ENTRIES.length}</strong> 件あります。
      </p>

      {/* === 出典別 === */}
      <h2>出典別内訳</h2>
      <p>
        出典は性質ごとに 5 種類に分類しています。各カテゴリの取得手段・更新頻度・件数は以下の通り。具体的なソース URL とライセンスは{" "}
        <Link href="/credits">データ出典・ライセンス</Link>にまとめています。
      </p>

      <div className="not-prose flex flex-col gap-3">
        {stats.bySourceKind.map(({ kind, count }) => (
          <div
            key={kind}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-stone-900">
                {SOURCE_KIND_LABEL[kind]}
              </h3>
              <div className="shrink-0 text-right">
                <div className="text-lg font-bold text-stone-900">
                  {formatNumber(count)}
                </div>
                <div className="text-[10px] text-stone-500">件</div>
              </div>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {SOURCE_KIND_NOTE[kind]}
            </p>
            <p className="mt-1 text-[11px] text-stone-400">
              更新頻度: {SOURCE_FRESHNESS[kind]}
            </p>
          </div>
        ))}
      </div>

      {/* === カバレッジ === */}
      <h2>都道府県別カバレッジ</h2>
      <p>
        レコード数が多い都道府県は、自治体側の公開努力 (オープンデータ整備や Sharp9110 通報数) が手厚いことを意味します。 逆に少ない県は、
        <strong>「実際にクマが少ない」</strong>場合と<strong>「報告ルートが薄い」</strong>場合の両方があるため、
        単純な比較は避けてください。
      </p>

      <div className="not-prose grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
          <h3 className="mb-2 text-sm font-semibold text-emerald-900">
            データが厚い都道府県 (累計上位 10)
          </h3>
          <ol className="flex flex-col gap-1 text-sm">
            {topPrefs.map((p, i) => (
              <li key={p.prefName} className="flex items-baseline gap-2">
                <span className="w-4 shrink-0 text-right text-xs text-stone-400">
                  {i + 1}.
                </span>
                <Link
                  href={`/place/${encodeURIComponent(p.prefName)}`}
                  className="flex-1 text-emerald-900 hover:underline"
                >
                  {p.prefName}
                </Link>
                <span className="shrink-0 text-xs text-stone-500">
                  累計 {formatNumber(p.count)} / 90 日 {formatNumber(p.count90d)}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4">
          <h3 className="mb-2 text-sm font-semibold text-amber-900">
            データが薄い都道府県 (累計下位 5、件数 1 以上)
          </h3>
          <ol className="flex flex-col gap-1 text-sm">
            {bottomPrefs.map((p) => (
              <li key={p.prefName} className="flex items-baseline gap-2">
                <Link
                  href={`/place/${encodeURIComponent(p.prefName)}`}
                  className="flex-1 text-amber-900 hover:underline"
                >
                  {p.prefName}
                </Link>
                <span className="shrink-0 text-xs text-stone-500">
                  累計 {formatNumber(p.count)} 件
                </span>
              </li>
            ))}
          </ol>
          {stats.prefsWithZeroRecent.length > 0 && (
            <p className="mt-3 text-[11px] leading-relaxed text-amber-900/80">
              過去 90 日の新規ゼロ:{" "}
              {stats.prefsWithZeroRecent.join("・")}
            </p>
          )}
        </div>
      </div>

      {/* === 方法論 === */}
      <h2>処理方法論</h2>

      <h3>1. 重複除去</h3>
      <p>
        同じ事象が複数ソースから入ってくるため、2 段階で dedup しています:
      </p>
      <ul>
        <li>
          <strong>URL 一致</strong> — ニュース報道では同じ記事 URL を 2 回処理しない (Gemini 呼び出しコスト削減)
        </li>
        <li>
          <strong>fingerprint 一致</strong> — 「同じ日付・近接する位置 (5km 以内)・同じ市町村」のレコードは 1 件として扱う
        </li>
      </ul>

      <h3>2. ジオコーディング</h3>
      <p>
        住所文字列 (例: 「○○市△△町字□□」) を緯度経度に変換しています:
      </p>
      <ul>
        <li>
          自治体公開データ: 元データに座標があればそれを使用、無い場合は住所から{" "}
          <a
            href="https://github.com/geolonia/japanese-addresses"
            target="_blank"
            rel="noopener noreferrer"
          >
            geolonia/japanese-addresses
          </a>{" "}
          を使ってジオコード
        </li>
        <li>
          ニュース報道: Gemini で記事本文から「市町村名 + 字名」を抽出し、字レベルが取れた場合はその座標、それ以外は市町村重心
        </li>
        <li>
          Sharp9110: 元データに座標が付与されているのでそのまま使用
        </li>
      </ul>

      <h3>3. AI による分類・抽出</h3>
      <p>
        ニュース報道と自治体 HTML スクレイピングでは Gemini (gemini-2.5-flash) を以下の用途で使用しています:
      </p>
      <ul>
        <li>
          <strong>クマ関連判定</strong> — 「熊」「クマ」を含むが実際はキャラクター・店舗・人名のケースを除外
        </li>
        <li>
          <strong>具体性判定</strong> — 「クマ出没注意」のような一般的な注意喚起ではなく、具体的な目撃事象を含む記事のみ採用
        </li>
        <li>
          <strong>構造化抽出</strong> — 日付・都道府県・市町村・字名・状況コメントを JSON で抽出
        </li>
      </ul>
      <p>
        AI 出力は重複除去・フィールド検証を通った上でデータベースに入りますが、稀に誤抽出が残ります。 該当レコードを見つけた場合は{" "}
        <Link href="/submit">情報提供フォーム</Link>からご連絡ください。
      </p>

      <h3>4. 警戒レベルの算出</h3>
      <p>
        5km メッシュ単位で「直近 90 日の件数 × 季節係数 × 時間帯係数」のシンプルなスコアを使っています。 機械学習モデルではなく、
        <strong>解釈可能性を優先した重み付け合算</strong>です。スコアの構成要素はメッシュ詳細ポップアップで明示しています。
      </p>

      {/* === 制約 === */}
      <h2>既知の制約</h2>
      <ul>
        <li>
          <strong>報告バイアス</strong> — 山林深部の出没は通報されにくく、住宅地・道路近くの出没が過大に見える傾向があります
        </li>
        <li>
          <strong>Sharp9110 のカバレッジ差</strong> — 都道府県によって普及度が違い、北海道・東北は厚いが九州・四国は薄め
        </li>
        <li>
          <strong>ニュース報道の即時性と漏れ</strong> — 大事件は数時間で反映されますが、小規模な目撃は地方紙が出さない限り取り込めません
        </li>
        <li>
          <strong>遠い過去データの欠落</strong> — 2022 年以前のデータは自治体公開状況に依存し、欠落地域があります
        </li>
        <li>
          <strong>住所の精度</strong> — 字レベルまで取れない記事は市町村重心に丸めるため、地図上の位置と実際の事象位置が数 km ずれることがあります
        </li>
      </ul>

      {/* === 引用 === */}
      <h2>引用について</h2>
      <p>
        メディア・研究・自治体資料での引用を歓迎します。可能であれば以下の形式でクレジットをお願いします:
      </p>
      <blockquote className="rounded-xl border-l-4 border-emerald-400 bg-emerald-50/50 px-4 py-3 text-sm">
        KumaWatch (獣医工学ラボ) — kuma-watch.jp ({formatDate(stats.newestDate)}{" "}
        時点のデータ)
      </blockquote>
      <p>
        生データ提供 (CSV/JSON エクスポート) や研究機関向けの集計提供についても対応可能です。お気軽に{" "}
        <a href="mailto:contact@research-coordinate.co.jp">
          contact@research-coordinate.co.jp
        </a>{" "}
        までご連絡ください。商用利用については個別相談です。
      </p>

      <p className="text-sm text-stone-500">
        <Link href="/credits">データ出典・ライセンス</Link> /{" "}
        <Link href="/disclaimer">免責事項・利用規約</Link> /{" "}
        <Link href="/about">サイトについて</Link>
      </p>
    </PageShell>
  );
}

function Stat({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint: string;
  accent?: boolean;
}) {
  return (
    <li
      className={`rounded-xl border px-3 py-3 ${
        accent
          ? "border-red-200 bg-red-50/40"
          : "border-stone-200 bg-white"
      }`}
    >
      <div className="text-[11px] text-stone-500">{label}</div>
      <div
        className={`mt-0.5 text-xl font-bold ${
          accent ? "text-red-900" : "text-stone-900"
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] text-stone-400">{hint}</div>
    </li>
  );
}
