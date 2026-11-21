import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import type { Product } from "@/lib/products";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E5%88%B6%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8E%B2%E8%BC%89%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

export const metadata: Metadata = {
  title: "アウトドア・レジャー製品／獣害対策製品の広告掲載",
  description:
    "アウトドア・レジャー製品、獣害対策製品をくまウォッチで紹介する広告掲載のご案内。サイトへのアクセス月10万件、LINE登録者約1万人。山や野外で過ごす人、獣害に悩む地域の人に製品情報を届けます。",
  alternates: { canonical: `${SITE_URL}/for-vendors` },
  openGraph: {
    title: "広告掲載のご案内｜くまウォッチ",
    description:
      "アウトドア・レジャー製品、獣害対策製品をくまウォッチで紹介する広告掲載のご案内。対象カテゴリ・料金の考え方・お問い合わせフォーム。",
    url: `${SITE_URL}/for-vendors`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "広告掲載のご案内｜くまウォッチ",
    description: "アウトドア・レジャー製品、獣害対策製品の広告掲載。詳細はお問い合わせください。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

/**
 * 掲載検討時に事業者が最初に見る数字。数字は必ず「いつ時点か」と一緒に出す。
 * 展示会のリーフレット (public/for-gov/leaflet.pdf の裏面) と同じ数字・時点にそろえる。
 * 変えるときはリーフレットも作り直す。
 */
const AUDIENCE_AS_OF = "2026年11月";
const AUDIENCE_STATS: { value: string; unit: string; label: string }[] = [
  { value: "10", unit: "万件/月", label: "サイトへのアクセス" },
  { value: "約1", unit: "万人", label: "LINE 登録者" },
];
const LEAFLET_PDF = "/for-gov/leaflet.pdf";

/**
 * 掲載イメージ用のサンプル。実在製品を「掲載例」として出すと、その事業者が
 * 出稿しているように読めてしまうため、架空の製品で見た目だけを見せる。
 * 実際の一覧は /products へのリンクで確認してもらう。
 */
const SAMPLE_BASE: Product = {
  id: "sample",
  category: "撃退・忌避",
  subcategory: "スプレー",
  name: "（サンプル）クマ撃退スプレー PRO",
  vendor: "サンプル社",
  url: "https://kuma-watch.jp/products",
  price: "12,000円前後",
  purpose: "至近距離での退避行動を助ける",
  features: "有効射程8m・軽量200g・ホルスター付属",
  targetUse: "登山・山菜採り・農作業",
  caveats: "航空機の預け入れ・機内持ち込みは不可",
  relatedArticle: "",
  priority: "",
  source: "",
  notes: "",
  audience: "個人",
  affiliateUrl: "https://kuma-watch.jp/products",
  scene: "trail",
  imageUrl: "",
  featured: false,
  ctaLabel: "",
};

/** 注目掲載(有料枠)のサンプル。写真は生成画像で、実在の製品・ブランドではない。 */
const SAMPLE_FEATURED: Product = {
  ...SAMPLE_BASE,
  id: "sample-featured",
  features: "有効射程8m・軽量200g・ホルスター付属。実売価格と入手先も併記します。",
  imageUrl: "/products/sample-featured.jpg",
  featured: true,
  ctaLabel: "公式サイトで詳しく見る",
};

// 対象カテゴリ。説明はチップ表示時に hover で出すかページ下部に短くまとめる程度。
const CATEGORIES = [
  "アウトドア用品",
  "レジャー製品・サービス",
  "獣害対策製品（クマ・シカ・イノシシ・サルなど）",
  "撃退・忌避",
  "防護柵・物理バリア",
  "住宅・誘引物管理",
  "個人装備",
  "監視・検知システム",
  "捕獲・駆除",
  "情報・教育サービス",
];

export default function ForVendorsPage() {
  return (
    <PageShell
      title="広告掲載のご案内"
      lead="アウトドア・レジャー製品、獣害対策製品を、くまウォッチで紹介します。"
    >
      {/* Hero — 3 メッセージで即決 */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800">
          メーカー・販売店の方へ　製品の広告掲載のご提案
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          アウトドア・レジャー製品、獣害対策製品の広告掲載
        </h2>
        <p className="m-0 mb-4 text-sm leading-relaxed text-stone-700">
          くまウォッチは、獣医師が開発した、全国のクマ出没情報を地図で確認できる無料サイトです。登録した地域の出没を
          LINE でお知らせします。山や野外で過ごす人、獣害に悩む地域の人に、貴社の製品情報を届けます。
        </p>
        <div className="mb-4 grid grid-cols-2 gap-2.5">
          {AUDIENCE_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-emerald-100 bg-white px-3 py-2.5"
            >
              <div className="text-2xl font-black leading-none text-stone-900">
                {s.value}
                <span className="ml-1 text-[11px] font-semibold text-stone-500">
                  {s.unit}
                </span>
              </div>
              <div className="mt-1.5 text-[11px] leading-snug text-stone-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="m-0 mb-5 text-xs text-stone-500">
          {AUDIENCE_AS_OF}時点
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          掲載について相談する →
        </a>
        <a
          href={LEAFLET_PDF}
          download
          className="ml-4 text-sm font-semibold text-emerald-800 underline underline-offset-4"
        >
          リーフレット（PDF）
        </a>
      </section>

      {/* 何が掲載できるか — カテゴリは chip 表示で 1 画面に収める */}
      <h2 id="categories">掲載できる製品・サービス</h2>
      <p>クマをはじめとする野生動物の対策や、山・野外での安全に関わるものが対象です。以下のカテゴリ以外もご相談ください。</p>
      <div className="not-prose my-4 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <span
            key={c}
            className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700"
          >
            {c}
          </span>
        ))}
      </div>
      {/* 掲載イメージ。言葉だけだと「どう見えるか」が伝わらないので実物を出す。 */}
      <h2 id="example">掲載例</h2>
      <p>
        <strong>注目掲載</strong>は製品写真が入り、幅広のカードで一覧の先頭に
        固定されます。ボタンの文言も指定できます。通常掲載は文字のみ・カテゴリ内の通常順です。
      </p>
      <div className="not-prose my-4">
        <FeaturedProductCard product={SAMPLE_FEATURED} sample />
      </div>
      <p className="text-sm text-stone-600">
        上はサンプルです。実際の掲載は{" "}
        <Link href="/products">対策製品ページ</Link>
        でご覧いただけます。
      </p>

      {/* 掲載枠が実際に動いている証拠。読者が「見て終わり」ではなく購入まで
          進んでいることを、実測値で示す。 */}
      <div className="not-prose my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="m-0 text-sm font-semibold text-stone-900">
          このカードは、読者の購入まで届いています
        </p>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <div className="text-lg font-black leading-none text-stone-900">
              1,126
              <span className="ml-1 text-[11px] font-semibold text-stone-500">
                クリック/月
              </span>
            </div>
            <div className="mt-1.5 text-[11px] text-stone-600">
              製品カードから販売ページへ
            </div>
          </div>
          <div>
            <div className="text-lg font-black leading-none text-stone-900">
              4.4
              <span className="ml-1 text-[11px] font-semibold text-stone-500">
                %
              </span>
            </div>
            <div className="mt-1.5 text-[11px] text-stone-600">
              クリックのうち購入に至った割合
            </div>
          </div>
        </div>
        <p className="m-0 mt-3 text-[11px] text-stone-500">
          直近30日の実測値（Amazon 経由）
        </p>
      </div>

      {/* 料金の考え方 */}
      <h2 id="pricing">料金の考え方</h2>
      <p>
        掲載先（製品ページ・対策ハブ・記事内）、見せ方、期間の組み合わせで決まります。
        <strong>ご予算感をお伝えいただければ、その範囲で組める案をお出しします。</strong>
        少額からのトライアル枠もご相談ください。
      </p>

      {/* 掲載までの流れ */}
      <h2>掲載までの流れ</h2>
      <ol>
        <li>
          <strong>ご相談</strong> — 製品とご予算感をフォームからお知らせください。
        </li>
        <li>
          <strong>すり合わせ</strong> — 掲載内容・場所・期間を決めます。
        </li>
        <li>
          <strong>公開</strong> — 当社で実装して公開します。
        </li>
      </ol>

      {/* FAQ — 重要 3 つに圧縮 */}
      <h2 id="faq">よくあるご質問</h2>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          どんな製品でも掲載できますか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          クマ・シカ・イノシシ・サルなどの野生動物対策や、登山・キャンプ・農作業などアウトドアでの安全に関わり、安全に資すると判断したものが対象です。科学的根拠や安全性に懸念がある製品はお断りする場合があります。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          PR 表記・ステマ規制への対応は?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          有料掲載枠には「PR」「広告」「Sponsored」のいずれかの表記を必ず表示し、HTML 上は <code>rel=&quot;sponsored&quot;</code> を付与します。景品表示法・ステマ規制（2023 年 10 月施行）に準拠した運用です。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          自治体・公共機関でも掲載できますか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          自治体さま向けには{" "}
          <Link href="/for-gov" className="text-amber-700 underline">
            法人・自治体の方へ
          </Link>
          をご用意しています。
        </div>
      </details>

      {/* お問い合わせ */}
      <h2 id="contact">お問い合わせ</h2>
      <p>
        掲載をご検討中の製品・サービスについて、以下のフォームから具体的な内容をお聞かせください。
      </p>
      <ContactForm kind="vendor" />
      <div className="not-prose mt-4 flex flex-wrap gap-2 text-xs text-stone-600">
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
