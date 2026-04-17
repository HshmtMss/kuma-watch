import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "KumaWatch のプライバシーポリシー。アクセス解析と位置情報の扱いについて。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="プライバシーポリシー"
      lead="KumaWatch（以下「当サービス」）における個人情報・利用情報の取り扱いを以下のとおり定めます。"
    >
      <h2>1. 取得する情報</h2>
      <h3>1.1 位置情報</h3>
      <p>
        「現在地を表示する」機能の利用時、ブラウザの位置情報 API から緯度・経度を取得します。
        取得した位置情報は危険度スコアの計算および地図表示にのみ使用し、
        <strong>当サービスのサーバーには保存しません</strong>（ブラウザ内で完結）。
      </p>

      <h3>1.2 アクセス解析</h3>
      <p>
        当サービスは Google Analytics（GA4、測定 ID: G-GCT59LNNZ2）を利用しています。
        Google Analytics は Cookie を使用してアクセス情報（閲覧ページ・滞在時間・端末情報等）を収集します。
        収集された情報は Google 社のプライバシーポリシーに基づいて管理されます。
      </p>
      <ul>
        <li><a href="https://policies.google.com/technologies/cookies?hl=ja" target="_blank" rel="noopener noreferrer">Google の Cookie の使用について</a></li>
        <li><a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">Google Analytics オプトアウトアドオン</a></li>
      </ul>

      <h3>1.3 お問い合わせ時の情報</h3>
      <p>
        自治体連携等のお問い合わせでいただいた氏名・メールアドレス・所属等の情報は、返信および業務連絡の目的にのみ使用します。
      </p>

      <h2>2. 情報の利用目的</h2>
      <ul>
        <li>危険度スコアの計算と地図表示</li>
        <li>サービスの品質改善・利用状況分析</li>
        <li>お問い合わせへの対応</li>
      </ul>

      <h2>3. 第三者提供</h2>
      <p>
        法令に基づく場合を除き、取得した情報を本人の同意なく第三者に提供することはありません。
      </p>

      <h2>4. Cookie の管理</h2>
      <p>
        Cookie は各ブラウザの設定から無効化できます。無効化した場合、一部機能が正常に動作しない可能性があります。
      </p>

      <h2>5. 本ポリシーの変更</h2>
      <p>
        法令変更や運用の変更に応じて、本ポリシーを改訂することがあります。重要な変更は当ページに掲示します。
      </p>

      <h2>6. 事業者情報</h2>
      <p>
        リサーチコーディネート株式会社
        <br />
        〒160-0023 東京都新宿区西新宿1-20-3 西新宿高木ビル8F
        <br />
        Email: <a href="mailto:contact@research-coordinate.co.jp">contact@research-coordinate.co.jp</a>
      </p>

      <p className="mt-10 text-xs text-gray-500">最終改定日: 2026-04-18</p>
    </PageShell>
  );
}
