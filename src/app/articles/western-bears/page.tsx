import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("western-bears")!;

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
        <strong>結論</strong>: 西日本のツキノワグマは個体数が少なく、
        <strong>絶滅危惧 II 類</strong>に指定される地域個体群が複数あります。
        対策は東北・北海道のような撃退中心ではなく、<strong>「出会わない」「保護を尊重する」</strong>
        がベース。九州では既に絶滅したと考えられており、復活の可能性も議論されています。
      </p>

      <ArticleToc
        items={[
          { id: "overview", title: "西日本のクマ事情" },
          { id: "kii", title: "近畿 — 紀伊半島の個体群" },
          { id: "chugoku", title: "中国地方 — 西中国地域個体群" },
          { id: "shikoku", title: "四国 — 剣山系の絶滅寸前個体群" },
          { id: "kyushu", title: "九州 — すでに絶滅" },
          { id: "what-to-do", title: "西日本でハイクするときの構え方" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">西日本のクマ事情</h2>
      <p>
        ツキノワグマの本州個体群は東日本・北陸でほぼ連続していますが、西日本では分断・孤立しています。
        絶滅危惧種としての保護優先度が高く、捕獲・放獣の判断は東日本とは大きく異なります。
      </p>
      <ul>
        <li>近畿・中国・四国の個体群はそれぞれ環境省レッドリスト掲載</li>
        <li>四国個体群は推定 16〜24 頭まで減少、絶滅寸前</li>
        <li>九州ツキノワグマは 1957 年の祖母山での目撃を最後に確実な記録なし</li>
        <li>地域個体群保護のため、放獣優先・殺処分慎重判断の自治体が多い</li>
      </ul>

      <h2 id="kii">近畿 — 紀伊半島の個体群</h2>
      <ul>
        <li>
          <strong>分布</strong>:
          奈良県南部・三重県南部・和歌山県北部の紀伊山地。
          大峰山系・大台ヶ原を中心に推定 100〜200 頭。
        </li>
        <li>
          <strong>登山域</strong>:
          大峰奥駈道・大台ヶ原・八経ヶ岳など長距離縦走路で目撃情報。
        </li>
        <li>
          <strong>滋賀・京都北部</strong>:
          福井県境の山域から流入する個体が稀に確認。
        </li>
        <li>
          <strong>兵庫県北部</strong>:
          氷ノ山・扇ノ山周辺は中国地域個体群とつながる。
        </li>
      </ul>

      <h2 id="chugoku">中国地方 — 西中国地域個体群</h2>
      <ul>
        <li>
          <strong>分布</strong>:
          鳥取・島根・岡山・広島・山口にまたがる西中国山地の地域個体群。
          推定 400〜600 頭。
        </li>
        <li>
          <strong>登山域</strong>:
          氷ノ山・扇ノ山・大山周辺、中国山地の縦走路で目撃情報。
        </li>
        <li>
          <strong>地域の取り組み</strong>:
          被害防止と保護のバランスを取った管理計画が複数県で運用。
        </li>
        <li>
          <strong>近年の傾向</strong>:
          市街地への出没・農業被害が増加、放獣 / 駆除の判断が議論に
          (<Link href="/articles/culling-debate">クマ駆除をめぐる議論</Link>)。
        </li>
      </ul>

      <h2 id="shikoku">四国 — 剣山系の絶滅寸前個体群</h2>
      <ul>
        <li>
          <strong>分布</strong>:
          徳島県・高知県境の剣山系のみ。推定 16〜24 頭で絶滅危惧 IA 類。
        </li>
        <li>
          <strong>確認情報</strong>:
          自動撮影カメラでの確認が中心で、目視は稀。
        </li>
        <li>
          <strong>登山域</strong>:
          剣山・三嶺・石鎚山系の樹林帯。遭遇確率は極めて低いが個体保護の観点から騒がない・近づかないが原則。
        </li>
        <li>
          <strong>保全対策</strong>:
          剣山系では NPO・大学が個体追跡を実施し、生息環境改善を進めている。
        </li>
      </ul>

      <h2 id="kyushu">九州 — すでに絶滅</h2>
      <ul>
        <li>
          <strong>歴史</strong>:
          九州ツキノワグマは江戸期まで広く生息していたが、明治〜昭和の駆除と森林破壊で激減。
          1957 年の大分県祖母山での目撃を最後に確認情報がない。
        </li>
        <li>
          <strong>現在の状況</strong>:
          環境省は 2012 年に「絶滅」と評価。
        </li>
        <li>
          <strong>復活の可能性</strong>:
          再導入は議論されているが具体計画はなし。
          一方で稀に「目撃情報」がメディアに出ることがあるが、ほぼ全て誤認 (イノシシ等) との結論。
        </li>
      </ul>

      <h2 id="what-to-do">西日本でハイクするときの構え方</h2>
      <p>
        東日本・北海道とは異なる前提で構えます。
      </p>
      <ul>
        <li>
          <strong>遭遇確率は低いが、ゼロではない</strong>:
          基本対策 (鈴・声・複数人) はそのまま実行。
        </li>
        <li>
          <strong>遭遇したら「絶対に殺さない」前提で対処</strong>:
          地域個体群保護のため、過剰な抵抗は控えてください。スプレー使用は防衛範囲内に。
        </li>
        <li>
          <strong>目撃情報の通報を徹底</strong>:
          自治体の生息状況把握に貢献します。
          くまウォッチの<Link href="/submit">投稿フォーム</Link>でも共有可能。
        </li>
        <li>
          <strong>子グマを発見したら絶対に手を出さない</strong>:
          地域個体群の貴重な再生産個体です。
          速やかに離れ、自治体に報告。
        </li>
        <li>
          <strong>環境省・自治体の保全プログラムへの理解</strong>:
          放獣・追跡調査の現場に出くわしたら邪魔をしない。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "西日本でクマよけスプレーは要らない?",
            a: (
              <>
                登山域での携行は推奨されますが、防衛目的のみで使用判断を慎重に。
                西日本の地域個体群は絶滅危惧種なので、鈴・声・複数人で「会わないこと」を最優先に。
                スプレーは「最後の手段」として使うものです。
              </>
            ),
            aText:
              "携行は推奨しますが、絶滅危惧の地域個体群への影響を踏まえ、まずは会わないこと (鈴・声・複数人) を最優先。スプレーは最後の手段として使ってください。",
          },
          {
            q: "九州で「クマを見た」と聞いたけど?",
            a: (
              <>
                ほぼ全ての目撃情報は誤認 (イノシシ・大型犬等) と結論されています。
                ただし鹿児島・宮崎の県境山域での目撃は調査対象になることもあるので、
                明確な写真・痕跡があれば自治体に通報してください。
              </>
            ),
            aText:
              "ほぼ全ての目撃情報は誤認と結論されています。明確な写真・痕跡があれば自治体に通報してください。",
          },
          {
            q: "四国の剣山に登るとき、クマ鈴は要る?",
            a: (
              <>
                個体数が極端に少ないため遭遇確率は極めて低いものの、登山道での騒音は野生動物全般に影響します。
                鈴の携行は推奨されますが、過剰な大音量は避けて。鈴 1 個 + 必要時に話し声、程度で十分。
                目撃したら絶対に近づかず、即座に自治体に報告してください。
              </>
            ),
            aText:
              "遭遇確率は極めて低いですが、鈴 1 個 + 必要時の話し声で十分。目撃したら絶対に近づかず即座に自治体に報告してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "西日本のツキノワグマは個体数が少なく、絶滅危惧種扱い。",
          "紀伊半島・西中国・四国の 3 つの地域個体群が分断的に生息。",
          "九州ツキノワグマは 1957 年を最後に絶滅と評価。",
          "対策は撃退より「会わない・保護を尊重する」が前提。",
          "目撃情報は自治体に通報し、保全プログラムに協力する姿勢で。",
        ]}
        footer="西日本のクマは「人間 vs クマ」ではなく「絶滅から救う」文脈で扱われています。"
      />
    </ArticleShell>
  );
}
