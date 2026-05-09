import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("night-gear")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://kuma-watch.jp/articles/${meta.slug}` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://kuma-watch.jp/articles/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        <strong>結論</strong>: 早朝・夕方の山行はクマ遭遇率が日中の数倍。
        装備の核は <strong>メイン 300〜500 ルーメンのヘッドライト + サブライト + 反射材 + 腰スプレー</strong>。
        夕方の下山遅れは「装備不十分の夜山行」を強いるため、装備で安全マージンを取っておきましょう。
      </p>

      <ArticleToc
        items={[
          { id: "why", title: "薄明薄暮は遭遇ピーク" },
          { id: "headlamp", title: "ヘッドライトの選び方" },
          { id: "sub-light", title: "サブライト・予備電源" },
          { id: "reflective", title: "反射材・視認性ウェア" },
          { id: "spray-position", title: "スプレーは腰前面" },
          { id: "loadout", title: "夜間装備一式 (チェックリスト)" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why">薄明薄暮は遭遇ピーク</h2>
      <p>
        多くのクマは日没前後と夜明け前後 (薄明薄暮 = crepuscular) に活動が活発化します。
      </p>
      <ul>
        <li>朝 4:00〜7:00 の山行は遭遇率が日中の 3〜5 倍とする調査も</li>
        <li>夕 17:00〜20:00 も同様にピーク</li>
        <li>夜間は捕食型攻撃の確率が日中より高い (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)</li>
      </ul>
      <p>
        対策の第一は「この時間帯を避ける」。装備は予防策ではなく、避けきれない場面の保険です。
      </p>

      <h2 id="headlamp">ヘッドライトの選び方</h2>
      <p>選定ポイント:</p>
      <ul>
        <li>
          <strong>明るさ</strong>: メインで 300〜500 ルーメン以上。スポット (遠射) で 100m 先まで届くこと。
        </li>
        <li>
          <strong>配光</strong>:
          ワイド (近距離) + スポット (遠距離) の切替えがあるモデル。
          常時ワイド点灯、不審な物影を見たらスポットに切替。
        </li>
        <li>
          <strong>連続点灯時間</strong>:
          中間光量で 8 時間以上。長距離山行ではより長いものを。
        </li>
        <li>
          <strong>赤色 LED</strong>:
          地図確認には便利だが、クマ警戒中は白色光を優先。
        </li>
        <li>
          <strong>ストロボ機能</strong>:
          至近距離でクマと目が合った場合の威嚇用。
        </li>
        <li>
          <strong>代表機種</strong>:
          Petzl Actik Core / Black Diamond Spot / Fenix HM65R など。
        </li>
      </ul>

      <h2 id="sub-light">サブライト・予備電源</h2>
      <ul>
        <li>
          <strong>ハンドヘルド遠射ライト</strong>:
          200〜500 ルーメンの携行ライト (フラッシュライト) を腰に。
          ヘッドライトでは届かない 50m 先を確認できる。
        </li>
        <li>
          <strong>予備電池 / モバイルバッテリー</strong>:
          ヘッドライト用の予備電池 1 セット + USB Type-C 充電可能なモデルなら小型バッテリーを 1 個。
        </li>
        <li>
          <strong>キーチェーン用予備</strong>:
          ザックに 1 つ、ベルトに 1 つ、緊急用に小型ライトを冗長化しておく。
        </li>
      </ul>

      <h2 id="reflective">反射材・視認性ウェア</h2>
      <p>
        夜間装備で意外と見落とされるのが「他人からの視認性」です。
      </p>
      <ul>
        <li>
          <strong>反射ベスト / 反射バンド</strong>:
          ザック背面・腕・ヘルメットに反射素材。
          狩猟期 (11 月中旬〜2 月中旬) は誤射防止のためにも蛍光オレンジ推奨。
        </li>
        <li>
          <strong>明るい色のシェル</strong>:
          黒・カーキ・ブラウンは森に同化しやすい。蛍光色のジャケットがベター。
        </li>
        <li>
          <strong>ストロボライト (尾灯)</strong>:
          自転車用の小型 LED 尾灯をザック後方に。後続の登山者・運転手から認識される。
        </li>
      </ul>

      <h2 id="spray-position">スプレーは腰前面</h2>
      <p>
        夜間遭遇では「秒で抜ける位置」がさらに重要になります。
      </p>
      <ul>
        <li>
          <strong>右腰前面のホルスター</strong>:
          利き手側、ベルト前方 30〜45 度の位置。
        </li>
        <li>
          <strong>ザック内は NG</strong>:
          ザックを下ろしてから 5 秒。間に合いません。
        </li>
        <li>
          <strong>セーフティの解除確認</strong>:
          抜き出しと同時に親指でセーフティを上げる動作を反復練習。
        </li>
        <li>
          <strong>使い方は</strong><Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>。
        </li>
      </ul>

      <h2 id="loadout">夜間装備一式 (チェックリスト)</h2>
      <ul>
        <li>□ メインヘッドライト (300〜500 ルーメン以上)</li>
        <li>□ サブハンドライト (200 ルーメン以上)</li>
        <li>□ 予備電池 1 セット</li>
        <li>□ モバイルバッテリー (USB-C 機種なら必須)</li>
        <li>□ クマよけスプレー (腰前面ホルスター)</li>
        <li>□ ホイッスル (首にぶら下げる)</li>
        <li>□ 反射ベスト or 反射バンド</li>
        <li>□ 蛍光色のシェルジャケット</li>
        <li>□ クマ鈴 (補助。<Link href="/articles/bear-bell">議論あり</Link>)</li>
        <li>□ ラジオ (人の声を継続的に出す)</li>
        <li>□ 携帯電話 (フル充電)</li>
        <li>□ 行動食 + 水 (ビバーク備蓄)</li>
        <li>□ 防寒着 (薄い保温シェル)</li>
        <li>□ エマージェンシーシート (薄手のサバイバルブランケット)</li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "ヘッドライト 1 つでは足りない?",
            a: (
              <>
                故障・電池切れに備えてサブライトは必須。山小屋・ビバーク含めて夜山では「光源 2 つ + 予備電池」が基本構成です。
                サブはベルトポーチか胸ポケットに。
              </>
            ),
            aText:
              "故障や電池切れに備えてサブライトは必須。光源 2 つ + 予備電池が基本構成です。サブはベルトポーチか胸ポケットに。",
          },
          {
            q: "蛍光オレンジ必要? 普通の登山ウェアじゃダメ?",
            a: (
              <>
                クマ対策だけなら必須ではありませんが、狩猟期 (11/15〜2/15、北海道は別) はハンターからの誤射防止に蛍光色推奨。
                山行の半分は秋〜冬になりがちなら、蛍光ベストを 1 枚持っておくと汎用性が高い。
              </>
            ),
            aText:
              "クマ対策だけなら必須ではないものの、狩猟期は誤射防止に蛍光色推奨。秋〜冬の山行が多いなら蛍光ベストを 1 枚持っておくと汎用性が高い。",
          },
          {
            q: "山小屋泊まりでも夜間装備は要る?",
            a: (
              <>
                山小屋着までは必要。さらに山小屋から外に出るとき (トイレ・夜星空観察) もヘッドライト + スプレー携行を。
                山小屋周辺で夜間にクマと遭遇した事例もあります。
              </>
            ),
            aText:
              "山小屋着までは必要。山小屋から外に出る際もヘッドライトとスプレーを携行してください。山小屋周辺で夜間遭遇した事例もあります。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "薄明薄暮はクマ活動ピーク。可能な限り早朝・夕方の山行は避ける。",
          "メインヘッドライト 300〜500 ルーメン + サブライトの二段構え。",
          "予備電池 / モバイルバッテリーで電源冗長化を。",
          "蛍光色シェル + 反射材で他人からの視認性を確保 (狩猟期は特に重要)。",
          "スプレーは右腰前面のホルスター。秒で抜ける位置がすべて。",
        ]}
        footer="夕方の下山が遅れる気配があれば、早めにビバーク判断を。装備は判断のための保険です。"
      />
    </ArticleShell>
  );
}
