import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

export const metadata: Metadata = {
  title: "自治体の方へ｜公式クマ情報を住民・観光客へ配信",
  description:
    "御自治体が公式ページで発表したクマ出没情報を、登録した住民・観光客の通知へ自動でお届けします。まず 3 ヶ月無料でお試しいただけます。実装・運用は当社が担当します。",
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "自治体の方へ｜KumaWatch",
    description:
      "御自治体の公式クマ情報を、住民・観光客の通知へ自動でお届け。まず 3 ヶ月無料でお試しいただけます。",
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自治体の方へ｜KumaWatch",
    description:
      "御自治体の公式クマ情報を、住民・観光客の通知へ自動でお届け。まず 3 ヶ月無料でお試しいただけます。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

const PROCESS_STEPS = [
  {
    title: "ご相談",
    body: "下のフォームからご一報ください。配信元にする公式ページ（HP・PDF・SNS 等）を確認します。運用形態は問いません。",
  },
  {
    title: "設定",
    body: "当社で配信を構築します。御自治体側の作業や、新しいシステム・専用 API・CSV のご準備は必要ありません。",
  },
  {
    title: "配信開始",
    body: "御自治体専用の配信を開始します。まずは 3 ヶ月無料でお試しいただけます。",
  },
];

// FAQ は重要 3 件に圧縮 (費用 / 作業負担 / 運用形態)
const FAQ = [
  {
    q: "費用はかかりますか？",
    a: "まず 3 ヶ月無料でお試しいただけます。以降はご利用規模に応じてご案内します。",
  },
  {
    q: "自治体側の負担はありますか？",
    a: "ありません。これまで通り公式ページに発表していただくだけです。検知・配信はすべて当社で完結します。",
  },
  {
    q: "公式の出没情報ページが無くても導入できますか？",
    a: "ご相談ください。HP がない、PDF・紙運用、広報誌中心、SNS のみ — 御自治体の運用に合わせて配信元を組み立てます。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="御自治体が公式ページで発表したクマ出没情報を、登録した住民・観光客の通知へ自動でお届けします。届けるのは御自治体の一次情報です。"
    >
      {/* Hero */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体向け・公式情報の配信
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          御自治体の公式クマ情報を、住民・観光客へ早く、正確に。
        </h2>
        <p className="m-0 mb-4 text-sm leading-relaxed text-stone-700">
          公式ページで発表された情報を、登録した住民・観光客の通知へ自動でお届けします。届けるのは御自治体の一次情報です。
        </p>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span>
              公式に発表するだけで、見に来ない住民・観光客にも<strong>すぐ届く</strong>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span>
              まず<strong>3 ヶ月、無料でお試し</strong>いただけます
            </span>
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

      {/* できること */}
      <h2>できること</h2>
      <ul>
        <li>
          御自治体が公式ページで発表した情報を、住民・観光客の通知へ<strong>自動でお届け</strong>
        </li>
        <li>
          発表が<strong>すぐ届く</strong>（住民・観光客が見に来なくても届く）
        </li>
        <li>
          一次情報は<strong>御自治体の公式ページへ誘導</strong>（置き換えず、正確に）
        </li>
      </ul>

      {/* 自治体向けの対策製品（audience:自治体 を /products?for=gov で表示） */}
      <h2 id="products">自治体向けの対策製品</h2>
      <p>
        防護柵・監視カメラ・捕獲機材・撃退装置など、<strong>自治体・猟友会向け</strong>の製品・サービスも整理して掲載しています。導入検討の比較にご利用ください。
      </p>
      <div className="not-prose my-4">
        <Link
          href="/products?for=gov"
          className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          自治体向けの対策製品を見る →
        </Link>
      </div>

      {/* 導入の流れ — 3 ステップ */}
      <h2 id="process">3 ステップで開始</h2>
      <p>
        御自治体側のご対応は<strong>最初のご相談だけ</strong>。設定・運用はすべて当社で完結します。
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
        以下のフォームにご記入のうえ送信ボタンを押すと、そのまま運営に届きます。担当より 3 営業日以内にご返信いたします。
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
