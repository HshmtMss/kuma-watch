import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "KumaWatch（クマウォッチ）は、全国のクマ出没情報をリアルタイムで可視化し、5kmメッシュ単位で危険度を予報する無料の Web アプリです。運営はリサーチコーディネート株式会社です。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      title="このサイトについて"
      lead="KumaWatch（クマウォッチ）は、全国のクマ出没情報を集約・可視化し、危険度を予報する無料の Web アプリです。"
    >
      <h2>サービスの目的</h2>
      <p>
        近年、全国でクマの出没件数が増加し、登山・キャンプ・山菜採りなどアウトドア活動のリスクが高まっています。
        KumaWatch は、分散して公開されているクマ出没情報を統合し、「いつ」「どこが」「どれくらい危険か」を
        誰でも直感的に確認できる形で提供することを目指しています。
      </p>

      <h2>主な機能</h2>
      <ul>
        <li>全国のクマ出没情報を地図上にリアルタイム表示</li>
        <li>5km メッシュ単位の危険度マップ（5 段階表示）</li>
        <li>現在地の危険度評価（GPS 取得）</li>
        <li>時間帯・季節・気象を踏まえた予報スコア</li>
        <li>都道府県・期間でのフィルタ</li>
        <li>登録不要・完全無料</li>
      </ul>

      <h2>スコアの考え方</h2>
      <p>
        KumaWatch の危険度スコアは、以下の 5 要素を重み付けして算出しています：
      </p>
      <ul>
        <li>履歴スコア（40%）：過去の出没実績（直近・半年以内・二年以内）</li>
        <li>季節スコア（30%）：月別の出没傾向</li>
        <li>気象スコア（20%）：現在の気温・降水量</li>
        <li>月相スコア（10%）：夜行性動物の活動に影響</li>
        <li>時間帯ボーナス：クマの活動ピーク時間帯（早朝・夕方）に加点</li>
      </ul>
      <p>
        このスコアは統計的な参考情報であり、実際のクマ出没を保証するものではありません。
        現地の最新情報と合わせてご活用ください。
      </p>

      <h2>旧「くまもりマップ」との関係</h2>
      <p>
        KumaWatch は「くまもりマップ」のリブランド後継サービスです。他社サービスとの名称重複を避けるため、
        2026 年 4 月にサービス名・ドメインを変更しました。機能は刷新され、予報機能と自治体連携の基盤が強化されています。
      </p>

      <h2>運営者情報</h2>
      <div>
        <p>
          <strong>リサーチコーディネート株式会社</strong>
          <br />
          〒160-0023 東京都新宿区西新宿1-20-3 西新宿高木ビル8F
          <br />
          Web: <a href="https://www.research-coordinate.co.jp" target="_blank" rel="noopener noreferrer">research-coordinate.co.jp</a>
          <br />
          Email: <a href="mailto:contact@research-coordinate.co.jp">contact@research-coordinate.co.jp</a>
        </p>
      </div>
    </PageShell>
  );
}
