import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "データ出典・ライセンス｜KumaWatch",
  description:
    "KumaWatch が利用している全データソースとライセンス（CC BY 4.0、ODbL 1.0 等）の一覧。クマ出没情報・気象・地図・位置情報の各提供元への正式なクレジット表示。",
  alternates: { canonical: `${SITE_URL}/credits` },
  robots: { index: true, follow: true },
};

export default function CreditsPage() {
  return (
    <PageShell
      title="データ出典・ライセンス"
      lead="KumaWatch は、複数のオープンデータと公的情報を組み合わせて警戒レベルを算出しています。各提供元への正式なクレジットと利用ライセンスを以下にまとめます。"
    >
      <h2>クマ出没・分布情報</h2>
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
        <li>
          全国 70 以上の自治体公式サイト（出没情報ページ・PDF・CSV/KML
          公開データ）から自動取り込み。各情報には出典自治体名と公式ページへのリンクを併記しています。
        </li>
      </ul>

      <h2>気象情報</h2>
      <ul>
        <li>
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
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

      <h2>地図・位置情報</h2>
      <ul>
        <li>
          <a
            href="https://www.openstreetmap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenStreetMap
          </a>
          <span className="text-gray-500">
            {" "}
            / © OpenStreetMap contributors /{" "}
          </span>
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
          <span className="text-gray-500">
            {" "}
            / OpenStreetMap Foundation / ODbL 1.0
          </span>
        </li>
      </ul>

      <h2>データの正規化・処理について</h2>
      <p>
        各ソースから取得したデータは、KumaWatch
        側で以下のような正規化・処理を行ったうえで表示しています。
      </p>
      <ul>
        <li>
          地名・住所からの座標推定（ジオコーディング）— 失敗・大きく外れる場合は除外
        </li>
        <li>都道府県境を超えた表記揺れ・市町村合併情報の統合</li>
        <li>5km メッシュ単位での集約と警戒レベル算出</li>
        <li>明らかに重複する事案の名寄せ</li>
      </ul>
      <p>
        加工後のデータは原典そのものではありませんが、各情報には出典自治体名と公式ページへのリンクを必ず併記しており、
        最終的な一次情報は公式サイトでご確認いただけます。
      </p>

      <h2>運営者・著作権</h2>
      <p>
        本サービスのロゴ・UI デザイン・ソースコード・画面構成の著作権は
        <strong>リサーチコーディネート株式会社</strong>に帰属します。各データの著作権は上記提供元に帰属します。
      </p>
      <p>
        サービス全体の取り扱いについては
        <a href="/disclaimer">免責事項・利用規約</a>もあわせてご確認ください。
      </p>
    </PageShell>
  );
}
