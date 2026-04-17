import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "自治体の方へ｜データ連携のご案内",
  description:
    "KumaWatch では、自治体が公開しているクマ出没情報のオープンデータ連携を進めています。データ提供による相互メリットとお問い合わせ窓口をご案内します。",
  alternates: { canonical: "/for-gov" },
};

export default function ForGovPage() {
  return (
    <PageShell
      title="自治体の方へ｜データ連携のご案内"
      lead="KumaWatch は、自治体が保有するクマ出没情報を住民・来訪者に届け、地域の安全に貢献することを目指しています。"
    >
      <h2>KumaWatch が提供できること</h2>

      <h3>1. 管内の出没情報の広域可視化</h3>
      <p>
        自治体単体のサイト・PDF では届きにくい登山者・観光客・県外からの来訪者に対し、
        全国地図上で自治体のクマ出没情報を表示します。
        各出没点・メッシュには出典（自治体名・公開元）を明記し、オリジナルの情報源へのリンクも提供します。
      </p>

      <h3>2. 管内サマリーページの提供（順次実装予定）</h3>
      <p>
        連携自治体ごとに「<code>/pref/[都道府県コード]</code>」「<code>/city/[市町村コード]</code>」の専用ページを用意し、
        管内の出没傾向・時系列・メッシュ別危険度を提供します。埋め込みウィジェットの提供も検討しています。
      </p>

      <h3>3. 住民向け注意喚起の支援</h3>
      <p>
        QR コード付きの掲示物テンプレート、SNS 共有リンク、PWA による「ホーム画面追加」など、
        住民・来訪者への注意喚起を支援する仕組みを提供します。
      </p>

      <h3>4. データの二次活用と出典表示</h3>
      <p>
        提供いただいたデータは、KumaWatch 上で出典を明記して表示します。
        無断での再配布・改変は行いません。CC BY 4.0 等のオープンライセンスでの提供を推奨しています。
      </p>

      <h2>歓迎するデータ形式</h2>
      <ul>
        <li>CSV / TSV（出没日・緯度経度・頭数・備考）</li>
        <li>JSON（CKAN・GeoJSON 等の標準形式）</li>
        <li>API エンドポイント（RESTful）</li>
        <li>定期的な RSS / Atom フィード</li>
      </ul>
      <p>
        座標情報がない場合でも、住所や地区名をもとにジオコーディングで取り込める場合があります。
        まずはお気軽にご相談ください。
      </p>

      <h2>データ連携の流れ</h2>
      <ol>
        <li>お問い合わせフォームまたはメールでご連絡</li>
        <li>データ形式・公開条件のヒアリング（オンライン打ち合わせ可）</li>
        <li>試験連携と表示確認</li>
        <li>本連携・出典表示の反映</li>
      </ol>

      <h2>連携自治体の声（予定）</h2>
      <p className="text-gray-500">
        現在、連携自治体を募集中です。初期の連携自治体として参加いただける自治体の声をこのセクションに掲載予定です。
      </p>

      <h2>お問い合わせ</h2>
      <p>
        データ連携・共同研究・自治体向けカスタマイズ等のご相談は、以下のメールアドレスまでご連絡ください。
        内容に応じて担当者より折り返しご連絡いたします。
      </p>
      <div className="not-prose mt-4 rounded-lg border border-gray-200 bg-white p-5">
        <div className="text-sm text-gray-700">
          <div className="mb-2 font-semibold text-gray-900">リサーチコーディネート株式会社</div>
          <div>〒160-0023 東京都新宿区西新宿1-20-3 西新宿高木ビル8F</div>
          <div className="mt-2">
            Email:{" "}
            <a href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20自治体データ連携について" className="font-medium text-blue-700 underline">
              contact@research-coordinate.co.jp
            </a>
          </div>
          <div className="mt-1">
            Web:{" "}
            <a href="https://www.research-coordinate.co.jp" target="_blank" rel="noopener noreferrer" className="underline">
              research-coordinate.co.jp
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
