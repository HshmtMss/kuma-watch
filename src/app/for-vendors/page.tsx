import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://kuma-watch.jp";
const CONTACT_MAILTO =
  "mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E5%88%B6%E5%93%81%E3%83%BB%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%8E%B2%E8%BC%89%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

export const metadata: Metadata = {
  title: "製品・サービスの掲載｜広告掲載のご案内",
  description:
    "クマ対策の製品・サービスを KumaWatch に掲載できます。スプレー・電気柵・センサー機器・専門サービスなど、住民・自治体・登山者の安全を支える製品の紹介枠をご用意。",
  alternates: { canonical: `${SITE_URL}/for-vendors` },
  openGraph: {
    title: "製品・サービスの掲載｜KumaWatch",
    description:
      "クマ対策の製品・サービスを KumaWatch に掲載できます。対象カテゴリ・料金の考え方・お申し込みフォームをご案内。",
    url: `${SITE_URL}/for-vendors`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "製品・サービスの掲載｜KumaWatch",
    description: "クマ対策の製品・サービスを KumaWatch に掲載。詳細はお問い合わせください。",
  },
};

// 対象カテゴリ。説明はチップ表示時に hover で出すかページ下部に短くまとめる程度。
const CATEGORIES = [
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
      title="製品・サービスの掲載"
      lead="クマ対策の製品・サービスを KumaWatch に掲載いただけます。住民・観光客・登山者・自治体担当者が日々訪れるサイトに、貴社の取り組みをお届けします。"
    >
      {/* Hero — 3 メッセージで即決 */}
      <section className="not-prose mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800">
          製品・サービス掲載のご案内
        </div>
        <h2 className="m-0 mb-3 text-xl font-bold leading-tight text-stone-900 sm:text-2xl">
          クマ対策の製品・サービスを、必要としている読者に届けます。
        </h2>
        <ul className="m-0 mb-5 space-y-1.5 text-sm leading-relaxed text-stone-700">
          <li className="flex gap-2">
            <span className="text-emerald-600">✓</span>
            <span>クマ対策に関心の高い読者層に直接リーチ</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600">✓</span>
            <span>掲載先・露出形式・期間を柔軟に組み合わせ</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-600">✓</span>
            <span>景品表示法・ステマ規制に準拠した PR 表記</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            お問い合わせ →
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
          >
            料金の考え方
          </a>
        </div>
      </section>

      {/* 何が掲載できるか — カテゴリは chip 表示で 1 画面に収める */}
      <h2 id="categories">掲載できる製品・サービス</h2>
      <p>
        クマ・野生動物対策に関連する製品・サービスを対象としています。以下のカテゴリ以外でもご相談いただけます。
      </p>
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
      <p className="text-sm text-stone-600">
        既存の掲載例は{" "}
        <Link href="/products">対策製品ページ</Link>
        でご覧いただけます。
      </p>

      {/* 料金の考え方 */}
      <h2 id="pricing">料金の考え方</h2>
      <p>
        掲載料金は<strong>個別にご提案</strong>しています。基本構造は以下の 3 軸で、相見積もりがしやすい透明な価格設計を心がけています。
      </p>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            1. 掲載先
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            どこに出すか
          </div>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-stone-600">
            <li>
              ・<Link href="/products" className="underline">対策製品ページ</Link>
            </li>
            <li>
              ・<Link href="/measures" className="underline">対策ハブ</Link>
            </li>
            <li>・関連記事ページ</li>
            <li>
              ・<Link href="/for-gov" className="underline">自治体向けページ</Link>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            2. 露出形式
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            どう見せるか
          </div>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-stone-600">
            <li>・一覧カード掲載</li>
            <li>・カテゴリ内 Pin 表示</li>
            <li>・記事内 PR 枠</li>
            <li>・監修付き解説記事 (協賛型)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
            3. 掲載期間
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-900">
            どのくらい出すか
          </div>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-stone-600">
            <li>・3 か月 / 6 か月 / 1 年単位</li>
            <li>・シーズン (春・秋) 集中</li>
            <li>・自治体導入連動の単発</li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-stone-500">
        ご予算感をお伝えいただければ、その範囲で組める案をご提案します。少額からのトライアル枠もご相談ください。
      </p>

      {/* 掲載までの流れ */}
      <h2>掲載までの流れ</h2>
      <ol>
        <li>
          <strong>ご相談</strong> — 下のフォームから、掲載をご希望の製品・サービス、想定読者層、ご予算感などをお聞かせください。
        </li>
        <li>
          <strong>掲載内容のすり合わせ</strong> — 写真・紹介文・リンク先・配置場所・期間をご提案し、相互合意の上で決定します。
        </li>
        <li>
          <strong>公開・運用</strong> — 合意後、当社で実装・公開。差し替えやレポーティングについてもご相談に応じます。
        </li>
      </ol>

      {/* FAQ — 重要 3 つに圧縮 */}
      <h2 id="faq">よくあるご質問</h2>
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
          有料掲載枠には「PR」「広告」「Sponsored」のいずれかの表記を必ず表示し、HTML 上は <code>rel=&quot;sponsored&quot;</code> を付与します。景品表示法・ステマ規制（2023 年 10 月施行）に準拠した運用です。
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
          をご用意しています。公式ページで発表されたクマ出没情報を、住民・観光客の通知へ自動でお届けする配信サービスです。
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
