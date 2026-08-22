import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import ReportViewer from "./ReportViewer";

const SITE_URL = "https://kuma-watch.jp";
const META_DESC =
  "KumaWatch は、クマの情報を調べる人が日常的に使っているサービスです。御地域のクマ出没情報と安全に関する情報を、住民のスマホ・観光客の検索結果・訪日外国人向けの英語ページに載せ、探しに来ない人にも届けます。御自治体のご対応は情報を出すだけ。まず 3 ヶ月無料。";

export const metadata: Metadata = {
  title: "自治体の方へ｜地域の情報を住民・観光客・訪日客へ届ける",
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

// 「誰に届くか」の整理。住民と観光客は届き方が同じ (どちらも通知登録でき、
// どちらも検索から辿り着く) なので 1 つにまとめる。以前は住民=通知 /
// 観光客=検索と分けていたが、観光地・登山口を登録した観光客にも通知は届くため
// 実装と合っていなかった (LINE / Web Push とも半径 10km の spot 配信がある)。
const AUDIENCES = [
  {
    who: "住民・観光客",
    how: ["LINE・スマホの通知", "検索結果"],
    body: "お住まいの地域でも、出かける先の観光地・登山口でも登録でき、登録した方には通知で直接届きます。登録のない方にも、「○○市 クマ」などの検索から市町村ごと・観光地ごとのページを通じて届きます。",
  },
  {
    who: "訪日外国人",
    how: ["英語ページ"],
    body: "高尾山・富士山・上高地・日光・知床など、主要 105 か所の英語ページを公開しています。日本語だけでは届かない層に伝わります。",
  },
];

const PROCESS_STEPS = [
  {
    title: "ご相談",
    body: "下のフォームからご一報ください。配信元にする情報（HP・PDF・SNS 等）を確認します。運用形態は問いません。",
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
    q: "既にクマ対策のシステムを導入しています。併用できますか？",
    a: "できます。AI カメラ・防犯カメラ・既存の通報システム・住民からの投稿など、どんな手段で把握された情報であっても、住民・観光客へ届けるためのハブとして機能します。既存の仕組みを置き換えるものではなく、把握された情報の「届く範囲」を広げるものとお考えください。",
  },
  {
    q: "公式の出没情報ページが無くても導入できますか？",
    a: "ご相談ください。HP がない、PDF・紙運用、広報誌中心、SNS のみ — 御自治体の運用に合わせて配信元を組み立てます。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。",
  },
  {
    q: "観光客や訪日外国人にはどう届きますか？",
    a: "住民の方と同じ仕組みで届きます。観光地・登山口を登録された方には通知が届き、登録のない方も「○○市 クマ」などの検索から御自治体の情報に行き着きます。訪日外国人には、高尾山・富士山・上高地・日光・知床など主要 105 か所の英語ページで伝えます。",
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
      lead="御地域の情報を、住民・観光客・訪日外国人に正しく届けます。"
    >
      {/* ページの骨格。以前は小さなバッジ (11px) が提案 1 / 2 の唯一の目印で、
          「提案が 2 つあり、どこからどこまでがどちらか」が読み取れなかった。
          ①冒頭に 2 枚の索引を置き、②各提案の頭に帯を敷いて章の切れ目を作り、
          ③その提案に属する見出しを帯と同じ色でそろえる、の 3 点で構造を示す。 */}
      <div className="not-prose mb-9">
        <p className="m-0 mb-3 text-sm font-semibold text-stone-700">
          御自治体へのご提案は、次の 2 つです。
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <IndexCard
            n={1}
            tone="amber"
            name="情報の発信と浸透"
            body="御地域の出没情報と注意喚起を、住民のスマホ・観光客の検索結果・訪日外国人向けの英語ページへ届けます。"
          />
          <IndexCard
            n={2}
            tone="emerald"
            option
            name="地域特化型の傾向・対策研究"
            body="御地域の特性に合わせた分析アルゴリズムを開発します。成果物の実物（全 12 ページ）を掲載しています。"
          />
        </div>
      </div>

      {/* ─────────── ご提案 1 ─────────── */}
      <ProposalBanner
        n={1}
        tone="amber"
        title="くまウォッチを活用して情報の発信と浸透を目指しませんか？"
      />
      <section className="not-prose mt-3 mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        {/* 見出しが「情報の発信と浸透を目指しませんか？」と問いを立てているので、
            本文は課題を繰り返さず答えだけを書く。「発信/届く/浸透」を重ねると
            3 文で同じ語が 2 回ずつ出て読みにくくなる。 */}
        <p className="m-0 mb-4 text-sm leading-relaxed text-stone-700">
          KumaWatch は、クマの情報を調べる人が日常的に使っているサービスです。御地域の情報を
          <strong>住民のスマホ</strong>・<strong>観光客の検索結果</strong>・
          <strong>訪日外国人向けの英語ページ</strong>に載せ、
          <strong>探しに来ない人にも届けます</strong>。
        </p>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2">
            <span className="text-amber-600">✓</span>
            <span>
              御自治体の作業は<strong>これまで通り情報を出すだけ</strong>
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
        </div>
      </section>

      {/* 提案 1 の全体像。ヒーローの 3 点を図で示したもので、以降の
          「誰に届くのか」「3 ステップで開始」の見取り図にもなる。
          横長の図はスマホだと文字が小さくなるので、原寸を開けるようにしておく。 */}
      <ProposalFigure
        src="/for-gov/proposal-1.webp"
        alt="提案 1 の図解。自治体の作業負担ゼロで情報の届く範囲を最大化する。左から、住民・観光客・訪日客のスマホへ配信、追加作業や新システムは不要で 3 ヶ月無料、ご相談・自動設定・配信開始の 3 ステップ。"
      />

      {/* 誰に届くか — 提案 1 の中核。3 つの届け先を具体的に示す */}
      <h2 id="audience">誰に届くのか</h2>
      <div className="not-prose my-5 space-y-3">
        {AUDIENCES.map((a) => (
          <div
            key={a.who}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-bold text-stone-900">{a.who}</span>
              {a.how.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800"
                >
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
              {a.body}
            </p>
          </div>
        ))}
      </div>

      {/* 何を届けるか — 現在配信している情報だけを書く。観光・地域情報の配信は
          今後の実装予定であり、掲載中の機能と受け取られないようここには含めない。 */}
      <h2 id="what">何を届けるのか</h2>
      <ul>
        <li>
          <strong>クマの出没情報</strong> — 御自治体が公表した個別の出没事案
        </li>
        <li>
          <strong>安全に関する情報</strong> —
          「入山時は鈴を」「果実の放置に注意」といった、御自治体からの注意喚起や対策の呼びかけ
        </li>
      </ul>
      <p>
        いずれも<strong>御自治体名と出典リンクを必ず併記</strong>します。一次情報源としての位置づけは変わりません。
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

      {/* ─────────── ご提案 2 ─────────── */}
      <ProposalBanner
        n={2}
        tone="emerald"
        option
        title="地域特化型の傾向・対策研究を推進しませんか？"
      />
      <section className="not-prose mt-3 mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6 [&_strong]:text-emerald-800">
        <p className="m-0 text-sm leading-relaxed text-stone-700">
          <strong>&ldquo;地域の特性&rdquo;に応じた分析アルゴリズムの開発</strong>
          をオプションでご提供します。どのような成果物になるかは、下の分析例をご覧ください。
        </p>
        <ProposalFigure
          src="/for-gov/proposal-2.webp"
          alt="提案 2 の図解。地域の特性に最適化した独自アルゴリズムで、より高度なクマ対策を実現する。左から、地域特性に最適化した専用設計、蓄積データを実効的な対策へ、お問い合わせ・ニーズの整理・開発の 3 ステップ。"
          inset
        />
      </section>

      {/* 分析例 — 提案 2 の成果物そのもの。要約カードは置かず、レポートを
          全 12 ページそのまま読めるようにする (めくる / PDF ダウンロード)。 */}
      {/* 提案 2 に属する見出しなので、下線を帯と同じ緑にそろえる
          (.article-body h2 の既定は amber。Tailwind の utility が勝つ) */}
      <h2 id="analysis" className="border-b-emerald-400">
        分析例：データ分析レポート 2026
      </h2>
      <p>
        提案 2 でお出しする成果物の実物です。自社データ <strong>78,029 件</strong>（2026
        年 7 月 26
        日時点）を、空間・時間・行動・誘引物・先行指標の 5 つの軸で分析しています。全 12
        ページをそのまま掲載しています。
      </p>
      <ReportViewer />
      <p className="text-xs leading-relaxed text-stone-500">
        発行：獣医工学ラボ（リサーチコーディネート株式会社）。御自治体の区域に限定した分析、季節・誘引物別の対策カレンダー、出没直後の即応ルール設計、定期レポートのご提供も承ります。
      </p>

      {/* お問い合わせ */}
      <h2 id="contact">お問い合わせ</h2>
      <p>
        以下のフォームにご記入のうえ送信ボタンを押すと、そのまま運営に届きます。担当より 3 営業日以内にご返信いたします。
      </p>
      <ContactForm kind="gov" />
    </PageShell>
  );
}

// 横長の図解。スマホでは文字が小さくなるため、原寸を別タブで開けるようにする。
// inset は色付きカードの内側に置く場合 (提案 2) の余白調整。
function ProposalFigure({
  src,
  alt,
  inset,
}: {
  src: string;
  alt: string;
  inset?: boolean;
}) {
  return (
    <figure className={`not-prose ${inset ? "mt-4" : "my-6"}`}>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={859}
          className="h-auto w-full rounded-xl border border-stone-200 bg-white"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </a>
      <figcaption className="mt-1.5 text-center text-[11px] text-stone-500">
        画像をタップすると拡大表示します
      </figcaption>
    </figure>
  );
}

// 冒頭の索引カード。ページに入って最初に「提案は 2 つ」と分かるようにする。
function IndexCard({
  n,
  tone,
  name,
  body,
  option,
}: {
  n: number;
  tone: "amber" | "emerald";
  name: string;
  body: string;
  option?: boolean;
}) {
  const amber = tone === "amber";
  return (
    <a
      href={`#proposal-${n}`}
      className={`block rounded-xl border p-4 transition-colors ${
        amber
          ? "border-amber-300 bg-amber-50/70 hover:bg-amber-50"
          : "border-emerald-300 bg-emerald-50/70 hover:bg-emerald-50"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-extrabold text-white ${
            amber ? "bg-amber-600" : "bg-emerald-700"
          }`}
        >
          {n}
        </span>
        <span
          className={`text-[11px] font-bold tracking-widest ${
            amber ? "text-amber-800" : "text-emerald-800"
          }`}
        >
          ご提案 {n}
        </span>
        {option && (
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-emerald-800">
            オプション
          </span>
        )}
      </div>
      <div className="mt-2 text-base font-bold text-stone-900">{name}</div>
      <p className="mt-1 text-xs leading-relaxed text-stone-600">{body}</p>
      <span
        className={`mt-2 inline-block text-xs font-semibold ${
          amber ? "text-amber-800" : "text-emerald-800"
        }`}
      >
        この提案を見る →
      </span>
    </a>
  );
}

// 各提案の頭に敷く帯。ページの中で「章がここから変わる」ことを示す唯一の合図なので、
// 面で色を置いて、番号と問いかけを本文より大きく出す。
// h2 には .article-body h2 の既定 (amber の下線 / 濃い文字色) が効くため、
// Tailwind の utility で打ち消している。
function ProposalBanner({
  n,
  tone,
  title,
  option,
}: {
  n: number;
  tone: "amber" | "emerald";
  title: string;
  option?: boolean;
}) {
  const amber = tone === "amber";
  return (
    <div
      id={`proposal-${n}`}
      className={`not-prose mt-10 scroll-mt-4 rounded-2xl px-5 py-5 sm:px-6 ${
        amber ? "bg-amber-600" : "bg-emerald-700"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-extrabold ${
            amber ? "text-amber-700" : "text-emerald-800"
          }`}
        >
          {n}
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] text-white/85">
          ご提案 {n}
        </span>
        {option && (
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
            オプション
          </span>
        )}
      </div>
      <h2 className="m-0 mt-2.5 border-b-0 p-0 text-xl font-bold leading-snug text-white sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}
