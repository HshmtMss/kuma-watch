import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E5%88%B6%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8E%B2%E8%BC%89%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87&body=%E3%81%84%E3%81%A4%E3%82%82%E3%81%8A%E4%B8%96%E8%A9%B1%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%0D%0A%0D%0A%E2%96%A0%E4%BC%9A%E7%A4%BE%E5%90%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E6%8B%85%E5%BD%93%E8%80%85%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E9%80%A3%E7%B5%A1%E5%85%88%EF%BC%88%E9%9B%BB%E8%A9%B1%E5%8F%88%E3%81%AF%E3%83%A1%E3%83%BC%E3%83%AB%EF%BC%89%EF%BC%9A%0D%0A%E2%96%A0%E6%8E%B2%E8%BC%89%E5%B8%8C%E6%9C%9B%E8%A3%BD%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%EF%BC%9A%0D%0A%E2%96%A0%E3%81%94%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A%0D%0A";

export const metadata: Metadata = {
  title: "製品・サービスの掲載｜KumaWatch 広告掲載のご案内",
  description:
    "クマ対策の製品・サービスを KumaWatch に掲載できます。スプレー・電気柵・センサー機器・専門サービスなど、住民・自治体・登山者の安全を支える製品の紹介枠をご用意。掲載イメージ・配置・お問い合わせをご案内します。",
  alternates: { canonical: `${SITE_URL}/for-vendors` },
  openGraph: {
    title: "製品・サービスの掲載｜KumaWatch",
    description:
      "クマ対策の製品・サービスを KumaWatch に掲載できます。写真付きでの紹介、対象カテゴリ、お問い合わせ方法をご案内。",
    url: `${SITE_URL}/for-vendors`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "製品・サービスの掲載｜KumaWatch",
    description:
      "クマ対策の製品・サービスを KumaWatch に掲載。詳細はお問い合わせください。",
  },
};

// 対象として想定するカテゴリ。/products の CATEGORY_ORDER と整合させる。
const CATEGORIES: { label: string; desc: string }[] = [
  {
    label: "撃退・忌避",
    desc: "クマスプレー・鈴・ホーン・忌避剤など、遭遇時の撃退・接近防止に関する製品",
  },
  {
    label: "防護柵・物理バリア",
    desc: "電気柵・ベアキャニスター・防臭袋など、物理的に隔てる製品・施工サービス",
  },
  {
    label: "住宅・誘引物管理",
    desc: "センサーライト・密閉ストッカーなど、家屋周辺の誘引物管理に役立つ製品",
  },
  {
    label: "個人装備",
    desc: "ヘルメット・GPS 端末・応急処置キットなど、登山・林業現場で使う装備",
  },
  {
    label: "監視・検知システム",
    desc: "AI カメラ・トレイルカメラ・自動撃退装置など、自治体・施設向けソリューション",
  },
  {
    label: "捕獲・駆除",
    desc: "箱罠・止め刺し器具・駆除請負サービス（自治体・猟友会向け）",
  },
  {
    label: "情報・教育サービス",
    desc: "研修・コンサルティング・教育コンテンツ・保険など、知識や仕組みを提供するサービス",
  },
];

// 掲載イメージで触れる項目。実際の表示要素を素直に列挙する。
const SHOWCASE_ITEMS: { label: string; desc: string }[] = [
  {
    label: "製品写真",
    desc: "代表的なプロダクト写真や使用シーンの画像を 1〜複数枚",
  },
  {
    label: "製品・サービス名",
    desc: "正式名称・ブランド名",
  },
  {
    label: "短い紹介文",
    desc: "用途・特徴・想定ユーザーを 1〜2 行で説明",
  },
  {
    label: "貴社サイトへのリンク",
    desc: "詳細仕様・購入・問い合わせは貴社サイトへ送客",
  },
  {
    label: "対象読者タグ",
    desc: "個人・自治体・登山者など、適切な読者層に向けて配置",
  },
];

export default function ForVendorsPage() {
  return (
    <PageShell
      title="製品・サービスの掲載"
      lead="クマ対策の製品・サービスを KumaWatch に掲載いただけます。住民・観光客・登山者・自治体担当者が日々訪れる場で、貴社の取り組みをお届けします。"
    >
      {/* Hero */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800">
          製品・サービス掲載のご案内
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          クマ対策の製品・サービスを、必要としている読者に届けます。
        </h2>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2"><span className="text-emerald-600">✓</span>写真付きで製品・サービスを紹介</li>
          <li className="flex gap-2"><span className="text-emerald-600">✓</span>個人・自治体・登山者など、適切な読者層に配置</li>
          <li className="flex gap-2"><span className="text-emerald-600">✓</span>掲載条件・料金などは個別にご相談</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            掲載について相談する →
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
          >
            対象カテゴリを見る
          </a>
        </div>
      </section>

      <h2>KumaWatch とは</h2>
      <p>
        全国 70 以上の自治体・警察庁・環境省の公開データを集約した
        クマ出没情報マップ・データベースです。獣医師監修・獣医工学ラボ（リサーチコーディネート株式会社）運営。
        住民・観光客・登山者・自治体担当者など、<strong>クマ対策に強い関心を持つ読者</strong>
        が日々訪れています。
      </p>

      <h2 id="categories">掲載できる製品・サービスのカテゴリ</h2>
      <p>以下のような、クマ対策に関連する製品・サービスを対象としています。</p>
      <div className="not-prose my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <div
            key={c.label}
            className="rounded-xl border border-stone-200 bg-white px-4 py-3"
          >
            <div className="text-sm font-semibold text-stone-900">{c.label}</div>
            <div className="mt-1 text-xs text-stone-600">{c.desc}</div>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-600">
        上記以外でも、クマ・野生動物対策に関連する製品・サービスであればご相談いただけます。
        既存の{" "}
        <Link href="/products">対策製品データベース</Link>
        も参考にしてください。
      </p>

      <h2>掲載イメージ</h2>
      <p>
        掲載は <strong>写真付きカード形式</strong>が基本です。配置場所は対象読者層に応じて、
        対策ハブ（/measures）・対策製品データベース（/products）・関連記事ページなど、
        貴社のターゲットに合う場所をご提案します。
      </p>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ul className="divide-y divide-stone-100">
          {SHOWCASE_ITEMS.map((s) => (
            <li key={s.label} className="px-4 py-3">
              <div className="text-sm font-semibold text-stone-900">{s.label}</div>
              <div className="mt-0.5 text-xs text-stone-600">{s.desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-stone-600">
        景品表示法・ステマ規制に準拠して、PR 表記を明示。読者が広告であることを誤認しない設計を維持します。
      </p>

      <h2>掲載までの流れ</h2>
      <ol>
        <li>
          <strong>ご相談</strong>：メールでご一報ください。掲載をご希望の製品・サービス、想定読者層、ご予算感などをお聞かせください。
        </li>
        <li>
          <strong>掲載内容のすり合わせ</strong>：写真・紹介文・リンク先・配置場所・期間をご提案し、相互合意の上で決定します。
        </li>
        <li>
          <strong>公開・運用</strong>：合意後、当社で実装・公開。掲載期間中の差し替えやレポーティングについてもご相談に応じます。
        </li>
      </ol>

      <h2 id="faq">よくあるご質問</h2>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          掲載料金はいくらですか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          製品・サービスの内容、配置場所、掲載期間によって個別にご提案しています。まずはお気軽にお問い合わせください。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          どんな製品でも掲載できますか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          クマ・野生動物対策に関連し、住民・観光客・自治体の安全に資すると判断した製品・サービスを対象としています。獣医工学ラボの監修方針に沿わない製品（科学的根拠が薄いもの、安全性に懸念があるもの等）はお断りする場合があります。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          PR 表記・ステマ規制への対応は?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          有料掲載枠には「PR」「広告」「Sponsored」のいずれかの表記を必ず表示します。景品表示法・ステマ規制（2023 年 10 月施行）に準拠した運用です。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          自社サイト・EC サイトへのリンクは張れますか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          可能です。詳細仕様・購入・お問い合わせは貴社サイトへ送客する設計が基本になります。
        </div>
      </details>
      <details className="my-2 rounded-xl border border-stone-200 bg-white open:bg-stone-50">
        <summary className="cursor-pointer p-4 text-sm font-semibold text-stone-900">
          自治体・公共機関でも掲載できますか?
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm leading-relaxed text-stone-700">
          自治体さま向けには別途{" "}
          <Link href="/for-gov" className="text-amber-700 underline">
            自治体の方へ
          </Link>
          をご用意しています。住民・観光客に届けたいメッセージの掲載は無料でご利用いただけます。
        </div>
      </details>

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
              className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              掲載について相談する →
            </a>
          </div>
          <p className="mt-3 text-[11px] text-stone-500">
            お問い合わせには会社名・ご担当者名・連絡先・掲載希望の製品/サービス名をお書き添えいただくと、初回返信がスムーズです。
          </p>
        </div>
      </div>
    </PageShell>
  );
}
