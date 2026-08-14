import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

const META_DESC =
  "御自治体が公式ページに出したクマ出没情報と注意喚起を、住民のスマホ・観光客の検索結果・訪日外国人向けの英語ページまで届けます。御自治体のご対応は、これまで通り公式ページに発表するだけ。まず 3 ヶ月無料。";

export const metadata: Metadata = {
  title: "自治体の方へ｜公式クマ情報を住民・観光客・訪日客へ届ける",
  description: META_DESC,
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "自治体の方へ｜KumaWatch",
    description: META_DESC,
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自治体の方へ｜KumaWatch",
    description: META_DESC,
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

// 「誰に届くか」を 3 つに分けて具体化する。従来は「住民・観光客の通知へ自動で
// お届け」という一文だけで、届く相手も届き方も読み取れず問い合わせに繋がって
// いなかった。件数はすべて実データで検証済みの値を使う。
const AUDIENCES = [
  {
    who: "住民",
    how: "LINE・スマホの通知",
    body: "地域を登録した住民のスマホへ、御自治体の発表を通知します。公式ページを見に来ていない方にも届きます。",
  },
  {
    who: "観光客・登山者",
    how: "「○○市 クマ」の検索結果",
    body: "市町村ごと・登山口や観光地ごとの専用ページを用意しています。出かける前に検索した人が、御自治体の情報に辿り着きます。",
  },
  {
    who: "訪日外国人",
    how: "英語ページ",
    body: "高尾山・富士山・上高地・日光・知床など、主要 105 か所の英語ページを公開しています。日本語の公式ページだけでは届かない層に伝わります。",
  },
];

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

const FAQ = [
  {
    q: "費用はかかりますか？",
    a: "まず 3 ヶ月無料でお試しいただけます。以降はご利用規模に応じてご案内します。",
  },
  {
    q: "自治体側の負担はありますか？",
    a: "ありません。これまで通り公式ページに発表していただくだけです。更新の検知・配信はすべて当社で完結し、新しいシステムや専用 API・CSV のご準備も不要です。",
  },
  {
    q: "公式の出没情報ページが無くても導入できますか？",
    a: "ご相談ください。HP がない、PDF・紙運用、広報誌中心、SNS のみ — 御自治体の運用に合わせて配信元を組み立てます。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。",
  },
  {
    q: "観光客や訪日外国人にはどう届きますか？",
    a: "登山口・観光地ごとのページから地域のページへ辿れる構造にしており、「○○市 クマ」と検索した方が御自治体の情報に行き着きます。訪日外国人には、高尾山・富士山・上高地・日光・知床など主要 105 か所の英語ページで伝えます。",
  },
  {
    q: "当市の注意喚起の文章も載りますか？",
    a: "はい。御自治体のクマ関連ページから住民向けの注意喚起を取り込み、地域のページに出典付きで掲載します。掲載内容のご確認・修正のご依頼はいつでも承ります。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="御自治体が公式ページに出したクマ出没情報と注意喚起を、住民・観光客・訪日外国人に届けるところまでを担います。御自治体のご対応は、これまで通り公式ページに発表するだけです。"
    >
      {/* Hero */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
          自治体向け・公式情報の到達支援
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          公式に出した情報を、
          <br className="hidden sm:block" />
          読まれるところまで届けます。
        </h2>
        <p className="m-0 mb-4 text-sm leading-relaxed text-stone-700">
          クマの出没情報も注意喚起も、公式ページに掲載した時点では「置いてある」だけで、住民や観光客が見に来なければ伝わりません。KumaWatch
          は、御自治体が出した情報を <strong>住民のスマホ</strong>・
          <strong>観光客の検索結果</strong>・<strong>訪日外国人向けの英語ページ</strong>
          まで運びます。
        </p>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span>
              御自治体の作業は<strong>これまで通り公式ページに出すだけ</strong>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span>
              新しいシステム・専用 API・CSV の<strong>ご準備は不要</strong>
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

      {/* 誰に届くか — 本サービスの中核。3 つの届け先を具体的に示す */}
      <h2 id="audience">誰に届くのか</h2>
      <div className="not-prose my-5 space-y-3">
        {AUDIENCES.map((a) => (
          <div
            key={a.who}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-bold text-stone-900">{a.who}</span>
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
                {a.how}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
              {a.body}
            </p>
          </div>
        ))}
      </div>

      {/* 何を届けるか */}
      <h2 id="what">何を届けるのか</h2>
      <ul>
        <li>
          <strong>クマの出没情報</strong> — 御自治体が公表した個別の出没事案
        </li>
        <li>
          <strong>御自治体からの注意喚起</strong> —
          「入山時は鈴を」「果実の放置に注意」といった住民向けメッセージを、地域のページに掲載します
        </li>
      </ul>
      <p>
        どちらも<strong>御自治体名と公式ページへのリンクを必ず併記</strong>します。読んだ人は最後に公式ページへ戻る導線になっており、一次情報源としての位置づけは変わりません。
      </p>

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
