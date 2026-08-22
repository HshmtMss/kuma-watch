import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

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

// 提案 2 の裏づけとして載せる分析例。レポート全文ではなく、自治体が予算と人員を
// どこに向けるかの判断に直結する数字だけを 4 つに絞る。
// 2026 年 10 月の件数予測 (3,879 件) は載せない。モデルの平均誤差が 121% と大きく、
// 公開ページで数字だけが独り歩きすると誤った安心・不安を与えるため。
const ANALYSIS_FINDINGS = [
  {
    tag: "どこで起きるか",
    value: "2.28",
    unit: "倍",
    title: "森林率 40〜60% の境界帯",
    body: "国土の 9% しかないこの帯に出没の 19% が集中します。奥山（森林率 80% 以上）は国土の 40% を占めますが出没は 29%（0.73 倍）。守るべきは奥山でも市街地でもなく、その境界です。",
  },
  {
    tag: "何をしている時か",
    value: "85.9",
    unit: "倍",
    title: "山菜・きのこ採りの最中",
    body: "人身被害の起きやすさ（全体の平均を 1.0 としたとき）。農作業中 18.9 倍、登山・入山 12.6 倍に対し、車両運転中は 0.3 倍です。",
  },
  {
    tag: "いつまで警戒するか",
    value: "2.61",
    unit: "倍",
    title: "出没から 7 日以内の同じ場所",
    body: "一度出た地点で再び出没する割合は 26.2%（平常時 10.0%）。14 日以内で 2.05 倍、30 日以内で 1.51 倍と下がっていきます。",
  },
  {
    tag: "何に引き寄せられるか",
    value: "3,475",
    unit: "件",
    title: "10〜11 月の誘引物は「柿」が突出",
    body: "秋のピークで最多の誘引物。次いで栗 854 件、生ゴミ・堆肥 166 件です。夏（8〜9 月）はその他果樹 687 件が中心で、月ごとに要因が入れ替わります。",
  },
];

// レポートの結論。数字ではなく「次に何をするか」なので、上の 4 枚とは別立てにする。
const ANALYSIS_ACTIONS = [
  {
    head: "投資",
    body: "奥山へのリソース投下を見直し、森林率 40〜60% のモザイク地帯の藪刈り・緩衝帯整備に予算と人員を集中する。",
  },
  {
    head: "防衛",
    body: "被害率が最も高い農地で、柿などの未収穫果樹や生ゴミを 10 月のピーク前に撤去・管理する。",
  },
  {
    head: "行動",
    body: "出没が確認された地点は、少なくとも 7 日間は立ち入りを制限する運用を徹底する。",
  },
];

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="御地域の情報を、住民・観光客・訪日外国人に正しく届けます。"
    >
      {/* Hero */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-600 px-3 py-1 text-[11px] font-bold text-white">
          提案 1
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          くまウォッチを活用して
          <br className="hidden sm:block" />
          情報の発信と浸透を目指しませんか？
        </h2>
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

      {/* 提案 2 — 提案 1 (ヒーロー) と同格なので体裁を揃える。バッジ + 見出し +
          本文をグラデーションの枠なしカードに載せる形で統一し、色だけ変える。
          問い合わせの直前に置き、中身は問い合わせに委ねて 1〜2 行に留める。 */}
      <section className="not-prose my-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-bold text-white">
          提案 2・オプション
        </div>
        <h2
          id="research"
          className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl"
        >
          地域特化型の傾向・対策研究を
          <br className="hidden sm:block" />
          推進しませんか？
        </h2>
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

      {/* 分析例 — 提案 2 が具体的に何を出すのかを、実データの数字で示す。
          レポートは 12 ページあるが、ここは「予算と人員をどこへ向けるか」に
          直結する 4 つだけに絞る。 */}
      <h2 id="analysis">分析例：データから見える対策の優先順位</h2>
      <p>
        自社データ <strong>78,029 件</strong>（2026 年 7 月時点）を、場所・時期・行動・誘引物の 4
        つの軸で分析した例です。出没件数の多さと、実際に人身被害が起きる場所は一致しません。
      </p>
      <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
        {ANALYSIS_FINDINGS.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="text-[11px] font-semibold text-emerald-700">
              {f.tag}
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-bold leading-none text-stone-900">
                {f.value}
              </span>
              <span className="text-sm font-semibold text-stone-600">
                {f.unit}
              </span>
            </div>
            <div className="mt-1.5 text-sm font-bold text-stone-900">
              {f.title}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {f.body}
            </p>
          </div>
        ))}
      </div>

      <div className="not-prose my-5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 sm:p-5">
        <div className="text-sm font-bold text-stone-900">
          このレポートの結論
        </div>
        <ol className="m-0 mt-3 space-y-2.5 p-0">
          {ANALYSIS_ACTIONS.map((a) => (
            <li key={a.head} className="flex gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-emerald-700 px-2.5 py-0.5 text-[11px] font-bold text-white">
                {a.head}
              </span>
              <span className="text-xs leading-relaxed text-stone-700">
                {a.body}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-xs leading-relaxed text-stone-500">
        出典：KumaWatch データ分析レポート 2026（獣医工学ラボ／リサーチコーディネート株式会社）。2026
        年 7 月 26 日時点の自社データ 78,029
        件に基づきます。行動別の倍率は、目撃記録にクマの様子しか残らない場合があるため実際より大きく出る傾向があります（順位の傾向は変わりません）。
        <br />
        御自治体の区域に限定した分析、季節・誘引物別の対策カレンダー、定期レポートのご提供も承ります。
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
