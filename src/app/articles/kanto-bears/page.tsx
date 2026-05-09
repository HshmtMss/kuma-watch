import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("kanto-bears")!;

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
        <strong>結論</strong>: 「関東はクマがいない」は誤解。
        <strong>奥多摩・丹沢・秩父・尾瀬・日光・甲信</strong>には常時生息しており、
        <strong>高尾山</strong>でも目撃情報があります。
        首都圏ハイカーがアクセスしやすい山ほど、自然と遭遇確率も上がるという認識が必要。
      </p>

      <ArticleToc
        items={[
          { id: "overview", title: "関東甲信越の生息状況" },
          { id: "tokyo", title: "東京 — 高尾・奥多摩のリスク" },
          { id: "kanagawa", title: "神奈川 — 丹沢・大山" },
          { id: "saitama", title: "埼玉 — 秩父・奥武蔵" },
          { id: "gunma-tochigi", title: "群馬・栃木 — 谷川・尾瀬・日光" },
          { id: "yamanashi", title: "山梨 — 富士周辺・大菩薩・南アルプス前衛" },
          { id: "trail-tips", title: "首都圏ハイカーの予防ポイント" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">関東甲信越の生息状況</h2>
      <p>
        関東甲信越のツキノワグマ個体数は推定 2,000〜3,000 頭。生息域は山地帯に集中していますが、
        近年は里山・市街地への出没が常態化しつつあります。
      </p>
      <ul>
        <li>関東山地の脊梁部 (奥多摩・秩父・丹沢) は安定生息域</li>
        <li>北関東 (谷川・尾瀬・日光) の山域も同様に高密度</li>
        <li>千葉県・茨城県南部にはほぼ生息しない (低山地のみ)</li>
        <li>首都圏アクセスの良い登山地ほど目撃情報が SNS で素早く流通</li>
      </ul>

      <h2 id="tokyo">東京 — 高尾・奥多摩のリスク</h2>
      <ul>
        <li>
          <strong>高尾山</strong>:
          観光・初心者ハイカーが多い人気の山ですが、近年は目撃情報あり。
          稲荷山コース・蛇滝コースなど人気の少ないルートでは警戒度を上げる。
        </li>
        <li>
          <strong>奥多摩 (御岳・大岳・雲取・三頭)</strong>:
          ツキノワグマの恒常的な生息域。鴨沢〜雲取山ルートやサルギ尾根での目撃情報。
        </li>
        <li>
          <strong>奥多摩湖周辺</strong>:
          車中泊・キャンプ・釣り客との遭遇事例。
        </li>
      </ul>

      <h2 id="kanagawa">神奈川 — 丹沢・大山</h2>
      <ul>
        <li>
          <strong>丹沢山地</strong>:
          西丹沢・大倉尾根・塔ノ岳まわりに小規模ながら生息。
          神奈川県は地域個体群として保護対象に指定。
        </li>
        <li>
          <strong>大山</strong>:
          観光ルート以外の登山道で稀に目撃。
        </li>
        <li>
          <strong>箱根</strong>:
          生息は限定的だが、神奈川県西部から流入することがある。
        </li>
      </ul>

      <h2 id="saitama">埼玉 — 秩父・奥武蔵</h2>
      <ul>
        <li>
          <strong>秩父山地 (武甲・両神・雲取)</strong>:
          ツキノワグマの安定生息域。秩父鉄道沿線の山域でも目撃情報。
        </li>
        <li>
          <strong>奥武蔵</strong>:
          飯能・名栗・吾野山域で里山出没事例。
        </li>
        <li>
          <strong>飯能・川越方面の里山</strong>:
          住宅地隣接の山地で出没情報、家庭の柿・栗の管理が重要。
          <Link href="/articles/home-protection">自宅・果樹園のクマ対策</Link>を参照。
        </li>
      </ul>

      <h2 id="gunma-tochigi">群馬・栃木 — 谷川・尾瀬・日光</h2>
      <ul>
        <li>
          <strong>谷川連峰</strong>:
          上信越国境の樹林帯。一ノ倉沢・茂倉新道など全コースで遭遇可能性。
        </li>
        <li>
          <strong>尾瀬</strong>:
          鳩待峠・山ノ鼻のテン場周辺で目撃情報。観光客への警告看板多数。
        </li>
        <li>
          <strong>日光</strong>:
          奥日光・男体山・女峰山・霧降高原の樹林帯。
          中禅寺湖周辺のキャンプ地でも遭遇事例。
        </li>
        <li>
          <strong>群馬北部の温泉地</strong>:
          草津・万座・水上の周辺山域で出没。観光地への影響大。
        </li>
      </ul>

      <h2 id="yamanashi">山梨 — 富士周辺・大菩薩・南アルプス前衛</h2>
      <ul>
        <li>
          <strong>大菩薩連嶺</strong>:
          初心者向けの人気登山地ですが、樹林帯ではツキノワグマ遭遇情報あり。
        </li>
        <li>
          <strong>富士山周辺</strong>:
          青木ヶ原・富士山麓の樹海で生息確認。樹海ハイクは複数人で。
        </li>
        <li>
          <strong>南アルプス前衛 (鳳凰・甘利・櫛形)</strong>:
          南アルプスの裾野もツキノワグマの生息域。
        </li>
      </ul>

      <h2 id="trail-tips">首都圏ハイカーの予防ポイント</h2>
      <ul>
        <li>
          <strong>「関東だから安全」を捨てる</strong>:
          観光地でも生息域。装備は東北・北海道と同等の構えで。
        </li>
        <li>
          <strong>市町村の防災メール登録</strong>:
          登山先の市町村 (青梅・檜原・秩父・奥多摩町など) のメールを事前登録。
          <Link href="/articles/bear-app">クマ出没情報アプリ</Link>。
        </li>
        <li>
          <strong>くまウォッチの<Link href="/">出没マップ</Link></strong>:
          直近の目撃地点をスマホで確認してから入山。
        </li>
        <li>
          <strong>クマよけスプレーの携行</strong>:
          関東でも例外ではなく必携。腰のホルスターに装着して秒で抜ける位置に
          (<Link href="/articles/bear-spray">使い方</Link>)。
        </li>
        <li>
          <strong>登山系アプリの掲示板</strong>:
          YAMAP・ヤマレコのレポートで最新の目撃情報を確認。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "高尾山にもクマがいるのは本当?",
            a: (
              <>
                近年、稀ですが目撃情報があります。観光地化されたメインルート (1 号路) では
                遭遇確率は極めて低いものの、稲荷山コース・蛇滝コースなど人通りが少なく
                早朝・夕方の単独行動では油断は禁物。鈴の携行を推奨します。
              </>
            ),
            aText:
              "近年、稀ですが目撃情報があります。観光メインルートでは遭遇確率は極めて低いですが、人通りの少ないコースの早朝・夕方は鈴の携行を推奨します。",
          },
          {
            q: "丹沢のクマは少ないと聞いたけど対策は要る?",
            a: (
              <>
                神奈川県では地域個体群として絶滅危惧扱いで個体数は少ないものの、生息は確認されています。
                スプレーは過剰かもしれませんが、鈴 + 声 + 目撃情報の事前確認は必須。
                西丹沢の樹林帯では特に警戒を。
              </>
            ),
            aText:
              "神奈川県では地域個体群として個体数は少ないですが生息確認されています。鈴・声・目撃情報の事前確認は必須。西丹沢の樹林帯では警戒を。",
          },
          {
            q: "首都圏住みでクマ装備を買うのは大げさ?",
            a: (
              <>
                関東甲信越の山に登るならスプレー + 鈴は最低構成として推奨します。
                スプレーは 5,000〜10,000 円で 4 年程度持つので、登山頻度に応じてコスパは悪くない。
                家族の安心のためにも持っておく価値はあります。
              </>
            ),
            aText:
              "関東甲信越の山に登るならスプレー + 鈴は最低構成。スプレーは 5,000〜10,000 円で 4 年程度持ち、家族の安心のためにも持っておく価値があります。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "関東甲信越の山岳ほぼ全域 (高尾・奥多摩・丹沢・秩父・尾瀬・日光) に生息。",
          "首都圏アクセスの良い山ほど目撃情報の SNS 流通が早い。",
          "丹沢は地域個体群として保護対象。個体数少ないが生息は確認。",
          "登山先の市町村防災メール登録 + くまウォッチで事前確認を。",
          "観光地でも装備 (スプレー・鈴) は北海道・東北と同等の構えで。",
        ]}
        footer="関東で「クマ対策は不要」と思われがちですが、首都圏の山ほど装備で備えることが大事です。"
      />
    </ArticleShell>
  );
}
