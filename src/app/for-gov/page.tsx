import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "自治体の方へ｜データ連携のご案内",
  description:
    "自治体が公開しているクマ出没情報を、KumaWatch が自動取り込みし住民・観光客に届けます。自治体側の追加作業ゼロ・連携費用無料。詳しくはお問い合わせください。",
  alternates: { canonical: "/for-gov" },
};

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="自治体が公開しているクマ出没情報を、KumaWatch が自動で取り込み、住民・観光客にお届けします。"
    >
      <div className="not-prose mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>自治体側の追加作業はありません。</strong>
          これまでどおり公式サイトに情報を公開していただくだけで、KumaWatch
          が自動で取り込み、位置情報や目的に応じて住民・登山者・観光客に届けます。
          <strong>連携費用は無料</strong>です。
        </p>
      </div>

      <h2>現状の課題</h2>
      <p>
        全国でクマによる人身被害が深刻化するなか、自治体が公開している出没情報は、
      </p>
      <ul>
        <li>公式サイトの奥にあり、住民・観光客が辿り着きにくい</li>
        <li>県外からの観光客には存在自体が知られていない</li>
        <li>隣接自治体の情報と統合されていない</li>
      </ul>
      <p>
        といった理由で、貴重な情報が <strong>必要な人に届いていない</strong> のが現状です。
      </p>

      <h2>KumaWatch にできること</h2>
      <ul>
        <li>
          <strong>自治体作業ゼロで届ける</strong> — これまでどおり公式サイトに掲載いただくだけ。新システム導入も新運用も不要
        </li>
        <li>
          <strong>住民は探さなくていい</strong> — 位置情報・目的（登山・キャンプ・通勤・観光等）に応じて必要な情報のみ表示
        </li>
        <li>
          <strong>県外からの観光客・登山者にも届く</strong> — 全国の登山愛好家・キャンパー・観光客に利用されており、来訪者の事故防止に直結
        </li>
        <li>
          <strong>公式情報への送客</strong> — 出没情報には必ず自治体名と公式ページへのリンクを併記
        </li>
      </ul>

      <h2>連携の進め方</h2>
      <ol>
        <li><strong>お問い合わせ</strong> — メールにて連携希望をご連絡ください</li>
        <li><strong>情報源の確認</strong> — 30分程度のヒアリングで現在の公開ページ・更新頻度・形式を確認</li>
        <li><strong>試験取り込み</strong>（1〜2週間） — 当社にて自動取り込みを設定し表示を確認</li>
        <li><strong>本番反映</strong> — 住民・観光客への配信を開始</li>
      </ol>

      <h2>サービス概要</h2>
      <ul>
        <li>サービス名: クマウォッチ（KumaWatch） / <a href="https://kuma-watch.jp">https://kuma-watch.jp</a></li>
        <li>提供形態: Web サービス（PC・スマホ対応／インストール不要）</li>
        <li>カバー範囲: 全国47都道府県／毎日自動更新</li>
        <li>利用料金: 個人・自治体ともに完全無料</li>
        <li>運営: 獣医工学ラボ（リサーチコーディネート株式会社）</li>
      </ul>
      <p className="text-sm text-gray-600">
        将来的には、契約自治体向けに LINE 等を通じたプッシュ通知サービスの提供も予定しています（開発中）。
        詳細な仕様書（PDF）はお問い合わせ時に送付いたします。
      </p>

      <h2>お問い合わせ</h2>
      <div className="not-prose mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-sm text-gray-800">
          <div className="mb-1 font-bold text-gray-900">獣医工学ラボ</div>
          <div className="mb-3 text-xs text-gray-500">
            運営: リサーチコーディネート株式会社
          </div>
          <div>
            Email:{" "}
            <a
              href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20自治体連携"
              className="font-semibold text-blue-700 underline"
            >
              contact@research-coordinate.co.jp
            </a>
          </div>
          <div className="mt-1">
            Web:{" "}
            <a
              href="https://www.research-coordinate.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              research-coordinate.co.jp
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            メール件名に「KumaWatch 自治体連携」と記載いただくと優先対応します。原則 3 営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </PageShell>
  );
}
