import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

export const metadata: Metadata = {
  title: "自治体の方へ｜獣医師監修クマ出没情報の連携・配信",
  description:
    "獣医師監修・獣医工学ラボ運営。自治体さまが住民・観光客・登山者に届けたいメッセージを、KumaWatch が配信します。最短 1 回 30 分の打ち合わせで連携でき、追加作業はほぼ発生せず、無料でご利用いただけます。",
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

const PROCESS_STEPS = [
  {
    title: "ご相談",
    body: "下のフォームから「連携を検討したい」とご一報ください。公式 HP・PDF・紙・SNS など、貴自治体の運用形態を問わずご対応いたします。",
  },
  {
    title: "30 分の打ち合わせ",
    body: "オンライン 30 分で、住民・観光客に届けたいメッセージ・情報源・表示方法を一括ですり合わせます。技術的な実装はすべて当社で完結します。",
  },
  {
    title: "本番反映",
    body: "貴自治体専用ページが公開され、住民・観光客が「○○市 クマ」検索などで到達します。以降の更新運用も基本的に当社が担当します。",
  },
];

// FAQ は重要 3 件に圧縮 (費用 / 作業負担 / 運用形態)
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
    q: "公式の出没情報ページが無くても連携できますか？",
    a: "はい、可能です。HP がない、PDF・紙運用、広報誌中心、SNS のみ — 自治体さまの運用に合わせて方法を組み立てます。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="自治体さまが住民・観光客に届けたいメッセージを、KumaWatch が配信します。最短 1 回 30 分の打ち合わせで連携でき、追加作業はほぼ発生しません。"
    >
      {/* Hero — 3 メッセージ */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体連携・最短 1 MTG で開始
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          自治体さまが伝えたいメッセージを、住民・観光客に届けます。
        </h2>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span><strong>最短 1 回 30 分</strong>の打ち合わせで連携開始</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span><strong>無料</strong>でご利用いただけます (連携費用なし)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span><strong>獣医師監修</strong> / 獣医工学ラボ運営の専門サービス</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            お問い合わせ →
          </a>
          <Link
            href="/for-gov/spec"
            className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            庁内稟議用 資料
          </Link>
        </div>
      </section>

      {/* 何をするか — 1 段落 + 主要要素のチップで簡潔に */}
      <h2>連携で何が起きるか</h2>
      <p>
        「○○市 クマ」で検索した住民・登山者・観光客に向けて、市町村単位の専用ページを自動で用意し、貴自治体が届けたい情報を組み込みます。公式 HP の取り込みは数ある手段の一例で、貴自治体の運用形態に合わせて柔軟に組み立てます。
      </p>
      <ul>
        <li>
          <strong>自治体さまからのメッセージ</strong> — 注意喚起・対策呼びかけ・問い合わせ先など、伝えたい内容を掲載
        </li>
        <li>
          <strong>出没情報の整理表示</strong> — 公式 HP・PDF・広報誌・SNS など貴自治体の情報源に応じた形で整理
        </li>
        <li>
          <strong>一次出典へのリンク</strong> — 住民・観光客が公式情報に必ず戻れる導線
        </li>
        <li>
          <strong>地図・時系列での把握</strong> — 地区別・月別件数・周辺市町村との比較
        </li>
      </ul>

      {/* 連携の流れ — 3 ステップ */}
      <h2 id="process">3 ステップで開始</h2>
      <p>
        貴自治体側のご対応は<strong>最短 1 回 30 分の打ち合わせ</strong>で完結します。技術的な実装はすべて当社で完結し、以降の運用も基本的に当社が担当します。
      </p>
      <div className="not-prose my-5 space-y-3">
        {PROCESS_STEPS.map((p, i) => (
          <div
            key={p.title}
            className="relative rounded-xl border border-stone-200 bg-white p-4 pl-12"
          >
            <div className="absolute left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
              {i + 1}
            </div>
            <div className="text-sm font-semibold text-stone-900">{p.title}</div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">{p.body}</p>
          </div>
        ))}
      </div>

      {/* FAQ — 3 件に圧縮 */}
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

      {/* お問い合わせ */}
      <h2 id="contact">お問い合わせ</h2>
      <p>
        ご相談内容を以下のフォームに記入して送信ボタンを押すと、ご利用のメールアプリが起動し、入力内容がメール本文に挿入されます。
      </p>
      <ContactForm kind="gov" />
      <div className="not-prose mt-4 flex flex-wrap gap-2 text-xs text-stone-600">
        <Link
          href="/for-gov/spec"
          className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-4 py-1.5 font-semibold text-stone-700 hover:bg-stone-50"
        >
          庁内稟議用 資料を見る (印刷対応)
        </Link>
        <a
          href={CONTACT_MAILTO}
          className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-4 py-1.5 font-semibold text-stone-700 hover:bg-stone-50"
        >
          フォームを使わずメールで送る
        </a>
      </div>
    </PageShell>
  );
}
