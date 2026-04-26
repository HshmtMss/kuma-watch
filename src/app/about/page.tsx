import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "KumaWatch（クマウォッチ）は、全国のクマ出没情報をリアルタイムで可視化し、5kmメッシュ単位で危険度を予報する無料の Web アプリです。運営は獣医工学ラボ（リサーチコーディネート株式会社）です。",
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
        <li>期間でのフィルタ</li>
        <li>登録不要・完全無料</li>
      </ul>

      <h2 id="data-sources">データソース・出典</h2>
      <p>
        KumaWatch は、国・自治体・各オープンデータプロジェクトが公開する情報を組み合わせて
        危険度を算出しています。主な出典は以下のとおりです。
      </p>

      <h3>クマ出没・分布情報</h3>
      <ul>
        <li>
          <a
            href="https://public.sharp9110.com/view/allposts/bear"
            target="_blank"
            rel="noopener noreferrer"
          >
            全国クマ出没情報（Sharp9110）
          </a>
          <span className="text-gray-500"> / Sharp9110 / </span>
          <a
            href="https://creativecommons.org/licenses/by/4.0/deed.ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
        </li>
        <li>
          <a
            href="https://www.biodic.go.jp/kiso/fnd_list_h.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            自然環境保全基礎調査（哺乳類分布調査）
          </a>
          <span className="text-gray-500"> / 環境省 生物多様性センター</span>
        </li>
      </ul>

      <h3>気象情報</h3>
      <ul>
        <li>
          <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
            Open-Meteo Weather API
          </a>
          <span className="text-gray-500"> / Open-Meteo / </span>
          <a
            href="https://open-meteo.com/en/features#terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
        </li>
      </ul>

      <h3>地図・位置情報</h3>
      <ul>
        <li>
          <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
            OpenStreetMap
          </a>
          <span className="text-gray-500"> / OpenStreetMap contributors / </span>
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
          >
            ODbL 1.0
          </a>
        </li>
        <li>
          <a
            href="https://nominatim.openstreetmap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nominatim
          </a>
          <span className="text-gray-500"> / OpenStreetMap Foundation / ODbL 1.0</span>
        </li>
      </ul>


      <h2>スコアの考え方</h2>
      <p>
        危険度は <strong>5 段階（安全 / 念のため注意 / 基本対策を / 対策を強化 / しっかり対策を）</strong> で表示します。
        基本となるのは <strong>クマの生息域</strong> で、生息記録のない地域は「安全」と扱います。
        生息域内では、<strong>過去の出没履歴を中心に、季節・気象・時間帯などを補正要素として加味</strong>し、
        現時点で意識しておきたいレベルを表します。
      </p>
      <p>
        各要素の具体的な重み付けや、内部で利用しているデータソースの粒度・更新頻度などは、
        サービスの中核ノウハウのため公開しておりません。
        自治体・事業者向けの詳細な仕様や連携については
        <a href="/for-gov">自治体の方へ</a> よりお問い合わせください。
      </p>
      <p>
        本スコアは統計的な参考情報であり、実際のクマ出没を保証するものではありません。
        現地の最新情報と合わせてご活用ください。
      </p>

      <h2>旧「くまもりマップ」との関係</h2>
      <p>
        KumaWatch は「くまもりマップ」のリブランド後継サービスです。他社サービスとの名称重複を避けるため、
        2026 年 4 月にサービス名・ドメインを変更しました。機能は刷新され、予報機能と自治体連携の基盤が強化されています。
      </p>

      <h2>運営者情報</h2>
      <p>
        本サイトは <strong>獣医工学ラボ</strong> によって運営されています。
        獣医工学ラボは <strong>リサーチコーディネート株式会社</strong> が運営する、
        獣医療・野生動物・公衆衛生領域の技術プロジェクトです。
      </p>
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
