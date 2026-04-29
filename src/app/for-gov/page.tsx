import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "自治体の方へ｜データ連携のご案内",
  description:
    "KumaWatch は自治体のクマ出没情報を住民・観光客に届けるためのプラットフォームです。データ連携で「正確な安全情報を、必要な人に確実に届ける」を一緒に実現しませんか。",
  alternates: { canonical: "/for-gov" },
};

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ"
      lead="連携いただくことで、住民・観光客により正確な安全情報を届けられます。"
    >
      <div className="not-prose mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm leading-relaxed text-amber-900">
          自治体が公開しているクマ出没情報は、住民や来訪者に十分届いていないのが現状です。
          KumaWatch にデータを連携いただくことで、<strong>その地域の最新の出没情報を、住民・登山者・観光客に確実に届ける</strong>
          ことができます。
          <strong>連携費用は無料</strong>です。
        </p>
      </div>

      <h2>連携で得られる価値</h2>
      <ul>
        <li>
          <strong>住民への確実な情報提供</strong> — 公式サイトを開かなくても、地図とアプリで最新の出没情報が届きます
        </li>
        <li>
          <strong>観光客・登山者へのリーチ</strong> — 県外から訪れる人が、行先の警戒レベルを事前・現地で確認できます
        </li>
        <li>
          <strong>出典の明示</strong> — 表示には自治体名と元ページへのリンクを必ず併記し、住民が公式情報をたどれる状態を維持します
        </li>
      </ul>

      <h2>歓迎するデータ形式</h2>
      <p>
        どんな形式でもまずはご相談ください。CSV / GeoJSON / KML / API はもちろん、HTML ページや PDF からの取り込みも対応します。
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
              href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20自治体データ連携について"
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
            メール件名に「KumaWatch 自治体連携」と記載いただくと、優先的に対応します。
          </p>
        </div>
      </div>
    </PageShell>
  );
}
