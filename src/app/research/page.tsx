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
  category: "incident-report" | "topic" | "policy";
};

const ENTRIES: ResearchEntry[] = [
  {
    slug: "2026-04-29-bear-incidents",
    title: "2026年4月29日 国内熊出没事案の時空間分析と社会的リスク評価",
    lead: "ゴールデンウィーク初日、全国で相次いだクマ出没・人身被害事案を網羅的に集約し、アーバン・ベア化の進行と背景要因を分析した報告書。",
    publishedAt: "2026-04-30",
    category: "incident-report",
  },
];

const CATEGORY_LABEL: Record<ResearchEntry["category"], string> = {
  "incident-report": "事案レポート",
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
            獣医工学ラボは、<a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >リサーチコーディネート株式会社</a>
            が運営する、獣医療・野生動物・公衆衛生領域の技術プロジェクトです。
            KumaWatch（クマウォッチ）はその社会実装の一つとして、全国のクマ出没情報を集約し
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
        {ENTRIES.map((e) => (
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
