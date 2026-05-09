import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "KumaWatch（くまウォッチ）— 全国クマ出没予報・警戒レベルマップ",
  description:
    "全国 47 都道府県のクマ出没情報を 70 以上の公式ソースから自動集約し、5km メッシュ単位の警戒レベルマップで予報する無料 Web サービス。登山・キャンプ・通勤前の安全確認に。登録不要・スマホ対応。",
  keywords: [
    "クマ 出没",
    "クマ 予報",
    "クマ 警戒",
    "熊 出没情報",
    "クマ 出没マップ",
    "全国 クマ",
    "アーバン・ベア",
    "野生動物 安全",
    "登山 安全",
    "ヒグマ ツキノワグマ",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "KumaWatch — 全国クマ出没予報・警戒レベルマップ",
    description:
      "70+ の公式ソースから集約した 7 万件超のクマ出没情報を 5km メッシュで可視化。47 都道府県・2,500+ 市町村に対応。登録不要・無料。",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KumaWatch — 全国クマ出没予報",
    description:
      "70+ の公式ソースから集約した 7 万件のクマ出没情報を 5km メッシュで可視化。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

const FAQ = [
  {
    q: "KumaWatch はどんなサービスですか？",
    a: "全国のクマ出没情報を 5km メッシュ単位で可視化し、現在地・目的地周辺の警戒レベルを予報する獣医師監修の無料 Web サービスです。登録不要、ブラウザですぐ使えます。",
  },
  {
    q: "利用料金はかかりますか？",
    a: "完全無料・会員登録不要・広告なし。kuma-watch.jp にアクセスするだけで利用できます。",
  },
  {
    q: "どこの情報をもとに表示していますか？",
    a: "全国 47 都道府県の自治体公式サイト、警察、環境省など 70+ の公式オープンデータと、ニュース報道を自動取り込みしています。法的なクレジット表示は /credits を参照。",
  },
  {
    q: "アプリはありますか？",
    a: "ありません。スマホのホーム画面に追加すれば「アプリのように」使えます（PWA 対応）。",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "KumaWatch",
  alternateName: ["くまウォッチ", "kuma-watch.jp"],
  url: SITE_URL,
  applicationCategory: ["UtilitiesApplication", "MapApplication"],
  operatingSystem: "Any",
  inLanguage: "ja",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  description:
    "全国のクマ出没情報を 70 以上の公式ソースから集約し、5km メッシュ単位で警戒レベルを予報する獣医師監修の無料 Web サービス。",
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
    parentOrganization: {
      "@type": "Organization",
      name: "リサーチコーディネート株式会社",
      url: "https://www.research-coordinate.co.jp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "西新宿1-20-3 西新宿高木ビル8F",
        addressLocality: "新宿区",
        addressRegion: "東京都",
        postalCode: "160-0023",
        addressCountry: "JP",
      },
    },
  },
  // 信頼性シグナル: 獣医師監修であることを構造化データでも明示。
  // Google の品質評価 (E-E-A-T) における Expertise / Trust に寄与する。
  reviewedBy: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    description:
      "リサーチコーディネート株式会社が運営する、獣医師主体の獣医療・野生動物・公衆衛生領域の技術プロジェクト",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
};

export default function AboutPage() {
  return (
    <PageShell
      title="KumaWatch（くまウォッチ）について"
      lead="全国のクマ出没情報を 1 つの地図に。登山・キャンプ・通勤前の「行く前 30 秒チェック」を支える無料の予報サービスです。"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero: 地図のスクリーンショット + CTA */}
      <section className="not-prose mb-10 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="relative aspect-[16/10] w-full bg-stone-100">
          <Image
            src="/lp/hero.jpg"
            alt="KumaWatch のメイン画面。日本地図上に5km メッシュの警戒レベルが色分けで表示されている。"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-4">
          <div className="text-sm text-stone-700">
            位置情報を許可すると、現在地の警戒レベルがすぐ見られます。
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            地図を開く →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="not-prose mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { v: "70,000+", l: "出没情報を集約" },
          { v: "47", l: "都道府県をカバー" },
          { v: "2,500+", l: "市町村ページ" },
          { v: "毎日", l: "自動更新" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-stone-200 bg-white px-3 py-4 text-center"
          >
            <div className="text-2xl font-bold text-stone-900">{s.v}</div>
            <div className="mt-1 text-[11px] leading-tight text-stone-500">
              {s.l}
            </div>
          </div>
        ))}
      </section>

      {/* サービスの目的 — シンプルなリード */}
      <h2>「行く前 30 秒」のクマ確認</h2>
      <p>
        登山・キャンプ・通勤前にスマホで開けば、目的地周辺のクマ出没状況を 30 秒で把握できます。
        全国 47 都道府県の公式情報を自動集約し、<strong>5km メッシュの 5 段階警戒レベル</strong>として可視化します。
      </p>

      {/* 使い方 */}
      <h2 id="how-to-use">使い方</h2>
      <p>
        登録不要・無料。ブラウザで開くだけで使えます。
      </p>
      <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            n: "1",
            title: "地図を開く",
            desc: "kuma-watch.jp にアクセス。現在地周辺の警戒レベルが自動で表示されます。",
            img: "/lp/step1.png",
          },
          {
            n: "2",
            title: "場所を調べる",
            desc: "検索ボックスに地名を入力、または地図をタップ。登山口や旅先の状況を確認できます。",
            img: "/lp/step2.png",
          },
          {
            n: "3",
            title: "詳細を確認",
            desc: "周辺の出没履歴・最新事案・気象条件を踏まえた警戒レベルが表示されます。",
            img: "/lp/step3.png",
          },
        ].map((s) => (
          <div
            key={s.n}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[3/4] w-full bg-stone-100">
              <Image
                src={s.img}
                alt={`Step ${s.n}: ${s.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="border-t border-stone-200 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                  {s.n}
                </span>
                <div className="text-sm font-semibold text-stone-900">
                  {s.title}
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-600">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 誰の役に立つか */}
      <h2>こんな方に使われています</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            icon: "🥾",
            who: "登山・キャンプ・山菜採り",
            why: "出発前に登山口周辺の出没状況を確認。クマ鈴・スプレーの携行判断に。",
          },
          {
            icon: "🏠",
            who: "地域住民・通勤通学",
            why: "近所での目撃情報を地図で確認。市町村ページで最新の動向を追跡。",
          },
          {
            icon: "🚗",
            who: "観光・出張・ドライブ",
            why: "旅先の警戒レベルを事前チェック。県境を超えた情報も統合表示。",
          },
        ].map((p) => (
          <div
            key={p.who}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="text-2xl">{p.icon}</div>
            <div className="mt-2 text-sm font-semibold text-stone-900">
              {p.who}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {p.why}
            </p>
          </div>
        ))}
      </div>

      {/* メッシュ + スコア — 1 セクションに統合 */}
      <h2>警戒レベルの仕組み</h2>
      <p>
        生息域・過去の出没履歴を中心に、季節・気象・時間帯を補正要素として加味し、
        <strong>5 段階（安全 / 念のため注意 / 基本対策を / 対策を強化 / しっかり対策を）</strong>で表示します。本スコアは統計的な参考情報であり、現地の最新情報と合わせてご活用ください。
      </p>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <div className="relative aspect-[7/5] w-full bg-stone-100">
          <Image
            src="/lp/heatmap.jpg"
            alt="5km メッシュの警戒レベル表示。安全（緑）から しっかり対策を（赤）まで5段階で色分けされている。"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      {/* データソース */}
      <h2>データソース</h2>
      <p>
        全国 70+ の自治体公式オープンデータ・環境省の公開情報・ニュース報道・気象データ・地図情報を自動取り込みしています。各情報には出典自治体名と公式ページへのリンクを併記しています。法的なクレジット表示は{" "}
        <Link href="/credits">データ出典・ライセンス</Link>{" "}
        を参照。
      </p>

      {/* 関連コンテンツへの内部リンク (SEO + UX) */}
      <h2>関連コンテンツ</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/place"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-amber-400 hover:bg-amber-50/40"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            都道府県別マップ
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            /place
          </div>
          <div className="mt-1 text-xs text-stone-600">
            47 都道府県・2,500+ 市町村の出没状況を地域別に確認
          </div>
        </Link>
        <Link
          href="/articles"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-amber-400 hover:bg-amber-50/40"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            クマ対策の基礎
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            /articles
          </div>
          <div className="mt-1 text-xs text-stone-600">
            遭遇時の対処、撃退スプレー、クマ鈴、季節別の注意点等
          </div>
        </Link>
        <Link
          href="/research"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-emerald-400 hover:bg-emerald-50/30"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            研究・知見
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            /research
          </div>
          <div className="mt-1 text-xs text-stone-600">
            日次・月次の出没動向レポート、政策動向の整理
          </div>
        </Link>
      </div>

      {/* FAQ */}
      <h2 id="faq">よくあるご質問</h2>
      <div className="not-prose my-4 space-y-2">
        {FAQ.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-stone-200 bg-white open:bg-stone-50"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-semibold text-stone-900 marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 group-open:bg-amber-100 group-open:text-amber-800">
                ＋
              </span>
            </summary>
            <div className="border-t border-stone-200 px-4 py-3 text-xs leading-relaxed text-stone-700">
              {f.a}
            </div>
          </details>
        ))}
      </div>

      <h2 id="operator">運営体制・監修者</h2>
      <p>
        本サイトは{" "}
        <strong>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            獣医工学ラボ
          </a>
        </strong>{" "}
        が運営しています。獣医療・野生動物・公衆衛生領域の技術プロジェクトとして、
        <strong>獣医師</strong>がプロジェクトの中心となり、データの集約・分析・公開に至るまで監修しています。
      </p>
      <div className="not-prose my-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
        <p className="mb-2 flex items-center gap-2 text-base font-semibold">
          <span aria-hidden>🩺</span>
          <span>獣医師監修プロジェクト</span>
        </p>
        <p className="leading-relaxed">
          クマの生態・人獣共通感染症・公衆衛生のリスク評価は、本来「獣医学」の領域です。
          本サイトでは、データの取り込みから警戒レベル算出、記事の編集に至るまで
          <strong>獣医師の知見をもって監修</strong>しています。
          単純な目撃マップではなく、<strong>獣医療の視点で「行動を変えるための情報」</strong>を提供することを目的としています。
        </p>
      </div>

      <h3 className="mt-6 text-base font-semibold text-stone-900">お問い合わせ・運営法人</h3>
      <p className="text-sm leading-relaxed">
        獣医工学ラボは <a href="https://www.research-coordinate.co.jp" target="_blank" rel="noopener noreferrer">リサーチコーディネート株式会社</a> が運営する技術プロジェクトです。お問い合わせは{" "}
        <a href="mailto:contact@research-coordinate.co.jp">contact@research-coordinate.co.jp</a> まで。
        住所: 〒160-0023 東京都新宿区西新宿1-20-3 西新宿高木ビル8F。
      </p>

      {/* Final CTA */}
      <div className="not-prose mt-10 flex flex-wrap gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex-1 min-w-[12rem] text-sm text-amber-900">
          <div className="font-semibold">いま地図で確認する</div>
          <div className="text-xs text-amber-800/90">
            登録不要・無料。スマホでもそのまま使えます。
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          地図を開く →
        </Link>
        <Link
          href="/for-gov"
          className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          自治体の方はこちら
        </Link>
      </div>
    </PageShell>
  );
}
