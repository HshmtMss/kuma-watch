import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87&body=%E3%81%84%E3%81%A4%E3%82%82%E3%81%8A%E4%B8%96%E8%A9%B1%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%E2%96%A0%E8%87%AA%E6%B2%BB%E4%BD%93%E5%90%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E6%8B%85%E5%BD%93%E9%83%A8%E7%BD%B2%EF%BC%9A%0D%0A%E2%96%A0%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E9%80%A3%E7%B5%A1%E5%85%88%EF%BC%88%E9%9B%BB%E8%A9%B1%E5%8F%88%E3%81%AF%E3%83%A1%E3%83%BC%E3%83%AB%EF%BC%89%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A%0D%0A";

export const metadata: Metadata = {
  title: "自治体の方へ｜獣医師監修クマ出没情報の連携・配信｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。自治体さまが住民・観光客・登山者に届けたいメッセージを、KumaWatch が配信します。公式 HP の取り込みは一例で、PDF・紙運用・SNS など貴自治体の運用形態に合わせて対応。最短 1 回 30 分の打ち合わせで連携を開始でき、追加作業はほぼ発生せず、無料でご利用いただけます。",
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "自治体の方へ｜KumaWatch",
    description:
      "自治体さまが住民・観光客に届けたいメッセージを配信。最短 1 回 30 分の打ち合わせで連携完了、追加作業ほぼなし、無料でご利用いただけます。",
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自治体の方へ｜KumaWatch",
    description:
      "自治体さまが住民・観光客に届けたいメッセージを配信。最短 1 回 30 分の打ち合わせで連携完了、無料でご利用いただけます。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

const STATS = [
  { v: "70+", l: "自治体ソース" },
  { v: "47", l: "都道府県" },
  { v: "70,000+", l: "出没情報" },
  { v: "毎日", l: "自動更新" },
];

const PROCESS_STEPS = [
  {
    step: "STEP 1",
    title: "まずはご相談",
    duration: "メールでお気軽に",
    body: "「連携を検討したい」とご一報ください。公式 HP の運用、PDF・紙運用、SNS 中心、広報誌中心 — 自治体さまごとに運用は様々で OK です。状況をお聞かせいただきます。",
  },
  {
    step: "STEP 2",
    title: "30 分の打ち合わせ",
    duration: "最短 1 回で連携内容を確定",
    body: "オンライン 30 分で、住民・観光客に届けたいメッセージ・情報源・表示方法を一括ですり合わせます。技術的な実装はすべて当社で完結します。",
  },
  {
    step: "STEP 3",
    title: "本番反映",
    duration: "ご確認次第",
    body: "貴自治体専用ページが公開され、住民・観光客が「○○市 クマ」検索などで到達します。以降の更新運用も基本的に当社が担当します。",
  },
];

// FAQ は 5 件: 費用 / 作業負担 / 運用形態 / 出典 / 停止
const FAQ = [
  {
    q: "費用はかかりますか？",
    a: "無料でご利用いただけます。自治体さまには連携費用も発生しません。",
  },
  {
    q: "自治体側の追加負担はありますか？",
    a: "ほぼ発生しません。最短 1 回 30 分の打ち合わせで連携内容を確認したあとは、技術的な実装はすべて当社で完結します。新しいシステムや専用 API・CSV エクスポートをご準備いただく必要はありません。",
  },
  {
    q: "公式の出没情報ページが無い、または運用形態が他自治体と違っても連携できますか？",
    a: "はい、可能です。公式 HP の取り込みは連携手段の一例にすぎません。HP がない、PDF・紙運用、広報誌中心、SNS のみ — 自治体さまの運用は本当に様々で、それで構いません。最も重要なのは「貴自治体が住民・観光客に届けたいメッセージを届けること」なので、貴自治体の運用に合わせて方法を組み立てます。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。",
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
      lead="自治体さまが住民・観光客に届けたいメッセージを、KumaWatch が配信します。最短 1 回 30 分の打ち合わせで連携を開始でき、追加作業はほぼ発生しません。"
    >
      {/* Hero — シンプルな 4 メッセージで即決訴求 */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体連携・最短 1 MTG で開始
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          自治体さまが伝えたいメッセージを、住民・観光客に届けます。
        </h2>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2"><span className="text-amber-600">✓</span>最短 1 回 30 分の打ち合わせで連携開始</li>
          <li className="flex gap-2"><span className="text-amber-600">✓</span>公式 HP・PDF・紙・SNS 等、貴自治体の運用に合わせて対応</li>
          <li className="flex gap-2"><span className="text-amber-600">✓</span>無料でご利用いただけます</li>
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

      {/* 何が起こるか — 旧「3 つの違い」+「市町村ごとに専用ページ…」を
          1 セクションに統合。Hero の ✓ リストで価値訴求は済んでいるので、
          ここは「メッセージを届ける」中心に具体内容を伝える。 */}
      <h2>市町村ごとに専用ページを自動生成</h2>
      <p>
        「○○市 クマ」で検索した住民・登山者・観光客に向けて、市町村単位の専用ページを自動で用意します。このページに、貴自治体が住民・観光客に届けたい情報を組み込みます。公式 HP の取り込みは数ある手段の一例で、貴自治体の運用形態に合わせて柔軟に組み立てます。
      </p>
      <ul>
        <li>
          <strong>自治体さまからのメッセージ</strong>：注意喚起・対策呼びかけ・問い合わせ先など、伝えたい内容を掲載
        </li>
        <li>
          <strong>出没情報の整理表示</strong>：公式 HP・PDF・広報誌・SNS など貴自治体の情報源に応じた最適な形で整理
        </li>
        <li>
          <strong>一次出典へのリンク</strong>：公式ページがある場合はリンクを併記。住民・観光客が公式情報に戻れる導線
        </li>
        <li>
          <strong>地図・時系列での把握</strong>：地区別・月別件数・周辺市町村との比較
        </li>
      </ul>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <div className="relative aspect-[7/5] w-full bg-stone-100">
          <Image
            src="/lp/heatmap.jpg"
            alt="連携自治体専用ページのサンプル画面（準備中）"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-semibold text-white">
            連携自治体向けサンプル準備中
          </span>
        </div>
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-700">
          ベースとなる市町村ページの実物は{" "}
          <Link
            href="/place"
            className="font-semibold text-amber-700 underline"
          >
            /place
          </Link>{" "}
          からご覧いただけます。
        </div>
      </div>

      {/* Process timeline */}
      <h2 id="process">3 ステップで開始</h2>
      <p>
        貴自治体側のご対応は <strong>最短 1 回 30 分の打ち合わせ</strong>で完結します。技術的な実装はすべて当社で完結し、以降の運用も基本的に当社が担当します。
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

      {/* 旧「現場で使われる検知・撃退ソリューション」セクションは削除。
          /for-gov は KumaWatch との連携導入に絞った提案ページとして、
          他社製品の紹介は /products?for=gov に集約する方針。 */}

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
            ["利用料金", "無料で提供（個人・自治体ともに連携費用は不要）"],
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
          <div className="mt-1 text-sm font-semibold text-stone-900">
            獣医工学ラボ
          </div>
          <div className="mt-1 text-xs leading-relaxed text-stone-600">
            獣医師主体の獣医療・野生動物・公衆衛生領域の技術プロジェクト。リサーチコーディネート株式会社が運営。
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
