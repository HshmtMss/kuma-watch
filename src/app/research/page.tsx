import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "研究・知見｜獣医工学ラボ",
  description:
    "獣医工学ラボによる、全国のクマ出没事案の時空間分析、アーバン・ベア（都市型出没）研究、政策提言、自治体・専門家向けの公開知見。",
  alternates: { canonical: `${SITE_URL}/research` },
  robots: { index: true, follow: true },
};

type ResearchEntry = {
  slug: string;
  title: string;
  lead: string;
  publishedAt: string;
  category: "daily-report" | "weekly-report" | "monthly-report" | "topic" | "policy";
};

// 記事本来の日付 (slug の YYYY-MM-DD or YYYY-MM 部分) 降順で並べる。
// 配列内の登録順は問わない (rendering 時に sortKey でソートする)。
const ENTRIES: ResearchEntry[] = [
  {
    slug: "2026-05-06-daily-report",
    title: "2026年5月6日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月6日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-07",
    category: "daily-report",
  },
  {
    slug: "2026-05-05-daily-report",
    title: "2026年5月5日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月5日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-05",
    category: "daily-report",
  },
  {
    slug: "2026-05-04-daily-report",
    title: "2026年5月4日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月4日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-05",
    category: "daily-report",
  },
  {
    slug: "2026-05-03-daily-report",
    title: "2026年5月3日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月3日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
  },
  {
    slug: "2026-05-02-daily-report",
    title: "2026年5月2日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月2日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
  },
  {
    slug: "2026-05-01-daily-report",
    title: "2026年5月1日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月1日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
  },
  {
    slug: "2026-04-30-daily-report",
    title: "2026年4月30日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年4月30日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-02",
    category: "daily-report",
  },
  {
    slug: "2026-04-29-bear-incidents",
    title: "2026年4月29日 国内熊出没事案の時空間分析と社会的リスク評価",
    lead: "ゴールデンウィーク初日、全国で相次いだクマ出没・人身被害事案を網羅的に集約し、アーバン・ベア化の進行と背景要因を分析した報告書。",
    publishedAt: "2026-04-30",
    category: "daily-report",
  },
  {
    slug: "2026-04-monthly-report",
    title: "2026年4月 国内熊出没動向と人獣衝突の構造的分析",
    lead: "アーバンベアの完全定着、北海道の冬眠明け巨大ヒグマ（島牧村ハンター襲撃・苫前町330kg個体）、富山市住宅街での人身被害、4月1日施行のクマ「指定管理鳥獣」化までを総括した月次報告。",
    publishedAt: "2026-05-01",
    category: "monthly-report",
  },
  {
    slug: "2026-03-monthly-report",
    title: "2026年3月 国内熊出没動向と「熊対策ロードマップ」策定の包括的分析",
    lead: "暖冬による早期覚醒、北海道・東北・北陸の出没急増、3月27日に政府が公表した個体数削減ロードマップ（2030年度までの地域別削減目標）までを総括した月次報告。",
    publishedAt: "2026-04-30",
    category: "monthly-report",
  },
];

// slug 先頭の日付 (YYYY-MM-DD or YYYY-MM) を sortable な数値に変換する。
// 月次レポート (YYYY-MM) は同月末日として扱い、日次より後ろに配置されない。
function entrySortKey(slug: string): string {
  const daily = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (daily) return `${daily[1]}${daily[2]}${daily[3]}`;
  const monthly = slug.match(/^(\d{4})-(\d{2})/);
  if (monthly) return `${monthly[1]}${monthly[2]}99`;
  return "00000000";
}

const SORTED_ENTRIES = [...ENTRIES].sort((a, b) =>
  entrySortKey(b.slug).localeCompare(entrySortKey(a.slug)),
);

const CATEGORY_LABEL: Record<ResearchEntry["category"], string> = {
  "daily-report": "日次レポート",
  "weekly-report": "週次レポート",
  "monthly-report": "月次レポート",
  topic: "テーマ解説",
  policy: "政策提言",
};

export default function ResearchIndexPage() {
  return (
    <PageShell
      title="研究・知見"
      lead="獣医工学ラボが公開する、クマ出没事案の分析・テーマ解説・政策提言。自治体・研究機関・専門家の皆様向けの情報です。"
    >
      <div className="not-prose mb-8 rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="text-sm leading-relaxed text-stone-700">
          <p className="mb-2 font-semibold text-stone-900">獣医工学ラボについて</p>
          <p>
            <a
              href="https://www.research-coordinate.co.jp/labs/vet/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >獣医工学ラボ</a>は、<a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >リサーチコーディネート株式会社</a>
            が運営する、獣医療・野生動物・公衆衛生領域の技術プロジェクトです。
            KumaWatch（くまウォッチ）はその社会実装の一つとして、全国のクマ出没情報を集約し
            可視化することで、人と野生動物の境界における事故リスクの低減に取り組んでいます。
          </p>
          <p className="mt-2">
            本ページでは、KumaWatch のデータ・運営知見をもとにした分析レポートや、
            自治体・専門家向けのテーマ解説を公開しています。データ連携や共同研究のご相談は
            <Link href="/for-gov" className="ml-1 text-blue-700 underline">自治体の方へ</Link>
            のページ、または末尾の連絡先までご連絡ください。
          </p>
        </div>
      </div>

      <h2>公開記事</h2>
      <ul className="not-prose space-y-4">
        {SORTED_ENTRIES.map((e) => (
          <li
            key={e.slug}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-emerald-500 hover:bg-emerald-50/40"
          >
            <Link href={`/research/${e.slug}`} className="block p-5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
                  {CATEGORY_LABEL[e.category]}
                </span>
                <span>{e.publishedAt}</span>
              </div>
              <div className="mt-2 text-base font-semibold text-gray-900">
                {e.title}
              </div>
              <div className="mt-1 text-sm text-gray-600">{e.lead}</div>
            </Link>
          </li>
        ))}
      </ul>

      <h2>編集方針</h2>
      <p>
        研究記事は、公開ニュースおよび自治体発表をもとにした情報集約・要約に、
        AI（大規模言語モデル）を活用しています。最終的な内容は獣医工学ラボの獣医師が
        確認・編集の上で公開しており、編集責任は獣医工学ラボに帰属します。
      </p>
      <p>
        事実関係の誤りや、より正確な一次出典をご存じの場合は、お手数ですが下記までご連絡ください。
      </p>

      <h2>お問い合わせ</h2>
      <div className="not-prose mt-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-sm text-gray-800">
          <div className="mb-1 font-bold text-gray-900">獣医工学ラボ</div>
          <div className="mb-3 text-xs text-gray-500">
            運営: リサーチコーディネート株式会社
          </div>
          <div>
            Email:{" "}
            <a
              href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20研究記事について"
              className="font-semibold text-blue-700 underline"
            >
              contact@research-coordinate.co.jp
            </a>
          </div>
          <div className="mt-1">
            Web:{" "}
            <a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              research-coordinate.co.jp
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
