import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("hokkaido-bears")!;

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
        <strong>結論</strong>: 北海道のヒグマは推定約 1.2 万頭で、1990 年度の 2 倍以上に増えています。
        本州のツキノワグマより<strong>体がはるかに大きく</strong>、襲われたときの被害も重くなりがちです。
        近年は札幌・旭川など都市近郊への出没も増えており、通勤・通学・観光のいずれでも基本知識が必要です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            北海道のヒグマは<strong>推定約1.2万頭</strong>。1990年度の2倍以上に増えた。
          </>,
          <>
            本州のツキノワグマより<strong>体がはるかに大きい</strong>。遭遇時の基本対処は共通。
          </>,
          <>
            <strong>札幌・旭川など都市近郊への出没も増加</strong>。通勤・観光でも基本知識が必要。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "ezohiguma", title: "エゾヒグマとは" },
          { id: "population", title: "個体数と分布の現状" },
          { id: "urban", title: "都市近郊への出没" },
          { id: "attack-pattern", title: "ヒグマの襲撃パターン" },
          { id: "ki-spots", title: "北海道で特に注意するエリア" },
          { id: "tourist", title: "観光・登山での備え" },
          { id: "different", title: "ツキノワグマとの対処の違い" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="ezohiguma">エゾヒグマとは</h2>
      <p>
        北海道に生息するヒグマは亜種「エゾヒグマ」とされ、ユーラシア・北米のヒグマと同じ種です。
        日本最大の陸上哺乳類で、札幌市の資料ではオスの体長は約 2m、体重は約 150〜400kg とされています。
      </p>
      <p>
        本州・四国のツキノワグマと比べて体がはるかに大きく、襲われたときの被害も重くなりがちです。詳細は <Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link>。
      </p>

      <h2 id="population">個体数と分布の現状</h2>
      <p>
        北海道の推定では、ヒグマの生息数は 2022 年度末で約 1 万 2,200 頭。
        1990 年度の約 5,200 頭から 2 倍以上に増えています。
      </p>
      <ul>
        <li>分布: 北海道の森林のほぼ全域 (市街地の近くにも出る)</li>
        <li>知床半島は世界でも有数の高密度生息地とされる</li>
        <li>一方、石狩西部・天塩・増毛地方の個体群は、環境省レッドリストで「絶滅のおそれのある地域個体群」に掲載されてきた</li>
        <li>人身被害: 死傷者は 2021 年度に過去最多の 14 人 (北海道集計)</li>
      </ul>

      <h2 id="urban">都市近郊への出没</h2>
      <p>
        札幌・旭川などの都市近郊でも、ヒグマの出没が問題になっています。
      </p>
      <ul>
        <li>2021 年 6 月には札幌市東区の住宅街にヒグマが現れ、4 人が負傷した</li>
        <li>住宅街・公園・大学キャンパスでの目撃</li>
        <li>河川沿いの林や緑地を伝って市街地に入ってくると考えられている</li>
        <li>子グマを連れた母グマの市街地侵入も</li>
      </ul>
      <p>
        「都市部だから安全」とは言えない時代になっています。札幌市民でも通勤・散歩でヒグマに遭遇する可能性があります。
      </p>

      <h2 id="attack-pattern">ヒグマの襲撃パターン</h2>
      <p>
        クマの攻撃には大きく 2 つのパターンがあります。これはツキノワグマでもヒグマでも同じです。
      </p>
      <ul>
        <li>
          <strong>防衛的な攻撃</strong>:
          驚かせた・子連れ・餌の近くなど、身を守るための攻撃。最も多いパターン。
          接触が避けられなければ、うつ伏せになり両手で首の後ろを守る (リュックは背負ったまま)
        </li>
        <li>
          <strong>捕食的な攻撃</strong>:
          つけ回す・伏せても攻撃が続く・引きずる・テントに入ってくるなど執拗な攻撃。
          三毛別事件 (1915) や福岡大ワンゲル事件 (1970) が知られる。<strong>顔や鼻を狙って反撃</strong>
        </li>
      </ul>
      <p>
        突進されたらまずクマよけスプレー。防衛的な攻撃なら防御姿勢、伏せても攻撃が続くなど執拗な攻撃なら反撃に切り替えます。
        歴史的事件は <Link href="/articles/historic-incidents">過去の重大事故から学ぶ</Link> を参照。
      </p>

      <h2 id="ki-spots">北海道で特に注意するエリア</h2>
      <ul>
        <li><strong>知床半島</strong>: 世界有数のヒグマ高密度地域とされる。観光・トレッキングで遭遇しやすい</li>
        <li><strong>大雪山系・十勝岳</strong>: 登山者の遭遇報告多数</li>
        <li><strong>日高山脈</strong>: 福岡大ワンゲル事件の現場。山深くヒグマの生息地</li>
        <li><strong>札幌南区・西区の郊外</strong>: 河川沿いに市街地進入</li>
        <li><strong>旭川郊外・神居古潭</strong>: 山と市街地の境界</li>
        <li><strong>道東 (羅臼・標津・別海)</strong>: サケ漁の時期に活発化</li>
      </ul>

      <h2 id="tourist">観光・登山での備え</h2>
      <ul>
        <li>クマよけスプレーは現地で購入・レンタル (飛行機は機内持ち込み・預け入れとも不可)</li>
        <li>知床のクルーズ・トレッキングはガイド付きツアーを推奨</li>
        <li>キャンプ場での食料管理は本州以上に厳しく (<Link href="/articles/camping">キャンプ場のクマ対策</Link>)</li>
        <li>ホテル・ロッジでも生ゴミ・コンポスト管理が重要</li>
        <li>レンタカー利用時は車外駐車中の食料放置 NG</li>
      </ul>

      <h2 id="different">ツキノワグマとの対処の違い</h2>
      <p>
        遭遇したときの基本 (走らない・背を向けない・クマを見ながらゆっくり離れる・突進されたらスプレー) はツキノワグマと同じです。
        違うのは体の大きさです。
      </p>
      <ul>
        <li>
          <strong>体格差が大きい</strong>:
          襲われたときの被害が重くなりがちで、素手での抵抗はさらに難しい
        </li>
        <li>
          <strong>防御姿勢と反撃の使い分けは同じ</strong>:
          防衛的な攻撃なら防御姿勢、執拗・捕食的な攻撃なら反撃
        </li>
        <li>
          <strong>クマよけスプレーを必ず携行</strong>:
          出会わない工夫に加え、最後の備えとしてすぐ取り出せる位置に
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "札幌に住んでいるが、ヒグマと遭う可能性はある?",
            a: (
              <>
                あります。南区・西区・手稲区の山際や河川沿いでは目撃情報が定期的に出ます。出勤前や日課の散歩時間にも注意し、早朝・夕方の薄暗い時間帯は警戒度を上げてください。
              </>
            ),
            aText:
              "あります。南区・西区・手稲区の山際や河川沿いでは目撃情報が定期的に出ます。出勤前や日課の散歩時間にも注意し、早朝・夕方の薄暗い時間帯は警戒度を上げてください。",
          },
          {
            q: "知床観光ではどのくらい警戒すべき?",
            a: (
              <>
                世界有数のヒグマ高密度地域とされるエリアです。観光客向けトレッキングは原則ガイド同行で、ガイド無しでの単独登山は推奨されません。クルーズ船での海上観察は安全な選択肢です。
              </>
            ),
            aText:
              "世界有数のヒグマ高密度地域とされるエリアです。観光客向けトレッキングは原則ガイド同行で、ガイド無しでの単独登山は推奨されません。クルーズ船での海上観察は安全な選択肢です。",
          },
          {
            q: "本州でのクマ対策の知識は北海道で通用する?",
            a: (
              <>
                予防策 (鈴・スプレー・出没情報確認) も遭遇時の基本対処も、基本的に同じです。防衛的な攻撃なら防御姿勢、執拗・捕食的な攻撃なら反撃という使い分けも共通です。ただしヒグマは体がはるかに大きいため、出会わない工夫とスプレーの携行がいっそう重要です。
              </>
            ),
            aText:
              "予防策 (鈴・スプレー・出没情報確認) も遭遇時の基本対処も、基本的に同じです。防衛的な攻撃なら防御姿勢、執拗・捕食的な攻撃なら反撃という使い分けも共通です。ただしヒグマは体がはるかに大きいため、出会わない工夫とスプレーの携行がいっそう重要です。",
          },
          {
            q: "ヒグマの個体数は今後どうなる?",
            a: (
              <>
                北海道の推定では 1990 年度から 2 倍以上に増えており、今後の動向は道の管理計画のもとで調査・評価されています。人里との棲み分けの徹底が重要で、地域住民・観光客双方の備えが必要です。
              </>
            ),
            aText:
              "北海道の推定では1990年度から2倍以上に増えており、今後の動向は道の管理計画のもとで調査・評価されています。人里との棲み分けの徹底が重要で、地域住民・観光客双方の備えが必要です。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
