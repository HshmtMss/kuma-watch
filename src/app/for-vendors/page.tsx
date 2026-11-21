import "../for-gov/for-gov.css";
import "./for-vendors.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Backpack, ChevronLeft, Fence, Tent } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LegalLinks from "@/components/LegalLinks";
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

const LAB_URL = "https://www.research-coordinate.co.jp/labs/vet/";
const COMPANY_URL = "https://www.research-coordinate.co.jp";

// 掲載できる 3 分野 (リーフレット裏面と同じ)。
const FIELDS: { icon: ReactNode; name: string; body: string }[] = [
  { icon: <Backpack aria-hidden />, name: "アウトドア用品", body: "登山・キャンプ・山菜採りの装備" },
  { icon: <Tent aria-hidden />, name: "レジャー製品", body: "釣り・トレラン・野外施設のサービス" },
  { icon: <Fence aria-hidden />, name: "獣害対策製品", body: "クマ・シカ・イノシシ・サルの撃退・防護柵・捕獲" },
];

// 分野の中の細かい種類。これ以外もご相談可。
const CATEGORIES = [
  "撃退・忌避",
  "防護柵・物理バリア",
  "住宅・誘引物管理",
  "個人装備",
  "監視・検知システム",
  "捕獲・駆除",
  "情報・教育サービス",
];

const STEPS = [
  { title: "ご相談", body: "製品とご予算感を、フォームからお知らせください。" },
  { title: "すり合わせ", body: "掲載内容・場所・期間を決めます。" },
  { title: "公開", body: "当社で作成して公開します。" },
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "どんな製品でも掲載できますか？",
    a: "クマ・シカ・イノシシ・サルなどの野生動物対策や、登山・キャンプ・農作業などアウトドアでの安全に関わり、安全に資すると判断したものが対象です。科学的根拠や安全性に懸念がある製品はお断りする場合があります。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "掲載先（製品ページ・対策ハブ・記事内）、見せ方、期間の組み合わせで決まります。ご予算感をお伝えいただければ、その範囲で組める案をお出しします。少額からのトライアル枠もご相談ください。",
  },
  {
    q: "PR 表記・ステマ規制への対応は？",
    a: "有料掲載枠には「PR」「広告」「Sponsored」のいずれかの表記を必ず表示し、リンクには rel=\"sponsored\" を付けます。景品表示法・ステマ規制（2023 年 10 月施行）に沿った運用です。",
  },
  {
    q: "自治体・公共機関でも掲載できますか？",
    a: (
      <>
        自治体・企業・団体の方には{" "}
        <Link href="/for-gov">野生動物対策支援</Link>
        をご用意しています。
      </>
    ),
  },
];

export default function ForVendorsPage() {
  return (
    <div className="fg fv" lang="ja">
      <header className="bar">
        <div className="wrap">
          <div className="crumb">
            <Link href="/" className="home">
              <ChevronLeft size={16} aria-hidden />
              くまウォッチ
            </Link>
            <span className="sep" aria-hidden>
              /
            </span>
            <a className="name" href="#top">
              広告掲載のご案内
            </a>
          </div>
          <nav aria-label="ページ内">
            <a className="t" href="#reach">
              掲載先
            </a>
            <a className="t" href="#example">
              掲載例
            </a>
            <a className="t" href="#faq">
              よくあるご質問
            </a>
            <a className="btn sm" href="#contact">
              相談する
            </a>
          </nav>
        </div>
      </header>

      <div className="hero" id="top">
        <div className="photo" aria-hidden />
        <div className="wrap">
          <div className="body">
            <p className="who">
              メーカー・販売店の方へ　<wbr />製品の広告掲載のご提案
            </p>
            <h1>
              アウトドア・<wbr />レジャー製品
              <br />
              獣害対策製品の<wbr /><em>広告掲載</em>
            </h1>
            <p className="lead">
              山や野外で過ごす人、
              <wbr />
              獣害に悩む地域の人に、
              <wbr />
              くまウォッチで貴社の製品を紹介します。
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                掲載について相談する →
              </a>
              <a className="dl" href={LEAFLET_PDF} download>
                リーフレット（PDF）
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="wrap">
        <section id="fields">
          <div className="head">
            <p className="label">掲載できるもの</p>
            <h2>
              3 つの分野の<wbr />製品・サービスを<wbr />掲載します
            </h2>
          </div>
          <div className="stack">
            <div className="fields">
              {FIELDS.map((f) => (
                <div key={f.name} className="card">
                  <div className="top">
                    <span className="icon">{f.icon}</span>
                    <b>{f.name}</b>
                  </div>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
            <div className="chips">
              {CATEGORIES.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <p className="note">上記以外の製品・サービスもご相談ください。</p>
          </div>
        </section>

        <section id="reach">
          <div className="head">
            <p className="label">掲載先</p>
            <h2>
              くまウォッチの<wbr />読者に届けます
            </h2>
          </div>
          <div className="kw card">
            <Image
              src="/for-vendors/kumawatch-screens.jpg"
              alt="くまウォッチの画面（パソコンとスマートフォン）"
              width={1024}
              height={874}
            />
            <div className="txt">
              <p>
                くまウォッチは、獣医師が開発した、全国のクマ出没情報を地図で確認できる無料サイトです。
                登録した地域の出没を LINE でお知らせします。
              </p>
              <div className="stats">
                {AUDIENCE_STATS.map((s) => (
                  <div key={s.label}>
                    <span>{s.label}</span>
                    <b>
                      {s.value}
                      <small>{s.unit}</small>
                    </b>
                  </div>
                ))}
              </div>
              <p className="note">{AUDIENCE_AS_OF}時点</p>
              <p className="to">この読者に、貴社の製品情報を届けます。</p>
              <Link className="see" href="/">
                くまウォッチを見る →
              </Link>
            </div>
          </div>
        </section>

        <section id="example">
          <div className="head">
            <p className="label">掲載例</p>
            <h2>
              注目掲載は、<wbr />写真つきで<wbr />一覧の先頭に
            </h2>
            <p>
              製品写真が入り、幅広のカードで一覧の先頭に固定されます。ボタンの文言も指定できます。
              通常掲載は文字のみ・カテゴリ内の通常順です。
            </p>
          </div>
          <div className="stack">
            <FeaturedProductCard product={SAMPLE_FEATURED} sample />
            <p className="note">
              上はサンプルです。実際の掲載は <Link href="/products">対策製品ページ</Link>
              でご覧いただけます。
            </p>
            {/* 掲載枠が見て終わりではなく購入まで届いている実測。 */}
            <div className="proof card">
              <b>製品カードは、読者の購入まで届いています</b>
              <div className="row">
                <div>
                  <b className="v">
                    1,126<small>クリック/月</small>
                  </b>
                  <span>製品カードから販売ページへ</span>
                </div>
                <div>
                  <b className="v">
                    4.4<small>%</small>
                  </b>
                  <span>クリックのうち購入に至った割合</span>
                </div>
              </div>
              <p className="note">2026 年 8 月・直近 30 日の実測値（Amazon 経由）</p>
            </div>
          </div>
        </section>

        <section id="flow">
          <div className="head">
            <p className="label">掲載までの流れ</p>
            <h2>
              ご相談から<wbr />公開まで
            </h2>
            <p>料金はご予算に合わせてご提案します。</p>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq">
          <div className="head">
            <p className="label">よくあるご質問</p>
            <h2>掲載の前に</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <div className="contact" id="contact">
        <div className="wrap">
          <div className="head">
            <p className="label">広告掲載のお問い合わせ</p>
            <h2>
              掲載をご検討中の<wbr />製品・サービスを、<wbr />お聞かせください。
            </h2>
          </div>
          <ContactForm kind="vendor" />
          <a className="dl" href={CONTACT_MAILTO}>
            フォームを使わずメールで送る（contact@research-coordinate.co.jp）
          </a>
        </div>
      </div>

      <div className="wrap">
        <section id="operator">
          <div className="head">
            <p className="label">運営</p>
          </div>
          <div className="org card">
            <Image
              src="/labs/vet-eng-lab.jpeg"
              alt="獣医工学ラボ ロゴ"
              width={480}
              height={267}
            />
            <div className="txt">
              <b>獣医工学ラボ（リサーチコーディネート株式会社）</b>
              <p>
                〒160-0022 東京都新宿区新宿2-12-13-2F
                <br />
                contact@research-coordinate.co.jp
              </p>
              <div className="links">
                <a href={LAB_URL} target="_blank" rel="noopener noreferrer">
                  獣医工学ラボ ↗
                </a>
                <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer">
                  リサーチコーディネート株式会社 ↗
                </a>
                <a href={LEAFLET_PDF} download>
                  リーフレット（PDF）
                </a>
                <Link href="/">くまウォッチに戻る</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap">
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
