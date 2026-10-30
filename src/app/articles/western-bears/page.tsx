import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        <strong>結論</strong>: 西日本のツキノワグマは分布が分断され、
        紀伊半島・東中国・西中国・四国山地の個体群は環境省レッドリストで
        <strong>「絶滅のおそれのある地域個体群」</strong>として掲載されてきました。
        一方で四国以外の多くの地域では個体群の回復が見られ、近年は出没も増えています。
        九州のツキノワグマはすでに絶滅したと考えられています。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            紀伊・東中国・西中国・四国の個体群は<strong>「絶滅のおそれのある地域個体群」</strong>。
          </>,
          <>
            四国は<strong>推定 16〜24 頭</strong> (2017 年時点) と特に少ない。他の地域では回復・出没増加も。
          </>,
          <>
            <strong>九州は絶滅</strong>と判断され、2012 年に環境省レッドリストから削除。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "西日本のクマ事情" },
          { id: "kii", title: "近畿 — 紀伊半島と近畿北部" },
          { id: "chugoku", title: "中国地方 — 東中国・西中国の個体群" },
          { id: "shikoku", title: "四国 — 剣山系の絶滅寸前個体群" },
          { id: "kyushu", title: "九州 — すでに絶滅" },
          { id: "what-to-do", title: "西日本でハイクするときの構え方" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">西日本のクマ事情</h2>
      <p>
        ツキノワグマの本州の分布は東日本・北陸でほぼ連続していますが、西日本ではいくつかの地域に分かれています。
        環境省によると、1999 年に特定鳥獣保護管理計画の制度が始まって以降、四国を除く多くの地域で個体群の回復がみられています。
      </p>
      <ul>
        <li>紀伊半島・東中国・西中国・四国山地の個体群は、環境省レッドリストで「絶滅のおそれのある地域個体群」として掲載されてきた</li>
        <li>四国の個体群は推定 16〜24 頭 (2017 年時点)。2024 年 4 月にクマが指定管理鳥獣になった際も、四国の個体群は対象から除かれた</li>
        <li>九州のツキノワグマは、最後の確実な捕獲記録が 1957 年。環境省は 2012 年に「すでに絶滅している」としてレッドリストから削除した</li>
        <li>環境省の集計では、近畿・紀伊半島・東中国・西中国の出没情報数は 2024 年度が直近 5 年で最多だった</li>
      </ul>

      <h2 id="kii">近畿 — 紀伊半島と近畿北部</h2>
      <ul>
        <li>
          <strong>紀伊半島</strong>:
          奈良県・三重県・和歌山県にまたがる紀伊山地。生息数が少ないことから保護の対象とされ、狩猟は禁止されてきた。
          生息数の推定は調査方法による幅が大きく、3 県で新たな推定が進められている。
        </li>
        <li>
          <strong>登山域</strong>:
          大峰奥駈道・大台ヶ原・八経ヶ岳など、紀伊山地の山深いエリアは生息地。
        </li>
        <li>
          <strong>近畿北部</strong>:
          京都府北部・滋賀県・兵庫県北部などにも生息し、出没がある。
        </li>
      </ul>

      <h2 id="chugoku">中国地方 — 東中国・西中国の個体群</h2>
      <ul>
        <li>
          <strong>東中国地域</strong>:
          兵庫・岡山・鳥取の県境の山地 (氷ノ山・扇ノ山周辺など) に分布する個体群。
        </li>
        <li>
          <strong>西中国地域</strong>:
          島根・広島・山口にまたがる中国山地西部の個体群。
          2025 年度の調査で推定 690〜1,290 頭 (中央値 950 頭) とされている (前回調査の中央値は 1,307 頭)。
        </li>
        <li>
          <strong>地域の取り組み</strong>:
          県境をまたぐ個体群のため、複数県が連携して管理計画を運用している。
        </li>
        <li>
          <strong>近年の傾向</strong>:
          人里への出没・農業被害があり、捕獲と保護のバランスが議論になっている
          (<Link href="/articles/culling-debate">クマ駆除をめぐる議論</Link>)。
        </li>
      </ul>

      <h2 id="shikoku">四国 — 剣山系の絶滅寸前個体群</h2>
      <ul>
        <li>
          <strong>分布</strong>:
          徳島県・高知県にまたがる剣山山系とその周辺のみ。
          血縁解析による推定は 16〜24 頭 (2017 年時点)。
        </li>
        <li>
          <strong>最近の調査</strong>:
          2025 年の調査では少なくとも 25 頭が識別され、その年生まれの子を連れた親子が 2 組確認された。
          ただし分布はなお限られた地域にとどまるとみられている。
        </li>
        <li>
          <strong>登山域</strong>:
          剣山・三嶺周辺の樹林帯。遭遇の可能性は低いが、見かけても近づかない・追いかけないのが原則。
        </li>
        <li>
          <strong>保全対策</strong>:
          国 (環境省・林野庁) と研究機関が連携し、自動撮影カメラなどで生息状況を調べている。
        </li>
      </ul>

      <h2 id="kyushu">九州 — すでに絶滅</h2>
      <ul>
        <li>
          <strong>最後の記録</strong>:
          九州のツキノワグマの最後の確実な捕獲記録は 1957 年。
        </li>
        <li>
          <strong>環境省の判断</strong>:
          1987 年に大分県で捕獲された個体は九州以外から持ち込まれた個体と判明しており、
          環境省は 2012 年のレッドリスト見直しで「すでに絶滅していると考えられる」としてリストから削除した。
        </li>
        <li>
          <strong>目撃情報</strong>:
          祖母・傾山系などで目撃情報が寄せられたことはあるが、生息を裏づける証拠は見つかっていない。
        </li>
      </ul>

      <h2 id="what-to-do">西日本でハイクするときの構え方</h2>
      <p>
        遭遇を防ぐ方法も、遭遇したときの対処も、他の地域と同じです。
      </p>
      <ul>
        <li>
          <strong>遭遇確率は地域で違うが、ゼロではない</strong>:
          基本対策 (鈴・声・複数人) はそのまま実行。
        </li>
        <li>
          <strong>遭遇したときの対処は全国共通</strong>:
          走らない・背を向けない・クマを見ながらゆっくり離れる。突進されたらクマよけスプレー。
          詳しくは<Link href="/articles/encounter">クマに遭遇したら</Link>。
        </li>
        <li>
          <strong>目撃情報を自治体に伝える</strong>:
          生息状況の把握に役立ちます。
          くまウォッチの<Link href="/submit">投稿フォーム</Link>でも共有可能。
        </li>
        <li>
          <strong>子グマを見ても近づかない</strong>:
          近くに母グマがいる可能性が高い。速やかに離れ、自治体に報告。
        </li>
        <li>
          <strong>餌付けをしない・ゴミを残さない</strong>:
          人の食べ物の味を覚えたクマは人里に出やすくなり、捕獲されることにつながります。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "西日本でクマよけスプレーは要らない?",
            a: (
              <>
                生息地の山に入るなら携行をおすすめします。
                まずは鈴・声・複数人で「出会わないこと」を優先し、
                スプレーは突進されたときなど身を守るための最後の手段として使います。
              </>
            ),
            aText:
              "生息地の山に入るなら携行をおすすめします。まずは鈴・声・複数人で出会わないことを優先し、スプレーは突進されたときなど身を守るための最後の手段として使います。",
          },
          {
            q: "九州で「クマを見た」と聞いたけど?",
            a: (
              <>
                環境省は九州のツキノワグマをすでに絶滅したと判断しています。
                目撃情報が寄せられたことはありますが、生息を裏づける証拠は見つかっていません。
                明確な写真・痕跡があれば自治体に連絡してください。
              </>
            ),
            aText:
              "環境省は九州のツキノワグマをすでに絶滅したと判断しています。目撃情報が寄せられたことはありますが、生息を裏づける証拠は見つかっていません。明確な写真・痕跡があれば自治体に連絡してください。",
          },
          {
            q: "四国の剣山に登るとき、クマ鈴は要る?",
            a: (
              <>
                個体数が極めて少ないため遭遇の可能性は低いものの、ゼロではありません。
                鈴や話し声で人の存在を知らせるのは、他の地域と同じく有効です。
                目撃したら近づかず、自治体に報告してください。
              </>
            ),
            aText:
              "遭遇の可能性は低いもののゼロではありません。鈴や話し声で人の存在を知らせるのは他の地域と同じく有効です。目撃したら近づかず、自治体に報告してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "紀伊半島・東中国・西中国・四国山地の個体群は「絶滅のおそれのある地域個体群」。",
          "四国は推定 16〜24 頭 (2017 年時点) と特に少なく、指定管理鳥獣の対象外。",
          "九州のツキノワグマは最後の確実な記録が 1957 年。2012 年に絶滅と判断。",
          "四国以外の多くの地域では回復がみられ、近年は出没も増えている。",
          "遭遇時の対処は全国共通。目撃情報は自治体に伝えて生息状況の把握に協力を。",
        ]}
        footer="西日本のクマは、被害を防ぐことと、少ない個体群を守ることの両方が求められています。"
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
