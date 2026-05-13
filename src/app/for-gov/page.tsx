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
    "自治体が公開しているクマ出没情報を KumaWatch が自動で取り込み、住民・観光客・登山者に届けます。新しい運用や追加負担はなく、連携費用も発生しません。70 以上の自治体・47 都道府県のデータを既に統合中。",
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "自治体の方へ｜KumaWatch",
    description:
      "新しい運用や追加負担なしで、住民・観光客にクマ出没情報を届けます。連携費用は不要。70+ 自治体のデータを既に統合中。",
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自治体の方へ｜KumaWatch",
    description:
      "新しい運用や追加負担なしで、住民・観光客にクマ出没情報を届けます。連携費用は不要。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

const STATS = [
  { v: "70+", l: "自治体ソース" },
  { v: "47", l: "都道府県" },
  { v: "70,000+", l: "出没情報" },
  { v: "毎日", l: "自動更新" },
];

// 3 つのコアメッセージに集約。
// 1) 観光客・住民への到達 / 2) 追加の運用負担なし / 3) 獣医師監修の信頼性
const VALUE_PROPS = [
  {
    icon: "🧭",
    title: "観光客・住民に届きます",
    body: "登山者・キャンパー・観光客が出発前に確認する地点に、貴自治体の情報が掲載されます。「○○市 クマ」で検索したときに表示される独立ページも自動生成。",
  },
  {
    icon: "🏛️",
    title: "新しい運用は不要",
    body: "現状の公式サイトをそのまま運用していただければ、こちらで自動取り込みします。新しいシステムや専用 API・CSV エクスポートを構築する必要はありません。公式ページがまだ無い自治体さまは、報道・住民投稿で補完します。",
  },
  {
    icon: "🩺",
    title: "獣医師監修の安心安全",
    body: "獣医療・公衆衛生の専門領域として、獣医師が中心の獣医工学ラボがデータと表現の質を監修。住民・観光客への発信に専門性の裏付けがあります。",
  },
];

const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "メール 1 通でご連絡",
    duration: "30 分の確認 MTG",
    body: "対象の出没情報ページ URL をご共有ください。公式ページがまだ無い自治体さまも歓迎です（報道・住民投稿で補完します）。形式・更新頻度はオンラインで簡単に確認します。",
  },
  {
    step: "STEP 2",
    title: "試験取り込み",
    duration: "1〜2 週間",
    body: "当社で自動取り込みを設定し、表示を確認いただきます。位置精度・表記をご希望に合わせて調整します。",
  },
  {
    step: "STEP 3",
    title: "本番反映",
    duration: "ご確認次第",
    body: "住民・観光客への配信を開始。以降は公式サイトの更新に追従して自動反映されます。",
  },
];

// FAQ は 5 件: 費用 / 作業負担 / 公式ページ未整備 / 出典 / 停止
const FAQ = [
  {
    q: "費用はかかりますか？",
    a: "現時点では基本機能を無料でご利用いただけます。自治体さまには連携費用も発生しません。今後、より高度な機能を追加する際に有料オプションを設けることは検討していますが、自治体さまへの基本機能の無償提供は継続する方針です。",
  },
  {
    q: "自治体側の追加負担はありますか？",
    a: "新しいシステムや専用 API・CSV エクスポートを準備していただく必要はありません。現状の公式サイトをそのまま運用いただくだけで、KumaWatch 側が自動取り込みします。技術対応はすべて当社が担当します。公式ページが整備されていない場合は、報道や住民投稿で補完しますので、その場合も貴自治体側の作業は発生しません。",
  },
  {
    q: "公式の出没情報ページが無い、または更新が稀でも連携できますか？",
    a: "はい、可能です。公式ページが整備されていない場合は、KumaWatch 側で報道情報・住民投稿・隣接自治体や県の発表を統合し、貴自治体の出没情報を専用ページに整理表示します。住民・観光客に情報を届ける手段がこれまで無かった自治体ほど、効果が大きい連携になります。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。",
  },
  {
    q: "情報の出典・著作権はどうなりますか？",
    a: "全ての情報には自治体名・出典元を明記し、公式ページがある場合はリンクを併記します。情報の著作権は自治体に帰属したまま。住民・観光客は最終確認を必ず一次出典に戻れる設計です。",
  },
  {
    q: "連携を停止したい場合は？",
    a: "メール 1 通でいつでも停止可能。速やかに該当自治体の取り込みを止め、表示を取り下げます。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="既存の公式サイト運用そのままで、観光客・住民にクマ出没情報を届ける仕組みを、貴自治体に追加負担なくご提供します。"
    >
      {/* Hero — シンプルな 3 メッセージで即決訴求 */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体連携・追加負担なし
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          皆さまの公開情報を、住民・観光客に届けます。
        </h2>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2"><span className="text-amber-600">✓</span>既存の運用そのままで連携可</li>
          <li className="flex gap-2"><span className="text-amber-600">✓</span>現時点では無料でご利用いただけます</li>
          <li className="flex gap-2"><span className="text-amber-600">✓</span>獣医師監修の専門サービス</li>
        </ul>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-center"
            >
              <div className="text-lg font-bold text-stone-900 sm:text-xl">
                {s.v}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-stone-500 sm:text-[11px]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            メールで相談する →
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            連携の流れ
          </a>
        </div>
      </section>

      {/* Value props */}
      <h2>KumaWatch ならではの 3 つの特長</h2>
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
      <h2>市町村ごとに専用ページを自動生成</h2>
      <p>
        「○○市 クマ」で検索したときに表示される専用ページを、市町村単位で自動的に用意します。住民・観光客が知りたい貴自治体のクマ出没情報が、地図・期間・件数・最新の動向まで整理された形で届きます。
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
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-700">
          実物：
          <Link
            href="/place"
            className="ml-1 font-semibold text-amber-700 underline"
          >
            /place
          </Link>
          から市町村ページを閲覧できます。
        </div>
      </div>

      {/* Process timeline */}
      <h2 id="process">3 ステップで開始</h2>
      <p>
        お問い合わせから本番反映まで概ね 2〜3 週間。貴自治体側のご対応はミーティング 30 分とメール数往復のみで完了します。
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
            ["サービス名", "KumaWatch（くまウォッチ）"],
            ["URL", "https://kuma-watch.jp"],
            ["提供形態", "Web サービス（PC・スマホ対応／インストール不要）"],
            ["カバー範囲", "全国 47 都道府県／毎日自動更新"],
            ["利用料金", "現時点では基本機能を無料で提供（個人・自治体ともに連携費用は不要）"],
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
      <h2>運営チーム</h2>
      <p>
        獣医工学ラボは全国の事案を時空間分析・記事化し、自治体・研究機関・メディアにご活用いただいています。
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
          href="https://www.research-coordinate.co.jp/labs/vet/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-stone-200 bg-white p-4 hover:border-blue-400 hover:bg-blue-50/30"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            運営者
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Image
              src="/labs/vet-eng-lab.jpeg"
              alt="獣医工学ラボ ロゴ"
              width={240}
              height={134}
              className="h-auto w-24 shrink-0"
            />
            <div className="text-xs leading-relaxed text-stone-600">
              獣医師主体の獣医療・野生動物・公衆衛生領域の技術プロジェクト。リサーチコーディネート株式会社が運営。
            </div>
          </div>
        </a>
      </div>

      {/* CTA */}
      <h2 id="contact">お問い合わせ</h2>
      <div className="not-prose mt-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="text-sm text-stone-800">
          <div className="mb-3">
            <a
              href={CONTACT_MAILTO}
              className="font-semibold text-blue-700 underline"
            >
              contact@research-coordinate.co.jp
            </a>
            <span className="ml-2 text-xs text-stone-500">
              （獣医工学ラボ／3 営業日以内にご返信）
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              メールで相談する →
            </a>
            <Link
              href="/for-gov/spec"
              className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              庁内稟議用 資料を見る
            </Link>
          </div>
          <p className="mt-3 text-[11px] text-stone-500">
            「庁内稟議用 資料」は印刷／PDF 保存に対応した A4 仕様の資料ページです。本ページのリンクをそのまま庁内回覧にもご利用いただけます。
          </p>
        </div>
      </div>
    </PageShell>
  );
}
