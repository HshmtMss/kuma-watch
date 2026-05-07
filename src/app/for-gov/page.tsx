import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87&body=%E3%81%84%E3%81%A4%E3%82%82%E3%81%8A%E4%B8%96%E8%A9%B1%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%E2%96%A0%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E6%8B%85%E5%BD%93%E9%83%A8%E7%BD%B2%EF%BC%9A%0D%0A%E2%96%A0%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E9%80%A3%E7%B5%A1%E5%85%88%EF%BC%88%E9%9B%BB%E8%A9%B1%E5%8F%88%E3%81%AF%E3%83%A1%E3%83%BC%E3%83%AB%EF%BC%89%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A%0D%0A";

export const metadata: Metadata = {
  title: "自治体の方へ｜KumaWatch クマ出没情報の連携・配信",
  description:
    "自治体が公開しているクマ出没情報を KumaWatch が自動で取り込み、住民・観光客・登山者に届けます。自治体側の追加作業ゼロ・連携費用無料。70 以上の自治体・47 都道府県のデータを既に統合中。",
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "自治体の方へ｜KumaWatch",
    description:
      "自治体側の追加作業ゼロで、住民・観光客にクマ出没情報を届けます。連携費用無料。70+ 自治体のデータを既に統合中。",
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自治体の方へ｜KumaWatch",
    description:
      "自治体側の追加作業ゼロで、住民・観光客にクマ出没情報を届けます。連携費用無料。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

const STATS = [
  { v: "70+", l: "公式ソース連携" },
  { v: "47", l: "都道府県カバー" },
  { v: "70,000+", l: "出没情報集約" },
  { v: "毎日", l: "自動更新" },
];

const VALUE_PROPS = [
  {
    icon: "🩺",
    title: "獣医師監修の専門サービス",
    body: "クマの生態・人獣共通感染症・公衆衛生の評価は本来「獣医学」の領域です。獣医師が中心となる獣医工学ラボがデータの集約・警戒レベル算出・記事編集まで監修しているため、住民への発信に専門性の裏付けがあります。",
  },
  {
    icon: "🏛️",
    title: "自治体側の作業はゼロ",
    body: "これまでどおり公式サイトに情報を公開していただくだけ。新システム導入も新運用も不要です。HTML / PDF / CSV / KML / API、どの形式でも自動で取り込みます。",
  },
  {
    icon: "🧭",
    title: "県外からの来訪者にも確実に届く",
    body: "登山者・キャンパー・観光客が出発前に必ず参照できる場所に、貴自治体の情報が表示されます。ローカル情報を全国の検索流入に乗せられます。",
  },
  {
    icon: "🗺️",
    title: "市町村ページで観光客の目に留まる",
    body: "/place/[県]/[市町村] という独立 URL で、SEO に最適化された専用ページが自動生成されます。「○○市 クマ」検索で表示される媒体になります。",
  },
];

const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "お問い合わせ",
    duration: "即日",
    body: "メールにてご連絡ください。連携希望の旨と、対象の出没情報ページ URL を共有いただきます。",
  },
  {
    step: "STEP 2",
    title: "情報源の確認",
    duration: "30 分のオンライン MTG",
    body: "現在の公開ページ・更新頻度・ファイル形式（HTML/PDF/CSV/KML/API 等）を確認します。技術的な擦り合わせはこちらで行います。",
  },
  {
    step: "STEP 3",
    title: "試験取り込み",
    duration: "1〜2 週間",
    body: "当社にて自動取り込みを設定し、表示を確認していただきます。位置情報の精度、表示文言、リンク先を貴自治体に合わせて調整します。",
  },
  {
    step: "STEP 4",
    title: "本番反映",
    duration: "確認次第",
    body: "住民・観光客への配信を開始。以降は公式サイトの更新に追従して自動反映されます。運用での追加作業は発生しません。",
  },
];

const FAQ = [
  {
    q: "費用はかかりますか？",
    a: "自治体・住民ともに完全無料です。広告も掲載しません。長期的にも基本機能は無償提供を続ける方針です（拡張機能の有償提供は将来的に検討の可能性があります）。",
  },
  {
    q: "情報の取り込みに自治体側の作業は本当にゼロですか？",
    a: "はい。現状の公式サイトをそのまま運用していただくだけで、KumaWatch 側で自動的に取り込みます。専用 API や CSV エクスポートのご用意も不要です。技術的な対応はすべて当社が行います。",
  },
  {
    q: "情報の出典・著作権はどうなりますか？",
    a: "全ての情報には自治体名を明記し、公式ページへのリンクを併記します。情報そのものの著作権は自治体に帰属したままです。情報を加工する場合（例: 位置情報の正規化）も改変箇所を明示します。",
  },
  {
    q: "誤った情報が表示された場合の責任は？",
    a: "本サービスは公開情報の集約・可視化であり、最終的な一次情報は公式サイトで確認いただく設計です。表示内容に誤りがあった場合は速やかに修正・削除します。免責事項は /disclaimer に明記しています。",
  },
  {
    q: "個人情報は扱いますか？",
    a: "本サービスは公開情報のみを扱い、住民・通報者の個人情報は一切収集しません。地点も自治体公開時点の粒度（番地まで等）を超えない範囲で表示します。",
  },
  {
    q: "連携を停止したい場合は？",
    a: "メール 1 通でいつでも停止可能です。停止後は速やかに該当自治体の取り込みを止め、表示を取り下げます。",
  },
  {
    q: "自治体向けの詳細仕様書（PDF）はありますか？",
    a: "ご用意しております。お問い合わせ時に「資料希望」とお伝えいただければ、機能仕様・連携フロー・想定 FAQ をまとめた PDF をお送りします（庁内稟議用）。",
  },
  {
    q: "プッシュ通知やアプリ連携の予定は？",
    a: "契約自治体向けに LINE 公式アカウントを通じた地域住民へのプッシュ通知サービスを開発中です。試験運用へのご参加にご興味があれば併せてご連絡ください。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ — クマ出没情報の連携"
      lead="自治体が公開しているクマ出没情報を、KumaWatch が自動で取り込み、住民・観光客・登山者にお届けします。自治体側の追加作業はありません。"
    >
      {/* Hero stat block */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体連携・無料・追加作業ゼロ
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          公式サイトを更新するだけで、住民・来訪者に届く。
        </h2>
        <p className="m-0 text-sm leading-relaxed text-stone-700">
          KumaWatch
          は全国の自治体公式サイトからクマ出没情報を自動で取り込み、5km
          メッシュで可視化する公益サービスです。新システム導入や新規 API
          開発は不要。すでに公開されている情報を、来訪者が確実に見られる場所へお届けします。
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center"
            >
              <div className="text-xl font-bold text-stone-900 sm:text-2xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] leading-tight text-stone-500 sm:text-[11px]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            連携を相談する →
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            連携の流れを見る
          </a>
        </div>
      </section>

      {/* 課題 */}
      <h2>こんな課題はありませんか</h2>
      <ul>
        <li>
          公式サイトに掲載しているのに、<strong>住民・観光客がたどり着けていない</strong>
        </li>
        <li>
          <strong>県外からの来訪者には情報の存在自体が知られていない</strong>
        </li>
        <li>
          隣接自治体・県境を超えた情報が統合されておらず、<strong>広域での状況把握が難しい</strong>
        </li>
        <li>
          住民への迅速な周知手段（プッシュ通知等）を整備したいが、開発・運用コストが大きい
        </li>
      </ul>
      <p>
        KumaWatch は、自治体側の運用負担を増やさずにこれらを解決します。
      </p>

      {/* Value props */}
      <h2>KumaWatch にできること</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {VALUE_PROPS.map((v) => (
          <div
            key={v.title}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="text-2xl">{v.icon}</div>
            <div className="mt-2 text-sm font-semibold text-stone-900">
              {v.title}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {v.body}
            </p>
          </div>
        ))}
      </div>

      {/* サンプル: 市町村ページのスクショ */}
      <h2>市町村ごとに専用ページが自動生成されます</h2>
      <p>
        例えば「秋田市 クマ」「軽井沢 クマ」のような検索で表示されるよう、各市町村に対して
        SEO 最適化された独立ページが自動生成されます。下記は実際のページ表示例です（秋田県を例として表示）。
      </p>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <div className="relative aspect-[7/5] w-full bg-stone-100">
          <Image
            src="/lp/heatmap.jpg"
            alt="自治体ページのスクリーンショット例。市町村単位で警戒レベルがメッシュ表示される。"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-3">
          <div className="text-xs text-stone-700">
            実物：
            <Link
              href="/place"
              className="ml-1 font-semibold text-amber-700 underline"
            >
              /place
            </Link>{" "}
            から都道府県別の市町村ページをご覧いただけます。
          </div>
        </div>
      </div>

      {/* Process timeline */}
      <h2 id="process">連携の流れ</h2>
      <p>
        最初のお問い合わせから本番反映まで、概ね 2〜3
        週間。すべての技術対応は当社が行うため、自治体ご担当者の作業負担はミーティング 30
        分とメール数往復程度です。
      </p>
      <div className="not-prose my-5 space-y-3">
        {PROCESS_STEPS.map((p, i) => (
          <div
            key={p.step}
            className="relative rounded-xl border border-stone-200 bg-white p-4 pl-12"
          >
            <div className="absolute left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
              {i + 1}
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                {p.step}
              </div>
              <div className="text-[11px] text-stone-500">{p.duration}</div>
            </div>
            <div className="mt-1 text-sm font-semibold text-stone-900">
              {p.title}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {p.body}
            </p>
          </div>
        ))}
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

      {/* サービス概要 */}
      <h2>サービス概要</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <dl className="divide-y divide-stone-200 text-sm">
          {[
            ["サービス名", "KumaWatch（クマウォッチ）"],
            ["URL", "https://kuma-watch.jp"],
            ["提供形態", "Web サービス（PC・スマホ対応／インストール不要）"],
            ["カバー範囲", "全国 47 都道府県／毎日自動更新"],
            ["利用料金", "個人・自治体ともに完全無料"],
            ["広告", "なし"],
            ["運営", "獣医工学ラボ（リサーチコーディネート株式会社）"],
            ["公開開始", "2026 年 4 月"],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[8rem_1fr] gap-2 px-4 py-2.5">
              <dt className="text-xs font-medium text-stone-500">{k}</dt>
              <dd className="text-xs text-stone-800">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 運営チームの専門性・ポートフォリオ */}
      <h2>運営チームの専門性</h2>
      <p>
        KumaWatch を運営する獣医工学ラボでは、全国のクマ出没事案の時空間分析や政策動向の整理を継続的に発信しています。研究・知見ページでは日次の事案レポートやテーマ解説を公開しており、自治体・研究機関・メディアの皆様にご活用いただいています。
      </p>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/research"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-emerald-400 hover:bg-emerald-50/30"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            研究・知見
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            日次・月次の事案レポート
          </div>
          <div className="mt-1 text-xs text-stone-600">
            全国のクマ出没事案を時空間で分析。アーバン・ベア（都市型出没）の動向、行政対応の比較等。
          </div>
        </Link>
        <a
          href="https://www.research-coordinate.co.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-blue-400 hover:bg-blue-50/30"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            運営者
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            獣医工学ラボ
          </div>
          <div className="mt-1 text-xs text-stone-600">
            獣医師主体の獣医療・野生動物・公衆衛生領域の技術プロジェクト。リサーチコーディネート株式会社が運営。
          </div>
        </a>
      </div>

      {/* CTA */}
      <h2 id="contact">お問い合わせ</h2>
      <div className="not-prose mt-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="text-sm text-stone-800">
          <div className="mb-1 font-bold text-stone-900">獣医工学ラボ</div>
          <div className="mb-3 text-xs text-stone-500">
            運営: リサーチコーディネート株式会社
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a
              href={CONTACT_MAILTO}
              className="font-semibold text-blue-700 underline"
            >
              contact@research-coordinate.co.jp
            </a>
          </div>
          <div className="mt-1">
            <strong>Web:</strong>{" "}
            <a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              research-coordinate.co.jp
            </a>
          </div>
          <p className="mt-3 text-xs text-stone-500">
            メール件名は自動で「KumaWatch 自治体連携のご相談」が入力されます。原則 3 営業日以内にご返信いたします。庁内稟議用の仕様書 PDF が必要な場合は、その旨をメール本文にお書き添えください。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              メールで相談する →
            </a>
            <Link
              href="/research"
              className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              研究・知見を見る
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
